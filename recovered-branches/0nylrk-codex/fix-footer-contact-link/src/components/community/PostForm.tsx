
<<<<<<< HEAD
import { useState } from "react";
import { useForm } from "react-hook-form";
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react";
import { useForm } from "react-hook-form";
=======
import {useState} from "react";
import {useForm} from "react-hook-form";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import {ForumCategory} from "@/types/community";
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { useState } from "react",
import { useForm } from "react-hook-form",

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
<<<<<<< HEAD
import { Textarea } from "@/components/ui/textarea";
import { ForumCategory } from "@/types/community";
=======


import { Textarea } from "@/components/ui/textarea",
import { ForumCategory } from "@/types/community",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
interface PostFormValues {
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
interface PostFormValues {

  title: string
  content: string
  categoryId: ForumCategory

  tags: string
<<<<<<< HEAD
}
interface PostFormProps {
=======
<<<<<<< HEAD
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

  title: string
  content: string
  categoryId: ForumCategory

  tags: string
<<<<<<< HEAD
}
interface PostFormProps {
<<<<<<< HEAD
=======
  initialValues?: Partial<PostFormValues>;
  onSubmit: (values: PostFormValues) => void,
  isEditing?: boolean
}

export const PostForm = ({;
  initialValues;
  onSubmit;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5

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
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (values: PostFormValues) => {
    setIsSubmitting(true)
    try {
      await on_submit (values);
    } finally {
      setIsSubmitting(false)
<<<<<<< HEAD
    }
  }
=======
    }
<<<<<<< HEAD
  }
=======
      title: initialValues?.title || "",
      content: initialValues?.content || "",
      categoryId: initialValues?.categoryId || "project-help",
      tags: initialValues?.tags || ""
    }
=======
  };
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const handleSubmit = async (values: PostFormValues) => {;
    setIsSubmitting(true),;
    try {;
      await onSubmit(values);
    } finally {;
      setIsSubmitting(false);

    }
  },
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
                  <FormControl>;
                    <Input placeholder="Enter post title..." {...field} />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}
            />
            <FormField
              control={form && form.control}
              name="content"
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
            />
            <FormField
              control={form && form.control}
              name="tags"
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
            </Button>;
          </form>;
        </Form>;
      </CardContent>;
    </Card>;
  );
};

export default PostForm;

    </Card>);
}
;
export default PostForm;
;
<<<<<<< HEAD
=======

=======

},

<<<<<<< HEAD
export default PostForm,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
export default PostForm;
=======
export default PostForm,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
