<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import React, { ReactNode } from "react";
import {cn} from "@/lib/utils";
import {slugify} from "@/lib/slugify";
import {Link} from "react-router-dom";

=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React, { ReactNode } from "react",
import { cn } from "@/lib/utils",
import { slugify } from "@/lib/slugify";
import { Link } from "react-router-dom";
import { slugify } from "@/lib/slugify",
<<<<<<< HEAD
import { Link } from "react-router-dom",
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import { Link } from "react-router-dom",

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
interface CategoryCardProps {

  title: string
  description: string
  icon: ReactNode | string

interface CategoryCardProps {};
  title: string;
  description: string;
  icon: ReactNode | string;
  /**
   * Optional color to use for the icon. If not provided the default cyan;
   * accent colour is used. Previously this prop was ignored which meant;
   * callers could not customise the icon colour as intended.
   */

  color?: string,
  count?: number,
  className?: string;
}
export function CategoryCard({ title, description, icon, color, count, className }: CategoryCardProps) {
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

  // Create a URL-friendly slug from the category title

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  const slug = slugify(title);
=======
export function CategoryCard({ title, description, icon, color, count, className }: CategoryCardProps) {};
  // Create a URL-friendly slug from the category title;
  const slug = slugify(title);
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  return (
    <Link;
      to={`/category/${slug}`}
      className={cn(
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
          "mb-4 p-3 bg-zion-blue-dark rounded-full","
          !color && "text-zion-cyan""
import React, { ReactNode } from "react",;"
import { cn } from "@/lib/utils",;"
import { slugify } from "@/lib/slugify",;"
import { Link } from "react-router-dom",;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
=======
import { Link } from "react-router-dom",  const slug = slugify(title);
  return (
    <Link
      to={`/category/${slug}`}
      className={cn(interface CategoryCardProps {;
  title: string,,
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

=======
// Create a URL-friendly slug from the category title;
  const slug = slugify(title);
  // Create a URL-friendly slug from the category title
  const slug = slugify(title),
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  const slug = slugify(title);
  return (
    <Link
      to={`/category/${slug}`}
      className={cn(

        "flex flex-col items-center p-6 bg-zion-blue-light rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 group",

"flex flex-col items-center p-6 bg-zion-blue-light rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 group",

        "flex flex-col items-center p-6 bg-zion-blue-light rounded-lg border border-zion-purple/20 hover: border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 group"
        "flex flex-col items-center p-6 bg-zion-blue-light rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 group",
        className
      )}
    >
      <div
        className={cn(

"mb-4 p-3 bg-zion-blue-dark rounded-full";

          !color && "text-zion-cyan"
          "mb-4 p-3 bg-zion-blue-dark rounded-full",
          !color && "text-zion-cyan"
import React, { ReactNode } from "react",;
import { cn } from "@/lib/utils",;
import { slugify } from "@/lib/slugify",;
import { Link } from "react-router-dom",;
interface CategoryCardProps {;
  title: string,;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  description: string,;
  icon: ReactNode | string,;
/**;
   * Optional color to use for the icon. If not provided the default cyan;
   * accent colour is used. Previously this prop was ignored which meant;
   * callers could not customise the icon colour as intended.;
<<<<<<< HEAD
<<<<<<< HEAD
   */;
  color?: string;
  count?: number;
  className?: string;
export function CategoryCard({ title, description, icon, color, count, className }: CategoryCardProps) {

const slug = slugify(title);
  return (
<Link;
      className={cn("
        "flex flex-col items-center p-6 bg-zion-blue-light rounded-lg border border-zion-purple/20 hover: border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 group"
        className;
      )}>;
      <div;
        className={cn(

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        )}
        className={cn ("
          "mb - 4 p - 3 bg - zion - blue - dark rounded - full";"
=======
    <Link

      to={`/category/${slug}`} 

      className={cn(
        "flex flex-col items-center p-6 bg-zion-blue-light rounded-lg border border-zion-purple/20 hover: border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 group"
        className
      )}>;
      <div
        className={cn(

          "mb-4 p-3 bg-zion-blue-dark rounded-full"

          !color && "text-zion-cyan"
        )}
        className={cn (
          "mb - 4 p - 3 bg - zion - blue - dark rounded - full";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          !color && "text - zion - cyan")}
        style={color ? { color } : undefined}
      >;
        {icon}
</div>;"
      <h3 className="text - xl font - bold mb - 2 text - white group - hover:text - zion - purple transition - colors">{title}</h3>;"
      <p className="text - zion - slate - light text - center">{description}</p>;
      {count !== undefined && ("
        <div className="mt - 3 text - sm text - zion - cyan">{count} listings</div>)}
    </Link>);
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
        <div className="mt-3 text-sm text-zion-cyan">{count} listings</div>
      )}
    </Link>
  )
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}
=======
   */;}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

}"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
}
      </div>"
      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>""
      <p className="text-zion-slate-light text-center">{description}</p>""
        <div className="mt-3 text-sm text-zion-cyan">{count} listings</div>"
    "`;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
