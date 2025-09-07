import { Star } from 'lucide-react'
interface SaveTalentButtonProps {
  talentId: string
  onSave: (talentId: string) => void
  isSaved: boolean
export function SaveTalentButton({
  talentId
  onSave
  isSaved
}: SaveTalentButtonProps) {
      onClick={() => onSave(talentId)}
      variant={isSaved ? 'default' : 'outline'}
      size='sm'
      className={
          ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
          : 'text-yellow-500 border-yellow-500 hover:bg-yellow-500/10'
      }    >
import { Button } from "@/components/ui/button"

  onSave: (talentId: string,) => void

}
export function SaveTalentButton({ talentId, onSave, isSaved }: SaveTalentButtonProps) {
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

interface SaveTalentButtonProps {;
  talentId: string;
  onSave: (talentId: string) => void;
  isSaved: boolean;

export function SaveTalentButton(): any ({;
  talentId,;
  onSave,;
  isSaved,;
}: SaveTalentButtonProps) {;

      size='sm';
      className={;
        isSaved;
          ? 'bg-yellow-500 hover:bg-yellow-600 text-white';
          : 'text-yellow-500 border-yellow-500 hover:bg-yellow-500/10';
      }    >;
import React from 'react';
import { Button } from "@/components/ui/button";

  talentId: string,;
  onSave: (talentId: string,) => void,;

export function SaveTalentButton(): any ({ talentId, onSave, isSaved }: SaveTalentButtonProps) {;
  return (
    <Button

      {isSaved ? 'Saved' : 'Save'}
    </Button>
  );

import { Button } from '@/components / ui / button';
  talent_id: string;
  on_save: (talent_id: string) => void;
  is_saved: boolean;
export /**
 * SaveTalentButton - Function description
 */
function SaveTalentButton() {
      on_click={() => on_save (talent_id)}
      variant={is_saved ? 'default' : 'outline'}
        is_saved;
          ? 'bg - yellow - 500 hover:bg - yellow - 600 text - white';
          : 'text - yellow - 500 border - yellow - 500 hover:bg - yellow - 500 / 10';
import { Button  } from '@/components / ui / button';
  talent_id: string,
  on_save: (talent_id: string, ) => void,
    <Button;
      on_click = {(, ) => on_save (talent_id), }
      variant = {is_saved ? "default" : "outline", }
      size="sm";
      class_name = {is_saved ? "bg - yellow - 500 hover:bg - yellow - 600 text - white" : "text - yellow - 500 border - yellow - 500 hover:bg - yellow - 500 / 10", }
      <Star className={`h - 4 w - 4 ${is_saved ? 'fill - current' : ''} mr - 1`} />;
      {is_saved ? 'Saved' : 'Save'}
    </Button>);
}}

  talentId: string,
  onSave: (talentId: string,) => void,