
<<<<<<< HEAD
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

const iconMap = {
  Trophy,
  Award,
  BadgeCheck,
  Star,
  MessageSquare
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
  return (
    <div className="flex flex-wrap gap-2">
      {badges.map((badge) => {
        // Get the correct icon component based on the badge's icon name
<<<<<<< HEAD
        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] |Trophy;
=======
        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Trophy,
        
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
import {Trophy, Award, BadgeCheck, Star, MessageSquare} from "lucide-react";
import {Badge} from "@/types/community";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

interface UserBadgesProps {;
  badges: Badge[];

}

const iconMap = {;
=======
import { Trophy, Award, BadgeCheck, Star, MessageSquare } from './lucide-react';
import { Badge } from '@/types / community';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components / ui / tooltip';
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
interface UserBadgesProps {
  badges: Badge[];
}
const icon_map = {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  Trophy;
  Award;
  BadgeCheck;
  Star;

  MessageSquare;
};

export const UserBadges = ({ badges }: UserBadgesProps) => {;

  if (!badges?.length) return null;
=======

},


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (


        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Trophy,
        


>>>>>>> main
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
      })}
    </div>
  )
}
export default UserBadges;

=======
=======

=======

>>>>>>> main
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
    <div className="flex flex-wrap gap-2">;
      {badges.map((badge) => {;
        // Get the correct icon component based on the badge's icon name;
        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Trophy,;
        return (;
          <TooltipProvider key={badge.id}>;
            <Tooltip>;
              <TooltipTrigger asChild>;
                <div;
                  style={{ backgroundColor: badge.color + '20' }}
                  className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer";
                >;
                  <IconComponent;
                    style={{ color: badge.color }} ;
                    className="w-4 h-4";
=======

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
>>>>>>> main
                  />;
                </div>;
              </TooltipTrigger>;
              <TooltipContent>;
                <div className="text-center">;
<<<<<<< HEAD
                  <div className="font-medium">{badge.name}</div>;
                  <div className="text-xs text-gray-500">{badge.description}</div>;
=======
                  <div className="font-medium">{badge && badge.name}</div>;
                  <div className="text-xs text-gray-500">{badge && badge.description}</div>;
>>>>>>> main
                </div>;
              </TooltipContent>;
            </Tooltip>;
          </TooltipProvider>;
        );
      })}
    </div>;
  );
};
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default UserBadges;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======



export default UserBadges;

=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main
