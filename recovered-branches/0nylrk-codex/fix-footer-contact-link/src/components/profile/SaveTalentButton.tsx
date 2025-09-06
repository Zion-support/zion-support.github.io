<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/SaveTalentButton.tsx


<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react',
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
import React from 'react',
=======
import React from 'react';
import {Button} from "@/components/ui/button";
import {Star} from "lucide-react";
import React from 'react',
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
interface SaveTalentButtonProps {
  talentId: string;
  onSave: (talentId: string) => void;
  isSaved: boolean
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

=======
import { Button } from "@/components/ui/button",
import { Star } from "lucide-react",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface SaveTalentButtonProps {
  talentId: string,
  onSave: (talentId: string) => void,
  isSaved: boolean
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react',;
import { Button } from "@/components/ui/button",;
import { Star } from "lucide-react",;
interface SaveTalentButtonProps {;
  talentId: string,;
  onSave: (talentId: string) => void;
  isSaved: boolean;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
export function SaveTalentButton({
  talentId
  onSave
  isSaved
}: SaveTalentButtonProps) {
<<<<<<< HEAD
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/SaveTalentButton.tsx
import React from 'react';
import {Button} from "@/components/ui/button";
import {Star} from "lucide-react";
interface SaveTalentButtonProps {;
  talentId: string,;
  onSave: (talentId: string) => void,;
  isSaved: boolean;
}
export function SaveTalentButton(): any ({ talentId, onSave, isSaved }: SaveTalentButtonProps) {;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <Button
      onClick={() => onSave(talentId)}
      variant={isSaved ? "default" : "outline"}
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/SaveTalentButton.tsx
<<<<<<< HEAD
      size="sm"
<<<<<<< HEAD

  );
}

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    </Button>
  )
}
;
<<<<<<< HEAD

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/SaveTalentButton.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/SaveTalentButton.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/SaveTalentButton.tsx
      className={
        is_saved;
          ? "bg - yellow - 500 hover:bg - yellow - 600 text - white";
          : "text - yellow - 500 border - yellow - 500 hover:bg - yellow - 500 / 10";
      }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/SaveTalentButton.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/SaveTalentButton.tsx
      size="sm";
      className={isSaved ? "bg-yellow-500 hover:bg-yellow-600 text-white" : "text-yellow-500 border-yellow-500 hover:bg-yellow-500/10"}
    >;
      <Star className={`h-4 w-4 ${isSaved ? 'fill-current' : ''} mr-1`} />;
      {isSaved ? 'Saved' : 'Save'}
    </Button>;
  );
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/SaveTalentButton.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/SaveTalentButton.tsx
    >;
      <Star className={`h - 4 w - 4 ${is_saved ? "fill - current" : ""} mr - 1`} />;
      {is_saved ? "Saved" : "Save"}
    </Button>);
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/SaveTalentButton.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
      size="sm"

      className={isSaved ? "bg-yellow-500 hover:bg-yellow-600 text-white" : "text-yellow-500 border-yellow-500 hover:bg-yellow-500/10"}
    >
      <Star className={`h-4 w-4 ${isSaved ? 'fill-current' : ''} mr-1`} />
      {isSaved ? 'Saved' : 'Save'}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/SaveTalentButton.tsx
=======
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

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
