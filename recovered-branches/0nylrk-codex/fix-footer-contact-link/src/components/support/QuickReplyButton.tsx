



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
interface QuickReplyButtonProps {
  text: string;
  onClick: () => void
}
export function QuickReplyButton({ text, onClick }: QuickReplyButtonProps) {
=======
import React from "react";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
interface QuickReplyButtonProps {;
  text: string,;
  onClick: () => void;
}

export function QuickReplyButton(): any ({ text, onClick }: QuickReplyButtonProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <Button

      variant="outline"
      size="sm"
      className={cn(


        "border-zion-purple/30 hover: bg-zion-purple hover:text-white",

        "transition-colors duration-200"
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



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      )}
      onClick={onClick}>;
      {text}
    </Button>

  )
}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
