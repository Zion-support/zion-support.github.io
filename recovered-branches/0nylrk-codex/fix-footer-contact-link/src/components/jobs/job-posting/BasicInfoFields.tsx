import React, { useState } from &quot;react&quot;;
import { Control } from &quot;react-hook-form&quot;;
import { 
  FormField, 
  FormItem, 
  FormLabel, 
  FormControl, 
  FormMessage 
} from &quot;@/components/ui/form&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { ClientBudgetRecommender } from &quot;@/components/pricing/ClientBudgetRecommender&quot;;
import { Card, CardContent } from &quot;@/components/ui/card&quot;;

interface BasicInfoFieldsProps {
  control: Control<any>;
}

export const BasicInfoFields: React.FC<BasicInfoFieldsProps> = ({ control }) => {
  const [minBudget, setMinBudget] = useState<string>("&quot;);
  const [maxBudget, setMaxBudget] = useState<string>("&quot;);

  const handleSuggestionApplied = (min: number, max: number) => {
    setMinBudget(min.toString());
    setMaxBudget(max.toString());
  };

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
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name=&quot;company&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel>Company</FormLabel>
            <FormControl>
              <Input placeholder=&quot;e.g. Acme Corporation&quot; {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={control}
        name=&quot;category&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel>Job Category</FormLabel>
            <FormControl>
              <select
                className=&quot;flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm&quot;
                {...field}
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
          control={control}
          name=&quot;budgetMin&quot;
          render={({ field: { onChange, ...rest } }) => (
            <FormItem>
              <FormLabel>Budget (Min)</FormLabel>
              <FormControl>
                <Input
                  type=&quot;number&quot;
                  placeholder=&quot;e.g. 30&quot;
                  value={minBudget || rest.value}
                  onChange={e => {
                    setMinBudget(e.target.value);
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
          name=&quot;budgetMax&quot;
          render={({ field: { onChange, ...rest } }) => (
            <FormItem>
              <FormLabel>Budget (Max)</FormLabel>
              <FormControl>
                <Input
                  type=&quot;number&quot;
                  placeholder=&quot;e.g. 60"
                  value={maxBudget || rest.value}
                  onChange={e => {
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
      
      <Card>
        <CardContent className="pt-4&quot;>
          <ClientBudgetRecommender
            jobTitle={control._formValues.title || "&quot;}
            category={control._formValues.category || "&quot;}
            experienceLevel={control._formValues.experienceLevel || "&quot;}
            onSuggestionApplied={handleSuggestionApplied}
          />
        </CardContent>
      </Card>

      <FormField
        control={control}
        name=&quot;location&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel>Location</FormLabel>
            <FormControl>
              <Input placeholder=&quot;e.g. Remote, San Francisco, etc.&quot; {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
