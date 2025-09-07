<<<<<<< HEAD
import React from 'react';
import FocusLock from 'react-focus-lock';
=======
<<<<<<< HEAD
import React from 'react',;
import FocusLock from 'react-focus-lock',;
=======
import React from 'react';
import FocusLock from 'react-focus-lock';
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {;
  Dialog,;
  DialogContent,;
  DialogHeader,;
<<<<<<< HEAD
<<<<<<< HEAD
=======
  DialogTitle} from '@/components/ui/dialog',;
import { Button } from '@/components/ui/button',;
import { Input } from '@/components/ui/input',;
import { Textarea } from '@/components/ui/textarea',;
import {;
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  DialogTitle} from '@/components/ui/dialog',;'
import { Button } from '@/components/ui/button',;'
import { Input } from '@/components/ui/input',;'
import { Textarea } from '@/components/ui/textarea',;'
  }
=======
  DialogTitle} from '@/components/ui/dialog',;
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  Form,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormControl,;
  FormMessage} from '@/components/ui/form',;
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
import { useForm, type Resolver } from 'react-hook-form',;
import { yupResolver } from '@hookform/resolvers/yup',;
import * as yup from 'yup',;
import { SendIcon, Mail } from 'lucide-react';
import api from '@/services/apiClient',;
import { toast } from '@/hooks/use-toast',;
import { useAuth } from '@/hooks/useAuth',;
import { LoginModal } from '@/components/auth/LoginModal',;
;
interface ContactPublisherModalProps {;
  isOpen:boolean,;
  onClose:() => void,;
  publisherName:string,;
=======
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
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  publisherEmail?:string,;
  productId?:string;
}
type FormValues = {;
<<<<<<< HEAD
  subject: string;,;
  message:string;
},;
const schema:yup.ObjectSchema<FormValues> = yup;

  const [error, setError] = React.useState<string | null>(null),;
</string>
  const form = useForm<FormValues>({;
)
    resolver: yupResolver(schema) as Resolver<FormValues>;,;

=======
<<<<<<< HEAD
  subject:string,;
  message:string;
},;
;
const schema:yup.ObjectSchema<FormValues> = yup;
  .object({;
    subject:yup;
      .string();
      .min(5, 'Subject must be at least 5 characters');
      .required('Subject is required'),;
    message:yup;
      .string();
      .min(20, 'Message must be at least 20 characters');
      .required('Message is required')});
  .required(),;
;
export function ContactPublisherModal({;
  isOpen,;
  onClose,;
  publisherName,;
  publisherEmail,;
  productId} ContactPublisherModalProps) {;
  const { user } = useAuth(),;
  const [isSubmitting, setIsSubmitting] = React.useState(false),;
=======
  subject: string;,;
  message:string;
},;
const schema:yup.ObjectSchema<FormValues> = yup;

>>>>>>> merged-prs-20250907-203621
  const [error, setError] = React.useState<string | null>(null),;
</string>
  const form = useForm<FormValues>({;
<<<<<<< HEAD
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
=======
)
    resolver: yupResolver(schema) as Resolver<FormValues>;,;

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    <>;
    <Dialog open={isOpen} onOpenChange={onClose}>;

      <FocusLock disabled={!isOpen} returnFocus>;

        <DialogContent;
<<<<<<< HEAD
=======
<<<<<<< HEAD
          className="bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md";
          onKeyDown={handleKeyDown}
          aria-modal="true";
          aria-labelledby="contact-publisher-title";
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          className="bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md";"
          onKeyDown={handleKeyDown}"
          aria-modal="true";""
          aria-labelledby="contact-publisher-title";"
>>>>>>> merged-prs-20250907-203621
        >;

          <DialogHeader>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
            <DialogTitle id="contact-publisher-title" className="text-xl font-bold text-white flex items-center gap-2">;
              <Mail className="h-5 w-5 text-zion-cyan" />;
              Contact Publisher;
            </DialogTitle>;
          </DialogHeader>;
          {error && <p className="text-red-500 mb-2">{error}</p>}
          {publisherEmail && (;
            <div className="mb-4 text-zion-slate-light">;
            <span className="block">Email:</span>;
            <a href={`mailto:${publisherEmail}`} className="text-zion-cyan hover:underline truncate block">;
              {publisherEmail}
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

=======
>>>>>>> merged-prs-20250907-203621
            </a>;
          </div>;
        <Form {...form}>;
<<<<<<< HEAD
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
=======
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

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          </form>;
    <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;

    </>;
  ),;}
 const schema: yup.ObjectSchema<FormValues> = yup .object ({;
<<<<<<< HEAD

=======
<<<<<<< HEAD
  subject: yup .string () .min (5, 'Subject must be at least 5 characters') .required ('Subject is required'),  message: yup .string () .min (20, 'Message must be at least 20 characters') .required ('Message is required') ;
}) .required ();
=======

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
return (<> <Dialog open= {;
  isOpen ;
}onOpenChange= {;
  onClose ;
}> <FocusLock disabled= {;
<<<<<<< HEAD
=======
<<<<<<< HEAD
  !isOpen ;
}returnFocus> <DialogContent > <DialogHeader> <DialogTitle id="contact-publisher-title" className="text-xl font-bold text-white flex items-center gap-2" > <Mail className="h-5 w-5 text-zion-cyan" /> Contact Publisher </DialogTitle> </DialogHeader> <FormItem> <FormLabel>Subject</FormLabel> <FormControl> <Input /> </FormControl> <FormMessage className="text-red-500" /> </FormItem>) ";"}/> <FormField <FormItem> <FormLabel>Message</FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage className="text-red-500" /> </FormItem>) ;
}/> <Button </Button> </form> </Form> </DialogContent> </FocusLock> </Dialog> <LoginModal isOpen= {;
  loginOpen ;
}onOpenChange= {;
  setLoginOpen ;
}/> </>) ;"}'"
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
)"
}returnFocus> <DialogContent > <DialogHeader> <DialogTitle id="contact-publisher-title" className="text-xl font-bold text-white flex items-center gap-2" > <Mail className="h-5 w-5 text-zion-cyan" /> Contact Publisher   <FormItem> <FormLabel>Subject <FormControl> <Input />  <FormMessage className="text-red-500" /> ) ";"}/> <FormField <FormItem> <FormLabel>Message <FormControl> <Textarea />  <FormMessage className="text-red-500" /> ) ;"

}/> <Button  </form>     <LoginModal isOpen= {;
  loginOpen ;
  setLoginOpen ;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
:temp_broken_files/profile/ContactPublisherModal.tsx;"
}/> </>) ;"}'""
}/> </>) ;"
}'""
<<<<<<< HEAD
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/profile/ContactPublisherModal.tsx;"`;
=======
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/profile/ContactPublisherModal.tsx;"`;
=======
<<<<<<< HEAD
:temp_broken_files/profile/ContactPublisherModal.tsx
}/> </>) ;"}'"
}/> </>) ;
}'"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/profile/ContactPublisherModal.tsx
=======

}/> </>) ;
}'"

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
