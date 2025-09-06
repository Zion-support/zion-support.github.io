<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


<<<<<<< HEAD
  avatarUrl?: string;
  coverImageUrl?: string;
  location?: string;
  rating?: number;
  reviewCount?: number;
  aiScore?: number;


  return (
    <div className='w-full overflow-hidden'>;
      <div className='relative'>;
        <AspectRatio ratio={3 / 1} className='bg-zion-blue-light'>          {coverImageUrl ? (;
            <img
              src={coverImageUrl}
              alt={`${name} cover`}
              className='w-full h-full object-cover'
              loading='lazy'

export function ProfileHero(): any ({

=======
<<<<<<< HEAD
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
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function ProfileHero({
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
    <div className="w-full overflow-hidden">;
      <div className="relative">;
        <AspectRatio ratio={3/1} className="bg-zion-blue-light">;
          {coverImageUrl ? (;
            <img
              src = {coverImageUrl,}
              alt={`${name} cover`}
              className='w-full h-full object-cover'
              loading='lazy'
            />;
          ) : (;
            <div className='w-full h-full bg-gradient-to-r from-zion-blue via-zion-blue-light to-zion-blue-dark' />;
          )}

        </AspectRatio>;

        <div className='container px-4 md:px-6'>;
          <div className='flex flex-col md:flex-row md:items-end -mt-16 md:-mt-20 relative z-10 mb-6 md:mb-10'>;
            <Avatar className='h-24 w-24 md:h-32 md:w-32 border-4 border-zion-blue-dark ring-2 ring-zion-purple/30'>;
              {avatarUrl ? (;
                <AvatarImage src={avatarUrl} alt={name} />;
              ) : (;
                <AvatarFallback className='bg-zion-purple/20 text-zion-cyan text-xl'>                  {name && name.substring(0, 2).toUpperCase()}
                </AvatarFallback>;

              )}
            </Avatar>            />;
          ) : (;
            <div className="w-full h-full bg-gradient-to-r from-zion-blue via-zion-blue-light to-zion-blue-dark" />;

=======
  profileType: 'service' | 'talent'
}

export function ProfileHero({
  name;
  title;
  avatarUrl;
  coverImageUrl;
  location;
  rating;
  reviewCount;
  aiScore;
=======


export function ProfileHero({

  name,
  title,
  avatarUrl,
  coverImageUrl,
  location,
  rating,
  reviewCount,
  aiScore,


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



              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-zion-blue via-zion-blue-light to-zion-blue-dark" />
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
          )}

        </AspectRatio>
        
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end -mt-16 md:-mt-20 relative z-10 mb-6 md:mb-10">
            <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-zion-blue-dark ring-2 ring-zion-purple/30">
              {avatarUrl ? (
                <AvatarImage src={avatarUrl} alt={name} />
              ) : (
                <AvatarFallback className="bg-zion-purple/20 text-zion-cyan text-xl">


        </AspectRatio>;

        <div className="container px-4 md:px-6">;
          <div className="flex flex-col md:flex-row md:items-end -mt-16 md:-mt-20 relative z-10 mb-6 md:mb-10">;
            <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-zion-blue-dark ring-2 ring-zion-purple/30">;
              {avatarUrl ? (;
                <AvatarImage src={avatarUrl} alt={name} />;
              ) : (;
                <AvatarFallback className="bg-zion-purple/20 text-zion-cyan text-xl">;
                  {name && name.substring(0, 2).toUpperCase()}
                </AvatarFallback>;
              )}
            </Avatar>;

            <div className='mt-4 md:mt-0 md:ml-6 md:mb-1'>;
              <div className='flex flex-wrap items-center gap-2 mb-1'>;
                <h1 className='text-2xl md:text-3xl font-bold text-white'>;


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                  {name}
                </h1>;
                <Badge
                  variant='outline'
                  className={cn(

                    'ml-2 border-zion-purple/50 text-zion-cyan'
                    profileType === 'service'
                      ? 'bg-zion-purple/10'

                  variant="outline" 
                  className={cn(
                    "ml-2 border-zion-purple/50 text-zion-cyan"
                    profileType === 'service' ? "bg-zion-purple/10" : "bg-zion-cyan/10"
                  )}
                  {profileType === 'service' ? 'Service Provider' : 'Talent'}

                </Badge>
              </div>
              
              <h2 className="text-lg md:text-xl text-zion-slate-light mb-1">{title}</h2>
              
              <div className="flex flex-wrap items-center gap-3 mt-2">
<<<<<<< HEAD


                {location && (
                  <span className="text-sm text-zion-slate-light">{location}</span>
                )}



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                {location && (
                  <span className="text-sm text-zion-slate-light">{location}</span>
                )}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
=======

                {rating && (;
                  <div className='flex items-center gap-1'>;
                    <Star className='w-4 h-4 fill-zion-cyan text-zion-cyan' />;
                    <span className='text-white font-medium'>;
                      {rating && rating.toFixed(1)}
                    </span>;
                    {reviewCount && (;
                      <span className='text-zion-slate-light text-sm'>;
                        ({reviewCount});
                      </span>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                    )}
                  </div>;
                )}



                {aiScore && (;
                  <div className='px-2 py-0 && 0.5 rounded bg-zion-purple/20 text-xs font-medium text-zion-cyan'>                    AI Match: {aiScore}%                {location && (;
                  <span className="text-sm text-zion-slate-light">{location}</span>;
                )}
<<<<<<< HEAD

                {rating && (;
                  <div className="flex items-center gap-1">;
                    <Star className="w-4 h-4 fill-zion-cyan text-zion-cyan" />;
                    <span className="text-white font-medium">{rating && rating.toFixed(1)}</span>;
                    {reviewCount && (;
                      <span className="text-zion-slate-light text-sm">({reviewCount})</span>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                    )}
                  </div>;
                )}


=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
