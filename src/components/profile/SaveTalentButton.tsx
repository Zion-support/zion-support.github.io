
import React from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
<<<<<<< HEAD
interface SaveTalentButtonProps {talentId: string,
import { Star } from 'lucide-react';
interface SaveTalentButtonProps {
talentId: string,
onSave: (talentId: string) => void,
isSaved: boolean,
=======
interface SaveTalentButtonProps {talentId: string;,
onSave: (talentId: string) => void;,
isSaved: boolean;
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
export function SaveTalentButton({
talentId,
}
onSave}
<<<<<<< HEAD
onSave
  isSaved}: SaveTalentButtonProps) {
      onClick={() => onSave(talentId)}
      variant={isSaved ? 'default' : 'outline'}
      size='sm'
      className={
        isSaved
          ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
          : 'text-yellow-500 border-yellow-500 hover:bg-yellow-500/10'
      }    >
=======
isSaved}: SaveTalentButtonProps) {
onClick={() => onSave(talentId)}
variant={isSaved ? "default" : "outline"}
size="sm";
className={
isSaved;
? "bg-yellow-500 hover:bg-yellow-600 text-white";
: "text-yellow-500 border-yellow-500 hover:bg-yellow-500/10";
}    >;
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
import { Button } from "@/components/ui/button";
interface SaveTalentButtonProps {
isSaved: boolean;
}
}
}
export function SaveTalentButton({ talentId onSave isSaved }: SaveTalentButtonProps) {return (<Button;
onClick = {() => onSave(talentId)}
<<<<<<< HEAD
export function SaveTalentButton({ talentId onSave isSaved }: SaveTalentButtonProps) {
  return (
    <Button,
onClick = {(,) => onSave(talentId)}
      variant = {isSaved ? "default" : "outline"}
      size="sm"
      className = {isSaved ? "bg-yellow-500 hover:bg-yellow-600 text-white" : "text-yellow-500 border-yellow-500 hover:bg-yellow-500/10"}
      <Star className={`h-4 w-4 ${isSaved ? 'fill-current' : ''} mr-1`} />
      {isSaved ? 'Saved' : 'Save'}
    </Button>
  )
=======
variant = {isSaved ? "default" : "outline"}
size="sm";
className = {isSaved ? "bg-yellow-500 hover:bg-yellow-600 text-white" : "text-yellow-500 border-yellow-500 hover:bg-yellow-500/10"}
<Star className={`h-4 w-4 ${isSaved ? "fill-current" : ""} mr-1`} />;
{isSaved ? "Saved" : "Save"}
</Button>;
)
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
}}
}