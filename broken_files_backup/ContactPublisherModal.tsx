import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
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
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, Mail } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
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
const schema = z.object({
  subject: z
    .string()
    .min(5, 'Subject must be at least 5 characters')
    .nonempty('Subject is required'),
  message: z
    .string()
    .min(20, 'Message must be at least 20 characters')
    .nonempty('Message is required'),
});
export function ContactPublisherModal({
  isOpen,
  onClose,
  publisherName,
  publisherEmail,
}: ContactPublisherModalProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const form = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: { subject: '', message: '' },
  });
<<<<<<< HEAD:src/components/profile/ContactPublisherModal.tsx

  const handleSend = async () => {
    const values = form.getValues();
=======
  const onSubmit = async (values: FormValues) => {
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/ContactPublisherModal.tsx
    setIsSubmitting(true);
    try {
      await api.post('/messages', {
        productId,
        subject: values.subject,
        body: values.message,
      });
<<<<<<< HEAD:src/components/profile/ContactPublisherModal.tsx
      toast.success('Message sent!');
      form.reset();
      onClose();
=======
      if (res.status === 201) {
        toast.success('Message sent');
        form.reset();
        onClose();
      } else {
        const data = await res.json().catch(() => ({}));
        toast.error(data.error || 'Failed to send message');
      }
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/ContactPublisherModal.tsx
    } catch (err: any) {
      toast.error(err?.message || 'Failed to send message');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-white flex items-center gap-2">
            <Mail className="h-5 w-5 text-zion-cyan" />
            Contact Publisher
          </DialogTitle>
        </DialogHeader>
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
              render={({ field }) => (
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
              render={({ field }) => (
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
              variant="primary"
              onClick={handleSend}
              className="w-full"
              disabled={!form.formState.isValid || isSubmitting}
            >
              <PaperPlane className="mr-1" />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
