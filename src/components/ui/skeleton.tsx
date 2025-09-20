import React from "react";
import { cn  } from "@/lib/utils";

function Skeleton({className,
...props}: React.HTMLAttributes<HTMLDivElement>) {;
return (;
function Skeleton({
className,
...props}: React.HTMLAttributes<HTMLDivElement>) {
return (
<div;
className={cn("animate-pulse rounded-md bg-muted, ", className)}
{...props}
/>;
)
}

export { Skeleton };</div;
className={cn("animate-pulse rounded-md bg-muted, ", className)}
{...props}
/><//div;
className={cn("animate-pulse rounded-md bg-muted, ", className)}
{...props}
/>;