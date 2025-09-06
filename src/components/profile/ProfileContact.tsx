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
            className='text-zion-cyan hover:underline truncate block'          >        <div className="mb-4 text-zion-slate-light">
          <span className="block">Email: </span>
          <a 
            href={`mailto:${email}`} 
            className="text-zion-cyan hover:underline truncate block"

          >

            {email}
          </a>
        </div>
      )}

      <form onSubmit={handleSendMessage}>
        <div className='space-y-4'>
          <div>
            <Input

              className="bg-zion-blue border-zion-blue-light text-white"

              required

            />
          </div>
          <div>
            <Textarea
              placeholder={`Message to ${profileName}...`}

          >
            <Send className='mr-2 h-4 w-4' />
            {isSending ? 'Sending...' : 'Send Message'}          </Button>

          </Button>

        </div>
      </form>
    </div>
  );

  `mailto:$ {;
  email ;
}` ";
}className="text-zion-cyan hover:underline truncate block" > required /> </div> <div> <Textarea required /> </div> <Button </Button> </div> </form> </div>) ;
}'"