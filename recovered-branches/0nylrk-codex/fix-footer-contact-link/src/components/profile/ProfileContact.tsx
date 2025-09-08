






  )

  )
}
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Mail, Send } from "lucide-react",;
import { useState } from "react",;
import { toast } from "@/hooks/use-toast",;
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

      ;
      {email && (;
        <div className="mb-4 text-zion-slate-light">;
          <span className="block">Email:</span>;
          <a ;
            href={`mailto:${email}`} ;
            className="text-zion-cyan hover:underline truncate block";
          >;
      ;
      <form onSubmit={handleSendMessage}>;
        <div className="space-y-4">;
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

          </Button>;
        </div>;
      </form>;
    </div>;





