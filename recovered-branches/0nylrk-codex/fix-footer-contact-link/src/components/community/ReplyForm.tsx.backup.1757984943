
  Form,
  FormControl,
  FormField,
  FormItem,
interface ReplyFormValues {
  content: string;
}

  const form = useForm<ReplyFormValues>({
    defaultValues: {
      content: ""
    }
  });

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



=======

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
>>>>>>> origin/auto/autonomy-17186719616
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements


=======
  );
};

export default ReplyForm;
>>>>>>> origin/auto/autonomy-17186719616
