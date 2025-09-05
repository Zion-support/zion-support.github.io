
<<<<<<< HEAD
import { useState } from "react",
import { useForm } from "react-hook-form",
=======
import { useState } from &quot;react&quot;;
import { useForm } from &quot;react-hook-form&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { 
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
<<<<<<< HEAD
} from "@/components/ui/card",
=======
} from &quot;@/components/ui/card&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
<<<<<<< HEAD
} from "@/components/ui/form",
import { Input } from "@/components/ui/input",
import { Button } from "@/components/ui/button",
import { Textarea } from "@/components/ui/textarea",
import { ForumCategory } from "@/types/community",
=======
} from &quot;@/components/ui/form&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
import { ForumCategory } from &quot;@/types/community&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface PostFormValues {
  title: string,
  content: string,
  categoryId: ForumCategory,
  tags: string
}

interface PostFormProps {
  initialValues?: Partial<PostFormValues>,
  onSubmit: (values: PostFormValues) => void,
  isEditing?: boolean
}

export const PostForm = ({
  initialValues,
  onSubmit,
  isEditing = false
}: PostFormProps) => {
  const form = useForm<PostFormValues>({
    defaultValues: {
      title: initialValues?.title || "&quot;,
      content: initialValues?.content || "&quot;,
      categoryId: initialValues?.categoryId || &quot;project-help&quot;,
      tags: initialValues?.tags || "&quot;
    }
  }),

  const [isSubmitting, setIsSubmitting] = useState(false),

  const handleSubmit = async (values: PostFormValues) => {
    setIsSubmitting(true),
    try {
      await onSubmit(values)
    } finally {
      setIsSubmitting(false)
    }
  },

  return (
    <Card>
      <CardHeader>
        <CardTitle>{isEditing ? &quot;Edit Post&quot; : &quot;Create New Post"}</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-6&quot; onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField
              control={form.control}
              name=&quot;title&quot;
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder=&quot;Enter post title...&quot; {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name=&quot;content&quot;
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder=&quot;Write your post content here..." 
                      className="min-h-[200px]&quot;
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name=&quot;categoryId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <select
                      className="w-full p-2 border rounded-md&quot;
                      {...field}
                    >
                      <option value=&quot;getting-hired&quot;>Getting Hired</option>
                      <option value=&quot;project-help&quot;>Project Help</option>
                      <option value=&quot;ai-tools&quot;>AI Tools Discussion</option>
                      <option value=&quot;feedback&quot;>Feedback & Feature Requests</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name=&quot;tags&quot;
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tags (comma-separated)</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder=&quot;e.g. resume, hiring, flutter&quot; 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button type=&quot;submit&quot; disabled={isSubmitting}>
              {isSubmitting ? &quot;Submitting...&quot; : isEditing ? &quot;Update Post&quot; : &quot;Create Post"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
},

export default PostForm,
