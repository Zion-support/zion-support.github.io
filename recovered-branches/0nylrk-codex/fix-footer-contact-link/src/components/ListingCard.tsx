

import {cn} from "@/lib/utils";
import {Badge} from "@/components/ui/badge";
import {Link} from "react-router-dom";
interface ListingCardProps {;
interface ListingCardProps {
  return (
    <Link;
      to={`/profile/${profileId}`}
      className={cn("
        "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue hover: border-zion-purple/50 transition-all duration-300 group cursor-pointer"
interface ListingCardProps {

  id?: string,
  title: string,
  description: string,
  image?: string,
  category: string,
  tags?: string[],
  author?: string,
  authorImage?: string,
  className?: string,
  profileType?: 'service' | 'talent'        {author && (
          <div className="flex items-center mt-auto pt-4 border-t border-zion-blue-light">
            {authorImage ? ("
              <img src={authorImage} alt={author} className="h-8 w-8 rounded-full mr-2" />
            ) : ("
              <div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2" />

        {author && (;"
          <div className="flex items-center mt-auto pt-4 border-t border-zion-blue-light">;
            {authorImage ? (;"
              <img src={authorImage} alt={author} className="h-8 w-8 rounded-full mr-2" />;
            ) : (;"
              <div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2" />;

            )}
            <span className="text-sm text-zion-slate-light">{author}</span>;
          </div>;
        )}
