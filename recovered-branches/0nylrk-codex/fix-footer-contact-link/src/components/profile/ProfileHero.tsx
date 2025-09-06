

<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
=======


import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",
import { AspectRatio } from "@/components/ui/aspect-ratio",
import { Badge } from "@/components/ui/badge",

<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import {Badge} from "@/components/ui/badge";
import {Star} from "lucide-react";
<<<<<<< HEAD
<<<<<<< HEAD
import {cn} from "@/lib/utils";
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
interface ProfileHeroProps {;
  name: string,;
  title: string,;
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",
import { AspectRatio } from "@/components/ui/aspect-ratio",
import { Badge } from "@/components/ui/badge",
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
interface ProfileHeroProps {

  name: string
  title: string
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  avatarUrl?: string;
=======
import {cn} from "@/lib/utils";  avatarUrl?: string;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import {cn} from "@/lib/utils";  avatarUrl?: string;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  coverImageUrl?: string;
  location?: string;
  rating?: number;
  reviewCount?: number;
  aiScore?: number;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Star } from "lucide-react",
import { cn } from "@/lib/utils",
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
  profileType: 'service' | 'talent';
}


export function ProfileHero(): any ({;

=======
export function ProfileHero(): any ({;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  profileType: 'service' | 'talent';
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  name;
  title;
  avatarUrl;
  coverImageUrl;
  location;
  rating;
  reviewCount;
  aiScore;
  profileType;
}: ProfileHeroProps) {;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
import { Star } from "lucide-react",
import { cn } from "@/lib/utils",
import { Star } from "lucide-react",
import { cn } from "@/lib/utils",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface ProfileHeroProps {
=======
  profileType: 'service' | 'talent';
}

export function ProfileHero(): any ({;interface ProfileHeroProps {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  profileType: 'service' | 'talent';
}

export function ProfileHero(): any ({;interface ProfileHeroProps {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  name: string,
  title: string,
  avatarUrl?: string,
  coverImageUrl?: string,
  location?: string,
  rating?: number,
  reviewCount?: number,
  aiScore?: number,
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======


  profileType
}: ProfileHeroProps) {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (


=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

export function ProfileHero({;
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-zion-blue via-zion-blue-light to-zion-blue-dark" />
          )}
        </AspectRatio>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end -mt-16 md:-mt-20 relative z-10 mb-6 md:mb-10">
            <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-zion-blue-dark ring-2 ring-zion-purple/30">
              {avatarUrl ? (
                <AvatarImage src={avatarUrl} alt={name} />
              ) : (
                <AvatarFallback className="bg-zion-purple/20 text-zion-cyan text-xl">
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",;
=======
  profileType: 'service' | 'talent'
}

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  profileType: 'service' | 'talent'
}

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
              src={coverImageUrl} ;
              alt={`${name} cover`} ;
              className="w-full h-full object-cover";
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
<<<<<<< HEAD
<<<<<<< HEAD
                <AvatarFallback className="bg-zion-purple/20 text-zion-cyan text-xl">;
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  {name.substring(0, 2).toUpperCase()}
=======
                <AvatarFallback className="bg-zion-purple/20 text-zion-cyan text-xl">;                  {name.substring(0, 2).toUpperCase()}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                <AvatarFallback className="bg-zion-purple/20 text-zion-cyan text-xl">;                  {name.substring(0, 2).toUpperCase()}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                </AvatarFallback>
              )}
            </Avatar>
            <div className="mt-4 md:mt-0 md:ml-6 md:mb-1">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h1 className="text-2xl md:text-3xl font-bold text-white">{name}</h1>
                <Badge
                  variant="outline"
<<<<<<< HEAD
<<<<<<< HEAD
                  className={cn(
<<<<<<< HEAD
                    "ml-2 border-zion-purple/50 text-zion-cyan";

                    "ml-2 border-zion-purple/50 text-zion-cyan",
                    "ml-2 border-zion-purple/50 text-zion-cyan",
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
  return (

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",;
import { AspectRatio } from "@/components/ui/aspect-ratio",;
import { Badge } from "@/components/ui/badge",;
import { Star } from "lucide-react",;
import { cn } from "@/lib/utils",;
;
interface ProfileHeroProps {;
  name:string,;
  title:string,;
  avatarUrl?:string,;
  coverImageUrl?:string,;
  location?:string,;
  rating?:number,;
  reviewCount?:number,;
  aiScore?:number,;
  profileType:'service' | 'talent';
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
  aiScore,;
  profileType;
} ProfileHeroProps) {;
  return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    <div className="w-full overflow-hidden">;
      <div className="relative">;
        <AspectRatio ratio={3/1} className="bg-zion-blue-light">;
          {coverImageUrl ? (;
<<<<<<< HEAD
            <img
              src={coverImageUrl} 
              alt={`${name} cover`} 
              className="w-full h-full object-cover" 
            />;
          ) : (;
            <div className="w-full h-full bg-gradient-to-r from-zion-blue via-zion-blue-light to-zion-blue-dark" />;
          )}
        </AspectRatio>;

=======
            <img ;
              src={coverImageUrl} ;
              alt={`${name} cover`} ;
              className="w-full h-full object-cover" ;
            />;
          ) :(;
            <div className="w-full h-full bg-gradient-to-r from-zion-blue via-zion-blue-light to-zion-blue-dark" />;
          )}
        </AspectRatio>;
        ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <div className="container px-4 md:px-6">;
          <div className="flex flex-col md:flex-row md:items-end -mt-16 md:-mt-20 relative z-10 mb-6 md:mb-10">;
            <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-zion-blue-dark ring-2 ring-zion-purple/30">;
              {avatarUrl ? (;
                <AvatarImage src={avatarUrl} alt={name} />;
<<<<<<< HEAD
              ) : (;
                <AvatarFallback className="bg-zion-purple/20 text-zion-cyan text-xl">;
                  {name && name.substring(0, 2).toUpperCase()}
                </AvatarFallback>;
              )}
            </Avatar>;

            <div className="mt-4 md:mt-0 md:ml-6 md:mb-1">;
              <div className="flex flex-wrap items-center gap-2 mb-1">;
                <h1 className="text-2xl md:text-3xl font-bold text-white">{name}</h1>;
                <Badge
                  variant="outline" 
                  className={cn(
                    "ml-2 border-zion-purple/50 text-zion-cyan"

=======

                    "ml-2 border-zion-purple/50 text-zion-cyan",

=======
=======
                    "ml-2 border-zion-purple/50 text-zion-cyan",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    profileType === 'service' ? "bg-zion-purple/10" : "bg-zion-cyan/10"
                  )}>;
                  {profileType === 'service' ? 'Service Provider' : 'Talent'}

=======

                    "ml-2 border-zion-purple/50 text-zion-cyan",

                    "ml-2 border-zion-purple/50 text-zion-cyan";

                    "ml-2 border-zion-purple/50 text-zion-cyan",
                    "ml-2 border-zion-purple/50 text-zion-cyan",
                    profileType === 'service' ? "bg-zion-purple/10" : "bg-zion-cyan/10"
                  )}>;
                  {profileType === 'service' ? 'Service Provider' : 'Talent'}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                </Badge>;
=======
                  className={cn(                </Badge>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                  className={cn(                </Badge>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              </div>;

              <h2 className="text-lg md:text-xl text-zion-slate-light mb-1">{title}</h2>;
              <div className="flex flex-wrap items-center gap-3 mt-2">;
                {location && (;
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
<<<<<<< HEAD
                  </div>
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                )}
                  </div>;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
                )}
                  </div>;
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                )}
=======
import { Avatar, AvatarImage, AvatarFallback } from '@/components / ui / avatar';
import { AspectRatio } from '@/components / ui / aspect - ratio';
import { Badge } from '@/components / ui / badge';
import { Star } from './lucide-react';
import { cn } from '@/lib / utils';
interface ProfileHeroProps {
  name: string,
  title: string,
  avatar_url?: string;
  coverImageUrl?: string;
  location?: string;
  rating?: number;
  review_count?: number;
  ai_score?: number;
  profile_type: 'service' | 'talent';
}
export /**
 * ProfileHero - Function description
 */
function ProfileHero() {
  return (
    <div className="w - full overflow - hidden">;
      <div className="relative">;
        <AspectRatio ratio={3 / 1} className="bg - zion - blue - light">;
          {coverImageUrl ? (
            <img;
              src={coverImageUrl}
              alt={`${name} cover`}
              className="w - full h - full object - cover";
            />) : (
            <div className="w - full h - full bg - gradient - to - r from - zion - blue via - zion - blue - light to - zion - blue - dark" />)}
        </AspectRatio>;
        <div className="container px - 4 md:px - 6">;
          <div className="flex flex - col md:flex - row md:items - end -mt - 16 md:-mt - 20 relative z - 10 mb - 6 md:mb - 10">;
            <Avatar className="h - 24 w - 24 md:h - 32 md:w - 32 border - 4 border - zion - blue - dark ring - 2 ring - zion - purple / 30">;
              {avatar_url ? (
                <AvatarImage src={avatar_url} alt={name} />) : (
                <AvatarFallback className="bg - zion - purple / 20 text - zion - cyan text - xl">;
                  {name.substring (0, 2).toUpperCase ()}
                </AvatarFallback>)}
            </Avatar>;
            <div className="mt - 4 md:mt - 0 md:ml - 6 md:mb - 1">;
              <div className="flex flex - wrap items - center gap - 2 mb - 1">;
                <h1 className="text - 2xl md:text - 3xl font - bold text - white">{name}</h1>;
                <Badge;
                  variant="outline";
                  className={cn (
                    "ml - 2 border - zion - purple / 50 text - zion - cyan";
                    profile_type === 'service' ? "bg - zion - purple / 10" : "bg - zion - cyan / 10")}
                >;
                  {profile_type === 'service' ? 'Service Provider' : 'Talent'}
                </Badge>;
              </div>;
              <h2 className="text - lg md:text - xl text - zion - slate - light mb - 1">{title}</h2>;
              <div className="flex flex - wrap items - center gap - 3 mt - 2">;
                {location && (
                  <span className="text - sm text - zion - slate - light">{location}</span>)}
                {rating && (
                  <div className="flex items - center gap - 1">;
                    <Star className="w - 4 h - 4 fill - zion - cyan text - zion - cyan" />;
                    <span className="text - white font - medium">{rating.to_fixed (1)}</span>;
                    {review_count && (
                      <span className="text - zion - slate - light text - sm">({review_count})</span>)}
                  </div>)}
                {ai_score && (
                  <div className="px - 2 py - 0.5 rounded bg - zion - purple / 20 text - xs font - medium text - zion - cyan">;
                    AI Match: {ai_score}%;
                  </div>)}
<<<<<<< HEAD

=======
                ;
                {aiScore && (;
                  <div className="px-2 py-0.5 rounded bg-zion-purple/20 text-xs font-medium text-zion-cyan">;
                    AI Match:{aiScore}%;
                  </div>;
                )}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
                )}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              </div>;
=======
                )}              </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                )}              </div>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            </div>;
          </div>;
        </div>;
      </div>;
