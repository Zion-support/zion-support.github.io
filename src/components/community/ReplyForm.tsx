

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
interface ReplyFormProps {
  onSubmit: (content: string) => Promise<void>;
  parentId?: string
interface ReplyFormValues {
  content: string

=======
export const ReplyForm = ({ onSubmit, parentId }: ReplyFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const form = useForm<ReplyFormValues>({
    defaultValues: {
      content: ''
    }
  })
  const handleSubmit = async (values: ReplyFormValues) => {

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    setIsSubmitting(true);    try {
      await onSubmit(values.content)
      form.reset()
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <Card>
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField

              )}



              )}
            />;
            <div className='mt-4 flex justify-end'>;
              <Button type='submit' disabled={isSubmitting}>;
                {isSubmitting ? 'Submitting...' : 'Post Reply'}

              </Button>;
            </div>;
          </form>;
        </Form>;
      </CardContent>;
    </Card>;
  );
};

                field: ControllerRenderProps < ReplyFormValues, 'content'>;
              }) => (                <FormItem>;
                  <FormControl>;
                    <Textarea className='min - h-[100px] resize - y' {...field} />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>)}
            />;
            <div className='mt - 4 flex justify - end'>;
              <Button type='submit' disabled={is_submitting}>;
                {is_submitting ? 'Submitting...' : 'Post Reply'}
              </Button>;
            </div>;
          </form>;
        </Form>;
      </CardContent>;
    </Card>);
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
              )}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
export default ReplyForm;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
