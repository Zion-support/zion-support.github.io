import { BadgeCheck } from 'lucide-react'
=======
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export interface Achievement {

  id: string
  title: string
  description: string
  achieved: boolean
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
export interface Achievement {
  id: string,
  title: string,
  description: string,
  achieved: boolean
<<<<<<< HEAD
}

interface AchievementBadgesProps {
  achievements: Achievement[]
=======
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
import { BadgeCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
export interface Achievement {;
  id: string,;
  title: string;
  description: string;
  achieved: boolean;
<<<<<<< HEAD
interface AchievementBadgesProps {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  achievements: Achievement[];
}
<<<<<<< HEAD
=======
export interface Achievement {
  id: string
  title: string
  description: string
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
}
;
interface AchievementBadgesProps {;
  achievements: Achievement[];
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f

  achieved: boolean
}
interface AchievementBadgesProps {
  achievements: Achievement[]
}
export function AchievementBadges({ achievements }: AchievementBadgesProps) {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    <Card>
      <CardHeader>
        <CardTitle>Achievements</CardTitle>
      </CardHeader>
<<<<<<< HEAD
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


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
              <p className="font-medium">{a.title}</p>
              <p className="text-sm text-muted-foreground">{a.description}</p>
            </div>
          </div>
        ))}
<<<<<<< HEAD



      </CardContent>;
    </Card>;
  );
}
<<<<<<< HEAD

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
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
