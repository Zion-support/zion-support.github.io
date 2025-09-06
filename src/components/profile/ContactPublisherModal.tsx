
<<<<<<< HEAD
=======
import React from 'react'
import FocusLock from 'react-focus-lock'
import {
  Dialog
  DialogContent
  DialogHeader
  DialogTitle
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
import React from 'react'
import FocusLock from 'react-focus-lock'
import {
  Dialog,
  DialogContent,
  DialogHeader,;
  DialogTitle;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
} from '@/components/ui/dialog'; import { Button } from '@/components/ui/button'; import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
  Dialog
  DialogContent
  DialogHeader
  DialogTitle} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
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
  FormMessage} from '@/components/ui/form'
import {useForm, type, Resolver} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import { SendIcon, Mail } from 'lucide-react'
import api from '@/services/apiClient'
  isOpen: boolean
  onClose: () => void
  publisherName: string
  publisherEmail?: string
  productId?: string
type FormValues = {
  subject: string
  message: string }
  subject: string
  message: string
interface ContactPublisherModalProps {
  isOpen: boolean
  onClose: () => void
  publisherName: string
  publisherEmail?: string
  productId?: string
}
type FormValues = {
  subject: string
  message: string
}
const schema: yup.ObjectSchema<FormValues> = yup
  .object({
    subject: yup
      .string()
      .min(5, 'Subject must be at least 5 characters')
      .required('Subject is required')
      .string()
      .min(20, 'Message must be at least 20 characters')
      .required('Message is required')
  })
  .required()
export function ContactPublisherModal({  isOpen,  isOpen
  onClose
  publisherName
  publisherEmail
  productId
}: ContactPublisherModalProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const [loginOpen, setLoginOpen] = React.useState(false)
  const form = useForm<FormValues>({
    resolver: yupResolver(schema) as Resolver<FormValues>
    mode: 'onChange'
    defaultValues: { subject: '', message: '' }
  })
  const handleSend = async () => {
    if (!user) {
      setLoginOpen(true)
      return }    defaultValues: { subject: '', message: '' }})
  const handleSend = async () => {
    if (!user) {
      setLoginOpen(true)
<<<<<<< HEAD
      return;
    }
    const values = form.getValues()
    setIsSubmitting(true)
    setError(null)
    try {
      await api.post('/api/messages', {
        productId
        body: values.message
        fromUser: user.id
      })
      toast.success('Message sent')
      form.reset()
      onClose() } finally {      onClose()
    } finally {
      setIsSubmitting(false)
    }
  }
  const handleKeyDown = (e: React.KeyboardEvent,) => {
    if (e.key === 'Escape') {
      e.stopPropagation()
      onClose()
  }

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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
import api from '@/services / api_client';
  is_open: boolean;
  on_close: () => void;
  publisher_name: string;
  publisher_email?: string;
  product_id?: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
type FormValues = {
  subject: string;
  message: string }

  subject: string,
  message: string;
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
      .required ('Subject is required'),
      .string ();
      .min (20, 'Message must be at least 20 characters');
      .required ('Message is required'),
  });
  .required ();
export /**
 * ContactPublisherModal - Function description
 */
