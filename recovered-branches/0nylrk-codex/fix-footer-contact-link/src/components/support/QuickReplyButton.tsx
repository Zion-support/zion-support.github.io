import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
interface QuickReplyButtonProps {
  text: string;
  onClick: () => void;
}
export function QuickReplyButton({ text, onClick }: QuickReplyButtonProps) {  return (
    <Button

      variant="outline"
      size="sm"
      className={cn(

        "border-zion-purple/30 hover: bg-zion-purple hover:text-white",
        "transition-colors duration-200",
      )}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
;
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
