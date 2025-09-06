
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
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

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useState } from "react",
import { Card, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <CardContent className="p-0">
=======
>>>>>>>           <CardContent className="p-0">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>>                   )}
=======
                  )}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                  </div>
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

                  {savedItems.includes(item.id) ? (
=======
                <button
                  className='h-8 w-8 flex items-center justify-center'
                  onClick={() => toggleSaved(item.id)}                >
>>>>>>>                   {savedItems.includes(item.id) ? (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                <button
                  className='h-8 w-8 flex items-center justify-center'
                  onClick={() => toggleSaved(item.id)}                >
                
                <button 
                  className="h-8 w-8 flex items-center justify-center"
                  onClick={() => toggleSaved(item.id)}
                >
                  {savedItems.includes(item.id) ? (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <BookmarkCheck className="h-5 w-5 text-primary" />
                  ) : (
                    <Bookmark className="h-5 w-5 text-muted-foreground" />
                  )}
                </button>
              </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

              <div className="mt-3 flex flex-wrap gap-1">
=======
              
>>>>>>>               <div className="mt-3 flex flex-wrap gap-1">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                {item.badges.map((badge, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="text-xs font-normal"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

                  )}
=======
>>>>>>>                   )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  )}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

                    {badge}
                  </Badge>;
                ))}
              </div>

              <p className="mt-3 text-sm line-clamp-2">{item.description}</p>
              
              <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground">

                {item.location && (
                  <div className="flex items-center gap-1">
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>                     {badge}
                  </Badge>;
                ))}
              </div>
              <p className='mt-3 text-sm line-clamp-2'>{item.description}</p>
              <div className='mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground'>
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                </button>;
              </div>;
              <div className="mt-3 flex flex-wrap gap-1">;
                {item.badges.map((badge, index) => (;
                  <Badge;
                    key={index} ;
                    variant="outline";
                    className="text-xs font-normal";
                  >;
                    {badge}
                  </Badge>;
                ))}
              </div>
              <p className='mt-3 text-sm line-clamp-2'>{item.description}</p>
              <div className='mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground'>
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              
              <p className="mt-3 text-sm line-clamp-2">{item.description}</p>
              
              <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground">
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>                 {item.location && (
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>                   <div className="flex items-center gap-1">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                {item.location && (
                  <div className="flex items-center gap-1">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <MapPin className="h-3 w-3" />
                    <span>{item.location}</span>
                  </div>
                )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
                
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
                
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                {item.price && (
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-3 w-3" />
                    <span>{item.price}</span>
                  </div>
                )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
                
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
                
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                {item.timePosted && (
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{item.timePosted}</span>
                  </div>
                )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
                {item.match && (
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
                {item.match && (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

                {item.match && (

=======
=======
                
                {item.match && (
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
                
                {item.match && (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  <div className="ml-auto bg-primary/10 text-primary rounded-full px-2 py-0.5">
=======
>>>>>>>                   <div className="ml-auto bg-primary/10 text-primary rounded-full px-2 py-0.5">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                    {item.match}% match
                  </div>
                )}
              </div>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
            <div className='border-t border-border p-3 flex justify-end'>
              <Button
                size='sm'
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            <div className='border-t border-border p-3 flex justify-end'>
              <Button
                size='sm'
                onClick={() => onViewDetails(item.id)}
                className='gap-1'              >
                View Details <ChevronRight className='h-4 w-4' />              </Button>
                View Details <ChevronRight className="h-4 w-4" />
            
            <div className="border-t border-border p-3 flex justify-end">
              <Button 
                size="sm"
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                onClick={() => onViewDetails(item.id)}
                className='gap-1'              >
                View Details <ChevronRight className='h-4 w-4' />              </Button>
                View Details <ChevronRight className="h-4 w-4" />
>>>>>>>                 onClick={() => onViewDetails(item.id)}
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                onClick={() => onViewDetails(item.id)}
>>>>>>>                 className="gap-1"
              >
                View Details <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

    </div>;
  );
};
}

=======
      ))};
    </div>
  )
}
>>>>>>>     </div>;
  );
};
}
}
}
}
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
