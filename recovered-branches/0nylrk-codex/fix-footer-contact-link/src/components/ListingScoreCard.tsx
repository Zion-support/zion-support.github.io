<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======




<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {cn} from "@/lib/utils";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {StarIcon} from "lucide-react";
<<<<<<< HEAD

=======
<<<<<<< HEAD

import { cn } from "@/lib/utils",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button";
import { StarIcon } from "lucide-react";

interface ListingScoreCardProps {

import {cn} from "@/lib/utils";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";

=======
<<<<<<< HEAD
  image?: string;
  category: string,;
=======
interface ListingScoreCardProps {;
  title: string,;
  description: string,;
=======
import { cn } from '@/lib / utils';
import { Badge } from '@/components / ui / badge';
import { Button } from '@/components / ui / button';
import { StarIcon } from './lucide-react';
interface ListingScoreCardProps {
  title: string,
  description: string,

  image?: string;
  category: string,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  tags?: string[];

  author?: string;
  author_image?: string;
  ai_score?: number;
  rating?: number;
<<<<<<< HEAD
=======

interface ListingScoreCardProps {

  title: string,
  description: string,

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export function ListingScoreCard(): any ({ ;
  title;
<<<<<<< HEAD

  return (

=======
  description, ;
  image, ;
  category, ;
  tags;
  author, ;
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { cn } from "@/lib/utils",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button";
import { StarIcon } from "lucide-react";
<<<<<<< HEAD

interface ListingScoreCardProps {

import {cn} from "@/lib/utils";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";

  tags?: string[];

  author?: string;
  author_image?: string;
  ai_score?: number;
  rating?: number;

interface ListingScoreCardProps {

  title: string,
  description: string,

export function ListingScoreCard(): any ({ ;
  title;

  return (

=======
interface ListingScoreCardProps {
<<<<<<< HEAD
=======

  title: string
  description: string
  image?: string;
  category: string

  tags?: string[];
  author?: string;
  authorImage?: string;
  aiScore?: number;
  rating?: number;
  reviewCount?: number;
  className?: string
}
export function ListingScoreCard({
  title;

  description
  image
  category
  tags;
  author
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  authorImage;
  aiScore = 0;
  rating = 0;
  reviewCount = 0;
<<<<<<< HEAD
  className
}: ListingScoreCardProps) {
  return (
    <div className={cn(
      "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue-dark hover: border-zion-purple/50 transition-all duration-300 group"
import { Button } from "@/components/ui/button",
import { StarIcon } from "lucide-react",
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface ListingScoreCardProps {
>>>>>>> merged-prs-20250907-203621
  title: string,
  description: string,
  image?: string,
  category: string,
  tags?: string[],
  author?: string,
  authorImage?: string,
  aiScore?: number,
  rating?: number,
  reviewCount?: number,
  className?: string
}


export function ListingScoreCard({ 
  title,

<<<<<<< HEAD
export function ListingScoreCard({ ;
  title;
export function ListingScoreCard({ 
  title,
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  description, 
  image, 
  category, 
  tags,
  author, 
  authorImage,
  aiScore = 0,
  rating = 0,
  reviewCount = 0,
  className 
}: ListingScoreCardProps) {
  return (
<<<<<<< HEAD
    <div className = $2;
      className
    )}>
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
        <div className="mb-2 flex items-center justify-between">
          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">
            {category}
          </Badge>
          {aiScore > 0 && (
            <div className="flex items-center px-2 py-1 bg-zion-cyan/10 rounded text-zion-cyan text-xs">
              <span className="font-medium mr-1">AI Match:</span>
              <span>{aiScore}%</span>
            </div>
          )}
=======
    <div className={cn(
      "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue-dark hover:border-zion-purple/50 transition-all duration-300 group",
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      className

    )}>
      {image && ("
        <div className="h-48 w-full overflow-hidden">
          <img;

            src={image}
            alt={title}
<<<<<<< HEAD

  className ;
}: ListingScoreCardProps) {;
  return (

=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  className ;
}: ListingScoreCardProps) {;
  return (
<<<<<<< HEAD

=======
    <divclassName={cn(
      "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue-dark hover: border-zion-purple/50 transition-all duration-300 group",
      className
    )}>;
      {image && (;
        <div className="h-48 w-full overflow-hidden">;
          <img
            src={image} 
            alt={title} 
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"

import { cn } from "@/lib/utils",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { StarIcon } from "lucide-react",;
;
interface ListingScoreCardProps {;
  title:string,;
  description:string,;
  image?:string,;
  category:string,;
  tags?:string[],;
  author?:string,;
  authorImage?:string,;
  aiScore?:number,;
  rating?:number,;
  reviewCount?:number,;
  className?:string;
}
;
export function ListingScoreCard({ ;
  title,;
  description, ;
  image, ;
  category, ;
  tags,;
  author, ;
  authorImage,;
  aiScore = 0,;
  rating = 0,;
  reviewCount = 0,;
  className ;
} ListingScoreCardProps) {;
  return (;
    <div className={cn(;
      "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue-dark hover:border-zion-purple/50 transition-all duration-300 group",;
      className;
    )}>;
      {image && (;
        <div className="h-48 w-full overflow-hidden">;
          <img ;
            src={image} ;
            alt={title} ;
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          />;
        </div>;
      )}"
      <div className="flex flex-col p-4 flex-grow">;"
        <div className="mb-2 flex items-center justify-between">;"
          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">;
            {category}
          </Badge>;
          {aiScore > 0 && (;"
            <div className="flex items-center px-2 py-1 bg-zion-cyan/10 rounded text-zion-cyan text-xs">;"
              <span className="font-medium mr-1">AI Match:</span>;
              <span>{aiScore}%</span>;
            </div>;
          )}
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}"
      <div className="flex flex-col p-4 flex-grow">"
        <div className="mb-2 flex items-center justify-between">"
          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">
            {category}
          </Badge>
          {aiScore > 0 && ("
            <div className="flex items-center px-2 py-1 bg-zion-cyan/10 rounded text-zion-cyan text-xs">"

              <span className="font-medium mr-1">AI Match:</span>
              <span>{aiScore}%</span>
            </div>
          )}
<<<<<<< HEAD

        </div>;
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>;
        <p className="text-zion-slate mb-4 flex-grow line-clamp-2">{description}</p>;

                      : "text-zion-slate-light"
                    "h-4 w-4", 
                    star <= Math.round(rating) 
                      ? "text-zion-cyan fill-zion-cyan" 
                      : "text-zion-slate-light"

import { cn } from "@/lib/utils",;

import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
        </div>;
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>;
        <p className="text-zion-slate mb-4 flex-grow line-clamp-2">{description}</p>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
        </div>
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>
        <p className="text-zion-slate mb-4 flex-grow line-clamp-2">{description}</p>
        {/* Rating */}
        {rating > 0 && (
          <div className="flex items-center gap-1 mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
<<<<<<< HEAD
                <StarIcon 
                  key = $2;
=======
                <StarIcon
                  key={star}
                  className={cn(
<<<<<<< HEAD
                    "h-4 w-4"
                    star <= Math.round(rating)
                      ? "text-zion-cyan fill-zion-cyan"

                      : "text-zion-slate-light"
                    "h-4 w-4", 
>>>>>>> merged-prs-20250907-203621
                    star <= Math.round(rating) 
                      ? "text-zion-cyan fill-zion-cyan" 
                      : "text-zion-slate-light"
import { cn } from "@/lib/utils",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { StarIcon } from "lucide-react",;
interface ListingScoreCardProps {;
  title: string,;
  description: string,;
  image?: string,;
  category: string,;
  tags?: string[],;
  author?: string,;
  authorImage?: string,;
  aiScore?: number,;
  rating?: number,;
  reviewCount?: number,;
  className?: string;
}
;
<<<<<<< HEAD
export function ListingScoreCard() { return null; }
    )}>;
      {image && (;"
        <div className="h-48 w-full overflow-hidden">;
          <img;
            src={image} ;
            alt={title} ;"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105";
          />;

        </div>;
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>;
        <p className="text-zion-slate mb-4 flex-grow line-clamp-2">{description}</p>;
=======
export function ListingScoreCard({;
  title,;
  description,;
  image,;
  category,;
  tags,;
  author,;
  authorImage,;
  aiScore = 0,;
  rating = 0,;
  reviewCount = 0,;
  className;
}: ListingScoreCardProps) {;
  return (;
    <div className={cn(;
      "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue-dark hover:border-zion-purple/50 transition-all duration-300 group";
      className;
    )}>;
      {image && (;
        <div className="h-48 w-full overflow-hidden">;
          <img;
            src={image} ;
            alt={title} ;
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105";
          />;
        </div>;
      )}
      <div className="flex flex-col p-4 flex-grow">;
        <div className="mb-2 flex items-center justify-between">;
          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">;
            {category}
          </Badge>;
          {aiScore > 0 && (;
            <div className="flex items-center px-2 py-1 bg-zion-cyan/10 rounded text-zion-cyan text-xs">;
              <span className="font-medium mr-1">AI Match:</span>;
              <span>{aiScore}%</span>;
            </div>;
          )}
        </div>;
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>;
        <p className="text-zion-slate mb-4 flex-grow line-clamp-2">{description}</p>;
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        ;
        </div>;
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>;
        <p className="text-zion-slate mb-4 flex-grow line-clamp-2">{description}</p>;
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

                      : "text-zion-slate-light"
                    "h-4 w-4", 
                    star <= Math.round(rating) 
                      ? "text-zion-cyan fill-zion-cyan" 
                      : "text-zion-slate-light"

import { cn } from "@/lib/utils",;

import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;

import { StarIcon } from "lucide-react",;
interface ListingScoreCardProps {;
  title: string,;
  description: string,;
  image?: string,;
  category: string,;
  tags?: string[],;
  author?: string,;
  authorImage?: string,;
  aiScore?: number,;
  rating?: number,;
  reviewCount?: number,;
  className?: string;
}
;
export function ListingScoreCard() { return null; }
    )}>;
      {image && (;"
        <div className="h-48 w-full overflow-hidden">;
          <img;
            src={image} ;
            alt={title} ;"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105";
          />;

        </div>;
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>;
        <p className="text-zion-slate mb-4 flex-grow line-clamp-2">{description}</p>;
        ;
        </div>;
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>;
        <p className="text-zion-slate mb-4 flex-grow line-clamp-2">{description}</p>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        {/* Rating */}
        {rating > 0 && (;
          <div className="flex items-center gap-1 mb-4">;
            <div className="flex">;
              {[1, 2, 3, 4, 5].map((star) => (;
<<<<<<< HEAD
                <StarIcon
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
                <StarIcon;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  key={star}
                <StarIcon
                  key={star}

                  className={cn(;
                    "h-4 w-4";
                    star <= Math.round(rating);
                      ? "text-zion-cyan fill-zion-cyan";
                      : "text-zion-slate-light";
<<<<<<< HEAD

=======
=======
                <StarIcon
                  key={star}
<<<<<<< HEAD
                <StarIcon
                  key={star}

                  className={cn(;
                    "h-4 w-4";
                    star <= Math.round(rating);
                      ? "text-zion-cyan fill-zion-cyan";
                      : "text-zion-slate-light";

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  className={cn(

                    "h-4 w-4", 
                    star <= Math && Math.round(rating) "
                      ? "text-zion-cyan fill-zion-cyan" 

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
                      : "text-zion-slate-light"
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    "h-4 w-4", 
                    star <= Math.round(rating) "
                      ? "text-zion-cyan fill-zion-cyan" "
                      : "text-zion-slate-light"

                    star <= Math.round(rating) 
                      ? "text-zion-cyan fill-zion-cyan" 
                      : "text-zion-slate-light"

<<<<<<< HEAD
                      : "text-zion-slate-light"
<StarIcon ;
=======
<<<<<<< HEAD
                      : "text-zion-slate-light"
<StarIcon ;
=======
<<<<<<< HEAD
                      : "text-zion-slate-light"
                <StarIcon ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  key={star}
                  className={cn(;
                    "h-4 w-4", ;
                    star <= Math.round(rating) ;
                      ? "text-zion-cyan fill-zion-cyan" ;
                      :"text-zion-slate-light";
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  )}
                />;
              ))}
            </div>;"
            <span className="text-sm text-zion-slate-light ml-1">;
              ({reviewCount});
            </span>;
          </div>;
<<<<<<< HEAD

              </Badge>
            ))}
          </div>
=======
        )}
<<<<<<< HEAD
=======


        {tags && tags.length > 0 && (;
          <div className="flex flex-wrap gap-2 mb-4">;
            {tags && tags.map((tag, i) => (;
              <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light">;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                {tag}



<<<<<<< HEAD
              </Badge>;
            ))}
          </div>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  )}
                />;
              ))}
            </div>;"
            <span className="text-sm text-zion-slate-light ml-1">;
              ({reviewCount});
            </span>;
          </div>;

              </Badge>
            ))}
          </div>

        <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">;
          Request Quote;
        </Button>;

              </Badge>;
            ))}
          </div>;

        {author && (;"
          <div className="flex items-center mt-4 pt-4 border-t border-zion-blue-light">;
            {authorImage ? (;"
              <img src={authorImage} alt={author} className="h-8 w-8 rounded-full mr-2" />;

            )}

        )}
<<<<<<< HEAD
=======
              </Badge>;
            ))}
          </div>;
        )}
        
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
          Request Quote
        </Button>
        {author && (
          <div className="flex items-center mt-4 pt-4 border-t border-zion-blue-light">
            {authorImage ? (
              <img src={authorImage} alt={author} className="h-8 w-8 rounded-full mr-2" />
            ) : (
              <div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2 flex items-center justify-center text-zion-purple">
                {author.charAt(0)}
              </div>
<<<<<<< HEAD

        )}

        )}

        <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">;
          Request Quote;
        </Button>;
=======
<<<<<<< HEAD
            )}
            <span className="text-sm text-zion-slate-light">{author}</span>
          </div>
        )}
      </div>
    </div>
  )
=======
=======
=======
              </Badge>;
            ))}
          </div>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


        )}

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

        )}
        <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">;
          Request Quote;
        </Button>;
<<<<<<< HEAD

              </Badge>;
            ))}
          </div>;

        {author && (;"
          <div className="flex items-center mt-4 pt-4 border-t border-zion-blue-light">;
            {authorImage ? (;"
              <img src={authorImage} alt={author} className="h-8 w-8 rounded-full mr-2" />;

            )}

        )}
        <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
          Request Quote
        </Button>
        {author && (
          <div className="flex items-center mt-4 pt-4 border-t border-zion-blue-light">
            {authorImage ? (
              <img src={authorImage} alt={author} className="h-8 w-8 rounded-full mr-2" />
            ) : (
              <div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2 flex items-center justify-center text-zion-purple">
                {author.charAt(0)}
              </div>

        )}

        )}

        <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">;
          Request Quote;
        </Button>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

<Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">;
          Request Quote;
        </Button>;
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
        <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">;
          Request Quote;
        </Button>;
        ;
        {author && (;
          <div className="flex items-center mt-4 pt-4 border-t border-zion-blue-light">;
            {authorImage ? (;
              <img src={authorImage} alt={author} className="h-8 w-8 rounded-full mr-2" />;
<<<<<<< HEAD
            ) : (;
              <div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2 flex items-center justify-center text-zion-purple">;
                {author && author.charAt(0)}
              </div>;
=======
            ) :(;
              <div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2 flex items-center justify-center text-zion-purple">;                {author.charAt(0)}
              </div>;
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

) :(;
              <div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2 flex items-center justify-center text-zion-purple">;                {author.charAt(0)}
              </div>;
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            )}

            <span className="text-sm text-zion-slate-light">{author}</span>;
          </div>;
        )}
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
      </div>;
    </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  review_count?: number;

            <div className="flex">;
              {[1, 2, 3, 4, 5].map ((star) => (
                <StarIcon;
                  key={star}
                  className={cn ("
                    "h - 4 w - 4",
                    star <= Math.round (rating);"
                      ? "text - zion - cyan fill - zion - cyan";"
                      : "text - zion - slate - light")}
                />))}

<<<<<<< HEAD
          </div>)}
      </div>;
    </div>);

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          </div>)}
      </div>;
    </div>);

          </div>)}
      </div>;
    </div>);
