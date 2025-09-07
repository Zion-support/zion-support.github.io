<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


<<<<<<< HEAD
import { useState } from "react";
import { useForm } from "react-hook-form";
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
import { useState } from "react",
import { useForm } from "react-hook-form",

import { useState } from "react",
import { useForm } from "react-hook-form",
import { useState } from "react",
import { useForm } from "react-hook-form",
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

"
import { useState } from "react","
import { useForm } from "react-hook-form",
"
import { useState } from "react","
import { useForm } from "react-hook-form","
import { useState } from "react","
import { useForm } from "react-hook-form",

"
import { useState } from "react","
import { useForm } from "react-hook-form",

import { useState } from "react",
import { useForm } from "react-hook-form",
import { useState } from "react",
import { useForm } from "react-hook-form",

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { 

  Card;
  CardContent;
  CardFooter;
  CardHeader;
  CardTitle"
} from "@/components/ui/card",
<<<<<<< HEAD
=======

>>>>>>> origin/chore/fix-lint-and-merge
  Form;
  FormControl;
  FormField;
  FormItem;
  FormLabel;
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
  FormMessage
} from "@/components/ui/form",
import { Input } from "@/components/ui/input",
import { Button } from "@/components/ui/button",

<<<<<<< HEAD
import { Textarea } from "@/components/ui/textarea",
import { ForumCategory } from "@/types/community",

import { Textarea } from "@/components/ui/textarea";
import { ForumCategory } from "@/types/community";
import { Textarea } from "@/components/ui/textarea",
import { ForumCategory } from "@/types/community",
interface PostFormValues {
=======

import { Textarea } from "@/components/ui/textarea",
import { ForumCategory } from "@/types/community",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
interface PostFormValues {
  title: string,
  content: string,
  categoryId: ForumCategory,
  tags: string
<<<<<<< HEAD
=======
<<<<<<< HEAD
}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  title: string
  content: string
  categoryId: ForumCategory

  tags: string
}
interface PostFormProps {
<<<<<<< HEAD

=======
<<<<<<< HEAD
  initialValues?: Partial<PostFormValues>,
  onSubmit: (values: PostFormValues) => void,
  isEditing?: boolean
}

export const PostForm = $2;
  onSubmit,
  isEditing = $2;
      content: initialValues ?.content || "",
      categoryId: initialValues ?.categoryId || "project-help",
      tags: initialValues ?.tags || ""
    }
  }),

  const [isSubmitting, setIsSubmitting] = useState($2);
  const handleSubmit = async (values: PostFormValues) => {
    setIsSubmitting($2);
=======
<<<<<<< HEAD

=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  initialValues?: Partial<PostFormValues>;
  onSubmit: (values: PostFormValues) => void,

import { Input } from "@/components/ui/input",;
import { Button } from "@/components/ui/button",;

  isEditing?: boolean

}

export const PostForm = ({;
  initialValues;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
  onSubmit;
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useState } from "react",;

import { useForm } from "react-hook-form",;
import {;
  Card,;
  CardContent,;
  CardFooter,;
  CardHeader,;

} from "@/components/ui/card",;
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormLabel,;

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

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  initialValues?: Partial<PostFormValues>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  onSubmit: (values: PostFormValues) => void
  isEditing?: boolean
}
export const PostForm = ({
  initialValues;
  onSubmit;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
  initialValues,
  onSubmit,
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  isEditing = false
}: PostFormProps) => {
  const form = useForm<PostFormValues>({
    defaultValues: {
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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
export const PostForm = ({};
  isEditing = false;

}: PostFormProps) => {;
  const form = useForm<PostFormValues>({;
    defaultValues: {;
      title: initialValues?.title || "",;
      content: initialValues?.content || "",;
      categoryId: initialValues?.categoryId || "project-help",;
      tags: initialValues?.tags || "";

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useState } from './react';
import { use_form } from './react - hook - form';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components / ui / card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components / ui / form';
import { Input } from '@/components / ui / input';
import { Button } from '@/components / ui / button';
import { Textarea } from '@/components / ui / textarea';

import { ForumCategory } from '@/types / community';
interface PostFormValues {}
  title: string,
  content: string,
  category_id: ForumCategory,
  tags: string;
}
interface PostFormProps {}
  initial_values?: Partial < PostFormValues>;
  on_submit: (values: PostFormValues) => void,
  is_editing?: boolean;
}
export const PostForm = ({};
  initial_values;
  on_submit;
  is_editing = false;
}: PostFormProps) =>: any {}
  const form = use_form < PostFormValues>({}
    default_values: {"
      title: initial_values?.title || "","
      content: initial_values?.content || "","
      category_id: initial_values?.category_id || "project - help","
      tags: initial_values?.tags || "";
    }
  });
;
  const [is_submitting, setIsSubmitting] = useState (false);
;
  const handle_submit = async (values: PostFormValues) => {}
    setIsSubmitting (true),

    try {}
      await on_submit (values);

    }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

}
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

