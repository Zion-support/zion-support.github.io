<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

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
  clearFilters?: () => void;
"
import { TalentCard } from "@/components/talent/TalentCard","
import { TalentProfile } from "@/types/talent",";
import {TalentCard} from "@/components/talent/TalentCard";"
import {TalentProfile} from "@/types/talent";"
import { TalentCard } from "@/components/talent/TalentCard","
import { TalentProfile } from "@/types/talent",

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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

  viewProfile?: (id: string) => void,
  clearFilters?: () => void,
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  handleRequestHire?: (talent: TalentProfile) => void
  clearFilters?: () => void;
viewProfile?: (id: string) => void,
  clearFilters?: () => void,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  handleRequestHire?: (talent: TalentProfile) => void
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  handleRequestHire?: (talent: TalentProfile) => void
  clearFilters?: () => void;
handleRequestHire?: (talent: TalentProfile) => void;  handleRequestHire?: (talent: TalentProfile) => void
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  clearFilters?: () => void;
  handleRequestHire?: (talent: TalentProfile) => void;
}
export function TalentGrid({
  talents
  isLoading
  onTalentClick
  savedTalentIds
  onToggleSave

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
export function TalentGrid({
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

export function TalentGrid({ 
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  talents, 
  isLoading, 
  onTalentClick, 
  savedTalentIds, 

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  onToggleSave, ;
  isAuthenticated;
  viewProfile;
  clearFilters;
  onToggleSave, 
  isAuthenticated,
  viewProfile,
  clearFilters,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

const handleRequestHireInternal = (talent: TalentProfile) => {
    if (handleRequestHire) {
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    } else {
<<<<<<< HEAD
      // Default implementation

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

    } else {}
    } else {}
;
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

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

export function TalentGrid(): any ({ ;  talents, ;
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
    }
<<<<<<< HEAD
        <button
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const handleViewProfile = (id: string) => {;
    if (viewProfile) {;
      viewProfile(id);
    } else {;
      onTalentClick(id);
    }
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        >
          Clear Filters;
        </button>
      )}
    </div>
  }

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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
return (
<<<<<<< HEAD
    <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap-6">;
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
;

<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
