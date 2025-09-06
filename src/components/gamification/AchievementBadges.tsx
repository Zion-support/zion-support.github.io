export interface Achievement {

  id: string
  title: string
  description: string
  achieved: boolean


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",

export interface Achievement {
  id: string,
  title: string,
  description: string,
  achieved: boolean
import { BadgeCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
export interface Achievement {;
  id: string,;
  title: string;
  description: string;
  achieved: boolean;
  achievements: Achievement[];
}
}
;
interface AchievementBadgesProps {;
  achievements: Achievement[];
}

  achieved: boolean
}
interface AchievementBadgesProps {
  achievements: Achievement[]
}
export function AchievementBadges({ achievements }: AchievementBadgesProps) {
    <Card>
      <CardHeader>
        <CardTitle>Achievements</CardTitle>
      </CardHeader>
              <p className="font-medium">{a.title}</p>
              <p className="text-sm text-muted-foreground">{a.description}</p>
            </div>
          </div>
        ))}
