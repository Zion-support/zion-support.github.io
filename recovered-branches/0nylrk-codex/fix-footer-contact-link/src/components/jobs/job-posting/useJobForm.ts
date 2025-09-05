


export interface JobPostingProps {_jobId?: string;
  onSuccess?: () => void;}

export const _useJobForm = (_{_jobId, _onSuccess}: JobPostingProps) => {_const { user} = useAuth();
  const _navigate = useNavigate();
  
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [isRemote, setIsRemote] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [initialValues, setInitialValues] = useState<JobSchemaType | null>(null);

  const _form = useForm<JobSchemaType>({_resolver: zodResolver(jobSchema), _defaultValues: {
      title: '', _company: '', _location: '', _job_type: '', _salary_range: '', _description: '', _responsibilities: '', _qualifications: '', _benefits: '', _application_instructions: '', _contact_email: '', _published_date: '', _expiry_date: '', _is_remote: false, _category: '', _status: '', _external_apply_link: ''},
    mode: "onChange"});

  // Function to create/update jobs that will be implemented by parent component
  const _submitJob = async (_values: JobSchemaType) => {_if (!user) {
      toast.error("You must be logged in to post a job");
      navigate("/login");
      return;}

    setIsLoading(true);

    try {_const _publishedDate = startDate ? startDate.toString() : '';
      const _expiryDate = endDate ? endDate.toString() : '';

      const _jobData = {
        ...values, _published_date: publishedDate, _expiry_date: expiryDate, _is_remote: isRemote, _user_id: user.id};

      if (onSuccess) {_onSuccess();}
      
      return jobData;
    } catch (error: unknown) {_toast.error(error.message || "Failed to process form");
      throw error;} finally {_setIsLoading(false);}
  };

  return {_form, _isLoading, _startDate, _setStartDate, _endDate, _setEndDate, _isRemote, _setIsRemote, _initialValues, _setInitialValues, _submitJob};
};
