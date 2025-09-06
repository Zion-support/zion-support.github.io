import { Calendar, Clock, Check } from 'lucide-react'
import { Calendar } from 'lucide-react'
interface ProfileAvailabilityProps {
  availability: Availability
export function ProfileAvailability({
  availability
}: ProfileAvailabilityProps) {
  const getStatusColor = (status: 'available' | 'limited' | 'unavailable') => {
import { Availability } from '@/types / profile';
import { Badge } from '@/components / ui / badge';
import { Calendar, Clock, Check } from 'lucide-react';
import { Calendar } from 'lucide-react';
interface ProfileAvailabilityProps {
  availability: Availability;
export /**
 * ProfileAvailability - Function description
 */
function ProfileAvailability() {
  const getStatusColor = (status: 'available' | 'limited' | 'unavailable') =>: any {
    switch (status) {
      case 'available':;
        return 'bg - emerald - 500 / 20 text - emerald - 400 border - emerald - 500 / 30';
      case 'limited':;
        return 'bg - amber - 500 / 20 text - amber - 400 border - amber - 500 / 30';
      case 'unavailable':;
        return 'bg - rose - 500 / 20 text - rose - 400 border - rose - 500 / 30';
      default:;
        return '';
    }
  }
  const getStatusText = (status: 'available' | 'limited' | 'unavailable') =>: any {
    switch (status) {
      case 'available':;
        return 'Available Now';
      case 'limited':;
        return 'Limited Availability';
      case 'unavailable':;
        return 'Currently Unavailable';
      default:;
        return '' }
  }
        <Badge
          variant="outline"
        <Badge 
          variant="outline" 
        >
          {getStatusText(availability.status)}
        </Badge>
        {availability.nextAvailable && availability.status !== 'available' && (
          <div className='flex items-center gap-2 text-zion-slate-light'>
            <Calendar className='h-4 w-4' />
        {availability.nextAvailable && availability.status !== 'available' && (
          <div className="flex items-center gap-2 text-zion-slate-light">
            <Calendar className="h-4 w-4" />
          </div>
        )}
      </div>
      {availability.message && (
        <p className='text-zion-slate mb-4'>{availability.message}</p>
      )}
import { Availability } from "@/types/profile";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Check } from 'lucide-react'
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';

interface ProfileAvailabilityProps {
  availability: Availability
}
;
export function ProfileAvailability({ availability }: ProfileAvailabilityProps) {;
  const getStatusColor = (status: 'available' | 'limited' | 'unavailable') => {;
    switch(status) {;
      case 'available': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',;
      case 'limited': return 'bg-amber-500/20 text-amber-400 border-amber-500/30',;
      case 'unavailable': return 'bg-rose-500/20 text-rose-400 border-rose-500/30',;
      default: return '';
    }
  },;
  const getStatusText = (status: 'available' | 'limited' | 'unavailable') => {;
    switch(status) {;
      case 'available': return 'Available Now',;
      case 'limited': return 'Limited Availability',;
      case 'unavailable': return 'Currently Unavailable';
      default: return '';
    }
  },

  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-white mb-4">Availability</h3>
      
      <div className="flex flex-col md:flex-row md:items-center md:gap-6 mb-4">
        <Badge 
          variant="outline" 
          className={`${getStatusColor(availability.status)} text-sm py-1 px-3 mb-4 md:mb-0 w-fit`}
        >;
          {getStatusText(availability.status)}
        </Badge>
        
        {availability.nextAvailable && availability.status !== 'available' && (
          <div className="flex items-center gap-2 text-zion-slate-light">
            <Calendar className="h-4 w-4" />
            <span>Next available: {availability.nextAvailable}</span>
          </div>
        )}
      </div>
      
      {availability.message && (
        <p className="text-zion-slate mb-4">{availability.message}</p>
      )}
      
              ))}
            </div>;
          </div>;
        )}

    </div>;
  );;
                </div>;
              </div>;

            ))}
          </div>
        </div>
                </div>
              </div>
            ))}
          </div>
        </div>
;
