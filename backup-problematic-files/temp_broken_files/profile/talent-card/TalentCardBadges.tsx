
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from "react",;
import { Badge } from "@/components/ui/badge",;
import { Award } from "lucide-react",;
=======
import React from "react",;
import { Badge } from "@/components/ui/badge",;
import { Award } from 'lucide-react';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
interface TalentCardBadgesProps {;
  featured:boolean | undefined;
}
;
export function TalentCardBadges({ featured } TalentCardBadgesProps) {;
  if (!featured) return null,;
  ;
  return (;
    <div className="absolute top-0 left-0 bg-gradient-to-r from-zion-purple to-zion-cyan p-2 rounded-tl-lg rounded-br-lg z-10">;
      <Badge className="bg-transparent border-0 flex items-center gap-1 text-white px-0">;
        <Award className="h-3 w-3" />;
        <span>Featured</span>;
      </Badge>;
    </div>;
  ),;
<<<<<<< HEAD
} interface TalentCardBadgesProps {
  featured: boolean | undefined 
}export function TalentCardBadges ({
  featured 
}: TalentCardBadgesProps) {
  if (!featured) return null;
absolute top-0 left-0 bg-gradient-to-r from-zion-purple to-zion-cyan p-2 rounded-tl-lg rounded-br-lg z-10"> <Badge className=" bg-transparent border-0 flex items-center gap-1 text-white px-0"> <Award className=" h-3 w-3" /> <span>Featured</span> </Badge> </div> 
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
} import {;
  {;
  {;
  Award ;
}from 'lucide-react' interface TalentCardBadgesProps {;
  featured: boolean | undefined ;
}export function TalentCardBadges ({;
  featured ;
}: TalentCardBadgesProps) {;
  if (!featured) return null;
absolute top-0 left-0 bg-gradient-to-r from-zion-purple to-zion-cyan p-2 rounded-tl-lg rounded-br-lg z-10"> <Badge className=" bg-transparent border-0 flex items-center gap-1 text-white px-0"> <Award className=" h-3 w-3" /> <span>Featured</span> </Badge> </div> '"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
