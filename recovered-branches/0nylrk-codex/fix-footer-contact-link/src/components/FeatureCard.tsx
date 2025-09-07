
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
      className={cn(


interface FeatureCardProps {
=======
      className={cn(interface FeatureCardProps {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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

        "flex items-start p-6 rounded-lg border border-zion-purple/20 hover: border-zion-purple/50 transition-all duration-300",
        className,
=======
      </div>        className,
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      )}>;
      <div className="mr-4 text-zion-cyan p-2">{icon}</div>;
      <div>;
        <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>;
        <p className="text-zion-slate-light">{description}</p>;
<<<<<<< HEAD
      </div>;

    </div>


    </div>;
  );

import { cn  } from '@/lib / utils';
import React from './react';
interface FeatureCardProps {
  title: string;
=======
      </div>;  );
import { cn  } from '@/lib / utils';
import React from './react';
interface FeatureCardProps {
  title: string,
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
      <div className="mr - 4 text - zion - cyan p - 2">{icon}</div>;
      <div>;
        <h3 className="text - lg font - bold mb - 2 text - white">{title}</h3>;
        <p className="text - zion - slate - light">{description}</p>;
=======
      <div className="mr - 4 text - zion - cyan p-2">{icon}</div>;
      <div>;
        <h3 className="text - lg font - bold mb - 2 text-white">{title}</h3>;
        <p className="text - zion - slate-light">{description}</p>;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      </div>;
    </div>);

}
}

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
}

import { cn } from "@/lib/utils",;
import React from "react",;
;
interface FeatureCardProps {;
<<<<<<< HEAD
  title:string,;
=======
  title:string,,
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
  title: string;
description: string;
=======
  title: string,
  description: string;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
}
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
