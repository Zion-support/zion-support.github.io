
import {
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
} from '@/components/ui/card'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
<<<<<<< HEAD

import { Trophy } from 'lucide-react'
export interface LeaderboardEntry {
  name: string
  points: number

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
=======
>>>>>>> >>>>>>> import { Trophy } from 'lucide-react'
export interface LeaderboardEntry {
  name: string
  points: number
}

interface UserLeaderboardProps {
  entries: LeaderboardEntry[]
>>>>>>> }
>>>>>>> 
  name: string
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
import { Trophy } from 'lucide-react'
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
>>>>>>> import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardHeader,;
  CardTitle,;
} from '@/components/ui/card';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { Trophy } from 'lucide-react';
export interface LeaderboardEntry {;
  name: string;
  points: number;

interface UserLeaderboardProps {;
  entries: LeaderboardEntry[];
<<<<<<< HEAD

=======
  entries: LeaderboardEntry[];
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}

export interface LeaderboardEntry {;
  name: string,;
  points: number;
}
>>>>>>> 
interface UserLeaderboardProps {;
  entries: LeaderboardEntry[];
}

export function UserLeaderboard(): any ({ entries }: UserLeaderboardProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <Card>
      <CardHeader>
<<<<<<< HEAD

=======
        <CardTitle className='flex items-center gap-2'>
          <Trophy className='h-5 w-5' /> Leaderboard        </CardTitle>
        <CardDescription>Top users by points</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='space-y-2'>        <CardTitle className="flex items-center gap-2">
>>>>>>>           <Trophy className="h-5 w-5" /> Leaderboard
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          <Trophy className="h-5 w-5" /> Leaderboard
>>>>>>>         </CardTitle>
        <CardDescription>Top users by points</CardDescription>
      </CardHeader>
      <CardContent>
<<<<<<< HEAD

=======
        <div className='space-y-2'>
          {entries.map((e, idx) => (
            <div
              key={e.name}
              className='flex justify-between items-center p-2 rounded-md hover:bg-muted/50'            <div
              key = {e.name,}
>>>>>>>               className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50"
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50"
>>>>>>>             >
              <span className="font-medium">
                {idx + 1}. {e.name}
              </span>
<<<<<<< HEAD

=======
              <span className='text-sm'>{e.points} pts</span>            </div>              <span className="text-sm">{e.points} pts</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>;
  );
};
}
>>>>>>> 
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
;

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
