
import { useState } from "react",
import { useForm, ControllerRenderProps } from "react-hook-form",
import { Button } from "@/components/ui/button",
import { Textarea } from "@/components/ui/textarea",import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form",
import { Card, CardContent } from "@/components/ui/card",
interface ReplyFormProps {
  onSubmit: (content: string) => Promise<void>,
  parentId?: string
}

interface ReplyFormValues {
  content: string
}

export const ReplyForm = ({ onSubmit, parentId }: ReplyFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false),
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";

interface ReplyFormProps {onSubmit: (content: string) => Promise<void>;
  parentId?: string}

interface ReplyFormValues {content: string}

export const ReplyForm = (_{onSubmit, parentId}: ReplyFormProps) => {const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ReplyFormValues>({
    defaultValues: {
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
            <FormField,
control={form.control}
              name="content"
              render={({ field }: { field: ControllerRenderProps<ReplyFormValues "content"> }) => (      content: ""}
  });

  const handleSubmit = async (values: ReplyFormValues) => {setIsSubmitting(true);
    try {
      await onSubmit(values.content);
      form.reset()} finally {setIsSubmitting(false)}
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <Form {_...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField,
control={form.control}
              name="content"
              render={_(_{ field}: {field: ControllerRenderProps<ReplyFormValues, _"content">}) => (
                <FormItem>
                  <FormControl>
                    <Textarea,
className="min-h-[100px] resize-y"
                      {_...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="mt-4 flex justify-end&quot;>
              <Button type=&quot;submit&quot; disabled={isSubmitting}>
                {isSubmitting ? &quot;Submitting...&quot; : &quot;Post Reply"}              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
},

export default ReplyForm,
