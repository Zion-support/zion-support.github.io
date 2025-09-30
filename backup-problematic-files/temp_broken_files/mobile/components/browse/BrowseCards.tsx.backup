<<<<<<< HEAD


import React, { useState } from "react";""
import { Card, CardContent } from "@/components/ui/card";""
import { Button } from "@/components/ui/button";""
import { Badge } from "@/components/ui/badge";""
import { Bookmark, BookmarkCheck, ChevronRight, MapPin, Clock, DollarSign } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";"
;
interface BrowseItem {;
  id: string;,;
  title: string;,;
  subtitle: string;,,
  description: string;,;
  location?:string,;
  badges: string[];,;

=======
import React, { useState } from "react",;
import { Card, CardContent } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import { Bookmark, BookmarkCheck, ChevronRight, MapPin, Clock, DollarSign } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",;
;
interface BrowseItem {;
  id:string,;
  title:string,;
  subtitle:string,;
  description:string,;
  location?:string,;
  badges:string[],;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  price?:string,;
  image?:string,;
  match?:number,;
  timePosted?:string;
}
;
interface BrowseCardsProps {;
<<<<<<< HEAD

  items: BrowseItem[];,;"
  type: "jobs" | "talents";,;"
  onViewDetails:(id:string) => void;
export function BrowseCards({ items, type, onViewDetails } BrowseCardsProps) {;
  const [savedItems, setSavedItems] = useState<string[]>([]),;
</string>"
    <div className="space-y-4 pb-24">;"
</div>"
        <Card key={item.id} className="overflow-hidden">;"
"
          <CardContent className="p-0">;"
            <div className="p-4">;"
              <div className="flex justify-between">;"
                <div className="flex items-center gap-3">;"
                    <Avatar className="h-12 w-12">;"

                      <AvatarImage src={item.image} alt={item.title} />;

                      <AvatarFallback>{item.title.charAt(0).toUpperCase()};
                    ;"
                    <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">;"
                      <span className="text-primary font-semibold">JOB</span>;"

=======
  items:BrowseItem[],;
  type:"jobs" | "talents",;
  onViewDetails:(id:string) => void;
}
;
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
                      <AvatarImage src={item.image} alt={item.title} />;
                      <AvatarFallback>{item.title.charAt(0).toUpperCase()}</AvatarFallback>;
                    </Avatar>;
                  ) :(;
                    <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">;
                      <span className="text-primary font-semibold">JOB</span>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    </div>;
                  )}
                  <div>;
<<<<<<< HEAD

                    <h3 className="font-medium">{item.title}</h3>;""
                    <p className="text-sm text-muted-foreground">{item.subtitle}</p>;"
                <button ;"
                  className="h-8 w-8 flex items-center justify-center";"
                  onClick={() => toggleSaved(item.id)}
</button>"
                    <BookmarkCheck className="h-5 w-5 text-primary" />;"
                    <Bookmark className="h-5 w-5 text-muted-foreground" />;"

                </button>;
              </div>;"
              <div className="mt-3 flex flex-wrap gap-1">;"
</div>
                  <Badge ;
                    key={index} ;"
                    variant="outline" ;""
                    className="text-xs font-normal";"
                  >;

              <p className="mt-3 text-sm line-clamp-2">{item.description}</p>;""
              <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground">;"
                  <div className="flex items-center gap-1">;"
                    <MapPin className="h-3 w-3" />;"

                    <span>{item.location}</span>;
                    <DollarSign className="h-3 w-3" />;"

                    <span>{item.price}</span>;
                    <Clock className="h-3 w-3" />;"

                    <span>{item.timePosted}</span>;
                  <div className="ml-auto bg-primary/10 text-primary rounded-full px-2 py-0.5">;"
            <div className="border-t border-border p-3 flex justify-end">;"
              <Button ;"
                size="sm";"

