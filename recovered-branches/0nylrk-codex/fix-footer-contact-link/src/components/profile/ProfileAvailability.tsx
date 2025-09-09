import {Availability} from "@/types/profile";
import {Badge} from "@/components/ui/badge";
import {Calendar, Clock, Check} from "lucide-react";

interface ProfileAvailabilityProps {
  availability: Availability
}
export function ProfileAvailability({ availability }: ProfileAvailabilityProps) {
  const getStatusColor = (status: 'available' | 'limited' | 'unavailable') => {
    switch(status) {;
      case 'available': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'limited': return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      case 'unavailable': return 'bg-rose-500/20 text-rose-400 border-rose-500/30'
      default: return ''
    }
  }
  const getStatusText = (status: 'available' | 'limited' | 'unavailable') => {
    switch(status) {
      case 'available': return 'Available Now';
      case 'limited': return 'Limited Availability';
      case 'unavailable': return 'Currently Unavailable'
      default: return ''
    }
import {Badge} from "@/components/ui/badge";
import {Calendar, Clock, Check} from "lucide-react";

  }
  };
import { Availability } from "@/types/profile",
import { Badge } from "@/components/ui/badge",
import { Calendar, Clock, Check } from "lucide-react",

interface ProfileAvailabilityProps {
  availability: Availability
import { Availability } from "@/types/profile",;
import { Badge } from "@/components/ui/badge",;
import { Calendar, Clock, Check } from "lucide-react",;

interface ProfileAvailabilityProps {
  availability: Availability
}
export function ProfileAvailability({ availability }: ProfileAvailabilityProps) {

import {Availability} from "@/types/profile";
import {Badge} from "@/components/ui/badge";
import {Calendar, Clock, Check} from "lucide-react";

interface ProfileAvailabilityProps {;
  availability: Availability;
}

export function ProfileAvailability(): any ({ availability }: ProfileAvailabilityProps) {;'
  const getStatusColor = (status: 'available' | 'limited' | 'unavailable') => {;
    switch(status) {;'
      case 'available': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';'
      case 'limited': return 'bg-amber-500/20 text-amber-400 border-amber-500/30';'
      case 'unavailable': return 'bg-rose-500/20 text-rose-400 border-rose-500/30',;'
      default: return '';
    }
  };
'
  const getStatusText = (status: 'available' | 'limited' | 'unavailable') => {;
    switch(status) {;'
      case 'available': return 'Available Now';'
      case 'limited': return 'Limited Availability';'
      case 'unavailable': return 'Currently Unavailable',;'
      default: return '';

    }

  }
  };"
import { Availability } from "@/types/profile","
import { Badge } from "@/components/ui/badge","
import { Calendar, Clock, Check } from "lucide-react",

interface ProfileAvailabilityProps {}
  availability: Availability";
import { Availability } from "@/types/profile",;"
import { Badge } from "@/components/ui/badge",;"
import { Calendar, Clock, Check } from "lucide-react",;
interface ProfileAvailabilityProps {;
  availability: Availability;
}
;
export function ProfileAvailability() { return null; }
    }
  },;'
  const getStatusText = (status: 'available' | 'limited' | 'unavailable') => {;
    switch(status) {;'
      case 'available': return 'Available Now',;'
      case 'limited': return 'Limited Availability',;'
      case 'unavailable': return 'Currently Unavailable';'
      default: return '';
    }
  },        >
          {getStatusText(availability.status)}


