import React from 'react';
import FocusLock from 'react-focus-lock';
import {
<<<<<<< HEAD
<<<<<<< HEAD
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,;
} from '@/components/ui/dialog';
=======

  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle} from '@/components/ui/dialog',

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  Dialog;
  DialogContent;
  DialogHeader;
  DialogTitle} from '@/components/ui/dialog';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
<<<<<<< HEAD
  FormMessage,;
} from '@/components/ui/form';
import { useForm, type Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SendIcon, Mail } from 'lucide-react';
=======
  FormMessage} from '@/components/ui/form',

import { useForm, type Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SendIcon, Mail } from 'lucide-react'
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  Form;
  FormField;
  FormItem;
  FormLabel;
  FormControl;
  FormMessage} from '@/components/ui/form';
import { useForm, type Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SendIcon, Mail } from 'lucide-react'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
import api from '@/services/apiClient';
import { toast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { LoginModal } from '@/components/auth/LoginModal';
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
interface ContactPublisherModalProps {
  isOpen: boolean,
  onClose: () => void,
  publisherName: string,
  publisherEmail?: string;
  productId?: string
}

type FormValues = {
<<<<<<< HEAD
  subject: string;
  message: string;
=======
interface ContactPublisherModalProps {
  isOpen: boolean,
  onClose: () => void,
  publisherName: string,
  publisherEmail?: string;
  productId?: string
}

type FormValues = {
  subject: string,
  message: string
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  subject: string,
  message: string
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
};

const schema: yup.ObjectSchema<FormValues> = yup
  .object({
    subject: yup
      .string()
      .min(5, 'Subject must be at least 5 characters')
<<<<<<< HEAD
<<<<<<< HEAD
      .required('Subject is required'),
=======
      .required('Subject is required');
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    message: yup
      .string()
      .min(20, 'Message must be at least 20 characters')
      .required('Message is required')})
  .required();

export function ContactPublisherModal({
<<<<<<< HEAD
=======
      .required('Subject is required');
    message: yup
      .string()
      .min(20, 'Message must be at least 20 characters')
      .required('Message is required')})
  .required();

export function ContactPublisherModal({

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  isOpen,
  onClose,
  publisherName,
  publisherEmail,
<<<<<<< HEAD
  productId,
}: ContactPublisherModalProps) {
=======
  isOpen;
  onClose;
  publisherName;
  publisherEmail;
  productId}: ContactPublisherModalProps) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [loginOpen, setLoginOpen] = React.useState(false);
=======
  productId}: ContactPublisherModalProps) { const { user  } = useAuth(),
  const [ isSubmitting, setIsSubmitting ] = React.useState(false),
  const [ error, setError ] = React.useState<string | null>(null),
  const [ loginOpen, setLoginOpen ] = React.useState(false),

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

  const form = useForm<FormValues>({
    resolver: yupResolver(schema) as Resolver<FormValues>,
    mode: 'onChange',
<<<<<<< HEAD
<<<<<<< HEAD
    defaultValues: { subject: '', message: '' },
  });

  const handleSend = async () => {
    if (!user) {
      setLoginOpen(true);
      return;
=======
    defaultValues: { subject: '', message: '' }});
  const handleSend = async () => {
    if (!user) {
      setLoginOpen(true);
      return
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    defaultValues: { subject: '', message: '' }}),
  const handleSend = async () => {
    if (!user) {
      setLoginOpen(true);
      return
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
    const values = form.getValues();
    setIsSubmitting(true);
    setError(null);
    try {
      await api.post('/api/messages', {
<<<<<<< HEAD
<<<<<<< HEAD
        productId,
=======
        productId;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        subject: values.subject,
        body: values.message,
        fromUser: user.id}),
      toast.success('Message sent');
      form.reset();
<<<<<<< HEAD
      onClose();
=======
        productId;
        subject: values.subject,
        body: values.message,
        fromUser: user.id});
      toast.success('Message sent');
      form.reset();
      onClose()
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      onClose()
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.stopPropagation();
<<<<<<< HEAD
<<<<<<< HEAD
      onClose();
=======
      onClose()
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
  };

  return (
    <>
    <Dialog open={isOpen} onOpenChange={onClose}>
      <FocusLock disabled={!isOpen} returnFocus>
        <DialogContent
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
            </a>
          </div>
        )}
        <Form {...form}>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <FormField
              control={form.control}
              name="subject"
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Subject"
                      className="bg-zion-blue border-zion-blue-light text-white"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={`Message to ${publisherName}...`}
                      className="bg-zion-blue border-zion-blue-light text-white min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <Button
              onClick={handleSend}
              className="w-full"
              disabled={!form.formState.isValid || isSubmitting}
            >
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
  );
<<<<<<< HEAD
=======
      onClose()
    }
  };


  return (
    <>
    <Dialog open={isOpen} onOpenChange={onClose}>
      <FocusLock disabled={!isOpen} returnFocus>
        <DialogContent
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
            </a>
          </div>
        )}
        <Form {...form}>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <FormField
              control={form.control}
              name="subject"
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Subject"
                      className="bg-zion-blue border-zion-blue-light text-white"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={`Message to ${publisherName}...`}
                      className="bg-zion-blue border-zion-blue-light text-white min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <Button
              onClick={handleSend}
              className="w-full"
              disabled={!form.formState.isValid || isSubmitting}
            >
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
  );
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
