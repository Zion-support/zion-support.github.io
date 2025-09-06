<<<<<<< HEAD
<<<<<<< HEAD
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import { Trophy } from 'lucide-react'

export interface LeaderboardEntry {

  name: string,
<<<<<<< HEAD
  points: number
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { Trophy } from 'lucide-react';
export interface LeaderboardEntry {;
  name: string;
  points: number;
}
;
interface UserLeaderboardProps {;
  entries: LeaderboardEntry[];
  entries: LeaderboardEntry[];
}

export function UserLeaderboard({ entries }: UserLeaderboardProps) {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          <Trophy className="h-5 w-5" /> Leaderboard
        </CardTitle>
        <CardDescription>Top users by points</CardDescription>
      </CardHeader>
      <CardContent>
<<<<<<< HEAD
=======

<<<<<<< HEAD


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        <div className="space-y-2">
          {entries.map((e, idx) => (
            <div
              key={e.name}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50"
            >
              <span className="font-medium">
                {idx + 1}. {e.name}
              </span>
<<<<<<< HEAD
<<<<<<< HEAD
              <span className="text-sm">{e.points} pts</span>
            </div>
          ))}
=======



              <span className="text-sm">{e.points} pts</span>
            </div>
          ))}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        </div>;
      </CardContent>;
    </Card>;
  );
}
<<<<<<< HEAD
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
=======

    <Card>
      <CardHeader>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
