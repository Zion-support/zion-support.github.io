
<<<<<<< HEAD
import React from 'react',;
import { Button } from "@/components/ui/button",;
import { Star } from 'lucide-react';
;
interface SaveTalentButtonProps {;
  talentId:string,;
  onSave:(talentId:string) => void,;
  isSaved:boolean;
}
;
export function SaveTalentButton({ talentId, onSave, isSaved } SaveTalentButtonProps) {;
  return (;
    <Button;
      onClick={() => onSave(talentId)}
      variant={isSaved ? "default" :"outline"}
      size="sm";
      className={isSaved ? "bg-yellow-500 hover:bg-yellow-600 text-white" :"text-yellow-500 border-yellow-500 hover:bg-yellow-500/10"}
    >;
      <Star className={`h-4 w-4 ${isSaved ? 'fill-current' :''} mr-1`} />;
      {isSaved ? 'Saved' :'Save'}
    </Button>;
  ),;
=======
import React from 'react',
import { Button } from "@/components/ui/button",import { Star } from 'lucide-react'

interface SaveTalentButtonProps {
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
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
