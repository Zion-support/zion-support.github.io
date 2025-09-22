
<<<<<<< HEAD
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
