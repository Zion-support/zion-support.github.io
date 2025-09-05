

interface HireNowCTAProps {_talentProfile: {
    id: string;
    full_name?: string;
    professional_title?: string;
    hourly_rate?: number;};
}

export function HireNowCTA(_{_talentProfile}: HireNowCTAProps) {_const [modalOpen, _setModalOpen] = useState(false);

  const _handleOpenModal = () => {
    setModalOpen(true);};

  const _handleCloseModal = () => {_setModalOpen(false);};

  // Check if we have minimum required data
  const _canHire = talentProfile && talentProfile.id && talentProfile.full_name;

  // Calculate talent profile completeness (simplified)
  const _profileCompleteness = calculateProfileCompleteness(talentProfile);

  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 sticky top-4">
      <h3 className="text-xl font-bold mb-4">Hire {_talentProfile?.full_name || 'This Talent'}</h3>
      
      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <span>Profile Completeness</span>
          <span className="font-bold">{_profileCompleteness}%</span>
        </div>
        <div className="h-2 bg-zion-blue-light rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan"
            style={_{ width: `${profileCompleteness}%` }}
          />
        </div>
      </div>
      
      <div className="flex flex-col space-y-4 mt-6">
        <Button
          onClick={_handleOpenModal}
          disabled={_!canHire}
          className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
        >
          Request to Hire
        </Button>
        
        <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
          Schedule Interview
        </Button>
      </div>

      <HireRequestModal 
        isOpen={_modalOpen}
        onClose={_handleCloseModal}
        talent={_talentProfile ? {
          id: talentProfile.id, _user_id: talentProfile.id, _full_name: talentProfile.full_name || 'Talent', _professional_title: talentProfile.professional_title || 'Professional', _bio: '', _years_experience: 0, _skills: [], _availability_type: 'full_time', _timezone: '', _hourly_rate: talentProfile.hourly_rate} : null}
      />
    </div>
  );
}

// Helper function to calculate profile completeness
function calculateProfileCompleteness(_profile: unknown) {_if (!profile) return 0;
  
  const _fields = [
    'full_name', _'professional_title', _'bio', _'skills', _'hourly_rate', _'location', _'portfolio_links', _'experience', _'availability_type'
  ];
  
  let _completedFields = 0;
  let _totalFields = 0;
  
  fields.forEach(field => {
    if (profile[field]) {
      completedFields++;}
    totalFields++;
  });
  
  return Math.min(Math.round((completedFields / totalFields) * 100), 100);
}
