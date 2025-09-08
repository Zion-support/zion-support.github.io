

<<<<<<< HEAD
=======
import { Star } from "lucide-react";
interface SaveTalentButtonProps {}
  talentId: string;
  onSave: (talentId: string) => void;

>>>>>>> origin/cursor/delete-old-data-records-6bba
interface SaveTalentButtonProps {
  talentId: string,
  onSave: (talentId: string) => void,
  isSaved: boolean
<<<<<<< HEAD


=======

import React from 'react',;
import { Button } from "@/components/ui/button",;
import { Star } from "lucide-react",;
interface SaveTalentButtonProps {;
  talentId: string,;

interface SaveTalentButtonProps {
interface SaveTalentButtonProps {
  talentId: string,
  onSave: (talentId: string) => void,
  isSaved: boolean
import React from 'react',;
import { Button } from "@/components/ui/button",;
import { Star } from "lucide-react",;
interface SaveTalentButtonProps {;
  talentId: string,;
  onSave: (talentId: string) => void;
  isSaved: boolean;


}
export function SaveTalentButton({
  talentId
  onSave
  isSaved
}: SaveTalentButtonProps) {
import React from 'react',;
import { Button } from "@/components/ui/button",;
import { Star } from "lucide-react",;
interface SaveTalentButtonProps {;
  talentId: string,;
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
  return (
    <Button
      onClick={() => onSave(talentId)}
      variant={isSaved ? "default" : "outline"}


=======
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
interface SaveTalentButtonProps {
  talentId: string;

  onSave: (talentId: string) => void;
  isSaved: boolean;
}


}
>>>>>>> origin/cursor/delete-old-data-records-6bba

import React from "react";""
import { Button } from "@/components/ui/button";""
import { Star } from "lucide-react";"
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
interface SaveTalentButtonProps {
  // TODO: Implement
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

<<<<<<< HEAD
=======
    </Button>
  )
>>>>>>> origin/cursor/delete-old-data-records-6bba
}
    >;
      <Star className={`h - 4 w - 4 ${is_saved ? "fill - current" : ""} mr - 1`} />;`      {is_saved ? "Saved" : "Save"}"
    </Button>);
}

  talentId: string;,
  onSave: (talentId: string) => void;,
  isSaved: boolean;"
  // TODO: Implement
}
  talentId: string;,
  onSave: (talentId: string) => void;,
  isSaved: boolean;
pr-12325


<<<<<<< HEAD
=======
import {Star} from "lucide-react";
  isSaved,)
}: SaveTalentButtonProps) {"
import React from 'react';''
import {Button} from "@/components/ui/button";""
import {Star} from "lucide-react";"

interface SaveTalentButtonProps {;
  talentId: string,;
  onSave: (talentId: string) => void,;}
  isSaved: boolean;}
}

  talentId,

  onSave,
  isSaved,
}: SaveTalentButtonProps) {}
  return (;
    <Button;
      onClick={() => onSave(talentId)}"
      variant={isSaved ? "default" : "outline"}
      className={}
        is_saved;"
          ? "bg - yellow - 500 hover:bg - yellow - 600 text - white";"
          : "text - yellow - 500 border - yellow - 500 hover:bg - yellow - 500 / 10";"
      className={isSaved ? "bg-yellow-500 hover:bg-yellow-600 text-white" : "text-yellow-500 border-yellow-500 hover:bg-yellow-500/10"}
    >'
      <Star className={`h-4 w-4 ${isSaved ? 'fill-current' : ''} mr-1`} />'
      {isSaved ? 'Saved' : 'Save'}


      size="sm"
      className={}
        isSaved"
          ? "bg-yellow-500 hover:bg-yellow-600 text-white""
          : "text-yellow-500 border-yellow-500 hover:bg-yellow-500/10"
      }
    >"`
      <Star className={`h-4 w-4 ${isSaved ? "fill-current" : ""} mr-1`} />"
      {isSaved ? "Saved" : "Save"}
    </Button>
  );
}
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
