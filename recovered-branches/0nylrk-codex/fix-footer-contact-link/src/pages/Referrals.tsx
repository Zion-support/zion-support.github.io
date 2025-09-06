<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { useEffect  } from 'react';
import { useAuth  } from '@/hooks/useAuth';
import { useReferrals  } from '@/hooks/useReferrals';
import { ReferralStats  } from '@/components/referrals/ReferralStats';
import { ReferralLink  } from '@/components/referrals/ReferralLink';
import { ReferralTable  } from '@/components/referrals/ReferralTable';
import { RewardsCard  } from '@/components/referrals/RewardsCard';
import { ReferralGuide  } from '@/components/referrals/ReferralGuide';
import { ReferralLeaderboard  } from '@/components/referrals/ReferralLeaderboard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button  } from '@/components/ui/button';
import { toast  } from '@/hooks/use-toast';
import { Share, Users  } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export default function ReferralsPage() {
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import {use_navigate} from 'react-router-dom';
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const {;
    isLoading;
    referralCode;import {use_navigate} from 'react-router-dom';
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

import {use_navigate} from 'react-router-dom';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export default /**
 * ReferralsPage - Function description
=======

import {use_navigate} from 'react-router-dom';
export default /**;
 * ReferralsPage - Function description;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
 */
function ReferralsPage() {}
  const navigate = use_navigate ();
  const { is_authenticated } = use_auth ();
  const {}
    is_loading;
    referral_code;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useEffect  } from 'react';
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import { useEffect  } from 'react';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useAuth  } from '@/hooks/useAuth';
import { useReferrals  } from '@/hooks/useReferrals';
import { ReferralStats  } from '@/components/referrals/ReferralStats';
import { ReferralLink  } from '@/components/referrals/ReferralLink';
import { ReferralTable  } from '@/components/referrals/ReferralTable';
import { RewardsCard  } from '@/components/referrals/RewardsCard';
import { ReferralGuide  } from '@/components/referrals/ReferralGuide';
=======
'
import { useEffect  } from 'react';'
import { useAuth  } from '@/hooks/useAuth';'
import { useReferrals  } from '@/hooks/useReferrals';'
import { ReferralStats  } from '@/components/referrals/ReferralStats';'
import { ReferralLink  } from '@/components/referrals/ReferralLink';'
import { ReferralTable  } from '@/components/referrals/ReferralTable';'
import { RewardsCard  } from '@/components/referrals/RewardsCard';'
import { ReferralGuide  } from '@/components/referrals/ReferralGuide';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { ReferralLeaderboard  } from '@/components/referrals/ReferralLeaderboard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";'
import { Button  } from '@/components/ui/button';'
import { toast  } from '@/hooks/use-toast';'
import { Share, Users  } from 'lucide-react';'
import { useNavigate } from 'react-router-dom';
export default function ReferralsPage() {}
';
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
import {Share, Users} from 'lucide-react';

  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const {;
    isLoading;
    referralCode;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
import {use_navigate} from 'react-router-dom';
export default /**
 * ReferralsPage - Function description
 */
function ReferralsPage() {
  const navigate = use_navigate ();
  const { is_authenticated } = use_auth ();
  const {
    is_loading;
    referral_code;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    referrals;
    rewards;
    stats;
    getReferralLink;
    copyReferralLink;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    shareOnSocialMedia} = useReferrals();
=======
<<<<<<< HEAD
<<<<<<< HEAD



<<<<<<< HEAD
=======
    shareOnSocialMedia} = useReferrals();
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {useEffect} from 'react';
import {useAuth} from '@/hooks/useAuth';
import {useReferrals} from '@/hooks/useReferrals';
import {ReferralStats} from '@/components/referrals/ReferralStats';
import {ReferralLink} from '@/components/referrals/ReferralLink';
import {ReferralTable} from '@/components/referrals/ReferralTable';
import {RewardsCard} from '@/components/referrals/RewardsCard';
import {ReferralGuide} from '@/components/referrals/ReferralGuide';
import {ReferralLeaderboard} from '@/components/referrals/ReferralLeaderboard';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Button} from '@/components/ui/button';
import {toast} from '@/hooks/use-toast';
import {Share, Users} from 'lucide-react';
<<<<<<< HEAD
=======


