<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD


=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

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
    pendingRevenue: 200 && 200.00
};

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {BarChart, DollarSign, LineChart, TrendingUp, Users} from "lucide-react";

<<<<<<< HEAD
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


=======

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {BarChart, DollarSign, LineChart, TrendingUp, Users} from "lucide-react";

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { BarChart, DollarSign, LineChart, TrendingUp, Users } from "lucide-react",

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import {
=======

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";"
import {Button} from "@/components/ui/button";"
import {BarChart, DollarSign, LineChart, TrendingUp, Users} from "lucide-react";

"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card","
import { Button } from "@/components/ui/button","
import { BarChart, DollarSign, LineChart, TrendingUp, Users } from "lucide-react",





import {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,";
} from "@/components/ui/card";"
import { Button } from "@/components/ui/button";
import {}
  BarChart,
  DollarSign,
  LineChart,
  TrendingUp,
<<<<<<< HEAD
  Users,
} from "lucide-react";  return (
=======
  Users,";
} from "lucide-react";

export function PartnerDashboard() {};
  // Placeholder data - would come from API in real implementation;
  const stats = {}
    totalReferrals: 42,
    pendingReferrals: 8,
    completedReferrals: 34,
    conversionRate: 18.5,
    totalRevenue: 850.0,
    pendingRevenue: 200.0,
  };

  return ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
      </div>      {/* Performance Chart */}
=======
      </div>


      ;




      {/* Performance Chart */}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      <Card className="bg-zion-blue-dark border-zion-blue-light">
        <CardHeader>
          <CardTitle>Performance Overview</CardTitle>
          <CardDescription>
            Track your referral performance over time;
          </CardDescription>
        </CardHeader>"
        <CardContent className="flex justify-center items-center p-6">"
          <div className="text-center p-12 border border-dashed border-zion-blue-light rounded-lg w-full">"
            <LineChart className="h-16 w-16 mx-auto text-zion-slate-light mb-4" />"
            <p className="text-zion-slate-light">
              Detailed analytics will be available soon;
            </p>
          </div>
        </CardContent>
      </Card>

<<<<<<< HEAD
      ;

      {/* Recent Referrals */}
      <Card className="bg-zion-blue-dark border-zion-blue-light">
