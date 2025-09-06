<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


  return (
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
=======
email?: string;
  profileName: string;
  profileType: 'service' | 'talent'


import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import { Textarea } from '@/components / ui / textarea';
import { Mail, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from '@/hooks / use - toast';

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Mail, Send } from 'lucide-react'
import { useState } from "react",
import { toast } from "@/hooks/use-toast",
interface ProfileContactProps {
<<<<<<< HEAD
  email?: string,
  profileName: string,
  profileType: 'service' | 'talent'
}
=======
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

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

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
<<<<<<< HEAD
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
        <Mail className="mr-2 h-5 w-5 text-zion-cyan" />
        Contact
      </h3>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

      {email && (
=======
>>>>>>>       {email && (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      
      {email && (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className="mb-4 text-zion-slate-light">
          <span className="block">Email: </span>
          <a
            href={`mailto:${email}`}
<<<<<<< HEAD
            className="text-zion-cyan hover:underline truncate block"
<<<<<<< HEAD
<<<<<<< HEAD

            {email}
          </Link>
        </div>
      )}

=======
>>>>>>>             {email}
          </Link>
        </div>
      )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      <form onSubmit={handleSendMessage}>
        <div className="space-y-4">
          <div>
            <Input
<<<<<<< HEAD

<<<<<<< HEAD
              placeholder="Subject"
=======
              placeholder='Subject'
              value={subject}
              onChange={e => setSubject(e.target.value)}
              className='bg-zion-blue border-zion-blue-light text-white'              required              className="bg-zion-blue border-zion-blue-light text-white"
ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  return (

    <div className='bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6 mb - 8'>;
      <h3 className='text - xl font - bold text - white mb - 4 flex items - center'>;
        <Mail className='mr - 2 h - 5 w - 5 text - zion - cyan' />;
        Contact;
      </h3>;

<<<<<<< HEAD
      

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======

      

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            className="text-zion-cyan hover:underline truncate block"


=======
            className="text-zion-cyan hover:underline truncate block"



>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          >
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      

>>>>>>>       <form onSubmit={handleSendMessage}>
        <div className="space-y-4">
          <div>
            <Input
>>>>>>>               placeholder="Subject"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
          >
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            {email}
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
      <form onSubmit={handleSendMessage}>
        <div className="space-y-4">
          <div>
            <Input
              placeholder="Subject"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

            <Send className="mr-2 h-4 w-4" />
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
            className="w-full bg-zion-cyan hover:bg-zion-cyan/90"
            disabled = {isSending,}
          >
            <Send className='mr-2 h-4 w-4' />
            {isSending ? 'Sending...' : 'Send Message'}          </Button>            disabled={isSending}
          >
>>>>>>>             <Send className="mr-2 h-4 w-4" />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            {isSending ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>
    </div>
  )
<<<<<<< HEAD

<<<<<<< HEAD
=======
  `mailto:$ {
  email
}` "
}className="text-zion-cyan hover:underline truncate block" > required /> </div> <div> <Textarea required /> </div> <Button </Button> </div> </form> </div>)
}'"}
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            {isSending ? "Sending..." : "Send Message"}


=======
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
            <Send className="mr-2 h-4 w-4" />
            {isSending ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>
    </div>
  )
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </Button>;
        </div>;
      </form>;
    </div>;
  );
<<<<<<< HEAD


}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> }
;

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
}
;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
