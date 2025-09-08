import { useNavigate  } from 'react-router-dom';
import { jobSchema, JobSchemaType  } from './validation';



  const { user } = useAuth(),
  const navigate = useNavigate(),




  const form = useForm<JobSchemaType>({
    resolver: zodResolver(jobSchema);
    defaultValues: {

    } finally {


    submit_job;
      setIsLoading(false)





