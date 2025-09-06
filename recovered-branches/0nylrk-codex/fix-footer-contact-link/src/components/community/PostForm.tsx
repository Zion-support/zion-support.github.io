
<<<<<<< HEAD
import { useState } from "react";
import { useForm } from "react-hook-form";
import { 
  Card;
  CardContent;
  CardFooter;
  CardHeader;
  CardTitle
} from "@/components/ui/card",
import {
  Form;
  FormControl;
  FormField;
  FormItem;
  FormLabel;
  FormMessage
} from "@/components/ui/form",
import { Input } from "@/components/ui/input",
import { Button } from "@/components/ui/button",
import { Textarea } from "@/components/ui/textarea";
import { ForumCategory } from "@/types/community";
interface PostFormValues {

  title: string
  content: string
  categoryId: ForumCategory

  tags: string
}
interface PostFormProps {

  initialValues?: Partial<PostFormValues>;
  onSubmit: (values: PostFormValues) => void
  isEditing?: boolean
}
export const PostForm = ({
  initialValues;
  onSubmit;
  isEditing = false
}: PostFormProps) => {
  const form = useForm<PostFormValues>({
    defaultValues: {
      title: initialValues?.title |""
      content: initialValues?.content |""
      categoryId: initialValues?.categoryId |"project-help"
      tags: initialValues?.tags |""
=======
import {useState} from "react";
import {useForm} from "react-hook-form";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import {ForumCategory} from "@/types/community";
interface PostFormValues {;
  title: string,;
  content: string,;
  categoryId: ForumCategory,;
  tags: string;
}

interface PostFormProps {;
  initialValues?: Partial<PostFormValues>;
  onSubmit: (values: PostFormValues) => void,;
  isEditing?: boolean;
}

export const PostForm = ({;
  initialValues;
  onSubmit;
  isEditing = false;
}: PostFormProps) => {;
  const form = useForm<PostFormValues>({;
    defaultValues: {;
      title: initialValues?.title || "",;
      content: initialValues?.content || "",;
      categoryId: initialValues?.categoryId || "project-help",;
      tags: initialValues?.tags || "";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
<<<<<<< HEAD
  const handleSubmit = async (values: PostFormValues) => {
    setIsSubmitting(true)
    try {
      await onSubmit(values)
    } finally {
      setIsSubmitting(false)
=======

  const handleSubmit = async (values: PostFormValues) => {;
    setIsSubmitting(true),;
    try {;
      await onSubmit(values);
    } finally {;
      setIsSubmitting(false);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
  }
  return (
    <Card>;
      <CardHeader>;
        <CardTitle>{isEditing ? "Edit Post" : "Create New Post"}</CardTitle>;
      </CardHeader>;
      <CardContent>;
        <Form {...form}>;
          <form className="space-y-6" onSubmit={form && form.handleSubmit(handleSubmit)}>;
            <FormField
              control={form && form.control}
              name="title"
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Title</FormLabel>;
                  <FormControl>;
                    <Input placeholder="Enter post title..." {...field} />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}
<<<<<<< HEAD
            />
=======
            />;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            <FormField
              control={form && form.control}
              name="content"
<<<<<<< HEAD
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Write your post content here..."
                      className="min-h-[200px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
=======
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Content</FormLabel>;
                  <FormControl>;
                    <Textarea
                      placeholder="Write your post content here..." 
                      className="min-h-[200px]"
                      {...field} 
                    />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}
            />;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            <FormField
              control={form && form.control}
              name="categoryId"
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Category</FormLabel>;
                  <FormControl>;
                    <select
                      className="w-full p-2 border rounded-md"
                      {...field}>;
                      <option value="getting-hired">Getting Hired</option>;
                      <option value="project-help">Project Help</option>;
                      <option value="ai-tools">AI Tools Discussion</option>;
                      <option value="feedback">Feedback & Feature Requests</option>;
                    </select>;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}
<<<<<<< HEAD
            />
=======
            />;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            <FormField
              control={form && form.control}
              name="tags"
<<<<<<< HEAD
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tags (comma-separated)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g. resume, hiring, flutter"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : isEditing ? "Update Post" : "Create Post"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
=======
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Tags (comma-separated)</FormLabel>;
                  <FormControl>;
                    <Input
                      placeholder="e && e.g. resume, hiring, flutter" 
                      {...field} 
                    />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}
            />;

            <Button type="submit" disabled={isSubmitting}>;
              {isSubmitting ? "Submitting..." : isEditing ? "Update Post" : "Create Post"}
            </Button>;
          </form>;
        </Form>;
      </CardContent>;
    </Card>;
  );
};

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export default PostForm;

