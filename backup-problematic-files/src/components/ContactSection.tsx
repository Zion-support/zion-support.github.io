

import { useState } from "react",;""
import { GradientHeading } from "@/components/GradientHeading",;""
import { Button } from "@/components/ui/button",;""
import { Input } from "@/components/ui/input",;""
import { Textarea } from "@/components/ui/textarea",;""
import { toast } from "@/components/ui/use-toast",;""
import z from "zod",;""
import { Mail } from 'lucide-react';'
;
export function ContactSection() {;
  const [formData, setFormData] = useState({;'
    name:"",;""
    email:"",;""
    subject:"",;")"
    message:""}),;"

  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [submitted, setSubmitted] = useState(false),;
  const [errors, setErrors] = useState<{;
    name?:string,;
    email?:string,;
    subject?:string,;}
    message?:string,;}
  }>({}),;
;

  const handleChange = (;
    e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
</HTMLInputElement>
      const fieldErrors:Record<string string> = {},;
</string>"
    <section className="py-20 bg-zion-blue" id="contact">;"
</section>"
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">;"
</div>"
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">;"
</div>
          <div>;
</div>
            <GradientHeading>Get In Touch</GradientHeading>;"
            <p className="mt-4 text-zion-slate-light text-xl mb-8">;"
</p>
            </p>;"
            <div className="flex items-center mb-6">;"
</div>"
              <div className="mr-4 p-2 bg-zion-purple/20 rounded-full text-zion-cyan">;"
</div>"
                <Mail className="h-6 w-6" />;"
</Mail>
              </div>;
              <div>;
</div>"
                <p className="text-white font-semibold">Email Us</p>;""
                <a href="mailto:commercial@ziontechgroup.com" className="text-zion-cyan hover:text-zion-purple transition-colors">;"
</a>
                </a>;
              </div>;
            </div>;"
            <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">;"
</Button>
            </Button>;
          </div>;"
          <div className="relative">;"
</div>"
            <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-lg filter blur-3xl opacity-30"></div>;""
            <div className="relative bg-zion-blue-light border border-zion-purple/20 rounded-lg p-8">;"
</div>"
              <h3 className="text-xl font-bold mb-6 text-white">Send Us a Message</h3>;""
              <form onSubmit={handleSubmit} className="space-y-6">;"
</form>"
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">;"
</div>
                  <div>;
</div>"
                    <label htmlFor="name" className="block text-sm font-medium text-zion-slate-light mb-1">;"
</label>
                    </label>;
                    <Input;"
                      id="name";""
                      name="name";"

                      value={formData.name}
                      onChange={handleChange}"
                      className={`w-full rounded-md bg-zion-blue-dark border-zion-blue-light text-white ${errors.name ? 'border-red-500 focus-visible:ring-red-500' :''}`}'
                      required;
                    />;

</Input>'
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>;"
                  </div>;
                  <div>;
</div>"
                    <label htmlFor="email" className="block text-sm font-medium text-zion-slate-light mb-1">;"
</label>
                    </label>;
                    <Input;"
                      id="email";""
                      name="email";""
                      type="email";"

                      value={formData.email}
                      onChange={handleChange}"
                      className={`w-full rounded-md bg-zion-blue-dark border-zion-blue-light text-white ${errors.email ? 'border-red-500 focus-visible:ring-red-500' :''}`}'
                      required;
                    />;

</Input>'
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>;"
                  </div>;
                </div>;
                <div>;
</div>"
                  <label htmlFor="subject" className="block text-sm font-medium text-zion-slate-light mb-1">;"
</label>
                  </label>;
                  <Input;"
                    id="subject";""
                    name="subject";"

                    value={formData.subject}
                    onChange={handleChange}"
                    className={`w-full rounded-md bg-zion-blue-dark border-zion-blue-light text-white ${errors.subject ? 'border-red-500 focus-visible:ring-red-500' :''}`}'
                    required;
                  />;

</Input>'
                    <p className="mt-1 text-sm text-red-500">{errors.subject}</p>;"
                </div>;
                <div>;
</div>"
                  <label htmlFor="message" className="block text-sm font-medium text-zion-slate-light mb-1">;"
</label>
                  </label>;
                  <Textarea;"
                    id="message";""
                    name="message";"

                    rows={4}
                    value={formData.message}
                    onChange={handleChange}"
                    className={`w-full rounded-md bg-zion-blue-dark border-zion-blue-light text-white ${errors.message ? 'border-red-500 focus-visible:ring-red-500' :''}`}'
                    required;
                  />;

</Textarea>'
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>;"
                </div>;
                <div>;
</div>
                  <Button;"
                    type="submit";""
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white";"
                    disabled={isSubmitting}
                  >;
</Button>
                  </Button>;"
                    <p className="text-green-500 text-center mt-2">Thank you! We'll be in touch.</p>;'

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
</HTMLInputElement>
  const fieldErrors: Record<string string> = {;
</string>'
}</div> <div> <label htmlFor="email" className="block text-sm font-medium text-zion-slate-light mb-1" > Email </label> <Input) ";"
</div>"
}</div> </div> <div> <label htmlFor="subject" className="block text-sm font-medium text-zion-slate-light mb-1" > Subject </label> <Input) ";"
</div>"
}</div> <div> <label htmlFor="message" className="block text-sm font-medium text-zion-slate-light mb-1" > Message </label> <Textarea) ;"
</div>"
}</div> <div> <Button > {';'
</div>
}</Button>) ;
}</div> </form> </div> </div> </div> </div> </section>) ;'

