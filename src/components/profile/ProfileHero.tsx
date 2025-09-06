import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

<<<<<<< HEAD
=======
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Star } from 'lucide-react';
import { cn } from "@/lib/utils";
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
interface ProfileHeroProps {
  name: string;
  title: string;  avatarUrl?: string;
=======
  name: string,
  title: string,
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  avatarUrl?: string;
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  coverImageUrl?: string;
  location?: string;
  rating?: number;
  reviewCount?: number;
  aiScore?: number;
  profileType: 'service' | 'talent';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export function ProfileHero({
  name,
  title,
  avatarUrl,
  coverImageUrl,
  location,
  rating,
  reviewCount,
  aiScore,
  profileType,
}: ProfileHeroProps) {
  return (
    <div className='w-full overflow-hidden'>
      <div className='relative'>
        <AspectRatio ratio={3 / 1} className='bg-zion-blue-light'>          {coverImageUrl ? (
            <img
              src={coverImageUrl}
              alt={`${name} cover`}
              className='w-full h-full object-cover'
              loading='lazy'
=======
    <div className="w-full overflow-hidden">
      <div className="relative">
        <AspectRatio ratio={3/1} className="bg-zion-blue-light">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          {coverImageUrl ? (
            <img
              src = {coverImageUrl,}
              alt={`${name} cover`}
<<<<<<< HEAD
              className='w-full h-full object-cover'
              loading='lazy'
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
            </Avatar>
=======
                <AvatarFallback className="bg-zion-purple/20 text-zion-cyan text-xl">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  {name.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              )}
            </Avatar>
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

            <div className='mt-4 md:mt-0 md:ml-6 md:mb-1'>
              <div className='flex flex-wrap items-center gap-2 mb-1'>
                <h1 className='text-2xl md:text-3xl font-bold text-white'>
                  {name}
                </h1>
                <Badge
                  variant='outline'
                  className={cn(
                    'ml-2 border-zion-purple/50 text-zion-cyan',
                    profileType === 'service'
                      ? 'bg-zion-purple/10'
<<<<<<< HEAD
                      : 'bg-zion-cyan/10'                  )}
=======
            
            <div className="mt-4 md: mt-0 md:ml-6 md:mb-1">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h1 className="text-2xl md:text-3xl font-bold text-white">{name}</h1>
                <Badge 
                  variant="outline" 
<<<<<<< HEAD
                  className={cn(
                    "ml-2 border-zion-purple/50 text-zion-cyan";
                    profileType === 'service' ? "bg-zion-purple/10" : "bg-zion-cyan/10"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  )}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
=======
                  className = {cn(
                    "ml-2 border-zion-purple/50 text-zion-cyan",
                    profileType === 'service' ? "bg-zion-purple/10" : "bg-zion-cyan/10"
                  ),}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
                >
                  {profileType === 'service' ? 'Service Provider' : 'Talent'}
                </Badge>
              </div>

              <h2 className='text-lg md:text-xl text-zion-slate-light mb-1'>
                {title}
              </h2>

              <div className='flex flex-wrap items-center gap-3 mt-2'>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
                  <div className='px-2 py-0.5 rounded bg-zion-purple/20 text-xs font-medium text-zion-cyan'>                    AI Match: {aiScore}%
=======
                  <div className="px-2 py-0.5 rounded bg-zion-purple/20 text-xs font-medium text-zion-cyan">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    AI Match: {aiScore}%
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
=======
};
;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
