<<<<<<< HEAD
=======
<<<<<<< HEAD
import {
  Card
  CardContent
  CardDescription
  CardFooter
  CardHeader
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, DollarSign, LineChart, TrendingUp, Users } from "lucide-react";
export function PartnerDashboard() {
  // Placeholder data - would come from API in real implementation
  const stats = $2;
    pendingReferrals: 8,
    completedReferrals: 34,
    conversionRate: 18.5,
    totalRevenue: 850.00,
    pendingRevenue: 200.00
  },
  
  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-zion-blue-dark border-zion-blue-light">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Total Referrals
            </CardTitle>
            <Users className="h-4 w-4 text-zion-cyan" />
          </CardHeader>
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {BarChart, DollarSign, LineChart, TrendingUp, Users} from "lucide-react";
export function PartnerDashboard() {;
  // Placeholder data - would come from API in real implementation;
  const stats = {;
    totalReferrals: 42,;
    pendingReferrals: 8,;
    completedReferrals: 34,;
    conversionRate: 18 && 18.5,;
    totalRevenue: 850 && 850.00,;
    pendingRevenue: 200 && 200.00;
  };

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {BarChart, DollarSign, LineChart, TrendingUp, Users} from "lucide-react";

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { BarChart, DollarSign, LineChart, TrendingUp, Users } from "lucide-react",

import {

  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,";
} from "@/components/ui/card";"
<<<<<<< HEAD
import { Button } from "@/components/ui/button";"
  }
=======
import { Button } from "@/components/ui/button";
import {}
>>>>>>> origin/chore/fix-lint-and-merge
  BarChart,
  DollarSign,
  LineChart,
  TrendingUp,

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    <div className="space-y-6">;
      {/* Stats Overview */}"
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">"
        <Card className="bg-zion-blue-dark border-zion-blue-light">"
          <CardHeader className="flex flex-row items-center justify-between pb-2">"
            <CardTitle className="text-sm font-medium">
              Total Referrals;
            </CardTitle>"
            <Users className="h-4 w-4 text-zion-cyan" />
          </CardHeader>
          <CardContent>"
            <div className="text-2xl font-bold">{stats.totalReferrals}</div>"
            <p className="text-xs text-zion-slate-light">"
              {stats.completedReferrals} completed, {stats.pendingReferrals}{" "}
              pending;
<<<<<<< HEAD
            </p>
          </CardContent>
        </Card>
"
        <Card className="bg-zion-blue-dark border-zion-blue-light">"
          <CardHeader className="flex flex-row items-center justify-between pb-2">"
            <CardTitle className="text-sm font-medium">
              Conversion Rate;
            </CardTitle>"
            <TrendingUp className="h-4 w-4 text-zion-purple" />
          </CardHeader>
          <CardContent>"
            <div className="text-2xl font-bold">{stats.conversionRate}%</div>"
            <p className="text-xs text-zion-slate-light">
              Of clicks that convert to sign-ups;
            </p>
          </CardContent>
        </Card>
"
        <Card className="bg-zion-blue-dark border-zion-blue-light">"
          <CardHeader className="flex flex-row items-center justify-between pb-2">"
            <CardTitle className="text-sm font-medium">
              Total Earnings;
            </CardTitle>"
            <DollarSign className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>"
            <div className="text-2xl font-bold">${stats.totalRevenue}</div>"
            <p className="text-xs text-zion-slate-light">
              ${stats.pendingRevenue} pending payout;
            </p>
          </CardContent>
        </Card>

=======
            </p>
          </CardContent>
        </Card>
"
        <Card className="bg-zion-blue-dark border-zion-blue-light">"
          <CardHeader className="flex flex-row items-center justify-between pb-2">"
            <CardTitle className="text-sm font-medium">
              Conversion Rate;
            </CardTitle>"
            <TrendingUp className="h-4 w-4 text-zion-purple" />
          </CardHeader>
          <CardContent>"
            <div className="text-2xl font-bold">{stats.conversionRate}%</div>"
            <p className="text-xs text-zion-slate-light">
              Of clicks that convert to sign-ups;
            </p>
          </CardContent>
        </Card>
