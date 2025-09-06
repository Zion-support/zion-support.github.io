<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/ListingScoreCard.tsx

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { cn } from "@/lib/utils",
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StarIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button';
import { StarIcon } from 'lucide-react';
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import Image from 'next/image'; // Import next/image
import React, { useState } from 'react'; // Import useStateimport Image from 'next/image'; // Import next/image
import React, { useState } from 'react'; // Import useState
import { Star } from 'lucide-react'
<<<<<<< HEAD
========
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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
import { cn } from '@/lib / utils';
import { Badge } from '@/components / ui / badge';
import { Button } from '@/components / ui / button';
import { StarIcon } from 'lucide-react';
import Image from 'next / image'; // Import next / image;
import React, { useState } from 'react'; // Import useStateimport Image from 'next / image'; // Import next / image;
import React, { useState } from 'react'; // Import useState;
import { Star } from 'lucide-react';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ListingScoreCard.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface ListingScoreCardProps {
  title: string;
  description: string;
  image?: string;
  category: string;
  tags?: string[];
  author?: string;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/ListingScoreCard.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  authorImage?: string;
  aiScore?: number;
  rating?: number;
  reviewCount?: number;
  className?: string
=======

export function ListingScoreCard(): any ({;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

export function ListingScoreCard({
<<<<<<< HEAD
<<<<<<< HEAD

=======
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StarIcon } from 'lucide-react'
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  title,
  description,
  image,
  category,
import { cn } from "@/lib/utils",
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { StarIcon } from 'lucide-react'
import Image from 'next/image', // Import next/image
import React, { useState } from 'react', // Import useState

<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

export function ListingScoreCard({ 
  title, 
  description, 
  image, 
  category, 
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  tags,
=======
>>>>>>>   tags,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  tags,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  author,
  authorImage,
  aiScore,
  rating = 0,
  reviewCount = 0,
  className
}: ListingScoreCardProps) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
  const [mainImageError, setMainImageError] = useState(false)
  const [authorImageError, setAuthorImageError] = useState(false)
    >
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
  const [mainImageError, setMainImageError] = useState(false)
  const [authorImageError, setAuthorImageError] = useState(false)
    >
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  const [mainImageError, setMainImageError] = useState(false)
  const [authorImageError, setAuthorImageError] = useState(false)
    >
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const [mainImageError, setMainImageError] = useState(false),
  const [authorImageError, setAuthorImageError] = useState(false),

  return (
    <div className={cn(
      "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue-dark hover:border-zion-purple/50 transition-all duration-300 group",
      className
    )}>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

      {image && !mainImageError && (
        <div className="h-48 w-full overflow-hidden relative"> {/* Added relative for Image layout fill */}
          <Image

<<<<<<< HEAD
=======
>>>>>>>       {image && !mainImageError && (
        <div className="h-48 w-full overflow-hidden relative"> {/* Added relative for Image layout fill */}
          <Image
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      {image && !mainImageError && (
        <div className="h-48 w-full overflow-hidden relative"> {/* Added relative for Image layout fill */}
          <Image
            src={image}
            alt={title}
            className='object-cover transition-transform duration-300 group-hover:scale-105'
            onError={() => setMainImageError(true)}
            priority={false}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' // General sizes          />
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            src={image} 
            alt={title} 
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            onError={() => setMainImageError(true)}
            priority={false}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // General sizes
          />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

        </div>
=======
>>>>>>>         </div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          ) : (
=======
>>>>>>>           ) : (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          ) : (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
========
export function ListingScoreCard(): any ({;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ListingScoreCard.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  title,;
  description,;
  image,;
  category,;
<<<<<<< HEAD
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  tags,;
  author,;
  authorImage,;
  aiScore,;
  rating = 0,;
  reviewCount = 0,;
<<<<<<< HEAD
<<<<<<< HEAD
  className,;
}: ListingScoreCardProps) {;
  const [mainImageError, setMainImageError] = useState(false);
  const [authorImageError, setAuthorImageError] = useState(false);
    >;
      {image && !mainImageError && (;
        <div className='h-48 w-full overflow-hidden relative'>;
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/ListingScoreCard.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ListingScoreCard.tsx
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<<< HEAD:src/components/ListingScoreCard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ListingScoreCard.tsx
      {(!image || mainImageError) && ( // Fallback if no image or error;
        <div className='h-48 w-full overflow-hidden bg-zion-blue-light/10 flex items-center justify-center'>;
          <span className='text-zion-slate-light text-sm'>No Image</span>;
        </div>;
      )}
      <div className='flex flex-col p-4 flex-grow'>;
        <div className='mb-2 flex items-center justify-between'>;
<<<<<<<< HEAD:src/components/ListingScoreCard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ListingScoreCard.tsx
          <Badge
            variant='secondary'
            className='bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30'>;
            {category}
<<<<<<<< HEAD:src/components/ListingScoreCard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ListingScoreCard.tsx
          </Badge>;
          {aiScore === undefined || aiScore === null ? (;
            <div className='text-xs italic text-zion-slate-light'>;
              Beta – simulated results;
            </div>;
          ) : (;
            aiScore > 0 && (;
              <div className='flex items-center px-2 py-1 bg-zion-cyan/10 rounded text-zion-cyan text-xs'>;
                <span className='font-medium mr-1'>AI Match:</span>;
=======
  className;
} ListingScoreCardProps) {;
  const [mainImageError, setMainImageError] = useState(false),;
  const [authorImageError, setAuthorImageError] = useState(false),;
;
  return (;
    <div className={cn(;
      "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue-dark hover:border-zion-purple/50 transition-all duration-300 group",;
=======
  className;
}: ListingScoreCardProps) {;
  const [mainImageError, setMainImageError] = useState(false),;
  const [authorImageError, setAuthorImageError] = useState(false),;
  return (;
    <div className={cn(;
      "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue-dark hover:border-zion-purple/50 transition-all duration-300 group";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      className;
    )}>;
      {image && !mainImageError && (;
        <div className="h-48 w-full overflow-hidden relative"> {/* Added relative for Image layout fill */}
          <Image;
            src={image} ;
            alt={title} ;
            className="object-cover transition-transform duration-300 group-hover:scale-105";
<<<<<<< HEAD
            onError={() => setMainImageError(true)}            priority={false}
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw" // General sizes;
=======
            onError={() => setMainImageError(true)}
            priority={false}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // General sizes;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          />;
        </div>;
      )}
      {(!image || mainImageError) && ( // Fallback if no image or error;
        <div className="h-48 w-full overflow-hidden bg-zion-blue-light/10 flex items-center justify-center">;
          <span className="text-zion-slate-light text-sm">No Image</span>;
<<<<<<< HEAD
        </div>;      )}
=======
        </div>;
      )}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
;
      <div className="flex flex-col p-4 flex-grow">;
        <div className="mb-2 flex items-center justify-between">;
          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">;
            {category}
          </Badge>;
          {aiScore === undefined || aiScore === null ? (;
            <div className="text-xs italic text-zion-slate-light">Beta – simulated results</div>;
<<<<<<< HEAD
          ) :(;
            aiScore > 0 && (;
              <div className="flex items-center px-2 py-1 bg-zion-cyan/10 rounded text-zion-cyan text-xs">;
                <span className="font-medium mr-1">AI Match:</span>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                <span>{aiScore}%</span>;
              </div>;
            );
<<<<<<<< HEAD:src/components/ListingScoreCard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ListingScoreCard.tsx
          )}
        </div>;
<<<<<<< HEAD
        <h3 className='text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors'>;
          {title}
        </h3>;
        <p className='text-zion-slate mb-4 flex-grow line-clamp-2'>;
          {description}
<<<<<<<< HEAD:src/components/ListingScoreCard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ListingScoreCard.tsx
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
<<<<<<<< HEAD:src/components/ListingScoreCard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ListingScoreCard.tsx
        {rating > 0 && (
          <div className='flex items - center gap - 1 mb - 4'>;
            <div className='flex'>;
              {[1, 2, 3, 4, 5].map (star => (
                <StarIcon;
                  key={star}
<<<<<<<< HEAD:src/components/ListingScoreCard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ListingScoreCard.tsx
        </p>;
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
<<<<<<<< HEAD:src/components/ListingScoreCard.tsx

<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                  className={cn(;
                    "h-4 w-4";
                    star <= Math.round(rating);
                      ? "text-zion-cyan fill-zion-cyan";
                      : "text-zion-slate-light";
                  )}
                />;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
              ))}
=======
>>>>>>>               ))}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              ))}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </div>
            <span className="text-sm text-zion-slate-light ml-1">
              ({reviewCount})
            </span>
          </div>
        )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
        {tags && tags.length > 0 && (
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
        {tags && tags.length > 0 && (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
        
        {tags && tags.length > 0 && (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
        
        {tags && tags.length > 0 && (
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
        
        {tags && tags.length > 0 && (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
              <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light">
                {tag}
<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ListingScoreCard.tsx
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
              ))}
            </div>;
            <span className='text-sm text-zion-slate-light ml-1'>;
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              ({reviewCount});
            </span>;
          </div>;
        )}
<<<<<<<< HEAD:src/components/ListingScoreCard.tsx


        {tags && tags.length > 0 && (;
          <div className='flex flex-wrap gap-2 mb-4'>;
            {tags && tags.map((tag, i) => (;

========
<<<<<<< HEAD
        {tags && tags.length > 0 && (;
          <div className='flex flex-wrap gap-2 mb-4'>;
            {tags && tags.map((tag, i) => (;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ListingScoreCard.tsx
              <Badge
                key={i}
                variant='outline'
                className='border-zion-slate-dark text-zion-slate-light'>                {tag}
>>>>>>>               </Badge>;
            ))}
          </div>;
        )}
<<<<<<<< HEAD:src/components/ListingScoreCard.tsx
=======
              </Badge>;
            ))}
          </div>;
        )}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        
        <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
          Request Quote
        </Button>
<<<<<<< HEAD
<<<<<<< HEAD

        {author && (
<<<<<<< HEAD
=======
        
>>>>>>>         {author && (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
        
        {author && (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <div className="flex items-center mt-4 pt-4 border-t border-zion-blue-light">
            {authorImage && !authorImageError ? (
              <div className="relative h-8 w-8 rounded-full mr-2 overflow-hidden"> {/* Added relative and overflow-hidden */}
                <Image
                  src={authorImage}
                  alt={author}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
          <div className='flex items-center mt-4 pt-4 border-t border-zion-blue-light'>
            {authorImage && !authorImageError ? (
              <div className='relative h-8 w-8 rounded-full mr-2 overflow-hidden'>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

                {author.charAt(0)}
              </div>
            )}

            <span className="text-sm text-zion-slate-light">{author}</span>

          </div>
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  className='object-cover rounded-full'
                  onError={() => setAuthorImageError(true)}
                  priority={false}                />
              </div>
            ) : (
              <div className='h-8 w-8 rounded-full bg-zion-purple/20 mr-2 flex items-center justify-center text-zion-purple'>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>                 {author.charAt(0)}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  className="object-cover rounded-full"
                  onError={() => setAuthorImageError(true)}
                  priority={false}
                />
              </div>
            ) : (
              <div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2 flex items-center justify-center text-zion-purple">
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>>                 {author.charAt(0)}
              </div>
            )}


>>>>>>>             <span className="text-sm text-zion-slate-light">{author}</span>
>>>>>>>           </div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        )}
      </div>;
    </div>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
};
}
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
      </div>;
    </div>;
  );
}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
=======
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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        )}
      </div>;
    </div>;
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ListingScoreCard.tsx
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
};
}
}
<<<<<<< HEAD
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
