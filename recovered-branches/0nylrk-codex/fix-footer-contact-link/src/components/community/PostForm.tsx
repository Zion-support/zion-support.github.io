
<<<<<<< HEAD
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
=======
import {_Card, _CardContent, _CardFooter, _CardHeader, _CardTitle} from "@/components/ui/card";
import {_Form, _FormControl, _FormField, _FormItem, _FormLabel, _FormMessage} from "@/components/ui/form";

interface PostFormValues {_title: string;
  content: string;
  categoryId: ForumCategory;
  tags: string;}

interface PostFormProps {_initialValues?: Partial<PostFormValues>;
  onSubmit: (_values: PostFormValues) => void;
  isEditing?: boolean;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export const _PostForm = (_{_initialValues, _onSubmit, _isEditing = false}: PostFormProps) => {_const _form = useForm<PostFormValues>({
    defaultValues: {
<<<<<<< HEAD
      title: initialValues?.title || "&quot;,
      content: initialValues?.content || "&quot;,
      categoryId: initialValues?.categoryId || &quot;project-help&quot;,
      tags: initialValues?.tags || "&quot;
    }
  }),
=======
      title: initialValues?.title || "", _content: initialValues?.content || "", _categoryId: initialValues?.categoryId || "project-help", _tags: initialValues?.tags || ""}
  });
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const [isSubmitting, setIsSubmitting] = useState(false),

<<<<<<< HEAD
  const handleSubmit = async (values: PostFormValues) => {
    setIsSubmitting(true),
    try {
      await onSubmit(values)
    } finally {
      setIsSubmitting(false)
    }
  },
=======
  const _handleSubmit = async (_values: PostFormValues) => {_setIsSubmitting(true);
    try {
      await onSubmit(values);} finally {_setIsSubmitting(false);}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <Card>
      <CardHeader>
<<<<<<< HEAD
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
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
<<<<<<< HEAD
              control={form.control}
              name=&quot;content&quot;
              render={({ field }) => (
=======
              control={_form.control}
              name="content"
              render={_(_{ field}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Textarea 
<<<<<<< HEAD
                      placeholder=&quot;Write your post content here..." 
                      className="min-h-[200px]&quot;
                      {...field} 
=======
                      placeholder="Write your post content here..." 
                      className="min-h-[200px]"
                      {_...field} 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
<<<<<<< HEAD
              control={form.control}
              name=&quot;categoryId"
              render={({ field }) => (
=======
              control={_form.control}
              name="categoryId"
              render={_(_{ field}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <select
<<<<<<< HEAD
                      className="w-full p-2 border rounded-md&quot;
                      {...field}
=======
                      className="w-full p-2 border rounded-md"
                      {_...field}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
<<<<<<< HEAD
              control={form.control}
              name=&quot;tags&quot;
              render={({ field }) => (
=======
              control={_form.control}
              name="tags"
              render={_(_{ field}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <FormItem>
                  <FormLabel>Tags (comma-separated)</FormLabel>
                  <FormControl>
                    <Input 
<<<<<<< HEAD
                      placeholder=&quot;e.g. resume, hiring, flutter&quot; 
                      {...field} 
=======
                      placeholder="e.g. resume, hiring, flutter" 
                      {_...field} 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
<<<<<<< HEAD
            <Button type=&quot;submit&quot; disabled={isSubmitting}>
              {isSubmitting ? &quot;Submitting...&quot; : isEditing ? &quot;Update Post&quot; : &quot;Create Post"}
=======
            <Button type="submit" disabled={_isSubmitting}>
              {_isSubmitting ? "Submitting..." : isEditing ? "Update Post" : "Create Post"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
},

export default PostForm,
