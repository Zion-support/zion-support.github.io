:src_backup/mobile/components/browse/BrowseCards.tsx
interface BrowseItem {;
import React, { useState } from 'react';'
import { Card, CardContent } from '@/components / ui / card';'
import { Button } from '@/components / ui / button';'
import { Badge } from '@/components / ui / badge';
import {}
  Bookmark,
  BookmarkCheck,
  ChevronRight,
  MapPin,
  Clock,
  DollarSign,';
} from 'lucide-react';'
import { Avatar, AvatarImage, AvatarFallback } from '@/components / ui / avatar';
:src_backup/mobile/components/browse/BrowseCards.tsx

import React, { useState } from "react",
import { Card, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge";
import { Bookmark, BookmarkCheck, ChevronRight, MapPin, Clock, DollarSign } from 'lucide-react'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Bookmark
  BookmarkCheck
  ChevronRight
  MapPin
  Clock
  DollarSign
} from 'lucide-react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
origin/cursor/automate-test-improve-and-merge-code-2533
interface BrowseItem {

interface BrowseItem {
  id: string;,
  title: string;,
  subtitle: string;,
  description: string;,
  location?: string;,
  badges: string[];,
  id: string;
  title: string;
  subtitle: string;
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/ avatar';
interface BrowseItem {
  // TODO: Implement
  id: string;,
  title: string;
  subtitle: string;,
pr-12325
  description: string;
  location?: string;
  badges: string[];
  price?: string;
  image?: string;
  match?: number;

:src_backup/mobile/components/browse/BrowseCards.tsx
  timePosted?: string;

interface BrowseCardsProps {;
  items: BrowseItem[];'
  type: 'jobs' | 'talents';
  onViewDetails: (id: string) => void;

export function BrowseCards(): any ({ items, type, onViewDetails }: BrowseCardsProps) {;
  const [savedItems, setSavedItems] = useState<string[]>([]);

  const toggleSaved = (id: string) => {;
    setSavedItems(prev =>;
      prev && prev.includes(id) ? prev && prev.filter(itemId => itemId !== id) : [...prev, id];
    );
  };

return (
    <div className='space-y-4 pb-24'>;
      {items && items.map(item => (;'
        <Card key={item && item.id} className='overflow-hidden'>;'
          <CardContent className='p-0'>;'
            <div className='p-4'>;'
              <div className='flex justify-between'>;'
                <div className='flex items-center gap-3'>;'
                  {type === 'talents' ? (;'
                    <Avatar className='h-12 w-12'>        <Card key={item && item.id} className="overflow-hidden">;"
          <CardContent className="p-0">;"
            <div className="p-4">;"
              <div className="flex justify-between">;"
                <div className="flex items-center gap-3">;"
                  {type === "talents" ? (;"
                    <Avatar className="h-12 w-12">;
                      <AvatarImage src={item && item.image} alt={item && item.title} />;
                      <AvatarFallback>;
                        {item && item.title.charAt(0).toUpperCase()}
                      </AvatarFallback>;
                    </Avatar>;
                  ) : (;'
                    <div className='h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center'>;'
                      <span className='text-primary font-semibold'>JOB</span>;
                    </div>;
                  )}

                  <div>;'
                    <h3 className='font-medium'>{item && item.title}</h3>;'
                    <p className='text-sm text-muted-foreground'>;
                      {item && item.subtitle}
                    </p>;
                  </div>;
                </div>;

:src_backup/mobile/components/browse/BrowseCards.tsx
                <button
                  className='h-8 w-8 flex items-center justify-center'
                  onClick={() => toggleSaved(item && item.id)}                >;
                  {savedItems && savedItems.includes(item && item.id) ? (;'
                    <BookmarkCheck className='h-5 w-5 text-primary' />;
                  ) : (;'
                    <Bookmark className='h-5 w-5 text-muted-foreground' />;
                  )}

                </button>;
              </div>;
'
              <div className='mt-3 flex flex-wrap gap-1'>;
                {item && item.badges.map((badge, index) => (;

                  <Badge;
                    key={index}'
                    variant='outline''
                    className='text-xs font-normal'>                      <AvatarImage src={item && item.image} alt={item && item.title} />;
                      <AvatarFallback>{item && item.title.charAt(0).toUpperCase()}</AvatarFallback>;
                    </Avatar>;
                  ) : (;"
                    <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">;"
                      <span className="text-primary font-semibold">JOB</span>;
                    </div>;

:src_backup/mobile/components/browse/BrowseCards.tsx

:src/mobile/components/browse/BrowseCards.tsx
import React, { useState } from "react",
import { Card, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
:src/mobile/components/browse/BrowseCards.tsx

import { Bookmark, BookmarkCheck, ChevronRight, MapPin, Clock, DollarSign } from 'lucide-react'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
"
import React, { useState } from "react","
import { Card, CardContent } from "@/components/ui/card","
import { Button } from "@/components/ui/button","
import { Badge } from "@/components/ui/badge",'
import { Bookmark, BookmarkCheck, ChevronRight, MapPin, Clock, DollarSign } from 'lucide-react'"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",

interface BrowseItem {}
  id: string,
  title: string,
  subtitle: string,
  description: string,
  location?: string;
  badges: string[],
:src_backup/mobile/components/browse/BrowseCards.tsx
  price?: string;
  image?: string;
  match?: number;
  timePosted?: string
  timePosted?: string
}
interface BrowseCardsProps {,
  items: BrowseItem[],
  type: "jobs" | "talents","
  onViewDetails: (id:,  string) => void
}
export function BrowseCards({ items, type, onViewDetails }:,  BrowseCardsProps) {,
  const [savedItems, setSavedItems] = useState<string[]>([]),
  const toggleSaved = (id:,  string) => {,
    setSavedItems(prev =>
      prev.includes(id)
        ? prev.filter(itemId => itemId !==,  id),
        : [...prev, id]
    )
  },
  return (
    <div className="space-y-4 pb-24">"
      {items.map((item) => (
        <Card key={item.id} className="overflow-hidden">"
          <CardContent className="p-0">"
            <div className="p-4">"
              <div className="flex justify-between">"
                <div className="flex items-center gap-3">"
                  {type === "talents" ? ("
                    <Avatar className="h-12 w-12">"

interface BrowseCardsProps {}
  items: BrowseItem[],"
  type: "jobs" | "talents",
  onViewDetails: (id: string) => void;
}

:src_backup/mobile/components/browse/BrowseCards.tsx
export function BrowseCards({ items, type, onViewDetails }: BrowseCardsProps) {

const [ savedItems, setSavedItems ] = useState<string[]>([]),

  const toggleSaved = (id: string) => {
    setSavedItems(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    )
:src_backup/mobile/components/browse/BrowseCards.tsx
  };

  return (
    <div className="space-y-4 pb-24">
      {items.map((item) => ("
        <Card key={item.id} className="overflow-hidden">

          <CardContent className="p-0">
            <div className="p-4">
              <div className="flex justify-between">
                <div className="flex items-center gap-3">
                  {type === "talents" ? (

"
          <CardContent className="p-0">"
            <div className="p-4">"
              <div className="flex justify-between">"
                <div className="flex items-center gap-3">"
                  {type === "talents" ? ("
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={item.image} alt={item.title} />
:src_backup/mobile/components/browse/BrowseCards.tsx
                      <AvatarFallback>{item.title.charAt(0).toUpperCase()}</AvatarFallback>
                    </Avatar>
                  ) : ("
                    <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">"
                      <span className="text-primary font-semibold">JOB</span>
                    </div>
                  )}
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                  </div>
                </div>

                <button 
                  className="h-8 w-8 flex items-center justify-center"
                  <div>;
                    <h3 className="font-medium">{item && item.title}</h3>;
                    <p className="text-sm text-muted-foreground">{item && item.subtitle}</p>;
                  </div>;
                </div>;
:src_backup/mobile/components/browse/BrowseCards.tsx

<button
                  className="h-8 w-8 flex items-center justify-center"
                <button
                  className="h-8 w-8 flex items-center justify-center""
                  onClick={() => toggleSaved(item.id)}
                >
                  {savedItems.includes(item.id) ? (
                    <BookmarkCheck className="h-5 w-5 text-primary" />"
                  ) : (
                    <Bookmark className="h-5 w-5 text-muted-foreground" />"

                <button
                  className="h-8 w-8 flex items-center justify-center"

                  )}
                </button>;
              </div>;
:src_backup/mobile/components/browse/BrowseCards.tsx
"
              <div className="mt-3 flex flex-wrap gap-1">;
                {item && item.badges.map((badge, index) => (;

                  <Badge;
                    key = {index,}"
                    variant="outline""
                    className="text-xs font-normal"

{savedItems.includes(item.id) ? (
                    <BookmarkCheck className="h-5 w-5 text-primary" />
                  ) : ("
                    <Bookmark className="h-5 w-5 text-muted-foreground" />
                  )}
                </button>
              </div>
                  )}
                  <div>
                    <h3 className="font-medium">{item.title}</h3>"
                    <p className="text-sm text-muted-foreground">{item.subtitle}</p>"
                  </div>
                </div>
                <button
                  className="h-8 w-8 flex items-center justify-center""
                  onClick={() => toggleSaved(item.id)}
                >
                  {savedItems.includes(item.id) ? (
                    <BookmarkCheck className="h-5 w-5 text-primary" />"
                  ) : (
                    <Bookmark className="h-5 w-5 text-muted-foreground" />"
                  )}
                </button>
              </div>
              <div className="mt-3 flex flex-wrap gap-1">"
                {item.badges.map((badge, index) => (
                  <Badge
                    key={index}
                    variant="outline" "
                    className="text-xs font-normal""
                  )}
                  <div>
                    <h3 className="font-medium">{item.title}</h3>"
                    <p className="text-sm text-muted-foreground">{item.subtitle}</p>"
                  </div>
                </div>
                <button
                  className="h-8 w-8 flex items-center justify-center""
                  onClick={() => toggleSaved(item.id)}
                >
                  {savedItems.includes(item.id) ? (
                    <BookmarkCheck className="h-5 w-5 text-primary" />"
                  ) : (
                    <Bookmark className="h-5 w-5 text-muted-foreground" />"
                    <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold">JOB</span>
                    </div>
                  )}
                  <div>"
                    <h3 className="font-medium">{item.title}</h3>"
                    <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                  </div>
                </div>
                <button "
                  className="h-8 w-8 flex items-center justify-center"
                  onClick={() => toggleSaved(item.id)}
                >
                  {savedItems.includes(item.id) ? ("
                    <BookmarkCheck className="h-5 w-5 text-primary" />
                  ) : ("
                    <Bookmark className="h-5 w-5 text-muted-foreground" />
                  )}
                </button>
              </div>
:src_backup/mobile/components/browse/BrowseCards.tsx

              "

              <div className="mt-3 flex flex-wrap gap-1">
                {item.badges.map((badge, index) => (
                  <Badge;
                    key={index} "
                    variant="outline" "
                    className="text-xs font-normal"
:src_backup/mobile/components/browse/BrowseCards.tsx
>
import React, { useState } from "react",;
import { Card, CardContent } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import { Bookmark, BookmarkCheck, ChevronRight, MapPin, Clock, DollarSign } from 'lucide-react';
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
                      <AvatarImage src={item.image} alt={item.title} />;
                      <AvatarFallback>{item.title.charAt(0).toUpperCase()}</AvatarFallback>;
                    </Avatar>;
                  ) : (;
                    <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">;
                      <span className="text-primary font-semibold">JOB</span>;
                    </div>;
:src_backup/mobile/components/browse/BrowseCards.tsx

                  )}
:src_backup/mobile/components/browse/BrowseCards.tsx
<div>;
                    <h3 className="font-medium">{item.title}</h3>;
                    <p className="text-sm text-muted-foreground">{item.subtitle}</p>;
                  </div>;
                </div>;
                <button;
                  className="h-8 w-8 flex items-center justify-center";
:src_backup/mobile/components/browse/BrowseCards.tsx
                  onClick={() => toggleSaved(item.id)}
                >;
                  {savedItems.includes(item.id) ? (;
                    <BookmarkCheck className="h-5 w-5 text-primary" />;
                  ) : (;
                    <Bookmark className="h-5 w-5 text-muted-foreground" />;
                  )}
                </button>;
              </div>;"
              <div className="mt-3 flex flex-wrap gap-1">;
                {item.badges.map((badge, index) => (;
                  <Badge;
                    key={index} ;"
                    variant="outline";"
                    className="text-xs font-normal";
                  >;

                      <AvatarFallback>
                        {item.title.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  ) : (
                    <div className='h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center'>
                      <span className='text-primary font-semibold'>JOB</span>
                    </div>
                  )}
                  <div>
                    <h3 className='font-medium'>{item.title}</h3>
                    <p className='text-sm text-muted-foreground'>
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                <button
                  className='h-8 w-8 flex items-center justify-center'
                  onClick={() => toggleSaved(item.id)}                >
                  {savedItems.includes(item.id) ? (
                    <BookmarkCheck className='h-5 w-5 text-primary' />
                  ) : (
                    <Bookmark className='h-5 w-5 text-muted-foreground' />
                  )}
                </button>
              </div>
              <div className='mt-3 flex flex-wrap gap-1'>
                {item.badges.map((badge, index) => (
                  <Badge
                    key={index}
                    variant='outline'
                    className='text-xs font-normal'
                  >
origin/cursor/automate-test-improve-and-merge-code-2533
                    {badge}
                  </Badge>;
                ))}
              </div>
:src_backup/mobile/components/browse/BrowseCards.tsx

              <p className="mt-3 text-sm line-clamp-2">{item.description}</p>

              <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground">

:src_backup/mobile/components/browse/BrowseCards.tsx
                {item.location && (
                  <div className="flex items-center gap-1">
                {item.location && ("
                  <div className="flex items-center gap-1">"
                    <MapPin className="h-3 w-3" />
                    <span>{item.location}</span>
                  </div>
                )}

:src_backup/mobile/components/browse/BrowseCards.tsx
{item.price && (
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-3 w-3" />
                    <span>{item.price}</span>
                  </div>
                )}

:src_backup/mobile/components/browse/BrowseCards.tsx
{item.timePosted && (
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{item.timePosted}</span>
                  </div>
                )}
:src_backup/mobile/components/browse/BrowseCards.tsx
{item.match && (
                {item.match && (

                  <div className="ml-auto bg-primary/10 text-primary rounded-full px-2 py-0.5">
<p className='mt-3 text-sm line-clamp-2'>{item.description}</p>

              <div className='mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground'>
                {item.location && (
                  <div className='flex items-center gap-1'>
                    <MapPin className='h-3 w-3' />
                    <span>{item.location}</span>
                  </div>
                )}
                {item.price && (
                  <div className='flex items-center gap-1'>
                    <DollarSign className='h-3 w-3' />
                    <span>{item.price}</span>
                  </div>
                )}
                {item.timePosted && (
                  <div className='flex items-center gap-1'>
                    <Clock className='h-3 w-3' />
                    <span>{item.timePosted}</span>
                  </div>
                )}
                {item.match && (
                  <div className='ml-auto bg-primary/10 text-primary rounded-full px-2 py-0.5'>
origin/cursor/automate-test-improve-and-merge-code-2533
                    {item.match}% match

"
                  <div className="ml-auto bg-primary/10 text-primary rounded-full px-2 py-0.5">
                    {item.match}% match;
                  </div>
                )}
              </div>
            </div>
:src_backup/mobile/components/browse/BrowseCards.tsx

              </div>;
'
              <p className='mt-3 text-sm line-clamp-2'>{item && item.description}</p>;
'
              <div className='mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground'>;
                {item && item.location && (;'
                  <div className='flex items-center gap-1'>;'
                    <MapPin className='h-3 w-3' />;
                    <span>{item && item.location}</span>;
                  </div>;
                )}
:src_backup/mobile/components/browse/BrowseCards.tsx

                {item && item.price && (;'
                  <div className='flex items-center gap-1'>;'
                    <DollarSign className='h-3 w-3' />;
                    <span>{item && item.price}</span>;
                  </div>;
                )}
:src_backup/mobile/components/browse/BrowseCards.tsx

                {item && item.timePosted && (;'
                  <div className='flex items-center gap-1'>;'
                    <Clock className='h-3 w-3' />;
                    <span>{item && item.timePosted}</span>;
                  </div>;
                )}
:src_backup/mobile/components/browse/BrowseCards.tsx

                {item && item.match && (;'
                  <div className='ml-auto bg-primary/10 text-primary rounded-full px-2 py-0 && 0.5'>                    {item && item.match}% match                {item && item.location && (;"
                  <div className="flex items-center gap-1">;"
                    <MapPin className="h-3 w-3" />;
                    <span>{item && item.location}</span>;
                  </div>;
                )}
:src_backup/mobile/components/browse/BrowseCards.tsx

                {item && item.price && (;"
                  <div className="flex items-center gap-1">;"
                    <DollarSign className="h-3 w-3" />;
                    <span>{item && item.price}</span>;
                  </div>;
                )}
:src_backup/mobile/components/browse/BrowseCards.tsx

                {item && item.timePosted && (;"
                  <div className="flex items-center gap-1">;"
                    <Clock className="h-3 w-3" />;
                    <span>{item && item.timePosted}</span>;
                  </div>;
                )}
:src_backup/mobile/components/browse/BrowseCards.tsx

                {item && item.match && (;"
                  <div className="ml-auto bg-primary/10 text-primary rounded-full px-2 py-0 && 0.5">;
                    {item && item.match}% match;
                  </div>;
                )}
              </div>;
            </div>;
:src_backup/mobile/components/browse/BrowseCards.tsx
'
            <div className='border-t border-border p-3 flex justify-end'>;
              <Button'
                size='sm'
                onClick={() => onViewDetails(item && item.id)}'
                className='gap-1'              >;'
                View Details <ChevronRight className='h-4 w-4' />              </Button>;"
                View Details <ChevronRight className="h-4 w-4" />;
                onClick={() => onViewDetails(item && item.id)}"
                className="gap-1";
              >;"
                View Details <ChevronRight className="h-4 w-4" />;
              </Button>;
            </div>;
          </CardContent>;
        </Card>;
      ))}
:src_backup/mobile/components/browse/BrowseCards.tsx

            <div className="border-t border-border p-3 flex justify-end">
              <Button 
                size="sm"
            "
            <div className="border-t border-border p-3 flex justify-end">
              <Button "
                size="sm"

:src_backup/mobile/components/browse/BrowseCards.tsx
                onClick={() => onViewDetails(item.id)}
                className="gap-1"
            <div className="border-t border-border p-3 flex justify-end">
              <Button 
                size="sm"

                onClick={() => onViewDetails(item.id)}
                className="gap-1"
<div className='border-t border-border p-3 flex justify-end'>
              <Button
                size='sm'
                onClick={() => onViewDetails(item.id)}
                className='gap-1'
origin/cursor/automate-test-improve-and-merge-code-2533
              >
                View Details <ChevronRight className='h-4 w-4' />
:src_backup/mobile/components/browse/BrowseCards.tsx
              </Button>
            </div>
          </CardContent>
        </Card>
:src_backup/mobile/components/browse/BrowseCards.tsx
setSavedItems (prev =>;
      prev.includes (id) ? prev.filter (item_id => item_id !==,  id) : [...prev, id]);
  }
  return ('
    <div className='space - y-4 pb - 24'>;
:src_backup/mobile/components/browse/BrowseCards.tsx
      {items.map (item => ('
        <Card key={item.id} className='overflow - hidden'>;'
          <CardContent className='p - 0'>;'
            <div className='p - 4'>;'
              <div className='flex justify - between'>;'
                <div className='flex items - center gap - 3'>;'
                  {type === 'talents' ? ('"
                    <Avatar className='h - 12 w - 12'>        <Card key={item.id} className="overflow - hidden">;"
          <CardContent className="p - 0">;"
            <div className="p - 4">;"
              <div className="flex justify - between">;"
                <div className="flex items - center gap - 3">;"
                  {type === "talents" ? ("
                    <Avatar className="h - 12 w - 12">;
                      <AvatarImage src={item.image} alt={item.title} />;
                      <AvatarFallback>;
                        {item.title.char_at (0).toUpperCase ()}
                      </AvatarFallback>;
                    </Avatar>) : ('
                    <div className='h - 12 w - 12 rounded - md bg - primary / 10 flex items - center justify - center'>;'
                      <span className='text - primary font - semibold'>JOB</span>;
                    </div>)}
                  <div>;'
                    <h3 className='font - medium'>{item.title}</h3>;'
                    <p className='text - sm text - muted - foreground'>;
                      {item.subtitle}
                    </p>;
                  </div>;
                </div>;
                <button;'
                  className='h - 8 w - 8 flex items - center justify - center';
                  on_click={() => toggle_saved (item.id)}                >;
:src_backup/mobile/components/browse/BrowseCards.tsx
                  {saved_items.includes (item.id) ? ('
                    <BookmarkCheck className='h - 5 w - 5 text - primary' />) : ('
                    <Bookmark className='h - 5 w - 5 text - muted - foreground' />)}
                </button>;
              </div>;'
              <div className='mt - 3 flex flex - wrap gap - 1'>;
                {item.badges.map ((badge, index) => (
                  <Badge;
                    key={index}'
                    variant='outline';'
                    className='text - xs font - normal'                  >                      <AvatarImage src={item.image} alt={item.title} />;
                      <AvatarFallback>{item.title.char_at (0).toUpperCase ()}</AvatarFallback>;
                    </Avatar>) : ("
                    <div className="h - 12 w - 12 rounded - md bg - primary / 10 flex items - center justify - center">;"
                      <span className="text - primary font - semibold">JOB</span>;
                    </div>)}
                  <div>;"
                    <h3 className="font - medium">{item.title}</h3>;"
                    <p className="text - sm text - muted - foreground">{item.subtitle}</p>;
                  </div>;
                </div>;
                <button;"
                  className="h - 8 w - 8 flex items - center justify - center";
                  on_click={() => toggle_saved (item.id)}
                >;
:src_backup/mobile/components/browse/BrowseCards.tsx
                  {saved_items.includes (item.id) ? ("
                    <BookmarkCheck className="h - 5 w - 5 text - primary" />) : ("
                    <Bookmark className="h - 5 w - 5 text - muted - foreground" />)}
                </button>;
              </div>;"
              <div className="mt - 3 flex flex - wrap gap - 1">;
                {item.badges.map ((badge, index) => (
                  <Badge;
                    key = {index, }"
                    variant="outline";"
                    className="text - xs font - normal";
                    {badge}
                  </Badge>))}
              </div>;'
              <p className='mt - 3 text - sm line - clamp - 2'>{item.description}</p>;'
              <div className='mt - 3 flex flex - wrap gap - 3 text - xs text - muted - foreground'>;
                {item.location && ('
                  <div className='flex items - center gap - 1'>;'
                    <MapPin className='h - 3 w - 3' />;
                    <span>{item.location}</span>;
                  </div>)}
                {item.price && ('
                  <div className='flex items - center gap - 1'>;'
                    <DollarSign className='h - 3 w - 3' />;
                    <span>{item.price}</span>;
                  </div>)}
                {item.time_posted && ('
                  <div className='flex items - center gap - 1'>;'
                    <Clock className='h - 3 w - 3' />;
                    <span>{item.time_posted}</span>;
                  </div>)}
:src_backup/mobile/components/browse/BrowseCards.tsx
                {item.match && ('
                  <div className='ml - auto bg - primary / 10 text - primary rounded - full px - 2 py - 0.5'>                    {item.match}% match                {item.location && ("
                  <div className="flex items - center gap - 1">;"
                    <MapPin className="h - 3 w - 3" />;
                    <span>{item.location}</span>;
                  </div>)}
                {item.price && ("
                  <div className="flex items - center gap - 1">;"
                    <DollarSign className="h - 3 w - 3" />;
                    <span>{item.price}</span>;
                  </div>)}
                {item.time_posted && ("
                  <div className="flex items - center gap - 1">;"
                    <Clock className="h - 3 w - 3" />;
                    <span>{item.time_posted}</span>;
                  </div>)}
                {item.match && ("
                  <div className="ml - auto bg - primary / 10 text - primary rounded - full px - 2 py - 0.5">;
                    {item.match}% match;
                  </div>)}
              </div>;
            </div>;'
            <div className='border - t border - border p - 3 flex justify - end'>;
              <Button;'
                size='sm';
                on_click={() => onViewDetails (item.id)}'
                className='gap - 1'              >;'
                View Details <ChevronRight className='h - 4 w - 4' />              </Button>;"
                View Details <ChevronRight className="h - 4 w - 4" />;
                on_click={() => onViewDetails (item.id)}"
                className="gap - 1";
              >;"
                View Details <ChevronRight className="h - 4 w - 4" />;
              </Button>;
            </div>;
          </CardContent>;
        </Card>))}
    </div>);
}

:src_backup/mobile/components/browse/BrowseCards.tsx

      ))}
:src/mobile/components/browse/BrowseCards.tsx
</div>;
  );
}
;
      ))}
    </div>;
  );
};
}
;
}}}}}}}})))))))))
      ))}
    </div>;
  );
}
;

;
    </div>
  );
}
origin/cursor/automate-test-improve-and-merge-code-2533
:src_backup/mobile/components/browse/BrowseCards.tsx
</string>
    <div className='space-y-4 pb-24'>;
</div>
        <Card key={item && item.id} className='overflow-hidden'>;

          <CardContent className='p-0'>;

            <div className='p-4'>;
              <div className='flex justify-between'>;
                <div className='flex items-center gap-3'>;
                    <Avatar className='h-12 w-12'>        <Card key={item && item.id} className="overflow-hidden">;"
"
          <CardContent className="p-0">;"
            <div className="p-4">;"
</div>"
              <div className="flex justify-between">;"
                <div className="flex items-center gap-3">;"
                    <Avatar className="h-12 w-12">;"

                      <AvatarImage src={item && item.image} alt={item && item.title} />;

                      <AvatarFallback>;

                      ;
                    ;"
                    <div className='h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center'>;
                      <span className='text-primary font-semibold'>JOB</span>;
                    </div>;
                  <div>;
                    <h3 className='font-medium'>{item && item.title}</h3>;
                    <p className='text-sm text-muted-foreground'>;
</p>
                    </p>;
                <button;
                  className='h-8 w-8 flex items-center justify-center
                  onClick={() => toggleSaved(item && item.id)}                >;
</button>
                    <BookmarkCheck className='h-5 w-5 text-primary' />;

                    <Bookmark className='h-5 w-5 text-muted-foreground' />;

                </button>;
              <div className='mt-3 flex flex-wrap gap-1'>;
                  <Badge;
                    key={index}
                    variant='outline
                    className='text-xs font-normal'>                      <AvatarImage src={item && item.image} alt={item && item.title} />;

                      <AvatarFallback>{item && item.title.charAt(0).toUpperCase()};
                    <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">;"
                      <span className="text-primary font-semibold">JOB</span>;"
  const [savedItems, setSavedItems] = useState<string[]>([]),
</string>"
    <div className="space-y-4 pb-24">"
        <Card key={item.id} className="overflow-hidden">"
          <CardContent className="p-0">"
            <div className="p-4">"
              <div className="flex justify-between">"
                <div className="flex items-center gap-3">"
                    <Avatar className="h-12 w-12">"

                      <AvatarImage src={item.image} alt={item.title} />

                      <AvatarFallback>{item.title.charAt(0).toUpperCase()}
                    <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">"
                      <span className="text-primary font-semibold">JOB</span>"
                    <h3 className="font-medium">{item && item.title}</h3>;""
                    <p className="text-sm text-muted-foreground">{item && item.subtitle}</p>;"
                <button;"
                  className="h-8 w-8 flex items-center justify-center""
                  onClick={() => toggleSaved(item.id)}
</button>"
                    <BookmarkCheck className="h-5 w-5 text-primary" />"
                    <Bookmark className="h-5 w-5 text-muted-foreground" />"

              </div>;"
              <div className="mt-3 flex flex-wrap gap-1">;"
                    key = {index,}"
                    variant="outline"""
                    className="text-xs font-normal""
                  {savedItems.includes(item.id) ? ("

                  <div>
                    <h3 className="font-medium">{item.title}</h3>""
                    <p className="text-sm text-muted-foreground">{item.subtitle}</p>"
                  className="h-8 w-8 flex items-center justify-center"")

              <div className="mt-3 flex flex-wrap gap-1">"
                    key={index} "
                  )}

                    key={index} ;"
                    variant="outline";""
                    className="text-xs font-normal";"
                  >;

                  <div className="flex items-center gap-1">"
                    <MapPin className="h-3 w-3" />"

                    <span>{item.location}</span>
                    <DollarSign className="h-3 w-3" />"

                    <span>{item.price}</span>
                    <Clock className="h-3 w-3" />"

                    <span>{item.timePosted}</span>
                  <div className="ml-auto bg-primary/10 text-primary rounded-full px-2 py-0.5">"

              <p className='mt-3 text-sm line-clamp-2'>{item && item.description}</p>;
              <div className='mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground'>;
                  <div className='flex items-center gap-1'>;
                    <MapPin className='h-3 w-3' />;

                    <span>{item && item.location}</span>;
                    <DollarSign className='h-3 w-3' />;

                    <span>{item && item.price}</span>;
                    <Clock className='h-3 w-3' />;

                    <span>{item && item.timePosted}</span>;
                  <div className='ml-auto bg-primary/10 text-primary rounded-full px-2 py-0 && 0.5'>                    {item && item.match}% match                {item && item.location && (;
                  <div className="flex items-center gap-1">;"
                    <MapPin className="h-3 w-3" />;"

                    <DollarSign className="h-3 w-3" />;"

                    <Clock className="h-3 w-3" />;"

                  <div className="ml-auto bg-primary/10 text-primary rounded-full px-2 py-0 && 0.5">;"
            <div className='border-t border-border p-3 flex justify-end'>;
              <Button;
                size='sm)
                onClick={() => onViewDetails(item && item.id)}

                View Details <ChevronRight className='h-4 w-4' />              ;

                View Details <ChevronRight className="h-4 w-4" />;"

            <div className="border-t border-border p-3 flex justify-end">"
              <Button;"
                size="sm""
                onClick={() => onViewDetails(item.id)}
                View Details <ChevronRight className="h-4 w-4" />"

  const [saved_items, setSavedItems] = useState < string[]>([]);
  const toggle_saved = (id: string) =>: any {
  // TODO: Implement
    setSavedItems (prev =>;)
      prev.includes (id) ? prev.filter (item_id => item_id !== id) : [...prev, id]);
  return ("
    <div className='space - y-4 pb - 24'>;
        <Card key={item.id} className='overflow - hidden'>;

          <CardContent className='p - 0'>;

            <div className='p - 4'>;
              <div className='flex justify - between'>;
                <div className='flex items - center gap - 3'>;
                    <Avatar className='h - 12 w - 12'>        <Card key={item.id} className="overflow - hidden">;"
          <CardContent className="p - 0">;"
            <div className="p - 4">;"
              <div className="flex justify - between">;"
                <div className="flex items - center gap - 3">;"
                    <Avatar className="h - 12 w - 12">;"

                      <AvatarImage src={item.image} alt={item.title} />;

                      ;)
                    ) : ("
                    <div className='h - 12 w - 12 rounded - md bg - primary / 10 flex items - center justify - center'>;
                      <span className='text - primary font - semibold'>JOB</span>;')
                    </div>)}
                    <h3 className='font - medium'>{item.title}</h3>;
                    <p className='text - sm text - muted - foreground'>;
                  className='h - 8 w - 8 flex items - center justify - center';
                  on_click={() => toggle_saved (item.id)}                >;
                    <BookmarkCheck className='h - 5 w - 5 text - primary' />) : (
)
                    <Bookmark className='h - 5 w - 5 text - muted - foreground' />)}

