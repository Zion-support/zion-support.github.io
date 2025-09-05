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
=======
import { BadgeCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
export interface Achievement {;
  id: string,;
  title: string;
  description: string;
  achieved: boolean;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;
interface AchievementBadgesProps {;
  achievements: Achievement[];
}
<<<<<<< HEAD

export function AchievementBadges({ achievements }: AchievementBadgesProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Achievements</CardTitle>
      </CardHeader>
      <CardContent className=&quot;space-y-3&quot;>
        {achievements.map((a) => (
          <div key={a.id} className=&quot;flex items-start gap-3&quot;>
            <BadgeCheck
              className={`h-5 w-5 mt-1 ${a.achieved ? &quot;text-green-600&quot; : &quot;text-muted-foreground&quot;}`}
            />
            <div>
              <p className=&quot;font-medium&quot;>{a.title}</p>
              <p className=&quot;text-sm text-muted-foreground&quot;>{a.description}</p>
            </div>
          </div>
=======
;
export function AchievementBadges({ achievements }: AchievementBadgesProps) {;
  return (;
    <Card>;
      <CardHeader>;
        <CardTitle>Achievements</CardTitle>;
      </CardHeader>;
      <CardContent className="space-y-3">;
        {achievements.map((a) => (;
          <div key={a.id} className="flex items-start gap-3">;
            <BadgeCheck;
              className={`h-5 w-5 mt-1 ${a.achieved ? "text-green-600" : "text-muted-foreground"}`}
            />;
            <div>;
              <p className="font-medium">{a.title}</p>;
              <p className="text-sm text-muted-foreground">{a.description}</p>;
            </div>;
          </div>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        ))}
      </CardContent>;
    </Card>;
  );
}
;