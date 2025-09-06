import { BadgeCheck } from 'lucide-react';
<<<<<<< HEAD
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

=======
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
export interface Achievement {
  id: string;
  title: string;
  description: string;
  achieved: boolean;

interface AchievementBadgesProps {
  achievements: Achievement[];
=======
  achievements: Achievement[]
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export function AchievementBadges({ achievements }: AchievementBadgesProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Achievements</CardTitle>
      </CardHeader>
<<<<<<< HEAD
      <CardContent className='space-y-3'>
        {achievements.map(a => (
          <div key={a.id} className='flex items-start gap-3'>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
=======
      <CardContent className="space-y-3">
        {achievements.map((a,) => (
          <div key={a.id} className="flex items-start gap-3">
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
            <BadgeCheck
              className={`h-5 w-5 mt-1 ${a.achieved ? 'text-green-600' : 'text-muted-foreground'}`}
            />
            <div>
              <p className='font-medium'>{a.title}</p>
              <p className='text-sm text-muted-foreground'>{a.description}</p>            </div>
=======
              <p className="font-medium">{a.title}</p>
              <p className="text-sm text-muted-foreground">{a.description}</p>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
