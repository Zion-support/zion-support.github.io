<<<<<<< HEAD

import {;
  FormField,;
  FormItem,;
  FormLabel,;
  FormControl,;
  FormMessage,;

=======

  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

import React, { useState } from "react";
import { Control } from "react-hook-form";

import {
  FormField
  FormItem
  FormLabel
  FormControl
  FormMessage
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,;
import React, { useState } from "react";
import { Control } from "react-hook-form";

import {
FormField
  FormItem
  FormLabel
  FormControl
  FormMessage
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ClientBudgetRecommender } from "@/components/pricing/ClientBudgetRecommender";
import { Card, CardContent } from "@/components/ui/card";
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

=======
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
interface BasicInfoFieldsProps {
  control: Control < any>;
}




<<<<<<< HEAD
=======

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

export const BasicInfoFields: React.FC<BasicInfoFieldsProps> = ({
  control,
}) => {;
  const [minBudget, setMinBudget] = useState<string>("");
  const [maxBudget, setMaxBudget] = useState<string>("");
export const BasicInfoFields: React.FC<BasicInfoFieldsProps> = ({ control }) => {
  const [minBudget, setMinBudget] = useState<string>(""),
  const [maxBudget, setMaxBudget] = useState<string>(""),

  const handleSuggestionApplied = (min: number, max: number) => {
    setMinBudget(min.toString()),
    setMaxBudget(max.toString())
  },

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

<<<<<<< HEAD
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

=======
interface BasicInfoFieldsProps {
  control: Control < any>;
}
interface BasicInfoFieldsProps {;
  control: Control<any>;
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export const BasicInfoFields: React.FC<BasicInfoFieldsProps> = ({;
  control,;
}) => {;
  const [minBudget, setMinBudget] = useState<string>("");
  const [maxBudget, setMaxBudget] = useState<string>("");
<<<<<<< HEAD

  const handleSuggestionApplied = (min: number, max: number) => {;
    (setMinBudget(min && min.toString()), setMaxBudget(max && max.toString()));
  };

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  const handleSuggestionApplied = (min: number, max: number) => {;
    (setMinBudget(min && min.toString()), setMaxBudget(max && max.toString()));
  };
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return (
    <div className="space-y-4">;
      <FormField
        control={control}
        name="title"
<<<<<<< HEAD

        render={({ field }) => (
          <FormItem>
            <FormLabel>Job Title</FormLabel>
            <FormControl>
              <Input placeholder="e.g. Senior React Developer" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
=======

      />;
      <FormField;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        control={control}
        name="category"
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Job Category</FormLabel>;
            <FormControl>;
              <select
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                {...field}>;
=======
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
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Job Title</FormLabel>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            <FormControl>;
              <Input placeholder="e.g. Senior React Developer" {...field} />;
            </FormControl>;
            <FormMessage />;
<<<<<<< HEAD
          </FormItem>)}
      />;
      <FormField;
        control={control}
        name="company";
        render={({ field }) => (
          <FormItem>;
            <FormLabel > Company</FormLabel>;
=======
          </FormItem>;
        )}
      />;
;
      <FormField;
        control={control}
        name="company";
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Company</FormLabel>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            <FormControl>;
              <Input placeholder="e.g. Acme Corporation" {...field} />;
            </FormControl>;
            <FormMessage />;
<<<<<<< HEAD
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
                {...field}
              >;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
          </FormItem>;
        )}
      />;


      />;

      />;
      <FormField;

        control={control}
        name="category"
      ;
      <FormField;
        control={control}
        name="category";
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Job Category</FormLabel>;
            <FormControl>;
              <select;
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm";
                {...field}
              >;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

      />;

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

<<<<<<< HEAD
=======

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  value={minBudget || rest.value}
                  onChange={e => {;
                    setMinBudget(e.target.value),;

<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  value={minBudget || rest.value}

                  onChange={e => {;
                    setMinBudget(e.target.value),;

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                    onChange(e);
=======
=======
                    onChange(e);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  }}
                  {...rest}
                />;
              </FormControl>;
              <FormMessage />;

<<<<<<< HEAD
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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

                  value={maxBudget || rest.value}
                  onChange={e => {;

<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  value={maxBudget || rest.value}

                  onChange={e => {;


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                    setMaxBudget(e.target.value);
=======
=======
                    setMaxBudget(e.target.value);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  placeholder="e && e.g. 60"
                  value={maxBudget || rest && rest.value}
                  onChange={(e) => {;
                    setMaxBudget(e && e.target.value);
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                    onChange(e);
=======
=======
                    onChange(e);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                  }}
                  {...rest}
                />;
              </FormControl>;
              <FormMessage />;



=======
      

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
                  }}
                  {...rest}
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
      />
      <FormField
      />;
      <FormField;
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
                  value={maxBudget |rest.value}
                  onChange={(e) => {
                  value={maxBudget || rest.value}
                  onChange={e => {;
                  value={maxBudget || rest.value}
                  onChange={(e) => {
                  onChange={e => {;
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
                />;
              </FormControl>;
              <FormMessage />;
      

<Card>
      <Card>
        <CardContent className="pt-4">
          <ClientBudgetRecommender
            jobTitle={control._formValues.title |""}
            category={control._formValues.category |""}
            experienceLevel={control._formValues.experienceLevel |""}
      
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <Card>
        <CardContent className="pt-4">
          <ClientBudgetRecommender
            jobTitle={control._formValues.title || ""}
            category={control._formValues.category || ""}
            experienceLevel={control._formValues.experienceLevel || ""}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            onSuggestionApplied={handleSuggestionApplied}
          />
        </CardContent>
      </Card>
<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            onSuggestionApplied={handleSuggestionApplied}
          />;
        </CardContent>;
      </Card>;
<<<<<<< HEAD

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      <FormField
        control={control}
        name="location"
=======
;
      <FormField;
        control={control}
        name="location";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Location</FormLabel>;
            <FormControl>;
<<<<<<< HEAD
              <Input
                placeholder="e && e.g. Remote, San Francisco, etc."
=======
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
          <FormItem>;
            <FormLabel > Location</FormLabel>;
            <FormControl>;
              <Input;
                placeholder="e.g. Remote, San Francisco, etc.";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                {...field}
              />;
            </FormControl>;
            <FormMessage />;

          </FormItem>)}
      />;
    </div>);
}
;
=======
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

      />;
    </div>;
  );
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
  );
>>>>>>> main
};
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
/>
    </div>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  );
}

  );

};

      />
    </div>
  );
}

);
      />;
    </div>;
  );
<<<<<<< HEAD


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
