import React from 'react',
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Card, CardContent } from "@/components/ui/card",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Building, MapPin, Clock, DollarSign, Star } from "lucide-react",
import { formatDistanceToNow } from "date-fns";
import { JobMatch } from "@/types/jobs";
interface JobMatchProps {

  matchId: string
  talentId: string
  name: string
  title: string
  company: string
  avatar: string
  location: string
  category: string
  matchPercent: number
  skills: string[]
  onApply?: (matchId: string) => void
  onViewDetails?: (matchId: string) => void

  onInvite?: (matchId: string) => void
}
export function JobMatchCard({
  matchId;

  talentId
  name
  title
  company
  avatar
  location
  category
  matchPercent
  skills;
  onApply
  onViewDetails
  onInvite
}: JobMatchProps) {
  const handleApply = () => {
    if (onApply) {
      onApply(matchId)
    }
  }
  const handleViewDetails = () => {
    if (onViewDetails) {
      onViewDetails(matchId)
    }
  }
  const handleInvite = () => {
    if (onInvite) {
      onInvite(matchId)
    }
  }
  // Generate a formatted date for display
  const postedDate = new Date();

import { formatDistanceToNow } from "date-fns",
import { JobMatch } from "@/types/jobs",
interface JobMatchProps {
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

export function JobMatchCard({ ;
  matchId;
  talentId, 
  name, 
  title, 
  company, 
  avatar, 
  location, 
  category, 
  matchPercent, 
  skills;
  onApply, 
  onViewDetails, 
  onInvite 
}: JobMatchProps) {
  const handleApply = () => {
    if (onApply) {
      onApply(matchId)
    }
  };

  const handleViewDetails = () => {
    if (onViewDetails) {
      onViewDetails(matchId)
    }
  };

  const handleInvite = () => {
    if (onInvite) {
      onInvite(matchId)
    }
  };
import React from 'react',;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent } from "@/components/ui/card",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { Building, MapPin, Clock, DollarSign, Star } from "lucide-react",;
import { formatDistanceToNow } from "date-fns",;
import { JobMatch } from "@/types/jobs",;
interface JobMatchProps {;
  matchId: string,;
  talentId: string,;
  name: string,;
  title: string,;
  company: string,;
  avatar: string,;
  location: string,;
  category: string,;
  matchPercent: number,;
  skills: string[],;
  onApply?: (matchId: string) => void,;
  onViewDetails?: (matchId: string) => void,;
  onInvite?: (matchId: string) => void;
}
;
export function JobMatchCard({;
  matchId,;
  talentId,;
  name,;
  title,;
  company,;
  avatar,;
  location,;
  category,;
  matchPercent,;
  skills,;
  onApply,;
  onViewDetails,;
  onInvite;
}: JobMatchProps) {;
  const handleApply = () => {;
    if (onApply) {;
      onApply(matchId);
    }
  },;
  const handleViewDetails = () => {;
    if (onViewDetails) {;
      onViewDetails(matchId);
    }
  },;
  const handleInvite = () => {;
    if (onInvite) {;
      onInvite(matchId);
    }
  },

  // Generate a formatted date for display
  const postedDate = new Date(),
  postedDate.setDate(postedDate.getDate() - Math.floor(Math.random() * 14)), // Random date within last 2 weeks





import React from 'react';

  return (
    <Card className="overflow-hidden">;
      <CardContent className="p-0">;
        {/* Match score indicator */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-3 flex justify-between items-center">;
          <div className="flex items-center gap-1">;
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />;
            <span className="font-medium">{matchPercent}% Match</span>;
          </div>;
          <Badge variant="outline" className="bg-background">;
            {formatDistanceToNow(postedDate, { addSuffix: true })}
}




          </div>;
        </div>;
      </CardContent>;
    </Card>;
  );




}
import { Badge } from '@/components / ui / badge';
import { Button } from '@/components / ui / button';
import { Card, CardContent } from '@/components / ui / card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components / ui / avatar';
import { Building, MapPin, Clock, DollarSign, Star } from './lucide-react';
import { formatDistanceToNow } from './date - fns';
import { JobMatch } from '@/types / jobs';
interface JobMatchProps {
  match_id: string,
  talent_id: string,
  name: string,
  title: string,
  company: string,
  avatar: string,
  location: string,
  category: string,
  match_percent: number,
  skills: string[],
  on_apply?: (match_id: string) => void,
  onViewDetails?: (match_id: string) => void,
  on_invite?: (match_id: string) => void;
}
export /**
 * JobMatchCard - Function description
 */
function JobMatchCard() {
  const handle_apply = () =>: any {
    // Check condition
if ( {) {
  $2
}
      on_apply (match_id);
    }
  }
;
