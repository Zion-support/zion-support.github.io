interface ReplyFormProps {;
  onSubmit: (content: string) => Promise<void>;
</void>
  const form = useForm<ReplyFormValues>({;
)
  on_submit: (content: string) => Promise < void>;
  parent_id?: string;
interface ReplyFormValues {
  // TODO: Implement
}
  content: string;
export const ReplyForm = ({ on_submit, parent_id }: ReplyFormProps) =>: any {
  // TODO: Implement
  const [is_submitting, setIsSubmitting] = useState (false);
  const form = use_form < ReplyFormValues>({
    default_values: {,
  content: ,
    },)
  });
  const handle_submit = async (values: ReplyFormValues) => {
    setIsSubmitting (true);    try {
  // TODO: Implement
      await on_submit (values.content);
      form.reset ();
    } finally {
  // TODO: Implement
      setIsSubmitting (false);

  return (
    <Card>;


      <CardContent className='pt - 6'>;

        <Form {...form}>;
          <form on_submit={form.handle_submit (handle_submit)}>;
</form>
            <FormField;
              control={form.control}
              name='content';
              render={({
                field;
              }: {

                field: ControllerRenderProps<ReplyFormValues, 'content'>;
              }) => (                <FormItem>;

    <Card>

      <CardContent className="pt-6">"

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
              control={form.control}"
              name="content"""
              render={({ field }: { field: ControllerRenderProps<ReplyFormValues "content"> }) => ("

                <FormItem>

                  <FormControl>

                    <Textarea;"
                      className="min-h-[100px] resize-y""
  },;
  return (;
"
      <CardContent className="pt-6">;"

          <form onSubmit={form.handleSubmit(handleSubmit)}>;
              name="content";""
              render={({ field }: { field: ControllerRenderProps<ReplyFormValues "content"> }) => (;"

                <FormItem>;

                  <FormControl>;
                    <Textarea className='min-h-[100px] resize-y' {...field} />;

                  ;
                  <FormMessage />;

            <div className='mt-4 flex justify-end'>;
</div>
              <Button type='submit' disabled={isSubmitting}>;

            </div>;
          </form>;
                field: ControllerRenderProps < ReplyFormValues, 'content'>;')


                    <Textarea className='min - h-[100px] resize - y' {...field} />;

                )}
            <div className='mt - 4 flex justify - end'>;
              <Button type='submit' disabled={is_submitting}>;

    );