import {
  Form,
  FormControl,
  FormField,
  FormItem,

interface ReplyFormValues {
  content: string;

  const form = useForm<ReplyFormValues>({
    defaultValues: {
      content: '',
    },
  });

    try {
      await onSubmit(values.content);
      form.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardContent className='pt-6'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField

                <FormItem>
                  <FormControl>
                    <Textarea className='min-h-[100px] resize-y' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='mt-4 flex justify-end'>
              <Button type='submit' disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Post Reply'}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
export default ReplyForm;