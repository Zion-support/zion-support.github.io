 export interface HireConfirmationModalProps {
  isOpen: boolean;
onClose: () => void;
candidateData?: TalentProfile;
application?: JobApplication;
onConfirm: () => void;
isSubmitting?: boolean 
}export function HireConfirmationModal ({
  isOpen;
onClose;
candidateData;
application;
onConfirm;
isSubmitting = false 
}: HireConfirmationModalProps) {
  const [projectName, setProjectName] = useState ('');
const [projectDescription, setProjectDescription] = useState ('');
const [updateAvailability, setUpdateAvailability] = useState (true);
const [isLoading, setIsLoading] = useState (false);
const {
  user 
}= useAuth ();
//Get talent information from either candidateData or application const talentData = candidateData || (application?.talent profile as TalentProfile);
if (!projectName || !projectDescription) {
  toast ({
  
}setIsLoading (true);
//Create a new project try {
  const {
  data: projectData, error: projectError 
}= await supabase .from ('projects') .insert ([ {
  client id: user.id, talent id: talentData.user id, job id: application?.job id || null, title: projectName, description: projectDescription, status: 'active', payment terms: 'hourly' 
}]) .select () .single ();
}//Create a new hiring record const {
  error: hiringError 
}= await supabase .from ('hiring records') .insert ([ 
}//Update the availability status if (updateAvailability) {
  try {
  const {
  error: availabilityError 
}= await supabase .from ('talent profiles') </DialogDescription> </DialogHeader> <div className="grid gap-4 py-4" > <div className="grid grid-cols-4 items-center gap-4" > <Label htmlFor="projectName" className="text-right" > Project Name </Label> <Input /> </div> <div className="grid grid-cols-4 items-start gap-4" > <Label htmlFor="projectDescription" className="text-right mt-2" > Project Description </Label> <Textarea /> </div> <div className="flex items-center space-x-2" > <input /> <label htmlFor="updateAvailability" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed" > Update talent availability to "Unavailable" </label> </div> </div> </Button> </div> </DialogContent> </Dialog>) 
}