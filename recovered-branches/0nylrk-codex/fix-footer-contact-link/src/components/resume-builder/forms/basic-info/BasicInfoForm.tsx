
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect } from "react",
import { useForm } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { Button } from "@/components/ui/button",
import { Form } from "@/components/ui/form",
import { Card } from "@/components/ui/card",
import { RateOptimizationSection } from "../RateOptimizationSection",
import { basicInfoSchema, BasicInfoFormData } from "./schema",
import { PersonalInfoFields } from "./PersonalInfoFields",
import { ContactFields } from "./ContactFields",
=======
import React, { useState, useEffect } from &quot;react&quot;;
import { useForm } from &quot;react-hook-form&quot;;
import { zodResolver } from &quot;@hookform/resolvers/zod&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Form } from &quot;@/components/ui/form&quot;;
import { Card } from &quot;@/components/ui/card&quot;;
import { RateOptimizationSection } from &quot;../RateOptimizationSection&quot;;
import { basicInfoSchema, BasicInfoFormData } from &quot;./schema&quot;;
import { PersonalInfoFields } from &quot;./PersonalInfoFields&quot;;
import { ContactFields } from &quot;./ContactFields&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export interface BasicInfoFormProps {
  resumeId?: string,
  initialData?: Partial<BasicInfoFormData>,
  onSave: (data: BasicInfoFormData) => void,
  skills?: string[],
  yearsExperience?: number,
  onComplete?: () => void
}

export function BasicInfoForm({
  resumeId,
  initialData = {},
  onSave,
  skills = [],
  yearsExperience = 0,
  onComplete
}: BasicInfoFormProps) {
  const form = useForm<BasicInfoFormData>({
    resolver: zodResolver(basicInfoSchema),
    defaultValues: {
      fullName: "&quot;,
      title: "&quot;,
      email: "&quot;,
      phone: "&quot;,
      location: "&quot;,
      website: "&quot;,
      linkedin: "&quot;,
      github: "&quot;,
      hourlyRate: 0,
      ...initialData}}),

  useEffect(() => {
    if (initialData) {
      Object.entries(initialData).forEach(([key, value]) => {
        if (value !== undefined) {
          form.setValue(key as keyof BasicInfoFormData, value as any)
=======
import React, { useState, useEffect } from "react",;
import { useForm } from "react-hook-form",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { Button } from "@/components/ui/button",;
import { Form } from "@/components/ui/form",;
import { Card } from "@/components/ui/card",;
import { RateOptimizationSection } from "../RateOptimizationSection",;
import { basicInfoSchema, BasicInfoFormData } from "./schema",;
import { PersonalInfoFields } from "./PersonalInfoFields",;
import { ContactFields } from "./ContactFields",;
export interface BasicInfoFormProps {;
  resumeId?: string,;
  initialData?: Partial<BasicInfoFormData>,;
  onSave: (data: BasicInfoFormData) => void,;
  skills?: string[],;
  yearsExperience?: number,;
  onComplete?: () => void;
}
;
export function BasicInfoForm({;
  resumeId,;
  initialData = {},;
  onSave,;
  skills = [],;
  yearsExperience = 0,;
  onComplete;
}: BasicInfoFormProps) {;
  const form = useForm<BasicInfoFormData>({;
    resolver: zodResolver(basicInfoSchema),;
    defaultValues: {;
      fullName: "",;
      title: "",;
      email: "",;
      phone: "",;
      location: "",;
      website: "",;
      linkedin: "",;
      github: "",;
      hourlyRate: 0,;
      ...initialData}}),;
  useEffect(() => {;
    if (initialData) {;
      Object.entries(initialData).forEach(([key, value]) => {;
        if (value !== undefined) {;
          form.setValue(key as keyof BasicInfoFormData, value as any);
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        }
      });
    }
  }, [initialData, form]),;
  const handleSubmit = (data: BasicInfoFormData) => {;
    onSave(data);
    if (onComplete) {;
      onComplete();
    }
<<<<<<< HEAD
  },

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className=&quot;space-y-6&quot;>
        <Card className=&quot;p-6 space-y-6&quot;>
          <PersonalInfoFields control={form.control} />
          <ContactFields control={form.control} />

          <div className=&quot;pt-4 border-t border-gray-200&quot;>
            <h3 className=&quot;text-lg font-medium mb-4&quot;>Rate Information</h3>
            <RateOptimizationSection
=======
  };
  return (;
    <Form {...form}>;
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">;
        <Card className="p-6 space-y-6">;
          <PersonalInfoFields control={form.control} />;
          <ContactFields control={form.control} />;
          <div className="pt-4 border-t border-gray-200">;
            <h3 className="text-lg font-medium mb-4">Rate Information</h3>;
            <RateOptimizationSection;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
              control={form.control}
              setValue={form.setValue}
              skills={skills}
              yearsExperience={yearsExperience || 0}
<<<<<<< HEAD
              location={form.getValues(&quot;location&quot;)}
              rateType=&quot;hourly&quot;
            />
          </div>
        </Card>

        <div className=&quot;flex justify-end&quot;>
          <Button type=&quot;submit&quot;>Save Basic Information</Button>
        </div>
      </form>
    </Form>
  )
=======
              location={form.getValues("location")}
              rateType="hourly";
            />;
          </div>;
        </Card>;
        <div className="flex justify-end">;
          <Button type="submit">Save Basic Information</Button>;
        </div>;
      </form>;
    </Form>;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;