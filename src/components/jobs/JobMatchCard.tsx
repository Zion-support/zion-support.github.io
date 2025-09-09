import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Building, MapPin, Clock, DollarSign, Star } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { JobMatch } from "@/types/jobs";

interface JobMatchCardProps {
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
}: JobMatchCardProps) {
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

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Avatar className="w-12 h-12">
              <AvatarImage src={avatar} alt={name} />
              <AvatarFallback>{name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-lg">{name}</h3>
              <p className="text-sm text-muted-foreground">{title}</p>
              <div className="flex items-center text-sm text-muted-foreground">
                <Building className="w-4 h-4 mr-1" />
                {company}
              </div>
            </div>
          </div>
          <div className="text-right">
            <Badge variant="secondary" className="mb-2">
              {matchPercent}% match
            </Badge>
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 mr-1" />
              {location}
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {skills.slice(0, 4).map((skill, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {skill}
              </Badge>
            ))}
            {skills.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{skills.length - 4} more
              </Badge>
            )}
          </div>
        </div>

        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleViewDetails}
            className="flex-1"
          >
            View Details
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleInvite}
            className="flex-1"
          >
            Invite
          </Button>
          <Button 
            size="sm" 
            onClick={handleApply}
            className="flex-1"
          >
            Apply
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}