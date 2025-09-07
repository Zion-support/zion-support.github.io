<<<<<<< HEAD
import { useState } from "react",
import { useForm } from "react-hook-form",
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {

  Form
  FormControl
  FormField
  FormItem
  FormMessage
} from "@/components/ui/form",
import { Card, CardContent, CardFooter } from "@/components/ui/card";
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

import { useState } from "react",
import { useForm } from "react-hook-form",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
<<<<<<< HEAD

<<<<<<< HEAD
=======

  Form
  FormControl
  FormField
  FormItem
  FormMessage
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form",
import { Card, CardContent, CardFooter } from "@/components/ui/card",

interface ReplyFormProps {
  onSubmit: (content: string) => Promise<void>,
  parentId?: string
import { useState } from "react",;
import { useForm } from "react-hook-form",;
import { Button } from "@/components/ui/button",;
import { Textarea } from "@/components/ui/textarea",;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


import { useState } from "react",;
import { useForm } from "react-hook-form",;
import { Button } from "@/components/ui/button",;
import { Textarea } from "@/components/ui/textarea",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {;
  }
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
<<<<<<< HEAD
  FormMessage,;
} from "@/components/ui/form";"
interface ReplyFormProps {;
  }
  "onSubmit": ("content": string) => Promise<void>;
  parentId?: string
}
import { useState  } from './react';'
import { use_form  } from './react - hook - form';'
import { Button  } from '@/components / ui / button';'
import { Textarea  } from '@/components / ui / textarea';'
import {
}
import { useState } from "react";"
import { useForm } from "react-hook-form";"
import { Button } from "@/components/ui/button";"
import { Textarea } from "@/components/ui/textarea";"
  }
=======
>>>>>>> origin/chore/fix-lint-and-merge
  Form,

  FormControl,
  FormField,
  FormItem,
FormMessage,;
<<<<<<< HEAD
} from "@/components/ui/form";"
return (;
=======

import { Textarea  } from '@/components / ui / textarea';
import {";
import { useState } from "react";"
=======
  onSubmit: (content: string) => Promise<void>;
  parentId?: string
}
import { useState  } from './react';
import { use_form  } from './react - hook - form';
import { Button  } from '@/components / ui / button';
import { Textarea  } from '@/components / ui / textarea';
import {
import { useState } from "react";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { useForm } from "react-hook-form";
"
import { Button } from "@/components/ui/button";"
import { Textarea } from "@/components/ui/textarea";

  Form,
  FormControl,
  FormField,
  FormItem,
import { useState } from "react",
import { useForm } from "react-hook-form",
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
Form
  FormControl
  FormField
  FormItem
  FormMessage

<<<<<<< HEAD
  FormMessage,

} from "@/components/ui/form";

=======
<<<<<<< HEAD
  FormMessage,
=======

interface ReplyFormValues {;

  content: string;
}

FormMessage,;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

} from "@/components/ui/form";

import { Card, CardContent, CardFooter } from "@/components/ui/card";

<<<<<<< HEAD
  FormMessage,
} from '@/components / ui / form';
import { Card, CardContent, CardFooter  } from '@/components / ui / card';
interface ReplyFormProps {
  on_submit: (content: string) => Promise < void>;
  parent_id?: string;
}
interface ReplyFormValues {
interface ReplyFormValues {;
  content: string;
}
=======
  };


