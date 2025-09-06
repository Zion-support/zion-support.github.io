<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
interface QuickReplyButtonProps {
  text: string;
  onClick: () => void
}
<<<<<<< HEAD
export function QuickReplyButton({ text, onClick }: QuickReplyButtonProps) {
=======
import React from "react";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
<<<<<<< HEAD
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


        "border-zion-purple/30 hover: bg-zion-purple hover:text-white",

=======
=======
import React from "react",
import { Button } from "@/components/ui/button",
import { cn } from "@/lib/utils",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
interface QuickReplyButtonProps {
  text: string;
  onClick: () => void;
}
export function QuickReplyButton({ text, onClick }: QuickReplyButtonProps) {

        "border-zion-purple/30 hover: bg-zion-purple hover:text-white",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
        "transition-colors duration-200",
>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        "transition-colors duration-200",
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      )}
      onClick={onClick}>;
      {text}

    </Button>;
  );
}
  return (
    <Button

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
    </Button>;
  );
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React from './react';
import { Button  } from '@/components / ui / button';
import { cn  } from '@/lib / utils';
interface QuickReplyButtonProps {
  text: string;
  on_click: () => void;
}
<<<<<<< HEAD
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
    </Button>
=======
    </Button>
  );
}
;


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
  ),;}
 interface QuickReplyButtonProps {
  text: string;
onClick: () => void 
}text, onClick 
}: QuickReplyButtonProps) {
  return (<Button variant="outline" size="sm" className= {
  cn () 
}onClick= {
  onClick 
}> {
  text 
}</Button>) 
}
import React from "react",
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

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

      )}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
  )
}
;
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
