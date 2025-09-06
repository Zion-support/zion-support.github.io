
import {
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
} from '@/components/ui/card'

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

          <Trophy className="h-5 w-5" /> Leaderboard
        </CardTitle>
        <CardDescription>Top users by points</CardDescription>
      </CardHeader>
      <CardContent>

=======


        <div className="space-y-2">
          {entries.map((e, idx) => (
            <div
              key={e.name}



>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50"
            >
              <span className="font-medium">
                {idx + 1}. {e.name}
              </span>
<<<<<<< HEAD
