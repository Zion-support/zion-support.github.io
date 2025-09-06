<<<<<<< HEAD
import React from 'react',
import React from 'react';
import {Button} from "@/components/ui/button";
import {Star} from "lucide-react";
import React from 'react',
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
interface SaveTalentButtonProps {
  talentId: string;
  onSave: (talentId: string) => void;
  isSaved: boolean
import { Button } from "@/components/ui/button",
import { Star } from "lucide-react",
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface SaveTalentButtonProps {
  talentId: string,
  onSave: (talentId: string) => void,
  isSaved: boolean
<<<<<<< HEAD
import React from 'react',;
import { Button } from "@/components/ui/button",;
import { Star } from "lucide-react",;
interface SaveTalentButtonProps {;
  talentId: string,;
  onSave: (talentId: string) => void;
  isSaved: boolean;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


}
export function SaveTalentButton({
  talentId
  onSave
  isSaved
}: SaveTalentButtonProps) {
<<<<<<< HEAD
=======
=======
import React from 'react';
import {Button} from "@/components/ui/button";
import {Star} from "lucide-react";
interface SaveTalentButtonProps {;
  talentId: string,;
  onSave: (talentId: string) => void,;
  isSaved: boolean;
}

export function SaveTalentButton(): any ({ talentId, onSave, isSaved }: SaveTalentButtonProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <Button
      onClick={() => onSave(talentId)}
      variant={isSaved ? "default" : "outline"}
<<<<<<< HEAD
      className={
        isSaved
          ? "bg-yellow-500 hover:bg-yellow-600 text-white"
          : "text-yellow-500 border-yellow-500 hover:bg-yellow-500/10"
      }
    >
      <Star className={`h-4 w-4 ${isSaved ? "fill-current" : ""} mr-1`} />
      {isSaved ? "Saved" : "Save"}
    </Button>
      className={isSaved ? "bg-yellow-500 hover:bg-yellow-600 text-white" : "text-yellow-500 border-yellow-500 hover:bg-yellow-500/10"}
    >
      <Star className={`h-4 w-4 ${isSaved ? 'fill-current' : ''} mr-1`} />
      {isSaved ? 'Saved' : 'Save'}
    </Button>;
  );
}
    </Button>
  )
}
;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import React from './react';
import { Button  } from '@/components / ui / button';
import { Star  } from './lucide-react';
interface SaveTalentButtonProps {
  talent_id: string;
  on_save: (talent_id: string) => void;
  is_saved: boolean;
}
export /**
 * SaveTalentButton - Function description
 */
function SaveTalentButton() {
  return (
    <Button;
      on_click={() => on_save (talent_id)}
      variant={is_saved ? "default" : "outline"}
      size="sm";
      className={
        is_saved;
          ? "bg - yellow - 500 hover:bg - yellow - 600 text - white";
          : "text - yellow - 500 border - yellow - 500 hover:bg - yellow - 500 / 10";
      }
      size="sm";
      className={isSaved ? "bg-yellow-500 hover:bg-yellow-600 text-white" : "text-yellow-500 border-yellow-500 hover:bg-yellow-500/10"}
    >;
      <Star className={`h-4 w-4 ${isSaved ? 'fill-current' : ''} mr-1`} />;
      {isSaved ? 'Saved' : 'Save'}
    </Button>;
  );
}
    >;
      <Star className={`h - 4 w - 4 ${is_saved ? "fill - current" : ""} mr - 1`} />;
      {is_saved ? "Saved" : "Save"}
    </Button>);
}
      size="sm"

      className={isSaved ? "bg-yellow-500 hover:bg-yellow-600 text-white" : "text-yellow-500 border-yellow-500 hover:bg-yellow-500/10"}
    >
      <Star className={`h-4 w-4 ${isSaved ? 'fill-current' : ''} mr-1`} />
      {isSaved ? 'Saved' : 'Save'}

<<<<<<< HEAD

import React from 'react',;
import { Button } from "@/components/ui/button",;
import { Star } from "lucide-react",;
;
interface SaveTalentButtonProps {;
  talentId:string,;
  onSave:(talentId:string) => void,;
  isSaved:boolean;
}
;
export function SaveTalentButton({ talentId, onSave, isSaved } SaveTalentButtonProps) {;
  return (;
    <Button;
      onClick={() => onSave(talentId)}
      variant={isSaved ? "default" :"outline"}
      size="sm";
      className={isSaved ? "bg-yellow-500 hover:bg-yellow-600 text-white" :"text-yellow-500 border-yellow-500 hover:bg-yellow-500/10"}
    >;
      <Star className={`h-4 w-4 ${isSaved ? 'fill-current' :''} mr-1`} />;
      {isSaved ? 'Saved' :'Save'}
    </Button>;
  ),;}
 interface SaveTalentButtonProps {
  talentId: string;
onSave: (talentId: string) => void;
isSaved: boolean 
}talentId, onSave, isSaved 
}: SaveTalentButtonProps) {
  return (<Button onClick= {
  () => onSave (talentId) 
}> <Star className= {
  `h-4 w-4 $ {
  isSaved ? 'fill-current' : '' 
}mr-1` 
}/> {
  isSaved ? 'Saved': 'Save' 
}</Button>) 
}
      size="sm"
className={
        isSaved
          ? "bg-yellow-500 hover:bg-yellow-600 text-white"
          : "text-yellow-500 border-yellow-500 hover:bg-yellow-500/10"
      }
>
      <Star className={`h-4 w-4 ${isSaved ? "fill-current" : ""} mr-1`} />
      {isSaved ? "Saved" : "Save"}
    </Button>
  );
}
    </Button>
  );
}
;

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
