import React from 'react';
import { _Dialog, DialogContent, DialogHeader, DialogTitle, } from '@/components/ui/dialog';
import { _Button } from '@/components/ui/button';
import { _Input } from '@/components/ui/input';
import { _Textarea } from '@/components/ui/textarea';
import { _Form, FormField, FormItem, FormLabel, FormControl, FormMessage, } from '@/components/ui/form';
import { _useForm } from 'react-hook-form';
import { _Mail, PaperPlane } from 'lucide-react';
import api from '@/services/apiClient';
import { _toast } from '@/hooks/use-toast';

const services = [];
const _schema = z.object({
    subject: z
        .string()
        .min(5, 'Subject must be at least 5 characters')
        .nonempty('Subject is required'),
    message: z
        .string()
        .min(20, 'Message must be at least 20 characters')
        .nonempty('Message is required'),
});
export function ContactPublisherModal({ isOpen, onClose, publisherName, publisherEmail, }) {
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const _form = useForm({
        resolver: zodResolver(schema),
        mode: 'onChange',
        defaultValues: { subject: '', message: '' },
    });
    const _handleSend = async () => {
        const _values = form.getValues();
        setIsSubmitting(true);
        try {
            await api.post('/messages', {
                productId,
                subject: values.subject,
                body: values.message,
            });
            toast.success('Message sent!');
            form.reset();
            onClose();
        }
        catch (err) {
            toast.error(err?.message || 'Failed to send message');
        }
        finally {
            setIsSubmitting(false);
        }
    };
    return (<Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-white flex items-center gap-2">
            <Mail className="h-5 w-5 text-zion-cyan"/>
            Contact Publisher
          </DialogTitle>
        </DialogHeader>
        {publisherEmail && (<div className="mb-4 text-zion-slate-light">
            <span className="block">Email:</span>
            <a href={`mailto:${publisherEmail}`} className="text-zion-cyan hover:underline truncate block">
              {publisherEmail}
            </a>
          </div>)}
        <Form {...form}>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <FormField control={form.control} name="subject" render={({ field }) => (<FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input placeholder="Subject" className="bg-zion-blue border-zion-blue-light text-white" {...field}/>
                  </FormControl>
                  <FormMessage className="text-red-500"/>
                </FormItem>)}/>
            <FormField control={form.control} name="message" render={({ field }) => (<FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder={`Message to ${publisherName}...`} className="bg-zion-blue border-zion-blue-light text-white min-h-[120px]" {...field}/>
                  </FormControl>
                  <FormMessage className="text-red-500"/>
                </FormItem>)}/>
            <Button variant="primary" onClick={handleSend} className="w-full" disabled={!form.formState.isValid || isSubmitting}>
              <PaperPlane className="mr-1"/>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>);
}
