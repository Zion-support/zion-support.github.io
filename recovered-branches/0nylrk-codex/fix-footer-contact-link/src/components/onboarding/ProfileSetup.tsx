
import {_Form, _FormControl, _FormField, _FormItem, _FormLabel, _FormMessage} from "@/components/ui/form";

const _profileSchema = z.object({_displayName: z.string().min(2, _"Name must be at least 2 characters"), _bio: z.string().min(10, _"Bio must be at least 10 characters").max(500, _"Bio must be less than 500 characters"), _headline: z.string().min(5, _"Headline must be at least 5 characters").max(100, _"Headline must be less than 100 characters")});

type ProfileFormValues = z.infer<typeof profileSchema>;

interface ProfileSetupProps {_onComplete: (_data: ProfileFormValues) => void;
  userType: string;}

export function ProfileSetup(_{_onComplete, _userType}: ProfileSetupProps) {_const _form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema), _defaultValues: {
      displayName: "", _bio: "", _headline: ""}});

  const _getTypeLabel = () => {_switch (userType) {
      case "serviceProvider":
        return "Service Provider";
      case "talent":
        return "Talent";
      case "client":
        return "Client";
      default:
        return "User";}
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white">Create Your {_getTypeLabel()} Profile</h3>
        <p className="text-zion-slate-light mt-2">
          Help others get to know you better
        </p>
      </div>
      
      <Form {_...form}>
        <form onSubmit={_form.handleSubmit(onComplete)} className="space-y-6">
          <FormField
            control={_form.control}
            name="displayName"
            render={_(_{ field}) => (
              <FormItem>
                <FormLabel className="text-zion-slate-light">Full Name</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="Your full name"
                      className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
                      {_...field}
                    />
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                  </div>
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />
          
          <FormField
            control={_form.control}
            name="headline"
            render={_(_{ field}) => (
              <FormItem>
                <FormLabel className="text-zion-slate-light">Professional Headline</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder={_`e.g., _${
                        userType === "serviceProvider" ? "Professional Videographer with 5+ years experience" :
                        userType === "talent" ? "Senior Motion Designer specialized in 3D Animation" :
                        "Creative Director at XYZ Studios"}`}
                      className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
                      {_...field}
                    />
                    <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                  </div>
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />
          
          <FormField
            control={_form.control}
            name="bio"
            render={_(_{ field}) => (
              <FormItem>
                <FormLabel className="text-zion-slate-light">Bio</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={_`Tell us about your ${
                      userType === "serviceProvider" ? "services and expertise" :
                      userType === "talent" ? "skills and experience" :
                      "business and needs"}`}
                    className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px]"
                    {_...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />
          
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
          >
            Complete Profile
          </Button>
        </form>
      </Form>
    </div>
  );
}
