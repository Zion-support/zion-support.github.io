export interface Achievement {

  id: string
  title: string
  description: string
  achieved: boolean


<<<<<<< HEAD
<<<<<<< HEAD




=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",

export interface Achievement {
  id: string,
  title: string,
  description: string,
  achieved: boolean
}

interface AchievementBadgesProps {
  achievements: Achievement[]
import { BadgeCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card';
export interface Achievement {
  id: string;
  title: string;
  description: string;
  achieved: boolean;
interface AchievementBadgesProps {
<<<<<<< HEAD


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  achievements: Achievement[];
}

export interface Achievement {
  id: string
  title: string
  description: string
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

  achieved: boolean
}
interface AchievementBadgesProps {
  achievements: Achievement[]
}
export function AchievementBadges({ achievements }: AchievementBadgesProps) {
import { BadgeCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
export interface Achievement {;
  id: string;
  title: string;
  description: string;
  achieved: boolean;

interface AchievementBadgesProps {;
  achievements: Achievement[];
  achievements: Achievement[];

import { BadgeCheck } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface Achievement {
  id: string,
  title: string,
  description: string,

}

export interface Achievement {;
  id: string,;
  title: string,;
  description: string,;
  achieved: boolean;
}

interface AchievementBadgesProps {;
  achievements: Achievement[];
}

export function AchievementBadges(): any ({ achievements }: AchievementBadgesProps) {;
  return (
<<<<<<< HEAD


    <Card>
      <CardHeader>
        <CardTitle>Achievements</CardTitle>
      </CardHeader>
      <CardContent className='space-y-3'>
        {achievements.map(a => (
          <div key={a.id} className='flex items-start gap-3'>
              className={`h-5 w-5 mt-1 ${a.achieved ? 'text-green-600' : 'text-muted-foreground'}`}
            />
            <div>
              <p className='font-medium'>{a.title}</p>
              <p className='text-sm text-muted-foreground'>{a.description}</p>            </div>
              <p className="font-medium">{a.title}</p>
              <p className="text-sm text-muted-foreground">{a.description}</p>
            <BadgeCheck
              className={`h-5 w-5 mt-1 ${a.achieved ? "text-green-600" : "text-muted-foreground"}`}
            />
            <div>
      <CardContent className="space-y-3">
        {achievements.map((a) => (
          <div key={a.id} className="flex items-start gap-3">
            <BadgeCheck
              className={`h-5 w-5 mt-1 ${a.achieved ? "text-green-600" : "text-muted-foreground"}`}
            />
            <div>
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


              <p className="font-medium">{a.title}</p>
              <p className="text-sm text-muted-foreground">{a.description}</p>
            </div>
          </div>
        ))}



      </CardContent>;
    </Card>;
  );
}
<<<<<<< HEAD
=======

  );
}

  achieved: boolean;
}
interface AchievementBadgesProps {
  achievements: Achievement[];
}
export /**
 * AchievementBadges - Function description
 */
function AchievementBadges() {
  return (
    <Card>;
      <CardHeader>;
        <CardTitle > Achievements</CardTitle>;
      </CardHeader>;
      <CardContent className='space - y-3'>;
        {achievements.map (array => (
          <div key={a.id} className='flex items - start gap - 3'>;
              className={`h - 5 w - 5 mt - 1 ${a.achieved ? 'text - green - 600' : 'text - muted - foreground'}`}
            />;
            <div>;
              <p className='font - medium'>{a.title}</p>;
              <p className='text - sm text - muted - foreground'>{a.description}</p>            </div>;
              <p className="font - medium">{a.title}</p>;
              <p className="text - sm text - muted - foreground">{a.description}</p>;
            <BadgeCheck;
              className={`h - 5 w - 5 mt - 1 ${a.achieved ? "text - green - 600" : "text - muted - foreground"}`}
            />;
            <div>;
              <p className="font - medium">{a.title}</p>;
              <p className="text - sm text - muted - foreground">{a.description}</p>;
            </div>;
          </div>))}
      </CardContent>;
    </Card>);
}
;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
