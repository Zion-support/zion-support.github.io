


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface QuickReplyButtonProps {
  text: string;
  onClick: () => void
}
export function QuickReplyButton({ text, onClick }: QuickReplyButtonProps) {
  return (
    <Button

      variant="outline"
      size="sm"
      className={cn(

        "border-zion-purple/30 hover: bg-zion-purple hover:text-white",

        "transition-colors duration-200"
=======
        "border-zion-purple/30 hover:bg-zion-purple hover:text-white",
        "transition-colors duration-200"
import React from "react",;
import { Button } from "@/components/ui/button",;
import { cn } from "@/lib/utils",;
interface QuickReplyButtonProps {;
  text: string,;
  onClick: () => void;
}
;
export function QuickReplyButton({ text, onClick }: QuickReplyButtonProps) {;
  return (;
    <Button;
      variant="outline";
      size="sm";
      className={cn(;
        "border-zion-purple/30 hover:bg-zion-purple hover:text-white";
        "transition-colors duration-200";


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      )}
      onClick={onClick}
    >
      {text}
    </Button>

  )
}
;

