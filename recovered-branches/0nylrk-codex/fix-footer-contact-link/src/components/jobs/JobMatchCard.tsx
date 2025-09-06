<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from 'react';
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Building, MapPin, Clock, DollarSign, Star} from "lucide-react";
import {formatDistanceToNow} from "date-fns";
import {JobMatch} from "@/types/jobs";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import React from 'react',
import { Badge } from "@/components/ui/badge","
import { Button } from "@/components/ui/button","
import { Card, CardContent } from "@/components/ui/card","
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar","
import { Building, MapPin, Clock, DollarSign, Star } from "lucide-react",";
import { formatDistanceToNow } from "date-fns";"
import { JobMatch } from "@/types/jobs";
interface JobMatchProps {}
  matchId: string;
  talentId: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  location: string;
  category: string;
  matchPercent: number;
  skills: string[]
  onApply?: (matchId: string) => void;
  onViewDetails?: (matchId: string) => void;
  onInvite?: (matchId: string) => void;
}
export function JobMatchCard({};
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
  onInvite;
}: JobMatchProps) {}
  const handleApply = () => {}
    if (onApply) {}
      onApply(matchId)
    }
  }
  const handleViewDetails = () => {}
    if (onViewDetails) {}
      onViewDetails(matchId)
    }
  }
  const handleInvite = () => {}
    if (onInvite) {}
      onInvite(matchId)
    }
  }
  // Generate a formatted date for display;
  const postedDate = new Date();
"
import { formatDistanceToNow } from "date-fns","
import { JobMatch } from "@/types/jobs",
interface JobMatchProps {}
  matchId: string,
  talentId: string,
  name: string,
  title: string,
  company: string,
  avatar: string,
  location: string,
  category: string,
  match_percent: number,
  skills: string[],
  onApply?: (matchId: string) => void,
  onViewDetails?: (matchId: string) => void,;
  onInvite?: (matchId: string) => void;
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

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
<<<<<<< HEAD
  onInvite;
}: JobMatchProps) {}
  const handleApply = () => {}
    if (onApply) {}
=======
  onInvite 
}: JobMatchProps) {
  const handleApply = () => {
    if (onApply) {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      onApply(matchId)
    }
  };

<<<<<<< HEAD
  const handleViewDetails = () => {}
    if (onViewDetails) {}
=======
  const handleViewDetails = () => {
    if (onViewDetails) {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      onViewDetails(matchId)
    }
  };

<<<<<<< HEAD
  const handleInvite = () => {}
    if (onInvite) {}
      onInvite(matchId)
    }
  };'
import React from 'react',;"
import { Badge } from "@/components/ui/badge",;"
import { Button } from "@/components/ui/button",;"
import { Card, CardContent } from "@/components/ui/card",;"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;"
import { Building, MapPin, Clock, DollarSign, Star } from "lucide-react",;"
import { formatDistanceToNow } from "date-fns",;"
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
      on_apply (match_id);
    }
  }
;
<<<<<<< HEAD
export function JobMatchCard() { return null; }
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

<<<<<<< HEAD
  // Generate a formatted date for display;
  const postedDate = new Date(),
<<<<<<< HEAD
  postedDate.setDate(postedDate.getDate() - Math.floor(Math.random() * 14)), // Random date within last 2 weeks
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======





import React from 'react';

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
    <Card className="overflow-hidden">
=======
  postedDate.setDate(postedDate.getDate() - Math.floor(Math.random() * 14)), // Random date within last 2 weeks;
