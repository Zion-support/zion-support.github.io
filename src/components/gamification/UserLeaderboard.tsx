
>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import {
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
} from '@/components/ui/card'

>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Trophy } from 'lucide-react'
export interface LeaderboardEntry {
  name: string
  points: number
interface UserLeaderboardProps {
  entries: LeaderboardEntry[]
  entries: LeaderboardEntry[]
}
export interface LeaderboardEntry {
  name: string,
  points: number
}

interface UserLeaderboardProps {
  entries: LeaderboardEntry[]
>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Trophy } from 'lucide-react';
export interface LeaderboardEntry {;
  name: string;
  points: number;
}
;
interface UserLeaderboardProps {;
  entries: LeaderboardEntry[];
>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
}

  name: string

  points: number
}
interface UserLeaderboardProps {
  entries: LeaderboardEntry[]
}
export function UserLeaderboard({ entries }: UserLeaderboardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <Trophy className='h-5 w-5' /> Leaderboard        </CardTitle>
        <CardDescription>Top users by points</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='space-y-2'>        <CardTitle className="flex items-center gap-2">
        <CardTitle className="flex items-center gap-2">
>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
        <div className="space-y-2">
          {entries.map((e, idx) => (
            <div
              key={e.name}
>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50"
            >
              <span className="font-medium">
                {idx + 1}. {e.name}
              </span>
              <span className='text-sm'>{e.points} pts</span>            </div>              <span className="text-sm">{e.points} pts</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>;
  );
};
}
              <span className="text-sm">{e.points} pts</span>
            </div>
          ))}
        </div>;
      </CardContent>;
    </Card>;
  );
}
;
>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
