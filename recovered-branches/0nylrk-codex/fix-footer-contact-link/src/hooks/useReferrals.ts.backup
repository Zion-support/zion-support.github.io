<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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


<<<<<<< HEAD
=======
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


<<<<<<< HEAD
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



=======

>>>>>>> origin/cursor/delete-old-data-records-6bba

        .single(),

      if (error) {

      if (error) {"
        console && console.error("Error fetching referral code:", error);

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      setIsLoading (true);
      const { data, error } = await supabase;'
        .from ('referral_codes');'
        .select ('*');'
        .eq ('user_id', user?.id);
        .single ();
;
      // Check condition;
if ( {) {}
  $2;
}"

        console.error ("Error fetching referral code:", error);
        return;
      }
      setReferralCode (data);

<<<<<<< HEAD
    } catch (error) {
      console.error ("Error in fetchReferralCode:", error);
    } finally {

      setIsLoading (false);

    }



  },


  const fetchReferrals = async () => {}
    try {}
      if (!user) return,


=======

      setIsLoading (false);
    }
  }
  const fetchReferrals = async () => {
    try {
      if (!user) return;
  },

  const fetchReferrals = $2;

>>>>>>> origin/cursor/delete-old-data-records-6bba
      const { data, error } = await supabase
        .from('referrals')
        .select('*')
        .eq('referrer_id', user.id)

<<<<<<< HEAD


=======
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

<<<<<<< HEAD


=======
        .order('created_at', { ascending: false }),
        
>>>>>>> origin/cursor/delete-old-data-records-6bba
      if (error) throw error,
      
      setRewards(data || [])
    } catch (error) {"
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      console.error("Error fetching rewards:", error)
    }
  },

<<<<<<< HEAD

  const fetchReferralStats = async () => {}
    try {}
      if (!user) return,

=======
  const fetchReferralStats = async () => {}
    try {}
      if (!user) return,

      if (refError) throw refError,

      // Get rewards
      const { data: rewards, error: rewardsError } = await supabase
        .from('referral_rewards')
        .select('amount')

        .eq('user_id', user && user.id);

      if (rewardsError) throw rewardsError;

        .eq('user_id', user.id),
        
      if (rewardsError) throw rewardsError,
      
      // Calculate stats;
      const totalReferrals = referrals ? referrals.length : 0,'
      const pendingReferrals = referrals ? referrals.filter(r => r.status === 'pending').length : 0,'
      const completedReferrals = referrals ? referrals.filter(r => r.status === 'completed').length : 0,
      
      const totalRewards = rewards ? rewards.reduce((sum, item) => {}
        return sum + (item.amount || 0)
      }, 0) : 0,

      setStats({

        totalReferrals;
        pendingReferrals;
        completedReferrals;
        totalRewards;
      })
    } catch (error) {"
      console && console.error("Error fetching referral stats:", error)
    }

;
  const fetch_referrals = async () => {}
    try {}
      // Check condition;
if (return) {}
  $2;
}
      const { data, error } = await supabase;'
        .from ('referrals');'
        .select ('*');'
        .eq ('referrer_id', user.id);'
        .order ('created_at', { ascending: false });
;
      // Check condition;
