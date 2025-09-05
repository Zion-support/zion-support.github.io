 export interface JobPostingProps {
  jobId?: string;
onSuccess?: () => void 
}export const useJobForm = ({
  jobId, onSuccess 
}: JobPostingProps) => {
  const {
  user 
}= useAuth ();
const navigate = useNavigate ();
const [endDate, setEndDate] = useState<Date | undefined> (undefined);
const [isRemote, setIsRemote] = useState (false);
const [isLoading, setIsLoading] = useState (false);
const [initialValues, setInitialValues] = useState<JobSchemaType | null> (null);
//Function to create/update jobs that will be implemented by parent component const submitJob = async (values: JobSchemaType) => {
  if (!user) {
  
}
}finally {
  setIsLoading (false) 
}
};
return {
  form;
isLoading;
startDate;
setStartDate;
endDate;
setEndDate;
isRemote;
setIsRemote;
initialValues;
setInitialValues;
submitJob 
}
};
