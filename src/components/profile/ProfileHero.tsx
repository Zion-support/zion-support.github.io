
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",
import { AspectRatio } from "@/components/ui/aspect-ratio",
import { Badge } from "@/components/ui/badge";
import { Star } from 'lucide-react'
import { cn } from "@/lib/utils";
interface ProfileHeroProps {
  name: string;
  title: string;
  avatarUrl?: string;
  coverImageUrl?: string;
  location?: string;
  rating?: number;
  reviewCount?: number;
  aiScore?: number;
  profileType: 'service' | 'talent'
export function ProfileHero({
  name;
  title;
  avatarUrl;
  coverImageUrl;
  location;
  rating;
  reviewCount;
  aiScore;
  profileType
}: ProfileHeroProps) {
  return (
    <div className;
                    profileType === 'service' ? "bg-zion-purple/10" : "bg-zion-cyan/10"
                  )}
                  {profileType === 'service' ? 'Service Provider' : 'Talent'}
                </Badge>
              </div>

              <h2 className='text-lg md:text-xl text-zion-slate-light mb-1'>
                {title}
              </h2>

              <div className='flex flex-wrap items-center gap-3 mt-2'>
                {location && (
                  <span className='text-sm text-zion-slate-light'>
                    {location}
                  </span>
                )}

                {rating && (
                  <div className='flex items-center gap-1'>
                    <Star className='w-4 h-4 fill-zion-cyan text-zion-cyan' />
                    <span className='text-white font-medium'>
                      {rating.toFixed(1)}
                    </span>
                    {reviewCount && (
                      <span className='text-zion-slate-light text-sm'>
                        ({reviewCount})
                      </span>
                    )}
                  </div>
                )}

                {aiScore && (
                  <div className='px-2 py-0.5 rounded bg-zion-purple/20 text-xs font-medium text-zion-cyan'>                    AI Match: {aiScore}%                {location && (
                  <span className="text-sm text-zion-slate-light">{location}</span>
                )}
                
                {rating && (
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-zion-cyan text-zion-cyan" />
                    <span className="text-white font-medium">{rating.toFixed(1)}</span>
                    {reviewCount && (
                      <span className="text-zion-slate-light text-sm">({reviewCount})</span>
                    )}
                  </div>
                )}
                
                {aiScore && (
                  <div className="px-2 py-0.5 rounded bg-zion-purple/20 text-xs font-medium text-zion-cyan">
                    AI Match: {aiScore}%
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}}
}
