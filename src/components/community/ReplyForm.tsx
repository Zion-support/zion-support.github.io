<<<<<<< HEAD
<<<<<<< HEAD

import { useState } from "react",
import { useForm, ControllerRenderProps } from "react-hook-form",
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {

  Form
  FormControl
  FormField
  FormItem
  FormMessage
} from '@/components/ui/form'
import { Card, CardContent } from '@/components/ui/card'
=======
=======
import { useState } from 'react'
import { useForm, ControllerRenderProps } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import {
  Form,
  FormControl,
  FormField,
  FormItem,
<<<<<<< HEAD
=======
<<<<<<< HEAD
  FormMessage,
} from '@/components/ui/form'
import { Card, CardContent } from '@/components/ui/card'
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

import { useState } from "react",
import { useForm, ControllerRenderProps } from "react-hook-form",
import { Button } from "@/components/ui/button",
import { Textarea } from "@/components/ui/textarea",
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form",
import { Card, CardContent } from "@/components/ui/card",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface ReplyFormProps {
  onSubmit: (content: string) => Promise<void>;
  parentId?: string
<<<<<<< HEAD
interface ReplyFormValues {
  content: string

export const ReplyForm = ({ onSubmit, parentId }: ReplyFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const form = useForm<ReplyFormValues>({
    defaultValues: {
<<<<<<< HEAD
      content: ''
    }
  })
  const handleSubmit = async (values: ReplyFormValues) => {
=======
      content: '',;
    },;
  });
  const handleSubmit = async (values: ReplyFormValues) => {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    setIsSubmitting(true);    try {
      await onSubmit(values.content)
      form.reset()
    } finally {
      setIsSubmitting(false)
    }
  }
=======
import { useState } from "react",;
import { useForm, ControllerRenderProps } from "react-hook-form",;
import { Button } from "@/components/ui/button",;
import { Textarea } from "@/components/ui/textarea",;
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormMessage;
} from "@/components/ui/form",;
import { Card, CardContent } from "@/components/ui/card",;
interface ReplyFormProps {;
  onSubmit: (content: string) => Promise<void>,;
  parentId?: string;
}
;
interface ReplyFormValues {;
  content: string;
}
;
export const ReplyForm = ({ onSubmit, parentId }: ReplyFormProps) => {;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const form = useForm<ReplyFormValues>({;
    defaultValues: {;
      content: "";
    }
  }),;
  const handleSubmit = async (values: ReplyFormValues) => {;
    setIsSubmitting(true),;
    try {;
      await onSubmit(values.content),;
      form.reset();
    } finally {;
      setIsSubmitting(false);
    }
  },

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
    <Card>
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField
<<<<<<< HEAD
              control={form.control}
              name='content'
              render={({
                field
              }: {
                field: ControllerRenderProps<ReplyFormValues, 'content'>
              }) => (                <FormItem>
                  <FormControl>
                    <Textarea className='min-h-[100px] resize-y' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
=======
              control={form.control}
              name="content"
              render={({ field }: { field: ControllerRenderProps<ReplyFormValues "content"> }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      className="min-h-[100px] resize-y"
  },;
  return (;
    <Card>;
      <CardContent className="pt-6">;
        <Form {...form}>;
          <form onSubmit={form.handleSubmit(handleSubmit)}>;
            <FormField;
              control={form.control}
              name="content";
              render={({ field }: { field: ControllerRenderProps<ReplyFormValues "content"> }) => (;
                <FormItem>;
                  <FormControl>;
                    <Textarea;
                      className="min-h-[100px] resize-y";
                      {...field}
                    />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
  )
<<<<<<< HEAD
}
export default ReplyForm
=======
<<<<<<< HEAD
}
export default ReplyForm;
;
}
}
=======
},
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

<<<<<<< HEAD
=======
export default ReplyForm,
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
