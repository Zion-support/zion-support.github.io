<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react',
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Card, CardContent } from "@/components/ui/card",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Building, MapPin, Clock, DollarSign, Star } from 'lucide-react'
import { formatDistanceToNow } from "date-fns";
import { JobMatch } from "@/types/jobs";
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
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  talentId, ;
  name, ;
  title, ;
  company, ;
  avatar, ;
  location, ;
  category, ;
  matchPercent, ;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
  talent_id,
  name,
  title,
  company,
  avatar,
  location,
  category,
  match_percent,
}
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
