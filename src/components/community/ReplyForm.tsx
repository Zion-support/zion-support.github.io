<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/community/ReplyForm.tsx


<<<<<<< HEAD
import {
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

import { useState } from "react",
import { useForm, ControllerRenderProps } from "react-hook-form",
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  Form
  FormControl
  FormField
  FormItem
  FormMessage
} from '@/components/ui/form'
import { Card, CardContent } from '@/components/ui/card'
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> import {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
interface ReplyFormProps {;
  onSubmit: (content: string) => Promise<void>;


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
import { useState } from 'react'
import { useForm, ControllerRenderProps } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
<<<<<<< HEAD
import {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Card, CardContent } from '@/components/ui/card'
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  FormMessage,
} from '@/components/ui/form'
import { Card, CardContent } from '@/components/ui/card'
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

import { useState } from "react",
import { useForm, ControllerRenderProps } from "react-hook-form",
import { Button } from "@/components/ui/button",
import { Textarea } from "@/components/ui/textarea",
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form",
import { Card, CardContent } from "@/components/ui/card",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======




>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
interface ReplyFormProps {
  onSubmit: (content: string) => Promise<void>;
  parentId?: string

    setIsSubmitting(true);    try {
=======
>>>>>>> 
>>>>>>> interface ReplyFormProps {
  onSubmit: (content: string) => Promise<void>;
  parentId?: string
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

interface ReplyFormProps {
  onSubmit: (content: string) => Promise<void>;
  parentId?: string
interface ReplyFormValues {
  content: string

export const ReplyForm = ({ onSubmit, parentId }: ReplyFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const form = useForm<ReplyFormValues>({
    defaultValues: {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      content: ''
    }
  })
  const handleSubmit = async (values: ReplyFormValues) => {
<<<<<<< HEAD
<<<<<<< HEAD
interface ReplyFormProps {
  onSubmit: (content: string) => Promise<void>;
  parentId?: string

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      content: '',;
    },;
  });
  const handleSubmit = async (values: ReplyFormValues) => {;
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>     setIsSubmitting(true);    try {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
    setIsSubmitting(true);    try {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      await onSubmit(values.content)
      form.reset()
    } finally {
      setIsSubmitting(false)
<<<<<<< HEAD
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
<<<<<<< HEAD
import { useState } from 'react';
import { useForm, ControllerRenderProps } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
=======

>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/community/ReplyForm.tsx
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useState } from "react",;
import { useForm, ControllerRenderProps } from "react-hook-form",;
import { Button } from "@/components/ui/button",;
import { Textarea } from "@/components/ui/textarea",;
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/community/ReplyForm.tsx
========
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/community/ReplyForm.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/community/ReplyForm.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  FormMessage;
} from "@/components/ui/form",;
import { Card, CardContent } from "@/components/ui/card",;
interface ReplyFormProps {;
  onSubmit: (content: string) => Promise<void>,;
<<<<<<< HEAD
========
<<<<<<< HEAD
  FormMessage,;
} from '@/components/ui/form';
import { Card, CardContent } from '@/components/ui/card';
interface ReplyFormProps {;
  onSubmit: (content: string) => Promise<void>;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/community/ReplyForm.tsx
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  parentId?: string;
interface ReplyFormValues {;
  content: string;
export const ReplyForm = ({ onSubmit, parentId }: ReplyFormProps) => {;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<ReplyFormValues>({;
    defaultValues: {;
      content: '',;
    },;
  });
  const handleSubmit = async (values: ReplyFormValues) => {;
    setIsSubmitting(true);    try {;
      await onSubmit(values && values.content);
      form && form.reset();
    } finally {;
      setIsSubmitting(false);
<<<<<<<< HEAD:src/components/community/ReplyForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/community/ReplyForm.tsx
import { useState } from 'react';
import { use_form, ControllerRenderProps } from 'react - hook - form';
import { Button } from '@/components / ui / button';
import { Textarea } from '@/components / ui / textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components / ui / form';
import { Card, CardContent } from '@/components / ui / card';
interface ReplyFormProps {
  on_submit: (content: string) => Promise < void>;
  parent_id?: string;
interface ReplyFormValues {
  content: string;
export const ReplyForm = ({ on_submit, parent_id }: ReplyFormProps) =>: any {
  const [is_submitting, setIsSubmitting] = useState (false);
  const form = use_form < ReplyFormValues>({
    default_values: {
      content: '',
    },
  });
  const handle_submit = async (values: ReplyFormValues) => {
    setIsSubmitting (true);    try {
      await on_submit (values.content);
      form.reset ();
    } finally {
      setIsSubmitting (false);
<<<<<<<< HEAD:src/components/community/ReplyForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/community/ReplyForm.tsx
    }
  }
  return (
    <Card>;
<<<<<<<< HEAD:src/components/community/ReplyForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/community/ReplyForm.tsx
      <CardContent className='pt - 6'>;
        <Form {...form}>;
          <form on_submit={form.handle_submit (handle_submit)}>;
            <FormField;
              control={form.control}
              name='content';
<<<<<<<< HEAD:src/components/community/ReplyForm.tsx

              render={({
                field
              }: {

                field: ControllerRenderProps<ReplyFormValues, 'content'>;
              }) => (                <FormItem>;
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
    }
  },

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  return (
=======
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <Card>
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

              )}
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              control={form.control}
              name='content'
              render={({
                field
              }: {
                field: ControllerRenderProps<ReplyFormValues, 'content'>
              }) => (                <FormItem>
                  <FormControl>
                    <Textarea className='min-h-[100px] resize-y' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>               )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              control={form.control}
              name="content"
              render={({ field }: { field: ControllerRenderProps<ReplyFormValues "content"> }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      className="min-h-[100px] resize-y"
  },;
  return (;
    <Card>;
      <CardContent className="pt-6">;
        <Form {...form}>;
          <form onSubmit={form.handleSubmit(handleSubmit)}>;
            <FormField;
              control={form.control}
              name="content";
              render={({ field }: { field: ControllerRenderProps<ReplyFormValues "content"> }) => (;
                <FormItem>;
<<<<<<< HEAD
                  <FormControl>;
                    <Textarea;
                      className="min-h-[100px] resize-y";
                      {...field}
                    />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            />
            <div className="mt-4 flex justify-end">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Post Reply"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
}
export default ReplyForm
}
export default ReplyForm;
;
}
}

>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
========
              render={({
                field
              }: {
                field: ControllerRenderProps<ReplyFormValues, 'content'>;
              }) => (                <FormItem>;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/community/ReplyForm.tsx
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                  <FormControl>;
                    <Textarea className='min-h-[100px] resize-y' {...field} />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
<<<<<<<< HEAD:src/components/community/ReplyForm.tsx



<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/community/ReplyForm.tsx
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
              )}
            />;
            <div className='mt-4 flex justify-end'>;
              <Button type='submit' disabled={isSubmitting}>;
                {isSubmitting ? 'Submitting...' : 'Post Reply'}
<<<<<<<< HEAD:src/components/community/ReplyForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/community/ReplyForm.tsx
              </Button>;
            </div>;
          </form>;
        </Form>;
      </CardContent>;
    </Card>;
  );
};
<<<<<<<< HEAD:src/components/community/ReplyForm.tsx

<<<<<<< HEAD
========
export default ReplyForm;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/community/ReplyForm.tsx
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                field: ControllerRenderProps < ReplyFormValues, 'content'>;
              }) => (                <FormItem>;
                  <FormControl>;
                    <Textarea className='min - h-[100px] resize - y' {...field} />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>)}
            />;
            <div className='mt - 4 flex justify - end'>;
              <Button type='submit' disabled={is_submitting}>;
                {is_submitting ? 'Submitting...' : 'Post Reply'}
              </Button>;
            </div>;
          </form>;
        </Form>;
      </CardContent>;
    </Card>);
}
<<<<<<< HEAD
export default ReplyForm;
<<<<<<<< HEAD:src/components/community/ReplyForm.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 
>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
  FormMessage;
} from "@/components/ui/form",;
import { Card, CardContent } from "@/components/ui/card",;
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
              render={({ field } { field:ControllerRenderProps<ReplyFormValues "content"> }) => (;
                <FormItem>;
                  <FormControl>;
                    <Textarea;
                      className="min-h-[100px] resize-y";
                      {...field}
                    />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}
            />;
            <div className="mt-4 flex justify-end">;
              <Button type="submit" disabled={isSubmitting}>;
                {isSubmitting ? "Submitting..." :"Post Reply"}
              </Button>;
            </div>;
          </form>;
        </Form>;
      </CardContent>;
    </Card>;
  ),;
},;
;
export default ReplyForm,; import {;
  Form;
FormControl;
FormField;
FormItem;
FormMessage interface ReplyFormProps {;
  onSubmit: (content: string) => Promise<void>;
parentId?: string ;
}interface ReplyFormValues {;
  content: string ;
}export const ReplyForm = ({;
  onSubmit, parentId ;
}: ReplyFormProps) => {;
  const [isSubmitting, setIsSubmitting] = useState (false);
defaultValues: {;
  ...field ;
}/> </FormControl> <FormMessage /> </FormItem>) ;
}/> </Button> </div> </form> </Form> </CardContent> </Card>) ;
};
export default ReplyForm;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/community/ReplyForm.tsx
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
export default ReplyForm
}
export default ReplyForm;
;
}
}
},

export default ReplyForm,
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
export default ReplyForm;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
