<<<<<<< HEAD
import React from 'react'
import { Button } from '@/components/ui/button'

<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react';
import { Button } from "@/components/ui/button";
import React from 'react',
import { Button } from "@/components/ui/button",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
import { Star } from 'lucide-react'
=======
import React from 'react'
import { Button } from '@/components/ui/button'

import React from 'react';
import { Button } from "@/components/ui/button";
>>>>>>> import { Star } from 'lucide-react'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
interface SaveTalentButtonProps {
  talentId: string
  onSave: (talentId: string) => void
  isSaved: boolean
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export function SaveTalentButton({
  talentId
  onSave
  isSaved
}: SaveTalentButtonProps) {
      onClick={() => onSave(talentId)}
      variant={isSaved ? 'default' : 'outline'}
      size='sm'
      className={
        isSaved
          ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
          : 'text-yellow-500 border-yellow-500 hover:bg-yellow-500/10'
      }    >
import { Button } from "@/components/ui/button"
interface SaveTalentButtonProps {
  talentId: string,
  onSave: (talentId: string,) => void,
  isSaved: boolean
}
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

  talentId: string
  onSave: (talentId: string,) => void

  isSaved: boolean
}
export function SaveTalentButton({ talentId, onSave, isSaved }: SaveTalentButtonProps) {
<<<<<<< HEAD
<<<<<<< HEAD
  return (
    <Button
      onClick = {(,) => onSave(talentId),}
      variant = {isSaved ? "default" : "outline",}
      size="sm"
      className = {isSaved ? "bg-yellow-500 hover:bg-yellow-600 text-white" : "text-yellow-500 border-yellow-500 hover:bg-yellow-500/10",}
      <Star className={`h-4 w-4 ${isSaved ? 'fill-current' : ''} mr-1`} />
      {isSaved ? 'Saved' : 'Save'}
    </Button>

=======
  )
}}
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import React from 'react',;
import { Button } from "@/components/ui/button",;
=======
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

interface SaveTalentButtonProps {;
  talentId: string;
  onSave: (talentId: string) => void;
  isSaved: boolean;

export function SaveTalentButton(): any ({;
  talentId,;
  onSave,;
  isSaved,;
}: SaveTalentButtonProps) {;

      onClick={() => onSave(talentId)}
      variant={isSaved ? 'default' : 'outline'}
      size='sm';
      className={;
        isSaved;
          ? 'bg-yellow-500 hover:bg-yellow-600 text-white';
          : 'text-yellow-500 border-yellow-500 hover:bg-yellow-500/10';
      }    >;
import React from 'react';
import { Button } from "@/components/ui/button";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
import { Star } from 'lucide-react';
interface SaveTalentButtonProps {;
  talentId: string,;
  onSave: (talentId: string,) => void,;
  isSaved: boolean;
}

export function SaveTalentButton(): any ({ talentId, onSave, isSaved }: SaveTalentButtonProps) {;
  return (
    <Button


      {isSaved ? 'Saved' : 'Save'}
    </Button>
  );


}
<<<<<<< HEAD
;
<<<<<<< HEAD

=======
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
import React from 'react';
import { Button } from '@/components / ui / button';
import { Star } from 'lucide-react';
interface SaveTalentButtonProps {
  talent_id: string;
  on_save: (talent_id: string) => void;
  is_saved: boolean;
export /**
 * SaveTalentButton - Function description
 */
function SaveTalentButton() {
      on_click={() => on_save (talent_id)}
      variant={is_saved ? 'default' : 'outline'}
      size='sm';
      className={
        is_saved;
          ? 'bg - yellow - 500 hover:bg - yellow - 600 text - white';
          : 'text - yellow - 500 border - yellow - 500 hover:bg - yellow - 500 / 10';
      }    >;
import { Button  } from '@/components / ui / button';
interface SaveTalentButtonProps {
  talent_id: string,
  on_save: (talent_id: string, ) => void,
  is_saved: boolean;
}
export /**
 * SaveTalentButton - Function description
 */
function SaveTalentButton() {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  return (
    <Button
      onClick = {(,) => onSave(talentId),}
      variant = {isSaved ? "default" : "outline",}
      size="sm"
      className = {isSaved ? "bg-yellow-500 hover:bg-yellow-600 text-white" : "text-yellow-500 border-yellow-500 hover:bg-yellow-500/10",}
      <Star className={`h-4 w-4 ${isSaved ? 'fill-current' : ''} mr-1`} />
      {isSaved ? 'Saved' : 'Save'}
    </Button>
  )
}}
}
<<<<<<< HEAD
  );
}};
};
import React from 'react',;
import { Button } from "@/components/ui/button",;
import { Star } from 'lucide-react';
interface SaveTalentButtonProps {;
  talentId: string,;
  onSave: (talentId: string) => void;
  isSaved: boolean;
}
;
export function SaveTalentButton({ talentId, onSave, isSaved }: SaveTalentButtonProps) {;
  return (;
    <Button;
      onClick={() => onSave(talentId)}
      variant={isSaved ? "default" : "outline"}
      size="sm"
      className={isSaved ? "bg-yellow-500 hover:bg-yellow-600 text-white" : "text-yellow-500 border-yellow-500 hover:bg-yellow-500/10"}
    >
      <Star className={`h-4 w-4 ${isSaved ? 'fill-current' : ''} mr-1`} />
      {isSaved ? 'Saved' : 'Save'}
    </Button>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

  talentId: string,
  onSave: (talentId: string,) => void,
  isSaved: boolean
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
