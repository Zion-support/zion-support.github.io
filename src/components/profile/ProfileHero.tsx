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
import { cn } from "@/lib/utils";
interface ProfileHeroProps {

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
xport function ProfileHero({
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


            <div className='w-full h-full bg-gradient-to-r from-zion-blue via-zion-blue-light to-zion-blue-dark' />
        <div className='container px-4 md:px-6'>
          <div className='flex flex-col md:flex-row md:items-end -mt-16 md:-mt-20 relative z-10 mb-6 md:mb-10'>
            <Avatar className='h-24 w-24 md:h-32 md:w-32 border-4 border-zion-blue-dark ring-2 ring-zion-purple/30'>
              {avatarUrl ? (
                <AvatarImage src={avatarUrl} alt={name} />
              ) : (
                <AvatarFallback className='bg-zion-purple/20 text-zion-cyan text-xl'>                  {name.substring(0, 2).toUpperCase()}
                </AvatarFallback>
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
