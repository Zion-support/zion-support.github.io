<<<<<<< HEAD
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "@/lib/utils";
export function GradientHeading({ childre,  n, classNam, e, level = "h2", id }) {
    const Tag = level;
    return (_jsx(Ta,  g, { i, d: i, d,
    classNam, e: cn("text-4xl font-bold tracking-tight bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent", className), childre, n: children }));
=======
import { cn } from "@/lib/utils";

export function GradientHeading({ childre,  n, classNam, e, level = "h2", id }) {
    const Tag = level;
    return (<Tag id={id} className={cn("text-4xl font-bold tracking-tight bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent",  className)}>
      {children}
    </Tag>);
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
}
