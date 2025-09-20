import React from 'react',
import { Badge,,  } from "@/components/ui/badge",
import { Button,,  } from "@/components/ui/button",
import { Card,,, CardContent,,  } from "@/components/ui/card",
import { Avatar,,, AvatarFallback,,, AvatarImage,,  } from "@/components/ui/avatar",
import { Building,,, MapPin,,, Clock,,, DollarSign,,, Star,,  } from 'lucide-react'
import { formatDistanceToNow,,  } from "
import { JobMatch,,  } from "
interface JobMatchProps {
  matchId: string;,
talentId: string;
  name: string;,
title: string;
  company: string;,
avatar: string;
  location: string;,
category: string;
  matchPercent: number;,
skills: string[[];]
  onApply?: (matchId: string) => void;
  onViewDetails?: (matchId: string) => void;
  onInvite?: (matchId: string) => void,
}

}
}