<<<<<<< HEAD
    try {
      await on_submit (values);
=======

    try {
      await on_submit (values);
<<<<<<< HEAD
=======
    } finally {
<<<<<<< HEAD
      title: initialValues?.title |""
      content: initialValues?.content |""
      categoryId: initialValues?.categoryId |"project-help"
      tags: initialValues?.tags |""
    }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (values: PostFormValues) => {
    setIsSubmitting(true)
>>>>>>> merged-prs-20250907-203621
    try {
      await onSubmit(values)
    } finally {
      setIsSubmitting(false)
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  }
      title: initialValues?.title || "",
      content: initialValues?.content || "",
      categoryId: initialValues?.categoryId || "project-help",

      tags: initialValues?.tags || ""
    }
  };
  }),;
  const [isSubmitting, setIsSubmitting] = useState(false),;

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const handleSubmit = async (values: PostFormValues) => {;
    setIsSubmitting(true),;
    try {;
      await onSubmit(values);
    } finally {;
      setIsSubmitting(false);
<<<<<<< HEAD

  return (

=======
<<<<<<< HEAD
    }
  }



=======

<<<<<<< HEAD
  return (

=======
    }
  }
=======



>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      setIsSubmitting (false);
    }
  }
;
  return (
    <Card>;
      <CardHeader>;"
        <CardTitle>{is_editing ? "Edit Post" : "Create New Post"}</CardTitle>;
      </CardHeader>;
      <CardContent>;

            <FormField;
              control={form.control}"
              name="title";
              render={({ field }) => (
                <FormItem>;
                  <FormLabel > Title</FormLabel>;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  <FormControl>;

                    <Input placeholder="Enter post title..." {...field} />;
                  </FormControl>;
                  <FormMessage />;
<<<<<<< HEAD
=======
<<<<<<< HEAD
            />;
            <FormField
              control={form && form.control}
              name="content"
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

            />;

            <FormField
              control={form && form.control}

              name="content"

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Content</FormLabel>;
                  <FormControl>;
                    <Textarea"
                      placeholder="Write your post content here..." "
                      className="min-h-[200px]"
                      {...field} 
                    />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}
            />;
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <FormField
              control={form && form.control}

              name="categoryId"
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Category</FormLabel>;
                  <FormControl>;
                    <select"
                      className="w-full p-2 border rounded-md"
                      {...field}>;"
                      <option value="getting-hired">Getting Hired</option>;"
                      <option value="project-help">Project Help</option>;"
                      <option value="ai-tools">AI Tools Discussion</option>;"
                      <option value="feedback">Feedback & Feature Requests</option>;
                    </select>;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}
<<<<<<< HEAD
=======
<<<<<<< HEAD
            />;
            <FormField
              control={form && form.control}
              name="tags"
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

            />;

            <FormField
              control={form && form.control}

              name="tags"

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Tags (comma-separated)</FormLabel>;
                  <FormControl>;
                    <Input"
                      placeholder="e && e.g. resume, hiring, flutter" 
                      {...field} 
                    />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}
            />;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
