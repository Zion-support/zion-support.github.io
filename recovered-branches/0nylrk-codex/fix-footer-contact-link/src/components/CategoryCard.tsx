<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/CategoryCard.tsx

<<<<<<< HEAD
import React, { ReactNode } from "react",
import { cn } from "@/lib/utils",

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/CategoryCard.tsx
import React, { ReactNode } from "react";
import {cn} from "@/lib/utils";
import {slugify} from "@/lib/slugify";
import {Link} from "react-router-dom";
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  color?: string,
  count?: number,
  className?: string
}
export function CategoryCard({ title, description, icon, color, count, className }: CategoryCardProps) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

  // Create a URL-friendly slug from the category title


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  // Create a URL-friendly slug from the category title;
  const slug = slugify(title);
  // Create a URL-friendly slug from the category title
  const slug = slugify(title),
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

  const slug = slugify(title);
  return (
    <Link
      to={`/category/${slug}`}
      className={cn(
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
        "flex flex-col items-center p-6 bg-zion-blue-light rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 group",

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        "flex flex-col items-center p-6 bg-zion-blue-light rounded-lg border border-zion-purple/20 hover: border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 group"
        "flex flex-col items-center p-6 bg-zion-blue-light rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 group",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        className
      )}
    >
      <div
        className={cn(
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
          "mb-4 p-3 bg-zion-blue-dark rounded-full";

          !color && "text-zion-cyan"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
          "mb-4 p-3 bg-zion-blue-dark rounded-full";

          !color && "text-zion-cyan"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          "mb-4 p-3 bg-zion-blue-dark rounded-full",
          !color && "text-zion-cyan"
import React, { ReactNode } from "react",;
import { cn } from "@/lib/utils",;
import { slugify } from "@/lib/slugify",;
import { Link } from "react-router-dom",;
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  /**;
   * Optional color to use for the icon. If not provided the default cyan;
   * accent colour is used. Previously this prop was ignored which meant;
   * callers could not customise the icon colour as intended.;
   */;
<<<<<<< HEAD
<<<<<<< HEAD
  color?: string;
  count?: number;
  className?: string;
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/CategoryCard.tsx


export function CategoryCard(): any ({ title, description, icon, color, count, className }: CategoryCardProps) {;
  // Create a URL-friendly slug from the category title;
  const slug = slugify(title);


  const slug = slugify(title);
  return (
    <Link

      to={`/category/${slug}`} 

========
export function CategoryCard(): any ({ title, description, icon, color, count, className }: CategoryCardProps) {;
  // Create a URL-friendly slug from the category title;
  const slug = slugify(title);
  const slug = slugify(title);
  return (
    <Link
      to={`/category/${slug}`} 
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/CategoryCard.tsx
      className={cn(
        "flex flex-col items-center p-6 bg-zion-blue-light rounded-lg border border-zion-purple/20 hover: border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 group"
        className
      )}>;
      <div
        className={cn(
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/CategoryCard.tsx

          "mb-4 p-3 bg-zion-blue-dark rounded-full"

========
          "mb-4 p-3 bg-zion-blue-dark rounded-full"
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/CategoryCard.tsx
          !color && "text-zion-cyan"
        )}
        style={color ? { color } : undefined}>;
=======
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
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        className;
      )}
    >;
      <div;
        className={cn(;
<<<<<<< HEAD
          "mb-4 p-3 bg-zion-blue-dark rounded-full",;
          !color && "text-zion-cyan";
        )}
        style={color ? { color } undefined}
      >;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        {icon}
      </div>;
      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>;
      <p className="text-zion-slate-light text-center">{description}</p>;
      {count !== undefined && (;
        <div className="mt-3 text-sm text-zion-cyan">{count} listings</div>;
      )}
    </Link>;
<<<<<<< HEAD
  );
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


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        )}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        style={color ? { color } : undefined}
      >;
        {icon}
      </div>;
      <h3 className="text - xl font - bold mb - 2 text - white group - hover:text - zion - purple transition - colors">{title}</h3>;
      <p className="text - zion - slate - light text - center">{description}</p>;
      {count !== undefined && (
        <div className="mt - 3 text - sm text - zion - cyan">{count} listings</div>)}
    </Link>);
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}