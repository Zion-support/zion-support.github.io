<<<<<<< HEAD

<<<<<<< HEAD
import React from "react";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import React from "react",
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button",
import { cn } from "@/lib/utils",
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
<<<<<<< HEAD
        "border-zion-purple/30 hover: bg-zion-purple hover:text-white"

        "border-zion-purple/30 hover: bg-zion-purple hover:text-white",
=======


        "border-zion-purple/30 hover: bg-zion-purple hover:text-white",

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
      )}
      onClick={onClick}>;
      {text}
    </Button>
<<<<<<< HEAD
  );
}
  )
}
;
=======

  )
}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
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
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
