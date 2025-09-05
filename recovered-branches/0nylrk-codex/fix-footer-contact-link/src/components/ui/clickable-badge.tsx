
<<<<<<< HEAD
import React from "react",
import { X } from "lucide-react",
import { cn } from "@/lib/utils",
import { badgeVariants } from "@/components/ui/badge-variants",
export interface ClickableBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  onRemove?: () => void,
  variant?: "default" | "secondary" | "destructive" | "outline"
=======
import React from &quot;react&quot;;
import { X } from &quot;lucide-react&quot;;
import { cn } from &quot;@/lib/utils&quot;;
import { badgeVariants } from &quot;@/components/ui/badge-variants&quot;;

export interface ClickableBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  onRemove?: () => void;
  variant?: &quot;default&quot; | &quot;secondary&quot; | &quot;destructive&quot; | &quot;outline&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
}

export function ClickableBadge({
  children,
  className,
  variant = &quot;default&quot;,
  onRemove,
  ...props
}: ClickableBadgeProps) {
  return (
    <div
      className={cn(
        badgeVariants({ variant }),
        &quot;group flex items-center gap-1&quot;,
        onRemove && &quot;pl-2.5 pr-1.5 py-1&quot;,
        className
      )}
      {...props}
    >
      <span>{children}</span>
      {onRemove && (
        <button
          type=&quot;button&quot;
          onClick={(e) => {
            e.stopPropagation(),
            onRemove()
          }}
          className=&quot;ml-1 rounded-full p-0.5 hover:bg-background/20&quot;
          aria-label=&quot;Remove&quot;
        >
          <X className=&quot;h-3 w-3&quot; />
        </button>
      )}
    </div>
  )
}
