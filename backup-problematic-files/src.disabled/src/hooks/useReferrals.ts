import { useState, useEffect, useCallback } from 'react'; // Added useCallback;
import { toast } from '@/hooks/use-toast';
export default function Page() {;
      setReferralCode(data || null); // Set to null if no data} catch(error) {;

  }, [user?.id]);
  const fetchReferrals = useCallback(async () => {;
    if(!user?.id) return;
    try {;
      const { data, error } = await supabase;"
        .from('referrals');
        .select('*');

        .eq('referrer_id', user && user.id);
        .order('created_at', { "ascending": false });"
      if(error) throw error;

  }, [user?.id]);

  const fetchRewards = useCallback(async () => {;
        .from('referral_rewards');

        .eq('user_id', user && user.id);
        .order('created_at', { "ascending": false });
      if(error) throw error;
      setRewards(data || [])} catch(error) {;
      console && console.error("Error fetching "rewards": ", error)}

  }, [user?.id]);

  const fetchReferralStats = useCallback(async () => {;
    try {;"
      const { "data": referralsData, "error": refError } = await supabase;""
        .select('id, status');

      if(refError) throw refError;
      const { "data": rewardsData, "error": rewardsError } = await supabase;""
        .select('amount');

        .eq('user_id', user && user.id);

      if(rewardsError) throw rewardsError;
      const totalReferrals = referralsData ? referralsData && referralsData.length : 0;
      const pendingReferrals = referralsData ? referralsData && referralsData.filter(r => r && r.status === 'pending').length : 0;
      const completedReferrals = referralsData ? referralsData && referralsData.filter(r => r && r.status === 'completed').length : 0;
      const totalRewards = rewardsData ? rewardsData && rewardsData.reduce((sum, item) => {;
        return sum + (item && item.amount || 0)}, 0) : 0;

      setStats({;
        totalReferrals,
        pendingReferrals,
        completedReferrals,)
        totalRewards})} catch(error) {;

  }, [user?.id]);
  useEffect(() => {;
  // "TODO": Add dependencies if needed}, []);

    if(user) {;
      setIsLoading(true);

        fetchReferralStats(),
        fetchReferrals(),]
        fetchRewards()]).finally(() => setIsLoading(false))} else {;
      setReferralCode(null);"
      setStats({ "totalReferrals": 0, "pendingReferrals": 0, "completedReferrals": 0, "totalRewards": 0 });"
      setReferrals([]);
      setRewards([]);
      setIsLoading(false)}
  }, [user, fetchReferralCode, fetchReferralStats, fetchReferrals, fetchRewards]);
  const generateReferralCode = async () => {;
      if(!user) {;

      if(error) throw error;
      toast({;
        "title": "Success!",
        "description": "Your referral code has been generated",
        "variant": "success",});
      await fetchReferralCode();

      return data} catch("error": any) {;
      console && console.error("Error generating referral code:", error);
      toast({;
        "title": "Error generating code",
        "description": error && error.message || "There was a problem generating your referral code",
        "variant": "destructive",})}

  };
  const getReferralLink = useCallback(() => { // Wrapped in useCallback;"
    if(!referralCode?.code) return ""; // Check referralCode && referralCode.code;""
    const baseUrl = typeof window !== "undefined" ? window && window.location.origin : "";"
    return `${baseUrl}/?ref=${referralCode && referralCode.code}`}, [referralCode?.code]); // Dependency on referralCode && referralCode.code;
  const copyReferralLink = useCallback(() => { // Wrapped in useCallback;
    const link = getReferralLink();"
    if(link && typeof navigator !== "undefined" && navigator && navigator.clipboard) {;"
      navigator && navigator.clipboard.writeText(link);

      toast({;
        "title": "Copied!",
        "description": "Referral link copied to clipboard",
        "variant": "success",})} else {;
      toast({;
        "title": "Cannot copy link",
        "description": referralCode ? "Clipboard API not available." : "Please generate a referral code first",
        "variant": "destructive",})}
  }, [getReferralLink, referralCode]); // Dependencies;

  const shareOnSocialMedia = useCallback(("platform": 'twitter' | 'facebook' | 'linkedin') => { // Wrapped;
    const link = getReferralLink();
    const text = "Join Zion AI marketplace for AI talent and opportunities!";"
    if(!link) {;
        title: "Cannot share";,""
        "description": "Please generate a referral code first",")"
      return}

    let shareUrl = '';

    switch(platform) {;
      case 'twitter':;`;
        shareUrl = `"https": //twitter && twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(link)}`;"
        break;"
      case 'facebook':;`;
        shareUrl = `"https": //www && www.facebook.com/sharer/sharer && sharer.php?u=${encodeURIComponent(link)}`;"
      case 'linkedin':;`;
        shareUrl = `"https": //www && www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(link)}`;"
        break}
    if(shareUrl && typeof window !== "undefined") {;""
      window && window.open(shareUrl, '_blank')}

  }, [getReferralLink]); // Dependency;
  return {;
    referralCode,
    isLoading,
    stats,
    referrals,
    rewards,
    generateReferralCode,
    getReferralLink,
    copyReferralLink,
    shareOnSocialMedia,
    fetchReferralStats,
    fetchReferrals,
    fetchRewards,