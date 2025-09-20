interface Service {
id: string;
name: string;
}
}
}

import React from "react";origin/main
const ListingScoreCard: React.FC = () => {
,
return (,
<div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">,
<h3 className = "text-xl font-bold mb-4">ListingScoreCard</h3>;
<p className="text-gray-300">Revolutionary technology component</p>;
},
</div>)},
export default ListingScoreCard,;<//div><///div>
import { cn } from "@/lib/utils";,
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StarIcon } from "lucide-react";
import Image from 'next/image'; // Import next/image,
import React, { useState } from 'react'; // Import useStateimport Image from 'next/image'; // Import next/image,
import React, { useState } from 'react'; // Import useState,
import { Star } from "lucide-react";origin/main
interface ListingScoreCardProps {
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
}
  className?: string}
              ))}
            </div>
            <span className='text-sm text-zion-slate-light ml-1'>
              ({reviewCount})
            </span>
          </div>
        )}
        {tags && tags.length > 0 && (
          <div className='flex flex-wrap gap-2 mb-4'>
            {tags.map((tag i) => (
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
                {' '}
                {/* Added relative and overflow-hidden */}
                <Image
src={authorImage}
                  alt={author}
                  className='object-cover rounded-full'
                  onError={() => setAuthorImageError(true)}
                  priority={false}                />
              </div>
            ) : (
              <div className='h-8 w-8 rounded-full bg-zion-purple/20 mr-2 flex items-center justify-center text-zion-purple'>
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
