<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

import {
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
} from "@/components/ui/card";

import { Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Award } from "lucide-react",
=======
<<<<<<< HEAD
<<<<<<< HEAD


  Card,
=======
<<<<<<< HEAD


  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
import { Award  } from './lucide-react';

=======

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Award } from "lucide-react",
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Award} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
<<<<<<< HEAD
import { Award } from "lucide-react",
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import {
=======
import {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  Card,
  CardContent,
  CardDescription,
  CardHeader,
<<<<<<< HEAD
  CardTitle,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
} from '@/components / ui / card';
import { Award  } from './lucide-react';

=======

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Award } from "lucide-react",

=======
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Award} from "lucide-react";
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Award } from "lucide-react",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
interface LeaderboardEntry {
  rank: number;
  name: string;
  referrals: number
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
} from "@/components/ui/card";
=======
  CardTitle,;
} from "@/components/ui/card";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Award } from "lucide-react";
interface LeaderboardEntry {}
  rank: number;
  name: string;
  referrals: number;
}

export /**;
 * ReferralLeaderboard - Function description;
 */
function ReferralLeaderboard() {}
  // This would typically be fetched from the server;
  // For now, we'll use mock data;
  const leaderboard_data: LeaderboardEntry[] = [;"
    { rank: 1, name: "Alex Johnson", referrals: 24 },"
    { rank: 2, name: "Jamie Smith", referrals: 18 },"
    { rank: 3, name: "Taylor Wong", referrals: 15 },"
    { rank: 4, name: "Casey Brown", referrals: 12 },"
    { rank: 5, name: "Jordan Lee", referrals: 10 },
  ];
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

  return (
    <Card>;
      <CardHeader>;
        <CardTitle className="flex items - center gap - 2">;
          <Award className="h - 5 w - 5" />;
          Leaderboard;
        </CardTitle>;
        <CardDescription > Top referrers this month</CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className="space - y-2">;
          {leaderboard_data.map ((entry) => (
            <div;
              key={entry.rank}
<<<<<<< HEAD
=======
<<<<<<< HEAD

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Award} from "lucide-react";
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

  return (
    <Card>
      <CardHeader>"
        <CardTitle className="flex items-center gap-2">"
          <Award className="h-5 w-5" />
          Leaderboard;
        </CardTitle>
        <CardDescription>Top referrers this month</CardDescription>
      </CardHeader>
      <CardContent>"
        <div className="space-y-2">
          {leaderboardData.map((entry) => (
<<<<<<< HEAD
            <div
              key={entry.rank}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
            <div;
              key={entry.rank}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50 transition-colors"
            >"
              <div className="flex items-center gap-3">
                <div;
                  className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium ${}
                    entry.rank === 1"
                      ? "bg-yellow-200 text-yellow-800"
<<<<<<< HEAD
                      : entry.rank === 2
<<<<<<< HEAD
<<<<<<< HEAD
                      ? "bg-slate-200 text-slate-800"
                      : entry.rank === 3
                      ? "bg-amber-200 text-amber-800"
                      : "bg-muted text-muted-foreground"
<<<<<<< HEAD
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Award } from "lucide-react",;
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface LeaderboardEntry {;
  rank: number,;
  name: string,;
  referrals: number;
}
<<<<<<< HEAD
<<<<<<< HEAD

=======
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export function ReferralLeaderboard() {;
  // This would typically be fetched from the server;
  // For now, we'll use mock data;
  const leaderboardData: LeaderboardEntry[] = [;
    { rank: 1, name: "Alex Johnson", referrals: 24 },;
    { rank: 2, name: "Jamie Smith", referrals: 18 },;
    { rank: 3, name: "Taylor Wong", referrals: 15 },;
<<<<<<< HEAD
<<<<<<< HEAD
    { rank: 4, name: "Casey Brown", referrals: 12 },;
    { rank: 5, name: "Jordan Lee", referrals: 10 }],;

  return (
    <Card>;
      <CardHeader>;
        <CardTitle className="flex items-center gap-2">;
          <Award className="h-5 w-5" />;
          Leaderboard;
        </CardTitle>;
        <CardDescription>Top referrers this month</CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className="space-y-2">;
          {leaderboardData && leaderboardData.map((entry) => (;
            <div
              key={entry && entry.rank}
              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50 transition-colors">;
              <div className="flex items-center gap-3">;

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                <div
                  className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium ${
                    entry && entry.rank === 1
                      ? "bg-yellow-200 text-yellow-800"
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              className="flex justify - between items - center p - 2 rounded - md hover:bg - muted / 50 transition - colors";
            >;
              <div className="flex items - center gap - 3">;
                <div;
                  className={`h - 6 w - 6 rounded - full flex items - center justify - center text - xs font - medium ${
                    entry.rank === 1;
                      ? "bg - yellow - 200 text - yellow - 800";
                      : entry.rank === 2;
<<<<<<< HEAD
=======
<<<<<<< HEAD
                        ? "bg - slate - 200 text - slate - 800";
                        : entry.rank === 3;
                          ? "bg - amber - 200 text - amber - 800";
                          : "bg - muted text - muted - foreground";

=======
                <div
                  className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium ${
                    entry.rank === 1
                      ? "bg-yellow-200 text-yellow-800"
                      : entry.rank === 2

                      ? "bg-slate-200 text-slate-800"
                      : entry.rank === 3
                      ? "bg-amber-200 text-amber-800"
                      : "bg-muted text-muted-foreground"

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                      ? "bg-slate-200 text-slate-800";
                      : entry.rank === 3;
                      ? "bg-amber-200 text-amber-800";
                      : "bg-muted text-muted-foreground";
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
                        ? "bg-slate-200 text-slate-800"
=======

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Award} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Award } from "lucide-react",                        ? "bg-slate-200 text-slate-800"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { Award } from "lucide-react",                        ? "bg-slate-200 text-slate-800"
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Award } from "lucide-react";
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
interface LeaderboardEntry {
  // TODO: Implement
}
  rank: number;,
  name: string;
  referrals: number;
}

export /**
 * ReferralLeaderboard - Function description;
 */
function ReferralLeaderboard() {
  // This would typically be fetched from the server;"
  // For now, we'll use mock data;'
  const leaderboard_data: LeaderboardEntry[] = [;'
    { rank: 1, name: "Alex Johnson", referrals: 24 },""
    { rank: 2, name: "Jamie Smith", referrals: 18 },""
    { rank: 3, name: "Taylor Wong", referrals: 15 },""
    { rank: 4, name: "Casey Brown", referrals: 12 },""
    { rank: 5, name: "Jordan Lee", referrals: 10 },"]
  ];

  return (
    <Card>
</Card>
      <CardHeader>
</CardHeader>"
        <CardTitle className="flex items-center gap-2">"
</CardTitle>"
          <Award className="h-5 w-5" />"
</Award>
        </CardTitle>
        <CardDescription>Top referrers this month</CardDescription>
      </CardHeader>
      <CardContent>
</CardContent>"
        <div className="space-y-2">"
</div>
            <div;
              key={entry.rank}"
              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50 transition-colors""
            >
</div>"
              <div className="flex items-center gap-3">"
</div>
                <div;
                  className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium ${
<<<<<<< HEAD
                    entry.rank === 1
                      ? "bg-yellow-200 text-yellow-800"
                      : entry.rank === 2
                        ? "bg-slate-200 text-slate-800"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                        : entry.rank === 3
                          ? "bg-amber-200 text-amber-800"
                          : "bg-muted text-muted-foreground"
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
                  }`}
                >;
                  {entry.rank}
                </div>;
                <span className="font - medium">{entry.name}</span>;
              </div>;
              <span className="text - sm">;
                {entry.referrals} referral{entry.referrals !== 1 ? "s" : ""}

<<<<<<< HEAD
=======
                      : entry.rank === 2"
                        ? "bg-slate-200 text-slate-800"
                        : entry.rank === 3"
                          ? "bg-amber-200 text-amber-800""
                          : "bg-muted text-muted-foreground"`
                  }`}
                >;
                  {entry.rank}
                </div>;"
                <span className="font - medium">{entry.name}</span>;
              </div>;"
              <span className="text - sm">;"
                {entry.referrals} referral{entry.referrals !== 1 ? "s" : ""}

"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Award } from "lucide-react",;
;
interface LeaderboardEntry {;
  rank:number,;
  name:string,;
  referrals:number;
}
;
export function ReferralLeaderboard() { return null; }
    { rank:1, name:"Alex Johnson", referrals:24 },;"
    { rank:2, name:"Jamie Smith", referrals:18 },;"
    { rank:3, name:"Taylor Wong", referrals:15 },;"
    { rank:4, name:"Casey Brown", referrals:12 },;"
    { rank:5, name:"Jordan Lee", referrals:10 }],;
;"
    { rank: 4, name: "Casey Brown", referrals: 12 };"
    { rank: 5, name: "Jordan Lee", referrals: 10 }];
  return (;
    <Card>;
<<<<<<< HEAD
      <CardHeader>;
<<<<<<< HEAD
        <CardTitle className="flex items - center gap-2">;
          <Award className="h - 5 w-5" />;
=======
      <CardHeader>;"
        <CardTitle className="flex items - center gap - 2">;"
          <Award className="h - 5 w - 5" />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        <CardTitle className="flex items - center gap - 2">;
          <Award className="h - 5 w - 5" />;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          Leaderboard;
=======
                    entry.rank === 1;"
                      ? "bg-yellow-200 text-yellow-800""
                      : entry.rank === 2;"
                        ? "bg-slate-200 text-slate-800""
                        : entry.rank === 3;"
                          ? "bg-amber-200 text-amber-800"""
                          : "bg-muted text-muted-foreground""
                  }`}
                >;
</div>
                </div>;"
                <span className="font - medium">{entry.name}</span>;"
              </div>;"
              <span className="text - sm">;"
</span>
    <Card>;
</Card>
      <CardHeader>;
</CardHeader>"
        <CardTitle className="flex items - center gap - 2">;"
</CardTitle>"
          <Award className="h - 5 w - 5" />;"
</Award>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        </CardTitle>;
        <CardDescription > Top referrers this month</CardDescription>;
      </CardHeader>;
      <CardContent>;"
        <div className="space-y-2">;
          {leaderboardData && leaderboardData.map((entry) => (;
            <div;
              key={entry && entry.rank}"
              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50 transition-colors">;"
              <div className="flex items-center gap-3">;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

                      : entry && entry.rank === 2"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                <div
=======
<div
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium ${
                    entry && entry.rank === 1
                      ? "bg-yellow-200 text-yellow-800"
                  }`}
                >;
                  {entry.rank}
                </div>;
                <span className="font - medium">{entry.name}</span>;
              </div>;
              <span className="text - sm">;
                {entry.referrals} referral{entry.referrals !== 1 ? "s" : ""}
                      : entry && entry.rank === 2
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                      ? "bg-slate-200 text-slate-800"
                      : entry && entry.rank === 3"
                      ? "bg-amber-200 text-amber-800""
                      : "bg-muted text-muted-foreground"`
                  }`}>;
                  {entry && entry.rank}
                </div>;"
                <span className="font-medium">{entry && entry.name}</span>;
              </div>;"
              <span className="text-sm">;"
                {entry && entry.referrals} referral{entry && entry.referrals !== 1 ? "s" : ""}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              </span>;
            </div>;
          ))}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
              </span>;
            </div>;
          ))}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        </div>
      </CardContent>
    </Card>
  );
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
}
;

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
}
;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                <span className="font-medium">{entry.name}</span>;
              </div>;
              <span className="text-sm">;
                {entry.referrals} referral{entry.referrals !== 1 ? "s" :""}
              </span>;
            </div>;
          ))}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        </div>
      </CardContent>
    </Card>
  );
}
;
<<<<<<< HEAD
=======

  )
