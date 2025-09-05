
<<<<<<< HEAD
import React, { useState } from "react",
import { Card, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { Bookmark, BookmarkCheck, ChevronRight, MapPin, Clock, DollarSign } from 'lucide-react'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",
=======
import React, { useState } from &quot;react&quot;;
import { Card, CardContent } from &quot;@/components/ui/card&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Bookmark, BookmarkCheck, ChevronRight, MapPin, Clock, DollarSign } from 'lucide-react'
import { Avatar, AvatarImage, AvatarFallback } from &quot;@/components/ui/avatar&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

interface BrowseItem {
  id: string,
  title: string,
  subtitle: string,
  description: string,
  location?: string,
  badges: string[],
  price?: string,
  image?: string,
  match?: number,
  timePosted?: string
}

interface BrowseCardsProps {
<<<<<<< HEAD
  items: BrowseItem[],
  type: "jobs" | "talents",
  onViewDetails: (id: string) => void
=======
  items: BrowseItem[];
  type: &quot;jobs&quot; | &quot;talents&quot;;
  onViewDetails: (id: string) => void;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
}

export function BrowseCards({ items, type, onViewDetails }: BrowseCardsProps) {
  const [savedItems, setSavedItems] = useState<string[]>([]),
  
  const toggleSaved = (id: string) => {
    setSavedItems(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    )
  },
  
  return (
    <div className=&quot;space-y-4 pb-24&quot;>
      {items.map((item) => (
        <Card key={item.id} className=&quot;overflow-hidden&quot;>
          <CardContent className=&quot;p-0&quot;>
            <div className=&quot;p-4&quot;>
              <div className=&quot;flex justify-between&quot;>
                <div className=&quot;flex items-center gap-3&quot;>
                  {type === &quot;talents&quot; ? (
                    <Avatar className=&quot;h-12 w-12&quot;>
                      <AvatarImage src={item.image} alt={item.title} />
                      <AvatarFallback>{item.title.charAt(0).toUpperCase()}</AvatarFallback>
                    </Avatar>
                  ) : (
                    <div className=&quot;h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center&quot;>
                      <span className=&quot;text-primary font-semibold&quot;>JOB</span>
                    </div>
                  )}
                  <div>
                    <h3 className=&quot;font-medium&quot;>{item.title}</h3>
                    <p className=&quot;text-sm text-muted-foreground&quot;>{item.subtitle}</p>
                  </div>
                </div>
                
                <button 
                  className=&quot;h-8 w-8 flex items-center justify-center&quot;
                  onClick={() => toggleSaved(item.id)}
                >
                  {savedItems.includes(item.id) ? (
                    <BookmarkCheck className=&quot;h-5 w-5 text-primary&quot; />
                  ) : (
                    <Bookmark className=&quot;h-5 w-5 text-muted-foreground&quot; />
                  )}
                </button>
              </div>
              
              <div className=&quot;mt-3 flex flex-wrap gap-1&quot;>
                {item.badges.map((badge, index) => (
                  <Badge 
                    key={index} 
                    variant=&quot;outline&quot; 
                    className=&quot;text-xs font-normal&quot;
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
              
              <p className=&quot;mt-3 text-sm line-clamp-2&quot;>{item.description}</p>
              
              <div className=&quot;mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground&quot;>
                {item.location && (
                  <div className=&quot;flex items-center gap-1&quot;>
                    <MapPin className=&quot;h-3 w-3&quot; />
                    <span>{item.location}</span>
                  </div>
                )}
                
                {item.price && (
                  <div className=&quot;flex items-center gap-1&quot;>
                    <DollarSign className=&quot;h-3 w-3&quot; />
                    <span>{item.price}</span>
                  </div>
                )}
                
                {item.timePosted && (
                  <div className=&quot;flex items-center gap-1&quot;>
                    <Clock className=&quot;h-3 w-3&quot; />
                    <span>{item.timePosted}</span>
                  </div>
                )}
                
                {item.match && (
                  <div className=&quot;ml-auto bg-primary/10 text-primary rounded-full px-2 py-0.5&quot;>
                    {item.match}% match
                  </div>
                )}
              </div>
            </div>
            
            <div className=&quot;border-t border-border p-3 flex justify-end&quot;>
              <Button 
                size=&quot;sm&quot;
                onClick={() => onViewDetails(item.id)}
                className=&quot;gap-1&quot;
              >
                View Details <ChevronRight className=&quot;h-4 w-4&quot; />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
