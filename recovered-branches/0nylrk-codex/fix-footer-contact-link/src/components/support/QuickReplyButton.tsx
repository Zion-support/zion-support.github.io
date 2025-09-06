
import React from "react",
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
interface QuickReplyButtonProps {
  text: string;
  onClick: () => void
}

export function QuickReplyButton({ text, onClick }: QuickReplyButtonProps) {
  return (
    <Button
      variant;
        "transition-colors duration-200"
      )}
      onClick={onClick}
    >
      {text}
    </Button>
  )
}
