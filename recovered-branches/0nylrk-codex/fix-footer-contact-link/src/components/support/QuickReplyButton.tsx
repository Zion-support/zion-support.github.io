<<<<<<< HEAD
=======
interface QuickReplyButtonProps {
  text: string;
  onClick: () => void
}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
interface QuickReplyButtonProps {
  text: string;
  onClick: () => void;
}
<<<<<<< HEAD

export function QuickReplyButton(): any ({ text, onClick }: QuickReplyButtonProps) {;
  return (
=======
export function QuickReplyButton({ text, onClick }: QuickReplyButtonProps) {  return (
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    <Button

      variant="outline"
      size="sm"
      className={cn(

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        "border-zion-purple/30 hover: bg-zion-purple hover:text-white",
        "transition-colors duration-200",
      )}
      onClick={onClick}>;
      {text}

    </Button>;
  );
}
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
<<<<<<< HEAD
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

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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

