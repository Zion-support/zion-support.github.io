
import React from 'react';

interface SaveTalentButtonProps {_talentId: string;
  onSave: (_talentId: string) => void;
  isSaved: boolean;}

export function SaveTalentButton(_{_talentId, _onSave, _isSaved}: SaveTalentButtonProps) {_return (_<Button
      onClick={() => onSave(talentId)}
      variant={_isSaved ? "default" : "outline"}
      size="sm"
      className={_isSaved ? "bg-yellow-500 hover:bg-yellow-600 text-white" : "text-yellow-500 border-yellow-500 hover:bg-yellow-500/10"}
    >
      <Star className={_`h-4 w-4 ${isSaved ? 'fill-current' : ''} mr-1`} />
      {_isSaved ? 'Saved' : 'Save'}
    </Button>
  );
}
