
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { cn } from "@/lib/utils";
import React from "react";
interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  key?: string | number, // Added key prop
<<<<<<< HEAD
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  key?: string | number; // Added key prop;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}

export function FeatureCard(): any ({;
  title,;
  description,;
  icon,;
  className,;
}: FeatureCardProps) {;

  return (
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

    <div
<<<<<<< HEAD
      className={cn(

=======
import { cn } from "@/lib/utils",
import React from "react",
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

    <div
<<<<<<< HEAD
      className={cn(
<<<<<<< HEAD


=======
  key?: string | number; // Added key prop;
}



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
import { cn } from "@/lib/utils";
import React from "react";

    <div
      className={cn(
        "flex items-start p-6 rounded-lg border border-zion-purple/20 hover: border-zion-purple/50 transition-all duration-300"
        className
      )}
    >
      <div className="mr-4 text-zion-cyan p-2">{icon}</div>

import { cn } from "@/lib/utils",
import React from "react",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface FeatureCardProps {
=======
      className={cn(interface FeatureCardProps {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      className={cn(interface FeatureCardProps {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      <div>
        <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
        <p className="text-zion-slate-light">{description}</p>
      </div>        className,
      )}>;
      <div className="mr-4 text-zion-cyan p-2">{icon}</div>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      <div>;
        <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>;
        <p className="text-zion-slate-light">{description}</p>;
<<<<<<< HEAD
<<<<<<< HEAD
      </div>;
<<<<<<< HEAD

    </div>;
  );
}
  );
}
;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

    </div>


    </div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  );
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
      </div>;  );
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      </div>;  );
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { cn  } from '@/lib / utils';
import React from './react';
interface FeatureCardProps {
  title: string,
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
      <div className="mr - 4 text - zion - cyan p-2">{icon}</div>;
      <div>;
        <h3 className="text - lg font - bold mb - 2 text-white">{title}</h3>;
        <p className="text - zion - slate-light">{description}</p>;
      </div>;
    </div>);

}
}

}

import { cn } from "@/lib/utils",;
import React from "react",;
;
interface FeatureCardProps {;
  title:string,,
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
  ),;}
 interface FeatureCardProps {
  title: string,
  description: string;
icon: React.ReactNode;
className?: string;
key?: string | number, //Added key prop 
}title, description, icon, className 
}: FeatureCardProps) {
  return (<div className= {
  cn (</div> </div>) 
}
    </div>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
