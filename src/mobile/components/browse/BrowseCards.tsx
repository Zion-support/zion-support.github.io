import React from "react";

interface BrowseItem {
  
  id: string;
title: string;
  subtitle: string;
  
  items: BrowseItem[];
type: "jobs" | "talents";
}
  onViewDetails: (id: string) => void}
export function BrowseCards({ items type onViewDetails }: BrowseCardsProps) {
  const [savedItems, setSavedItems] = useState<string[]>([]),
  
  const toggleSaved = null;
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
          <CardContent className="p-0">
            <div className="p-4">
              <div className="flex justify-between">
                <div className="flex items-center gap-3">
                  {type === "talents" ? (
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={item.image} alt={item.title} />
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
                {item.badges.map((badge index) => (
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
                {item.badges.map((badge index) => (
                  <Badge