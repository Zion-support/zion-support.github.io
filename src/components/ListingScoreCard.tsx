<<<<<<< HEAD
<<<<<<< HEAD
import { cn } from "@/lib/utils",
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StarIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button';
import { StarIcon } from 'lucide-react';
import Image from 'next/image'; // Import next/image
import React, { useState } from 'react'; // Import useStateimport Image from 'next/image'; // Import next/image
import React, { useState } from 'react'; // Import useState
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { StarIcon } from 'lucide-react';
import Image from 'next/image'; // Import next/image;
import React, { useState, useMemo } from 'react'; // Import useStateimport Image from 'next/image'; // Import next/image;
import React, { useState, useMemo } from 'react'; // Import useState;
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
interface ListingScoreCardProps {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { cn } from '@/lib / utils';
import { Badge } from '@/components / ui / badge';
import { Button } from '@/components / ui / button';
import { StarIcon } from 'lucide-react';
import Image from 'next / image'; // Import next / image;
import React, { useState } from 'react'; // Import useStateimport Image from 'next / image'; // Import next / image;
import React, { useState } from 'react'; // Import useState;
import { Star } from 'lucide-react';
interface ListingScoreCardProps {
  title: string;
  description: string;
  image?: string;
  category: string;
  tags?: string[];
  author?: string;
<<<<<<< HEAD
<<<<<<< HEAD
  authorImage?: string;
  aiScore?: number;
  rating?: number;
  reviewCount?: number;
  className?: string

export function ListingScoreCard(): any ({;

export function ListingScoreCard({
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StarIcon } from 'lucide-react'
  title
  description
  image
  category
  tags
  author
  authorImage
  aiScore
  rating = 0
  reviewCount = 0
  className
}: ListingScoreCardProps) {
  const [mainImageError, setMainImageError] = useState(false)
  const [authorImageError, setAuthorImageError] = useState(false)
    >
  title,
  description,
  image,
  category,
import { cn } from "@/lib/utils",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export function ListingScoreCard(): any ({;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  tags,
  author,
  authorImage,
  aiScore,
  rating = 0,
  reviewCount = 0,
  className
}: ListingScoreCardProps) {
<<<<<<< HEAD
<<<<<<< HEAD
  const [mainImageError, setMainImageError] = useState(false)
  const [authorImageError, setAuthorImageError] = useState(false)
    >
  const [mainImageError, setMainImageError] = useState(false)
  const [authorImageError, setAuthorImageError] = useState(false)
    >
  const [mainImageError, setMainImageError] = useState(false),
  const [authorImageError, setAuthorImageError] = useState(false),

  return (
    <div className={cn(
      "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue-dark hover:border-zion-purple/50 transition-all duration-300 group",
      className
    )}>
        <div className="h-48 w-full overflow-hidden relative"> {/* Added relative for Image layout fill */}
          <Image
      {image && !mainImageError && (
        <div className="h-48 w-full overflow-hidden relative"> {/* Added relative for Image layout fill */}
          <Image
            src={image}
            alt={title}
            className='object-cover transition-transform duration-300 group-hover:scale-105'
            onError={() => setMainImageError(true)}
            priority={false}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' // General sizes          />
        </div>
      )}
      {(!image |mainImageError) && ( // Fallback if no image or error
        <div className='h-48 w-full overflow-hidden bg-zion-blue-light/10 flex items-center justify-center'>
          <span className='text-zion-slate-light text-sm'>No Image</span>
        </div>
      )}
      <div className='flex flex-col p-4 flex-grow'>
        <div className='mb-2 flex items-center justify-between'>
          <Badge
            variant='secondary'
            className='bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30'
          >
            {category}
          </Badge>
          {aiScore === undefined |aiScore === null ? (
            <div className='text-xs italic text-zion-slate-light'>
              Beta – simulated results
            </div>

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


      {image && !mainImageError && (
        <div className="h-48 w-full overflow-hidden relative"> {/* Added relative for Image layout fill */}
          <Image


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            src={image} 
            alt={title} 
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            onError={() => setMainImageError(true)}
            priority={false}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // General sizes
          />
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
          ) : (
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          ) : (
            aiScore > 0 && (
              <div className="flex items-center px-2 py-1 bg-zion-cyan/10 rounded text-zion-cyan text-xs">
                <span className="font-medium mr-1">AI Match:</span>
                <span>{aiScore}%</span>
              </div>
            )
          )}
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>
        <p className="text-zion-slate mb-4 flex-grow line-clamp-2">{description}</p>
        
        {rating > 0 && (
          <div className="flex items-center gap-1 mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon 
                  key={star}
                  className={cn(
                    "h-4 w-4", 
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
<<<<<<< HEAD
export function ListingScoreCard(): any ({;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  title,;
  description,;
  image,;
  category,;
<<<<<<< HEAD
import { cn } from "@/lib/utils",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { StarIcon } from 'lucide-react';
import Image from 'next/image', // Import next/image;
import React, { useState } from 'react', // Import useState;
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
  title, ;
  description, ;
  image, ;
  category, ;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  tags,;
  author,;
  authorImage,;
  aiScore,;
  rating = 0,;
  reviewCount = 0,;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  className,;
}: ListingScoreCardProps) {;
  const [mainImageError, setMainImageError] = useState(false);
  const [authorImageError, setAuthorImageError] = useState(false);


    >;
      {image && !mainImageError && (;
        <div className='h-48 w-full overflow-hidden relative'>;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {(!image || mainImageError) && ( // Fallback if no image or error;
        <div className='h-48 w-full overflow-hidden bg-zion-blue-light/10 flex items-center justify-center'>;
          <span className='text-zion-slate-light text-sm'>No Image</span>;
        </div>;
      )}
<<<<<<< HEAD
<<<<<<< HEAD
      <div className='flex flex-col p-4 flex-grow'>;
        <div className='mb-2 flex items-center justify-between'>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      <div className='flex flex-col p-4 flex-grow'>;
        <div className='mb-2 flex items-center justify-between'>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <Badge
            variant='secondary'
            className='bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30'>;
            {category}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </Badge>;
          {aiScore === undefined || aiScore === null ? (;
            <div className='text-xs italic text-zion-slate-light'>;
              Beta – simulated results;
            </div>;
          ) : (;
            aiScore > 0 && (;
              <div className='flex items-center px-2 py-1 bg-zion-cyan/10 rounded text-zion-cyan text-xs'>;
                <span className='font-medium mr-1'>AI Match:</span>;
<<<<<<< HEAD
<<<<<<< HEAD
  className;
} ListingScoreCardProps) {;
  const [mainImageError, setMainImageError] = useState(false),;
  const [authorImageError, setAuthorImageError] = useState(false),;
;
  return (;
    <div className={cn(;
      "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue-dark hover:border-zion-purple/50 transition-all duration-300 group",;
  className;
}: ListingScoreCardProps) {;
  const [mainImageError, setMainImageError] = useState(false),;
  const [authorImageError, setAuthorImageError] = useState(false),;
  return (;
    <div className={cn(;
      "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue-dark hover:border-zion-purple/50 transition-all duration-300 group";
      className;
    )}>;
      {image && !mainImageError && (;
        <div className="h-48 w-full overflow-hidden relative"> {/* Added relative for Image layout fill */}
          <Image;
            src={image} ;
            alt={title} ;
            className="object-cover transition-transform duration-300 group-hover:scale-105";
            onError={() => setMainImageError(true)}
            priority={false}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // General sizes;
          />;
        </div>;
      )}
      {(!image || mainImageError) && ( // Fallback if no image or error;
        <div className="h-48 w-full overflow-hidden bg-zion-blue-light/10 flex items-center justify-center">;
          <span className="text-zion-slate-light text-sm">No Image</span>;
        </div>;
      )}
;
      <div className="flex flex-col p-4 flex-grow">;
        <div className="mb-2 flex items-center justify-between">;
          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">;
            {category}
          </Badge>;
          {aiScore === undefined || aiScore === null ? (;
            <div className="text-xs italic text-zion-slate-light">Beta – simulated results</div>;
          )}
        </div>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {rating > 0 && (
          <div className='flex items - center gap - 1 mb - 4'>;
            <div className='flex'>;
              {[1, 2, 3, 4, 5].map (star => (
                <StarIcon;
                  key={star}
<<<<<<< HEAD
        </p>;
=======

        </p>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {rating > 0 && (;
          <div className='flex items-center gap-1 mb-4'>;
            <div className='flex'>;
              {[1, 2, 3, 4, 5].map(star => (;
                <StarIcon
                  key={star}
                  className={cn(
                    'h-4 w-4',
                    star <= Math && Math.round(rating)
                      ? 'text-zion-cyan fill-zion-cyan'
                      : 'text-zion-slate-light'
                  )}                />;
<<<<<<< HEAD
<<<<<<< HEAD
          ) : (;
            aiScore > 0 && (;
              <div className="flex items-center px-2 py-1 bg-zion-cyan/10 rounded text-zion-cyan text-xs">;
                <span className="font-medium mr-1">AI Match:</span>;
                <span>{aiScore}%</span>;
              </div>;
            );
          )}
        </div>;
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>;
        <p className="text-zion-slate mb-4 flex-grow line-clamp-2">{description}</p>;
        {rating > 0 && (;
          <div className="flex items-center gap-1 mb-4">;
            <div className="flex">;
              {[1, 2, 3, 4, 5].map((star) => (;
                <StarIcon;
                  key={star}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  className={cn(;
                    "h-4 w-4";
                    star <= Math.round(rating);
                      ? "text-zion-cyan fill-zion-cyan";
                      : "text-zion-slate-light";
                  )}
                />;
<<<<<<< HEAD
<<<<<<< HEAD
              ))}
            </div>
            <span className="text-sm text-zion-slate-light ml-1">
              ({reviewCount})
            </span>
          </div>
        )}
        {tags && tags.length > 0 && (
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
        
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
              <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light">
                {tag}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              ))}
            </div>;
            <span className='text-sm text-zion-slate-light ml-1'>;
<<<<<<< HEAD
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>;
        <p className="text-zion-slate mb-4 flex-grow line-clamp-2">{description}</p>;
        ;
        {rating > 0 && (;
          <div className="flex items-center gap-1 mb-4">;
            <div className="flex">;
              {[1, 2, 3, 4, 5].map((star) => (;
                <StarIcon ;
                  key={star}
                  className={cn(;
                    "h-4 w-4", ;
                    star <= Math.round(rating) ;
                      ? "text-zion-cyan fill-zion-cyan" ;
                      :"text-zion-slate-light";
                  )}
                />;
              ))}
            </div>;
            <span className="text-sm text-zion-slate-light ml-1">;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              ({reviewCount});
            </span>;
          </div>;
        )}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


        {tags && tags.length > 0 && (;
          <div className='flex flex-wrap gap-2 mb-4'>;
            {tags && tags.map((tag, i) => (;

              <Badge
                key={i}
                variant='outline'
                className='border-zion-slate-dark text-zion-slate-light'>                {tag}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </Badge>;
            ))}
          </div>;
        )}
<<<<<<< HEAD
<<<<<<< HEAD
        
        <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
          Request Quote
        </Button>
        
        
        {author && (
          <div className="flex items-center mt-4 pt-4 border-t border-zion-blue-light">
            {authorImage && !authorImageError ? (
              <div className="relative h-8 w-8 rounded-full mr-2 overflow-hidden"> {/* Added relative and overflow-hidden */}
                <Image
                  src={authorImage}
                  alt={author}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




        {author && (
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className='flex items-center mt-4 pt-4 border-t border-zion-blue-light'>
            {authorImage && !authorImageError ? (
              <div className='relative h-8 w-8 rounded-full mr-2 overflow-hidden'>

<<<<<<< HEAD
<<<<<<< HEAD
                {author.charAt(0)}
              </div>
            )}

            <span className="text-sm text-zion-slate-light">{author}</span>

          </div>
                  className='object-cover rounded-full'
                  onError={() => setAuthorImageError(true)}
                  priority={false}                />
              </div>
            ) : (
              <div className='h-8 w-8 rounded-full bg-zion-purple/20 mr-2 flex items-center justify-center text-zion-purple'>
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
            <span className='text-sm text-zion-slate-light'>{author}</span>
          </div>
        )}
      </div>
    </div>
  )
}
            <span className="text-sm text-zion-slate-light">{author}</span>
          </div>
        )}
      </div>;
    </div>;
  );
};
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <Button className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white'>;
          Request Quote;
        </Button>;
=======
        <Button className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white'>;
          Request Quote;
        </Button>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </div>;
    </div>;
  );
}

                  className='object - cover rounded - full';
                  on_error={() => setAuthorImageError (true)}
                  priority={false}                />;
              </div>) : (
              <div className='h - 8 w - 8 rounded - full bg - zion - purple / 20 mr - 2 flex items - center justify - center text - zion - purple'>;
                {author.char_at (0)}
              </div>)}
            <span className='text - sm text - zion - slate - light'>{author}</span>;
          </div>)}
      </div>;
    </div>);
}
<<<<<<< HEAD
        ;
        {tags && tags.length > 0 && (;
          <div className="flex flex-wrap gap-2 mb-4">;
            {tags.map((tag, i) => (;
              <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light">;
                {tag}
              </Badge>;            ))}
          </div>;
        )}
        ;
        <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">;
          Request Quote;
        </Button>;
        ;
        {author && (;
          <div className="flex items-center mt-4 pt-4 border-t border-zion-blue-light">;
            {authorImage && !authorImageError ? (;
              <div className="relative h-8 w-8 rounded-full mr-2 overflow-hidden"> {/* Added relative and overflow-hidden */}
                <Image;
                  src={authorImage}
                  alt={author}
                  className="object-cover rounded-full";
                  onError={() => setAuthorImageError(true)}
                  priority={false}
                />;
              </div>;
            ) :(;
              <div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2 flex items-center justify-center text-zion-purple">;                {author.charAt(0)}
              </div>;
            )}
            <span className="text-sm text-zion-slate-light">{author}</span>;
          </div>;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
<<<<<<< HEAD
  ),;}
 import { ;
  {;
  {;
  StarIcon ;
 } from "lucide-react";
import {;
  {';
  Image from 'next/image',  //Import next/image import React, {;
  useState ';
}from 'react', //Import useState interface ListingScoreCardProps {;
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
className?: string ;
}export function ListingScoreCard ({;
  title;
description;
image;
category;
tags;
author;
authorImage;
aiScore;
rating = 0;
reviewCount = 0;
className ;
}: ListingScoreCardProps) {;
  const [mainImageError,  setMainImageError] = useState (false);
const [authorImageError, setAuthorImageError] = useState (false);
return (<div className= {;
  cn ("flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue-dark hover:border-zion-purple/50 transition-all duration-300 group";
className) ;
}> {";
  image && !mainImageError && (<div className="h-48 w-full overflow-hidden relative" > {;
  /* Added relative for Image layout fill */ ;
}<Image src= {;
  image ;
}alt= {;
  title ";
}className="object-cover transition-transform duration-300 group-hover:scale-105" onError= {;
  () => setMainImageError (true) ;
}priority= {;
  false ";
}sizes=" (max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" //General sizes /> </div>) ;
}{";
  (!image || mainImageError) && (//Fallback if no image or error <div className="h-48 w-full overflow-hidden bg-zion-blue-light/10 flex items-center justify-center" > <span className="text-zion-slate-light text-sm" >No Image</span> </div>) ";
}<div className="flex flex-col p-4 flex-grow" > <div className="mb-2 flex items-center justify-between" > <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30" > {;
  category ;
}</Badge> {";
  aiScore === undefined || aiScore === null ? (<div className="text-xs italic text-zion-slate-light" >Beta – simulated results</div> flex items-center px-2 py-1 bg-zion-cyan/10 rounded text-zion-cyan text-xs"> <span className=" font-medium mr-1">AI Match:</span> <span> {;
  aiScore ;
}%</span> </div>) ) ;
}</div>) ;
}/>) ) ;
}</div> </span> </div>) ;
}</Badge>) ) ;
}</div>) ";
}<Button className=" w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"> Request Quote </Button> {";
  authorImage && !authorImageError ? (<div className=" relative h-8 w-8 rounded-full mr-2 overflow-hidden" > {;
  /* Added relative and overflow-hidden */ ;
}<Image </div>) ;
}</div> </div>) ;
}'"
};
}
}
;
=======
  );

}
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  );
};
}
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
