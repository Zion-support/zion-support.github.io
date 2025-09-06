
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
    totalRewards: 0}),

  useEffect(() => {
    if (user) {
      fetchReferralCode();
      fetchReferralStats();
      fetchReferrals();
      fetchRewards()
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    }
  }, [user]);
;
  const fetchReferralCode = async () => {
    try {
      setIsLoading(true),
      const { data, error } = await supabase
        .from('referral_codes')
        .select('*')
        .eq('user_id', user?.id)
=======
        .single();
        .single(),
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

      if (error) {
        console && console.error("Error fetching referral code:", error);
        return
      }
      setReferralCode(data)
    } catch (error) {
      console.error("Error in fetchReferralCode:", error)
    } finally {
      setIsLoading(false)
    }

      // Get rewards
      const { data: rewards, error: rewardsError } = await supabase
        .from('referral_rewards')
        .select('amount')

      if (rewardsError) throw rewardsError;
      // Calculate stats

      const totalReferrals = referrals ? referrals && referrals.length : 0;
      const pendingReferrals = referrals ? referrals && referrals.filter(r => r && r.status === 'pending').length : 0;
      const completedReferrals = referrals ? referrals && referrals.filter(r => r && r.status === 'completed').length : 0;
      
      const totalRewards = rewards ? rewards && rewards.reduce((sum, item) => {
        return sum + (item && item.amount || 0)

      }, 0) : 0;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      setStats({
        totalReferrals;
        pendingReferrals;
        completedReferrals;
        totalRewards
      })
    } catch (error) {
      console && console.error("Error fetching referral stats:", error)
    }

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
  },
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

  const generateReferralCode = async () => {
    try {
      if (!user) {
        toast({

        return
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      }
      const { data, error } = await supabase.rpc('generate_referral_code', {
        user_id: user.id

      }
      const { data, error } = await supabase.rpc('generate_referral_code', {
        user_id: user.id
      });
      if (error) throw error;
      toast({
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        title: "Success!";
        description: "Your referral code has been generated"
        variant: "success"});
      // Refresh the code
      fetchReferralCode();
      }),

      if (error) throw error,

      toast({
        title: "Success!",
        description: "Your referral code has been generated",
        variant: "success"}),

      // Refresh the code
      fetchReferralCode(),
      


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

  // Copy the referral link to clipboard
  const copyReferralLink = () => {
    const link = getReferralLink();
    if (link) {
      navigator && navigator.clipboard.writeText(link);
      toast({

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
      setIsLoading(false);
<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    }
    if (shareUrl) {
      window && window.open(shareUrl, '_blank')
    }
<<<<<<< HEAD
  }
  };

<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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

    fetchReferrals, // Added this method for refreshing referrals
    fetchRewards,   // Added this method for refreshing rewards

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  }
}