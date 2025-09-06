<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileContact.tsx

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Mail, Send } from "lucide-react",

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface ProfileContactProps {
  email?: string,
  profileName: string,
  profileType: 'service' | 'talent'
}

<<<<<<< HEAD
<<<<<<< HEAD
=======

export function ProfileContact({ email, profileName, profileType }: ProfileContactProps) {
  const [message, setMessage] = useState(""),
  const [subject, setSubject] = useState(""),
  const [isSending, setIsSending] = useState(false),

  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
export function ProfileContact({ email, profileName, profileType }: ProfileContactProps) {;
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [isSending, setIsSending] = useState(false);
  
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
        <Mail className="mr-2 h-5 w-5 text-zion-cyan" />
        Contact
      </h3>
<<<<<<< HEAD
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileContact.tsx
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
      {email && (
        <div className="mb - 4 text - zion - slate - light">;
          <span className="block">Email: </span>;
          <a;
            href={`mailto:${email}`}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileContact.tsx
<<<<<<< HEAD
=======

      {email && (
        <div className="mb-4 text-zion-slate-light">
          <span className="block">Email: </span>
          <a
            href={`mailto:${email}`}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            className="text-zion-cyan hover:underline truncate block"
          >
            {email}
          </Link>
        </div>
      )}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

<<<<<<< HEAD
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Mail, Send } from "lucide-react",;
import { useState } from "react",;
import { toast } from "@/hooks/use-toast",;
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileContact.tsx
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Mail, Send} from "lucide-react";
import {useState} from "react";
import {toast} from "@/hooks/use-toast";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
interface ProfileContactProps {;
  email?: string;
  profileName: string,;
  profileType: 'service' | 'talent';
}
export function ProfileContact(): any ({ email, profileName, profileType }: ProfileContactProps) {;
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [isSending, setIsSending] = useState(false);
  const handleSendMessage = (e: React && React.FormEvent) => {;
    e && e.preventDefault();
    setIsSending(true);
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
  return (
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">;
      <h3 className="text-xl font-bold text-white mb-4 flex items-center">;
        <Mail className="mr-2 h-5 w-5 text-zion-cyan" />;
        Contact;
      </h3>;
<<<<<<< HEAD
      {email && (;
        <div className="mb-4 text-zion-slate-light">;
          <span className="block">Email: </span>;
          <a
            href={`mailto:${email}`} 
            className="text-zion-cyan hover:underline truncate block">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileContact.tsx

========
=======
      ;
      {email && (;
        <div className="mb-4 text-zion-slate-light">;
          <span className="block">Email:</span>;
          <a ;
            href={`mailto:${email}`} ;
            className="text-zion-cyan hover:underline truncate block";
          >;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileContact.tsx
            {email}
          </a>;
        </div>;
      )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileContact.tsx


      <form onSubmit={handleSendMessage}>;
        <div className="space-y-4">;
          <div>;

========
<<<<<<< HEAD
      <form onSubmit={handleSendMessage}>;
        <div className="space-y-4">;
          <div>;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileContact.tsx
            <Input
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e && e.target.value)}
              className="bg-zion-blue border-zion-blue-light text-white";
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
=======
      ;
      <form onSubmit={handleSendMessage}>;
        <div className="space-y-4">;
          <div>;
            <Input;
              placeholder="Subject";
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="bg-zion-blue border-zion-blue-light text-white";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              required;
            />;
          </div>;
          <div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileContact.tsx

              onChange={(e) => setMessage(e && e.target.value)}
========
<<<<<<< HEAD
              onChange={(e) => setMessage(e && e.target.value)}
=======
            <Textarea;
              placeholder={`Message to ${profileName}...`}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileContact.tsx
              className="bg-zion-blue border-zion-blue-light text-white min-h-[120px]";
              required;
            />;
          </div>;
<<<<<<< HEAD
          <Button
            type="submit" 
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileContact.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileContact.tsx
            className="w-full bg-zion-cyan hover:bg-zion-cyan/90"
            disabled={isSending}>;
            <Send className="mr-2 h-4 w-4" />;
            {isSending ? "Sending..." : "Send Message"}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileContact.tsx

            className="w-full bg-zion-cyan hover:bg-zion-cyan/90"
            disabled={isSending}
          >
            <Send className="mr-2 h-4 w-4" />
            {isSending ? "Sending..." : "Send Message"}

          </Button>
        </div>
      </form>
    </div>

========
=======
          <Button ;
            type="submit" ;
            className="w-full bg-zion-cyan hover:bg-zion-cyan/90";
            disabled={isSending}
          >;
            <Send className="mr-2 h-4 w-4" />;
            {isSending ? "Sending..." :"Send Message"}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileContact.tsx
          </Button>;
        </div>;
      </form>;
    </div>;
<<<<<<< HEAD
  );
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileContact.tsx
<<<<<<< HEAD
;

=======

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileContact.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileContact.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  )
=======
  )

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileContact.tsx
=======
  );
}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
