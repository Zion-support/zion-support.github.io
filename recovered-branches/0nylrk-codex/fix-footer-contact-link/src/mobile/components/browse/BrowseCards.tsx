<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/browse/BrowseCards.tsx


<<<<<<< HEAD
import React, { useState } from "react",
import { Card, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",

=======



========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/browse/BrowseCards.tsx
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useState } from "react";
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Bookmark, BookmarkCheck, ChevronRight, MapPin, Clock, DollarSign} from "lucide-react";
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
<<<<<<< HEAD
<<<<<<< HEAD
interface BrowseItem {;
  id: string,;
  title: string,;
  subtitle: string,;
  description: string,;
import React, { useState } from './react';
import { Card, CardContent } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { Badge } from '@/components / ui / badge';
import { Bookmark, BookmarkCheck, ChevronRight, MapPin, Clock, DollarSign } from './lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components / ui / avatar';
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useState } from "react",
import { Card, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { Bookmark, BookmarkCheck, ChevronRight, MapPin, Clock, DollarSign } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
interface BrowseItem {

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

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface BrowseItem {
  id: string,
  title: string,
  subtitle: string,
  description: string,
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/browse/BrowseCards.tsx
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  location?: string,
  badges: string[],
  price?: string,
  image?: string,
  match?: number,
<<<<<<< HEAD
<<<<<<< HEAD

  timePosted?: string
}
interface BrowseCardsProps {
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/browse/BrowseCards.tsx
  location?: string;
  badges: string[],;
  price?: string;
  image?: string;
  match?: number;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/browse/BrowseCards.tsx

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee


<<<<<<< HEAD
  onViewDetails: (id: string) => void
}

export function BrowseCards({ items, type, onViewDetails }: BrowseCardsProps) {
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  timePosted?: string
}
interface BrowseCardsProps {

  items: BrowseItem[]
  type: "jobs" | "talents"

  onViewDetails: (id: string) => void
}

export function BrowseCards({ items, type, onViewDetails }: BrowseCardsProps) {;
  const [savedItems, setSavedItems] = useState<string[]>([]);
export function BrowseCards({ items, type, onViewDetails }: BrowseCardsProps) {
  const [savedItems, setSavedItems] = useState<string[]>([]);

  const [savedItems, setSavedItems] = useState<string[]>([]),
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const toggleSaved = (id: string) => {
    setSavedItems(prev =>
      prev.includes(id)
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/browse/BrowseCards.tsx
interface BrowseCardsProps {;
  items: BrowseItem[],;
  type: "jobs" | "talents",;
  onViewDetails: (id: string) => void;
}
export function BrowseCards(): any ({ items, type, onViewDetails }: BrowseCardsProps) {;
  const [savedItems, setSavedItems] = useState<string[]>([]);
  const toggleSaved = (id: string) => {;
    setSavedItems(prev => ;
      prev && prev.includes(id) ;
        ? prev && prev.filter(itemId => itemId !== id);
        : [...prev, id];
    );
  };
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/browse/BrowseCards.tsx

=======

  },
  
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/browse/BrowseCards.tsx
  return (
    <div className="space-y-4 pb-24">;
      {items && items.map((item) => (;
        <Card key={item && item.id} className="overflow-hidden">;
=======

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
  badges:string[],;
  price?:string,;
  image?:string,;
  match?:number,;
  timePosted?:string;
}
;
interface BrowseCardsProps {;
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          <CardContent className="p-0">;
            <div className="p-4">;
              <div className="flex justify-between">;
                <div className="flex items-center gap-3">;
                  {type === "talents" ? (;
                    <Avatar className="h-12 w-12">;
<<<<<<< HEAD
                      <AvatarImage src={item && item.image} />;
                      <AvatarFallback>{item && item.title.charAt(0).toUpperCase()}</AvatarFallback>;
                    </Avatar>;
                  ) : (;
=======
                      <AvatarImage src={item.image} />;
                      <AvatarFallback>{item.title.charAt(0).toUpperCase()}</AvatarFallback>;
                    </Avatar>;
                  ) :(;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">;
                      <span className="text-primary font-semibold">JOB</span>;
                    </div>;
                  )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/browse/BrowseCards.tsx
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }

  },
  
  return (
    <div className="space-y-4 pb-24">
      {items.map((item) => (
        <Card key={item.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="p-4">
              <div className="flex justify-between">
                <div className="flex items-center gap-3">
                  {type === "talents" ? (
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={item.image} />
                      <AvatarFallback>{item.title.charAt(0).toUpperCase()}</AvatarFallback>
                    </Avatar>
                  ) : (
                    <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold">JOB</span>
                    </div>
                  )}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                  </div>
                </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/browse/BrowseCards.tsx
                  <div>;
<<<<<<< HEAD
                    <h3 className="font-medium">{item && item.title}</h3>;
                    <p className="text-sm text-muted-foreground">{item && item.subtitle}</p>;
                  </div>;
                </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/browse/BrowseCards.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/browse/BrowseCards.tsx
                <button
=======

                <button 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  className="h-8 w-8 flex items-center justify-center"
                  onClick={() => toggleSaved(item && item.id)}
                >;
                  {savedItems && savedItems.includes(item && item.id) ? (;
                    <BookmarkCheck className="h-5 w-5 text-primary" />;
                  ) : (;
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    <Bookmark className="h-5 w-5 text-muted-foreground" />;
                  )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/browse/BrowseCards.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                <button
                <button 
                  className="h-8 w-8 flex items-center justify-center"
                  onClick={() => toggleSaved(item.id)}
                >
                  {savedItems.includes(item.id) ? (
                    <BookmarkCheck className="h-5 w-5 text-primary" />
                  ) : (
                    <Bookmark className="h-5 w-5 text-muted-foreground" />
                  )}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                </button>
              </div>
              <div className="mt-3 flex flex-wrap gap-1">
                {item.badges.map((badge, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-xs font-normal"
                  >
<<<<<<< HEAD
<<<<<<< HEAD

=======

=======

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useState } from "react",;
import { Card, CardContent } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import { Bookmark, BookmarkCheck, ChevronRight, MapPin, Clock, DollarSign } from "lucide-react",;
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",;
interface BrowseItem {;
  id: string,;
  title: string,;
  subtitle: string,;
  description: string,;
  location?: string,;
  badges: string[],;
  price?: string,;
  image?: string,;
  match?: number,;
  timePosted?: string;
}
;
interface BrowseCardsProps {;
  items: BrowseItem[],;
  type: "jobs" | "talents",;
  onViewDetails: (id: string) => void;
}
;
export function BrowseCards({ items, type, onViewDetails }: BrowseCardsProps) {;
  const [savedItems, setSavedItems] = useState<string[]>([]);
  const toggleSaved = (id: string) => {;
    setSavedItems(prev =>;
      prev.includes(id);
        ? prev.filter(itemId => itemId !== id);
        : [...prev, id];
    );
  };
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
                      <AvatarImage src={item.image} />;
                      <AvatarFallback>{item.title.charAt(0).toUpperCase()}</AvatarFallback>;
                    </Avatar>;
                  ) : (;
                    <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">;
                      <span className="text-primary font-semibold">JOB</span>;
                    </div>;
                  )}
                  <div>;
                    <h3 className="font-medium">{item.title}</h3>;
                    <p className="text-sm text-muted-foreground">{item.subtitle}</p>;
                  </div>;
                </div>;
                <button;
                  className="h-8 w-8 flex items-center justify-center";
                  onClick={() => toggleSaved(item.id)}
                >;
                  {savedItems.includes(item.id) ? (;
                    <BookmarkCheck className="h-5 w-5 text-primary" />;
                  ) : (;
                    <Bookmark className="h-5 w-5 text-muted-foreground" />;
                  )}
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/browse/BrowseCards.tsx
                </button>;
              </div>;
<<<<<<< HEAD
              <div className="mt-3 flex flex-wrap gap-1">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/browse/BrowseCards.tsx

=======
                </button>;
              </div>;
              <div className="mt-3 flex flex-wrap gap-1">;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                {item.badges.map((badge, index) => (;
                  <Badge;
                    key={index} ;
                    variant="outline";
                    className="text-xs font-normal";
                  >;
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                    {badge}
                  </Badge>;
                ))}

========
                {item && item.badges.map((badge, index) => (;
                  <Badge
                    key={index} 
                    variant="outline" 
                    className="text-xs font-normal">;
=======
              ;
              <div className="mt-3 flex flex-wrap gap-1">;
                {item.badges.map((badge, index) => (;
                  <Badge ;
                    key={index} ;
                    variant="outline" ;
                    className="text-xs font-normal";
                  >;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    {badge}
                  </Badge>;
                ))}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/browse/BrowseCards.tsx
              </div>;
<<<<<<< HEAD
              <p className="mt-3 text-sm line-clamp-2">{item && item.description}</p>;
              <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground">;
                {item && item.location && (;
                  <div className="flex items-center gap-1">;
                    <MapPin className="h-3 w-3" />;
                    <span>{item && item.location}</span>;
                  </div>;
                )}
                {item && item.price && (;
                  <div className="flex items-center gap-1">;
                    <DollarSign className="h-3 w-3" />;
                    <span>{item && item.price}</span>;
                  </div>;
                )}
                {item && item.timePosted && (;
                  <div className="flex items-center gap-1">;
                    <Clock className="h-3 w-3" />;
                    <span>{item && item.timePosted}</span>;
                  </div>;
                )}
                {item && item.match && (;
                  <div className="ml-auto bg-primary/10 text-primary rounded-full px-2 py-0 && 0.5">;
                    {item && item.match}% match;
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  </div>;
                )}
              </div>;
            </div>;
<<<<<<< HEAD
            <div className="border-t border-border p-3 flex justify-end">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/browse/BrowseCards.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/browse/BrowseCards.tsx
              <Button
                size="sm"
                onClick={() => onViewDetails(item && item.id)}
=======
            ;
            <div className="border-t border-border p-3 flex justify-end">;
              <Button ;
                size="sm";
                onClick={() => onViewDetails(item.id)}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                className="gap-1";
              >;
                View Details <ChevronRight className="h-4 w-4" />;
              </Button>;
            </div>;
          </CardContent>;
        </Card>;
      ))}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/browse/BrowseCards.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/browse/BrowseCards.tsx
    </div>;
<<<<<<< HEAD
  );
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/browse/BrowseCards.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/browse/BrowseCards.tsx
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
  const [saved_items, setSavedItems] = useState < string[]>([]);
;
  const toggle_saved = (id: string) =>: any {
    setSavedItems (prev =>;
      prev.includes (id);
        ? prev.filter (item_id => item_id !== id);
        : [...prev, id]);
  }
;
  return (
    <div className="space - y-4 pb - 24">;
      {items.map ((item) => (
        <Card key={item.id} className="overflow - hidden">;
          <CardContent className="p - 0">;
            <div className="p - 4">;
              <div className="flex justify - between">;
                <div className="flex items - center gap - 3">;
                  {type === "talents" ? (
                    <Avatar className="h - 12 w - 12">;
                      <AvatarImage src={item.image} />;
                      <AvatarFallback>{item.title.char_at (0).toUpperCase ()}</AvatarFallback>;
                    </Avatar>) : (
                    <div className="h - 12 w - 12 rounded - md bg - primary / 10 flex items - center justify - center">;
                      <span className="text - primary font - semibold">JOB</span>;
                    </div>)}
                  <div>;
                    <h3 className="font - medium">{item.title}</h3>;
                    <p className="text - sm text - muted - foreground">{item.subtitle}</p>;
                  </div>;
                </div>;
                <button;
                  className="h - 8 w - 8 flex items - center justify - center";
                  on_click={() => toggle_saved (item.id)}
                >;
                  {saved_items.includes (item.id) ? (
                    <BookmarkCheck className="h - 5 w - 5 text - primary" />) : (
                    <Bookmark className="h - 5 w - 5 text - muted - foreground" />)}
                </button>;
              </div>;
              <div className="mt - 3 flex flex - wrap gap - 1">;
                {item.badges.map ((badge, index) => (
                  <Badge;
                    key={index}
                    variant="outline";
                    className="text - xs font - normal";
                  >;
                    {badge}
                  </Badge>))}
              </div>;
              <p className="mt - 3 text - sm line - clamp - 2">{item.description}</p>;
              <div className="mt - 3 flex flex - wrap gap - 3 text - xs text - muted - foreground">;
                {item.location && (
                  <div className="flex items - center gap - 1">;
                    <MapPin className="h - 3 w - 3" />;
                    <span>{item.location}</span>;
                  </div>)}
                {item.price && (
                  <div className="flex items - center gap - 1">;
                    <DollarSign className="h - 3 w - 3" />;
                    <span>{item.price}</span>;
                  </div>)}
                {item.time_posted && (
                  <div className="flex items - center gap - 1">;
                    <Clock className="h - 3 w - 3" />;
                    <span>{item.time_posted}</span>;
                  </div>)}
                {item.match && (
                  <div className="ml - auto bg - primary / 10 text - primary rounded - full px - 2 py - 0.5">;
                    {item.match}% match;
                  </div>)}
              </div>;
            </div>;
            <div className="border - t border - border p - 3 flex justify - end">;
              <Button;
                size="sm";
                on_click={() => onViewDetails (item.id)}
                className="gap - 1";
              >;
                View Details <ChevronRight className="h - 4 w - 4" />;
              </Button>;
            </div>;
          </CardContent>;
        </Card>))}
    </div>);
}
=======
  ),;}
 interface BrowseItem {
  id: string;
title: string;
subtitle: string;
description: string;
location?: string;
badges: string[];
price?: string;
image?: string;
match?: number;
timePosted?: string 
}interface BrowseCardsProps {
  
}export function BrowseCards ({
  items, type, onViewDetails 
}: BrowseCardsProps) {
  const [savedItems, setSavedItems] = useState<string[]> ([]);
setSavedItems (prev => prev.includes (id) ? prev.filter (itemId => itemId !== id) <AvatarImage src= {
  item.image 
}/> <AvatarFallback> {
  item.title.charAt (0) .toUpperCase () 
}</AvatarFallback> </Avatar>) : (<div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center" > <span className="text-primary font-semibold" >JOB</span> </div>) 
}<div> </div> </div> <button) : (<Bookmark className="h-5 w-5 text-muted-foreground" />) 
}</button> </div> <Badge key= {
  index 
}variant="outline" className="text-xs font-normal" > {
  badge 
}</Badge>) ) 
}</div> <span> {
  item.location 
}</span> </div>) 
}<span> {
  item.price 
}</span> </div>) 
}<span> {
  item.timePosted 
}</span> </div>) 
}{
  item.match 
}% match </div>) 
}</div> </div> <div className="border-t border-border p-3 flex justify-end" > <Button > View Details <ChevronRight className="h-4 w-4" /> </Button> </div> </CardContent> </Card>) ) 
}</div>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                    {badge}
                  </Badge>
                ))}
              </div>
              <p className="mt-3 text-sm line-clamp-2">{item.description}</p>
              <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground">
                {item.location && (
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>{item.location}</span>
                  </div>
                )}
                {item.price && (
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-3 w-3" />
                    <span>{item.price}</span>
                  </div>
                )}
                {item.timePosted && (
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{item.timePosted}</span>
                  </div>
                )}
                {item.match && (
                  <div className="ml-auto bg-primary/10 text-primary rounded-full px-2 py-0.5">
                    {item.match}% match
                  </div>
                )}
              </div>
            </div>
            <div className="border-t border-border p-3 flex justify-end">
              <Button
                size="sm"
                onClick={() => onViewDetails(item.id)}
                className="gap-1"
              >
                View Details <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
