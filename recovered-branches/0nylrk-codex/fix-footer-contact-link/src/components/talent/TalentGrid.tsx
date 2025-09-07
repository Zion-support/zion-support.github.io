<<<<<<< HEAD
=======
<<<<<<< HEAD
import { TalentCard } from "@/components/talent/TalentCard";
import { TalentProfile } from "@/types/talent";
export interface TalentGridProps {
  talents: TalentProfile[],
  isLoading: boolean,
  onTalentClick: (id: string) => void,
  savedTalentIds: string[],
  onToggleSave: (id: string, isSaved: boolean) => void,
  isAuthenticated: boolean,
  viewProfile?: (id: string) => void,
  clearFilters?: () => void,
  handleRequestHire?: (talent: TalentProfile) => void
}

=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
clearFilters?: () => void;
"
import { TalentCard } from "@/components/talent/TalentCard","
import { TalentProfile } from "@/types/talent",";
import {TalentCard} from "@/components/talent/TalentCard";"
import {TalentProfile} from "@/types/talent";"
import { TalentCard } from "@/components/talent/TalentCard","
<<<<<<< HEAD
import { TalentProfile } from "@/types/talent",

export interface TalentGridProps {

  talents: TalentProfile[],
  isLoading: boolean,
  onTalentClick: (id: string) => void,
  savedTalentIds: string[],
  onToggleSave: (id: string, isSaved: boolean) => void,
  isAuthenticated: boolean,

  handleRequestHire?: (talent: TalentProfile) => void
  clearFilters?: () => void;

  handleRequestHire?: (talent: TalentProfile) => void
  clearFilters?: () => void;

  clearFilters?: () => void;
  handleRequestHire?: (talent: TalentProfile) => void;
}
export function TalentGrid({
  talents
  isLoading
  onTalentClick
  savedTalentIds
  onToggleSave

export function TalentGrid({ 

  isAuthenticated;
  viewProfile;
  clearFilters;
  onToggleSave, 
  isAuthenticated,
  viewProfile,
  clearFilters,

  handleRequestHire
}: TalentGridProps) {
  handleRequestHire;)
pr-12325

      handleRequestHire(talent)

import { TalentCard } from '@/components / talent / TalentCard';'
import { TalentProfile } from '@/types / talent';
export interface TalentGridProps {}

  talents: TalentProfile[],
  is_loading: boolean,
  onTalentClick: (id: string) => void,
  savedTalentIds: string[],
  onToggleSave: (id: string, is_saved: boolean) => void,
  is_authenticated: boolean,

    } else {}
    } else {}
;

  const handleViewProfile = (id: string) =>: any {
    // Check condition
if ( {) {
  $2
}
      view_profile (id);

    } else {
      onTalentClick (id);
    }

      // Default implementation

      // Default implementation;
  };
<<<<<<< HEAD
      // // // console.log("Request to "hire":", talent.id)"
import { TalentCard } from "@/components/talent/TalentCard";"
=======

      // // // console.log("Request to hire:", talent.id)
import { TalentCard } from "@/components/talent/TalentCard",;

import { TalentProfile } from "@/types/talent",;
>>>>>>> origin/chore/fix-lint-and-merge
=======
=======
  clearFilters?: () => void;
  handleRequestHire?: (talent: TalentProfile) => void;



