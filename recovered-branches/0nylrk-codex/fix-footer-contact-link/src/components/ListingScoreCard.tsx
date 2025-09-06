<<<<<<< HEAD

<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
=======

<<<<<<< HEAD

import { cn } from "@/lib/utils",
import { Badge } from "@/components/ui/badge",

=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {cn} from "@/lib/utils";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {StarIcon} from "lucide-react";
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
interface ListingScoreCardProps {;
  title: string,;
  description: string,;
=======
import { cn } from '@/lib / utils';
import { Badge } from '@/components / ui / badge';
import { Button } from '@/components / ui / button';
import { StarIcon } from './lucide-react';
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { cn } from "@/lib/utils",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button";
import { StarIcon } from "lucide-react";
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface ListingScoreCardProps {
=======
import {cn} from "@/lib/utils";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {StarIcon} from "lucide-react";interface ListingScoreCardProps {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

import {cn} from "@/lib/utils";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {StarIcon} from "lucide-react";interface ListingScoreCardProps {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import {cn} from "@/lib/utils";"
import {Badge} from "@/components/ui/badge";"
import {Button} from "@/components/ui/button";"
import {StarIcon} from "lucide-react";

interface ListingScoreCardProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  title: string,
  description: string,

  image?: string;
  category: string,;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
  image?: string;
  category: string,;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  tags?: string[];
=======
  image?: string;
  category: string,;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  image?: string;
  category: string,;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  author?: string;
  author_image?: string;
  ai_score?: number;
  rating?: number;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

export function ListingScoreCard(): any ({ ;
  title;
  description, ;
  image, ;
  category, ;
  tags;
  author, ;



  authorImage;
  aiScore = 0;
  rating = 0;
  reviewCount = 0;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  className
}: ListingScoreCardProps) {
  return (
    <div className={cn(
      "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue-dark hover: border-zion-purple/50 transition-all duration-300 group"
import { Button } from "@/components/ui/button",
import { StarIcon } from "lucide-react",
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
interface ListingScoreCardProps {
=======



interface ListingScoreCardProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
  className?: string;
}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
  description,
  image,
  category,
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
<<<<<<< HEAD
=======
export function ListingScoreCard({ ;
  title;
export function ListingScoreCard({ 
  title,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  description, 
  image, 
  category, 
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  tags,
  author,
  authorImage,
  aiScore = 0,
  rating = 0,
  reviewCount = 0,
<<<<<<< HEAD
  className
}: ListingScoreCardProps) {
=======
  className;
}: ListingScoreCardProps) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className={cn(

<<<<<<< HEAD
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      className
=======


      className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    )}>
      {image && ("
        <div className="h-48 w-full overflow-hidden">
          <img;
            src={image}
            alt={title}

  className ;
}: ListingScoreCardProps) {;
  return (
    <divclassName={cn("
      "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue-dark hover: border-zion-purple/50 transition-all duration-300 group",
      className;
    )}>;
      {image && (;"
        <div className="h-48 w-full overflow-hidden">;
          <img;
            src={image} 
            alt={title} 

"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
    <div className={cn(            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    <div className={cn(            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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



        </div>"
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>"
        <p className="text-zion-slate mb-4 flex-grow line-clamp-2">{description}</p>
        {/* Rating */}
        {rating > 0 && ("
          <div className="flex items-center gap-1 mb-4">"
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon;
                  key={star}
                  className={cn(
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

        </div>;
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>;
        <p className="text-zion-slate mb-4 flex-grow line-clamp-2">{description}</p>;

=======
                    "h-4 w-4"
                    star <= Math.round(rating)
                      ? "text-zion-cyan fill-zion-cyan"

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                      : "text-zion-slate-light"
                    "h-4 w-4", 
                    star <= Math.round(rating) 
                      ? "text-zion-cyan fill-zion-cyan" 
                      : "text-zion-slate-light"
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { cn } from "@/lib/utils",;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
=======
"
import { cn } from "@/lib/utils",;"
import { Badge } from "@/components/ui/badge",;"
import { Button } from "@/components/ui/button",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { StarIcon } from "lucide-react",;
interface ListingScoreCardProps {;
  title: string,,
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
<<<<<<< HEAD
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
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        </div>;
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>;
        <p className="text-zion-slate mb-4 flex-grow line-clamp-2">{description}</p>;
        ;
        </div>;
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>;
        <p className="text-zion-slate mb-4 flex-grow line-clamp-2">{description}</p>;
        {rating > 0 && (;
          <div className="flex items-center gap-1 mb-4">;
            <div className="flex">;
              {[1, 2, 3, 4, 5].map((star) => (;
                <StarIcon
                  key={star}                <StarIcon
                  key={star}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
                <StarIcon;
                  key={star}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  className={cn(;
                    "h-4 w-4";
                    star <= Math.round(rating);
                      ? "text-zion-cyan fill-zion-cyan";
                      : "text-zion-slate-light";
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
                <StarIcon
                  key={star}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  className={cn(
=======
        </div>;"
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>;"
        <p className="text-zion-slate mb-4 flex-grow line-clamp-2">{description}</p>;

        {/* Rating */}
        {rating > 0 && (;"
          <div className="flex items-center gap-1 mb-4">;"
            <div className="flex">;
              {[1, 2, 3, 4, 5].map((star) => (;


                <StarIcon;
                  key={star}

                  className={cn("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    "h-4 w-4", 
                    star <= Math && Math.round(rating) "
                      ? "text-zion-cyan fill-zion-cyan" 

<<<<<<< HEAD
=======
"
                      : "text-zion-slate-light"



"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    "h-4 w-4", 
                    star <= Math.round(rating) "
                      ? "text-zion-cyan fill-zion-cyan" "
                      : "text-zion-slate-light"

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
                      : "text-zion-slate-light"
                <StarIcon ;
                  key={star}
                  className={cn(;
                    "h-4 w-4", ;
                    star <= Math.round(rating) ;
                      ? "text-zion-cyan fill-zion-cyan" ;
                      :"text-zion-slate-light";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
                      : "text-zion-slate-light"
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

"
                      : "text-zion-slate-light"

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  )}
                />;
              ))}
            </div>;"
            <span className="text-sm text-zion-slate-light ml-1">;
              ({reviewCount});
            </span>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD
        )}

                {tag}
<<<<<<< HEAD
=======



<<<<<<< HEAD
<<<<<<< HEAD
=======
              </Badge>;
            ))}
          </div>;
=======
              </Badge>;
            ))}
          </div>;
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              </Badge>
            ))}
          </div>
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        )}
              </Badge>;
            ))}
          </div>;
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======

"
        <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">;
          Request Quote;
        </Button>;

              </Badge>;
            ))}
          </div>;



>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        )}
        "
        <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
          Request Quote;
        </Button>
        {author && ("
          <div className="flex items-center mt-4 pt-4 border-t border-zion-blue-light">
            {authorImage ? ("
              <img src={authorImage} alt={author} className="h-8 w-8 rounded-full mr-2" />
            ) : ("
              <div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2 flex items-center justify-center text-zion-purple">
                {author.charAt(0)}
              </div>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

        {author && (;"
          <div className="flex items-center mt-4 pt-4 border-t border-zion-blue-light">;
            {authorImage ? (;"
              <img src={authorImage} alt={author} className="h-8 w-8 rounded-full mr-2" />;

<<<<<<< HEAD
=======
            ) :(;
              <div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2 flex items-center justify-center text-zion-purple">;                {author.charAt(0)}
              </div>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            )}
=======


            )}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <span className="text-sm text-zion-slate-light">{author}</span>;
          </div>;
        )}


<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
      </div>;
    </div>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  review_count?: number;
=======
        )}  review_count?: number;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        )}  review_count?: number;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  class_name?: string;
}
export /**;
 * ListingScoreCard - Function description;
 */
function ListingScoreCard() {}
  return (
    <div className={cn ("
      "flex flex - col overflow - hidden rounded - lg border border - zion - blue - light bg - zion - blue - dark hover: border - zion - purple / 50 transition - all duration - 300 group",
      class_name)}>;
<<<<<<< HEAD
      {image && (
        <div className="h - 48 w - full overflow-hidden">;
          <img;
            src={image}
            alt={title}
            className="h - full w - full object - cover transition - transform duration - 300 group - hover:scale-105";
          />;
        </div>)}
      <div className="flex flex - col p - 4 flex-grow">;
        <div className="mb - 2 flex items - center justify-between">;
          <Badge variant="secondary" className="bg - zion - purple / 20 text - zion - cyan hover:bg - zion-purple / 30">;
            {category}
          </Badge>;
          {ai_score > 0 && (
            <div className="flex items - center px - 2 py - 1 bg - zion - cyan / 10 rounded text - zion - cyan text-xs">;
              <span className="font - medium mr-1">AI Match:</span>;
              <span>{ai_score}%</span>;
            </div>)}
        </div>;
        <h3 className="text - xl font - bold mb - 2 text - white group - hover:text - zion - purple transition-colors">{title}</h3>;
        <p className="text - zion - slate mb - 4 flex - grow line - clamp-2">{description}</p>;
        {/* Rating */}
        {rating > 0 && (
          <div className="flex items - center gap - 1 mb-4">;
=======
      {image && ("
        <div className="h - 48 w - full overflow - hidden">;
          <img;
            src={image}
            alt={title}"
            className="h - full w - full object - cover transition - transform duration - 300 group - hover:scale - 105";
          />;
        </div>)}"
      <div className="flex flex - col p - 4 flex - grow">;"
        <div className="mb - 2 flex items - center justify - between">;"
          <Badge variant="secondary" className="bg - zion - purple / 20 text - zion - cyan hover:bg - zion - purple / 30">;
            {category}
          </Badge>;
          {ai_score > 0 && ("
            <div className="flex items - center px - 2 py - 1 bg - zion - cyan / 10 rounded text - zion - cyan text - xs">;"
              <span className="font - medium mr - 1">AI Match:</span>;
              <span>{ai_score}%</span>;
            </div>)}
        </div>;"
        <h3 className="text - xl font - bold mb - 2 text - white group - hover:text - zion - purple transition - colors">{title}</h3>;"
        <p className="text - zion - slate mb - 4 flex - grow line - clamp - 2">{description}</p>;
        {/* Rating */}
        {rating > 0 && ("
          <div className="flex items - center gap - 1 mb - 4">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
            </div>;
            <span className="text - sm text - zion - slate - light ml-1">;
              ({review_count});
            </span>;
          </div>)}
        {tags && tags.length > 0 && (
          <div className="flex flex - wrap gap - 2 mb-4">;
            {tags.map ((tag, i) => (
              <Badge key={i} variant="outline" className="border - zion - slate - dark text - zion - slate-light">;
                {tag}
              </Badge>))}
          </div>)}
        <Button className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text-white">;
          Request Quote;
        </Button>;
        {author && (
          <div className="flex items - center mt - 4 pt - 4 border - t border - zion - blue-light">;
            {author_image ? (
              <img src={author_image} alt={author} className="h - 8 w - 8 rounded - full mr-2" />) : (
              <div className="h - 8 w - 8 rounded - full bg - zion - purple / 20 mr - 2 flex items - center justify - center text - zion-purple">;
                {author.char_at (0)}
              </div>)}
            <span className="text - sm text - zion - slate-light">{author}</span>;
=======
            </div>;"
            <span className="text - sm text - zion - slate - light ml - 1">;
              ({review_count});
            </span>;
          </div>)}
        {tags && tags.length > 0 && ("
          <div className="flex flex - wrap gap - 2 mb - 4">;
            {tags.map ((tag, i) => ("
              <Badge key={i} variant="outline" className="border - zion - slate - dark text - zion - slate - light">;
                {tag}
              </Badge>))}
          </div>)}"
        <Button className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white">;
          Request Quote;
        </Button>;
        {author && ("
          <div className="flex items - center mt - 4 pt - 4 border - t border - zion - blue - light">;
            {author_image ? ("
              <img src={author_image} alt={author} className="h - 8 w - 8 rounded - full mr - 2" />) : ("
              <div className="h - 8 w - 8 rounded - full bg - zion - purple / 20 mr - 2 flex items - center justify - center text - zion - purple">;
                {author.char_at (0)}
              </div>)}"
            <span className="text - sm text - zion - slate - light">{author}</span>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          </div>)}
      </div>;
    </div>);
<<<<<<< HEAD
<<<<<<< HEAD
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
            )}
            <span className="text-sm text-zion-slate-light">{author}</span>
          </div>
        )}
      </div>
    </div>
  )
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
