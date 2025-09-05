<<<<<<< HEAD
import React from 'react',
import FocusLock from 'react-focus-lock',
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle} from '@/components/ui/dialog',
import { Button } from '@/components/ui/button',
import { Input } from '@/components/ui/input',
import { Textarea } from '@/components/ui/textarea',
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage} from '@/components/ui/form',
import { useForm, type Resolver } from 'react-hook-form',
import { yupResolver } from '@hookform/resolvers/yup',
import * as yup from 'yup',
import { SendIcon, Mail } from 'lucide-react'
import api from '@/services/apiClient',
import { toast } from '@/hooks/use-toast',
import { useAuth } from '@/hooks/useAuth',
import { LoginModal } from '@/components/auth/LoginModal',
interface ContactPublisherModalProps {
  isOpen: boolean,
  onClose: () => void,
  publisherName: string,
  publisherEmail?: string,
  productId?: string
}

type FormValues = {
  subject: string,
  message: string
},
=======
import React from 'react';
import FocusLock from 'react-focus-lock';
import {_Dialog, _DialogContent, _DialogHeader, _DialogTitle} from '@/components/ui/dialog';
import {_Form, _FormField, _FormItem, _FormLabel, _FormControl, _FormMessage} from '@/components/ui/form';
import * as yup from 'yup';
import api from '@/services/apiClient';

interface ContactPublisherModalProps {_isOpen: boolean;
  onClose: () => void;
  publisherName: string;
  publisherEmail?: string;
  productId?: string;}

type FormValues = {_subject: string;
  message: string;};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

const schema: yup.ObjectSchema<FormValues> = yup
  .object({_subject: yup
      .string()
      .min(5, _'Subject must be at least 5 characters')
      .required('Subject is required'), _message: yup
      .string()
      .min(20, _'Message must be at least 20 characters')
      .required('Message is required')})
  .required(),

<<<<<<< HEAD
export function ContactPublisherModal({
  isOpen,
  onClose,
  publisherName,
  publisherEmail,
  productId}: ContactPublisherModalProps) {
  const { user } = useAuth(),
  const [isSubmitting, setIsSubmitting] = React.useState(false),
  const [error, setError] = React.useState<string | null>(null),
  const [loginOpen, setLoginOpen] = React.useState(false),

  const form = useForm<FormValues>({
    resolver: yupResolver(schema) as Resolver<FormValues>,
    mode: 'onChange',
    defaultValues: { subject: '', message: '' }}),

  const handleSend = async () => {
    if (!user) {
      setLoginOpen(true),
      return
    }
    const values = form.getValues(),
    setIsSubmitting(true),
    setError(null),
    try {
      await api.post('/api/messages', {
        productId,
        subject: values.subject,
        body: values.message,
        fromUser: user.id}),
      toast.success('Message sent'),
      form.reset(),
      onClose()
    } finally {
      setIsSubmitting(false)
    }
  },

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.stopPropagation(),
      onClose()
    }
  },
