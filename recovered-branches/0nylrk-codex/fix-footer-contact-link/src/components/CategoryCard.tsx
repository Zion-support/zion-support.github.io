interface CategoryCardProps {

  title: string
  description: string
  icon: ReactNode | string

  /**
   * Optional color to use for the icon. If not provided the default cyan
   * accent colour is used. Previously this prop was ignored which meant
   * callers could not customise the icon colour as intended.
   */


  const slug = slugify(title);
  return (
    <Link
      to={`/category/${slug}`}
      className={cn(
interface CategoryCardProps {;
  title: string,;
  description: string,;
  icon: ReactNode | string,;
  /**;
   * Optional color to use for the icon. If not provided the default cyan;
   * accent colour is used. Previously this prop was ignored which meant;
   * callers could not customise the icon colour as intended.;
   */;
  color?: string;
  count?: number;
  className?: string;
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
        )}
        )}
        style={color ? { color } : undefined}
      >;
        {icon}
      </div>;
      <h3 className="text - xl font - bold mb - 2 text - white group - hover:text - zion - purple transition - colors">{title}</h3>;
      <p className="text - zion - slate - light text - center">{description}</p>;
      {count !== undefined && (
        <div className="mt - 3 text - sm text - zion - cyan">{count} listings</div>)}
    </Link>);
}