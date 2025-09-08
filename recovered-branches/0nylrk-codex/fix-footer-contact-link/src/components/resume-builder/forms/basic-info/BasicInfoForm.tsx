
  resumeId?: string;

  initialData?: Partial<BasicInfoFormData>;
  onSave: (data: BasicInfoFormData) => void

  skills?: string[];
  yearsExperience?: number;
import { PersonalInfoFields } from "./PersonalInfoFields",
import { ContactFields } from "./ContactFields",
export interface BasicInfoFormProps {
  skills?: string[],
  yearsExperience?: number,
  onComplete?: () => void
}


export function BasicInfoForm({;
  resumeId;
  initialData = {};
  onSave;
  skills = [];
  yearsExperience = 0;
export function BasicInfoForm({







  useEffect(() => {
    if (initialData) {
      Object.entries(initialData).forEach(([key, value]) => {
        if (value !== undefined) {
          form.setValue(key as keyof BasicInfoFormData, value as any)



export function BasicInfoForm({;
  resumeId,;
  initialData = {},;
  onSave,;
  skills = [],;
  yearsExperience = 0,;



            <h3 className="text-lg font-medium mb-4">Rate Information</h3>;




      onComplete()
    }
  },


        }
      });
    }

  }, [initialData, form]),;

        </Card>"
        <div className="flex justify-end">"

  },;
;
  return (;
    <Form {...form}>;
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">;
        <Card className="p-6 space-y-6">;
          <PersonalInfoFields control={form.control} />;
          <ContactFields control={form.control} />;
;
          <div className="pt-4 border-t border-gray-200">;
            <h3 className="text-lg font-medium mb-4">Rate Information</h3>;
            <RateOptimizationSection;
              control={form.control}
              setValue={form.setValue}
              skills={skills}
              yearsExperience={yearsExperience || 0}
              location={form.getValues("location")}
              rateType="hourly";
            />;
          </div>;
        </Card>;
;
        <div className="flex justify-end">;


}

function BasicInfoForm() {}
  const form = use_form < BasicInfoFormData>({}
    resolver: zod_resolver (basicInfoSchema),
    default_values: {"
      full_name: "","
      title: "","
      email: "","
      phone: "","
      location: "","
      website: "","
      linkedin: "","
      github: "",
      hourly_rate: 0,
      ...initial_data}});

;


