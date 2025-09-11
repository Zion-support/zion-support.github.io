


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface CategoryCardProps {

  title: string
  description: string
  icon: ReactNode | string

  /**
   * Optional color to use for the icon. If not provided the default cyan
   * accent colour is used. Previously this prop was ignored which meant
   * callers could not customise the icon colour as intended.
   */
import React, { ReactNode } from "react";
import {cn} from "@/lib/utils";
import {slugify} from "@/lib/slugify";
import {Link} from "react-router-dom";
=======
        className
      )}
    >
      <div
        className={cn(
          !color && "text-zion-cyan"
=======
=======
          "mb-4 p-3 bg-zion-blue-dark rounded-full";

          !color && "text-zion-cyan"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          "mb-4 p-3 bg-zion-blue-dark rounded-full",
          !color && "text-zion-cyan"
import React, { ReactNode } from "react",;
import { cn } from "@/lib/utils",;
import { slugify } from "@/lib/slugify",;
import { Link } from "react-router-dom",;

export function CategoryCard(): any ({ title, description, icon, color, count, className }: CategoryCardProps) {;
  // Create a URL-friendly slug from the category title;
  const slug = slugify(title);


  const slug = slugify(title);
  return (
    <Link

      to={`/category/${slug}`} 

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


        )}        style={color ? { color } : undefined}
      >;
        {icon}
      </div>;
      <h3 className="text - xl font - bold mb - 2 text - white group - hover:text - zion - purple transition - colors">{title}</h3>;
      <p className="text - zion - slate - light text - center">{description}</p>;
      {count !== undefined && (
        <div className="mt - 3 text - sm text - zion - cyan">{count} listings</div>)}
    </Link>);<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}