
import { cn } from "@/lib/utils";
import React from "react";
interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  key?: string | number, // Added key prop
}

export function FeatureCard(): any ({;
  title,;
  description,;
  icon,;
  className,;
}: FeatureCardProps) {;

  return (
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

    <div
      className={cn(

=======
import { cn } from "@/lib/utils",
import React from "react",
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      <div>;
        <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>;
        <p className="text-zion-slate-light">{description}</p>;
      </div>;

    </div>;
  );
}
  );
}
;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
