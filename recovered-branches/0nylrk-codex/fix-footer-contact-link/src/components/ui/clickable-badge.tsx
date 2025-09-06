
=======
<<<<<<< HEAD
  variant?: "default" | "secondary" | "destructive" | "outline"
}
export function ClickableBadge({

  children,
  className,
  variant = "default",
  onRemove,

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
            onRemove()
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
          }}

    </div>;
  );
}

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
import React from './react';
import { X } from './lucide-react';
import { cn } from '@/lib / utils';
import { badge_variants } from '@/components / ui / badge - variants';
export interface ClickableBadgeProps extends React.HTMLAttributes < HTMLDivElement> {
  on_remove?: () => void;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  variant?: "default" | "secondary" | "destructive" | "outline";
}
export /**
 * ClickableBadge - Function description
 */
function ClickableBadge() {
  return (
    <div;
      className={cn (
        badge_variants ({ variant });
        "group flex items - center gap - 1";
        on_remove && "pl - 2.5 pr - 1.5 py - 1";
        class_name)}
      {...props}
    >;
      <span>{children}</span>;
      {on_remove && (
        <button;
          type="button";
          on_click={(e) => {
            e.stop_propagation ();
            on_remove ();
          }}

          className="ml-1 rounded-full p-0.5 hover:bg-background/20"
          aria-label="Remove"
        >
          <X className="h-3 w-3" />
        </button>
      )}
    </div>;
  );
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
