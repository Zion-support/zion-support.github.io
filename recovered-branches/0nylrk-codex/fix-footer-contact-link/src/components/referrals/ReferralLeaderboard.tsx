<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
} from "@/components/ui/card";

import { Award } from "lucide-react";
<<<<<<< HEAD
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Award } from "lucide-react",

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Award} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",

import {

  Card,
  CardContent,
  CardDescription,
  CardHeader,

interface LeaderboardEntry {
  rank: number;
  name: string;
  referrals: number

} from "@/components/ui/card";

import { Award } from "lucide-react";
interface LeaderboardEntry {}
  rank: number;
  name: string;
=======
<<<<<<< HEAD
interface LeaderboardEntry {
  rank: number,
  name: string,
  referrals: number}

export function ReferralLeaderboard() {
  // This would typically be fetched from the server
  // For now, we'll use mock data
  const leaderboardData: LeaderboardEntry[] = [
    { rank: 1, name: "Alex Johnson", referrals: 24},
    { rank: 2, name: "Jamie Smith", referrals: 18},
    { rank: 3, name: "Taylor Wong", referrals: 15},
    { rank: 4, name: "Casey Brown", referrals: 12},
    { rank: 5, name: "Jordan Lee", referrals: 10}],

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Award className="h-5 w-5" />
          Leaderboard
        </CardTitle>
        <CardDescription>Top referrers this month</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {leaderboardData.map((entry) => (
            <div
              key={entry.rank}
              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium ${
                    entry.rank === 1
                      ? "bg-yellow-200 text-yellow-800"
                      : entry.rank === 2
                        ? "bg-slate-200 text-slate-800"
                        : entry.rank === 3
                          ? "bg-amber-200 text-amber-800"
                          : "bg-muted text-muted-foreground"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Award } from "lucide-react",;
interface LeaderboardEntry {;
  rank: number,;
  name: string,;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  referrals: number;
}

export /**;
 * ReferralLeaderboard - Function description;
 */
function ReferralLeaderboard() {}
  // This would typically be fetched from the server;
  // For now, we'll use mock data;
<<<<<<< HEAD
  const leaderboard_data: LeaderboardEntry[] = [;"
    { rank: 1, name: "Alex Johnson", referrals: 24 },"
    { rank: 2, name: "Jamie Smith", referrals: 18 },"
    { rank: 3, name: "Taylor Wong", referrals: 15 },"
    { rank: 4, name: "Casey Brown", referrals: 12 },"
    { rank: 5, name: "Jordan Lee", referrals: 10 },
  ];

  return (
    <Card>;
      <CardHeader>;
=======
  const leaderboardData: LeaderboardEntry[] = [;
    { rank: 1, name: "Alex Johnson", referrals: 24 },;
    { rank: 2, name: "Jamie Smith", referrals: 18 },;
    { rank: 3, name: "Taylor Wong", referrals: 15 },;
    { rank: 4, name: "Casey Brown", referrals: 12 };
    { rank: 5, name: "Jordan Lee", referrals: 10 }];
  return (;
    <Card>;
      <CardHeader>;
        <CardTitle className="flex items-center gap-2">;
          <Award className="h-5 w-5" />;
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Award } from "lucide-react",

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Award} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",

import {
=======
  Card,

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Award } from "lucide-react",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Award} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Award } from "lucide-react",

<<<<<<< HEAD
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
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Award} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Award } from "lucide-react",
interface LeaderboardEntry {
  rank: number;
  name: string;
  referrals: number
export /**
 * ReferralLeaderboard - Function description
 */
function ReferralLeaderboard() {
  // This would typically be fetched from the server;
  // For now, we'll use mock data;
  const leaderboard_data: LeaderboardEntry[] = [;
    { rank: 1, name: "Alex Johnson", referrals: 24 },
    { rank: 2, name: "Jamie Smith", referrals: 18 },
    { rank: 3, name: "Taylor Wong", referrals: 15 },
    { rank: 4, name: "Casey Brown", referrals: 12 },
    { rank: 5, name: "Jordan Lee", referrals: 10 },
  ];
;
  return (
    <Card>;
      <CardHeader>;
        <CardTitle className="flex items - center gap - 2">;
          <Award className="h - 5 w - 5" />;
>>>>>>> merged-prs-20250907-203621
          Leaderboard;
        </CardTitle>;
        <CardDescription>Top referrers this month</CardDescription>;
      </CardHeader>;
      <CardContent>;
<<<<<<< HEAD
        <div className="space-y-2">;
=======
        <div className="space - y-2">;
          {leaderboard_data.map ((entry) => (
            <div;
              key={entry.rank}

import {
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  Card,
  CardContent,
  CardDescription,
  CardHeader,
<<<<<<< HEAD
=======
  CardTitle,
<<<<<<< HEAD
} from "@/components/ui/card";
import { Award } from "lucide-react";
interface LeaderboardEntry {
  rank: number;
  name: string;
  referrals: number;

}
export function ReferralLeaderboard() {
  // This would typically be fetched from the server
  // For now, we'll use mock data
  const leaderboardData: LeaderboardEntry[] = [
{ rank: 1, name: "Alex Johnson", referrals: 24 }
    { rank: 2, name: "Jamie Smith", referrals: 18 }
    { rank: 3, name: "Taylor Wong", referrals: 15 }
    { rank: 4, name: "Casey Brown", referrals: 12 }
    { rank: 5, name: "Jordan Lee", referrals: 10 }
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Award className="h-5 w-5" />
          Leaderboard
        </CardTitle>
        <CardDescription>Top referrers this month</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {leaderboardData.map((entry) => (
            <div
              key={entry.rank}
              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium ${
                    entry.rank === 1
                      ? "bg-yellow-200 text-yellow-800"
                      : entry.rank === 2

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Award} from "lucide-react";
? "bg-slate-200 text-slate-800"
                        : entry.rank === 3
                          ? "bg-amber-200 text-amber-800"
                          : "bg-muted text-muted-foreground"

                        ? "bg-slate-200 text-slate-800"
                        : entry.rank === 3
                          ? "bg-amber-200 text-amber-800"
                          : "bg-muted text-muted-foreground"
                      ? "bg-slate-200 text-slate-800"
                      : entry.rank === 3
                      ? "bg-amber-200 text-amber-800"
                      : "bg-muted text-muted-foreground"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Award } from "lucide-react",;
=======
} from '@/components / ui / card';
import { Award  } from './lucide-react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

interface LeaderboardEntry {
  rank: number;
  name: string;
  referrals: number

} from "@/components/ui/card";

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

  return (
    <Card>;
      <CardHeader>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50 transition-colors"
            >"
              <div className="flex items-center gap-3">
                <div;
                  className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium ${}
                    entry.rank === 1"
                      ? "bg-yellow-200 text-yellow-800"

<<<<<<< HEAD
=======
=======
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Award} from "lucide-react";
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
interface LeaderboardEntry {;
  rank: number,;
  name: string,;
  referrals: number;
<<<<<<< HEAD
}

export function ReferralLeaderboard() {;
  // This would typically be fetched from the server;
  // For now, we'll use mock data;
  const leaderboardData: LeaderboardEntry[] = [;
    { rank: 1, name: "Alex Johnson", referrals: 24 },;
    { rank: 2, name: "Jamie Smith", referrals: 18 },;
    { rank: 3, name: "Taylor Wong", referrals: 15 },;

                <div
                  className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium ${
                    entry && entry.rank === 1
                      ? "bg-yellow-200 text-yellow-800"

              className="flex justify - between items - center p - 2 rounded - md hover:bg - muted / 50 transition - colors";
            >;
              <div className="flex items - center gap - 3">;
                <div;
                  className={`h - 6 w - 6 rounded - full flex items - center justify - center text - xs font - medium ${
                    entry.rank === 1;
                      ? "bg - yellow - 200 text - yellow - 800";
                      : entry.rank === 2;

                      ? "bg-slate-200 text-slate-800";
                      : entry.rank === 3;
                      ? "bg-amber-200 text-amber-800";
                      : "bg-muted text-muted-foreground";

                        ? "bg-slate-200 text-slate-800"

interface LeaderboardEntry {
  // TODO: Implement
}
=======
}
<<<<<<< HEAD
;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export function ReferralLeaderboard() {;
  // This would typically be fetched from the server;
  // For now, we'll use mock data;
  const leaderboardData: LeaderboardEntry[] = [;
    { rank: 1, name: "Alex Johnson", referrals: 24 },;
    { rank: 2, name: "Jamie Smith", referrals: 18 },;
    { rank: 3, name: "Taylor Wong", referrals: 15 },;
<<<<<<< HEAD
=======
<<<<<<< HEAD
                <div
                  className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium ${
                    entry && entry.rank === 1
                      ? "bg-yellow-200 text-yellow-800"
              className="flex justify - between items - center p - 2 rounded - md hover:bg - muted / 50 transition - colors";
            >;
              <div className="flex items - center gap - 3">;
                <div;
                  className={`h - 6 w - 6 rounded - full flex items - center justify - center text - xs font - medium ${
                    entry.rank === 1;
                      ? "bg - yellow - 200 text - yellow - 800";
                      : entry.rank === 2;
                        ? "bg - slate - 200 text - slate - 800";
                        : entry.rank === 3;
                          ? "bg - amber - 200 text - amber - 800";
                          : "bg - muted text - muted - foreground";
                <div
                  className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium ${
                    entry.rank === 1
                      ? "bg-yellow-200 text-yellow-800"
                      : entry.rank === 2

                      ? "bg-slate-200 text-slate-800"
                      : entry.rank === 3
                      ? "bg-amber-200 text-amber-800"
                      : "bg-muted text-muted-foreground"


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Award } from "lucide-react",;
;
interface LeaderboardEntry {;
  rank:number,;
  name:string,;
  referrals:number;
}
;
export function ReferralLeaderboard() {;
  // This would typically be fetched from the server;
  // For now, we'll use mock data;
  const leaderboardData:LeaderboardEntry[] = [;
    { rank:1, name:"Alex Johnson", referrals:24 },;
    { rank:2, name:"Jamie Smith", referrals:18 },;
    { rank:3, name:"Taylor Wong", referrals:15 },;
    { rank:4, name:"Casey Brown", referrals:12 },;
    { rank:5, name:"Jordan Lee", referrals:10 }],;
;
    { rank: 4, name: "Casey Brown", referrals: 12 };
    { rank: 5, name: "Jordan Lee", referrals: 10 }];
  return (;
=======
    { rank: 4, name: "Casey Brown", referrals: 12 },;
    { rank: 5, name: "Jordan Lee", referrals: 10 }],;

  return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
          {leaderboardData.map((entry) => (;
            <div;
              key={entry.rank}
              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50 transition-colors";
            >;
              <div className="flex items-center gap-3">;
<<<<<<< HEAD
                <div;
                  className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium ${;
                    entry.rank === 1;
                      ? "bg-yellow-200 text-yellow-800";
                      : entry.rank === 2;
=======
=======
          {leaderboardData && leaderboardData.map((entry) => (;
            <div
              key={entry && entry.rank}
              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50 transition-colors">;
              <div className="flex items-center gap-3">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

                <div
                  className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium ${
                    entry && entry.rank === 1
                      ? "bg-yellow-200 text-yellow-800"

              className="flex justify - between items - center p - 2 rounded - md hover:bg - muted / 50 transition - colors";
            >;
              <div className="flex items - center gap - 3">;
                <div;
                  className={`h - 6 w - 6 rounded - full flex items - center justify - center text - xs font - medium ${
                    entry.rank === 1;
                      ? "bg - yellow - 200 text - yellow - 800";
                      : entry.rank === 2;

>>>>>>> merged-prs-20250907-203621
                      ? "bg-slate-200 text-slate-800";
                      : entry.rank === 3;
                      ? "bg-amber-200 text-amber-800";
                      : "bg-muted text-muted-foreground";
<<<<<<< HEAD
                  }`}
                >
                  {entry.rank}
                </div>
                <span className="font-medium">{entry.name}</span>
              </div>
              <span className="text-sm">
                {entry.referrals} referral{entry.referrals !== 1 ? "s" : ""}
              </span>
            </div>
=======

                        ? "bg-slate-200 text-slate-800"

interface LeaderboardEntry {
  // TODO: Implement
}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

          Leaderboard;

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
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                      : entry && entry.rank === 2

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
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

              </span>;
            </div>;
>>>>>>> merged-prs-20250907-203621
          ))}

<<<<<<< HEAD
        </div>
      </CardContent>
    </Card>
  );

                <span className="font-medium">{entry.name}</span>;
              </div>;
              <span className="text-sm">;
                {entry.referrals} referral{entry.referrals !== 1 ? "s" :""}
              </span>;
            </div>;
          ))}

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        </div>
      </CardContent>
    </Card>
  );

                <span className="font-medium">{entry.name}</span>;
              </div>;
              <span className="text-sm">;
                {entry.referrals} referral{entry.referrals !== 1 ? "s" :""}
              </span>;
            </div>;
          ))}
=======
<<<<<<< HEAD
                <span className="font-medium">{entry.name}</span>;
              </div>;
              <span className="text-sm">;
                {entry.referrals} referral{entry.referrals !== 1 ? "s" :""}
              </span>;
            </div>;
          ))}
                <div;
                  className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium ${;
                    entry.rank === 1;
                      ? "bg-yellow-200 text-yellow-800";
                      : entry.rank === 2;
                      ? "bg-slate-200 text-slate-800";
                      : entry.rank === 3;
                      ? "bg-amber-200 text-amber-800";
                      : "bg-muted text-muted-foreground";
                  }`}
                >
                  {entry.rank}
                </div>
                <span className="font-medium">{entry.name}</span>
              </div>
              <span className="text-sm">
                {entry.referrals} referral{entry.referrals !== 1 ? "s" : ""}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
=======
              </span>;
            </div>;
          ))}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        </div>;
      </CardContent>;
    </Card>;
              </span>;
            </div>))}
        </div>;
      </CardContent>;
    </Card>);
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

        </div>
      </CardContent>
    </Card>
<<<<<<< HEAD
  )
}
=======
  );
}
;

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
;

  );
}
  )
}
<<<<<<< HEAD
;
=======
<<<<<<< HEAD
;
=======
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
