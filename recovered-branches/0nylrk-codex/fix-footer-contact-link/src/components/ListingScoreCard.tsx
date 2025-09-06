

<<<<<<< HEAD



import {cn} from "@/lib/utils";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {StarIcon} from "lucide-react";
interface ListingScoreCardProps {;
  title: string,;
  description: string,;
interface ListingScoreCardProps {
=======
import {cn} from "@/lib/utils";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {StarIcon} from "lucide-react";interface ListingScoreCardProps {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  title: string,
  description: string,

  image?: string;
  category: string,;
  image?: string;
  category: string,;
<<<<<<< HEAD
  tags?: string[];
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  author?: string;
  author_image?: string;
  ai_score?: number;
  rating?: number;
<<<<<<< HEAD


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

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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


export function ListingScoreCard({ 
  title,

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
    <div className={cn(
      "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue-dark hover:border-zion-purple/50 transition-all duration-300 group",

      className
    )}>
      {image && (
        <div className="h-48 w-full overflow-hidden">
          <img
            src={image}
            alt={title}

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

            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
=======
    <div className={cn(            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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

        </div>;
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>;
        <p className="text-zion-slate mb-4 flex-grow line-clamp-2">{description}</p>;

import { cn } from "@/lib/utils",;
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { StarIcon } from "lucide-react",;
interface ListingScoreCardProps {;
<<<<<<< HEAD
  title: string,;
=======
  title: string,,
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
        </div>;
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>;
        <p className="text-zion-slate mb-4 flex-grow line-clamp-2">{description}</p>;
        ;
        </div>;
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>;
        <p className="text-zion-slate mb-4 flex-grow line-clamp-2">{description}</p>;
<<<<<<< HEAD

        {/* Rating */}
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        {rating > 0 && (;
          <div className="flex items-center gap-1 mb-4">;
            <div className="flex">;
              {[1, 2, 3, 4, 5].map((star) => (;
                <StarIcon
<<<<<<< HEAD
                  key={star}
                <StarIcon
=======
                  key={star}                <StarIcon
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                  key={star}
                  className={cn(
                    "h-4 w-4", 
                    star <= Math && Math.round(rating) 
                      ? "text-zion-cyan fill-zion-cyan" 

<<<<<<< HEAD
                      : "text-zion-slate-light"

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                    "h-4 w-4", 
                    star <= Math.round(rating) 
                      ? "text-zion-cyan fill-zion-cyan" 
                      : "text-zion-slate-light"

<<<<<<< HEAD
                      : "text-zion-slate-light"
                <StarIcon ;
                  key={star}
                  className={cn(;
                    "h-4 w-4", ;
                    star <= Math.round(rating) ;
                      ? "text-zion-cyan fill-zion-cyan" ;
                      :"text-zion-slate-light";
                      : "text-zion-slate-light"
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                  )}
                />;
              ))}
            </div>;
            <span className="text-sm text-zion-slate-light ml-1">;
              ({reviewCount});
            </span>;
          </div>;
<<<<<<< HEAD
        )}


        {tags && tags.length > 0 && (;
          <div className="flex flex-wrap gap-2 mb-4">;
            {tags && tags.map((tag, i) => (;
              <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light">;

                {tag}



        )}
              </Badge>;
            ))}
          </div>;


        <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">;
          Request Quote;
        </Button>;

              </Badge>;
            ))}
          </div>;



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

        {author && (;
          <div className="flex items-center mt-4 pt-4 border-t border-zion-blue-light">;
            {authorImage ? (;
              <img src={authorImage} alt={author} className="h-8 w-8 rounded-full mr-2" />;
            ) : (;
              <div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2 flex items-center justify-center text-zion-purple">;
                {author && author.charAt(0)}
              </div>;

            )}
            <span className="text-sm text-zion-slate-light">{author}</span>;
          </div>;
        )}

      </div>;
    </div>;
  );
}

  review_count?: number;
=======
        )}  review_count?: number;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
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
=======
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
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
            <span className="text - sm text - zion - slate - light ml - 1">;
=======
            <span className="text - sm text - zion - slate - light ml-1">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
              ({review_count});
            </span>;
          </div>)}
        {tags && tags.length > 0 && (
<<<<<<< HEAD
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
=======
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
          </div>)}
      </div>;
    </div>);
}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
