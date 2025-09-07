<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

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
import { TalentCard } from "@/components/talent/TalentCard";
import { TalentProfile } from "@/types/talent";
export interface TalentGridProps {

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

import { TalentCard } from "@/components/talent/TalentCard";"
import { TalentProfile } from "@/types/talent";
export interface TalentGridProps {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  clearFilters?: () => void;
"
import { TalentCard } from "@/components/talent/TalentCard","
import { TalentProfile } from "@/types/talent",";
import {TalentCard} from "@/components/talent/TalentCard";"
import {TalentProfile} from "@/types/talent";"
import { TalentCard } from "@/components/talent/TalentCard","
import { TalentProfile } from "@/types/talent",

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export interface TalentGridProps {
=======
  clearFilters?: () => void;export interface TalentGridProps {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  clearFilters?: () => void;export interface TalentGridProps {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


export interface TalentGridProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  clearFilters?: () => void;
import { TalentCard } from "@/components/talent/TalentCard",
import { TalentProfile } from "@/types/talent",
import {TalentCard} from "@/components/talent/TalentCard";
import {TalentProfile} from "@/types/talent";
import { TalentCard } from "@/components/talent/TalentCard",
import { TalentProfile } from "@/types/talent",

export interface TalentGridProps {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  talents: TalentProfile[],
  isLoading: boolean,
  onTalentClick: (id: string) => void,
  savedTalentIds: string[],
  onToggleSave: (id: string, isSaved: boolean) => void,
  isAuthenticated: boolean,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  viewProfile?: (id: string) => void,
  clearFilters?: () => void,
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  viewProfile?: (id: string) => void,
  clearFilters?: () => void,
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  handleRequestHire?: (talent: TalentProfile) => void
  clearFilters?: () => void;
<<<<<<< HEAD
  viewProfile?: (id: string) => void,
  clearFilters?: () => void,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  handleRequestHire?: (talent: TalentProfile) => void
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  handleRequestHire?: (talent: TalentProfile) => void
=======
  handleRequestHire?: (talent: TalentProfile) => void;  handleRequestHire?: (talent: TalentProfile) => void
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  handleRequestHire?: (talent: TalentProfile) => void
  clearFilters?: () => void;
<<<<<<< HEAD
<<<<<<< HEAD
  handleRequestHire?: (talent: TalentProfile) => void;  handleRequestHire?: (talent: TalentProfile) => void
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  viewProfile?: (id: string) => void,
  clearFilters?: () => void,
  handleRequestHire?: (talent: TalentProfile) => void
  handleRequestHire?: (talent: TalentProfile) => void
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  clearFilters?: () => void;
  handleRequestHire?: (talent: TalentProfile) => void;
}
export function TalentGrid({
  talents
  isLoading
  onTalentClick
  savedTalentIds
  onToggleSave
=======
  handleRequestHire?: (talent: TalentProfile) => void;  handleRequestHire?: (talent: TalentProfile) => void
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD


<<<<<<< HEAD
=======
  isAuthenticated;
  viewProfile;
  clearFilters;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export function TalentGrid({ 
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
;
;
  handleRequestHire?: (talent: TalentProfile) => void;
  clearFilters?: () => void;
  handleRequestHire?: (talent: TalentProfile) => void;

}
export function TalentGrid({};
  talents;
  isLoading;
  onTalentClick;
  savedTalentIds;
  onToggleSave;
export function TalentGrid({}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

  talents;

<<<<<<< HEAD
export function TalentGrid({ 
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  talents, 
  isLoading, 
  onTalentClick, 
  savedTalentIds, 

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  onToggleSave, ;
=======
  isLoading;
  onTalentClick;
  savedTalentIds;
  onToggleSave;

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  isAuthenticated;
  viewProfile;
  clearFilters;
  onToggleSave, 
  isAuthenticated,
  viewProfile,
  clearFilters,
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  handleRequestHire
}: TalentGridProps) {
  handleRequestHire;)
pr-12325

<<<<<<< HEAD
  const handleRequestHireInternal = (talent: TalentProfile) => {
    if (handleRequestHire) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
;
  handleRequestHire;
}: TalentGridProps) {}
  const handleRequestHireInternal = (talent: TalentProfile) => {}
    if (handleRequestHire) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      handleRequestHire(talent)

import { TalentCard } from '@/components / talent / TalentCard';'
import { TalentProfile } from '@/types / talent';
export interface TalentGridProps {}
=======
      handleRequestHire(talent)
import { TalentCard } from '@/components / talent / TalentCard';
import { TalentProfile } from '@/types / talent';
export interface TalentGridProps {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  talents: TalentProfile[],
  is_loading: boolean,
  onTalentClick: (id: string) => void,
  savedTalentIds: string[],
  onToggleSave: (id: string, is_saved: boolean) => void,
  is_authenticated: boolean,
<<<<<<< HEAD
  view_profile?: (id: string) => void,;
  clear_filters?: () => void;
  handleRequestHire?: (talent: TalentProfile) => void;
}
export /**;
 * TalentGrid - Function description;
 */
function TalentGrid() {}
  const handleRequestHireInternal = (talent: TalentProfile) =>: any {}
    // Check condition;
if ( {) {}
  $2;
}
      handleRequestHire (talent);
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    } else {
<<<<<<< HEAD
      // Default implementation

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

    } else {}
    } else {}
;
<<<<<<< HEAD
=======
      handleRequestHire(talent);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      handleRequestHire(talent);
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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

    } else {

;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
=======
  const handleViewProfile = (id: string) =>: any {}
    // Check condition;
if ( {) {}
  $2;
}
      view_profile (id);


    } else {}
      onTalentClick (id);
    }

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



      // Default implementation;
  };

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      // // // console.log("Request to hire:", talent.id)
import { TalentCard } from "@/components/talent/TalentCard",;
=======


"
      // // // console.log("Request to hire:", talent.id)"
import { TalentCard } from "@/components/talent/TalentCard",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31



  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


  
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
  
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  if (isLoading) {
=======
    if (isLoading) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    if (isLoading) {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


  
  
  
  
  if (isLoading) {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
}: TalentGridProps) {

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    return <div className="py-8 text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan mx-auto mb-4"></div>
=======


  

  if (isLoading) {"
    return <div className="py-8 text-center">"
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan mx-auto mb-4"></div>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      <p className="text-zion-cyan">Loading talent profiles...</p>
    </div>
  }
  if (!talents |talents.length === 0) {"
    return <div className="py-8 text-center bg-zion-blue-dark rounded-lg border border-zion-blue-light p-6">"
      <p className="text-zion-slate-light mb-4">No talents found matching your criteria</p>
      {clearFilters && (

<<<<<<< HEAD
<<<<<<< HEAD
export function TalentGrid(): any ({ ;  talents, ;
=======
  talents, ;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
export function TalentGrid(): any ({ ;
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
  talents, ;
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
export function TalentGrid(): any ({ ;  talents, ;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
isAuthenticated,;
  viewProfile,;
  clearFilters,;
  handleRequestHire;
} TalentGridProps) {;
  const handleRequestHireInternal = (talent:TalentProfile) => {;
    if (handleRequestHire) {;
  const handleRequestHireInternal = (talent: TalentProfile) => {;    if (handleRequestHire) {;
      handleRequestHire(talent);
    } else {;
      // Default implementation;
      console && console.log("Request to hire:", talent && talent.id);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    }
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <button
=======

    if (handleRequestHire) {;
      handleRequestHire(talent);
    } else {;
      // Default implementation;

        <button;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          onClick={clearFilters}

"
          className="px-4 py-2 bg-zion-purple text-white rounded hover:bg-zion-purple-dark transition-colors"
        >
          Clear Filters;
        </button>




  };
=======
    }        <button
          onClick={clearFilters}  };
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    }        <button
          onClick={clearFilters}  };
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    }
        <button
          onClick={clearFilters}
          className="px-4 py-2 bg-zion-purple text-white rounded hover:bg-zion-purple-dark transition-colors"
        >
          Clear Filters
        </button>

  };
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    }        <button
          onClick={clearFilters}  };
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  const handleViewProfile = (id: string) => {;
    if (viewProfile) {;
      viewProfile(id);
    } else {;
      onTalentClick(id);
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  };



  if (isLoading) {;"
    return <div className="py-8 text-center">;"
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan mx-auto mb-4"></div>;"
      <p className="text-zion-cyan">Loading talent profiles...</p>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    </div>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }

        <button
          onClick={clearFilters}

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    </div>,;
  }
    </div>;
  }"
          className="px-4 py-2 bg-zion-purple text-white rounded hover:bg-zion-purple-dark transition-colors"
=======
  };          className="px-4 py-2 bg-zion-purple text-white rounded hover:bg-zion-purple-dark transition-colors"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  };          className="px-4 py-2 bg-zion-purple text-white rounded hover:bg-zion-purple-dark transition-colors"
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  };

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
        <button
          onClick={clearFilters}

    </div>,;
  }
    </div>;
  }
          className="px-4 py-2 bg-zion-purple text-white rounded hover:bg-zion-purple-dark transition-colors"
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  };          className="px-4 py-2 bg-zion-purple text-white rounded hover:bg-zion-purple-dark transition-colors"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        >
          Clear Filters;
        </button>
      )}
    </div>
  }
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      )}
    </div>;
  }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31




