
import Image from 'next/image'; // Import next/image
import React, { useState } from 'react'; // Import useStateimport Image from 'next/image'; // Import next/image
import React, { useState } from 'react'; // Import useState
import { Star } from 'lucide-react'
interface ListingScoreCardProps {
  title: string;
  description: string;
  image?: string;
  category: string;
  tags?: string[];
  author?: string;

export function ListingScoreCard({

import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { StarIcon } from 'lucide-react'
import Image from 'next/image', // Import next/image
import React, { useState } from 'react', // Import useState


export function ListingScoreCard({
  title,
  description,
  image,
  category,


      {image && !mainImageError && (
        <div className="h-48 w-full overflow-hidden relative"> {/* Added relative for Image layout fill */}
          <Image

=======

            src={image} 
            alt={title} 
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            onError={() => setMainImageError(true)}
            priority={false}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // General sizes
          />



>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        </div>
      )}
      {(!image || mainImageError) && ( // Fallback if no image or error
        <div className="h-48 w-full overflow-hidden bg-zion-blue-light/10 flex items-center justify-center">
          <span className="text-zion-slate-light text-sm">No Image</span>
        </div>
      )}

      <div className="flex flex-col p-4 flex-grow">
        <div className="mb-2 flex items-center justify-between">
          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">
            {category}
          </Badge>
          {aiScore === undefined || aiScore === null ? (
            <div className="text-xs italic text-zion-slate-light">Beta – simulated results</div>

              ))}
            </div>;
            <span className='text-sm text-zion-slate-light ml-1'>;
              ({reviewCount});
            </span>;
          </div>;
        )}

          <div className='flex flex-wrap gap-2 mb-4'>
            {tags.map((tag, i) => (
              <Badge
                key={i}
                variant='outline'
                className='border-zion-slate-dark text-zion-slate-light'
              >                {tag}
              </Badge>
            ))}
          </div>
        )}
        <Button className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white'>
          Request Quote
        </Button>

        {author && (
          <div className='flex items-center mt-4 pt-4 border-t border-zion-blue-light'>
            {authorImage && !authorImageError ? (
              <div className='relative h-8 w-8 rounded-full mr-2 overflow-hidden'>

        <Button className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white'>;
          Request Quote;
        </Button>;

        {author && (;
          <div className='flex items-center mt-4 pt-4 border-t border-zion-blue-light'>;
            {authorImage && !authorImageError ? (;
              <div className='relative h-8 w-8 rounded-full mr-2 overflow-hidden'>;
                  className={cn (
                    'h - 4 w - 4',
                    star <= Math.round (rating);
                      ? 'text - zion - cyan fill - zion - cyan';
                      : 'text - zion - slate - light')}                />))}
            </div>;
            <span className='text - sm text - zion - slate - light ml - 1'>;
              ({review_count});
            </span>;
          </div>)}
        {tags && tags.length > 0 && (
          <div className='flex flex - wrap gap - 2 mb - 4'>;
            {tags.map ((tag, i) => (
              <Badge;
                key={i}
                variant='outline';
                className='border - zion - slate - dark text - zion - slate - light';
              >                {tag}
              </Badge>))}
          </div>)}
        <Button className='w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white'>;
          Request Quote;
        </Button>;
        {author && (
          <div className='flex items - center mt - 4 pt - 4 border - t border - zion - blue - light'>;
            {author_image && !authorImageError ? (
              <div className='relative h - 8 w - 8 rounded - full mr - 2 overflow - hidden'>;
                {' '}
                {/* Added relative and overflow - hidden */}
                <Image;
                  src={author_image}
                  alt={author}

                {author.charAt(0)}
              </div>
            )}

          </div>
        )}
      </div>;
    </div>;
  );
<<<<<<< HEAD