function ContactPublisherModal() {
  const [is_submitting, setIsSubmitting] = React.useState (false);
  const [error, set_error] = React.useState < string | null>(null);
  const [login_open, setLoginOpen] = React.useState (false);
  const form = use_form < FormValues>({
    resolver: yup_resolver (schema) as Resolver < FormValues>,
    mode: 'on_change',
    default_values: { subject: '', message: '' },
  });
  const handle_send = async () => {
    // Check condition
if ( {) {
  $2
}
      setLoginOpen (true);
      return }    default_values: { subject: '', message: '' }}),
  const handle_send = async () => {
    // Check condition
if ( {) {
  $2
}
      setLoginOpen (true);
      return;

=======
      return;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }
    const values = form.getValues()
    setIsSubmitting(true)
    setError(null)
    try {
<<<<<<< HEAD

      await api.post ('/api / messages', {
        product_id,
        body: values.message,
        from_user: user.id,
      });
      toast.success ('Message sent');
      form.reset ();
      on_close () } finally {      on_close ();

=======
      await api.post('/api/messages', {
        productId
        body: values.message
        fromUser: user.id
      })
      toast.success('Message sent')
      form.reset()
      onClose() } finally {      onClose()
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    } finally {
      setIsSubmitting(false)
    }
  }
  const handleKeyDown = (e: React.KeyboardEvent,) => {
    if (e.key === 'Escape') {
      e.stopPropagation()
      onClose()
  }
<<<<<<< HEAD
import React from 'react';
import FocusLock from 'react-focus-lock';


import api from '@/services/apiClient';
import { toast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { LoginModal } from '@/components/auth/LoginModal';


  publisherEmail?: string;
  productId?: string;
}



    }
    const values = form && form.getValues();
    setIsSubmitting(true);
    setError(null);


      setIsSubmitting(false);
    }
  };




  return (
    <>;

                  disabled={!form && form.formState.isValid || isSubmitting}>;
                  <SendIcon className='mr-2' />;

                  {isSubmitting ? 'Sending...' : 'Send Message'}
      <Dialog open={is_open} onOpenChange={on_close}>;
        <FocusLock disabled={!is_open} return_focus>;
          <DialogContent;
            className='bg - zion - blue - dark border border - zion - blue - light text - white sm:max - w-md';
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
            {error && <p className='text - red - 500 mb - 2'>{error}</p>}
            {publisher_email && (
              <div className='mb - 4 text - zion - slate - light'>;
                <span className='block'>Email:</span>;
                <a;
                  href={`mailto:${publisher_email}`}
                  className='text - zion - cyan hover:underline truncate block';
                >;
                  {publisher_email}
                </a>;
              </div>)}
            <Form {...form}>;
              <form on_submit={e => e.prevent_default ()} className='space - y-4'>;
                <FormField;
                  control={form.control}
                  name='subject';
                  render={({ field }: { field: any }) => (
                    <FormItem>;
                      <FormLabel > Subject</FormLabel>;
                      <FormControl>;
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
                          placeholder={`Message to ${publisher_name}...`}
                          className='bg - zion - blue border - zion - blue - light text - white min - h-[120px]';
                          {...field}
                        />;
                      </FormControl>;
                      <FormMessage className='text - red - 500' />;
                    </FormItem>)}
                />;
                <Button;
                  on_click={handle_send}
                  className='w - full';
                  disabled={!form.form_state.is_valid || is_submitting}
                >;
                  <SendIcon className='mr - 2' />;
                  {is_submitting ? 'Sending...' : 'Send Message'}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                </Button>;
              </form>;
            </Form>;
          </DialogContent>;
        </FocusLock>;
      </Dialog>;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
=======

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
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      e.stopPropagation();
      onClose();
    }
  },

  return (
    <>
    <Dialog open={isOpen} onOpenChange={onClose}>
      <FocusLock disabled={!isOpen} returnFocus>
<<<<<<< HEAD

>>>>>>>         <DialogContent
          className="bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md"

          onKeyDown={handleKeyDown}
          aria-modal="true"
<<<<<<< HEAD

          aria-labelledby="contact-publisher-title"
=======
>>>>>>>           aria-labelledby="contact-publisher-title"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
        <DialogContent
          className="bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md"
          onKeyDown={handleKeyDown}
          aria-modal="true"
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          aria-labelledby="contact-publisher-title"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        >
          <DialogHeader>
            <DialogTitle id="contact-publisher-title" className="text-xl font-bold text-white flex items-center gap-2">
              <Mail className="h-5 w-5 text-zion-cyan" />
              Contact Publisher
            </DialogTitle>
          </DialogHeader>
<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          {error && <p className="text-red-500 mb-2">{error}</p>}
          {publisherEmail && (
            <div className="mb-4 text-zion-slate-light">
            <span className="block">Email:</span>
            <a href={`mailto:${publisherEmail}`} className="text-zion-cyan hover:underline truncate block">
              {publisherEmail}
<<<<<<< HEAD
<<<<<<< HEAD

                  <FormLabel>Subject</FormLabel>
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </a>
          </div>
        )}
        <Form {...form}>
          <form onSubmit={(e,) => e.preventDefault()} className="space-y-4">
            <FormField
              control = {form.control,}
              name="subject"
              render={({ field }: { field: any },) => (                <FormItem>
<<<<<<< HEAD
>>>>>>>                   <FormLabel>Subject</FormLabel>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  <FormControl>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
=======
            </Link>
          </div>
        )}
        <Form {...form}>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <FormField
              control={form.control}
              name="subject"
              render={({ field }: { field: any }) => (
                <FormItem>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <Input
                      placeholder="Subject"
                      className="bg-zion-blue border-zion-blue-light text-white"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
<<<<<<< HEAD
<<<<<<< HEAD

                  <FormLabel>Message</FormLabel>
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            />
            <FormField
              control = {form.control,}
              name="message"
              render={({ field }: { field: any },) => (                <FormItem>
<<<<<<< HEAD
>>>>>>>                   <FormLabel>Message</FormLabel>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  <FormControl>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
=======
            />;
            <FormField;
              control={form.control}
              name="message"
              render={({ field }: { field: any }) => (
                <FormItem>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  <FormLabel>Message</FormLabel>
                  <FormControl>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <Textarea
                      placeholder={`Message to ${publisherName}...`}
                      className="bg-zion-blue border-zion-blue-light text-white min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
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
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    </>
  ) </>
  )
}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
    </>;
  ) </>;
  );
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            />;
            <Button;
              onClick={handleSend}
              className="w-full"
              disabled={!form.formState.isValid || isSubmitting}
            >
              <SendIcon className="mr-2" />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>;
          </form>;
        </Form>;
        </DialogContent>;
      </FocusLock>;
    </Dialog>;
    <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;
    </>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
