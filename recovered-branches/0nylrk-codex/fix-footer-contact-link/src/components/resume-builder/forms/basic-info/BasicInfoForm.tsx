
<<<<<<< HEAD
import React, { useState, useEffect } from "react",
import { useForm } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { Button } from "@/components/ui/button",
import { Form } from "@/components/ui/form",
import { Card } from "@/components/ui/card",
import { RateOptimizationSection } from "../RateOptimizationSection",
import { basicInfoSchema, BasicInfoFormData } from "./schema",
import { PersonalInfoFields } from "./PersonalInfoFields";
import { ContactFields } from "./ContactFields";
export interface BasicInfoFormProps {
=======
import React, { useState, useEffect } from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@/components/ui/button";
import {Form} from "@/components/ui/form";
import {Card} from "@/components/ui/card";
import {RateOptimizationSection} from "../RateOptimizationSection";
import {basicInfoSchema, BasicInfoFormData} from "./schema";
import {PersonalInfoFields} from "./PersonalInfoFields";
import {ContactFields} from "./ContactFields";
export interface BasicInfoFormProps {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  resumeId?: string;

  initialData?: Partial<BasicInfoFormData>;
<<<<<<< HEAD
  onSave: (data: BasicInfoFormData) => void

=======
  onSave: (data: BasicInfoFormData) => void,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  skills?: string[];
  yearsExperience?: number;
  onComplete?: () => void;
}
<<<<<<< HEAD
export function BasicInfoForm({
=======

export function BasicInfoForm(): any ({;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  resumeId;

  initialData = {}
  onSave;
  skills = [];
  yearsExperience = 0;
<<<<<<< HEAD
  onComplete
}: BasicInfoFormProps) {
  const form = useForm<BasicInfoFormData>({
    resolver: zodResolver(basicInfoSchema)
    defaultValues: {
      fullName: ""
      title: ""
      email: ""
      phone: ""
      location: ""
      website: ""
      linkedin: ""
      github: ""
      hourlyRate: 0
      ...initialData}});
  useEffect(() => {
    if (initialData) {
      Object.entries(initialData).forEach(([key, value]) => {
        if (value !== undefined) {
          form.setValue(key as keyof BasicInfoFormData, value as any)
=======
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
      ...initialData}});

  useEffect(() => {;
    if (initialData) {;
      Object && Object.entries(initialData).forEach(([key, value]) => {;
        if (value !== undefined) {;
          form && form.setValue(key as keyof BasicInfoFormData, value as any);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        }
      });
    }
  }, [initialData, form]);
<<<<<<< HEAD
  const handleSubmit = (data: BasicInfoFormData) => {
    onSave(data)
    if (onComplete) {
      onComplete()
=======

  const handleSubmit = (data: BasicInfoFormData) => {;
    onSave(data),;
    if (onComplete) {;
      onComplete();
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
  }

  return (
<<<<<<< HEAD
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <Card className="p-6 space-y-6">
          <PersonalInfoFields control={form.control} />
          <ContactFields control={form.control} />
          <div className="pt-4 border-t border-gray-200">
            <h3 className="text-lg font-medium mb-4">Rate Information</h3>
=======
    <Form {...form}>;
      <form onSubmit={form && form.handleSubmit(handleSubmit)} className="space-y-6">;
        <Card className="p-6 space-y-6">;
          <PersonalInfoFields control={form && form.control} />;
          <ContactFields control={form && form.control} />;

          <div className="pt-4 border-t border-gray-200">;
            <h3 className="text-lg font-medium mb-4">Rate Information</h3>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            <RateOptimizationSection
              control={form && form.control}
              setValue={form && form.setValue}
              skills={skills}
<<<<<<< HEAD
              yearsExperience={yearsExperience |0}
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
}
=======
              yearsExperience={yearsExperience || 0}
              location={form && form.getValues("location")}
              rateType="hourly"
            />;
          </div>;
        </Card>;

        <div className="flex justify-end">;
          <Button type="submit">Save Basic Information</Button>;
        </div>;
      </form>;
    </Form>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
