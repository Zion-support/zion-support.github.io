
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
  resumeId?: string;
  initialData?: Partial<BasicInfoFormData>;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React, { useState, useEffect } from "react",
import { useForm } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { Button } from "@/components/ui/button",
import { Form } from "@/components/ui/form",
import { Card } from "@/components/ui/card",
import { RateOptimizationSection } from "../RateOptimizationSection",
import { basicInfoSchema, BasicInfoFormData } from "./schema",
<<<<<<< HEAD
import { PersonalInfoFields } from "./PersonalInfoFields";
import { ContactFields } from "./ContactFields";
export interface BasicInfoFormProps {
  resumeId?: string;

  initialData?: Partial<BasicInfoFormData>;
  onSave: (data: BasicInfoFormData) => void

  skills?: string[];
  yearsExperience?: number;
<<<<<<< HEAD
<<<<<<< HEAD
  onComplete?: () => void
}
=======
  onComplete?: () => void;
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function BasicInfoForm({
  resumeId;
=======
=======
import { PersonalInfoFields } from "./PersonalInfoFields",
import { ContactFields } from "./ContactFields",
export interface BasicInfoFormProps {
  resumeId?: string,
  initialData?: Partial<BasicInfoFormData>,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  onSave: (data: BasicInfoFormData) => void,
  skills?: string[],
  yearsExperience?: number,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  onComplete?: () => void
}
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
<<<<<<< HEAD
=======

<<<<<<< HEAD
export function BasicInfoForm({;
  resumeId;
  initialData = {};
  onSave;
  skills = [];
  yearsExperience = 0;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function BasicInfoForm({
<<<<<<< HEAD
  resumeId;

  initialData = {}
  onSave;
  skills = [];
  yearsExperience = 0;
=======
  resumeId,
  initialData = {},
  onSave,
  skills = [],
  yearsExperience = 0,
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  onComplete
}: BasicInfoFormProps) {
  const form = useForm<BasicInfoFormData>({
    resolver: zodResolver(basicInfoSchema)
    defaultValues: {
<<<<<<< HEAD
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
=======
      fullName: "",
      title: "",
      email: "",
      phone: "",
      location: "",
      website: "",
      linkedin: "",
      github: "",
      hourlyRate: 0,
      ...initialData}}),

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  useEffect(() => {
    if (initialData) {
      Object.entries(initialData).forEach(([key, value]) => {
        if (value !== undefined) {
          form.setValue(key as keyof BasicInfoFormData, value as any)
<<<<<<< HEAD
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        }
      })
    }
<<<<<<< HEAD
  }, [initialData, form]);
  const handleSubmit = (data: BasicInfoFormData) => {
    onSave(data)
    if (onComplete) {
      onComplete()
    }
<<<<<<< HEAD
  }
=======
  };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  }, [initialData, form]),;
  const handleSubmit = (data: BasicInfoFormData) => {;
    onSave(data);
    if (onComplete) {;
      onComplete();
    }
  },
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <Card className="p-6 space-y-6">
          <PersonalInfoFields control={form.control} />
          <ContactFields control={form.control} />
          <div className="pt-4 border-t border-gray-200">
            <h3 className="text-lg font-medium mb-4">Rate Information</h3>
            <RateOptimizationSection
              control={form.control}
              setValue={form.setValue}
              skills={skills}
<<<<<<< HEAD
              yearsExperience={yearsExperience |0}
=======
              yearsExperience={yearsExperience || 0}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
}
=======
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
