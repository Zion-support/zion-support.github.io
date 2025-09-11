<<<<<<< HEAD
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

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",
import { AspectRatio } from "@/components/ui/aspect-ratio",
import { Badge } from "@/components/ui/badge";
import { Star } from 'lucide-react'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
avatarUrl?: string;
  coverImageUrl?: string;
  location?: string;
  rating?: number;
  reviewCount?: number;
  aiScore?: number;

<<<<<<< HEAD
<<<<<<< HEAD
export function ProfileHero({

import { cn } from "@/lib/utils";
interface ProfileHeroProps {
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
export function ProfileHero({
export function ProfileHero({
  name
  title
  avatarUrl
  coverImageUrl
  location
  rating
  reviewCount
  aiScore
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
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <div className="w-full overflow-hidden">
      <div className="relative">
        <AspectRatio ratio={3/1} className="bg-zion-blue-light">
          {coverImageUrl ? (
<<<<<<< HEAD
=======

  return (
    <div className='w-full overflow-hidden'>;
      <div className='relative'>;
        <AspectRatio ratio={3 / 1} className='bg-zion-blue-light'>          {coverImageUrl ? (;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <img
              src={coverImageUrl}
              alt={`${name} cover`}
              className='w-full h-full object-cover'
              loading='lazy'
<<<<<<< HEAD
<<<<<<< HEAD
export function ProfileHero({
=======

export function ProfileHero(): any ({

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

export function ProfileHero(): any ({

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              src = {coverImageUrl,}
              alt={`${name} cover`}
              className='w-full h-full object-cover'
              loading='lazy'
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
<<<<<<< HEAD
=======
              src={coverImageUrl}
              alt={`${name} cover`}



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-zion-blue via-zion-blue-light to-zion-blue-dark" />
          )}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </AspectRatio>
        


        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end -mt-16 md:-mt-20 relative z-10 mb-6 md:mb-10">
            <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-zion-blue-dark ring-2 ring-zion-purple/30">
              {avatarUrl ? (
                <AvatarImage src={avatarUrl} alt={name} />
              ) : (
                <AvatarFallback className="bg-zion-purple/20 text-zion-cyan text-xl">
                  {name.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              )}
<<<<<<< HEAD
            </Avatar>
            <div className='mt-4 md:mt-0 md:ml-6 md:mb-1'>
              <div className='flex flex-wrap items-center gap-2 mb-1'>
                <h1 className='text-2xl md:text-3xl font-bold text-white'>
=======


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


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  {name}
                </h1>
                <Badge
                  variant='outline'
                  className={cn(
                    'ml-2 border-zion-purple/50 text-zion-cyan'
                    profileType === 'service'
                      ? 'bg-zion-purple/10'
<<<<<<< HEAD
                      : 'bg-zion-cyan/10'                  )}
            <div className="mt-4 md: mt-0 md:ml-6 md:mb-1">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h1 className="text-2xl md:text-3xl font-bold text-white">{name}</h1>
                <Badge
                  variant="outline"
                  className={cn(
                    "ml-2 border-zion-purple/50 text-zion-cyan"

            <div className='mt-4 md:mt-0 md:ml-6 md:mb-1'>;
              <div className='flex flex-wrap items-center gap-2 mb-1'>;
                <h1 className='text-2xl md:text-3xl font-bold text-white'>;


                  {name}
                </h1>;
                <Badge
                  variant='outline'
                  className={cn(

                    'ml-2 border-zion-purple/50 text-zion-cyan'
                    profileType === 'service'
                      ? 'bg-zion-purple/10'

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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
                  {name && name.substring(0, 2).toUpperCase()}
                </AvatarFallback>;
              )}
            </Avatar>;

            <div className='mt-4 md:mt-0 md:ml-6 md:mb-1'>;
              <div className='flex flex-wrap items-center gap-2 mb-1'>;
                <h1 className='text-2xl md:text-3xl font-bold text-white'>;


                  {name}
                </h1>
                <Badge
                  variant='outline'
                  className={cn(

                    'ml-2 border-zion-purple/50 text-zion-cyan'
                    profileType === 'service'
                      ? 'bg-zion-purple/10'

                  variant="outline" 
                  className={cn(
                    "ml-2 border-zion-purple/50 text-zion-cyan",
                    profileType === 'service' ? "bg-zion-purple/10" : "bg-zion-cyan/10"
                  )}
                >;
                  {profileType === 'service' ? 'Service Provider' : 'Talent'}

                </Badge>
              </div>
              
              <h2 className="text-lg md:text-xl text-zion-slate-light mb-1">{title}</h2>
              
              <div className="flex flex-wrap items-center gap-3 mt-2">
<<<<<<< HEAD
<<<<<<< HEAD
                {location && (
                  <span className="text-sm text-zion-slate-light">{location}</span>
                )}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                {location && (
                  <span className="text-sm text-zion-slate-light">{location}</span>
                )}


<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                {rating && (


=======

                {rating && (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <div className='flex items-center gap-1'>
                    <Star className='w-4 h-4 fill-zion-cyan text-zion-cyan' />
                    <span className='text-white font-medium'>
                      {rating.toFixed(1)}
                    </span>
                    {reviewCount && (
                      <span className='text-zion-slate-light text-sm'>
                        ({reviewCount})
                      </span>
<<<<<<< HEAD
<<<<<<< HEAD
                
                {rating && (<div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-zion-cyan text-zion-cyan"/>
                    <span className="text-white font-medium">{rating.toFixed(1)}</span>
                    {reviewCount && (
                      <span className="text-zion-slate-light text-sm">({reviewCount})</span>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
                    )}
<<<<<<< HEAD
<<<<<<< HEAD
                  </div>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </div>
                )}



                {aiScore && (;
                  <div className='px-2 py-0 && 0.5 rounded bg-zion-purple/20 text-xs font-medium text-zion-cyan'>                    AI Match: {aiScore}%                {location && (;
                  <span className="text-sm text-zion-slate-light">{location}</span>;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                )}

                {rating && (;
                  <div className="flex items-center gap-1">;
                    <Star className="w-4 h-4 fill-zion-cyan text-zion-cyan" />;
                    <span className="text-white font-medium">{rating && rating.toFixed(1)}</span>;
                    {reviewCount && (;
                      <span className="text-zion-slate-light text-sm">({reviewCount})</span>;
                    )}
<<<<<<< HEAD
                  </div>;
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
;
=======
                  </div>
                )}


;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                )}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
