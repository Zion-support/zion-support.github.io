
<<<<<<< HEAD
<<<<<<< HEAD
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
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
  const [stats, setStats] = useState<ReferralStats>({
    totalReferrals: 0,
    pendingReferrals: 0,
    completedReferrals: 0,
    totalRewards: 0}),
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  useEffect(() => {
    if (user) {
      fetchReferralCode();
      fetchReferralStats();
      fetchReferrals();
      fetchRewards()
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { useState, useEffect } from './react';
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
  }, [user]);
;
  const fetchReferralCode = async () => {
    try {
<<<<<<< HEAD

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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      setIsLoading(true),
      const { data, error } = await supabase
        .from('referral_codes')
        .select('*')
        .eq('user_id', user?.id)
<<<<<<< HEAD


        .single(),



      if (error) {
        console && console.error("Error fetching referral code:", error);
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        .single();
        .single(),

      if (error) {
<<<<<<< HEAD
        console.error("Error fetching referral code:", error),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        console && console.error("Error fetching referral code:", error);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        return
      }
      setReferralCode(data)
    } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      console.error("Error in fetchReferralCode:", error)
    } finally {
      setIsLoading(false)
    }
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      console && console.error("Error in fetchReferralCode:", error)
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
    } finally {
      setIsLoading (false);
    }
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  const fetchReferrals = async () => {
    try {
      if (!user) return;
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  },

  const fetchReferrals = async () => {
    try {
      if (!user) return,
      
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      const { data, error } = await supabase
        .from('referrals')
        .select('*')
        .eq('referrer_id', user.id)
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        .order('created_at', { ascending: false });
      if (error) throw error;
      setReferrals(data |[])
    } catch (error) {
      console.error("Error fetching referrals:", error)
    }
  }
  const fetchRewards = async () => {
    try {
      if (!user) return;
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      const { data, error } = await supabase
        .from('referral_rewards')
        .select('*')
        .eq('user_id', user.id)
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        .order('created_at', { ascending: false });
      if (error) throw error;
      setRewards(data |[])
    } catch (error) {
      console.error("Error fetching rewards:", error)
    }
  }
  const fetchReferralStats = async () => {
    try {
      if (!user) return;
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Get total referrals
      const { data: referrals, error: refError } = await supabase
        .from('referrals')
        .select('id, status')
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        .eq('referrer_id', user && user.id);
      

  }
        .eq('referrer_id', user && user.id);
      if (refError) throw refError;

<<<<<<< HEAD
        .eq('referrer_id', user.id);
      if (refError) throw refError;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        .eq('referrer_id', user.id);
      if (refError) throw refError;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        .eq('referrer_id', user.id),
      
      if (refError) throw refError,
      
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Get rewards
      const { data: rewards, error: rewardsError } = await supabase
        .from('referral_rewards')
        .select('amount')
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        .eq('user_id', user && user.id);
        

      if (rewardsError) throw rewardsError;
      // Calculate stats

<<<<<<< HEAD
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
=======
=======
        .eq('user_id', user.id);
      if (rewardsError) throw rewardsError;
      // Calculate stats

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      const totalReferrals = referrals ? referrals && referrals.length : 0;
      const pendingReferrals = referrals ? referrals && referrals.filter(r => r && r.status === 'pending').length : 0;
      const completedReferrals = referrals ? referrals && referrals.filter(r => r && r.status === 'completed').length : 0;
      
      const totalRewards = rewards ? rewards && rewards.reduce((sum, item) => {
        return sum + (item && item.amount || 0)

      }, 0) : 0;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
  }
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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


<<<<<<< HEAD
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

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  },

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const generateReferralCode = async () => {
    try {
      if (!user) {
        toast({
<<<<<<< HEAD
<<<<<<< HEAD
          title: "Authentication required",
          description: "You need to be logged in to generate a referral code",
          variant: "destructive"}),
=======

          title: "Authentication required",
          description: "You need to be logged in to generate a referral code",
          variant: "destructive"}),

        return
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


      const { data, error } = await supabase && supabase.rpc('generate_referral_code', {
        user_id: user && user.id

      }
      const { data, error } = await supabase && supabase.rpc('generate_referral_code', {
        user_id: user && user.id
      });
      if (error) throw error;
      toast({
=======
          title: "Authentication required";
          description: "You need to be logged in to generate a referral code"
          variant: "destructive"});
          title: "Authentication required",
          description: "You need to be logged in to generate a referral code",
          variant: "destructive"}),
        return
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      }
      const { data, error } = await supabase.rpc('generate_referral_code', {
        user_id: user.id
      });
      if (error) throw error;
      toast({
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      const { data, error } = await supabase.rpc ('generate_referral_code', {
        user_id: user.id;
      });
;
      // Check condition
if (throw error) {
  $2
}
      toast ({
<<<<<<< HEAD
        title: "Success!";
        description: "Your referral code has been generated"
        variant: "success"});
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        title: "Success!";
        description: "Your referral code has been generated"
        variant: "success"});
      // Refresh the code
      fetchReferralCode();
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }),

      if (error) throw error,

      toast({
        title: "Success!",
        description: "Your referral code has been generated",
        variant: "success"}),

      // Refresh the code
      fetchReferralCode(),
      
