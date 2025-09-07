<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useEffect  } from 'react';
import { useAuth  } from '@/hooks/useAuth';
import { useReferrals  } from '@/hooks/useReferrals';
import { ReferralStats  } from '@/components/referrals/ReferralStats';
import { ReferralLink  } from '@/components/referrals/ReferralLink';
import { ReferralTable  } from '@/components/referrals/ReferralTable';
import { RewardsCard  } from '@/components/referrals/RewardsCard';
import { ReferralGuide  } from '@/components/referrals/ReferralGuide';
import { ReferralLeaderboard  } from '@/components/referrals/ReferralLeaderboard';
<<<<<<< HEAD
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
=======
<<<<<<< HEAD
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button  } from '@/components/ui/button';
import { toast  } from '@/hooks/use-toast';
import { Share, Users  } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export default function ReferralsPage() {
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {use_navigate} from 'react-router-dom';

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
<<<<<<< HEAD
export default function ReferralsPage() {
}
    }
    isLoading;
    referralCode;
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const navigate = useNavigate($2);
  const { isAuthenticated } = useAuth($2);
=======

import { useEffect  } from 'react';

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
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
    isLoading;
    referralCode;

=======
    isLoading;
    referralCode;

<<<<<<< HEAD
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

  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const {
    isLoading;
    referralCode;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    referrals;
    rewards;
    stats;
    getReferralLink;
    copyReferralLink;
<<<<<<< HEAD
<<<<<<< HEAD
=======
    shareOnSocialMedia} = useReferrals();
  const {
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useEffect } from 'react','
import { useAuth } from '@/hooks/useAuth','
import { useReferrals } from '@/hooks/useReferrals','
import { ReferralStats } from '@/components/referrals/ReferralStats','
import { ReferralLink } from '@/components/referrals/ReferralLink','
import { ReferralTable } from '@/components/referrals/ReferralTable','
import { RewardsCard } from '@/components/referrals/RewardsCard','
import { ReferralGuide } from '@/components/referrals/ReferralGuide','
import { ReferralLeaderboard } from '@/components/referrals/ReferralLeaderboard','
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs","
import { Button } from '@/components/ui/button','
import { toast } from '@/hooks/use-toast','
import { Share, Users } from 'lucide-react','
import { useNavigate } from 'react-router-dom','
export default function ReferralsPage() {
}
const navigate = useNavigate(),;
  const { isAuthenticated } = useAuth(),  const {
    }
=======
<<<<<<< HEAD

=======
=======
    shareOnSocialMedia} = useReferrals();
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

import {useNavigate} from 'react-router-dom';
export default function ReferralsPage() { return null; }
  const { isAuthenticated } = useAuth();
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

import { useNavigate } from 'react-router-dom',
export default function ReferralsPage() {}
  const navigate = useNavigate(),

