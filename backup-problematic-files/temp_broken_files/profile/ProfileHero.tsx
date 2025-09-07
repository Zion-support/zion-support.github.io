
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",;""
import { AspectRatio } from "@/components/ui/aspect-ratio",;""
import { Badge } from "@/components/ui/badge",;""
import { Star } from 'lucide-react';''
import { cn } from "@/lib/utils",;"
;
interface ProfileHeroProps {;
  name:string,;
  title:string,;
  avatarUrl?:string,;
  coverImageUrl?:string,;
  location?:string,;
  rating?:number,;
  reviewCount?:number,;
  aiScore?:number,;"
  profileType:'service' | 'talent';'
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
  profileType;)
} ProfileHeroProps) {;
  return (;'
    <div className="w-full overflow-hidden">;"
</div>"
      <div className="relative">;"
</div>"
        <AspectRatio ratio={3/1} className="bg-zion-blue-light">;"
</AspectRatio>
            <img;
              src={coverImageUrl}
              alt={`${name} cover`}"
              className="w-full h-full object-cover";""
              loading="lazy";"
            />;
</img>"
            <div className="w-full h-full bg-gradient-to-r from-zion-blue via-zion-blue-light to-zion-blue-dark" />;"
</div>
        </AspectRatio>;"
        <div className="container px-4 md:px-6">;"
</div>"
          <div className="flex flex-col md:flex-row md:items-end -mt-16 md:-mt-20 relative z-10 mb-6 md:mb-10">;"
</div>"
            <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-zion-blue-dark ring-2 ring-zion-purple/30">;"
</Avatar>
                <AvatarImage src={avatarUrl} alt={name} />;
</AvatarImage>"
                <AvatarFallback className="bg-zion-purple/20 text-zion-cyan text-xl">;"
</AvatarFallback>
                </AvatarFallback>;
            </Avatar>;"
            <div className="mt-4 md:mt-0 md:ml-6 md:mb-1">;"
</div>"
              <div className="flex flex-wrap items-center gap-2 mb-1">;"
</div>"
                <h1 className="text-2xl md:text-3xl font-bold text-white">{name}</h1>;"
                <Badge ;"
                  variant="outline" ;"
                  className={cn(;"
                    "ml-2 border-zion-purple/50 text-zion-cyan",;""
                    profileType === 'service' ? "bg-zion-purple/10" :"bg-zion-cyan/10";")
                  )}
                >;
</Badge>
                </Badge>;
              </div>;"
              <h2 className="text-lg md:text-xl text-zion-slate-light mb-1">{title}</h2>;""
              <div className="flex flex-wrap items-center gap-3 mt-2">;"
</div>"
                  <span className="text-sm text-zion-slate-light">{location}</span>;""
                  <div className="flex items-center gap-1">;"
</div>"
                    <Star className="w-4 h-4 fill-zion-cyan text-zion-cyan" />;"
</Star>"
                    <span className="text-white font-medium">{rating.toFixed(1)}</span>;""
                      <span className="text-zion-slate-light text-sm">({reviewCount})</span>;"
                  </div>;"
                  <div className="px-2 py-0.5 rounded bg-zion-purple/20 text-xs font-medium text-zion-cyan">;"
</div>
                  </div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
    </div>;"
  return (<div className="w-full overflow-hidden" > <div className="relative" > <AspectRatio ratio= {;"  3/1 ";"}className="bg-zion-blue-light" > {;"
</div>
  coverImageUrl ? (<img src= {;
  coverImageUrl ;
}alt= {;
  `$ {;)"
  name ;"}cover` ";"}className="w-full h-full object-cover" loading="lazy" w-full h-full bg-gradient-to-r from-zion-blue via-zion-blue-light to-zion-blue-dark" />) ;"
</img>
}</AspectRatio> </AvatarFallback>) ;
}</Avatar>) ;
}</Badge> </div>) ;
}</div>) ;
}% </div>) ;"
}</div> </div> </div> </div> </div> </div>) ;"}'""
}</div> </div> </div> </div> </div> </div>) ;"