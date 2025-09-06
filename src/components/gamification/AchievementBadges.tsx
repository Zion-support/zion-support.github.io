import { BadgeCheck } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
xport interface Achievement {

  id: string
  title: string
  description: string
  achieved: boolean
export interface Achievement {
  id: string
  title: string
  description: string
export interface Achievement {
  id: string,
  title: string,
  description: string,
  achieved: boolean
}

interface AchievementBadgesProps {
  achievements: Achievement[]
>>>>>>> }
>>>>>>> 
  achieved: boolean
}
interface AchievementBadgesProps {
  achievements: Achievement[]
}
export function AchievementBadges({ achievements }: AchievementBadgesProps) {
>>>>>>> import { BadgeCheck } from 'lucide-react';
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
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
>>>>>>>               <p className="font-medium">{a.title}</p>
              <p className="text-sm text-muted-foreground">{a.description}</p>
            </div>
          </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>>         ))}
      </CardContent>
    </Card>;
  );
};
}
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 