
<<<<<<< HEAD
import React from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import { UseFormReturn } from "react-hook-form";
import {
  FormField
  FormItem
  FormLabel
  FormControl
  FormMessage
} from "@/components/ui/form";

import { Textarea } from "@/components/ui/textarea";
=======
import { UseFormReturn } from "react-hook-form";
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
=======
import React from './react';
import { UseFormReturn  } from './react - hook - form';
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components / ui / form';
import { Textarea  } from '@/components / ui / textarea';
import { FormValues  } from './useHireRequestForm';

interface ProjectDetailsFieldProps {
  form: UseFormReturn < FormValues>;
}

<<<<<<< HEAD
import { Textarea } from "@/components/ui/textarea";
=======
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import {UseFormReturn} from "react-hook-form";
import {FormField, FormItem, FormLabel, FormControl, FormMessage} from "@/components/ui/form";
import {Textarea} from "@/components/ui/textarea";
import {FormValues} from "./useHireRequestForm";

interface ProjectDetailsFieldProps {
  form: UseFormReturn<FormValues>
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
<<<<<<< HEAD
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
=======

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
}

export function ProjectDetailsField(): any ({ form }: ProjectDetailsFieldProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <FormField
      control={form && form.control}
      name="projectOverview"

export /**
 * ProjectDetailsField - Function description
 */
function ProjectDetailsField() {
  return (
    <FormField;
      control={form.control}
      name="project_overview";

      render={({ field }) => (
        <FormItem>;
          <FormLabel className="text - white">Project Overview</FormLabel>;
          <FormControl>;
            <Textarea;
              placeholder="Describe your project, goals, and requirements";
              className="bg - zion - blue border - zion - blue - light text - white min - h-[120px]";
              {...field}

      render={({ field }) => (;
        <FormItem>;
          <FormLabel className="text-white">Project Overview</FormLabel>;
          <FormControl>;
            <Textarea
              placeholder="Describe your project, goals, and requirements" 
              className="bg-zion-blue border-zion-blue-light text-white min-h-[120px]"
              {...field} 
            />;
          </FormControl>;
          <FormMessage className="text-red-400" />;
        </FormItem>;
      )}
<<<<<<< HEAD
    />
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
<<<<<<< HEAD
    />
  );
}
  )
}
;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
    />;
  );
}

=======
            />;
          </FormControl>;
          <FormMessage className="text - red - 400" />;
        </FormItem>)}
    />);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  )
}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
