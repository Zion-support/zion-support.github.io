
import React from &quot;react&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Award } from 'lucide-react'

interface TalentCardBadgesProps {
  featured: boolean | undefined;
}

export function TalentCardBadges({ featured }: TalentCardBadgesProps) {
  if (!featured) return null;
  
  return (
    <div className=&quot;absolute top-0 left-0 bg-gradient-to-r from-zion-purple to-zion-cyan p-2 rounded-tl-lg rounded-br-lg z-10&quot;>
      <Badge className=&quot;bg-transparent border-0 flex items-center gap-1 text-white px-0&quot;>
        <Award className=&quot;h-3 w-3&quot; />
        <span>Featured</span>
      </Badge>
    </div>
  );
}
