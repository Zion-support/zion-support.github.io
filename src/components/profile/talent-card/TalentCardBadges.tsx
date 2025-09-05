
import React from "react";

interface TalentCardBadgesProps {_featured: boolean | undefined;}

export function TalentCardBadges(_{_featured}: TalentCardBadgesProps) {_if (!featured) return null;
  
  return (
    <div className="absolute top-0 left-0 bg-gradient-to-r from-zion-purple to-zion-cyan p-2 rounded-tl-lg rounded-br-lg z-10">
      <Badge className="bg-transparent border-0 flex items-center gap-1 text-white px-0">
        <Award className="h-3 w-3" />
        <span>Featured</span>
      </Badge>
    </div>
  );}
