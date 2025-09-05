<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react",
import { Control } from "react-hook-form",
=======
import React, { useState } from &quot;react&quot;;
import { Control } from &quot;react-hook-form&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { 
  FormField,
  FormItem, 
  FormLabel, 
  FormControl, 
  FormMessage 
<<<<<<< HEAD
} from "@/components/ui/form",
import { Input } from "@/components/ui/input",
import { ClientBudgetRecommender } from "@/components/pricing/ClientBudgetRecommender",
import { Card, CardContent } from "@/components/ui/card",
=======
} from &quot;@/components/ui/form&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { ClientBudgetRecommender } from &quot;@/components/pricing/ClientBudgetRecommender&quot;;
import { Card, CardContent } from &quot;@/components/ui/card&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

interface BasicInfoFieldsProps {
  control: Control<any>
}

export const BasicInfoFields: React.FC<BasicInfoFieldsProps> = ({ control }) => {
<<<<<<< HEAD
  const [minBudget, setMinBudget] = useState<string>(""),
  const [maxBudget, setMaxBudget] = useState<string>(""),
=======
  const [minBudget, setMinBudget] = useState<string>("&quot;);
  const [maxBudget, setMaxBudget] = useState<string>("&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const handleSuggestionApplied = (min: number, max: number) => {
    setMinBudget(min.toString()),
    setMaxBudget(max.toString())
  },

  return (
    <div className=&quot;space-y-4&quot;>
      <FormField
        control={control}
        name=&quot;title&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel>Job Title</FormLabel>
            <FormControl>
              <Input placeholder=&quot;e.g. Senior React Developer&quot; {...field} />
=======
import React, {_useState} from "react";
import {_FormField, _FormItem, _FormLabel, _FormControl, _FormMessage} from "@/components/ui/form";

interface BasicInfoFieldsProps {_control: Control<any>;}

export const BasicInfoFields: React.FC<BasicInfoFieldsProps> = (_{_control}) => {_const [minBudget, _setMinBudget] = useState<string>("");
  const [maxBudget, _setMaxBudget] = useState<string>("");

  const _handleSuggestionApplied = (_min: number, _max: number) => {
    setMinBudget(min.toString());
    setMaxBudget(max.toString());};

  return (_<div className="space-y-4">
      <FormField
        control={_control}
        name="title"
        render={_({ field}) => (
          <FormItem>
            <FormLabel>Job Title</FormLabel>
            <FormControl>
              <Input placeholder="e.g. Senior React Developer" {_...field} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
<<<<<<< HEAD
        control={control}
        name=&quot;company&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel>Company</FormLabel>
            <FormControl>
              <Input placeholder=&quot;e.g. Acme Corporation&quot; {...field} />
=======
        control={_control}
        name="company"
        render={_(_{ field}) => (
          <FormItem>
            <FormLabel>Company</FormLabel>
            <FormControl>
              <Input placeholder="e.g. Acme Corporation" {_...field} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
<<<<<<< HEAD
        control={control}
        name=&quot;category&quot;
        render={({ field }) => (
=======
        control={_control}
        name="category"
        render={_(_{ field}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <FormItem>
            <FormLabel>Job Category</FormLabel>
            <FormControl>
              <select
<<<<<<< HEAD
                className=&quot;flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm&quot;
                {...field}
=======
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                {_...field}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <option value="&quot;>Select a category</option>
                <option value=&quot;development&quot;>Development</option>
                <option value=&quot;design&quot;>Design</option>
                <option value=&quot;marketing&quot;>Marketing</option>
                <option value=&quot;content&quot;>Content</option>
                <option value=&quot;data&quot;>Data</option>
                <option value=&quot;business&quot;>Business</option>
                <option value=&quot;other">Other</option>
              </select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
        <FormField
<<<<<<< HEAD
          control={control}
          name=&quot;budgetMin&quot;
          render={({ field: { onChange, ...rest } }) => (
=======
          control={_control}
          name="budgetMin"
          render={_(_{ field: { onChange, _...rest} }) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <FormItem>
              <FormLabel>Budget (Min)</FormLabel>
              <FormControl>
                <Input
<<<<<<< HEAD
                  type=&quot;number&quot;
                  placeholder=&quot;e.g. 30&quot;
                  value={minBudget || rest.value}
                  onChange={e => {
                    setMinBudget(e.target.value),
                    onChange(e)
                  }}
                  {...rest}
=======
                  type="number"
                  placeholder="e.g. 30"
                  value={_minBudget || rest.value}
                  onChange={_e => {
                    setMinBudget(e.target.value);
                    onChange(e);}}
                  {_...rest}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
<<<<<<< HEAD
          control={control}
          name=&quot;budgetMax&quot;
          render={({ field: { onChange, ...rest } }) => (
=======
          control={_control}
          name="budgetMax"
          render={_(_{ field: { onChange, _...rest} }) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <FormItem>
              <FormLabel>Budget (Max)</FormLabel>
              <FormControl>
                <Input
<<<<<<< HEAD
                  type=&quot;number&quot;
                  placeholder=&quot;e.g. 60"
                  value={maxBudget || rest.value}
                  onChange={e => {
                    setMaxBudget(e.target.value),
                    onChange(e)
                  }}
                  {...rest}
=======
                  type="number"
                  placeholder="e.g. 60"
                  value={_maxBudget || rest.value}
                  onChange={_e => {
                    setMaxBudget(e.target.value);
                    onChange(e);}}
                  {_...rest}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      
      <Card>
        <CardContent className="pt-4&quot;>
          <ClientBudgetRecommender
<<<<<<< HEAD
            jobTitle={control._formValues.title || "&quot;}
            category={control._formValues.category || "&quot;}
            experienceLevel={control._formValues.experienceLevel || "&quot;}
            onSuggestionApplied={handleSuggestionApplied}
=======
            jobTitle={_control._formValues.title || ""}
            category={_control._formValues.category || ""}
            experienceLevel={_control._formValues.experienceLevel || ""}
            onSuggestionApplied={_handleSuggestionApplied}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          />
        </CardContent>
      </Card>

      <FormField
<<<<<<< HEAD
        control={control}
        name=&quot;location&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel>Location</FormLabel>
            <FormControl>
              <Input placeholder=&quot;e.g. Remote, San Francisco, etc.&quot; {...field} />
=======
        control={_control}
        name="location"
        render={_(_{ field}) => (
          <FormItem>
            <FormLabel>Location</FormLabel>
            <FormControl>
              <Input placeholder="e.g. Remote, San Francisco, etc." {_...field} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
},
