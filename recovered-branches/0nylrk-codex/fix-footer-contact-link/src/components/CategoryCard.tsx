
<<<<<<< HEAD




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
import React, { ReactNode } from "react";
import {cn} from "@/lib/utils";
import {slugify} from "@/lib/slugify";
import {Link} from "react-router-dom";

>>>>>>> origin/cursor/delete-old-data-records-6bba

  // Create a URL-friendly slug from the category title

  const slug = slugify(title);

<<<<<<< HEAD
=======

  return (
    <Link;
      to={`/category/${slug}`}
      className={cn(
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
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

>>>>>>> origin/cursor/delete-old-data-records-6bba

  const slug = slugify(title);
  return (
    <Link
      to={`/category/${slug}`}
      className={cn(
<<<<<<< HEAD


        "flex flex-col items-center p-6 bg-zion-blue-light rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 group",


=======

        "flex flex-col items-center p-6 bg-zion-blue-light rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 group",

"flex flex-col items-center p-6 bg-zion-blue-light rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 group",

        "flex flex-col items-center p-6 bg-zion-blue-light rounded-lg border border-zion-purple/20 hover: border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 group"
        "flex flex-col items-center p-6 bg-zion-blue-light rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 group",

>>>>>>> origin/cursor/delete-old-data-records-6bba
        className
      )}
    >
      <div
<<<<<<< HEAD

        className={cn(

=======
        className={cn(

"mb-4 p-3 bg-zion-blue-dark rounded-full";

          !color && "text-zion-cyan"
"mb-4 p-3 bg-zion-blue-dark rounded-full";

          !color && "text-zion-cyan"
>>>>>>> origin/cursor/delete-old-data-records-6bba
          "mb-4 p-3 bg-zion-blue-dark rounded-full",
          !color && "text-zion-cyan"
import React, { ReactNode } from "react",;
import { cn } from "@/lib/utils",;
import { slugify } from "@/lib/slugify",;
import { Link } from "react-router-dom",;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
interface CategoryCardProps {;
  title: string,;

  description: string,;
  icon: ReactNode | string,;

<<<<<<< HEAD
import React, { ReactNode } from "react",;
import { cn } from "@/lib/utils",;
import { slugify } from "@/lib/slugify",;
import { Link } from "react-router-dom",;
;
interface CategoryCardProps {;
  title:string,;
  description:string,;
  icon:ReactNode | string,;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  /**;
   * Optional color to use for the icon. If not provided the default cyan;
   * accent colour is used. Previously this prop was ignored which meant;
   * callers could not customise the icon colour as intended.;

<<<<<<< HEAD
   */;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  color?: string;
  count?: number;

  className?: string;

<<<<<<< HEAD
}


export function CategoryCard(): any ({ title, description, icon, color, count, className }: CategoryCardProps) {;
  // Create a URL-friendly slug from the category title;
  const slug = slugify(title);


  const slug = slugify(title);
  return (
    <Link

      to={`/category/${slug}`} 


      className={cn(
        "flex flex-col items-center p-6 bg-zion-blue-light rounded-lg border border-zion-purple/20 hover: border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 group"
        className
      )}>;
      <div
        className={cn(



=======
export function CategoryCard({ title, description, icon, color, count, className }: CategoryCardProps) {

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
>>>>>>> origin/cursor/delete-old-data-records-6bba

}