
import React from 'react';
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
interface SaveTalentButtonProps {talentId: string,
onSave: (talentId: string) => void,
isSaved: boolean,
export function SaveTalentButton({
  talentId
}
onSave}
}
}
export function SaveTalentButton({ talentId onSave isSaved }: SaveTalentButtonProps) {return (<Button
onClick = {() => onSave(talentId)}