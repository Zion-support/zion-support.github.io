import { BadgeCheck } from 'lucide-react'
=======
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export interface Achievement {

  id: string
  title: string
  description: string
  achieved: boolean
export interface Achievement {
  id: string,
  title: string,
  description: string,
  achieved: boolean
=======
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

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
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              <p className="font-medium">{a.title}</p>
              <p className="text-sm text-muted-foreground">{a.description}</p>
            </div>
          </div>
        ))}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