"
        <Card className="bg-zion-blue-dark border-zion-blue-light">"
          <CardHeader className="flex flex-row items-center justify-between pb-2">"
            <CardTitle className="text-sm font-medium">
              Total Earnings;
            </CardTitle>"
            <DollarSign className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>"
            <div className="text-2xl font-bold">${stats.totalRevenue}</div>"
            <p className="text-xs text-zion-slate-light">
              ${stats.pendingRevenue} pending payout;
            </p>
          </CardContent>
        </Card>

=======

import {
  Card
  CardContent
  CardDescription
  CardFooter
  CardHeader
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BarChart
  DollarSign
  LineChart
  TrendingUp
  Users
} from "lucide-react";
export function PartnerDashboard() {
  // Placeholder data - would come from API in real implementation
  const stats = {
    totalReferrals: 42
    pendingReferrals: 8
    completedReferrals: 34
    conversionRate: 18.5
    totalRevenue: 850.0
    pendingRevenue: 200.0
  }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {BarChart, DollarSign, LineChart, TrendingUp, Users} from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { BarChart, DollarSign, LineChart, TrendingUp, Users } from "lucide-react",

<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export function PartnerDashboard() {
  // Placeholder data - would come from API in real implementation
  const stats = {
    totalReferrals: 42,
    pendingReferrals: 8,
    completedReferrals: 34,
    conversionRate: 18.5,
<<<<<<< HEAD
totalRevenue: 850.00,
pendingRevenue: 200.00;
  };

    totalRevenue: 850.00,
    pendingRevenue: 200.00;
  };
    pendingRevenue: 200.00
  },
  
  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-zion-blue-dark border-zion-blue-light">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Total Referrals
            </CardTitle>
            <Users className="h-4 w-4 text-zion-cyan" />
          </CardHeader>
>>>>>>> merged-prs-20250907-203621
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalReferrals}</div>
            <p className="text-xs text-zion-slate-light">
              {stats.completedReferrals} completed, {stats.pendingReferrals}{" "}
              pending
            </p>
          </CardContent>
        </Card>

        <Card className="bg-zion-blue-dark border-zion-blue-light">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Conversion Rate
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-zion-purple" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.conversionRate}%</div>
            <p className="text-xs text-zion-slate-light">
              Of clicks that convert to sign-ups
            </p>
          </CardContent>
        </Card>
<<<<<<< HEAD
=======

>>>>>>> merged-prs-20250907-203621
        <Card className="bg-zion-blue-dark border-zion-blue-light">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Total Earnings
            </CardTitle>
            <DollarSign className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${stats.totalRevenue}</div>
            <p className="text-xs text-zion-slate-light">
              ${stats.pendingRevenue} pending payout
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Performance Chart */}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <Card className="bg-zion-blue-dark border-zion-blue-light">
        <CardHeader>
          <CardTitle>Performance Overview</CardTitle>
          <CardDescription>
<<<<<<< HEAD
            Track your referral performance over time;
          </CardDescription>
=======
<<<<<<< HEAD
            Track your referral performance over time;
          </CardDescription>
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        </CardHeader>"
        <CardContent className="flex justify-center items-center p-6">"
          <div className="text-center p-12 border border-dashed border-zion-blue-light rounded-lg w-full">"
            <LineChart className="h-16 w-16 mx-auto text-zion-slate-light mb-4" />"
            <p className="text-zion-slate-light">
              Detailed analytics will be available soon;
<<<<<<< HEAD
=======
=======
            Track your referral performance over time
          </CardDescription>
