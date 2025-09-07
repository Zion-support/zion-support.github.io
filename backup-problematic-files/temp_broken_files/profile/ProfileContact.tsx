<<<<<<< HEAD

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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">;
      <h3 className="text-xl font-bold text-white mb-4 flex items-center">;
        <Mail className="mr-2 h-5 w-5 text-zion-cyan" />;
        Contact;
      </h3>;
<<<<<<< HEAD

            {email}
          </a>;
        </div>;
      )}

              required;
            />;
          </div>;
          <div>;

              className="bg-zion-blue border-zion-blue-light text-white min-h-[120px]";
              required;
            />;
          </div>;

          </Button>;
        </div>;
      </form>;
    </div>;

=======
 interface ProfileContactProps {;
  email?: string;
profileName: string;
profileType: 'service' | 'talent' ;
}export function ProfileContact ({;
  email,  profileName, profileType ;
}: ProfileContactProps) {;
  const handleSendMessage = (e: React.FormEvent) => {;
  e.preventDefault ();
setIsSending (true);
//Here would be the actual API call to send the message setTimeout ( () => {;
  ;
}, 1000);
};

  `mailto:$ {;
  email ;
}` ";"}className="text-zion-cyan hover:underline truncate block" > required /> </div> <div> <Textarea required /> </div> <Button </Button> </div> </form> </div>) ;"}'"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
