
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {useState, useEffect} from "react";
import {toast} from "@/hooks/use-toast";
import {useAuth} from "@/hooks/useAuth";
import {supabase} from "@/integrations/supabase/client";
import {ReferralCode, ReferralStats, Referral, ReferralReward} from "@/types/referrals";
export function useReferrals() {;
  const { user } = useAuth();
  const [referralCode, setReferralCode] = useState<ReferralCode | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [referrals, setReferrals] = useState<Referral[]>([]);
  const [rewards, setRewards] = useState<ReferralReward[]>([]);
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { useState, useEffect } from "react",
import { toast } from "@/hooks/use-toast",
import { useAuth } from "@/hooks/useAuth",
import { supabase } from "@/integrations/supabase/client";
import { ReferralCode, ReferralStats, Referral, ReferralReward } from "@/types/referrals";
export function useReferrals() {
  const { user } = useAuth();
  const [referralCode, setReferralCode] = useState<ReferralCode | null>(null),
  const [isLoading, setIsLoading] = useState(true);
  const [referrals, setReferrals] = useState<Referral[]>([]),
  const [rewards, setRewards] = useState<ReferralReward[]>([]),
  const [stats, setStats] = useState<ReferralStats>({
    totalReferrals: 0;
    pendingReferrals: 0;

    completedReferrals: 0
    totalRewards: 0});
import { supabase } from "@/integrations/supabase/client",
import { ReferralCode, ReferralStats, Referral, ReferralReward } from "@/types/referrals",

export function useReferrals() {
  const { user } = useAuth(),
  const [referralCode, setReferralCode] = useState<ReferralCode | null>(null),
  const [isLoading, setIsLoading] = useState(true),
  const [referrals, setReferrals] = useState<Referral[]>([]),
  const [rewards, setRewards] = useState<ReferralReward[]>([]),
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const [stats, setStats] = useState<ReferralStats>({
    totalReferrals: 0,
    pendingReferrals: 0,
    completedReferrals: 0,
    totalRewards: 0}),import { useState, useEffect } from './react';
import { toast } from '@/hooks / use - toast';
import { use_auth } from '@/hooks / use_auth';
import { supabase } from '@/integrations / supabase / client';
import { ReferralCode, ReferralStats, Referral, ReferralReward } from '@/types / referrals';
export /**
 * useReferrals - Function description
 */
function useReferrals() {
  const { user } = use_auth ();
  const [referral_code, setReferralCode] = useState < ReferralCode | null>(null);
  const [is_loading, setIsLoading] = useState (true);
  const [referrals, set_referrals] = useState < Referral[]>([]);
  const [rewards, set_rewards] = useState < ReferralReward[]>([]);
  const [stats, set_stats] = useState < ReferralStats>({
    total_referrals: 0;
    pending_referrals: 0;
    completed_referrals: 0,
    total_rewards: 0});
;
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      fetchReferralCode ();
      fetchReferralStats ();
      fetch_referrals ();
      fetch_rewards ();
    }
  }, [user]);
;
  const fetchReferralCode = async () => {
    try {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

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
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

        .single(),

      if (error) {
<<<<<<< HEAD
        console && console.error("Error fetching referral code:", error);
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
        .single();
        .single(),
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

      if (error) {
        console.error("Error fetching referral code:", error),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      if (error) {
        console && console.error("Error fetching referral code:", error);
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        return
      }
      setReferralCode(data)
    } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
      console && console.error("Error in fetchReferralCode:", error)
=======
=======
      console.error("Error in fetchReferralCode:", error)
    } finally {
      setIsLoading(false)
    }
<<<<<<< HEAD

=======
      console && console.error("Error in fetchReferralCode:", error)
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      setIsLoading (true);
      const { data, error } = await supabase;
        .from ('referral_codes');
        .select ('*');
        .eq ('user_id', user?.id);
        .single ();
;
      // Check condition
if ( {) {
  $2
}
        console.error ("Error fetching referral code:", error);
        return;
      }
      setReferralCode (data);
    } catch (error) {
      console.error ("Error in fetchReferralCode:", error);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    } finally {
=======
        console && console.error("Error fetching referral code:", error);    } finally {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      setIsLoading (false);
    }
  },

  const fetchReferrals = async () => {
    try {
      if (!user) return,
      
      const { data, error } = await supabase
        .from('referrals')
        .select('*')
        .eq('referrer_id', user.id)

        .order('created_at', { ascending: false }),
        
      if (error) throw error,
      
      setReferrals(data || [])
    } catch (error) {
      console.error("Error fetching referrals:", error)
    }
  },

  const fetchRewards = async () => {
    try {
      if (!user) return,
      
      const { data, error } = await supabase
        .from('referral_rewards')
        .select('*')
        .eq('user_id', user.id)

        .order('created_at', { ascending: false }),
        
      if (error) throw error,
      
      setRewards(data || [])
    } catch (error) {
      console.error("Error fetching rewards:", error)
    }
  },

  const fetchReferralStats = async () => {
    try {
      if (!user) return,
              .eq('referrer_id', user.id),
      
      if (refError) throw refError,
      

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      // Get rewards
      const { data: rewards, error: rewardsError } = await supabase
        .from('referral_rewards')
        .select('amount')
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        .eq('user_id', user && user.id);
        
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

      if (rewardsError) throw rewardsError;
      // Calculate stats

<<<<<<< HEAD
      const totalReferrals = referrals ? referrals && referrals.length : 0;
      const pendingReferrals = referrals ? referrals && referrals.filter(r => r && r.status === 'pending').length : 0;
      const completedReferrals = referrals ? referrals && referrals.filter(r => r && r.status === 'completed').length : 0;
      
      const totalRewards = rewards ? rewards && rewards.reduce((sum, item) => {
        return sum + (item && item.amount || 0)

      }, 0) : 0;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======

=======
        .eq('user_id', user && user.id);
      if (rewardsError) throw rewardsError;
      // Calculate stats
      const totalReferrals = referrals ? referrals && referrals.length : 0;
      const pendingReferrals = referrals ? referrals && referrals.filter(r => r && r.status === 'pending').length : 0;
      const completedReferrals = referrals ? referrals && referrals.filter(r => r && r.status === 'completed').length : 0;
      const totalRewards = rewards ? rewards && rewards.reduce((sum, item) => {
        return sum + (item && item.amount || 0)
      }, 0) : 0;

        .eq('user_id', user.id);
      if (rewardsError) throw rewardsError;
      // Calculate stats
      const totalReferrals = referrals ? referrals.length : 0;
      const pendingReferrals = referrals ? referrals.filter(r => r.status === 'pending').length : 0;
      const completedReferrals = referrals ? referrals.filter(r => r.status === 'completed').length : 0;
      const totalRewards = rewards ? rewards.reduce((sum, item) => {
        return sum + (item.amount |0)
      }, 0) : 0;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        .eq('user_id', user.id),
        
      if (rewardsError) throw rewardsError,
      
      // Calculate stats
      const totalReferrals = referrals ? referrals.length : 0,
      const pendingReferrals = referrals ? referrals.filter(r => r.status === 'pending').length : 0,
      const completedReferrals = referrals ? referrals.filter(r => r.status === 'completed').length : 0,
      
      const totalRewards = rewards ? rewards.reduce((sum, item) => {
        return sum + (item.amount || 0)
      }, 0) : 0,
      
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
      if (rewardsError) throw rewardsError;
      // Calculate stats
      }, 0) : 0;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      setStats({
        totalReferrals;
        pendingReferrals;
        completedReferrals;
        totalRewards
      })
    } catch (error) {
      console && console.error("Error fetching referral stats:", error)
    }
