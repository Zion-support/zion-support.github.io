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
import {
  Form,
  FormControl,
  FormField,
  FormItem,

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
      content: ''
    }
  })
  const handleSubmit = async (values: ReplyFormValues) => {
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

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
}
export default ReplyForm

<<<<<<< HEAD
=======
export default ReplyForm,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
