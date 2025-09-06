
<<<<<<< HEAD
import { useState } from "react";
import { useForm } from "react-hook-form";
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import {useState} from "react";
import {useForm} from "react-hook-form";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import {ForumCategory} from "@/types/community";
<<<<<<< HEAD
=======

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import { useState } from "react",
import { useForm } from "react-hook-form",
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
import { Textarea } from "@/components/ui/textarea",
import { ForumCategory } from "@/types/community",
<<<<<<< HEAD
interface PostFormValues {
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
interface PostFormValues {
  title: string,
  content: string,
  categoryId: ForumCategory,
  tags: string
<<<<<<< HEAD
}

  title: string
  content: string
  categoryId: ForumCategory

  tags: string
}
interface PostFormProps {
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  initialValues?: Partial<PostFormValues>;
  onSubmit: (values: PostFormValues) => void,
  isEditing?: boolean
}

export const PostForm = ({;
  initialValues;
  onSubmit;
<<<<<<< HEAD
=======

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import { useState } from "react",;
import { useForm } from "react-hook-form",;
import {;
  Card,;
  CardContent,;
  CardFooter,;
  CardHeader,;
  CardTitle;
} from "@/components/ui/card",;
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormMessage;
} from "@/components/ui/form",;
import { Input } from "@/components/ui/input",;
import { Button } from "@/components/ui/button",;
import { Textarea } from "@/components/ui/textarea",;
import { ForumCategory } from "@/types/community",;
interface PostFormValues {;
  title: string,;
  content: string,;
  categoryId: ForumCategory,;
  tags: string;
}
;
interface PostFormProps {;
  initialValues?: Partial<PostFormValues>,;
  onSubmit: (values: PostFormValues) => void,;
  isEditing?: boolean;
}

  initialValues?: Partial<PostFormValues>;
  onSubmit: (values: PostFormValues) => void
  isEditing?: boolean
}
export const PostForm = ({
  initialValues,
  onSubmit,
  isEditing = false
}: PostFormProps) => {
  const form = useForm<PostFormValues>({
    defaultValues: {
      title: initialValues?.title |""
      content: initialValues?.content |""
      categoryId: initialValues?.categoryId |"project-help"
      tags: initialValues?.tags |""
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

import { useState } from './react';
import { use_form } from './react - hook - form';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components / ui / card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components / ui / form';
import { Input } from '@/components / ui / input';
import { Button } from '@/components / ui / button';
import { Textarea } from '@/components / ui / textarea';
import { ForumCategory } from '@/types / community';
interface PostFormValues {
  title: string,
  content: string,
  category_id: ForumCategory,
  tags: string;
}
interface PostFormProps {
  initial_values?: Partial < PostFormValues>;
  on_submit: (values: PostFormValues) => void,
  is_editing?: boolean;
}
export const PostForm = ({
  initial_values;
  on_submit;
  is_editing = false;
}: PostFormProps) =>: any {
  const form = use_form < PostFormValues>({
    default_values: {
      title: initial_values?.title || "",
      content: initial_values?.content || "",
      category_id: initial_values?.category_id || "project - help",
      tags: initial_values?.tags || "";
    }
  });
;
  const [is_submitting, setIsSubmitting] = useState (false);
;
  const handle_submit = async (values: PostFormValues) => {
    setIsSubmitting (true),

    try {
      await on_submit (values);
    } finally {
<<<<<<< HEAD
      setIsSubmitting(false)
    }
  }
      title: initialValues?.title || "",
      content: initialValues?.content || "",
      categoryId: initialValues?.categoryId || "project-help",
      tags: initialValues?.tags || ""
    }
  };
  }),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  const handleSubmit = async (values: PostFormValues) => {;
    setIsSubmitting(true),;
    try {;
      await onSubmit(values);
    } finally {;
      setIsSubmitting(false);

    }
<<<<<<< HEAD
  },

=======
  }
=======



>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
=======
      setIsSubmitting (false);
    }
  }
;
  return (
    <Card>;
      <CardHeader>;
        <CardTitle>{is_editing ? "Edit Post" : "Create New Post"}</CardTitle>;
      </CardHeader>;
      <CardContent>;
        <Form {...form}>;
          <form className="space - y-6" on_submit={form.handle_submit (handle_submit)}>;
            <FormField;
              control={form.control}
              name="title";
              render={({ field }) => (
                <FormItem>;
                  <FormLabel > Title</FormLabel>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                  <FormControl>;
                    <Input placeholder="Enter post title..." {...field} />;
                  </FormControl>;
                  <FormMessage />;

            />;


            <FormField
              control={form && form.control}
              name="content"

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

            />;


            <FormField
              control={form && form.control}
              name="tags"

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
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
;
export default PostForm;
;

},

<<<<<<< HEAD
export default PostForm,
export default PostForm;
export default PostForm,
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
