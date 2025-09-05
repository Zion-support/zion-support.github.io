
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Badge } from "@/components/ui/badge",
=======
import React from &quot;react&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { Award } from 'lucide-react'

interface TalentCardBadgesProps {
  featured: boolean | undefined
}

export function TalentCardBadges({ featured }: TalentCardBadgesProps) {
  if (!featured) return null,
  return (
    <div className=&quot;absolute top-0 left-0 bg-gradient-to-r from-zion-purple to-zion-cyan p-2 rounded-tl-lg rounded-br-lg z-10&quot;>
      <Badge className=&quot;bg-transparent border-0 flex items-center gap-1 text-white px-0&quot;>
        <Award className=&quot;h-3 w-3&quot; />
        <span>Featured</span>
      </Badge>
    </div>
  )
=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;