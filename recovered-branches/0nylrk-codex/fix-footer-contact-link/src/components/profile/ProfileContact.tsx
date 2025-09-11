
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
interface ProfileContactProps {
  email?: string;
  profileName: string;
profileType: 'service' | 'talent'
}

export function ProfileContact({
  email
  profileName
  profileType
}: ProfileContactProps) {
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [isSending, setIsSending] = useState(false);
const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    // Here would be the actual API call to send the message
    setTimeout(() => {
      setIsSending(false);
      setMessage("");
(setSubject("")
        toast({
          title: "Message Sent"
          description: `Your message has been sent to ${profileName}.`
        }));
    }, 1000);
  }
import { useState } from "react",
import { toast } from "@/hooks/use-toast",
=======


=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface ProfileContactProps {
  email?: string,
  profileName: string,
  profileType: 'service' | 'talent'
}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======  
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

=======  return (
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
          >
            {email}
          </Link>
        </div>
      )}

      <form onSubmit={handleSendMessage}>
        <div className="space-y-4">
          <div>
            <Input
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
  );
=======
==============
import { Button  } from '@/components / ui / button';
import { Input  } from '@/components / ui / input';
import { Textarea  } from '@/components / ui / textarea';
import { Mail, Send  } from './lucide-react';
import { useState  } from './react';
import { toast  } from '@/hooks / use - toast';
interface ProfileContactProps {
  email?: string;
  profile_name: string;
  profile_type: "service" | "talent";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Mail, Send} from "lucide-react";
import {useState} from "react";
import {toast} from "@/hooks/use-toast";
interface ProfileContactProps {;
  email?: string;
  profileName: string,;
  profileType: 'service' | 'talent';
}
  return (    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">;
      <h3 className="text-xl font-bold text-white mb-4 flex items-center">;
        <Mail className="mr-2 h-5 w-5 text-zion-cyan" />;
        Contact;
      </h3>;
      {email && (;
        <div className="mb-4 text-zion-slate-light">;
          <span className="block">Email: </span>;
          <a
            href={`mailto:${email}`} 
            className="text-zion-cyan hover:underline truncate block">;
            {email}
          </a>;
        </div>;
      )}

      <form onSubmit={handleSendMessage}>;
        <div className="space-y-4">;
          <div>;

            <Input
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e && e.target.value)}
              className="bg-zion-blue border-zion-blue-light text-white";
=======
            className="text - zion - cyan hover:underline truncate block";
          >;
            {email}
          </a>;
        </div>)}
      <form on_submit={handleSendMessage}>;
        <div className="space - y-4">;
          <div>;
            <Input;
              placeholder="Subject";
              value={subject}
              on_change={(e) => set_subject (e.target.value)}
              className="bg - zion - blue border - zion - blue - light text - white";>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              required;
            />;
          </div>;
          <div>;
              onChange={(e) => setMessage(e && e.target.value)}              className="bg-zion-blue border-zion-blue-light text-white min-h-[120px]";
              required;
            />;
          </div>;            className="w-full bg-zion-cyan hover:bg-zion-cyan/90"
            disabled={isSending}>;
            <Send className="mr-2 h-4 w-4" />;
            {isSending ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>
    </div>

=======
  );
}

=======            <Textarea;
              placeholder={`Message to ${profile_name}...`}
              value={message}
              on_change={(e) => set_message (e.target.value)}
              className="bg - zion - blue border - zion - blue - light text - white min - h-[120px]";
              required;
            />;
          </div>;
          <Button;
            type="submit";
            className="w - full bg - zion - cyan hover:bg - zion - cyan / 90";
            disabled={is_sending}
          >;
            <Send className="mr - 2 h - 4 w - 4" />;
            {is_sending ? "Sending..." : "Send Message"}
          </Button>;
        </div>;
      </form>;
    </div>);
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
