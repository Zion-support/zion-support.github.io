
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/referrals/ReferralStats.tsx
=======
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { ReferralStats as ReferralStatsType } from "@/types/referrals",;
import { Award, Share, Star, TrendingUp } from "lucide-react",;
=======
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { ReferralStats as ReferralStatsType } from "@/types/referrals",;
=======
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";""
import { ReferralStats as ReferralStatsType } from "@/types/referrals";""
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { Award, Share, Star, TrendingUp } from 'lucide-react';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/referrals/ReferralStats.tsx
=======
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { ReferralStats as ReferralStatsType } from "@/types/referrals",;
import { Award, Share, Star, TrendingUp } from 'lucide-react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
;
interface ReferralStatsProps {;
  stats: ReferralStatsType;,;
  isLoading:boolean;
}
export function ReferralStats({ stats, isLoading } ReferralStatsProps) {;
  const statCards = [;
    {;
<<<<<<< HEAD
      title:"Total Referrals",;
      value:stats.totalReferrals,;
<<<<<<< HEAD
      icon:<Share className="h-5 w-5 text-muted-foreground" />,;
      description:"People you've invited"},;
    {;
      title:"Completed",;
      value:stats.completedReferrals,;
      icon:<Star className="h-5 w-5 text-muted-foreground" />,;
      description:"Signed up & completed onboarding"},;
    {;
      title:"Pending",;
      value:stats.pendingReferrals,;
      icon:<TrendingUp className="h-5 w-5 text-muted-foreground" />,;
      description:"Not yet completed onboarding"},;
    {;
      title:"Total Rewards",;
      value:stats.totalRewards > 0 ? `$${stats.totalRewards.toFixed(2)}` :"-",;
      icon:<Award className="h-5 w-5 text-muted-foreground" />,;
      description:"Credits earned from referrals"}],;
=======
      icon:<Share className="h-5 w-5 text-muted-foreground" />,,
  description:"People you've invited"},;
=======
      title: "Total Referrals";,;
      value: stats.totalReferrals;,;
      icon: <Share className="h-5 w-5 text-muted-foreground" />;,,
  description: "People you've invited";},;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    {;
      title: "Completed";,;
      value: stats.completedReferrals;,;
      icon: <Star className="h-5 w-5 text-muted-foreground" />;,,
  description: "Signed up & completed onboarding";},;
    {;
      title: "Pending";,;
      value: stats.pendingReferrals;,;
      icon: <TrendingUp className="h-5 w-5 text-muted-foreground" />;,,
  description: "Not yet completed onboarding";},;
    {;
<<<<<<< HEAD
      title:"Total Rewards",;
      value:stats.totalRewards > 0 ? `$${stats.totalRewards.toFixed(2)}` :"-",;
      icon:<Award className="h-5 w-5 text-muted-foreground" />,,
  description:"Credits earned from referrals"}],;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      title: "Total Rewards";,;
      value: stats.totalRewards > 0 ? `$${stats.totalRewards.toFixed(2);}` :"-",;
      icon: <Award className="h-5 w-5 text-muted-foreground" />;,,
  description: "Credits earned from referrals";}],;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
;
  return (;
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">;
      {statCards.map((card, i) => (;
      title: "Total Referrals";,;"
      value: stats.totalReferrals;,;"
      icon: <Share className="h-5 w-5 text-muted-foreground" />;,;"
"
      icon: <Star className="h-5 w-5 text-muted-foreground" />;,;"
      icon: <TrendingUp className="h-5 w-5 text-muted-foreground" />;,;"
      icon: <Award className="h-5 w-5 text-muted-foreground" />;,;"
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">;"
</div>
pr-12325
        <Card key={i}>;
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">;"
            <CardTitle className="text-sm font-medium">{card.title};"
          <CardContent>;
              <div className="h-6 w-20 bg-muted animate-pulse rounded" />;"
              <>;"
                <div className="text-2xl font-bold">{card.value}</div>;""
                <p className="text-xs text-muted-foreground">{card.description}</p>;"
              </>;            )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/referrals/ReferralStats.tsx
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/referrals/ReferralStats.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          </CardContent>;
        </Card>;
      ))}
    </div>;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/referrals/ReferralStats.tsx

=======
  ),;}
 import {;
  {;
  {;
  Award, Share,  Star, TrendingUp ;
}from 'lucide-react' interface ReferralStatsProps {;
  stats: ReferralStatsType;
isLoading: boolean ;
}stats, isLoading ;
}: ReferralStatsProps) {;
  const statCards = [ {;
  icon: <Award className="h-5 w-5 text-muted-foreground" />;";"description: "Credits earned from referrals",
}];
}</CardContent> </Card>) ) ;
:temp_broken_files/referrals/ReferralStats.tsx
}</div>) ;"}'"
}</div>) ;
}'"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/referrals/ReferralStats.tsx
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    </div>;"
  icon: <Award className="h-5 w-5 text-muted-foreground" />;";"description: "Credits earned from referrals";,"

} ) ) ;"
}</div>) ;"}'""
}</div>) ;]"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
