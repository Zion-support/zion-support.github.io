<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/referrals/ReferralLeaderboard.tsx


<<<<<<< HEAD
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Award} from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Award } from "lucide-react",

=======
  Card,
========
<<<<<<< HEAD
Card,
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/referrals/ReferralLeaderboard.tsx
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
import { Award  } from './lucide-react';
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/referrals/ReferralLeaderboard.tsx

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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/referrals/ReferralLeaderboard.tsx
=======

import {
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
} from "@/components/ui/card";

import { Award } from "lucide-react";

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface LeaderboardEntry {
  rank: number;
  name: string;
  referrals: number
<<<<<<< HEAD
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/referrals/ReferralLeaderboard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/referrals/ReferralLeaderboard.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/referrals/ReferralLeaderboard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/referrals/ReferralLeaderboard.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/referrals/ReferralLeaderboard.tsx
<<<<<<< HEAD
=======

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium ${
                    entry.rank === 1
                      ? "bg-yellow-200 text-yellow-800"
                      : entry.rank === 2
<<<<<<< HEAD

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Award } from "lucide-react",;
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/referrals/ReferralLeaderboard.tsx
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Award} from "lucide-react";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
? "bg-slate-200 text-slate-800"
                        : entry.rank === 3
                          ? "bg-amber-200 text-amber-800"
                          : "bg-muted text-muted-foreground"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Award } from "lucide-react",;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface LeaderboardEntry {;
  rank: number,;
  name: string,;
  referrals: number;
}
<<<<<<< HEAD
=======
;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export function ReferralLeaderboard() {;
  // This would typically be fetched from the server;
  // For now, we'll use mock data;
  const leaderboardData: LeaderboardEntry[] = [;
    { rank: 1, name: "Alex Johnson", referrals: 24 },;
    { rank: 2, name: "Jamie Smith", referrals: 18 },;
    { rank: 3, name: "Taylor Wong", referrals: 15 },;
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/referrals/ReferralLeaderboard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/referrals/ReferralLeaderboard.tsx
                <div
                  className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium ${
                    entry && entry.rank === 1
                      ? "bg-yellow-200 text-yellow-800"
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/referrals/ReferralLeaderboard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/referrals/ReferralLeaderboard.tsx
              className="flex justify - between items - center p - 2 rounded - md hover:bg - muted / 50 transition - colors";
            >;
              <div className="flex items - center gap - 3">;
                <div;
                  className={`h - 6 w - 6 rounded - full flex items - center justify - center text - xs font - medium ${
                    entry.rank === 1;
                      ? "bg - yellow - 200 text - yellow - 800";
                      : entry.rank === 2;
<<<<<<< HEAD
                      ? "bg-slate-200 text-slate-800";
                      : entry.rank === 3;
                      ? "bg-amber-200 text-amber-800";
                      : "bg-muted text-muted-foreground";

=======
                        ? "bg - slate - 200 text - slate - 800";
                        : entry.rank === 3;
                          ? "bg - amber - 200 text - amber - 800";
                          : "bg - muted text - muted - foreground";
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/referrals/ReferralLeaderboard.tsx

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======

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
=======
    { rank: 4, name: "Casey Brown", referrals: 12 };
    { rank: 5, name: "Jordan Lee", referrals: 10 }];
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (;
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
          {leaderboardData.map((entry) => (;
<<<<<<< HEAD
            <div ;
=======
            <div;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              key={entry.rank}
              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50 transition-colors";
            >;
              <div className="flex items-center gap-3">;
<<<<<<< HEAD
                <div ;
                  className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium ${;
                    entry.rank === 1;
                      ? "bg-yellow-200 text-yellow-800";
                      :entry.rank === 2;
                      ? "bg-slate-200 text-slate-800";
                      :entry.rank === 3;
                      ? "bg-amber-200 text-amber-800";
                      :"bg-muted text-muted-foreground";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/referrals/ReferralLeaderboard.tsx
                  }`}
                >;
                  {entry.rank}
                </div>;
<<<<<<< HEAD
                <span className="font - medium">{entry.name}</span>;
              </div>;
              <span className="text - sm">;
                {entry.referrals} referral{entry.referrals !== 1 ? "s" : ""}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/referrals/ReferralLeaderboard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/referrals/ReferralLeaderboard.tsx
                      : entry && entry.rank === 2
                      ? "bg-slate-200 text-slate-800"
                      : entry && entry.rank === 3
                      ? "bg-amber-200 text-amber-800"
                      : "bg-muted text-muted-foreground"
                  }`}>;
                  {entry && entry.rank}
                </div>;
                <span className="font-medium">{entry && entry.name}</span>;
              </div>;
              <span className="text-sm">;
                {entry && entry.referrals} referral{entry && entry.referrals !== 1 ? "s" : ""}
=======
                <span className="font-medium">{entry.name}</span>;
              </div>;
              <span className="text-sm">;
                {entry.referrals} referral{entry.referrals !== 1 ? "s" :""}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              </span>;
            </div>;
          ))}
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        </div>
      </CardContent>
    </Card>

<<<<<<< HEAD
=======
        </div>;
      </CardContent>;
    </Card>;
<<<<<<< HEAD
  );
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/referrals/ReferralLeaderboard.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/referrals/ReferralLeaderboard.tsx
              </span>;
            </div>))}
        </div>;
      </CardContent>;
    </Card>);
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/referrals/ReferralLeaderboard.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  )
}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/referrals/ReferralLeaderboard.tsx
=======
  );
}
}
;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
