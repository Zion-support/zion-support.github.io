
import React, { useState } from "react",;
import { Card, CardContent } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import { Bookmark, BookmarkCheck, ChevronRight, MapPin, Clock, DollarSign } from "lucide-react",;
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",;
;
interface BrowseItem {;
  id:string,;
  title:string,;
subtitle:string,;
  description:string,;
  location?:string,;
  badges: string[];,;
  price?:string,;
  image?:string,;
  match?:number,;
  timePosted?:string;
}
interface BrowseCardsProps {;
  items: BrowseItem[];,;"
  type: "jobs" | "talents";,;"
  onViewDetails:(id:string) => void;
export function BrowseCards({ items, type, onViewDetails } BrowseCardsProps) {;
  const [savedItems, setSavedItems] = useState<string[]>([]),;
;
  const toggleSaved = (id:string) => {;
    setSavedItems(prev => ;
      prev.includes(id) ;
        ? prev.filter(itemId => itemId !== id);
        :[...prev, id];
    ),;
  },;
  ;
  return (;
    <div className="space-y-4 pb-24">;
      {items.map((item) => (;
        <Card key={item.id} className="overflow-hidden">;
          <CardContent className="p-0">;
            <div className="p-4">;
              <div className="flex justify-between">;
                <div className="flex items-center gap-3">;
                  {type === "talents" ? (;
                    <Avatar className="h-12 w-12">;
                    <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">;
                      <span className="text-primary font-semibold">JOB</span>;
                    </div>;
                  <div>;
<Bookmark className="h-5 w-5 text-muted-foreground" />;
                  )}
                </button>;
              </div>;

                  <Badge ;
                    key={index} ;"
                    variant="outline" ;""
                    className="text-xs font-normal";"
                  >;
                    {badge}
                  </Badge>;
                ))}
              </div>;
                    <span>{item.location}</span>;
                    <DollarSign className="h-3 w-3" />;"

                    <span>{item.price}</span>;
                    <Clock className="h-3 w-3" />;"

                    <span>{item.timePosted}</span>;
</div>;
                )}
                ;
                {item.match && (;
                  <div className="ml-auto bg-primary/10 text-primary rounded-full px-2 py-0.5">;
                    {item.match}% match;
                  </div>;
                )}
              </div>;
            </div>;
                onClick={() => onViewDetails(item.id)}
                className="gap-1";
              >;
                View Details <ChevronRight className="h-4 w-4" />;
              </Button>;
            </div>;
          </CardContent>;
        </Card>;
      ))}
    </div>;
