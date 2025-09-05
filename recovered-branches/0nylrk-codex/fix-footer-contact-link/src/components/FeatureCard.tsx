
<<<<<<< HEAD
<<<<<<< HEAD
import { cn } from "@/lib/utils",
import React from "react",
=======
import { cn } from &quot;@/lib/utils&quot;;
import React from &quot;react&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface FeatureCardProps {
  title: string,
  description: string,
  icon: React.ReactNode,
  className?: string,
  key?: string | number, // Added key prop
}
=======
import React from "react";

interface FeatureCardProps {_title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  key?: string | number; // Added key prop}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export function FeatureCard(_{_title, _description, _icon, _className}: FeatureCardProps) {_return (
    <div className={cn(
<<<<<<< HEAD
      &quot;flex items-start p-6 rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300&quot;,
      className
    )}>
      <div className=&quot;mr-4 text-zion-cyan p-2&quot;>
        {icon}
      </div>
      <div>
        <h3 className=&quot;text-lg font-bold mb-2 text-white&quot;>{title}</h3>
        <p className=&quot;text-zion-slate-light&quot;>{description}</p>
=======
      "flex items-start p-6 rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300", _className
    )}>
      <div className="mr-4 text-zion-cyan p-2">
        {_icon}
      </div>
      <div>
        <h3 className="text-lg font-bold mb-2 text-white">{_title}</h3>
        <p className="text-zion-slate-light">{_description}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </div>
    </div>
  )
}
