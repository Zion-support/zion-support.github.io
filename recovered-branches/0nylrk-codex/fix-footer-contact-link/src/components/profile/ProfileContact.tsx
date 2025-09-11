<<<<<<< HEAD
<<<<<<< HEAD
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Mail, Send} from "lucide-react";
import {useState} from "react";
import {toast} from "@/hooks/use-toast";
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Mail, Send } from "lucide-react",


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



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface ProfileContactProps {
  email?: string,
  profileName: string,
  profileType: 'service' | 'talent'
}

<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function ProfileContact({ email, profileName, profileType }: ProfileContactProps) {;
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [isSending, setIsSending] = useState(false);
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function ProfileContact({ email, profileName, profileType }: ProfileContactProps) {
  const [message, setMessage] = useState(""),
  const [subject, setSubject] = useState(""),
  const [isSending, setIsSending] = useState(false),
<<<<<<< HEAD
<<<<<<< HEAD
  
export function ProfileContact({ email, profileName, profileType }: ProfileContactProps) {;
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [isSending, setIsSending] = useState(false);
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
        <Mail className="mr-2 h-5 w-5 text-zion-cyan" />
        Contact
      </h3>
<<<<<<< HEAD
<<<<<<< HEAD

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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
  )
  )
}
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Mail, Send } from "lucide-react",;
import { useState } from "react",;
import { toast } from "@/hooks/use-toast",;
=======
}
export /**
 * ProfileContact - Function description
 */
function ProfileContact() {
  const [message, set_message] = useState ("");
  const [subject, set_subject] = useState ("");
  const [is_sending, setIsSending] = useState (false);
;
  const handleSendMessage = (e: React.FormEvent) =>: any {
    e.prevent_default ();
    setIsSending (true);
;
    // Here would be the actual API call to send the message;
    set_timeout (() => {
      setIsSending (false);
      set_message ("");
      (set_subject (""),
        toast ({
          title: "Message Sent",
          description: `Your message has been sent to ${profile_name}.`,
        }));
    }, 1000);
  }
;
  return (
    <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6 mb - 8">;
      <h3 className="text - xl font - bold text - white mb - 4 flex items - center">;
        <Mail className="mr - 2 h - 5 w - 5 text - zion - cyan" />;
        Contact;
      </h3>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      {email && (
        <div className="mb - 4 text - zion - slate - light">;
          <span className="block">Email: </span>;
          <a;
            href={`mailto:${email}`}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function ProfileContact(): any ({ email, profileName, profileType }: ProfileContactProps) {;
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [isSending, setIsSending] = useState(false);
<<<<<<< HEAD
  const handleSendMessage = (e: React && React.FormEvent) => {;
    e && e.preventDefault();
    setIsSending(true);
=======

  const handleSendMessage = (e: React && React.FormEvent) => {;
    e && e.preventDefault();
    setIsSending(true);

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Here would be the actual API call to send the message;
    setTimeout(() => {;
      setIsSending(false);
      setMessage("");
      setSubject(""),;
      toast({;
        title: "Message Sent",;
        description: `Your message has been sent to ${profileName}.`});
    }, 1000);
  };
<<<<<<< HEAD
  return (

import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Mail, Send } from "lucide-react",;
import { useState } from "react",;
import { toast } from "@/hooks/use-toast",;
;
interface ProfileContactProps {;
  email?:string,;
  profileName:string,;
  profileType:'service' | 'talent';
}
;
export function ProfileContact({ email, profileName, profileType } ProfileContactProps) {;
  const [message, setMessage] = useState(""),;
  const [subject, setSubject] = useState(""),;
  const [isSending, setIsSending] = useState(false),;
  ;
  const handleSendMessage = (e:React.FormEvent) => {;
    e.preventDefault(),;
    setIsSending(true),;
    ;
    // Here would be the actual API call to send the message;
    setTimeout(() => {;
      setIsSending(false),;
      setMessage(""),;
      setSubject(""),;
      toast({;
        title:"Message Sent",;
        description:`Your message has been sent to ${profileName}.`}),;
    }, 1000),;
  },;
;
  return (;
=======

  return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">;
      <h3 className="text-xl font-bold text-white mb-4 flex items-center">;
        <Mail className="mr-2 h-5 w-5 text-zion-cyan" />;
        Contact;
      </h3>;
<<<<<<< HEAD
      ;
      {email && (;
        <div className="mb-4 text-zion-slate-light">;
          <span className="block">Email:</span>;
          <a ;
            href={`mailto:${email}`} ;
            className="text-zion-cyan hover:underline truncate block";
          >;
=======

      {email && (;
        <div className="mb-4 text-zion-slate-light">;
          <span className="block">Email: </span>;
          <a
            href={`mailto:${email}`} 
            className="text-zion-cyan hover:underline truncate block">;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {email}
          </a>;
        </div>;
      )}
<<<<<<< HEAD
      ;
      <form onSubmit={handleSendMessage}>;
        <div className="space-y-4">;
          <div>;
            <Input;
              placeholder="Subject";
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="bg-zion-blue border-zion-blue-light text-white";
=======


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
              className="bg - zion - blue border - zion - blue - light text - white";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              required;
            />;
          </div>;
          <div>;
<<<<<<< HEAD
            <Textarea;
              placeholder={`Message to ${profileName}...`}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
=======

              onChange={(e) => setMessage(e && e.target.value)}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className="bg-zion-blue border-zion-blue-light text-white min-h-[120px]";
              required;
            />;
          </div>;
<<<<<<< HEAD
=======
          <Button
            type="submit" 

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            className="w-full bg-zion-cyan hover:bg-zion-cyan/90"
            disabled={isSending}>;
            <Send className="mr-2 h-4 w-4" />;
            {isSending ? "Sending..." : "Send Message"}
<<<<<<< HEAD
<<<<<<< HEAD
          <Button ;
            type="submit" ;
            className="w-full bg-zion-cyan hover:bg-zion-cyan/90";
            disabled={isSending}
          >;
            <Send className="mr-2 h-4 w-4" />;
            {isSending ? "Sending..." :"Send Message"}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            className="w-full bg-zion-cyan hover:bg-zion-cyan/90"
            disabled={isSending}
          >
            <Send className="mr-2 h-4 w-4" />
            {isSending ? "Sending..." : "Send Message"}

          </Button>
        </div>
      </form>
    </div>

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </Button>;
        </div>;
      </form>;
    </div>;
<<<<<<< HEAD

=======
  );
}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Textarea;
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
<<<<<<< HEAD

  )
  )

<<<<<<< HEAD
  ),;}
 interface ProfileContactProps {
  email?: string;
profileName: string;
profileType: 'service' | 'talent' 
}export function ProfileContact ({
  email, profileName, profileType 
}: ProfileContactProps) {
  const handleSendMessage = (e: React.FormEvent) => {
  e.preventDefault ();
setIsSending (true);
//Here would be the actual API call to send the message setTimeout ( () => {
  
}, 1000);
};
  `mailto:$ {
  email 
}` 
}className="text-zion-cyan hover:underline truncate block" > required /> </div> <div> <Textarea required /> </div> <Button </Button> </div> </form> </div>) 
}
  );
}
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  )
=======
  )

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
