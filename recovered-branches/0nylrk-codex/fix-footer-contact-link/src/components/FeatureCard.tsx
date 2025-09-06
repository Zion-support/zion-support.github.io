
import { cn } from "@/lib/utils";
import React from "react";
interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
<<<<<<< HEAD
  key?: string | number, // Added key prop
}
=======
  key?: string | number; // Added key prop
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function FeatureCard({
  title
  description
  icon
  className
}: FeatureCardProps) {
  return (
<<<<<<< HEAD
    <div className;
      className
    )}>
      <div className="mr-4 text-zion-cyan p-2">
        {icon}
      </div>
=======
    <div
      className={cn(
        "flex items-start p-6 rounded-lg border border-zion-purple/20 hover: border-zion-purple/50 transition-all duration-300"
        className
      )}
    >
      <div className="mr-4 text-zion-cyan p-2">{icon}</div>
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
      <div>
        <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
        <p className="text-zion-slate-light">{description}</p>
      </div>
    </div>
  );
}