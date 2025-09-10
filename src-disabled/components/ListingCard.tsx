title: string,;

  description: string,;
  images?: string[],;
  category: string,;
  tags?: string[],;
  author?: { name: string, id?: string, avatarUrl?: string, email?: string },;
  className?: string,;
  profileType?: 'service' | 'talent';
}

interface ListingCardProps {;
  id?: string;
  title: string;
  description: string;
  images?: string[];
  category: string;
  tags?: string[];
  author?: { name: string; id?: string; avatarUrl?: string; email?: string };
  className?: string;
import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
interface ListingCardProps {
  id?: string;
  title: string,
  description: string,
  images?: string[];
  category: string,
  tags?: string[];
  author?: { name: string, id?: string, avatarUrl?: string, email?: string };
  className?: string;
  profileType?: 'service' | 'talent'
}


import React from 'react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Image from 'next/image';interface ListingCardProps {
  id?: string
  title: string
  description: string
  images?: string[]
  category: string
  tags?: string[]
  author?: { name: string, id?: string, avatarUrl?: string, email?: string }
  className?: string
  profileType?: 'service' | 'talent'
import React from "react";
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
  const profileId =
    id |(profileType === 'service' ? 'service-provider-1' : 'talent-1')
      >

import React from "react";
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
import React from "react";;
import { cn } from "@/lib/utils",;
import { Badge } from "@/components/ui/badge",;
import Link from "next/link",;
import Image from "next/image",;
interface ListingCardProps {;
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
  const profileId = id || (profileType === 'service' ? 'service-provider-1' : 'talent-1');

  profileType?: 'service' | 'talent';
}
;
export function ListingCard({;

  title,;
  description,;
  images,;
  category,;
  tags,;
  author,;
  className,;

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
        className
      )}
    >

;
export function ListingCard({;
        </h3>;
        <p className='text-zion-slate mb-4 flex-grow'>{description}</p>;
        {tags && tags.length > 0 && (;
          <div className='flex flex-wrap gap-2 mb-4'>;
            {tags && tags.map((tag, i) => (;
  const profileId = id || (profileType === 'service' ? 'service-provider-1' : 'talent-1');
        "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue hover: border-zion-purple/50 transition-all duration-300 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zion-purple",
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
        className
      )}
    >

            className="object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />

            className="object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
            className='object-cover transition-transform duration-300 group-hover:scale-105'
            loading='lazy'          />
ursor/fix-website-loading-errors-and-merge-6662
        </div>
            className='object-cover transition-transform duration-300 group-hover:scale-105'
            loading='lazy'          />

        <h3 className='text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors'>
          {title}
        </h3>
        <p className='text-zion-slate mb-4 flex-grow'>{description}</p>
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>
        <p className="text-zion-slate mb-4 flex-grow">{description}</p>
              <Badge
                key={i}
                variant='outline'
                className='border-zion-slate-dark text-zion-slate-light'
              >                {tag}              <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light">
                {tag}

              </Badge>
          </div>
        )}
        
ursor/fix-website-loading-errors-and-merge-6662
                {tag}


                variant='outline'
                className='border-zion-slate-dark text-zion-slate-light'
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
{author && (
          <div className='flex items-center mt-auto pt-4 border-t border-zion-blue-light'>
            {author.avatarUrl ? (
              <Image
                src={author.avatarUrl}
                alt={author.name}
                width={32}
                height={32}
                className='rounded-full mr-2'
                loading='lazy'
              />
            ) : (
              <div className='h-8 w-8 rounded-full bg-zion-purple/20 mr-2' />
            )}
            <span className='text-sm text-zion-slate-light'>{author.name}</span>
            <span className="text-sm text-zion-slate-light">{author.name}</span>
          </div>
        )}
      </div>
    </Link>
  );
}
;"}) })"
            <span className="text-sm text-zion-slate-light">{author.name}</span>
          </div>
        )}

            <span className='text-sm text-zion-slate-light'>{author.name}</span>          </div>        {author && (
          <div className="flex items-center mt-auto pt-4 border-t border-zion-blue-light">
            {author.avatarUrl ? (
              <Image src={author.avatarUrl} alt={author.name} width={32} height={32} className="rounded-full mr-2" loading="lazy" />
            ) : (
              <div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2" />
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
;
import React from "react";;
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
;
;
