<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/BasicInfoFields.tsx

<<<<<<< HEAD
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/BasicInfoFields.tsx
import {;
  FormField,;
  FormItem,;
  FormLabel,;
  FormControl,;
  FormMessage,;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/BasicInfoFields.tsx

=======

=======
import React, { useState } from "react";
import { Control } from "react-hook-form";

import {
  FormField
  FormItem
  FormLabel
  FormControl
  FormMessage
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,;
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/BasicInfoFields.tsx
=======
import React, { useState } from "react";
import { Control } from "react-hook-form";

import {
FormField
  FormItem
  FormLabel
  FormControl
  FormMessage
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ClientBudgetRecommender } from "@/components/pricing/ClientBudgetRecommender";
import { Card, CardContent } from "@/components/ui/card";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/BasicInfoFields.tsx

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/BasicInfoFields.tsx
import React, { useState } from './react';
import { Control  } from './react - hook - form';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components / ui / form';
import { Input  } from '@/components / ui / input';
import { ClientBudgetRecommender  } from '@/components / pricing / ClientBudgetRecommender';
import { Card, CardContent  } from '@/components / ui / card';
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/BasicInfoFields.tsx

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useState } from "react",
import { Control } from "react-hook-form",
import { 
  FormField,
  FormItem, 
  FormLabel, 
  FormControl, 
  FormMessage 
} from "@/components/ui/form",
import { Input } from "@/components/ui/input",
import { ClientBudgetRecommender } from "@/components/pricing/ClientBudgetRecommender",
import { Card, CardContent } from "@/components/ui/card",

<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
interface BasicInfoFieldsProps {
  control: Control < any>;
}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee


<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface BasicInfoFieldsProps {
  control: Control<any>
}
export const BasicInfoFields: React.FC<BasicInfoFieldsProps> = ({
  control
}) => {
  const [minBudget, setMinBudget] = useState<string>("");
  const [maxBudget, setMaxBudget] = useState<string>("");
  const handleSuggestionApplied = (min: number, max: number) => {
    (setMinBudget(min.toString()), setMaxBudget(max.toString()));
  }
<<<<<<< HEAD
=======

export const BasicInfoFields: React.FC<BasicInfoFieldsProps> = ({
  control,
}) => {;
  const [minBudget, setMinBudget] = useState<string>("");
  const [maxBudget, setMaxBudget] = useState<string>("");
export const BasicInfoFields: React.FC<BasicInfoFieldsProps> = ({ control }) => {
  const [minBudget, setMinBudget] = useState<string>(""),
  const [maxBudget, setMaxBudget] = useState<string>(""),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

  const handleSuggestionApplied = (min: number, max: number) => {
    setMinBudget(min.toString()),
    setMaxBudget(max.toString())
  },

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return (
    <div className="space-y-4">
      <FormField
        control={control}
        name="title"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Job Title</FormLabel>
            <FormControl>
              <Input placeholder="e.g. Senior React Developer" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useState } from "react",;
import { Control } from "react-hook-form",;
import {;
  FormField,;
  FormItem,;
  FormLabel,;
  FormControl,;
  FormMessage;
} from "@/components/ui/form",;
import { Input } from "@/components/ui/input",;
import { ClientBudgetRecommender } from "@/components/pricing/ClientBudgetRecommender",;
import { Card, CardContent } from "@/components/ui/card",;

========
interface BasicInfoFieldsProps {
  control: Control < any>;
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/BasicInfoFields.tsx
interface BasicInfoFieldsProps {;
  control: Control<any>;
}
export const BasicInfoFields: React.FC<BasicInfoFieldsProps> = ({;
  control,;
}) => {;
  const [minBudget, setMinBudget] = useState<string>("");
  const [maxBudget, setMaxBudget] = useState<string>("");
  const handleSuggestionApplied = (min: number, max: number) => {;
    (setMinBudget(min && min.toString()), setMaxBudget(max && max.toString()));
  };
  return (
    <div className="space-y-4">;
      <FormField
        control={control}
        name="title"
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/BasicInfoFields.tsx

        render={({ field }) => (
          <FormItem>
            <FormLabel>Job Title</FormLabel>
            <FormControl>
              <Input placeholder="e.g. Senior React Developer" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        )}

      />;


========
=======
import React, { useState } from "react",;
import { Control } from "react-hook-form",;
import { ;
  FormField,;
  FormItem, ;
  FormLabel, ;
  FormControl, ;
  FormMessage ;
} from "@/components/ui/form",;
import { Input } from "@/components/ui/input",;
import { ClientBudgetRecommender } from "@/components/pricing/ClientBudgetRecommender",;
import { Card, CardContent } from "@/components/ui/card",;
;
interface BasicInfoFieldsProps {;
  control:Control<any>;
}
;
export const BasicInfoFields:React.FC<BasicInfoFieldsProps> = ({ control }) => {;
  const [minBudget, setMinBudget] = useState<string>(""),;
  const [maxBudget, setMaxBudget] = useState<string>(""),;
;
  const handleSuggestionApplied = (min:number, max:number) => {;
    setMinBudget(min.toString()),;
    setMaxBudget(max.toString());
  },;
;
  return (;
    <div className="space-y-4">;
      <FormField;
        control={control}
        name="title";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Job Title</FormLabel>;
            <FormControl>;
<<<<<<< HEAD
              <Input placeholder="e && e.g. Senior React Developer" {...field} />;
=======
              <Input placeholder="e.g. Senior React Developer" {...field} />;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            </FormControl>;
            <FormMessage />;
          </FormItem>;
        )}
      />;
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/BasicInfoFields.tsx
      <FormField
        control={control}
        name="company"
=======
;
      <FormField;
        control={control}
        name="company";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Company</FormLabel>;
            <FormControl>;
<<<<<<< HEAD
              <Input placeholder="e && e.g. Acme Corporation" {...field} />;
=======
              <Input placeholder="e.g. Acme Corporation" {...field} />;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            </FormControl>;
            <FormMessage />;
          </FormItem>;
        )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/BasicInfoFields.tsx

<<<<<<< HEAD
=======
      />;


========
      />;
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/BasicInfoFields.tsx
      <FormField
=======

      />;
      <FormField;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        control={control}
        name="category"
=======
      ;
      <FormField;
        control={control}
        name="category";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Job Category</FormLabel>;
            <FormControl>;
<<<<<<< HEAD
              <select
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                {...field}>;
export const BasicInfoFields: React.FC < BasicInfoFieldsProps> = ({
  control,
}) => {
  const [min_budget, setMinBudget] = useState < string>("");
  const [max_budget, setMaxBudget] = useState < string>("");
;
  const handleSuggestionApplied = (min: number, max: number) =>: any {
    (setMinBudget (min.to_string ()), setMaxBudget (max.to_string ()));
  }
;
  return (
    <div className="space - y-4">;
      <FormField;
        control={control}
        name="title";
        render={({ field }) => (
          <FormItem>;
            <FormLabel > Job Title</FormLabel>;
            <FormControl>;
              <Input placeholder="e.g. Senior React Developer" {...field} />;
            </FormControl>;
            <FormMessage />;
          </FormItem>)}
      />;
      <FormField;
        control={control}
        name="company";
        render={({ field }) => (
          <FormItem>;
            <FormLabel > Company</FormLabel>;
            <FormControl>;
              <Input placeholder="e.g. Acme Corporation" {...field} />;
            </FormControl>;
            <FormMessage />;
          </FormItem>)}
      />;
      <FormField;
        control={control}
        name="category";
        render={({ field }) => (
          <FormItem>;
            <FormLabel > Job Category</FormLabel>;
            <FormControl>;
              <select;
                className="flex h - 10 w - full rounded - md border border - input bg - background px - 3 py - 2 text - base ring - offset - background placeholder:text - muted - foreground focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - ring focus - visible:ring - offset - 2 disabled:cursor - not - allowed disabled:opacity - 50 md:text - sm";
=======
              <select;
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                {...field}
              >;
                <option value="">Select a category</option>;
                <option value="development">Development</option>;
                <option value="design">Design</option>;
                <option value="marketing">Marketing</option>;
                <option value="content">Content</option>;
                <option value="data">Data</option>;
                <option value="business">Business</option>;
                <option value="other">Other</option>;
              </select>;
            </FormControl>;
            <FormMessage />;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/BasicInfoFields.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/BasicInfoFields.tsx
      />;
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/BasicInfoFields.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/BasicInfoFields.tsx
        <FormField
          control={control}
          name="budgetMin"
          render={({ field: { onChange, ...rest } }) => (;
            <FormItem>;
              <FormLabel>Budget (Min)</FormLabel>;
              <FormControl>;
                <Input
                  type="number"
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/BasicInfoFields.tsx
<<<<<<< HEAD
                  placeholder="e.g. 30"

                  value={minBudget || rest.value}

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/BasicInfoFields.tsx
                  placeholder="e && e.g. 30"
                  value={minBudget || rest && rest.value}
                  onChange={(e) => {;
                    setMinBudget(e && e.target.value);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/BasicInfoFields.tsx

=======

                  value={minBudget || rest.value}
                  onChange={e => {;
                    setMinBudget(e.target.value),;

=======
                  value={minBudget || rest.value}

                  onChange={e => {;
                    setMinBudget(e.target.value),;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/BasicInfoFields.tsx
                    onChange(e);
          </FormItem>)}
      />;
      <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
        <FormField;
          control={control}
          name="budget_min";
          render={({ field: { on_change, ...rest } }) => (
            <FormItem>;
              <FormLabel > Budget (Min)</FormLabel>;
              <FormControl>;
                <Input;
                  type="number";
                  placeholder="e.g. 30";
                  value={min_budget || rest.value}
                  on_change={(e) => {
                    setMinBudget (e.target.value);
                    on_change (e);
=======
          </FormItem>;
        )}
      />;
;
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
        <FormField;
          control={control}
          name="budgetMin";
          render={({ field:{ onChange, ...rest } }) => (;
            <FormItem>;
              <FormLabel>Budget (Min)</FormLabel>;
              <FormControl>;
                <Input;
                  type="number";
                  placeholder="e.g. 30";
                  value={minBudget || rest.value}
                  onChange={e => {;
                    setMinBudget(e.target.value),;
                    onChange(e),;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  }}
                  {...rest}
                />;
              </FormControl>;
              <FormMessage />;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/BasicInfoFields.tsx

        />;


========
<<<<<<< HEAD
        />;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/BasicInfoFields.tsx
        <FormField
          control={control}
          name="budgetMax"
          render={({ field: { onChange, ...rest } }) => (;
            <FormItem>;
              <FormLabel>Budget (Max)</FormLabel>;
              <FormControl>;
                <Input
                  type="number"
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/BasicInfoFields.tsx
<<<<<<< HEAD
                  placeholder="e.g. 60"

                  value={maxBudget || rest.value}

=======


                  value={maxBudget || rest.value}
                  onChange={e => {;

=======
                  value={maxBudget || rest.value}

                  onChange={e => {;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                    setMaxBudget(e.target.value);
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/BasicInfoFields.tsx
                  placeholder="e && e.g. 60"
                  value={maxBudget || rest && rest.value}
                  onChange={(e) => {;
                    setMaxBudget(e && e.target.value);
                    onChange(e);
            </FormItem>)}
        />;
        <FormField;
          control={control}
          name="budget_max";
          render={({ field: { on_change, ...rest } }) => (
            <FormItem>;
              <FormLabel > Budget (Max)</FormLabel>;
              <FormControl>;
                <Input;
                  type="number";
                  placeholder="e.g. 60";
                  value={max_budget || rest.value}
                  on_change={(e) => {
                    setMaxBudget (e.target.value);
                    on_change (e);
=======
            </FormItem>;
          )}
        />;
;
        <FormField;
          control={control}
          name="budgetMax";
          render={({ field:{ onChange, ...rest } }) => (;
            <FormItem>;
              <FormLabel>Budget (Max)</FormLabel>;
              <FormControl>;
                <Input;
                  type="number";
                  placeholder="e.g. 60";
                  value={maxBudget || rest.value}
                  onChange={e => {;
                    setMaxBudget(e.target.value),;
                    onChange(e),;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  }}
                  {...rest}
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        )}
      />
      <FormField
        control={control}
        name="company"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Company</FormLabel>
            <FormControl>
              <Input placeholder="e.g. Acme Corporation" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
<<<<<<< HEAD
/>
      <FormField

=======
      />
      <FormField
      />;
      <FormField;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        control={control}
        name="category"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Job Category</FormLabel>
            <FormControl>
              <select
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                {...field}
              >
                <option value="">Select a category</option>
                <option value="development">Development</option>
                <option value="design">Design</option>
                <option value="marketing">Marketing</option>
                <option value="content">Content</option>
                <option value="data">Data</option>
                <option value="business">Business</option>
                <option value="other">Other</option>
              </select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={control}
          name="budgetMin"
          render={({ field: { onChange, ...rest } }) => (
            <FormItem>
              <FormLabel>Budget (Min)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="e.g. 30"
<<<<<<< HEAD
value={minBudget |rest.value}
                  onChange={(e) => {
                    setMinBudget(e.target.value);
=======
                  value={minBudget |rest.value}
                  onChange={(e) => {
                    setMinBudget(e.target.value);
                  value={minBudget || rest.value}
                  onChange={e => {;
                    setMinBudget(e.target.value),;
                  value={minBudget || rest.value}
                  onChange={(e) => {
                    setMinBudget(e.target.value);
                  onChange={e => {;
                    setMinBudget(e.target.value),;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                    onChange(e);
                  }}
                  {...rest}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="budgetMax"
          render={({ field: { onChange, ...rest } }) => (
            <FormItem>
              <FormLabel>Budget (Max)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="e.g. 60"
<<<<<<< HEAD
value={maxBudget |rest.value}
                  onChange={(e) => {
=======
                  value={maxBudget |rest.value}
                  onChange={(e) => {
                  value={maxBudget || rest.value}
                  onChange={e => {;
                  value={maxBudget || rest.value}
                  onChange={(e) => {
                  onChange={e => {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                    setMaxBudget(e.target.value);
                    onChange(e);
                  }}
                  {...rest}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
                />;
              </FormControl>;
              <FormMessage />;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/BasicInfoFields.tsx



=======
      
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<Card>
=======
      <Card>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <CardContent className="pt-4">
          <ClientBudgetRecommender
            jobTitle={control._formValues.title |""}
            category={control._formValues.category |""}
            experienceLevel={control._formValues.experienceLevel |""}
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
      
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      <Card>
        <CardContent className="pt-4">
          <ClientBudgetRecommender
            jobTitle={control._formValues.title || ""}
            category={control._formValues.category || ""}
            experienceLevel={control._formValues.experienceLevel || ""}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            onSuggestionApplied={handleSuggestionApplied}
          />
        </CardContent>
      </Card>
<<<<<<< HEAD
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/BasicInfoFields.tsx
        />;
      </div>;
      <Card>;
        <CardContent className="pt-4">;
          <ClientBudgetRecommender
            jobTitle={control && control._formValues.title || ""}
            category={control && control._formValues.category || ""}
            experienceLevel={control && control._formValues.experienceLevel || ""}
=======
            </FormItem>;
          )}
        />;
      </div>;
      ;
      <Card>;
        <CardContent className="pt-4">;
          <ClientBudgetRecommender;
            jobTitle={control._formValues.title || ""}
            category={control._formValues.category || ""}
            experienceLevel={control._formValues.experienceLevel || ""}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            onSuggestionApplied={handleSuggestionApplied}
          />;
        </CardContent>;
      </Card>;
<<<<<<< HEAD
      <FormField
        control={control}
        name="location"
=======
;
      <FormField;
        control={control}
        name="location";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Location</FormLabel>;
            <FormControl>;
<<<<<<< HEAD
              <Input
                placeholder="e && e.g. Remote, San Francisco, etc."
            </FormItem>)}
        />;
      </div>;
      <Card>;
        <CardContent className="pt - 4">;
          <ClientBudgetRecommender;
            job_title={control._formValues.title || ""}
            category={control._formValues.category || ""}
            experience_level={control._formValues.experience_level || ""}
            onSuggestionApplied={handleSuggestionApplied}
          />;
        </CardContent>;
      </Card>;
      <FormField;
        control={control}
        name="location";
        render={({ field }) => (
<<<<<<< HEAD
=======
      <FormField
        control={control}
        name="location"
        render={({ field }) => (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <FormItem>
            <FormLabel>Location</FormLabel>
            <FormControl>
              <Input placeholder="e.g. Remote, San Francisco, etc." {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
<<<<<<< HEAD
<<<<<<< HEAD

=======
          <FormItem>;
            <FormLabel > Location</FormLabel>;
            <FormControl>;
              <Input;
                placeholder="e.g. Remote, San Francisco, etc.";
                {...field}
              />;
            </FormControl>;
            <FormMessage />;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/BasicInfoFields.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/BasicInfoFields.tsx
          </FormItem>)}
      />;
    </div>);
}
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/BasicInfoFields.tsx

=======

);

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      />;
    </div>;
  );

<<<<<<< HEAD
};

=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
              <Input placeholder="e.g. Remote, San Francisco, etc." {...field} />;
            </FormControl>;
            <FormMessage />;
          </FormItem>;
        )}
      />;
    </div>;
  ),;
},; import {
  FormField;
FormItem;
FormLabel;
FormControl;
FormMessage interface BasicInfoFieldsProps {
  control: Control<any> 
}export const BasicInfoFields: React.FC<BasicInfoFieldsProps> = ({
  control 
}) => {
  const handleSuggestionApplied = (min: number, max: number) => {
  setMinBudget (min.toString () );
setMaxBudget (max.toString () ) 
};
return (<div className="space-y-4" > <FormField control= {
  control 
}name="title" render= {
  ({
  field 
}) => (<FormItem> <FormLabel>Job Title</FormLabel> <FormControl> <Input placeholder="e.g. Senior React Developer" {
  ...field 
}/> 
}/> <FormField </FormControl> <FormMessage /> </FormItem>) 
}/> <FormField <FormItem> <FormLabel>Job Category</FormLabel> <FormControl> <select > <option value="">Select a category</option> <option value=" development">Development</option> <option value=" design">Design</option> <option value=" marketing">Marketing</option> <option value=" content">Content</option> <option value=" data">Data</option> <option value=" business">Business</option> <option value=" other">Other</option> </select> </FormControl> <FormMessage /> </FormItem>) 
}/> <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> <FormField <FormItem> <FormLabel>Budget (Min) </FormLabel> <FormControl> <Input /> </FormControl> <FormMessage /> </FormItem>) 
}/> <FormField <FormItem> <FormLabel>Budget (Max) </FormLabel> <FormControl> <Input /> </FormControl> <FormMessage /> </FormItem>) 
}/> </div> <Card> <CardContent className="pt-4" > <ClientBudgetRecommender /> </CardContent> </Card> <FormField </FormControl> <FormMessage /> </FormItem>) 
}/> </div>) 
};
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/BasicInfoFields.tsx
=======
/>
    </div>

  );
}

  );

};

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
      />
    </div>
  );
}

);
      />;
    </div>;
  );
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
