
import React from "react",
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
interface QuickReplyButtonProps {
  text: string;
<<<<<<< HEAD
  onClick: () => void
}
=======
  onClick: () => void;
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function QuickReplyButton({ text, onClick }: QuickReplyButtonProps) {
  return (
    <Button
<<<<<<< HEAD
      variant;
=======
      variant="outline"
      size="sm"
      className={cn(
        "border-zion-purple/30 hover: bg-zion-purple hover:text-white"
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
        "transition-colors duration-200"
      )}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}