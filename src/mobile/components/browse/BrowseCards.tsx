interface BrowseItem {;
import React, { useState } from 'react';
import { Card, CardContent } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { Badge } from '@/components / ui / badge';
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


import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
                  </Badge>
                ))}
              </div>


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




                  <div className="ml-auto bg-primary/10 text-primary rounded-full px-2 py-0.5">
                    {item.match}% match
                  </div>
                )}
              </div>
            </div>
