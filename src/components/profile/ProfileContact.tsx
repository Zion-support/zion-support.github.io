<<<<<<< HEAD
<<<<<<< HEAD
email?: string;
  profileName: string;
  profileType: 'service' | 'talent'

=======
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Send } from 'lucide-react'
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
interface ProfileContactProps {
  email?: string;
  profileName: string;
  profileType: 'service' | 'talent'

export function ProfileContact({
  email
  profileName
  profileType
}: ProfileContactProps) {
  const [message, setMessage] = useState('')
  const [subject, setSubject] = useState('')
  const [isSending, setIsSending] = useState(false)
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSending(true)
    // Here would be the actual API call to send the message;
    setTimeout(() => {;
      setIsSending(false);
      setMessage('');
      setSubject('');      toast({
        title: 'Message Sent'
        description: `Your message has been sent to ${profileName}.`
      })
    }, 1000)
  }
email?: string;
  profileName: string;
  profileType: 'service' | 'talent'

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import { Textarea } from '@/components / ui / textarea';
import { Mail, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from '@/hooks / use - toast';


import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Mail, Send } from 'lucide-react'
import { useState } from "react",
import { toast } from "@/hooks/use-toast",
interface ProfileContactProps {
  email?: string;
  profile_name: string;
  profile_type: 'service' | 'talent';
export /**
 * ProfileContact - Function description
 */
function ProfileContact() {
  const [message, set_message] = useState ('');
  const [subject, set_subject] = useState ('');
  const [is_sending, setIsSending] = useState (false);
  const handleSendMessage = (e: React.FormEvent) =>: any {
    e.prevent_default ();
    setIsSending (true);
    // Here would be the actual API call to send the message;
    set_timeout (() => {
      setIsSending (false);
      set_message ('');
      set_subject ('');      toast ({
        title: 'Message Sent',
        description: `Your message has been sent to ${profile_name}.`,
      });
    }, 1000);
  }

<<<<<<< HEAD
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Mail, Send } from 'lucide-react'
import { useState } from "react",
import { toast } from "@/hooks/use-toast",
interface ProfileContactProps {
  email?: string,
  profileName: string,
  profileType: 'service' | 'talent'
}
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

export function ProfileContact({ email, profileName, profileType }: ProfileContactProps) {
  const [message, setMessage] = useState(""),
  const [subject, setSubject] = useState(""),
  const [isSending, setIsSending] = useState(false),
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault(),
    setIsSending(true),
    
    // Here would be the actual API call to send the message
    setTimeout(() => {
      setIsSending(false),
      setMessage(""),
      setSubject(""),
      toast({
        title: "Message Sent",
        description: `Your message has been sent to ${profileName}.`})
    }, 1000)
  },

<<<<<<< HEAD

export function ProfileContact({ email, profileName, profileType }: ProfileContactProps) {
  const [message, setMessage] = useState(""),
  const [subject, setSubject] = useState(""),
  const [isSending, setIsSending] = useState(false),
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault(),
    setIsSending(true),
    
    // Here would be the actual API call to send the message
    setTimeout(() => {
      setIsSending(false),
      setMessage(""),
      setSubject(""),
      toast({
        title: "Message Sent",
        description: `Your message has been sent to ${profileName}.`})
    }, 1000)
  },



=======
=======



>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
        <Mail className="mr-2 h-5 w-5 text-zion-cyan" />
        Contact
      </h3>
        Contact;
      </h3>;


      

      {email && (
        <div className="mb-4 text-zion-slate-light">
          <span className="block">Email: </span>
          <a
            href={`mailto:${email}`}
<<<<<<< HEAD
          </Link>
        </div>
      )}
      <form onSubmit={handleSendMessage}>
        <div className="space-y-4">
          <div>
            <Input
              placeholder='Subject'
              value={subject}
              onChange={e => setSubject(e.target.value)}
              className='bg-zion-blue border-zion-blue-light text-white'              required              className="bg-zion-blue border-zion-blue-light text-white"
ursor/fix-website-loading-errors-and-merge-6662
  return (

    <div className='bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6 mb - 8'>;
      <h3 className='text - xl font - bold text - white mb - 4 flex items - center'>;
        <Mail className='mr - 2 h - 5 w - 5 text - zion - cyan' />;
        Contact;
      </h3>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


      

<<<<<<< HEAD
          >

}
;
=======
      {email && (
        <div className='mb - 4 text - zion - slate - light'>;
          <span className='block'>Email: </span>;
          <a;
            href={`mailto:${email}`}

export function ProfileContact(): any ({;
  email,;
  profileName,;
  profileType,;
}: ProfileContactProps) {;
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [isSending, setIsSending] = useState(false);


  const handleSendMessage = (e: React && React.FormEvent) => {;
    e && e.preventDefault();
    setIsSending(true);

    // Here would be the actual API call to send the message;
    setTimeout(() => {;
      setIsSending(false);
      setMessage('');
      setSubject('');      toast({;
        title: 'Message Sent',;
        description: `Your message has been sent to ${profileName}.`,;
      });
    }, 1000);
  };

  return (
    <div className='bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8'>;
      <h3 className='text-xl font-bold text-white mb-4 flex items-center'>;
        <Mail className='mr-2 h-5 w-5 text-zion-cyan' />;
        Contact;
      </h3>;

      {email && (;
        <div className='mb-4 text-zion-slate-light'>;
          <span className='block'>Email: </span>;
          <a
            href={`mailto:${email}`}
            className='text-zion-cyan hover:underline truncate block'>        <div className="mb-4 text-zion-slate-light">;
          <span className="block">Email: </span>;
          <a
            href={`mailto:${email}`} 
            className="text-zion-cyan hover:underline truncate block"


            className="text-zion-cyan hover:underline truncate block"



          >
            {email}
          </a>;
        </div>;
      )}


            <Input
              placeholder='Subject'
              value={subject}
              onChange={e => setSubject(e && e.target.value)}
              className='bg-zion-blue border-zion-blue-light text-white'              required              className="bg-zion-blue border-zion-blue-light text-white";
      <form onSubmit={handleSendMessage}>;
        <div className="space-y-4">;
          <div>;
            <Input

      

        <div className="space-y-4">
          <div>
            <Input
          >
=======
            className="text-zion-cyan hover:underline truncate block"
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            {email}
          </Link>
        </div>
      )}
      <form onSubmit={handleSendMessage}>
        <div className="space-y-4">
          <div>
            <Input
<<<<<<< HEAD
              placeholder='Subject'
              value={subject}
              onChange={e => setSubject(e.target.value)}
              className='bg-zion-blue border-zion-blue-light text-white'              required              className="bg-zion-blue border-zion-blue-light text-white"
      <form onSubmit={handleSendMessage}>
        <div className="space-y-4">
          <div>
            <Input
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="bg-zion-blue border-zion-blue-light text-white"
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
            disabled={isSending}              required
            />
          </div>
          <Button
            type="submit"
  `mailto:$ {
  email
}` "
}className="text-zion-cyan hover:underline truncate block" > required /> </div> <div> <Textarea required /> </div> <Button </Button> </div> </form> </div>)
}'"}
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e && e.target.value)}
              className="bg-zion-blue border-zion-blue-light text-white";
              required;
            />;
          </div>;
          <div>;
            <Textarea
              placeholder={`Message to ${profileName}...`}
              value={message}


            type="submit" 
            className="w-full bg-zion-cyan hover:bg-zion-cyan/90"

            disabled={isSending}
          >


            <Send className="mr-2 h-4 w-4" />
            {isSending ? "Sending..." : "Send Message"}


            className="w-full bg-zion-cyan hover:bg-zion-cyan/90"
            disabled = {isSending,}
          >
            <Send className='mr-2 h-4 w-4' />
            {isSending ? 'Sending...' : 'Send Message'}          </Button>            disabled={isSending}
          >
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            <Send className="mr-2 h-4 w-4" />
            {isSending ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>
    </div>
  )