>>>>>>> merged-prs-20250907-203621
        </CardHeader>
        <CardContent className="flex justify-center items-center p-6">
          <div className="text-center p-12 border border-dashed border-zion-blue-light rounded-lg w-full">
            <LineChart className="h-16 w-16 mx-auto text-zion-slate-light mb-4" />
            <p className="text-zion-slate-light">
              Detailed analytics will be available soon
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            </p>
          </div>
        </CardContent>
      </Card>
<<<<<<< HEAD

=======
<<<<<<< HEAD
      {/* Recent Referrals */}
      <Card className="bg-zion-blue-dark border-zion-blue-light">
=======
<<<<<<< HEAD

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Recent Referrals</CardTitle>
            <CardDescription>Your latest partner referrals</CardDescription>
<<<<<<< HEAD
          </div>"
          <Button variant="outline" size="sm">
            View All;
          </Button>
        </CardHeader>
=======
<<<<<<< HEAD
          </div>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </CardHeader>
        <CardContent>
          <div className="text-center p-12 border border-dashed border-zion-blue-light rounded-lg">
            <Users className="h-16 w-16 mx-auto text-zion-slate-light mb-4" />
            <p className="text-zion-slate-light mb-4">No referrals yet</p>
            <p className="text-xs text-zion-slate-light">
              Start sharing your referral links to earn rewards
=======
          </div>"
          <Button variant="outline" size="sm">
            View All;
          </Button>
        </CardHeader>
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <CardContent>"
          <div className="text-center p-12 border border-dashed border-zion-blue-light rounded-lg">"
            <Users className="h-16 w-16 mx-auto text-zion-slate-light mb-4" />"
            <p className="text-zion-slate-light mb-4">No referrals yet</p>"
            <p className="text-xs text-zion-slate-light">
              Start sharing your referral links to earn rewards;
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  );
>>>>>>> merged-prs-20250907-203621
  )
}
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { BarChart, DollarSign, LineChart, TrendingUp, Users } from "lucide-react",;
export function PartnerDashboard() {;
  // Placeholder data - would come from API in real implementation;
    totalReferrals: 42,;
    pendingReferrals: 8,;
    completedReferrals: 34,;
    conversionRate: 18.5,;
    totalRevenue: 850.00;
    pendingRevenue: 200.00;
  };
  return (;
=======

      {/* Recent Referrals */}
      <Card className="bg-zion-blue-dark border-zion-blue-light">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Recent Referrals</CardTitle>
            <CardDescription>Your latest partner referrals</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </CardHeader>
        <CardContent>
          <div className="text-center p-12 border border-dashed border-zion-blue-light rounded-lg">
            <Users className="h-16 w-16 mx-auto text-zion-slate-light mb-4" />
            <p className="text-zion-slate-light mb-4">No referrals yet</p>
            <p className="text-xs text-zion-slate-light">
              Start sharing your referral links to earn rewards
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  return (
=======
    totalRevenue: 850.00,
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  );
}
  )
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { BarChart, DollarSign, LineChart, TrendingUp, Users } from "lucide-react",;
    pendingRevenue: 200.00
  },

  
  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    <div className="space-y-6">;
      {/* Stats Overview */}
=======

