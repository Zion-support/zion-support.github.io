
<<<<<<< HEAD
<<<<<<< HEAD
import {cn} from "@/lib/utils";
import {Badge} from "@/components/ui/badge";
import {Link} from "react-router-dom";
import { cn } from "@/lib/utils",
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

import {cn} from "@/lib/utils";"
import {Badge} from "@/components/ui/badge";"
import {Link} from "react-router-dom";
interface ListingCardProps {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface ListingCardProps {
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
interface ListingCardProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  id?: string;
  title: string,;
  description: string,;
  image?: string;
  category: string,;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  tags?: string[];
  author?: string;
  title, ;
  description, ;
  image, ;
  category, ;
  tags, ;
  author, ;
  authorImage, ;
tags?: string[];
  author?: string;

title
  description
  image
  category
  tags
  author
  authorImage
  className;
  profileType = 'service'
}: ListingCardProps) {
  // Generate a profile ID based on the listing data
  // In a real app, this would be a proper ID from the database
  const profileId = id |(profileType === 'service' ? 'service-provider-1' : 'talent-1');
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  className;
  profileType = 'service';
}: ListingCardProps) {;
  // Generate a profile ID based on the listing data;
  // In a real app, this would be a proper ID from the database;
  const profileId = id || (profileType === 'service' ? 'service-provider-1' : 'talent-1');

  tags?: string[];
  author?: string;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (
    <Link;
      to={`/profile/${profileId}`}
      className={cn("
        "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue hover: border-zion-purple/50 transition-all duration-300 group cursor-pointer"
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
import { Badge } from "@/components/ui/badge",
import { Link } from "react-router-dom",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
interface ListingCardProps {
=======

interface ListingCardProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  id?: string,
  title: string,
  description: string,
  image?: string,
  category: string,
  tags?: string[],
  author?: string,
  authorImage?: string,
  className?: string,
<<<<<<< HEAD
  profileType?: 'service' | 'talent'
<<<<<<< HEAD
<<<<<<< HEAD
}
          <div className="flex items-center mt-auto pt-4 border-t border-zion-blue-light">
            {authorImage ? (
              <img src={authorImage} alt={author} className="h-8 w-8 rounded-full mr-2" />
            ) : (
              <div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2" />
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { cn } from "@/lib/utils",;
import { Badge } from "@/components/ui/badge",;
=======
"
import { cn } from "@/lib/utils",;"
import { Badge } from "@/components/ui/badge",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Link } from "react-router-dom",;
interface ListingCardProps {;
  id?: string,;
  title: string,;
  description: string,;
  image?: string,;
  category: string,;
  tags?: string[],;
  author?: string,;
  authorImage?: string,;
  className?: string,;'
  profileType?: 'service' | 'talent';
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
  className,;
  profileType = 'service';
}: ListingCardProps) {;
  // Generate a profile ID based on the listing data;
  // In a real app, this would be a proper ID from the database;
  const profileId = id || (profileType === 'service' ? 'service-provider-1' : 'talent-1');
  return (;
    <Link;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      to={`/profile/${profileId}`}
      className={cn(
        "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue hover:border-zion-purple/50 transition-all duration-300 group cursor-pointer",
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

      to={`/profile/${profileId}`}
      className={cn(
        "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue hover:border-zion-purple/50 transition-all duration-300 group cursor-pointer",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        className
      )}>;
      {image && (;"
        <div className="h-48 w-full overflow-hidden">;
          <img;
            src={image} 
            alt={title} 

`
      to={`/profile/${profileId}`}
      className={cn("
        "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue hover:border-zion-purple/50 transition-all duration-300 group cursor-pointer",
        className"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"

          />;
        </div>;
      )}"
      <div className="flex flex-col p-4 flex-grow">;"
        <div className="mb-2">;"
          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">;

            {category}

                {tag}
              </Badge>;
            ))}
          </div>;
        )}
to={`/profile/${profileId}`}
      className={cn(
        "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue hover:border-zion-purple/50 transition-all duration-300 group cursor-pointer",
        className
      )}
    >
      {image && (
        <div className="h-48 w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-col p-4 flex-grow">
        <div className="mb-2">
          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">
            {category}
          </Badge>
        </div>
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>
        <p className="text-zion-slate mb-4 flex-grow">{description}</p>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
              <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light">
                {tag}
              </Badge>
            ))}
          </div>
        )}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        {author && (
=======
  profileType?: 'service' | 'talent'        {author && (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        {author && ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <div className="flex items-center mt-auto pt-4 border-t border-zion-blue-light">
            {authorImage ? ("
              <img src={authorImage} alt={author} className="h-8 w-8 rounded-full mr-2" />
            ) : ("
              <div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2" />
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

        {author && (;"
          <div className="flex items-center mt-auto pt-4 border-t border-zion-blue-light">;
            {authorImage ? (;"
              <img src={authorImage} alt={author} className="h-8 w-8 rounded-full mr-2" />;
            ) : (;"
              <div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2" />;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            )}
            <span className="text-sm text-zion-slate-light">{author}</span>;
          </div>;
        )}
</div>;
    </Link>;
  );
}

author_image?: string;
  class_name?: string;'
  profile_type?: 'service' | 'talent';
}
export /**;
 * ListingCard - Function description;
 */
function ListingCard() {}
  // Generate a profile ID based on the listing data;
  // In a real app, this would be a proper ID from the database;'
  const profile_id = id || (profile_type === 'service' ? 'service - provider - 1' : 'talent - 1');
;
  return (
    <Link;`
      to={`/profile/${profile_id}`}
      className={cn ("
        "flex flex - col overflow - hidden rounded - lg border border - zion - blue - light bg - zion - blue hover: border - zion - purple / 50 transition - all duration - 300 group cursor - pointer",
        class_name)}
    >;
      {image && ("
        <div className="h - 48 w - full overflow - hidden">;
          <img;
            src={image}
            alt={title}"
            className="h - full w - full object - cover transition - transform duration - 300 group - hover:scale - 105";
          />;
        </div>)}"
      <div className="flex flex - col p - 4 flex - grow">;"
        <div className="mb - 2">;"
          <Badge variant="secondary" className="bg - zion - purple / 20 text - zion - cyan hover:bg - zion - purple / 30">;
            {category}
          </Badge>;
        </div>;"
        <h3 className="text - xl font - bold mb - 2 text - white group - hover:text - zion - purple transition - colors">{title}</h3>;"
        <p className="text - zion - slate mb - 4 flex - grow">{description}</p>;
        {tags && tags.length > 0 && ("
          <div className="flex flex - wrap gap - 2 mb - 4">;
            {tags.map ((tag, i) => ("
              <Badge key={i} variant="outline" className="border - zion - slate - dark text - zion - slate - light">;
                {tag}
              </Badge>))}
          </div>)}
{author && ("
          <div className="flex items - center mt - auto pt - 4 border - t border - zion - blue - light">;
            {author_image ? ("
              <img src={author_image} alt={author} className="h - 8 w - 8 rounded - full mr - 2" />) : ("
              <div className="h - 8 w - 8 rounded - full bg - zion - purple / 20 mr - 2" />)}"
            <span className="text - sm text - zion - slate - light">{author}</span>;
          </div>)}
      </div>;
    </Link>);
}
'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    );

              ;            ))}
}) ) 
}</div>) "
}) : (<div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2" />)"
}</div>) 
}</div> ) "
            <span className="text-sm text-zion-slate-light">{author}</span>"
    "`;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