=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const form = useForm<ReplyFormValues>({;
    defaultValues: {;
      content: "",;
    },;
  });
  const handleSubmit = async (values: ReplyFormValues) => {;
    setIsSubmitting(true);
    try {;
      (await onSubmit(values && values.content), form && form.reset());
    } finally {;
      setIsSubmitting(false);
    }

  },




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return (
>>>>>>> origin/chore/fix-lint-and-merge
    <Card>;

      <CardContent className="pt-6">;
        <Form {...form}>;
          <form onSubmit={form && form.handleSubmit(handleSubmit)}>;
            <FormField;
              control={form && form.control}"
              name="content"
              render={({ field }) => (;
                <FormItem>;
                  <FormControl>;
<<<<<<< HEAD
                    <Textarea;
export const ReplyForm = ({ on_submit, parent_id }: ReplyFormProps) =>: any {};
=======
                    <Textarea
export const ReplyForm = ({ on_submit, parent_id }: ReplyFormProps) =>: any {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const [is_submitting, setIsSubmitting] = useState (false);
;
  const form = use_form < ReplyFormValues>({}
    default_values: {"
      content: "",
    },

FormMessage,;
} from "@/components/ui/form";""
import { Card, CardContent, CardFooter } from "@/components/ui/card";"
interface ReplyFormProps {
  // TODO: Implement
}
  onSubmit: (content: string) => Promise<void>;
</void>
    <Card>;
"
      <CardContent className="pt-6">;"

        <Form {...form}>;

          <form onSubmit={form && form.handleSubmit(handleSubmit)}>;
</form>
            <FormField;
              control={form && form.control}"
              name="content""
              render={({ field }) => (;

                <FormItem>;

                  <FormControl>;

                    <Textarea;)
export const ReplyForm = ({ on_submit, parent_id }: ReplyFormProps) =>: any {

  const form = use_form < ReplyFormValues>({
    default_values: {,"
  content: "","
    },)
pr-12325
  });
;
  const handle_submit = async (values: ReplyFormValues) => {}
    setIsSubmitting (true);
    try {}
      (await on_submit (values.content), form.reset ());

      setIsSubmitting (false);
    }
  }
;
  return (

        <Form {...form}>;
          <form on_submit={form.handle_submit (handle_submit)}>;
            <FormField;
              control={form.control}"
              name="content";
              render={({ field }) => (
                <FormItem>;
                  <FormControl>;
                    <Textarea;
                      placeholder={}
                        parent_id;"
                          ? "Write your reply...";"
<<<<<<< HEAD
                          : "Join the discussion...";"
                      }
                      className="min - h-[100px] resize-y";"
  FormMessage;
} from "@/components/ui/form",;"
=======
                          : "Join the discussion...";

import { Card, CardContent, CardFooter } from "@/components/ui/card",;
>>>>>>> origin/chore/fix-lint-and-merge
;
interface ReplyFormProps {;
  onSubmit:(content:string) => Promise<void>,;
  parentId?:string;}
;
interface ReplyFormValues {;
  content:string;
}
;
export const ReplyForm = ({ onSubmit, parentId } ReplyFormProps) => {;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  ;
  const form = useForm<ReplyFormValues>({;
    defaultValues:{;"
      content:"";
    }
  }),;
;
  const handleSubmit = async (values:ReplyFormValues) => {;
    setIsSubmitting(true),;
    try {;
      await onSubmit(values.content),;
      form.reset();
    } finally {;
      setIsSubmitting(false),;
    }
  },;
;
  return (;
    <Card>;"
      <CardContent className="pt-6">;
        <Form {...form}>;
          <form onSubmit={form.handleSubmit(handleSubmit)}>;
            <FormField;
              control={form.control}"
              name="content";
              render={({ field }) => (;
                <FormItem>;
                  <FormControl>;
                    <Textarea;"
                      placeholder={parentId ? "Write your reply..." :"Join the discussion..."}"
                      className="min-h-[100px] resize-y";
                      {...field}
                    />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}
            />;"
            <div className="mt-4 flex justify-end">;"
              <Button type="submit" disabled={isSubmitting}>;"
                {isSubmitting ? "Submitting..." :"Post Reply"}
</Card>"
      <CardContent className="pt - 6">;"
</CardContent>
        <Form {...form}>;
</Form>)
          <form on_submit={form.handle_submit (handle_submit)}>;
</form>
            <FormField;
              control={form.control}"
              name="content";"
              render={({ field }) => (
</FormField>
                <FormItem>;
</FormItem>
                  <FormControl>;
</FormControl>
                    <Textarea;
                      placeholder={
                        parent_id;"
                          ? "Write your reply...";""
                          : "Join the discussion...";"
                      }"
                      className="min - h-[100px] resize - y";"
  FormMessage;"
} from "@/components/ui/form",;""
import { Card, CardContent, CardFooter } from "@/components/ui/card",;"
;
interface ReplyFormProps {;)
  onSubmit:(content:string) => Promise<void>,;
</Textarea>
  const form = useForm<ReplyFormValues>({;
</ReplyFormValues>
    <Card>;
</Card>"
      <CardContent className="pt-6">;"
</CardContent>
        <Form {...form}>;
</Form>)
          <form onSubmit={form.handleSubmit(handleSubmit)}>;
</form>
            <FormField;
              control={form.control}"
              name="content";"
              render={({ field }) => (;
</FormField>
                <FormItem>;
</FormItem>
                  <FormControl>;
</FormControl>
                    <Textarea;"
                      placeholder={parentId ? "Write your reply..." :"Join the discussion..."}""
                      className="min-h-[100px] resize-y";"
                      {...field}
                    />;
</Textarea>
                  </FormControl>;
                  <FormMessage />;
</FormMessage>
                </FormItem>;"
            <div className="mt-4 flex justify-end">;"
</div>"
              <Button type="submit" disabled={isSubmitting}>;"
</Button>
              </Button>;
            </div>;
          </form>;
        </Form>;
      </CardContent>;

  return (
    <Card>;"
      <CardContent className="pt-6">;
        <Form {...form}>;
          <form onSubmit={form && form.handleSubmit(handleSubmit)}>;
            <FormField;
              control={form && form.control}"
              name="content"
              render={({ field }) => (;
                <FormItem>;
                  <FormControl>;
<<<<<<< HEAD
                    <Textarea,
export const ReplyForm = ({ on_submit, parent_id }: ReplyFormProps) =>: any {
  }
;
    }
    "default_values": {
      }
      "content": ""}});"
;
    }
=======
                    <Textarea;
export const ReplyForm = ({ on_submit, parent_id }: ReplyFormProps) =>: any {};
  const [is_submitting, setIsSubmitting] = useState (false);
;
  const form = use_form < ReplyFormValues>({}
    default_values: {"
      content: "",
    },
    <Card>;
</Card>"
      <CardContent className="pt-6">;"
</CardContent>
        <Form {...form}>;
</Form>)
          <form onSubmit={form && form.handleSubmit(handleSubmit)}>;
</form>
            <FormField;
              control={form && form.control}"
              name="content""
              render={({ field }) => (;
</FormField>
                <FormItem>;
</FormItem>
                  <FormControl>;
</FormControl>
                    <Textarea;)
export const ReplyForm = ({ on_submit, parent_id }: ReplyFormProps) =>: any {
</Textarea>
  const form = use_form < ReplyFormValues>({
    default_values: {,"
  content: "","
    },)
  });
;
  const handle_submit = async (values: ReplyFormValues) => {}
>>>>>>> origin/chore/fix-lint-and-merge
    setIsSubmitting (true);
    try {}
      (await on_submit (values.content), form.reset ());

      setIsSubmitting (false);
    }
  }
;
  return (

        <Form {...form}>;
          <form on_submit={form.handle_submit (handle_submit)}>;
            <FormField;
              control={form.control}"
              name="content";
              render={({ field }) => (
                <FormItem>;
                  <FormControl>;
                    <Textarea;
<<<<<<< HEAD

                      placeholder={}
                        parent_id;"
                          ? "Write your reply...";"
                          : "Join the discussion...";

=======
                      placeholder={
                        parent_id;
                          ? "Write your reply...";
                          : "Join the discussion...";
                      }
                      className="min - h-[100px] resize - y";
  FormMessage;
} from "@/components/ui/form",;
import { Card, CardContent, CardFooter } from "@/components/ui/card",;
;
interface ReplyFormProps {;
  onSubmit:(content:string) => Promise<void>,;
  parentId?:string;}
;
interface ReplyFormValues {;
  content:string;
}
;
export const ReplyForm = ({ onSubmit, parentId } ReplyFormProps) => {;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  ;
  const form = useForm<ReplyFormValues>({;
    defaultValues:{;
      content:"";
    }
  }),;
;
  const handleSubmit = async (values:ReplyFormValues) => {;
    setIsSubmitting(true),;
    try {;
      await onSubmit(values.content),;
      form.reset();
    } finally {;
      setIsSubmitting(false),;
    }
  },;
;
  return (;
    <Card>;
      <CardContent className="pt-6">;
        <Form {...form}>;
          <form onSubmit={form.handleSubmit(handleSubmit)}>;
            <FormField;
              control={form.control}
              name="content";
              render={({ field }) => (;
                <FormItem>;
                  <FormControl>;
                    <Textarea;
                      placeholder={parentId ? "Write your reply..." :"Join the discussion..."}
                      className="min-h-[100px] resize-y";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                      {...field}
                    />;
                  </FormControl>;
                  <FormMessage />;
<<<<<<< HEAD

                </FormItem>)}

                {is_submitting ? "Submitting..." : "Post Reply"}

</Card>"
      <CardContent className="pt - 6">;"
</CardContent>
        <Form {...form}>;
</Form>)
          <form on_submit={form.handle_submit (handle_submit)}>;
</form>
            <FormField;
              control={form.control}"
              name="content";"
              render={({ field }) => (
</FormField>
                <FormItem>;
</FormItem>
                  <FormControl>;
</FormControl>
                    <Textarea;

                      placeholder={
                        parent_id;"
                          ? "Write your reply...";""
                          : "Join the discussion...";"
                      }"
                      className="min - h-[100px] resize - y";"
                      {...field}
                    />;
</Textarea>
                  </FormControl>;
                  <FormMessage />;
</FormMessage>
)
                </FormItem>)}"
            <div className="mt - 4 flex justify - end">;"
</div>"
              <Button type="submit" disabled={is_submitting}>;"
</Button>
=======
                </FormItem>;
              )}
            />;
            <div className="mt-4 flex justify-end">;
              <Button type="submit" disabled={isSubmitting}>;
                {isSubmitting ? "Submitting..." :"Post Reply"}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              </Button>;
            </div>;
          </form>;
        </Form>;
      </CardContent>;

<<<<<<< HEAD
    </Card>);
}
;
export default ReplyForm;
;
<<<<<<< HEAD
} from "@/components/ui/form";"
>>>>>>> merged-prs-20250907-203621
interface ReplyFormProps {
  onSubmit: (content: string) => Promise<void>,
  parentId?: string
=======

} from "@/components/ui/form";

"
} from "@/components/ui/form";
"
import { Card, CardContent, CardFooter } from "@/components/ui/card";

  onSubmit: (content: string) => Promise<void>;
  parentId?: string;
>>>>>>> origin/chore/fix-lint-and-merge
}
<<<<<<< HEAD
interface ReplyFormValues {
  content: string}

export const ReplyForm = ({ onSubmit, parentId }: ReplyFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState($2);
  const form = $2;
  const handleSubmit = async (values: ReplyFormValues) => {
    setIsSubmitting($2);
=======
interface ReplyFormValues {}
  content: string;
}

<<<<<<< HEAD
export const ReplyForm = ({ onSubmit, parentId }: ReplyFormProps) => {;
  }
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<ReplyFormValues>({
    }
    "defaultValues": {
      }
      "content": """
    }
  });
  const handleSubmit = async ("values": ReplyFormValues) => {
    }
    setIsSubmitting(true);
>>>>>>> merged-prs-20250907-203621
    try {
      await onSubmit($2);
      form.reset()
    } finally {
<<<<<<< HEAD
      setIsSubmitting(false)
    }
  },

  return (
    <Card>
      <CardContent className = $2;
export default ReplyForm,
=======
      }
      setIsSubmitting(false);
    }
  }
  };
import { useState } from "react","
import { useForm } from "react-hook-form","
import { Button } from "@/components/ui/button","
import { Textarea } from "@/components/ui/textarea","
  }
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form","
import { Card, CardContent, CardFooter } from "@/components/ui/card","
interface ReplyFormProps {
  }
  "onSubmit": ("content": string) => Promise<void>,
  parentId?: string,
import { useForm } from "react-hook-form",;"
import { Button } from "@/components/ui/button",;"
import { Textarea } from "@/components/ui/textarea",;"
  }
=======
import {;
>>>>>>> origin/chore/fix-lint-and-merge
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormMessage,;"
} from "@/components/ui/form";"
<<<<<<< HEAD
=======
import { Card, CardContent, CardFooter } from "@/components/ui/card";

>>>>>>> origin/chore/fix-lint-and-merge
interface ReplyFormProps {;

  onSubmit: (content: string) => Promise<void>;
  parentId?: string;
}
<<<<<<< HEAD
}
}
interface ReplyFormValues {;
  }
  "content": string;
}
    setIsSubmitting(true);
    try {;
      (await onSubmit(values && values.content), form && form.reset());
    } finally {;
      }
      setIsSubmitting(false);
    }
=======
'
import { useState  } from './react';'
import { use_form  } from './react - hook - form';'
import { Button  } from '@/components / ui / button';'
import { Textarea  } from '@/components / ui / textarea';
import {";
import { useState } from "react";"
import { useForm } from "react-hook-form";
"
import { Button } from "@/components/ui/button";"
import { Textarea } from "@/components/ui/textarea";
>>>>>>> origin/chore/fix-lint-and-merge

  }

  return (
    <Card>;"
      <CardContent className="pt-6">;
        <Form {...form}>;
          <form onSubmit={form && form.handleSubmit(handleSubmit)}>;
            <FormField;
              control={form && form.control}"
              name="content"
              render={({ field }) => (;
                <FormItem>;
                  <FormControl>;
                    <Textarea;
                      placeholder={}
                        parent_id;"
                          ? "Write your reply...";"
                          : "Join the discussion...";

=======
                      placeholder={parentId ? "Write your reply..." : "Join the discussion..."}

<<<<<<< HEAD
} from "@/components/ui/form";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
interface ReplyFormProps {
  onSubmit: (content: string) => Promise<void>;
  parentId?: string
}
interface ReplyFormValues {
  content: string;
}

export const ReplyForm = ({ onSubmit, parentId }: ReplyFormProps) => {;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<ReplyFormValues>({
    defaultValues: {
      content: ""
    }
  });
  const handleSubmit = async (values: ReplyFormValues) => {
    setIsSubmitting(true);
    try {
      (await onSubmit(values.content), form.reset());
    } finally {
      setIsSubmitting(false);
    }
  }
  };

import { useState } from "react",
import { useForm } from "react-hook-form",
import { Button } from "@/components/ui/button",
import { Textarea } from "@/components/ui/textarea",
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form",
import { Card, CardContent, CardFooter } from "@/components/ui/card",

interface ReplyFormProps {
  onSubmit: (content: string) => Promise<void>,
  parentId?: string
import { useState } from "react",;
import { useForm } from "react-hook-form",;
import { Button } from "@/components/ui/button",;
import { Textarea } from "@/components/ui/textarea",;
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormMessage;
} from "@/components/ui/form",;
import { Card, CardContent, CardFooter } from "@/components/ui/card",;
interface ReplyFormProps {;
  onSubmit: (content: string) => Promise<void>,;
  parentId?: string;
}
;
interface ReplyFormValues {;
  content: string;
}
;
export const ReplyForm = ({ onSubmit, parentId }: ReplyFormProps) => {;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const form = useForm<ReplyFormValues>({;
    defaultValues: {;
      content: "";
    }
  }),;
  const handleSubmit = async (values: ReplyFormValues) => {;
    setIsSubmitting(true),;
    try {;
      await onSubmit(values.content),;
      form.reset();
    } finally {;
      setIsSubmitting(false);
    }
  },

  return (
    <Card>
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder={
                        parentId
                          ? "Write your reply..."
                          : "Join the discussion..."
                      }
                      placeholder={parentId ? "Write your reply..." : "Join the discussion..."}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                      className="min-h-[100px] resize-y"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />"
            <div className="mt-4 flex justify-end">"
              <Button type="submit" disabled={isSubmitting}>"
                {isSubmitting ? "Submitting..." : "Post Reply"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
<<<<<<< HEAD

                      className="min - h-[100px] resize - y";
                      {...field}
                    />;
                  </FormControl>;
                  <FormMessage />;
              </Button>;
            </div>;
          </form>;
        </Form>;
      </CardContent>;
=======
<<<<<<< HEAD
  )
},


    </Card>;
  ),;
},;
;
export default ReplyForm,; import {
  Form;
FormControl;
FormField;
FormItem;
FormMessage interface ReplyFormProps {
  onSubmit: (content: string) => Promise<void>;
parentId?: string 
}interface ReplyFormValues {
  content: string 
}export const ReplyForm = ({
  onSubmit, parentId 
}: ReplyFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState (false);
defaultValues: {
  className="min-h-[100px] resize-y" {
  ...field 
}/> </FormControl> <FormMessage /> </FormItem>) 
}/> </Button> </div> </form> </Form> </CardContent> </Card>) 
};
export default ReplyForm;
);
}
export default ReplyForm;

export default ReplyForm;

  );
}
export default ReplyForm;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  )
},

<<<<<<< HEAD
export default ReplyForm,
export default ReplyForm;
export default ReplyForm,
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
