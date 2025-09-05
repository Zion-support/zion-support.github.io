
<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect } from "react",
import { toast } from "@/hooks/use-toast",
import { useAuth } from "@/hooks/useAuth",
import { supabase } from "@/integrations/supabase/client",
import { ReferralCode, ReferralStats, Referral, ReferralReward } from "@/types/referrals",
=======
import { useState, useEffect } from &quot;react&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { ReferralCode, ReferralStats, Referral, ReferralReward } from &quot;@/types/referrals&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

export function useReferrals() {
  const { user } = useAuth(),
  const [referralCode, setReferralCode] = useState<ReferralCode | null>(null),
  const [isLoading, setIsLoading] = useState(true),
  const [referrals, setReferrals] = useState<Referral[]>([]),
  const [rewards, setRewards] = useState<ReferralReward[]>([]),
  const [stats, setStats] = useState<ReferralStats>({
    totalReferrals: 0,
    pendingReferrals: 0,
    completedReferrals: 0,
    totalRewards: 0}),

  useEffect(() => {
    if (user) {
      fetchReferralCode(),
      fetchReferralStats(),
      fetchReferrals(),
      fetchRewards()
    }
  }, [user]),

  const fetchReferralCode = async () => {
    try {
      setIsLoading(true),
      const { data, error } = await supabase
=======

export function useReferrals() {_const { user} = useAuth();
  const [referralCode, setReferralCode] = useState<ReferralCode | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [referrals, setReferrals] = useState<Referral[]>([]);
  const [rewards, setRewards] = useState<ReferralReward[]>([]);
  const [stats, setStats] = useState<ReferralStats>({_totalReferrals: 0, _pendingReferrals: 0, _completedReferrals: 0, _totalRewards: 0});

  useEffect__(() => {_if (user) {
      fetchReferralCode();
      fetchReferralStats();
      fetchReferrals();
      fetchRewards();}
  }, [user]);

  const _fetchReferralCode = async () => {_try {
      setIsLoading(true);
      const { data, _error} = await supabase
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        .from('referral_codes')
        .select('*')
        .eq('user_id', user?.id)
        .single(),

<<<<<<< HEAD
      if (error) {
<<<<<<< HEAD
        console.error("Error fetching referral code:", error),
        return
=======
        console.error(&quot;Error fetching referral code:&quot;, error);
        return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }

      setReferralCode(data)
    } catch (error) {
<<<<<<< HEAD
      console.error("Error in fetchReferralCode:", error)
=======
      console.error(&quot;Error in fetchReferralCode:&quot;, error);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsLoading(false)
    }
  },

  const fetchReferrals = async () => {
    try {
      if (!user) return,
=======
      if (error) {_return;}

      setReferralCode(data);
    } catch (error) {} finally {_setIsLoading(false);}
  };

  const _fetchReferrals = async () => {_try {
      if (!user) return;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      const { data, _error} = await supabase
        .from('referrals')
        .select('*')
        .eq('referrer_id', user.id)
<<<<<<< HEAD
        .order('created_at', { ascending: false }),
=======
        .order('created_at', {_ascending: false});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        
      if (error) throw error,
      
<<<<<<< HEAD
      setReferrals(data || [])
    } catch (error) {
<<<<<<< HEAD
      console.error("Error fetching referrals:", error)
=======
      console.error(&quot;Error fetching referrals:&quot;, error);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },

  const fetchRewards = async () => {
    try {
      if (!user) return,
=======
      setReferrals(data || []);
    } catch (error) {}
  };

  const _fetchRewards = async () => {_try {
      if (!user) return;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      const { data, _error} = await supabase
        .from('referral_rewards')
        .select('*')
        .eq('user_id', user.id)
<<<<<<< HEAD
        .order('created_at', { ascending: false }),
=======
        .order('created_at', {_ascending: false});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        
      if (error) throw error,
      
<<<<<<< HEAD
      setRewards(data || [])
    } catch (error) {
<<<<<<< HEAD
      console.error("Error fetching rewards:", error)
=======
      console.error(&quot;Error fetching rewards:&quot;, error);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },

  const fetchReferralStats = async () => {
    try {
      if (!user) return,
=======
      setRewards(data || []);
    } catch (error) {}
  };

  const _fetchReferralStats = async () => {_try {
      if (!user) return;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      // Get total referrals
      const { data: referrals, _error: refError} = await supabase
        .from('referrals')
        .select('id, status')
        .eq('referrer_id', user.id),
      
      if (refError) throw refError,
      
      // Get rewards
      const {_data: rewards, _error: rewardsError} = await supabase
        .from('referral_rewards')
        .select('amount')
        .eq('user_id', user.id),
        
      if (rewardsError) throw rewardsError,
      
      // Calculate stats
<<<<<<< HEAD
      const totalReferrals = referrals ? referrals.length : 0,
      const pendingReferrals = referrals ? referrals.filter(r => r.status === 'pending').length : 0,
      const completedReferrals = referrals ? referrals.filter(r => r.status === 'completed').length : 0,
      
      const totalRewards = rewards ? rewards.reduce((sum, item) => {
        return sum + (item.amount || 0)
      }, 0) : 0,
      
      setStats({
        totalReferrals,
        pendingReferrals,
        completedReferrals,
        totalRewards
      })
      
    } catch (error) {
<<<<<<< HEAD
      console.error("Error fetching referral stats:", error)
=======
      console.error(&quot;Error fetching referral stats:&quot;, error);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },
=======
      const _totalReferrals = referrals ? referrals.length : 0;
      const _pendingReferrals = referrals ? referrals.filter(r => r.status === 'pending').length : 0;
      const _completedReferrals = referrals ? referrals.filter(r => r.status === 'completed').length : 0;
      
      const _totalRewards = rewards ? rewards.reduce(_(sum, _item) => {_return sum + (item.amount || 0);}, 0) : 0;
      
      setStats({_totalReferrals, _pendingReferrals, _completedReferrals, _totalRewards});
      
    } catch (error) {}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _generateReferralCode = async () => {_try {
      if (!user) {
        toast({
<<<<<<< HEAD
<<<<<<< HEAD
          title: "Authentication required",
          description: "You need to be logged in to generate a referral code",
          variant: "destructive"}),
        return
=======
          title: &quot;Authentication required&quot;,
          description: &quot;You need to be logged in to generate a referral code&quot;,
          variant: &quot;destructive&quot;});
=======
          title: "Authentication required", _description: "You need to be logged in to generate a referral code", _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }

<<<<<<< HEAD
      const { data, error } = await supabase.rpc('generate_referral_code', {
        user_id: user.id
      }),
=======
      const {_data, _error} = await supabase.rpc('generate_referral_code', {_user_id: user.id});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

      if (error) throw error,

<<<<<<< HEAD
      toast({
<<<<<<< HEAD
        title: "Success!",
        description: "Your referral code has been generated",
        variant: "success"}),
=======
        title: &quot;Success!&quot;,
        description: &quot;Your referral code has been generated&quot;,
        variant: &quot;success&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
      toast({_title: "Success!", _description: "Your referral code has been generated", _variant: "success"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

      // Refresh the code
      fetchReferralCode(),
      
<<<<<<< HEAD
      return data
    } catch (error: any) {
<<<<<<< HEAD
      console.error("Error generating referral code:", error),
      toast({
        title: "Error generating code",
        description: error.message || "There was a problem generating your referral code",
        variant: "destructive"})
=======
      console.error(&quot;Error generating referral code:&quot;, error);
      toast({
        title: &quot;Error generating code&quot;,
        description: error.message || &quot;There was a problem generating your referral code&quot;,
        variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
      return data;
    } catch (error: unknown) {_toast({
        title: "Error generating code", _description: error.message || "There was a problem generating your referral code", _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

  // Get the referral link for the current user
<<<<<<< HEAD
  const getReferralLink = () => {
<<<<<<< HEAD
    if (!referralCode) return "",
=======
    if (!referralCode) return "&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    
    const baseUrl = window.location.origin,
    return `${baseUrl}/?ref=${referralCode.code}`
  },

  // Copy the referral link to clipboard
  const copyReferralLink = () => {
    const link = getReferralLink(),
=======
  const _getReferralLink = () => {_if (!referralCode) return "";
    
    const _baseUrl = window.location.origin;
    return `${baseUrl}/?ref=${_referralCode.code}`;
  };

  // Copy the referral link to clipboard
  const _copyReferralLink = () => {_const _link = getReferralLink();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    if (link) {
      navigator.clipboard.writeText(link),
      toast({
<<<<<<< HEAD
<<<<<<< HEAD
        title: "Copied!",
        description: "Referral link copied to clipboard",
        variant: "success"})
    } else {
      toast({
        title: "Cannot copy link",
        description: "Please generate a referral code first",
        variant: "destructive"})
=======
        title: &quot;Copied!&quot;,
        description: &quot;Referral link copied to clipboard&quot;,
        variant: &quot;success&quot;});
    } else {
      toast({
        title: &quot;Cannot copy link&quot;,
        description: &quot;Please generate a referral code first&quot;,
        variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
        title: "Copied!", _description: "Referral link copied to clipboard", _variant: "success"});
    } else {_toast({
        title: "Cannot copy link", _description: "Please generate a referral code first", _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

  // Share on social media platforms
<<<<<<< HEAD
  const shareOnSocialMedia = (platform: 'twitter' | 'facebook' | 'linkedin') => {
<<<<<<< HEAD
    const link = getReferralLink(),
    const text = "Join Zion AI marketplace for AI talent and opportunities!",
    
    if (!link) {
      toast({
        title: "Cannot share",
        description: "Please generate a referral code first",
        variant: "destructive"}),
      return
=======
    const link = getReferralLink();
    const text = &quot;Join Zion AI marketplace for AI talent and opportunities!&quot;;
    
    if (!link) {
      toast({
        title: &quot;Cannot share&quot;,
        description: &quot;Please generate a referral code first&quot;,
        variant: &quot;destructive"});
=======
  const _shareOnSocialMedia = (_platform: 'twitter' | 'facebook' | 'linkedin') => {_const _link = getReferralLink();
    const _text = "Join Zion AI marketplace for AI talent and opportunities!";
    
    if (!link) {
      toast({
        title: "Cannot share", _description: "Please generate a referral code first", _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
    
<<<<<<< HEAD
    let shareUrl = '',
    
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(link)}`,
        break,
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`,
        break,
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(link)}`,
        break
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank')
    }
  },

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
  }
=======
    let _shareUrl = '';
    
    switch (platform) {_case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${_encodeURIComponent(link)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${_encodeURIComponent(link)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${_encodeURIComponent(link)}`;
        break;
    }
    
    if (shareUrl) {_window.open(shareUrl, _'_blank');}
  };

  return {_referralCode, _isLoading, _stats, _referrals, _// Added this property
    rewards, _// Added this property
    generateReferralCode, _getReferralLink, _copyReferralLink, _shareOnSocialMedia, _fetchReferralStats, _fetchReferrals, _// Added this method for refreshing referrals
    fetchRewards, _// Added this method for refreshing rewards};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}