              <div className='mt - 3 flex flex - wrap gap - 1'>;
                    variant='outline';
                    className='text - xs font - normal'                  >                      <AvatarImage src={item.image} alt={item.title} />;

                      <AvatarFallback>{item.title.char_at (0).toUpperCase ()};
                    ) : (
                    <div className="h - 12 w - 12 rounded - md bg - primary / 10 flex items - center justify - center">;"
                      <span className="text - primary font - semibold">JOB</span>;")
                    <h3 className="font - medium">{item.title}</h3>;""
                    <p className="text - sm text - muted - foreground">{item.subtitle}</p>;"
                  className="h - 8 w - 8 flex items - center justify - center";"
                  on_click={() => toggle_saved (item.id)}
                    <BookmarkCheck className="h - 5 w - 5 text - primary" />) : ("
)"
                    <Bookmark className="h - 5 w - 5 text - muted - foreground" />)}"

              <div className="mt - 3 flex flex - wrap gap - 1">;"
                    key = {index, }"
                    className="text - xs font - normal";"
                    {badge}
                  ))}
              <p className='mt - 3 text - sm line - clamp - 2'>{item.description}</p>;
              <div className='mt - 3 flex flex - wrap gap - 3 text - xs text - muted - foreground'>;
                  <div className='flex items - center gap - 1'>;
                    <MapPin className='h - 3 w - 3' />;

                    <span>{item.location}</span>;
                    <DollarSign className='h - 3 w - 3' />;

                    <span>{item.price}</span>;
                    <Clock className='h - 3 w - 3' />;

                    <span>{item.time_posted}</span>;
                  <div className='ml - auto bg - primary / 10 text - primary rounded - full px - 2 py - 0.5'>                    {item.match}% match                {item.location && (
                  <div className="flex items - center gap - 1">;"
                    <MapPin className="h - 3 w - 3" />;"

                    <span>{item.location}</span>;)
                  </div>)}"
                    <DollarSign className="h - 3 w - 3" />;"

                    <Clock className="h - 3 w - 3" />;"

                  <div className="ml - auto bg - primary / 10 text - primary rounded - full px - 2 py - 0.5">;"
            <div className='border - t border - border p - 3 flex justify - end'>;
                size='sm';
                on_click={() => onViewDetails (item.id)}

                View Details <ChevronRight className='h - 4 w - 4' />              ;

                View Details <ChevronRight className="h - 4 w - 4" />;"

    </div>);
pr-12325
