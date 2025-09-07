<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React, { useState } from "react";
import { Control } from "react-hook-form";
import { 
  FormField,
  FormItem, 
  FormLabel, 
  FormControl, 
  FormMessage 
} from "@/components/ui/form",
import { Input } from "@/components/ui/input";
import { ClientBudgetRecommender } from "@/components/pricing/ClientBudgetRecommender";
import { Card, CardContent } from "@/components/ui/card";
interface BasicInfoFieldsProps {
  control: Control<any>
}

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
FormField
  FormItem
  FormLabel
  FormControl
  FormMessage

<<<<<<< HEAD
=======
<<<<<<< HEAD
import React, { useState } from "react";
import { Control } from "react-hook-form";

import {
  FormField
  FormItem
  FormLabel
  FormControl
  FormMessage
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
import {;
  }
  FormField,;
  FormItem,;
  FormLabel,;
  FormControl,;
  FormMessage,;

<<<<<<< HEAD
=======
pr-12325
import React, { useState } from \"react\";
import { Control } from \"react-hook-form\";

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,;import React, { useState } from './react';'
import { Control  } from './react - hook - form';'
import {
  }
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage} from '@/components / ui / form';'
import { Input  } from '@/components / ui / input';'
import { ClientBudgetRecommender  } from '@/components / pricing / ClientBudgetRecommender';'
import { Card, CardContent  } from '@/components / ui / card';import React, { useState } from "react","
import { Control } from "react-hook-form","
<<<<<<< HEAD
import {
  }
=======
  }
  FormField,
  FormItem,
  FormLabel,
  FormControl,
=======
  FormField
  FormItem
  FormLabel
  FormControl
>>>>>>> origin/chore/fix-lint-and-merge
  FormMessage
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,;
<<<<<<< HEAD

=======
<<<<<<< HEAD
import React, { useState } from "react";
import { Control } from "react-hook-form";

import {
FormField
  FormItem
  FormLabel
  FormControl
  FormMessage
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ClientBudgetRecommender } from "@/components/pricing/ClientBudgetRecommender";

import { Card, CardContent } from "@/components/ui/card";
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React, { useState } from './react';

import { Control  } from './react - hook - form';
import {}

>>>>>>> origin/resolved-merge-conflicts
  FormField,
  FormItem,
  FormLabel,
  FormControl,
<<<<<<< HEAD
  FormMessage
} from "@/components/ui/form","
import { Input } from "@/components/ui/input","
import { ClientBudgetRecommender } from "@/components/pricing/ClientBudgetRecommender","
import { Card, CardContent } from "@/components/ui/card","
return (;
    <div className="space-y-4">"
      <FormField,
control={control}
        name="title""
        render={({ field }) => (
          <FormItem>
            <FormLabel>Job Title</FormLabel>
            <FormControl>
              <Input placeholder="e.g. Senior React Developer" {...field} />"
=======

  FormMessage,
} from '@/components / ui / form';
import { Input  } from '@/components / ui / input';
import { ClientBudgetRecommender  } from '@/components / pricing / ClientBudgetRecommender';
<<<<<<< HEAD

import { Control } from "react-hook-form",

  control: Control < any>;
}

=======
<<<<<<< HEAD

=======
import { Card, CardContent  } from '@/components / ui / card';
import React, { useState } from "react",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { Control } from "react-hook-form",

<<<<<<< HEAD
  control: Control < any>;
}

=======


interface BasicInfoFieldsProps {
  control: Control < any>;
}



