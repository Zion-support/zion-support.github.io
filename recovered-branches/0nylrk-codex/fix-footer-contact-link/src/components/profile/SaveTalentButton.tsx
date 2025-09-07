<<<<<<< HEAD
interface SaveTalentButtonProps {
  talentId: string,
  onSave: (talentId: string) => void,
  isSaved: boolean
import React from 'react';
import { Button } from "@/components/ui/button";
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
}: SaveTalentButtonProps) {import React from "react";
=======
import React from "react";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-59b1
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
interface SaveTalentButtonProps {
  talentId: string;
  onSave: (talentId: string) => void;
  isSaved: boolean;
}
<<<<<<< HEAD
export function SaveTalentButton({
  talentId,
  onSave,
  isSaved,
}: SaveTalentButtonProps) {
=======import React from 'react';
import {Button} from "@/components/ui/button";
import {Star} from "lucide-react";
interface SaveTalentButtonProps {;
  talentId: string,;
  onSave: (talentId: string) => void,;
  isSaved: boolean;
}
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-59b1
export function SaveTalentButton({
  talentId,
  onSave,
  isSaved,
}: SaveTalentButtonProps) {
  return (
    <Button
      onClick={() => onSave(talentId)}
      variant={isSaved ? "default" : "outline"}
<<<<<<< HEAD
      className={
        is_saved;
          ? "bg - yellow - 500 hover:bg - yellow - 600 text - white";
          : "text - yellow - 500 border - yellow - 500 hover:bg - yellow - 500 / 10";
      className={isSaved ? "bg-yellow-500 hover:bg-yellow-600 text-white" : "text-yellow-500 border-yellow-500 hover:bg-yellow-500/10"}
    >
      <Star className={`h-4 w-4 ${isSaved ? 'fill-current' : ''} mr-1`} />
      {isSaved ? 'Saved' : 'Save'}
    </Button>
  )
}
    >;
      <Star className={`h - 4 w - 4 ${is_saved ? "fill - current" : ""} mr - 1`} />;
      {is_saved ? "Saved" : "Save"}
    </Button>);
}
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-59b1
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
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-59b1
