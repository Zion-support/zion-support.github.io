<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ListingCard.tsx


<<<<<<< HEAD
import { cn } from "@/lib/utils",

=======



========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ListingCard.tsx
import {cn} from "@/lib/utils";
import {Badge} from "@/components/ui/badge";
import {Link} from "react-router-dom";
interface ListingCardProps {;
import { cn } from '@/lib / utils';
import { Badge } from '@/components / ui / badge';
import { Link } from './react-router-dom';
interface ListingCardProps {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ListingCard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ListingCard.tsx
  id?: string;
  title: string,;
  description: string,;
  image?: string;
  category: string,;
  tags?: string[];
  author?: string;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ListingCard.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ListingCard.tsx
export function ListingCard(): any ({ ;
  id;
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  title, ;
  description, ;
  image, ;
  category, ;
  tags, ;
  author, ;
  authorImage, ;
<<<<<<< HEAD
  className;
  profileType = 'service';
}: ListingCardProps) {;
  // Generate a profile ID based on the listing data;
  // In a real app, this would be a proper ID from the database;
  const profileId = id || (profileType === 'service' ? 'service-provider-1' : 'talent-1');
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ListingCard.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ListingCard.tsx
=======

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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <Link
      to={`/profile/${profileId}`}
      className={cn(
        "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue hover: border-zion-purple/50 transition-all duration-300 group cursor-pointer"
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ListingCard.tsx

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

import { Badge } from "@/components/ui/badge",
import { Link } from "react-router-dom",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

      to={`/profile/${profileId}`}
      className={cn(
        "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue hover:border-zion-purple/50 transition-all duration-300 group cursor-pointer",
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        className

========
        className
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ListingCard.tsx
      )}>;
      {image && (;
        <div className="h-48 w-full overflow-hidden">;
          <img
            src={image} 
            alt={title} 
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ListingCard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ListingCard.tsx
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          />;
        </div>;
      )}
      <div className="flex flex-col p-4 flex-grow">;
        <div className="mb-2">;
          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ListingCard.tsx
            {category}

========
<<<<<<< HEAD
            {category}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ListingCard.tsx
          </Badge>;
        </div>;
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>;
        <p className="text-zion-slate mb-4 flex-grow">{description}</p>;
        {tags && tags.length > 0 && (;
          <div className="flex flex-wrap gap-2 mb-4">;
            {tags && tags.map((tag, i) => (;
              <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ListingCard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ListingCard.tsx
                {tag}
              </Badge>;
            ))}
          </div>;
        )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ListingCard.tsx

<<<<<<< HEAD
=======

        


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
        
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        {author && (
          <div className="flex items-center mt-auto pt-4 border-t border-zion-blue-light">
            {authorImage ? (
              <img src={authorImage} alt={author} className="h-8 w-8 rounded-full mr-2" />
            ) : (
              <div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2" />
<<<<<<< HEAD
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ListingCard.tsx
        {author && (;
          <div className="flex items-center mt-auto pt-4 border-t border-zion-blue-light">;
            {authorImage ? (;
              <img src={authorImage} alt={author} className="h-8 w-8 rounded-full mr-2" />;
            ) : (;
              <div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2" />;
            )}
            <span className="text-sm text-zion-slate-light">{author}</span>;
          </div>;
        )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ListingCard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ListingCard.tsx
      </div>;
    </Link>;
  );
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ListingCard.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ListingCard.tsx
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
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
            )}
            <span className="text-sm text-zion-slate-light">{author}</span>
          </div>
        )}
      </div>
    </Link>
  )
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
