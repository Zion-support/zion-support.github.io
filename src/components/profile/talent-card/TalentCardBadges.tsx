<<<<<<< HEAD

<<<<<<< HEAD
import React from "react";
import { Badge } from "@/components/ui/badge";
=======
<<<<<<< HEAD
import React from 'react'
import { Badge } from '@/components/ui/badge'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Award } from 'lucide-react'
interface TalentCardBadgesProps {
  featured: boolean | undefined
export function TalentCardBadges({ featured }: TalentCardBadgesProps) {
<<<<<<< HEAD
  if (!featured) return null;
=======
=======
  if (!featured) return null
  return (
    <div className='absolute top-0 left-0 bg-gradient-to-r from-zion-purple to-zion-cyan p-2 rounded-tl-lg rounded-br-lg z-10'>
      <Badge className='bg-transparent border-0 flex items-center gap-1 text-white px-0'>
        <Award className='h-3 w-3' />;
        <span>Featured</span>;
      </Badge>;
    </div>;
  );  )
}
  )
}
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from "react",
import { Badge } from "@/components/ui/badge",
import { Award } from 'lucide-react'

interface TalentCardBadgesProps {
  featured: boolean | undefined
}

export function TalentCardBadges({ featured }: TalentCardBadgesProps) {
  if (!featured) return null,
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
    <div className="absolute top-0 left-0 bg-gradient-to-r from-zion-purple to-zion-cyan p-2 rounded-tl-lg rounded-br-lg z-10">
      <Badge className="bg-transparent border-0 flex items-center gap-1 text-white px-0">
        <Award className="h-3 w-3" />
        <span>Featured</span>
      </Badge>
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