<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
;
export function PartnerDashboard() {;
  // Placeholder data - would come from API in real implementation;
  const stats = {;
    totalReferrals:42,;
    pendingReferrals:8,;
    completedReferrals:34,;
    conversionRate:18.5,;
    totalRevenue:850.00,;
    pendingRevenue:200.00;
  },;
  ;
  return (;
    <div className="space-y-6">;
      {/* Stats Overview */}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">;
        <Card className="bg-zion-blue-dark border-zion-blue-light">;
          <CardHeader className="flex flex-row items-center justify-between pb-2">;
            <CardTitle className="text-sm font-medium">Total Referrals</CardTitle>;
            <Users className="h-4 w-4 text-zion-cyan" />;
          </CardHeader>;
          <CardContent>;
<<<<<<< HEAD

            <div className="text-2xl font-bold">{stats && stats.totalReferrals}</div>;
=======
<<<<<<< HEAD

            <div className="text-2xl font-bold">{stats && stats.totalReferrals}</div>;
=======
            <div className="text-2xl font-bold">{stats.totalReferrals}</div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <p className="text-xs text-zion-slate-light">;
              {stats && stats.completedReferrals} completed, {stats && stats.pendingReferrals} pending;
            </p>;
          </CardContent>;
        </Card>;
<<<<<<< HEAD

=======
        ;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <Card className="bg-zion-blue-dark border-zion-blue-light">;
          <CardHeader className="flex flex-row items-center justify-between pb-2">;
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>;
            <TrendingUp className="h-4 w-4 text-zion-purple" />;
          </CardHeader>;
          <CardContent>;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
            <div className="text-2xl font-bold">{stats.conversionRate}%</div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <p className="text-xs text-zion-slate-light">;
              Of clicks that convert to sign-ups;
            </p>;
          </CardContent>;
        </Card>;
<<<<<<< HEAD

=======
        ;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <Card className="bg-zion-blue-dark border-zion-blue-light">;
          <CardHeader className="flex flex-row items-center justify-between pb-2">;
            <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>;
            <DollarSign className="h-4 w-4 text-green-500" />;
          </CardHeader>;
          <CardContent>;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
            <div className="text-2xl font-bold">${stats.totalRevenue}</div>;
            <p className="text-xs text-zion-slate-light">;
              ${stats.pendingRevenue} pending payout;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            </p>;
          </CardContent>;
        </Card>;
      </div>;
<<<<<<< HEAD

=======
      ;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      {/* Performance Chart */}
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle>Performance Overview</CardTitle>;
          <CardDescription>Track your referral performance over time</CardDescription>;
        </CardHeader>;
        <CardContent className="flex justify-center items-center p-6">;
          <div className="text-center p-12 border border-dashed border-zion-blue-light rounded-lg w-full">;
            <LineChart className="h-16 w-16 mx-auto text-zion-slate-light mb-4" />;
            <p className="text-zion-slate-light">Detailed analytics will be available soon</p>;
          </div>;
        </CardContent>;
      </Card>;
<<<<<<< HEAD

=======
      ;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      {/* Recent Referrals */}
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader className="flex flex-row items-center justify-between">;
          <div>;
            <CardTitle>Recent Referrals</CardTitle>;
            <CardDescription>Your latest partner referrals</CardDescription>;
          </div>;
          <Button variant="outline" size="sm">View All</Button>;
        </CardHeader>;
        <CardContent>;
          <div className="text-center p-12 border border-dashed border-zion-blue-light rounded-lg">;
            <Users className="h-16 w-16 mx-auto text-zion-slate-light mb-4" />;
            <p className="text-zion-slate-light mb-4">No referrals yet</p>;
            <p className="text-xs text-zion-slate-light">;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
import { Button  } from '@/components / ui / button';
import {
  BarChart,
  DollarSign,
  LineChart,
  TrendingUp,
  Users,

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-zion-blue-dark border-zion-blue-light">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Total Referrals
            </CardTitle>
            <Users className="h-4 w-4 text-zion-cyan" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalReferrals}</div>
            <p className="text-xs text-zion-slate-light">
              {stats.completedReferrals} completed, {stats.pendingReferrals}{" "}
              pending
            </p>
          </CardContent>
        </Card>

        <Card className="bg-zion-blue-dark border-zion-blue-light">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Conversion Rate
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-zion-purple" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.conversionRate}%</div>
            <p className="text-xs text-zion-slate-light">
              Of clicks that convert to sign-ups
            </p>
          </CardContent>
        </Card>

        <Card className="bg-zion-blue-dark border-zion-blue-light">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Total Earnings
            </CardTitle>
            <DollarSign className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${stats.totalRevenue}</div>
            <p className="text-xs text-zion-slate-light">
              ${stats.pendingRevenue} pending payout
            </p>
          </CardContent>
        </Card>
      </div>

      ;

      {/* Performance Chart */}
      </div>      {/* Performance Chart */}
      <Card className="bg-zion-blue-dark border-zion-blue-light">
        <CardHeader>
          <CardTitle>Performance Overview</CardTitle>
          <CardDescription>
            Track your referral performance over time
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center items-center p-6">
          <div className="text-center p-12 border border-dashed border-zion-blue-light rounded-lg w-full">
            <LineChart className="h-16 w-16 mx-auto text-zion-slate-light mb-4" />
            <p className="text-zion-slate-light">
              Detailed analytics will be available soon
            </p>
          </div>
        </CardContent>
      </Card>

      ;

      {/* Recent Referrals */}
      <Card className="bg - zion - blue - dark border - zion - blue - light">;
        <CardHeader className="flex flex - row items - center justify - between">;
          <div>;
            <CardTitle > Recent Referrals</CardTitle>;
            <CardDescription > Your latest partner referrals</CardDescription>;
          </div>;
          <Button variant="outline" size="sm">;
            View All;
          </Button>;
        </CardHeader>;
        <CardContent>;
          <div className="text - center p - 12 border border - dashed border - zion - blue - light rounded - lg">;
            <Users className="h - 16 w - 16 mx - auto text - zion - slate - light mb - 4" />;
            <p className="text - zion - slate - light mb - 4">No referrals yet</p>;
            <p className="text - xs text - zion - slate - light">;

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              Start sharing your referral links to earn rewards;
            </p>;
          </div>;
        </CardContent>;
      </Card>;

  )

});

  );

}
    </div>);
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    </div>);
}
    </div>;
  ),;}
 export function PartnerDashboard () {}
  //Placeholder data - would come from API in real implementation const stats = {};
  totalReferrals: 42;