<<<<<<< HEAD
  `mailto:$ {
  email
}` "
}className="text-zion-cyan hover:underline truncate block" > required /> </div> <div> <Textarea required /> </div> <Button </Button> </div> </form> </div>)
}'"}
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Mail, Send } from 'lucide-react';
import { useState } from "react",;
import { toast } from "@/hooks/use-toast",;
interface ProfileContactProps {;
  email?: string,;
  profileName: string,;
  profileType: 'service' | 'talent';
}
;
export function ProfileContact({ email, profileName, profileType }: ProfileContactProps) {;
  const [message, setMessage] = useState(""),;
  const [subject, setSubject] = useState(""),;
  const [isSending, setIsSending] = useState(false),;
  const handleSendMessage = (e: React.FormEvent) => {;
    e.preventDefault(),;
    setIsSending(true),;
    // Here would be the actual API call to send the message;
    setTimeout(() => {;
      setIsSending(false),;
      setMessage(""),;
      setSubject(""),;
      toast({;
        title: "Message Sent";
        description: `Your message has been sent to ${profileName}.`});
    }, 1000);
  };
  return (;
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">;
      <h3 className="text-xl font-bold text-white mb-4 flex items-center">;
        <Mail className="mr-2 h-5 w-5 text-zion-cyan" />;
        Contact;
      </h3>;
      {email && (;
        <div className="mb-4 text-zion-slate-light">;
          <span className="block">Email: </span>;
          <a;
            href={`mailto:${email}`} ;
            className="text-zion-cyan hover:underline truncate block";
          >;
            {email}
          </a>;
        </div>;
      )}
;
      <form onSubmit={handleSendMessage}>;
        <div className="space-y-4">;
          <div>;
            <Input;
              placeholder="Subject";
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="bg-zion-blue border-zion-blue-light text-white";
              required;
            />;
          </div>;
          <div>;
            <Textarea;
              placeholder={`Message to ${profileName}...`}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-zion-blue border-zion-blue-light text-white min-h-[120px]";
              required;
            />;
          </div>;
          <Button;
            type="submit";
            className="w-full bg-zion-cyan hover:bg-zion-cyan/90";
            disabled={isSending}
          >;
            <Send className="mr-2 h-4 w-4" />;
            {isSending ? "Sending..." : "Send Message"}
          </Button>;
        </div>;
      </form>;
    </div>;
  );
              on_change={e => set_message (e.target.value)}
              className='bg - zion - blue border - zion - blue - light text - white min - h-[120px]';
              required;
            />;
          </div>;
          <Button;
            type='submit';
            className='w - full bg - zion - cyan hover:bg - zion - cyan / 90';
            disabled={is_sending}              required;
            />;
          </div>;
          <Button;
            type="submit";
            className="w - full bg - zion - cyan hover:bg - zion - cyan / 90";
            disabled = {is_sending, }
          >;
            <Send className='mr - 2 h - 4 w - 4' />;
            {is_sending ? 'Sending...' : 'Send Message'}          </Button>            disabled={is_sending}
          >;
            <Send className="mr - 2 h - 4 w - 4" />;
            {is_sending ? "Sending..." : "Send Message"}
          </Button>;
        </div>;
      </form>;
    </div>);
  `mailto:$ {
  email;
}` ";
}className="text - zion - cyan hover:underline truncate block" > required /> </div> <div> <Textarea required /> </div> <Button </Button> </div> </form> </div>);
}'"}
}
;
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