=======
export function ContactPublisherModal(_{_isOpen, _onClose, _publisherName, _publisherEmail, _productId}: ContactPublisherModalProps) {_const { user} = useAuth();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [loginOpen, setLoginOpen] = React.useState(false);

  const _form = useForm<FormValues>({_resolver: yupResolver(schema) as Resolver<FormValues>, _mode: 'onChange', _defaultValues: { subject: '', _message: ''}});

  const _handleSend = async () => {_if (!user) {
      setLoginOpen(true);
      return;}
    const _values = form.getValues();
    setIsSubmitting(true);
    setError(null);
    try {_await api.post('/api/messages', _{
        productId, _subject: values.subject, _body: values.message, _fromUser: user.id});
      toast.success('Message sent');
      form.reset();
      onClose();
    } finally {_setIsSubmitting(false);}
  };

  const _handleKeyDown = (_e: React.KeyboardEvent) => {_if (e.key === 'Escape') {
      e.stopPropagation();
      onClose();}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <>
    <Dialog open={_isOpen} onOpenChange={_onClose}>
      <FocusLock disabled={_!isOpen} returnFocus>
        <DialogContent
<<<<<<< HEAD
          className=&quot;bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md&quot;
          onKeyDown={handleKeyDown}
          aria-modal=&quot;true&quot;
          aria-labelledby=&quot;contact-publisher-title&quot;
=======
          className="bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md"
          onKeyDown={_handleKeyDown}
          aria-modal="true"
          aria-labelledby="contact-publisher-title"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          <DialogHeader>
            <DialogTitle id=&quot;contact-publisher-title&quot; className=&quot;text-xl font-bold text-white flex items-center gap-2&quot;>
              <Mail className=&quot;h-5 w-5 text-zion-cyan&quot; />
              Contact Publisher
            </DialogTitle>
          </DialogHeader>
<<<<<<< HEAD
          {error && <p className=&quot;text-red-500 mb-2&quot;>{error}</p>}
          {publisherEmail && (
            <div className=&quot;mb-4 text-zion-slate-light&quot;>
            <span className=&quot;block&quot;>Email:</span>
            <a href={`mailto:${publisherEmail}`} className=&quot;text-zion-cyan hover:underline truncate block&quot;>
              {publisherEmail}
            </Link>
          </div>
        )}
        <Form {...form}>
          <form onSubmit={(e) => e.preventDefault()} className=&quot;space-y-4&quot;>
            <FormField
              control={form.control}
              name=&quot;subject&quot;
              render={({ field }: { field: any }) => (
=======
          {_error && <p className="text-red-500 mb-2">{error}</p>}
          {_publisherEmail && (
            <div className="mb-4 text-zion-slate-light">
            <span className="block">Email:</span>
            <a href={`mailto:${publisherEmail}`} className="text-zion-cyan hover:underline truncate block">
              {_publisherEmail}
            </a>
          </div>
        )}
        <Form {_...form}>
          <form onSubmit={_(_e) => e.preventDefault()} className="space-y-4">
            <FormField
              control={_form.control}
              name="subject"
              render={_(_{ field}: {_field: unknown}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input
<<<<<<< HEAD
                      placeholder=&quot;Subject&quot;
                      className=&quot;bg-zion-blue border-zion-blue-light text-white&quot;
                      {...field}
=======
                      placeholder="Subject"
                      className="bg-zion-blue border-zion-blue-light text-white"
                      {_...field}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    />
                  </FormControl>
                  <FormMessage className=&quot;text-red-500&quot; />
                </FormItem>
              )}
            />
            <FormField
<<<<<<< HEAD
              control={form.control}
              name=&quot;message&quot;
              render={({ field }: { field: any }) => (
=======
              control={_form.control}
              name="message"
              render={_(_{ field}: {_field: unknown}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
<<<<<<< HEAD
                      placeholder={`Message to ${publisherName}...`}
                      className=&quot;bg-zion-blue border-zion-blue-light text-white min-h-[120px]&quot;
                      {...field}
=======
                      placeholder={_`Message to ${publisherName}...`}
                      className="bg-zion-blue border-zion-blue-light text-white min-h-[120px]"
                      {_...field}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    />
                  </FormControl>
                  <FormMessage className=&quot;text-red-500&quot; />
                </FormItem>
              )}
            />
            <Button
<<<<<<< HEAD
              onClick={handleSend}
              className=&quot;w-full&quot;
              disabled={!form.formState.isValid || isSubmitting}
            >
              <SendIcon className=&quot;mr-2&quot; />
              {isSubmitting ? 'Sending...' : 'Send Message'}
=======
              onClick={_handleSend}
              className="w-full"
              disabled={_!form.formState.isValid || isSubmitting}
            >
              <SendIcon className="mr-2" />
              {_isSubmitting ? 'Sending...' : 'Send Message'}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </Button>
          </form>
        </Form>
        </DialogContent>
      </FocusLock>
    </Dialog>
    <LoginModal isOpen={_loginOpen} onOpenChange={_setLoginOpen} />
    </>
  )
}
