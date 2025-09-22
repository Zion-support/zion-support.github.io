:src_backup/components/gamification/UserLeaderboard.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Trophy } from 'lucide-react'
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
import { Trophy } from 'lucide-react';

export interface LeaderboardEntry {

  name: string,
points: number
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Trophy } from 'lucide-react';
export interface LeaderboardEntry {;
:src_backup/components/gamification/UserLeaderboard.tsx
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
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">

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
          <Trophy className="h-5 w-5" /> Leaderboard
<CardTitle className='flex items-center gap-2'>
          <Trophy className='h-5 w-5' /> Leaderboard
origin/cursor/automate-test-improve-and-merge-code-2533
        </CardTitle>
        <CardDescription>Top users by points</CardDescription>
      </CardHeader>
      <CardContent>
:src_backup/components/gamification/UserLeaderboard.tsx

        <div className="space-y-2">
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
<div className='space-y-2'>
origin/cursor/automate-test-improve-and-merge-code-2533
          {entries.map((e, idx) => (
            <div
              key={e.name}
:src_backup/components/gamification/UserLeaderboard.tsx

              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50"
            >
              <span className="font-medium">
                {idx + 1}. {e.name}
              </span>
:src_backup/components/gamification/UserLeaderboard.tsx
              <span className="text-sm">{e.points} pts</span>
            </div>
          ))}

              <span className="text-sm">{e.points} pts</span>
            </div>
          ))}

              <span className="text-sm">{e.points} pts</span>
            </div>
          ))}
        </div>;
      </CardContent>;
    </Card>;
  );
}
:src_backup/components/gamification/UserLeaderboard.tsx
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
;
:src_backup/components/gamification/UserLeaderboard.tsx

}
;
              <span className='text-sm'>{e.points} pts</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
:src/components/gamification/UserLeaderboard.tsx
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
