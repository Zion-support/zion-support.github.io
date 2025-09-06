<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import { Star } from 'lucide-react'
interface SaveTalentButtonProps {
  talentId: string
  onSave: (talentId: string) => void
  isSaved: boolean
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
=======
import { Button } from "@/components/ui/button";
import { Star } from 'lucide-react'
import { Star } from 'lucide-react';

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
interface SaveTalentButtonProps {

  talentId: string
  onSave: (talentId: string,) => void

  isSaved: boolean
}
export function SaveTalentButton({ talentId, onSave, isSaved }: SaveTalentButtonProps) {
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
      onClick = {(,) => onSave(talentId),}
      variant = {isSaved ? "default" : "outline",}
      size="sm";
      className = {isSaved ? "bg-yellow-500 hover:bg-yellow-600 text-white" : "text-yellow-500 border-yellow-500 hover:bg-yellow-500/10",}
      <Star className={`h-4 w-4 ${isSaved ? 'fill-current' : ''} mr-1`} />;
<<<<<<< HEAD
=======
      {isSaved ? 'Saved' : 'Save'}
<<<<<<< HEAD
    </Button>
  )
}}
}
=======
    </Button>;
  );
}};

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
      onClick={() => onSave(talentId)}
      variant={isSaved ? "default" : "outline"}
      size="sm"
      className={isSaved ? "bg-yellow-500 hover:bg-yellow-600 text-white" : "text-yellow-500 border-yellow-500 hover:bg-yellow-500/10"}
    >
      <Star className={`h-4 w-4 ${isSaved ? 'fill-current' : ''} mr-1`} />
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
      {isSaved ? 'Saved' : 'Save'}
    </Button>
  );
<<<<<<< HEAD
}};

=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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
  return (
    <Button;
      on_click = {(, ) => on_save (talent_id), }
      variant = {is_saved ? "default" : "outline", }
      size="sm";
      class_name = {is_saved ? "bg - yellow - 500 hover:bg - yellow - 600 text - white" : "text - yellow - 500 border - yellow - 500 hover:bg - yellow - 500 / 10", }
      <Star className={`h - 4 w - 4 ${is_saved ? 'fill - current' : ''} mr - 1`} />;
      {is_saved ? 'Saved' : 'Save'}
    </Button>);
}}
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
