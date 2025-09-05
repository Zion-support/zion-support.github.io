
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import { useForm, ControllerRenderProps } from "react-hook-form",
import { Button } from "@/components/ui/button",
import { Textarea } from "@/components/ui/textarea",
=======
import { useState } from &quot;react&quot;;
import { useForm, ControllerRenderProps } from &quot;react-hook-form&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
<<<<<<< HEAD
} from "@/components/ui/form",
import { Card, CardContent } from "@/components/ui/card",
=======
} from &quot;@/components/ui/form&quot;;
import { Card, CardContent } from &quot;@/components/ui/card&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

interface ReplyFormProps {
  onSubmit: (content: string) => Promise<void>,
  parentId?: string
}

interface ReplyFormValues {
  content: string
}

export const ReplyForm = ({ onSubmit, parentId }: ReplyFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false),
=======
import {_Form, _FormControl, _FormField, _FormItem, _FormMessage} from "@/components/ui/form";

interface ReplyFormProps {_onSubmit: (_content: string) => Promise<void>;
  parentId?: string;}

interface ReplyFormValues {_content: string;}

export const _ReplyForm = (_{_onSubmit, _parentId}: ReplyFormProps) => {_const [isSubmitting, _setIsSubmitting] = useState(false);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  const _form = useForm<ReplyFormValues>({
    defaultValues: {
<<<<<<< HEAD
      content: ""
    }
  }),

  const handleSubmit = async (values: ReplyFormValues) => {
    setIsSubmitting(true),
    try {
      await onSubmit(values.content),
      form.reset()
    } finally {
      setIsSubmitting(false)
    }
  },

  return (
    <Card>
      <CardContent className="pt-6&quot;>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField
              control={form.control}
<<<<<<< HEAD
              name="content"
              render={({ field }: { field: ControllerRenderProps<ReplyFormValues "content"> }) => (
=======
              name=&quot;content&quot;
              render={({ field }: { field: ControllerRenderProps<ReplyFormValues, &quot;content"> }) => (
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
      content: ""}
  });

  const _handleSubmit = async (_values: ReplyFormValues) => {_setIsSubmitting(true);
    try {
      await onSubmit(values.content);
      form.reset();} finally {_setIsSubmitting(false);}
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <Form {_...form}>
          <form onSubmit={_form.handleSubmit(handleSubmit)}>
            <FormField
              control={_form.control}
              name="content"
              render={_(_{ field}: {_field: ControllerRenderProps<ReplyFormValues, _"content">}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <FormItem>
                  <FormControl>
                    <Textarea
                      className="min-h-[100px] resize-y"
                      {_...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
<<<<<<< HEAD
            <div className="mt-4 flex justify-end&quot;>
              <Button type=&quot;submit&quot; disabled={isSubmitting}>
                {isSubmitting ? &quot;Submitting...&quot; : &quot;Post Reply"}
=======
            <div className="mt-4 flex justify-end">
              <Button type="submit" disabled={_isSubmitting}>
                {_isSubmitting ? "Submitting..." : "Post Reply"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
},

export default ReplyForm,
