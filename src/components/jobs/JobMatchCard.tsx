import React from 'react';
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Card, CardContent } from &quot;@/components/ui/card&quot;;
import { Avatar, AvatarFallback, AvatarImage } from &quot;@/components/ui/avatar&quot;;
import { Building, MapPin, Clock, DollarSign, Star } from 'lucide-react'
import { formatDistanceToNow } from &quot;date-fns&quot;;
import { JobMatch } from &quot;@/types/jobs&quot;;

interface JobMatchProps {
  matchId: string;
  talentId: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  location: string;
  category: string;
  matchPercent: number;
  skills: string[];
  onApply?: (matchId: string) => void;
  onViewDetails?: (matchId: string) => void;
  onInvite?: (matchId: string) => void;
}

export function JobMatchCard({ 
  matchId, 
  talentId, 
  name, 
  title, 
  company, 
  avatar, 
  location, 
  category, 
  matchPercent, 
  skills,
  onApply, 
  onViewDetails, 
  onInvite 
}: JobMatchProps) {
  const handleApply = () => {
    if (onApply) {
      onApply(matchId);
    }
  };

  const handleViewDetails = () => {
    if (onViewDetails) {
      onViewDetails(matchId);
    }
  };

  const handleInvite = () => {
    if (onInvite) {
      onInvite(matchId);
    }
  };

  // Generate a formatted date for display
  const postedDate = new Date();
  postedDate.setDate(postedDate.getDate() - Math.floor(Math.random() * 14)); // Random date within last 2 weeks
  
  return (
    <Card className=&quot;overflow-hidden&quot;>
      <CardContent className=&quot;p-0&quot;>
        {/* Match score indicator */}
        <div className=&quot;bg-gradient-to-r from-primary/10 to-primary/5 p-3 flex justify-between items-center&quot;>
          <div className=&quot;flex items-center gap-1&quot;>
            <Star className=&quot;h-4 w-4 text-yellow-500 fill-yellow-500&quot; />
            <span className=&quot;font-medium&quot;>{matchPercent}% Match</span>
          </div>
          <Badge variant=&quot;outline&quot; className=&quot;bg-background&quot;>
            {formatDistanceToNow(postedDate, { addSuffix: true })}
          </Badge>
        </div>
        
        {/* Talent details */}
        <div className=&quot;p-4&quot;>
          <div className=&quot;flex justify-between items-start gap-2 mb-3&quot;>
            <h3 className=&quot;text-lg font-bold line-clamp-2&quot;>{name}</h3>
            <Badge variant=&quot;default&quot;>
              Available
            </Badge>
          </div>
          
          <div className=&quot;text-lg font-medium mb-2&quot;>{title}</div>
          
          <div className=&quot;flex flex-wrap gap-2 mb-3&quot;>
            <Badge variant=&quot;outline&quot;>{category}</Badge>
          </div>
          
          <div className=&quot;flex items-center gap-2 mb-2&quot;>
            <Avatar className=&quot;h-6 w-6&quot;>
              {avatar ? (
                <AvatarImage src={avatar} alt={name} />
              ) : (
                <AvatarFallback>
                  <Building className=&quot;h-3 w-3&quot; />
                </AvatarFallback>
              )}
            </Avatar>
            <span className=&quot;text-sm font-medium&quot;>{company || 'Independent'}</span>
          </div>
          
          <div className=&quot;space-y-1 text-sm text-muted-foreground mb-3&quot;>
            <div className=&quot;flex items-center gap-1&quot;>
              <MapPin className=&quot;h-3.5 w-3.5&quot; />
              <span>{location || 'Remote'}</span>
            </div>
          </div>
          
          <div className=&quot;flex flex-wrap gap-1 mb-4&quot;>
            {skills?.slice(0, 5).map((skill) => (
              <Badge key={skill} variant=&quot;secondary&quot; className=&quot;text-xs&quot;>
                {skill}
              </Badge>
            ))}
          </div>
          
          <div className=&quot;flex gap-2 justify-end&quot;>
            {onInvite && (
              <Button onClick={handleInvite} variant=&quot;default&quot; size=&quot;sm&quot;>
                Invite
              </Button>
            )}
            {onViewDetails && (
              <Button onClick={handleViewDetails} variant=&quot;outline&quot; size=&quot;sm&quot;>
                View Details
              </Button>
            )}
            {onApply && (
              <Button onClick={handleApply} className=&quot;w-full&quot;>
                Apply Now
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