>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======
import { useNavigate } from 'react-router-dom',
export default function ReferralsPage() {
  const navigate = useNavigate(),
  const { isAuthenticated } = useAuth(),
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    isLoading,
    referralCode,
    referrals,
    rewards,
    stats,
    getReferralLink,
    copyReferralLink,
    shareOnSocialMedia} = useReferrals(),

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  useEffect(() => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication required"
        description: "Please login to access the referral program"
        variant: "destructive"})
      navigate("/login")
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    }
=======
<<<<<<< HEAD
    }
  }, [isAuthenticated, navigate]);
  const referralLink = getReferralLink();
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  }, [isAuthenticated, navigate]),

  const referralLink = getReferralLink(),

  return (
    <div className="container max-w-7xl py-10">
      <div className="mb-8 flex flex-col md:flex-row justify-between md:items-center gap-4">
<<<<<<< HEAD

=======
<<<<<<< HEAD

        <div>
</div>"
          <h1 className="text-3xl font-bold tracking-tight">Referral Program</h1>""
          <p className="text-muted-foreground mt-1">"
</p>
          </p>
        </div>"
        <Button className="flex items-center gap-2" onClick={copyReferralLink}>"
</Button>"
          <Share className="h-4 w-4" />"
</Share>
        </Button>
      </div>
      <ReferralStats stats={stats} isLoading={isLoading} />
</ReferralStats>"
      <div className="grid gap-6 mt-6 lg:grid-cols-3">"
</div>"
        <div className="lg:col-span-2 space-y-6">"
</div>
          <ReferralLink;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <div>
</div>"
          <h1 className="text-3xl font-bold tracking-tight">Referral Program</h1>""
          <p className="text-muted-foreground mt-1">"
</p>
          </p>
        </div>"
        <Button className="flex items-center gap-2" onClick={copyReferralLink}>"
</Button>"
          <Share className="h-4 w-4" />"
</Share>
        </Button>
      </div>
      <ReferralStats stats={stats} isLoading={isLoading} />
<<<<<<< HEAD
</ReferralStats>"
      <div className="grid gap-6 mt-6 lg:grid-cols-3">"
</div>"
        <div className="lg:col-span-2 space-y-6">"
</div>
          <ReferralLink;
=======
      <div className="grid gap-6 mt-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <ReferralLink
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            referralLink={referralLink}
            onCopy={copyReferralLink}
            onShare={shareOnSocialMedia}
          />
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
</ReferralLink>"
          <Tabs defaultValue="referrals" className="w-full">"
</Tabs>"
            <TabsList className="w-full grid grid-cols-2">"
</TabsList>"
              <TabsTrigger value="referrals" className="flex items-center gap-2">"
</TabsTrigger>"
                <Users className="h-4 w-4" />"
</Users>
              </TabsTrigger>"
              <TabsTrigger value="rewards" className="flex items-center gap-2">"
</TabsTrigger>"
                <Share className="h-4 w-4" />"
</Share>
<<<<<<< HEAD
=======
              </TabsTrigger>
            </TabsList>"
            <TabsContent value="referrals" className="p-0 border rounded-md mt-6">"
</TabsContent>
              <ReferralTable referrals={referrals} isLoading={isLoading} />
</ReferralTable>
            </TabsContent>"
            <TabsContent value="rewards" className="p-0 mt-6">"
</TabsContent>
              <RewardsCard rewards={rewards} isLoading={isLoading} />
</RewardsCard>
            </TabsContent>
          </Tabs>
        </div>"
        <div className="space-y-6">"
</div>
          <ReferralGuide />
</ReferralGuide>
          <ReferralLeaderboard />
</ReferralLeaderboard>
        </div>
      </div>
=======
          <Tabs defaultValue="referrals" className="w-full">
            <TabsList className="w-full grid grid-cols-2">
              <TabsTrigger value="referrals" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Your Referrals
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              </TabsTrigger>
            </TabsList>"
            <TabsContent value="referrals" className="p-0 border rounded-md mt-6">"
</TabsContent>
              <ReferralTable referrals={referrals} isLoading={isLoading} />
</ReferralTable>
            </TabsContent>"
            <TabsContent value="rewards" className="p-0 mt-6">"
</TabsContent>
              <RewardsCard rewards={rewards} isLoading={isLoading} />
</RewardsCard>
            </TabsContent>
          </Tabs>
        </div>"
        <div className="space-y-6">"
</div>
          <ReferralGuide />
</ReferralGuide>
          <ReferralLeaderboard />
</ReferralLeaderboard>
        </div>
      </div>
<<<<<<< HEAD
=======
    </div>
  )
<<<<<<< HEAD
}
}
;
=======
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  useEffect(() => {;
    if (!isAuthenticated) {;
      toast({;
        title: "Authentication required",
        description: "Please login to access the referral program",;
        variant: "destructive"}),;
      navigate("/login");
    }

  }, [isAuthenticated, navigate]),

  const referralLink = getReferralLink(),

  return (

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


<<<<<<< HEAD
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
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
  }
  const { isAuthenticated } = useAuth(),;
    }
