<<<<<<< HEAD
import React from 'react';
import FocusLock from 'react-focus-lock';
<<<<<<< HEAD
import { Dialog;
  DialogContent;
  DialogHeader;
  DialogTitle } from '@/components/ui/dialog';
import { Button  } from '@/components/ui/button';
import { Input  } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form;
  FormField;
  FormItem;
  FormLabel;
  FormControl;
  FormMessage } from '@/components/ui/form';
import { useForm, type Resolver  } from 'react-hook-form';
import { yupResolver  } from '@hookform/resolvers/yup';
import * as yup from 'yup',
import { SendIcon, Mail } from 'lucide-react'
=======
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
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,;
} from '@/components/ui/form';
import { useForm, type Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SendIcon, Mail } from 'lucide-react';
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
import api from '@/services/apiClient';
import { toast  } from '@/hooks/use-toast';
import { useAuth  } from '@/hooks/useAuth';
import { LoginModal } from '@/components/auth/LoginModal';
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
interface ContactPublisherModalProps {
  isOpen: boolean;
  onClose: () => void;
  publisherName: string;
  publisherEmail?: string;
<<<<<<< HEAD
  productId?: string
}

type FormValues = any;
=======
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
=======
  productId?: string;

type FormValues = {
  subject: string;
  message: string;
};

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
const schema: yup.ObjectSchema<FormValues> = yup
  .object({
    subject: yup
      .string()
      .min(5, 'Subject must be at least 5 characters')
<<<<<<< HEAD
      .required('Subject is required')
=======
      .required('Subject is required'),
    message: yup
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      .string()
      .min(20, 'Message must be at least 20 characters')
      .required('Message is required')
  })
<<<<<<< HEAD
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
=======
  .required();
}
}

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
    }
}

const values = form.getValues();
    setIsSubmitting(true);
    setError(null);
    try {
      await api.post('/api/messages', {
        productId,
        subject: values.subject,
        body: values.message,
        fromUser: user.id,
      });
      toast.success('Message sent');
      form.reset();
      onClose();
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    } finally {
      setIsSubmitting(false)
    }
  }
  const handleKeyDown = (e: React.KeyboardEvent,) => {
    if (e.key === 'Escape') {
<<<<<<< HEAD
      e.stopPropagation()
      onClose()
  }
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
      e.stopPropagation();
      onClose();
    }
  };

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
<<<<<<< HEAD
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />    <Dialog open={isOpen} onOpenChange={onClose}>
      <FocusLock disabled={!isOpen} returnFocus>
        <DialogContent
          className="bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md"
          onKeyDown = {handleKeyDown,}          aria-modal="true"
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
          <form onSubmit={(e,) => e.preventDefault()} className="space-y-4">
            <FormField
              control = {form.control,}
              name="subject"
              render={({ field }: { field: any },) => (                <FormItem>
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
              control = {form.control,}
              name="message"
              render={({ field }: { field: any },) => (                <FormItem>
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
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
    </>
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
