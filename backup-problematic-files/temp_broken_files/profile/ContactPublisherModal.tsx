<<<<<<< HEAD

import React from 'react';
import FocusLock from 'react-focus-lock';

=======
import React from 'react';
import FocusLock from 'react-focus-lock';
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {;
  Dialog,;
  DialogContent,;
  DialogHeader,;

<<<<<<< HEAD

=======
  DialogTitle} from '@/components/ui/dialog',;
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
>>>>>>> origin/cursor/delete-old-data-records-6bba
  Form,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormControl,;
  FormMessage} from '@/components/ui/form',;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { useForm, type Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SendIcon, Mail } from 'lucide-react';
import api from '@/services/apiClient';
import { toast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { LoginModal } from '@/components/auth/LoginModal';
;
interface ContactPublisherModalProps {;
  isOpen: boolean;,;
  onClose: () => void;,;
  publisherName: string;,;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  publisherEmail?:string,;
  productId?:string;
}
type FormValues = {;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  subject: string;,;
  message:string;
},;
const schema:yup.ObjectSchema<FormValues> = yup;

<<<<<<< HEAD

  const [error, setError] = React.useState<string | null>(null),;
</string>
  const form = useForm<FormValues>({;

)
    resolver: yupResolver(schema) as Resolver<FormValues>;,;


=======
  const [error, setError] = React.useState<string | null>(null),;
</string>
  const form = useForm<FormValues>({;
)
    resolver: yupResolver(schema) as Resolver<FormValues>;,;

  const [error, setError] = React.useState<string | null>(null),;
</string>
  const form = useForm<FormValues>({;
    resolver:yupResolver(schema) as Resolver<FormValues>,;
    mode:'onChange',;
    defaultValues:{ subject:'', message:'' }}),;
;
  const handleSend = async () => {;
    if (!user) {;
      setLoginOpen(true),;
      return,;
    }
    const values = form.getValues(),;
    setIsSubmitting(true),;
    setError(null),;
    try {;
      await api.post('/api/messages', {;
        productId,;
        subject:values.subject,;
        body:values.message,;
        fromUser:user.id}),;
      toast.success('Message sent'),;
      form.reset(),;
      onClose(),;
    } finally {;
      setIsSubmitting(false),;    }
  },;
;
  const handleKeyDown = (e:React.KeyboardEvent) => {;
    if (e.key === 'Escape') {;
      e.stopPropagation(),;
      onClose();
    }
  },;
;
  return (;
>>>>>>> origin/cursor/delete-old-data-records-6bba
    <>;
    <Dialog open={isOpen} onOpenChange={onClose}>;

      <FocusLock disabled={!isOpen} returnFocus>;

        <DialogContent;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          className="bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md";"
          onKeyDown={handleKeyDown}"
          aria-modal="true";""
          aria-labelledby="contact-publisher-title";"
<<<<<<< HEAD

        >;

          <DialogHeader>;

=======
        >;

          <DialogHeader>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
"
            <DialogTitle id="contact-publisher-title" className="text-xl font-bold text-white flex items-center gap-2">;"
              <Mail className="h-5 w-5 text-zion-cyan" />;"

          ;"
          {error && <p className="text-red-500 mb-2">{error}</p>}""
            <div className="mb-4 text-zion-slate-light">;"
</div>"
            <span className="block">Email:</span>;""
            <a href={`mailto: ${publisherEmail;}`} className="text-zion-cyan hover:underline truncate block">;"
</a>
<<<<<<< HEAD

            </a>;
          </div>;
        <Form {...form}>;

=======
            </a>;
          </div>;
        <Form {...form}>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">;"
</form>
            <FormField;
              control={form.control}"
              name="subject";"
              render={({ field } { field: any ;}) => (;

                <FormItem>;

                  <FormLabel>Subject;
                  <FormControl>;

                    <Input;"
                      placeholder="Subject";""
                      className="bg-zion-blue border-zion-blue-light text-white";"
                      {...field}
                    />;

                  <FormMessage className="text-red-500" />;"
                ;              )}
              name="message";"


                  <FormLabel>Message;

                    <Textarea;`;
                      placeholder={`Message to ${publisherName}...`}"
                      className="bg-zion-blue border-zion-blue-light text-white min-h-[120px]";"

            <Button;
              onClick={handleSend}"
              className="w-full";"
              disabled={!form.formState.isValid || isSubmitting}
              <SendIcon className="mr-2" />;"

<<<<<<< HEAD

=======
            </a>;
          </div>;
        <Form {...form}>;
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">;
            <FormField;
              control={form.control}
              name="subject";
              render={({ field } { field:any }) => (;
                <FormItem>;
                  <FormLabel>Subject</FormLabel>;
                  <FormControl>;
                    <Input;
                      placeholder="Subject";
                      className="bg-zion-blue border-zion-blue-light text-white";
                      {...field}
                    />;
                  </FormControl>;
                  <FormMessage className="text-red-500" />;
                </FormItem>;              )}
            />;
            <FormField;
              control={form.control}
              name="message";
              render={({ field } { field:any }) => (;
                <FormItem>;
                  <FormLabel>Message</FormLabel>;
                  <FormControl>;
                    <Textarea;
                      placeholder={`Message to ${publisherName}...`}
                      className="bg-zion-blue border-zion-blue-light text-white min-h-[120px]";
                      {...field}
                    />;
                  </FormControl>;
                  <FormMessage className="text-red-500" />;
                </FormItem>;              )}
            />;
            <Button;
              onClick={handleSend}
              className="w-full";
              disabled={!form.formState.isValid || isSubmitting}
            >;
              <SendIcon className="mr-2" />;
              {isSubmitting ? 'Sending...' :'Send Message'}
            </Button>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
          </form>;
    <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;

    </>;
  ),;}
 const schema: yup.ObjectSchema<FormValues> = yup .object ({;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
return (<> <Dialog open= {;
  isOpen ;
}onOpenChange= {;
  onClose ;
}> <FocusLock disabled= {;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
)"
}returnFocus> <DialogContent > <DialogHeader> <DialogTitle id="contact-publisher-title" className="text-xl font-bold text-white flex items-center gap-2" > <Mail className="h-5 w-5 text-zion-cyan" /> Contact Publisher   <FormItem> <FormLabel>Subject <FormControl> <Input />  <FormMessage className="text-red-500" /> ) ";"}/> <FormField <FormItem> <FormLabel>Message <FormControl> <Textarea />  <FormMessage className="text-red-500" /> ) ;"

}/> <Button  </form>     <LoginModal isOpen= {;
  loginOpen ;
  setLoginOpen ;

<<<<<<< HEAD

=======
:temp_broken_files/profile/ContactPublisherModal.tsx;"
}/> </>) ;"}'""
}/> </>) ;"
}'""

ursor/fix-lint-push-and-merge-to-main-e10e:src/components/profile/ContactPublisherModal.tsx;"`;
>>>>>>> origin/cursor/delete-old-data-records-6bba