<<<<<<< HEAD


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
>>>>>>> merged-prs-20250907-203621
export const BasicInfoFields: React.FC<BasicInfoFieldsProps> = ({ control }) => {
  const [minBudget, setMinBudget] = useState<string>(""),
  const [maxBudget, setMaxBudget] = useState<string>(""),

  const handleSuggestionApplied = (min: number, max: number) => {
    setMinBudget(min.toString()),
    setMaxBudget(max.toString())
  },
<<<<<<< HEAD

  return (
    <div className="space-y-4">
      <FormField
        control={control}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  return (

    <div className="space-y-4">
      <FormField;
        control={control}"
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        name="title"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Job Title</FormLabel>
<<<<<<< HEAD
            <FormControl>"
              <Input placeholder="e.g. Senior React Developer" {...field} />
=======
<<<<<<< HEAD
            <FormControl>
=======
            <FormControl>"
>>>>>>> merged-prs-20250907-203621
              <Input placeholder="e.g. Senior React Developer" {...field} />
            </FormControl>
            <FormMessage />
<<<<<<< HEAD
          </FormItem>
<<<<<<< HEAD
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
            </FormControl>
            <FormMessage />
<<<<<<< HEAD
          </FormItem>
import React, { useState } from "react";"
import { Control } from "react-hook-form";"
import {;
  }
  FormField,;
  FormItem,;
  FormLabel,;
  FormControl,;
  FormMessage;
} from "@/components/ui/form",;"
import { Input } from "@/components/ui/input",;"
import { ClientBudgetRecommender } from "@/components/pricing/ClientBudgetRecommender",;"
import { Card, CardContent } from "@/components/ui/card",;"
import React, { useState } from "react",;"
import { Control } from "react-hook-form",;"
import {;
  }
  FormField,;
  FormItem,;
  FormLabel,;
  FormControl,;
  FormMessage;
} from "@/components/ui/form",;"
import { Input } from "@/components/ui/input",;"
import { ClientBudgetRecommender } from "@/components/pricing/ClientBudgetRecommender",;"
<<<<<<< HEAD
import { Card, CardContent } from "@/components/ui/card",;        <FormField"
          control={control}
          name="budgetMax""
          render={({ "field": { onChange, ...rest } }) => (;
            <FormItem>;
              <FormLabel>Budget (Max)</FormLabel>;
              <FormControl>;
                <Input,
type="number"                  value={maxBudget || rest.value}"
                  onChange={(e) => {
                  }
                  onChange={(e) => {;
                    }
                    setMaxBudget(e.target.value);                    setMaxBudget(e.target.value);
                  placeholder="e && e.g. 60""
=======
import { Card, CardContent } from "@/components/ui/card",;

interface BasicInfoFieldsProps {;
  control: Control<any>;
}

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export const BasicInfoFields: React.FC<BasicInfoFieldsProps> = ({;
  control,;
}) => {;"
  const [minBudget, setMinBudget] = useState<string>("");"
  const [maxBudget, setMaxBudget] = useState<string>("");
<<<<<<< HEAD

  return ("
=======
<<<<<<< HEAD
  const handleSuggestionApplied = (min: number, max: number) => {;
    (setMinBudget(min && min.toString()), setMaxBudget(max && max.toString()));
  };
=======

<<<<<<< HEAD
  return ("
=======
  const handleSuggestionApplied = (min: number, max: number) => {;
    (setMinBudget(min && min.toString()), setMaxBudget(max && max.toString()));
  };

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    <div className="space-y-4">;
      <FormField;
        control={control}"
        name="title"
<<<<<<< HEAD

        name="category"
=======
<<<<<<< HEAD
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
            <FormControl>;
              <Input placeholder="e.g. Senior React Developer" {...field} />;
            </FormControl>;
            <FormMessage />;
          </FormItem>;
        )}
      />;
;
      <FormField;
        control={control}
        name="company";
=======

<<<<<<< HEAD
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Company</FormLabel>;
            <FormControl>;
<<<<<<< HEAD
              <Input placeholder="e.g. Acme Corporation" {...field} />;
=======
              <Input placeholder="e && e.g. Acme Corporation" {...field} />;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </FormControl>;
            <FormMessage />;
          </FormItem>;
        )}
<<<<<<< HEAD
      />;


      />;
=======

      />;


      <FormField
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      />;
      <FormField;

<<<<<<< HEAD
        control={control}
        name="category"
      ;
      <FormField;
        control={control}
        name="category";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        control={control}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        name="category"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Job Category</FormLabel>;
            <FormControl>;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
              <select;
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm";
                {...field}
              >;
=======
              <select
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                {...field}>;
=======
export const BasicInfoFields: React.FC < BasicInfoFieldsProps> = ({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  control,
}) => {";
  const [min_budget, setMinBudget] = useState < string>("");"
  const [max_budget, setMaxBudget] = useState < string>("");
;
  const handleSuggestionApplied = (min: number, max: number) =>: any {}
    (setMinBudget (min.to_string ()), setMaxBudget (max.to_string ()));
  }
;
  return ("
    <div className="space - y-4">;
      <FormField;
        control={control}"

        name="title";
        render={({ field }) => (
          <FormItem>;
            <FormLabel > Job Title</FormLabel>;

        name="company";
        render={({ field }) => (
          <FormItem>;
            <FormLabel > Company</FormLabel>;

        name="category";
        render={({ field }) => (
          <FormItem>;
            <FormLabel > Job Category</FormLabel>;
            <FormControl>;

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
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

          name="budgetMin"
          render={({ field: { onChange, ...rest } }) => (;
            <FormItem>;
              <FormLabel>Budget (Min)</FormLabel>;
              <FormControl>;

                  value={minBudget |rest.value}
                  onChange={(e) => {}

                    setMinBudget(e.target.value);
                  value={minBudget || rest.value}
                  onChange={e => {;
                    setMinBudget(e.target.value),;

                  placeholder="e && e.g. 30"
                  value={minBudget || rest && rest.value}
                  onChange={(e) => {;
                    setMinBudget(e && e.target.value);

                  value={minBudget || rest.value}
                  onChange={e => {;
                    setMinBudget(e.target.value),;

                  value={minBudget || rest.value}
                  onChange={(e) => {}
                    setMinBudget(e.target.value);
                  onChange={e => {;
                    setMinBudget(e.target.value),;

                    onChange(e);

          </FormItem>)}
      />;"
      <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
        <FormField;
          control={control}"

          name="budget_min";
          render={({ field: { on_change, ...rest } }) => (
            <FormItem>;
              <FormLabel > Budget (Min)</FormLabel>;
              <FormControl>;

          </FormItem>;
        )}
      />;
;
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
        <FormField;

>>>>>>> origin/chore/fix-lint-and-merge
          control={control}
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
      />;

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <FormField
          control={control}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          name="budgetMin"
          render={({ field: { onChange, ...rest } }) => (;
            <FormItem>;
              <FormLabel>Budget (Min)</FormLabel>;
              <FormControl>;

                  value={minBudget |rest.value}
                  onChange={(e) => {}

                    setMinBudget(e.target.value);
                  value={minBudget || rest.value}
                  onChange={e => {;
                    setMinBudget(e.target.value),;

                  placeholder="e && e.g. 30"
                  value={minBudget || rest && rest.value}
                  onChange={(e) => {;
                    setMinBudget(e && e.target.value);

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  value={minBudget || rest.value}
                  onChange={e => {;
                    setMinBudget(e.target.value),;

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  value={minBudget || rest.value}
                  onChange={(e) => {}
                    setMinBudget(e.target.value);
                  onChange={e => {;
                    setMinBudget(e.target.value),;

<<<<<<< HEAD
                    onChange(e);

=======
<<<<<<< HEAD
                    onChange(e);
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                    onChange(e);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          </FormItem>)}
      />;"
      <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
        <FormField;
          control={control}"

          name="budget_min";
          render={({ field: { on_change, ...rest } }) => (
            <FormItem>;
              <FormLabel > Budget (Min)</FormLabel>;
              <FormControl>;

          </FormItem>;
        )}
      />;
;
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
        <FormField;

>>>>>>> origin/chore/fix-lint-and-merge
          control={control}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          name="budgetMin";
          render={({ field:{ onChange, ...rest } }) => (;
            <FormItem>;
              <FormLabel>Budget (Min)</FormLabel>;
              <FormControl>;
                <Input;
                  type="number";
                  placeholder="e.g. 30";
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
                  value={min_budget || rest.value}
                  on_change={(e) => {
                    setMinBudget (e.target.value);
                    on_change (e);
<<<<<<< HEAD
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  value={minBudget || rest.value}
                  onChange={e => {;
                    setMinBudget(e.target.value),;
                    onChange(e),;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  }}
                  {...rest}
                />;
              </FormControl>;
              <FormMessage />;

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
        />;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <FormField

          control={control}

          name="budgetMax"
          render={({ field: { onChange, ...rest } }) => (;
            <FormItem>;
              <FormLabel>Budget (Max)</FormLabel>;
              <FormControl>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
                <Input
                  type="number"

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

                  value={maxBudget || rest.value}
                  onChange={e => {;

<<<<<<< HEAD
                  value={maxBudget |rest.value}
                  onChange={(e) => {}
=======
<<<<<<< HEAD
                  value={maxBudget |rest.value}
                  onChange={(e) => {}
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  value={maxBudget || rest.value}
                  onChange={e => {;

                  value={maxBudget || rest.value}
                  onChange={(e) => {}
                  onChange={e => {;

                  value={maxBudget || rest.value}

                  onChange={(e) => {
                  onChange={e => {;

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
                    setMaxBudget(e.target.value);
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                    setMaxBudget(e.target.value);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  placeholder="e && e.g. 60"
>>>>>>> origin/resolved-merge-conflicts
                  value={maxBudget || rest && rest.value}
                  onChange={(e) => {;
                    }
                    setMaxBudget(e && e.target.value);
<<<<<<< HEAD
                    onChange(e);                    onChange(e);
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
                    onChange(e);
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                    onChange(e);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
            </FormItem>)}
        />;
        <FormField;
          control={control}
          name="budget_max";"
          render={({ "field": { on_change, ...rest } }) => (
            <FormItem>;
              <FormLabel > Budget (Max)</FormLabel>;
              <FormControl>;
                <Input;
                  type="number";"
                  placeholder="e.g. 60";"
                  value={max_budget || rest.value}
                  on_change={(e) => {
                    }
                    setMaxBudget (e.target.value);
                    on_change (e);
<<<<<<< HEAD
                  }
                  {...rest}
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
>>>>>>> merged-prs-20250907-203621
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
                  value={maxBudget || rest.value}
                  onChange={e => {
                    setMaxBudget($2);
                    onChange(e)
=======
                  value={maxBudget |rest.value}
                  onChange={(e) => {
                  value={maxBudget || rest.value}
                  onChange={e => {;
                  value={maxBudget || rest.value}
                  onChange={(e) => {
                  onChange={e => {;
                    setMaxBudget(e.target.value);
                    onChange(e);
>>>>>>> merged-prs-20250907-203621
                  }}
                  {...rest}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
<<<<<<< HEAD

      <Card>
        <CardContent className="pt-4">
          <ClientBudgetRecommender
            jobTitle={control._formValues.title |""}
            category={control._formValues.category |""}
            experienceLevel={control._formValues.experienceLevel |""}

      <Card>

        <CardContent className="pt-4">
          <ClientBudgetRecommender"
            jobTitle={control._formValues.title |""}"
            category={control._formValues.category |""}"
            experienceLevel={control._formValues.experienceLevel |""}
                />;
              </FormControl>;
              <FormMessage />;

          />;
        </CardContent>;
      </Card>;

=======
<<<<<<< HEAD
=======
                />;
              </FormControl>;
              <FormMessage />;
      

<Card>
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/resolved-merge-conflicts
      <Card>
        <CardContent className="pt-4">"
          <ClientBudgetRecommender,
jobTitle={control._formValues.title |""}"
            category={control._formValues.category |""}"
            experienceLevel={control._formValues.experienceLevel |""}" />;
              </FormControl>;
              <FormMessage />;
                  onSuggestionApplied={handleSuggestionApplied}
          />
        </CardContent>
      </Card>            onSuggestionApplied={handleSuggestionApplied}
          />;
        </CardContent>;
      </Card>;
      <FormField,
control={control}
        name="location"      <FormField"
        control={control}
<<<<<<< HEAD
        name="location""
=======
        name="location";
=======

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      <FormField
        control={control}
        name="location"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Location</FormLabel>;
            <FormControl>;
<<<<<<< HEAD
              <Input,
placeholder="e && e.g. Remote, San Francisco, etc."                {...field}" />;
            </FormControl>;
            <FormMessage />;
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
      <FormField
        control={control}
>>>>>>> merged-prs-20250907-203621
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
  )
},
=======
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <FormItem>;
            <FormLabel > Location</FormLabel>;
            <FormControl>;
              <Input;
                placeholder="e.g. Remote, San Francisco, etc.";
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                {...field}

              />;
            </FormControl>;
            <FormMessage />;
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
          </FormItem>)}
      />;
    </div>);
}
<<<<<<< HEAD
}
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        name="location"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Location</FormLabel>

              <Input placeholder="e.g. Remote, San Francisco, etc." {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}

              <Input placeholder="e.g. Remote, San Francisco, etc." {...field} />;
            </FormControl>;
            <FormMessage />;
          </FormItem>;
        )}
      />;
    </div>;
  ),;

  FormField;
FormItem;
FormLabel;
FormControl;

}/> </div> <Card> <CardContent className="pt-4" > <ClientBudgetRecommender /> </CardContent> </Card> <FormField </FormControl> <FormMessage /> </FormItem>) 
}/> </div>) 
};
/>
    </div>

  );
});

};

      />
    </div>
  );
});
<<<<<<< HEAD
=======
=======
);

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      />;
    </div>;
  );

<<<<<<< HEAD
};
=======
<<<<<<< HEAD
};
=======

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

  );
}

  );

};

      />
    </div>
  );
=======

          </FormItem>)}
      />;
    </div>);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}

);
      />;
    </div>;
  );
};
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
