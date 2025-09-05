
import { useState } from &quot;react&quot;;
import { useForm, ControllerRenderProps } from &quot;react-hook-form&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from &quot;@/components/ui/form&quot;;
import { Card, CardContent } from &quot;@/components/ui/card&quot;;

interface ReplyFormProps {
  onSubmit: (content: string) => Promise<void>;
  parentId?: string;
}

interface ReplyFormValues {
  content: string;
}

export const ReplyForm = ({ onSubmit, parentId }: ReplyFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ReplyFormValues>({
    defaultValues: {
      content: ""
    }
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

  return (
    <Card>
      <CardContent className="pt-6&quot;>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField
              control={form.control}
              name=&quot;content&quot;
              render={({ field }: { field: ControllerRenderProps<ReplyFormValues, &quot;content"> }) => (
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
            <div className="mt-4 flex justify-end&quot;>
              <Button type=&quot;submit&quot; disabled={isSubmitting}>
                {isSubmitting ? &quot;Submitting...&quot; : &quot;Post Reply"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ReplyForm;
