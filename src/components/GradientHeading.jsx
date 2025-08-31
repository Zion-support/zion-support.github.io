import { cn } from "@/lib/utils";
import React from "react";
export function GradientHeading({ children, className, level = "h2", id }) {
    const Tag = level;
    return (<Tag id={id} className = {
  cn("text-4xl font-bold tracking-tight bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent",
  className)






}>
      {children}
<<<<<<< HEAD
    </Tag>);
}
=======
    </Tag>)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