pendingReferrals: 8;
completedReferrals: 34;
conversionRate: 18.5;
totalRevenue: 850.00;
pendingRevenue: 200.00;
};"
return (<div className="space-y-6" > {}
  /* Stats Overview */ "
}<div className="grid grid-cols-1 md:grid-cols-3 gap-4" > <Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader className="flex flex-row items-center justify-between pb-2" > <CardTitle className="text-sm font-medium" >Total Referrals</CardTitle> <Users className="h-4 w-4 text-zion-cyan" /> </CardHeader> <CardContent> <div className="text-2xl font-bold" > {}
  stats.totalReferrals "
}</div> <p className="text-xs text-zion-slate-light" > {}
  stats.completedReferrals;
}completed, {}
  stats.pendingReferrals "
}pending bg-zion-blue-dark border-zion-blue-light"> <CardHeader className=" flex flex-row items-center justify-between pb-2"> <CardTitle className=" text-sm font-medium">Conversion Rate</CardTitle> <TrendingUp className=" h-4 w-4 text-zion-purple"/> </CardHeader> <CardContent> Of clicks that convert to sign-ups </p> </CardContent> </Card> <Card className=" bg-zion-blue-dark border-zion-blue-light"> <CardHeader className=" flex flex-row items-center justify-between pb-2"> <CardTitle className=" text-sm font-medium">Total Earnings</CardTitle> <DollarSign className=" h-4 w-4 text-green-500"/> </CardHeader> <CardContent> </p> </CardContent> </Card> </div> <CardHeader> <CardTitle>Performance Overview</CardTitle> <CardDescription>Track your referral performance over time</CardDescription> </CardHeader> <CardContent className=" flex justify-center items-center p-6"> <div className=" text-center p-12 border border-dashed border-zion-blue-light rounded-lg w-full"> <LineChart className=" h-16 w-16 mx-auto text-zion-slate-light mb-4"/> <p className=" text-zion-slate-light">Detailed analytics will be available soon</p> </div> </CardContent> </Card> <div> <CardTitle>Recent Referrals</CardTitle> <CardDescription>Your latest partner referrals</CardDescription> </div> <Button variant=" outline"size=" sm">View All</Button> </CardHeader> <CardContent> <div className=" text-center p-12 border border-dashed border-zion-blue-light rounded-lg"> <Users className=" h-16 w-16 mx-auto text-zion-slate-light mb-4"/> <p className=" text-zion-slate-light mb-4">No referrals yet</p> <p className=" text-xs text-zion-slate-light" > Start sharing your referral links to earn rewards </p> </div> </CardContent> </Card> </div>) 
});
}

