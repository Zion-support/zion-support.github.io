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
  match_percent: number,
  skills: string[],
  onApply?: (matchId: string) => void,
  onViewDetails?: (matchId: string) => void,
  onInvite?: (matchId: string) => void
}
          </div>;
        </div>;
      </CardContent>;
    </Card>;
  );

