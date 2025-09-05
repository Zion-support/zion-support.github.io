
import React from 'react',
import { Button } from "@/components/ui/button",
import { Star } from "lucide-react",interface SaveTalentButtonProps {
  talentId: string,
  onSave: (talentId: string) => void,
  isSaved: boolean
}

interface SaveTalentButtonProps {_talentId: string;
  onSave: (_talentId: string) => void;
  isSaved: boolean;}

export function SaveTalentButton(_{_talentId, _onSave, _isSaved}: SaveTalentButtonProps) {_return (_<Button
      onClick={() => onSave(talentId)}
      variant={isSaved ? &quot;default&quot; : &quot;outline&quot;}
      size=&quot;sm&quot;
      className={isSaved ? &quot;bg-yellow-500 hover:bg-yellow-600 text-white&quot; : &quot;text-yellow-500 border-yellow-500 hover:bg-yellow-500/10&quot;}    >
      <Star className={_`h-4 w-4 ${isSaved ? 'fill-current' : ''} mr-1`} />
      {_isSaved ? 'Saved' : 'Save'}
    </Button>
  )
}
