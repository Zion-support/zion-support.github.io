<<<<<<< HEAD
=======
<<<<<<< HEAD
=======



<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {cn} from "@/lib/utils";
import {Badge} from "@/components/ui/badge";
import {Link} from "react-router-dom";
<<<<<<< HEAD
=======
import { cn } from "@/lib/utils",
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

import {cn} from "@/lib/utils";"
import {Badge} from "@/components/ui/badge";"
import {Link} from "react-router-dom";
interface ListingCardProps {;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  id?: string;
  title: string,;
  description: string,;
  image?: string;
  category: string,;
<<<<<<< HEAD

=======
<<<<<<< HEAD
  tags?: string[];
  author?: string;
export function ListingCard(): any ({ ;
  id;

import { cn } from "@/lib/utils",;
import { Badge } from "@/components/ui/badge",;
import { Link } from "react-router-dom",;
;
interface ListingCardProps {;
  id?:string,;
  title:string,;
  description:string,;
  image?:string,;
  category:string,;
  tags?:string[],;
  author?:string,;
  authorImage?:string,;
  className?:string,;
  profileType?:'service' | 'talent';
}
;
export function ListingCard({ ;
  id,;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  tags?: string[];
  author?: string;


export function ListingCard(): any ({ ;
  id;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  title, ;
  description, ;
  image, ;
  category, ;
  tags, ;
  author, ;
  authorImage, ;
<<<<<<< HEAD
=======
<<<<<<< HEAD

import {cn} from "@/lib/utils";
import {Badge} from "@/components/ui/badge";
import {Link} from "react-router-dom";
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  id?: string,
  title: string,
  description: string,
  image?: string,
  category: string,
  tags?: string[],
  author?: string,
  authorImage?: string,
  className?: string,
<<<<<<< HEAD

=======
=======
  id?: string;

  title: string
  description: string
  image?: string;
  category: string

  tags?: string[];
  author?: string;
  authorImage?: string;
  className?: string;
>>>>>>> merged-prs-20250907-203621
  profileType?: 'service' | 'talent'
}
export function ListingCard({
  id;

  title
  description
  image
  category
  tags
  author
  authorImage
  className;
  profileType = 'service'
}: ListingCardProps) {
  // Generate a profile ID based on the listing data
  // In a real app, this would be a proper ID from the database
  const profileId = id |(profileType === 'service' ? 'service-provider-1' : 'talent-1');
=======
  className;
  profileType = 'service';
}: ListingCardProps) {;
  // Generate a profile ID based on the listing data;
  // In a real app, this would be a proper ID from the database;
  const profileId = id || (profileType === 'service' ? 'service-provider-1' : 'talent-1');

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <Link;
      to={`/profile/${profileId}`}
      className={cn("
        "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue hover: border-zion-purple/50 transition-all duration-300 group cursor-pointer"

<<<<<<< HEAD
import { Badge } from "@/components/ui/badge",
import { Link } from "react-router-dom",

=======
<<<<<<< HEAD
import { Badge } from "@/components/ui/badge",
import { Link } from "react-router-dom",
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
=======
  profileType?: 'service' | 'talent'
<<<<<<< HEAD
}

export function ListingCard({ ;
  id;
  title, 
  description, 
  image, 
  category, 
  tags, 
  author, 
  authorImage, 
  className;
  profileType = 'service'
}: ListingCardProps) {
  // Generate a profile ID based on the listing data
  // In a real app, this would be a proper ID from the database
  const profileId = id || (profileType === 'service' ? 'service-provider-1' : 'talent-1');

  return (
    <Link 
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
  className?: string,;
  profileType?: 'service' | 'talent';
}
;
export function ListingCard({;
  id,;
  title,;
  description,;
  image,;
  category,;
  tags,;
  author,;
  authorImage,;
  className,;
  profileType = 'service';
}: ListingCardProps) {;
  // Generate a profile ID based on the listing data;
  // In a real app, this would be a proper ID from the database;
  const profileId = id || (profileType === 'service' ? 'service-provider-1' : 'talent-1');
  return (;
    <Link;

      to={`/profile/${profileId}`}
      className={cn(
        "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue hover:border-zion-purple/50 transition-all duration-300 group cursor-pointer",
        className

        className
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      )}>;
      {image && (;"
        <div className="h-48 w-full overflow-hidden">;
          <img;
            src={image} 
            alt={title} 
<<<<<<< HEAD
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
  className,;
  profileType = 'service';
} ListingCardProps) {;
  // Generate a profile ID based on the listing data;
  // In a real app, this would be a proper ID from the database;
  const profileId = id || (profileType === 'service' ? 'service-provider-1' :'talent-1'),;
;
  return (;
    <Link ;
      to={`/profile/${profileId}`}
      className={cn(;
        "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue hover:border-zion-purple/50 transition-all duration-300 group cursor-pointer",;
        className;
      )}
    >;
      {image && (;
        <div className="h-48 w-full overflow-hidden">;
          <img ;
            src={image} ;
            alt={title} ;
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105";
=======

`
      to={`/profile/${profileId}`}
      className={cn("
        "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue hover:border-zion-purple/50 transition-all duration-300 group cursor-pointer",
        className"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          />;
        </div>;
      )}"
      <div className="flex flex-col p-4 flex-grow">;"
        <div className="mb-2">;"
          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">;
<<<<<<< HEAD

            {category}

=======
<<<<<<< HEAD
=======
            {category}

          </Badge>;
        </div>;
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>;
        <p className="text-zion-slate mb-4 flex-grow">{description}</p>;

        {tags && tags.length > 0 && (;
          <div className="flex flex-wrap gap-2 mb-4">;
            {tags && tags.map((tag, i) => (;
              <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light">;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                {tag}
              </Badge>;
            ))}
          </div>;
        )}

<<<<<<< HEAD
        {author && (
=======
<<<<<<< HEAD
        


      to={`/profile/${profileId}`}
      className={cn(
        "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue hover:border-zion-purple/50 transition-all duration-300 group cursor-pointer",
        className
      )}
    >
      {image && (
        <div className="h-48 w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-col p-4 flex-grow">
        <div className="mb-2">
          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">
            {category}
          </Badge>
        </div>
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>
        <p className="text-zion-slate mb-4 flex-grow">{description}</p>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
              <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        
=======

        


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {author && (
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <div className="flex items-center mt-auto pt-4 border-t border-zion-blue-light">
            {authorImage ? (
              <img src={authorImage} alt={author} className="h-8 w-8 rounded-full mr-2" />
            ) : (
              <div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2" />
<<<<<<< HEAD

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
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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
<<<<<<< HEAD

=======
            )}
            <span className="text-sm text-zion-slate-light">{author}</span>;
          </div>;
        )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      </div>;
    </Link>;
  );
}
<<<<<<< HEAD

=======
  author_image?: string;
  class_name?: string;
  profile_type?: 'service' | 'talent';
}
export /**
 * ListingCard - Function description
 */
function ListingCard() {
  // Generate a profile ID based on the listing data;
  // In a real app, this would be a proper ID from the database;
  const profile_id = id || (profile_type === 'service' ? 'service - provider - 1' : 'talent - 1');
;
  return (
    <Link;
      to={`/profile/${profile_id}`}
      className={cn (
        "flex flex - col overflow - hidden rounded - lg border border - zion - blue - light bg - zion - blue hover: border - zion - purple / 50 transition - all duration - 300 group cursor - pointer",
        class_name)}
    >;
      {image && (
        <div className="h - 48 w - full overflow - hidden">;
          <img;
            src={image}
            alt={title}
            className="h - full w - full object - cover transition - transform duration - 300 group - hover:scale - 105";
          />;
        </div>)}
      <div className="flex flex - col p - 4 flex - grow">;
        <div className="mb - 2">;
          <Badge variant="secondary" className="bg - zion - purple / 20 text - zion - cyan hover:bg - zion - purple / 30">;
            {category}
          </Badge>;
        </div>;
        <h3 className="text - xl font - bold mb - 2 text - white group - hover:text - zion - purple transition - colors">{title}</h3>;
        <p className="text - zion - slate mb - 4 flex - grow">{description}</p>;
        {tags && tags.length > 0 && (
          <div className="flex flex - wrap gap - 2 mb - 4">;
            {tags.map ((tag, i) => (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              <Badge key={i} variant="outline" className="border - zion - slate - dark text - zion - slate - light">;
                {tag}
              </Badge>))}

          </div>)}

            <span className="text - sm text - zion - slate - light">{author}</span>;
          </div>)}
      </div>;
    </Link>);
<<<<<<< HEAD
}
=======
}
<<<<<<< HEAD
            {category}
          </Badge>;
        </div>;
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>;
        <p className="text-zion-slate mb-4 flex-grow">{description}</p>;
        ;
        {tags && tags.length > 0 && (;
          <div className="flex flex-wrap gap-2 mb-4">;
            {tags.map((tag, i) => (;
              <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light">;
                {tag}
              </Badge>;            ))}
          </div>;
        )}
        ;
        {author && (;
          <div className="flex items-center mt-auto pt-4 border-t border-zion-blue-light">;
            {authorImage ? (;
              <img src={authorImage} alt={author} className="h-8 w-8 rounded-full mr-2" />;
            ) :(;
              <div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2" />;
            )}
            <span className="text-sm text-zion-slate-light">{author}</span>;
          </div>;
        )}
      </div>;
    </Link>;
  ),;}
 interface ListingCardProps {
  id?: string;
title: string;
description: string;
image?: string;
category: string;
tags?: string[];
author?: string;
authorImage?: string;
className?: string;
profileType?: 'service' | 'talent' 
}export function ListingCard ({
  id;
title;
description;
image;
category;
tags;
author;
authorImage;
className;
profileType = 'service' 
}: ListingCardProps) {
  //Generate a profile ID based on the listing data //In a real app, this would be a proper ID from the database const profileId = id || (profileType === 'service' ? 'service-provider-1' : 'talent-1');
`/profile/$ {
  profileId 
}` 
}</Badge>) ) 
}</div>) 
}) : (<div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2" />) 
}</div>) 
}</div> </Link>) 
}
            )}
            <span className="text-sm text-zion-slate-light">{author}</span>
          </div>
        )}
      </div>
    </Link>
  )
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
