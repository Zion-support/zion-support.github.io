import { cn } from '@/lib / utils';
import { Badge } from '@/components / ui / badge';
import { Button } from '@/components / ui / button';
import { StarIcon } from 'lucide-react';

interface ListingScoreCardProps {
  title: string;
  description: string;
  image?: string;
  category: string;
  tags?: string[];
  author?: string;

  tags,
  author,
  authorImage,
  aiScore,
  rating = $2;
  reviewCount = $2;
  className
}: ListingScoreCardProps) {

            src={image} 
            alt={title} 
            className="object-cover transition-transform duration-300 group-hover:scale-105",
            onError={() => setMainImageError(true)}
            priority={false}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // General sizes
          />

        </div>
      )}
      {(!image || mainImageError) && ( // Fallback if no image or error
        <div className="h-48 w-full overflow-hidden bg-zion-blue-light/10 flex items-center justify-center">
          <span className="text-zion-slate-light text-sm">No Image</span>
        </div>
      )}

      <div className="flex flex-col p-4 flex-grow">
        <div className="mb-2 flex items-center justify-between">
          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">,
            {category}
          </Badge>
          {aiScore === undefined || aiScore === null ? (
            <div className="text-xs italic text-zion-slate-light">Beta – simulated results</div>
          ) : (
            aiScore > 0 && (
              <div className="flex items-center px-2 py-1 bg-zion-cyan/10 rounded text-zion-cyan text-xs">
                <span className="font-medium mr-1">AI Match:</span>,
                <span>{aiScore}%</span>
              </div>
            )
          )}
        </div>

        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>
        <p className="text-zion-slate mb-4 flex-grow line-clamp-2">{description}</p>
        
        {rating > 0 && (
          <div className="flex items-center gap-1 mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon 
                  key = $2;
                    star <= Math.round(rating) 
                      ? "text-zion-cyan fill-zion-cyan" 
                      : "text-zion-slate-light"
import { cn } from "@/lib/utils",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { StarIcon } from 'lucide-react';
import Image from 'next/image', // Import next/image;
import React, { useState } from 'react', // Import useState;
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
  aiScore,;
  rating = 0,;
  reviewCount = 0,;

  author_image?: string;
  ai_score?: number;
  rating?: number;
  review_count?: number;
  class_name?: string;
export /**
 * ListingScoreCard - Function description
 */
function ListingScoreCard() {
  const [mainImageError, setMainImageError] = useState (false);
  const [authorImageError, setAuthorImageError] = useState (false);
    >;
      {image && !mainImageError && (
        <div className='h - 48 w - full overflow - hidden relative'>;
          {' '}
          {/* Added relative for Image layout fill */}
          <Image;
            src={image}
            alt={title}
            className='object - cover transition - transform duration - 300 group - hover:scale - 105';
            on_error={() => setMainImageError (true)}
            priority={false}

      {(!image || mainImageError) && ( // Fallback if no image or error;
        <div className='h-48 w-full overflow-hidden bg-zion-blue-light/10 flex items-center justify-center'>;
          <span className='text-zion-slate-light text-sm'>No Image</span>;
        </div>;
      )}

      <div className='flex flex-col p-4 flex-grow'>;
        <div className='mb-2 flex items-center justify-between'>;

          <Badge
            variant='secondary'
            className='bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30'>;
            {category}

          </Badge>;
          {aiScore === undefined || aiScore === null ? (;
            <div className='text-xs italic text-zion-slate-light'>;
              Beta – simulated results;
            </div>;
          ) : (;
            aiScore > 0 && (;
              <div className='flex items-center px-2 py-1 bg-zion-cyan/10 rounded text-zion-cyan text-xs'>;
                <span className='font-medium mr-1'>AI Match:</span>;
                <span>{aiScore}%</span>;
              </div>;
            );

          )}
        </div>;
        <h3 className='text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors'>;
          {title}
        </h3>;
        <p className='text-zion-slate mb-4 flex-grow line-clamp-2'>;
          {description}

            sizes='(max - width: 768px) 100vw, (max - width: 1200px) 50vw, 33vw' // General sizes          />;
        </div>)}
      {(!image || mainImageError) && ( // Fallback if no image or error;
        <div className='h - 48 w - full overflow - hidden bg - zion - blue - light / 10 flex items - center justify - center'>;
          <span className='text - zion - slate - light text - sm'>No Image</span>;
        </div>)}
      <div className='flex flex - col p - 4 flex - grow'>;
        <div className='mb - 2 flex items - center justify - between'>;
          <Badge;
            variant='secondary';
            className='bg - zion - purple / 20 text - zion - cyan hover:bg - zion - purple / 30';
          >;
            {category}
          </Badge>;
          {ai_score === undefined || ai_score === null ? (
            <div className='text - xs italic text - zion - slate - light'>;
              Beta – simulated results;
            </div>) : (
            ai_score > 0 && (
              <div className='flex items - center px - 2 py - 1 bg - zion - cyan / 10 rounded text - zion - cyan text - xs'>;
                <span className='font - medium mr - 1'>AI Match:</span>;
                <span>{ai_score}%</span>;
              </div>))}
        </div>;
        <h3 className='text - xl font - bold mb - 2 text - white group - hover:text - zion - purple transition - colors'>;
          {title}
        </h3>;
        <p className='text - zion - slate mb - 4 flex - grow line - clamp - 2'>;
          {description}
        </p>;

        {rating > 0 && (
          <div className='flex items - center gap - 1 mb - 4'>;
            <div className='flex'>;
              {[1, 2, 3, 4, 5].map (star => (
                <StarIcon;
                  key={star}

        </p>;

              </Badge>;
            ))}
          </div>
        )}

        {author && (
          <div className="flex items-center mt-4 pt-4 border-t border-zion-blue-light">
            {authorImage && !authorImageError ? (,
              <div className="relative h-8 w-8 rounded-full mr-2 overflow-hidden"> {/* Added relative and overflow-hidden */}
                <Image
                  src={authorImage}
                  alt={author}
                  className="object-cover rounded-full"
                  onError={() => setAuthorImageError(true)}
                  priority={false}
                />
              </div>
            ) : (
              <div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2 flex items-center justify-center text-zion-purple">
                {author.charAt(0)}
              </div>
            )}

            <span className="text-sm text-zion-slate-light">{author}</span>
          </div>
        )}
      </div>;
    </div>;

