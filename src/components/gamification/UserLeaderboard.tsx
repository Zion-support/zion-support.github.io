import { Trophy } from 'lucide-react'

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
export interface LeaderboardEntry {

  name: string,
  points: number;

}
interface UserLeaderboardProps {
  entries: LeaderboardEntry[];
}

export function UserLeaderboard({ entries }: UserLeaderboardProps) {
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardHeader,;
  CardTitle,;
} from '@/components/ui/card';
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
  return (

          <Trophy className="h-5 w-5" /> Leaderboard
        </CardTitle>
        <CardDescription>Top users by points</CardDescription>
      </CardHeader>
      <CardContent>

        <div className="space-y-2">
          {entries.map((e, idx) => (
            <div
              key={e.name}

              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50"
            >
              <span className="font-medium">
                {idx + 1}. {e.name}
              </span>

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
