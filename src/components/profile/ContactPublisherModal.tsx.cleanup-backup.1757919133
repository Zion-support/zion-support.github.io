<<<<<<< HEAD
import React from 'react',
import FocusLock from 'react-focus-lock',
=======
import React from 'react';
import FocusLock from 'react-focus-lock';
>>>>>>> origin/auto/autonomy-17186719616
import {
  Dialog,
  DialogContent,
  DialogHeader,
<<<<<<< HEAD
  DialogTitle} from '@/components/ui/dialog',
import { Button } from '@/components/ui/button',
import { Input } from '@/components/ui/input',
import { Textarea } from '@/components/ui/textarea',
=======
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
>>>>>>> origin/auto/autonomy-17186719616
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
<<<<<<< HEAD
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
  FormMessage,
} from '@/components/ui/form';
import { useForm, type Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SendIcon, Mail } from 'lucide-react'
import api from '@/services/apiClient';
import { toast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { LoginModal } from '@/components/auth/LoginModal';

interface ContactPublisherModalProps {
  isOpen: boolean;
  onClose: () => void;
  publisherName: string;
  publisherEmail?: string;
  productId?: string;
}

type FormValues = {
  subject: string;
  message: string;
};
>>>>>>> origin/auto/autonomy-17186719616

const schema: yup.ObjectSchema<FormValues> = yup
  .object({
    subject: yup
      .string()
      .min(5, 'Subject must be at least 5 characters')
      .required('Subject is required'),
    message: yup
      .string()
      .min(20, 'Message must be at least 20 characters')
<<<<<<< HEAD
      .required('Message is required')})
  .required(),
=======
      .required('Message is required'),
  })
  .required();
>>>>>>> origin/auto/autonomy-17186719616

export function ContactPublisherModal({
  isOpen,
  onClose,
  publisherName,
  publisherEmail,
<<<<<<< HEAD
  productId}: ContactPublisherModalProps) {
  const { user } = useAuth(),
  const [isSubmitting, setIsSubmitting] = React.useState(false),
  const [error, setError] = React.useState<string | null>(null),
  const [loginOpen, setLoginOpen] = React.useState(false),
=======
  productId,
}: ContactPublisherModalProps) {
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [loginOpen, setLoginOpen] = React.useState(false);
>>>>>>> origin/auto/autonomy-17186719616

  const form = useForm<FormValues>({
    resolver: yupResolver(schema) as Resolver<FormValues>,
    mode: 'onChange',
<<<<<<< HEAD
    defaultValues: { subject: '', message: '' }}),

  const handleSend = async () => {
    if (!user) {
      setLoginOpen(true),
      return,
    }
    const values = form.getValues(),
    setIsSubmitting(true),
    setError(null),
=======
    defaultValues: { subject: '', message: '' },
  });

  const handleSend = async () => {
    if (!user) {
      setLoginOpen(true);
      return;
    }
    const values = form.getValues();
    setIsSubmitting(true);
    setError(null);
>>>>>>> origin/auto/autonomy-17186719616
    try {
      await api.post('/api/messages', {
        productId,
        subject: values.subject,
        body: values.message,
<<<<<<< HEAD
        fromUser: user.id}),
      toast.success('Message sent'),
      form.reset(),
      onClose(),
    } finally {
      setIsSubmitting(false),
    }
  },

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.stopPropagation(),
      onClose()
    }
  },
=======
        fromUser: user.id,
      });
      toast.success('Message sent');
      form.reset();
      onClose();
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.stopPropagation();
      onClose();
    }
  };
>>>>>>> origin/auto/autonomy-17186719616

  return (
    <>
    <Dialog open={isOpen} onOpenChange={onClose}>
      <FocusLock disabled={!isOpen} returnFocus>
<<<<<<< HEAD

        <DialogContent
          className="bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md"

=======
        <DialogContent
          className="bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md"
>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD
                    />;
                  </FormControl>;
                  <FormMessage className="text-red-500" />;
                </FormItem>;
=======
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD
                    />;
                  </FormControl>;
                  <FormMessage className="text-red-500" />;
                </FormItem>;
=======
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
>>>>>>> origin/auto/autonomy-17186719616
              )}
            />
            <Button
              onClick={handleSend}
              className="w-full"
              disabled={!form.formState.isValid || isSubmitting}
            >
              <SendIcon className="mr-2" />
              {isSubmitting ? 'Sending...' : 'Send Message'}
<<<<<<< HEAD


=======
>>>>>>> origin/auto/autonomy-17186719616
            </Button>
          </form>
        </Form>
        </DialogContent>
      </FocusLock>
    </Dialog>
    <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
    </>
<<<<<<< HEAD
  ),
=======
  );
>>>>>>> origin/auto/autonomy-17186719616
}
