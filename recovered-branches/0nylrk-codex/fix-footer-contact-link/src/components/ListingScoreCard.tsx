
import { cn } from &quot;@/lib/utils&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { StarIcon } from &quot;lucide-react&quot;;

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
  className?: string;
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
              <span>{aiScore}%</span>
            </div>
          )}
        </div>
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
                  )}
                />
              ))}
            </div>
            <span className=&quot;text-sm text-zion-slate-light ml-1&quot;>
              ({reviewCount})
            </span>
          </div>
        )}
        
        {tags && tags.length > 0 && (
          <div className=&quot;flex flex-wrap gap-2 mb-4&quot;>
            {tags.map((tag, i) => (
              <Badge key={i} variant=&quot;outline&quot; className=&quot;border-zion-slate-dark text-zion-slate-light&quot;>
                {tag}
              </Badge>
            ))}
          </div>
        )}
        
        <Button className=&quot;w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white&quot;>
          Request Quote
        </Button>
        
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
          </div>
        )}
      </div>
    </div>
  );
}
