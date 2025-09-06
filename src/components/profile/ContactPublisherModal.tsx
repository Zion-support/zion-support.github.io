<<<<<<< HEAD

import React from 'react'
import FocusLock from 'react-focus-lock'
import {
  Dialog
  DialogContent
  DialogHeader
  DialogTitle
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
      return
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
=======
import React from 'react';
import FocusLock from 'react-focus-lock';
<<<<<<< HEAD
import {;
  Dialog,;
  DialogContent,;
  DialogHeader,;
  DialogTitle,;
} from '@/components/ui/dialog';import { Button } from '@/components/ui/button';import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {;
  Dialog;
  DialogContent;
  DialogHeader;
  DialogTitle} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {;
  Form,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormControl,;
  FormMessage,;
} from '@/components/ui/form';
import { useForm, type Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SendIcon, Mail } from 'lucide-react';import api from '@/services/apiClient';
import { toast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { LoginModal } from '@/components/auth/LoginModal';
  Form;
  FormField;
  FormItem;
  FormLabel;
  FormControl;
  FormMessage} from '@/components/ui/form';
import {useForm, type, Resolver} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SendIcon, Mail } from 'lucide-react';
=======
import {

  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle} from '@/components/ui/dialog',

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {

  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage} from '@/components/ui/form',

