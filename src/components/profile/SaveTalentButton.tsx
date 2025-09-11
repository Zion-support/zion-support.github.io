<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { Button } from "@/components/ui/button";
import React from 'react',
import { Button } from "@/components/ui/button",
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { Star } from 'lucide-react'
import React from 'react'
import { Button } from '@/components/ui/button'

import React from 'react';
import { Button } from "@/components/ui/button";
=======
import { Star } from 'lucide-react'
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface SaveTalentButtonProps {
  talentId: string
  onSave: (talentId: string) => void
  isSaved: boolean
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

import { Button } from "@/components/ui/button";
import { Star } from 'lucide-react'
import { Star } from 'lucide-react';


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface SaveTalentButtonProps {
  talentId: string,
  onSave: (talentId: string,) => void,
  isSaved: boolean
<<<<<<< HEAD
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
interface SaveTalentButtonProps {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  talentId: string
  onSave: (talentId: string,) => void

  isSaved: boolean
}
export function SaveTalentButton({ talentId, onSave, isSaved }: SaveTalentButtonProps) {
<<<<<<< HEAD
<<<<<<< HEAD
  )
}}
}
import React from 'react',;
import { Button } from "@/components/ui/button",;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
=======
  return (
    <Button
      onClick = {(,) => onSave(talentId),}
      variant = {isSaved ? "default" : "outline",}
      size="sm"
      className = {isSaved ? "bg-yellow-500 hover:bg-yellow-600 text-white" : "text-yellow-500 border-yellow-500 hover:bg-yellow-500/10",}
      <Star className={`h-4 w-4 ${isSaved ? 'fill-current' : ''} mr-1`} />
      {isSaved ? 'Saved' : 'Save'}
    </Button>
  );
}};
};
=======
import React from 'react',;
import { Button } from "@/components/ui/button",;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
    <Button
      onClick = {(,) => onSave(talentId),}
      variant = {isSaved ? "default" : "outline",}
      size="sm"
      className = {isSaved ? "bg-yellow-500 hover:bg-yellow-600 text-white" : "text-yellow-500 border-yellow-500 hover:bg-yellow-500/10",}
      <Star className={`h-4 w-4 ${isSaved ? 'fill-current' : ''} mr-1`} />
      {isSaved ? 'Saved' : 'Save'}
    </Button>
  )
=======
    <Button;
      on_click = {(, ) => on_save (talent_id), }
      variant = {is_saved ? "default" : "outline", }
      size="sm";
      class_name = {is_saved ? "bg - yellow - 500 hover:bg - yellow - 600 text - white" : "text - yellow - 500 border - yellow - 500 hover:bg - yellow - 500 / 10", }
      <Star className={`h - 4 w - 4 ${is_saved ? 'fill - current' : ''} mr - 1`} />;
      {is_saved ? 'Saved' : 'Save'}
    </Button>);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}}
}

  talentId: string,
  onSave: (talentId: string,) => void,
<<<<<<< HEAD
<<<<<<< HEAD
  isSaved: boolean
=======
  isSaved: boolean
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  isSaved: boolean
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
