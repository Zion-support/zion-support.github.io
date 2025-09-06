<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<<< HEAD:src/components/jobs/JobMatchCard.tsx
=======
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  talentId, 
  name, 
  title, 
  company, 
  avatar, 
  location, 
  category, 
  matchPercent, 
}
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react',
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Card, CardContent } from "@/components/ui/card",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Building, MapPin, Clock, DollarSign, Star } from 'lucide-react'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
import { formatDistanceToNow } from "date-fns";
import { JobMatch } from "@/types/jobs";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { formatDistanceToNow } from "date-fns";
import { JobMatch } from "@/types/jobs";
import { formatDistanceToNow } from "date-fns",
import { JobMatch } from "@/types/jobs",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
  onInvite?: (matchId: string) => void
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
========
talentId, ;
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
}


  talentId
  name
  title
  company
  avatar
  location
  category
  matchPercent

}
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react',;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent } from "@/components/ui/card",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { Building, MapPin, Clock, DollarSign, Star } from 'lucide-react';
import { formatDistanceToNow } from "date-fns",;
import { JobMatch } from "@/types/jobs",;
<<<<<<< HEAD
;
interface JobMatchProps {;
  matchId:string,;
  talentId:string,;
  name:string,;
  title:string,;
  company:string,;
  avatar:string,;
  location:string,;
  category:string,;
  matchPercent:number,;
  skills:string[],;
  onApply?:(matchId:string) => void,;
  onViewDetails?:(matchId:string) => void,;
  onInvite?:(matchId:string) => void;
}
;
export function JobMatchCard({ ;
  matchId,;
  talentId, ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  name, ;
  title, ;
  company, ;
  avatar, ;
  location, ;
  category, ;
  matchPercent, ;
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/JobMatchCard.tsx
}
  talentId
  name
  title
  company
  avatar
  location
  category
  matchPercent
}
}
<<<<<<<< HEAD:src/components/jobs/JobMatchCard.tsx
>>>>>>> 

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  talent_id,
  name,
  title,
  company,
  avatar,
  location,
  category,
  match_percent,
