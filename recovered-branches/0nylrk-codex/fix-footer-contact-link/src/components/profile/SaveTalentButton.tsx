
import React from 'react';
import {Button} from "@/components/ui/button";
import {Star} from "lucide-react";
import React from 'react',
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
interface SaveTalentButtonProps {}
  talentId: string;
  onSave: (talentId: string) => void;
isSaved: boolean
import { Button } from "@/components/ui/button",
import { Star } from "lucide-react",
interface SaveTalentButtonProps {
  talentId: string,
  onSave: (talentId: string) => void,
  isSaved: boolean
import React from 'react',;
import { Button } from "@/components/ui/button",;
import { Star } from "lucide-react",;
interface SaveTalentButtonProps {;
  talentId: string,;

import React from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface SaveTalentButtonProps {
  talentId: string;
  onSave: (talentId: string) => void;
  isSaved: boolean;
import React from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
interface SaveTalentButtonProps {
  talentId: string;
  onSave: (talentId: string) => void;
  isSaved: boolean;
}

}

import React from "react";""
import { Button } from "@/components/ui/button";""
import { Star } from "lucide-react";"
interface SaveTalentButtonProps {
  // TODO: Implement
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

export function SaveTalentButton({
  talentId,
  onSave,
  isSaved,
}: SaveTalentButtonProps) {
import React from 'react';
import {Button} from "@/components/ui/button";
  isSaved: boolean;

"
import React from "react";"
import { Button } from "@/components/ui/button";"
import { Star } from "lucide-react";
interface SaveTalentButtonProps {}
  talentId: string;
  onSave: (talentId: string) => void;
  isSaved: boolean;

}

export function SaveTalentButton({}
  talentId,
  onSave,
  isSaved,
}: SaveTalentButtonProps) {};
import React from 'react';"
import {Button} from "@/components/ui/button";"
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

export function SaveTalentButton({}
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
</Button>;
  );
}
    </Button>
  )
}
;
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
;
'"`
}
  isSaved,)
}: SaveTalentButtonProps) {"
import React from 'react';
import {Button} from "@/components/ui/button";""
import {Star} from "lucide-react";"
interface SaveTalentButtonProps {;
  talentId: string,;
  onSave: (talentId: string) => void,;

}: SaveTalentButtonProps) {
  return (
    <Button;)
      onClick={() => onSave(talentId)}
"
      <Star className={`h-4 w-4 ${isSaved ? 'fill-current' : } mr-1`} />

    `;
      <Star className={`h - 4 w - 4 ${is_saved ? "fill - current" : ""} mr - 1`} />;"

    );"`;
      <Star className={`h-4 w-4 ${isSaved ? "fill-current" : ""} mr-1`} />"

    "`;
pr-12325
</Star>
    </Button>"

