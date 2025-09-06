<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/UserBadges.tsx

<<<<<<< HEAD

import { Trophy, Award, BadgeCheck, Star, MessageSquare } from "lucide-react",

=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/UserBadges.tsx
import {Trophy, Award, BadgeCheck, Star, MessageSquare} from "lucide-react";
import {Badge} from "@/types/community";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
interface UserBadgesProps {;
  badges: Badge[];
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/UserBadges.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/UserBadges.tsx
}
const iconMap = {;
import { Trophy, Award, BadgeCheck, Star, MessageSquare } from './lucide-react';
import { Badge } from '@/types / community';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components / ui / tooltip';
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
interface UserBadgesProps {
  badges: Badge[];
}
const icon_map = {
  Trophy;
  Award;
  BadgeCheck;
  Star;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/UserBadges.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/UserBadges.tsx
  MessageSquare;
};
export const UserBadges = ({ badges }: UserBadgesProps) => {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/UserBadges.tsx

<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
import {Trophy, Award, BadgeCheck, Star, MessageSquare} from "lucide-react";
import {Badge} from "@/types/community";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Trophy, Award, BadgeCheck, Star, MessageSquare } from "lucide-react",
<<<<<<< HEAD
import { Badge } from "@/types/community";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
=======
import { Badge } from "@/types/community",
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip",

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface UserBadgesProps {
  badges: Badge[]
}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const iconMap = {
  Trophy,
  Award,
  BadgeCheck,
  Star,
  MessageSquare
<<<<<<< HEAD

=======
<<<<<<< HEAD
}
export const UserBadges = ({ badges }: UserBadgesProps) => {
  if (!badges?.length) return null;
=======
},

<<<<<<< HEAD
export const UserBadges = ({ badges }: UserBadgesProps) => {;
  if (!badges?.length) return null;
=======
export const UserBadges = ({ badges }: UserBadgesProps) => {
  if (!badges?.length) return null,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <div className="flex flex-wrap gap-2">
      {badges.map((badge) => {
        // Get the correct icon component based on the badge's icon name
<<<<<<< HEAD
=======
  if (!badges?.length) return null;
=======

},


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (


        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Trophy,
        

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] |Trophy;
=======
        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Trophy,
        
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        return (
          <TooltipProvider key={badge.id}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  style={{ backgroundColor: badge.color + '20' }}
                  className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
                >
                  <IconComponent
                    style={{ color: badge.color }}
                    className="w-4 h-4"
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <div className="text-center">
                  <div className="font-medium">{badge.name}</div>
                  <div className="text-xs text-gray-500">{badge.description}</div>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )
<<<<<<< HEAD
<<<<<<< HEAD

export default UserBadges;

=======

=======

=======
      })}
    </div>
  )
}
export default UserBadges;

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { Trophy, Award, BadgeCheck, Star, MessageSquare } from "lucide-react",;
import { Badge } from "@/types/community",;
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip",;
interface UserBadgesProps {;
  badges: Badge[];
}
;
const iconMap = {;
  Trophy,;
  Award,;
  BadgeCheck,;
  Star,;
  MessageSquare;
},;
export const UserBadges = ({ badges }: UserBadgesProps) => {;
  if (!badges?.length) return null,;
  return (;
<<<<<<< HEAD

========
  if (!badges?.length) return null;
  return (
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/UserBadges.tsx
    <div className="flex flex-wrap gap-2">;
      {badges && badges.map((badge) => {;
        // Get the correct icon component based on the badge's icon name;
        const IconComponent = iconMap[badge && badge.icon as keyof typeof iconMap] || Trophy;
        return (
          <TooltipProvider key={badge && badge.id}>;
            <Tooltip>;
              <TooltipTrigger asChild>;
                <div
                  style={{ backgroundColor: badge && badge.color + '20' }}
                  className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer">;
                  <IconComponent
                    style={{ color: badge && badge.color }} 
                    className="w-4 h-4" 
=======

import { Trophy, Award, BadgeCheck, Star, MessageSquare } from "lucide-react",;
import { Badge } from "@/types/community",;
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip",;
;
interface UserBadgesProps {;
  badges:Badge[];
}
;
const iconMap = {;
  Trophy,;
  Award,;
  BadgeCheck,;
  Star,;
  MessageSquare;
},;
;
export const UserBadges = ({ badges } UserBadgesProps) => {;
  if (!badges?.length) return null,;
;
  return (;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className="flex flex-wrap gap-2">;
      {badges.map((badge) => {;
        // Get the correct icon component based on the badge's icon name;
        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Trophy,;
<<<<<<< HEAD
        ;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        return (;
          <TooltipProvider key={badge.id}>;
            <Tooltip>;
              <TooltipTrigger asChild>;
<<<<<<< HEAD
                <div ;
                  style={{ backgroundColor:badge.color + '20' }}
                  className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer";
                >;
                  <IconComponent ;
                    style={{ color:badge.color }} ;
                    className="w-4 h-4" ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
                <div;
                  style={{ backgroundColor: badge.color + '20' }}
                  className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer";
                >;
                  <IconComponent;
                    style={{ color: badge.color }} ;
                    className="w-4 h-4";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  />;
                </div>;
              </TooltipTrigger>;
              <TooltipContent>;
                <div className="text-center">;
<<<<<<< HEAD
<<<<<<< HEAD
                  <div className="font-medium">{badge && badge.name}</div>;
                  <div className="text-xs text-gray-500">{badge && badge.description}</div>;
=======
                  <div className="font-medium">{badge.name}</div>;
                  <div className="text-xs text-gray-500">{badge.description}</div>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
                  <div className="font-medium">{badge.name}</div>;
                  <div className="text-xs text-gray-500">{badge.description}</div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                </div>;
              </TooltipContent>;
            </Tooltip>;
          </TooltipProvider>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        );
      })}
    </div>;
  );
};
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/UserBadges.tsx



========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/UserBadges.tsx
export default UserBadges;
  MessageSquare;
}
;
export const UserBadges = ({ badges }: UserBadgesProps) =>: any {
  // Check condition
if (return null) {
  $2
}
  return (
    <div className="flex flex - wrap gap - 2">;
      {badges.map ((badge) => {
        // Get the correct icon component based on the badge's icon name;
        const IconComponent = icon_map[badge.icon as keyof typeof icon_map] || Trophy;
;
        return (
          <TooltipProvider key={badge.id}>;
            <Tooltip>;
              <TooltipTrigger as_child>;
                <div;
                  style={{ background_color: badge.color + '20' }}
                  className="w - 8 h - 8 rounded - full flex items - center justify - center cursor - pointer";
                >;
                  <IconComponent;
                    style={{ color: badge.color }}
                    className="w - 4 h - 4";
                  />;
                </div>;
              </TooltipTrigger>;
              <TooltipContent>;
                <div className="text - center">;
                  <div className="font - medium">{badge.name}</div>;
                  <div className="text - xs text - gray - 500">{badge.description}</div>;
                </div>;
              </TooltipContent>;
            </Tooltip>;
          </TooltipProvider>);
      })}
    </div>);
}
;
export default UserBadges;
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/UserBadges.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
        ),;
      })}
    </div>;
  ),;
},;
;
export default UserBadges,; interface UserBadgesProps {
  badges: Badge[] 
}const iconMap = {
  Trophy;
Award;
BadgeCheck;
Star;
MessageSquare 
};
export const UserBadges = ({
  badges 
}: UserBadgesProps) => {
  if (!badges?.length) return null;
return (<div className="flex flex-wrap gap-2" > {
  badges.map ( (badge) => {
  //Get the correct icon component based on the badge's icon name const IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Trophy;
badge.id 
}> <Tooltip> <TooltipTrigger asChild> <div /> </div> </TooltipTrigger> <TooltipContent> </div> </TooltipContent> </Tooltip> </TooltipProvider>) 
}) 
}</div>) 
};
export default UserBadges;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/UserBadges.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default UserBadges;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
