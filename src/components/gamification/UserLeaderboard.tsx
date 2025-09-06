
import {
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
} from '@/components/ui/card'

  name: string,
  points: number
}

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
    <Card>
      <CardHeader>

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

          <Trophy className="h-5 w-5" /> Leaderboard
        </CardTitle>
        <CardDescription>Top users by points</CardDescription>
      </CardHeader>
      <CardContent>
