<<<<<<< HEAD

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
interface ProfileContactProps {
  email?: string,
  profileName: string,
  profileType: 'service' | 'talent'
}

export function ProfileContact({ email, profileName, profileType }: ProfileContactProps) {
  const [message, setMessage] = useState($2);
  const [subject, setSubject] = useState($2);
  const [isSending, setIsSending] = useState($2);
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault($2);
    setIsSending($2);
    // Here would be the actual API call to send the message
    setTimeout(() => {
      setIsSending($2);
      setMessage($2);
      setSubject($2);
=======
<<<<<<< HEAD
=======
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


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
interface ProfileContactProps {
  email?: string;
  profileName: string;
<<<<<<< HEAD
=======
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


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface ProfileContactProps {
  email?: string,
  profileName: string,
  profileType: 'service' | 'talent'
}

<<<<<<< HEAD
=======

<<<<<<< HEAD
export function ProfileContact({ email, profileName, profileType }: ProfileContactProps) {;
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [isSending, setIsSending] = useState(false);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export function ProfileContact({ email, profileName, profileType }: ProfileContactProps) {
  const [message, setMessage] = useState(""),
  const [subject, setSubject] = useState(""),
  const [isSending, setIsSending] = useState(false),
<<<<<<< HEAD
  
export function ProfileContact({ email, profileName, profileType }: ProfileContactProps) {;
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [isSending, setIsSending] = useState(false);
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault(),
    setIsSending(true),
    
    // Here would be the actual API call to send the message
    setTimeout(() => {
      setIsSending(false),
      setMessage(""),
      setSubject(""),
>>>>>>> merged-prs-20250907-203621
      toast({
        title: "Message Sent",
        description: `Your message has been sent to ${profileName}.`})
    }, 1000)
  },
<<<<<<< HEAD

  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
        <Mail className="mr-2 h-5 w-5 text-zion-cyan" />
        Contact
      </h3>
=======

<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send } from "lucide-react";
import { useState } from "react";
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

import { toast } from "@/hooks/use-toast";
interface ProfileContactProps {}
  email?: string;
  profileName: string;"
  profileType: "service" | "talent";
}

    e.preventDefault();
    setIsSending(true);

    // Here would be the actual API call to send the message
    setTimeout(() => {

    // Here would be the actual API call to send the message;
    setTimeout(() => {}
      setIsSending(false);"
      setMessage("");"
      (setSubject(""),
        toast({"
          title: "Message Sent",
          description: `Your message has been sent to ${profileName}.`,
        }));
    }, 1000);
  };

  return ("
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">"
      <h3 className="text-xl font-bold text-white mb-4 flex items-center">"
        <Mail className="mr-2 h-5 w-5 text-zion-cyan" />
        Contact;
      </h3>
<<<<<<< HEAD

      {email && (
        <div className="mb - 4 text - zion - slate-light">;
          <span className="block">Email: </span>;
          <a;
            href={`mailto:${email}`}
}
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621

      {email && (
        <div className="mb-4 text-zion-slate-light">
          <span className="block">Email: </span>
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
<<<<<<< HEAD
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
    <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6 mb-8">;
      <h3 className="text - xl font - bold text - white mb - 4 flex items-center">;
        <Mail className="mr - 2 h - 5 w - 5 text - zion-cyan" />;
        Contact;
      </h3>;      {email && (
        <div className="mb-4 text-zion-slate-light">
          <span className="block">Email: </span>
          <a
            href={`mailto:${email}`}
=======
  )
>>>>>>> merged-prs-20250907-203621
  )
}
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Mail, Send } from "lucide-react",;
import { useState } from "react",;
import { toast } from "@/hooks/use-toast",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

            className="text-zion-cyan hover:underline truncate block"
          >
            {email}
          </Link>
        </div>
      )}

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
        title: "Message Sent",
        description: `Your message has been sent to ${profileName}.`});
    }, 1000);
  };
<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">;
      <h3 className="text-xl font-bold text-white mb-4 flex items-center">;
        <Mail className="mr-2 h-5 w-5 text-zion-cyan" />;
        Contact;
      </h3>;
<<<<<<< HEAD

=======
      ;
      {email && (;
        <div className="mb-4 text-zion-slate-light">;
          <span className="block">Email:</span>;
          <a ;
            href={`mailto:${email}`} ;
            className="text-zion-cyan hover:underline truncate block";
          >;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            {email}
          </a>;
        </div>;
      )}
<<<<<<< HEAD

=======
      ;
      <form onSubmit={handleSendMessage}>;
        <div className="space-y-4">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          <div>;
            <Input;
              placeholder="Subject";

              value={subject}
              onChange={(e) => setSubject(e.target.value)}
<<<<<<< HEAD
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
=======
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
<<<<<<< HEAD
          <Button;
            type="submit";
=======
            className="w-full bg-zion-cyan hover:bg-zion-cyan/90"
            disabled={isSending}>;
            <Send className="mr-2 h-4 w-4" />;
            {isSending ? "Sending..." : "Send Message"}
<<<<<<< HEAD
          <Button ;
            type="submit" ;
>>>>>>> merged-prs-20250907-203621
            className="w-full bg-zion-cyan hover:bg-zion-cyan/90";
            disabled={isSending}
          >;
            <Send className="mr-2 h-4 w-4" />;
<<<<<<< HEAD
            {isSending ? "Sending..." : "Send Message"}
=======
            {isSending ? "Sending..." :"Send Message"}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

            disabled={isSending}
          >
            <Send className="mr-2 h-4 w-4" />
            {isSending ? "Sending..." : "Send Message"}

          </Button>
        </div>
      </form>
    </div>
<<<<<<< HEAD
  );
}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
          </Button>;
        </div>;
      </form>;
    </div>;
<<<<<<< HEAD
  );
}
;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

            <Textarea;

            {is_sending ? "Sending..." : "Send Message"}
          </Button>;
        </div>;
      </form>;
    </div>);
}

  )
<<<<<<< HEAD

  )
  )

=======
  )

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
}, 1000)
=======
  
}, 1000);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
};
  `mailto:$ {
  email 
}` 
}className="text-zion-cyan hover:underline truncate block" > required /> </div> <div> <Textarea required /> </div> <Button </Button> </div> </form> </div>) 
<<<<<<< HEAD
});
}
;
=======
}
  );
}
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
