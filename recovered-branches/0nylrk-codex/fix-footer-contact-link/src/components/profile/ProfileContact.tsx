
<<<<<<< HEAD


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



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
interface ProfileContactProps {
  email?: string,
  profileName: string,
  profileType: 'service' | 'talent'
}

export function ProfileContact({ email, profileName, profileType }: ProfileContactProps) {;
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [isSending, setIsSending] = useState(false);
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

  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
        <Mail className="mr-2 h-5 w-5 text-zion-cyan" />
        Contact
      </h3>

      {email && (
        <div className="mb - 4 text - zion - slate - light">;
          <span className="block">Email: </span>;
          <a;
            href={`mailto:${email}`}
<<<<<<< HEAD

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

import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Mail, Send } from "lucide-react",;
import { useState } from "react",;
import { toast } from "@/hooks/use-toast",;

=======

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Mail, Send} from "lucide-react";
import {useState} from "react";
import {toast} from "@/hooks/use-toast";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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

              required;
            />;
          </div>;
          <div>;

              onChange={(e) => setMessage(e && e.target.value)}
              className="bg-zion-blue border-zion-blue-light text-white min-h-[120px]";
              required;
            />;
          </div>;
          <Button
            type="submit" 

            className="w-full bg-zion-cyan hover:bg-zion-cyan/90"
            disabled={isSending}>;
            <Send className="mr-2 h-4 w-4" />;
            {isSending ? "Sending..." : "Send Message"}

            className="w-full bg-zion-cyan hover:bg-zion-cyan/90"
            disabled={isSending}
          >
            <Send className="mr-2 h-4 w-4" />
            {isSending ? "Sending..." : "Send Message"}

          </Button>
        </div>
      </form>
    </div>

          </Button>;
        </div>;
      </form>;
    </div>;
  );
}

<<<<<<< HEAD



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  )
=======
  )

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
