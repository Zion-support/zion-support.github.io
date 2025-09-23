
<<<<<<< HEAD
import { useState } from "react",
import { useForm, ControllerRenderProps } from "react-hook-form",
import { Button } from "@/components/ui/button",
import { Textarea } from "@/components/ui/textarea",
=======
import { useState } from "react";
import { useForm, ControllerRenderProps } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
>>>>>>> origin/auto/autonomy-17186719616
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
<<<<<<< HEAD
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
=======
} from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";

interface ReplyFormProps {
  onSubmit: (content: string) => Promise<void>;
  parentId?: string;
}

interface ReplyFormValues {
  content: string;
}

export const ReplyForm = ({ onSubmit, parentId }: ReplyFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
>>>>>>> origin/auto/autonomy-17186719616
  
  const form = useForm<ReplyFormValues>({
    defaultValues: {
      content: ""
    }
<<<<<<< HEAD
  }),

  const handleSubmit = async (values: ReplyFormValues) => {
    setIsSubmitting(true),
    try {
      await onSubmit(values.content),
      form.reset()
    } finally {
      setIsSubmitting(false),
    }
  },
=======
  });

  const handleSubmit = async (values: ReplyFormValues) => {
    setIsSubmitting(true);
    try {
      await onSubmit(values.content);
      form.reset();
    } finally {
      setIsSubmitting(false);
    }
  };
>>>>>>> origin/auto/autonomy-17186719616

  return (
    <Card>
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField
              control={form.control}
              name="content"
<<<<<<< HEAD
              render={({ field }: { field: ControllerRenderProps<ReplyFormValues "content"> }) => (
=======
              render={({ field }: { field: ControllerRenderProps<ReplyFormValues, "content"> }) => (
>>>>>>> origin/auto/autonomy-17186719616
                <FormItem>
                  <FormControl>
                    <Textarea
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
  ),
},

export default ReplyForm,
=======
  );
};

export default ReplyForm;
>>>>>>> origin/auto/autonomy-17186719616
