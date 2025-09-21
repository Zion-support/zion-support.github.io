import React from 'react',
import { Card, CardContent } from '@/components/ui/card',
import { Badge } from '@/components/ui/badge',
import { Button } from '@/components/ui/button',
import { Star, Check } from 'lucide-react',
import { ListingItem } from '@/types/quotes',
interface ListingScoreCardProps {
  listing: ListingItem,
  isSelected?: boolean;
  onSelect?: () => void, }

export function ListingScoreCard({ listing, isSelected = false, onSelect }: ListingScoreCardProps) {
  return (
    <Card 
      className={`cursor-pointer transition-all duration-200 ${
        isSelected 
          ? 'border-zion-purple bg-zion-purple/10' 
          : 'border-zion-blue-light hover:border-zion-purple/50 hover:bg-zion-blue/20'
      }`}
      onClick={onSelect}
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <h4 className="font-semibold text-white">{listing.title}</h4>
              {isSelected && (
                <Check className="h-4 w-4 text-zion-purple" />
              )}
            </div>
            <p className="text-zion-slate-light text-sm mb-3 line-clamp-2">
              {listing.description}
            </p>
            <div className="flex items-center space-x-4 mb-3">
              {listing.rating && (
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-zion-slate-light ml-1">
                    {listing.rating}
                  </span>
                </div>
              )}
              <span className="text-sm text-zion-slate-light">
                by {listing.provider.name}
              </span>
              {listing.provider.verified && (
                <Badge  className="text-xs">
                  Verified
                </Badge>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {listing.tags.slice(0, 3).map((tag, index) => (
                <Badge key={index}  className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          <div className="text-right ml-4">
            {listing.price && (
              <div className="text-lg font-bold text-white">
                ${listing.price}
              </div>
            )}
            <Button
              
              size="sm"
              className="mt-2"
              onClick={(e) => {
                e.stopPropagation();
                onSelect?.();}
            >
              {isSelected ? 'Selected' : 'Select'}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );