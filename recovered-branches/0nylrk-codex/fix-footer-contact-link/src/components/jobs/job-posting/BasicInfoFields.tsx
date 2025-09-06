<<<<<<< HEAD
import React, { useState } from "react";
import { Control } from "react-hook-form";

import {
<<<<<<< HEAD
  FormField
  FormItem
  FormLabel
  FormControl
  FormMessage
=======
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ClientBudgetRecommender } from "@/components/pricing/ClientBudgetRecommender";
import { Card, CardContent } from "@/components/ui/card";
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface BasicInfoFieldsProps {
  control: Control<any>
}
<<<<<<< HEAD
export const BasicInfoFields: React.FC<BasicInfoFieldsProps> = ({
  control
}) => {
  const [minBudget, setMinBudget] = useState<string>("");
  const [maxBudget, setMaxBudget] = useState<string>("");
  const handleSuggestionApplied = (min: number, max: number) => {
    (setMinBudget(min.toString()), setMaxBudget(max.toString()));
  }
=======

<<<<<<< HEAD
export const BasicInfoFields: React.FC<BasicInfoFieldsProps> = ({
  control,
}) => {;
  const [minBudget, setMinBudget] = useState<string>("");
  const [maxBudget, setMaxBudget] = useState<string>("");
=======
export const BasicInfoFields: React.FC<BasicInfoFieldsProps> = ({ control }) => {
  const [minBudget, setMinBudget] = useState<string>(""),
  const [maxBudget, setMaxBudget] = useState<string>(""),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

  const handleSuggestionApplied = (min: number, max: number) => {
    setMinBudget(min.toString()),
    setMaxBudget(max.toString())
  },

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
=======
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
interface BasicInfoFieldsProps {;
  control: Control<any>;
}
;
export const BasicInfoFields: React.FC<BasicInfoFieldsProps> = ({ control }) => {;
  const [minBudget, setMinBudget] = useState<string>(""),;
  const [maxBudget, setMaxBudget] = useState<string>(""),;
  const handleSuggestionApplied = (min: number, max: number) => {;
    setMinBudget(min.toString()),;
    setMaxBudget(max.toString());
  },;
  return (;
    <div className="space-y-4">;
      <FormField;
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
      />;
      <FormField;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
                  value={minBudget |rest.value}
                  onChange={(e) => {
                    setMinBudget(e.target.value);
=======
                  value={minBudget || rest.value}
                  onChange={e => {;
                    setMinBudget(e.target.value),;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
                  value={minBudget || rest.value}
<<<<<<< HEAD
                  onChange={(e) => {
                    setMinBudget(e.target.value);
=======
                  onChange={e => {;
                    setMinBudget(e.target.value),;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
                  value={maxBudget |rest.value}
                  onChange={(e) => {
=======
                  value={maxBudget || rest.value}
                  onChange={e => {;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
                  value={maxBudget || rest.value}
<<<<<<< HEAD
                  onChange={(e) => {
=======
                  onChange={e => {;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    setMaxBudget(e.target.value);
                    onChange(e);
                  }}
                  {...rest}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
      <Card>
        <CardContent className="pt-4">
          <ClientBudgetRecommender
            jobTitle={control._formValues.title |""}
            category={control._formValues.category |""}
            experienceLevel={control._formValues.experienceLevel |""}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
      
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
      <Card>
        <CardContent className="pt-4">
          <ClientBudgetRecommender
            jobTitle={control._formValues.title || ""}
            category={control._formValues.category || ""}
            experienceLevel={control._formValues.experienceLevel || ""}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
            onSuggestionApplied={handleSuggestionApplied}
          />
        </CardContent>
      </Card>
      <FormField
        control={control}
        name="location"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Location</FormLabel>
            <FormControl>
              <Input placeholder="e.g. Remote, San Francisco, etc." {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
<<<<<<< HEAD
      />
    </div>
<<<<<<< HEAD
  );
}

=======
);
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
      />;
    </div>;
  );
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
