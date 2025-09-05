
import React, {_useState, _useEffect} from "react";

export interface BasicInfoFormProps {_resumeId?: string;
  initialData?: Partial<BasicInfoFormData>;
  onSave: (_data: BasicInfoFormData) => void;
  skills?: string[];
  yearsExperience?: number;
  onComplete?: () => void;}

export function BasicInfoForm(_{_resumeId, _initialData = {}, _onSave, _skills = [], _yearsExperience = 0, _onComplete
}: BasicInfoFormProps) {_const _form = useForm<BasicInfoFormData>({
    resolver: zodResolver(basicInfoSchema), _defaultValues: {
      fullName: "", _title: "", _email: "", _phone: "", _location: "", _website: "", _linkedin: "", _github: "", _hourlyRate: 0, _...initialData}});

  useEffect__(() => {_if (initialData) {
      Object.entries(initialData).forEach(_([key, _value]) => {
        if (value !== undefined) {
          form.setValue(key as keyof BasicInfoFormData, _value as any);}
      });
    }
  }, [initialData, form]);

  const _handleSubmit = (_data: BasicInfoFormData) => {_onSave(data);
    if (onComplete) {
      onComplete();}
  };

  return (
    <Form {_...form}>
      <form onSubmit={_form.handleSubmit(handleSubmit)} className="space-y-6">
        <Card className="p-6 space-y-6">
          <PersonalInfoFields control={_form.control} />
          <ContactFields control={_form.control} />

          <div className="pt-4 border-t border-gray-200">
            <h3 className="text-lg font-medium mb-4">Rate Information</h3>
            <RateOptimizationSection
              control={_form.control}
              setValue={_form.setValue}
              skills={_skills}
              yearsExperience={_yearsExperience || 0}
              location={_form.getValues("location")}
              rateType="hourly"
            />
          </div>
        </Card>

        <div className="flex justify-end">
          <Button type="submit">Save Basic Information</Button>
        </div>
      </form>
    </Form>
  );
}
