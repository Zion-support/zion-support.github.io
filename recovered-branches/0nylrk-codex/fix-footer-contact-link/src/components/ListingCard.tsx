
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======




>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {cn} from "@/lib/utils";
import {Badge} from "@/components/ui/badge";
import {Link} from "react-router-dom";
import { cn } from "@/lib/utils",
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

import {cn} from "@/lib/utils";"
import {Badge} from "@/components/ui/badge";"
import {Link} from "react-router-dom";
interface ListingCardProps {;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface ListingCardProps {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
interface ListingCardProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  id?: string;
  title: string,;
  description: string,;
  image?: string;
  category: string,;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  tags?: string[];
  author?: string;
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

=======
  tags?: string[];
  author?: string;


export function ListingCard(): any ({ ;
  id;
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  title, ;
  description, ;
  image, ;
  category, ;
  tags, ;
  author, ;
  authorImage, ;
<<<<<<< HEAD


  tags?: string[];
  author?: string;

<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  tags?: string[];
  author?: string;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  className;
  profileType = 'service';
}: ListingCardProps) {;
  // Generate a profile ID based on the listing data;
  // In a real app, this would be a proper ID from the database;
  const profileId = id || (profileType === 'service' ? 'service-provider-1' : 'talent-1');


  tags?: string[];
  author?: string;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (
    <Link;
      to={`/profile/${profileId}`}
      className={cn("
        "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue hover: border-zion-purple/50 transition-all duration-300 group cursor-pointer"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { Badge } from "@/components/ui/badge",
import { Link } from "react-router-dom",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
interface ListingCardProps {
=======



interface ListingCardProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
  profileType?: 'service' | 'talent'
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
  profileType?: 'service' | 'talent'

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

        className
      )}>;
      {image && (;
        <div className="h-48 w-full overflow-hidden">;
          <img
            src={image} 
            alt={title} 

            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      to={`/profile/${profileId}`}
      className={cn(
        "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue hover:border-zion-purple/50 transition-all duration-300 group cursor-pointer",
        className
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />;
        </div>;
      )}
      <div className="flex flex-col p-4 flex-grow">;
        <div className="mb-2">;
          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">;
            {category}

          </Badge>;
        </div>;
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>;
        <p className="text-zion-slate mb-4 flex-grow">{description}</p>;

        {tags && tags.length > 0 && (;
          <div className="flex flex-wrap gap-2 mb-4">;
            {tags && tags.map((tag, i) => (;
              <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light">;

            {category}
                {tag}
              </Badge>;
            ))}
          </div>;
        )}


        


        {author && (
          <div className="flex items-center mt-auto pt-4 border-t border-zion-blue-light">
            {authorImage ? (
              <img src={authorImage} alt={author} className="h-8 w-8 rounded-full mr-2" />
            ) : (
              <div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2" />
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { cn } from "@/lib/utils",;
import { Badge } from "@/components/ui/badge",;
=======
"
import { cn } from "@/lib/utils",;"
import { Badge } from "@/components/ui/badge",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      to={`/profile/${profileId}`}
      className={cn(
        "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue hover:border-zion-purple/50 transition-all duration-300 group cursor-pointer",
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

      to={`/profile/${profileId}`}
      className={cn(
        "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue hover:border-zion-purple/50 transition-all duration-300 group cursor-pointer",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        className

=======
        className

        className
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export function ListingCard() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD

        
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



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
        
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        {author && (
=======
  profileType?: 'service' | 'talent'        {author && (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  profileType?: 'service' | 'talent'        {author && (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        {author && ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <div className="flex items-center mt-auto pt-4 border-t border-zion-blue-light">
            {authorImage ? ("
              <img src={authorImage} alt={author} className="h-8 w-8 rounded-full mr-2" />
            ) : ("
              <div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2" />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934




        {author && (;"
          <div className="flex items-center mt-auto pt-4 border-t border-zion-blue-light">;
            {authorImage ? (;"
              <img src={authorImage} alt={author} className="h-8 w-8 rounded-full mr-2" />;
            ) : (;"
              <div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2" />;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            )}
            <span className="text-sm text-zion-slate-light">{author}</span>;
          </div>;
        )}
<<<<<<< HEAD
=======
            )}"
            <span className="text-sm text-zion-slate-light">{author}</span>;
          </div>;
        )}
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

      </div>;
    </Link>;
  );
}

<<<<<<< HEAD


  author_image?: string;
  class_name?: string;'
  profile_type?: 'service' | 'talent';
}
export /**;
 * ListingCard - Function description;
 */
function ListingCard() {}
  // Generate a profile ID based on the listing data;
  // In a real app, this would be a proper ID from the database;'
  const profile_id = id || (profile_type === 'service' ? 'service - provider - 1' : 'talent - 1');
;
  return (
    <Link;`
      to={`/profile/${profile_id}`}
      className={cn ("
        "flex flex - col overflow - hidden rounded - lg border border - zion - blue - light bg - zion - blue hover: border - zion - purple / 50 transition - all duration - 300 group cursor - pointer",
        class_name)}
    >;
      {image && ("
        <div className="h - 48 w - full overflow - hidden">;
          <img;
            src={image}
            alt={title}"
            className="h - full w - full object - cover transition - transform duration - 300 group - hover:scale - 105";
          />;
        </div>)}"
      <div className="flex flex - col p - 4 flex - grow">;"
        <div className="mb - 2">;"
          <Badge variant="secondary" className="bg - zion - purple / 20 text - zion - cyan hover:bg - zion - purple / 30">;
            {category}
          </Badge>;
        </div>;"
        <h3 className="text - xl font - bold mb - 2 text - white group - hover:text - zion - purple transition - colors">{title}</h3>;"
        <p className="text - zion - slate mb - 4 flex - grow">{description}</p>;
        {tags && tags.length > 0 && ("
          <div className="flex flex - wrap gap - 2 mb - 4">;
            {tags.map ((tag, i) => ("
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              <Badge key={i} variant="outline" className="border - zion - slate - dark text - zion - slate - light">;
                {tag}
              </Badge>))}
          </div>)}
<<<<<<< HEAD
        {author && ("
          <div className="flex items - center mt - auto pt - 4 border - t border - zion - blue - light">;
            {author_image ? ("
              <img src={author_image} alt={author} className="h - 8 w - 8 rounded - full mr - 2" />) : ("
              <div className="h - 8 w - 8 rounded - full bg - zion - purple / 20 mr - 2" />)}"
=======
        {author && (
          <div className="flex items - center mt - auto pt - 4 border - t border - zion - blue - light">;
            {author_image ? (
              <img src={author_image} alt={author} className="h - 8 w - 8 rounded - full mr - 2" />) : (
              <div className="h - 8 w - 8 rounded - full bg - zion - purple / 20 mr - 2" />)}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <span className="text - sm text - zion - slate - light">{author}</span>;
          </div>)}
      </div>;
    </Link>);
}
<<<<<<< HEAD



'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
            )}
            <span className="text-sm text-zion-slate-light">{author}</span>
          </div>
        )}
      </div>
    </Link>
  )
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
