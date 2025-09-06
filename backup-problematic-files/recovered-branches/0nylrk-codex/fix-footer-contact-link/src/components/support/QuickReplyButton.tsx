<<<<<<< HEAD
import React from "react";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
interface QuickReplyButtonProps {;
  text: string,;
  onClick: () => void;
}
export function QuickReplyButton(): any ({ text, onClick }: QuickReplyButtonProps) {;
  return (
    <Button
      variant="outline"
      size="sm"
      className={cn(
        "border-zion-purple/30 hover: bg-zion-purple hover:text-white"
        "transition-colors duration-200"
      )}
      onClick={onClick}>;
      {text}
    </Button>;
  );
}
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
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
