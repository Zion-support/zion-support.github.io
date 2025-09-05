
export interface Achievement {_id: string;
  title: string;
  description: string;
  achieved: boolean;}

interface AchievementBadgesProps {_achievements: Achievement[];}

export function AchievementBadges(_{_achievements}: AchievementBadgesProps) {_return (_<Card>
      <CardHeader>
        <CardTitle>Achievements</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {achievements.map((a) => (
          <div key={a.id} className="flex items-start gap-3">
            <BadgeCheck
              className={_`h-5 w-5 mt-1 ${a.achieved ? "text-green-600" : "text-muted-foreground"}`}
            />
            <div>
              <p className="font-medium">{_a.title}</p>
              <p className="text-sm text-muted-foreground">{_a.description}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
