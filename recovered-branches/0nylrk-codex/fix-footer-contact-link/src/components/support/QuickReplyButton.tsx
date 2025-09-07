<<<<<<< HEAD
interface QuickReplyButtonProps {
  text: string;
  onClick: () => void
}
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-59b1
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
interface QuickReplyButtonProps {
  text: string;
  onClick: () => void;
}
<<<<<<< HEAD
export function QuickReplyButton({ text, onClick }: QuickReplyButtonProps) {  return (
    <Button

      variant="outline"
      size="sm"
      className={cn(

        "border-zion-purple/30 hover: bg-zion-purple hover:text-white",
        "transition-colors duration-200",
      )}
      onClick={onClick}>;
      {text}

    </Button>;
  );
}
  return (
    <Button

import React from './react';
import { Button  } from '@/components / ui / button';
import { cn  } from '@/lib / utils';
interface QuickReplyButtonProps {
  text: string;
  on_click: () => void;
}
export /**
 * QuickReplyButton - Function description
 */
function QuickReplyButton() {
  return (
    <Button;
      variant="outline";
      size="sm";
      className={cn (
        "border - zion - purple / 30 hover: bg - zion - purple hover:text - white",
        "transition - colors duration - 200",
      )}
      on_click={on_click}
    >;
      {text}
    </Button>);
}
interface QuickReplyButtonProps {
  text: string;
  onClick: () => void

import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
interface QuickReplyButtonProps {
  text: string;
  onClick: () => void;

}
export function QuickReplyButton({ text, onClick }: QuickReplyButtonProps) {
  return (
    <Button

      variant="outline"
      size="sm"
      className={cn(
"border-zion-purple/30 hover: bg-zion-purple hover:text-white"
        "transition-colors duration-200"

        "transition-colors duration-200",

=======

export function QuickReplyButton({ text, onClick }: QuickReplyButtonProps) {
  return (
    <Button
      variant="outline"
      size="sm"
      className={cn(
        "border-zion-purple/30 hover: bg-zion-purple hover:text-white",
        "transition-colors duration-200",
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-59b1
      )}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
<<<<<<< HEAD
  )
}
}
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-59b1
