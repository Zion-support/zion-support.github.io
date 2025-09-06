<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD



<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { ReactNode } from "react";
import {cn} from "@/lib/utils";
import {slugify} from "@/lib/slugify";
import {Link} from "react-router-dom";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import React, { ReactNode } from "react",
import { cn } from "@/lib/utils",
import { slugify } from "@/lib/slugify";
import { Link } from "react-router-dom";
import { slugify } from "@/lib/slugify",
<<<<<<< HEAD
import { Link } from "react-router-dom",
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface CategoryCardProps {

  title: string
  description: string
  icon: ReactNode | string

  /**
   * Optional color to use for the icon. If not provided the default cyan
   * accent colour is used. Previously this prop was ignored which meant
   * callers could not customise the icon colour as intended.
   */
<<<<<<< HEAD
<<<<<<< HEAD

import React, { ReactNode } from "react";
import {cn} from "@/lib/utils";
import {slugify} from "@/lib/slugify";
import {Link} from "react-router-dom";
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  color?: string,
  count?: number,
  className?: string
}
export function CategoryCard({ title, description, icon, color, count, className }: CategoryCardProps) {
<<<<<<< HEAD
=======

  // Create a URL-friendly slug from the category title
  const slug = slugify(title),
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

  // Create a URL-friendly slug from the category title


<<<<<<< HEAD
=======
  // Create a URL-friendly slug from the category title;
  const slug = slugify(title);
  // Create a URL-friendly slug from the category title
  const slug = slugify(title),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  const slug = slugify(title);
  return (
    <Link
      to={`/category/${slug}`}
      className={cn(
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

        "flex flex-col items-center p-6 bg-zion-blue-light rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 group",

=======
        "flex flex-col items-center p-6 bg-zion-blue-light rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 group",

        "flex flex-col items-center p-6 bg-zion-blue-light rounded-lg border border-zion-purple/20 hover: border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 group"
        "flex flex-col items-center p-6 bg-zion-blue-light rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 group",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        className
      )}
    >
      <div
        className={cn(
<<<<<<< HEAD

=======
          "mb-4 p-3 bg-zion-blue-dark rounded-full";

=======
          !color && "text-zion-cyan"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          "mb-4 p-3 bg-zion-blue-dark rounded-full",
          !color && "text-zion-cyan"
import React, { ReactNode } from "react",;
import { cn } from "@/lib/utils",;
import { slugify } from "@/lib/slugify",;
import { Link } from "react-router-dom",;
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface CategoryCardProps {;
  title: string,;
=======
import { Link } from "react-router-dom",  const slug = slugify(title);
  return (
    <Link
      to={`/category/${slug}`}
      className={cn(interface CategoryCardProps {;
  title: string,,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  description: string,;
  icon: ReactNode | string,;
  /**;
   * Optional color to use for the icon. If not provided the default cyan;
   * accent colour is used. Previously this prop was ignored which meant;
   * callers could not customise the icon colour as intended.;
<<<<<<< HEAD
   */;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  color?: string;
  count?: number;
  className?: string;
}

  const slug = slugify(title);
  return (
    <Link
<<<<<<< HEAD

      to={`/category/${slug}`} 

=======
export function CategoryCard(): any ({ title, description, icon, color, count, className }: CategoryCardProps) {;
  // Create a URL-friendly slug from the category title;
  const slug = slugify(title);
  const slug = slugify(title);
  return (
    <Link
      to={`/category/${slug}`} 
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      className={cn(
        "flex flex-col items-center p-6 bg-zion-blue-light rounded-lg border border-zion-purple/20 hover: border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 group"
        className
      )}>;
      <div
        className={cn(
<<<<<<< HEAD
<<<<<<< HEAD

          "mb-4 p-3 bg-zion-blue-dark rounded-full"

          !color && "text-zion-cyan"
<<<<<<< HEAD
        )}
        style={color ? { color } : undefined}>;
        {icon}
      </div>;
      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>;
      <p className="text-zion-slate-light text-center">{description}</p>;
      {count !== undefined && (;
        <div className="mt-3 text-sm text-zion-cyan">{count} listings</div>;
      )}
    </Link>;
  );
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        )}
        className={cn (
          "mb - 4 p - 3 bg - zion - blue - dark rounded - full";
          !color && "text - zion - cyan")}
        style={color ? { color } : undefined}
      >;
        {icon}
      </div>;
      <h3 className="text - xl font - bold mb - 2 text - white group - hover:text - zion - purple transition - colors">{title}</h3>;
      <p className="text - zion - slate - light text - center">{description}</p>;
      {count !== undefined && (
        <div className="mt - 3 text - sm text - zion - cyan">{count} listings</div>)}
    </Link>);
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
          "mb-4 p-3 bg-zion-blue-dark rounded-full"
          !color && "text-zion-cyan"
        )}
        style={color ? { color } : undefined}>;
  color?:string,;
  count?:number,;
  className?:string;
}
;
export function CategoryCard({ title, description, icon, color, count, className } CategoryCardProps) {;
  // Create a URL-friendly slug from the category title;
  const slug = slugify(title),;
;
  return (;
    <Link ;
      to={`/category/${slug}`} ;
      className={cn(;
        "flex flex-col items-center p-6 bg-zion-blue-light rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 group",;
  color?: string,;
  count?: number,;
  className?: string;
}
;
export function CategoryCard({ title, description, icon, color, count, className }: CategoryCardProps) {;
  // Create a URL-friendly slug from the category title;
  const slug = slugify(title),;
  return (;
    <Link;
      to={`/category/${slug}`} ;
      className={cn(;
        "flex flex-col items-center p-6 bg-zion-blue-light rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 group";
        className;
      )}
    >;
      <div;
        className={cn(;
  ),; interface CategoryCardProps {
  title: string;
description: string;
icon: ReactNode | string;
`/category/$ {
  slug 
}` 
}) 
}style= {
  color ? {
  color 
}: undefined 
}> {
  icon 
}</div>) 
}</Link>) 
          "mb-4 p-3 bg-zion-blue-dark rounded-full";
          !color && "text-zion-cyan";
        )}
        style={color ? { color } : undefined}
      >
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>
      <p className="text-zion-slate-light text-center">{description}</p>
      {count !== undefined && (
        <div className="mt-3 text-sm text-zion-cyan">{count} listings</div>
      )}
    </Link>
  )
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}
=======
   */;}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
