<<<<<<< HEAD
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface ProfileContactProps {
  email?: string,
  profileName: string,
  profileType: 'service' | 'talent'
}

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

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send } from "lucide-react";
import { useState } from "react";
=======
import { Button } from "@/components/ui/button";"
import { Input } from "@/components/ui/input";"
import { Textarea } from "@/components/ui/textarea";"
import { Mail, Send } from "lucide-react";"
import { useState } from "react";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { toast } from "@/hooks/use-toast";
interface ProfileContactProps {}
  email?: string;
  profileName: string;"
  profileType: "service" | "talent";
}

export function ProfileContact({ email, profileName, profileType }: ProfileContactProps) {
  const [message, setMessage] = useState(""),
  const [subject, setSubject] = useState(""),
  const [isSending, setIsSending] = useState(false),
    const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

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
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

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
    <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6 mb-8">;
      <h3 className="text - xl font - bold text - white mb - 4 flex items-center">;
        <Mail className="mr - 2 h - 5 w - 5 text - zion-cyan" />;
        Contact;
      </h3>;      {email && (
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
<<<<<<< HEAD
      <form onSubmit={handleSendMessage}>
        <div className="space-y-4">
          <div>
            <Input
              placeholder="Subject"
          <div>;
            <Input;
              placeholder="Subject";
              value={subject}
              required;
            />;
          </div>;
          <div>;
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
<<<<<<< HEAD

  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">;
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
=======
            className="text-zion-cyan hover:underline truncate block"
          >
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
            {email}
          </a>;
        </div>;
      )}

          <div>;
            <Input;
              placeholder="Subject";
=======

      <form onSubmit={handleSendMessage}>
        <div className="space-y-4">
          <div>
            <Input
              placeholder="Subject"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
            disabled={isSending}
          >
            <Send className="mr-2 h-4 w-4" />
            {isSending ? "Sending..." : "Send Message"}

          </Button>
        </div>
      </form>
    </div>
  );
}
<<<<<<< HEAD
;
            <Textarea;
=======
            disabled={isSending}>;
            <Send className="mr-2 h-4 w-4" />;
            {isSending ? "Sending..." : "Send Message"}            <Textarea;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
            disabled={isSending}>;
            <Send className="mr-2 h-4 w-4" />;
            {isSending ? "Sending..." : "Send Message"}            <Textarea;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

            <Textarea;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              placeholder={`Message to ${profile_name}...`}
              value={message}
              on_change={(e) => set_message (e.target.value)}
              className="bg - zion - blue border - zion - blue - light text - white min-h-[120px]";
              required;
            />;
          </div>;
          <Button;
            type="submit";
            className="w - full bg - zion - cyan hover:bg - zion-cyan / 90";
            disabled={is_sending}
          >;
<Send className="mr - 2 h - 4 w-4" />;
=======
            <Send className="mr - 2 h - 4 w-4" />;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            {is_sending ? "Sending..." : "Send Message"}
          </Button>;
        </div>;
      </form>;
    </div>);
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  )
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

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
}, 1000)
};
  `mailto:$ {
  email 
}` 
}className="text-zion-cyan hover:underline truncate block" > required /> </div> <div> <Textarea required /> </div> <Button </Button> </div> </form> </div>) 
}
  );
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

import { Button } from "@/components/ui/button";""
import { Input } from "@/components/ui/input";""
import { Textarea } from "@/components/ui/textarea";""
import { Mail, Send } from "lucide-react";""
import { useState } from "react";""
import { toast } from "@/hooks/use-toast";"

interface ProfileContactProps {
  // TODO: Implement
}
  email?: string;

  profileName: string;,"
  profileType: "service" | "talent";"

}

export function ProfileContact({
  email,

  profileName,
  profileType,)
}: ProfileContactProps) {"
  const [message, setMessage] = useState("");""
  const [subject, setSubject] = useState("");"

  const [isSending, setIsSending] = useState(false);

  const handleSendMessage = (
    e.preventDefault();
    setIsSending(true);

    // Here would be the actual API call to send the message;

    setTimeout(() => {
      setIsSending(false);"
      setMessage("");""
      (setSubject(""),"
        toast({"
          title: "Message Sent","
          description: `Your message has been sent to ${profileName}.`,)

        }));
    }, 1000);
  };

  return ("
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">"
</div>"
      <h3 className="text-xl font-bold text-white mb-4 flex items-center">"
</h3>"
        <Mail className="mr-2 h-5 w-5 text-zion-cyan" />"

        <div className="mb-4 text-zion-slate-light">"
          <span className="block">Email: </span>"
          <a;`;
            href={`mailto:${email}`}"
            className="text-zion-cyan hover:underline truncate block""
          >
</a>
          </a>;
        </div>;
      <form onSubmit={handleSendMessage}>
</form>"
        <div className="space-y-4">"
</div>
          <div>
            <Input;"
              placeholder="Subject""
              value={subject})
              onChange={(e) => setSubject(e.target.value)}

            <Textarea;`;
              placeholder={`Message to ${profileName}...`}
              value={message}
              onChange={(e) => setMessage(e.target.value)}

          <Button;"
            type="submit"""
            className="w-full bg-zion-cyan hover:bg-zion-cyan/90""
            disabled={isSending}
"
            <Send className="mr-2 h-4 w-4" />"

      </form>
</Send>

          </Button>
        </div>
      </form>
    </div>

            <Textarea;
              placeholder={`Message to ${profile_name}...`}
              on_change={(e) => set_message (e.target.value)}

            type="submit";""
            className="w - full bg - zion - cyan hover:bg - zion - cyan / 90";"
            disabled={is_sending}
          >;
            <Send className="mr - 2 h - 4 w - 4" />;"

          ;
      </form>;
    </div>);"
}className="text-zion-cyan hover:underline truncate block" > required /> </div> <div> <Textarea required /> </div> <Button  </div> </form> </div>)""`;
pr-12325
}className="text-zion-cyan hover:underline truncate block" > required /> </div> <div> <Textarea required /> </div> <Button </Button> </div> </form> </div>)""

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
