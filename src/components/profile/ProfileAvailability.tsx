import React from 'react';
import { Calendar, Clock, Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Availability } from '@/types/profile';

interface ProfileAvailabilityProps {
  availability: Availability;
}

export function ProfileAvailability({
  availability
}: ProfileAvailabilityProps) {
  const getStatusColor = (status: 'available' | 'limited' | 'unavailable') => {
    switch (status) {
      case 'available':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'limited':
        return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      case 'unavailable':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusIcon = (status: 'available' | 'limited' | 'unavailable') => {
    switch (status) {
      case 'available':
        return <Check className="h-3 w-3" />;
      case 'limited':
        return <Clock className="h-3 w-3" />;
      case 'unavailable':
        return <Calendar className="h-3 w-3" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">Availability</h3>
        <Badge 
          className={`${getStatusColor(availability.status)} border`}
        >
          <div className="flex items-center gap-1">
            {getStatusIcon(availability.status)}
            <span className="capitalize">{availability.status}</span>
          </div>
        </Badge>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2 text-zion-slate-light">
          <Calendar className="h-4 w-4" />
          <span className="text-sm">
            {availability.status === 'available' 
              ? 'Available for new projects'
              : availability.status === 'limited'
              ? 'Limited availability'
              : 'Currently unavailable'
            }
          </span>
        </div>

        {availability.nextAvailable && (
          <div className="flex items-center gap-2 text-zion-slate-light">
            <Clock className="h-4 w-4" />
            <span className="text-sm">
              Next available: {availability.nextAvailable}
            </span>
          </div>
        )}

        {availability.workingHours && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-white">Working Hours</h4>
            <div className="text-sm text-zion-slate-light">
              {availability.workingHours}
            </div>
          </div>
        )}

        {availability.timezone && (
          <div className="text-sm text-zion-slate-light">
            <span className="font-medium">Timezone:</span> {availability.timezone}
          </div>
        )}
      </div>
    </div>
  );
}