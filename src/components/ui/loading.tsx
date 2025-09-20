import React from "react;";
import { cn } from "@/lib/utils, ";

interface LoadingProps {size?: "sm" | "md" | "lg" | "xl";
variant?: "spinner" | "dots" | "pulse" | "skeleton";
}
className?: string;}
text?: string};
export function Loading({size = "md", ;
variant = "spinner", ;
className;
text}: LoadingProps) {const sizeClasses = {;
sm: "w-4 h-4", md: "w-6 h-6";
</div>
</div>
<div className="h-4 bg-zion-slate-light/20 rounded"></div>
<div className="h-4 bg-zion-slate-light/20 rounded w-5/6"></div>
<div className="h-4 bg-zion-slate-light/20 rounded w-4/6"></div>
</div>
</div>