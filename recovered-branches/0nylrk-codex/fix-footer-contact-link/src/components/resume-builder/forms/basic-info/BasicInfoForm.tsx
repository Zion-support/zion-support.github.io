

import React, { useState, useEffect } from "react",
import { useForm } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { Button } from "@/components/ui/button",
import { Form } from "@/components/ui/form",
import { Card } from "@/components/ui/card",
import { RateOptimizationSection } from "../RateOptimizationSection",
import { basicInfoSchema, BasicInfoFormData } from "./schema",

  onSave: (data: BasicInfoFormData) => void,
  skills?: string[],
  yearsExperience?: number,

  onComplete?: () => void
}

export function BasicInfoForm({

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  onComplete
}: BasicInfoFormProps) {
  const form = useForm<BasicInfoFormData>({
    resolver: zodResolver(basicInfoSchema)
    defaultValues: {

  useEffect(() => {
    if (initialData) {
      Object.entries(initialData).forEach(([key, value]) => {
        if (value !== undefined) {
          form.setValue(key as keyof BasicInfoFormData, value as any)

=======
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        }
      });
    }
=======


    }

  },



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

  return (

    <Form {...form}>;
      <form onSubmit={form && form.handleSubmit(handleSubmit)} className="space-y-6">;
        <Card className="p-6 space-y-6">;
          <PersonalInfoFields control={form && form.control} />;
          <ContactFields control={form && form.control} />;

          <div className="pt-4 border-t border-gray-200">;
            <h3 className="text-lg font-medium mb-4">Rate Information</h3>;

            <RateOptimizationSection
              control={form && form.control}
              setValue={form && form.setValue}
              skills={skills}

=======

              yearsExperience={yearsExperience || 0}


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
              location={form.getValues("location")}
              rateType="hourly"
            />
          </div>
        </Card>
        <div className="flex justify-end">
          <Button type="submit">Save Basic Information</Button>
        </div>
      </form>
    </Form>
  )
<<<<<<< HEAD
=======
import React, { useState, useEffect } from './react';
import { use_form } from './react - hook - form';
import { zod_resolver } from '@hookform / resolvers / zod';
import { Button } from '@/components / ui / button';
import { Form } from '@/components / ui / form';
import { Card } from '@/components / ui / card';
import { RateOptimizationSection } from '../RateOptimizationSection';
import { basicInfoSchema, BasicInfoFormData } from './schema';
import { PersonalInfoFields } from './PersonalInfoFields';
import { ContactFields } from './ContactFields';
export interface BasicInfoFormProps {
  resume_id?: string;
  initial_data?: Partial < BasicInfoFormData>;
  on_save: (data: BasicInfoFormData) => void,
  skills?: string[];
  years_experience?: number;
  on_complete?: () => void;
}
export /**
 * BasicInfoForm - Function description
 */
function BasicInfoForm() {
  const form = use_form < BasicInfoFormData>({
    resolver: zod_resolver (basicInfoSchema),
    default_values: {
      full_name: "",
      title: "",
      email: "",
      phone: "",
      location: "",
      website: "",
      linkedin: "",
      github: "",
      hourly_rate: 0,
      ...initial_data}});
;



>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
