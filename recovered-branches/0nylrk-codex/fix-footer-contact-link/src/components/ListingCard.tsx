




import {cn} from "@/lib/utils";""
import {Badge} from "@/components/ui/badge";""
import {Link} from "react-router-dom";"
interface ListingCardProps {;
interface ListingCardProps {
  // TODO: Implement
}
  id?: string;
  title: string,;
  description: string,;
  image?: string;
  category: string,;
  tags?: string[];
  author?: string;


export function ListingCard(): any ({ ;
  id;
  tags?: string[];
  author?: string;)
export function ListingCard(): any ({ ;
  id;
"
import { cn } from "@/lib/utils",;""
import { Badge } from "@/components/ui/badge",;""
import { Link } from "react-router-dom",;"
;
interface ListingCardProps {;
  id?:string,;
  title:string,;
  description:string,;
  image?:string,;
  category:string,;
  tags?:string[],;
  author?:string,;
  authorImage?:string,;
  className?:string,;"
  profileType?:'service' | 'talent';'
}
;
export function ListingCard({ ;
  id,;
  title, ;
  description, ;
  image, ;
  category, ;
  tags, ;
  author, ;
  authorImage, ;
  className;'
  profileType = 'service';')
}: ListingCardProps) {;
  // Generate a profile ID based on the listing data;
  // In a real app, this would be a proper ID from the database;'
  const profileId = id || (profileType === 'service' ? 'service-provider-1' : 'talent-1');'
  tags?: string[];
  author?: string;
  return (
    <Link;
      to={`/profile/${profileId}`}
      className={cn('
        "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue hover: border-zion-purple/50 transition-all duration-300 group cursor-pointer""
interface ListingCardProps {
  // TODO: Implement
}
  id?: string,
  title: string,
  description: string,
  image?: string,
  category: string,
  tags?: string[],
  author?: string,
  authorImage?: string,
  className?: string,"
  profileType?: 'service' | 'talent'''
import { cn } from "@/lib/utils",;""
import { Badge } from "@/components/ui/badge",;""
import { Link } from "react-router-dom",;"
interface ListingCardProps {;
  id?: string,;
  title: string,;
  description: string,;
  image?: string,;
  category: string,;
  tags?: string[],;
  author?: string,;
  authorImage?: string,;
  className?: string,;"
  profileType?: 'service' | 'talent';'
}
;
export function ListingCard({;
  id,;
  title,;
  description,;
  image,;
  category,;
  tags,;
  author,;
  authorImage,;
  className,;'
  profileType = 'service';')
}: ListingCardProps) {;
  // Generate a profile ID based on the listing data;
  // In a real app, this would be a proper ID from the database;'
  const profileId = id || (profileType === 'service' ? 'service-provider-1' : 'talent-1');'
  return (;
    <Link;

      to={`/profile/${profileId}`}
      className={cn('
        "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue hover:border-zion-purple/50 transition-all duration-300 group cursor-pointer","
        className;
        className;
        className;)
      )}>;
</Link>"
        <div className="h-48 w-full overflow-hidden">;"
</div>
          <img;
            src={image} 
            alt={title} 
"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105""
      to={`/profile/${profileId}`}
      className={cn("
        "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue hover:border-zion-purple/50 transition-all duration-300 group cursor-pointer","
        className;"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105""
          />;
</img>
        </div>;"
      <div className="flex flex-col p-4 flex-grow">;"
</div>"
        <div className="mb-2">;"
</div>"
          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">;"
</Badge>
          </Badge>;
        </div>;"
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>;""
        <p className="text-zion-slate mb-4 flex-grow">{description}</p>;""
          <div className="flex flex-wrap gap-2 mb-4">;"
</div>"
              <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light">;"
</Badge>
              </Badge>;
          </div>;"
          <div className="flex items-center mt-auto pt-4 border-t border-zion-blue-light">"
</div>"
              <img src={authorImage} alt={author} className="h-8 w-8 rounded-full mr-2" />"
</img>"
              <div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2" />"
</div>"
          <div className="flex items-center mt-auto pt-4 border-t border-zion-blue-light">;"
</div>"
              <img src={authorImage} alt={author} className="h-8 w-8 rounded-full mr-2" />;"
</img>"
              <div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2" />;"
</div>"
            <span className="text-sm text-zion-slate-light">{author}</span>;"
          </div>;
      </div>;
    </Link>;
    <Link;
      to={`/profile/${profile_id}`}
      className={cn ("
        "flex flex - col overflow - hidden rounded - lg border border - zion - blue - light bg - zion - blue hover: border - zion - purple / 50 transition - all duration - 300 group cursor - pointer",")
        class_name)}
    >;
</Link>"
        <div className="h - 48 w - full overflow - hidden">;"
</div>
          <img;
            src={image}
            alt={title}"
            className="h - full w - full object - cover transition - transform duration - 300 group - hover:scale - 105";"
          />;
</img>
        </div>)}"
      <div className="flex flex - col p - 4 flex - grow">;"
</div>"
        <div className="mb - 2">;"
</div>"
          <Badge variant="secondary" className="bg - zion - purple / 20 text - zion - cyan hover:bg - zion - purple / 30">;"
</Badge>
          </Badge>;
        </div>;"
        <h3 className="text - xl font - bold mb - 2 text - white group - hover:text - zion - purple transition - colors">{title}</h3>;""
        <p className="text - zion - slate mb - 4 flex - grow">{description}</p>;""
          <div className="flex flex - wrap gap - 2 mb - 4">;"
</div>"
              <Badge key={i} variant="outline" className="border - zion - slate - dark text - zion - slate - light">;"
</Badge>
              </Badge>))}
          </div>)}"
          <div className="flex items - center mt - auto pt - 4 border - t border - zion - blue - light">;"
</div>"
              <img src={author_image} alt={author} className="h - 8 w - 8 rounded - full mr - 2" />) : ("
</img>)"
              <div className="h - 8 w - 8 rounded - full bg - zion - purple / 20 mr - 2" />)}"
</div>"
            <span className="text - sm text - zion - slate - light">{author}</span>;"
          </div>)}
      </div>;
    </Link>);
          </Badge>;
        </div>;"
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>;""
        <p className="text-zion-slate mb-4 flex-grow">{description}</p>;""
          <div className="flex flex-wrap gap-2 mb-4">;"
</div>"
              <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light">;"
</Badge>
              </Badge>;            ))}
          </div>;"
          <div className="flex items-center mt-auto pt-4 border-t border-zion-blue-light">;"
</div>"
              <img src={authorImage} alt={author} className="h-8 w-8 rounded-full mr-2" />;"
</img>"
              <div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2" />;"
</div>"
            <span className="text-sm text-zion-slate-light">{author}</span>;"
          </div>;
      </div>;
    </Link>;
}</Badge>) ) 
}</div>) "
}) : (<div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2" />)"
</div>
}</div>) 
}</div> </Link>) "
            <span className="text-sm text-zion-slate-light">{author}</span>"
          </div>
      </div>
    </Link>"