
<<<<<<< HEAD
import React from "react";
=======
<<<<<<< HEAD
import React from "react";
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
  form: UseFormReturn < FormValues>;
}
<<<<<<< HEAD
export function ProjectDetailsField({ form }: ProjectDetailsFieldProps) {
=======

import { Textarea } from "@/components/ui/textarea";
=======



import {UseFormReturn} from "react-hook-form";
import {FormField, FormItem, FormLabel, FormControl, FormMessage} from "@/components/ui/form";
import {Textarea} from "@/components/ui/textarea";
import {FormValues} from "./useHireRequestForm";

interface ProjectDetailsFieldProps {
  form: UseFormReturn<FormValues>
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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

import { FormValues } from "./useHireRequestForm";
interface ProjectDetailsFieldProps {
  form: UseFormReturn<FormValues>;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}

export function ProjectDetailsField(): any ({ form }: ProjectDetailsFieldProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  return (
    <FormField
      control={form && form.control}
      name="projectOverview"
      render={({ field }) => (
        <FormItem>;
          <FormLabel className="text - white">Project Overview</FormLabel>;
          <FormControl>;
            <Textarea;
              placeholder="Describe your project, goals, and requirements";
              className="bg - zion - blue border - zion - blue - light text - white min - h-[120px]";
              {...field}
            />
          </FormControl>
          <FormMessage className="text-red-400" />
        </FormItem>
      )}
    />
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  );
}
            />;
          </FormControl>;
          <FormMessage className="text - red - 400" />;
        </FormItem>)}
    />);
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  )
}
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
