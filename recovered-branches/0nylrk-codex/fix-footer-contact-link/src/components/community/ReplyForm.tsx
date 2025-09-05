
import {_Form, _FormControl, _FormField, _FormItem, _FormMessage} from "@/components/ui/form";

interface ReplyFormProps {_onSubmit: (_content: string) => Promise<void>;
  parentId?: string;}

interface ReplyFormValues {_content: string;}

export const _ReplyForm = (_{_onSubmit, _parentId}: ReplyFormProps) => {_const [isSubmitting, _setIsSubmitting] = useState(false);
  
  const _form = useForm<ReplyFormValues>({
    defaultValues: {
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
              render={_(_{ field}) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder={_parentId ? "Write your reply..." : "Join the discussion..."}
                      className="min-h-[100px] resize-y"
                      {_...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="mt-4 flex justify-end">
              <Button type="submit" disabled={_isSubmitting}>
                {_isSubmitting ? "Submitting..." : "Post Reply"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ReplyForm;
