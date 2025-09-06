<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/TalentGrid.tsx

<<<<<<< HEAD

=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/TalentGrid.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/TalentGrid.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/TalentGrid.tsx
  clearFilters?: () => void;
  handleRequestHire?: (talent: TalentProfile) => void;
=======


=======

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { TalentCard } from "@/components/talent/TalentCard",
import { TalentProfile } from "@/types/talent",
=======
import {TalentCard} from "@/components/talent/TalentCard";
import {TalentProfile} from "@/types/talent";
=======
import { TalentCard } from "@/components/talent/TalentCard",
import { TalentProfile } from "@/types/talent",
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export interface TalentGridProps {
  talents: TalentProfile[],
  isLoading: boolean,
  onTalentClick: (id: string) => void,
  savedTalentIds: string[],
  onToggleSave: (id: string, isSaved: boolean) => void,
  isAuthenticated: boolean,
<<<<<<< HEAD

<<<<<<< HEAD
=======
  viewProfile?: (id: string) => void,
  clearFilters?: () => void,

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  handleRequestHire?: (talent: TalentProfile) => void
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
  viewProfile?: (id: string) => void,;
  clearFilters?: () => void;
=======
  viewProfile?: (id: string) => void,
  clearFilters?: () => void,
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  handleRequestHire?: (talent: TalentProfile) => void
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}
export function TalentGrid({
  talents
  isLoading
  onTalentClick
  savedTalentIds
  onToggleSave
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/TalentGrid.tsx

<<<<<<< HEAD
=======


=======

<<<<<<< HEAD
  isAuthenticated;
  viewProfile;
  clearFilters;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export function TalentGrid({ 
  talents, 
  isLoading, 
  onTalentClick, 
  savedTalentIds, 
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  onToggleSave, ;
  isAuthenticated;
  viewProfile;
  clearFilters;
=======
  onToggleSave, 
  isAuthenticated,
  viewProfile,
  clearFilters,
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  handleRequestHire
}: TalentGridProps) {

  const handleRequestHireInternal = (talent: TalentProfile) => {
    if (handleRequestHire) {
      handleRequestHire(talent)
<<<<<<< HEAD
<<<<<<< HEAD
    } else {
      // Default implementation

=======
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/TalentGrid.tsx
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
    } else {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/TalentGrid.tsx

========
      // Default implementation;
      console.log ("Request to hire:", talent.id);
    }
  }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/TalentGrid.tsx
;
  const handleViewProfile = (id: string) =>: any {
    // Check condition
if ( {) {
  $2
}
      view_profile (id);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/TalentGrid.tsx

    } else {
      onTalentClick (id);
    }

      // Default implementation

  };

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
    } else {
      // Default implementation
<<<<<<< HEAD
      console.log("Request to hire:", talent.id)
    }
  }
  const handleViewProfile = (id: string) => {
    if (viewProfile) {
      viewProfile(id)
    } else {
      onTalentClick(id)
    }
<<<<<<< HEAD
  }

=======
  };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

<<<<<<< HEAD
=======


  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

========
    } else {
      onTalentClick (id);
    }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/TalentGrid.tsx
export function TalentGrid(): any ({ ;
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    if (handleRequestHire) {;
      handleRequestHire(talent);
    } else {;
      // Default implementation;
<<<<<<< HEAD
      console && console.log("Request to hire:", talent && talent.id);
    }
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <button
          onClick={clearFilters}
          className="px-4 py-2 bg-zion-purple text-white rounded hover:bg-zion-purple-dark transition-colors"
        >
          Clear Filters
        </button>
<<<<<<< HEAD

<<<<<<< HEAD
      )}
    </div>
  }

=======

  };
  const handleViewProfile = (id: string) => {;
    if (viewProfile) {;
      viewProfile(id);
    } else {;
      onTalentClick(id);
    }
  };
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
<<<<<<< HEAD
=======
  };
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  if (isLoading) {;
    return <div className="py-8 text-center">;
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan mx-auto mb-4"></div>;
      <p className="text-zion-cyan">Loading talent profiles...</p>;
<<<<<<< HEAD
<<<<<<< HEAD
    </div>;
  }
  if (!talents || talents && talents.length === 0) {;
    return <div className="py-8 text-center bg-zion-blue-dark rounded-lg border border-zion-blue-light p-6">;
      <p className="text-zion-slate-light mb-4">No talents found matching your criteria</p>;
      {clearFilters && (;
        <button
          onClick={clearFilters}

          className="px-4 py-2 bg-zion-purple text-white rounded hover:bg-zion-purple-dark transition-colors"
        >
          Clear Filters
        </button>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      )}
    </div>;
  }





>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
      {talents && talents.map((talent) => (;
        <TalentCard
          key={talent && talent.id}
          talent={talent}
          onViewProfile={() => handleViewProfile(talent && talent.id)}
          onRequestHire={() => handleRequestHireInternal(talent)}
          isSaved={savedTalentIds && savedTalentIds.includes(talent && talent.id)}
=======
    </div>,;
  }
=======
    </div>;
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
;
  if (!talents || talents.length === 0) {;
    return <div className="py-8 text-center bg-zion-blue-dark rounded-lg border border-zion-blue-light p-6">;
      <p className="text-zion-slate-light mb-4">No talents found matching your criteria</p>;
      {clearFilters && (;
<<<<<<< HEAD
        <button ;
          onClick={clearFilters}
          className="px-4 py-2 bg-zion-purple text-white rounded hover:bg-zion-purple-dark transition-colors";
        >;
          Clear Filters;
        </button>;
      )}
    </div>,;
  }
;
  return (;
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
      {talents.map((talent) => (;
        <TalentCard;
          key={talent.id}          talent={talent}
          onViewProfile={_() => handleViewProfile(talent.id)}
          onRequestHire={_() => handleRequestHireInternal(talent)}
          isSaved={savedTalentIds.includes(talent.id)}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          onToggleSave={onToggleSave}
          isAuthenticated={isAuthenticated}
        />;
      ))}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/TalentGrid.tsx

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/TalentGrid.tsx
    </div>;
<<<<<<< HEAD
  );
}
  }
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/TalentGrid.tsx



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/TalentGrid.tsx
=======
        <button;
          onClick={clearFilters}
          className="px-4 py-2 bg-zion-purple text-white rounded hover:bg-zion-purple-dark transition-colors"
        >
          Clear Filters
        </button>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      )}
    </div>
  }
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
<<<<<<< HEAD
    </div>
  )
}
=======
    </div>;
  );
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
