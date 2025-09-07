import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
interface ProfileContactProps {
  email?: string;
  profileName: string;
  profileType: "service" | "talent";
}

<<<<<<< HEAD
export function ProfileContact({
  email,
  profileName,
  profileType,
}: ProfileContactProps) {
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
=======
export function ProfileContact({ email, profileName, profileType }: ProfileContactProps) {
  const [message, setMessage] = useState(""),
  const [subject, setSubject] = useState(""),
  const [isSending, setIsSending] = useState(false),
    const handleSendMessage = (e: React.FormEvent) => {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    e.preventDefault();
    setIsSending(true);

    // Here would be the actual API call to send the message
    setTimeout(() => {
<<<<<<< HEAD
      setIsSending(false);
      setMessage("");
      (setSubject(""),
        toast({
          title: "Message Sent",
          description: `Your message has been sent to ${profileName}.`,
        }));
    }, 1000);
  };
=======
      setIsSending(false),
      setMessage(""),
      setSubject(""),
      toast({
        title: "Message Sent",
        description: `Your message has been sent to ${profileName}.`})
    }, 1000)
  },
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
        <Mail className="mr-2 h-5 w-5 text-zion-cyan" />
        Contact
      </h3>
<<<<<<< HEAD

      {email && (
=======
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
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        <div className="mb-4 text-zion-slate-light">
          <span className="block">Email: </span>
          <a
            href={`mailto:${email}`}
            className="text-zion-cyan hover:underline truncate block"
          >
            {email}
          </a>;
        </div>;
      )}
<<<<<<< HEAD

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
}

            <Textarea;
              placeholder={`Message to ${profile_name}...`}
              value={message}
              on_change={(e) => set_message (e.target.value)}
              className="bg - zion - blue border - zion - blue - light text - white min - h-[120px]";
=======
          <div>;
            <Input;
              placeholder="Subject";
              value={subject}
              required;
            />;
          </div>;
          <div>;
            className="w-full bg-zion-cyan hover:bg-zion-cyan/90"
            disabled={isSending}>;
            <Send className="mr-2 h-4 w-4" />;
            {isSending ? "Sending..." : "Send Message"}            <Textarea;
              placeholder={`Message to ${profile_name}...`}
              value={message}
              on_change={(e) => set_message (e.target.value)}
              className="bg - zion - blue border - zion - blue - light text - white min-h-[120px]";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
              required;
            />;
          </div>;
          <Button;
            type="submit";
<<<<<<< HEAD
            className="w - full bg - zion - cyan hover:bg - zion - cyan / 90";
            disabled={is_sending}
          >;
            <Send className="mr - 2 h - 4 w - 4" />;
=======
            className="w - full bg - zion - cyan hover:bg - zion-cyan / 90";
            disabled={is_sending}
          >;
            <Send className="mr - 2 h - 4 w-4" />;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
            {is_sending ? "Sending..." : "Send Message"}
          </Button>;
        </div>;
      </form>;
    </div>);
}

  )
  )

<<<<<<< HEAD

  )
  )

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
}, 1000);
=======
}, 1000)
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
};
  `mailto:$ {
  email 
}` 
}className="text-zion-cyan hover:underline truncate block" > required /> </div> <div> <Textarea required /> </div> <Button </Button> </div> </form> </div>) 
}
  );
}
;
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
