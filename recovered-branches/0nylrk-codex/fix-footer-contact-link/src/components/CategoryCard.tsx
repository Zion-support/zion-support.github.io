<<<<<<< HEAD
<<<<<<< HEAD
import React, { ReactNode } from "react",
import { cn } from "@/lib/utils",
import { slugify } from "@/lib/slugify",
import { Link } from "react-router-dom",
=======
import React, { ReactNode } from &quot;react&quot;;
import { cn } from &quot;@/lib/utils&quot;;
import { slugify } from &quot;@/lib/slugify&quot;;
import { Link } from &quot;react-router-dom&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface CategoryCardProps {
  title: string,
  description: string,
  icon: ReactNode | string,
=======
import React, {_ReactNode} from "react";

interface CategoryCardProps {_title: string;
  description: string;
  icon: ReactNode | string;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  /**
   * Optional color to use for the icon. If not provided the default cyan
   * accent colour is used. Previously this prop was ignored which meant
   * callers could not customise the icon colour as intended.
   */
<<<<<<< HEAD
  color?: string,
  count?: number,
  className?: string
}

export function CategoryCard({ title, description, icon, color, count, className }: CategoryCardProps) {
  // Create a URL-friendly slug from the category title
  const slug = slugify(title),
=======
  color?: string;
  count?: number;
  className?: string;}

export function CategoryCard(_{_title, _description, _icon, _color, _count, _className}: CategoryCardProps) {_// Create a window.URL-friendly slug from the category title
  const _slug = slugify(title);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <Link 
      to={`/category/${slug}`} 
<<<<<<< HEAD
      className={cn(
        &quot;flex flex-col items-center p-6 bg-zion-blue-light rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 group&quot;,
        className
      )}
    >
      <div
        className={cn(
          &quot;mb-4 p-3 bg-zion-blue-dark rounded-full&quot;,
          !color && &quot;text-zion-cyan&quot;
=======
      className={_cn(
        "flex flex-col items-center p-6 bg-zion-blue-light rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 group", _className
      )}
    >
      <div
        className={_cn(
          "mb-4 p-3 bg-zion-blue-dark rounded-full", _!color && "text-zion-cyan"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        )}
        style={_color ? { color} : undefined}
      >
        {_icon}
      </div>
<<<<<<< HEAD
      <h3 className=&quot;text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors&quot;>{title}</h3>
      <p className=&quot;text-zion-slate-light text-center&quot;>{description}</p>
      {count !== undefined && (
        <div className=&quot;mt-3 text-sm text-zion-cyan&quot;>{count} listings</div>
=======
      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{_title}</h3>
      <p className="text-zion-slate-light text-center">{_description}</p>
      {_count !== undefined && (
        <div className="mt-3 text-sm text-zion-cyan">{count} listings</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      )}
    </Link>
  )
}