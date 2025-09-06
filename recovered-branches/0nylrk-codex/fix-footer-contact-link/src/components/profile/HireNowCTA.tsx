 interface HireNowCTAProps {
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