=======

      ;




      {/* Recent Referrals */}"
      <Card className="bg-zion-blue-dark border-zion-blue-light">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Recent Referrals</CardTitle>
            <CardDescription>Your latest partner referrals</CardDescription>
          </div>"
          <Button variant="outline" size="sm">
            View All;
          </Button>
        </CardHeader>
        <CardContent>"
          <div className="text-center p-12 border border-dashed border-zion-blue-light rounded-lg">"
            <Users className="h-16 w-16 mx-auto text-zion-slate-light mb-4" />"
            <p className="text-zion-slate-light mb-4">No referrals yet</p>"
            <p className="text-xs text-zion-slate-light">
              Start sharing your referral links to earn rewards;
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { BarChart, DollarSign, LineChart, TrendingUp, Users } from "lucide-react",;
export function PartnerDashboard() {;
  // Placeholder data - would come from API in real implementation;
  const stats = {;
    totalReferrals: 42,;
    pendingReferrals: 8,;
    completedReferrals: 34,;
    conversionRate: 18.5,;
    totalRevenue: 850.00;
    pendingRevenue: 200.00;
  };
  return (;
<<<<<<< HEAD
=======
    <div className="space-y-6">;
      {/* Stats Overview */}

<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">;
        <Card className="bg-zion-blue-dark border-zion-blue-light">;
          <CardHeader className="flex flex-row items-center justify-between pb-2">;
            <CardTitle className="text-sm font-medium">Total Referrals</CardTitle>;
            <Users className="h-4 w-4 text-zion-cyan" />;
          </CardHeader>;
          <CardContent>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            <div className="text-2xl font-bold">{stats && stats.totalReferrals}</div>;
            <p className="text-xs text-zion-slate-light">;
              {stats && stats.completedReferrals} completed, {stats && stats.pendingReferrals} pending;
            </p>;
          </CardContent>;
        </Card>;

<<<<<<< HEAD
=======
            <div className="text-2xl font-bold">{stats.totalReferrals}</div>;
            <p className="text-xs text-zion-slate-light">;
              {stats.completedReferrals} completed, {stats.pendingReferrals} pending;
            </p>;
          </CardContent>;
        </Card>;
        ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        <Card className="bg-zion-blue-dark border-zion-blue-light">;
          <CardHeader className="flex flex-row items-center justify-between pb-2">;
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>;
            <TrendingUp className="h-4 w-4 text-zion-purple" />;
          </CardHeader>;
          <CardContent>;
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="text-2xl font-bold">{stats && stats.conversionRate}%</div>;
=======
            <div className="text-2xl font-bold">{stats.conversionRate}%</div>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
            <div className="text-2xl font-bold">{stats && stats.conversionRate}%</div>;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            <p className="text-xs text-zion-slate-light">;
              Of clicks that convert to sign-ups;
            </p>;
          </CardContent>;
        </Card>;
<<<<<<< HEAD
<<<<<<< HEAD

=======
        ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        <Card className="bg-zion-blue-dark border-zion-blue-light">;
          <CardHeader className="flex flex-row items-center justify-between pb-2">;
            <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>;
            <DollarSign className="h-4 w-4 text-green-500" />;
          </CardHeader>;
          <CardContent>;
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="text-2xl font-bold">${stats && stats.totalRevenue}</div>;
            <p className="text-xs text-zion-slate-light">;
              ${stats && stats.pendingRevenue} pending payout;
=======
            <div className="text-2xl font-bold">${stats.totalRevenue}</div>;
            <p className="text-xs text-zion-slate-light">;
              ${stats.pendingRevenue} pending payout;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
            <div className="text-2xl font-bold">${stats && stats.totalRevenue}</div>;
            <p className="text-xs text-zion-slate-light">;
              ${stats && stats.pendingRevenue} pending payout;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            </p>;
          </CardContent>;
        </Card>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD

=======
      ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD

=======
      ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
} from './lucide-react';
export /**
 * PartnerDashboard - Function description
 */
function PartnerDashboard() {
  // Placeholder data - would come from API in real implementation;
  const stats = {
    total_referrals: 42,
    pending_referrals: 8,
    completed_referrals: 34,
    conversion_rate: 18.5,
    total_revenue: 850.0,
    pending_revenue: 200.0,
  }
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
<<<<<<< HEAD
      <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 4">;
        <Card className="bg - zion - blue - dark border - zion - blue - light">;
          <CardHeader className="flex flex - row items - center justify - between pb - 2">;
            <CardTitle className="text - sm font - medium">;
              Total Referrals;
            </CardTitle>;
            <Users className="h - 4 w - 4 text - zion - cyan" />;
          </CardHeader>;
          <CardContent>;
            <div className="text - 2xl font - bold">{stats.total_referrals}</div>;
            <p className="text - xs text - zion - slate - light">;
              {stats.completed_referrals} completed, {stats.pending_referrals}{" "}
              pending;
            </p>;
          </CardContent>;
        </Card>;
        <Card className="bg - zion - blue - dark border - zion - blue - light">;
          <CardHeader className="flex flex - row items - center justify - between pb - 2">;
            <CardTitle className="text - sm font - medium">;
              Conversion Rate;
            </CardTitle>;
            <TrendingUp className="h - 4 w - 4 text - zion - purple" />;
          </CardHeader>;
          <CardContent>;
            <div className="text - 2xl font - bold">{stats.conversion_rate}%</div>;
            <p className="text - xs text - zion - slate - light">;
              Of clicks that convert to sign - ups;
            </p>;
          </CardContent>;
        </Card>;
        <Card className="bg - zion - blue - dark border - zion - blue - light">;
          <CardHeader className="flex flex - row items - center justify - between pb - 2">;
            <CardTitle className="text - sm font - medium">;
              Total Earnings;
            </CardTitle>;
            <DollarSign className="h - 4 w - 4 text - green - 500" />;
          </CardHeader>;
          <CardContent>;
            <div className="text - 2xl font - bold">${stats.total_revenue}</div>;
            <p className="text - xs text - zion - slate - light">;
              ${stats.pending_revenue} pending payout;
            </p>;
          </CardContent>;
        </Card>;
      </div>;
      {/* Performance Chart */}
      <Card className="bg - zion - blue - dark border - zion - blue - light">;
        <CardHeader>;
          <CardTitle > Performance Overview</CardTitle>;
          <CardDescription>;
            Track your referral performance over time;
          </CardDescription>;
        </CardHeader>;
        <CardContent className="flex justify - center items - center p - 6">;
          <div className="text - center p - 12 border border - dashed border - zion - blue - light rounded - lg w - full">;
            <LineChart className="h - 16 w - 16 mx - auto text - zion - slate - light mb - 4" />;
            <p className="text - zion - slate - light">;
              Detailed analytics will be available soon;
            </p>;
          </div>;
        </CardContent>;
      </Card>;
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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              Start sharing your referral links to earn rewards;
            </p>;
          </div>;
        </CardContent>;
      </Card>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


  )


=======
  );
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
}
  );
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
=======
  );
}


    </div>;
  );


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  );

}
    </div>);
}
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
}
);
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
;

}
;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  );
}
  );
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
