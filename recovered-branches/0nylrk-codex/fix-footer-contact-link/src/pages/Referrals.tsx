import { useEffect  } from 'react';
import { useAuth  } from '@/hooks/useAuth';
import { useReferrals  } from '@/hooks/useReferrals';
import { ReferralStats  } from '@/components/referrals/ReferralStats';
import { ReferralLink  } from '@/components/referrals/ReferralLink';
import { ReferralTable  } from '@/components/referrals/ReferralTable';
import { RewardsCard  } from '@/components/referrals/RewardsCard';
import { ReferralGuide  } from '@/components/referrals/ReferralGuide';
import { ReferralLeaderboard  } from '@/components/referrals/ReferralLeaderboard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button  } from '@/components/ui/button';
import { toast  } from '@/hooks/use-toast';
import { Share, Users  } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export default function ReferralsPage() {
import {useEffect} from 'react';
import {use_auth} from '@/hooks / use_auth';
import {useReferrals} from '@/hooks / useReferrals';
import {ReferralStats} from '@/components / referrals / ReferralStats';
import {ReferralLink} from '@/components / referrals / ReferralLink';
import {ReferralTable} from '@/components / referrals / ReferralTable';
import {RewardsCard} from '@/components / referrals / RewardsCard';
import {ReferralGuide} from '@/components / referrals / ReferralGuide';
import {ReferralLeaderboard} from '@/components / referrals / ReferralLeaderboard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import {Button} from '@/components / ui / button';
import {toast} from '@/hooks / use - toast';
import {Share, Users} from 'lucide-react';

  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const {;
    isLoading;
    referralCode;import {use_navigate} from 'react-router-dom';
export default /**
 * ReferralsPage - Function description

 */
function ReferralsPage() {}
  const navigate = use_navigate ();
  const { is_authenticated } = use_auth ();
  const {}
    is_loading;
    referral_code;

import { useAuth  } from '@/hooks/useAuth';
import { useReferrals  } from '@/hooks/useReferrals';
import { ReferralStats  } from '@/components/referrals/ReferralStats';
import { ReferralLink  } from '@/components/referrals/ReferralLink';
import { ReferralTable  } from '@/components/referrals/ReferralTable';
import { RewardsCard  } from '@/components/referrals/RewardsCard';
import { ReferralGuide  } from '@/components/referrals/ReferralGuide';

import { ReferralLeaderboard  } from '@/components/referrals/ReferralLeaderboard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";'
import { Button  } from '@/components/ui/button';'
import { toast  } from '@/hooks/use-toast';'
import { Share, Users  } from 'lucide-react';'
import { useNavigate } from 'react-router-dom';'
export default function ReferralsPage() {
}
import {useEffect} from 'react';'
import {use_auth} from '@/hooks / use_auth';'
import {useReferrals} from '@/hooks / useReferrals';'
import {ReferralStats} from '@/components / referrals / ReferralStats';'
import {ReferralLink} from '@/components / referrals / ReferralLink';'
import {ReferralTable} from '@/components / referrals / ReferralTable';'
import {RewardsCard} from '@/components / referrals / RewardsCard';'
import {ReferralGuide} from '@/components / referrals / ReferralGuide';'
import {ReferralLeaderboard} from '@/components / referrals / ReferralLeaderboard';'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';'
import {Button} from '@/components / ui / button';'
import {toast} from '@/hooks / use - toast';'
import {Share, Users} from 'lucide-react';'
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const {;

    isLoading;
    referralCode;
    referrals;
    rewards;
    stats;
    getReferralLink;
    copyReferralLink;

import { useEffect } from 'react',
import { useAuth } from '@/hooks/useAuth',
import { useReferrals } from '@/hooks/useReferrals',
import { ReferralStats } from '@/components/referrals/ReferralStats',
import { ReferralLink } from '@/components/referrals/ReferralLink',
import { ReferralTable } from '@/components/referrals/ReferralTable',
import { RewardsCard } from '@/components/referrals/RewardsCard',
import { ReferralGuide } from '@/components/referrals/ReferralGuide',
import { ReferralLeaderboard } from '@/components/referrals/ReferralLeaderboard',
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { Button } from '@/components/ui/button',
import { toast } from '@/hooks/use-toast',
import { Share, Users } from 'lucide-react';
  const { isAuthenticated } = useAuth(),  const {
    isLoading,
    referralCode,
    referrals,
    rewards,
    stats,
    getReferralLink,
    copyReferralLink,
    shareOnSocialMedia} = useReferrals(),

  useEffect(() => {;
    }
    if (!isAuthenticated) {;
      }
      toast({;
        title: "Authentication required",,
  description: "Please login to access the referral program",;
        variant: "destructive"}),;
      navigate("/login");
    }

  }, [isAuthenticated, navigate]),

  const referralLink = getReferralLink(),

import { useEffect } from 'react',;
import { useAuth } from '@/hooks/useAuth',;
import { useReferrals } from '@/hooks/useReferrals',;
import { ReferralStats } from '@/components/referrals/ReferralStats',;
import { ReferralLink } from '@/components/referrals/ReferralLink',;
import { ReferralTable } from '@/components/referrals/ReferralTable',;
import { RewardsCard } from '@/components/referrals/RewardsCard',;
import { ReferralGuide } from '@/components/referrals/ReferralGuide',;
import { ReferralLeaderboard } from '@/components/referrals/ReferralLeaderboard',;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { Button } from '@/components/ui/button',;
import { toast } from '@/hooks/use-toast',;
import { Share, Users } from 'lucide-react';;
import { useNavigate } from 'react-router-dom',;
;
export default function ReferralsPage() {;
            onShare={shareOnSocialMedia}
          />;
          <Tabs defaultValue="referrals" className="w-full">;
            <TabsList className="w-full grid grid-cols-2">;
              <TabsTrigger value="referrals" className="flex items-center gap-2">;

                <Users className="h-4 w-4" />;
                Your Referrals;
              </TabsTrigger>;
              <TabsTrigger value='rewards' className='flex items-center gap-2'>;'
                <Share className='h-4 w-4' />;'
                Rewards;
              </TabsTrigger>;
            </TabsList>;
            <TabsContent value='referrals' className='p-0 border rounded-md mt-6'>;'
              <ReferralTable referrals={referrals} isLoading={isLoading} />;
            </TabsContent>;
            <TabsContent value='rewards' className='p-0 mt-6'>;'
              <RewardsCard rewards={rewards} isLoading={isLoading} />;
            </TabsContent>;
          </Tabs>;
        </div>;

        <div className="space-y-6">;;
        <div className="space-y-6">;
        <div className="space-y-6">;
