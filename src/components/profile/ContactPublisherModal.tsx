import React from 'react''
import FocusLock from 'react-focus-lock''
import {

import React from 'react
import FocusLock from 'react-focus-lock
import {
  // TODO: Implement
}
pr-12325
  Dialog,
  DialogContent,
  DialogHeader,;
  DialogTitle;
} from '@/components/ui/dialog'; import { Button } from '@/components/ui/button'; import { Input } from '@/components/ui/input''
import { Textarea } from '@/components/ui/textarea''

} from '@/components/ui/dialog'; import { Button } from '@/components/ui/button'; import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
  Dialog
  DialogContent
  DialogHeader
  DialogTitle} from '@/components/ui/dialog''
import { Button } from '@/components/ui/button''
import { Input } from '@/components/ui/input''
  Form
  FormField
  FormItem
  FormLabel
  FormControl
  FormMessage
} from '@/components/ui/form''
import { useForm, type Resolver } from 'react-hook-form''
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SendIcon, Mail } from 'lucide-react'; import api from '@/services/apiClient''
import { toast } from '@/hooks/use-toast''
import { useAuth } from '@/hooks/useAuth''
import { LoginModal } from '@/components/auth/LoginModal''
} from '@/components/ui/form'
import { useForm, type Resolver } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { SendIcon, Mail } from 'lucide-react'; import api from '@/services/apiClient'
import { toast } from '@/hooks/use-toast'
import { useAuth } from '@/hooks/useAuth'
import { LoginModal } from '@/components/auth/LoginModal'
  Form
  FormField
  FormItem
  FormLabel
  FormControl
  FormMessage} from '@/components/ui/form''
import {useForm, type, Resolver} from 'react-hook-form''
import {yupResolver} from '@hookform/resolvers/yup''
import { SendIcon, Mail } from 'lucide-react''
import api from '@/services/apiClient''
  isOpen: boolean,
  onClose: () => void,
  publisherName: string,
  publisherEmail?: string
  productId?: string
import React from 'react';
import FocusLock from 'react - focus - lock';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components / ui / dialog'; import { Button } from '@/components / ui / button'; import { Input } from '@/components / ui / input';
import { Textarea } from '@/components / ui / textarea';
  Dialog;
  DialogContent;
  DialogHeader;
  DialogTitle} from '@/components / ui / dialog';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import {
Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,;
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {

origin/cursor/automate-test-improve-and-merge-code-2533
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components / ui / form';
import { use_form, type Resolver } from 'react - hook - form';
import { yup_resolver } from '@hookform / resolvers / yup';
import * as yup from 'yup';
import { SendIcon, Mail } from 'lucide-react'; import api from '@/services / api_client';
import { toast } from '@/hooks / use - toast';
import { use_auth } from '@/hooks / use_auth';
import { LoginModal } from '@/components / auth / LoginModal';

} from '@/components/ui/dialog'; import { Button } from '@/components/ui/button'; import { Input } from '@/components/ui/input
import { Textarea } from '@/components/ui/textarea
  Dialog;
  DialogContent;
  DialogHeader;
  DialogTitle} from '@/components/ui/dialog
import { Button } from '@/components/ui/button
import { Input } from '@/components/ui/input
pr-12325
  Form;
  FormField;
  FormItem;
  FormLabel;
  FormControl;
  FormMessage} from '@/components / ui / form';
  FormMessage;
} from '@/components/ui/form
import { useForm, type Resolver } from 'react-hook-form
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SendIcon, Mail } from 'lucide-react'; import api from '@/services/apiClient
import { toast } from '@/hooks/use-toast
import { useAuth } from '@/hooks/useAuth
import { LoginModal } from '@/components/auth/LoginModal
  FormMessage} from '@/components/ui/form
import {useForm, type, Resolver} from 'react-hook-form
import {yupResolver} from '@hookform/resolvers/yup
import { SendIcon, Mail } from 'lucide-react
import api from '@/services/apiClient
  isOpen: boolean;,
  onClose: () => void;
  publisherName: string;
  publisherEmail?: string;
  productId?: string;
