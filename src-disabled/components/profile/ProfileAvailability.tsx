

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
      case 'available':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
      case 'limited':
        return 'bg-amber-500/20 text-amber-400 border-amber-500/30'
      case 'unavailable':
        return 'bg-rose-500/20 text-rose-400 border-rose-500/30'
      default:
        return ''
    }
  }
  const getStatusText = (status: 'available' | 'limited' | 'unavailable') => {
    switch (status) {
      case 'available':
        return 'Available Now'
      case 'limited':
        return 'Limited Availability'
      case 'unavailable':
        return 'Currently Unavailable'
      default:
        return '' }
  }


  },;
  const getStatusText = (status: 'available' | 'limited' | 'unavailable') => {;
    switch(status) {;
      case 'available': return 'Available Now',;
      case 'limited': return 'Limited Availability',;



      
            {availability.availableHours.map((slot, index,) => (              <div key={index} className="flex items-center gap-2 text-zion-slate">
            {availability.availableHours.map((slot, index) => (
              <div key={index} className="flex items-center gap-2 text-zion-slate">
      
        <div className="mt-4">
          <h4 className="text-zion-slate-light text-sm mb-2">Weekly Availability</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {availability.availableHours.map((slot, index,) => (              <div key={index} className="flex items-center gap-2 text-zion-slate">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-zion-cyan" />
                  <span>{slot.hours}</span>
                </div>
              ))}
            </div>
          </div>
        )}
    </div>
  )



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




