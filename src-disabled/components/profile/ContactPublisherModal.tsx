import React from 'react'

import FocusLock from 'react-focus-lock'
<<<<<<< HEAD:src-disabled/components/profile/ContactPublisherModal.tsx
import {}
=======
import {
<<<<<<< HEAD
  Dialog
  DialogContent
  DialogHeader
  DialogTitle
import React from 'react'
import FocusLock from 'react-focus-lock'
import {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/profile/ContactPublisherModal.tsx

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  Dialog,
  DialogContent,;
  DialogHeader,;
  DialogTitle;
<<<<<<< HEAD
=======

<<<<<<< HEAD:src-disabled/components/profile/ContactPublisherModal.tsx
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/profile/ContactPublisherModal.tsx
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

} from '@/components/ui/form'
import { useForm, type Resolver } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
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
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from 'react';

  FormField;
  FormItem;
  FormLabel;
  FormControl;

  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,

import { LoginModal } from '@/components / auth / LoginModal';
  Form;
  FormField;
  FormItem;
  FormLabel;
  FormControl;'
  FormMessage} from '@/components / ui / form';'
import {use_form, type, Resolver} from 'react - hook - form';'
import {yup_resolver} from '@hookform / resolvers / yup';'
import { SendIcon, Mail } from 'lucide-react';'
import api from '@/services / api_client';
  is_open: boolean;
  on_close: () => void;
  publisher_name: string;
  publisher_email?: string;
  product_id?: string;
type FormValues = {}
  subject: string;
  message: string }

  subject: string,
  message: string;
interface ContactPublisherModalProps {}
  is_open: boolean,
  on_close: () => void,
  publisher_name: string,
  publisher_email?: string;
  product_id?: string;
}
type FormValues = {}
  subject: string,
  message: string;
}
const schema: yup.ObjectSchema < FormValues> = yup;
  .object ({}
    subject: yup;
      .string ();'
      .min (5, 'Subject must be at least 5 characters');'
      .required ('Subject is required'),
      .string ();'
      .min (20, 'Message must be at least 20 characters');'
      .required ('Message is required'),
  });
  .required ();
export /**;
 * ContactPublisherModal - Function description;
 */
function ContactPublisherModal() {}
  const [is_submitting, setIsSubmitting] = React.useState (false);
  const [error, set_error] = React.useState < string | null>(null);
  const [login_open, setLoginOpen] = React.useState (false);
  const form = use_form < FormValues>({}
    resolver: yup_resolver (schema) as Resolver < FormValues>,'
    mode: 'on_change','
    default_values: { subject: '', message: '' },
  });
  const handle_send = async () => {}
    // Check condition;
if ( {) {}
  $2;
}
      setLoginOpen (true);'
      return }    default_values: { subject: '', message: '' }}),
    // Check condition;
if ( {) {}
  $2;
}
      setLoginOpen (true);
      return;

<<<<<<< HEAD
      return;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }
    const values = form.getValues()
    setIsSubmitting(true)
    setError(null)
<<<<<<< HEAD:src-disabled/components/profile/ContactPublisherModal.tsx
=======
    try {
<<<<<<< HEAD
      await api.post('/api/messages', {
        productId
        body: values.message
        fromUser: user.id
      })
      toast.success('Message sent')
      form.reset()
      onClose() } finally {      onClose()
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/profile/ContactPublisherModal.tsx

        product_id,
        body: values.message,
        from_user: user.id,
      });'
      toast.success ('Message sent');
      form.reset ();
      on_close () } finally {      on_close ();

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    } finally {
      setIsSubmitting(false)
    }
  }
  const handleKeyDown = (e: React.KeyboardEvent,) => {
    if (e.key === 'Escape') {
<<<<<<< HEAD:src-disabled/components/profile/ContactPublisherModal.tsx

      e.stopPropagation()
      onClose()
  }'
import React from 'react';'
=======
      e.stopPropagation()
      onClose()
  }
import React from 'react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/profile/ContactPublisherModal.tsx
import FocusLock from 'react-focus-lock';