>>>>>>> merged-prs-20250907-203621
}
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  ),;}
 interface ListingScoreCardProps {
  title: string;
description: string;
image?: string;
category: string;
tags?: string[];
author?: string;
authorImage?: string;
aiScore?: number;
rating?: number;
reviewCount?: number;
className?: string 
}export function ListingScoreCard ({
  title;
description;
image;
category;
tags;
author;
authorImage;
aiScore = 0;
rating = 0;
reviewCount = 0;
className 
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  className;)
}: ListingScoreCardProps) {
  return (
    <div className={cn("
      "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue-dark hover:border-zion-purple/50 transition-all duration-300 group","
    )}>
</div>"
        <div className="h-48 w-full overflow-hidden">"
</div>
          <img;
            src={image}
            alt={title}

  className ;
}: ListingScoreCardProps) {;
    <divclassName={cn("
      "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue-dark hover: border-zion-purple/50 transition-all duration-300 group","
    )}>;
</img>"
        <div className="h-48 w-full overflow-hidden">;"
"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"""
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105""
          />;
</img>
        </div>;"
      <div className="flex flex-col p-4 flex-grow">;"
        <div className="mb-2 flex items-center justify-between">;"
          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">;"

          ;"
            <div className="flex items-center px-2 py-1 bg-zion-cyan/10 rounded text-zion-cyan text-xs">;"
              <span className="font-medium mr-1">AI Match:</span>;"
              <span>{aiScore}%</span>;
            </div>;
      <div className="flex flex-col p-4 flex-grow">"
        <div className="mb-2 flex items-center justify-between">"
          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">"

            <div className="flex items-center px-2 py-1 bg-zion-cyan/10 rounded text-zion-cyan text-xs">"
              <span className="font-medium mr-1">AI Match:</span>"
              <span>{aiScore}%</span>
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>""
        <p className="text-zion-slate mb-4 flex-grow line-clamp-2">{description}</p>""
          <div className="flex items-center gap-1 mb-4">"
            <div className="flex">"
                <StarIcon;
                  key={star}
                  className={cn(

        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>;""
        <p className="text-zion-slate mb-4 flex-grow line-clamp-2">{description}</p>;"
    <div className={cn(;"
      "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue-dark hover:border-zion-purple/50 transition-all duration-300 group";"
            src={image} ;
            alt={title} ;"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105";"

        <p className="text-zion-slate mb-4 flex-grow line-clamp-2">{description}</p>;""
          <div className="flex items-center gap-1 mb-4">;"
            <div className="flex">;"
                  className={cn("
                    "h-4 w-4",")
                    star <= Math && Math.round(rating) "
                      ? "text-zion-cyan fill-zion-cyan"""
                      : "text-zion-slate-light"""
                    "h-4 w-4","
                    star <= Math.round(rating) "
                      : "text-zion-slate-light""
                <StarIcon ;
                  className={cn(;"
                    "h-4 w-4", ;")
                    star <= Math.round(rating) ;"
                      ? "text-zion-cyan fill-zion-cyan" ;""
                      :"text-zion-slate-light";""
                  )}

            <span className="text-sm text-zion-slate-light ml-1">;"
</span>
            </span>;
          <div className="flex flex-wrap gap-2 mb-4">;"
              <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light">;"

              ;
        <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">;"

        <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">"

          <div className="flex items-center mt-4 pt-4 border-t border-zion-blue-light">"
              <img src={authorImage} alt={author} className="h-8 w-8 rounded-full mr-2" />"
              <div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2 flex items-center justify-center text-zion-purple">"

          <div className="flex items-center mt-4 pt-4 border-t border-zion-blue-light">;"
              <img src={authorImage} alt={author} className="h-8 w-8 rounded-full mr-2" />;"
              <div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2 flex items-center justify-center text-zion-purple">;"
            <span className="text-sm text-zion-slate-light">{author}</span>;"
    <div className={cn ("
      "flex flex - col overflow - hidden rounded - lg border border - zion - blue - light bg - zion - blue - dark hover: border - zion - purple / 50 transition - all duration - 300 group",")
      class_name)}>;
        <div className="h - 48 w - full overflow - hidden">;"
            alt={title}"
            className="h - full w - full object - cover transition - transform duration - 300 group - hover:scale - 105";"
        </div>)}"
      <div className="flex flex - col p - 4 flex - grow">;"
        <div className="mb - 2 flex items - center justify - between">;"
          <Badge variant="secondary" className="bg - zion - purple / 20 text - zion - cyan hover:bg - zion - purple / 30">;"

            <div className="flex items - center px - 2 py - 1 bg - zion - cyan / 10 rounded text - zion - cyan text - xs">;"
              <span className="font - medium mr - 1">AI Match:</span>;"
              <span>{ai_score}%</span>;
            </div>)}
        <h3 className="text - xl font - bold mb - 2 text - white group - hover:text - zion - purple transition - colors">{title}</h3>;""
        <p className="text - zion - slate mb - 4 flex - grow line - clamp - 2">{description}</p>;""
          <div className="flex items - center gap - 1 mb - 4">;"
                  className={cn ("
                    "h - 4 w - 4",")
                    star <= Math.round (rating);"
                      ? "text - zion - cyan fill - zion - cyan";""
                      : "text - zion - slate - light")}"
                />))}

            <span className="text - sm text - zion - slate - light ml - 1">;"
          <div className="flex flex - wrap gap - 2 mb - 4">;"
              <Badge key={i} variant="outline" className="border - zion - slate - dark text - zion - slate - light">;"

              ))}
        <Button className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white">;"

          <div className="flex items - center mt - 4 pt - 4 border - t border - zion - blue - light">;"
              <img src={author_image} alt={author} className="h - 8 w - 8 rounded - full mr - 2" />) : ("
              <div className="h - 8 w - 8 rounded - full bg - zion - purple / 20 mr - 2 flex items - center justify - center text - zion - purple">;"
</div>)
            <span className="text - sm text - zion - slate - light">{author}</span>;"
    </div>);
  return (<div className= {"
  cn ("flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue-dark hover:border-zion-purple/50 transition-all duration-300 group";")
className) 
}> {
  image && (<div className="h-48 w-full overflow-hidden" > <img src= {"
</div>)"
}className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" /> </div>)""
}<div className="flex flex-col p-4 flex-grow" > <div className="mb-2 flex items-center justify-between" > <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30" > {"
} {"
  aiScore > 0 && (<div className="flex items-center px-2 py-1 bg-zion-cyan/10 rounded text-zion-cyan text-xs" > <span className="font-medium mr-1" >AI Match:</span> aiScore;"
}%</span> </div>) 
}</div>) 
}</div> </span> </div>) 
}) ) 
}</div>) "
}<Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white" > Request Quote  </div>)"
}</div> </div>) "
            <span className="text-sm text-zion-slate-light">{author}</span>"
pr-12325
          </div>
      </div>
    </div>
  )
<<<<<<< HEAD
}
=======
}
=======
}: ListingScoreCardProps) {
  return (<div className= {
  cn ("flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue-dark hover:border-zion-purple/50 transition-all duration-300 group";
className) 
}> {
  image && (<div className="h-48 w-full overflow-hidden" > <img src= {
  image 
}alt= {
  title 
}className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" /> </div>) 
}<div className="flex flex-col p-4 flex-grow" > <div className="mb-2 flex items-center justify-between" > <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30" > {
  category 
}</Badge> {
  aiScore > 0 && (<div className="flex items-center px-2 py-1 bg-zion-cyan/10 rounded text-zion-cyan text-xs" > <span className="font-medium mr-1" >AI Match:</span> aiScore 
}%</span> </div>) 
}</div>) 
}/>) ) 
}</div> </span> </div>) 
}</Badge>) ) 
}</div>) 
}<Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white" > Request Quote </Button> </div>) 
}</div> </div>) 
}
            )}
            <span className="text-sm text-zion-slate-light">{author}</span>
          </div>
        )}
      </div>
    </div>
  )
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
