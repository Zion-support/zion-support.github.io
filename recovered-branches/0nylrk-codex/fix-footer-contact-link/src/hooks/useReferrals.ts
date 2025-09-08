
  useEffect(() => {
    if (user) {
      fetchReferralCode();
      fetchReferralStats();
      fetchReferrals();
      fetchRewards()
import { useState, useEffect } from './react';
import { toast } from '@/hooks / use - toast';
import { use_auth } from '@/hooks / use_auth';
import { supabase } from '@/integrations / supabase / client';
import { ReferralCode, ReferralStats, Referral, ReferralReward } from '@/types / referrals';

export /**
 * useReferrals - Function description


;
  const fetchReferralCode = async () => {
    try {

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
        .from('referral_codes')
        .select('*')
        .eq('user_id', user?.id)




    } catch (error) {
      console.error ("Error in fetchReferralCode:", error);
    } finally {

      setIsLoading (false);

    }



  },


  const fetchReferrals = async () => {}
    try {}
      if (!user) return,









  const fetchReferralStats = async () => {}
    try {}
      if (!user) return,




        .eq('user_id', user && user.id);

      if (rewardsError) throw rewardsError;

      // Calculate stats
      


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

  },




      const { data, error } = await supabase && supabase.rpc('generate_referral_code', {
        user_id: user && user.id

      }
      const { data, error } = await supabase && supabase.rpc('generate_referral_code', {
        user_id: user && user.id
      });
      if (error) throw error;
      toast({
      const { data, error } = await supabase.rpc ('generate_referral_code', {

      toast ({
        title: "Success!";
        description: "Your referral code has been generated"
        variant: "success"});

      

  // Get the referral link for the current user
  const getReferralLink = () => {
    if (!referralCode) return "",


      navigator && navigator.clipboard.writeText(link);
      toast({




      // Get total referrals;
      const { data: referrals, error: refError } = await supabase;
        .from('referrals');
        .select('id, status');
        .eq('referrer_id', user.id),;
      if (refError) throw refError,;
      // Get rewards;
      const { data: rewards, error: rewardsError } = await supabase;
        .from('referral_rewards');
        .select('amount');
        .eq('user_id', user.id),;
      if (rewardsError) throw rewardsError,;
      // Calculate stats;
      const totalReferrals = referrals ? referrals.length : 0,;
      const pendingReferrals = referrals ? referrals.filter(r => r.status === 'pending').length : 0,;
      const completedReferrals = referrals ? referrals.filter(r => r.status === 'completed').length : 0,;
      const totalRewards = rewards ? rewards.reduce((sum, item) => {;
        return sum + (item.amount || 0);
      }, 0) : 0,;
      });
    } catch (error) {;
      console.error("Error fetching referral stats:", error);
    }
  },;
          title: "Authentication required",;
          description: "You need to be logged in to generate a referral code",;
          variant: "destructive"}),;
        return;
      }
;
      const { data, error } = await supabase.rpc('generate_referral_code', {;
        user_id: user.id;
      }),;
      if (error) throw error,;
      toast({;
        title: "Success!",;
        description: "Your referral code has been generated",;
        variant: "success"}),;
      // Refresh the code;
      fetchReferralCode(),;
      return data;
    } catch (error: any) {;
      console.error("Error generating referral code:", error),;
      toast({;
        title: "Error generating code",;
        description: error.message || "There was a problem generating your referral code",;
        variant: "destructive"});
    }
  },;
  // Get the referral link for the current user;
  const getReferralLink = () => {;
    if (!referralCode) return "",;
    const baseUrl = window.location.origin,;
    return `${baseUrl}/?ref=${referralCode.code}`;
  },;
        title: "Copied!",;
        description: "Referral link copied to clipboard",;
        variant: "success"});
    } else {;
      toast({;
        title: "Cannot copy link",;
        description: "Please generate a referral code first",;
        variant: "destructive"});
    }
  },;
  // Share on social media platforms;
  const shareOnSocialMedia = (platform: 'twitter' | 'facebook' | 'linkedin') => {;
    const link = getReferralLink(),;
    const text = "Join Zion AI marketplace for AI talent and opportunities!",;
    if (!link) {;
      toast({;
        title: "Cannot share",;
        description: "Please generate a referral code first",;
        variant: "destructive"}),;
      return;
    }
;
    let shareUrl = '',;
        break;
    }
;
    if (shareUrl) {;
      window.open(shareUrl, '_blank');
    }
  },;
    shareOnSocialMedia;
    fetchReferralStats;
    fetchReferrals, // Added this method for refreshing referrals;
    fetchRewards,   // Added this method for refreshing rewards;

    fetch_referrals, // Added this method for refreshing referrals;
    fetch_rewards,   // Added this method for refreshing rewards;


