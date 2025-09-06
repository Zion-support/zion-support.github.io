
=======
import { Availability } from "@/types/profile",
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Check } from "lucide-react";
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

import { Badge } from "@/components/ui/badge",
import { Calendar, Clock, Check } from "lucide-react",

interface ProfileAvailabilityProps {
  availability: Availability
import { Availability } from "@/types/profile",;
import { Badge } from "@/components/ui/badge",;
import { Calendar, Clock, Check } from "lucide-react",;
interface ProfileAvailabilityProps {;
  availability: Availability;
}

export function ProfileAvailability(): any ({ availability }: ProfileAvailabilityProps) {;
  const getStatusColor = (status: 'available' | 'limited' | 'unavailable') => {;
    switch(status) {;
      case 'available': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'limited': return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      case 'unavailable': return 'bg-rose-500/20 text-rose-400 border-rose-500/30',;
      default: return '';
    }
  };

  const getStatusText = (status: 'available' | 'limited' | 'unavailable') => {;
    switch(status) {;
      case 'available': return 'Available Now';
      case 'limited': return 'Limited Availability';
      case 'unavailable': return 'Currently Unavailable',;
      default: return '';

    }
  },

  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-white mb-4">Availability</h3>
      <div className="flex flex-col md:flex-row md:items-center md:gap-6 mb-4">
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-white mb-4">Availability</h3>
      <div className="flex flex-col md:flex-row md:items-center md:gap-6 mb-4">
        <Badge
          variant="outline"
        <Badge 
          variant="outline" 

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

            ))}
          </div>;
        </div>;
      )}

    </div>;
  );
}

