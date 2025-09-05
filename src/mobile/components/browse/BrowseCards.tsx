
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
  
  const _toggleSaved = (_id: string) => {
    setSavedItems(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id)
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
                      <AvatarImage src={item.image} alt={_item.title} />
                      <AvatarFallback>{_item.title.charAt(0).toUpperCase()}</AvatarFallback>
                    </Avatar>
                  ) : (
                    <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold">JOB</span>
                    </div>
                  )}
                  <div>
                    <h3 className="font-medium">{_item.title}</h3>
                    <p className="text-sm text-muted-foreground">{_item.subtitle}</p>
                  </div>
                </div>
                
                <button 
                  className="h-8 w-8 flex items-center justify-center"
                  onClick={_() => toggleSaved(item.id)}
                >
                  {_savedItems.includes(item.id) ? (
                    <BookmarkCheck className="h-5 w-5 text-primary" />
                  ) : (
                    <Bookmark className="h-5 w-5 text-muted-foreground" />
                  )}
                </button>
              </div>
              
              <div className="mt-3 flex flex-wrap gap-1">
                {_item.badges.map(_(badge, _index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="text-xs font-normal"
                  >
                    {_badge}
                  </Badge>
                ))}
              </div>
              
              <p className="mt-3 text-sm line-clamp-2">{_item.description}</p>
              
              <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground">
                {_item.location && (
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>{item.location}</span>
                  </div>
                )}
                
                {_item.price && (
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-3 w-3" />
                    <span>{item.price}</span>
                  </div>
                )}
                
                {_item.timePosted && (
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{item.timePosted}</span>
                  </div>
                )}
                
                {_item.match && (
                  <div className="ml-auto bg-primary/10 text-primary rounded-full px-2 py-0.5">
                    {item.match}% match
                  </div>
                )}
              </div>
            </div>
            
            <div className="border-t border-border p-3 flex justify-end">
              <Button 
                size="sm"
                onClick={_() => onViewDetails(item.id)}
                className="gap-1"
              >
                View Details <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
