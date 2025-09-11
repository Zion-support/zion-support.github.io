<<<<<<< HEAD
export interface Achievement {
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
xport interface Achievement {
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export interface Achievement {

  id: string
  title: string
  description: string
  achieved: boolean
<<<<<<< HEAD
interface AchievementBadgesProps {
  achievements: Achievement[]
  achievements: Achievement[]
}
export interface Achievement {
  id: string
  title: string
  description: string
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",

export interface Achievement {
  id: string,
  title: string,
  description: string,
  achieved: boolean
<<<<<<< HEAD
}

interface AchievementBadgesProps {
  achievements: Achievement[]
import { BadgeCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
export interface Achievement {;
  id: string,;
=======


import { BadgeCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card';
export interface Achievement {
  id: string;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  title: string;
  description: string;
  achieved: boolean;
interface AchievementBadgesProps {
  achievements: Achievement[];
  achievements: Achievement[];



}
<<<<<<< HEAD
;
interface AchievementBadgesProps {;
  achievements: Achievement[];
}
=======
export interface Achievement {
  id: string
  title: string
  description: string
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <p className="font-medium">{a.title}</p>
              <p className="text-sm text-muted-foreground">{a.description}</p>
            </div>
          </div>
        ))}
<<<<<<< HEAD
      </CardContent>
    </Card>;
  );
};
}


=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      </CardContent>;
    </Card>;
  );
}

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
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
