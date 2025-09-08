


  id: string
  title: string
  subtitle: string
  description: string
  location?: string;
  badges: string[]

  price?: string;
  image?: string;
  match?: number;
import { Bookmark, BookmarkCheck, ChevronRight, MapPin, Clock, DollarSign } from "lucide-react",
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",


              <div className="mt-3 flex flex-wrap gap-1">;





      ))}
    </div>;
  time_posted?: string;
}
interface BrowseCardsProps {
  items: BrowseItem[],
  type: "jobs" | "talents",
  onViewDetails: (id: string) => void;
}
export /**
 * BrowseCards - Function description
 */
function BrowseCards() {





