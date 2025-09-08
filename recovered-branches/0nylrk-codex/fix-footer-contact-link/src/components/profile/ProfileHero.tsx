


  profileType;
}: ProfileHeroProps) {;

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





                  className={cn(




                {rating && (;
                  <div className="flex items-center gap-1">;
                    <Star className="w-4 h-4 fill-zion-cyan text-zion-cyan" />;
                    <span className="text-white font-medium">{rating && rating.toFixed(1)}</span>;
                    {reviewCount && (;
                      <span className="text-zion-slate-light text-sm">({reviewCount})</span>;

                    )}



                  </div>;
                  </div>;


                  </div>;
                  </div>;

                )}
import { Avatar, AvatarImage, AvatarFallback } from '@/components / ui / avatar';
import { AspectRatio } from '@/components / ui / aspect - ratio';
import { Badge } from '@/components / ui / badge';
import { Star } from './lucide-react';
import { cn } from '@/lib / utils';
interface ProfileHeroProps {

                ;
                {aiScore && (;
                  <div className="px-2 py-0.5 rounded bg-zion-purple/20 text-xs font-medium text-zion-cyan">;
                    AI Match:{aiScore}%;
                  </div>;
                )}

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

                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}




