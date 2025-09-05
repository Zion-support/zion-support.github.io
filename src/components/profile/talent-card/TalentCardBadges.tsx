
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
=======
import React from "react";

interface TalentCardBadgesProps {_featured: boolean | undefined;}

export function TalentCardBadges(_{_featured}: TalentCardBadgesProps) {_if (!featured) return null;
  
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  return (
    <div className=&quot;absolute top-0 left-0 bg-gradient-to-r from-zion-purple to-zion-cyan p-2 rounded-tl-lg rounded-br-lg z-10&quot;>
      <Badge className=&quot;bg-transparent border-0 flex items-center gap-1 text-white px-0&quot;>
        <Award className=&quot;h-3 w-3&quot; />
        <span>Featured</span>
      </Badge>
    </div>
<<<<<<< HEAD
  )
}
=======
  );}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
