

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import {useState} from "react";
import {useForm} from "react-hook-form";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import {ForumCategory} from "@/types/community";
import { useState } from "react",
import { useForm } from "react-hook-form",
import { useState } from "react",
import { useForm } from "react-hook-form",
=======
=======
=======
import { useState } from "react",
import { useForm } from "react-hook-form",
=======import { Textarea } from "@/components/ui/textarea";
import { ForumCategory } from "@/types/community";
import { Textarea } from "@/components/ui/textarea",
import { ForumCategory } from "@/types/community",
import { Textarea } from "@/components/ui/textarea",
import { ForumCategory } from "@/types/community",
=======
interface PostFormValues {
  title: string,
  content: string,
  categoryId: ForumCategory,
  tags: string
  title: string
  content: string
  categoryId: ForumCategory

  tags: string
}
interface PostFormProps {
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  initialValues?: Partial<PostFormValues>;
  onSubmit: (values: PostFormValues) => void,
  isEditing?: boolean
}

export const PostForm = ({;
  initialValues;
  onSubmit;
==============

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

=======  initialValues?: Partial<PostFormValues>;
  onSubmit: (values: PostFormValues) => void
  isEditing?: boolean
}
export const PostForm = ({
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
    }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
=======
      title: initialValues?.title |""
      content: initialValues?.content |""
      categoryId: initialValues?.categoryId |"project-help"
      tags: initialValues?.tags |""
    }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

=======
    try {
      await on_submit (values);
    } finally {


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleSubmit = async (values: PostFormValues) => {;
    setIsSubmitting(true),;
    try {;
      await onSubmit(values);
    } finally {;
      setIsSubmitting(false);


=======
=======
    }
  }
=======



            />;


            <FormField
              control={form && form.control}
              name="content"

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

            <Button type="submit" disabled={isSubmitting}>;              {isSubmitting ? "Submitting..." : isEditing ? "Update Post" : "Create Post"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
            <Button type="submit" disabled={isSubmitting}>;
              {isSubmitting ? "Submitting..." : isEditing ? "Update Post" : "Create Post"}
=======                </FormItem>)}
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
            </Button>;
          </form>;
        </Form>;
      </CardContent>;
    </Card>);
=======}
;
export default PostForm;
;

},


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

export default PostForm,
export default PostForm;
export default PostForm,
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
