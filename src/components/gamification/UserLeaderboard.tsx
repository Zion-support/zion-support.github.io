<<<<<<< HEAD

import {
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
} from '@/components/ui/card'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
<<<<<<< HEAD
import {;
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { Trophy } from 'lucide-react'
export interface LeaderboardEntry {
  name: string,
  points: number
}

<<<<<<< HEAD
interface UserLeaderboardProps {
  entries: LeaderboardEntry[]
import { Trophy } from 'lucide-react'
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
import { Trophy } from 'lucide-react';
export interface LeaderboardEntry {
  name: string;
  points: number;
interface UserLeaderboardProps {
  entries: LeaderboardEntry[];
  entries: LeaderboardEntry[];
}
export interface LeaderboardEntry {
  name: string,
  points: number;
}
interface UserLeaderboardProps {
  entries: LeaderboardEntry[];
}
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export function UserLeaderboard({ entries }: UserLeaderboardProps) {
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardHeader,;
  CardTitle,;
} from '@/components/ui/card';
<<<<<<< HEAD
import { Trophy } from 'lucide-react';
export interface LeaderboardEntry {;
  name: string;
  points: number;
interface UserLeaderboardProps {;
  entries: LeaderboardEntry[];
  entries: LeaderboardEntry[];
}
export interface LeaderboardEntry {;
  name: string,;
  points: number;
}
interface UserLeaderboardProps {;
  entries: LeaderboardEntry[];
}
export function UserLeaderboard(): any ({ entries }: UserLeaderboardProps) {;
=======
  name: string
  points: number
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Trophy } from 'lucide-react';
export interface LeaderboardEntry {;
  name: string;
  points: number;
}

  name: string

  points: number
}
interface UserLeaderboardProps {
  entries: LeaderboardEntry[]
}
export function UserLeaderboard({ entries }: UserLeaderboardProps) {
  return (
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <Trophy className='h-5 w-5' /> Leaderboard        </CardTitle>
<<<<<<< HEAD
              className='flex justify-between items-center p-2 rounded-md hover:bg-muted/50'            <div
              key = {e.name,}
          ))}
        </div>
      </CardContent>
    </Card>;
  );
};
}
;
=======

=======


    <Card>
      <CardHeader>
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          <Trophy className="h-5 w-5" /> Leaderboard
        </CardTitle>
        <CardDescription>Top users by points</CardDescription>
      </CardHeader>
      <CardContent>
<<<<<<< HEAD
        <div className='space-y-2'>        <CardTitle className="flex items-center gap-2">
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5" /> Leaderboard
        </CardTitle>
        <CardDescription>Top users by points</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='space-y-2'>
          {entries.map((e, idx) => (
            <div
              key={e.name}
              className='flex justify-between items-center p-2 rounded-md hover:bg-muted/50'            <div
              key = {e.name,}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        <div className="space-y-2">
          {entries.map((e, idx) => (
            <div
              key={e.name}



              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50"
            >
              <span className="font-medium">
                {idx + 1}. {e.name}
              </span>
<<<<<<< HEAD
              <span className='text-sm'>{e.points} pts</span>            </div>              <span className="text-sm">{e.points} pts</span>
            </div>
          ))}

              <span className="text-sm">{e.points} pts</span>
            </div>
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
          ))}
        </div>;
      </CardContent>;
    </Card>;
  );
}
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
              <span className="text-sm">{e.points} pts</span>
            </div>
          ))}
        </div>;
      </CardContent>;
    </Card>;
  );
}
;
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
