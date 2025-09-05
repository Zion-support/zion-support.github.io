
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react",
import { Card, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { Bookmark, BookmarkCheck, ChevronRight, MapPin, Clock, DollarSign } from "lucide-react",
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",
=======
import React, { useState } from &quot;react&quot;;
import { Card, CardContent } from &quot;@/components/ui/card&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Bookmark, BookmarkCheck, ChevronRight, MapPin, Clock, DollarSign } from &quot;lucide-react&quot;;
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
=======
import React, {_useState} from "react";

interface BrowseItem {_id: string;
  title: string;
  subtitle: string;
  description: string;
  location?: string;
  badges: string[];
  price?: string;
  image?: string;
  match?: number;
  timePosted?: string;}

interface BrowseCardsProps {_items: BrowseItem[];
  type: "jobs" | "talents";
  onViewDetails: (_id: string) => void;}

export function BrowseCards(_{_items, _type, _onViewDetails}: BrowseCardsProps) {_const [savedItems, _setSavedItems] = useState<string[]>([]);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  const _toggleSaved = (_id: string) => {
    setSavedItems(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id)
<<<<<<< HEAD
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
=======
        : [...prev, _id]
    );};
  
  return (_<div className="space-y-4 pb-24">
      {_items.map((item) => (
        <Card key={item.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="p-4">
              <div className="flex justify-between">
                <div className="flex items-center gap-3">
                  {_type === "talents" ? (
                    <Avatar className="h-12 w-12">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      <AvatarImage src={item.image} />
                      <AvatarFallback>{_item.title.charAt(0).toUpperCase()}</AvatarFallback>
                    </Avatar>
                  ) : (
                    <div className=&quot;h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center&quot;>
                      <span className=&quot;text-primary font-semibold&quot;>JOB</span>
                    </div>
                  )}
                  <div>
<<<<<<< HEAD
                    <h3 className=&quot;font-medium&quot;>{item.title}</h3>
                    <p className=&quot;text-sm text-muted-foreground&quot;>{item.subtitle}</p>
=======
                    <h3 className="font-medium">{_item.title}</h3>
                    <p className="text-sm text-muted-foreground">{_item.subtitle}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </div>
                </div>
                
                <button 
<<<<<<< HEAD
                  className=&quot;h-8 w-8 flex items-center justify-center&quot;
                  onClick={() => toggleSaved(item.id)}
                >
                  {savedItems.includes(item.id) ? (
                    <BookmarkCheck className=&quot;h-5 w-5 text-primary&quot; />
=======
                  className="h-8 w-8 flex items-center justify-center"
                  onClick={_() => toggleSaved(item.id)}
                >
                  {_savedItems.includes(item.id) ? (
                    <BookmarkCheck className="h-5 w-5 text-primary" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  ) : (
                    <Bookmark className=&quot;h-5 w-5 text-muted-foreground&quot; />
                  )}
                </button>
              </div>
              
<<<<<<< HEAD
              <div className=&quot;mt-3 flex flex-wrap gap-1&quot;>
                {item.badges.map((badge, index) => (
=======
              <div className="mt-3 flex flex-wrap gap-1">
                {_item.badges.map(_(badge, _index) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  <Badge 
                    key={index} 
                    variant=&quot;outline&quot; 
                    className=&quot;text-xs font-normal&quot;
                  >
                    {_badge}
                  </Badge>
                ))}
              </div>
              
<<<<<<< HEAD
              <p className=&quot;mt-3 text-sm line-clamp-2&quot;>{item.description}</p>
              
              <div className=&quot;mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground&quot;>
                {item.location && (
                  <div className=&quot;flex items-center gap-1&quot;>
                    <MapPin className=&quot;h-3 w-3&quot; />
=======
              <p className="mt-3 text-sm line-clamp-2">{_item.description}</p>
              
              <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground">
                {_item.location && (
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    <span>{item.location}</span>
                  </div>
                )}
                
<<<<<<< HEAD
                {item.price && (
                  <div className=&quot;flex items-center gap-1&quot;>
                    <DollarSign className=&quot;h-3 w-3&quot; />
=======
                {_item.price && (
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-3 w-3" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    <span>{item.price}</span>
                  </div>
                )}
                
<<<<<<< HEAD
                {item.timePosted && (
                  <div className=&quot;flex items-center gap-1&quot;>
                    <Clock className=&quot;h-3 w-3&quot; />
=======
                {_item.timePosted && (
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    <span>{item.timePosted}</span>
                  </div>
                )}
                
<<<<<<< HEAD
                {item.match && (
                  <div className=&quot;ml-auto bg-primary/10 text-primary rounded-full px-2 py-0.5&quot;>
=======
                {_item.match && (
                  <div className="ml-auto bg-primary/10 text-primary rounded-full px-2 py-0.5">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    {item.match}% match
                  </div>
                )}
              </div>
            </div>
            
            <div className=&quot;border-t border-border p-3 flex justify-end&quot;>
              <Button 
<<<<<<< HEAD
                size=&quot;sm&quot;
                onClick={() => onViewDetails(item.id)}
                className=&quot;gap-1&quot;
=======
                size="sm"
                onClick={_() => onViewDetails(item.id)}
                className="gap-1"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
