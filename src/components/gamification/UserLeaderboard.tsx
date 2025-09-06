
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

              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50"
            >
              <span className="font-medium">
                {idx + 1}. {e.name}
              </span>
<<<<<<< HEAD
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import {;
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <Trophy className='h-5 w-5' /> Leaderboard        </CardTitle>
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
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
