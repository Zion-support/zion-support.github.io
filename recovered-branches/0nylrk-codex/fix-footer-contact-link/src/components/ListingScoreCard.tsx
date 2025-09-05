
<<<<<<< HEAD
<<<<<<< HEAD
import { cn } from "@/lib/utils",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { StarIcon } from "lucide-react",
=======
import { cn } from &quot;@/lib/utils&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { StarIcon } from &quot;lucide-react&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
      &quot;flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue-dark hover:border-zion-purple/50 transition-all duration-300 group&quot;,
      className
    )}>
      {image && (
        <div className=&quot;h-48 w-full overflow-hidden&quot;>
          <img 
            src={image} 
            alt={title} 
            className=&quot;h-full w-full object-cover transition-transform duration-300 group-hover:scale-105&quot;
          />
        </div>
      )}
      <div className=&quot;flex flex-col p-4 flex-grow&quot;>
        <div className=&quot;mb-2 flex items-center justify-between&quot;>
          <Badge variant=&quot;secondary&quot; className=&quot;bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30&quot;>
            {category}
          </Badge>
          {aiScore > 0 && (
            <div className=&quot;flex items-center px-2 py-1 bg-zion-cyan/10 rounded text-zion-cyan text-xs&quot;>
              <span className=&quot;font-medium mr-1&quot;>AI Match:</span>
=======

interface ListingScoreCardProps {_title: string;
  description: string;
  image?: string;
  category: string;
  tags?: string[];
  author?: string;
  authorImage?: string;
  aiScore?: number;
  rating?: number;
  reviewCount?: number;
  className?: string;}

export function ListingScoreCard(_{_title, _description, _image, _category, _tags, _author, _authorImage, _aiScore = 0, _rating = 0, _reviewCount = 0, _className}: ListingScoreCardProps) {_return (
    <div className={cn(
      "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue-dark hover:border-zion-purple/50 transition-all duration-300 group", _className
    )}>
      {_image && (
        <div className="h-48 w-full overflow-hidden">
          <img 
            src={image} 
            alt={_title} 
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-col p-4 flex-grow">
        <div className="mb-2 flex items-center justify-between">
          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">
            {_category}
          </Badge>
          {_aiScore > 0 && (
            <div className="flex items-center px-2 py-1 bg-zion-cyan/10 rounded text-zion-cyan text-xs">
              <span className="font-medium mr-1">AI Match:</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <span>{aiScore}%</span>
            </div>
          )}
        </div>
<<<<<<< HEAD
        <h3 className=&quot;text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors&quot;>{title}</h3>
        <p className=&quot;text-zion-slate mb-4 flex-grow line-clamp-2&quot;>{description}</p>
        
        {/* Rating */}
        {rating > 0 && (
          <div className=&quot;flex items-center gap-1 mb-4&quot;>
            <div className=&quot;flex&quot;>
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon 
                  key={star}
                  className={cn(
                    &quot;h-4 w-4&quot;, 
                    star <= Math.round(rating) 
                      ? &quot;text-zion-cyan fill-zion-cyan&quot; 
                      : &quot;text-zion-slate-light&quot;
=======
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{_title}</h3>
        <p className="text-zion-slate mb-4 flex-grow line-clamp-2">{_description}</p>
        
        {_/* Rating */}
        {_rating > 0 && (_<div className="flex items-center gap-1 mb-4">
            <div className="flex">
              {[1, _2, _3, _4, _5].map((star) => (
                <StarIcon 
                  key={star}
                  className={_cn(
                    "h-4 w-4", _star <= Math.round(rating) 
                      ? "text-zion-cyan fill-zion-cyan" 
                      : "text-zion-slate-light"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  )}
                />
              ))}
            </div>
<<<<<<< HEAD
            <span className=&quot;text-sm text-zion-slate-light ml-1&quot;>
              ({reviewCount})
=======
            <span className="text-sm text-zion-slate-light ml-1">
              ({_reviewCount})
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </span>
          </div>
        )}
        
<<<<<<< HEAD
        {tags && tags.length > 0 && (
          <div className=&quot;flex flex-wrap gap-2 mb-4&quot;>
            {tags.map((tag, i) => (
              <Badge key={i} variant=&quot;outline&quot; className=&quot;border-zion-slate-dark text-zion-slate-light&quot;>
                {tag}
=======
        {_tags && tags.length > 0 && (_<div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, _i) => (
              <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light">
                {_tag}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </Badge>
            ))}
          </div>
        )}
        
        <Button className=&quot;w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white&quot;>
          Request Quote
        </Button>
        
<<<<<<< HEAD
        {author && (
          <div className=&quot;flex items-center mt-4 pt-4 border-t border-zion-blue-light&quot;>
            {authorImage ? (
              <img src={authorImage} alt={author} className=&quot;h-8 w-8 rounded-full mr-2&quot; />
            ) : (
              <div className=&quot;h-8 w-8 rounded-full bg-zion-purple/20 mr-2 flex items-center justify-center text-zion-purple&quot;>
                {author.charAt(0)}
              </div>
            )}
            <span className=&quot;text-sm text-zion-slate-light&quot;>{author}</span>
=======
        {_author && (
          <div className="flex items-center mt-4 pt-4 border-t border-zion-blue-light">
            {authorImage ? (
              <img src={authorImage} alt={_author} className="h-8 w-8 rounded-full mr-2" />
            ) : (
              <div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2 flex items-center justify-center text-zion-purple">
                {_author.charAt(0)}
              </div>
            )}
            <span className="text-sm text-zion-slate-light">{_author}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </div>
        )}
      </div>
    </div>
  )
}
