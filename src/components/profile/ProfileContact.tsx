
<<<<<<< HEAD
<<<<<<< HEAD
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Mail, Send } from 'lucide-react'
import { useState } from "react",
import { toast } from "@/hooks/use-toast",
=======
import { Button } from &quot;@/components/ui/button&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
import { Mail, Send } from 'lucide-react'
import { useState } from &quot;react&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface ProfileContactProps {
  email?: string,
  profileName: string,
  profileType: 'service' | 'talent'
}

export function ProfileContact({ email, profileName, profileType }: ProfileContactProps) {
<<<<<<< HEAD
  const [message, setMessage] = useState(""),
  const [subject, setSubject] = useState(""),
  const [isSending, setIsSending] = useState(false),
=======
  const [message, setMessage] = useState("&quot;);
  const [subject, setSubject] = useState("&quot;);
  const [isSending, setIsSending] = useState(false);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault(),
    setIsSending(true),
    
    // Here would be the actual API call to send the message
    setTimeout(() => {
<<<<<<< HEAD
      setIsSending(false),
      setMessage(""),
      setSubject(""),
      toast({
        title: "Message Sent",
        description: `Your message has been sent to ${profileName}.`})
    }, 1000)
  },
=======
      setIsSending(false);
      setMessage("&quot;);
      setSubject("&quot;);
      toast({
        title: &quot;Message Sent&quot;,
        description: `Your message has been sent to ${profileName}.`});
=======

interface ProfileContactProps {_email?: string;
  profileName: string;
  profileType: 'service' | 'talent';}

export function ProfileContact(_{_email, _profileName, _profileType}: ProfileContactProps) {_const [message, _setMessage] = useState("");
  const [subject, _setSubject] = useState("");
  const [isSending, _setIsSending] = useState(false);
  
  const _handleSendMessage = (_e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    
    // Here would be the actual API call to send the message
    setTimeout__(() => {
      setIsSending(false);
      setMessage("");
      setSubject("");
      toast({
        title: "Message Sent", _description: `Your message has been sent to ${profileName}.`});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }, 1000);
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  return (
    <div className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8&quot;>
      <h3 className=&quot;text-xl font-bold text-white mb-4 flex items-center&quot;>
        <Mail className=&quot;mr-2 h-5 w-5 text-zion-cyan&quot; />
        Contact
      </h3>
      
<<<<<<< HEAD
      {email && (
        <div className=&quot;mb-4 text-zion-slate-light&quot;>
          <span className=&quot;block&quot;>Email: </span>
=======
      {_email && (
        <div className="mb-4 text-zion-slate-light">
          <span className="block">Email: </span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <a 
            href={`mailto:${email}`} 
            className=&quot;text-zion-cyan hover:underline truncate block&quot;
          >
<<<<<<< HEAD
            {email}
          </Link>
        </div>
      )}
      
      <form onSubmit={handleSendMessage}>
        <div className=&quot;space-y-4&quot;>
          <div>
            <Input
              placeholder=&quot;Subject&quot;
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className=&quot;bg-zion-blue border-zion-blue-light text-white&quot;
=======
            {_email}
          </a>
        </div>
      )}
      
      <form onSubmit={_handleSendMessage}>
        <div className="space-y-4">
          <div>
            <Input
              placeholder="Subject"
              value={_subject}
              onChange={_(_e) => setSubject(e.target.value)}
              className="bg-zion-blue border-zion-blue-light text-white"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              required
            />
          </div>
          <div>
            <Textarea
<<<<<<< HEAD
              placeholder={`Message to ${profileName}...`}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className=&quot;bg-zion-blue border-zion-blue-light text-white min-h-[120px]&quot;
=======
              placeholder={_`Message to ${profileName}...`}
              value={_message}
              onChange={_(_e) => setMessage(e.target.value)}
              className="bg-zion-blue border-zion-blue-light text-white min-h-[120px]"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              required
            />
          </div>
          <Button 
<<<<<<< HEAD
            type=&quot;submit&quot; 
            className=&quot;w-full bg-zion-cyan hover:bg-zion-cyan/90&quot;
            disabled={isSending}
          >
            <Send className=&quot;mr-2 h-4 w-4&quot; />
            {isSending ? &quot;Sending...&quot; : &quot;Send Message&quot;}
=======
            type="submit" 
            className="w-full bg-zion-cyan hover:bg-zion-cyan/90"
            disabled={_isSending}
          >
            <Send className="mr-2 h-4 w-4" />
            {_isSending ? "Sending..." : "Send Message"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </Button>
        </div>
      </form>
    </div>
  )
}
