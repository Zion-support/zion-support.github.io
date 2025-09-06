import React from 'react';
import { Button } from '@/components / ui / button';
import { Star } from 'lucide-react';
interface SaveTalentButtonProps {
  talent_id: string;
  on_save: (talent_id: string) => void;
  is_saved: boolean;
export /**
 * SaveTalentButton - Function description
 */
function SaveTalentButton() {
      on_click={() => on_save (talent_id)}
      variant={is_saved ? 'default' : 'outline'}
      size='sm';
      className={
        is_saved;
          ? 'bg - yellow - 500 hover:bg - yellow - 600 text - white';
          : 'text - yellow - 500 border - yellow - 500 hover:bg - yellow - 500 / 10';
      }    >;
import { Button  } from '@/components / ui / button';
interface SaveTalentButtonProps {
  talent_id: string,
  on_save: (talent_id: string, ) => void,
  is_saved: boolean;
}
export /**
 * SaveTalentButton - Function description
 */
function SaveTalentButton() {
  return (
    <Button;
      on_click = {(, ) => on_save (talent_id), }
      variant = {is_saved ? "default" : "outline", }
      size="sm";
      class_name = {is_saved ? "bg - yellow - 500 hover:bg - yellow - 600 text - white" : "text - yellow - 500 border - yellow - 500 hover:bg - yellow - 500 / 10", }
      <Star className={`h - 4 w - 4 ${is_saved ? 'fill - current' : ''} mr - 1`} />;
      {is_saved ? 'Saved' : 'Save'}
    </Button>);
}}
}