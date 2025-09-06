<<<<<<< HEAD

=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
import React from 'react';
import { Button } from "@/components/ui/button";
import { Star } from 'lucide-react'
interface SaveTalentButtonProps {
<<<<<<< HEAD
  talentId: string
  onSave: (talentId: string) => void
  isSaved: boolean
=======
  talentId: string;
  onSave: (talentId: string) => void;
  isSaved: boolean;
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function SaveTalentButton({
  talentId
  onSave
  isSaved
}: SaveTalentButtonProps) {
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      onClick={() => onSave(talentId)}
      variant={isSaved ? 'default' : 'outline'}
      size='sm'
      className={
        isSaved
          ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
          : 'text-yellow-500 border-yellow-500 hover:bg-yellow-500/10'
<<<<<<< HEAD
      }    >
import { Button } from "@/components/ui/button"
interface SaveTalentButtonProps {
<<<<<<< HEAD
  talentId: string;
  onSave: (talentId: string) => void;
=======
  talentId: string
  onSave: (talentId: string,) => void
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  isSaved: boolean
}
export function SaveTalentButton({ talentId, onSave, isSaved }: SaveTalentButtonProps) {
  return (
    <Button
      onClick = {(,) => onSave(talentId),}
      variant = {isSaved ? "default" : "outline",}
      size="sm"
      className = {isSaved ? "bg-yellow-500 hover:bg-yellow-600 text-white" : "text-yellow-500 border-yellow-500 hover:bg-yellow-500/10",}
      <Star className={`h-4 w-4 ${isSaved ? 'fill-current' : ''} mr-1`} />
      {isSaved ? 'Saved' : 'Save'}
    </Button>
  )
}}
}
=======
      }
    >
      <Star className={`h-4 w-4 ${isSaved ? 'fill-current' : ''} mr-1`} />
      {isSaved ? 'Saved' : 'Save'}
    </Button>
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
