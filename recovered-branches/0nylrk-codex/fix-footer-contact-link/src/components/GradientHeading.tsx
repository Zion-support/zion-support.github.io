

import { cn } from "@/lib/utils",
import React from "react",
=======
import {cn} from "@/lib/utils";
import React from "react";
=======
import { cn } from "@/lib/utils",
import React from "react",

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface GradientHeadingProps {
  children: React.ReactNode,
  className?: string,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}



  return (
    <Tag
      className={cn(

        "text-4xl font-bold tracking-tight bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent",
        className

      )}
    >
      {children}
    </Tag>
  )
}