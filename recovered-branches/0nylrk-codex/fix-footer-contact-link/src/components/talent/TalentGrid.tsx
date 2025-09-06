<<<<<<< HEAD

import {TalentCard} from "@/components/talent/TalentCard";
import {TalentProfile} from "@/types/talent";
export interface TalentGridProps {;
  talents: TalentProfile[],;
  isLoading: boolean,;
  onTalentClick: (id: string) => void,;
  savedTalentIds: string[],;
  onToggleSave: (id: string, isSaved: boolean) => void,;
  isAuthenticated: boolean,;
  viewProfile?: (id: string) => void,;

  clearFilters?: () => void;
  handleRequestHire?: (talent: TalentProfile) => void;
=======


=======
  clearFilters?: () => void;
  handleRequestHire?: (talent: TalentProfile) => void;



import { TalentCard } from "@/components/talent/TalentCard";
import { TalentProfile } from "@/types/talent";
export interface TalentGridProps {

  talents: TalentProfile[]
  isLoading: boolean
  onTalentClick: (id: string) => void
  savedTalentIds: string[]
  onToggleSave: (id: string, isSaved: boolean) => void
  isAuthenticated: boolean
  viewProfile?: (id: string) => void
  clearFilters?: () => void;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { TalentCard } from "@/components/talent/TalentCard",
import { TalentProfile } from "@/types/talent",
import {TalentCard} from "@/components/talent/TalentCard";
import {TalentProfile} from "@/types/talent";
import { TalentCard } from "@/components/talent/TalentCard",
import { TalentProfile } from "@/types/talent",
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export interface TalentGridProps {
  talents: TalentProfile[],
  isLoading: boolean,
  onTalentClick: (id: string) => void,
  savedTalentIds: string[],
  onToggleSave: (id: string, isSaved: boolean) => void,
  isAuthenticated: boolean,
<<<<<<< HEAD

  viewProfile?: (id: string) => void,
  clearFilters?: () => void,

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  handleRequestHire?: (talent: TalentProfile) => void
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  viewProfile?: (id: string) => void,
  clearFilters?: () => void,

  handleRequestHire?: (talent: TalentProfile) => void
  viewProfile?: (id: string) => void,;
  clearFilters?: () => void;
  viewProfile?: (id: string) => void,
  clearFilters?: () => void,
  handleRequestHire?: (talent: TalentProfile) => void
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}
export function TalentGrid({
  talents
  isLoading
  onTalentClick
  savedTalentIds
  onToggleSave



<<<<<<< HEAD
=======
  isAuthenticated;
  viewProfile;
  clearFilters;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export function TalentGrid({ 
  talents, 
  isLoading, 
  onTalentClick, 
  savedTalentIds, 
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  onToggleSave, ;
  isAuthenticated;
  viewProfile;
  clearFilters;
  onToggleSave, 
  isAuthenticated,
  viewProfile,
  clearFilters,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  handleRequestHire
}: TalentGridProps) {

  const handleRequestHireInternal = (talent: TalentProfile) => {
    if (handleRequestHire) {
      handleRequestHire(talent)
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { TalentCard } from '@/components / talent / TalentCard';
import { TalentProfile } from '@/types / talent';
export interface TalentGridProps {
  talents: TalentProfile[],
  is_loading: boolean,
  onTalentClick: (id: string) => void,
  savedTalentIds: string[],
  onToggleSave: (id: string, is_saved: boolean) => void,
  is_authenticated: boolean,
  view_profile?: (id: string) => void,
  clear_filters?: () => void;
  handleRequestHire?: (talent: TalentProfile) => void;
}
export /**
 * TalentGrid - Function description
 */
function TalentGrid() {
  const handleRequestHireInternal = (talent: TalentProfile) =>: any {
    // Check condition
if ( {) {
  $2
}
      handleRequestHire (talent);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    } else {
<<<<<<< HEAD

=======
      // Default implementation;
      console.log ("Request to hire:", talent.id);
    }
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
;
  const handleViewProfile = (id: string) =>: any {
    // Check condition
if ( {) {
  $2
}
      view_profile (id);
<<<<<<< HEAD

    } else {
      onTalentClick (id);
    }

=======
    } else {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      // Default implementation
      console.log("Request to hire:", talent.id)
    }
  }
  const handleViewProfile = (id: string) => {
    if (viewProfile) {
      viewProfile(id)
    } else {
      onTalentClick(id)
    }
  }

  };
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      // // // console.log("Request to hire:", talent.id)
import { TalentCard } from "@/components/talent/TalentCard",;
import { TalentProfile } from "@/types/talent",;
export interface TalentGridProps {;
  talents: TalentProfile[],;
  isLoading: boolean,;
  onTalentClick: (id: string) => void,;
  savedTalentIds: string[],;
  onToggleSave: (id: string, isSaved: boolean) => void,;
  isAuthenticated: boolean,;
  viewProfile?: (id: string) => void,;
  clearFilters?: () => void,;
  handleRequestHire?: (talent: TalentProfile) => void;
}
;
export function TalentGrid({;
  talents,;
  isLoading,;
  onTalentClick,;
  savedTalentIds,;
  onToggleSave,;
  isAuthenticated,;
  viewProfile,;
  clearFilters,;
  handleRequestHire;
}: TalentGridProps) {;
  const handleRequestHireInternal = (talent: TalentProfile) => {;
    if (handleRequestHire) {;
      handleRequestHire(talent);
    } else {;
      // Default implementation;
      // // // console.log("Request to hire:", talent.id);
    }
  };
  const handleViewProfile = (id: string) => {;
    if (viewProfile) {;
      viewProfile(id);
    } else {;
      onTalentClick(id);
    }
  },
<<<<<<< HEAD



  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======


  
  
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  if (isLoading) {
    return <div className="py-8 text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan mx-auto mb-4"></div>
      <p className="text-zion-cyan">Loading talent profiles...</p>
    </div>
  }
  if (!talents |talents.length === 0) {
    return <div className="py-8 text-center bg-zion-blue-dark rounded-lg border border-zion-blue-light p-6">
      <p className="text-zion-slate-light mb-4">No talents found matching your criteria</p>
      {clearFilters && (
<<<<<<< HEAD

export function TalentGrid(): any ({ ;
=======
    } else {
      onTalentClick (id);
    }
export function TalentGrid(): any ({ ;

import { TalentCard } from "@/components/talent/TalentCard",;
import { TalentProfile } from "@/types/talent",;
;
export interface TalentGridProps {;
  talents:TalentProfile[],;
  isLoading:boolean,;
  onTalentClick:(id:string) => void,;
  savedTalentIds:string[],;
  onToggleSave:(id:string, isSaved:boolean) => void,;
  isAuthenticated:boolean,;
  viewProfile?:(id:string) => void,;
  clearFilters?:() => void,;
  handleRequestHire?:(talent:TalentProfile) => void;
}
;
export function TalentGrid({ ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  talents, ;
  isLoading, ;
  onTalentClick, ;
  savedTalentIds, ;
  onToggleSave, ;
<<<<<<< HEAD
  isAuthenticated;
  viewProfile;
  clearFilters;
  handleRequestHire;
}: TalentGridProps) {;
  const handleRequestHireInternal = (talent: TalentProfile) => {;
=======
  isAuthenticated,;
  viewProfile,;
  clearFilters,;
  handleRequestHire;
} TalentGridProps) {;
  const handleRequestHireInternal = (talent:TalentProfile) => {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    if (handleRequestHire) {;
      handleRequestHire(talent);
    } else {;
      // Default implementation;
<<<<<<< HEAD
      console && console.log("Request to hire:", talent && talent.id);
    }
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <button
          onClick={clearFilters}
          className="px-4 py-2 bg-zion-purple text-white rounded hover:bg-zion-purple-dark transition-colors"
        >
          Clear Filters
        </button>
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  };

  const handleViewProfile = (id: string) => {;
    if (viewProfile) {;
      viewProfile(id);
    } else {;
      onTalentClick(id);
    }
  };
<<<<<<< HEAD

=======
      // // // console.log("Request to hire:", talent.id),;
    }
  },;
;
  const handleViewProfile = (id:string) => {;
    if (viewProfile) {;
      viewProfile(id);
    } else {;
      onTalentClick(id),;
    }
  },;
  ;
  };
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  if (isLoading) {;
    return <div className="py-8 text-center">;
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan mx-auto mb-4"></div>;
      <p className="text-zion-cyan">Loading talent profiles...</p>;
<<<<<<< HEAD
    </div>;
  }

  if (!talents || talents && talents.length === 0) {;
    return <div className="py-8 text-center bg-zion-blue-dark rounded-lg border border-zion-blue-light p-6">;
      <p className="text-zion-slate-light mb-4">No talents found matching your criteria</p>;
      {clearFilters && (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        <button
          onClick={clearFilters}

=======
    </div>,;
  }
    </div>;
  }
;
  if (!talents || talents.length === 0) {;
    return <div className="py-8 text-center bg-zion-blue-dark rounded-lg border border-zion-blue-light p-6">;
      <p className="text-zion-slate-light mb-4">No talents found matching your criteria</p>;
      {clearFilters && (;
    </div>;
  // Check condition
if ( {) {
  $2
}
    return <div className="py - 8 text - center">;
      <div className="animate - spin rounded - full h - 12 w - 12 border - t-2 border - b-2 border - zion - cyan mx - auto mb - 4"></div>;
      <p className="text - zion - cyan">Loading talent profiles...</p>;
    </div>;
  }
  // Check condition
if ( {) {
  $2
}
    return <div className="py - 8 text - center bg - zion - blue - dark rounded - lg border border - zion - blue - light p - 6">;
      <p className="text - zion - slate - light mb - 4">No talents found matching your criteria</p>;
      {clear_filters && (
        <button;
          on_click={clear_filters}
          className="px - 4 py - 2 bg - zion - purple text - white rounded hover:bg - zion - purple - dark transition - colors";
        >;
          Clear Filters;
        </button>)}
    </div>;
  }
  return (
    <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6">;
      {talents.map ((talent) => (
        <TalentCard;
          key={talent.id}
          talent={talent}
          onViewProfile={() => handleViewProfile (talent.id)}
          onRequestHire={() => handleRequestHireInternal (talent)}
          is_saved={savedTalentIds.includes (talent.id)}
          onToggleSave={onToggleSave}
          is_authenticated={is_authenticated}
        />))}
    </div>);
  ),; export interface TalentGridProps {
  talents: TalentProfile[];
isLoading: boolean;
onTalentClick: (id: string) => void;
savedTalentIds: string[];
onToggleSave: (id: string, isSaved: boolean) => void;
isAuthenticated: boolean;
viewProfile?: (id: string) => void;
clearFilters?: () => void;
handleRequestHire?: (talent: TalentProfile) => void 
}talents, isLoading, onTalentClick, savedTalentIds, onToggleSave, isAuthenticated, viewProfile, clearFilters, handleRequestHire 
}: TalentGridProps) {
  const handleRequestHireInternal = (talent: TalentProfile) => {
  if (handleRequestHire) {
  
}
};
const handleViewProfile = (id: string) => {
  if (viewProfile) {
  viewProfile (id) 
}else {
  onTalentClick (id) 
}
};
if (isLoading) {
  
}if (!talents || talents.length === 0) {
  return <div className="py-8 text-center bg-zion-blue-dark rounded-lg border border-zion-blue-light p-6" > <p className="text-zion-slate-light mb-4" >No talents found matching your criteria</p> clearFilters && (<button onClick= {
  clearFilters 
}className="px-4 py-2 bg-zion-purple text-white rounded hover:bg-zion-purple-dark transition-colors" > Clear Filters </button>) 
}</div> 
}key= {
  talent.id 
}talent= {
  talent 
}onViewProfile= {
  () => handleViewProfile (talent.id) 
}onRequestHire= {
  () => handleRequestHireInternal (talent) 
}isSaved= {
  savedTalentIds.includes (talent.id) 
}onToggleSave= {
  onToggleSave 
}isAuthenticated= {
  isAuthenticated 
}/>) ) 
}</div>) 
}
        <button;
          onClick={clearFilters}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          className="px-4 py-2 bg-zion-purple text-white rounded hover:bg-zion-purple-dark transition-colors"
        >
          Clear Filters
        </button>
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      )}
    </div>;
  }





  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
      {talents && talents.map((talent) => (;
        <TalentCard
          key={talent && talent.id}
          talent={talent}
          onViewProfile={() => handleViewProfile(talent && talent.id)}
          onRequestHire={() => handleRequestHireInternal(talent)}
          isSaved={savedTalentIds && savedTalentIds.includes(talent && talent.id)}
          onToggleSave={onToggleSave}
          isAuthenticated={isAuthenticated}
        />;
      ))}

    </div>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  }
;



=======
      )}
    </div>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {talents.map((talent) => (
        <TalentCard
          key={talent.id}
          talent={talent}
          onViewProfile={() => handleViewProfile(talent.id)}
          onRequestHire={() => handleRequestHireInternal(talent)}
          isSaved={savedTalentIds.includes(talent.id)}
          onToggleSave={onToggleSave}
          isAuthenticated={isAuthenticated}
        />
      ))}
    </div>
  )
}
    </div>;
  );
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
