interface QuickReplyButtonProps {
  text: string;
  onClick: () => void
}
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
      onClick={onClick}>;
      {text}

    </Button>;
  );
}
  return (


import React from './react';
import { Button  } from '@/components / ui / button';

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { cn  } from '@/lib / utils';
interface QuickReplyButtonProps {}
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
        "border - zion - purple / 30 "hover": bg - zion - purple "hover":text - white","
        "transition - colors duration - 200","
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
      className={cn("
"border-zion-purple/30 hover: bg-zion-purple hover:text-white""


      )}
      onClick={onClick}
    >
      {text}
    </Button>
  )
}
;

