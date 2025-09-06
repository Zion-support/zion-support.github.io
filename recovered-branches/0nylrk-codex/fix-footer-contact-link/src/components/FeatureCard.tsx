<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1

import { cn } from "@/lib/utils";
import React from "react";
interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  key?: string | number, // Added key prop
<<<<<<< HEAD
}
export function FeatureCard({
  title
  description
  icon
  className
}: FeatureCardProps) {
  return (
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1

    <div
      className={cn(

<<<<<<< HEAD
import { cn } from "@/lib/utils",
import React from "react",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  );
}
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  );
}
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
