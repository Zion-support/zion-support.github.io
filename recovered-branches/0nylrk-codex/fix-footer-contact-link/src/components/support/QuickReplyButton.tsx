import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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
        "transition-colors duration-200",
      )}
      onClick={onClick}>;
      {text}

    </Button>;
  );
}
  return (


<<<<<<< HEAD
    </Button>;
  );
}
import React from './react';
import { Button  } from '@/components / ui / button';

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { cn  } from '@/lib / utils';
interface QuickReplyButtonProps {}
  text: string;
  on_click: () => void;
}

  text: string;
  onClick: () => void;

}
export function QuickReplyButton({ text, onClick }: QuickReplyButtonProps) {}
  return (;
    <Button;
<<<<<<< HEAD
=======
      variant="outline";"
      size="sm";"
      className={cn (
        "border - zion - purple / 30 "hover": bg - zion - purple "hover":text - white","
        "transition - colors duration - 200","
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
  );
}
;

"
      variant="outline""
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

<<<<<<< HEAD



=======
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
