<<<<<<< HEAD
import { cn } from "@/lib/utils";
import React from "react";
=======

    <div
      className={cn(
        "flex items-start p-6 rounded-lg border border-zion-purple/20 hover: border-zion-purple/50 transition-all duration-300"
        className
      )}
    >
      <div className="mr-4 text-zion-cyan p-2">{icon}</div>

=======
import { cn } from "@/lib/utils",
import React from "react",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
interface FeatureCardProps {
  title: string,
  description: string,
  icon: React.ReactNode,
  className?: string,
  key?: string | number, // Added key prop
}

export function FeatureCard({ title, description, icon, className }: FeatureCardProps) {
  return (
    <div className={cn(
      "flex items-start p-6 rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300",
      className
    )}>
      <div className="mr-4 text-zion-cyan p-2">
        {icon}
      </div>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      <div>
        <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
        <p className="text-zion-slate-light">{description}</p>
      </div>
<<<<<<< HEAD
=======
    </div>
  )
import { cn } from "@/lib/utils",;
import React from "react",;
interface FeatureCardProps {;
  title: string,;
  description: string,;
  icon: React.ReactNode,;
  className?: string,;
  key?: string | number, // Added key prop;
}
;
export function FeatureCard({ title, description, icon, className }: FeatureCardProps) {;
  return (;
    <div className={cn(;
      "flex items-start p-6 rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300";
      className;
    )}>;
      <div className="mr-4 text-zion-cyan p-2">;
        {icon}
      </div>;
      <div>;
        <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>;
        <p className="text-zion-slate-light">{description}</p>;
      </div>;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
    </div>;
  );
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
