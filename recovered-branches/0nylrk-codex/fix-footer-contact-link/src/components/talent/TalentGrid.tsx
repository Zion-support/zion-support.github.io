
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
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { TalentCard } from "@/components/talent/TalentCard";
import { TalentProfile } from "@/types/talent";
export interface TalentGridProps {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

  clearFilters?: () => void;
  handleRequestHire?: (talent: TalentProfile) => void;
=======


import { TalentCard } from "@/components/talent/TalentCard",
import { TalentProfile } from "@/types/talent",
=======
import {TalentCard} from "@/components/talent/TalentCard";
import {TalentProfile} from "@/types/talent";
=======
import { TalentCard } from "@/components/talent/TalentCard",
import { TalentProfile } from "@/types/talent",

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export interface TalentGridProps {
  talents: TalentProfile[],
  isLoading: boolean,
  onTalentClick: (id: string) => void,
  savedTalentIds: string[],
  onToggleSave: (id: string, isSaved: boolean) => void,
  isAuthenticated: boolean,

  viewProfile?: (id: string) => void,
  clearFilters?: () => void,
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  handleRequestHire?: (talent: TalentProfile) => void
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
export function TalentGrid({
  talents
  isLoading
  onTalentClick
  savedTalentIds
  onToggleSave



export function TalentGrid({ 
  talents, 
  isLoading, 
  onTalentClick, 
  savedTalentIds, 
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  handleRequestHire
}: TalentGridProps) {

  const handleRequestHireInternal = (talent: TalentProfile) => {
    if (handleRequestHire) {
      handleRequestHire(talent)
<<<<<<< HEAD
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

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
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

  };
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
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



=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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

export function TalentGrid(): any ({ ;
  talents, ;
  isLoading, ;
  onTalentClick, ;
  savedTalentIds, ;
  onToggleSave, ;
  isAuthenticated;
  viewProfile;
  clearFilters;
  handleRequestHire;
}: TalentGridProps) {;
  const handleRequestHireInternal = (talent: TalentProfile) => {;
    if (handleRequestHire) {;
      handleRequestHire(talent);
    } else {;
      // Default implementation;
      console && console.log("Request to hire:", talent && talent.id);
    }
=======
        <button
          onClick={clearFilters}
          className="px-4 py-2 bg-zion-purple text-white rounded hover:bg-zion-purple-dark transition-colors"
        >
          Clear Filters
        </button>


  };

  const handleViewProfile = (id: string) => {;
    if (viewProfile) {;
      viewProfile(id);
    } else {;
      onTalentClick(id);
    }
  };

  if (isLoading) {;
    return <div className="py-8 text-center">;
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan mx-auto mb-4"></div>;
      <p className="text-zion-cyan">Loading talent profiles...</p>;
    </div>;
  }

  if (!talents || talents && talents.length === 0) {;
    return <div className="py-8 text-center bg-zion-blue-dark rounded-lg border border-zion-blue-light p-6">;
      <p className="text-zion-slate-light mb-4">No talents found matching your criteria</p>;
      {clearFilters && (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        <button
          onClick={clearFilters}

          className="px-4 py-2 bg-zion-purple text-white rounded hover:bg-zion-purple-dark transition-colors"
        >
          Clear Filters
        </button>
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


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



