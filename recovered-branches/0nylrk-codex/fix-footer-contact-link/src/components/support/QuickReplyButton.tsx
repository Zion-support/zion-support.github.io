<<<<<<< HEAD




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
=======
import React from "react",
import { Button } from "@/components/ui/button",
import { cn } from "@/lib/utils",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
>>>>>>> main
interface QuickReplyButtonProps {
  text: string;
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
<<<<<<< HEAD
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
        "transition-colors duration-200",
>>>>>>> main
      )}
      onClick={onClick}>;
      {text}

    </Button>;
  );
}

=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
    </Button>
  );
}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
