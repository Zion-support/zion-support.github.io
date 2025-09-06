
=======
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
    name:"",;
    email:"",;
    subject:"",;
    message:""}),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [submitted, setSubmitted] = useState(false),;
  const [errors, setErrors] = useState<{;
    name?:string,;
    email?:string,;
    subject?:string,;
    message?:string,;
  }>({}),;
;
  const handleChange = (;
    e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
  ) => {;
    const { name, value } = e.target,;
    setFormData((prev) => ({ ...prev, [name]:value })),;
    setErrors((prev) => ({ ...prev, [name]:undefined })),;
  },;
;
  const handleSubmit = (e:React.FormEvent) => {;
    e.preventDefault(),;
;
    const schema = z.object({;
      name:z.string().min(2, "Name is required"),;
      email:z.string().email("Enter a valid email"),;
      subject:z.string().min(2, "Subject is required"),;
      message:z.string().min(10, "Message must be at least 10 characters")}),;
;
    const result = schema.safeParse(formData),;
    if (!result.success) {;
      const fieldErrors:Record<string string> = {},;
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
      method:"POST",;
      headers:{ "Content-Type":"application/json" },;
      body:JSON.stringify(formData)});
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
        setFormData({ name:"", email:"", subject:"", message:"" }),;
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                  commercial@ziontechgroup.com;
                </a>;
              </div>;
            </div>;
<<<<<<< HEAD

              Request Commercial Proposal;
            </Button>;
          </div>;
          <div className="relative">;

                      Name;
                    </label>;
                    <Input;
                      id="name";
                      name="name";

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

                </div>;
              </form>;
            </div>;
          </div>;
        </div>;
      </div>;

