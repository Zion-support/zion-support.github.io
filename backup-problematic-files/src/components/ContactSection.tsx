
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { useState } from "react",;
import { GradientHeading } from "@/components/GradientHeading",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { toast } from "@/components/ui/use-toast",;
import z from "zod",;
=======
import { useState } from "react";""
import { GradientHeading } from "@/components/GradientHeading";""
import { Button } from "@/components/ui/button";""
import { Input } from "@/components/ui/input";""
import { Textarea } from "@/components/ui/textarea";""
import { toast } from "@/components/ui/use-toast";""
import z from "zod";""
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD
        title:"Form Validation Error",;
        description:result.error.errors[0]?.message || "Please check your form and try again",;
=======
        title:"Form Validation Error",,
  description:result.error.errors[0]?.message || "Please check your form and try again",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        variant:"destructive"}),;
=======
        title: "Form Validation Error";,,
  description: result.error.errors[0]?.message || "Please check your form and try again";,;
        variant: "destructive";}),;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD
          title:"Message Sent",;
          description:"We've received your message and will get back to you soon."}),;
=======
          title:"Message Sent",,
  description:"We've received your message and will get back to you soon."}),;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          title: "Message Sent";,,
  description: "We've received your message and will get back to you soon.";}),;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        setSubmitted(true),;
        setTimeout(() => setSubmitted(false), 2000),;
        setFormData({ name: "";, email: "";, subject: "";, message: "" ;}),;
      });
      .catch((err) => {;
        setIsSubmitting(false),;
        toast({;
<<<<<<< HEAD
<<<<<<< HEAD
          title:"Submission Error",;
          description:err.message,;
=======
          title:"Submission Error",,
  description:err.message,;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          variant:"destructive"}),;
=======
          title: "Submission Error";,,
  description: err.message;,;
          variant: "destructive";}),;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
            <GradientHeading>Get In Touch</GradientHeading>;
            <p className="mt-4 text-zion-slate-light text-xl mb-8">;
<<<<<<< HEAD
              We have the equipment, the parts, and the maintenance services ready for you — right now. Contact us today.;
=======
              We have the equipment, the parts, and the maintenance services ready for you  right now. Contact us today.;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            </p>;
            <div className="flex items-center mb-6">;
              <div className="mr-4 p-2 bg-zion-purple/20 rounded-full text-zion-cyan">;
                <Mail className="h-6 w-6" />;
              </div>;
              <div>;
                <p className="text-white font-semibold">Email Us</p>;
                <a href="mailto:commercial@ziontechgroup.com" className="text-zion-cyan hover:text-zion-purple transition-colors">;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                  commercial@ziontechgroup.com;
                </a>;
              </div>;
            </div>;
<<<<<<< HEAD
<<<<<<< HEAD

=======
            <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              Request Commercial Proposal;
            </Button>;
          </div>;
          <div className="relative">;
<<<<<<< HEAD

=======
            <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-lg filter blur-3xl opacity-30"></div>;
            <div className="relative bg-zion-blue-light border border-zion-purple/20 rounded-lg p-8">;
              <h3 className="text-xl font-bold mb-6 text-white">Send Us a Message</h3>;
              <form onSubmit={handleSubmit} className="space-y-6">;
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">;
                  <div>;
                    <label htmlFor="name" className="block text-sm font-medium text-zion-slate-light mb-1">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                      Name;
                    </label>;
                    <Input;
                      id="name";
                      name="name";
<<<<<<< HEAD

=======
=======
            <GradientHeading>Get In Touch;"
            <p className="mt-4 text-zion-slate-light text-xl mb-8">;"
</p>
            </p>;"
            <div className="flex items-center mb-6">;"
              <div className="mr-4 p-2 bg-zion-purple/20 rounded-full text-zion-cyan">;"
                <Mail className="h-6 w-6" />;"

              </div>;
                <p className="text-white font-semibold">Email Us</p>;""
                <a href="mailto:commercial@ziontechgroup.com" className="text-zion-cyan hover:text-zion-purple transition-colors">;"
</a>
                </a>;
            </div>;"
            <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">;"

          <div className="relative">;"
            <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-lg filter blur-3xl opacity-30"></div>;""
            <div className="relative bg-zion-blue-light border border-zion-purple/20 rounded-lg p-8">;"
              <h3 className="text-xl font-bold mb-6 text-white">Send Us a Message</h3>;""
              <form onSubmit={handleSubmit} className="space-y-6">;"
