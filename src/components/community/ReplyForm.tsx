<<<<<<< HEAD
import { useState } from 'react';
import { useForm, ControllerRenderProps } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
=======

import { useState } from "react";
import { useForm, ControllerRenderProps } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
import {
  Form,
  FormControl,
  FormField,
  FormItem,
<<<<<<< HEAD
  FormMessage,;
} from '@/components/ui/form';
import { Card, CardContent } from '@/components/ui/card';

interface ReplyFormProps {
  onSubmit: (content: string) => Promise<void>;
  parentId?: string;
=======
  FormMessage
} from "@/components/ui/form",
import { Card, CardContent } from "@/components/ui/card";
interface ReplyFormProps {
  onSubmit: (content: string,) => Promise<void>,
  parentId?: string
}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b

interface ReplyFormValues {
  content: string;

<<<<<<< HEAD
export const ReplyForm = ({ onSubmit, parentId }: ReplyFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

=======
export const ReplyForm = ({ onSubmit, parentId }: ReplyFormProps,) => {
  const [isSubmitting, setIsSubmitting] = useState(false),
  
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
  const form = useForm<ReplyFormValues>({
    defaultValues: {
      content: '',
    },
  });

<<<<<<< HEAD
  const handleSubmit = async (values: ReplyFormValues) => {
    setIsSubmitting(true);
=======
  const handleSubmit = async (values: ReplyFormValues,) => {
    setIsSubmitting(true),
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
    try {
      await onSubmit(values.content);
      form.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardContent className='pt-6'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField
<<<<<<< HEAD
              control={form.control}
              name='content'
              render={({
                field,
              }: {
                field: ControllerRenderProps<ReplyFormValues, 'content'>;
              }) => (
=======
              control = {form.control,}
              name="content"
              render={({ field }: { field: ControllerRenderProps<ReplyFormValues, "content"> },) => (
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
                <FormItem>
                  <FormControl>
                    <Textarea className='min-h-[100px] resize-y' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='mt-4 flex justify-end'>
              <Button type='submit' disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Post Reply'}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
export default ReplyForm;