<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

<<<<<<< HEAD
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
<<<<<<< HEAD
=======
    <div;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      className={cn(



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
=======
interface FeatureCardProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      className={cn(


interface FeatureCardProps {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  title: string,
  description: string,
  icon: React.ReactNode,
  className?: string,
  key?: string | number, // Added key prop;
=======
import { cn } from "@/lib/utils";
import React from "react";
interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  key?: string | number, // Added key prop




>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}

export function FeatureCard({ title, description, icon, className }: FeatureCardProps) {}
  return (
<<<<<<< HEAD
    <div className={cn(
      "flex items-start p-6 rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300",;
      className;
    )}>"
=======

      className
    )}>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      <div className="mr-4 text-zion-cyan p-2">
        {icon}
      </div>
<<<<<<< HEAD
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
      </div>

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
      </div>        className,
      )}>;
      <div className="mr-4 text-zion-cyan p-2">{icon}</div>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      <div>;
        <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>;
=======



      <div>"
        <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>"
        <p className="text-zion-slate-light">{description}</p>
      </div>

  );
}
  )"
import { cn } from "@/lib/utils",;"
import React from "react",;
interface FeatureCardProps {;
  title: string,;
  description: string,;
  icon: React.ReactNode,;
  className?: string,;
  key?: string | number, // Added key prop;
}
;
export function FeatureCard() { return null; }
    )}>;"
      <div className="mr-4 text-zion-cyan p-2">;
        {icon}
      </div>;
"
        "flex items-start p-6 rounded-lg border border-zion-purple/20 hover: border-zion-purple/50 transition-all duration-300",
        className,
      )}>;"
      <div className="mr-4 text-zion-cyan p-2">{icon}</div>;
      <div>;"
        <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <p className="text-zion-slate-light">{description}</p>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      </div>;
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



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
=======
import { cn  } from '@/lib / utils';'
import React from './react';
interface FeatureCardProps {}
  title: string;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      </div>;

    </div>

    </div>;
  );

      </div>;  );
import { cn  } from '@/lib / utils';
import React from './react';
interface FeatureCardProps {
<<<<<<< HEAD
  title: string;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  title: string,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  description: string;
  icon: React.ReactNode;
  class_name?: string;
  key?: string | number; // Added key prop;
}
export /**;
 * FeatureCard - Function description;
 */
function FeatureCard() {}
  return (
    <div;
      className={cn ("
        "flex items - start p - 6 rounded - lg border border - zion - purple / 20 hover: border - zion - purple / 50 transition - all duration - 300",
        class_name,
      )}
<<<<<<< HEAD
    >;
      <div className="mr - 4 text - zion - cyan p-2">{icon}</div>;
      <div>;
        <h3 className="text - lg font - bold mb - 2 text-white">{title}</h3>;
        <p className="text - zion - slate-light">{description}</p>;
      </div>;
    </div>);

}
}
=======
    >;"
      <div className="mr - 4 text - zion - cyan p - 2">{icon}</div>;
      <div>;"
        <h3 className="text - lg font - bold mb - 2 text - white">{title}</h3>;"
        <p className="text - zion - slate - light">{description}</p>;
      </div>;
    </div>);

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

}
}


}
"
import { cn } from "@/lib/utils",;"
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
export function FeatureCard() { return null; }
    )}>;"
      <div className="mr-4 text-zion-cyan p-2">;
        {icon}
      </div>;
      <div>;"
        <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>;"
        <p className="text-zion-slate-light">{description}</p>;
      </div>;
    </div>;
  ),;}
<<<<<<< HEAD
 interface FeatureCardProps {
<<<<<<< HEAD
<<<<<<< HEAD
  title: string,
  description: string;
=======
 interface FeatureCardProps {}
  title: string;
description: string;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  title: string;
description: string;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  title: string,
  description: string;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


}

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  key?: string | number, // Added key prop;
)
export function FeatureCard({ title, description, icon, className }: FeatureCardProps) {
    <div className={cn(
      "flex items-start p-6 rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300","
      className;)
    )}>
</div>"
      <div className="mr-4 text-zion-cyan p-2">"
</div>

      <div>
        <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>""
        <p className="text-zion-slate-light">{description}</p>"
    <div className={cn(;"
      "flex items-start p-6 rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300";"
    )}>;
      <div className="mr-4 text-zion-cyan p-2">;"
      </div>;
"
        "flex items-start p-6 rounded-lg border border-zion-purple/20 hover: border-zion-purple/50 transition-all duration-300","
        className,)
      <div className="mr-4 text-zion-cyan p-2">{icon}</div>;"
      <div>;
        <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>;""
        <p className="text-zion-slate-light">{description}</p>;"


      className={cn ("
        "flex items - start p - 6 rounded - lg border border - zion - purple / 20 hover: border - zion - purple / 50 transition - all duration - 300","
        class_name,)
      )}
    >;
      <div className="mr - 4 text - zion - cyan p - 2">{icon}</div>;"
        <h3 className="text - lg font - bold mb - 2 text - white">{title}</h3>;""
        <p className="text - zion - slate - light">{description}</p>;"
    </div>);
      "flex items-start p-6 rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300",;"
  return (<div className= {)
  cn (</div> </div>) 
    </div>;"
pr-12325

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
