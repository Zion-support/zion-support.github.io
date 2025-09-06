import { BadgeCheck } from 'lucide-react';
<<<<<<< HEAD
import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card';
export interface Achievement {
  id: string;
  title: string;
  description: string;
  achieved: boolean;
interface AchievementBadgesProps {
  achievements: Achievement[];
  achievements: Achievement[];
}
export interface Achievement {
  id: string
  title: string
  description: string
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
    <Card>
      <CardHeader>
        <CardTitle>Achievements</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {achievements.map((a) => (
          <div key={a.id} className="flex items-start gap-3">
            <BadgeCheck
              className={`h-5 w-5 mt-1 ${a.achieved ? "text-green-600" : "text-muted-foreground"}`}
            />
            <div>
              <p className="font-medium">{a.title}</p>
              <p className="text-sm text-muted-foreground">{a.description}</p>
            </div>
          </div>
        ))}
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
=======
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
;
export interface Achievement {;
  id:string,;
  title:string,;
  description:string,;
  achieved:boolean;}
;
interface AchievementBadgesProps {;
  achievements:Achievement[];
}
;
export function AchievementBadges({ achievements } AchievementBadgesProps) {;
  return (;
    <Card>;
      <CardHeader>;
        <CardTitle>Achievements</CardTitle>;
      </CardHeader>;
      <CardContent className="space-y-3">;
        {achievements.map((a) => (;
          <div key={a.id} className="flex items-start gap-3">;
            <BadgeCheck;
              className={`h-5 w-5 mt-1 ${a.achieved ? "text-green-600" :"text-muted-foreground"}`}
            />;
            <div>;
              <p className="font-medium">{a.title}</p>;
              <p className="text-sm text-muted-foreground">{a.description}</p>;
            </div>;
          </div>;
        ))}
      </CardContent>;
    </Card>;
  ),;}
 export interface Achievement {;
  id: string;
title: string;
description: string;
achieved: boolean ;
}interface AchievementBadgesProps {;
  achievements: Achievement[] ;
}achievements ;
}: AchievementBadgesProps) {;
  return (<Card> <CardHeader> <CardTitle>Achievements</CardTitle> </CardHeader> <CardContent className="space-y-3" > {;
  achievements.map ( (a) => (<div key= {;
  a.id ";
}className="flex items-start gap-3" > <BadgeCheck </div> </div>) ) ;
}</CardContent> </Card>) ;
}"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
