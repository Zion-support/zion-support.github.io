:src_backup/components/ListingCard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
import React from "react",;
import { cn } from "@/lib/utils",;
import { Badge } from "@/components/ui/badge",;
import Link from "next/link",;
import Image from "next/image",;
interface ListingCardProps {;
  id?: string,;
  title: string,;
  description: string,;
  images?: string[],;
  category: string,;
  tags?: string[],;
  author?: { name: string, id?: string, avatarUrl?: string, email?: string },;
  className?: string,;

  title: string,;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  description: string,;
  images?: string[],;
  category: string,;
  tags?: string[],;
  author?: { name: string, id?: string, avatarUrl?: string, email?: string },;
  className?: string,;
  profileType?: 'service' | 'talent';
}
:src/components/ListingCard.tsx
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  profileType?: 'service' | 'talent';
}
;
export function ListingCard({;
  id,;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  title,;
  description,;
  images,;
  category,;
  tags,;
  author,;
  className,;
:src/components/ListingCard.tsx
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

:src/components/ListingCard.tsx
      {images && images.length > 0 && images[0] && (
        <div className="h-48 w-full overflow-hidden relative">
          <Image
            src={images[0]}
            alt={title}
className="object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />

:src/components/ListingCard.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        </div>
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      )}
      <div className="flex flex-col p-4 flex-grow">
        <div className="mb-2">
          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">
            {category}
          </Badge>
        </div>
:src/components/ListingCard.tsx
<<<<<<< HEAD
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ListingCard.tsx
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>
        <p className="text-zion-slate mb-4 flex-grow">{description}</p>

        {tags && tags.length > 0 && (

=======

:src/components/ListingCard.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
              <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light">
                {tag}
:src/components/ListingCard.tsx
<<<<<<< HEAD
              </Badge>;
            ))}
          </div>;
        )}
=======

              </Badge>;

            ))}
          </div>;
        )}

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

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ListingCard.tsx
        {author && (
          <div className="flex items-center mt-auto pt-4 border-t border-zion-blue-light">
            {author.avatarUrl ? (
              <Image src={author.avatarUrl} alt={author.name} width={32} height={32} className="rounded-full mr-2" loading="lazy" />
            ) : (
              <div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2" />
            )}
<span className="text-sm text-zion-slate-light">{author.name}</span>
          </div>
        )}
      </div>;
    </Link>;
  );
}

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
import React from "react",
import { cn } from "@/lib/utils",
import { Badge } from "@/components/ui/badge",
import Link from "next/link";
import Image from "next/image";
origin/cursor/automate-test-improve-and-merge-code-2533
interface ListingCardProps {
  id?: string;

  author?: { name: string, id?: string, avatarUrl?: string, email?: string },
  className?: string;
  profileType?: 'service' | 'talent'
}

export function ListingCard({ 
  id;
  title;
  description;
  images;
  category;
  tags;
  author;
  className;
  profileType;
        className
      )}
    >

      {images && images.length > 0 && images[0] && (
        <div className='h - 48 w - full overflow - hidden relative'>;
          <Image;,
            src={images[0]}
            alt={title}
            className='object - cover transition - transform duration - 300 group - hover:scale - 105';',
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
:src_backup/components/ListingCard.tsx
<<<<<<< HEAD
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
:src_backup/components/ListingCard.tsx
                height={32}
                className='rounded - full mr - 2';
                loading='lazy';
              />) : (
:src_backup/components/ListingCard.tsx
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
:src_backup/components/ListingCard.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
<<<<<<< HEAD
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ListingCard.tsx
=======
;
}))
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ListingCard.tsx
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
          </div>
        )}
      </div>
    </Link>
  );
}
:src/components/ListingCard.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
          <div className="flex items - center mt - auto pt - 4 border - t border - zion - blue - light">;"
</div>)"
              <Image src={author.avatar_url} alt={author.name} width={32} height={32} className="rounded - full mr - 2" loading="lazy" />) : ("
)"
              <div className="h - 8 w - 8 rounded - full bg - zion - purple / 20 mr - 2" />)}"
            <span className="text - sm text - zion - slate - light">{author.name}</span>;"
    );"`;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ListingCard.tsx
