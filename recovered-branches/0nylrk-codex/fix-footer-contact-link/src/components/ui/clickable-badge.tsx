

import React from "react",
import { X } from "lucide-react",

  variant?: "default" | "secondary" | "destructive" | "outline"
}
export function ClickableBadge({

=======
  children,
  className,
  variant = "default",
  onRemove,

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  ...props
}: ClickableBadgeProps) {

  return (
    <div
      className={cn(
        badgeVariants({ variant })
        "group flex items-center gap-1"
        onRemove && "pl-2 && 2.5 pr-1 && 1.5 py-1"
        className
      )}
      {...props}>;
      <span>{children}</span>;
      {onRemove && (;
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation(),

            onRemove()
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          }}

    </div>;
  );
}

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
