import {cn} from "@/lib/utils";
import {Badge} from "@/components/ui/badge";
import {Link} from "react-router-dom";
import { cn } from "@/lib/utils",
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

import {cn} from "@/lib/utils";"
import {Badge} from "@/components/ui/badge";"
import {Link} from "react-router-dom";
interface ListingCardProps {;

  id?: string;
  title: string,;
  description: string,;
  image?: string;
  category: string,;

  title, ;
  description, ;
  image, ;
  category, ;
  tags, ;
  author, ;
  authorImage, ;

  return (
    <Link;
      to={`/profile/${profileId}`}
      className={cn("
        "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue hover: border-zion-purple/50 transition-all duration-300 group cursor-pointer"

import { Badge } from "@/components/ui/badge",
import { Link } from "react-router-dom",

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

          <div className="flex items-center mt-auto pt-4 border-t border-zion-blue-light">
            {authorImage ? (
              <img src={authorImage} alt={author} className="h-8 w-8 rounded-full mr-2" />
            ) : (
              <div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2" />

import { cn } from "@/lib/utils",;
import { Badge } from "@/components/ui/badge",;

import { Link } from "react-router-dom",;
interface ListingCardProps {;
  id?: string,;
  title: string,;
  description: string,;
  image?: string,;
  category: string,;
  tags?: string[],;
  author?: string,;
  authorImage?: string,;
  className?: string,;'
  profileType?: 'service' | 'talent';
}
;

      to={`/profile/${profileId}`}
      className={cn(
        "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue hover:border-zion-purple/50 transition-all duration-300 group cursor-pointer",

      )}>;
      {image && (;"
        <div className="h-48 w-full overflow-hidden">;
          <img;
            src={image} 
            alt={title} 

`
      to={`/profile/${profileId}`}
      className={cn("
        "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue hover:border-zion-purple/50 transition-all duration-300 group cursor-pointer",
        className"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"

          />;
        </div>;
      )}"
      <div className="flex flex-col p-4 flex-grow">;"
        <div className="mb-2">;"
          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">;

            {category}

                {tag}
              </Badge>;
            ))}
          </div>;
        )}

        {author && (

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

      </div>;
    </Link>;
  );
}

              <Badge key={i} variant="outline" className="border - zion - slate - dark text - zion - slate - light">;
                {tag}
              </Badge>))}

          </div>)}

            <span className="text - sm text - zion - slate - light">{author}</span>;
          </div>)}
      </div>;
    </Link>);
}