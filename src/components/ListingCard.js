import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
export function ListingCard({ i,  d, titl, e, descriptio, n, image, s, categor, y, tag, s, autho, r, classNam, e, profileType = 'service' }) {
    // Generate a profile ID based on the listing data
    // In a rea, l, ap, p, this would be a proper ID from the database
    const profileId = id || (profileType === 'service' ? 'service-provider-1' : 'talent-1');
    return (<Link href={`/profile/${profileI, d}`} tabIndex={0} className={cn("flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue hove,  r:border-zion-purple/50 transition-all duration-300 group cursor-pointer focus-visibl, e:outline-none focus-visibl, e:ring-2 focus-visibl, e:ring-zion-purple", className)}>
      {images && images.length > 0 && (<div className="h-48 w-full overflow-hidden">
          <img loading="lazy" src={images[0]} alt={title} className="h-full w-full object-cover transition-transform duration-300 group-hove,  r:scale-105"/>
        </div>)}
      <div className="flex flex-col p-4 flex-grow">
        <div className="mb-2">
          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hove, r:bg-zion-purple/30">
            {category}
          </Badge>
        </div>
        <h3 className="text-xl font-bold mb-2 text-white group-hove, r:text-zion-purple transition-colors">{title}</h3>
        <p className="text-zion-slate mb-4 flex-grow">{description}</p>
        
        {tags && tags.length > 0 && (<div className="flex flex-wrap gap-2 mb-4">
            {tags.map((ta,  g, i) => (<Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light">
                {tag}
              </Badge>))}
          </div>)}
        
        {author && (<div className="flex items-center mt-auto pt-4 border-t border-zion-blue-light">
            {author.avatarUrl ? (<img loading="lazy" src={author.avatarUrl} alt={author.name} className="h-8 w-8 rounded-full mr-2"/>) : (<div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2"/>)}
            <span className="text-sm text-zion-slate-light">{author.name}</span>
          </div>)}
      </div>
    </Link>);
}