<<<<<<< HEAD
import { TalentCard } from "@/components/talent/TalentCard";
import { TalentProfile } from "@/types/talent";
export interface TalentGridProps {

>>>>>>> merged-prs-20250907-203621
  talents: TalentProfile[]
  isLoading: boolean
  onTalentClick: (id: string) => void
  savedTalentIds: string[]
  onToggleSave: (id: string, isSaved: boolean) => void
  isAuthenticated: boolean
  viewProfile?: (id: string) => void
  clearFilters?: () => void;
<<<<<<< HEAD
export interface TalentGridProps {
=======
=======
import {TalentCard} from "@/components/talent/TalentCard";
import {TalentProfile} from "@/types/talent";
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export interface TalentGridProps {;
  talents: TalentProfile[],;
  isLoading: boolean,;
  onTalentClick: (id: string) => void,;
  savedTalentIds: string[],;
  onToggleSave: (id: string, isSaved: boolean) => void,;
  isAuthenticated: boolean,;
  viewProfile?: (id: string) => void,;
<<<<<<< HEAD
  clearFilters?: () => void,;
  handleRequestHire?: (talent: TalentProfile) => void;
}
;
export function TalentGrid() { return null; }
    } else {;
      // Default implementation;"
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

  if (isLoading) {

    return <div className="py-8 text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan mx-auto mb-4"></div>

      <p className="text-zion-cyan">Loading talent profiles...</p>
    </div>
  }
  if (!talents |talents.length === 0) {"
    return <div className="py-8 text-center bg-zion-blue-dark rounded-lg border border-zion-blue-light p-6">"
      <p className="text-zion-slate-light mb-4">No talents found matching your criteria</p>
      {clearFilters && (
<<<<<<< HEAD
}
export function TalentGrid(): any ({ ;  talents, ;
  }
  isLoading, ;
  onTalentClick, ;
  savedTalentIds, ;
=======

  clearFilters?: () => void;
  handleRequestHire?: (talent: TalentProfile) => void;
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { TalentCard } from "@/components/talent/TalentCard",
import { TalentProfile } from "@/types/talent",
import {TalentCard} from "@/components/talent/TalentCard";
import {TalentProfile} from "@/types/talent";
import { TalentCard } from "@/components/talent/TalentCard",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { TalentProfile } from "@/types/talent",
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export interface TalentGridProps {

>>>>>>> merged-prs-20250907-203621
  talents: TalentProfile[],
  isLoading: boolean,
  onTalentClick: (id: string) => void,
  savedTalentIds: string[],
  onToggleSave: (id: string, isSaved: boolean) => void,
  isAuthenticated: boolean,
<<<<<<< HEAD
  viewProfile?: (id: string) => void,;
  clearFilters?: () => void;
  handleRequestHire?: (talent: TalentProfile) => void
=======
<<<<<<< HEAD
  viewProfile?: (id: string) => void,
  clearFilters?: () => void,

  handleRequestHire?: (talent: TalentProfile) => void
  viewProfile?: (id: string) => void,;
  clearFilters?: () => void;
  viewProfile?: (id: string) => void,
  clearFilters?: () => void,
  handleRequestHire?: (talent: TalentProfile) => void
=======

  handleRequestHire?: (talent: TalentProfile) => void
<<<<<<< HEAD
  clearFilters?: () => void;

  handleRequestHire?: (talent: TalentProfile) => void
  clearFilters?: () => void;

  clearFilters?: () => void;
  handleRequestHire?: (talent: TalentProfile) => void;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
}
export function TalentGrid({
  talents
  isLoading
  onTalentClick
  savedTalentIds
  onToggleSave

<<<<<<< HEAD
  isAuthenticated;
  viewProfile;
  clearFilters;
  handleRequestHire
}: TalentGridProps) {

  const handleRequestHireInternal = (talent: TalentProfile) => {
    if (handleRequestHire) {
      handleRequestHire(talent)
    } else {
      // Default implementation
      console.log("Request to hire:", talent.id)
    }
  },

  const handleViewProfile = $2;
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
        <button
          onClick={clearFilters}
          className="px-4 py-2 bg-zion-purple text-white rounded hover:bg-zion-purple-dark transition-colors"
=======
<<<<<<< HEAD
export function TalentGrid({ 
=======


<<<<<<< HEAD
  isAuthenticated;
  viewProfile;
  clearFilters;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export function TalentGrid({ 
  talents, 
  isLoading, 
  onTalentClick, 
  savedTalentIds, 
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  onToggleSave, ;
  isAuthenticated;
  viewProfile;
  clearFilters;
  onToggleSave, 
  isAuthenticated,
  viewProfile,
  clearFilters,
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  isAuthenticated;
  viewProfile;
  clearFilters;
  onToggleSave, 
  isAuthenticated,
  viewProfile,
  clearFilters,

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  handleRequestHire
}: TalentGridProps) {
  handleRequestHire;)
pr-12325

      handleRequestHire(talent)
<<<<<<< HEAD

import { TalentCard } from '@/components / talent / TalentCard';'
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { TalentCard } from '@/components / talent / TalentCard';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { TalentProfile } from '@/types / talent';
export interface TalentGridProps {}

  talents: TalentProfile[],
  is_loading: boolean,
  onTalentClick: (id: string) => void,
  savedTalentIds: string[],
  onToggleSave: (id: string, is_saved: boolean) => void,
  is_authenticated: boolean,
<<<<<<< HEAD

    } else {}
    } else {}
=======
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
      // Default implementation;
      console.log ("Request to hire:", talent.id);
    }
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
;

  const handleViewProfile = (id: string) =>: any {
    // Check condition
if ( {) {
  $2
}
      view_profile (id);
    } else {
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

      // Default implementation;
  };
<<<<<<< HEAD
<<<<<<< HEAD
      // // // console.log("Request to "hire":", talent.id)"
import { TalentCard } from "@/components/talent/TalentCard";"
=======

=======
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      // // // console.log("Request to hire:", talent.id)
import { TalentCard } from "@/components/talent/TalentCard",;

import { TalentProfile } from "@/types/talent",;
>>>>>>> origin/chore/fix-lint-and-merge
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
export function TalentGrid() { return null; }
    } else {;
      // Default implementation;"
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


  
  
  
=======

<<<<<<< HEAD
=======


  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  if (isLoading) {

    return <div className="py-8 text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan mx-auto mb-4"></div>

      <p className="text-zion-cyan">Loading talent profiles...</p>
    </div>
  }
  if (!talents |talents.length === 0) {"
    return <div className="py-8 text-center bg-zion-blue-dark rounded-lg border border-zion-blue-light p-6">"
      <p className="text-zion-slate-light mb-4">No talents found matching your criteria</p>
      {clearFilters && (
<<<<<<< HEAD
<<<<<<< HEAD
}
export function TalentGrid(): any ({ ;  talents, ;
  }
=======
    } else {
      onTalentClick (id);
    }
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
  talents, ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  isLoading, ;
  onTalentClick, ;
  savedTalentIds, ;
  onToggleSave, ;
  isAuthenticated,;
  viewProfile,;
  clearFilters,;
  handleRequestHire;
<<<<<<< HEAD
}: TalentGridProps) {;
  }
  const handleRequestHireInternal = ("talent": TalentProfile) => {;    if (handleRequestHire) {;
      }
      handleRequestHire(talent);
    } else {;
      // Default implementation;
      }
      console && console.log("Request to "hire":", talent && talent.id);"
    }        <button,
onClick={clearFilters}  };
    }
=======
} TalentGridProps) {;
  const handleRequestHireInternal = (talent:TalentProfile) => {;
    if (handleRequestHire) {;
      handleRequestHire(talent);
    } else {;
      // Default implementation;
<<<<<<< HEAD
=======
      console && console.log("Request to hire:", talent && talent.id);
    }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <button
          onClick={clearFilters}
          className="px-4 py-2 bg-zion-purple text-white rounded hover:bg-zion-purple-dark transition-colors"
        >
          Clear Filters
        </button>
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  };
  const handleViewProfile = (id: string) => {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    if (viewProfile) {;
      }
      viewProfile(id);
    } else {;
      }
      onTalentClick(id);
    }
<<<<<<< HEAD
  };          className="px-4 py-2 bg-zion-purple text-white rounded "hover":bg-zion-purple-dark transition-colors""
