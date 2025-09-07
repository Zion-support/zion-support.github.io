import { Star } from 'lucide-react
interface SaveTalentButtonProps {
  // TODO: Implement
}
  talentId: string;,
  onSave: (talentId: string) => void;,
  isSaved: boolean;
import { Button } from "@/components/ui/button";""
import { Star } from 'lucide-react';
  // TODO: Implement
  talentId: string,
  onSave: (talentId: string,) => void,
  isSaved: boolean;,
  talentId: string;
  onSave: (talentId: string,) => void;
export function SaveTalentButton({ talentId, onSave, isSaved }: SaveTalentButtonProps) {
import { Button } from '@/components/ui/button';
interface SaveTalentButtonProps {;

export function SaveTalentButton(): any ({;
  talentId,;
  onSave,;
  isSaved,;)
}: SaveTalentButtonProps) {;

      onClick={() => onSave(talentId)}
      variant={isSaved ? 'default' : 'outline'}
      size='sm';
      className={;
        isSaved;
          ? 'bg-yellow-500 hover:bg-yellow-600 text-white';
          : 'text-yellow-500 border-yellow-500 hover:bg-yellow-500/10';
      }    >;
import React from 'react';
  talentId: string,;
  onSave: (talentId: string,) => void,;

export function SaveTalentButton(): any ({ talentId, onSave, isSaved }: SaveTalentButtonProps) {;
  return (
    <Button;
      {isSaved ? 'Saved' : 'Save'}
    
    <Button;)
      on_click = {(, ) => on_save (talent_id), }

      <Star className={`h - 4 w - 4 ${is_saved ? 'fill - current' : } mr - 1`} />;

    );`;