import React from 'react';
import FocusLock from 'react - focus - lock';
  // TODO: Implement
  DialogHeader,
  DialogTitle,
} from '@/components/ui/ dialog'; import { Button, Input } from 'lucide-react';
import { Textarea } from '@/components/ui/ textarea';
  DialogTitle} from '@/components/ui/ dialog';
import { Button } from '@/components/ui/ button';
import { Input } from '@/components/ui/ input';
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/ form';
import { use_form, type Resolver } from 'react - hook - form';
import { yup_resolver } from '@hookform / resolvers / yup';
import { SendIcon, Mail } from 'lucide-react'; import api from '@/services / api_client';
import { toast } from '@/hooks/ use - toast';
import { use_auth } from '@/hooks/ use_auth';
import { LoginModal } from '@/components/ auth / LoginModal';
  FormMessage} from '@/components/ui/ form';
pr-12325
import {use_form, type, Resolver} from 'react - hook - form';
import {yup_resolver} from '@hookform / resolvers / yup';
import { SendIcon, Mail } from 'lucide-react';
import api from '@/services / api_client';
  is_open: boolean;,
  on_close: () => void;,
  publisher_name: string;,
  publisher_email?: string;
  product_id?: string;
type FormValues = {
  is_open: boolean;
  is_open: boolean;,
pr-12325
  on_close: () => void;
  publisher_name: string;
  publisher_email?: string;
  product_id?: string;
type FormValues = {
  subject: string
  subject: string;,
pr-12325
  message: string }

  subject: string,
  message: string }
  subject: string,
  message: string;,
