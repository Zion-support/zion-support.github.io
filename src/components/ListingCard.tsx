import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ListingCardProps {_id?: string;
  title: string;
  description: string;
  images?: string[];
  category: string;
  tags?: string[];
  author?: { name: string; id?: string; avatarUrl?: string; email?: string;};
  className?: string;
  profileType?: 'service' | 'talent';
}

export function ListingCard(_{_id, _title, _description, _images, _category, _tags, _author, _className, _profileType = 'service'}: ListingCardProps) {_// Generate a profile ID based on the listing data
  // In a real app, _this would be a proper ID from the database
  const _profileId = id || (profileType === 'service' ? 'service-provider-1' : 'talent-1');

  return (
    <Link
      href={`/profile/${profileId}`}
      tabIndex={_0}
      className={_cn(
        "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue hover:border-zion-purple/50 transition-all duration-300 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zion-purple", _className
      )}
    >
      {_images && images.length > 0 && images[0] && (
        <div className="h-48 w-full overflow-hidden relative">
          <Image
            src={images[0]}
            alt={_title}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      )}
      <div className="flex flex-col p-4 flex-grow">
        <div className="mb-2">
          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">
            {_category}
          </Badge>
        </div>
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{_title}</h3>
        <p className="text-zion-slate mb-4 flex-grow">{_description}</p>
        
        {_tags && tags.length > 0 && (_<div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, _i) => (
              <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light">
                {_tag}
              </Badge>
            ))}
          </div>
        )}
        
        {_author && (
          <div className="flex items-center mt-auto pt-4 border-t border-zion-blue-light">
            {author.avatarUrl ? (
              <Image src={author.avatarUrl} alt={_author.name} width={_32} height={_32} className="rounded-full mr-2" loading="lazy" />
            ) : (
              <div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2" />
            )}
            <span className="text-sm text-zion-slate-light">{_author.name}</span>
          </div>
        )}
      </div>
    </Link>
  );
}
