
import { useState, useEffect } from &quot;react&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { ReferralCode, ReferralStats, Referral, ReferralReward } from &quot;@/types/referrals&quot;;

export function useReferrals() {
  const { user } = useAuth();
  const [referralCode, setReferralCode] = useState<ReferralCode | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [referrals, setReferrals] = useState<Referral[]>([]);
  const [rewards, setRewards] = useState<ReferralReward[]>([]);
  const [stats, setStats] = useState<ReferralStats>({
    totalReferrals: 0,
    pendingReferrals: 0,
    completedReferrals: 0,
    totalRewards: 0});

  useEffect(() => {
    if (user) {
      fetchReferralCode();
      fetchReferralStats();
      fetchReferrals();
      fetchRewards();
    }
  }, [user]);

  const fetchReferralCode = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('referral_codes')
        .select('*')
        .eq('user_id', user?.id)
        .single();

      if (error) {
        console.error(&quot;Error fetching referral code:&quot;, error);
        return;
      }

      setReferralCode(data);
    } catch (error) {
      console.error(&quot;Error in fetchReferralCode:&quot;, error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchReferrals = async () => {
    try {
      if (!user) return;
      
      const { data, error } = await supabase
        .from('referrals')
        .select('*')
        .eq('referrer_id', user.id)
        .order('created_at', { ascending: false });
        
      if (error) throw error;
      
      setReferrals(data || []);
    } catch (error) {
      console.error(&quot;Error fetching referrals:&quot;, error);
    }
  };

  const fetchRewards = async () => {
    try {
      if (!user) return;
      
      const { data, error } = await supabase
        .from('referral_rewards')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });
        
      if (error) throw error;
      
      setRewards(data || []);
    } catch (error) {
      console.error(&quot;Error fetching rewards:&quot;, error);
    }
  };

  const fetchReferralStats = async () => {
    try {
      if (!user) return;
      
      // Get total referrals
      const { data: referrals, error: refError } = await supabase
        .from('referrals')
        .select('id, status')
        .eq('referrer_id', user.id);
      
      if (refError) throw refError;
      
      // Get rewards
      const { data: rewards, error: rewardsError } = await supabase
        .from('referral_rewards')
        .select('amount')
        .eq('user_id', user.id);
        
      if (rewardsError) throw rewardsError;
      
      // Calculate stats
      const totalReferrals = referrals ? referrals.length : 0;
      const pendingReferrals = referrals ? referrals.filter(r => r.status === 'pending').length : 0;
      const completedReferrals = referrals ? referrals.filter(r => r.status === 'completed').length : 0;
      
      const totalRewards = rewards ? rewards.reduce((sum, item) => {
        return sum + (item.amount || 0);
      }, 0) : 0;
      
      setStats({
        totalReferrals,
        pendingReferrals,
        completedReferrals,
        totalRewards
      });
      
    } catch (error) {
      console.error(&quot;Error fetching referral stats:&quot;, error);
    }
  };

  const generateReferralCode = async () => {
    try {
      if (!user) {
        toast({
          title: &quot;Authentication required&quot;,
          description: &quot;You need to be logged in to generate a referral code&quot;,
          variant: &quot;destructive&quot;});
        return;
      }

      const { data, error } = await supabase.rpc('generate_referral_code', {
        user_id: user.id
      });

      if (error) throw error;

      toast({
        title: &quot;Success!&quot;,
        description: &quot;Your referral code has been generated&quot;,
        variant: &quot;success&quot;});

      // Refresh the code
      fetchReferralCode();
      
      return data;
    } catch (error: any) {
      console.error(&quot;Error generating referral code:&quot;, error);
      toast({
        title: &quot;Error generating code&quot;,
        description: error.message || &quot;There was a problem generating your referral code&quot;,
        variant: &quot;destructive&quot;});
    }
  };

  // Get the referral link for the current user
  const getReferralLink = () => {
    if (!referralCode) return "&quot;;
    
    const baseUrl = window.location.origin;
    return `${baseUrl}/?ref=${referralCode.code}`;
  };

  // Copy the referral link to clipboard
  const copyReferralLink = () => {
    const link = getReferralLink();
    if (link) {
      navigator.clipboard.writeText(link);
      toast({
        title: &quot;Copied!&quot;,
        description: &quot;Referral link copied to clipboard&quot;,
        variant: &quot;success&quot;});
    } else {
      toast({
        title: &quot;Cannot copy link&quot;,
        description: &quot;Please generate a referral code first&quot;,
        variant: &quot;destructive&quot;});
    }
  };

  // Share on social media platforms
  const shareOnSocialMedia = (platform: 'twitter' | 'facebook' | 'linkedin') => {
    const link = getReferralLink();
    const text = &quot;Join Zion AI marketplace for AI talent and opportunities!&quot;;
    
    if (!link) {
      toast({
        title: &quot;Cannot share&quot;,
        description: &quot;Please generate a referral code first&quot;,
        variant: &quot;destructive"});
      return;
    }
    
    let shareUrl = '';
    
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(link)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(link)}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank');
    }
  };

  return {
    referralCode,
    isLoading,
    stats,
    referrals, // Added this property
    rewards,   // Added this property
    generateReferralCode,
    getReferralLink,
    copyReferralLink,
    shareOnSocialMedia,
    fetchReferralStats,
    fetchReferrals, // Added this method for refreshing referrals
    fetchRewards,   // Added this method for refreshing rewards
  };
}
