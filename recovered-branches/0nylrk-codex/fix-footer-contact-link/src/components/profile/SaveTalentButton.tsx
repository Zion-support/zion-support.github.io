<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import React from 'react';
import {Button} from "@/components/ui/button";
import {Star} from "lucide-react";
import React from 'react',
import { Button } from "@/components/ui/button";
=======
import React from "react";"
import { Button } from "@/components/ui/button";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Star } from "lucide-react";
interface SaveTalentButtonProps {}
  talentId: string;
  onSave: (talentId: string) => void;
<<<<<<< HEAD
  isSaved: boolean
import { Button } from "@/components/ui/button",
import { Star } from "lucide-react",
=======
<<<<<<< HEAD
<<<<<<< HEAD



=======
<<<<<<< HEAD



>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
interface SaveTalentButtonProps {
  talentId: string,
  onSave: (talentId: string) => void,
  isSaved: boolean
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD



}
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import React from 'react',;
import { Button } from "@/components/ui/button",;
import { Star } from "lucide-react",;
interface SaveTalentButtonProps {;
  talentId: string,;
<<<<<<< HEAD
=======
import React from "react";
=======
  onSave: (talentId: string) => void;
  isSaved: boolean;
}
export function SaveTalentButton({
  talentId
  onSave
  isSaved
}: SaveTalentButtonProps) {import React from "react";
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import React from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
interface SaveTalentButtonProps {
  talentId: string;
  onSave: (talentId: string) => void;
  isSaved: boolean;
import React from "react";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
interface SaveTalentButtonProps {
  talentId: string;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
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
=======
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
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

<<<<<<< HEAD
export function SaveTalentButton({}
=======

export function SaveTalentButton({
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
    </Button>;
  );
}
    </Button>
  )
}
;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
    </Button>
  )
}
    >;"`
      <Star className={`h - 4 w - 4 ${is_saved ? "fill - current" : ""} mr - 1`} />;"
      {is_saved ? "Saved" : "Save"}
    </Button>);
}
<<<<<<< HEAD
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
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

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
