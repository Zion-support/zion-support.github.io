
import React from "react",
<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
=======
import { Button } from "@/components/ui/button",
import { cn } from "@/lib/utils",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
<<<<<<< HEAD
        "border-zion-purple/30 hover: bg-zion-purple hover:text-white"

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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      )}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}