=======
<<<<<<< HEAD

          onClick={clearFilters}

"
          className="px-4 py-2 bg-zion-purple text-white rounded hover:bg-zion-purple-dark transition-colors"
>>>>>>> origin/chore/fix-lint-and-merge
        >
          Clear Filters;
        </button>

  };

    </div>,;
  }
    </div>;
  }"
          className="px-4 py-2 bg-zion-purple text-white rounded hover:bg-zion-purple-dark transition-colors"
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

          onClick={clearFilters}

"
=======
  };
<<<<<<< HEAD
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  if (isLoading) {;
    return <div className="py-8 text-center">;
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan mx-auto mb-4"></div>;
      <p className="text-zion-cyan">Loading talent profiles...</p>;
    </div>,;
  }
    </div>;
  }
<<<<<<< HEAD

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
      {talents && talents.map((talent) => (;
        <TalentCard;
          key={talent && talent.id}
          talent={talent}
          onViewProfile={() => handleViewProfile(talent && talent.id)}
          onRequestHire={() => handleRequestHireInternal(talent)}
          isSaved={savedTalentIds && savedTalentIds.includes(talent && talent.id)}
          onToggleSave={onToggleSave}
          isAuthenticated={isAuthenticated}
        />;
      ))}

=======
<<<<<<< HEAD
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        >;
          Clear Filters;
        </button>)}
    </div>;
  }
