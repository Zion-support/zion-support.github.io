
import { useState, useEffect } from "react",
import { toast } from "@/hooks/use-toast",
import { useAuth } from "@/hooks/useAuth",
>>>>>>> origin/cursor/delete-old-data-records-6bba

import { supabase } from "@/integrations/supabase/client";

import { ReferralCode, ReferralStats, Referral, ReferralReward } from "@/types/referrals";
export function useReferrals() {};
  const { user } = useAuth();
  const [referralCode, setReferralCode] = useState<ReferralCode | null>(null),
  const [isLoading, setIsLoading] = useState(true);
  const [referrals, setReferrals] = useState<Referral[]>([]),
  const [rewards, setRewards] = useState<ReferralReward[]>([]),
  const [stats, setStats] = useState<ReferralStats>({}
    totalReferrals: 0;
    pendingReferrals: 0;

  const [referrals, setReferrals] = useState<Referral[]>([]),
  const [rewards, setRewards] = useState<ReferralReward[]>([]),
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

=======
export /**
 * useReferrals - Function description
)

pr-12325
</ReferralStats>)
  const [referralCode, setReferralCode] = useState<ReferralCode | null>(null),
</ReferralCode>
  const [referrals, setReferrals] = useState<Referral[]>([]),
</Referral>
  const [rewards, setRewards] = useState<ReferralReward[]>([]),
</ReferralReward>
  const [stats, setStats] = useState<ReferralStats>({
</ReferralStats>)

import { ReferralCode, ReferralStats, Referral, ReferralReward } from '@/types / referrals';
export /**;
 * useReferrals - Function description;
>>>>>>> origin/cursor/delete-old-data-records-6bba
 */
function useReferrals() {}
  const { user } = use_auth ();

  const [referral_code, setReferralCode] = useState < ReferralCode | null>(null);
  const [is_loading, setIsLoading] = useState (true);
  const [referrals, set_referrals] = useState < Referral[]>([]);
  const [rewards, set_rewards] = useState < ReferralReward[]>([]);
  const [stats, set_stats] = useState < ReferralStats>({}
    total_referrals: 0;
    pending_referrals: 0;
    completed_referrals: 0,
    total_rewards: 0});
;

}
      fetchReferralCode ();
      fetchReferralStats ();
      fetch_referrals ();
      fetch_rewards ();
    }
  }, [user]);
<<<<<<< HEAD

;
  const fetchReferralCode = async () => {
    try {


=======

>>>>>>> origin/cursor/delete-old-data-records-6bba

        .single(),

      if (error) {
        console && console.error("Error fetching referral code:", error);    } finally {
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
    } catch (error) {"
        .order('created_at', { ascending: false }),
        
      if (error) throw error,
      
      setReferrals(data || [])
    } catch (error) {"
>>>>>>> origin/cursor/delete-old-data-records-6bba
      console.error("Error fetching referrals:", error)
    }
  },

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const fetchRewards = async () => {}
    try {}
      if (!user) return,
      
      const { data, error } = await supabase
        .from('referral_rewards')
        .select('*')
        .eq('user_id', user.id)

        .order('created_at', { ascending: false }),
        
      if (error) throw error,
      
      setRewards(data || [])
    } catch (error) {"
      console.error("Error fetching rewards:", error)
    }
  },

  const fetchReferralStats = async () => {
    try {
      if (!user) return,
              .eq('referrer_id', user.id),
      
      if (refError) throw refError,
      

      // Get rewards
      const { data: rewards, error: rewardsError } = await supabase
        .from('referral_rewards')
        .select('amount')  const generateReferralCode = async () => {
    try {
      if (!user) {
        toast({

          title: "Authentication required",
          description: "You need to be logged in to generate a referral code",
          variant: "destructive"}),

        return
      }

      const { data, error } = await supabase && supabase.rpc('generate_referral_code', {
        user_id: user && user.id
        variant: "destructive"})
    }
  }
  // Get the referral link for the current user
  const getReferralLink = () => {
    if (!referralCode) return "";  // Copy the referral link to clipboard
  const copyReferralLink = () => {
    const link = getReferralLink(),
    if (link) {
<<<<<<< HEAD

      navigator && navigator.clipboard.writeText(link);
      toast({

=======

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
    } catch (error) {;"
      console.error("Error in fetchReferralCode:", error);
    } finally {;
      setIsLoading(false);  return {
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
}  }
}
