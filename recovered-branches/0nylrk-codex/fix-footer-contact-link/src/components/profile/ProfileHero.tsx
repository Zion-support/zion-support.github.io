<<<<<<< HEAD

<<<<<<< HEAD
=======




>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import {Badge} from "@/components/ui/badge";
import {Star} from "lucide-react";
import {cn} from "@/lib/utils";
<<<<<<< HEAD
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",
import { AspectRatio } from "@/components/ui/aspect-ratio",
import { Badge } from "@/components/ui/badge",
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
interface ProfileHeroProps {

  name: string
  title: string
=======
interface ProfileHeroProps {;
  name: string,;
  title: string,;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  avatarUrl?: string;
  coverImageUrl?: string;
  location?: string;
  rating?: number;
  reviewCount?: number;
  aiScore?: number;
<<<<<<< HEAD
import { Star } from "lucide-react",
import { cn } from "@/lib/utils",
=======
  profileType: 'service' | 'talent';
}
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
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
<<<<<<< HEAD

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
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  profileType
}: ProfileHeroProps) {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
                    "ml-2 border-zion-purple/50 text-zion-cyan";

                    "ml-2 border-zion-purple/50 text-zion-cyan",
                    "ml-2 border-zion-purple/50 text-zion-cyan",
=======

    <div className="w-full overflow-hidden">;
      <div className="relative">;
        <AspectRatio ratio={3/1} className="bg-zion-blue-light">;
          {coverImageUrl ? (;
            <img
              src={coverImageUrl} 
              alt={`${name} cover`} 
              className="w-full h-full object-cover" 
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
  return (
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                    profileType === 'service' ? "bg-zion-purple/10" : "bg-zion-cyan/10"
                  )}>;
                  {profileType === 'service' ? 'Service Provider' : 'Talent'}
                    )}
<<<<<<< HEAD
<<<<<<< HEAD
                  </div>
=======


                  </div>;
=======
=======
                  </div>;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                )}
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                  </div>;
                  </div>;
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
=======
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
