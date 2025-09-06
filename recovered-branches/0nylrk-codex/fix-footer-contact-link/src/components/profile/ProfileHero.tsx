<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileHero.tsx


<<<<<<< HEAD
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",
import { AspectRatio } from "@/components/ui/aspect-ratio",
import { Badge } from "@/components/ui/badge",

=======



========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileHero.tsx
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import {Badge} from "@/components/ui/badge";
import {Star} from "lucide-react";
import {cn} from "@/lib/utils";
<<<<<<< HEAD
<<<<<<< HEAD
interface ProfileHeroProps {;
  name: string,;
  title: string,;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileHero.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileHero.tsx
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",
import { AspectRatio } from "@/components/ui/aspect-ratio",
import { Badge } from "@/components/ui/badge",
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
interface ProfileHeroProps {

  name: string
  title: string

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  avatarUrl?: string;
  coverImageUrl?: string;
  location?: string;
  rating?: number;
  reviewCount?: number;
  aiScore?: number;
<<<<<<< HEAD
<<<<<<< HEAD
  profileType: 'service' | 'talent';
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileHero.tsx


export function ProfileHero(): any ({;

========
export function ProfileHero(): any ({;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileHero.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileHero.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
import { Star } from "lucide-react",
import { cn } from "@/lib/utils",
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import { Star } from "lucide-react",
import { cn } from "@/lib/utils",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface ProfileHeroProps {
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

  profileType: 'service' | 'talent'
}

<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  profileType: 'service' | 'talent'
}

export function ProfileHero({;
  name;
  title;
  avatarUrl;
  coverImageUrl;
  location;
  rating;
  reviewCount;
  aiScore;
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export function ProfileHero({
  name,
  title,
  avatarUrl,
  coverImageUrl,
  location,
  rating,
  reviewCount,
  aiScore,
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  profileType
}: ProfileHeroProps) {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  profileType
}: ProfileHeroProps) {
  return (

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",;
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
                <AvatarFallback className="bg-zion-purple/20 text-zion-cyan text-xl">;
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  {name.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              )}
            </Avatar>
            <div className="mt-4 md:mt-0 md:ml-6 md:mb-1">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h1 className="text-2xl md:text-3xl font-bold text-white">{name}</h1>
                <Badge
                  variant="outline"
                  className={cn(
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

                    "ml-2 border-zion-purple/50 text-zion-cyan",

=======

========
  return (
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileHero.tsx
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileHero.tsx

=======

                    "ml-2 border-zion-purple/50 text-zion-cyan",

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                    "ml-2 border-zion-purple/50 text-zion-cyan";

                    "ml-2 border-zion-purple/50 text-zion-cyan",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
                    "ml-2 border-zion-purple/50 text-zion-cyan",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                    profileType === 'service' ? "bg-zion-purple/10" : "bg-zion-cyan/10"
                  )}>;
                  {profileType === 'service' ? 'Service Provider' : 'Talent'}

========
                    profileType === 'service' ? "bg-zion-purple/10" : "bg-zion-cyan/10"
                  )}>;
                  {profileType === 'service' ? 'Service Provider' : 'Talent'}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileHero.tsx
                </Badge>;
              </div>;
              <h2 className="text-lg md:text-xl text-zion-slate-light mb-1">{title}</h2>;
=======
              ) :(;
                <AvatarFallback className="bg-zion-purple/20 text-zion-cyan text-xl">;
                  {name.substring(0, 2).toUpperCase()}
                </AvatarFallback>;
              )}
            </Avatar>;
            ;
            <div className="mt-4 md:mt-0 md:ml-6 md:mb-1">;
              <div className="flex flex-wrap items-center gap-2 mb-1">;
                <h1 className="text-2xl md:text-3xl font-bold text-white">{name}</h1>;
                <Badge ;
                  variant="outline" ;
                  className={cn(;
                    "ml-2 border-zion-purple/50 text-zion-cyan",;
                    profileType === 'service' ? "bg-zion-purple/10" :"bg-zion-cyan/10";
                  )}
                >;
                  {profileType === 'service' ? 'Service Provider' :'Talent'}
                </Badge>;
              </div>;
              ;
              <h2 className="text-lg md:text-xl text-zion-slate-light mb-1">{title}</h2>;
              ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <div className="flex flex-wrap items-center gap-3 mt-2">;
                {location && (;
                  <span className="text-sm text-zion-slate-light">{location}</span>;
                )}
<<<<<<< HEAD
                {rating && (;
                  <div className="flex items-center gap-1">;
                    <Star className="w-4 h-4 fill-zion-cyan text-zion-cyan" />;
                    <span className="text-white font-medium">{rating && rating.toFixed(1)}</span>;
=======
                ;
                {rating && (;
                  <div className="flex items-center gap-1">;
                    <Star className="w-4 h-4 fill-zion-cyan text-zion-cyan" />;
                    <span className="text-white font-medium">{rating.toFixed(1)}</span>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    {reviewCount && (;
                      <span className="text-zion-slate-light text-sm">({reviewCount})</span>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileHero.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileHero.tsx
                    )}

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileHero.tsx
                )}

=======
=======
                    "ml-2 border-zion-purple/50 text-zion-cyan",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                    profileType === 'service' ? "bg-zion-purple/10" : "bg-zion-cyan/10"
                  )}
                >
                  {profileType === 'service' ? 'Service Provider' : 'Talent'}
                </Badge>
              </div>
              <h2 className="text-lg md:text-xl text-zion-slate-light mb-1">{title}</h2>
              <div className="flex flex-wrap items-center gap-3 mt-2">
                {location && (
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
                  </div>;
                  </div>;
                )}
                
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                {aiScore && (
                  <div className="px-2 py-0.5 rounded bg-zion-purple/20 text-xs font-medium text-zion-cyan">
                    AI Match: {aiScore}%
                  </div>
<<<<<<< HEAD
=======

                  </div>;
=======
=======
                  </div>;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                )}


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileHero.tsx
                {aiScore && (;
                  <div className="px-2 py-0 && 0.5 rounded bg-zion-purple/20 text-xs font-medium text-zion-cyan">;
                    AI Match: {aiScore}%;
                  </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                )}
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileHero.tsx

========
=======
                ;
                {aiScore && (;
                  <div className="px-2 py-0.5 rounded bg-zion-purple/20 text-xs font-medium text-zion-cyan">;
                    AI Match:{aiScore}%;
                  </div>;
                )}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileHero.tsx
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileHero.tsx

    </div>);
}

========
<<<<<<< HEAD
    </div>);
}
=======
    </div>;
  ),;}
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
}export function ProfileHero ({
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
  return (<div className="w-full overflow-hidden" > <div className="relative" > <AspectRatio ratio= {
  3/1 
}className="bg-zion-blue-light" > {
  coverImageUrl ? (<img src= {
  coverImageUrl 
}alt= {
  `$ {
  name 
}cover` 
}className="w-full h-full object-cover" w-full h-full bg-gradient-to-r from-zion-blue via-zion-blue-light to-zion-blue-dark" />) 
}</AspectRatio> </AvatarFallback>) 
}</Avatar>) 
}> {
  profileType === 'service' ? 'Service Provider' : 'Talent' 
}</Badge> </div>) 
}</div>) 
}AI Match: {
  aiScore 
}% </div>) 
}</div> </div> </div> </div> </div> </div>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileHero.tsx
=======
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
