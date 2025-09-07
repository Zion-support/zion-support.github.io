
import * as React from &quot;react & quot;
import { cn } from &quot;@/lib / utils & quot;
import { cn } from "@/lib/utils"

import { badgeVariants } from "@/components/ui/badge-variants"

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  variant?:
    | "default"
    | "secondary"
    | "destructive"
    | "outline"
    | "success"
    | "warning"
    | "info"

}

;
;

;

;
import * as React from "react"""
import { cn } from "@/lib/utils"""
import { badgeVariants } from "@/components/ui/badge-variants""
export interface BadgeProps;
  extends React.HTMLAttributes<HTMLSpanElement> {

    <span className={cn(badgeVariants({ variant }), className)} {...props} />;
</span>
</span>"
pr-12325
