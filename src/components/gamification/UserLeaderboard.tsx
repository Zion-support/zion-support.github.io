

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
import { Trophy } from 'lucide-react'
=======
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
import { Trophy } from 'lucide-react';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export interface LeaderboardEntry {

  name: string,
  points: number;

}
interface UserLeaderboardProps {
  entries: LeaderboardEntry[];
}



export function UserLeaderboard({ entries }: UserLeaderboardProps) {
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          <Trophy className="h-5 w-5" /> Leaderboard
        </CardTitle>
        <CardDescription>Top users by points</CardDescription>
      </CardHeader>
      <CardContent>



        <div className="space-y-2">
          {entries.map((e, idx) => (
            <div
              key={e.name}



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50"
            >
              <span className="font-medium">
                {idx + 1}. {e.name}
              </span>



              <span className="text-sm">{e.points} pts</span>
            </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
          ))}

        </div>;
      </CardContent>;
    </Card>;
  );
}

=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