<<<<<<< HEAD

=======
  return (
    <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6">;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      {talents.map ((talent) => (

  if (isLoading) {"
    return <div className="py-8 text-center">"
</div>"
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan mx-auto mb-4"></div>""
      <p className="text-zion-cyan">Loading talent profiles...</p>"
    </div>"
    return <div className="py-8 text-center bg-zion-blue-dark rounded-lg border border-zion-blue-light p-6">"
</div>"
      <p className="text-zion-slate-light mb-4">No talents found matching your criteria</p>"
        <button;
          onClick={clearFilters}"
          className="px-4 py-2 bg-zion-purple text-white rounded hover:bg-zion-purple-dark transition-colors""
        >
</button>
        </button>"
    return <div className="py-8 text-center">;"
</div>"
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan mx-auto mb-4"></div>;""
      <p className="text-zion-cyan">Loading talent profiles...</p>;"
    </div>;"
    return <div className="py-8 text-center bg-zion-blue-dark rounded-lg border border-zion-blue-light p-6">;"
</div>"
      <p className="text-zion-slate-light mb-4">No talents found matching your criteria</p>;"
        <button;
          onClick={clearFilters}

    </div>,;
</button>
    </div>;

        </button>
    </div>

    </div>;"
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;"
</div>
        <TalentCard;
          key={talent && talent.id}
          talent={talent}
          onViewProfile={() => handleViewProfile(talent && talent.id)}
</TalentCard>"
    return <div className="py - 8 text - center">;"
</div>"
      <div className="animate - spin rounded - full h - 12 w - 12 border - t-2 border - b-2 border - zion - cyan mx - auto mb - 4"></div>;""
      <p className="text - zion - cyan">Loading talent profiles...</p>;"
    </div>;"
    return <div className="py - 8 text - center bg - zion - blue - dark rounded - lg border border - zion - blue - light p - 6">;"
</div>"
      <p className="text - zion - slate - light mb - 4">No talents found matching your criteria</p>;"
        <button;
          on_click={clear_filters}"
          className="px - 4 py - 2 bg - zion - purple text - white rounded hover:bg - zion - purple - dark transition - colors";"
        >;
</button>
        </button>)}
    </div>;"
    <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6">;"
