




interface ListingScoreCardProps {

  title: string,
  description: string,


export function ListingScoreCard(): any ({ ;
  title;

  description, ;
  image, ;
  category, ;
  tags;
  author, ;

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




                <StarIcon
                  key={star}
                  className={cn(






        )}


      </div>;
    </div>;

}

