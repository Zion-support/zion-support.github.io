


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface UseHireRequestFormProps {
  talent: TalentProfile,
  onClose: () => void,
  initialJobTitle?: string,
  userDetails?: {



  budgetMin: number

  budgetMax: number
}
export function useHireRequestForm({ talent, onClose, initialJobTitle, userDetails }: UseHireRequestFormProps) {

  const [isSubmitting, setIsSubmitting] = useState(false),
  const { submitHireRequest } = useHireRequest(),


>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  // Define the form schema with validation rules

  const formSchema = z.object({

    requesterName: z.string().min(2, "Name is required"),
    requesterEmail: z.string().email("Valid email is required"),
    projectOverview: z.string().min(10, "Please provide more details about your project"),
    timeline: z.string().min(5, "Please specify your timeline"),
    budgetMin: z.number().min(1, "Budget minimum is required"),

    budgetMax: z.number().min(1, "Budget maximum is required")
  }).refine(data => data.budgetMax >= data.budgetMin, {
    message: "Maximum budget must be greater than or equal to minimum budget"
    path: ["budgetMax"]

  }),


  // Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {

      requesterName: userDetails?.name || "",
      requesterEmail: userDetails?.email || "",
      projectOverview: initialJobTitle ? `Job: ${initialJobTitle}` : "",
      timeline: "",
      budgetMin: talent.hourly_rate || 25,
      budgetMax: talent.hourly_rate ? talent.hourly_rate * 1.5 : 50
    }
  }),


  // Handle form submission
  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true),
    try {
      const requestData = {
        talent: {

          id: talent.id || "",
          full_name: talent.full_name,
          professional_title: talent.professional_title},
        requester: {
          name: values.requesterName,
          email: values.requesterEmail,
          id: userDetails?.id
        },
        project: {
          overview: values.projectOverview,
          timeline: values.timeline,
          budgetMin: values.budgetMin,
          budgetMax: values.budgetMax

      }
    } catch (error) {
      console.error("Error submitting hire request:", error)
    } finally {
      setIsSubmitting(false)


=======
    } catch (error) {;
      console.error("Error submitting hire request:", error);
    } finally {;
      setIsSubmitting(false);
    }
  },;
  return {;
    form;
    isSubmitting;
    onSubmit;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
