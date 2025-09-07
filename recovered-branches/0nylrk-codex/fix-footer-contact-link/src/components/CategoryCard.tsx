<<<<<<< HEAD
=======



<<<<<<< HEAD
import React, { ReactNode } from "react";
import {cn} from "@/lib/utils";
import {slugify} from "@/lib/slugify";
import {Link} from "react-router-dom";
import React, { ReactNode } from "react",
import { cn } from "@/lib/utils",
import { slugify } from "@/lib/slugify";
import { Link } from "react-router-dom";
import { slugify } from "@/lib/slugify",
import { Link } from "react-router-dom",
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React, { ReactNode } from "react";
import {cn} from "@/lib/utils";
import {slugify} from "@/lib/slugify";
import {Link} from "react-router-dom";
<<<<<<< HEAD

import React, { ReactNode } from "react",
import { cn } from "@/lib/utils",
import { slugify } from "@/lib/slugify";
import { Link } from "react-router-dom";
import { slugify } from "@/lib/slugify",
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  color?: string,
  count?: number,
  className?: string
}
export function CategoryCard({ title, description, icon, color, count, className }: CategoryCardProps) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  // Create a URL-friendly slug from the category title

  const slug = slugify(title);

<<<<<<< HEAD
  return (
    <Link;
      to={`/category/${slug}`}
      className={cn(

        className

      )}
    >
      <div;
        className={cn(

          "mb-4 p-3 bg-zion-blue-dark rounded-full",
          !color && "text-zion-cyan"
import React, { ReactNode } from "react",;
import { cn } from "@/lib/utils",;
import { slugify } from "@/lib/slugify",;
import { Link } from "react-router-dom",;

interface CategoryCardProps {;
  title: string,;
=======
<<<<<<< HEAD
  // Create a URL-friendly slug from the category title;
  const slug = slugify(title);
  // Create a URL-friendly slug from the category title
  const slug = slugify(title),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  const slug = slugify(title);
  return (
    <Link
      to={`/category/${slug}`}
      className={cn(
<<<<<<< HEAD
        "flex flex-col items-center p-6 bg-zion-blue-light rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 group",

        "flex flex-col items-center p-6 bg-zion-blue-light rounded-lg border border-zion-purple/20 hover: border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 group"
        "flex flex-col items-center p-6 bg-zion-blue-light rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 group",
=======

        "flex flex-col items-center p-6 bg-zion-blue-light rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 group",

<<<<<<< HEAD
"flex flex-col items-center p-6 bg-zion-blue-light rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 group",

        "flex flex-col items-center p-6 bg-zion-blue-light rounded-lg border border-zion-purple/20 hover: border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 group"
        "flex flex-col items-center p-6 bg-zion-blue-light rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 group",
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        className
      )}
    >
      <div
        className={cn(
<<<<<<< HEAD
          "mb-4 p-3 bg-zion-blue-dark rounded-full";

<<<<<<< HEAD
"mb-4 p-3 bg-zion-blue-dark rounded-full";

          !color && "text-zion-cyan"
=======
          !color && "text-zion-cyan"
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          "mb-4 p-3 bg-zion-blue-dark rounded-full",
          !color && "text-zion-cyan"
import React, { ReactNode } from "react",;
import { cn } from "@/lib/utils",;
import { slugify } from "@/lib/slugify",;
import { Link } from "react-router-dom",;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface CategoryCardProps {;
  title: string,;

  description: string,;
  icon: ReactNode | string,;
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  /**;
   * Optional color to use for the icon. If not provided the default cyan;
   * accent colour is used. Previously this prop was ignored which meant;
   * callers could not customise the icon colour as intended.;
<<<<<<< HEAD

=======
   */;
<<<<<<< HEAD
export function CategoryCard(): any ({ title, description, icon, color, count, className }: CategoryCardProps) {;
  // Create a URL-friendly slug from the category title;
  const slug = slugify(title);
  const slug = slugify(title);
  return (
    <Link
      to={`/category/${slug}`} 
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  color?: string;
  count?: number;

  className?: string;
<<<<<<< HEAD
export function CategoryCard({ title, description, icon, color, count, className }: CategoryCardProps) {
=======
}


export function CategoryCard(): any ({ title, description, icon, color, count, className }: CategoryCardProps) {;
  // Create a URL-friendly slug from the category title;
  const slug = slugify(title);


  const slug = slugify(title);
  return (
    <Link

      to={`/category/${slug}`} 

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      className={cn(
        "flex flex-col items-center p-6 bg-zion-blue-light rounded-lg border border-zion-purple/20 hover: border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 group"
        className
      )}>;
      <div
        className={cn(
<<<<<<< HEAD
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
=======

          "mb-4 p-3 bg-zion-blue-dark rounded-full"

          !color && "text-zion-cyan"
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
=======
import React, { ReactNode } from './react';
import { cn } from '@/lib / utils';
import { slugify } from '@/lib / slugify';
import { Link } from './react-router-dom';
interface CategoryCardProps {
  title: string,
  description: string,
  icon: ReactNode | string,
  /**;
  * Optional color to use for the icon. If not provided the default cyan;
  * accent colour is used. Previously this prop was ignored which meant;
  * callers could not customise the icon colour as intended.;
  */;
  color?: string;
  count?: number;
  class_name?: string;
}
export /**
 * CategoryCard - Function description
 */
function CategoryCard() {
  // Create a URL - friendly slug from the category title;
  const slug = slugify (title);
;
  return (
    <Link;
      to={`/category/${slug}`}
      className={cn (
        "flex flex - col items - center p - 6 bg - zion - blue - light rounded - lg border border - zion - purple / 20 hover: border - zion - purple / 50 transition - all duration - 300 hover:shadow - lg hover:shadow - zion - purple / 20 group",
        class_name)}
    >;
      <div;

        className={cn(;
          "mb-4 p-3 bg-zion-blue-dark rounded-full";
          !color && "text-zion-cyan";

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

        )}
        className={cn ("
          "mb - 4 p - 3 bg - zion - blue - dark rounded - full";"

          !color && "text - zion - cyan")}
        style={color ? { color } : undefined}
      >;
        {icon}

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
      className={cn(;"
        "flex flex-col items-center p-6 bg-zion-blue-light rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 group",;"
  color?: string,;
  count?: number,;
;)
export function CategoryCard({ title, description, icon, color, count, className }: CategoryCardProps) {;
  // Create a URL-friendly slug from the category title;
  const slug = slugify(title),;
  return (;
        "flex flex-col items-center p-6 bg-zion-blue-light rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 group";"

        className={cn(;)
  ),; interface CategoryCardProps {
  // TODO: Implement
icon: ReactNode | string;`;
`/category/$ {
  slug;`;
}` 
}) 
}style= {
  color ? {
  color;
}: undefined;
}> {
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
<<<<<<< HEAD
        <div className="mt-3 text-sm text-zion-cyan">{count} listings</div>
      )}
    </Link>
  )

=======
        <div className="mt - 3 text - sm text - zion - cyan">{count} listings</div>)}
    </Link>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}