=======
  const navigate = useNavigate(),;

  const { isAuthenticated } = useAuth(),;
  const {;
>>>>>>> origin/chore/fix-lint-and-merge
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

      navigate("/login");
    }
  }, [isAuthenticated, navigate]);
  const referralLink = getReferralLink();
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
  return (;
<<<<<<< HEAD
;
  useEffect(() => {;
    if (!isAuthenticated) {;
      toast({;
        title:"Authentication required",;
        description:"Please login to access the referral program",;
        variant:"destructive"}),;
      navigate("/login"),;
    }
  }, [isAuthenticated, navigate]),;
;
  const referralLink = getReferralLink(),;
;
  return (;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <div className="container max-w-7xl py-10">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
;
      <ReferralStats stats={stats} isLoading={isLoading} />;
      ;
      <div className="grid gap-6 mt-6 lg:grid-cols-3">;
        <div className="lg:col-span-2 space-y-6">;
          <ReferralLink ;
      <ReferralStats stats={stats} isLoading={isLoading} />;
      <div className="grid gap-6 mt-6 lg:grid-cols-3">;
        <div className="lg:col-span-2 space-y-6">;
          <ReferralLink;
            referralLink={referralLink} ;
            onCopy={copyReferralLink} ;
            onShare={shareOnSocialMedia}
          />;
=======

      <ReferralStats stats={stats} isLoading={isLoading} />;
</ReferralStats>
"
      <div className="grid gap-6 mt-6 lg:grid-cols-3">;"
</div>"
        <div className="lg:col-span-2 space-y-6">;"
</div>
          <ReferralLink;
            referralLink={referralLink} 
            onCopy={copyReferralLink} 
            onShare={shareOnSocialMedia}
          />;

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
;
      <ReferralStats stats={stats} isLoading={isLoading} />;
      ;
      <div className="grid gap-6 mt-6 lg:grid-cols-3">;
        <div className="lg:col-span-2 space-y-6">;
          <ReferralLink ;
      <ReferralStats stats={stats} isLoading={isLoading} />;
      <div className="grid gap-6 mt-6 lg:grid-cols-3">;
        <div className="lg:col-span-2 space-y-6">;
          <ReferralLink;
            referralLink={referralLink} ;
            onCopy={copyReferralLink} ;
            onShare={shareOnSocialMedia}
          />;
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <Tabs defaultValue="referrals" className="w-full">;
            <TabsList className="w-full grid grid-cols-2">;
              <TabsTrigger value="referrals" className="flex items-center gap-2">;

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
=======
<<<<<<< HEAD
;
        <div className="space-y-6">;
        <div className="space-y-6">;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

          <ReferralGuide />;
          <ReferralLeaderboard />;
        </div>;
      </div>;

}

}
;
    </div>);
}

        <div className="space-y-6">;
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
        <div className="space-y-6">;
  return ("
    <div className="container max-w-7xl py-10">"
</ReferralLink>
"
          <Tabs defaultValue="referrals" className="w-full">;"
</Tabs>"
            <TabsList className="w-full grid grid-cols-2">;"
</TabsList>"
              <TabsTrigger value="referrals" className="flex items-center gap-2">;"
</TabsTrigger>"
                <Users className="h-4 w-4" />;"
</Users>
              </TabsTrigger>;"
              <TabsTrigger value="rewards" className="flex items-center gap-2">;"
</TabsTrigger>"
                <Share className="h-4 w-4" />;"
</Share>
              </TabsTrigger>;
            </TabsList>;"
            <TabsContent value="referrals" className="p-0 border rounded-md mt-6">;"
</TabsContent>
              <ReferralTable referrals={referrals} isLoading={isLoading} />;
</ReferralTable>
            </TabsContent>;"
            <TabsContent value="rewards" className="p-0 mt-6">;"
</TabsContent>

              <RewardsCard rewards={rewards} isLoading={isLoading} />;
</RewardsCard>
            </TabsContent>;
          </Tabs>;
        </div>;
        <div className="space - y-6">;
<<<<<<< HEAD
;
        <div className="space-y-6">;
        <div className="space-y-6">;
=======
<<<<<<< HEAD
;
        <div className="space-y-6">;
        <div className="space-y-6">;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <ReferralGuide />;
          <ReferralLeaderboard />;
        </div>;

        </div>;"
        <div className="space-y-6">;"
</div>"
      <div className="mb-8 flex flex-col md:flex-row justify-between md:items-center gap-4">"
</div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Referral Program</h1>""
          <p className="text-muted-foreground mt-1">"
</p>
        <Button className="flex items-center gap-2" onClick={copyReferralLink}>"
"
          <Share className="h-4 w-4" />"

      <ReferralStats stats={stats} isLoading={isLoading} />
      <div className="grid gap-6 mt-6 lg:grid-cols-3">"
        <div className="lg:col-span-2 space-y-6">"
          <ReferralLink;
            referralLink={referralLink}
            onCopy={copyReferralLink}
            onShare={shareOnSocialMedia}
          />
          <Tabs defaultValue="referrals" className="w-full">"
            <TabsList className="w-full grid grid-cols-2">"
              <TabsTrigger value="referrals" className="flex items-center gap-2">"
                <Users className="h-4 w-4" />"

              <TabsTrigger value="rewards" className="flex items-center gap-2">"

            <TabsContent value="referrals" className="p-0 border rounded-md mt-6">"

              <ReferralTable referrals={referrals} isLoading={isLoading} />

            <TabsContent value="rewards" className="p-0 mt-6">"

              <RewardsCard rewards={rewards} isLoading={isLoading} />

        <div className="space-y-6">"
          <ReferralGuide />

          <ReferralLeaderboard />

    <div className="container max-w-7xl py-10">;"
      <div className="mb-8 flex flex-col md:flex-row justify-between md:items-center gap-4">;"
        <div>;
          <h1 className="text-3xl font-bold tracking-tight">Referral Program</h1>;""
          <p className="text-muted-foreground mt-1">;"
          </p>;
        </div>;"
        <Button className="flex items-center gap-2" onClick={copyReferralLink}>;"
          <Share className="h-4 w-4" />;"

        ;
      </div>;
      <ReferralStats stats={stats} isLoading={isLoading} />;

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======



<<<<<<< HEAD
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
}
=======
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
