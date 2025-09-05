
<<<<<<< HEAD
import React from "react",
import { Button } from "@/components/ui/button",
import { cn } from "@/lib/utils",
=======
import React from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { cn } from &quot;@/lib/utils&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface QuickReplyButtonProps {
  text: string,
  onClick: () => void
}

export function QuickReplyButton({ text, onClick }: QuickReplyButtonProps) {
  return (
    <Button
      variant=&quot;outline&quot;
      size=&quot;sm&quot;
      className={cn(
        &quot;border-zion-purple/30 hover:bg-zion-purple hover:text-white&quot;,
        &quot;transition-colors duration-200&quot;
      )}
      onClick={onClick}
    >
      {text}
    </Button>
  )
}
