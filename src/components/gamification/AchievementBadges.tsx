<<<<<<< HEAD
import { BadgeCheck } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
=======
import { BadgeCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export interface Achievement {
<<<<<<< HEAD
  id: string;
  title: string;
  description: string;
<<<<<<< HEAD
=======
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
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  achieved: boolean
}
interface AchievementBadgesProps {
  achievements: Achievement[]
}
=======
  achieved: boolean;

interface AchievementBadgesProps {
  achievements: Achievement[];
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
<<<<<<< HEAD
              <p className='text-sm text-muted-foreground'>{a.description}</p>            </div>
              <p className="font-medium">{a.title}</p>
              <p className="text-sm text-muted-foreground">{a.description}</p>
            <BadgeCheck
              className={`h-5 w-5 mt-1 ${a.achieved ? "text-green-600" : "text-muted-foreground"}`}
            />
            <div>
              <p className="font-medium">{a.title}</p>
              <p className="text-sm text-muted-foreground">{a.description}</p>
=======
              <p className='text-sm text-muted-foreground'>{a.description}</p>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
<<<<<<< HEAD
  )
}
=======
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
