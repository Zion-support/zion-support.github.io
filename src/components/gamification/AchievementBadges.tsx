import { BadgeCheck } from 'lucide-react'
<<<<<<< HEAD
<<<<<<< HEAD

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export interface Achievement {
=======
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
xport interface Achievement {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
=======
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export interface Achievement {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  id: string
  title: string
  description: string
  achieved: boolean
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
interface AchievementBadgesProps {
  achievements: Achievement[]
  achievements: Achievement[]
}
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export interface Achievement {
  id: string
  title: string
  description: string
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export interface Achievement {
  id: string,
  title: string,
  description: string,
  achieved: boolean
<<<<<<< HEAD
<<<<<<< HEAD

}

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}

interface AchievementBadgesProps {
  achievements: Achievement[]
<<<<<<< HEAD
>>>>>>> }
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  achieved: boolean
}
interface AchievementBadgesProps {
  achievements: Achievement[]
}
export function AchievementBadges({ achievements }: AchievementBadgesProps) {
<<<<<<< HEAD
>>>>>>> import { BadgeCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
export interface Achievement {;
  id: string;
  title: string;
  description: string;
  achieved: boolean;

interface AchievementBadgesProps {;
  achievements: Achievement[];
  achievements: Achievement[];

import { BadgeCheck } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface Achievement {
  id: string,
  title: string,
  description: string,

}

export interface Achievement {;
  id: string,;
  title: string,;
  description: string,;
  achieved: boolean;
}

interface AchievementBadgesProps {;
  achievements: Achievement[];
}

export function AchievementBadges(): any ({ achievements }: AchievementBadgesProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <Card>
      <CardHeader>
        <CardTitle>Achievements</CardTitle>
      </CardHeader>
<<<<<<< HEAD
<<<<<<< HEAD

              <p className="font-medium">{a.title}</p>
              <p className="text-sm text-muted-foreground">{a.description}</p>
            </div>
          </div>
        ))}

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>>               <p className="font-medium">{a.title}</p>
              <p className="text-sm text-muted-foreground">{a.description}</p>
            </div>
          </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>>         ))}
=======
=======
      <CardContent className="space-y-3">
        {achievements.map((a) => (
          <div key={a.id} className="flex items-start gap-3">
            <BadgeCheck
              className={`h-5 w-5 mt-1 ${a.achieved ? "text-green-600" : "text-muted-foreground"}`}
            />
            <div>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              <p className="font-medium">{a.title}</p>
              <p className="text-sm text-muted-foreground">{a.description}</p>
            </div>
          </div>
        ))}
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      </CardContent>
    </Card>;
  );
};
}
<<<<<<< HEAD
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
      </CardContent>;
    </Card>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
