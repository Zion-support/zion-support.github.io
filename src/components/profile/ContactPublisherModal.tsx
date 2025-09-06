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
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
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
import api from '@/services/apiClient';
import { toast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { LoginModal } from '@/components/auth/LoginModal';

  publisherEmail?: string;
  productId?: string;
}

    }
    const values = form && form.getValues();
    setIsSubmitting(true);
    setError(null);
      setIsSubmitting(false);
    }
  };

                  {isSubmitting ? 'Sending...' : 'Send Message'}
      <Dialog open={is_open} onOpenChange={on_close}>;
        <FocusLock disabled={!is_open} return_focus>;
          <DialogContent;
            className='bg - zion - blue - dark border border - zion - blue - light text - white sm:max - w-md';
            onKeyDown={handleKeyDown}
            aria - modal='true';
            aria - labelledby='contact - publisher - title';
          >;
            <DialogHeader>;
              <DialogTitle;
                id='contact - publisher - title';
                className='text - xl font - bold text - white flex items - center gap - 2';
              >;
                <Mail className='h - 5 w - 5 text - zion - cyan' />;
                Contact Publisher;
              </DialogTitle>;
            </DialogHeader>;
            {error && <p className='text - red - 500 mb - 2'>{error}</p>}
            {publisher_email && (
              <div className='mb - 4 text - zion - slate - light'>;
                <span className='block'>Email:</span>;
                <a;
                  href={`mailto:${publisher_email}`}
                  className='text - zion - cyan hover:underline truncate block';
                >;
                  {publisher_email}
                </a>;
              </div>)}
            <Form {...form}>;
              <form on_submit={e => e.prevent_default ()} className='space - y-4'>;
                <FormField;
                  control={form.control}
                  name='subject';
                  render={({ field }: { field: any }) => (
                    <FormItem>;
                      <FormLabel > Subject</FormLabel>;
                      <FormControl>;
                        <Input;
                          placeholder='Subject';
                          className='bg - zion - blue border - zion - blue - light text - white';
                          {...field}
                        />;
                      </FormControl>;
                      <FormMessage className='text - red - 500' />;
                    </FormItem>)}
                />;
                <FormField;
                  control={form.control}
                  name='message';
                  render={({ field }: { field: any }) => (
                    <FormItem>;
                      <FormLabel > Message</FormLabel>;
                      <FormControl>;
                        <Textarea;
                          placeholder={`Message to ${publisher_name}...`}
                          className='bg - zion - blue border - zion - blue - light text - white min - h-[120px]';
                          {...field}
                        />;
                      </FormControl>;
                      <FormMessage className='text - red - 500' />;
                    </FormItem>)}
                />;
                <Button;
                  on_click={handle_send}
                  className='w - full';
                  disabled={!form.form_state.is_valid || is_submitting}
                >;
                  <SendIcon className='mr - 2' />;
                  {is_submitting ? 'Sending...' : 'Send Message'}
                </Button>;
              </form>;
            </Form>;
          </DialogContent>;
        </FocusLock>;
      </Dialog>;
          aria-labelledby="contact-publisher-title"
        >
          <DialogHeader>
            <DialogTitle id="contact-publisher-title" className="text-xl font-bold text-white flex items-center gap-2">
              <Mail className="h-5 w-5 text-zion-cyan" />
              Contact Publisher
            </DialogTitle>
          </DialogHeader>
          {error && <p className="text-red-500 mb-2">{error}</p>}
          {publisherEmail && (;
            <div className="mb-4 text-zion-slate-light">;
            <span className="block">Email:</span>;
            <a href={`mailto:${publisherEmail}`} className="text-zion-cyan hover:underline truncate block">;
              {publisherEmail}
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Subject"
                      className="bg-zion-blue border-zion-blue-light text-white"
                      {...field}
                    />;
                  </FormControl>;
                  <FormMessage className="text-red-500" />;
                </FormItem>;
              )}
            <FormField
              control = {form && form.control,}
              name="message"
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={`Message to ${publisherName}...`}
                      className="bg-zion-blue border-zion-blue-light text-white min-h-[120px]"
                      {...field}
                    />;
                  </FormControl>;
                  <FormMessage className="text-red-500" />;
                </FormItem>;
              )}
    </>;
  ) </>;
  );
};
      <LoginModal is_open={login_open} onOpenChange={setLoginOpen} />    <Dialog open={is_open} onOpenChange={on_close}>;
      <FocusLock disabled={!is_open} return_focus>;
        <DialogContent;
          className="bg - zion - blue - dark border border - zion - blue - light text - white sm:max - w-md";
          onKeyDown = {handleKeyDown, }          aria - modal="true";
          aria - labelledby="contact - publisher - title";
        >;
          <DialogHeader>;
            <DialogTitle id="contact - publisher - title" className="text - xl font - bold text - white flex items - center gap - 2">;
              <Mail className="h - 5 w - 5 text - zion - cyan" />;
              Contact Publisher;
            </DialogTitle>;
          </DialogHeader>;
          {error && <p className="text - red - 500 mb - 2">{error}</p>}
          {publisher_email && (
            <div className="mb - 4 text - zion - slate - light">;
            <span className="block">Email:</span>;
            <a href={`mailto:${publisher_email}`} className="text - zion - cyan hover:underline truncate block">;
              {publisher_email}
            </a>;
          </div>)}
        <Form {...form}>;
          <form on_submit={(e, ) => e.prevent_default ()} className="space - y-4">;
            <FormField;
              control = {form.control, }
              name="subject";
              render={({ field }: { field: any }, ) => (                <FormItem>;
                  <FormLabel > Subject</FormLabel>;
                  <FormControl>;
                    <Input;
                      placeholder="Subject";
                      className="bg - zion - blue border - zion - blue - light text - white";
                      {...field}
                    />;
                  </FormControl>;
                  <FormMessage className="text - red - 500" />;
                </FormItem>)}
            />;
            <FormField;
              control = {form.control, }
              name="message";
              render={({ field }: { field: any }, ) => (                <FormItem>;
                  <FormLabel > Message</FormLabel>;
                  <FormControl>;
                    <Textarea;
                      placeholder={`Message to ${publisher_name}...`}
                      className="bg - zion - blue border - zion - blue - light text - white min - h-[120px]";
                      {...field}
                    />;
                  </FormControl>;
                  <FormMessage className="text - red - 500" />;
                </FormItem>)}
            />;
            <Button;
              on_click = {handle_send, }
              className="w - full";
              disabled = {!form.form_state.is_valid || is_submitting, }            >;
              <SendIcon className="mr - 2" />;
              {is_submitting ? 'Sending...' : 'Send Message'}
            </Button>;
          </form>;
        </Form>;
        </DialogContent>;
      </FocusLock>;
    </Dialog>;