'
import {useEffect} from 'react';'
import {useAuth} from '@/hooks/useAuth';'
import {useReferrals} from '@/hooks/useReferrals';'
import {ReferralStats} from '@/components/referrals/ReferralStats';'
import {ReferralLink} from '@/components/referrals/ReferralLink';'
import {ReferralTable} from '@/components/referrals/ReferralTable';'
import {RewardsCard} from '@/components/referrals/RewardsCard';'
import {ReferralGuide} from '@/components/referrals/ReferralGuide';'
import {ReferralLeaderboard} from '@/components/referrals/ReferralLeaderboard';"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";'
import {Button} from '@/components/ui/button';'
import {toast} from '@/hooks/use-toast';'
import {Share, Users} from 'lucide-react';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {useNavigate} from 'react-router-dom';
export default function ReferralsPage() { return null; }
  const { isAuthenticated } = useAuth();
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import {useNavigate} from 'react-router-dom';
export default function ReferralsPage() {;
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
=======


'
import { useEffect } from 'react','
import { useAuth } from '@/hooks/useAuth','
import { useReferrals } from '@/hooks/useReferrals','
import { ReferralStats } from '@/components/referrals/ReferralStats','
import { ReferralLink } from '@/components/referrals/ReferralLink','
import { ReferralTable } from '@/components/referrals/ReferralTable','
import { RewardsCard } from '@/components/referrals/RewardsCard','
import { ReferralGuide } from '@/components/referrals/ReferralGuide','
import { ReferralLeaderboard } from '@/components/referrals/ReferralLeaderboard',"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card","
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",'
import { Button } from '@/components/ui/button','
import { toast } from '@/hooks/use-toast','
import { Share, Users } from 'lucide-react','
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { useNavigate } from 'react-router-dom',
export default function ReferralsPage() {}
  const navigate = useNavigate(),
<<<<<<< HEAD
<<<<<<< HEAD
  const { isAuthenticated } = useAuth(),  const {
=======
  const { isAuthenticated } = useAuth(),



  const {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  const { isAuthenticated } = useAuth(),

  const {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    isLoading,
    referralCode,
    referrals,
    rewards,
    stats,
    getReferralLink,
    copyReferralLink,
    shareOnSocialMedia} = useReferrals(),

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  useEffect(() => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication required"
        description: "Please login to access the referral program"
        variant: "destructive"})
      navigate("/login")
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======



  useEffect(() => {}
    if (!isAuthenticated) {}
      toast({"
        title: "Authentication required""
        description: "Please login to access the referral program""
        variant: "destructive"})"
      navigate("/login")

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    }
  }, [isAuthenticated, navigate]),

  const referralLink = getReferralLink(),

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (
    <div className="container max-w-7xl py-10">
      <div className="mb-8 flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Referral Program</h1>
          <p className="text-muted-foreground mt-1">
            Invite others to Zion AI Marketplace and earn rewards
          </p>
        </div>
        <Button className="flex items-center gap-2" onClick={copyReferralLink}>
          <Share className="h-4 w-4" />
          Share Referral Link
        </Button>
      </div>
      <ReferralStats stats={stats} isLoading={isLoading} />
      <div className="grid gap-6 mt-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <ReferralLink
            referralLink={referralLink}
            onCopy={copyReferralLink}
            onShare={shareOnSocialMedia}
          />
          <Tabs defaultValue="referrals" className="w-full">
            <TabsList className="w-full grid grid-cols-2">
              <TabsTrigger value="referrals" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Your Referrals
              </TabsTrigger>
              <TabsTrigger value="rewards" className="flex items-center gap-2">
                <Share className="h-4 w-4" />
                Rewards
              </TabsTrigger>
            </TabsList>
            <TabsContent value="referrals" className="p-0 border rounded-md mt-6">
              <ReferralTable referrals={referrals} isLoading={isLoading} />
            </TabsContent>
            <TabsContent value="rewards" className="p-0 mt-6">
              <RewardsCard rewards={rewards} isLoading={isLoading} />
            </TabsContent>
          </Tabs>
        </div>
        <div className="space-y-6">
          <ReferralGuide />
          <ReferralLeaderboard />
        </div>
      </div>
    </div>
  )
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  useEffect(() => {;
    if (!isAuthenticated) {;
      toast({;
        title: "Authentication required",;
        description: "Please login to access the referral program",;
        variant: "destructive"}),;
      navigate("/login");
    }


  }, [isAuthenticated, navigate]),

  const referralLink = getReferralLink(),

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


  return (



<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
  useEffect(() => {;
    if (!isAuthenticated) {;
      toast({;
        title: "Authentication required",;
        description: "Please login to access the referral program",;
        variant: "destructive"}),;
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);
  const referralLink = getReferralLink();
  return (

}
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
import { Share, Users } from 'lucide-react',;
import { useNavigate } from 'react-router-dom',;
;
export default function ReferralsPage() {;
  const navigate = useNavigate(),;
=======

;
';
import { useEffect } from 'react',;'
import { useAuth } from '@/hooks/useAuth',;'
import { useReferrals } from '@/hooks/useReferrals',;'
import { ReferralStats } from '@/components/referrals/ReferralStats',;'
import { ReferralLink } from '@/components/referrals/ReferralLink',;'
import { ReferralTable } from '@/components/referrals/ReferralTable',;'
import { RewardsCard } from '@/components/referrals/RewardsCard',;'
import { ReferralGuide } from '@/components/referrals/ReferralGuide',;'
import { ReferralLeaderboard } from '@/components/referrals/ReferralLeaderboard',;"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;'
import { Button } from '@/components/ui/button',;'
import { toast } from '@/hooks/use-toast',;'
import { Share, Users } from 'lucide-react',;'
import { useNavigate } from 'react-router-dom',;


;

export default function ReferralsPage() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const { isAuthenticated } = useAuth(),;
  const {;
    isLoading,;
    referralCode,;
    referrals,;
    rewards,;
    stats,;
    getReferralLink,;
    copyReferralLink,;
    shareOnSocialMedia} = useReferrals(),;
  useEffect(() => {;
    if (!isAuthenticated) {;
<<<<<<< HEAD
      toast({;
        title: "Authentication required",;
        description: "Please login to access the referral program",;
        variant: "destructive"}),;
=======
      toast({;"
        title: "Authentication required",;"
        description: "Please login to access the referral program",;"
        variant: "destructive"}),;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);
  const referralLink = getReferralLink();
<<<<<<< HEAD
  return (;

    <div className="container max-w-7xl py-10">;
=======
"
    <div className="container max-w-7xl py-10">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      <div className="mb-8 flex flex-col md:flex-row justify-between md:items-center gap-4">;
        <div>;"
          <h1 className="text-3xl font-bold tracking-tight">Referral Program</h1>;"
          <p className="text-muted-foreground mt-1">;
            Invite others to Zion AI Marketplace and earn rewards;
          </p>;
        </div>;"
        <Button className="flex items-center gap-2" onClick={copyReferralLink}>;"
          <Share className="h-4 w-4" />;
          Share Referral Link;
        </Button>;
      </div>;
<<<<<<< HEAD

      <ReferralStats stats={stats} isLoading={isLoading} />;

      <div className="grid gap-6 mt-6 lg:grid-cols-3">;
        <div className="lg:col-span-2 space-y-6">;
          <ReferralLink
            referralLink={referralLink} 
            onCopy={copyReferralLink} 
            onShare={shareOnSocialMedia}
          />;

          <Tabs defaultValue="referrals" className="w-full">;
            <TabsList className="w-full grid grid-cols-2">;
              <TabsTrigger value="referrals" className="flex items-center gap-2">;
=======
"
          <Tabs defaultValue="referrals" className="w-full">;"
            <TabsList className="w-full grid grid-cols-2">;"
              <TabsTrigger value="referrals" className="flex items-center gap-2">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                <Users className="h-4 w-4" />;
                Your Referrals;
              </TabsTrigger>;"
              <TabsTrigger value="rewards" className="flex items-center gap-2">;"
                <Share className="h-4 w-4" />;
                Rewards;
              </TabsTrigger>;
            </TabsList>;"
            <TabsContent value="referrals" className="p-0 border rounded-md mt-6">;
              <ReferralTable referrals={referrals} isLoading={isLoading} />;
            </TabsContent>;"
            <TabsContent value="rewards" className="p-0 mt-6">;
              <RewardsCard rewards={rewards} isLoading={isLoading} />;
            </TabsContent>;
          </Tabs>;
        </div>;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <div className="space-y-6">;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
    shareOnSocialMedia} = useReferrals ();
;
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      toast ({
        title: "Authentication required",
        description: "Please login to access the referral program",
        variant: "destructive"}),
      navigate ("/login");
    }
  }, [is_authenticated, navigate]);
;
  const referral_link = getReferralLink ();
;
  return (
    <div className="container max - w-7xl py - 10">;
      <div className="mb - 8 flex flex - col md:flex - row justify - between md:items - center gap - 4">;
        <div>;
          <h1 className="text - 3xl font - bold tracking - tight">Referral Program</h1>;
          <p className="text - muted - foreground mt - 1">;
            Invite others to Zion AI Marketplace and earn rewards;
          </p>;
        </div>;
        <Button className="flex items - center gap - 2" on_click={copyReferralLink}>;
          <Share className="h - 4 w - 4" />;
          Share Referral Link;
        </Button>;
      </div>;
      <ReferralStats stats={stats} is_loading={is_loading} />;
      <div className="grid gap - 6 mt - 6 lg:grid - cols - 3">;
        <div className="lg:col - span - 2 space - y-6">;
          <ReferralLink;
            referral_link={referral_link}
            on_copy={copyReferralLink}
            on_share={shareOnSocialMedia}
          />;
          <Tabs default_value="referrals" className="w - full">;
            <TabsList className="w - full grid grid - cols - 2">;
              <TabsTrigger value="referrals" className="flex items - center gap - 2">;
                <Users className="h - 4 w - 4" />;
                Your Referrals;
              </TabsTrigger>;
              <TabsTrigger value="rewards" className="flex items - center gap - 2">;
                <Share className="h - 4 w - 4" />;
                Rewards;
              </TabsTrigger>;
            </TabsList>;
            <TabsContent value="referrals" className="p - 0 border rounded - md mt - 6">;
              <ReferralTable referrals={referrals} is_loading={is_loading} />;
            </TabsContent>;
            <TabsContent value="rewards" className="p - 0 mt - 6">;
              <RewardsCard rewards={rewards} is_loading={is_loading} />;
            </TabsContent>;
          </Tabs>;
        </div>;
        <div className="space - y-6">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
;
        <div className="space-y-6">;
        <div className="space-y-6">;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

;"
        <div className="space-y-6">;"
        <div className="space-y-6">;



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <ReferralGuide />;
          <ReferralLeaderboard />;
        </div>;
      </div>;
<<<<<<< HEAD
    </div>;
  );
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======






}
    </div>);
    </div>;
  ),; export default function ReferralsPage () {};
  const navigate = useNavigate ();
