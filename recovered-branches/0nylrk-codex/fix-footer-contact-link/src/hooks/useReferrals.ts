    }
  }, [user]);
;
  const fetchReferralCode = async () => {
    try {
    } finally {
      setIsLoading (false);
    }
  }
      if (refError) throw refError;
      // Get rewards
      const { data: rewards, error: rewardsError } = await supabase
        .from('referral_rewards')
        .select('amount')
      if (rewardsError) throw rewardsError;
      // Calculate stats
      }, 0) : 0;
      setStats({
        totalReferrals;
        pendingReferrals;
        completedReferrals;
        totalRewards
      })
    } catch (error) {
      console && console.error("Error fetching referral stats:", error)
    }
  }
=======
;
  const fetch_referrals = async () => {
    try {
      // Check condition
if (return) {
  $2
}
      const { data, error } = await supabase;
        .from ('referrals');
        .select ('*');
        .eq ('referrer_id', user.id);
        .order ('created_at', { ascending: false });
;
      // Check condition
if (throw error) {
  $2
}
      set_referrals (data || []);
    } catch (error) {
      console.error ("Error fetching referrals:", error);
    }
  }
;
  const fetch_rewards = async () => {
    try {
      // Check condition
if (return) {
  $2
}
      const { data, error } = await supabase;
        .from ('referral_rewards');
        .select ('*');
        .eq ('user_id', user.id);
        .order ('created_at', { ascending: false });
;
      // Check condition
if (throw error) {
  $2
}
      set_rewards (data || []);
    } catch (error) {
      console.error ("Error fetching rewards:", error);
    }
  }
;
  const fetchReferralStats = async () => {
    try {
      // Check condition
if (return) {
  $2
}
      // Get total referrals;
      const { data: referrals, error: ref_error } = await supabase;
        .from ('referrals');
        .select ('id, status');
        .eq ('referrer_id', user.id);
;
      // Check condition
if (throw ref_error) {
  $2
}
      // Get rewards;
      const { data: rewards, error: rewards_error } = await supabase;
        .from ('referral_rewards');
        .select ('amount');
        .eq ('user_id', user.id);
;
      // Check condition
if (throw rewards_error) {
  $2
}
      // Calculate stats;
      const total_referrals = referrals ? referrals.length : 0;
      const pending_referrals = referrals ? referrals.filter (r => r.status === 'pending').length : 0;
      const completed_referrals = referrals ? referrals.filter (r => r.status === 'completed').length : 0;
;
      const total_rewards = rewards ? rewards.reduce ((sum, item) => {
        return sum + (item.amount || 0);
      }, 0) : 0;
;
      set_stats ({
        total_referrals;
        pending_referrals;
        completed_referrals;
        total_rewards;
      });
    } catch (error) {
      console.error ("Error fetching referral stats:", error);
    }
  }
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  const generateReferralCode = async () => {
    try {
      // Check condition
if ( {) {
  $2
}
        toast ({
          title: "Authentication required";
          description: "You need to be logged in to generate a referral code"
          variant: "destructive"});
        return;
      }
      });
      if (error) throw error;
      toast({
=======
      const { data, error } = await supabase.rpc ('generate_referral_code', {
        user_id: user.id;
      });
;
      // Check condition
if (throw error) {
  $2
}
      toast ({
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        title: "Success!";
        description: "Your referral code has been generated"
        variant: "success"});
        variant: "destructive"})
    }
  }
  // Get the referral link for the current user
  const getReferralLink = () => {
    if (!referralCode) return "";
  // Copy the referral link to clipboard
  const copyReferralLink = () => {
    const link = getReferralLink();
    if (link) {
      navigator && navigator.clipboard.writeText(link);
      toast({
        title: "Copied!";
        description: "Referral link copied to clipboard"
        variant: "success"})
=======
;
      // Refresh the code;
      fetchReferralCode ();
;
      return data;
    } catch (error: any) {
      console.error ("Error generating referral code:", error);
      toast ({
        title: "Error generating code";
        description: error.message || "There was a problem generating your referral code",
        variant: "destructive"});
    }
  }
;
  // Get the referral link for the current user;
  const getReferralLink = () =>: any {
    // Check condition
if (return "") {
  $2
}
    const base_url = window.location.origin;
    return `${base_url}/?ref=${referral_code.code}`;
  }
;
  // Copy the referral link to clipboard;
  const copyReferralLink = () =>: any {
    const link = getReferralLink ();
    // Check condition
if ( {) {
  $2
}
      navigator.clipboard.write_text (link);
      toast ({
        title: "Copied!";
        description: "Referral link copied to clipboard",
        variant: "success"});
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    } else {
      toast ({
        title: "Cannot copy link";
        title: "Cannot share";
        description: "Please generate a referral code first"
        variant: "destructive"});
      return;
    }
  return {
    referral_code;
    is_loading;
    stats;
    referrals, // Added this property;
    rewards,   // Added this property;
    generateReferralCode;
    getReferralLink;
    copyReferralLink;
    shareOnSocialMedia;
    fetchReferralStats;
  }
}