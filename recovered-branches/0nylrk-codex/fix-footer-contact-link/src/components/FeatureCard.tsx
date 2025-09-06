<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
import { cn } from "@/lib/utils";
import React from "react";
interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  key?: string | number, // Added key prop
}
export function FeatureCard({
  title
  description
  icon
  className
}: FeatureCardProps) {
  return (
=======
<<<<<<< HEAD
import { cn } from "@/lib/utils";
import React from "react";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


  key?: string | number; // Added key prop;
}

export function FeatureCard(): any ({;
  title,;
  description,;
  icon,;
  className,;
}: FeatureCardProps) {;

  return (

    <div
      className={cn(


>>>>>>> main
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
      <div>
        <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
        <p className="text-zion-slate-light">{description}</p>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
  );
}
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> main
      <div>;
        <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>;
        <p className="text-zion-slate-light">{description}</p>;
      </div>;
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
    </div>;
  );
}
<<<<<<< HEAD
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======

    </div>


    </div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  );

import { cn  } from '@/lib / utils';
import React from './react';
interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  class_name?: string;
  key?: string | number; // Added key prop;
}
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
>>>>>>> main
