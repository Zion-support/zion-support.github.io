

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
        .from('referral_codes')
        .select('*')
        .eq('user_id', user?.id)
        .single();

      if (error) {_return;}

      setReferralCode(data);
    } catch (error) {} finally {_setIsLoading(false);}
  };

  const _fetchReferrals = async () => {_try {
      if (!user) return;
      
      const { data, _error} = await supabase
        .from('referrals')
        .select('*')
        .eq('referrer_id', user.id)
        .order('created_at', {_ascending: false});
        
      if (error) throw error;
      
      setReferrals(data || []);
    } catch (error) {}
  };

  const _fetchRewards = async () => {_try {
      if (!user) return;
      
      const { data, _error} = await supabase
        .from('referral_rewards')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', {_ascending: false});
        
      if (error) throw error;
      
      setRewards(data || []);
    } catch (error) {}
  };

  const _fetchReferralStats = async () => {_try {
      if (!user) return;
      
      // Get total referrals
      const { data: referrals, _error: refError} = await supabase
        .from('referrals')
        .select('id, status')
        .eq('referrer_id', user.id);
      
      if (refError) throw refError;
      
      // Get rewards
      const {_data: rewards, _error: rewardsError} = await supabase
        .from('referral_rewards')
        .select('amount')
        .eq('user_id', user.id);
        
      if (rewardsError) throw rewardsError;
      
      // Calculate stats
      const _totalReferrals = referrals ? referrals.length : 0;
      const _pendingReferrals = referrals ? referrals.filter(r => r.status === 'pending').length : 0;
      const _completedReferrals = referrals ? referrals.filter(r => r.status === 'completed').length : 0;
      
      const _totalRewards = rewards ? rewards.reduce(_(sum, _item) => {_return sum + (item.amount || 0);}, 0) : 0;
      
      setStats({_totalReferrals, _pendingReferrals, _completedReferrals, _totalRewards});
      
    } catch (error) {}
  };

  const _generateReferralCode = async () => {_try {
      if (!user) {
        toast({
          title: "Authentication required", _description: "You need to be logged in to generate a referral code", _variant: "destructive"});
        return;
      }

      const {_data, _error} = await supabase.rpc('generate_referral_code', {_user_id: user.id});

      if (error) throw error;

      toast({_title: "Success!", _description: "Your referral code has been generated", _variant: "success"});

      // Refresh the code
      fetchReferralCode();
      
      return data;
    } catch (error: unknown) {_toast({
        title: "Error generating code", _description: error.message || "There was a problem generating your referral code", _variant: "destructive"});
    }
  };

  // Get the referral link for the current user
  const _getReferralLink = () => {_if (!referralCode) return "";
    
    const _baseUrl = window.location.origin;
    return `${baseUrl}/?ref=${_referralCode.code}`;
  };

  // Copy the referral link to clipboard
  const _copyReferralLink = () => {_const _link = getReferralLink();
    if (link) {
      navigator.clipboard.writeText(link);
      toast({
        title: "Copied!", _description: "Referral link copied to clipboard", _variant: "success"});
    } else {_toast({
        title: "Cannot copy link", _description: "Please generate a referral code first", _variant: "destructive"});
    }
  };

  // Share on social media platforms
  const _shareOnSocialMedia = (_platform: 'twitter' | 'facebook' | 'linkedin') => {_const _link = getReferralLink();
    const _text = "Join Zion AI marketplace for AI talent and opportunities!";
    
    if (!link) {
      toast({
        title: "Cannot share", _description: "Please generate a referral code first", _variant: "destructive"});
      return;
    }
    
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
}
