<<<<<<< HEAD
import { Availability } from '@/types/profile';
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { Availability } from '@/types/profile';
=======

import { Availability } from "@/types/profile";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Check } from 'lucide-react'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Check } from 'lucide-react';

interface ProfileAvailabilityProps {
  availability: Availability;

export function ProfileAvailability({
  availability,
}: ProfileAvailabilityProps) {
  const getStatusColor = (status: 'available' | 'limited' | 'unavailable') => {
    switch (status) {
      case 'available':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'limited':
        return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      case 'unavailable':
        return 'bg-rose-500/20 text-rose-400 border-rose-500/30';
      default:
        return '';
    }
  };

  const getStatusText = (status: 'available' | 'limited' | 'unavailable') => {
    switch (status) {
      case 'available':
        return 'Available Now';
      case 'limited':
        return 'Limited Availability';
      case 'unavailable':
        return 'Currently Unavailable';
      default:
        return '';
    }
  };

  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    <div className='bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8'>
      <h3 className='text-xl font-bold text-white mb-4'>Availability</h3>

      <div className='flex flex-col md:flex-row md:items-center md:gap-6 mb-4'>
        <Badge
<<<<<<< HEAD
          variant='outline'          className={`${getStatusColor(availability.status)} text-sm py-1 px-3 mb-4 md:mb-0 w-fit`}
        >
          {getStatusText(availability.status)}
        </Badge>

        {availability.nextAvailable && availability.status !== 'available' && (
          <div className='flex items-center gap-2 text-zion-slate-light'>
            <Calendar className='h-4 w-4' />            <span>Next available: {availability.nextAvailable}</span>
          </div>
        )}
      </div>

=======
          variant='outline'
=======

import { Availability } from "@/types/profile";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Check } from 'lucide-react'
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';

interface ProfileAvailabilityProps {
  availability: Availability
}

export function ProfileAvailability({ availability }: ProfileAvailabilityProps) {
  const getStatusColor = (status: 'available' | 'limited' | 'unavailable') => {
    switch(status) {
      case 'available': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'limited': return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      case 'unavailable': return 'bg-rose-500/20 text-rose-400 border-rose-500/30';
      default: return ''
    }
  };
  
  const getStatusText = (status: 'available' | 'limited' | 'unavailable') => {
    switch(status) {
      case 'available': return 'Available Now';
      case 'limited': return 'Limited Availability';
      case 'unavailable': return 'Currently Unavailable';
      default: return ''
    }
  };


  return (
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-white mb-4">Availability</h3>
      
      <div className="flex flex-col md:flex-row md:items-center md:gap-6 mb-4">
        <Badge 
          variant="outline" 
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          className={`${getStatusColor(availability.status)} text-sm py-1 px-3 mb-4 md:mb-0 w-fit`}
        >
          {getStatusText(availability.status)}
        </Badge>
<<<<<<< HEAD
<<<<<<< HEAD

        {availability.nextAvailable && availability.status !== 'available' && (
          <div className='flex items-center gap-2 text-zion-slate-light'>
            <Calendar className='h-4 w-4' />
=======
        
        {availability.nextAvailable && availability.status !== 'available' && (
          <div className="flex items-center gap-2 text-zion-slate-light">
            <Calendar className="h-4 w-4" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        
        {availability.nextAvailable && availability.status !== 'available' && (
          <div className="flex items-center gap-2 text-zion-slate-light">
            <Calendar className="h-4 w-4" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <span>Next available: {availability.nextAvailable}</span>
          </div>
        )}
      </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
      
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      {availability.message && (
        <p className='text-zion-slate mb-4'>{availability.message}</p>
      )}

      {availability.availableHours &&
        availability.availableHours.length > 0 && (
          <div className='mt-4'>
            <h4 className='text-zion-slate-light text-sm mb-2'>
              Weekly Availability
            </h4>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
              {availability.availableHours.map((slot, index) => (
                <div
                  key={index}
                  className='flex items-center gap-2 text-zion-slate'
                >
                  <div className='w-20 text-zion-slate-light'>{slot.day}:</div>
                  <div className='flex items-center gap-1'>
                    <Clock className='h-4 w-4 text-zion-cyan' />
                    <span>{slot.hours}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
    </div>
<<<<<<< HEAD
  );
=======
  );
<<<<<<< HEAD
=======
      
      {availability.message && (
        <p className="text-zion-slate mb-4">{availability.message}</p>
      )}
      
      {availability.availableHours && availability.availableHours.length > 0 && (
        <div className="mt-4">
          <h4 className="text-zion-slate-light text-sm mb-2">Weekly Availability</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {availability.availableHours.map((slot, index) => (
              <div key={index} className="flex items-center gap-2 text-zion-slate">
                <div className="w-20 text-zion-slate-light">{slot.day}:</div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-zion-cyan" />
                  <span>{slot.hours}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
