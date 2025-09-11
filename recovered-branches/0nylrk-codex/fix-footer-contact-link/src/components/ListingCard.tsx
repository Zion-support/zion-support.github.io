


<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


import {cn} from "@/lib/utils";
import {Badge} from "@/components/ui/badge";
import {Link} from "react-router-dom";
interface ListingCardProps {;
=======
import { cn } from '@/lib / utils';
import { Badge } from '@/components / ui / badge';
import { Link } from './react-router-dom';
interface ListingCardProps {

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  id?: string;
  title: string,;
  description: string,;
  image?: string;
  category: string,;
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  tags?: string[];
  author?: string;


export function ListingCard(): any ({ ;
  id;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  title, ;
  description, ;
  image, ;
  category, ;
  tags, ;
  author, ;
  authorImage, ;
<<<<<<< HEAD
<<<<<<< HEAD

import {cn} from "@/lib/utils";
import {Badge} from "@/components/ui/badge";
import {Link} from "react-router-dom";
import { cn } from "@/lib/utils",
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
interface ListingCardProps {
  id?: string;

  title: string
  description: string
  image?: string;
  category: string

  tags?: string[];
  author?: string;
  authorImage?: string;
  className?: string;
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  className;
  profileType = 'service';
}: ListingCardProps) {;
  // Generate a profile ID based on the listing data;
  // In a real app, this would be a proper ID from the database;
  const profileId = id || (profileType === 'service' ? 'service-provider-1' : 'talent-1');


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <Link
      to={`/profile/${profileId}`}
      className={cn(
        "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue hover: border-zion-purple/50 transition-all duration-300 group cursor-pointer"

<<<<<<< HEAD
<<<<<<< HEAD
import { Badge } from "@/components/ui/badge",
import { Link } from "react-router-dom",
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  profileType?: 'service' | 'talent'
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


      to={`/profile/${profileId}`}
      className={cn(
        "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue hover:border-zion-purple/50 transition-all duration-300 group cursor-pointer",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        className

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        className

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      )}>;
      {image && (;
        <div className="h-48 w-full overflow-hidden">;
          <img
            src={image} 
            alt={title} 
<<<<<<< HEAD
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

            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          />;
        </div>;
      )}
      <div className="flex flex-col p-4 flex-grow">;
        <div className="mb-2">;
          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {category}

          </Badge>;
        </div>;
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>;
        <p className="text-zion-slate mb-4 flex-grow">{description}</p>;

        {tags && tags.length > 0 && (;
          <div className="flex flex-wrap gap-2 mb-4">;
            {tags && tags.map((tag, i) => (;
              <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light">;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {tag}
              </Badge>;
            ))}
          </div>;
        )}
<<<<<<< HEAD

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
=======
        
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {author && (
          <div className="flex items-center mt-auto pt-4 border-t border-zion-blue-light">
            {authorImage ? (
              <img src={authorImage} alt={author} className="h-8 w-8 rounded-full mr-2" />
            ) : (
              <div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2" />
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        {author && (;
          <div className="flex items-center mt-auto pt-4 border-t border-zion-blue-light">;
            {authorImage ? (;
              <img src={authorImage} alt={author} className="h-8 w-8 rounded-full mr-2" />;
            ) : (;
              <div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2" />;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            )}
            <span className="text-sm text-zion-slate-light">{author}</span>;
          </div>;
        )}
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </div>;
    </Link>;
  );
}
<<<<<<< HEAD
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
              <Badge key={i} variant="outline" className="border - zion - slate - dark text - zion - slate - light">;
                {tag}
              </Badge>))}
          </div>)}
        {author && (
          <div className="flex items - center mt - auto pt - 4 border - t border - zion - blue - light">;
            {author_image ? (
              <img src={author_image} alt={author} className="h - 8 w - 8 rounded - full mr - 2" />) : (
              <div className="h - 8 w - 8 rounded - full bg - zion - purple / 20 mr - 2" />)}
            <span className="text - sm text - zion - slate - light">{author}</span>;
          </div>)}
      </div>;
    </Link>);
}
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