if (throw error) {}
  $2;
}
      set_referrals (data || []);
    } catch (error) {"
      console.error ("Error fetching referrals:", error);
    }

          title: "Authentication required",
          description: "You need to be logged in to generate a referral code",
          variant: "destructive"}),

        return
      }

      });
      if (error) throw error;
      toast({'
      const { data, error } = await supabase.rpc ('generate_referral_code', {}
        user_id: user.id;
      });
;
      // Check condition;
if (throw error) {}
  $2;
}
      toast ({"
        title: "Success!";"
        description: "Your referral code has been generated""
        variant: "success"});

        title: "Success!";
        description: "Your referral code has been generated"
        variant: "success"});
      // Refresh the code
      fetchReferralCode();

      }),

      if (error) throw error,

      toast({"
        title: "Success!","
        description: "Your referral code has been generated","
        variant: "success"}),

      // Refresh the code;
      fetchReferralCode(),

        variant: "destructive"})
    }
  }
  // Get the referral link for the current user
  const getReferralLink = () => {

    if (!referralCode) return "";
"
        title: "Error generating code","
        description: error.message || "There was a problem generating your referral code","

        variant: "destructive"})
    }
  },

  // Copy the referral link to clipboard;
  const copyReferralLink = () => {}
    const link = getReferralLink();
    if (link) {}
      navigator && navigator.clipboard.writeText(link);

    if (!referralCode) return "";  // Copy the referral link to clipboard

  const copyReferralLink = () => {
        .order('created_at', { ascending: false }),
        
      if (error) throw error,
      
      setRewards(data || [])
    } catch (error) {"
      console.error("Error fetching rewards:", error)
    }
  },

  const fetchReferralStats = $2;
      // Get total referrals
      const { data: referrals, error: refError} = await supabase
        .from('referrals')
        .select('id, status')
        .eq($2);
      if (refError) throw refError,
      
      // Get rewards
      const { data: rewards, error: rewardsError} = await supabase
        .from('referral_rewards')
        .select('amount')
        .eq($2);
      if (rewardsError) throw rewardsError,
      
      // Calculate stats
      const totalReferrals = $2;
      const pendingReferrals = $2;
      const completedReferrals = $2;
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
      console.error("Error fetching referral stats:", error)
    }
  },

  const generateReferralCode = async () => {
    try {
      if (!user) {
        toast($2);
        return
      }

      const { data, error } = await supabase.rpc($2);
      if (error) throw error,

      toast($2);
      // Refresh the code
      fetchReferralCode($2);
      return data
    } catch (error: any) {
      console.error($2);
      toast({
        title: "Error generating code",
        description: error.message || "There was a problem generating your referral code",
        variant: "destructive"})
    }
  },

  // Get the referral link for the current user
  const getReferralLink = $2;
    const baseUrl = $2;
    return `${baseUrl}/?ref = $2;
  // Copy the referral link to clipboard
  const copyReferralLink = () => {
    const link = getReferralLink($2);
    if (link) {
      navigator.clipboard.writeText($2);
      toast({
      // Get total referrals
      const { data: referrals, error: refError } = await supabase
        .from('referrals')
        .select('id, status')
        .eq('referrer_id', user && user.id);
      

  }
        .eq('referrer_id', user && user.id);
      if (refError) throw refError;

        .eq('referrer_id', user.id);
      if (refError) throw refError;
        .eq('referrer_id', user.id),
      
      if (refError) throw refError,
      

      if (refError) throw refError,
>>>>>>> origin/cursor/delete-old-data-records-6bba

      // Get rewards
      const { data: rewards, error: rewardsError } = await supabase
        .from('referral_rewards')
        .select('amount')
<<<<<<< HEAD



        .eq('user_id', user && user.id);

      if (rewardsError) throw rewardsError;

      // Calculate stats
=======
        .eq('user_id', user && user.id);

      if (rewardsError) throw rewardsError;
>>>>>>> origin/cursor/delete-old-data-records-6bba


        .eq('user_id', user.id),
        
      if (rewardsError) throw rewardsError,
      
      // Calculate stats;
      const totalReferrals = referrals ? referrals.length : 0,'
      const pendingReferrals = referrals ? referrals.filter(r => r.status === 'pending').length : 0,'
      const completedReferrals = referrals ? referrals.filter(r => r.status === 'completed').length : 0,
      
      const totalRewards = rewards ? rewards.reduce((sum, item) => {}
        return sum + (item.amount || 0)
      }, 0) : 0,

<<<<<<< HEAD
      

=======

      setStats({

        totalReferrals;
        pendingReferrals;
        completedReferrals;
        totalRewards;
      })
    } catch (error) {"
      console && console.error("Error fetching referral stats:", error)
    }

>>>>>>> origin/cursor/delete-old-data-records-6bba
;
  const fetch_referrals = async () => {}
    try {}
      // Check condition;
if (return) {}
  $2;
}
      const { data, error } = await supabase;'
        .from ('referrals');'
        .select ('*');'
        .eq ('referrer_id', user.id);'
        .order ('created_at', { ascending: false });
;
      // Check condition;
if (throw error) {}
  $2;
}
      set_referrals (data || []);
    } catch (error) {"
      console.error ("Error fetching referrals:", error);
    }
<<<<<<< HEAD

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



=======

>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD

      const { data, error } = await supabase && supabase.rpc('generate_referral_code', {
        user_id: user && user.id

      }
      const { data, error } = await supabase && supabase.rpc('generate_referral_code', {
        user_id: user && user.id
      });
      if (error) throw error;
      toast({
      const { data, error } = await supabase.rpc ('generate_referral_code', {

=======
        return
      }


>>>>>>> origin/cursor/delete-old-data-records-6bba
        user_id: user.id;
      });
;
      // Check condition;
if (throw error) {}
  $2;
}

<<<<<<< HEAD
      toast ({
        title: "Success!";
        description: "Your referral code has been generated"
        variant: "success"});
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      }),

      if (error) throw error,

      toast({"
        title: "Success!","
        description: "Your referral code has been generated","
        variant: "success"}),

      // Refresh the code;
      fetchReferralCode(),
<<<<<<< HEAD

      
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba


        variant: "destructive"})
    }
  }
  // Get the referral link for the current user
  const getReferralLink = () => {

    if (!referralCode) return "";
"
        title: "Error generating code","
        description: error.message || "There was a problem generating your referral code","


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        variant: "destructive"})
    }
  },


<<<<<<< HEAD
  // Get the referral link for the current user
  const getReferralLink = () => {
    if (!referralCode) return "",

=======

    if (!referralCode) return "";  // Copy the referral link to clipboard

  const copyReferralLink = () => {

    const link = getReferralLink(),
    if (link) {}
    }
  }
;
  // Get the referral link for the current user;
  const getReferralLink = () =>: any {}
    // Check condition"
if (return "") {}
  $2;
}
    const base_url = window.location.origin;
    return `${base_url}/?ref=${referral_code.code}`;
  }
;
  // Copy the referral link to clipboard;
  const copyReferralLink = () =>: any {}
    const link = getReferralLink ();
    // Check condition;
if ( {) {}
  $2;
}
      navigator.clipboard.write_text (link);

        variant: "destructive"}),
      return"
import { useState, useEffect } from "react",;"
import { toast } from "@/hooks/use-toast",;"
import { useAuth } from "@/hooks/useAuth",;"
import { supabase } from "@/integrations/supabase/client",;"
import { ReferralCode, ReferralStats, Referral, ReferralReward } from "@/types/referrals",;"
export function useReferrals() {;
  }
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
        .from('referral_codes');'
        .select('*');'
        .eq('user_id', user?.id);
        .single(),;
      if (error) {;"
        console.error("Error fetching referral code:", error),;
        return;
      }
;

>>>>>>> origin/cursor/delete-old-data-records-6bba
  // Copy the referral link to clipboard
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

        title: "Cannot share";
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

        title: "Copied!";
        description: "Referral link copied to clipboard"
        variant: "success"});
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

        variant: "destructive"});
      return;
    }
>>>>>>> origin/cursor/delete-old-data-records-6bba

        title: "Copied!",
        description: "Referral link copied to clipboard",
        variant: "success"})
    } else {
      toast({
        title: "Cannot copy link",
        description: "Please generate a referral code first",
        variant: "destructive"})


<<<<<<< HEAD
=======
    }
    if (shareUrl) {'
      window && window.open(shareUrl, '_blank')

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


>>>>>>> origin/cursor/delete-old-data-records-6bba
  return {

    referral_code;
    is_loading;
    stats;
    referrals, // Added this property;
    rewards,   // Added this property;


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    generateReferralCode;
    getReferralLink;
    copyReferralLink;
    shareOnSocialMedia;
    fetchReferralStats;


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

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
=======

      console.error("Error fetching referrals:", error)"

  const fetchRewards = async () => {
  // TODO: Implement

        .from('referral_rewards')
        .eq('user_id', user.id)
      setRewards(data || [])
      console.error("Error fetching rewards:", error)"

  const fetchReferralStats = async () => {
  // TODO: Implement

      // Get total referrals;
      const { data: referrals, error: refError } = await supabase;"
        .select('id, status')
        .eq('referrer_id', user && user.id);
      if (refError) throw refError;

        .eq('referrer_id', user.id),
      if (refError) throw refError,

      // Get rewards;
      const { data: rewards, error: rewardsError } = await supabase;
        .select('amount')
        .eq('user_id', user && user.id);
      if (rewardsError) throw rewardsError;
      // Calculate stats;
      const totalReferrals = referrals ? referrals && referrals.length : 0;
      const pendingReferrals = referrals ? referrals && referrals.filter(r => r && r.status === 'pending').length : 0;
      const completedReferrals = referrals ? referrals && referrals.filter(r => r && r.status === 'completed').length : 0;
      const totalRewards = rewards ? rewards && rewards.reduce((sum, item) => {
        return sum + (item && item.amount || 0)

      }, 0) : 0;
        .eq('user_id', user.id),
      if (rewardsError) throw rewardsError,
      // Calculate stats;
      const totalReferrals = referrals ? referrals.length : 0,
      const pendingReferrals = referrals ? referrals.filter(r => r.status === 'pending').length : 0,
      const completedReferrals = referrals ? referrals.filter(r => r.status === 'completed').length : 0,
      const totalRewards = rewards ? rewards.reduce((sum, item) => {
        return sum + (item.amount || 0)
      }, 0) : 0,

      // Calculate stats;
      setStats({
        totalReferrals;
        pendingReferrals;
        completedReferrals;
        totalRewards;)
      })
      console && console.error("Error fetching referral stats:", error)"

  const fetch_referrals = async () => {
  // TODO: Implement
      // Check condition;
if (return) {
        .from ('referrals');
        .eq ('referrer_id', user.id);
        .order ('created_at', { ascending: false });
      // Check condition;
if (throw error) {
      set_referrals (data || []);
      console.error ("Error fetching referrals:", error);"
      }"
      const { data, error } = await supabase.rpc('generate_referral_code', {
        user_id: user.id;
;)
  const fetch_rewards = async () => {
  // TODO: Implement
      // Check condition;
      const { data, error } = await supabase;
        .from ('referral_rewards');
        .eq ('user_id', user.id);
      // Check condition;
      set_rewards (data || []);
      console.error ("Error fetching rewards:", error);"
  // TODO: Implement
      // Check condition;
      // Get total referrals;
      const { data: referrals, error: ref_error } = await supabase;"
        .select ('id, status');
      // Check condition;
if (throw ref_error) {
      // Get rewards;
      const { data: rewards, error: rewards_error } = await supabase;
        .select ('amount');
      // Check condition;
if (throw rewards_error) {
      // Calculate stats;
      const total_referrals = referrals ? referrals.length : 0;
      const pending_referrals = referrals ? referrals.filter (r => r.status === 'pending').length : 0;
      const completed_referrals = referrals ? referrals.filter (r => r.status === 'completed').length : 0;
      const total_rewards = rewards ? rewards.reduce ((sum, item) => {
        return sum + (item.amount || 0);
      set_stats ({
        total_referrals;
        pending_referrals;
        completed_referrals;
        total_rewards;)
      });
      console.error ("Error fetching referral stats:", error);"

  const generateReferralCode = async () => {
  // TODO: Implement
      // Check condition;
        toast ({"
          title: "Authentication required";","
  description: "You need to be logged in to generate a referral code"")"
          variant: "destructive"});"

  // TODO: Implement
      if (!user) {
        toast({
"
          title: "Authentication required",""
          description: "You need to be logged in to generate a referral code",")"
          variant: "destructive"}),"
          description: "You need to be logged in to generate a referral code",""
          variant: "destructive"}),""
      const { data, error } = await supabase && supabase.rpc('generate_referral_code', {
        user_id: user && user.id;
      if (error) throw error;
      const { data, error } = await supabase.rpc ('generate_referral_code', {
        user_id: user.id;)
      // Check condition;
      toast ({
        title: "Success!";","
  description: "Your referral code has been generated"")"
        variant: "success"});"
      }),

      toast({"
        title: "Success!",""
        description: "Your referral code has been generated",")"
        variant: "success"}),"
      // Refresh the code;
      fetchReferralCode(),

      return data;
    } catch (error: any) {"
      console && console.error("Error generating referral code:", error);"
        description: error && error.message || "There was a problem generating your referral code",")"
        variant: "destructive"})"
  // Get the referral link for the current user;
  const getReferralLink = () => {"
    if (!referralCode) return "";""
        title: "Error generating code",""
        description: error.message || "There was a problem generating your referral code",""

  // Get the referral link for the current user;
    if (!referralCode) return "","
    const baseUrl = window && window.location.origin;
    return `${baseUrl}/?ref=${referralCode && referralCode.code}`
  };

  // Copy the referral link to clipboard;
  const copyReferralLink = () => {
    const link = getReferralLink();
    if (link) {
      navigator && navigator.clipboard.writeText(link);

  // Copy the referral link to clipboard;)
    const link = getReferralLink(),
  // Get the referral link for the current user;
  const getReferralLink = () =>: any {
  // TODO: Implement
    // Check condition;"
if (return "") {"
    const base_url = window.location.origin;`;
    return `${base_url}/?ref=${referral_code.code}`;
  // Copy the referral link to clipboard;
  const copyReferralLink = () =>: any {
  // TODO: Implement
    const link = getReferralLink ();
    // Check condition;

if ( {) {
  $2;
}
      navigator.clipboard.write_text (link);
        title: "Copied!";","
  description: "Referral link copied to clipboard",")"
    } else {
  // TODO: Implement
        title: "Cannot copy link";","
  title: "Cannot share";""
        description: "Please generate a referral code first"",)"
        title: "Cannot share",""
        description: "Please generate a referral code first",""
      return;"
import { useState, useEffect } from "react",;""
import { toast } from "@/hooks/use-toast",;""
import { useAuth } from "@/hooks/useAuth",;""
import { supabase } from "@/integrations/supabase/client",;""
import { ReferralCode, ReferralStats, Referral, ReferralReward } from "@/types/referrals",;"
export function useReferrals() {;
  const { user } = useAuth(),;
  const [referralCode, setReferralCode] = useState<ReferralCode | null>(null),;

  const [referrals, setReferrals] = useState<Referral[]>([]),;

  const [rewards, setRewards] = useState<ReferralReward[]>([]),;

  const [stats, setStats] = useState<ReferralStats>({;

const [referralCode, setReferralCode] = useState<ReferralCode | null> (null);

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
>>>>>>> origin/cursor/delete-old-data-records-6bba
      setStats({;
        totalReferrals,;
        pendingReferrals,;
        completedReferrals,;
        totalRewards;
<<<<<<< HEAD
      });
    } catch (error) {;
      console.error("Error fetching referral stats:", error);
    }
  },;
=======
      }),;
      ;
    } catch (error) {;
      console.error("Error fetching referral stats:", error),;
    }
  },;
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const generateReferralCode = async () => {;
    try {;
      if (!user) {;
        toast({;
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
  // Copy the referral link to clipboard;
  const copyReferralLink = () => {;
    const link = getReferralLink(),;
    if (link) {;
      navigator.clipboard.writeText(link),;
      toast({;
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
    switch (platform) {;
      case 'twitter':;
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(link)}`,;
        break,;
      case 'facebook':;
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`,;
        break,;
      case 'linkedin':;
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(link)}`,;
<<<<<<< HEAD
        break;
    }
;
    if (shareUrl) {;
      window.open(shareUrl, '_blank');
    }
  },;
=======
        break,;
    }
    ;
    if (shareUrl) {;
      window.open(shareUrl, '_blank'),;
    }
  },;
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  return {;
    referralCode,;
    isLoading,;
    stats,;
    referrals, // Added this property;
    rewards,   // Added this property;
    generateReferralCode,;
    getReferralLink,;
    copyReferralLink,;
<<<<<<< HEAD
    shareOnSocialMedia;
    fetchReferralStats;
    fetchReferrals, // Added this method for refreshing referrals;
    fetchRewards,   // Added this method for refreshing rewards;

    fetch_referrals, // Added this method for refreshing referrals;
    fetch_rewards,   // Added this method for refreshing rewards;


=======
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

  }
}

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
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
}