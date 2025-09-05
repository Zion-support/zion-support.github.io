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

const schema: yup.ObjectSchema<FormValues> = yup
  .object({_subject: yup
      .string()
      .min(5, _'Subject must be at least 5 characters')
      .required('Subject is required'), _message: yup
      .string()
      .min(20, _'Message must be at least 20 characters')
      .required('Message is required')})
  .required();

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

  return (
    <>
    <Dialog open={_isOpen} onOpenChange={_onClose}>
      <FocusLock disabled={_!isOpen} returnFocus>
        <DialogContent
          className="bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md"
          onKeyDown={_handleKeyDown}
          aria-modal="true"
          aria-labelledby="contact-publisher-title"
        >
          <DialogHeader>
            <DialogTitle id="contact-publisher-title" className="text-xl font-bold text-white flex items-center gap-2">
              <Mail className="h-5 w-5 text-zion-cyan" />
              Contact Publisher
            </DialogTitle>
          </DialogHeader>
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
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Subject"
                      className="bg-zion-blue border-zion-blue-light text-white"
                      {_...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={_form.control}
              name="message"
              render={_(_{ field}: {_field: unknown}) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={_`Message to ${publisherName}...`}
                      className="bg-zion-blue border-zion-blue-light text-white min-h-[120px]"
                      {_...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <Button
              onClick={_handleSend}
              className="w-full"
              disabled={_!form.formState.isValid || isSubmitting}
            >
              <SendIcon className="mr-2" />
              {_isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </Form>
        </DialogContent>
      </FocusLock>
    </Dialog>
    <LoginModal isOpen={_loginOpen} onOpenChange={_setLoginOpen} />
    </>
  );
}