const {}
  isAuthenticated;
}= useAuth ();
const {}
  isLoading;
referralCode;
referrals;
rewards;
stats;
getReferralLink;
copyReferralLink;
shareOnSocialMedia;
}= useReferrals ();
if (!isAuthenticated) {}
  toast ({}
}
}, [isAuthenticated, navigate]);"
return (<div className="container max-w-7xl py-10" > <div className="mb-8 flex flex-col md:flex-row justify-between md:items-center gap-4" > <div> <h1 className="text-3xl font-bold tracking-tight" >Referral Program</h1> <p className="text-muted-foreground mt-1" > Invite others to Zion AI Marketplace and earn rewards </p> </div> Share Referral Link </Button> </div> <ReferralStats stats= {}
  stats;
}isLoading= {}
  isLoading "
}/> <div className="grid gap-6 mt-6 lg:grid-cols-3" > <div className="lg:col-span-2 space-y-6" > <ReferralLink referralLink= {}
  referralLink;
}onCopy= {}
  copyReferralLink;
}onShare= {}
  shareOnSocialMedia "
}/> <Tabs defaultValue="referrals" className="w-full" > <TabsList className="w-full grid grid-cols-2" > <TabsTrigger value="referrals" className="flex items-center gap-2" > <Users className="h-4 w-4" /> Your Referrals </TabsTrigger> <TabsTrigger value="rewards" className="flex items-center gap-2" > <Share className="h-4 w-4" /> Rewards </TabsTrigger> </TabsList> </TabsContent> </Tabs> </div> <div className="space-y-6" > <ReferralGuide /> <ReferralLeaderboard /> </div> </div> </div>) 
}
    </div>;
  );
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}
;
    </div>);
}
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
        <div className="space-y-6">;;
        <div className="space-y-6">;
        <div className="space-y-6">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        <div className="space-y-6">;;
        <div className="space-y-6">;
        <div className="space-y-6">;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        <div className="space-y-6">;
;
        <div className="space-y-6">;
        <div className="space-y-6">;
          <ReferralGuide />;
          <ReferralLeaderboard />;
        </div>;
      </div>;




}
    </div>);
}
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
    </div>);
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
