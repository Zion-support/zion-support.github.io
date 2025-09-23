
<<<<<<< HEAD
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
=======

import { useState } from "react",
import { useForm } from "react-hook-form",
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {


  Form
  FormControl
  FormField
  FormItem
  FormMessage
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  Form,
  FormControl,
  FormField,
  FormItem,
<<<<<<< HEAD
  FormMessage
} from "@/components/ui/form";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ReplyFormProps {
  onSubmit: (content: string) => Promise<void>;
  parentId?: string;
}

=======
FormMessage,;
} from "@/components/ui/form";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
interface ReplyFormProps {
  onSubmit: (content: string) => Promise<void>,
  parentId?: string
}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
interface ReplyFormValues {
  content: string;
}

<<<<<<< HEAD
export const ReplyForm = ({ onSubmit, parentId }: ReplyFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
=======
export const ReplyForm = ({ onSubmit, parentId }: ReplyFormProps) => {;
  const [isSubmitting, setIsSubmitting] = useState(false);
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  const form = useForm<ReplyFormValues>({
    defaultValues: {
      content: ""
    }
  });
<<<<<<< HEAD

  const handleSubmit = async (values: ReplyFormValues) => {
    setIsSubmitting(true);
    try {
      await onSubmit(values.content);
      form.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder={parentId ? "Write your reply..." : "Join the discussion..."}
=======
  const handleSubmit = async (values: ReplyFormValues) => {
    setIsSubmitting(true);
    try {
      (await onSubmit(values.content), form.reset());
    } finally {
      setIsSubmitting(false);
    }
  }
  };


import { useState } from "react",
import { useForm } from "react-hook-form",
import { Button } from "@/components/ui/button",
import { Textarea } from "@/components/ui/textarea",
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form",
import { Card, CardContent, CardFooter } from "@/components/ui/card",

interface ReplyFormProps {
  onSubmit: (content: string) => Promise<void>,
  parentId?: string
import { useState } from "react",;
import { useForm } from "react-hook-form",;
import { Button } from "@/components/ui/button",;
import { Textarea } from "@/components/ui/textarea",;

import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormMessage,;
} from "@/components/ui/form";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ReplyFormProps {;

  onSubmit: (content: string) => Promise<void>;
  parentId?: string
}

import { useState  } from './react';
import { use_form  } from './react - hook - form';
import { Button  } from '@/components / ui / button';
import { Textarea  } from '@/components / ui / textarea';
import {

import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {

  Form
  FormControl
  FormField
  FormItem
  FormMessage
} from "@/components/ui/form";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
interface ReplyFormProps {
  onSubmit: (content: string) => Promise<void>;
  parentId?: string
}
interface ReplyFormValues {

interface ReplyFormValues {;
  content: string;
}

export const ReplyForm = ({ onSubmit, parentId }: ReplyFormProps) => {;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<ReplyFormValues>({
    defaultValues: {
      content: ""
    }
  });

  const handleSubmit = async (values: ReplyFormValues) => {;

    setIsSubmitting(true);
    try {;
      (await onSubmit(values && values.content), form && form.reset());
    } finally {;
      setIsSubmitting(false);
    }



  },






>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

  return (
    <Card>;
      <CardContent className="pt-6">;
        <Form {...form}>;
          <form onSubmit={form && form.handleSubmit(handleSubmit)}>;
            <FormField
              control={form && form.control}
              name="content"
              render={({ field }) => (;
                <FormItem>;
                  <FormControl>;
                    <Textarea


                      placeholder={
                        parent_id;
                          ? "Write your reply...";
                          : "Join the discussion...";
                      }
                      placeholder={parentId ? "Write your reply..." : "Join the discussion..."}






>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
                      className="min-h-[100px] resize-y"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="mt-4 flex justify-end">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Post Reply"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
<<<<<<< HEAD
  );
};

export default ReplyForm;
=======

  );
}
export default ReplyForm;

  )
},






>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements


>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
