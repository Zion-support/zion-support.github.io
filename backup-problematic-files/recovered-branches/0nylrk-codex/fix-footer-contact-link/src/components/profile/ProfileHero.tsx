
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    <div className="w-full overflow-hidden">;
      <div className="relative">;
        <AspectRatio ratio={3/1} className="bg-zion-blue-light">;
          {coverImageUrl ? (;
<<<<<<< HEAD

        <div className="container px-4 md:px-6">;
          <div className="flex flex-col md:flex-row md:items-end -mt-16 md:-mt-20 relative z-10 mb-6 md:mb-10">;
            <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-zion-blue-dark ring-2 ring-zion-purple/30">;
              {avatarUrl ? (;
                <AvatarImage src={avatarUrl} alt={name} />;

              <div className="flex flex-wrap items-center gap-3 mt-2">;
                {location && (;
                  <span className="text-sm text-zion-slate-light">{location}</span>;
                )}

                    {reviewCount && (;
                      <span className="text-zion-slate-light text-sm">({reviewCount})</span>;
                    )}
                  </div>;
                )}

              </div>;
            </div>;
          </div>;
        </div>;
      </div>;