interface ContactPublisherModalProps {
  is_open: boolean,
  on_close: () => void,
  publisher_name: string,
  publisher_email?: string;
  product_id?: string;
}
type FormValues = {
  subject: string,
  message: string;
}
const schema: yup.ObjectSchema < FormValues> = yup;
  .object ({
    subject: yup;
      .string ();
      .min (5, 'Subject must be at least 5 characters');
      .required ('Subject is required'),'
      .string ();
  // TODO: Implement
  is_open: boolean,
  on_close: () => void,
  publisher_name: string,
const schema: yup.ObjectSchema < FormValues> = yup;
  .object ({
    subject: yup;)
      .string ();
      .min (5, 'Subject must be at least 5 characters');
      .required ('Subject is required'),
pr-12325
      .min (20, 'Message must be at least 20 characters');
      .required ('Message is required'),'
  });
  .required ();
export /**
 * ContactPublisherModal - Function description
 * ContactPublisherModal - Function description;
pr-12325
 */
function ContactPublisherModal() {,
  const [is_submitting, setIsSubmitting] = React.useState (false);,
  const [error, set_error] = React.useState < string | null>(null);,
  const [login_open, setLoginOpen] = React.useState (false);
  const form = use_form < FormValues>({
    resolver: yup_resolver (schema) as Resolver < FormValues>,
    mode: 'on_change','
    default_values: { subject: '', message: '' },'
  });
  const handle_send = async () => {
    // Check condition
if ( {) {
  $2
}
      setLoginOpen (true);
      return }    default_values: { subject: '', message: '' }}),'
  const handle_send = async () => {
    // Check condition
if ( {) {
  $2
}
      setLoginOpen (true);
      return;

  FormMessage,;
} from '@/components/ui/form';
import { useForm, type Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SendIcon, Mail } from 'lucide-react';
import api from '@/services/apiClient';
import { toast  } from '@/hooks/use-toast';
import { useAuth  } from '@/hooks/useAuth';
import { LoginModal } from '@/components/auth/LoginModal';
interface ContactPublisherModalProps {
  isOpen: boolean;
  onClose: () => void;
  publisherName: string;
  publisherEmail?: string;
  productId?: string;

type FormValues = {
  subject: string;
  message: string;
};

const schema: yup.ObjectSchema<FormValues> = yup
  .object({
    subject: yup
      .string()
      .min(5, 'Subject must be at least 5 characters')
.required('Subject is required'),
    message: yup
      .string()
      .min(20, 'Message must be at least 20 characters')
      .required('Message is required')
  })
  .required();

export function ContactPublisherModal({
  isOpen,
  onClose,
  publisherName,
  publisherEmail,
productId,
}: ContactPublisherModalProps) {
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [loginOpen, setLoginOpen] = React.useState(false);

  const form = useForm<FormValues>({
    resolver: yupResolver(schema) as Resolver<FormValues>,
    mode: 'onChange',
defaultValues: { subject: '', message: '' },
  });

  const handleSend = async () => {
    if (!user) {
      setLoginOpen(true);
      return;
origin/cursor/automate-test-improve-and-merge-code-2533
    }
  const form = use_form < FormValues>({)
    resolver: yup_resolver (schema) as Resolver < FormValues>,
    mode: 'on_change',
    default_values: { subject: , message:  },
  const handle_send = async () => {
    // Check condition;
if ( {) {
  $2;
      setLoginOpen (true);
      return }    default_values: { subject: , message:  }}),
    // Check condition;
      return;

pr-12325
    const values = form.getValues()
    setIsSubmitting(true)
    setError(null)
    try {
      await api.post ('/api / messages', {'
        product_id,
        body: values.message,
        from_user: user.id,
      });
  // TODO: Implement
      await api.post ('/api / messages', {
        product_id,
        body: values.message,
        from_user: user.id,)
pr-12325
      toast.success ('Message sent');
      form.reset ();
      on_close () } finally {      on_close ();

      await api.post('/api/messages', {
productId,
        subject: values.subject,
        body: values.message,
        fromUser: user.id,
      });
      toast.success('Message sent');
      form.reset();
      onClose();
origin/cursor/automate-test-improve-and-merge-code-2533
    } finally {
      setIsSubmitting(false)
    }
  }
  const handleKeyDown = (e: React.KeyboardEvent,) => {
    if (e.key === 'Escape') {'
      e.stopPropagation()
      onClose()
  }
import React from 'react';
import FocusLock from 'react-focus-lock';

    } finally {
  // TODO: Implement
      setIsSubmitting(false)
  const handleKeyDown = (e: React.KeyboardEvent,) => {
    if (e.key === 'Escape') {
      e.stopPropagation()
      onClose()
import FocusLock from 'react-focus-lock';
pr-12325
import api from '@/services/apiClient';
import { toast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { LoginModal } from '@/components/auth/LoginModal';
  publisherEmail?: string;
  productId?: string;
}

  publisherEmail?: string;
  productId?: string;
}

    }


pr-12325
    const values = form && form.getValues();
    setIsSubmitting(true);
    setError(null);
      setIsSubmitting(false);
    }
  };

      setIsSubmitting(false);
    }
  };


      setIsSubmitting(false);
  };




pr-12325
  return (
    <>;
                  disabled={!form && form.formState.isValid || isSubmitting}>;
                  <SendIcon className='mr-2' />;
                  {isSubmitting ? 'Sending...' : 'Send Message'}'
      <Dialog open={is_open} onOpenChange={on_close}>;
        <FocusLock disabled={!is_open} return_focus>;
      <Dialog open={is_open} onOpenChange={on_close}>;

        <FocusLock disabled={!is_open} return_focus>;

pr-12325
          <DialogContent;
            className='bg - zion - blue - dark border border - zion - blue - light text - white sm:max - w-md';',
            onKeyDown={handleKeyDown}
            aria - modal='true';
            aria - labelledby='contact - publisher - title';
          >;
            <DialogHeader>;
              <DialogTitle;
                id='contact - publisher - title';
                className='text - xl font - bold text - white flex items - center gap - 2';
              >;
                <Mail className='h - 5 w - 5 text - zion - cyan' />;
                Contact Publisher;
              </DialogTitle>;
            </DialogHeader>;
            {error && <p className='text - red - 500 mb - 2'>{error}</p>}'
            {publisher_email && (
              <div className='mb - 4 text - zion - slate - light'>;

            <DialogHeader>;

              <DialogTitle;
                id='contact - publisher - title';
                className='text - xl font - bold text - white flex items - center gap - 2';

                <Mail className='h - 5 w - 5 text - zion - cyan' />;

              ;
            {error && <p className='text - red - 500 mb - 2'>{error}</p>}
              <div className='mb - 4 text - zion - slate - light'>;
</div>
pr-12325
                <span className='block'>Email:</span>;
                <a;
                  href={`mailto:${publisher_email}`}`
                  className='text - zion - cyan hover:underline truncate block';
                >;
                  {publisher_email}
                </a>;
              </div>)}
            <Form {...form}>;
              <form on_submit={e => e.prevent_default ()} className='space - y-4'>;
</a>
                </a>;)
              </div>)}
            <Form {...form}>;

              <form on_submit={e => e.prevent_default ()} className='space - y-4'>;
</form>
pr-12325
                <FormField;
                  control={form.control}
                  name='subject';
                  render={({ field }: { field: any }) => (
                    <FormItem>;
                      <FormLabel > Subject</FormLabel>;
                      <FormControl>;

                    <FormItem>;

                      <FormLabel > Subject;
                      <FormControl>;

pr-12325
                        <Input;
                          placeholder='Subject';
                          className='bg - zion - blue border - zion - blue - light text - white';
                          {...field}
                        />;
                      </FormControl>;
                      <FormMessage className='text - red - 500' />;
                    </FormItem>)}
                />;
                <FormField;
                  control={form.control}
                  name='message';
                  render={({ field }: { field: any }) => (
                    <FormItem>;
                      <FormLabel > Message</FormLabel>;
                      <FormControl>;
                        <Textarea;
                          placeholder={`Message to ${publisher_name}...`}`,
                          className='bg - zion - blue border - zion - blue - light text - white min - h-[120px]';
                          {...field}
                        />;
                      </FormControl>;
                      <FormMessage className='text - red - 500' />;
                    </FormItem>)}
                />;

                      <FormMessage className='text - red - 500' />;
)
                    )}
                  name='message';


                      <FormLabel > Message;

                        <Textarea;`;
                          placeholder={`Message to ${publisher_name}...`}
                          className='bg - zion - blue border - zion - blue - light text - white min - h-[120px]';

pr-12325
                <Button;
                  on_click={handle_send}
                  className='w - full';
                  disabled={!form.form_state.is_valid || is_submitting}
                >;
                  <SendIcon className='mr - 2' />;
                  {is_submitting ? 'Sending...' : 'Send Message'}'
                </Button>;
              </form>;
            </Form>;
          </DialogContent>;
        </FocusLock>;
      </Dialog>;
  const handleKeyDown = (e: React.KeyboardEvent) => {,
    if (e.key === 'Escape') {'
import React from 'react',;
import FocusLock from 'react-focus-lock',;
import {;
  Dialog,;
  DialogContent,;
  DialogHeader,;
  DialogTitle} from '@/components/ui/dialog',;
import { Button } from '@/components/ui/button',;
import { Input } from '@/components/ui/input',;
import { Textarea } from '@/components/ui/textarea',;
import {;
  Form,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormControl,;
  FormMessage} from '@/components/ui/form',;
import { useForm, type Resolver } from 'react-hook-form',;
import { yupResolver } from '@hookform/resolvers/yup',;
import * as yup from 'yup',;
import { SendIcon, Mail } from 'lucide-react';
import api from '@/services/apiClient',;
import { toast } from '@/hooks/use-toast',;
import { useAuth } from '@/hooks/useAuth',;
import { LoginModal } from '@/components/auth/LoginModal',;
interface ContactPublisherModalProps {;
  isOpen: boolean,;
  onClose: () => void,;
  publisherName: string,;
  publisherEmail?: string,;
  productId?: string;
}
;
type FormValues = {;
  subject: string,;
  message: string;
},;
const schema: yup.ObjectSchema<FormValues> = yup;
  .object({;
    subject: yup;
      .string();
      .min(5, 'Subject must be at least 5 characters');
      .required('Subject is required'),;
    message: yup;
      .string();
      .min(20, 'Message must be at least 20 characters');
      .required('Message is required')});
  .required(),;
export function ContactPublisherModal({;
  isOpen,;
  onClose,;
  publisherName,;
  publisherEmail,;
  productId}: ContactPublisherModalProps) {;
  const { user } = useAuth(),;
  const [isSubmitting, setIsSubmitting] = React.useState(false),;
  const [error, setError] = React.useState<string | null>(null),;
  const [loginOpen, setLoginOpen] = React.useState(false),;
  const form = useForm<FormValues>({;
    resolver: yupResolver(schema) as Resolver<FormValues>,;
    mode: 'onChange',;
    defaultValues: { subject: '', message: '' }}),;
  const handleSend = async () => {;
    if (!user) {;
      setLoginOpen(true),;
      return;
    }
    const values = form.getValues(),;
    setIsSubmitting(true),;
    setError(null),;
    try {;
      await api.post('/api/messages', {;
        productId,;
        subject: values.subject,;
        body: values.message,;
        fromUser: user.id}),;
      toast.success('Message sent'),;
      form.reset(),;
      onClose();
    } finally {;
      setIsSubmitting(false);
    }
  },;
  const handleKeyDown = (e: React.KeyboardEvent) => {;
    if (e.key === 'Escape') {;
      e.stopPropagation();
      onClose()
    }
  };

  return (
    <>
    <Dialog open={isOpen} onOpenChange={onClose}>
      <FocusLock disabled={!isOpen} returnFocus>
        <DialogContent
          className="bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md"",
          onKeyDown={handleKeyDown}
          aria-modal="true""
          aria-labelledby="contact-publisher-title""
        >
          <DialogHeader>
            <DialogTitle id="contact-publisher-title" className="text-xl font-bold text-white flex items-center gap-2">"
              <Mail className="h-5 w-5 text-zion-cyan" />"
              Contact Publisher
            </DialogTitle>
          </DialogHeader>
          {error && <p className="text-red-500 mb-2">{error}</p>}"
          {publisherEmail && (
            <div className="mb-4 text-zion-slate-light">"
            <span className="block">Email:</span>"
            <a href={`mailto:${publisherEmail}`} className="text-zion-cyan hover:underline truncate block">"
          className="bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md"
          onKeyDown={handleKeyDown}
          aria-modal="true"

          aria-labelledby="contact-publisher-title"
        >
          <DialogHeader>
            <DialogTitle id="contact-publisher-title" className="text-xl font-bold text-white flex items-center gap-2">
              <Mail className="h-5 w-5 text-zion-cyan" />
              Contact Publisher
            </DialogTitle>
          </DialogHeader>
          {error && <p className="text-red-500 mb-2">{error}</p>}
          {publisherEmail && (
            <div className="mb-4 text-zion-slate-light">
            <span className="block">Email:</span>
            <a href={`mailto:${publisherEmail}`} className="text-zion-cyan hover:underline truncate block">
              {publisherEmail}

            </Link>
          </div>
        )}
        <Form {...form}>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">"
            <FormField
              control={form.control}
              name="subject""
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <FormField
              control={form.control}
              name="subject"
              render={({ field }: { field: any }) => (
                <FormItem>

                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Subject""
                      className="bg-zion-blue border-zion-blue-light text-white""
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />"
                </FormItem>
              )}
            />;
            <FormField
              control = {form.control,}
              name="message""
                      placeholder="Subject"
                      className="bg-zion-blue border-zion-blue-light text-white"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}

            />;
            <FormField;
              control={form.control}
              name="message"
              render={({ field }: { field: any }) => (
                <FormItem>

                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={`Message to ${publisherName}...`}`
                      className="bg-zion-blue border-zion-blue-light text-white min-h-[120px]"",
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />"
                </FormItem>
              )}
              disabled = {!form && form.formState.isValid || isSubmitting,}>;
              <SendIcon className="mr-2" />;
              {isSubmitting ? 'Sending...' : 'Send Message'}'
    </>;
  ) </>;
  )
};
      <LoginModal is_open={login_open} onOpenChange={setLoginOpen} />    <Dialog open={is_open} onOpenChange={on_close}>;
      <FocusLock disabled={!is_open} return_focus>;
        <DialogContent;
          className="bg - zion - blue - dark border border - zion - blue - light text - white sm:max - w-md";",

      <LoginModal is_open={login_open} onOpenChange={setLoginOpen} />    <Dialog open={is_open} onOpenChange={on_close}>;
      <FocusLock disabled={!is_open} return_focus>;
        <DialogContent;
          className="bg - zion - blue - dark border border - zion - blue - light text - white sm:max-w-md";
          onKeyDown = {handleKeyDown, }          aria - modal="true";
          aria - labelledby="contact - publisher - title";
        >;
          <DialogHeader>;
            <DialogTitle id="contact - publisher - title" className="text - xl font - bold text - white flex items - center gap-2">;
              <Mail className="h - 5 w - 5 text - zion-cyan" />;
              Contact Publisher;
            </DialogTitle>;
          </DialogHeader>;
          {error && <p className="text - red - 500 mb - 2">{error}</p>}"
          {error && <p className="text - red - 500 mb-2">{error}</p>}
          {publisher_email && (
            <div className="mb - 4 text - zion - slate-light">;
            <span className="block">Email:</span>;
            <a href={`mailto:${publisher_email}`} className="text - zion-cyan hover:underline truncate block">;
              {publisher_email}
            </a>;
          </div>)}
        <Form {...form}>;
          <form on_submit={(e, ) => e.prevent_default ()} className="space-y-4">;
            <FormField;
              control = {form.control, }
              name="subject";
              render={({ field }: { field: any }, ) => (                <FormItem>;
                  <FormLabel > Subject</FormLabel>;
                  <FormControl>;
                    <Input;
                      placeholder="Subject";
                      className="bg - zion - blue border - zion - blue - light text-white";
                      {...field}
                    />;
                  </FormControl>;
                  <FormMessage className="text - red-500" />;
                </FormItem>)}
            />;
            <FormField;
              control = {form.control, }
              name="message";
              render={({ field }: { field: any }, ) => (                <FormItem>;
                  <FormLabel > Message</FormLabel>;
                  <FormControl>;
                    <Textarea;
                      placeholder={`Message to ${publisher_name}...`}`,
                      className="bg - zion - blue border - zion - blue - light text - white min - h-[120px]";
                      placeholder={`Message to ${publisher_name}...`}
                      className="bg - zion - blue border - zion - blue - light text - white min-h-[120px]";
                      {...field}
                    />;
                  </FormControl>;
                  <FormMessage className="text - red-500" />;
                </FormItem>)}
            />;
            <Button;
              on_click = {handle_send, }
              className="w-full";
              disabled = {!form.form_state.is_valid || is_submitting, }            >;
              <SendIcon className="mr - 2" />;
              {is_submitting ? 'Sending...' : 'Send Message'}'
                      placeholder={`Message to ${publisherName}...`}
                      className="bg-zion-blue border-zion-blue-light text-white min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />;
            <Button;
              onClick={handleSend}
              className="w-full"
              disabled={!form.formState.isValid || isSubmitting}
            >
              <SendIcon className="mr-2" />
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <SendIcon className="mr-2" />;
              {is_submitting ? 'Sending...' : 'Send Message'}
            </Button>;
          </form>;
        </Form>;
        </DialogContent>;
      </FocusLock>;
    </Dialog>;

    <LoginModal is_open={login_open} onOpenChange={setLoginOpen} />;
    </>) </>);
}
;
    <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;
    </>;
  );
}
;
      e.stopPropagation();
onClose();
    }
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <FocusLock disabled={!isOpen} returnFocus>
          <DialogContent
            className='bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md'
            onKeyDown={handleKeyDown}
            aria-modal='true'
            aria-labelledby='contact-publisher-title'
          >
            <DialogHeader>
              <DialogTitle
                id='contact-publisher-title'
                className='text-xl font-bold text-white flex items-center gap-2'
              >
                <Mail className='h-5 w-5 text-zion-cyan' />
                Contact Publisher
              </DialogTitle>
            </DialogHeader>
            {error && <p className='text-red-500 mb-2'>{error}</p>}
            {publisherEmail && (
              <div className='mb-4 text-zion-slate-light'>
                <span className='block'>Email:</span>
                <a
                  href={`mailto:${publisherEmail}`}
                  className='text-zion-cyan hover:underline truncate block'
                >
                  {publisherEmail}
                </a>
              </div>
            )}
            <Form {...form}>
              <form onSubmit={e => e.preventDefault()} className='space-y-4'>
                <FormField
                  control={form.control}
                  name='subject'
                  render={({ field }: { field: any }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Subject'
                          className='bg-zion-blue border-zion-blue-light text-white'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className='text-red-500' />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='message'
                  render={({ field }: { field: any }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={`Message to ${publisherName}...`}
                          className='bg-zion-blue border-zion-blue-light text-white min-h-[120px]'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className='text-red-500' />
                    </FormItem>
                  )}
                />
                <Button
                  onClick={handleSend}
                  className='w-full'
                  disabled={!form.formState.isValid |isSubmitting}
                >
                  <SendIcon className='mr-2' />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Form>
          </DialogContent>
        </FocusLock>
      </Dialog>
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
    </>
  );
origin/cursor/automate-test-improve-and-merge-code-2533

                  <SendIcon className='mr - 2' />;

              </form>;
    <>
    <Dialog open={isOpen} onOpenChange={onClose}>

      <FocusLock disabled={!isOpen} returnFocus>


          className="bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md""
          onKeyDown={handleKeyDown}"
          aria-modal="true"""
          aria-labelledby="contact-publisher-title""
        >

          <DialogHeader>
"
            <DialogTitle id="contact-publisher-title" className="text-xl font-bold text-white flex items-center gap-2">"
              <Mail className="h-5 w-5 text-zion-cyan" />"

            
          {error && <p className="text-red-500 mb-2">{error}</p>}""
            <div className="mb-4 text-zion-slate-light">"
</div>"
            <span className="block">Email:</span>""`;
            <a href={`mailto:${publisherEmail}`} className="text-zion-cyan hover:underline truncate block">"
            
        <Form {...form}>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">"
              control={form.control}"
              name="subject""

                <FormItem>



                  <FormLabel>Subject
                  <FormControl>

                    <Input;"
                      placeholder="Subject"""
                      className="bg-zion-blue border-zion-blue-light text-white""
                    />

                  <FormMessage className="text-red-500" />"

                
              control = {form.control,}"
              name="message"")




                  <FormLabel>Message

                      placeholder={`Message to ${publisherName}...`}"
                      className="bg-zion-blue border-zion-blue-light text-white min-h-[120px]""


              <SendIcon className="mr-2" />;"

    </>;)
  ) </>;
  );


      <LoginModal is_open={login_open} onOpenChange={setLoginOpen} />    <Dialog open={is_open} onOpenChange={on_close}>;


        <DialogContent;"
          className="bg - zion - blue - dark border border - zion - blue - light text - white sm:max - w-md";""
          onKeyDown = {handleKeyDown, }          aria - modal="true";""
          aria - labelledby="contact - publisher - title";"

            <DialogTitle id="contact - publisher - title" className="text - xl font - bold text - white flex items - center gap - 2">;"
              <Mail className="h - 5 w - 5 text - zion - cyan" />;"

          ;"
          {error && <p className="text - red - 500 mb - 2">{error}</p>}""
            <div className="mb - 4 text - zion - slate - light">;"
            <span className="block">Email:</span>;""`;
            <a href={`mailto:${publisher_email}`} className="text - zion - cyan hover:underline truncate block">;"
            </a>;
          <form on_submit={(e, ) => e.prevent_default ()} className="space - y-4">;"
              control = {form.control, }"
              name="subject";"
              render={({ field }: { field: any }, ) => (                <FormItem>;


                      placeholder="Subject";""
                      className="bg - zion - blue border - zion - blue - light text - white";"

                  <FormMessage className="text - red - 500" />;"
              name="message";"


                      placeholder={`Message to ${publisher_name}...`}"
                      className="bg - zion - blue border - zion - blue - light text - white min - h-[120px]";"

              on_click = {handle_send, }"
              className="w - full";"
              disabled = {!form.form_state.is_valid || is_submitting, }            >;
              <SendIcon className="mr - 2" />;"

    <LoginModal is_open={login_open} onOpenChange={setLoginOpen} />;

    </>) </>);
;"`;
pr-12325
