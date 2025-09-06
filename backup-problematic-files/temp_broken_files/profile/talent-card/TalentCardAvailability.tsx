
<<<<<<< HEAD
=======
import React from "react",;
import { Clock } from "lucide-react",;
=======
import React from "react",;
import { Clock } from 'lucide-react';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
interface TalentCardAvailabilityProps {;
  availabilityType:string;
}
;
export function TalentCardAvailability({ availabilityType } TalentCardAvailabilityProps) {;
  // Format availability status;
  const getAvailabilityColor = (status:string) => {;
    switch (status) {;
      case 'full-time':;
        return 'bg-green-500/20 text-green-400',;
      case 'part-time':;
        return 'bg-yellow-500/20 text-yellow-400',;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      case 'project-based':;
        return 'bg-blue-500/20 text-blue-400',;
      default:;
        return 'bg-gray-500/20 text-gray-400';
    }
<<<<<<< HEAD
<<<<<<< HEAD

=======
  },;
  ;
  // Format availability label;
  const getAvailabilityLabel = (status:string) => {;
    switch (status) {;
      case 'full-time':;
        return 'Full-time',;
      case 'part-time':;
        return 'Part-time',;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      case 'project-based':;
        return 'Project',;
      default:;
        return status;
    }
<<<<<<< HEAD

=======
  },;
;
  return (;
    <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs ${getAvailabilityColor(availabilityType)}`}>;
      <Clock className="h-3 w-3" />;
      <span>{getAvailabilityLabel(availabilityType)}</span>;
    </div>;
  ),;}
 import {;
  {;
  {;
  Clock ;
}from 'lucide-react' interface TalentCardAvailabilityProps {;
  availabilityType: string ;
}availabilityType ;
}: TalentCardAvailabilityProps) {;
  //Format availability status const getAvailabilityColor = (status: string) => {;
  switch (status) {';
  case 'full-time': return 'bg-green-500/20 text-green-400';';
case 'part-time': return 'bg-yellow-500/20 text-yellow-400';';
case 'project-based': return 'bg-blue-500/20 text-blue-400';
default: //Format availability label const getAvailabilityLabel = (status: string) => {;
  switch (status) {';
  case 'full-time': return 'Full-time';';
case 'part-time': return 'Part-time';';
case 'project-based': return 'Project';
default: </div>) ;
}'
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
