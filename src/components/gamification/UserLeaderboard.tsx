import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Trophy } from 'lucide-react'

export interface LeaderboardEntry {
  name: string;
  points: number;
}

interface UserLeaderboardProps {
  entries: LeaderboardEntry[];
}

export function UserLeaderboard({ entries }: UserLeaderboardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className=&quot;flex items-center gap-2&quot;>
          <Trophy className=&quot;h-5 w-5&quot; /> Leaderboard
        </CardTitle>
        <CardDescription>Top users by points</CardDescription>
      </CardHeader>
      <CardContent>
        <div className=&quot;space-y-2&quot;>
          {entries.map((e, idx) => (
            <div
              key={e.name}
              className=&quot;flex justify-between items-center p-2 rounded-md hover:bg-muted/50&quot;
            >
              <span className=&quot;font-medium&quot;>
                {idx + 1}. {e.name}
              </span>
              <span className=&quot;text-sm&quot;>{e.points} pts</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
