<<<<<<< HEAD:src_backup/components/gamification/UserLeaderboard.tsx
<<<<<<< HEAD:src/components/gamification/UserLeaderboard.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { Trophy } from 'lucide-react'
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
<<<<<<< HEAD
<<<<<<< HEAD
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import { Trophy } from 'lucide-react'
=======
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
import { Trophy } from 'lucide-react';
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/gamification/UserLeaderboard.tsx

export interface LeaderboardEntry {
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/gamification/UserLeaderboard.tsx

  name: string,
<<<<<<< HEAD
  points: number
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
=======
  points: number;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy } from 'lucide-react'
export interface LeaderboardEntry {
  name: string
  points: number
interface UserLeaderboardProps {
  entries: LeaderboardEntry[]
  entries: LeaderboardEntry[]
}
export interface LeaderboardEntry {
  name: string;
  points: number
origin/cursor/automate-test-improve-and-merge-code-2533
}
interface UserLeaderboardProps {,
  entries: LeaderboardEntry[];
}
export function UserLeaderboard({ entries }:,  UserLeaderboardProps) {
} from '@/components/ui/ card';
import { Trophy } from 'lucide-react';
export interface LeaderboardEntry {
  // TODO: Implement
}
  name: string,
  points: number;

interface UserLeaderboardProps {
  // TODO: Implement
  entries: LeaderboardEntry[];
pr-12325

export function UserLeaderboard({ entries }: UserLeaderboardProps) {
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardHeader,;
  CardTitle,;
} from '@/components/ui/card';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { Trophy } from 'lucide-react';
export interface LeaderboardEntry {;
<<<<<<< HEAD:src_backup/components/gamification/UserLeaderboard.tsx
  name: string;
  points: number;
}
;
interface UserLeaderboardProps {;
  entries: LeaderboardEntry[];
  entries: LeaderboardEntry[];
}

export function UserLeaderboard({ entries }: UserLeaderboardProps) {
  return (
<<<<<<< HEAD:src/components/gamification/UserLeaderboard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
    <Card>
      <CardHeader>
<<<<<<< HEAD
        <CardTitle className="flex items-center gap-2">
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======



>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/gamification/UserLeaderboard.tsx
=======
  name: string;,
  points: number;,
interface UserLeaderboardProps {;,
  entries: LeaderboardEntry[];,
  entries: LeaderboardEntry[];,
}
export interface LeaderboardEntry {;
  name: string,;
  points: number;
}
interface UserLeaderboardProps {;
  entries: LeaderboardEntry[];,
}
export function UserLeaderboard(): any ({ entries }:,  UserLeaderboardProps) {;
  return (
          <Trophy className="h-5 w-5" /> Leaderboard"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Trophy } from 'lucide-react'

export interface LeaderboardEntry {
  name: string,
  points: number
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Trophy } from 'lucide-react';
export interface LeaderboardEntry {;
  name: string;
  points: number;
}
;
interface UserLeaderboardProps {;
  entries: LeaderboardEntry[];
}
export interface LeaderboardEntry {;
  name: string;,

interface UserLeaderboardProps {;
  entries: LeaderboardEntry[];,

  name: string,;

pr-12325

export function UserLeaderboard({ entries }: UserLeaderboardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">


    <Card>
      <CardHeader>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/gamification/UserLeaderboard.tsx
          <Trophy className="h-5 w-5" /> Leaderboard
<CardTitle className='flex items-center gap-2'>
          <Trophy className='h-5 w-5' /> Leaderboard
origin/cursor/automate-test-improve-and-merge-code-2533
        </CardTitle>
        <CardDescription>Top users by points</CardDescription>
      </CardHeader>
      <CardContent>
<<<<<<< HEAD:src_backup/components/gamification/UserLeaderboard.tsx
<<<<<<< HEAD:src/components/gamification/UserLeaderboard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        <div className="space-y-2">
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/gamification/UserLeaderboard.tsx
=======
        <div className="space-y-2">"
          {entries.map((e, idx) => (
            <div
              key={e.name}
              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50""
            >
              <span className="font-medium">"
                {idx + 1}. {e.name}
              </span>
              <span className="text-sm">{e.points} pts</span>"
        <div className="space-y-2">
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/gamification/UserLeaderboard.tsx
<div className='space-y-2'>
origin/cursor/automate-test-improve-and-merge-code-2533
          {entries.map((e, idx) => (
            <div
              key={e.name}
<<<<<<< HEAD:src_backup/components/gamification/UserLeaderboard.tsx
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/gamification/UserLeaderboard.tsx
              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50"
            >
              <span className="font-medium">
                {idx + 1}. {e.name}
              </span>
<<<<<<< HEAD:src_backup/components/gamification/UserLeaderboard.tsx
<<<<<<< HEAD:src/components/gamification/UserLeaderboard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              <span className="text-sm">{e.points} pts</span>
            </div>
          ))}
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/gamification/UserLeaderboard.tsx



              <span className="text-sm">{e.points} pts</span>
            </div>
          ))}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
              <span className="text-sm">{e.points} pts</span>
            </div>
          ))}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/gamification/UserLeaderboard.tsx
        </div>;
      </CardContent>;
    </Card>;
  );
}
<<<<<<< HEAD:src_backup/components/gamification/UserLeaderboard.tsx
<<<<<<< HEAD
=======

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/gamification/UserLeaderboard.tsx
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
              className='flex justify - between items - center p - 2 rounded - md hover:bg - muted / 50'            <div;',
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
<<<<<<< HEAD:src_backup/components/gamification/UserLeaderboard.tsx
<<<<<<< HEAD:src/components/gamification/UserLeaderboard.tsx
<<<<<<< HEAD
=======

    <Card>
      <CardHeader>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/gamification/UserLeaderboard.tsx
=======
}
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/gamification/UserLeaderboard.tsx
              <span className='text-sm'>{e.points} pts</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
<<<<<<< HEAD:src/components/gamification/UserLeaderboard.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD:src_backup/components/gamification/UserLeaderboard.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/gamification/UserLeaderboard.tsx
=======
          <Trophy className="h-5 w-5" /> Leaderboard;"

        <CardDescription>Top users by points
      <CardContent>



"
        <div className="space-y-2">"
</div>
            <div;
              key={e.name}


              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50""
            >
</div>"
              <span className="font-medium">"
</span>


              <span className="text-sm">{e.points} pts</span>"
        </div>;
      ;
    <Card>;

      <CardHeader>;
        <CardTitle className='flex items - center gap - 2'>;

          <Trophy className='h - 5 w - 5' /> Leaderboard        ;

        <CardDescription > Top users by points;
      <CardContent>;

        <div className='space - y-2'>        <CardTitle className="flex items - center gap - 2">;"
          <Trophy className="h - 5 w - 5" /> Leaderboard;"

        <div className='space - y-2'>;
              className='flex justify - between items - center p - 2 rounded - md hover:bg - muted / 50'            <div;
              key = {e.name, }
              className="flex justify - between items - center p - 2 rounded - md hover:bg - muted / 50";"
            >;
              <span className='font - medium'>;
              </span>;
              <span className='text - sm'>{e.points} pts</span>            </div>              <span className="text - sm">{e.points} pts</span>;")
            </div>))}
    );"
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/gamification/UserLeaderboard.tsx
