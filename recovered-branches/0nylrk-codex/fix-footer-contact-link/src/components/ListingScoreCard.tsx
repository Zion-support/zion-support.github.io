<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ListingScoreCard.tsx


<<<<<<< HEAD
import { cn } from "@/lib/utils",
import { Badge } from "@/components/ui/badge",

=======



========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ListingScoreCard.tsx
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {cn} from "@/lib/utils";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {StarIcon} from "lucide-react";
<<<<<<< HEAD
interface ListingScoreCardProps {;
  title: string,;
  description: string,;
import { cn } from '@/lib / utils';
import { Badge } from '@/components / ui / badge';
import { Button } from '@/components / ui / button';
import { StarIcon } from './lucide-react';
interface ListingScoreCardProps {
  title: string,
  description: string,
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ListingScoreCard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ListingScoreCard.tsx
  image?: string;
  category: string,;
  tags?: string[];
  author?: string;
  author_image?: string;
  ai_score?: number;
  rating?: number;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ListingScoreCard.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ListingScoreCard.tsx
export function ListingScoreCard(): any ({ ;
  title;
  description, ;
  image, ;
  category, ;
  tags;
  author, ;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ListingScoreCard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ListingScoreCard.tsx
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { cn } from "@/lib/utils",
import { Badge } from "@/components/ui/badge",
<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import { StarIcon } from "lucide-react";
interface ListingScoreCardProps {

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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  authorImage;
  aiScore = 0;
  rating = 0;
  reviewCount = 0;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ListingScoreCard.tsx

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  className
}: ListingScoreCardProps) {
  return (
    <div className={cn(
      "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue-dark hover: border-zion-purple/50 transition-all duration-300 group"
=======
import { Button } from "@/components/ui/button",
import { StarIcon } from "lucide-react",
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface ListingScoreCardProps {
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

<<<<<<< HEAD
<<<<<<< HEAD
=======

export function ListingScoreCard({ 
  title,

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
export function ListingScoreCard({ ;
  title;
=======
export function ListingScoreCard({ 
  title,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
    <div className={cn(
      "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue-dark hover:border-zion-purple/50 transition-all duration-300 group",
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      className
    )}>
      {image && (
        <div className="h-48 w-full overflow-hidden">
          <img
            src={image}
            alt={title}
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ListingScoreCard.tsx
  className ;
}: ListingScoreCardProps) {;
  return (
    <divclassName={cn(
      "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue-dark hover: border-zion-purple/50 transition-all duration-300 group",
      className
    )}>;
      {image && (;
        <div className="h-48 w-full overflow-hidden">;
          <img
            src={image} 
            alt={title} 
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ListingScoreCard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ListingScoreCard.tsx
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ListingScoreCard.tsx

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        </div>
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>
        <p className="text-zion-slate mb-4 flex-grow line-clamp-2">{description}</p>
        {/* Rating */}
        {rating > 0 && (
          <div className="flex items-center gap-1 mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon
                  key={star}
                  className={cn(
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
                    "h-4 w-4"
                    star <= Math.round(rating)
                      ? "text-zion-cyan fill-zion-cyan"

                      : "text-zion-slate-light"
=======
                    "h-4 w-4", 
                    star <= Math.round(rating) 
                      ? "text-zion-cyan fill-zion-cyan" 
                      : "text-zion-slate-light"
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ListingScoreCard.tsx
        </div>;
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>;
        <p className="text-zion-slate mb-4 flex-grow line-clamp-2">{description}</p>;
<<<<<<< HEAD
=======
        ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
        </div>;
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>;
        <p className="text-zion-slate mb-4 flex-grow line-clamp-2">{description}</p>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {/* Rating */}
        {rating > 0 && (;
          <div className="flex items-center gap-1 mb-4">;
            <div className="flex">;
              {[1, 2, 3, 4, 5].map((star) => (;
<<<<<<< HEAD
<<<<<<< HEAD
                <StarIcon
                  key={star}
<<<<<<< HEAD
=======
                <StarIcon;
                  key={star}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  className={cn(;
                    "h-4 w-4";
                    star <= Math.round(rating);
                      ? "text-zion-cyan fill-zion-cyan";
                      : "text-zion-slate-light";
<<<<<<< HEAD

=======
                  className={cn(
                    "h-4 w-4", 
                    star <= Math && Math.round(rating) 
                      ? "text-zion-cyan fill-zion-cyan" 
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ListingScoreCard.tsx

                      : "text-zion-slate-light"
=======

                    "h-4 w-4", 
                    star <= Math.round(rating) 
                      ? "text-zion-cyan fill-zion-cyan" 
                      : "text-zion-slate-light"

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
                      : "text-zion-slate-light"
=======
                <StarIcon ;
                  key={star}
                  className={cn(;
                    "h-4 w-4", ;
                    star <= Math.round(rating) ;
                      ? "text-zion-cyan fill-zion-cyan" ;
                      :"text-zion-slate-light";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ListingScoreCard.tsx
                  )}
                />;
              ))}
            </div>;
            <span className="text-sm text-zion-slate-light ml-1">;
              ({reviewCount});
            </span>;
          </div>;
        )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ListingScoreCard.tsx


========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ListingScoreCard.tsx
        {tags && tags.length > 0 && (;
          <div className="flex flex-wrap gap-2 mb-4">;
            {tags && tags.map((tag, i) => (;
              <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ListingScoreCard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ListingScoreCard.tsx
                {tag}

<<<<<<< HEAD
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              </Badge>;
            ))}
          </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ListingScoreCard.tsx

<<<<<<< HEAD
        )}

=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  )}
                />
              ))}
            </div>
            <span className="text-sm text-zion-slate-light ml-1">
              ({reviewCount})
            </span>
          </div>
        )}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
              <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light">
                {tag}
<<<<<<< HEAD
              </Badge>
            ))}
          </div>
<<<<<<< HEAD
        )}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
              </Badge>;
            ))}
          </div>;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        )}
        
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        )}


========
        )}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ListingScoreCard.tsx
        <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">;
          Request Quote;
        </Button>;
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        {author && (;
          <div className="flex items-center mt-4 pt-4 border-t border-zion-blue-light">;
            {authorImage ? (;
              <img src={authorImage} alt={author} className="h-8 w-8 rounded-full mr-2" />;
<<<<<<< HEAD
            ) : (;
              <div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2 flex items-center justify-center text-zion-purple">;
                {author && author.charAt(0)}
=======
            ) :(;
              <div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2 flex items-center justify-center text-zion-purple">;                {author.charAt(0)}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ListingScoreCard.tsx

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ListingScoreCard.tsx
            )}
            <span className="text-sm text-zion-slate-light">{author}</span>;
          </div>;
        )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ListingScoreCard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ListingScoreCard.tsx
      </div>;
    </div>;
<<<<<<< HEAD
  );
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ListingScoreCard.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ListingScoreCard.tsx
  review_count?: number;
  class_name?: string;
}
export /**
 * ListingScoreCard - Function description
 */
function ListingScoreCard() {
  return (
    <div className={cn (
      "flex flex - col overflow - hidden rounded - lg border border - zion - blue - light bg - zion - blue - dark hover: border - zion - purple / 50 transition - all duration - 300 group",
      class_name)}>;
      {image && (
        <div className="h - 48 w - full overflow - hidden">;
          <img;
            src={image}
            alt={title}
            className="h - full w - full object - cover transition - transform duration - 300 group - hover:scale - 105";
          />;
        </div>)}
      <div className="flex flex - col p - 4 flex - grow">;
        <div className="mb - 2 flex items - center justify - between">;
          <Badge variant="secondary" className="bg - zion - purple / 20 text - zion - cyan hover:bg - zion - purple / 30">;
            {category}
          </Badge>;
          {ai_score > 0 && (
            <div className="flex items - center px - 2 py - 1 bg - zion - cyan / 10 rounded text - zion - cyan text - xs">;
              <span className="font - medium mr - 1">AI Match:</span>;
              <span>{ai_score}%</span>;
            </div>)}
        </div>;
        <h3 className="text - xl font - bold mb - 2 text - white group - hover:text - zion - purple transition - colors">{title}</h3>;
        <p className="text - zion - slate mb - 4 flex - grow line - clamp - 2">{description}</p>;
        {/* Rating */}
        {rating > 0 && (
          <div className="flex items - center gap - 1 mb - 4">;
            <div className="flex">;
              {[1, 2, 3, 4, 5].map ((star) => (
                <StarIcon;
                  key={star}
                  className={cn (
                    "h - 4 w - 4",
                    star <= Math.round (rating);
                      ? "text - zion - cyan fill - zion - cyan";
                      : "text - zion - slate - light")}
                />))}
            </div>;
            <span className="text - sm text - zion - slate - light ml - 1">;
              ({review_count});
            </span>;
          </div>)}
        {tags && tags.length > 0 && (
          <div className="flex flex - wrap gap - 2 mb - 4">;
            {tags.map ((tag, i) => (
              <Badge key={i} variant="outline" className="border - zion - slate - dark text - zion - slate - light">;
                {tag}
              </Badge>))}
          </div>)}
        <Button className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white">;
          Request Quote;
        </Button>;
        {author && (
          <div className="flex items - center mt - 4 pt - 4 border - t border - zion - blue - light">;
            {author_image ? (
              <img src={author_image} alt={author} className="h - 8 w - 8 rounded - full mr - 2" />) : (
              <div className="h - 8 w - 8 rounded - full bg - zion - purple / 20 mr - 2 flex items - center justify - center text - zion - purple">;
                {author.char_at (0)}
              </div>)}
            <span className="text - sm text - zion - slate - light">{author}</span>;
          </div>)}
      </div>;
    </div>);
}
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
            )}
            <span className="text-sm text-zion-slate-light">{author}</span>
          </div>
        )}
      </div>
    </div>
  )
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
