

import { useState, useEffect } from "react",
import { toast } from "@/hooks/use-toast",
import { useAuth } from "@/hooks/useAuth",

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
        .from('referral_codes')
        .select('*')
        .eq('user_id', user?.id)

      if (error) {
        console.error("Error fetching referral code:", error),
        return
      }
      setReferralCode(data)
    } catch (error) {
      console.error("Error in fetchReferralCode:", error)
    } finally {
      setIsLoading(false)
    }

      const { data, error } = await supabase
        .from('referrals')
        .select('*')
        .eq('referrer_id', user.id)

      const { data, error } = await supabase
        .from('referral_rewards')
        .select('*')
        .eq('user_id', user.id)

      // Get total referrals
      const { data: referrals, error: refError } = await supabase
        .from('referrals')
        .select('id, status')

      // Get rewards
      const { data: rewards, error: rewardsError } = await supabase
        .from('referral_rewards')
        .select('amount')

      setStats({
        totalReferrals,
        pendingReferrals,
        completedReferrals,
        totalRewards
      })
    } catch (error) {
      console.error("Error fetching referral stats:", error)
    }

  const generateReferralCode = async () => {
    try {
      if (!user) {
        toast({

        return
      }
      const { data, error } = await supabase.rpc('generate_referral_code', {
        user_id: user.id

      return data
    } catch (error: any) {
      console.error("Error generating referral code:", error),
      toast({

  // Copy the referral link to clipboard
  const copyReferralLink = () => {
    const link = getReferralLink(),
    if (link) {
      navigator.clipboard.writeText(link),
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
      setReferralCode(data);
    } catch (error) {;
      console.error("Error in fetchReferralCode:", error);
    } finally {;
      setIsLoading(false);

    }
    if (shareUrl) {
      window.open(shareUrl, '_blank')
    }

  return {
    referralCode;
    isLoading;
    stats;
    referrals, // Added this property
    rewards,   // Added this property
    generateReferralCode;
    getReferralLink;
    copyReferralLink;
    shareOnSocialMedia;
    fetchReferralStats;

    fetchReferrals, // Added this method for refreshing referrals
    fetchRewards,   // Added this method for refreshing rewards

  }
}