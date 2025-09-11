
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
  const {
    isLoading;
    referralCode;
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
import { Share, Users } from 'lucide-react',
import { useNavigate } from 'react-router-dom',
export default function ReferralsPage() {
  const navigate = useNavigate(),
  const { isAuthenticated } = useAuth(),
    isLoading,
    referralCode,
    referrals,
    rewards,
    stats,
    getReferralLink,
    copyReferralLink,
    shareOnSocialMedia} = useReferrals(),

  const referralLink = getReferralLink(),

  return (

  }, [isAuthenticated, navigate]),

  const referralLink = getReferralLink(),



  return (



}



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
import { Share, Users } from 'lucide-react',;
import { useNavigate } from 'react-router-dom',;
    <div className="container max-w-7xl py-10">;
      <div className="mb-8 flex flex-col md:flex-row justify-between md:items-center gap-4">;
        <div>;
          <h1 className="text-3xl font-bold tracking-tight">Referral Program</h1>;
          <p className="text-muted-foreground mt-1">;
            Invite others to Zion AI Marketplace and earn rewards;
          </p>;
        </div>;
        <Button className="flex items-center gap-2" onClick={copyReferralLink}>;
          <Share className="h-4 w-4" />;
          Share Referral Link;
        </Button>;
      </div>;
      <ReferralStats stats={stats} isLoading={isLoading} />;

      <div className="grid gap-6 mt-6 lg:grid-cols-3">;
        <div className="lg:col-span-2 space-y-6">;
          <ReferralLink
            referralLink={referralLink} 
            onCopy={copyReferralLink} 
            onShare={shareOnSocialMedia}
          />;


}
    </div>);
    </div>;
  ),; export default function ReferralsPage () {
  const navigate = useNavigate ();
const {
  isAuthenticated 
}= useAuth ();
const {
  isLoading;
referralCode;
referrals;
rewards;
stats;
getReferralLink;
copyReferralLink;
shareOnSocialMedia 
}= useReferrals ();
if (!isAuthenticated) {
  toast ({
  
}
}, [isAuthenticated, navigate]);
return (<div className="container max-w-7xl py-10" > <div className="mb-8 flex flex-col md:flex-row justify-between md:items-center gap-4" > <div> <h1 className="text-3xl font-bold tracking-tight" >Referral Program</h1> <p className="text-muted-foreground mt-1" > Invite others to Zion AI Marketplace and earn rewards </p> </div> Share Referral Link </Button> </div> <ReferralStats stats= {
  stats 
}isLoading= {
  isLoading 
}/> <div className="grid gap-6 mt-6 lg:grid-cols-3" > <div className="lg:col-span-2 space-y-6" > <ReferralLink referralLink= {
  referralLink 
}onCopy= {
  copyReferralLink 
}onShare= {
  shareOnSocialMedia 
}/> <Tabs defaultValue="referrals" className="w-full" > <TabsList className="w-full grid grid-cols-2" > <TabsTrigger value="referrals" className="flex items-center gap-2" > <Users className="h-4 w-4" /> Your Referrals </TabsTrigger> <TabsTrigger value="rewards" className="flex items-center gap-2" > <Share className="h-4 w-4" /> Rewards </TabsTrigger> </TabsList> </TabsContent> </Tabs> </div> <div className="space-y-6" > <ReferralGuide /> <ReferralLeaderboard /> </div> </div> </div>) 
}
    </div>;
  );
}
;
}
;
