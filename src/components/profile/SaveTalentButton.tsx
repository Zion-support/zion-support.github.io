<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from 'react'
import { Button } from '@/components/ui/button'
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

<<<<<<< HEAD
import React from 'react';
import { Button } from "@/components/ui/button";
=======
import React from 'react',
import { Button } from "@/components/ui/button",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Star } from 'lucide-react'
interface SaveTalentButtonProps {
  talentId: string
  onSave: (talentId: string) => void
  isSaved: boolean

import { Button } from "@/components/ui/button";
import { Star } from 'lucide-react'
import { Star } from 'lucide-react';


interface SaveTalentButtonProps {
<<<<<<< HEAD
=======
  talentId: string,
  onSave: (talentId: string,) => void,
  isSaved: boolean
<<<<<<< HEAD
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

  talentId: string
  onSave: (talentId: string,) => void

  isSaved: boolean
}
export function SaveTalentButton({ talentId, onSave, isSaved }: SaveTalentButtonProps) {
  return (
    <Button
      onClick = {(,) => onSave(talentId),}
      variant = {isSaved ? "default" : "outline",}
      size="sm"
      className = {isSaved ? "bg-yellow-500 hover:bg-yellow-600 text-white" : "text-yellow-500 border-yellow-500 hover:bg-yellow-500/10",}
      <Star className={`h-4 w-4 ${isSaved ? 'fill-current' : ''} mr-1`} />
      {isSaved ? 'Saved' : 'Save'}
    </Button>
<<<<<<< HEAD
  )
}}
}
=======
  );
}};
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import React from 'react',;
import { Button } from "@/components/ui/button",;
import { Star } from 'lucide-react';
interface SaveTalentButtonProps {;
  talentId: string,;
  onSave: (talentId: string,) => void,;
  isSaved: boolean;
}

export function SaveTalentButton(): any ({ talentId, onSave, isSaved }: SaveTalentButtonProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <Button


      {isSaved ? 'Saved' : 'Save'}
    </Button>
  );


}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
