<<<<<<< HEAD
<<<<<<< HEAD
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { Trophy } from 'lucide-react'

export interface LeaderboardEntry {
  name: string,
  points: number
}

interface UserLeaderboardProps {
  entries: LeaderboardEntry[]
}
=======

export interface LeaderboardEntry {_name: string;
  points: number;}

interface UserLeaderboardProps {_entries: LeaderboardEntry[];}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export function UserLeaderboard(_{_entries}: UserLeaderboardProps) {_return (_<Card>
      <CardHeader>
        <CardTitle className=&quot;flex items-center gap-2&quot;>
          <Trophy className=&quot;h-5 w-5&quot; /> Leaderboard
        </CardTitle>
        <CardDescription>Top users by points</CardDescription>
      </CardHeader>
      <CardContent>
<<<<<<< HEAD
        <div className=&quot;space-y-2&quot;>
          {entries.map((e, idx) => (
=======
        <div className="space-y-2">
          {entries.map((e, _idx) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <div
              key={e.name}
              className=&quot;flex justify-between items-center p-2 rounded-md hover:bg-muted/50&quot;
            >
<<<<<<< HEAD
              <span className=&quot;font-medium&quot;>
                {idx + 1}. {e.name}
              </span>
              <span className=&quot;text-sm&quot;>{e.points} pts</span>
=======
              <span className="font-medium">
                {_idx + 1}. {_e.name}
              </span>
              <span className="text-sm">{_e.points} pts</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