import { LoginModal } from '@/components/auth/LoginModal';
interface ContactPublisherModalProps {
  isOpen: boolean;
  onClose: () => void;
  publisherName: string;

    }
    const values = form && form.getValues();
    setIsSubmitting(true);
    setError(null);

      setIsSubmitting(false);
    }
  };

  return (
    <>;

                  disabled={!form && form.formState.isValid || isSubmitting}>;'
                  <SendIcon className='mr-2' />;
'
                  {isSubmitting ? 'Sending...' : 'Send Message'}
      <Dialog open={is_open} onOpenChange={on_close}>;
        <FocusLock disabled={!is_open} return_focus>;
          <DialogContent;'
            className='bg - zion - blue - dark border border - zion - blue - light text - white sm:max - w-md';
            onKeyDown={handleKeyDown}'
            aria - modal='true';'
            aria - labelledby='contact - publisher - title';
          >;
            <DialogHeader>;
              <DialogTitle;'
                id='contact - publisher - title';'
                className='text - xl font - bold text - white flex items - center gap - 2';
              >;'
                <Mail className='h - 5 w - 5 text - zion - cyan' />;
                Contact Publisher;
              </DialogTitle>;
            </DialogHeader>;'
            {error && <p className='text - red - 500 mb - 2'>{error}</p>}
            {publisher_email && ('
              <div className='mb - 4 text - zion - slate - light'>;'
                <span className='block'>Email:</span>;
                <a;
                  href={`mailto:${publisher_email}`}'
                  className='text - zion - cyan hover:underline truncate block';
                >;
                  {publisher_email}
                </a>;
              </div>)}
            <Form {...form}>;'
              <form on_submit={e => e.prevent_default ()} className='space - y-4'>;
                <FormField;
                  control={form.control}'
                  name='subject';
                  render={({ field }: { field: any }) => (
                    <FormItem>;
                      <FormLabel > Subject</FormLabel>;
                      <FormControl>;
                        <Input;'
                          placeholder='Subject';'
                          className='bg - zion - blue border - zion - blue - light text - white';
                          {...field}
                        />;
                      </FormControl>;'
                      <FormMessage className='text - red - 500' />;
                    </FormItem>)}
                />;
                <FormField;
                  control={form.control}'
                  name='message';
                  render={({ field }: { field: any }) => (
                    <FormItem>;
                      <FormLabel > Message</FormLabel>;
                      <FormControl>;
                        <Textarea;`
                          placeholder={`Message to ${publisher_name}...`}'
                          className='bg - zion - blue border - zion - blue - light text - white min - h-[120px]';
                          {...field}
                        />;
                      </FormControl>;'
                      <FormMessage className='text - red - 500' />;
                    </FormItem>)}
                />;
                <Button;
                  on_click={handle_send}'
                  className='w - full';
                  disabled={!form.form_state.is_valid || is_submitting}
                >;'
                  <SendIcon className='mr - 2' />;'
                  {is_submitting ? 'Sending...' : 'Send Message'}
                </Button>;
              </form>;
            </Form>;
          </DialogContent>;
        </FocusLock>;
      </Dialog>;

<<<<<<< HEAD:src-disabled/components/profile/ContactPublisherModal.tsx
      e.stopPropagation();
      onClose()
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
=======
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
<<<<<<< HEAD

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
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />    <Dialog open={isOpen} onOpenChange={onClose}>
      <FocusLock disabled={!isOpen} returnFocus>
        <DialogContent
          className="bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md"
          onKeyDown = {handleKeyDown,}          aria-modal="true"
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      e.stopPropagation();
      onClose();
    }
  },

  return (
    <>
    <Dialog open={isOpen} onOpenChange={onClose}>
      <FocusLock disabled={!isOpen} returnFocus>
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <DialogContent
          className="bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/profile/ContactPublisherModal.tsx

          onKeyDown={handleKeyDown}
          aria-modal="true"
<<<<<<< HEAD
        <DialogContent
          className="bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md"
          onKeyDown={handleKeyDown}
          aria-modal="true"
=======

<<<<<<< HEAD:src-disabled/components/profile/ContactPublisherModal.tsx
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/profile/ContactPublisherModal.tsx
          aria-labelledby="contact-publisher-title"
        >
          <DialogHeader>"
            <DialogTitle id="contact-publisher-title" className="text-xl font-bold text-white flex items-center gap-2">"
              <Mail className="h-5 w-5 text-zion-cyan" />
              Contact Publisher;
            </DialogTitle>
          </DialogHeader>"
          {error && <p className="text-red-500 mb-2">{error}</p>}
<<<<<<< HEAD:src-disabled/components/profile/ContactPublisherModal.tsx
          {publisherEmail && ("
            <div className="mb-4 text-zion-slate-light">"
            <span className="block">Email:</span>"`
=======
          {publisherEmail && (
            <div className="mb-4 text-zion-slate-light">
            <span className="block">Email:</span>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/profile/ContactPublisherModal.tsx
            <a href={`mailto:${publisherEmail}`} className="text-zion-cyan hover:underline truncate block">
              {publisherEmail}
<<<<<<< HEAD
            </a>
          </div>
        )}
        <Form {...form}>
          <form onSubmit={(e,) => e.preventDefault()} className="space-y-4">
            <FormField
              control = {form.control,}
              name="subject"
              render={({ field }: { field: any },) => (                <FormItem>
=======

<<<<<<< HEAD:src-disabled/components/profile/ContactPublisherModal.tsx
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/profile/ContactPublisherModal.tsx
            </Link>
          </div>
        )}
        <Form {...form}>"
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <FormField;
              control={form.control}"
              name="subject"
              render={({ field }: { field: any }) => (
                <FormItem>
<<<<<<< HEAD
=======

<<<<<<< HEAD:src-disabled/components/profile/ContactPublisherModal.tsx
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/profile/ContactPublisherModal.tsx
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input"
                      placeholder="Subject""
                      className="bg-zion-blue border-zion-blue-light text-white"
                      {...field}
                    />
<<<<<<< HEAD:src-disabled/components/profile/ContactPublisherModal.tsx
                  </FormControl>"
=======
                  </FormControl>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/profile/ContactPublisherModal.tsx
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
<<<<<<< HEAD
            />
            <FormField
              control = {form.control,}
              name="message"
              render={({ field }: { field: any },) => (                <FormItem>
            />;
            <FormField;
              control={form.control}
              name="message"
              render={({ field }: { field: any }) => (
                <FormItem>
=======

            />;
<<<<<<< HEAD:src-disabled/components/profile/ContactPublisherModal.tsx
            <FormField;
=======
            <FormField
              control = {form.control,}
              name="message"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/profile/ContactPublisherModal.tsx

              name="message"
              render={({ field }: { field: any }) => (
                <FormItem>

<<<<<<< HEAD:src-disabled/components/profile/ContactPublisherModal.tsx
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/profile/ContactPublisherModal.tsx
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea;`
                      placeholder={`Message to ${publisherName}...`}"
                      className="bg-zion-blue border-zion-blue-light text-white min-h-[120px]"
                      {...field}
                    />
<<<<<<< HEAD:src-disabled/components/profile/ContactPublisherModal.tsx
                  </FormControl>"
=======
                  </FormControl>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/profile/ContactPublisherModal.tsx
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
<<<<<<< HEAD
            />
            <Button
              onClick = {handleSend,}
              className="w-full"
              disabled = {!form.formState.isValid |isSubmitting,}            >
              <SendIcon className="mr-2" />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </Form>
        </DialogContent>
      </FocusLock>
    </Dialog>
    <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
    </>
  ) </>
  )
}
=======

<<<<<<< HEAD:src-disabled/components/profile/ContactPublisherModal.tsx
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              disabled = {!form && form.formState.isValid || isSubmitting,}>;
              <SendIcon className="mr-2" />;
              {isSubmitting ? 'Sending...' : 'Send Message'}

    </>;
  ) </>;
  );
};
<<<<<<< HEAD
            />;
            <Button;
              onClick={handleSend}
              className="w-full"
              disabled={!form.formState.isValid || isSubmitting}
            >
              <SendIcon className="mr-2" />
              {isSubmitting ? 'Sending...' : 'Send Message'}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/profile/ContactPublisherModal.tsx
      <LoginModal is_open={login_open} onOpenChange={setLoginOpen} />    <Dialog open={is_open} onOpenChange={on_close}>;

            <FormField;
              control = {form.control, }"
              name="subject";
              render={({ field }: { field: any }, ) => (                <FormItem>;
                  <FormLabel > Subject</FormLabel>;
                  <FormControl>;

                </FormItem>)}
            />;
            <FormField;
              control = {form.control, }"
              name="message";
              render={({ field }: { field: any }, ) => (                <FormItem>;
                  <FormLabel > Message</FormLabel>;
                  <FormControl>;

                </FormItem>)}

            />;
            <Button;

              {is_submitting ? 'Sending...' : 'Send Message'}

            </Button>;
          </form>;
        </Form>;
        </DialogContent>;
      </FocusLock>;
    </Dialog>;

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
<<<<<<< HEAD:src-disabled/components/profile/ContactPublisherModal.tsx

    </>) </>);
=======
    </>) </>);
}
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/profile/ContactPublisherModal.tsx
