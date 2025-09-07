<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx
<<<<<<< HEAD:src/mobile/components/browse/BrowseCards.tsx
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/mobile/components/browse/BrowseCards.tsx

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
=======
interface BrowseItem {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/browse/BrowseCards.tsx
=======

interface BrowseItem {
  id: string;,
  title: string;,
  subtitle: string;,
  description: string;,
  location?: string;,
  badges: string[];,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/mobile/components/browse/BrowseCards.tsx
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

<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx
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

<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx
  return (
=======

  return ('
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/browse/BrowseCards.tsx
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

<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx
                <button
=======

                <button'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/browse/BrowseCards.tsx
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

<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx
<<<<<<< HEAD:src/mobile/components/browse/BrowseCards.tsx
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
<<<<<<< HEAD:src/mobile/components/browse/BrowseCards.tsx
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/mobile/components/browse/BrowseCards.tsx
import React, { useState } from "react",
import { Card, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
<<<<<<< HEAD:src/mobile/components/browse/BrowseCards.tsx
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308:src_backup/mobile/components/browse/BrowseCards.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/mobile/components/browse/BrowseCards.tsx
import { Bookmark, BookmarkCheck, ChevronRight, MapPin, Clock, DollarSign } from 'lucide-react'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
=======
"
import React, { useState } from "react","
import { Card, CardContent } from "@/components/ui/card","
import { Button } from "@/components/ui/button","
import { Badge } from "@/components/ui/badge",'
import { Bookmark, BookmarkCheck, ChevronRight, MapPin, Clock, DollarSign } from 'lucide-react'"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/browse/BrowseCards.tsx

interface BrowseItem {}
  id: string,
  title: string,
  subtitle: string,
  description: string,
  location?: string;
  badges: string[],
<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx
  price?: string;
  image?: string;
  match?: number;
  timePosted?: string
=======
  price?: string,
  image?: string,
  match?: number,;
  timePosted?: string;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/browse/BrowseCards.tsx
=======
  timePosted?: string
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/mobile/components/browse/BrowseCards.tsx
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

<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx
export function BrowseCards({ items, type, onViewDetails }: BrowseCardsProps) {

<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx
  const [ savedItems, setSavedItems ] = useState<string[]>([]),

  const toggleSaved = (id: string) => {
=======
export function BrowseCards({ items, type, onViewDetails }: BrowseCardsProps) {}
  const [savedItems, setSavedItems] = useState<string[]>([]),
  
  const toggleSaved = (id: string) => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/browse/BrowseCards.tsx
    setSavedItems(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    )
<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx
  };

  return (
=======
  },
  
  return ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/browse/BrowseCards.tsx
=======
  return (
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/mobile/components/browse/BrowseCards.tsx
    <div className="space-y-4 pb-24">
      {items.map((item) => ("
        <Card key={item.id} className="overflow-hidden">
<<<<<<< HEAD
=======

<<<<<<< HEAD

<<<<<<< HEAD

<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx


<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/mobile/components/browse/BrowseCards.tsx
          <CardContent className="p-0">
            <div className="p-4">
              <div className="flex justify-between">
                <div className="flex items-center gap-3">
                  {type === "talents" ? (
=======

"
          <CardContent className="p-0">"
            <div className="p-4">"
              <div className="flex justify-between">"
                <div className="flex items-center gap-3">"
                  {type === "talents" ? ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/browse/BrowseCards.tsx
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={item.image} alt={item.title} />
<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx
<<<<<<< HEAD:src/mobile/components/browse/BrowseCards.tsx
<<<<<<< HEAD
                      <AvatarFallback>{item.title.charAt(0).toUpperCase()}</AvatarFallback>
                    </Avatar>
                  ) : ("
                    <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">"
                      <span className="text-primary font-semibold">JOB</span>
                    </div>
                  )}
<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx
<<<<<<< HEAD
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                  </div>
                </div>
                
                <button 
                  className="h-8 w-8 flex items-center justify-center"
=======

=======
                      <AvatarFallback>{item.title.charAt(0).toUpperCase()}</AvatarFallback>
                    </Avatar>
                  ) : (
                    <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">"
                      <span className="text-primary font-semibold">JOB</span>"
                    </div>
                  )}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/mobile/components/browse/BrowseCards.tsx
                  <div>;
                    <h3 className="font-medium">{item && item.title}</h3>;
=======
;
                  <div>;"
                    <h3 className="font-medium">{item && item.title}</h3>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/browse/BrowseCards.tsx
                    <p className="text-sm text-muted-foreground">{item && item.subtitle}</p>;
                  </div>;
                </div>;
<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx

<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx
                <button
=======

                <button"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/browse/BrowseCards.tsx
                  className="h-8 w-8 flex items-center justify-center"
=======
                  onClick={() => toggleSaved(item.id)}
                >
                  {savedItems.includes(item.id) ? ("
                    <BookmarkCheck className="h-5 w-5 text-primary" />
                  ) : ("
                    <Bookmark className="h-5 w-5 text-muted-foreground" />
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308:src_backup/mobile/components/browse/BrowseCards.tsx
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/mobile/components/browse/BrowseCards.tsx

                  )}
                </button>;
              </div>;
<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx
"
              <div className="mt-3 flex flex-wrap gap-1">;
                {item && item.badges.map((badge, index) => (;

                  <Badge;
                    key = {index,}"
                    variant="outline""
                    className="text-xs font-normal"

<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx
                  {savedItems.includes(item.id) ? (
=======

                  {savedItems.includes(item.id) ? ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/browse/BrowseCards.tsx
                    <BookmarkCheck className="h-5 w-5 text-primary" />
                  ) : ("
                    <Bookmark className="h-5 w-5 text-muted-foreground" />
=======
              <div className="mt-3 flex flex-wrap gap-1">;
                {item && item.badges.map((badge, index) => (;
                  <Badge
                    key = {index,}
                    variant="outline""
                    className="text-xs font-normal""
                    variant="outline"
                    className="text-xs font-normal"

                  {savedItems.includes(item.id) ? (
                    <BookmarkCheck className="h-5 w-5 text-primary" />"
                  ) : (
                    <Bookmark className="h-5 w-5 text-muted-foreground" />"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/mobile/components/browse/BrowseCards.tsx
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  onClick={() => toggleSaved(item.id)}
                >
                  {savedItems.includes(item.id) ? ("
                    <BookmarkCheck className="h-5 w-5 text-primary" />
                  ) : ("
                    <Bookmark className="h-5 w-5 text-muted-foreground" />
                  )}
                </button>
              </div>
<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx
<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx
<<<<<<< HEAD
<<<<<<< HEAD
              
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

              "
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/browse/BrowseCards.tsx
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/mobile/components/browse/BrowseCards.tsx
              <div className="mt-3 flex flex-wrap gap-1">
                {item.badges.map((badge, index) => (
                  <Badge;
                    key={index} "
                    variant="outline" "
                    className="text-xs font-normal"
<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/mobile/components/browse/BrowseCards.tsx
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
<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/mobile/components/browse/BrowseCards.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  )}
<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx
<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/mobile/components/browse/BrowseCards.tsx
                  <div>;
                    <h3 className="font-medium">{item.title}</h3>;
                    <p className="text-sm text-muted-foreground">{item.subtitle}</p>;
                  </div>;
                </div>;
                <button;
                  className="h-8 w-8 flex items-center justify-center";
<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx
                  onClick={() => toggleSaved(item.id)}
                >;
                  {savedItems.includes(item.id) ? (;
                    <BookmarkCheck className="h-5 w-5 text-primary" />;
                  ) : (;
                    <Bookmark className="h-5 w-5 text-muted-foreground" />;
=======
                  <div>"
                    <h3 className="font-medium">{item.title}</h3>"
                    <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                  </div>
                </div>
                <button"
                  className="h-8 w-8 flex items-center justify-center"
                  onClick={() => toggleSaved(item.id)}
                >
                  {savedItems.includes(item.id) ? ("
                    <BookmarkCheck className="h-5 w-5 text-primary" />
                  ) : ("
                    <Bookmark className="h-5 w-5 text-muted-foreground" />
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/browse/BrowseCards.tsx
                  )}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
                  onClick={() => toggleSaved(item.id)}
                >;
                  {savedItems.includes(item.id) ? (;
                    <BookmarkCheck className="h-5 w-5 text-primary" />;
                  ) : (;
                    <Bookmark className="h-5 w-5 text-muted-foreground" />;
                  )}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/mobile/components/browse/BrowseCards.tsx
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
<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx
<<<<<<< HEAD:src/mobile/components/browse/BrowseCards.tsx
<<<<<<< HEAD
<<<<<<< HEAD
              
              <p className="mt-3 text-sm line-clamp-2">{item.description}</p>
              
              <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground">
=======

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                {item.location && (
                  <div className="flex items-center gap-1">"
                    <MapPin className="h-3 w-3" />"
                    <span>{item.location}</span>
                  </div>
                )}
                {item.price && (
                  <div className="flex items-center gap-1">"
                    <DollarSign className="h-3 w-3" />"
                    <span>{item.price}</span>
                  </div>
                )}
                {item.timePosted && (
                  <div className="flex items-center gap-1">"
                    <Clock className="h-3 w-3" />"
                    <span>{item.timePosted}</span>
                  </div>
                )}
                  <div className="ml-auto bg-primary/10 text-primary rounded-full px-2 py-0.5">"
                  </Badge>;
                ))}
              </div>
              <p className="mt-3 text-sm line-clamp-2">{item.description}</p>
              <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground">
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/mobile/components/browse/BrowseCards.tsx

<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                {item.location && (
                  <div className="flex items-center gap-1">
=======
                {item.location && ("
                  <div className="flex items-center gap-1">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/browse/BrowseCards.tsx
                    <MapPin className="h-3 w-3" />
                    <span>{item.location}</span>
                  </div>
                )}

<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx
<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx
                {item.price && (
                  <div className="flex items-center gap-1">
=======

                


                {item.price && ("
                  <div className="flex items-center gap-1">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/browse/BrowseCards.tsx
=======
                {item.price && (
                  <div className="flex items-center gap-1">
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/mobile/components/browse/BrowseCards.tsx
                    <DollarSign className="h-3 w-3" />
                    <span>{item.price}</span>
                  </div>
                )}

<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx
<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx
                {item.timePosted && (
                  <div className="flex items-center gap-1">
=======

                


                {item.timePosted && ("
                  <div className="flex items-center gap-1">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/browse/BrowseCards.tsx
=======
                {item.timePosted && (
                  <div className="flex items-center gap-1">
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/mobile/components/browse/BrowseCards.tsx
                    <Clock className="h-3 w-3" />
                    <span>{item.timePosted}</span>
                  </div>
                )}
<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx
<<<<<<< HEAD
                
                {item.match && (
=======

<<<<<<< HEAD

<<<<<<< HEAD


<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                {item.match && (

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/mobile/components/browse/BrowseCards.tsx
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
=======

"
                  <div className="ml-auto bg-primary/10 text-primary rounded-full px-2 py-0.5">
                    {item.match}% match;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/browse/BrowseCards.tsx
                  </div>
                )}
              </div>
            </div>
<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx
<<<<<<< HEAD:src/mobile/components/browse/BrowseCards.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

              </div>;
'
              <p className='mt-3 text-sm line-clamp-2'>{item && item.description}</p>;
'
=======

              </div>;
              <p className='mt-3 text-sm line-clamp-2'>{item && item.description}</p>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/mobile/components/browse/BrowseCards.tsx
              <div className='mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground'>;
                {item && item.location && (;'
                  <div className='flex items-center gap-1'>;'
                    <MapPin className='h-3 w-3' />;
                    <span>{item && item.location}</span>;
                  </div>;
                )}
<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx

                {item && item.price && (;'
                  <div className='flex items-center gap-1'>;'
=======
                {item && item.price && (;
                  <div className='flex items-center gap-1'>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/mobile/components/browse/BrowseCards.tsx
                    <DollarSign className='h-3 w-3' />;
                    <span>{item && item.price}</span>;
                  </div>;
                )}
<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx

                {item && item.timePosted && (;'
                  <div className='flex items-center gap-1'>;'
=======
                {item && item.timePosted && (;
                  <div className='flex items-center gap-1'>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/mobile/components/browse/BrowseCards.tsx
                    <Clock className='h-3 w-3' />;
                    <span>{item && item.timePosted}</span>;
                  </div>;
                )}
<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx

                {item && item.match && (;'
                  <div className='ml-auto bg-primary/10 text-primary rounded-full px-2 py-0 && 0.5'>                    {item && item.match}% match                {item && item.location && (;"
                  <div className="flex items-center gap-1">;"
=======
                {item && item.match && (;
                  <div className='ml-auto bg-primary/10 text-primary rounded-full px-2 py-0 && 0.5'>                    {item && item.match}% match                {item && item.location && (;
                  <div className="flex items-center gap-1">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/mobile/components/browse/BrowseCards.tsx
                    <MapPin className="h-3 w-3" />;
                    <span>{item && item.location}</span>;
                  </div>;
                )}
<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx

                {item && item.price && (;"
                  <div className="flex items-center gap-1">;"
=======
                {item && item.price && (;
                  <div className="flex items-center gap-1">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/mobile/components/browse/BrowseCards.tsx
                    <DollarSign className="h-3 w-3" />;
                    <span>{item && item.price}</span>;
                  </div>;
                )}
<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx

                {item && item.timePosted && (;"
                  <div className="flex items-center gap-1">;"
=======
                {item && item.timePosted && (;
                  <div className="flex items-center gap-1">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/mobile/components/browse/BrowseCards.tsx
                    <Clock className="h-3 w-3" />;
                    <span>{item && item.timePosted}</span>;
                  </div>;
                )}
<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx

                {item && item.match && (;"
=======
                {item && item.match && (;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/mobile/components/browse/BrowseCards.tsx
                  <div className="ml-auto bg-primary/10 text-primary rounded-full px-2 py-0 && 0.5">;
                    {item && item.match}% match;
                  </div>;
                )}
              </div>;
            </div>;
<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx
'
            <div className='border-t border-border p-3 flex justify-end'>;
              <Button'
                size='sm'
                onClick={() => onViewDetails(item && item.id)}'
                className='gap-1'              >;'
                View Details <ChevronRight className='h-4 w-4' />              </Button>;"
=======
            <div className='border-t border-border p-3 flex justify-end'>;
              <Button
                size='sm''
                onClick={() => onViewDetails(item && item.id)}
                className='gap-1'              >;
                View Details <ChevronRight className='h-4 w-4' />              </Button>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/mobile/components/browse/BrowseCards.tsx
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
<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx

<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
            <div className="border-t border-border p-3 flex justify-end">"
              <Button
                size="sm""
                onClick={() => onViewDetails(item.id)}
                className="gap-1""
              >
                View Details <ChevronRight className="h-4 w-4" />"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/mobile/components/browse/BrowseCards.tsx
            <div className="border-t border-border p-3 flex justify-end">
              <Button 
                size="sm"
=======
=======
            "
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/browse/BrowseCards.tsx
            <div className="border-t border-border p-3 flex justify-end">
              <Button "
                size="sm"

<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx
<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                onClick={() => onViewDetails(item.id)}
                className="gap-1"
=======
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308:src_backup/mobile/components/browse/BrowseCards.tsx
=======
            <div className="border-t border-border p-3 flex justify-end">
              <Button 
                size="sm"

                onClick={() => onViewDetails(item.id)}
                className="gap-1"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/mobile/components/browse/BrowseCards.tsx
<div className='border-t border-border p-3 flex justify-end'>
              <Button
                size='sm'
                onClick={() => onViewDetails(item.id)}
                className='gap-1'
origin/cursor/automate-test-improve-and-merge-code-2533
              >
                View Details <ChevronRight className='h-4 w-4' />
<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx
=======


                onClick={() => onViewDetails(item.id)}"
                className="gap-1"
              >"
                View Details <ChevronRight className="h-4 w-4" />
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/browse/BrowseCards.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/mobile/components/browse/BrowseCards.tsx
              </Button>
            </div>
          </CardContent>
        </Card>
<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx
<<<<<<< HEAD
=======

  time_posted?: string;
interface BrowseCardsProps {}
  items: BrowseItem[];'
  type: 'jobs' | 'talents';
  onViewDetails: (id: string) => void;
export /**;
 * BrowseCards - Function description;
 */
function BrowseCards() {}
  const [saved_items, setSavedItems] = useState < string[]>([]);
  const toggle_saved = (id: string) =>: any {}
=======
  time_posted?: string;
interface BrowseCardsProps {
  items: BrowseItem[];,
  type: 'jobs' | 'talents';',
  onViewDetails: (id:,  string) => void;,
export /**
 * BrowseCards - Function description
 */
function BrowseCards() {
  const [saved_items, setSavedItems] = useState < string[]>([]);,
  const toggle_saved = (id:,  string) =>: any {,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/mobile/components/browse/BrowseCards.tsx
    setSavedItems (prev =>;
      prev.includes (id) ? prev.filter (item_id => item_id !==,  id) : [...prev, id]);
  }
  return ('
    <div className='space - y-4 pb - 24'>;
<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx
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
=======
      {items.map (item => (
        <Card key={item.id} className='overflow - hidden'>;
          <CardContent className='p - 0'>;
            <div className='p - 4'>;
              <div className='flex justify - between'>;
                <div className='flex items - center gap - 3'>;
                  {type === 'talents' ? ('
                    <Avatar className='h - 12 w - 12'>        <Card key={item.id} className="overflow - hidden">;
          <CardContent className="p - 0">;
            <div className="p - 4">;
              <div className="flex justify - between">;
                <div className="flex items - center gap - 3">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/mobile/components/browse/BrowseCards.tsx
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
<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx
                  {saved_items.includes (item.id) ? ('
                    <BookmarkCheck className='h - 5 w - 5 text - primary' />) : ('
                    <Bookmark className='h - 5 w - 5 text - muted - foreground' />)}
=======
                  {saved_items.includes (item.id) ? (
                    <BookmarkCheck className='h - 5 w - 5 text - primary' />) : ('
                    <Bookmark className='h - 5 w - 5 text - muted - foreground' />)}'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/mobile/components/browse/BrowseCards.tsx
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
<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx
                  {saved_items.includes (item.id) ? ("
                    <BookmarkCheck className="h - 5 w - 5 text - primary" />) : ("
                    <Bookmark className="h - 5 w - 5 text - muted - foreground" />)}
=======
                  {saved_items.includes (item.id) ? (
                    <BookmarkCheck className="h - 5 w - 5 text - primary" />) : ("
                    <Bookmark className="h - 5 w - 5 text - muted - foreground" />)}"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/mobile/components/browse/BrowseCards.tsx
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
<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx
                {item.match && ('
                  <div className='ml - auto bg - primary / 10 text - primary rounded - full px - 2 py - 0.5'>                    {item.match}% match                {item.location && ("
                  <div className="flex items - center gap - 1">;"
=======
                {item.match && (
                  <div className='ml - auto bg - primary / 10 text - primary rounded - full px - 2 py - 0.5'>                    {item.match}% match                {item.location && ('
                  <div className="flex items - center gap - 1">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/mobile/components/browse/BrowseCards.tsx
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

<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      ))}
<<<<<<< HEAD:src/mobile/components/browse/BrowseCards.tsx
<<<<<<< HEAD

    </div>;
  );
}
<<<<<<< HEAD
=======

<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
=======
;
=======
    </div>
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/mobile/components/browse/BrowseCards.tsx
    </div>
  );
}
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD:src_backup/mobile/components/browse/BrowseCards.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/mobile/components/browse/BrowseCards.tsx
=======
;'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/browse/BrowseCards.tsx
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/mobile/components/browse/BrowseCards.tsx
