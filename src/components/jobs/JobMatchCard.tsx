import React from 'react',
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Card, CardContent } from "@/components/ui/card",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Building, MapPin, Clock, DollarSign, Star } from 'lucide-react'
import { formatDistanceToNow } from "date-fns",
import { JobMatch } from "@/types/jobs",interface JobMatchProps {
  matchId: string,
  talentId: string,
  name: string,
  title: string,
  company: string,
  avatar: string,
  location: string,
  category: string,
  matchPercent: number,
  skills: string[],
  onApply?: (matchId: string) => void,
  onViewDetails?: (matchId: string) => void,
  onInvite?: (matchId: string) => void
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
      onApply(matchId)
    }
  },

  const handleViewDetails = () => {
    if (onViewDetails) {
      onViewDetails(matchId)
    }
  },

  const handleInvite = () => {
    if (onInvite) {
      onInvite(matchId)
    }
  },

  // Generate a formatted date for display
  const postedDate = new Date(),
  postedDate.setDate(postedDate.getDate() - Math.floor(Math.random() * 14)), // Random date within last 2 weeks
  
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
import React from 'react';

interface JobMatchProps {_matchId: string;
  talentId: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  location: string;
  category: string;
  matchPercent: number;
  skills: string[];
  onApply?: (_matchId: string) => void;
  onViewDetails?: (_matchId: string) => void;
  onInvite?: (_matchId: string) => void;}

export function JobMatchCard(_{_matchId, _talentId, _name, _title, _company, _avatar, _location, _category, _matchPercent, _skills, _onApply, _onViewDetails, _onInvite}: JobMatchProps) {_const _handleApply = () => {
    if (onApply) {
      onApply(matchId);}
  };

  const _handleViewDetails = () => {_if (onViewDetails) {
      onViewDetails(matchId);}
  };

  const _handleInvite = () => {_if (onInvite) {
      onInvite(matchId);}
  };

  // Generate a formatted date for display
  const _postedDate = new Date();
  postedDate.setDate(postedDate.getDate() - Math.floor(Math.random() * 14)); // Random date within last 2 weeks
  
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        {_/* Match score indicator */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-3 flex justify-between items-center">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <span className="font-medium">{_matchPercent}% Match</span>
          </div>
          <Badge variant="outline" className="bg-background">
            {_formatDistanceToNow(postedDate, _{ addSuffix: true})}
          </Badge>
        </div>
        
        {_/* Talent details */}
        <div className="p-4">
          <div className="flex justify-between items-start gap-2 mb-3">
            <h3 className="text-lg font-bold line-clamp-2">{_name}</h3>
            <Badge variant="default">
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
                <AvatarImage src={avatar} alt={name} />              ) : (
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
                {skill}              </Badge>
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
              <Button onClick={handleApply} className=&quot;w-full&quot;>                Apply Now
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
