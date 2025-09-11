<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface BrowseItem {;
import React, { useState } from 'react';
import { Card, CardContent } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { Badge } from '@/components / ui / badge';
import {
<<<<<<< HEAD
<<<<<<< HEAD
  Bookmark
  BookmarkCheck
  ChevronRight
  MapPin
  Clock
  DollarSign
} from 'lucide-react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Bookmark,
  BookmarkCheck,
  ChevronRight,
  MapPin,
  Clock,
  DollarSign,
} from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components / ui / avatar';
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  timePosted?: string
interface BrowseCardsProps {
  items: BrowseItem[];
  type: "jobs" | "talents";
  onViewDetails: (id: string) => void
export function BrowseCards({ items, type, onViewDetails }: BrowseCardsProps) {
  const [savedItems, setSavedItems] = useState<string[]>([]),
  
  const toggleSaved = null;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======
  return (
    <div className='space-y-4 pb-24'>
      {items.map(item => (
        <Card key={item.id} className='overflow-hidden'>
          <CardContent className='p-0'>
            <div className='p-4'>
              <div className='flex justify-between'>
                <div className='flex items-center gap-3'>
                  {type === 'talents' ? (
                    <Avatar className='h-12 w-12'>        <Card key={item.id} className="overflow-hidden">
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                  <div>;
                    <h3 className='font-medium'>{item && item.title}</h3>;
                    <p className='text-sm text-muted-foreground'>;
                      {item && item.subtitle}
                    </p>;
                  </div>;
                </div>;


                <button
                  className='h-8 w-8 flex items-center justify-center'
                  onClick={() => toggleSaved(item && item.id)}                >;
                  {savedItems && savedItems.includes(item && item.id) ? (;
                    <BookmarkCheck className='h-5 w-5 text-primary' />;
                  ) : (;
                    <Bookmark className='h-5 w-5 text-muted-foreground' />;
                  )}

                </button>;
              </div>;

              <div className='mt-3 flex flex-wrap gap-1'>;
                {item && item.badges.map((badge, index) => (;

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

import React, { useState } from "react",
import { Card, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
=======
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { Bookmark, BookmarkCheck, ChevronRight, MapPin, Clock, DollarSign } from 'lucide-react'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",

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
  items: BrowseItem[],
  type: "jobs" | "talents",
  onViewDetails: (id: string) => void
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
    <div className="space-y-4 pb-24">
      {items.map((item) => (
        <Card key={item.id} className="overflow-hidden">





<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                  </div>
                </div>
                <button
                  className='h-8 w-8 flex items-center justify-center'
                  onClick={() => toggleSaved(item.id)}                >
<<<<<<< HEAD
                <button
                  className='h-8 w-8 flex items-center justify-center'
                  onClick={() => toggleSaved(item.id)}                >
                
                <button 
                  className="h-8 w-8 flex items-center justify-center"
                  onClick={() => toggleSaved(item.id)}
                >
                  {savedItems.includes(item.id) ? (
                    <BookmarkCheck className="h-5 w-5 text-primary" />
                  ) : (
                    <Bookmark className="h-5 w-5 text-muted-foreground" />
                  )}
                </button>
              </div>
              
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
                </button>
              </div>

              
              <div className="mt-3 flex flex-wrap gap-1">
                {item.badges.map((badge, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="text-xs font-normal"
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
                  )}
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                  </div>
                </div>
=======

                  <div>;
                    <h3 className="font-medium">{item && item.title}</h3>;
                    <p className="text-sm text-muted-foreground">{item && item.subtitle}</p>;
                  </div>;
                </div>;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
                </button>
              </div>
              <div className="mt-3 flex flex-wrap gap-1">
                {item.badges.map((badge, index) => (
=======
=======
                
                <button 
                  className="h-8 w-8 flex items-center justify-center"
                  onClick={() => toggleSaved(item && item.id)}
                >;
                  {savedItems && savedItems.includes(item && item.id) ? (;
                    <BookmarkCheck className="h-5 w-5 text-primary" />;
                  ) : (;
                    <Bookmark className="h-5 w-5 text-muted-foreground" />;
                  )}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                </button>;
              </div>;

              <div className="mt-3 flex flex-wrap gap-1">;
                {item && item.badges.map((badge, index) => (;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <Badge
                    key = {index,}
                    variant="outline"
                    className="text-xs font-normal"
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======


                  onClick={() => toggleSaved(item.id)}
                >
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  {savedItems.includes(item.id) ? (
                    <BookmarkCheck className="h-5 w-5 text-primary" />
                  ) : (
                    <Bookmark className="h-5 w-5 text-muted-foreground" />
                  )}
                </button>
              </div>

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
                </button>
              </div>

              
              <div className="mt-3 flex flex-wrap gap-1">
                {item.badges.map((badge, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="text-xs font-normal"


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

                </button>;
              </div>;
              <div className="mt-3 flex flex-wrap gap-1">;
                {item.badges.map((badge, index) => (;
                  <Badge;
                    key={index} ;
                    variant="outline";
                    className="text-xs font-normal";
                  >;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                </button>
              </div>
              <div className="mt-3 flex flex-wrap gap-1">
                {item.badges.map((badge, index) => (
                  <Badge
                    key = {index,}
                    variant="outline"
                    className="text-xs font-normal"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    {badge}
                  </Badge>
                ))}
              </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <p className='mt-3 text-sm line-clamp-2'>{item.description}</p>
              <div className='mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground'>
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
                  </Badge>;
                ))}
              </div>
              <p className='mt-3 text-sm line-clamp-2'>{item.description}</p>
              <div className='mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground'>
              
              <p className="mt-3 text-sm line-clamp-2">{item.description}</p>
              
              <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground">
=======

                    {badge}
                  </Badge>
                ))}
              </div>


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {item.location && (
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>{item.location}</span>
                  </div>
                )}
                
<<<<<<< HEAD
                
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {item.price && (
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-3 w-3" />
                    <span>{item.price}</span>
                  </div>
                )}
                
<<<<<<< HEAD
                
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {item.timePosted && (
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{item.timePosted}</span>
                  </div>
                )}
<<<<<<< HEAD
                {item.match && (
                {item.match && (
                  <div className='ml-auto bg-primary/10 text-primary rounded-full px-2 py-0.5'>                    {item.match}% match                {item.location && (
=======


                {item.location && (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
                {item.match && (
                
                {item.match && (
                
                {item.match && (
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <div className="ml-auto bg-primary/10 text-primary rounded-full px-2 py-0.5">
                    {item.match}% match
                  </div>
                )}
              </div>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
            <div className='border-t border-border p-3 flex justify-end'>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
            <div className='border-t border-border p-3 flex justify-end'>
              <Button
                size='sm'
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                onClick={() => onViewDetails(item.id)}
                className='gap-1'              >
                View Details <ChevronRight className='h-4 w-4' />              </Button>
                View Details <ChevronRight className="h-4 w-4" />
<<<<<<< HEAD
=======
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            
            <div className="border-t border-border p-3 flex justify-end">
              <Button 
                size="sm"



                onClick={() => onViewDetails(item.id)}
<<<<<<< HEAD
                className='gap-1'              >
                View Details <ChevronRight className='h-4 w-4' />              </Button>
                View Details <ChevronRight className="h-4 w-4" />
ursor/fix-website-loading-errors-and-merge-6662
                onClick={() => onViewDetails(item.id)}
=======
                className="gap-1"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
      ))}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}


      ))}

    </div>;
  );
};
}

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
