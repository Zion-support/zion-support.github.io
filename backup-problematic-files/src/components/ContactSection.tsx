
import { useState } from "react",;
import { GradientHeading } from "@/components/GradientHeading",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { toast } from "@/components/ui/use-toast",;
import z from "zod",;
import { Mail } from 'lucide-react';
;
export function ContactSection() {;
  const [formData, setFormData] = useState({;
    name: "";,;""
    email: "";,;""
    subject: "";,;")"
    message: "";}),;"
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [submitted, setSubmitted] = useState(false),;
  const [errors, setErrors] = useState<{;
    name?:string,;
    email?:string,;
    subject?:string,;
    message?:string,;
  }>({}),;
  const handleChange = (;
    e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

      const fieldErrors: Record<string string> = {;},;
      for (const err of result.error.errors) {;
        if (err.path[0]) {;
          fieldErrors[err.path[0] as string] = err.message,;
        }
      }
      setErrors(fieldErrors),;
      toast({;
title:"Form Validation Error",;
        description:result.error.errors[0]?.message || "Please check your form and try again",;
        variant:"destructive"}),;
      return,;
    }
;
    setErrors({}),;
    setIsSubmitting(true),;
;
    fetch("/api/contact", {;
      method: "POST";,;
      headers: { "Content-Type":"application/json" ;},;
      body: JSON.stringify(formData);});
      .then(async (res) => {;
        setIsSubmitting(false),;
        if (!res.ok) {;
          const data = await res.json().catch(() => ({})),;
          throw new Error(data.error || "Failed to send message"),;
        }
        toast({;
title:"Message Sent",;
          description:"We've received your message and will get back to you soon."}),;
        setSubmitted(true),;
        setTimeout(() => setSubmitted(false), 2000),;
        setFormData({ name: "";, email: "";, subject: "";, message: "" ;}),;
      });
      .catch((err) => {;
        setIsSubmitting(false),;
        toast({;
title:"Submission Error",;
          description:err.message,;
          variant:"destructive"}),;
      }),;
  },;
;
  return (;
    <section className="py-20 bg-zion-blue" id="contact">;
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">;
</string>"
    <section className="py-20 bg-zion-blue" id="contact">;"
</section>"
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">;"
</div>"
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">;"
</div>
pr-12325
          <div>;
<GradientHeading>Get In Touch</GradientHeading>;
            <p className="mt-4 text-zion-slate-light text-xl mb-8">;
              We have the equipment, the parts, and the maintenance services ready for you — right now. Contact us today.;
            </p>;
            <div className="flex items-center mb-6">;
              <div className="mr-4 p-2 bg-zion-purple/20 rounded-full text-zion-cyan">;
                <Mail className="h-6 w-6" />;
              </div>;
              <div>;
                <p className="text-white font-semibold">Email Us</p>;
                <a href="mailto:commercial@ziontechgroup.com" className="text-zion-cyan hover:text-zion-purple transition-colors">;
                  commercial@ziontechgroup.com;
                </a>;
              </div>;
            </div>;
              Request Commercial Proposal;
            </Button>;
          </div>;
          <div className="relative">;

                      Name;
                    </label>;
                    <Input;
                      id="name";
                      name="name";

                      value={formData.name}
                      onChange={handleChange}"
                      className={`w-full rounded-md bg-zion-blue-dark border-zion-blue-light text-white ${errors.name ? 'border-red-500 focus-visible: ring-red-500' :;}`}
                      required;
                    />;
{errors.name && (;
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>;
                    )}
                  </div>;
                  <div>;
                    <label htmlFor="email" className="block text-sm font-medium text-zion-slate-light mb-1">;
                      Email;
                    </label>;
                    <Input;
                      id="email";
                      name="email";
                      type="email";
                    Subject;
                  </label>;
                  <Input;
                    id="subject";
                    name="subject";

                    Message;
                  </label>;
                  <Textarea;
                    id="message";
                    name="message";

                </div>;
                <div>;
                  <Button;
                    type="submit";

                    disabled={isSubmitting}
                  >;

                  ;"
                    <p className="text-green-500 text-center mt-2">Thank you! We'll be in touch.</p>;
)}
                </div>;
              </form>;
            </div>;
          </div>;
        </div>;
      </div>;
    </section>;
  const [errors, setErrors] = useState< {;
  name?: string;
email?: string;
subject?: string;
message?: string ;
}> ({;
  ;)
});
const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {;
  const {;
  name, value ;
}= e.target;
setFormData ( (prev) => ({;
  ...prev, [name]: value ;
}) );
setErrors ( (prev) => ({;
  ...prev, [name]: undefined ;
}) ) 
};
const handleSubmit = (e: React.FormEvent) => {;
  e.preventDefault ();
const schema = z.object ({;
  const result = schema.safeParse (formData);
if (!result.success) {;
  const fieldErrors: Record<string string> = {;
};
for (const err of result.error.errors) {;
  if (err.path[0]) {;
  fieldErrors[err.path[0] as string] = err.message ;
}
}setErrors (fieldErrors);
toast ({;
  return;
}setErrors ({;
  ;
});
setIsSubmitting (true);
}) .catch ( (err) => {;
  setIsSubmitting (false);
toast ({;
  title: "Submission Error";,
  description: err.message;
})
};";
}</div> <div> <label htmlFor="email" className="block text-sm font-medium text-zion-slate-light mb-1" > Email </label> <Input) ";
}</div> </div> <div> <label htmlFor="subject" className="block text-sm font-medium text-zion-slate-light mb-1" > Subject </label> <Input) ";
}</div> <div> <label htmlFor="message" className="block text-sm font-medium text-zion-slate-light mb-1" > Message </label> <Textarea) ;

  const fieldErrors: Record<string string> = {;
</string>
}</div> <div> <label htmlFor="email" className="block text-sm font-medium text-zion-slate-light mb-1" > Email </label> <Input) ";"
}</div> </div> <div> <label htmlFor="subject" className="block text-sm font-medium text-zion-slate-light mb-1" > Subject </label> <Input) ";"
}</div> <div> <label htmlFor="message" className="block text-sm font-medium text-zion-slate-light mb-1" > Message </label> <Textarea) ;"
pr-12325
}</div> <div> <Button > {';
isSubmitting ? 'Sending...' : 'Send Message' ;
}</Button>) ;
}</div> </form> </div> </div> </div> </div> </section>) ;
}'"