<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  return (
=======
  return ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
=======
=======
  }
;
  }
;
<<<<<<< HEAD
  // Check condition
if ( {) {
  $2
}
    return <div className="py - 8 text-center">;
      <div className="animate - spin rounded - full h - 12 w - 12 border - t-2 border - b-2 border - zion - cyan mx - auto mb-4"></div>;
      <p className="text - zion-cyan">Loading talent profiles...</p>;
    </div>;
  }
  // Check condition
if ( {) {
  $2
}
    return <div className="py - 8 text - center bg - zion - blue - dark rounded - lg border border - zion - blue - light p-6">;
      <p className="text - zion - slate - light mb-4">No talents found matching your criteria</p>;
      {clear_filters && (
        <button;
          on_click={clear_filters}
<<<<<<< HEAD
<<<<<<< HEAD
          className="px - 4 py - 2 bg - zion - purple text - white rounded hover:bg - zion - purple - dark transition-colors";
=======
  // Check condition;
if ( {) {}
  $2;
}"
    return <div className="py - 8 text - center">;"
      <div className="animate - spin rounded - full h - 12 w - 12 border - t-2 border - b-2 border - zion - cyan mx - auto mb - 4"></div>;"
      <p className="text - zion - cyan">Loading talent profiles...</p>;
    </div>;
  }
  // Check condition;
if ( {) {}
  $2;
}"
    return <div className="py - 8 text - center bg - zion - blue - dark rounded - lg border border - zion - blue - light p - 6">;"
      <p className="text - zion - slate - light mb - 4">No talents found matching your criteria</p>;
      {clear_filters && (
        <button;
          on_click={clear_filters}"
          className="px - 4 py - 2 bg - zion - purple text - white rounded hover:bg - zion - purple - dark transition - colors";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          className="px - 4 py - 2 bg - zion - purple text - white rounded hover:bg - zion - purple - dark transition - colors";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
          className="px - 4 py - 2 bg - zion - purple text - white rounded hover:bg - zion - purple - dark transition-colors";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        >;
          Clear Filters;
        </button>)}
    </div>;
  }
<<<<<<< HEAD
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap-6">;
=======
  return ("
    <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap-6">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
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
          className="px-4 py-2 bg-zion-purple text-white rounded hover:bg-zion-purple-dark transition-colors"
        >
          Clear Filters
        </button>

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

    </div>;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
<<<<<<< HEAD
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  }
;

<<<<<<< HEAD


<<<<<<< HEAD
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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

    </div>,;
    </div>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;"
        <TalentCard;
          key={talent && talent.id}
          talent={talent}
          onViewProfile={() => handleViewProfile(talent && talent.id)}
"
    return <div className="py - 8 text - center">;"
      <div className="animate - spin rounded - full h - 12 w - 12 border - t-2 border - b-2 border - zion - cyan mx - auto mb - 4"></div>;""
      <p className="text - zion - cyan">Loading talent profiles...</p>;"
    return <div className="py - 8 text - center bg - zion - blue - dark rounded - lg border border - zion - blue - light p - 6">;"
      <p className="text - zion - slate - light mb - 4">No talents found matching your criteria</p>;"
          on_click={clear_filters}"
          className="px - 4 py - 2 bg - zion - purple text - white rounded hover:bg - zion - purple - dark transition - colors";"
        >;
        </button>)}
    <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6">;"
          key={talent.id}
          onViewProfile={() => handleViewProfile (talent.id)}

</TalentCard>
    </div>);"
  return <div className="py-8 text-center bg-zion-blue-dark rounded-lg border border-zion-blue-light p-6" > <p className="text-zion-slate-light mb-4" >No talents found matching your criteria</p> clearFilters && (<button onClick= {"
</div>)"
}className="px-4 py-2 bg-zion-purple text-white rounded hover:bg-zion-purple-dark transition-colors" > Clear Filters </button>)"
}</div> 

}</div>) 

        <button;

          onClick={clearFilters}"
          className="px-4 py-2 bg-zion-purple text-white rounded hover:bg-zion-purple-dark transition-colors""
        >
</button>
        </button>
    </div>;"
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;"
</div>
        <TalentCard;
          key={talent && talent.id}
          talent={talent}
          onViewProfile={() => handleViewProfile(talent && talent.id)}
</TalentCard>
    </div>;
    </div>"
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">"
          onViewProfile={() => handleViewProfile(talent.id)}
pr-12325
</TalentCard>
    </div>
    </div>;"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
