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
  publisherEmail?:string,;
  productId?:string;
}
;
type FormValues = {;
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
  const [error, setError] = React.useState<string | null>(null),;
  const [loginOpen, setLoginOpen] = React.useState(false),;
;
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
      setIsSubmitting(false),;
=======
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
const schema: yup.ObjectSchema<FormValues> = yup
  .object({_subject: yup
      .string()
      .min(5, _'Subject must be at least 5 characters')
      .required('Subject is required'), _message: yup
      .string()
      .min(20, _'Message must be at least 20 characters')
      .required('Message is required')})
  .required(),

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
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
    }
  },;
;
  const handleKeyDown = (e:React.KeyboardEvent) => {;
    if (e.key === 'Escape') {;
      e.stopPropagation(),;
      onClose();
    }
<<<<<<< HEAD
  },;
;
  return (;
    <>;
    <Dialog open={isOpen} onOpenChange={onClose}>;
      <FocusLock disabled={!isOpen} returnFocus>;
        <DialogContent;
          className="bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md";
          onKeyDown={handleKeyDown}
          aria-modal="true";
          aria-labelledby="contact-publisher-title";
        >;
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
                </FormItem>;
=======
  },
  return (
    <>
    <Dialog open={_isOpen} onOpenChange={_onClose}>
      <FocusLock disabled={_!isOpen} returnFocus>
        <DialogContent
          className=&quot;bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md&quot;
          onKeyDown={handleKeyDown}
          aria-modal=&quot;true&quot;
          aria-labelledby=&quot;contact-publisher-title&quot;        >
          <DialogHeader>
            <DialogTitle id=&quot;contact-publisher-title&quot; className=&quot;text-xl font-bold text-white flex items-center gap-2&quot;>
              <Mail className=&quot;h-5 w-5 text-zion-cyan&quot; />
              Contact Publisher
            </DialogTitle>
          </DialogHeader>
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
              render={({ field }: { field: any }) => (                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input
                      placeholder=&quot;Subject&quot;
                      className=&quot;bg-zion-blue border-zion-blue-light text-white&quot;
                      {...field}                    />
                  </FormControl>
                  <FormMessage className=&quot;text-red-500&quot; />
                </FormItem>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
              )}
            />;
            <FormField;
              control={form.control}
<<<<<<< HEAD
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
                </FormItem>;
=======
              name=&quot;message&quot;
              render={({ field }: { field: any }) => (                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={`Message to ${publisherName}...`}
                      className=&quot;bg-zion-blue border-zion-blue-light text-white min-h-[120px]&quot;
                      {...field}                    />
                  </FormControl>
                  <FormMessage className=&quot;text-red-500&quot; />
                </FormItem>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
              )}
            />;
            <Button;
              onClick={handleSend}
<<<<<<< HEAD
              className="w-full";
              disabled={!form.formState.isValid || isSubmitting}
            >;
              <SendIcon className="mr-2" />;
              {isSubmitting ? 'Sending...' :'Send Message'}
            </Button>;
          </form>;
        </Form>;
        </DialogContent>;
      </FocusLock>;
    </Dialog>;
    <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;
    </>;
  ),;
=======
              className=&quot;w-full&quot;
              disabled={!form.formState.isValid || isSubmitting}
            >
              <SendIcon className=&quot;mr-2&quot; />
              {isSubmitting ? 'Sending...' : 'Send Message'}            </Button>
          </form>
        </Form>
        </DialogContent>
      </FocusLock>
    </Dialog>
    <LoginModal isOpen={_loginOpen} onOpenChange={_setLoginOpen} />
    </>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
