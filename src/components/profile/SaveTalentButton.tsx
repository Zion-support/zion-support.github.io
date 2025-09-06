<<<<<<< HEAD

import React from 'react',
import { Button } from "@/components/ui/button",
import { Star } from 'lucide-react'

=======
import { Star } from 'lucide-react'
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface SaveTalentButtonProps {
  talentId: string,
  onSave: (talentId: string) => void,
  isSaved: boolean
<<<<<<< HEAD
import React from 'react',;
import { Button } from "@/components/ui/button",;
=======

import { Button } from "@/components/ui/button";
import { Star } from 'lucide-react'
import { Star } from 'lucide-react';


interface SaveTalentButtonProps {
  talentId: string,
  onSave: (talentId: string,) => void,
  isSaved: boolean

  talentId: string
  onSave: (talentId: string,) => void

  isSaved: boolean
}
export function SaveTalentButton({ talentId, onSave, isSaved }: SaveTalentButtonProps) {
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
;
=======

  talentId: string,
  onSave: (talentId: string,) => void,
  isSaved: boolean
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