=======

  ),;}
 interface LeaderboardEntry {
  rank: number;
name: string;
referrals: number 
}//This would typically be fetched from the server //For now, we'll use mock data const leaderboardData: LeaderboardEntry[] = [ flex items-center gap-2"> <Award className=" h-5 w-5"/> Leaderboard </CardTitle> <CardDescription>Top referrers this month</CardDescription> </CardHeader> <CardContent> <div key= {
  entry.rank 
}className=" flex justify-between items-center p-2 rounded-md hover:bg-muted/50 transition-colors"> <div className=" flex items-center gap-3"> <div className= {
  `h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium $ {
  entry.rank === 1 ? " bg-yellow-200 text-yellow-800": entry.rank === 2 ? " bg-slate-200 text-slate-800" : entry.rank === 3 > {
  entry.rank 
}</div> </span> </div>) ) 
}</div> </CardContent> </Card>) 
}
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
;

  );
}
  )
}
;
<<<<<<< HEAD
=======



'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
import {
  // TODO: Implement
}
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";""
import { Award } from "lucide-react";"
interface LeaderboardEntry {
  // TODO: Implement
  rank: number;,
  name: string;
  referrals: number;

export /**
 * ReferralLeaderboard - Function description;
 */
function ReferralLeaderboard() {
  // This would typically be fetched from the server;"
  // For now, we'll use mock data;
  const leaderboard_data: LeaderboardEntry[] = [;
    { rank: 1, name: "Alex Johnson", referrals: 24 },""
    { rank: 2, name: "Jamie Smith", referrals: 18 },""
    { rank: 3, name: "Taylor Wong", referrals: 15 },""
    { rank: 4, name: "Casey Brown", referrals: 12 },""
    { rank: 5, name: "Jordan Lee", referrals: 10 },"]
  ];

  return (
    <Card>

      <CardHeader>
"
        <CardTitle className="flex items-center gap-2">"
          <Award className="h-5 w-5" />"

        <CardDescription>Top referrers this month
      <CardContent>
        <div className="space-y-2">"
</CardContent>"
        <div className="space-y-2">;"
</div>
            <div;
              key={entry.rank}"
              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50 transition-colors""
            >
</div>"
              <div className="flex items-center gap-3">"
                  className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium ${
                    entry.rank === 1;"
                      ? "bg-yellow-200 text-yellow-800""
                      : entry.rank === 2;"
                        ? "bg-slate-200 text-slate-800""
                        : entry.rank === 3;"
                          ? "bg-amber-200 text-amber-800"""
                          : "bg-muted text-muted-foreground""`;
                  }`}
                >;
                </div>;"
                <span className="font - medium">{entry.name}</span>;"
              <span className="text - sm">;"
</span>
    <Card>;

      <CardHeader>;
        <CardTitle className="flex items - center gap - 2">;"
          <Award className="h - 5 w - 5" />;"

        ;
        <CardDescription > Top referrers this month;
      <CardContent>;
        <div className="space-y-2">;"
              key={entry && entry.rank}"
              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50 transition-colors">;"
              <div className="flex items-center gap-3">;"
                <div;`;
                    entry && entry.rank === 1;"
                      ? "bg-yellow-200 text-yellow-800""`;
                <span className="font-medium">{entry && entry.name}</span>;"
              <span className="text-sm">;"
              </span>;
            </div>;
                <span className="font-medium">{entry.name}</span>;"
}//This would typically be fetched from the server //For now, we'll use mock data const leaderboardData: LeaderboardEntry[] = [ flex items-center gap-2"> <Award className=" h-5 w-5"/> Leaderboard  <CardDescription>Top referrers this month  <CardContent> <div key= {"
}className=" flex justify-between items-center p-2 rounded-md hover:bg-muted/50 transition-colors"> <div className=" flex items-center gap-3"> <div className= {"
</div>)
}</div> </span> </div>) ) 
}</div>  ) ]"`;
pr-12325
}</div> </CardContent> </Card>) ]"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
