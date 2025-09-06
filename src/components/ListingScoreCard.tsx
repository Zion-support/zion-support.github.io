
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


export function ListingScoreCard({ 
  title, 
  description, 
  image, 
  category, 
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        </div>
      )}
      {(!image |mainImageError) && ( // Fallback if no image or error
        <div className='h-48 w-full overflow-hidden bg-zion-blue-light/10 flex items-center justify-center'>
          <span className='text-zion-slate-light text-sm'>No Image</span>
        </div>
      )}

      <div className="flex flex-col p-4 flex-grow">
        <div className="mb-2 flex items-center justify-between">
          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">
            {category}
          </Badge>
          {aiScore === undefined || aiScore === null ? (
            <div className="text-xs italic text-zion-slate-light">Beta – simulated results</div>
=======
          ) : (
            aiScore > 0 && (
              <div className="flex items-center px-2 py-1 bg-zion-cyan/10 rounded text-zion-cyan text-xs">
                <span className="font-medium mr-1">AI Match:</span>
                <span>{aiScore}%</span>
              </div>
            )
          )}
        </div>
        <h3 className='text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors'>
          {title}
        </h3>
        <p className='text-zion-slate mb-4 flex-grow line-clamp-2'>
          {description}
        </p>
        {rating > 0 && (
          <div className='flex items-center gap-1 mb-4'>
            <div className='flex'>
              {[1, 2, 3, 4, 5].map(star => (
                <StarIcon
                  key={star}
                  className={cn(
                    'h-4 w-4'
                    star <= Math.round(rating)
                      ? 'text-zion-cyan fill-zion-cyan'
                      : 'text-zion-slate-light'
                  )}                />

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

              ))}
            </div>;
            <span className='text-sm text-zion-slate-light ml-1'>;
              ({reviewCount});
            </span>;
          </div>;
        )}
        {tags && tags.length > 0 && (
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
        
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
              <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light">
                {tag}
            ))}
          </div>
        )}
        <Button className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white'>
          Request Quote
        </Button>

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
