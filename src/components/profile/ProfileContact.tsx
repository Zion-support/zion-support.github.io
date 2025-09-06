<<<<<<< HEAD


  return (
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

>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
        <Mail className="mr-2 h-5 w-5 text-zion-cyan" />
        Contact
      </h3>
<<<<<<< HEAD

      {email && (
=======
>>>>>>>       {email && (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        <div className="mb-4 text-zion-slate-light">
          <span className="block">Email: </span>
          <a
            href={`mailto:${email}`}
            className="text-zion-cyan hover:underline truncate block"
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

              placeholder="Subject"
=======
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

      

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            className="text-zion-cyan hover:underline truncate block"


          >

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
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
      

>>>>>>>       <form onSubmit={handleSendMessage}>
        <div className="space-y-4">
          <div>
            <Input
>>>>>>>               placeholder="Subject"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

            <Send className="mr-2 h-4 w-4" />
=======
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

=======
  `mailto:$ {
  email
}` "
}className="text-zion-cyan hover:underline truncate block" > required /> </div> <div> <Textarea required /> </div> <Button </Button> </div> </form> </div>)
}'"}
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            className="w-full bg-zion-cyan hover:bg-zion-cyan/90"

            disabled={isSending}
          >


            <Send className="mr-2 h-4 w-4" />
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
            {isSending ? "Sending..." : "Send Message"}


          </Button>;
        </div>;
      </form>;
    </div>;
  );


}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> }
;

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
