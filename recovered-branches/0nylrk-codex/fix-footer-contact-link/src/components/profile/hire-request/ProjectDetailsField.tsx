<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/hire-request/ProjectDetailsField.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/hire-request/ProjectDetailsField.tsx
import React from './react';
import { UseFormReturn  } from './react - hook - form';
=======
import React from "react";

import { UseFormReturn } from "react-hook-form";
import {
  FormField
  FormItem
  FormLabel
  FormControl
  FormMessage
} from "@/components/ui/form";

import { Textarea } from "@/components/ui/textarea";
import { FormValues } from "./useHireRequestForm";
interface ProjectDetailsFieldProps {
  form: UseFormReturn<FormValues>;

import React from "react";
import { UseFormReturn } from "react-hook-form";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
<<<<<<< HEAD
} from '@/components / ui / form';
import { Textarea  } from '@/components / ui / textarea';
import { FormValues  } from './useHireRequestForm';
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/hire-request/ProjectDetailsField.tsx

interface ProjectDetailsFieldProps {
  form: UseFormReturn < FormValues>;
}

=======



========
interface ProjectDetailsFieldProps {
  form: UseFormReturn < FormValues>;
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/hire-request/ProjectDetailsField.tsx
import {UseFormReturn} from "react-hook-form";
import {FormField, FormItem, FormLabel, FormControl, FormMessage} from "@/components/ui/form";
import {Textarea} from "@/components/ui/textarea";
import {FormValues} from "./useHireRequestForm";

interface ProjectDetailsFieldProps {
  form: UseFormReturn<FormValues>

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import React from "react",
import { UseFormReturn } from "react-hook-form",
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",
import { Textarea } from "@/components/ui/textarea",
import { FormValues } from "./useHireRequestForm",
interface ProjectDetailsFieldProps {
  form: UseFormReturn<FormValues>
import React from "react",;
import { UseFormReturn } from "react-hook-form",;
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",;
import { Textarea } from "@/components/ui/textarea",;

=======
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { FormValues } from "./useHireRequestForm";
interface ProjectDetailsFieldProps {
  form: UseFormReturn<FormValues>;

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}
export function ProjectDetailsField(): any ({ form }: ProjectDetailsFieldProps) {;
  return (
    <FormField
      control={form && form.control}
      name="projectOverview"
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/hire-request/ProjectDetailsField.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/hire-request/ProjectDetailsField.tsx
export /**
 * ProjectDetailsField - Function description
 */
function ProjectDetailsField() {
  return (
    <FormField;
      control={form.control}
      name="project_overview";
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/hire-request/ProjectDetailsField.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/hire-request/ProjectDetailsField.tsx
      render={({ field }) => (
        <FormItem>;
          <FormLabel className="text - white">Project Overview</FormLabel>;
          <FormControl>;
            <Textarea;
              placeholder="Describe your project, goals, and requirements";
              className="bg - zion - blue border - zion - blue - light text - white min - h-[120px]";
              {...field}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/hire-request/ProjectDetailsField.tsx

========
=======

import React from "react",;
import { UseFormReturn } from "react-hook-form",;
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",;
import { Textarea } from "@/components/ui/textarea",;
import { FormValues } from "./useHireRequestForm",;
;
interface ProjectDetailsFieldProps {;
  form:UseFormReturn<FormValues>;
}
;
export function ProjectDetailsField({ form } ProjectDetailsFieldProps) {;
  return (;
    <FormField;
      control={form.control}
      name="projectOverview";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/hire-request/ProjectDetailsField.tsx
      render={({ field }) => (;
        <FormItem>;
          <FormLabel className="text-white">Project Overview</FormLabel>;
          <FormControl>;
<<<<<<< HEAD
            <Textarea
              placeholder="Describe your project, goals, and requirements" 
              className="bg-zion-blue border-zion-blue-light text-white min-h-[120px]"
              {...field} 
=======
            <Textarea ;
              placeholder="Describe your project, goals, and requirements" ;
              className="bg-zion-blue border-zion-blue-light text-white min-h-[120px]";
              {...field} ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            />;
          </FormControl>;
          <FormMessage className="text-red-400" />;
        </FormItem>;
      )}
<<<<<<< HEAD
    />

=======
    />;
<<<<<<< HEAD
  );
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/hire-request/ProjectDetailsField.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/hire-request/ProjectDetailsField.tsx
            />;
          </FormControl>;
          <FormMessage className="text - red - 400" />;
        </FormItem>)}
    />);
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/hire-request/ProjectDetailsField.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  )
}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
  ),;}
 interface ProjectDetailsFieldProps {
  form: UseFormReturn<FormValues> 
}form 
}: ProjectDetailsFieldProps) {
  return (<FormField control= {
  form.control 
}<FormItem> <FormLabel className="text-white" >Project Overview</FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) 
}/>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/hire-request/ProjectDetailsField.tsx
=======
}
export function ProjectDetailsField({ form }: ProjectDetailsFieldProps) {
  return (
    <FormField
      control={form.control}
      name="projectOverview"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-white">Project Overview</FormLabel>
          <FormControl>
            <Textarea
              placeholder="Describe your project, goals, and requirements"
              className="bg-zion-blue border-zion-blue-light text-white min-h-[120px]"
              {...field}
            />
          </FormControl>
          <FormMessage className="text-red-400" />
        </FormItem>
      )}
    />

  );
}
}
;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
