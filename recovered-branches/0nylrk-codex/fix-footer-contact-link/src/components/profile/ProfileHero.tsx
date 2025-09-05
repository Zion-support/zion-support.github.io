
<<<<<<< HEAD
<<<<<<< HEAD
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",
import { AspectRatio } from "@/components/ui/aspect-ratio",
import { Badge } from "@/components/ui/badge",
import { Star } from "lucide-react",
import { cn } from "@/lib/utils",
=======
import { Avatar, AvatarImage, AvatarFallback } from &quot;@/components/ui/avatar&quot;;
import { AspectRatio } from &quot;@/components/ui/aspect-ratio&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Star } from &quot;lucide-react&quot;;
import { cn } from &quot;@/lib/utils&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
    <div className=&quot;w-full overflow-hidden&quot;>
      <div className=&quot;relative&quot;>
        <AspectRatio ratio={3/1} className=&quot;bg-zion-blue-light&quot;>
          {coverImageUrl ? (
            <img 
              src={coverImageUrl} 
              alt={`${name} cover`} 
              className=&quot;w-full h-full object-cover&quot; 
=======

interface ProfileHeroProps {_name: string;
  title: string;
  avatarUrl?: string;
  coverImageUrl?: string;
  location?: string;
  rating?: number;
  reviewCount?: number;
  aiScore?: number;
  profileType: 'service' | 'talent';}

export function ProfileHero(_{_name, _title, _avatarUrl, _coverImageUrl, _location, _rating, _reviewCount, _aiScore, _profileType}: ProfileHeroProps) {_return (
    <div className="w-full overflow-hidden">
      <div className="relative">
        <AspectRatio ratio={3/1} className="bg-zion-blue-light">
          {_coverImageUrl ? (
            <img 
              src={coverImageUrl} 
              alt={_`${name} cover`} 
              className="w-full h-full object-cover" 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            />
          ) : (
            <div className=&quot;w-full h-full bg-gradient-to-r from-zion-blue via-zion-blue-light to-zion-blue-dark&quot; />
          )}
        </AspectRatio>
        
<<<<<<< HEAD
        <div className=&quot;container px-4 md:px-6&quot;>
          <div className=&quot;flex flex-col md:flex-row md:items-end -mt-16 md:-mt-20 relative z-10 mb-6 md:mb-10&quot;>
            <Avatar className=&quot;h-24 w-24 md:h-32 md:w-32 border-4 border-zion-blue-dark ring-2 ring-zion-purple/30&quot;>
              {avatarUrl ? (
                <AvatarImage src={avatarUrl} alt={name} />
              ) : (
                <AvatarFallback className=&quot;bg-zion-purple/20 text-zion-cyan text-xl&quot;>
                  {name.substring(0, 2).toUpperCase()}
=======
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end -mt-16 md:-mt-20 relative z-10 mb-6 md:mb-10">
            <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-zion-blue-dark ring-2 ring-zion-purple/30">
              {_avatarUrl ? (
                <AvatarImage src={avatarUrl} alt={_name} />
              ) : (
                <AvatarFallback className="bg-zion-purple/20 text-zion-cyan text-xl">
                  {_name.substring(0, _2).toUpperCase()}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </AvatarFallback>
              )}
            </Avatar>
            
<<<<<<< HEAD
            <div className=&quot;mt-4 md:mt-0 md:ml-6 md:mb-1&quot;>
              <div className=&quot;flex flex-wrap items-center gap-2 mb-1&quot;>
                <h1 className=&quot;text-2xl md:text-3xl font-bold text-white&quot;>{name}</h1>
                <Badge 
                  variant=&quot;outline&quot; 
                  className={cn(
                    &quot;ml-2 border-zion-purple/50 text-zion-cyan&quot;,
                    profileType === 'service' ? &quot;bg-zion-purple/10&quot; : &quot;bg-zion-cyan/10&quot;
=======
            <div className="mt-4 md:mt-0 md:ml-6 md:mb-1">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h1 className="text-2xl md:text-3xl font-bold text-white">{_name}</h1>
                <Badge 
                  variant="outline" 
                  className={_cn(
                    "ml-2 border-zion-purple/50 text-zion-cyan", _profileType === 'service' ? "bg-zion-purple/10" : "bg-zion-cyan/10"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  )}
                >
                  {_profileType === 'service' ? 'Service Provider' : 'Talent'}
                </Badge>
              </div>
              
<<<<<<< HEAD
              <h2 className=&quot;text-lg md:text-xl text-zion-slate-light mb-1&quot;>{title}</h2>
              
              <div className=&quot;flex flex-wrap items-center gap-3 mt-2&quot;>
                {location && (
                  <span className=&quot;text-sm text-zion-slate-light&quot;>{location}</span>
                )}
                
                {rating && (
                  <div className=&quot;flex items-center gap-1&quot;>
                    <Star className=&quot;w-4 h-4 fill-zion-cyan text-zion-cyan&quot; />
                    <span className=&quot;text-white font-medium&quot;>{rating.toFixed(1)}</span>
                    {reviewCount && (
                      <span className=&quot;text-zion-slate-light text-sm&quot;>({reviewCount})</span>
=======
              <h2 className="text-lg md:text-xl text-zion-slate-light mb-1">{_title}</h2>
              
              <div className="flex flex-wrap items-center gap-3 mt-2">
                {_location && (
                  <span className="text-sm text-zion-slate-light">{location}</span>
                )}
                
                {_rating && (
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-zion-cyan text-zion-cyan" />
                    <span className="text-white font-medium">{rating.toFixed(1)}</span>
                    {_reviewCount && (
                      <span className="text-zion-slate-light text-sm">({reviewCount})</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    )}
                  </div>
                )}
                
<<<<<<< HEAD
                {aiScore && (
                  <div className=&quot;px-2 py-0.5 rounded bg-zion-purple/20 text-xs font-medium text-zion-cyan&quot;>
=======
                {_aiScore && (
                  <div className="px-2 py-0.5 rounded bg-zion-purple/20 text-xs font-medium text-zion-cyan">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
}
