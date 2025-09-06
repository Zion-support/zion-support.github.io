
import React from "react",
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button",
import { cn } from "@/lib/utils",



interface QuickReplyButtonProps {
  text: string;
  onClick: () => void
}
  return (
    <Button

      variant="outline"
      size="sm"
      className={cn(


        "border-zion-purple/30 hover: bg-zion-purple hover:text-white",

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

  )
}
;
