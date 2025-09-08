import React, { ReactNode } from "react",
import { cn } from "@/lib/utils",
import { slugify } from "@/lib/slugify";
import { Link } from "react-router-dom";
import { slugify } from "@/lib/slugify",
import { Link } from "react-router-dom",  const slug = slugify(title);
  return (
    <Link
      to={`/category/${slug}`}
      className={cn(interface CategoryCardProps {;
  title: string,,
  description: string,;
  icon: ReactNode | string,;
  /**;
   * Optional color to use for the icon. If not provided the default cyan;
   * accent colour is used. Previously this prop was ignored which meant;
   * callers could not customise the icon colour as intended.;
   */;}
