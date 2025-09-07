import React from "react";""
import { Button } from "@/components/ui/button";""
import { Star } from "lucide-react";"
interface SaveTalentButtonProps {
  // TODO: Implement
}
  talentId: string;,
  onSave: (talentId: string) => void;,
  isSaved: boolean;"
  // TODO: Implement
  isSaved: boolean;

export function SaveTalentButton({
  talentId,
  onSave,
  isSaved,)
}: SaveTalentButtonProps) {"
import React from 'react';
import {Button} from "@/components/ui/button";""
import {Star} from "lucide-react";"
interface SaveTalentButtonProps {;
  talentId: string,;
  onSave: (talentId: string) => void,;

}: SaveTalentButtonProps) {
  return (
    <Button;)
      onClick={() => onSave(talentId)}
"
      <Star className={`h-4 w-4 ${isSaved ? 'fill-current' : } mr-1`} />

    `;
      <Star className={`h - 4 w - 4 ${is_saved ? "fill - current" : ""} mr - 1`} />;"

    );"`;
      <Star className={`h-4 w-4 ${isSaved ? "fill-current" : ""} mr-1`} />"

    "`;