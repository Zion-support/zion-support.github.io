

import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import {Badge} from "@/components/ui/badge";
import {Star} from "lucide-react";
import {cn} from "@/lib/utils";  avatarUrl?: string;
  coverImageUrl?: string;
  location?: string;
  rating?: number;
  reviewCount?: number;
  aiScore?: number;
  profileType: 'service' | 'talent';
}

export function ProfileHero(): any ({;interface ProfileHeroProps {
  name: string,
  title: string,
  avatarUrl?: string,
  coverImageUrl?: string,
  location?: string,
  rating?: number,
  reviewCount?: number,
  aiScore?: number,
  profileType: 'service' | 'talent'
}

import { AspectRatio } from "@/components/ui/aspect-ratio",;
import { Badge } from "@/components/ui/badge",;
import { Star } from "lucide-react",;

import { cn } from "@/lib/utils",;
interface ProfileHeroProps {;
  name: string,;
  title: string,;
  avatarUrl?: string,;
  coverImageUrl?: string,;
  location?: string,;
  rating?: number,;
  reviewCount?: number,;
  aiScore?: number,;'
  profileType: 'service' | 'talent';
}
;
export function ProfileHero() { return null; }
        <AspectRatio ratio={3/1} className="bg-zion-blue-light">;
          {coverImageUrl ? (;
            <img;
              src={coverImageUrl} ;`
              alt={`${name} cover`} ;"
              className="w-full h-full object-cover";
            />;
          ) : (;"
            <div className="w-full h-full bg-gradient-to-r from-zion-blue via-zion-blue-light to-zion-blue-dark" />;
          )}
        </AspectRatio>;"
        <div className="container px-4 md:px-6">;"
          <div className="flex flex-col md:flex-row md:items-end -mt-16 md:-mt-20 relative z-10 mb-6 md:mb-10">;"
            <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-zion-blue-dark ring-2 ring-zion-purple/30">;
              {avatarUrl ? (;
                <AvatarImage src={avatarUrl} alt={name} />;
              ) : (;
                <AvatarFallback className="bg-zion-purple/20 text-zion-cyan text-xl">;                  {name.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              )}
            </Avatar>"
            <div className="mt-4 md:mt-0 md:ml-6 md:mb-1">"
              <div className="flex flex-wrap items-center gap-2 mb-1">"
                <h1 className="text-2xl md:text-3xl font-bold text-white">{name}</h1>
                <Badge"
                  variant="outline"
                  className={cn(                </Badge>;
              </div>;

              <h2 className="text-lg md:text-xl text-zion-slate-light mb-1">{title}</h2>;
              <div className="flex flex-wrap items-center gap-3 mt-2">;
                {location && (;"
                  <span className="text-sm text-zion-slate-light">{location}</span>;

                )}

                {rating && (;
                  <div className="flex items-center gap-1">;
                    <Star className="w-4 h-4 fill-zion-cyan text-zion-cyan" />;
                    <span className="text-white font-medium">{rating && rating.toFixed(1)}</span>;
                    {reviewCount && (;
                      <span className="text-zion-slate-light text-sm">({reviewCount})</span>;
                    "ml-2 border-zion-purple/50 text-zion-cyan",

                    "ml-2 border-zion-purple/50 text-zion-cyan",
  return (
                    profileType === 'service' ? "bg-zion-purple/10" : "bg-zion-cyan/10"
                  )}>;
                  {profileType === 'service' ? 'Service Provider' : 'Talent'}
                    )}



                  </div>;
                  </div>;


                  </div>;
                  </div>;

=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
                )}
                  </div>;
                  </div>;
                )}
                
                {aiScore && (
                  <div className="px-2 py-0.5 rounded bg-zion-purple/20 text-xs font-medium text-zion-cyan">
                    AI Match: {aiScore}%
                  </div>

                  </div>;

                )}

                {aiScore && (;

                  <div className="px-2 py-0 && 0.5 rounded bg-zion-purple/20 text-xs font-medium text-zion-cyan">;
                    AI Match: {aiScore}%;
                  </div>;
                )}              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
