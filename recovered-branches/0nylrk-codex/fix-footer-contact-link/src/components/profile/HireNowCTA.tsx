


    full_name?: string;
    professional_title?: string;
    hourly_rate?: number;
  }
}


export function HireNowCTA(): any ({ talentProfile }: HireNowCTAProps) {;
  const [modalOpen, setModalOpen] = useState(false);

    id: string


interface HireNowCTAProps {

  talentProfile: {
    id: string,
    full_name?: string,
    professional_title?: string,



    hourly_rate?: number
  }
}



  },

  const handleCloseModal = () => {
    setModalOpen(false)
  },

  // Check if we have minimum required data
  const canHire = talentProfile && talentProfile.id && talentProfile.full_name,

  // Calculate talent profile completeness (simplified)
  const profileCompleteness = calculateProfileCompleteness(talentProfile),




      <div className="mb-4">

        <div className="flex justify-between mb-2">
          <span>Profile Completeness</span>"
          <span className="font-bold">{profileCompleteness}%</span>
        </div>"
        <div className="h-2 bg-zion-blue-light rounded-full overflow-hidden">
          <div"
            className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan"
            style={{ width: `${profileCompleteness}%` }}
          />
        </div>
      </div>"
      <div className="flex flex-col space-y-4 mt-6">;
        <Button;
          onClick={handleOpenModal}
          disabled={!canHire}"
          className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
        >
          Request to Hire;
        </Button>"
        <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
          Schedule Interview;
        </Button>

      </div>

        <div className="flex justify-between mb-2">;
          <span>Profile Completeness</span>;"
          <span className="font-bold">{profileCompleteness}%</span>;
        </div>;"
        <div className="h-2 bg-zion-blue-light rounded-full overflow-hidden">;


            style={{ width: `${profileCompleteness}%` }}
          />;
        </div>;
      </div>;



          Schedule Interview;
        </Button>;
      </div>;





      <HireRequestModal


      <HireRequestModal 
      <HireRequestModal 


        isOpen={modalOpen}
        onClose={handleCloseModal}
        talent={talentProfile ? {}
          id: talentProfile.id;
          user_id: talentProfile.id'
          full_name: talentProfile.full_name |'Talent''
          professional_title: talentProfile.professional_title |'Professional''
          bio: ''
          years_experience: 0;
          skills: []'
          availability_type: 'full_time''
          timezone: ''

      <HireRequestModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        talent={talentProfile ? {
          id: talentProfile.id,
          user_id: talentProfile.id,'
          full_name: talentProfile && talentProfile.full_name || 'Talent','
          professional_title: talentProfile && talentProfile.professional_title || 'Professional',

export /**
 * HireNowCTA - Function description

 */
function HireNowCTA() {}
  const [modal_open, setModalOpen] = useState (false);
;
  const handleOpenModal = () =>: any {}
    setModalOpen (true);
  }
;
  const handleCloseModal = () =>: any {}

    setModalOpen (false);
  }
;
  // Check if we have minimum required data;
  const can_hire = talent_profile && talent_profile.id && talent_profile.full_name;
;
  // Calculate talent profile completeness (simplified);
  const profile_completeness = calculateProfileCompleteness (talent_profile);
;

        <Button variant="outline" className="border - zion - cyan text - zion - cyan hover:bg - zion - cyan / 10">;
          Schedule Interview;
        </Button>;
      </div>;
      <HireRequestModal;
        is_open={modal_open}
        on_close={handleCloseModal}

          professional_title: talent_profile.professional_title || 'Professional',

          bio: '',
          years_experience: 0,
          skills: [],
          availability_type: 'full_time',
          timezone: '',

// Helper function to calculate profile completeness
function calculateProfileCompleteness(profile: any) {
  if (!profile) return 0;
  const fields = [



// Helper function to calculate profile completeness;
function calculateProfileCompleteness(): any (profile: any) {;
  if (!profile) return 0;




    'full_nameprofessional_titlebioskillshourly_ratelocationportfolio_linksexperience';

    'availability_type';

  ];




  let completed_fields = 0;
  let total_fields = 0,
  fields.for_each (field => {}
    // Check condition;
if ( {) {}
  $2;

}
      completed_fields++;
    }
    total_fields++;
  });
;
  return Math.min (Math.round ((completed_fields / total_fields) * 100), 100);


;
      <HireRequestModal ;
        isOpen={modalOpen}
        onClose={handleCloseModal}
        talent={talentProfile ? {;
          id:talentProfile.id,;
          user_id:talentProfile.id,;
          full_name:talentProfile.full_name || 'Talent',;
          professional_title:talentProfile.professional_title || 'Professional',;
          bio:'',;
          years_experience:0,;
          skills:[],;
          availability_type:'full_time',;
          timezone:'',;
          hourly_rate:talentProfile.hourly_rate;
        } null}
      />;
    </div>;
  ),;
}




