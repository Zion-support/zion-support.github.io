
<<<<<<< HEAD
import { useState } from "react",
import { useForm } from "react-hook-form",
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1

  Form
  FormControl
  FormField
  FormItem
  FormMessage
<<<<<<< HEAD
=======
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
  Form,
  FormControl,
  FormField,
  FormItem,
FormMessage,;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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
<<<<<<< HEAD
<<<<<<< HEAD
  }
=======
  };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
  }
  };
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1

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
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormMessage,;
} from "@/components/ui/form";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ReplyFormProps {;

  onSubmit: (content: string) => Promise<void>;
  parentId?: string
}

import { useState  } from './react';
import { use_form  } from './react - hook - form';
import { Button  } from '@/components / ui / button';
import { Textarea  } from '@/components / ui / textarea';
import {
=======
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {


  Form,
  FormControl,
  FormField,
  FormItem,


interface ReplyFormValues {;

  content: string;
}

FormMessage,;

} from "@/components/ui/form";

import { Card, CardContent, CardFooter } from "@/components/ui/card";

  };


=======

  const form = useForm<ReplyFormValues>({;
    defaultValues: {;
      content: "",;
    },;
  });

  const handleSubmit = async (values: ReplyFormValues) => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    setIsSubmitting(true);
    try {;
      (await onSubmit(values && values.content), form && form.reset());
    } finally {;
      setIsSubmitting(false);
    }

  },
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======



>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  return (
    <Card>;
      <CardContent className="pt-6">;
        <Form {...form}>;
          <form onSubmit={form && form.handleSubmit(handleSubmit)}>;
            <FormField
              control={form && form.control}
              name="content"
              render={({ field }) => (;
                <FormItem>;
                  <FormControl>;
                    <Textarea
                      placeholder={
                        parent_id;
                          ? "Write your reply...";
                          : "Join the discussion...";
                      }
                      placeholder={parentId ? "Write your reply..." : "Join the discussion..."}
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
                      className="min-h-[100px] resize-y"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
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
  );
}
export default ReplyForm;

  )
},

<<<<<<< HEAD
export default ReplyForm,
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
export default ReplyForm;
export default ReplyForm,
=======
<<<<<<< HEAD
export default ReplyForm,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
