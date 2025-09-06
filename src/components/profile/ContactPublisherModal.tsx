import React from 'react';
import FocusLock from 'react-focus-lock';
import {
  Dialog,
  DialogContent,
  DialogHeader,

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {

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

type FormValues = {
  subject: string;
  message: string;};

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
      .required('Message is required'),
  })
  .required();

export function ContactPublisherModal({  isOpen,
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
      return;    }

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
      onClose();    } finally {

    } finally {

      setIsSubmitting(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent,) => {
    if (e.key === 'Escape') {
      e.stopPropagation();
      onClose();

    }
  };

  return (
    <>

    </>
  );