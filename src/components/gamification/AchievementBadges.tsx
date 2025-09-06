import { BadgeCheck } from 'lucide-react';

export interface Achievement {
  id: string;
  title: string;
  description: string;
  achieved: boolean;

interface AchievementBadgesProps {
  achievements: Achievement[];

export function AchievementBadges({ achievements }: AchievementBadgesProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Achievements</CardTitle>
      </CardHeader>

            <BadgeCheck
              className={`h-5 w-5 mt-1 ${a.achieved ? 'text-green-600' : 'text-muted-foreground'}`}
            />
            <div>
              <p className='font-medium'>{a.title}</p>
              <p className='text-sm text-muted-foreground'>{a.description}</p>            </div>

            </div>

          </div>
        ))}
      </CardContent>
    </Card>
  );
}