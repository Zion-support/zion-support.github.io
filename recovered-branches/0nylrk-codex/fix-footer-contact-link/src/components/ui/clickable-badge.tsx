
import React from "react",
import { X } from "lucide-react",
import { cn } from "@/lib/utils";
import { badgeVariants } from "@/components/ui/badge-variants";
export interface ClickableBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  onRemove?: () => void;
<<<<<<< HEAD
  variant?: "default" | "secondary" | "destructive" | "outline"
}
=======
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function ClickableBadge({
  children;
  className;
  variant;
            onRemove()
          }}
          className="ml-1 rounded-full p-0.5 hover:bg-background/20"
          aria-label="Remove"
        >
          <X className="h-3 w-3" />
        </button>
      )}
    </div>
  )
}