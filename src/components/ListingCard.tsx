<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/ListingCard.tsx

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Image from 'next/image';interface ListingCardProps {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  id?: string,
  title: string,
  description: string,
  images?: string[],
  category: string,
  tags?: string[],
  author?: { name: string, id?: string, avatarUrl?: string, email?: string },
  className?: string,
  profileType?: 'service' | 'talent'

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  id?: string
  title: string
  description: string
  images?: string[]
  category: string
  tags?: string[]
  author?: { name: string, id?: string, avatarUrl?: string, email?: string }
  className?: string
  profileType?: 'service' | 'talent'
<<<<<<< HEAD
<<<<<<< HEAD
  id?: string,
========
<<<<<<< HEAD
import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
interface ListingCardProps {
  id?: string;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ListingCard.tsx
=======
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react",
import { cn } from "@/lib/utils",
import { Badge } from "@/components/ui/badge",
import Link from "next/link",
import Image from "next/image",
interface ListingCardProps {
  id?: string,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  title: string,
  description: string,
  images?: string[],
  category: string,
  tags?: string[],
  author?: { name: string, id?: string, avatarUrl?: string, email?: string },
  className?: string,
  profileType?: 'service' | 'talent'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/ListingCard.tsx
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
interface ListingCardProps {
  id?: string
  title: string
  description: string
  images?: string[]
  category: string
  tags?: string[]
  author?: { name: string; id?: string; avatarUrl?: string; email?: string }
  className?: string
  profileType?: 'service' | 'talent'
export function ListingCard({
  id
  title
  description
  images
  category
  tags
  author
  className
  profileType = 'service'
}: ListingCardProps) {
  // Generate a profile ID based on the listing data
  // In a real app, this would be a proper ID from the database
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const profileId =
    id |(profileType === 'service' ? 'service-provider-1' : 'talent-1')
      >

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react",
import { cn } from "@/lib/utils",
import { Badge } from "@/components/ui/badge",
import Link from "next/link",
import Image from "next/image",
interface ListingCardProps {
  id?: string,
  title: string,
  description: string,
  images?: string[],
  category: string,
  tags?: string[],
  author?: { name: string, id?: string, avatarUrl?: string, email?: string },
  className?: string,
  profileType?: 'service' | 'talent'
  const profileId = null;
    id || (profileType === 'service' ? 'service-provider-1' : 'talent-1')
      >
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react",;
import { cn } from "@/lib/utils",;
import { Badge } from "@/components/ui/badge",;
import Link from "next/link",;
import Image from "next/image",;
interface ListingCardProps {;
<<<<<<< HEAD
========
}
export function ListingCard({ 
  id;
  title, 
  description, 
  images;
  category, 
  tags, 
  author, 
  className;
  profileType = 'service'
}: ListingCardProps) {
  // Generate a profile ID based on the listing data
  // In a real app, this would be a proper ID from the database
import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Image from 'next/image';interface ListingCardProps {;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ListingCard.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  id?: string,;
  title: string,;
  description: string,;
  images?: string[],;
  category: string,;
  tags?: string[],;
  author?: { name: string, id?: string, avatarUrl?: string, email?: string },;
  className?: string,;
  profileType?: 'service' | 'talent';
}
<<<<<<< HEAD
interface ListingCardProps {;
  id?: string;
  title: string;
  description: string;
  images?: string[];
  category: string;
  tags?: string[];
  author?: { name: string; id?: string; avatarUrl?: string; email?: string };
  className?: string;
  profileType?: 'service' | 'talent';
export function ListingCard(): any ({;
=======
;
export function ListingCard({;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  id,;
  title,;
  description,;
  images,;
  category,;
  tags,;
  author,;
  className,;
<<<<<<< HEAD
  profileType = 'service',;
}: ListingCardProps) {;
  // Generate a profile ID based on the listing data;
  // In a real app, this would be a proper ID from the database;
  const profileId =;
    id || (profileType === 'service' ? 'service-provider-1' : 'talent-1');
      >;
      {images && images.length > 0 && images[0] && (;
        <div className='h-48 w-full overflow-hidden relative'>;
          <Image
            src={images[0]}
            alt={title}
            className='object-cover transition-transform duration-300 group-hover:scale-105'
            loading='lazy'          />;
        </div>;
      )}
      <div className='flex flex-col p-4 flex-grow'>;
        <div className='mb-2'>;
          <Badge
            variant='secondary'
            className='bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30'>;
            {category}
          </Badge>;
        </div>;
        <h3 className='text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors'>;
          {title}
<<<<<<<< HEAD:src/components/ListingCard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ListingCard.tsx
        </h3>;
        <p className='text-zion-slate mb-4 flex-grow'>{description}</p>;
        {tags && tags.length > 0 && (;
          <div className='flex flex-wrap gap-2 mb-4'>;
            {tags && tags.map((tag, i) => (;
<<<<<<<< HEAD:src/components/ListingCard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ListingCard.tsx
              <Badge
                key={i}
                variant='outline'
                className='border-zion-slate-dark text-zion-slate-light'>                {tag}              <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light">;
          <div className="flex flex-wrap gap-2 mb-4">;
            {tags && tags.map((tag, i) => (;
              <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light">;
<<<<<<<< HEAD:src/components/ListingCard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ListingCard.tsx
  const profileId = id || (profileType === 'service' ? 'service-provider-1' : 'talent-1');
  return (
    <Link
      href = {`/profile/${profileId}`}
      tabIndex={0}
      className={cn(
        "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue hover: border-zion-purple/50 transition-all duration-300 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zion-purple",
=======
  profileType = 'service';
}: ListingCardProps) {;
  // Generate a profile ID based on the listing data;
  // In a real app, this would be a proper ID from the database;
  const profileId = id || (profileType === 'service' ? 'service-provider-1' : 'talent-1');
  return (;
    <Link;
      href={`/profile/${profileId}`}
      tabIndex={0}
      className={cn(
        "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue hover:border-zion-purple/50 transition-all duration-300 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zion-purple",
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        className
      )}
    >
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

      {images && images.length > 0 && images[0] && (
=======
>>>>>>>       {images && images.length > 0 && images[0] && (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      {images && images.length > 0 && images[0] && (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className="h-48 w-full overflow-hidden relative">
          <Image
            src={images[0]}
            alt={title}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
            className='object-cover transition-transform duration-300 group-hover:scale-105'
            loading='lazy'          />
>>>>>>>         </div>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        </div>
>>>>>>>       )}
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            className='object-cover transition-transform duration-300 group-hover:scale-105'
            loading='lazy'          />
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      )}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <div className="flex flex-col p-4 flex-grow">
        <div className="mb-2">
          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">
            {category}
          </Badge>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/ListingCard.tsx
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <h3 className='text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors'>
          {title}
        </h3>
        <p className='text-zion-slate mb-4 flex-grow'>{description}</p>
<<<<<<< HEAD
========
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>
        <p className="text-zion-slate mb-4 flex-grow">{description}</p>
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ListingCard.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {tags && tags.length > 0 && (
          <div className='flex flex-wrap gap-2 mb-4'>
            {tags.map((tag, i) => (
              <Badge
                key={i}
                variant='outline'
                className='border-zion-slate-dark text-zion-slate-light'
              >                {tag}              <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light">
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>           <div className="flex flex-wrap gap-2 mb-4">
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          <div className="flex flex-wrap gap-2 mb-4">
>>>>>>>             {tags.map((tag, i) => (
              <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light">
<<<<<<<< HEAD:src/components/ListingCard.tsx
<<<<<<< HEAD
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ListingCard.tsx
                {tag}

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>>                 {tag}
              </Badge>
>>>>>>>             ))}
          </div>
        )}
        
>>>>>>> >>>>>>>         {author && (
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            ))}
          </div>;
        )}
<<<<<<<< HEAD:src/components/ListingCard.tsx

<<<<<<< HEAD
        {author && (
          <div className="flex items-center mt-auto pt-4 border-t border-zion-blue-light">
=======

========
        {author && (;
          <div className='flex items-center mt-auto pt-4 border-t border-zion-blue-light'>;
            {author && author.avatarUrl ? (;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ListingCard.tsx
              <Image
                src={author && author.avatarUrl}
                alt={author && author.name}
                width={32}
                height={32}
                className='rounded-full mr-2'
                loading='lazy'
              />;
            ) : (;
              <div className='h-8 w-8 rounded-full bg-zion-purple/20 mr-2' />;
            )}
            <span className='text-sm text-zion-slate-light'>{author && author.name}</span>          </div>        {author && (;
          <div className="flex items-center mt-auto pt-4 border-t border-zion-blue-light">;
            {author && author.avatarUrl ? (;
              <Image src={author && author.avatarUrl} alt={author && author.name} width={32} height={32} className="rounded-full mr-2" loading="lazy" />;
            ) : (;
              <div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2" />;
            )}
            <span className="text-sm text-zion-slate-light">{author && author.name}</span>;
          </div>;
<<<<<<<< HEAD:src/components/ListingCard.tsx

        


        
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ListingCard.tsx
        {author && (
>>>>>>>           <div className="flex items-center mt-auto pt-4 border-t border-zion-blue-light">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>
        <p className="text-zion-slate mb-4 flex-grow">{description}</p>
        
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
              <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light">
                {tag}
              </Badge>
              </Badge>;
            ))}
          </div>
        )}
        

        
        {author && (
          <div className="flex items-center mt-auto pt-4 border-t border-zion-blue-light">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            {author.avatarUrl ? (
              <Image src={author.avatarUrl} alt={author.name} width={32} height={32} className="rounded-full mr-2" loading="lazy" />
            ) : (
              <div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2" />
            )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

            <span className="text-sm text-zion-slate-light">{author.name}</span>
          </div>
        )}
<<<<<<<< HEAD:src/components/ListingCard.tsx
=======
;"}) })"
            <span className="text-sm text-zion-slate-light">{author.name}</span>
          </div>
        )}

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ListingCard.tsx
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            <span className='text-sm text-zion-slate-light'>{author.name}</span>          </div>        {author && (
          <div className="flex items-center mt-auto pt-4 border-t border-zion-blue-light">
            {author.avatarUrl ? (
              <Image src={author.avatarUrl} alt={author.name} width={32} height={32} className="rounded-full mr-2" loading="lazy" />
            ) : (
              <div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2" />
            )}
            <span className="text-sm text-zion-slate-light">{author.name}</span>
          </div>
        )}
      </div>
    </Link>
  );
};"}) })"
}
;"}) })"
            <span className="text-sm text-zion-slate-light">{author.name}</span>
          </div>
        )}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      </div>;
    </Link>;
  );
}
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/ListingCard.tsx
;
<<<<<<< HEAD

=======
>>>>>>> 
;


>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
;"}) })"
  );
}
import React from 'react';
import { cn } from '@/lib / utils';
import { Badge } from '@/components / ui / badge';
import Link from 'next / link';
import Image from 'next / image';interface ListingCardProps {
  id?: string,
  title: string,
  description: string,
  images?: string[],
  category: string,
  tags?: string[],
  author?: { name: string, id?: string, avatar_url?: string, email?: string },
  class_name?: string,
  profile_type?: 'service' | 'talent';
}
interface ListingCardProps {
  id?: string;
  title: string;
  description: string;
  images?: string[];
  category: string;
  tags?: string[];
  author?: { name: string; id?: string; avatar_url?: string; email?: string }
  class_name?: string;
  profile_type?: 'service' | 'talent';
export /**
 * ListingCard - Function description
 */
function ListingCard() {
  // Generate a profile ID based on the listing data;
  // In a real app, this would be a proper ID from the database;
  const profile_id =;
    id || (profile_type === 'service' ? 'service - provider - 1' : 'talent - 1');
      >;
      {images && images.length > 0 && images[0] && (
        <div className='h - 48 w - full overflow - hidden relative'>;
          <Image;
            src={images[0]}
            alt={title}
            className='object - cover transition - transform duration - 300 group - hover:scale - 105';
            loading='lazy'          />;
        </div>)}
      <div className='flex flex - col p - 4 flex - grow'>;
        <div className='mb - 2'>;
          <Badge;
            variant='secondary';
            className='bg - zion - purple / 20 text - zion - cyan hover:bg - zion - purple / 30';
          >;
            {category}
          </Badge>;
        </div>;
        <h3 className='text - xl font - bold mb - 2 text - white group - hover:text - zion - purple transition - colors'>;
          {title}
        </h3>;
        <p className='text - zion - slate mb - 4 flex - grow'>{description}</p>;
        {tags && tags.length > 0 && (
          <div className='flex flex - wrap gap - 2 mb - 4'>;
            {tags.map ((tag, i) => (
              <Badge;
                key={i}
                variant='outline';
                className='border - zion - slate - dark text - zion - slate - light';
              >                {tag}              <Badge key={i} variant="outline" className="border - zion - slate - dark text - zion - slate - light">;
          <div className="flex flex - wrap gap - 2 mb - 4">;
            {tags.map ((tag, i) => (
              <Badge key={i} variant="outline" className="border - zion - slate - dark text - zion - slate - light">;
                {tag}
              </Badge>))}
          </div>)}
        {author && (
          <div className='flex items - center mt - auto pt - 4 border - t border - zion - blue - light'>;
            {author.avatar_url ? (
              <Image;
                src={author.avatar_url}
                alt={author.name}
                width={32}
                height={32}
                className='rounded - full mr - 2';
                loading='lazy';
              />) : (
              <div className='h - 8 w - 8 rounded - full bg - zion - purple / 20 mr - 2' />)}
            <span className='text - sm text - zion - slate - light'>{author.name}</span>          </div>        {author && (
          <div className="flex items - center mt - auto pt - 4 border - t border - zion - blue - light">;
            {author.avatar_url ? (
              <Image src={author.avatar_url} alt={author.name} width={32} height={32} className="rounded - full mr - 2" loading="lazy" />) : (
              <div className="h - 8 w - 8 rounded - full bg - zion - purple / 20 mr - 2" />)}
            <span className="text - sm text - zion - slate - light">{author.name}</span>;
          </div>)}
      </div>;
    </Link>);
}"}) })";
=======
import React from "react",;
import { cn } from "@/lib/utils",;
import { Badge } from "@/components/ui/badge",;
import Link from "next/link",;
import Image from "next/image",;
;
interface ListingCardProps {;
  id?:string,;
  title:string,;
  description:string,;
  images?:string[],;
  category:string,;
  tags?:string[],;
  author?:{ name:string, id?:string, avatarUrl?:string, email?:string },;
  className?:string,;
  profileType?:'service' | 'talent',;
}
;
export function ListingCard({ ;
  id,;
  title, ;
  description, ;
  images,;
  category, ;
  tags, ;
  author, ;
  className,;
  profileType = 'service';
} ListingCardProps) {;
  // Generate a profile ID based on the listing data;
  // In a real app, this would be a proper ID from the database;
  const profileId = id || (profileType === 'service' ? 'service-provider-1' :'talent-1'),;
;
  return (;
    <Link;
      href={`/profile/${profileId}`}
      tabIndex={0}
      className={cn(;
        "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue hover:border-zion-purple/50 transition-all duration-300 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zion-purple",;
        className;
      )}
    >;
      {images && images.length > 0 && images[0] && (;
        <div className="h-48 w-full overflow-hidden relative">;
          <Image;
            src={images[0]}
            alt={title}
            className="object-cover transition-transform duration-300 group-hover:scale-105";
            loading="lazy";
          />;
        </div>;
      )}
      <div className="flex flex-col p-4 flex-grow">;
        <div className="mb-2">;
          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">;
            {category}
          </Badge>;
        </div>;
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>;
        <p className="text-zion-slate mb-4 flex-grow">{description}</p>;
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
        {author && (;
          <div className="flex items-center mt-auto pt-4 border-t border-zion-blue-light">;
            {author.avatarUrl ? (;
              <Image src={author.avatarUrl} alt={author.name} width={32} height={32} className="rounded-full mr-2" loading="lazy" />;
            ) :(;
              <div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2" />;
            )}
            <span className="text-sm text-zion-slate-light">{author.name}</span>;
          </div>;
        )}
      </div>;
    </Link>;
  ),;}
 interface ListingCardProps {;
  id?: string;
title: string;
description: string;
images?: string[];
category: string;
tags?: string[];
author?: {;
  name: string, id?: string,  avatarUrl?: string, email?: string ;
};
className?: string;
profileType?: 'service' | 'talent' ;
}export function ListingCard ({;
  id;
title;
description;
images;
category;
tags;
author;
className;';
profileType = 'service' ;
}: ListingCardProps) {';
  //Generate a profile ID based on the listing data //In a real app, this would be a proper ID from the database const profileId = id || (profileType === 'service' ? 'service-provider-1' : 'talent-1');
`/profile/$ {;
  profileId ;
}` ;
}</Badge>) ) ;
}</div>) ;
}) : (<div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2" />) ;
}</div>) ;
}</div> </Link>) ;
}'"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ListingCard.tsx
=======
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
