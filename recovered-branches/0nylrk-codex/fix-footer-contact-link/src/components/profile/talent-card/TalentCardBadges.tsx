<<<<<<< HEAD

<<<<<<< HEAD
import React from "react";
import {Badge} from "@/components/ui/badge";
import {Award} from "lucide-react";
=======
import React from "react",
import { Badge } from "@/components/ui/badge",
import { Award } from "lucide-react",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";
>>>>>>> main
interface TalentCardBadgesProps {
  featured: boolean | undefined;
}

<<<<<<< HEAD
export function TalentCardBadges({ featured }: TalentCardBadgesProps) {;
  if (!featured) return null;
<<<<<<< HEAD
=======
export function TalentCardBadges({ featured }: TalentCardBadgesProps) {
  if (!featured) return null,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  
=======

>>>>>>> main
  return (
    <div className="absolute top-0 left-0 bg-gradient-to-r from-zion-purple to-zion-cyan p-2 rounded-tl-lg rounded-br-lg z-10">
      <Badge className="bg-transparent border-0 flex items-center gap-1 text-white px-0">
        <Award className="h-3 w-3" />
        <span>Featured</span>
      </Badge>
    </div>
<<<<<<< HEAD
  )
<<<<<<< HEAD
=======
  );
>>>>>>> main
}
=======
import React from "react",;
import { Badge } from "@/components/ui/badge",;
import { Award } from "lucide-react",;
interface TalentCardBadgesProps {;
  featured: boolean | undefined;
}
;
export function TalentCardBadges({ featured }: TalentCardBadgesProps) {;
  if (!featured) return null;
  return (;
    <div className="absolute top-0 left-0 bg-gradient-to-r from-zion-purple to-zion-cyan p-2 rounded-tl-lg rounded-br-lg z-10">;
      <Badge className="bg-transparent border-0 flex items-center gap-1 text-white px-0">;
        <Award className="h-3 w-3" />;
        <span>Featured</span>;
      </Badge>;
    </div>;
  );
}
;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
