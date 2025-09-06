<<<<<<< HEAD
<<<<<<<< HEAD:src/components/gamification/UserLeaderboard.tsx

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
} from '@/components/ui/card'
<<<<<<< HEAD

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { Trophy } from 'lucide-react'
export interface LeaderboardEntry {
  name: string
  points: number
<<<<<<< HEAD

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
=======
>>>>>>> >>>>>>> import { Trophy } from 'lucide-react'
export interface LeaderboardEntry {
  name: string
  points: number
=======
<<<<<<< HEAD
interface UserLeaderboardProps {
  entries: LeaderboardEntry[]
  entries: LeaderboardEntry[]
}
export interface LeaderboardEntry {
<<<<<<< HEAD
=======
  name: string,
  points: number
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}

interface UserLeaderboardProps {
  entries: LeaderboardEntry[]
<<<<<<< HEAD
>>>>>>> }
>>>>>>> 
  name: string
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
import { Trophy } from 'lucide-react'
========
<<<<<<< HEAD
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy } from 'lucide-react'
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/gamification/UserLeaderboard.tsx
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
import { Trophy } from 'lucide-react';
export interface LeaderboardEntry {
<<<<<<<< HEAD:src/components/gamification/UserLeaderboard.tsx

  name: string,
  points: number;

========
  name: string;
  points: number;
interface UserLeaderboardProps {
  entries: LeaderboardEntry[];
  entries: LeaderboardEntry[];
}
export interface LeaderboardEntry {
  name: string,
  points: number;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/gamification/UserLeaderboard.tsx
}
interface UserLeaderboardProps {
  entries: LeaderboardEntry[];
}
<<<<<<<< HEAD:src/components/gamification/UserLeaderboard.tsx



export function UserLeaderboard({ entries }: UserLeaderboardProps) {
>>>>>>> import {;
========
export function UserLeaderboard({ entries }: UserLeaderboardProps) {
import {;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/gamification/UserLeaderboard.tsx
  Card,;
  CardContent,;
  CardDescription,;
  CardHeader,;
  CardTitle,;
} from '@/components/ui/card';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { Trophy } from 'lucide-react';
export interface LeaderboardEntry {;
  name: string;
  points: number;
interface UserLeaderboardProps {;
  entries: LeaderboardEntry[];
<<<<<<< HEAD

=======
  entries: LeaderboardEntry[];
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}
export interface LeaderboardEntry {;
  name: string,;
  points: number;
}
<<<<<<<< HEAD:src/components/gamification/UserLeaderboard.tsx
>>>>>>> 
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/gamification/UserLeaderboard.tsx
interface UserLeaderboardProps {;
  entries: LeaderboardEntry[];
}
export function UserLeaderboard(): any ({ entries }: UserLeaderboardProps) {;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Trophy } from 'lucide-react';
export interface LeaderboardEntry {;
  name: string;
  points: number;
}
;
interface UserLeaderboardProps {;
  entries: LeaderboardEntry[];
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

  name: string

  points: number
}
interface UserLeaderboardProps {
  entries: LeaderboardEntry[]
}
export function UserLeaderboard({ entries }: UserLeaderboardProps) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <Card>
      <CardHeader>
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <CardTitle className='flex items-center gap-2'>
          <Trophy className='h-5 w-5' /> Leaderboard        </CardTitle>
        <CardDescription>Top users by points</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='space-y-2'>        <CardTitle className="flex items-center gap-2">
<<<<<<< HEAD
>>>>>>>           <Trophy className="h-5 w-5" /> Leaderboard
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          <Trophy className="h-5 w-5" /> Leaderboard
>>>>>>>         </CardTitle>
=======
=======
        <CardTitle className="flex items-center gap-2">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          <Trophy className="h-5 w-5" /> Leaderboard
        </CardTitle>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <CardDescription>Top users by points</CardDescription>
      </CardHeader>
      <CardContent>
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className='space-y-2'>
          {entries.map((e, idx) => (
            <div
              key={e.name}
              className='flex justify-between items-center p-2 rounded-md hover:bg-muted/50'            <div
              key = {e.name,}
<<<<<<< HEAD
>>>>>>>               className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50"
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50"
>>>>>>>             >
              <span className="font-medium">
                {idx + 1}. {e.name}
              </span>
<<<<<<<< HEAD:src/components/gamification/UserLeaderboard.tsx
<<<<<<< HEAD

=======
=======
=======
        <div className="space-y-2">
          {entries.map((e, idx) => (
            <div
              key={e.name}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50"
            >
              <span className="font-medium">
                {idx + 1}. {e.name}
              </span>
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <span className='text-sm'>{e.points} pts</span>            </div>              <span className="text-sm">{e.points} pts</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>;
  );
};
}
<<<<<<< HEAD
>>>>>>> 
          ))}

========
              <span className="text-sm">{e.points} pts</span>
            </div>
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Trophy } from 'lucide-react';
;
export interface LeaderboardEntry {;
  name:string,;
  points:number;}
;
interface UserLeaderboardProps {;
  entries:LeaderboardEntry[];
}
;
export function UserLeaderboard({ entries } UserLeaderboardProps) {;
  return (;
    <Card>;
      <CardHeader>;
        <CardTitle className="flex items-center gap-2">;
          <Trophy className="h-5 w-5" /> Leaderboard;
        </CardTitle>;
        <CardDescription>Top users by points</CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className="space-y-2">;
          {entries.map((e, idx) => (;
            <div;
              key={e.name}
              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50";
            >;
              <span className="font-medium">;
                {idx + 1}. {e.name}
              </span>;
              <span className="text-sm">{e.points} pts</span>;
            </div>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          ))}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/gamification/UserLeaderboard.tsx
        </div>;
      </CardContent>;
    </Card>;
<<<<<<< HEAD
  );
}
<<<<<<<< HEAD:src/components/gamification/UserLeaderboard.tsx

========
  );
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/gamification/UserLeaderboard.tsx
export /**
 * UserLeaderboard - Function description
 */
function UserLeaderboard() {
  return (
    <Card>;
      <CardHeader>;
        <CardTitle className='flex items - center gap - 2'>;
          <Trophy className='h - 5 w - 5' /> Leaderboard        </CardTitle>;
        <CardDescription > Top users by points</CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className='space - y-2'>        <CardTitle className="flex items - center gap - 2">;
          <Trophy className="h - 5 w - 5" /> Leaderboard;
        </CardTitle>;
        <CardDescription > Top users by points</CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className='space - y-2'>;
          {entries.map ((e, idx) => (
            <div;
              key={e.name}
              className='flex justify - between items - center p - 2 rounded - md hover:bg - muted / 50'            <div;
              key = {e.name, }
              className="flex justify - between items - center p - 2 rounded - md hover:bg - muted / 50";
            >;
              <span className='font - medium'>;
                {idx + 1}. {e.name}
              </span>;
              <span className='text - sm'>{e.points} pts</span>            </div>              <span className="text - sm">{e.points} pts</span>;
            </div>))}
        </div>;
      </CardContent>;
    </Card>);
}
<<<<<<<< HEAD:src/components/gamification/UserLeaderboard.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
;

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
  ),;}
 import {;
  {;
  {;
  Trophy ;
}from 'lucide-react' export interface LeaderboardEntry {;
  name: string;
points: number ;
}interface UserLeaderboardProps {;
  entries: LeaderboardEntry[] ;
}entries ;
}: UserLeaderboardProps) {;
  return (<Card> <CardHeader> <CardTitle className="flex items-center gap-2" > <Trophy className="h-5 w-5" /> Leaderboard </CardTitle> <CardDescription>Top users by points</CardDescription> </CardHeader> <CardContent> <div key= {;
  e.name ";
}className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50" > </div>) ) ;
}</div> </CardContent> </Card>) ;
}'"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/gamification/UserLeaderboard.tsx
=======
=======
              <span className="text-sm">{e.points} pts</span>
            </div>
          ))}
        </div>;
      </CardContent>;
    </Card>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
