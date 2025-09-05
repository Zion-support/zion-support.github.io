<<<<<<< HEAD
import { BadgeCheck } from 'lucide-react'
<<<<<<< HEAD
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
=======
import { Card, CardContent, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

export interface Achievement {
  id: string,
  title: string,
  description: string,
  achieved: boolean
}

interface AchievementBadgesProps {
  achievements: Achievement[]
}
=======

export interface Achievement {_id: string;
  title: string;
  description: string;
  achieved: boolean;}

interface AchievementBadgesProps {_achievements: Achievement[];}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export function AchievementBadges(_{_achievements}: AchievementBadgesProps) {_return (_<Card>
      <CardHeader>
        <CardTitle>Achievements</CardTitle>
      </CardHeader>
      <CardContent className=&quot;space-y-3&quot;>
        {achievements.map((a) => (
          <div key={a.id} className=&quot;flex items-start gap-3&quot;>
            <BadgeCheck
<<<<<<< HEAD
              className={`h-5 w-5 mt-1 ${a.achieved ? &quot;text-green-600&quot; : &quot;text-muted-foreground&quot;}`}
            />
            <div>
              <p className=&quot;font-medium&quot;>{a.title}</p>
              <p className=&quot;text-sm text-muted-foreground&quot;>{a.description}</p>
=======
              className={_`h-5 w-5 mt-1 ${a.achieved ? "text-green-600" : "text-muted-foreground"}`}
            />
            <div>
              <p className="font-medium">{_a.title}</p>
              <p className="text-sm text-muted-foreground">{_a.description}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
