<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/PostForm.tsx


<<<<<<< HEAD
import { useState } from "react",
import { useForm } from "react-hook-form",

=======

=======

import { useState } from "react";
import { useForm } from "react-hook-form";
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import {useState} from "react";
import {useForm} from "react-hook-form";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import {ForumCategory} from "@/types/community";
<<<<<<< HEAD
<<<<<<< HEAD

=======
import { useState } from "react",
import { useForm } from "react-hook-form",

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { useState } from "react",
import { useForm } from "react-hook-form",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import { useState } from "react",
import { useForm } from "react-hook-form",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

<<<<<<< HEAD
interface PostFormValues {
=======

import { Textarea } from "@/components/ui/textarea",
import { ForumCategory } from "@/types/community",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Textarea } from "@/components/ui/textarea";
import { ForumCategory } from "@/types/community";
import { Textarea } from "@/components/ui/textarea",
import { ForumCategory } from "@/types/community",
interface PostFormValues {
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface PostFormValues {
  title: string,
  content: string,
  categoryId: ForumCategory,
  tags: string
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}

  title: string
  content: string
  categoryId: ForumCategory

  tags: string
}
interface PostFormProps {
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  initialValues?: Partial<PostFormValues>;
  onSubmit: (values: PostFormValues) => void,
  isEditing?: boolean
}

export const PostForm = ({;
  initialValues;
  onSubmit;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

  initialValues?: Partial<PostFormValues>;
  onSubmit: (values: PostFormValues) => void
  isEditing?: boolean
}
export const PostForm = ({
<<<<<<< HEAD
<<<<<<< HEAD
  initialValues,
  onSubmit,

=======
  initialValues;
  onSubmit;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  initialValues,
  onSubmit,
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  isEditing = false
}: PostFormProps) => {
  const form = useForm<PostFormValues>({
    defaultValues: {
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/PostForm.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/PostForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/PostForm.tsx
    }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/PostForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/PostForm.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/PostForm.tsx

    try {
      await on_submit (values);
    } finally {
<<<<<<< HEAD
      setIsSubmitting(false)
    }

  }),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
    try {
      await on_submit (values);
    } finally {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/PostForm.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      title: initialValues?.title |""
      content: initialValues?.content |""
      categoryId: initialValues?.categoryId |"project-help"
      tags: initialValues?.tags |""
    }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (values: PostFormValues) => {
    setIsSubmitting(true)
    try {
      await onSubmit(values)
    } finally {
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const handleSubmit = async (values: PostFormValues) => {;
    setIsSubmitting(true),;
    try {;
      await onSubmit(values);
    } finally {;
      setIsSubmitting(false);
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/PostForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/PostForm.tsx
    }
<<<<<<< HEAD
  },

=======
  }
=======



>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/PostForm.tsx

            />;


            <FormField
              control={form && form.control}
              name="content"

========
            />;
            <FormField
              control={form && form.control}
              name="content"
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/PostForm.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/PostForm.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/PostForm.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/PostForm.tsx

            />;


            <FormField
              control={form && form.control}
              name="tags"

========
            />;
            <FormField
              control={form && form.control}
              name="tags"
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/PostForm.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/PostForm.tsx
<<<<<<< HEAD
=======
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
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : isEditing ? "Update Post" : "Create Post"}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/PostForm.tsx
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
                      className="min - h-[200px]";
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
                      className="w - full p - 2 border rounded - md";
                      {...field}
                    >;
                      <option value="getting - hired">Getting Hired</option>;
                      <option value="project - help">Project Help</option>;
                      <option value="ai - tools">AI Tools Discussion</option>;
                      <option value="feedback">Feedback & Feature Requests</option>;
                    </select>;
                  </FormControl>;
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/PostForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/PostForm.tsx
            </Button>;
          </form>;
        </Form>;
      </CardContent>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/PostForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/PostForm.tsx
    </Card>);
}
;
export default PostForm;
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/PostForm.tsx

=======

},


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/PostForm.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
export default PostForm;

},

export default PostForm,
export default PostForm;
export default PostForm,
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
