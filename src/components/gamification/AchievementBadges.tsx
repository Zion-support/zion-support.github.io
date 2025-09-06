import { BadgeCheck } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
export interface Achievement {

  id: string
  title: string
  description: string
  achieved: boolean
interface AchievementBadgesProps {
  achievements: Achievement[]
  achievements: Achievement[]
}
export interface Achievement {
  id: string
  title: string
  description: string
>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
export interface Achievement {
  id: string,
  title: string,
  description: string,
  achieved: boolean
}

interface AchievementBadgesProps {
  achievements: Achievement[]
>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { BadgeCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
export interface Achievement {;
  id: string,;
  title: string;
  description: string;
  achieved: boolean;
}
;
interface AchievementBadgesProps {;
  achievements: Achievement[];
>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
}

  achieved: boolean
}
interface AchievementBadgesProps {
  achievements: Achievement[]
}
export function AchievementBadges({ achievements }: AchievementBadgesProps) {
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
      <CardContent className="space-y-3">
        {achievements.map((a) => (
          <div key={a.id} className="flex items-start gap-3">
            <BadgeCheck
              className={`h-5 w-5 mt-1 ${a.achieved ? "text-green-600" : "text-muted-foreground"}`}
            />
            <div>
>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
              <p className="font-medium">{a.title}</p>
              <p className="text-sm text-muted-foreground">{a.description}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>;
  );
};
}
      </CardContent>;
    </Card>;
  );
}
;
>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