</form>"
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">;"
                    <label htmlFor="name" className="block text-sm font-medium text-zion-slate-light mb-1">;"
</label>
                    </label>;
                    <Input;"
                      id="name";""
                      name="name";"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                      value={formData.name}
                      onChange={handleChange}"
                      className={`w-full rounded-md bg-zion-blue-dark border-zion-blue-light text-white ${errors.name ? 'border-red-500 focus-visible: ring-red-500' :;}`}
                      required;
                    />;
<<<<<<< HEAD
                    {errors.name && (;
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>;
                    )}
                  </div>;
                  <div>;
                    <label htmlFor="email" className="block text-sm font-medium text-zion-slate-light mb-1">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                      Email;
                    </label>;
                    <Input;
                      id="email";
                      name="email";
                      type="email";
<<<<<<< HEAD

=======
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full rounded-md bg-zion-blue-dark border-zion-blue-light text-white ${errors.email ? 'border-red-500 focus-visible:ring-red-500' :''}`}
                      required;
                    />;
                    {errors.email && (;
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>;
                    )}
                  </div>;
                </div>;
                <div>;
                  <label htmlFor="subject" className="block text-sm font-medium text-zion-slate-light mb-1">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                    Subject;
                  </label>;
                  <Input;
                    id="subject";
                    name="subject";
<<<<<<< HEAD

=======
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full rounded-md bg-zion-blue-dark border-zion-blue-light text-white ${errors.subject ? 'border-red-500 focus-visible:ring-red-500' :''}`}
                    required;
                  />;
                  {errors.subject && (;
                    <p className="mt-1 text-sm text-red-500">{errors.subject}</p>;
                  )}
                </div>;
                <div>;
                  <label htmlFor="message" className="block text-sm font-medium text-zion-slate-light mb-1">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                    Message;
                  </label>;
                  <Textarea;
                    id="message";
                    name="message";
<<<<<<< HEAD

=======
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full rounded-md bg-zion-blue-dark border-zion-blue-light text-white ${errors.message ? 'border-red-500 focus-visible:ring-red-500' :''}`}
                    required;
                  />;
                  {errors.message && (;
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>;
                  )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                </div>;
                <div>;
                  <Button;
                    type="submit";
<<<<<<< HEAD

=======
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white";
=======

                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>;"
                    <label htmlFor="email" className="block text-sm font-medium text-zion-slate-light mb-1">;"
                      id="email";""
                      name="email";""
                      type="email";"
                      value={formData.email}
                      onChange={handleChange}"`;
                      className={`w-full rounded-md bg-zion-blue-dark border-zion-blue-light text-white ${errors.email ? 'border-red-500 focus-visible: ring-red-500' :;}`}

                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>;"
                  <label htmlFor="subject" className="block text-sm font-medium text-zion-slate-light mb-1">;"
                    id="subject";""
                    name="subject";"
                    value={formData.subject}
                    className={`w-full rounded-md bg-zion-blue-dark border-zion-blue-light text-white ${errors.subject ? 'border-red-500 focus-visible: ring-red-500' :;}`}

                    <p className="mt-1 text-sm text-red-500">{errors.subject}</p>;"
                  <label htmlFor="message" className="block text-sm font-medium text-zion-slate-light mb-1">;"
                  <Textarea;"
                    id="message";""
                    name="message";"
                    rows={4}
                    value={formData.message}
                    className={`w-full rounded-md bg-zion-blue-dark border-zion-blue-light text-white ${errors.message ? 'border-red-500 focus-visible: ring-red-500' :;}`}

                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>;"
                  <Button;"
                    type="submit";""
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white";"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    disabled={isSubmitting}
                  >;

                  ;"
                    <p className="text-green-500 text-center mt-2">Thank you! We'll be in touch.</p>;
<<<<<<< HEAD
                  )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                </div>;
              </form>;
            </div>;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD

=======
=======
              </form>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
  isSubmitting ? 'Sending...' : 'Send Message' ;
}</Button>) ;
}</div> </form> </div> </div> </div> </div> </section>) ;
}'"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}) ;
}</div> </form> </div> </div> </div> </div> </section>) ;`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