<<<<<<< HEAD
=======
  skills,;
  onApply, ;
  onViewDetails, ;
  onInvite ;
} JobMatchProps) {;
  const handleApply = () => {;
    if (onApply) {;
      onApply(matchId),;
    }
  },;
;
  const handleViewDetails = () => {;
    if (onViewDetails) {;
      onViewDetails(matchId),;
    }
  },;
;
  const handleInvite = () => {;
    if (onInvite) {;
      onInvite(matchId),;
    }
  },;
;
  // Generate a formatted date for display;
  const postedDate = new Date(),;
  postedDate.setDate(postedDate.getDate() - Math.floor(Math.random() * 14)), // Random date within last 2 weeks;
  ;
  return (;
    <Card className="overflow-hidden">;
      <CardContent className="p-0">;
        {/* Match score indicator */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-3 flex justify-between items-center">;
          <div className="flex items-center gap-1">;
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />;
            <span className="font-medium">{matchPercent}% Match</span>;
          </div>;
          <Badge variant="outline" className="bg-background">;
            {formatDistanceToNow(postedDate, { addSuffix:true })}
          </Badge>;
        </div>;
        ;
        {/* Talent details */}
        <div className="p-4">;
          <div className="flex justify-between items-start gap-2 mb-3">;
            <h3 className="text-lg font-bold line-clamp-2">{name}</h3>;
            <Badge variant="default">;
              Available;
            </Badge>;
          </div>;
          ;
          <div className="text-lg font-medium mb-2">{title}</div>;
          ;
          <div className="flex flex-wrap gap-2 mb-3">;
            <Badge variant="outline">{category}</Badge>;
          </div>;
          ;
          <div className="flex items-center gap-2 mb-2">;
            <Avatar className="h-6 w-6">;
              {avatar ? (;
                <AvatarImage src={avatar} alt={name} />;
              ) :(;
                <AvatarFallback>;
                  <Building className="h-3 w-3" />;
                </AvatarFallback>;
              )}
            </Avatar>;
            <span className="text-sm font-medium">{company || 'Independent'}</span>;
          </div>;
          ;
          <div className="space-y-1 text-sm text-muted-foreground mb-3">;
            <div className="flex items-center gap-1">;
              <MapPin className="h-3.5 w-3.5" />;
              <span>{location || 'Remote'}</span>;
            </div>;
          </div>;
          ;
          <div className="flex flex-wrap gap-1 mb-4">;
            {skills?.slice(0, 5).map((skill) => (;
              <Badge key={skill} variant="secondary" className="text-xs">;
                {skill}
              </Badge>;
            ))}
          </div>;
          ;
          <div className="flex gap-2 justify-end">;
            {onInvite && (;
              <Button onClick={handleInvite} variant="default" size="sm">;
                Invite;
              </Button>;
            )}
            {onViewDetails && (;
              <Button onClick={handleViewDetails} variant="outline" size="sm">;
                View Details;
              </Button>;
            )}
            {onApply && (;
              <Button onClick={handleApply} className="w-full">;
                Apply Now;
              </Button>;
=======
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
  
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        {/* Match score indicator */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-3 flex justify-between items-center">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <span className="font-medium">{matchPercent}% Match</span>
          </div>
          <Badge variant="outline" className="bg-background">
            {formatDistanceToNow(postedDate, { addSuffix: true })}
          </Badge>;
        </div>;
        {/* Talent details */}
        <div className="p-4">
          <div className="flex justify-between items-start gap-2 mb-3">
            <h3 className="text-lg font-bold line-clamp-2">{name}</h3>
            <Badge variant="default">
              Available
            </Badge>
          </div>
          
          <div className="text-lg font-medium mb-2">{title}</div>
          
          <div className="flex flex-wrap gap-2 mb-3">
            <Badge variant="outline">{category}</Badge>
          </div>
          
          <div className="flex items-center gap-2 mb-2">
            <Avatar className="h-6 w-6">
              {avatar ? (
                <AvatarImage src={avatar} alt={name} />
              ) : (
                <AvatarFallback>
                  <Building className="h-3 w-3" />
                </AvatarFallback>
              )}
            </Avatar>
            <span className="text-sm font-medium">{company || 'Independent'}</span>
          </div>
          
          <div className="space-y-1 text-sm text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              <span>{location || 'Remote'}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-1 mb-4">
            {skills?.slice(0, 5).map((skill) => (
              <Badge key={skill} variant="secondary" className="text-xs">
                {skill}
              </Badge>;
            ))}
          </div>
          
          <div className="flex gap-2 justify-end">
            {onInvite && (
              <Button onClick={handleInvite} variant="default" size="sm">
                Invite
              </Button>
            )}
            {onViewDetails && (
              <Button onClick={handleViewDetails} variant="outline" size="sm">
                View Details
              </Button>
            )}
            {onApply && (
              <Button onClick={handleApply} className="w-full">
                Apply Now
              </Button>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            )}
          </div>;
        </div>;
      </CardContent>;
    </Card>;
<<<<<<< HEAD
  ),; interface JobMatchProps {;
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
onInvite?: (matchId: string) => void ;
}export function JobMatchCard ({;
  matchId;
talentId;
name;
title;
company;
avatar;
location;
category;
matchPercent;
skills;
onApply;
onViewDetails;
onInvite ;
}: JobMatchProps) {;
  const handleApply = () => {;
  if (onApply) {;
  onApply (matchId) ;
}
};
const handleViewDetails = () => {;
  if (onViewDetails) {;
  onViewDetails (matchId) ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
};
const handleInvite = () => {;
  if (onInvite) {;
  onInvite (matchId) ;
}
};
//Generate a formatted date for display const postedDate = new Date ();
postedDate.setDate (postedDate.getDate () - Math.floor (Math.random () * 14) ), //Random date within last 2 weeks return (<Card className="overflow-hidden" > <CardContent className="p-0" > {;
  /* Match score indicator */ ";
}<div className="bg-gradient-to-r from-primary/10 to-primary/5 p-3 flex justify-between items-center" > <div className="flex items-center gap-1" > <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" /> <span className="font-medium" > {;
  matchPercent ";
}% Match</span> </div> <Badge variant="outline" className="bg-background" > {;
  formatDistanceToNow (postedDate, {;
  addSuffix: true ;
}) ;
}</Badge> </div> {;
  /* Talent details */ ";
}<div className="p-4" > <div className="flex justify-between items-start gap-2 mb-3" > <h3 className="text-lg font-bold line-clamp-2" > {;
  name ";
}</h3> <Badge variant="default" > h-3 w-3" /> </AvatarFallback>) ;
}</Avatar> </Badge>) ) ;
}</div> Apply Now </Button>) ;
}</div> </div> </CardContent> </Card>) ;
}"
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/JobMatchCard.tsx
=======
  );
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
=======
}
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
