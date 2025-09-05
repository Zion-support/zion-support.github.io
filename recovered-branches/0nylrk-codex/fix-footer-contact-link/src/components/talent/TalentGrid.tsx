
<<<<<<< HEAD
<<<<<<< HEAD
import { TalentCard } from "@/components/talent/TalentCard",
import { TalentProfile } from "@/types/talent",
=======
import { TalentCard } from &quot;@/components/talent/TalentCard&quot;;
import { TalentProfile } from &quot;@/types/talent&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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

export interface TalentGridProps {_talents: TalentProfile[];
  isLoading: boolean;
  onTalentClick: (_id: string) => void;
  savedTalentIds: string[];
  onToggleSave: (_id: string, _isSaved: boolean) => void;
  isAuthenticated: boolean;
  viewProfile?: (_id: string) => void;
  clearFilters?: () => void;
  handleRequestHire?: (_talent: TalentProfile) => void;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export function TalentGrid(_{_talents, _isLoading, _onTalentClick, _savedTalentIds, _onToggleSave, _isAuthenticated, _viewProfile, _clearFilters, _handleRequestHire}: TalentGridProps) {_const _handleRequestHireInternal = (_talent: TalentProfile) => {
    if (handleRequestHire) {
<<<<<<< HEAD
      handleRequestHire(talent)
    } else {
      // Default implementation
<<<<<<< HEAD
      // // // console.log("Request to hire:", talent.id)
=======
      // console.log(&quot;Request to hire:&quot;, talent.id);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },

  const handleViewProfile = (id: string) => {
    if (viewProfile) {
      viewProfile(id)
    } else {
      onTalentClick(id)
    }
  },
  
  if (isLoading) {
<<<<<<< HEAD
    return <div className="py-8 text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan mx-auto mb-4"></div>
      <p className="text-zion-cyan">Loading talent profiles...</p>
    </div>
=======
    return <div className=&quot;py-8 text-center&quot;>
      <div className=&quot;animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan mx-auto mb-4&quot;></div>
      <p className=&quot;text-zion-cyan&quot;>Loading talent profiles...</p>
    </div>;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }

  if (!talents || talents.length === 0) {
    return <div className=&quot;py-8 text-center bg-zion-blue-dark rounded-lg border border-zion-blue-light p-6&quot;>
      <p className=&quot;text-zion-slate-light mb-4&quot;>No talents found matching your criteria</p>
=======
      handleRequestHire(talent);} else {_// Default implementation}
  };

  const _handleViewProfile = (_id: string) => {_if (viewProfile) {
      viewProfile(id);} else {_onTalentClick(id);}
  };
  
  if (isLoading) {_return <div className="py-8 text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan mx-auto mb-4"></div>
      <p className="text-zion-cyan">Loading talent profiles...</p>
    </div>;}

  if (!talents || talents.length === 0) {_return <div className="py-8 text-center bg-zion-blue-dark rounded-lg border border-zion-blue-light p-6">
      <p className="text-zion-slate-light mb-4">No talents found matching your criteria</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      {clearFilters && (
        <button 
          onClick={clearFilters}
          className=&quot;px-4 py-2 bg-zion-purple text-white rounded hover:bg-zion-purple-dark transition-colors&quot;
        >
          Clear Filters
        </button>
      )}
    </div>
  }

<<<<<<< HEAD
  return (
    <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
      {talents.map((talent) => (
        <TalentCard
=======
  return (_<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {_talents.map((talent) => (_<TalentCard
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          key={talent.id}
          talent={_talent}
          onViewProfile={_() => handleViewProfile(talent.id)}
          onRequestHire={_() => handleRequestHireInternal(talent)}
          isSaved={_savedTalentIds.includes(talent.id)}
          onToggleSave={_onToggleSave}
          isAuthenticated={_isAuthenticated}
        />
      ))}
    </div>
  )
}
