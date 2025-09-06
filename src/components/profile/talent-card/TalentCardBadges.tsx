<<<<<<< HEAD

import React from "react",
import { Badge } from "@/components/ui/badge",
import { Award } from 'lucide-react'
=======
import React from 'react';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

const TalentCardBadges = () => {
  return (
    <div>
      {/* TalentCardBadges component */}
    </div>
<<<<<<< HEAD
  )
import React from "react",;
import { Badge } from "@/components/ui/badge",;
import { Award } from 'lucide-react';
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
=======
  );
};

export default TalentCardBadges;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
