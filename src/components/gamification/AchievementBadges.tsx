import React from 'react',
import { BadgeCheck } from 'lucide-react',
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
export interface Achievement {
  id: string,
  title: string,
  description: string,
  achieved: boolean;
  points?: number;
  category?: string, }

interface AchievementBadgesProps {
  achievements: Achievement[], }

export function AchievementBadges({ achievements }: AchievementBadgesProps) {
  const achievedCount = achievements.filter(a => a.achieved).length;
  const totalCount = achievements.length;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Achievements
          <Badge >
            {achievedCount}/{totalCount}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {achievements.map(achievement => (
          <div 
            key={achievement.id} 
            className={`flex items-start gap-3 p-3 rounded-lg border transition-colors ${
              achievement.achieved 
                ? 'bg-green-50 border-green-200' 
                : 'bg-gray-50 border-gray-200'
            }`}
          >
            <BadgeCheck
              className={`h-5 w-5 mt-1 flex-shrink-0 ${
                achievement.achieved ? 'text-green-600' : 'text-muted-foreground'
              }`}
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <p className="font-medium text-gray-900">{achievement.title}</p>
                {achievement.points && (
                  <Badge  className="text-xs">
                    +{achievement.points} pts
                  </Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                {achievement.description}
              </p>
              {achievement.category && (
                <Badge  className="mt-2 text-xs">
                  {achievement.category}
                </Badge>
              )}
            </div>
          </div>
        ))}
        
        {achievements.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <BadgeCheck className="h-12 w-12 mx-auto mb-4 text-gray-300" />
            <p>No achievements available yet.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );