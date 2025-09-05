
<<<<<<< HEAD
import { cn } from "@/lib/utils",;
import React from "react",;
;
interface FeatureCardProps {;
  title:string,;
  description:string,;
  icon:React.ReactNode,;
  className?:string,;
  key?:string | number, // Added key prop;
}
;
export function FeatureCard({ title, description, icon, className } FeatureCardProps) {;
  return (;
    <div className={cn(;
      "flex items-start p-6 rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300",;
      className;
    )}>;
      <div className="mr-4 text-zion-cyan p-2">;
        {icon}
      </div>;
      <div>;
        <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>;
        <p className="text-zion-slate-light">{description}</p>;
      </div>;
    </div>;
  ),;
=======
import { cn } from "@/lib/utils",
import React from "react",interface FeatureCardProps {
  title: string,
  description: string,
  icon: React.ReactNode,
  className?: string,
  key?: string | number, // Added key prop
}
import React from "react";

interface FeatureCardProps {_title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  key?: string | number; // Added key prop}

export function FeatureCard(_{_title, _description, _icon, _className}: FeatureCardProps) {_return (
    <div className={cn(
      &quot;flex items-start p-6 rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300&quot;,
      className
    )}>
      <div className=&quot;mr-4 text-zion-cyan p-2&quot;>
        {icon}
      </div>
      <div>
        <h3 className=&quot;text-lg font-bold mb-2 text-white&quot;>{title}</h3>
        <p className=&quot;text-zion-slate-light&quot;>{description}</p>      </div>
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
