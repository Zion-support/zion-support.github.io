
=======
import { cn } from "@/lib/utils",;
import { Badge } from "@/components/ui/badge",;
import { Link } from "react-router-dom",;
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
  className?:string,;
  profileType?:'service' | 'talent';
}
;
export function ListingCard({ ;
  id,;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  title, ;
  description, ;
  image, ;
  category, ;
  tags, ;
  author, ;
  authorImage, ;
<<<<<<< HEAD

          />;
        </div>;
      )}
      <div className="flex flex-col p-4 flex-grow">;
        <div className="mb-2">;
          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">;

