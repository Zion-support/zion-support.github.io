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
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={_control}
        name="company"
        render={_(_{ field}) => (
          <FormItem>
            <FormLabel>Company</FormLabel>
            <FormControl>
              <Input placeholder="e.g. Acme Corporation" {_...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={_control}
        name="category"
        render={_(_{ field}) => (
          <FormItem>
            <FormLabel>Job Category</FormLabel>
            <FormControl>
              <select
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                {_...field}
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
          control={_control}
          name="budgetMin"
          render={_(_{ field: { onChange, _...rest} }) => (
            <FormItem>
              <FormLabel>Budget (Min)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="e.g. 30"
                  value={_minBudget || rest.value}
                  onChange={_e => {
                    setMinBudget(e.target.value);
                    onChange(e);}}
                  {_...rest}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={_control}
          name="budgetMax"
          render={_(_{ field: { onChange, _...rest} }) => (
            <FormItem>
              <FormLabel>Budget (Max)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="e.g. 60"
                  value={_maxBudget || rest.value}
                  onChange={_e => {
                    setMaxBudget(e.target.value);
                    onChange(e);}}
                  {_...rest}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      
      <Card>
        <CardContent className="pt-4">
          <ClientBudgetRecommender
            jobTitle={_control._formValues.title || ""}
            category={_control._formValues.category || ""}
            experienceLevel={_control._formValues.experienceLevel || ""}
            onSuggestionApplied={_handleSuggestionApplied}
          />
        </CardContent>
      </Card>

      <FormField
        control={_control}
        name="location"
        render={_(_{ field}) => (
          <FormItem>
            <FormLabel>Location</FormLabel>
            <FormControl>
              <Input placeholder="e.g. Remote, San Francisco, etc." {_...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
