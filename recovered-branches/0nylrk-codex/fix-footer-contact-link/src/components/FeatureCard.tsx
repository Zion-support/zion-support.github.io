<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/FeatureCard.tsx

<<<<<<< HEAD
=======

  key?: string | number; // Added key prop;
}

========
<<<<<<< HEAD
key?: string | number; // Added key prop;
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/FeatureCard.tsx
export function FeatureCard(): any ({;
  title,;
  description,;
  icon,;
  className,;
}: FeatureCardProps) {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/FeatureCard.tsx

  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

    <div
      className={cn(

<<<<<<< HEAD
import { cn } from "@/lib/utils",
import React from "react",
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      <div>
        <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
        <p className="text-zion-slate-light">{description}</p>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    </div>
  );
}
<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
=======
========
  return (
    <div
      className={cn(
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/FeatureCard.tsx
        "flex items-start p-6 rounded-lg border border-zion-purple/20 hover: border-zion-purple/50 transition-all duration-300",
        className,
      )}>;
      <div className="mr-4 text-zion-cyan p-2">{icon}</div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <div>;
        <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>;
        <p className="text-zion-slate-light">{description}</p>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

    </div>;
  );
}

=======
=======

    </div>


    </div>;
  );
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/FeatureCard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/FeatureCard.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/FeatureCard.tsx

}
=======
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
}
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/FeatureCard.tsx
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    </div>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
