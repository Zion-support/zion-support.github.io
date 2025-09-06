interface ReplyFormProps {;
  onSubmit: (content: string) => Promise<void>;


import { useState } from 'react'
import { useForm, ControllerRenderProps } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'




>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

import {
  Form,
  FormControl,
  FormField,
  FormItem,

  FormMessage,
} from '@/components/ui/form'
import { Card, CardContent } from '@/components/ui/card'

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





interface ReplyFormProps {
  onSubmit: (content: string) => Promise<void>;
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

      content: '',;
    },;
  });
  const handleSubmit = async (values: ReplyFormValues) => {;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              )}
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

}
export default ReplyForm


}
export default ReplyForm;