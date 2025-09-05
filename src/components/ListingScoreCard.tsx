<<<<<<< HEAD
import { cn } from "@/lib/utils",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
=======
import { cn } from &quot;@/lib/utils&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { StarIcon } from 'lucide-react'
import Image from 'next/image', // Import next/image
import React, { useState } from 'react', // Import useState

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
  aiScore,
  rating = 0,
  reviewCount = 0,
  className
}: ListingScoreCardProps) {
  const [mainImageError, setMainImageError] = useState(false),
  const [authorImageError, setAuthorImageError] = useState(false),

  return (
    <div className={cn(
      &quot;flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue-dark hover:border-zion-purple/50 transition-all duration-300 group&quot;,
      className
    )}>
      {image && !mainImageError && (
        <div className=&quot;h-48 w-full overflow-hidden relative&quot;> {/* Added relative for Image layout fill */}
          <Image
            src={image} 
            alt={title} 
            className=&quot;object-cover transition-transform duration-300 group-hover:scale-105&quot;
            onError={() => setMainImageError(true)}
            priority={false}
            sizes=&quot;(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw&quot; // General sizes
          />
        </div>
      )}
      {(!image || mainImageError) && ( // Fallback if no image or error
        <div className=&quot;h-48 w-full overflow-hidden bg-zion-blue-light/10 flex items-center justify-center&quot;>
          <span className=&quot;text-zion-slate-light text-sm&quot;>No Image</span>
        </div>
      )}

      <div className=&quot;flex flex-col p-4 flex-grow&quot;>
        <div className=&quot;mb-2 flex items-center justify-between&quot;>
          <Badge variant=&quot;secondary&quot; className=&quot;bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30&quot;>
            {category}
          </Badge>
          {aiScore === undefined || aiScore === null ? (
            <div className=&quot;text-xs italic text-zion-slate-light&quot;>Beta – simulated results</div>
          ) : (
            aiScore > 0 && (
              <div className=&quot;flex items-center px-2 py-1 bg-zion-cyan/10 rounded text-zion-cyan text-xs&quot;>
                <span className=&quot;font-medium mr-1&quot;>AI Match:</span>
                <span>{aiScore}%</span>
              </div>
            )
          )}
        </div>
        <h3 className=&quot;text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors&quot;>{title}</h3>
        <p className=&quot;text-zion-slate mb-4 flex-grow line-clamp-2&quot;>{description}</p>
        
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
            {authorImage && !authorImageError ? (
              <div className=&quot;relative h-8 w-8 rounded-full mr-2 overflow-hidden&quot;> {/* Added relative and overflow-hidden */}
                <Image
                  src={authorImage}
                  alt={author}
                  className=&quot;object-cover rounded-full&quot;
                  onError={() => setAuthorImageError(true)}
                  priority={false}
                />
              </div>
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
  )
}
