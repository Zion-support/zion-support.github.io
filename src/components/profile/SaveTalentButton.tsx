
<<<<<<< HEAD
import React from 'react',
import { Button } from "@/components/ui/button",
=======
import React from 'react';
import { Button } from &quot;@/components/ui/button&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { Star } from 'lucide-react'

interface SaveTalentButtonProps {
  talentId: string,
  onSave: (talentId: string) => void,
  isSaved: boolean
}

export function SaveTalentButton({ talentId, onSave, isSaved }: SaveTalentButtonProps) {
  return (
    <Button
      onClick={() => onSave(talentId)}
      variant={isSaved ? &quot;default&quot; : &quot;outline&quot;}
      size=&quot;sm&quot;
      className={isSaved ? &quot;bg-yellow-500 hover:bg-yellow-600 text-white&quot; : &quot;text-yellow-500 border-yellow-500 hover:bg-yellow-500/10&quot;}
    >
      <Star className={`h-4 w-4 ${isSaved ? 'fill-current' : ''} mr-1`} />
      {isSaved ? 'Saved' : 'Save'}
    </Button>
  )
}