"
            <Button type="submit" disabled={isSubmitting}>;"
              {isSubmitting ? "Submitting..." : isEditing ? "Update Post" : "Create Post"}

  return (
    <Card>;
      <CardHeader>;"
        <CardTitle>{isEditing ? "Edit Post" : "Create New Post"}</CardTitle>;
      </CardHeader>;
      <CardContent>;
        <Form {...form}>;"
          <form className="space-y-6" onSubmit={form && form.handleSubmit(handleSubmit)}>;
            <FormField;
              control={form && form.control}"
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
      <CardHeader>;"
        <CardTitle>{is_editing ? "Edit Post" : "Create New Post"}</CardTitle>;
      </CardHeader>;
      <CardContent>;

            <FormField;
              control={form.control}"
              name="title";
              render={({ field }) => (
                <FormItem>;
                  <FormLabel > Title</FormLabel>;
                  <FormControl>;"
                    <Input placeholder="Enter post title..." {...field} />;
                  </FormControl>;
                  <FormMessage />;
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Category</FormLabel>;
                  <FormControl>;"
                      <option value="feedback">Feedback & Feature Requests</option>;
                    </select>;
                  </FormControl>;
                  <FormMessage />;

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
            <Button type="submit" disabled={isSubmitting}>;
              {isSubmitting ? "Submitting..." : isEditing ? "Update Post" : "Create Post"}
>>>>>>> merged-prs-20250907-203621
    }
  },

  return (
    <Card>
      <CardHeader>
        <CardTitle>{isEditing ? "Edit Post" : "Create New Post"}</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter post title..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
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
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <select
                      className="w-full p-2 border rounded-md"
                      {...field}
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
              control={form.control}
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
<<<<<<< HEAD
            
            <Button type = $2;
=======
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : isEditing ? "Update Post" : "Create Post"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
=======

            <Button type="submit" disabled={isSubmitting}>;
              {isSubmitting ? "Submitting..." : isEditing ? "Update Post" : "Create Post"}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                </FormItem>)}
            />;
            <FormField;
              control={form.control}
              name="content";
              render={({ field }) => (
                <FormItem>;
                  <FormLabel > Content</FormLabel>;
                  <FormControl>;
                    <Textarea;
                      placeholder="Write your post content here...";
                      className="min-h-[200px]";
                      {...field}
                    />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>)}
            />;
            <FormField;
              control={form.control}
              name="category_id";
              render={({ field }) => (
                <FormItem>;
                  <FormLabel > Category</FormLabel>;
                  <FormControl>;
                    <select;
                      className="w - full p - 2 border rounded-md";
                      {...field}
                    >;
                      <option value="getting - hired">Getting Hired</option>;
                      <option value="project - help">Project Help</option>;
                      <option value="ai - tools">AI Tools Discussion</option>;

                      <option value="feedback">Feedback & Feature Requests</option>;
                    </select>;
                  </FormControl>;
<<<<<<< HEAD
                  <FormMessage />;
=======
<<<<<<< HEAD
                  <FormMessage />;
=======
                  <FormMessage />;
                </FormItem>)}
            />;
            <FormField;
              control={form.control}
              name="tags";
              render={({ field }) => (
                <FormItem>;
                  <FormLabel > Tags (comma - separated)</FormLabel>;
                  <FormControl>;
                    <Input;
                      placeholder="e.g. resume, hiring, flutter";
                      {...field}
                    />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>)}
            />;
            <Button type="submit" disabled={is_submitting}>;
              {is_submitting ? "Submitting..." : is_editing ? "Update Post" : "Create Post"}
            </Button>;
          </form>;
        </Form>;
      </CardContent>;
    </Card>);
}
;
export default PostForm;
;

},


<<<<<<< HEAD

