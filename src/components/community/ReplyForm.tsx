<<<<<<< HEAD
<<<<<<< HEAD

import { useState } from "react",
import { useForm, ControllerRenderProps } from "react-hook-form",
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {

  Form
  FormControl
  FormField
  FormItem
  FormMessage
} from '@/components/ui/form'
import { Card, CardContent } from '@/components/ui/card'
=======
import { useState } from 'react';
import { useForm, ControllerRenderProps } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormMessage,;
} from '@/components/ui/form';
import { Card, CardContent } from '@/components/ui/card';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

interface ReplyFormProps {;
  onSubmit: (content: string) => Promise<void>;
<<<<<<< HEAD
  parentId?: string
interface ReplyFormValues {
  content: string

export const ReplyForm = ({ onSubmit, parentId }: ReplyFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const form = useForm<ReplyFormValues>({
    defaultValues: {
      content: ''
    }
  })
  const handleSubmit = async (values: ReplyFormValues) => {
    setIsSubmitting(true);    try {
      await onSubmit(values.content)
      form.reset()
    } finally {
      setIsSubmitting(false)
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
  }
  return (
    <Card>;
      <CardContent className='pt-6'>;
        <Form {...form}>;
          <form onSubmit={form && form.handleSubmit(handleSubmit)}>;
            <FormField
              control={form && form.control}
              name='content'
              render={({
                field
              }: {
<<<<<<< HEAD
                field: ControllerRenderProps<ReplyFormValues, 'content'>
              }) => (                <FormItem>
                  <FormControl>
                    <Textarea className='min-h-[100px] resize-y' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
=======
                field: ControllerRenderProps<ReplyFormValues, 'content'>;
              }) => (                <FormItem>;
                  <FormControl>;
                    <Textarea className='min-h-[100px] resize-y' {...field} />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              )}
            />;
            <div className='mt-4 flex justify-end'>;
              <Button type='submit' disabled={isSubmitting}>;
                {isSubmitting ? 'Submitting...' : 'Post Reply'}
<<<<<<< HEAD
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
export default ReplyForm

=======
              </Button>;
            </div>;
          </form>;
        </Form>;
      </CardContent>;
    </Card>;
  );
};
export default ReplyForm;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