'
import React from 'react';

  return ("
    <Card className="overflow-hidden">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      <CardContent className="p-0">
        {/* Match score indicator */}"
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-3 flex justify-between items-center">"
          <div className="flex items-center gap-1">"
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />"
            <span className="font-medium">{matchPercent}% Match</span>
          </div>"
          <Badge variant="outline" className="bg-background">
            {formatDistanceToNow(postedDate, { addSuffix: true })}




<<<<<<< HEAD
<<<<<<< HEAD
          <div className="flex flex-wrap gap-2 mb-3">;
            <Badge variant="outline">{category}</Badge>;
          </div>;

          <div className="flex items-center gap-2 mb-2">;
            <Avatar className="h-6 w-6">;
              {avatar ? (;
                <AvatarImage src={avatar} alt={name} />;
              ) : (;
                <AvatarFallback>;
                  <Building className="h-3 w-3" />;
                </AvatarFallback>;
              )}
            </Avatar>;
            <span className="text-sm font-medium">{company || 'Independent'}</span>;
          </div>;

          <div className="space-y-1 text-sm text-muted-foreground mb-3">;
            <div className="flex items-center gap-1">;
              <MapPin className="h-3 && 3.5 w-3 && 3.5" />;
              <span>{location || 'Remote'}</span>;
            </div>;
          </div>;

          <div className="flex flex-wrap gap-1 mb-4">;
            {skills?.slice(0, 5).map((skill) => (;
              <Badge key={skill} variant="secondary" className="text-xs">;

                {skill}
              </Badge>;
            ))}

          </div>;

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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
  // Generate a formatted date for display
  const postedDate = new Date(),
  postedDate.setDate(postedDate.getDate() - Math.floor(Math.random() * 14)), // Random date within last 2 weeks
=======
  // Generate a formatted date for display
  const postedDate = new Date(),
  postedDate.setDate(postedDate.getDate() - Math.floor(Math.random() * 14)), // Random date within last 2 weeks





import React from 'react';

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
          </Badge>
        </div>
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
            <span className="text-sm font-medium">{company |'Independent'}</span>
          </div>
          <div className="space-y-1 text-sm text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              <span>{location |'Remote'}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-1 mb-4">
            {skills?.slice(0, 5).map((skill) => (
              <Badge key={skill} variant="secondary" className="text-xs">
                {skill}
              </Badge>
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======





>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          </div>;
        </div>;
      </CardContent>;
    </Card>;
  );
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
}
import React from 'react';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======



}
}
import React from 'react';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Badge } from '@/components / ui / badge';
import { Button } from '@/components / ui / button';
import { Card, CardContent } from '@/components / ui / card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components / ui / avatar';
import { Building, MapPin, Clock, DollarSign, Star } from './lucide-react';
import { formatDistanceToNow } from './date - fns';
<<<<<<< HEAD
=======


