import React from 'react''
import FocusLock from 'react-focus-lock''
import {

import React from 'react
import FocusLock from 'react-focus-lock
import {
  // TODO: Implement
}
pr-12325
  Dialog,
  DialogContent,
  DialogHeader,;
  DialogTitle;
} from '@/components/ui/dialog'; import { Button } from '@/components/ui/button'; import { Input } from '@/components/ui/input''
import { Textarea } from '@/components/ui/textarea''

} from '@/components/ui/dialog'; import { Button } from '@/components/ui/button'; import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
  Dialog
  DialogContent
  DialogHeader
  DialogTitle} from '@/components/ui/dialog''
import { Button } from '@/components/ui/button''
import { Input } from '@/components/ui/input''
  Form
  FormField
  FormItem
  FormLabel
  FormControl
  FormMessage
} from '@/components/ui/form''
import { useForm, type Resolver } from 'react-hook-form''
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SendIcon, Mail } from 'lucide-react'; import api from '@/services/apiClient''
import { toast } from '@/hooks/use-toast''
import { useAuth } from '@/hooks/useAuth''
import { LoginModal } from '@/components/auth/LoginModal''
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
  FormMessage} from '@/components/ui/form''
import {useForm, type, Resolver} from 'react-hook-form''
import {yupResolver} from '@hookform/resolvers/yup''
import { SendIcon, Mail } from 'lucide-react''
import api from '@/services/apiClient''
  isOpen: boolean,
  onClose: () => void,
  publisherName: string,
  publisherEmail?: string
  productId?: string
import React from 'react';

  FormField;
  FormItem;
  FormLabel;
  FormControl;

import api from '@/services/apiClient';
import { toast  } from '@/hooks/use-toast';
import { useAuth  } from '@/hooks/useAuth';
import { LoginModal } from '@/components/auth/LoginModal';
interface ContactPublisherModalProps {
  isOpen: boolean;
  onClose: () => void;
  publisherName: string;


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
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
    </>
  );
origin/cursor/automate-test-improve-and-merge-code-2533

                  <SendIcon className='mr - 2' />;

              </form>;
    <>
    <Dialog open={isOpen} onOpenChange={onClose}>

      <FocusLock disabled={!isOpen} returnFocus>


          className="bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md""
          onKeyDown={handleKeyDown}"
          aria-modal="true"""
          aria-labelledby="contact-publisher-title""
        >

          <DialogHeader>
"
            <DialogTitle id="contact-publisher-title" className="text-xl font-bold text-white flex items-center gap-2">"
              <Mail className="h-5 w-5 text-zion-cyan" />"

          {error && <p className="text-red-500 mb-2">{error}</p>}""
            <div className="mb-4 text-zion-slate-light">"
</div>"
            <span className="block">Email:</span>""`;
            <a href={`mailto:${publisherEmail}`} className="text-zion-cyan hover:underline truncate block">"
        <Form {...form}>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">"
              control={form.control}"
              name="subject""

                <FormItem>



                  <FormLabel>Subject
                  <FormControl>

                    <Input;"
                      placeholder="Subject"""
                      className="bg-zion-blue border-zion-blue-light text-white""
                    />

                  <FormMessage className="text-red-500" />"

              control = {form.control,}"
              name="message"")




                  <FormLabel>Message

                      placeholder={`Message to ${publisherName}...`}"
                      className="bg-zion-blue border-zion-blue-light text-white min-h-[120px]""


              <SendIcon className="mr-2" />;"

    </>;)
  ) </>;
  );


      <LoginModal is_open={login_open} onOpenChange={setLoginOpen} />    <Dialog open={is_open} onOpenChange={on_close}>;


        <DialogContent;"
          className="bg - zion - blue - dark border border - zion - blue - light text - white sm:max - w-md";""
          onKeyDown = {handleKeyDown, }          aria - modal="true";""
          aria - labelledby="contact - publisher - title";"

            <DialogTitle id="contact - publisher - title" className="text - xl font - bold text - white flex items - center gap - 2">;"
              <Mail className="h - 5 w - 5 text - zion - cyan" />;"

          ;"
          {error && <p className="text - red - 500 mb - 2">{error}</p>}""
            <div className="mb - 4 text - zion - slate - light">;"
            <span className="block">Email:</span>;""`;
            <a href={`mailto:${publisher_email}`} className="text - zion - cyan hover:underline truncate block">;"
            </a>;
          <form on_submit={(e, ) => e.prevent_default ()} className="space - y-4">;"
              control = {form.control, }"
              name="subject";"
              render={({ field }: { field: any }, ) => (                <FormItem>;


                      placeholder="Subject";""
                      className="bg - zion - blue border - zion - blue - light text - white";"

                  <FormMessage className="text - red - 500" />;"
              name="message";"


                      placeholder={`Message to ${publisher_name}...`}"
                      className="bg - zion - blue border - zion - blue - light text - white min - h-[120px]";"

              on_click = {handle_send, }"
              className="w - full";"
              disabled = {!form.form_state.is_valid || is_submitting, }            >;
              <SendIcon className="mr - 2" />;"

    <LoginModal is_open={login_open} onOpenChange={setLoginOpen} />;

    </>) </>);
;"`;
pr-12325
