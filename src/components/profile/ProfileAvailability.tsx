
import { Availability } from "@/types/profile",
import { Badge } from "@/components/ui/badge",import { Calendar, Clock, Check } from 'lucide-react'

interface ProfileAvailabilityProps {
  availability: Availability
}

interface ProfileAvailabilityProps {_availability: Availability;}

export function ProfileAvailability(_{_availability}: ProfileAvailabilityProps) {_const _getStatusColor = (_status: 'available' | 'limited' | 'unavailable') => {
    switch(status) {
      case 'available': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      case 'limited': return 'bg-amber-500/20 text-amber-400 border-amber-500/30',
      case 'unavailable': return 'bg-rose-500/20 text-rose-400 border-rose-500/30',
      default: return ''
    }
  },
  
  const getStatusText = (status: 'available' | 'limited' | 'unavailable') => {
    switch(status) {
      case 'available': return 'Available Now',
      case 'limited': return 'Limited Availability',
      case 'unavailable': return 'Currently Unavailable',
      default: return ''
    }
  },
  return (
    <div className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8&quot;>
      <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Availability</h3>
      
      <div className=&quot;flex flex-col md:flex-row md:items-center md:gap-6 mb-4&quot;>
        <Badge 
          variant=&quot;outline&quot; 
          className={`${getStatusColor(availability.status)} text-sm py-1 px-3 mb-4 md:mb-0 w-fit`}        >
          {_getStatusText(availability.status)}
        </Badge>
        
        {availability.nextAvailable && availability.status !== 'available' && (
          <div className=&quot;flex items-center gap-2 text-zion-slate-light&quot;>
            <Calendar className=&quot;h-4 w-4&quot; />            <span>Next available: {availability.nextAvailable}</span>
          </div>
        )}
      </div>
      
      {availability.message && (
        <p className=&quot;text-zion-slate mb-4&quot;>{availability.message}</p>
      )}
      
      {availability.availableHours && availability.availableHours.length > 0 && (
        <div className=&quot;mt-4&quot;>
          <h4 className=&quot;text-zion-slate-light text-sm mb-2&quot;>Weekly Availability</h4>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-2&quot;>
            {availability.availableHours.map((slot, index) => (
              <div key={index} className=&quot;flex items-center gap-2 text-zion-slate&quot;>
                <div className=&quot;w-20 text-zion-slate-light&quot;>{slot.day}:</div>
                <div className=&quot;flex items-center gap-1&quot;>
                  <Clock className=&quot;h-4 w-4 text-zion-cyan&quot; />
                  <span>{slot.hours}</span>                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