</div>
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
<<<<<<< HEAD
=======
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
=======

  if (!talents || talents && talents.length === 0) {;
    return <div className="py-8 text-center bg-zion-blue-dark rounded-lg border border-zion-blue-light p-6">;
      <p className="text-zion-slate-light mb-4">No talents found matching your criteria</p>;
      {clearFilters && (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        <button
          onClick={clearFilters}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          className="px-4 py-2 bg-zion-purple text-white rounded hover:bg-zion-purple-dark transition-colors"
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
        >
          Clear Filters;
        </button>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
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
=======

  };

    </div>,;
  }
    </div>;
  }"
          className="px-4 py-2 bg-zion-purple text-white rounded hover:bg-zion-purple-dark transition-colors"

      )}
    </div>;
  }

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
      {talents && talents.map((talent) => (;
        <TalentCard;
          key={talent && talent.id}
          talent={talent}
          onViewProfile={() => handleViewProfile(talent && talent.id)}
          onRequestHire={() => handleRequestHireInternal(talent)}
          isSaved={savedTalentIds && savedTalentIds.includes(talent && talent.id)}
          onToggleSave={onToggleSave}
          isAuthenticated={isAuthenticated}
        />;
      ))}

        >;
          Clear Filters;
        </button>)}
    </div>;
  }

      {talents.map ((talent) => (

  if (isLoading) {"
    return <div className="py-8 text-center">"
</div>"
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan mx-auto mb-4"></div>""
      <p className="text-zion-cyan">Loading talent profiles...</p>"
    </div>"
    return <div className="py-8 text-center bg-zion-blue-dark rounded-lg border border-zion-blue-light p-6">"
</div>"
      <p className="text-zion-slate-light mb-4">No talents found matching your criteria</p>"
        <button;
          onClick={clearFilters}"
          className="px-4 py-2 bg-zion-purple text-white rounded hover:bg-zion-purple-dark transition-colors""
        >
</button>
        </button>"
    return <div className="py-8 text-center">;"
</div>"
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan mx-auto mb-4"></div>;""
      <p className="text-zion-cyan">Loading talent profiles...</p>;"
    </div>;"
    return <div className="py-8 text-center bg-zion-blue-dark rounded-lg border border-zion-blue-light p-6">;"
</div>"
      <p className="text-zion-slate-light mb-4">No talents found matching your criteria</p>;"
        <button;
          onClick={clearFilters}

    </div>,;
</button>
    </div>;

        </button>
    </div>

    </div>;"
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;"
</div>
        <TalentCard;
          key={talent && talent.id}
          talent={talent}
          onViewProfile={() => handleViewProfile(talent && talent.id)}
</TalentCard>"
    return <div className="py - 8 text - center">;"
</div>"
      <div className="animate - spin rounded - full h - 12 w - 12 border - t-2 border - b-2 border - zion - cyan mx - auto mb - 4"></div>;""
      <p className="text - zion - cyan">Loading talent profiles...</p>;"
    </div>;"
    return <div className="py - 8 text - center bg - zion - blue - dark rounded - lg border border - zion - blue - light p - 6">;"
</div>"
      <p className="text - zion - slate - light mb - 4">No talents found matching your criteria</p>;"
        <button;
          on_click={clear_filters}"
          className="px - 4 py - 2 bg - zion - purple text - white rounded hover:bg - zion - purple - dark transition - colors";"
        >;
</button>
        </button>)}
    </div>;"
    <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6">;"
</div>
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
}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  }
;

      )}
    </div>
  }
      // Default implementation;"
      // // // console.log("Request to hire:", talent.id);"
  const handleViewProfile = (id: string) => {;
    if (viewProfile) {;
      viewProfile(id);
      onTalentClick(id);
  },

  if (isLoading) {"
    return <div className="py-8 text-center">"
</div>"
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan mx-auto mb-4"></div>""
      <p className="text-zion-cyan">Loading talent profiles...</p>"
    return <div className="py-8 text-center bg-zion-blue-dark rounded-lg border border-zion-blue-light p-6">"
      <p className="text-zion-slate-light mb-4">No talents found matching your criteria</p>"
        <button;
          onClick={clearFilters}"
          className="px-4 py-2 bg-zion-purple text-white rounded hover:bg-zion-purple-dark transition-colors""
        >
</button>
        </button>"
    return <div className="py-8 text-center">;"
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan mx-auto mb-4"></div>;""
      <p className="text-zion-cyan">Loading talent profiles...</p>;"
    </div>;"
    return <div className="py-8 text-center bg-zion-blue-dark rounded-lg border border-zion-blue-light p-6">;"
      <p className="text-zion-slate-light mb-4">No talents found matching your criteria</p>;"
          onClick={clearFilters}

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    </div>,;
    </div>;
  );
}
<<<<<<< HEAD
;
=======
;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
