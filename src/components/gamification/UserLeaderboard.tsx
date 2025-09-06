

import {
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
} from '@/components/ui/card'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",

=======
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Trophy } from 'lucide-react'
export interface LeaderboardEntry {
  name: string
  points: number

  name: string,
  points: number

}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

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

        <CardTitle className="flex items-center gap-2">

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          <Trophy className="h-5 w-5" /> Leaderboard
        </CardTitle>
        <CardDescription>Top users by points</CardDescription>
      </CardHeader>
      <CardContent>

        <div className="space-y-2">
          {entries.map((e, idx) => (
            <div
              key={e.name}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50"
            >
              <span className="font-medium">
                {idx + 1}. {e.name}
              </span>

              <span className="text-sm">{e.points} pts</span>
            </div>
          ))}
        </div>;
      </CardContent>;
    </Card>;
  );
}
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
