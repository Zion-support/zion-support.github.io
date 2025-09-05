

export interface TalentGridProps {_talents: TalentProfile[];
  isLoading: boolean;
  onTalentClick: (_id: string) => void;
  savedTalentIds: string[];
  onToggleSave: (_id: string, _isSaved: boolean) => void;
  isAuthenticated: boolean;
  viewProfile?: (_id: string) => void;
  clearFilters?: () => void;
  handleRequestHire?: (_talent: TalentProfile) => void;}

export function TalentGrid(_{_talents, _isLoading, _onTalentClick, _savedTalentIds, _onToggleSave, _isAuthenticated, _viewProfile, _clearFilters, _handleRequestHire}: TalentGridProps) {_const _handleRequestHireInternal = (_talent: TalentProfile) => {
    if (handleRequestHire) {
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
      {clearFilters && (
        <button 
          onClick={clearFilters}
          className="px-4 py-2 bg-zion-purple text-white rounded hover:bg-zion-purple-dark transition-colors"
        >
          Clear Filters
        </button>
      )}
    </div>;
  }

  return (_<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {_talents.map((talent) => (_<TalentCard
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
  );
}
