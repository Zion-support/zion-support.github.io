
import { useState } from "react";
import { useForm, ControllerRenderProps } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form",
import { Card, CardContent } from "@/components/ui/card";
interface ReplyFormProps {
  onSubmit: (content: string) => Promise<void>,
  parentId?: string
}

interface ReplyFormValues {
  content: string}

export const ReplyForm = ({ onSubmit, parentId }: ReplyFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState($2);
  const form = $2;
  const handleSubmit = async (values: ReplyFormValues) => {
    setIsSubmitting($2);
    try {
      await onSubmit($2);
      form.reset()
    } finally {
      setIsSubmitting(false)
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
              render={({ field }: { field: ControllerRenderProps<ReplyFormValues, "content"> }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      className = $2;
export default ReplyForm,