import { useForm, type Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SendIcon, Mail } from 'lucide-react'
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
import api from '@/services/apiClient';
import { toast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { LoginModal } from '@/components/auth/LoginModal';
<<<<<<< HEAD

  isOpen: boolean;
  onClose: () => void;
  publisherName: string;
  publisherEmail?: string;
  productId?: string;

type FormValues = {;
  subject: string;
  message: string;};
  subject: string,;
  message: string;
interface ContactPublisherModalProps {;
  isOpen: boolean,;
  onClose: () => void,;
  publisherName: string,;
=======
interface ContactPublisherModalProps {
  isOpen: boolean,
  onClose: () => void,
  publisherName: string,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  publisherEmail?: string;
  productId?: string;
}

<<<<<<< HEAD
type FormValues = {;
  subject: string,;
  message: string;
};

const schema: yup && yup.ObjectSchema<FormValues> = yup;
  .object({;
    subject: yup;
      .string();
      .min(5, 'Subject must be at least 5 characters');
      .required('Subject is required'),;
      .string();
      .min(20, 'Message must be at least 20 characters');
      .required('Message is required'),;
  });
  .required();

export function ContactPublisherModal(): any ({  isOpen,  isOpen,;
  onClose,;
  publisherName,;
  publisherEmail,;
  productId,;
}: ContactPublisherModalProps) {;
  const [isSubmitting, setIsSubmitting] = React && React.useState(false);
  const [error, setError] = React && React.useState<string | null>(null);
  const [loginOpen, setLoginOpen] = React && React.useState(false);
  const form = useForm<FormValues>({;
    resolver: yupResolver(schema) as Resolver<FormValues>,;
    mode: 'onChange',;
    defaultValues: { subject: '', message: '' },;
  });

  const handleSend = async () => {;
    if (!user) {;
      setLoginOpen(true);
      return;    }    defaultValues: { subject: '', message: '' }}),;
  const handleSend = async () => {;
    if (!user) {;
      setLoginOpen(true);
      return;
=======
type FormValues = {
  subject: string,
  message: string
};

const schema: yup.ObjectSchema<FormValues> = yup
  .object({
    subject: yup
      .string()
      .min(5, 'Subject must be at least 5 characters')
      .required('Subject is required');
    message: yup
      .string()
      .min(20, 'Message must be at least 20 characters')
      .required('Message is required')})
  .required();

export function ContactPublisherModal({

  isOpen,
  onClose,
  publisherName,
  publisherEmail,
  productId}: ContactPublisherModalProps) { const { user  } = useAuth(),
  const [ isSubmitting, setIsSubmitting ] = React.useState(false),
  const [ error, setError ] = React.useState<string | null>(null),
  const [ loginOpen, setLoginOpen ] = React.useState(false),


  const form = useForm<FormValues>({
    resolver: yupResolver(schema) as Resolver<FormValues>,
    mode: 'onChange',
    defaultValues: { subject: '', message: '' }});
  const handleSend = async () => {
    if (!user) {
      setLoginOpen(true);
      return
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    }
    const values = form && form.getValues();
    setIsSubmitting(true);
    setError(null);
<<<<<<< HEAD
    try {;
      await api && api.post('/api/messages', {;
        productId,;
        body: values && values.message,;
        fromUser: user && user.id,;
      });
      toast && toast.success('Message sent');
      form && form.reset();
      onClose();    } finally {      onClose();
    } finally {;
=======
    try {
      await api.post('/api/messages', {
        productId;
        subject: values.subject,
        body: values.message,
        fromUser: user.id});
      toast.success('Message sent');
      form.reset();
      onClose()
    } finally {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
      setIsSubmitting(false);
    }
  };

<<<<<<< HEAD
  const handleKeyDown = (e: React && React.KeyboardEvent,) => {;
    if (e && e.key === 'Escape') {;
      e && e.stopPropagation();
      onClose();
  };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

  return (
    <>;
      <Dialog open={isOpen} onOpenChange={onClose}>;
        <FocusLock disabled={!isOpen} returnFocus>;
          <DialogContent
            className='bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md'
            onKeyDown={handleKeyDown}
            aria-modal='true'
            aria-labelledby='contact-publisher-title'>;
            <DialogHeader>;
              <DialogTitle
                id='contact-publisher-title'
                className='text-xl font-bold text-white flex items-center gap-2'>;
                <Mail className='h-5 w-5 text-zion-cyan' />;
                Contact Publisher;
              </DialogTitle>;
            </DialogHeader>;
            {error && <p className='text-red-500 mb-2'>{error}</p>}
            {publisherEmail && (;
              <div className='mb-4 text-zion-slate-light'>;
                <span className='block'>Email:</span>;
                <a
                  href={`mailto:${publisherEmail}`}
                  className='text-zion-cyan hover:underline truncate block'>;
                  {publisherEmail}
                </a>;
              </div>;
            )}
            <Form {...form}>;
              <form onSubmit={e => e && e.preventDefault()} className='space-y-4'>;
                <FormField
                  control={form && form.control}
                  name='subject'
                  render={({ field }: { field: any }) => (;
                    <FormItem>;
                      <FormLabel>Subject</FormLabel>;
                      <FormControl>;
                        <Input
                          placeholder='Subject'
                          className='bg-zion-blue border-zion-blue-light text-white'
                          {...field}
                        />;
                      </FormControl>;
                      <FormMessage className='text-red-500' />;
                    </FormItem>;
                  )}
                />;
                <FormField
                  control={form && form.control}
                  name='message'
                  render={({ field }: { field: any }) => (;
                    <FormItem>;
                      <FormLabel>Message</FormLabel>;
                      <FormControl>;
                        <Textarea
                          placeholder={`Message to ${publisherName}...`}
                          className='bg-zion-blue border-zion-blue-light text-white min-h-[120px]'
                          {...field}
                        />;
                      </FormControl>;
                      <FormMessage className='text-red-500' />;
                    </FormItem>;
                  )}
                />;
                <Button
                  onClick={handleSend}
                  className='w-full'
<<<<<<< HEAD
                  disabled={!form.formState.isValid |isSubmitting}
                >
                  <SendIcon className='mr-2' />
=======
                  disabled={!form && form.formState.isValid || isSubmitting}>;
                  <SendIcon className='mr-2' />;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>;
              </form>;
            </Form>;
          </DialogContent>;
        </FocusLock>;
      </Dialog>;
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />    <Dialog open={isOpen} onOpenChange={onClose}>;
      <FocusLock disabled={!isOpen} returnFocus>;
=======
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.stopPropagation();
      onClose()
    }
  };


  return (
    <>
    <Dialog open={isOpen} onOpenChange={onClose}>
      <FocusLock disabled={!isOpen} returnFocus>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
        <DialogContent
          className="bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md"
          onKeyDown = {handleKeyDown,}          aria-modal="true"
          aria-labelledby="contact-publisher-title">;
          <DialogHeader>;
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
            </a>;
          </div>;
        )}
        <Form {...form}>;
          <form onSubmit={(e,) => e && e.preventDefault()} className="space-y-4">;
            <FormField
              control = {form && form.control,}
              name="subject"
              render={({ field }: { field: any },) => (                <FormItem>;
                  <FormLabel>Subject</FormLabel>;
                  <FormControl>;
                    <Input
                      placeholder="Subject"
                      className="bg-zion-blue border-zion-blue-light text-white"
                      {...field}
                    />;
                  </FormControl>;
                  <FormMessage className="text-red-500" />;
                </FormItem>;
              )}
            />;
            <FormField
              control = {form && form.control,}
              name="message"
              render={({ field }: { field: any },) => (                <FormItem>;
                  <FormLabel>Message</FormLabel>;
                  <FormControl>;
                    <Textarea
                      placeholder={`Message to ${publisherName}...`}
                      className="bg-zion-blue border-zion-blue-light text-white min-h-[120px]"
                      {...field}
                    />;
                  </FormControl>;
                  <FormMessage className="text-red-500" />;
                </FormItem>;
              )}
            />;
            <Button
              onClick = {handleSend,}
              className="w-full"
<<<<<<< HEAD
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
              disabled = {!form && form.formState.isValid || isSubmitting,}>;
              <SendIcon className="mr-2" />;
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>;
          </form>;
        </Form>;
        </DialogContent>;
      </FocusLock>;
    </Dialog>;
    <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;
    </>;
  );    </>;
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
