
<<<<<<< HEAD


=======
interface HireNowCTAProps {;
  talentProfile: {;
    id: string,;


    id: string,

>>>>>>> origin/cursor/delete-old-data-records-6bba
    full_name?: string;
    professional_title?: string;
    hourly_rate?: number;
  }
}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

export function HireNowCTA(): any ({ talentProfile }: HireNowCTAProps) {;
  const [modalOpen, setModalOpen] = useState(false);

    id: string

<<<<<<< HEAD

interface HireNowCTAProps {

=======
interface HireNowCTAProps {
interface HireNowCTAProps {
>>>>>>> origin/cursor/delete-old-data-records-6bba
  talentProfile: {
    id: string,
    full_name?: string,
    professional_title?: string,
<<<<<<< HEAD



=======

  const handleOpenModal = () => {
    }
    setModalOpen(true)
      <h3 className="text-xl font-bold mb-4">Hire {talentProfile?.full_name || 'This Talent'}</h3>'
  },

  const handleCloseModal = () => {
    }
    setModalOpen(false)
  },
  // Check if we have minimum required data,
const canHire = talentProfile && talentProfile.id && talentProfile.full_name,;
  // Calculate talent profile completeness (simplified)
const profileCompleteness = calculateProfileCompleteness(talentProfile),;
return (;
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 sticky top-4">"
      <h3 className="text-xl font-bold mb-4">Hire {talentProfile?.full_name || 'This Talent'}</h3>'
      <h3 className="text-xl font-bold mb-4">Hire {talentProfile?.full_name || 'This Talent'}</h3>'
      <div className="mb-4">"
        <div className="flex justify-between mb-2">"
          <span>Profile Completeness</span>
          <span className="font-bold">{profileCompleteness}%</span>"
        </div>
        <div className="h-2 bg-zion-blue-light rounded-full overflow-hidden">"
          <div,
className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan""
            style={ "width": `${profileCompleteness}%` }` />
        </div>
      </div>
      <div className="flex flex-col space-y-4 mt-6">"
        <Button,
onClick={handleOpenModal}
          disabled={!canHire}
          className="bg-gradient-to-r from-zion-purple to-zion-purple-dark "hover":from-zion-purple-light "hover":to-zion-purple text-white""
        >
          Request to Hire
        </Button>
        <Button variant="outline" className="border-zion-cyan text-zion-cyan "hover":bg-zion-cyan/10">"
          Schedule Interview
        </Button>
      </div>        <Button variant="outline" className="border-zion-cyan text-zion-cyan "hover":bg-zion-cyan/10">;"
          Schedule Interview;
        </Button>;
      </div>;
        isOpen={modalOpen}
        onClose={handleCloseModal}
        talent={talentProfile ? {
          }
          "id": talentProfile.id;
    "user_id": talentProfile.id,
"full_name": talentProfile.full_name |'Talent''
          "professional_title": talentProfile.professional_title |'Professional''
          "bio": "bio","
    "years_experience": 0,
"skills": []
          "availability_type": 'full_time''
          "timezone": '''
          "hourly_rate": talentProfile.hourly_rate
      <HireRequestModal

      <HireRequestModal

      <HireRequestModal 
      <HireRequestModal,
isOpen={modalOpen}
        onClose={handleCloseModal}
        talent={talentProfile ? {
    hourly_rate?: number
  }
}
export function HireNowCTA({ talentProfile }: HireNowCTAProps) {
  const [modalOpen, setModalOpen] = useState($2);
  const handleOpenModal = $2;
  const handleCloseModal = $2;
>>>>>>> origin/cursor/delete-old-data-records-6bba
    hourly_rate?: number
  }
}


<<<<<<< HEAD

  },

  const handleCloseModal = () => {
    setModalOpen(false)
  },

  // Check if we have minimum required data
  const canHire = talentProfile && talentProfile.id && talentProfile.full_name,

  // Calculate talent profile completeness (simplified)
  const profileCompleteness = calculateProfileCompleteness(talentProfile),

=======
  const handleOpenModal = () => {
    setModalOpen(true)

export function HireNowCTA({ talentProfile }: HireNowCTAProps) {;
  const [modalOpen, setModalOpen] = useState(false);
export function HireNowCTA({ talentProfile }: HireNowCTAProps) {

      <h3 className="text-xl font-bold mb-4">Hire {talentProfile?.full_name || 'This Talent'}</h3>
>>>>>>> origin/cursor/delete-old-data-records-6bba



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
<<<<<<< HEAD

      </div>

=======


    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 sticky top-4">;
      <h3 className="text-xl font-bold mb-4">Hire {talentProfile?.full_name || 'This Talent'}</h3>;


      <HireRequestModal 

import { Button } from "@/components/ui/button",;
import { HireRequestModal } from "./hire-request",;
import { useState } from "react",;

import { TalentProfile } from "@/types/talent",;
interface HireNowCTAProps {;
  talentProfile: {;
    id: string,;
    full_name?: string,;
    professional_title?: string,;
    hourly_rate?: number;
  }
}
;

  },;
  const handleCloseModal = () => {;
    setModalOpen(false);
  },;
  // Check if we have minimum required data;
  const canHire = talentProfile && talentProfile.id && talentProfile.full_name,;
  // Calculate talent profile completeness (simplified);
  const profileCompleteness = calculateProfileCompleteness(talentProfile),;

      <h3 className="text-xl font-bold mb-4">Hire {talentProfile?.full_name || 'This Talent'}</h3>;

"
      <div className="mb-4">;"

>>>>>>> origin/cursor/delete-old-data-records-6bba
        <div className="flex justify-between mb-2">;
          <span>Profile Completeness</span>;"
          <span className="font-bold">{profileCompleteness}%</span>;
        </div>;"
        <div className="h-2 bg-zion-blue-light rounded-full overflow-hidden">;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba


            style={{ width: `${profileCompleteness}%` }}
          />;
        </div>;
      </div>;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          Schedule Interview;
        </Button>;
      </div>;

<<<<<<< HEAD




      <HireRequestModal


      <HireRequestModal 
      <HireRequestModal 


=======
        <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">;
          Schedule Interview;
        </Button>;
      </div>;
      <HireRequestModal;
        isOpen={modalOpen}
        onClose={handleCloseModal}
        talent={talentProfile ? {
          id: talentProfile.id
          user_id: talentProfile.id
          full_name: talentProfile.full_name |'Talent'
          professional_title: talentProfile.professional_title |'Professional'
          bio: ''
          years_experience: 0
          skills: []
          availability_type: 'full_time'
          timezone: ''
          hourly_rate: talentProfile.hourly_rate
        } : null}
      />
    </div>
  )
}


>>>>>>> origin/cursor/delete-old-data-records-6bba
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

          id: talentProfile.id,
          user_id: talentProfile.id,'
          full_name: talentProfile && talentProfile.full_name || 'Talent','
          professional_title: talentProfile && talentProfile.professional_title || 'Professional',

<<<<<<< HEAD
export /**
 * HireNowCTA - Function description
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
<<<<<<< HEAD

=======


          timezone: '',

>>>>>>> origin/cursor/delete-old-data-records-6bba
          bio: '',
          years_experience: 0,
          skills: [],
          availability_type: 'full_time',
          timezone: '',
<<<<<<< HEAD

=======
// Helper function to calculate profile completeness
}
function calculateProfileCompleteness() {
  }
  if (!profile) return 0;
const fields = [;
// Helper function to calculate profile completeness;
function calculateProfileCompleteness(): any ("profile": any) {;
  }
  if (!profile) return 0;

  const fields = [;
    'availability_type';'
  ];

    }
    totalFields++;
  });

}
  return Math && Math.min(Math && Math.round((completedFields / totalFields) * 100), 100);
}
          "hourly_rate": talent_profile.hourly_rate;
        } : null} />;
    </div>);
}
// Helper function to calculate profile completeness;
/**
 * calculateProfileCompleteness - Function description
 */
function calculateProfileCompleteness() {
  // Check condition
}
if (return 0) {
  $2
}
  const fields = [;
    'full_nameprofessional_titlebioskillshourly_ratelocationportfolio_linksexperience';'
    'availability_type';'
  ];
;
          hourly_rate: talentProfile.hourly_rate
        } : null}
      />
    </div>
  )
}
// Helper function to calculate profile completeness
function calculateProfileCompleteness(profile: any) {
  if (!profile) return 0,
  
  const fields = $2;
  let completedFields = $2;
  let totalFields = $2;
  fields.forEach(field = $2;
  return Math.min(Math.round((completedFields / totalFields) * 100), 100)
}
}
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
// Helper function to calculate profile completeness
function calculateProfileCompleteness(profile: any) {
  if (!profile) return 0;
  const fields = [
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

// Helper function to calculate profile completeness;
function calculateProfileCompleteness(): any (profile: any) {;
  if (!profile) return 0;

<<<<<<< HEAD



    'full_nameprofessional_titlebioskillshourly_ratelocationportfolio_linksexperience';

    'availability_type';

  ];


=======
    'availability_type';
  ];

// Helper function to calculate profile completeness;
function calculateProfileCompleteness(): any (profile: any) {;
  if (!profile) return 0;
  const fields = [;
    'availability_type';'
    'full_nameprofessional_titlebioskillshourly_ratelocationportfolio_linksexperience';

    'availability_type';
  ];


    }
    totalFields++;
  });

}
  return Math && Math.min(Math && Math.round((completedFields / totalFields) * 100), 100);
}

          hourly_rate: talent_profile.hourly_rate;
        } : null}
      />;
    </div>);
}
// Helper function to calculate profile completeness;
/**
 * calculateProfileCompleteness - Function description;
 */
function calculateProfileCompleteness() {}
  // Check condition;
if (return 0) {}
  $2;
}
if (return 0) {
  $2
}
    'full_nameprofessional_titlebioskillshourly_ratelocationportfolio_linksexperience';'
    'availability_type';
  ];
>>>>>>> origin/cursor/delete-old-data-records-6bba


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

<<<<<<< HEAD



=======
;
// Helper function to calculate profile completeness;
function calculateProfileCompleteness(profile:any) {;
  if (!profile) return 0,;
  ;
  const fields = [;
    'full_nameprofessional_title', ;
    'bioskills', ;
    'hourly_ratelocation',;
    'portfolio_linksexperience',;
    'availability_type';
  ],;
  ;
  let completedFields = 0,;
  let totalFields = 0,;
  ;
  fields.forEach(field => {;
    if (profile[field]) {;
      completedFields++,;
    }
    totalFields++,;
  }),;
  ;
  return Math.min(Math.round((completedFields / totalFields) * 100), 100),; interface HireNowCTAProps {
  talentProfile: {
  id: string;
full name?: string;
professional title?: string;
hourly rate?: number 
}
}export function HireNowCTA ({
  talentProfile 
}: HireNowCTAProps) {
  const [modalOpen, setModalOpen] = useState (false);
const handleOpenModal = () => {
  setModalOpen (true) 
};
const handleCloseModal = () => {
  setModalOpen (false) 
};
//Check if we have minimum required data const canHire = talentProfile && talentProfile.id && talentProfile.full name;
//Calculate talent profile completeness (simplified) const profileCompleteness = calculateProfileCompleteness (talentProfile);
return (<div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 sticky top-4" > <h3 className="text-xl font-bold mb-4" >Hire {
  talentProfile?.full name || 'This Talent' 
}</h3> mb-4"> <div className=" flex justify-between mb-2"> <span>Profile Completeness</span> </div> <div className=" h-2 bg-zion-blue-light rounded-full overflow-hidden"> <div /> </div> </div> <div className=" flex flex-col space-y-4 mt-6"> <Button > Request to Hire </Button> <Button variant=" outline"className=" border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10" > Schedule Interview </Button> </div> <HireRequestModal isOpen= {
  modalOpen 
}onClose= {
  handleCloseModal 
}talent= {
  talentProfile ? {
  id: talentProfile.id, user id: talentProfile.id, full name: talentProfile.full name || 'Talent', professional title: talentProfile.professional title || 'Professional', bio: '', years experience: 0, skills: [], availability type: 'full time', timezone: '', hourly rate: talentProfile.hourly rate 
}: null 
}/> </div>) 
}//Helper function to calculate profile completeness return Math.min (Math.round ( (completedFields / totalFields) * 100), 100) 
}
  return Math.min(Math.round((completedFields / totalFields) * 100), 100);
}

;
>>>>>>> origin/cursor/delete-old-data-records-6bba
