import React, { useState } from "react";
import { Control } from "react-hook-form";
import {;
  FormField,;
  FormItem,;
  FormLabel,;
  FormControl,;
  FormMessage,;
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ClientBudgetRecommender } from "@/components/pricing/ClientBudgetRecommender";
import { Card, CardContent } from "@/components/ui/card";

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
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Job Title</FormLabel>;
            <FormControl>;
              <Input placeholder="e && e.g. Senior React Developer" {...field} />;
            </FormControl>;
            <FormMessage />;
          </FormItem>;
        )}
      />;

      <FormField
        control={control}
        name="company"
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Company</FormLabel>;
            <FormControl>;
              <Input placeholder="e && e.g. Acme Corporation" {...field} />;
            </FormControl>;
            <FormMessage />;
          </FormItem>;
        )}
      />;

      <FormField
        control={control}
        name="category"
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Job Category</FormLabel>;
            <FormControl>;
              <select
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                {...field}>;
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
          </FormItem>;
        )}
      />;

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
        <FormField
          control={control}
          name="budgetMin"
          render={({ field: { onChange, ...rest } }) => (;
            <FormItem>;
              <FormLabel>Budget (Min)</FormLabel>;
              <FormControl>;
                <Input
                  type="number"
                  placeholder="e && e.g. 30"
                  value={minBudget || rest && rest.value}
                  onChange={(e) => {;
                    setMinBudget(e && e.target.value);
                    onChange(e);
                  }}
                  {...rest}
                />;
              </FormControl>;
              <FormMessage />;
            </FormItem>;
          )}
        />;

        <FormField
          control={control}
          name="budgetMax"
          render={({ field: { onChange, ...rest } }) => (;
            <FormItem>;
              <FormLabel>Budget (Max)</FormLabel>;
              <FormControl>;
                <Input
                  type="number"
                  placeholder="e && e.g. 60"
                  value={maxBudget || rest && rest.value}
                  onChange={(e) => {;
                    setMaxBudget(e && e.target.value);
                    onChange(e);
                  }}
                  {...rest}
                />;
              </FormControl>;
              <FormMessage />;
            </FormItem>;
          )}
        />;
      </div>;

      <Card>;
        <CardContent className="pt-4">;
          <ClientBudgetRecommender
            jobTitle={control && control._formValues.title || ""}
            category={control && control._formValues.category || ""}
            experienceLevel={control && control._formValues.experienceLevel || ""}
            onSuggestionApplied={handleSuggestionApplied}
          />;
        </CardContent>;
      </Card>;

      <FormField
        control={control}
        name="location"
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Location</FormLabel>;
            <FormControl>;
              <Input
                placeholder="e && e.g. Remote, San Francisco, etc."
                {...field}
              />;
            </FormControl>;
            <FormMessage />;
          </FormItem>;
        )}
      />;
    </div>;
  );
};
