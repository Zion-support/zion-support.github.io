<<<<<<< HEAD
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';

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
        <div className='mb-4 text-zion-slate-light'>
          <span className='block'>Email: </span>
          <a
            href={`mailto:${email}`}
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
        <div className="mb-4 text-zion-slate-light">
          <span className="block">Email: </span>
          <a 
            href={`mailto:${email}`} 
            className="text-zion-cyan hover:underline truncate block"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
          >
            {email}
          </a>
        </div>
      )}
<<<<<<< HEAD

      <form onSubmit={handleSendMessage}>
        <div className='space-y-4'>
          <div>
            <Input
              placeholder='Subject'
              value={subject}
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
              required
            />
          </div>
          <div>
            <Textarea
              placeholder={`Message to ${profileName}...`}
              value={message}
<<<<<<< HEAD
              onChange={e => setMessage(e.target.value)}
              className='bg-zion-blue border-zion-blue-light text-white min-h-[120px]'
              required
            />
          </div>
          <Button
            type='submit'
            className='w-full bg-zion-cyan hover:bg-zion-cyan/90'
            disabled={isSending}
          >
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
          </Button>
        </div>
      </form>
    </div>
  );
<<<<<<< HEAD

  `mailto:$ {;
  email ;
}` ";
}className="text-zion-cyan hover:underline truncate block" > required /> </div> <div> <Textarea required /> </div> <Button </Button> </div> </form> </div>) ;
}'"
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
