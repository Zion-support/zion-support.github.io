
import React from "react";

interface FeatureCardProps {_title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  key?: string | number; // Added key prop}

export function FeatureCard(_{_title, _description, _icon, _className}: FeatureCardProps) {_return (
    <div className={cn(
      "flex items-start p-6 rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300", _className
    )}>
      <div className="mr-4 text-zion-cyan p-2">
        {_icon}
      </div>
      <div>
        <h3 className="text-lg font-bold mb-2 text-white">{_title}</h3>
        <p className="text-zion-slate-light">{_description}</p>
      </div>
    </div>
  );
}