=======
                    <h3 className="font-medium">{item.title}</h3>;
                    <p className="text-sm text-muted-foreground">{item.subtitle}</p>;
                  </div>;
                </div>;
                ;
                <button ;
                  className="h-8 w-8 flex items-center justify-center";
                  onClick={() => toggleSaved(item.id)}
                >;
                  {savedItems.includes(item.id) ? (;
                    <BookmarkCheck className="h-5 w-5 text-primary" />;
                  ) :(;
                    <Bookmark className="h-5 w-5 text-muted-foreground" />;
                  )}
                </button>;
              </div>;
              ;
              <div className="mt-3 flex flex-wrap gap-1">;
                {item.badges.map((badge, index) => (;
                  <Badge ;
                    key={index} ;
                    variant="outline" ;
                    className="text-xs font-normal";
                  >;
                    {badge}
                  </Badge>;
                ))}
              </div>;
              ;
              <p className="mt-3 text-sm line-clamp-2">{item.description}</p>;
              ;
              <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground">;
                {item.location && (;
                  <div className="flex items-center gap-1">;
                    <MapPin className="h-3 w-3" />;
                    <span>{item.location}</span>;
                  </div>;
                )}
                ;
                {item.price && (;
                  <div className="flex items-center gap-1">;
                    <DollarSign className="h-3 w-3" />;
                    <span>{item.price}</span>;
                  </div>;
                )}
                ;
                {item.timePosted && (;
                  <div className="flex items-center gap-1">;
                    <Clock className="h-3 w-3" />;
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
            ;
            <div className="border-t border-border p-3 flex justify-end">;
              <Button ;
                size="sm";
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
  ),;}
 interface BrowseItem {;
  id: string;
title: string;
<<<<<<< HEAD

subtitle: string;,
  description: string;

=======
subtitle: string;
description: string;
>>>>>>> origin/cursor/delete-old-data-records-6bba
location?: string;
badges: string[];
price?: string;
image?: string;
match?: number;
timePosted?: string ;
}interface BrowseCardsProps {;
  ;
}export function BrowseCards ({;
  items,  type, onViewDetails ;
}: BrowseCardsProps) {;
<<<<<<< HEAD

                View Details <ChevronRight className="h-4 w-4" />;"

pr-12325
  const [savedItems, setSavedItems] = useState<string[]> ([]);
setSavedItems (prev => prev.includes (id) ? prev.filter (itemId => itemId !== id) ) : (<div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center" > <span className="text-primary font-semibold" >JOB</span> </div>) ";"}<div> </div> </div> <button) : (<Bookmark className="h-5 w-5 text-muted-foreground" />) ;""
}</button> </div> <Badge key= {;"  index ";"}variant="outline" className="text-xs font-normal" >{;"

}) ) ;
}</div> <span >{;
</span>
}</span> </div>) ;
}<span >{;


=======
  const [savedItems, setSavedItems] = useState<string[]> ([]);
setSavedItems (prev => prev.includes (id) ? prev.filter (itemId => itemId !== id) </Avatar>) : (<div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center" > <span className="text-primary font-semibold" >JOB</span> </div>) ";"}<div> </div> </div> <button) : (<Bookmark className="h-5 w-5 text-muted-foreground" />) ;
}</button> </div> <Badge key= {;"  index ";"}variant="outline" className="text-xs font-normal" >{;
  badge ;
}</Badge>) ) ;
}</div> <span >{;
  item.location ;
}</span> </div>) ;
}<span >{;
  item.price ;
}</span> </div>) ;
}<span >{;
  item.timePosted ;
}</span> </div>) ;
}{;
  item.match ;"}% match </div>) ";"}</div> </div> <div className="border-t border-border p-3 flex justify-end" > <Button > View Details <ChevronRight className="h-4 w-4" /> </Button> </div> </CardContent> </Card>) ) ;
}</div>) ;"}"
>>>>>>> origin/cursor/delete-old-data-records-6bba
