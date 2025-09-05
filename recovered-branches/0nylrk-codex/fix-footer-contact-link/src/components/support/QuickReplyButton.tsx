
<<<<<<< HEAD
import React from "react",;
import { Button } from "@/components/ui/button",;
import { cn } from "@/lib/utils",;
;
interface QuickReplyButtonProps {;
  text:string,;
  onClick:() => void;
}
;
export function QuickReplyButton({ text, onClick } QuickReplyButtonProps) {;
  return (;
    <Button;
      variant="outline";
      size="sm";
      className={cn(;
        "border-zion-purple/30 hover:bg-zion-purple hover:text-white",;
        "transition-colors duration-200";
      )}
      onClick={onClick}
    >;
      {text}
    </Button>;
  ),;
=======
import React from "react",
import { Button } from "@/components/ui/button",
import { cn } from "@/lib/utils",interface QuickReplyButtonProps {
  text: string,
  onClick: () => void
}
import React from "react";

interface QuickReplyButtonProps {_text: string;
  onClick: () => void;}

export function QuickReplyButton(_{_text, _onClick}: QuickReplyButtonProps) {_return (
    <Button
      variant=&quot;outline&quot;
      size=&quot;sm&quot;
      className={cn(
        &quot;border-zion-purple/30 hover:bg-zion-purple hover:text-white&quot;,
        &quot;transition-colors duration-200&quot;      )}
      onClick={_onClick}
    >
      {_text}
    </Button>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
