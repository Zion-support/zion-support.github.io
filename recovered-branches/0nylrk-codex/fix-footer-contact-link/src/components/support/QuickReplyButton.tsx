








>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



interface QuickReplyButtonProps {
  text: string;
  onClick: () => void
}
export function QuickReplyButton({ text, onClick }: QuickReplyButtonProps) {

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







>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> origin/feature/merge-conflicts-and-improvements


      )}
      onClick={onClick}>;
      {text}
    </Button>





      )}
      onClick={onClick}>;
      {text}

    </Button>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  );
}

  )
}
;




>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements


