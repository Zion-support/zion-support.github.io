
import {_Card, _CardContent, _CardFooter, _CardHeader, _CardTitle} from "@/components/ui/card";
import {_Form, _FormControl, _FormField, _FormItem, _FormLabel, _FormMessage} from "@/components/ui/form";

interface PostFormValues {_title: string;
  content: string;
  categoryId: ForumCategory;
  tags: string;}

interface PostFormProps {_initialValues?: Partial<PostFormValues>;
  onSubmit: (_values: PostFormValues) => void;
  isEditing?: boolean;}

export const _PostForm = (_{_initialValues, _onSubmit, _isEditing = false}: PostFormProps) => {_const _form = useForm<PostFormValues>({
    defaultValues: {
      title: initialValues?.title || "", _content: initialValues?.content || "", _categoryId: initialValues?.categoryId || "project-help", _tags: initialValues?.tags || ""}
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const _handleSubmit = async (_values: PostFormValues) => {_setIsSubmitting(true);
    try {
      await onSubmit(values);} finally {_setIsSubmitting(false);}
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{_isEditing ? "Edit Post" : "Create New Post"}</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {_...form}>
          <form className="space-y-6" onSubmit={_form.handleSubmit(handleSubmit)}>
            <FormField
              control={_form.control}
              name="title"
              render={_(_{ field}) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter post title..." {_...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={_form.control}
              name="content"
              render={_(_{ field}) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Write your post content here..." 
                      className="min-h-[200px]"
                      {_...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={_form.control}
              name="categoryId"
              render={_(_{ field}) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <select
                      className="w-full p-2 border rounded-md"
                      {_...field}
                    >
                      <option value="getting-hired">Getting Hired</option>
                      <option value="project-help">Project Help</option>
                      <option value="ai-tools">AI Tools Discussion</option>
                      <option value="feedback">Feedback & Feature Requests</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={_form.control}
              name="tags"
              render={_(_{ field}) => (
                <FormItem>
                  <FormLabel>Tags (comma-separated)</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="e.g. resume, hiring, flutter" 
                      {_...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button type="submit" disabled={_isSubmitting}>
              {_isSubmitting ? "Submitting..." : isEditing ? "Update Post" : "Create Post"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default PostForm;
