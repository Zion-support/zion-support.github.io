<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

interface ProfileContactProps {
  email?: string;
  profileName: string;
  profileType: 'service' | 'talent';

export function ProfileContact({
  email,
  profileName,
  profileType,
}: ProfileContactProps) {
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // Here would be the actual API call to send the message
    setTimeout(() => {
      setIsSending(false);
      setMessage('');
      setSubject('');
      toast({
        title: 'Message Sent',
        description: `Your message has been sent to ${profileName}.`,
      });
    }, 1000);
  };

  return (
    <div className='bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8'>
      <h3 className='text-xl font-bold text-white mb-4 flex items-center'>
        <Mail className='mr-2 h-5 w-5 text-zion-cyan' />
        Contact
      </h3>

      {email && (
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        <div className='mb-4 text-zion-slate-light'>
          <span className='block'>Email: </span>
          <a
            href={`mailto:${email}`}
<<<<<<< HEAD
            className='text-zion-cyan hover:underline truncate block'          >
=======
            className='text-zion-cyan hover:underline truncate block'
=======

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send } from 'lucide-react'
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
interface ProfileContactProps {
  email?: string;
  profileName: string,
  profileType: 'service' | 'talent'
}

export function ProfileContact({ email, profileName, profileType }: ProfileContactProps) {

  const [ message, setMessage ] = useState(""),
  const [ subject, setSubject ] = useState(""),
  const [ isSending, setIsSending ] = useState(false),

  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    
    // Here would be the actual API call to send the message
    setTimeout(() => {
      setIsSending(false);
      setMessage("");
      setSubject("");
      toast({
        title: "Message Sent",
        description: `Your message has been sent to ${profileName}.`})
    }, 1000)
  };


  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
        <Mail className="mr-2 h-5 w-5 text-zion-cyan" />
        Contact
      </h3>
      
      {email && (
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        <div className="mb-4 text-zion-slate-light">
          <span className="block">Email: </span>
          <a 
            href={`mailto:${email}`} 
            className="text-zion-cyan hover:underline truncate block"
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            {email}
          </a>
        </div>
      )}
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
      
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      <form onSubmit={handleSendMessage}>
        <div className='space-y-4'>
          <div>
            <Input
              placeholder='Subject'
              value={subject}
<<<<<<< HEAD
              onChange={e => setSubject(e.target.value)}
              className='bg-zion-blue border-zion-blue-light text-white'              required
=======
<<<<<<< HEAD
              onChange={e => setSubject(e.target.value)}
              className='bg-zion-blue border-zion-blue-light text-white'
=======
      
      <form onSubmit={handleSendMessage}>
        <div className="space-y-4">
          <div>
            <Input
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="bg-zion-blue border-zion-blue-light text-white"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              onChange={(e) => setSubject(e.target.value)}
              className="bg-zion-blue border-zion-blue-light text-white"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              required
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            />
          </div>
          <div>
            <Textarea
              placeholder={`Message to ${profileName}...`}
              value={message}
<<<<<<< HEAD
              onChange={e => setMessage(e.target.value)}
              className='bg-zion-blue border-zion-blue-light text-white min-h-[120px]'
=======
<<<<<<< HEAD
<<<<<<< HEAD
              onChange={e => setMessage(e.target.value)}
              className='bg-zion-blue border-zion-blue-light text-white min-h-[120px]'
=======
              onChange={(e) => setMessage(e.target.value)}
              className="bg-zion-blue border-zion-blue-light text-white min-h-[120px]"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              required
            />
          </div>
          <Button
            type='submit'
            className='w-full bg-zion-cyan hover:bg-zion-cyan/90'
            disabled={isSending}
          >
<<<<<<< HEAD
            <Send className='mr-2 h-4 w-4' />
            {isSending ? 'Sending...' : 'Send Message'}          </Button>
=======
<<<<<<< HEAD
            <Send className='mr-2 h-4 w-4' />
            {isSending ? 'Sending...' : 'Send Message'}
=======
              onChange={(e) => setMessage(e.target.value)}
              className="bg-zion-blue border-zion-blue-light text-white min-h-[120px]"
              required
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-zion-cyan hover:bg-zion-cyan/90"
            disabled={isSending}
          >
            <Send className="mr-2 h-4 w-4" />
            {isSending ? "Sending..." : "Send Message"}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <Send className="mr-2 h-4 w-4" />
            {isSending ? "Sending..." : "Send Message"}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          </Button>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        </div>
      </form>
    </div>
  );
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  `mailto:$ {;
  email ;
}` ";
}className="text-zion-cyan hover:underline truncate block" > required /> </div> <div> <Textarea required /> </div> <Button </Button> </div> </form> </div>) ;
<<<<<<< HEAD
}'"
=======
}'"
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
