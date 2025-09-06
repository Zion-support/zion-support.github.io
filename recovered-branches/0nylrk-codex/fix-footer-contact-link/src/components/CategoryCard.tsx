
import React, { ReactNode } from "react",
import { cn } from "@/lib/utils",

interface CategoryCardProps {

  title: string
  description: string
  icon: ReactNode | string

  /**
   * Optional color to use for the icon. If not provided the default cyan
   * accent colour is used. Previously this prop was ignored which meant
   * callers could not customise the icon colour as intended.
   */
  color?: string,
  count?: number,
  className?: string
}
export function CategoryCard({ title, description, icon, color, count, className }: CategoryCardProps) {

  const slug = slugify(title);
  return (
    <Link
      to={`/category/${slug}`}
      className={cn(

        className
      )}
    >
      <div
        className={cn(

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
}