import { useState } from "react",;
import { useForm } from "react-hook-form",;
import { ;
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
;
interface PostFormValues {;
  title:string,;
  content:string,;
  categoryId:ForumCategory,;
  tags:string;}
;
interface PostFormProps {;
  initialValues?:Partial<PostFormValues>,;
  onSubmit:(values:PostFormValues) => void,;
  isEditing?:boolean;
}
;
export const PostForm = ({;
  initialValues,;
  onSubmit,;
  isEditing = false;
} PostFormProps) => {;
  const form = useForm<PostFormValues>({;
    defaultValues:{;
      title:initialValues?.title || "",;
      content:initialValues?.content || "",;
      categoryId:initialValues?.categoryId || "project-help",;
      tags:initialValues?.tags || "";
    }
  }),;
;
  const [isSubmitting, setIsSubmitting] = useState(false),;
;
  const handleSubmit = async (values:PostFormValues) => {;
    setIsSubmitting(true),;
    try {;
      await onSubmit(values);
    } finally {;
      setIsSubmitting(false),;
    }
  },;
;
  return (;
    <Card>;
      <CardHeader>;
        <CardTitle>{isEditing ? "Edit Post" :"Create New Post"}</CardTitle>;
      </CardHeader>;
      <CardContent>;
        <Form {...form}>;
          <form className="space-y-6" onSubmit={form.handleSubmit(handleSubmit)}>;
            <FormField;
              control={form.control}
              name="title";
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Title</FormLabel>;
                  <FormControl>;
                    <Input placeholder="Enter post title..." {...field} />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;              )}
            />;
            ;
            <FormField;
              control={form.control}
              name="content";
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Content</FormLabel>;
                  <FormControl>;
                    <Textarea ;
                      placeholder="Write your post content here..." ;
                      className="min-h-[200px]";
                      {...field} ;
                    />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;              )}
            />;
            ;
            <FormField;
              control={form.control}
              name="categoryId";
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Category</FormLabel>;
                  <FormControl>;
                    <select;
                      className="w-full p-2 border rounded-md";
                      {...field}
                    >;
                      <option value="getting-hired">Getting Hired</option>;
                      <option value="project-help">Project Help</option>;
                      <option value="ai-tools">AI Tools Discussion</option>;
                      <option value="feedback">Feedback & Feature Requests</option>;
                    </select>;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;              )}
            />;
            ;
            <FormField;
              control={form.control}
              name="tags";
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Tags (comma-separated)</FormLabel>;
                  <FormControl>;
                    <Input ;
                      placeholder="e.g. resume, hiring, flutter" ;
                      {...field} ;
                    />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}
            />;
            ;
            <Button type="submit" disabled={isSubmitting}>;
              {isSubmitting ? "Submitting..." :isEditing ? "Update Post" :"Create Post"}
            </Button>;
          </form>;
        </Form>;
      </CardContent>;
    </Card>;
  ),;
},;
;
export default PostForm,; import {
  Card;
CardContent;
CardFooter;
CardHeader;
CardTitle import {
  Form;
FormControl;
FormField;
FormItem;
FormLabel;
FormMessage interface PostFormValues {
  title: string;
content: string;
categoryId: ForumCategory;
tags: string 
}interface PostFormProps {
  initialValues?: Partial<PostFormValues>;
onSubmit: (values: PostFormValues) => void;
isEditing?: boolean 
}initialValues, onSubmit, isEditing = false 
}: PostFormProps) => {
  const form = useForm<PostFormValues> ({
  defaultValues: {
  const [isSubmitting, setIsSubmitting] = useState (false);
return (<Card> <CardHeader> </FormControl> <FormMessage /> </FormItem>) 
}/> <FormField <FormItem> <FormLabel>Content</FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage /> </FormItem>) 
}/> <FormField <FormItem> <FormLabel>Category</FormLabel> <FormControl> <select > <option value="getting-hired" >Getting Hired</option> <option value="project-help" >Project Help</option> <option value="ai-tools" >AI Tools Discussion</option> <option value="feedback" >Feedback & Feature Requests</option> </select> </FormControl> <FormMessage /> </FormItem>) 
}/> <FormField <FormItem> <FormLabel>Tags (comma-separated) </FormLabel> <FormControl> <Input /> </FormControl> <FormMessage /> </FormItem>) 
}/> </Button> </form> </Form> </CardContent> </Card>) 
};
export default PostForm;
}
export default PostForm;

},

>>>>>>> merged-prs-20250907-203621
export default PostForm,
export default PostForm;
export default PostForm,
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
