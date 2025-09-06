<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

import { cn } from "@/lib/utils";
import React from "react";
interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  key?: string | number, // Added key prop
=======


  key?: string | number; // Added key prop;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}

export function FeatureCard(): any ({;
  title,;
  description,;
  icon,;
  className,;
}: FeatureCardProps) {;

  return (
<<<<<<< HEAD
import { cn } from "@/lib/utils";
import React from "react";
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

    <div
      className={cn(

<<<<<<< HEAD
import { cn } from "@/lib/utils",
import React from "react",
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
      <div>
        <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
        <p className="text-zion-slate-light">{description}</p>
      </div>
<<<<<<< HEAD
    </div>
  );
}
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
=======

        "flex items-start p-6 rounded-lg border border-zion-purple/20 hover: border-zion-purple/50 transition-all duration-300",
        className,
      )}>;
      <div className="mr-4 text-zion-cyan p-2">{icon}</div>;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
      <div>;
        <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>;
        <p className="text-zion-slate-light">{description}</p>;
      </div>;
    </div>;
  );
}
<<<<<<< HEAD
;
=======
export /**
 * FeatureCard - Function description
 */
function FeatureCard() {
  return (
    <div;
      className={cn (
        "flex items - start p - 6 rounded - lg border border - zion - purple / 20 hover: border - zion - purple / 50 transition - all duration - 300",
        class_name,
      )}
    >;
      <div className="mr - 4 text - zion - cyan p - 2">{icon}</div>;
      <div>;
        <h3 className="text - lg font - bold mb - 2 text - white">{title}</h3>;
        <p className="text - zion - slate - light">{description}</p>;
      </div>;
    </div>);

}
=======
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