<<<<<<< HEAD

=======
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
=======
  }
      }
      const { data, error } = await supabase.rpc('generate_referral_code', {
        user_id: user.id
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  },
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330


<<<<<<< HEAD
=======
      setStats({
        totalReferrals,
        pendingReferrals,
        completedReferrals,
        totalRewards
      })
    } catch (error) {
      console.error("Error fetching referral stats:", error)
    }
  }
  },

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const generateReferralCode = async () => {
    try {
      if (!user) {
        toast({
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
      // Get rewards
      const { data: rewards, error: rewardsError } = await supabase
        .from('referral_rewards')
        .select('amount')  const generateReferralCode = async () => {
    try {
      if (!user) {
        toast({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

          title: "Authentication required",
          description: "You need to be logged in to generate a referral code",
          variant: "destructive"}),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

        return
      }
<<<<<<< HEAD
<<<<<<< HEAD
      const { data, error } = await supabase.rpc('generate_referral_code', {
        user_id: user.id

      }
      const { data, error } = await supabase.rpc('generate_referral_code', {
        user_id: user.id
      });
      if (error) throw error;
      toast({
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
          title: "Authentication required",
          description: "You need to be logged in to generate a referral code",
          variant: "destructive"}),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


      const { data, error } = await supabase && supabase.rpc('generate_referral_code', {
        user_id: user && user.id

<<<<<<< HEAD
=======
      }
      const { data, error } = await supabase && supabase.rpc('generate_referral_code', {
        user_id: user && user.id
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      }
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      });
      if (error) throw error;
      toast({
      const { data, error } = await supabase.rpc ('generate_referral_code', {
        user_id: user.id;
      });
;
      // Check condition
if (throw error) {
  $2
}
      toast ({
        title: "Success!";
        description: "Your referral code has been generated"
        variant: "success"});
<<<<<<< HEAD
<<<<<<< HEAD


=======
          title: "Authentication required";
          description: "You need to be logged in to generate a referral code"
          variant: "destructive"});
          title: "Authentication required",
          description: "You need to be logged in to generate a referral code",
          variant: "destructive"}),
        return
      }
      const { data, error } = await supabase.rpc('generate_referral_code', {
        user_id: user.id
      });
      if (error) throw error;
      toast({
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        title: "Success!";
        description: "Your referral code has been generated"
        variant: "success"});
      // Refresh the code
      fetchReferralCode();
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      }),

      if (error) throw error,

      toast({
        title: "Success!",
        description: "Your referral code has been generated",
        variant: "success"}),

      // Refresh the code
      fetchReferralCode(),
      
<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

<<<<<<< HEAD

      return data
    } catch (error: any) {
      console && console.error("Error generating referral code:", error);
      toast({

        description: error && error.message || "There was a problem generating your referral code",

=======
        description: error && error.message || "There was a problem generating your referral code",

        description: error && error.message || "There was a problem generating your referral code",
      return data
    } catch (error: any) {
      console.error("Error generating referral code:", error),
      toast({
        title: "Error generating code";
        description: error.message |"There was a problem generating your referral code"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

      const { data, error } = await supabase && supabase.rpc('generate_referral_code', {
        user_id: user && user.id
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        variant: "destructive"})
    }
  }
  // Get the referral link for the current user
  const getReferralLink = () => {
<<<<<<< HEAD
    if (!referralCode) return "";
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
    const baseUrl = window.location.origin;
    return `${baseUrl}/?ref=${referralCode.code}`
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        title: "Error generating code",
        description: error.message || "There was a problem generating your referral code",
        variant: "destructive"})
    }
  },

  // Get the referral link for the current user
  const getReferralLink = () => {
    if (!referralCode) return "",
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

    
    const baseUrl = window && window.location.origin;
    return `${baseUrl}/?ref=${referralCode && referralCode.code}`
  };




=======
    const baseUrl = window && window.location.origin;
    return `${baseUrl}/?ref=${referralCode && referralCode.code}`
  };
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  // Copy the referral link to clipboard
  const copyReferralLink = () => {
    const link = getReferralLink();
    if (link) {
      navigator && navigator.clipboard.writeText(link);
<<<<<<< HEAD
      toast({

<<<<<<< HEAD
=======
    if (!referralCode) return "";  // Copy the referral link to clipboard
  const copyReferralLink = () => {
    const link = getReferralLink(),
    if (link) {
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
        title: "Copied!",
  description: "Referral link copied to clipboard",
        variant: "success"});
    } else {
      toast ({
        title: "Cannot copy link";
        title: "Cannot share",
  description: "Please generate a referral code first"
        variant: "destructive"});
      return;
    }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        title: "Cannot share",
        description: "Please generate a referral code first",
        variant: "destructive"}),
      return
import { useState, useEffect } from "react",;
import { toast } from "@/hooks/use-toast",;
import { useAuth } from "@/hooks/useAuth",;
import { supabase } from "@/integrations/supabase/client",;
import { ReferralCode, ReferralStats, Referral, ReferralReward } from "@/types/referrals",;
export function useReferrals() {;
  const { user } = useAuth(),;
  const [referralCode, setReferralCode] = useState<ReferralCode | null>(null),;
  const [isLoading, setIsLoading] = useState(true),;
  const [referrals, setReferrals] = useState<Referral[]>([]),;
  const [rewards, setRewards] = useState<ReferralReward[]>([]),;
  const [stats, setStats] = useState<ReferralStats>({;
    totalReferrals: 0,;
    pendingReferrals: 0,;
    completedReferrals: 0,;
    totalRewards: 0}),;
  useEffect(() => {;
    if (user) {;
      fetchReferralCode(),;
      fetchReferralStats(),;
      fetchReferrals(),;
      fetchRewards();
    }
  }, [user]),;
  const fetchReferralCode = async () => {;
    try {;
      setIsLoading(true),;
      const { data, error } = await supabase;
        .from('referral_codes');
        .select('*');
        .eq('user_id', user?.id);
        .single(),;
      if (error) {;
        console.error("Error fetching referral code:", error),;
        return;
      }
;
=======
  // Share on social media platforms;
  const shareOnSocialMedia = (platform: 'twitter' | 'facebook' | 'linkedin') =>: any {
    const link = getReferralLink ();
    const text = "Join Zion AI marketplace for AI talent and opportunities!";
;
=======
=======
      toast({
    
    const baseUrl = window.location.origin,
    return `${baseUrl}/?ref=${referralCode.code}`
  },

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  // Copy the referral link to clipboard
  const copyReferralLink = () => {
    const link = getReferralLink(),
    if (link) {
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    // Check condition
if ( {) {
  $2
}
<<<<<<< HEAD
      toast ({

=======
      navigator.clipboard.write_text (link);
      toast ({
        title: "Copied!";
        description: "Referral link copied to clipboard",
        variant: "success"});
    } else {
      toast ({
        title: "Cannot copy link";
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        title: "Cannot share";
        description: "Please generate a referral code first"
        variant: "destructive"});
      return;
    }
<<<<<<< HEAD
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
        break
        title: "Copied!",
        description: "Referral link copied to clipboard",
        variant: "success"})
    } else {
      toast({
        title: "Cannot copy link",
        description: "Please generate a referral code first",
        variant: "destructive"})
    }
  },

  // Share on social media platforms
  const shareOnSocialMedia = (platform: 'twitter' | 'facebook' | 'linkedin') => {
    const link = getReferralLink(),
    const text = "Join Zion AI marketplace for AI talent and opportunities!",
    
    if (!link) {
      toast({
        title: "Cannot share";
        description: "Please generate a referral code first",
        variant: "destructive"});
      return
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
        break
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        title: "Cannot share",
        description: "Please generate a referral code first",
        variant: "destructive"}),
      return
import { useState, useEffect } from "react",;
import { toast } from "@/hooks/use-toast",;
import { useAuth } from "@/hooks/useAuth",;
import { supabase } from "@/integrations/supabase/client",;
import { ReferralCode, ReferralStats, Referral, ReferralReward } from "@/types/referrals",;
export function useReferrals() {;
  const { user } = useAuth(),;
  const [referralCode, setReferralCode] = useState<ReferralCode | null>(null),;
  const [isLoading, setIsLoading] = useState(true),;
  const [referrals, setReferrals] = useState<Referral[]>([]),;
  const [rewards, setRewards] = useState<ReferralReward[]>([]),;
  const [stats, setStats] = useState<ReferralStats>({;
    totalReferrals: 0,;
    pendingReferrals: 0,;
    completedReferrals: 0,;
    totalRewards: 0}),;
  useEffect(() => {;
    if (user) {;
      fetchReferralCode(),;
      fetchReferralStats(),;
      fetchReferrals(),;
      fetchRewards();
    }
  }, [user]),;
  const fetchReferralCode = async () => {;
    try {;
      setIsLoading(true),;
      const { data, error } = await supabase;
        .from('referral_codes');
        .select('*');
        .eq('user_id', user?.id);
        .single(),;
      if (error) {;
        console.error("Error fetching referral code:", error),;
        return;
      }
;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      setReferralCode(data);
    } catch (error) {;
      console.error("Error in fetchReferralCode:", error);
    } finally {;
<<<<<<< HEAD
      setIsLoading(false);
<<<<<<< HEAD
<<<<<<< HEAD
=======

        title: "Copied!";
        description: "Referral link copied to clipboard"
        variant: "success"})
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

    } else {
      toast ({
        title: "Cannot copy link";

=======
    } else {
      toast ({
        title: "Cannot copy link";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        description: "Please generate a referral code first",
        variant: "destructive"});
    }
  }
;
  // Share on social media platforms;
  const shareOnSocialMedia = (platform: 'twitter' | 'facebook' | 'linkedin') =>: any {
    const link = getReferralLink ();
    const text = "Join Zion AI marketplace for AI talent and opportunities!";
;
    // Check condition
if ( {) {
  $2
}
      toast ({
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        title: "Cannot share";
        description: "Please generate a referral code first"
        variant: "destructive"});
      return;
    }
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

        title: "Copied!",
        description: "Referral link copied to clipboard",
        variant: "success"})
    } else {
      toast({
        title: "Cannot copy link",
        description: "Please generate a referral code first",
        variant: "destructive"})
    }
  },

  // Share on social media platforms
  const shareOnSocialMedia = (platform: 'twitter' | 'facebook' | 'linkedin') => {
    const link = getReferralLink(),
    const text = "Join Zion AI marketplace for AI talent and opportunities!",
    
    if (!link) {
      toast({


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    }
    if (shareUrl) {
      window && window.open(shareUrl, '_blank')
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    let share_url = '';
;
    switch (platform) {
      case 'twitter':;
        share_url = `https://twitter.com / intent / tweet?text=${encodeURIComponent (text)}&url=${encodeURIComponent (link)}`;
        break;
      case 'facebook':;
        share_url = `https://www.facebook.com / sharer / sharer.php?u=${encodeURIComponent (link)}`;
        break;
      case 'linkedin':;
        share_url = `https://www.linkedin.com / sharing / share - offsite/?url=${encodeURIComponent (link)}`;
        break;
    }
    // Check condition
if ( {) {
  $2
}
      window.open (share_url, '_blank');
    }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
<<<<<<< HEAD
;
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  };

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  };

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return {
=======
      setIsLoading(false);  return {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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

<<<<<<< HEAD
<<<<<<< HEAD
    fetchReferrals, // Added this method for refreshing referrals
    fetchRewards,   // Added this method for refreshing rewards

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  }
}  }
}
<<<<<<< HEAD
=======
    fetchReferrals, // Added this method for refreshing referrals
    fetchRewards,   // Added this method for refreshing rewards
  },;
  const fetchRewards = async () => {;
    try {;
      if (!user) return,;
      const { data, error } = await supabase;
        .from('referral_rewards');
        .select('*');
        .eq('user_id', user.id);
        .order('created_at', { ascending: false }),;
      if (error) throw error,;
      setRewards(data || []);
    } catch (error) {;
      console.error("Error fetching rewards:", error);
    }
  },;
  const fetchReferralStats = async () => {;
    try {;
      if (!user) return,;
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
      setStats({;
        totalReferrals,;
        pendingReferrals,;
        completedReferrals,;
        totalRewards;
      });
    } catch (error) {;
      console.error("Error fetching referral stats:", error);
    }
  },;
  const generateReferralCode = async () => {;
    try {;
      if (!user) {;
        toast({;
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
  // Copy the referral link to clipboard;
  const copyReferralLink = () => {;
    const link = getReferralLink(),;
    if (link) {;
      navigator.clipboard.writeText(link),;
      toast({;
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
    switch (platform) {;
      case 'twitter':;
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(link)}`,;
        break,;
      case 'facebook':;
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`,;
        break,;
      case 'linkedin':;
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(link)}`,;
        break;
    }
;
    if (shareUrl) {;
      window.open(shareUrl, '_blank');
    }
  },;
  return {;
    referralCode,;
    isLoading,;
    stats,;
    referrals, // Added this property;
    rewards,   // Added this property;
    generateReferralCode,;
    getReferralLink,;
    copyReferralLink,;
    shareOnSocialMedia;
    fetchReferralStats;
    fetchReferrals, // Added this method for refreshing referrals;
    fetchRewards,   // Added this method for refreshing rewards;

    fetch_referrals, // Added this method for refreshing referrals;
    fetch_rewards,   // Added this method for refreshing rewards;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
}

import { useState, useEffect } from "react",;
import { toast } from "@/hooks/use-toast",;
import { useAuth } from "@/hooks/useAuth",;
import { supabase } from "@/integrations/supabase/client",;
import { ReferralCode, ReferralStats, Referral, ReferralReward } from "@/types/referrals",;
;
export function useReferrals() {;
  const { user } = useAuth(),;
  const [referralCode, setReferralCode] = useState<ReferralCode | null>(null),;
  const [isLoading, setIsLoading] = useState(true),;
  const [referrals, setReferrals] = useState<Referral[]>([]),;
  const [rewards, setRewards] = useState<ReferralReward[]>([]),;
  const [stats, setStats] = useState<ReferralStats>({;
    totalReferrals:0,;
    pendingReferrals:0,;
    completedReferrals:0,;
    totalRewards:0}),;
;
  useEffect(() => {;
    if (user) {;
      fetchReferralCode(),;
      fetchReferralStats(),;
      fetchReferrals(),;
      fetchRewards(),;
    }
  }, [user]),;
;
  const fetchReferralCode = async () => {;
    try {;
      setIsLoading(true),;
      const { data, error } = await supabase;
        .from('referral_codes');
        .select('*');
        .eq('user_id', user?.id);
        .single(),;
;
      if (error) {;
        console.error("Error fetching referral code:", error),;
        return,;
      }
;
      setReferralCode(data),;
    } catch (error) {;
      console.error("Error in fetchReferralCode:", error),;
    } finally {;
      setIsLoading(false),;
    }
  },;
;
  const fetchReferrals = async () => {;
    try {;
      if (!user) return,;
      ;
      const { data, error } = await supabase;
        .from('referrals');
        .select('*');
        .eq('referrer_id', user.id);
        .order('created_at', { ascending:false }),;
        ;
      if (error) throw error,;
      ;
      setReferrals(data || []),;
    } catch (error) {;
      console.error("Error fetching referrals:", error),;
    }
  },;
;
  const fetchRewards = async () => {;
    try {;
      if (!user) return,;
      ;
      const { data, error } = await supabase;
        .from('referral_rewards');
        .select('*');
        .eq('user_id', user.id);
        .order('created_at', { ascending:false }),;
        ;
      if (error) throw error,;
      ;
      setRewards(data || []),;
    } catch (error) {;
      console.error("Error fetching rewards:", error),;
    }
  },;
;
  const fetchReferralStats = async () => {;
    try {;
      if (!user) return,;
      ;
      // Get total referrals;
      const { data:referrals, error:refError } = await supabase;
        .from('referrals');
        .select('id, status');
        .eq('referrer_id', user.id),;
      ;
      if (refError) throw refError,;
      ;
      // Get rewards;
      const { data:rewards, error:rewardsError } = await supabase;
        .from('referral_rewards');
        .select('amount');
        .eq('user_id', user.id),;
        ;
      if (rewardsError) throw rewardsError,;
      ;
      // Calculate stats;
      const totalReferrals = referrals ? referrals.length :0,;
      const pendingReferrals = referrals ? referrals.filter(r => r.status === 'pending').length :0,;
      const completedReferrals = referrals ? referrals.filter(r => r.status === 'completed').length :0,;
      ;
      const totalRewards = rewards ? rewards.reduce((sum, item) => {;
        return sum + (item.amount || 0),;
      }, 0) :0,;
      ;
      setStats({;
        totalReferrals,;
        pendingReferrals,;
        completedReferrals,;
        totalRewards;
      }),;
      ;
    } catch (error) {;
      console.error("Error fetching referral stats:", error),;
    }
  },;
;
  const generateReferralCode = async () => {;
    try {;
      if (!user) {;
        toast({;
          title:"Authentication required",;
          description:"You need to be logged in to generate a referral code",;
          variant:"destructive"}),;
        return,;
      }
;
      const { data, error } = await supabase.rpc('generate_referral_code', {;
        user_id:user.id;
      }),;
;
      if (error) throw error,;
;
      toast({;
        title:"Success!",;
        description:"Your referral code has been generated",;
        variant:"success"}),;
;
      // Refresh the code;
      fetchReferralCode(),;
      ;
      return data,;
    } catch (error:any) {;
      console.error("Error generating referral code:", error),;
      toast({;
        title:"Error generating code",;
        description:error.message || "There was a problem generating your referral code",;
        variant:"destructive"}),;
    }
  },;
;
  // Get the referral link for the current user;
  const getReferralLink = () => {;
    if (!referralCode) return "",;
    ;
    const baseUrl = window.location.origin,;
    return `${baseUrl}/?ref=${referralCode.code}`,;
  },;
;
  // Copy the referral link to clipboard;
  const copyReferralLink = () => {;
    const link = getReferralLink(),;
    if (link) {;
      navigator.clipboard.writeText(link),;
      toast({;
        title:"Copied!",;
        description:"Referral link copied to clipboard",;
        variant:"success"}),;
    } else {;
      toast({;
        title:"Cannot copy link",;
        description:"Please generate a referral code first",;
        variant:"destructive"}),;
    }
  },;
;
  // Share on social media platforms;
  const shareOnSocialMedia = (platform:'twitter' | 'facebook' | 'linkedin') => {;
    const link = getReferralLink(),;
    const text = "Join Zion AI marketplace for AI talent and opportunities!",;
    ;
    if (!link) {;
      toast({;
        title:"Cannot share",;
        description:"Please generate a referral code first",;
        variant:"destructive"}),;
      return,;
    }
    ;
    let shareUrl = '',;
    ;
    switch (platform) {;
      case 'twitter':;
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(link)}`,;
        break,;
      case 'facebook':;
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`,;
        break,;
      case 'linkedin':;
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(link)}`,;
        break,;
    }
    ;
    if (shareUrl) {;
      window.open(shareUrl, '_blank'),;
    }
  },;
;
  return {;
    referralCode,;
    isLoading,;
    stats,;
    referrals, // Added this property;
    rewards,   // Added this property;
    generateReferralCode,;
    getReferralLink,;
    copyReferralLink,;
    shareOnSocialMedia,;
    fetchReferralStats,;
    fetchReferrals, // Added this method for refreshing referrals;
    fetchRewards,   // Added this method for refreshing rewards;
  },;
} export function useReferrals () {
  const {
  user 
}= useAuth ();
const [referralCode, setReferralCode] = useState<ReferralCode | null> (null);
const [isLoading, setIsLoading] = useState (true);
const [referrals, setReferrals] = useState<Referral[]> ([]);
const [rewards, setRewards] = useState<ReferralReward[]> ([]);
const [stats, setStats] = useState<ReferralStats> ({
  totalReferrals: 0;
pendingReferrals: 0;
completedReferrals: 0;
totalRewards: 0 
});
useEffect ( () => {
  if (user) {
  fetchReferralCode ();
fetchReferralStats ();
fetchReferrals ();
fetchRewards () 
}
}, [user]);
const fetchReferralCode = async () => {
  try {
  setIsLoading (true);
const {
  data, error 
}= await supabase 
}setReferralCode (data) 
}catch (error) {
  
}finally {
  setIsLoading (false) 
}
};
const fetchReferrals = async () => {
  try {
  if (!user) return;
data, error 
}= await supabase .from ('referrals') .select ('*') .eq ('referrer id', user.id) if (error) throw error;
}
};
const fetchRewards = async () => {
  try {
  if (!user) return;
data, error 
}= await supabase .from ('referral rewards') .select ('*') .eq ('user id', user.id) if (error) throw error;
}
};
const fetchReferralStats = async () => {
  try {
  if (!user) return;
data: referrals, error: refError 
}= await supabase .from ('referrals') .select ('id, status') .eq ('referrer id', user.id);
if (refError) throw refError;
//Get rewards const {
  data: rewards, error: rewardsError 
}= await supabase .from ('referral rewards') .select ('amount') .eq ('user id', user.id);
if (rewardsError) throw rewardsError;
//Calculate stats 
}
};
try {
  if (!user) {
  toast ({
  return;
}if (error) throw error;
}
};
//Get the referral link for the current user const baseUrl = window.location.origin;
return `$ {
  baseUrl 
}/?ref=$ {
  referralCode.code 
}` 
};
//Copy the referral link to clipboard const copyReferralLink = () => {
  const link = getReferralLink ();
navigator.clipboard.writeText (link);
toast ({
  
}
};
//Share on social media platforms return;
}
}
  }
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  }
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
