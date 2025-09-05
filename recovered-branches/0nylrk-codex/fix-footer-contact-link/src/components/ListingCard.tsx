
<<<<<<< HEAD
<<<<<<< HEAD
import { cn } from "@/lib/utils",
import { Badge } from "@/components/ui/badge",
import { Link } from "react-router-dom",
=======
import { cn } from &quot;@/lib/utils&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Link } from &quot;react-router-dom&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface ListingCardProps {
  id?: string,
  title: string,
  description: string,
  image?: string,
  category: string,
  tags?: string[],
  author?: string,
  authorImage?: string,
  className?: string,
  profileType?: 'service' | 'talent'
}

export function ListingCard({ 
  id,
  title, 
  description, 
  image, 
  category, 
  tags, 
  author, 
  authorImage, 
  className,
  profileType = 'service'
}: ListingCardProps) {
  // Generate a profile ID based on the listing data
  // In a real app, this would be a proper ID from the database
  const profileId = id || (profileType === 'service' ? 'service-provider-1' : 'talent-1'),
=======

interface ListingCardProps {_id?: string;
  title: string;
  description: string;
  image?: string;
  category: string;
  tags?: string[];
  author?: string;
  authorImage?: string;
  className?: string;
  profileType?: 'service' | 'talent';}

export function ListingCard(_{_id, _title, _description, _image, _category, _tags, _author, _authorImage, _className, _profileType = 'service'}: ListingCardProps) {_// Generate a profile ID based on the listing data
  // In a real app, _this would be a proper ID from the database
  const _profileId = id || (profileType === 'service' ? 'service-provider-1' : 'talent-1');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <Link 
      to={`/profile/${profileId}`}
<<<<<<< HEAD
      className={cn(
        &quot;flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue hover:border-zion-purple/50 transition-all duration-300 group cursor-pointer&quot;,
        className
      )}
    >
      {image && (
        <div className=&quot;h-48 w-full overflow-hidden&quot;>
          <img 
            src={image} 
            alt={title} 
            className=&quot;h-full w-full object-cover transition-transform duration-300 group-hover:scale-105&quot;
          />
        </div>
      )}
      <div className=&quot;flex flex-col p-4 flex-grow&quot;>
        <div className=&quot;mb-2&quot;>
          <Badge variant=&quot;secondary&quot; className=&quot;bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30&quot;>
            {category}
          </Badge>
        </div>
        <h3 className=&quot;text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors&quot;>{title}</h3>
        <p className=&quot;text-zion-slate mb-4 flex-grow&quot;>{description}</p>
        
        {tags && tags.length > 0 && (
          <div className=&quot;flex flex-wrap gap-2 mb-4&quot;>
            {tags.map((tag, i) => (
              <Badge key={i} variant=&quot;outline&quot; className=&quot;border-zion-slate-dark text-zion-slate-light&quot;>
                {tag}
=======
      className={_cn(
        "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue hover:border-zion-purple/50 transition-all duration-300 group cursor-pointer", _className
      )}
    >
      {_image && (
        <div className="h-48 w-full overflow-hidden">
          <img 
            src={image} 
            alt={_title} 
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-col p-4 flex-grow">
        <div className="mb-2">
          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">
            {_category}
          </Badge>
        </div>
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{_title}</h3>
        <p className="text-zion-slate mb-4 flex-grow">{_description}</p>
        
        {_tags && tags.length > 0 && (_<div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, _i) => (
              <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light">
                {_tag}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </Badge>
            ))}
          </div>
        )}
        
<<<<<<< HEAD
        {author && (
          <div className=&quot;flex items-center mt-auto pt-4 border-t border-zion-blue-light&quot;>
            {authorImage ? (
              <img src={authorImage} alt={author} className=&quot;h-8 w-8 rounded-full mr-2&quot; />
=======
        {_author && (
          <div className="flex items-center mt-auto pt-4 border-t border-zion-blue-light">
            {authorImage ? (
              <img src={authorImage} alt={_author} className="h-8 w-8 rounded-full mr-2" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            ) : (
              <div className=&quot;h-8 w-8 rounded-full bg-zion-purple/20 mr-2&quot; />
            )}
<<<<<<< HEAD
            <span className=&quot;text-sm text-zion-slate-light&quot;>{author}</span>
=======
            <span className="text-sm text-zion-slate-light">{_author}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </div>
        )}
      </div>
    </Link>
  )
}
