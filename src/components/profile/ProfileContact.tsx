import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
<<<<<<< HEAD
import { Mail, Send } from "lucide-react";
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MailSend } from 'lucide-react';
=======
import { Mail; Send } from "lucide-react";
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
interface ProfileContactProps {
email?: string;
profileName: string;,
profileType: "service" | "talent";
return (
<div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">;
<h3 className="text-xl font-bold text-white mb-4 flex items-center">;
<Mail className="mr-2 h-5 w-5 text-zion-cyan" />;
Contact;
</h3>;
{email && (
<div className="mb-4 text-zion-slate-light">;
<span className="block">Email: </span>;
}
<a}
href={`mailto:${email}`}
className="text-zion-cyan hover:underline truncate block"          >        <div className="mb-4 text-zion-slate-light">
<span className="block">Email: </span>;
<a;
href={`mailto:${email}`}
className="text-zion-cyan hover:underline truncate block"
{email}
</a>;
</div>;
)}
<form onSubmit={handleSendMessage}>;
<div className="space-y-4">;
<div>;
<Input;
placeholder="Subject";
value={subject}
onChange={e => setSubject(e.target.value)}
className="bg-zion-blue border-zion-blue-light text-white"              required              className="bg-zion-blue border-zion-blue-light text-white"
<form onSubmit={handleSendMessage}>;
<div className="space-y-4">;
<div>;
<Input;
placeholder="Subject";
value={subject}
onChange={(e) => setSubject(e.target.value)}
className="bg-zion-blue border-zion-blue-light text-white"
required;
/>;
</div>;
<div>;
<Textarea;
placeholder={`Message to ${profileName}...`}
value={message}
onChange={e => setMessage(e.target.value)}
className="bg-zion-blue border-zion-blue-light text-white min-h-[120px]"
required;
/>;
</div>;
<Button;
type="submit"
<<<<<<< HEAD
            className="w-full bg-zion-cyan hover:bg-zion-cyan/90"
            disabled = {isSending}
          >
            <Send className='mr-2 h-4 w-4' />
            {isSending ? 'Sending...' : 'Send Message'}          </Button>            disabled={isSending}
          >
            <Send className="mr-2 h-4 w-4" />
            {isSending ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>
    </div>
  )
  `mailto:$ {email}` "
  `mailto:$ {
  email}` "
=======
className="w-full bg-zion-cyan hover:bg-zion-cyan/90"
disabled={isSending}              required;
/>;
</div>;
<Button;
type="submit"
className="w-full bg-zion-cyan hover:bg-zion-cyan/90"
disabled = {isSending}
>;
<Send className="mr-2 h-4 w-4" />;
{isSending ? "Sending..." : "Send Message"}          </Button>            disabled={isSending}
>;
<Send className="mr-2 h-4 w-4" />;
{isSending ? "Sending..." : "Send Message"}
</Button>;
</div>;
</form>;
</div>;
)
`mailto:$ {email}` ";
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
}className="text-zion-cyan hover:underline truncate block" > required /> </div> <div> <Textarea required /> </div> <Button </Button> </div> </form> </div>)
}'"}