<<<<<<< HEAD



<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
import React, { ReactNode } from "react";
import {cn} from "@/lib/utils";
import {slugify} from "@/lib/slugify";
import {Link} from "react-router-dom";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React, { ReactNode } from "react",
import { cn } from "@/lib/utils",
import { slugify } from "@/lib/slugify";
import { Link } from "react-router-dom";
import { slugify } from "@/lib/slugify",
import { Link } from "react-router-dom",
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======




>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

  const slug = slugify(title);
  return (
    <Link
      to={`/category/${slug}`}
      className={cn(
<<<<<<< HEAD
<<<<<<< HEAD

        "flex flex-col items-center p-6 bg-zion-blue-light rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 group",

=======
        "flex flex-col items-center p-6 bg-zion-blue-light rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 group",

        "flex flex-col items-center p-6 bg-zion-blue-light rounded-lg border border-zion-purple/20 hover: border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 group"
        "flex flex-col items-center p-6 bg-zion-blue-light rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 group",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        className
      )}
    >
      <div
        className={cn(
<<<<<<< HEAD

=======
          "mb-4 p-3 bg-zion-blue-dark rounded-full";

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
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
interface CategoryCardProps {;
  title: string,;
  description: string,;
  icon: ReactNode | string,;
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React, { ReactNode } from "react",;
import { cn } from "@/lib/utils",;
import { slugify } from "@/lib/slugify",;
import { Link } from "react-router-dom",;
;
interface CategoryCardProps {;
  title:string,;
  description:string,;
  icon:ReactNode | string,;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  /**;
   * Optional color to use for the icon. If not provided the default cyan;
   * accent colour is used. Previously this prop was ignored which meant;
   * callers could not customise the icon colour as intended.;
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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