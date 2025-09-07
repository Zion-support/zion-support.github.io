<<<<<<< HEAD
import { cn } from "@/lib/utils";
import React from "react";
interface FeatureCardProps {
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
  key?: string | number; // Added key prop;
}



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  key?: string | number; // Added key prop;

}

export function FeatureCard(): any ({;
  title,;
  description,;
  icon,;
  className,;
}: FeatureCardProps) {;

  return (

<<<<<<< HEAD
=======
    <div
      className={cn(


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface FeatureCardProps {

>>>>>>> merged-prs-20250907-203621
  title: string,
  description: string,
  icon: React.ReactNode,
  className?: string,
  key?: string | number, // Added key prop;

}

<<<<<<< HEAD
export function FeatureCard({ title, description, icon, className }: FeatureCardProps) {
  return (
    <div className = $2;
      className
    )}>
=======
export function FeatureCard({ title, description, icon, className }: FeatureCardProps) {}
  return (

>>>>>>> merged-prs-20250907-203621
      <div className="mr-4 text-zion-cyan p-2">
        {icon}
      </div>
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      <div>
        <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
        <p className="text-zion-slate-light">{description}</p>
      </div>
<<<<<<< HEAD
    </div>
  )
}
;
=======
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
  return (
    <div
      className={cn(
=======

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
  return (
    <div
      className={cn(

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        "flex items-start p-6 rounded-lg border border-zion-purple/20 hover: border-zion-purple/50 transition-all duration-300",
        className,
      </div>        className,
      )}>;
      <div className="mr-4 text-zion-cyan p-2">{icon}</div>;

      <div>;
        <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>;

        <p className="text-zion-slate-light">{description}</p>;
<<<<<<< HEAD

import { cn  } from '@/lib / utils';
import React from './react';
interface FeatureCardProps {
  title: string,

icon: React.ReactNode;
className?: string;
key?: string | number, //Added key prop;
}title, description, icon, className;
}: FeatureCardProps) {}
  return (<div className= {}
  cn (</div> </div>) 
}
    </div>;
  );
}
;
=======
      </div>;
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    </div>


    </div>;
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


<<<<<<< HEAD
}

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
  ),;}
 interface FeatureCardProps {
  title: string;
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