<<<<<<< HEAD
}
;

}
;

=======
}
<<<<<<< HEAD
;
=======
;

}
;

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  );
}
</div>);
}
    </div>;
  );

  );
}
    </div>);
}
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    </div>);
}
    </div>;
  ),;}
 export function PartnerDashboard () {
  //Placeholder data - would come from API in real implementation const stats = {
  totalReferrals: 42;
pendingReferrals: 8;
completedReferrals: 34;
conversionRate: 18.5;
totalRevenue: 850.00;
pendingRevenue: 200.00 
};
return (<div className="space-y-6" > {
  /* Stats Overview */ 
}<div className="grid grid-cols-1 md:grid-cols-3 gap-4" > <Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader className="flex flex-row items-center justify-between pb-2" > <CardTitle className="text-sm font-medium" >Total Referrals</CardTitle> <Users className="h-4 w-4 text-zion-cyan" /> </CardHeader> <CardContent> <div className="text-2xl font-bold" > {
  stats.totalReferrals 
}</div> <p className="text-xs text-zion-slate-light" > {
  stats.completedReferrals 
}completed, {
  stats.pendingReferrals 
}pending bg-zion-blue-dark border-zion-blue-light"> <CardHeader className=" flex flex-row items-center justify-between pb-2"> <CardTitle className=" text-sm font-medium">Conversion Rate</CardTitle> <TrendingUp className=" h-4 w-4 text-zion-purple"/> </CardHeader> <CardContent> Of clicks that convert to sign-ups </p> </CardContent> </Card> <Card className=" bg-zion-blue-dark border-zion-blue-light"> <CardHeader className=" flex flex-row items-center justify-between pb-2"> <CardTitle className=" text-sm font-medium">Total Earnings</CardTitle> <DollarSign className=" h-4 w-4 text-green-500"/> </CardHeader> <CardContent> </p> </CardContent> </Card> </div> <CardHeader> <CardTitle>Performance Overview</CardTitle> <CardDescription>Track your referral performance over time</CardDescription> </CardHeader> <CardContent className=" flex justify-center items-center p-6"> <div className=" text-center p-12 border border-dashed border-zion-blue-light rounded-lg w-full"> <LineChart className=" h-16 w-16 mx-auto text-zion-slate-light mb-4"/> <p className=" text-zion-slate-light">Detailed analytics will be available soon</p> </div> </CardContent> </Card> <div> <CardTitle>Recent Referrals</CardTitle> <CardDescription>Your latest partner referrals</CardDescription> </div> <Button variant=" outline"size=" sm">View All</Button> </CardHeader> <CardContent> <div className=" text-center p-12 border border-dashed border-zion-blue-light rounded-lg"> <Users className=" h-16 w-16 mx-auto text-zion-slate-light mb-4"/> <p className=" text-zion-slate-light mb-4">No referrals yet</p> <p className=" text-xs text-zion-slate-light" > Start sharing your referral links to earn rewards </p> </div> </CardContent> </Card> </div>) 
<<<<<<< HEAD
});
=======
<<<<<<< HEAD
});
=======
}
);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
}
;

}
<<<<<<< HEAD
;
=======
<<<<<<< HEAD
;
=======
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