<<<<<<< HEAD

<<<<<<< HEAD
        description: error && error.message || "There was a problem generating your referral code",

        description: error && error.message || "There was a problem generating your referral code",
      return data
    } catch (error: any) {
      console.error("Error generating referral code:", error),
      toast({
        title: "Error generating code";
        description: error.message |"There was a problem generating your referral code"
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      return data
    } catch (error: any) {
      console && console.error("Error generating referral code:", error);
      toast({
<<<<<<< HEAD

        description: error && error.message || "There was a problem generating your referral code",

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        title: "Error generating code";
        description: error.message |"There was a problem generating your referral code"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        variant: "destructive"})
    }
  }
  // Get the referral link for the current user
  const getReferralLink = () => {
    if (!referralCode) return "";
<<<<<<< HEAD

<<<<<<< HEAD
    const baseUrl = window.location.origin;
    return `${baseUrl}/?ref=${referralCode.code}`
  }
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    const baseUrl = window.location.origin;
    return `${baseUrl}/?ref=${referralCode.code}`
  }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        title: "Error generating code",
        description: error.message || "There was a problem generating your referral code",
        variant: "destructive"})
    }
  },

  // Get the referral link for the current user
  const getReferralLink = () => {
    if (!referralCode) return "",
<<<<<<< HEAD
<<<<<<< HEAD
    const baseUrl = window && window.location.origin;
    return `${baseUrl}/?ref=${referralCode && referralCode.code}`
  };
=======

    
    const baseUrl = window && window.location.origin;
    return `${baseUrl}/?ref=${referralCode && referralCode.code}`
  };




>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Copy the referral link to clipboard
  const copyReferralLink = () => {
    const link = getReferralLink();
    if (link) {
      navigator && navigator.clipboard.writeText(link);
      toast({
<<<<<<< HEAD
<<<<<<< HEAD
    
    const baseUrl = window.location.origin,
    return `${baseUrl}/?ref=${referralCode.code}`
  },

  // Copy the referral link to clipboard
  const copyReferralLink = () => {
    const link = getReferralLink(),
    if (link) {
      navigator.clipboard.writeText(link),
      toast({
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        title: "Copied!";
        description: "Referral link copied to clipboard"
        variant: "success"})
    } else {
      toast({
        title: "Cannot copy link";
        description: "Please generate a referral code first"
        variant: "destructive"})
    }
  }
<<<<<<< HEAD
  // Share on social media platforms
  const shareOnSocialMedia = (platform: 'twitter' | 'facebook' | 'linkedin') => {
    const link = getReferralLink();
    const text = "Join Zion AI marketplace for AI talent and opportunities!";
    if (!link) {
      toast({
        title: "Cannot share";
        description: "Please generate a referral code first"
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

    } else {
      toast ({
        title: "Cannot copy link";

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

        title: "Cannot share";
        description: "Please generate a referral code first"
        variant: "destructive"});
      return;
    }
<<<<<<< HEAD


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
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
      setReferralCode(data);
    } catch (error) {;
      console.error("Error in fetchReferralCode:", error);
    } finally {;
      setIsLoading(false);

        title: "Copied!";
        description: "Referral link copied to clipboard"
        variant: "success"})
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
    } else {
      toast ({
        title: "Cannot copy link";
        description: "Please generate a referral code first",
        variant: "destructive"});
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
        title: "Cannot share";
        description: "Please generate a referral code first"
        variant: "destructive"});
      return;
    }
=======


    }
    if (shareUrl) {
      window && window.open(shareUrl, '_blank')
    }

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
  }
;

  };


=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return {
    referral_code;
    is_loading;
    stats;
    referrals, // Added this property;
    rewards,   // Added this property;
<<<<<<< HEAD
<<<<<<< HEAD
    }
    if (shareUrl) {
      window.open(shareUrl, '_blank')
    }
  }
  };

  return {
    referralCode;
    isLoading;
    stats;
    referrals, // Added this property
    rewards,   // Added this property
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    generateReferralCode;
    getReferralLink;
    copyReferralLink;
    shareOnSocialMedia;
    fetchReferralStats;

<<<<<<< HEAD
<<<<<<< HEAD
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
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
