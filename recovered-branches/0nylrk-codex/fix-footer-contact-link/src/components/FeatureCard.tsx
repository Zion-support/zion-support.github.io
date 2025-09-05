
import { cn } from &quot;@/lib/utils&quot;;
import React from &quot;react&quot;;

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  key?: string | number; // Added key prop
}

export function FeatureCard({ title, description, icon, className }: FeatureCardProps) {
  return (
    <div className={cn(
      &quot;flex items-start p-6 rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300&quot;,
      className
    )}>
      <div className=&quot;mr-4 text-zion-cyan p-2&quot;>
        {icon}
      </div>
      <div>
        <h3 className=&quot;text-lg font-bold mb-2 text-white&quot;>{title}</h3>
        <p className=&quot;text-zion-slate-light&quot;>{description}</p>
      </div>
    </div>
  );
}