'
import { Badge } from '@/components / ui / badge';'
import { Button } from '@/components / ui / button';'
import { Card, CardContent } from '@/components / ui / card';'
import { Avatar, AvatarFallback, AvatarImage } from '@/components / ui / avatar';'
import { Building, MapPin, Clock, DollarSign, Star } from './lucide-react';'
import { formatDistanceToNow } from './date - fns';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { JobMatch } from '@/types / jobs';
interface JobMatchProps {}
=======
import { JobMatch } from '@/types / jobs';
interface JobMatchProps {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
export /**;
 * JobMatchCard - Function description;
 */
function JobMatchCard() {}
  const handle_apply = () =>: any {}
    // Check condition;
if ( {) {}
  $2;
=======
export /**
 * JobMatchCard - Function description
 */
function JobMatchCard() {
  const handle_apply = () =>: any {
    // Check condition
if ( {) {
  $2
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
      on_apply (match_id);
    }
  }
;
<<<<<<< HEAD
"
=======
  const handleViewDetails = () =>: any {
    // Check condition
if ( {) {
  $2
}
      onViewDetails (match_id);
    }
  }
;
  const handle_invite = () =>: any {
    // Check condition
if ( {) {
  $2
}
      on_invite (match_id);
    }
  }
;
  // Generate a formatted date for display;
  const posted_date = new Date ();
  posted_date.set_date (posted_date.get_date () - Math.floor (Math.random () * 14)), // Random date within last 2 weeks;
  return (
    <Card className="overflow - hidden">;
      <CardContent className="p - 0">;
        {/* Match score indicator */}
        <div className="bg - gradient - to - r from - primary / 10 to - primary / 5 p - 3 flex justify - between items - center">;
          <div className="flex items - center gap - 1">;
            <Star className="h - 4 w - 4 text - yellow - 500 fill - yellow - 500" />;
            <span className="font - medium">{match_percent}% Match</span>;
          </div>;
          <Badge variant="outline" className="bg - background">;
            {formatDistanceToNow (posted_date, { add_suffix: true })}
          </Badge>;
        </div>;
        {/* Talent details */}
        <div className="p - 4">;
          <div className="flex justify - between items - start gap - 2 mb - 3">;
            <h3 className="text - lg font - bold line - clamp - 2">{name}</h3>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <Badge variant="default">;
              Available;
            </Badge>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <div className="text - lg font - medium mb - 2">{title}</div>;
          <div className="flex flex - wrap gap - 2 mb - 3">;
            <Badge variant="outline">{category}</Badge>;
          </div>;
          <div className="flex items - center gap - 2 mb - 2">;
            <Avatar className="h - 6 w - 6">;
              {avatar ? (
                <AvatarImage src={avatar} alt={name} />) : (
                <AvatarFallback>;
                  <Building className="h - 3 w - 3" />;
                </AvatarFallback>)}
            </Avatar>;
            <span className="text - sm font - medium">{company || 'Independent'}</span>;
          </div>;
          <div className="space - y-1 text - sm text - muted - foreground mb - 3">;
            <div className="flex items - center gap - 1">;
              <MapPin className="h - 3.5 w - 3.5" />;
              <span>{location || 'Remote'}</span>;
            </div>;
          </div>;
          <div className="flex flex - wrap gap - 1 mb - 4">;
            {skills?.slice (0, 5).map ((skill) => (
              <Badge key={skill} variant="secondary" className="text - xs">;
                {skill}
              </Badge>))}
          </div>;
          <div className="flex gap - 2 justify - end">;
            {on_invite && (
              <Button on_click={handle_invite} variant="default" size="sm">;
                Invite;
              </Button>)}
            {onViewDetails && (
              <Button on_click={handleViewDetails} variant="outline" size="sm">;
                View Details;
              </Button>)}
            {on_apply && (
              <Button on_click={handle_apply} className="w - full">;
                Apply Now;
              </Button>)}
          </div>;
        </div>;
      </CardContent>;
    </Card>);
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
            )}
          </div>;
        </div>;
      </CardContent>;
    </Card>;
  ),; interface JobMatchProps {
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
}export function JobMatchCard ({
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
onInvite 
}: JobMatchProps) {
  const handleApply = () => {
  if (onApply) {
  onApply (matchId) 
}
};
const handleViewDetails = () => {
  if (onViewDetails) {
  onViewDetails (matchId) 
}
};
const handleInvite = () => {
  if (onInvite) {
  onInvite (matchId) 
}
};
//Generate a formatted date for display const postedDate = new Date ();
postedDate.setDate (postedDate.getDate () - Math.floor (Math.random () * 14) ), //Random date within last 2 weeks return (<Card className="overflow-hidden" > <CardContent className="p-0" > {
  /* Match score indicator */ 
}<div className="bg-gradient-to-r from-primary/10 to-primary/5 p-3 flex justify-between items-center" > <div className="flex items-center gap-1" > <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" /> <span className="font-medium" > {
  matchPercent 
}% Match</span> </div> <Badge variant="outline" className="bg-background" > {
  formatDistanceToNow (postedDate, {
  addSuffix: true 
}) 
}</Badge> </div> {
  /* Talent details */ 
}<div className="p-4" > <div className="flex justify-between items-start gap-2 mb-3" > <h3 className="text-lg font-bold line-clamp-2" > {
  name 
}</h3> <Badge variant="default" > h-3 w-3" /> </AvatarFallback>) 
}</Avatar> </Badge>) ) 
}</div> Apply Now </Button>) 
}</div> </div> </CardContent> </Card>) 
}
}
;
}
;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
