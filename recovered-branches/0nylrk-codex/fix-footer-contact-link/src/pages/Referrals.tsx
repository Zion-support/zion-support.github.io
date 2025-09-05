
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useReferrals } from '@/hooks/useReferrals';
import { ReferralStats } from '@/components/referrals/ReferralStats';
import { ReferralLink } from '@/components/referrals/ReferralLink';
import { ReferralTable } from '@/components/referrals/ReferralTable';
import { RewardsCard } from '@/components/referrals/RewardsCard';
import { ReferralGuide } from '@/components/referrals/ReferralGuide';
import { ReferralLeaderboard } from '@/components/referrals/ReferralLeaderboard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Tabs, TabsContent, TabsList, TabsTrigger } from &quot;@/components/ui/tabs&quot;;
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { Share, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export default function ReferralsPage() {
  const navigate = useNavigate(),
  const { isAuthenticated } = useAuth(),
  const {
    isLoading,
    referralCode,
    referrals,
    rewards,
    stats,
    getReferralLink,
    copyReferralLink,
    shareOnSocialMedia} = useReferrals(),
=======

export default function ReferralsPage() {_const _navigate = useNavigate();
  const { isAuthenticated} = useAuth();
  const {_isLoading, _referralCode, _referrals, _rewards, _stats, _getReferralLink, _copyReferralLink, _shareOnSocialMedia} = useReferrals();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  useEffect__(() => {_if (!isAuthenticated) {
      toast({
<<<<<<< HEAD
<<<<<<< HEAD
        title: "Authentication required",
        description: "Please login to access the referral program",
        variant: "destructive"}),
      navigate("/login")
=======
        title: &quot;Authentication required&quot;,
        description: &quot;Please login to access the referral program&quot;,
        variant: &quot;destructive&quot;});
      navigate(&quot;/login&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
        title: "Authentication required", _description: "Please login to access the referral program", _variant: "destructive"});
      navigate("/login");
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  }, [isAuthenticated, navigate]),

<<<<<<< HEAD
  const referralLink = getReferralLink(),
=======
  const _referralLink = getReferralLink();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <div className=&quot;container max-w-7xl py-10&quot;>
      <div className=&quot;mb-8 flex flex-col md:flex-row justify-between md:items-center gap-4&quot;>
        <div>
          <h1 className=&quot;text-3xl font-bold tracking-tight&quot;>Referral Program</h1>
          <p className=&quot;text-muted-foreground mt-1&quot;>
            Invite others to Zion AI Marketplace and earn rewards
          </p>
        </div>
<<<<<<< HEAD
        <Button className=&quot;flex items-center gap-2&quot; onClick={copyReferralLink}>
          <Share className=&quot;h-4 w-4&quot; />
=======
        <Button className="flex items-center gap-2" onClick={_copyReferralLink}>
          <Share className="h-4 w-4" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          Share Referral Link
        </Button>
      </div>

      <ReferralStats stats={_stats} isLoading={_isLoading} />
      
      <div className=&quot;grid gap-6 mt-6 lg:grid-cols-3&quot;>
        <div className=&quot;lg:col-span-2 space-y-6&quot;>
          <ReferralLink 
            referralLink={_referralLink} 
            onCopy={_copyReferralLink} 
            onShare={_shareOnSocialMedia}
          />
          
          <Tabs defaultValue=&quot;referrals&quot; className=&quot;w-full&quot;>
            <TabsList className=&quot;w-full grid grid-cols-2&quot;>
              <TabsTrigger value=&quot;referrals&quot; className=&quot;flex items-center gap-2&quot;>
                <Users className=&quot;h-4 w-4&quot; />
                Your Referrals
              </TabsTrigger>
              <TabsTrigger value=&quot;rewards&quot; className=&quot;flex items-center gap-2&quot;>
                <Share className=&quot;h-4 w-4&quot; />
                Rewards
              </TabsTrigger>
            </TabsList>
<<<<<<< HEAD
            <TabsContent value=&quot;referrals&quot; className=&quot;p-0 border rounded-md mt-6&quot;>
              <ReferralTable referrals={referrals} isLoading={isLoading} />
            </TabsContent>
            <TabsContent value=&quot;rewards&quot; className=&quot;p-0 mt-6&quot;>
              <RewardsCard rewards={rewards} isLoading={isLoading} />
=======
            <TabsContent value="referrals" className="p-0 border rounded-md mt-6">
              <ReferralTable referrals={_referrals} isLoading={_isLoading} />
            </TabsContent>
            <TabsContent value="rewards" className="p-0 mt-6">
              <RewardsCard rewards={_rewards} isLoading={_isLoading} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </TabsContent>
          </Tabs>
        </div>

        <div className=&quot;space-y-6&quot;>
          <ReferralGuide />
          <ReferralLeaderboard />
        </div>
      </div>
    </div>
  )
}
