<<<<<<< HEAD

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
<<<<<<< HEAD
<<<<<<< HEAD



=======
<<<<<<< HEAD



>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface SaveTalentButtonProps {
  talentId: string,
  onSave: (talentId: string) => void,
  isSaved: boolean
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD



}
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
=======
import React from 'react';
import {Button} from "@/components/ui/button";
import {Star} from "lucide-react";
interface SaveTalentButtonProps {;
  talentId: string,;
  onSave: (talentId: string) => void,;
  isSaved: boolean;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
import React from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
interface SaveTalentButtonProps {
  talentId: string;
  onSave: (talentId: string) => void;
  isSaved: boolean;
>>>>>>> main
}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export function SaveTalentButton({
  talentId,
  onSave,
  isSaved,
}: SaveTalentButtonProps) {
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React from 'react';
import {Button} from "@/components/ui/button";
import {Star} from "lucide-react";
interface SaveTalentButtonProps {;
  talentId: string,;
  onSave: (talentId: string) => void,;
  isSaved: boolean;
}

<<<<<<< HEAD
export function SaveTalentButton(): any ({ talentId, onSave, isSaved }: SaveTalentButtonProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return (
    <Button
      onClick={() => onSave(talentId)}
      variant={isSaved ? "default" : "outline"}
      className={
        is_saved;
          ? "bg - yellow - 500 hover:bg - yellow - 600 text - white";
          : "text - yellow - 500 border - yellow - 500 hover:bg - yellow - 500 / 10";
      className={isSaved ? "bg-yellow-500 hover:bg-yellow-600 text-white" : "text-yellow-500 border-yellow-500 hover:bg-yellow-500/10"}
    >
      <Star className={`h-4 w-4 ${isSaved ? 'fill-current' : ''} mr-1`} />
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
    >;
      <Star className={`h - 4 w - 4 ${is_saved ? "fill - current" : ""} mr - 1`} />;
      {is_saved ? "Saved" : "Save"}
    </Button>);
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      size="sm"
      className={
        isSaved
          ? "bg-yellow-500 hover:bg-yellow-600 text-white"
          : "text-yellow-500 border-yellow-500 hover:bg-yellow-500/10"
      }
    >
<<<<<<< HEAD
      <Star className={`h-4 w-4 ${isSaved ? 'fill-current' : ''} mr-1`} />
      {isSaved ? 'Saved' : 'Save'}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
      <Star className={`h-4 w-4 ${isSaved ? "fill-current" : ""} mr-1`} />
      {isSaved ? "Saved" : "Save"}
    </Button>
  );
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
