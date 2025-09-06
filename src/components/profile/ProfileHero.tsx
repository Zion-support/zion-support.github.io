import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Badge } from '@/components/ui/badge'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
interface ProfileHeroProps {;
  name: string;
  title: string;  avatarUrl?: string;  name: string,
  title: string,
  avatarUrl?: string
  coverImageUrl?: string
  location?: string
  rating?: number
  reviewCount?: number
  aiScore?: number
  profileType: 'service' | 'talent'

<<<<<<< HEAD
=======
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Badge } from '@/components/ui/badge'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
interface ProfileHeroProps {;
  name: string;
  title: string;  avatarUrl?: string;  name: string,
  title: string,
  avatarUrl?: string
  coverImageUrl?: string
  location?: string
  rating?: number
  reviewCount?: number
  aiScore?: number
  profileType: 'service' | 'talent'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",
import { AspectRatio } from "@/components/ui/aspect-ratio",
import { Badge } from "@/components/ui/badge";
import { Star } from 'lucide-react'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

export function ProfileHero({

=======
import { cn } from "@/lib/utils";
interface ProfileHeroProps {
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { cn } from "@/lib/utils";
interface ProfileHeroProps {
import { cn } from "@/lib/utils",
interface ProfileHeroProps {
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

  name: string
  title: string;  avatarUrl?: string;  name: string
  title: string
  avatarUrl?: string
  coverImageUrl?: string
  location?: string
  rating?: number
  reviewCount?: number
  aiScore?: number
  profileType: 'service' | 'talent'
<<<<<<< HEAD
<<<<<<< HEAD
xport function ProfileHero({
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function ProfileHero({
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
export function ProfileHero({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  name
  title
  avatarUrl
  coverImageUrl
  location
  rating
  reviewCount
  aiScore
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  name,
  title,
  avatarUrl,
  coverImageUrl,
  location,
  rating,
  reviewCount,
  aiScore,
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  profileType
}: ProfileHeroProps) {
  return (
    <div className="w-full overflow-hidden">
      <div className="relative">
        <AspectRatio ratio={3/1} className="bg-zion-blue-light">
          {coverImageUrl ? (
            <img
              src={coverImageUrl}
              alt={`${name} cover`}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              className='w-full h-full object-cover'
              loading='lazy'
export function ProfileHero({
  name
  title
  avatarUrl
  coverImageUrl
  location
  rating
  reviewCount
  aiScore
  profileType
}: ProfileHeroProps) {
  return (
    <div className="w-full overflow-hidden">
      <div className="relative">
        <AspectRatio ratio={3/1} className="bg-zion-blue-light">
          {coverImageUrl ? (
            <img
              src = {coverImageUrl,}
              alt={`${name} cover`}
              className='w-full h-full object-cover'
              loading='lazy'
<<<<<<< HEAD
            />
          ) : (
            <div className='w-full h-full bg-gradient-to-r from-zion-blue via-zion-blue-light to-zion-blue-dark' />
          )}
        </AspectRatio>
        <div className='container px-4 md:px-6'>
          <div className='flex flex-col md:flex-row md:items-end -mt-16 md:-mt-20 relative z-10 mb-6 md:mb-10'>
            <Avatar className='h-24 w-24 md:h-32 md:w-32 border-4 border-zion-blue-dark ring-2 ring-zion-purple/30'>
              {avatarUrl ? (
                <AvatarImage src={avatarUrl} alt={name} />
              ) : (
                <AvatarFallback className='bg-zion-purple/20 text-zion-cyan text-xl'>                  {name.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              )}
            </Avatar>            />
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-zion-blue via-zion-blue-light to-zion-blue-dark" />
          )}
        </AspectRatio>
>>>>>>>         <div className="container px-4 md:px-6">
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
            />
          ) : (
            <div className='w-full h-full bg-gradient-to-r from-zion-blue via-zion-blue-light to-zion-blue-dark' />
          )}
        </AspectRatio>
        <div className='container px-4 md:px-6'>
          <div className='flex flex-col md:flex-row md:items-end -mt-16 md:-mt-20 relative z-10 mb-6 md:mb-10'>
            <Avatar className='h-24 w-24 md:h-32 md:w-32 border-4 border-zion-blue-dark ring-2 ring-zion-purple/30'>
              {avatarUrl ? (
                <AvatarImage src={avatarUrl} alt={name} />
              ) : (
                <AvatarFallback className='bg-zion-purple/20 text-zion-cyan text-xl'>                  {name.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              )}
            </Avatar>            />
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-zion-blue via-zion-blue-light to-zion-blue-dark" />
          )}
        </AspectRatio>
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-zion-blue via-zion-blue-light to-zion-blue-dark" />
          )}
        </AspectRatio>
        
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <div className="container px-4 md:px-6">
>>>>>>>           <div className="flex flex-col md:flex-row md:items-end -mt-16 md:-mt-20 relative z-10 mb-6 md:mb-10">
            <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-zion-blue-dark ring-2 ring-zion-purple/30">
              {avatarUrl ? (
                <AvatarImage src={avatarUrl} alt={name} />
              ) : (
                <AvatarFallback className="bg-zion-purple/20 text-zion-cyan text-xl">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  {name.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              )}
            </Avatar>
            <div className='mt-4 md:mt-0 md:ml-6 md:mb-1'>
              <div className='flex flex-wrap items-center gap-2 mb-1'>
                <h1 className='text-2xl md:text-3xl font-bold text-white'>
                  {name}
                </h1>
                <Badge
                  variant='outline'
                  className={cn(
                    'ml-2 border-zion-purple/50 text-zion-cyan'
                    profileType === 'service'
                      ? 'bg-zion-purple/10'
                      : 'bg-zion-cyan/10'                  )}
            <div className="mt-4 md: mt-0 md:ml-6 md:mb-1">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h1 className="text-2xl md:text-3xl font-bold text-white">{name}</h1>
                <Badge
                  variant="outline"
                  className={cn(
                    "ml-2 border-zion-purple/50 text-zion-cyan"

                    profileType === 'service' ? "bg-zion-purple/10" : "bg-zion-cyan/10"
                  )}
                  {profileType === 'service' ? 'Service Provider' : 'Talent'}
                </Badge>
              </div>
              <h2 className='text-lg md:text-xl text-zion-slate-light mb-1'>
                {title}
              </h2>
              <div className='flex flex-wrap items-center gap-3 mt-2'>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>                 {location && (
                  <span className="text-sm text-zion-slate-light">{location}</span>
                )}
                  {name}
                </h1>;
                <Badge
                  variant='outline'
                  className={cn(

                    'ml-2 border-zion-purple/50 text-zion-cyan'
                    profileType === 'service'
                      ? 'bg-zion-purple/10'

=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",;
import { AspectRatio } from "@/components/ui/aspect-ratio",;
import { Badge } from "@/components/ui/badge",;
import { Star } from 'lucide-react';
import { cn } from "@/lib/utils",;
interface ProfileHeroProps {;
  name: string,;
  title: string,;
  avatarUrl?: string,;
  coverImageUrl?: string,;
  location?: string,;
  rating?: number,;
  reviewCount?: number,;
  aiScore?: number,;
  profileType: 'service' | 'talent';
}
;
export function ProfileHero({;
  name,;
  title,;
  avatarUrl,;
  coverImageUrl,;
  location,;
  rating,;
  reviewCount,;
  aiScore;
  profileType;
}: ProfileHeroProps) {;
  return (;
    <div className="w-full overflow-hidden">;
      <div className="relative">;
        <AspectRatio ratio={3/1} className="bg-zion-blue-light">;
          {coverImageUrl ? (;
            <img;
              src={coverImageUrl}
              alt={`${name} cover`}
              className="w-full h-full object-cover";
              loading="lazy";
            />;
          ) : (;
            <div className="w-full h-full bg-gradient-to-r from-zion-blue via-zion-blue-light to-zion-blue-dark" />;
          )}
        </AspectRatio>;
        <div className="container px-4 md:px-6">;
          <div className="flex flex-col md:flex-row md:items-end -mt-16 md:-mt-20 relative z-10 mb-6 md:mb-10">;
            <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-zion-blue-dark ring-2 ring-zion-purple/30">;
              {avatarUrl ? (;
                <AvatarImage src={avatarUrl} alt={name} />;
              ) : (;
                <AvatarFallback className="bg-zion-purple/20 text-zion-cyan text-xl">;
                  {name.substring(0, 2).toUpperCase()}
                </AvatarFallback>;
              )}
            </Avatar>
            
            <div className="mt-4 md:mt-0 md:ml-6 md:mb-1">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h1 className="text-2xl md:text-3xl font-bold text-white">{name}</h1>
                <Badge 
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  variant="outline" 
                  className={cn(
                    "ml-2 border-zion-purple/50 text-zion-cyan",
                    profileType === 'service' ? "bg-zion-purple/10" : "bg-zion-cyan/10"
                  )}
                >;
                  {profileType === 'service' ? 'Service Provider' : 'Talent'}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                </Badge>
              </div>
              
              <h2 className="text-lg md:text-xl text-zion-slate-light mb-1">{title}</h2>
              
              <div className="flex flex-wrap items-center gap-3 mt-2">
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                {location && (
                  <span className="text-sm text-zion-slate-light">{location}</span>
                )}

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
                {location && (
                  <span className="text-sm text-zion-slate-light">{location}</span>
                )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

                {rating && (
=======


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>                 {rating && (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
};
;
}
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                {rating && (
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-zion-cyan text-zion-cyan" />
                    <span className="text-white font-medium">{rating.toFixed(1)}</span>
                    {reviewCount && (
                      <span className="text-zion-slate-light text-sm">({reviewCount})</span>
                    )}
                  </div>;
<<<<<<< HEAD
                )}



                {aiScore && (;
                  <div className='px-2 py-0 && 0.5 rounded bg-zion-purple/20 text-xs font-medium text-zion-cyan'>                    AI Match: {aiScore}%                {location && (;
                  <span className="text-sm text-zion-slate-light">{location}</span>;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                )}
                
                {aiScore && (
                  <div className="px-2 py-0.5 rounded bg-zion-purple/20 text-xs font-medium text-zion-cyan">
                    AI Match: {aiScore}%
                  </div>
                )}
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
    </div>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
