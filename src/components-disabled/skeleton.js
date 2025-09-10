import { cn } from "@/lib/utils";
function Skeleton(_{ className, _...props }) {
    return (<div className={cn("animate-pulse rounded-md bg-muted", className)} {...props}/>);
}
export { Skeleton };
