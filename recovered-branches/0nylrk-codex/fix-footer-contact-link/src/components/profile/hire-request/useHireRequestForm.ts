

interface UseHireRequestFormProps {_talent: TalentProfile;
  onClose: () => void;
  initialJobTitle?: string;
  userDetails?: {
    name?: string;
    email?: string;
    id?: string;};
}

export interface FormValues {_requesterName: string;
  requesterEmail: string;
  projectOverview: string;
  timeline: string;
  budgetMin: number;
  budgetMax: number;}

export function useHireRequestForm(_{_talent, _onClose, _initialJobTitle, _userDetails}: UseHireRequestFormProps) {_const [isSubmitting, _setIsSubmitting] = useState(false);
  const { submitHireRequest} = useHireRequest();

  // Define the form schema with validation rules
  const _formSchema = z.object({_requesterName: z.string().min(2, _"Name is required"), _requesterEmail: z.string().email("Valid email is required"), _projectOverview: z.string().min(10, _"Please provide more details about your project"), _timeline: z.string().min(5, _"Please specify your timeline"), _budgetMin: z.number().min(1, _"Budget minimum is required"), _budgetMax: z.number().min(1, _"Budget maximum is required")}).refine(data => data.budgetMax >= data.budgetMin, {_message: "Maximum budget must be greater than or equal to minimum budget", _path: ["budgetMax"]});

  // Initialize the form
  const _form = useForm<FormValues>({_resolver: zodResolver(formSchema), _defaultValues: {
      requesterName: userDetails?.name || "", _requesterEmail: userDetails?.email || "", _projectOverview: initialJobTitle ? `Job: ${initialJobTitle}` : "",
      timeline: "",
      budgetMin: talent.hourly_rate || 25,
      budgetMax: talent.hourly_rate ? talent.hourly_rate * 1.5 : 50
    }
  });

  // Handle form submission
  const _onSubmit = async (_values: FormValues) => {_setIsSubmitting(true);
    try {
      const _requestData = {
        talent: {
          id: talent.id || "", _full_name: talent.full_name, _professional_title: talent.professional_title},
        requester: {_name: values.requesterName, _email: values.requesterEmail, _id: userDetails?.id},
        project: {_overview: values.projectOverview, _timeline: values.timeline, _budgetMin: values.budgetMin, _budgetMax: values.budgetMax}
      };

      const _result = await submitHireRequest(requestData);
      if (result.success) {_onClose();}
    } catch (error) {} finally {_setIsSubmitting(false);}
  };

  return {_form, _isSubmitting, _onSubmit};
}
