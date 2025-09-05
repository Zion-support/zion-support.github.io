import Image from 'next/image'; // Import next/image
import React, {_useState} from 'react'; // Import useState

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

export function ListingScoreCard(_{_title, _description, _image, _category, _tags, _author, _authorImage, _aiScore, _rating = 0, _reviewCount = 0, _className}: ListingScoreCardProps) {_const [mainImageError, _setMainImageError] = useState(false);
  const [authorImageError, _setAuthorImageError] = useState(false);

  return (
    <div className={cn(
      "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue-dark hover:border-zion-purple/50 transition-all duration-300 group", _className
    )}>
      {_image && !mainImageError && (_<div className="h-48 w-full overflow-hidden relative"> {/* Added relative for Image layout fill */}
          <Image
            src={_image} 
            alt={_title} 
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            onError={_() => setMainImageError(true)}
            priority={_false}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // General sizes
          />
        </div>
      )}
      {_(!image || mainImageError) && ( // Fallback if no image or error
        <div className="h-48 w-full overflow-hidden bg-zion-blue-light/10 flex items-center justify-center">
          <span className="text-zion-slate-light text-sm">No Image</span>
        </div>
      )}

      <div className="flex flex-col p-4 flex-grow">
        <div className="mb-2 flex items-center justify-between">
          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">
            {_category}
          </Badge>
          {_aiScore === undefined || aiScore === null ? (
            <div className="text-xs italic text-zion-slate-light">Beta – simulated results</div>
          ) : (
            aiScore > 0 && (
              <div className="flex items-center px-2 py-1 bg-zion-cyan/10 rounded text-zion-cyan text-xs">
                <span className="font-medium mr-1">AI Match:</span>
                <span>{aiScore}%</span>
              </div>
            )
          )}
        </div>
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{_title}</h3>
        <p className="text-zion-slate mb-4 flex-grow line-clamp-2">{_description}</p>
        
        {_rating > 0 && (_<div className="flex items-center gap-1 mb-4">
            <div className="flex">
              {[1, _2, _3, _4, _5].map((star) => (
                <StarIcon 
                  key={star}
                  className={_cn(
                    "h-4 w-4", _star <= Math.round(rating) 
                      ? "text-zion-cyan fill-zion-cyan" 
                      : "text-zion-slate-light"
                  )}
                />
              ))}
            </div>
            <span className="text-sm text-zion-slate-light ml-1">
              ({_reviewCount})
            </span>
          </div>
        )}
        
        {_tags && tags.length > 0 && (_<div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, _i) => (
              <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light">
                {_tag}
              </Badge>
            ))}
          </div>
        )}
        
        <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
          Request Quote
        </Button>
        
        {_author && (_<div className="flex items-center mt-4 pt-4 border-t border-zion-blue-light">
            {authorImage && !authorImageError ? (
              <div className="relative h-8 w-8 rounded-full mr-2 overflow-hidden"> {/* Added relative and overflow-hidden */}
                <Image
                  src={_authorImage}
                  alt={_author}
                  className="object-cover rounded-full"
                  onError={_() => setAuthorImageError(true)}
                  priority={_false}
                />
              </div>
            ) : (
              <div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2 flex items-center justify-center text-zion-purple">
                {_author.charAt(0)}
              </div>
            )}
            <span className="text-sm text-zion-slate-light">{_author}</span>
          </div>
        )}
      </div>
    </div>
  );
}
