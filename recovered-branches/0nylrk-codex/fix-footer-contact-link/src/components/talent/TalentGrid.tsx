

  talents: TalentProfile[]
  isLoading: boolean
  onTalentClick: (id: string) => void
  savedTalentIds: string[]
  onToggleSave: (id: string, isSaved: boolean) => void
  isAuthenticated: boolean
  viewProfile?: (id: string) => void
  clearFilters?: () => void;
=======
=======
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

import { TalentCard } from "@/components/talent/TalentCard",
import { TalentProfile } from "@/types/talent",
=======
import {TalentCard} from "@/components/talent/TalentCard";
import {TalentProfile} from "@/types/talent";
=======
import { TalentCard } from "@/components/talent/TalentCard",
import { TalentProfile } from "@/types/talent",

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export interface TalentGridProps {
  talents: TalentProfile[],
  isLoading: boolean,
  onTalentClick: (id: string) => void,
  savedTalentIds: string[],
  onToggleSave: (id: string, isSaved: boolean) => void,
  isAuthenticated: boolean,
  handleRequestHire?: (talent: TalentProfile) => void
=======  viewProfile?: (id: string) => void,;
  clearFilters?: () => void;
  viewProfile?: (id: string) => void,
  clearFilters?: () => void,
  viewProfile?: (id: string) => void,
  clearFilters?: () => void,
  handleRequestHire?: (talent: TalentProfile) => void
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  handleRequestHire?: (talent: TalentProfile) => void
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
export function TalentGrid({
  talents
  isLoading
  onTalentClick
  savedTalentIds
  onToggleSave

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  handleRequestHire
}: TalentGridProps) {

  const handleRequestHireInternal = (talent: TalentProfile) => {
    if (handleRequestHire) {
      handleRequestHire(talent)
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
  const handleViewProfile = (id: string) =>: any {
    // Check condition
if ( {) {
  $2
}
      view_profile (id);
  };
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
=======

export function TalentGrid(): any ({ ;  talents, ;
  isLoading, ;
  onTalentClick, ;
  savedTalentIds, ;
  onToggleSave, ;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  };
=======
  };
  const handleViewProfile = (id: string) => {;
    if (viewProfile) {;
      viewProfile(id);
    } else {;
      onTalentClick(id);
    }
  };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  if (isLoading) {;
    return <div className="py-8 text-center">;
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan mx-auto mb-4"></div>;
      <p className="text-zion-cyan">Loading talent profiles...</p>;
  if (!talents || talents && talents.length === 0) {;
    return <div className="py-8 text-center bg-zion-blue-dark rounded-lg border border-zion-blue-light p-6">;
      <p className="text-zion-slate-light mb-4">No talents found matching your criteria</p>;
      {clearFilters && (;        <button
          onClick={clearFilters}

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
=======

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

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
