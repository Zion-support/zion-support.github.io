<<<<<<< HEAD
<<<<<<< HEAD
=======
import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
interface BrowseItem {;
import React, { useState } from 'react';
import { Card, CardContent } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { Badge } from '@/components / ui / badge';
import {
<<<<<<< HEAD
<<<<<<< HEAD
  Bookmark,
  BookmarkCheck,
  ChevronRight,
  MapPin,
  Clock,
  DollarSign,
} from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components / ui / avatar';
=======
  Bookmark
  BookmarkCheck
  ChevronRight
  MapPin
  Clock
  DollarSign
} from 'lucide-react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD

  timePosted?: string;

interface BrowseCardsProps {;
  items: BrowseItem[];
  type: 'jobs' | 'talents';
  onViewDetails: (id: string) => void;

export function BrowseCards(): any ({ items, type, onViewDetails }: BrowseCardsProps) {;
  const [savedItems, setSavedItems] = useState<string[]>([]);

  const toggleSaved = (id: string) => {;
    setSavedItems(prev =>;
      prev && prev.includes(id) ? prev && prev.filter(itemId => itemId !== id) : [...prev, id];
    );
  };


=======
  timePosted?: string
interface BrowseCardsProps {
  items: BrowseItem[];
  type: "jobs" | "talents";
  onViewDetails: (id: string) => void
export function BrowseCards({ items, type, onViewDetails }: BrowseCardsProps) {
  const [savedItems, setSavedItems] = useState<string[]>([]),
  
  const toggleSaved = null;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return (
    <div className='space-y-4 pb-24'>;
      {items && items.map(item => (;
        <Card key={item && item.id} className='overflow-hidden'>;
          <CardContent className='p-0'>;
            <div className='p-4'>;
              <div className='flex justify-between'>;
                <div className='flex items-center gap-3'>;
                  {type === 'talents' ? (;
                    <Avatar className='h-12 w-12'>        <Card key={item && item.id} className="overflow-hidden">;
          <CardContent className="p-0">;
            <div className="p-4">;
              <div className="flex justify-between">;
                <div className="flex items-center gap-3">;
                  {type === "talents" ? (;
                    <Avatar className="h-12 w-12">;
                      <AvatarImage src={item && item.image} alt={item && item.title} />;
                      <AvatarFallback>;
                        {item && item.title.charAt(0).toUpperCase()}
                      </AvatarFallback>;
                    </Avatar>;
                  ) : (;
                    <div className='h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center'>;
                      <span className='text-primary font-semibold'>JOB</span>;
                    </div>;
                  )}

                  <div>;
                    <h3 className='font-medium'>{item && item.title}</h3>;
                    <p className='text-sm text-muted-foreground'>;
                      {item && item.subtitle}
                    </p>;
                  </div>;
                </div>;


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                <button
                  className='h-8 w-8 flex items-center justify-center'
                  onClick={() => toggleSaved(item && item.id)}                >;
                  {savedItems && savedItems.includes(item && item.id) ? (;
                    <BookmarkCheck className='h-5 w-5 text-primary' />;
                  ) : (;
                    <Bookmark className='h-5 w-5 text-muted-foreground' />;
                  )}
                  <Badge
                    key={index}
                    variant='outline'
                    className='text-xs font-normal'>                      <AvatarImage src={item && item.image} alt={item && item.title} />;
                      <AvatarFallback>{item && item.title.charAt(0).toUpperCase()}</AvatarFallback>;
                    </Avatar>;
                  ) : (;
                    <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">;
                      <span className="text-primary font-semibold">JOB</span>;
                    </div>;
<<<<<<< HEAD


<<<<<<< HEAD
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
=======

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React, { useState } from "react",
import { Card, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { Bookmark, BookmarkCheck, ChevronRight, MapPin, Clock, DollarSign } from 'lucide-react'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface BrowseItem {
  id: string,
  title: string,
  subtitle: string,
  description: string,
  location?: string;
  badges: string[],
  price?: string;
  image?: string;
  match?: number;
  timePosted?: string
}

interface BrowseCardsProps {
  items: BrowseItem[],
  type: "jobs" | "talents",
  onViewDetails: (id: string) => void
}

export function BrowseCards({ items, type, onViewDetails }: BrowseCardsProps) {

  const [ savedItems, setSavedItems ] = useState<string[]>([]),

  
  const toggleSaved = (id: string) => {
    setSavedItems(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    )
  };


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
                      <AvatarImage src={item.image} alt={item.title} />
                      <AvatarFallback>{item.title.charAt(0).toUpperCase()}</AvatarFallback>
                    </Avatar>
                  ) : (
                    <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold">JOB</span>
                    </div>
                  )}
<<<<<<< HEAD
<<<<<<< HEAD
=======
                  )}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

                </button>;
              </div>;

              <div className="mt-3 flex flex-wrap gap-1">;
                {item && item.badges.map((badge, index) => (;

                  <Badge
                    key = {index,}
                    variant="outline"
                    className="text-xs font-normal"


<<<<<<< HEAD
                <button
                  className="h-8 w-8 flex items-center justify-center"
                  onClick={() => toggleSaved(item && item.id)}
                >;
                  {savedItems && savedItems.includes(item && item.id) ? (;
                    <BookmarkCheck className="h-5 w-5 text-primary" />;
                  ) : (;
                    <Bookmark className="h-5 w-5 text-muted-foreground" />;
                  )}

                </button>;
              </div>;

              <div className="mt-3 flex flex-wrap gap-1">;
                {item && item.badges.map((badge, index) => (;

                  <Badge
                    key = {index,}
                    variant="outline"
                    className="text-xs font-normal"


=======
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                  </div>
                </div>
                <button
                  className='h-8 w-8 flex items-center justify-center'
                  onClick={() => toggleSaved(item.id)}                >
                <button
                  className='h-8 w-8 flex items-center justify-center'
                  onClick={() => toggleSaved(item.id)}                >
                
                <button 
                  className="h-8 w-8 flex items-center justify-center"
                  onClick={() => toggleSaved(item.id)}
                >
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  {savedItems.includes(item.id) ? (
                    <BookmarkCheck className="h-5 w-5 text-primary" />
                  ) : (
                    <Bookmark className="h-5 w-5 text-muted-foreground" />
                  )}
                </button>
              </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
              
              <div className='mt-3 flex flex-wrap gap-1'>
                {item.badges.map((badge, index) => (
                  <Badge
                    key={index}
                    variant='outline'
                    className='text-xs font-normal'                  >                      <AvatarImage src={item.image} alt={item.title} />
                      <AvatarFallback>{item.title.charAt(0).toUpperCase()}</AvatarFallback>
                    </Avatar>
                  ) : (
                    <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold">JOB</span>
                    </div>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  )}
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                  </div>
                </div>
                  {savedItems.includes(item.id) ? (
                    <BookmarkCheck className="h-5 w-5 text-primary" />
                  ) : (
                    <Bookmark className="h-5 w-5 text-muted-foreground" />
                  )}
                </button>
              </div>

              
              <div className="mt-3 flex flex-wrap gap-1">
                {item.badges.map((badge, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="text-xs font-normal"
<<<<<<< HEAD


=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  )}
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                  </div>
                </div>
                <button
                  className="h-8 w-8 flex items-center justify-center"
                  onClick={() => toggleSaved(item.id)}
                >
                  {savedItems.includes(item.id) ? (
                    <BookmarkCheck className="h-5 w-5 text-primary" />
                  ) : (
                    <Bookmark className="h-5 w-5 text-muted-foreground" />
                  )}
<<<<<<< HEAD
<<<<<<< HEAD

=======
                </button>
              </div>
              <div className="mt-3 flex flex-wrap gap-1">
                {item.badges.map((badge, index) => (
                  <Badge
                    key = {index,}
                    variant="outline"
                    className="text-xs font-normal"
                    {badge}
                  </Badge>
                ))}
              </div>
              <p className='mt-3 text-sm line-clamp-2'>{item.description}</p>
              <div className='mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground'>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                </button>;
              </div>;
              <div className="mt-3 flex flex-wrap gap-1">;
                {item.badges.map((badge, index) => (;
                  <Badge;
                    key={index} ;
                    variant="outline";
                    className="text-xs font-normal";
                  >;
<<<<<<< HEAD

                    {badge}
                  </Badge>
                ))}
              </div>


=======
                    {badge}
                  </Badge>;
                ))}
              </div>
              
              <p className="mt-3 text-sm line-clamp-2">{item.description}</p>
              
              <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                {item.location && (
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>{item.location}</span>
                  </div>
                )}
<<<<<<< HEAD
<<<<<<< HEAD


                


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




=======
                
                
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
                  <div className='ml-auto bg-primary/10 text-primary rounded-full px-2 py-0.5'>                    {item.match}% match                {item.location && (
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
                
                {item.match && (
<<<<<<< HEAD
                
                {item.match && (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  <div className="ml-auto bg-primary/10 text-primary rounded-full px-2 py-0.5">
                    {item.match}% match
                  </div>
                )}
              </div>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
            <div className='border-t border-border p-3 flex justify-end'>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              </div>;

              <p className='mt-3 text-sm line-clamp-2'>{item && item.description}</p>;

              <div className='mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground'>;
                {item && item.location && (;
                  <div className='flex items-center gap-1'>;
                    <MapPin className='h-3 w-3' />;
                    <span>{item && item.location}</span>;
                  </div>;
                )}

                {item && item.price && (;
                  <div className='flex items-center gap-1'>;
                    <DollarSign className='h-3 w-3' />;
                    <span>{item && item.price}</span>;
                  </div>;
                )}

                {item && item.timePosted && (;
                  <div className='flex items-center gap-1'>;
                    <Clock className='h-3 w-3' />;
                    <span>{item && item.timePosted}</span>;
                  </div>;
                )}

                {item && item.match && (;
                  <div className='ml-auto bg-primary/10 text-primary rounded-full px-2 py-0 && 0.5'>                    {item && item.match}% match                {item && item.location && (;
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
                  </div>;
                )}
              </div>;
            </div>;

            <div className='border-t border-border p-3 flex justify-end'>;
              <Button
                size='sm'
<<<<<<< HEAD
<<<<<<< HEAD
                onClick={() => onViewDetails(item && item.id)}
                className='gap-1'              >;
                View Details <ChevronRight className='h-4 w-4' />              </Button>;
                View Details <ChevronRight className="h-4 w-4" />;
                onClick={() => onViewDetails(item && item.id)}
                className="gap-1";
              >;
                View Details <ChevronRight className="h-4 w-4" />;
              </Button>;
            </div>;
          </CardContent>;
        </Card>;

      ))}

            
            <div className="border-t border-border p-3 flex justify-end">
              <Button 
                size="sm"



                onClick={() => onViewDetails(item.id)}
                className="gap-1"
=======
            <div className='border-t border-border p-3 flex justify-end'>
              <Button
                size='sm'
                onClick={() => onViewDetails(item.id)}
                className='gap-1'              >
                View Details <ChevronRight className='h-4 w-4' />              </Button>
                View Details <ChevronRight className="h-4 w-4" />
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            
            <div className="border-t border-border p-3 flex justify-end">
              <Button 
                size="sm"



                onClick={() => onViewDetails(item.id)}
                className='gap-1'              >
                View Details <ChevronRight className='h-4 w-4' />              </Button>
                View Details <ChevronRight className="h-4 w-4" />
ursor/fix-website-loading-errors-and-merge-6662
                onClick={() => onViewDetails(item.id)}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              >
                View Details <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

  time_posted?: string;
interface BrowseCardsProps {
  items: BrowseItem[];
  type: 'jobs' | 'talents';
  onViewDetails: (id: string) => void;
export /**
 * BrowseCards - Function description
 */
function BrowseCards() {
  const [saved_items, setSavedItems] = useState < string[]>([]);
  const toggle_saved = (id: string) =>: any {
    setSavedItems (prev =>;
      prev.includes (id) ? prev.filter (item_id => item_id !== id) : [...prev, id]);
  }
  return (
    <div className='space - y-4 pb - 24'>;
      {items.map (item => (
        <Card key={item.id} className='overflow - hidden'>;
          <CardContent className='p - 0'>;
            <div className='p - 4'>;
              <div className='flex justify - between'>;
                <div className='flex items - center gap - 3'>;
                  {type === 'talents' ? (
                    <Avatar className='h - 12 w - 12'>        <Card key={item.id} className="overflow - hidden">;
          <CardContent className="p - 0">;
            <div className="p - 4">;
              <div className="flex justify - between">;
                <div className="flex items - center gap - 3">;
                  {type === "talents" ? (
                    <Avatar className="h - 12 w - 12">;
                      <AvatarImage src={item.image} alt={item.title} />;
                      <AvatarFallback>;
                        {item.title.char_at (0).toUpperCase ()}
                      </AvatarFallback>;
                    </Avatar>) : (
                    <div className='h - 12 w - 12 rounded - md bg - primary / 10 flex items - center justify - center'>;
                      <span className='text - primary font - semibold'>JOB</span>;
                    </div>)}
                  <div>;
                    <h3 className='font - medium'>{item.title}</h3>;
                    <p className='text - sm text - muted - foreground'>;
                      {item.subtitle}
                    </p>;
                  </div>;
                </div>;
                <button;
                  className='h - 8 w - 8 flex items - center justify - center';
                  on_click={() => toggle_saved (item.id)}                >;
                  {saved_items.includes (item.id) ? (
                    <BookmarkCheck className='h - 5 w - 5 text - primary' />) : (
                    <Bookmark className='h - 5 w - 5 text - muted - foreground' />)}
                </button>;
              </div>;
              <div className='mt - 3 flex flex - wrap gap - 1'>;
                {item.badges.map ((badge, index) => (
                  <Badge;
                    key={index}
                    variant='outline';
                    className='text - xs font - normal'                  >                      <AvatarImage src={item.image} alt={item.title} />;
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
                    key = {index, }
                    variant="outline";
                    className="text - xs font - normal";
                    {badge}
                  </Badge>))}
              </div>;
              <p className='mt - 3 text - sm line - clamp - 2'>{item.description}</p>;
              <div className='mt - 3 flex flex - wrap gap - 3 text - xs text - muted - foreground'>;
                {item.location && (
                  <div className='flex items - center gap - 1'>;
                    <MapPin className='h - 3 w - 3' />;
                    <span>{item.location}</span>;
                  </div>)}
                {item.price && (
                  <div className='flex items - center gap - 1'>;
                    <DollarSign className='h - 3 w - 3' />;
                    <span>{item.price}</span>;
                  </div>)}
                {item.time_posted && (
                  <div className='flex items - center gap - 1'>;
                    <Clock className='h - 3 w - 3' />;
                    <span>{item.time_posted}</span>;
                  </div>)}
                {item.match && (
                  <div className='ml - auto bg - primary / 10 text - primary rounded - full px - 2 py - 0.5'>                    {item.match}% match                {item.location && (
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
            <div className='border - t border - border p - 3 flex justify - end'>;
              <Button;
                size='sm';
                on_click={() => onViewDetails (item.id)}
                className='gap - 1'              >;
                View Details <ChevronRight className='h - 4 w - 4' />              </Button>;
                View Details <ChevronRight className="h - 4 w - 4" />;
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


      ))}
    </div>;
  );
};
}
<<<<<<< HEAD

<<<<<<< HEAD
;
=======
      ))};
    </div>
  )
}
  );
};
}
}
}
}
      ))};
      ))}
    </div>
  )
}
    </div>;
  );
};
}
}
}
}
;
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
