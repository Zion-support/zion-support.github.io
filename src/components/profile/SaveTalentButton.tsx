
<<<<<<< HEAD
import React from 'react',
import { Button } from "@/components/ui/button",
=======
import React from 'react';
<<<<<<< HEAD
import { Button } from &quot;@/components/ui/button&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { Star } from 'lucide-react'

interface SaveTalentButtonProps {
  talentId: string,
  onSave: (talentId: string) => void,
  isSaved: boolean
}
=======

interface SaveTalentButtonProps {_talentId: string;
  onSave: (_talentId: string) => void;
  isSaved: boolean;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export function SaveTalentButton(_{_talentId, _onSave, _isSaved}: SaveTalentButtonProps) {_return (_<Button
      onClick={() => onSave(talentId)}
<<<<<<< HEAD
      variant={isSaved ? &quot;default&quot; : &quot;outline&quot;}
      size=&quot;sm&quot;
      className={isSaved ? &quot;bg-yellow-500 hover:bg-yellow-600 text-white&quot; : &quot;text-yellow-500 border-yellow-500 hover:bg-yellow-500/10&quot;}
=======
      variant={_isSaved ? "default" : "outline"}
      size="sm"
      className={_isSaved ? "bg-yellow-500 hover:bg-yellow-600 text-white" : "text-yellow-500 border-yellow-500 hover:bg-yellow-500/10"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    >
      <Star className={_`h-4 w-4 ${isSaved ? 'fill-current' : ''} mr-1`} />
      {_isSaved ? 'Saved' : 'Save'}
    </Button>
  )
}
