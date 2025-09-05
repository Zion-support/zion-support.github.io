
<<<<<<< HEAD
<<<<<<< HEAD
import { GradientHeading } from "@/components/GradientHeading",
import { Button } from "@/components/ui/button",
import { Mail } from "lucide-react",
=======
import { GradientHeading } from &quot;@/components/GradientHeading&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Mail } from &quot;lucide-react&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function ContactSection() {
  return (
    <section className=&quot;py-20 bg-zion-blue&quot; id=&quot;contact&quot;>
      <div className=&quot;container mx-auto px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-16 items-center&quot;>
          <div>
            <GradientHeading>Get In Touch</GradientHeading>
            <p className=&quot;mt-4 text-zion-slate-light text-xl mb-8&quot;>
              We have the equipment, the parts, and the maintenance services ready for you — right now. Contact us today.
            </p>
            <div className=&quot;flex items-center mb-6&quot;>
              <div className=&quot;mr-4 p-2 bg-zion-purple/20 rounded-full text-zion-cyan&quot;>
                <Mail className=&quot;h-6 w-6&quot; />
              </div>
              <div>
                <p className=&quot;text-white font-semibold&quot;>Email Us</p>
                <a href=&quot;mailto:commercial@ziontechgroup.com&quot; className=&quot;text-zion-cyan hover:text-zion-purple transition-colors&quot;>
                  commercial@ziontechgroup.com
                </Link>
              </div>
            </div>
            <Button className=&quot;bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white&quot;>
              Request Commercial Proposal
            </Button>
          </div>
          <div className=&quot;relative&quot;>
            <div className=&quot;absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-lg filter blur-3xl opacity-30&quot;></div>
            <div className=&quot;relative bg-zion-blue-light border border-zion-purple/20 rounded-lg p-8&quot;>
              <h3 className=&quot;text-xl font-bold mb-6 text-white&quot;>Send Us a Message</h3>
              <form className=&quot;space-y-6&quot;>
                <div className=&quot;grid grid-cols-1 gap-6 sm:grid-cols-2&quot;>
                  <div>
                    <label htmlFor=&quot;name&quot; className=&quot;block text-sm font-medium text-zion-slate-light mb-1&quot;>
                      Name
                    </label>
                    <input
                      type=&quot;text&quot;
                      id=&quot;name&quot;
                      className=&quot;w-full rounded-md bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white&quot;
                    />
                  </div>
                  <div>
                    <label htmlFor=&quot;email&quot; className=&quot;block text-sm font-medium text-zion-slate-light mb-1&quot;>
                      Email
                    </label>
                    <input
                      type=&quot;email&quot;
                      id=&quot;email&quot;
                      className=&quot;w-full rounded-md bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white&quot;
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor=&quot;subject&quot; className=&quot;block text-sm font-medium text-zion-slate-light mb-1&quot;>
                    Subject
                  </label>
                  <input
                    type=&quot;text&quot;
                    id=&quot;subject&quot;
                    className=&quot;w-full rounded-md bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white&quot;
                  />
                </div>
                <div>
                  <label htmlFor=&quot;message&quot; className=&quot;block text-sm font-medium text-zion-slate-light mb-1&quot;>
                    Message
                  </label>
                  <textarea
                    id=&quot;message&quot;
                    rows={4}
<<<<<<< HEAD
                    className="w-full rounded-md bg-zion-blue-dark border border-zion-blue-light focus: border-zion-purple focus:ring-1 focus:ring-zion-purple text-white"
=======
                    className=&quot;w-full rounded-md bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                  ></textarea>
                </div>
                <div>
                  <Button className=&quot;w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white&quot;>
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
=======
import { GradientHeading } from "@/components/GradientHeading",;
import { Button } from "@/components/ui/button",;
import { Mail } from "lucide-react";
export function ContactSection() {;
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
                  commercial@ziontechgroup.com;
                </a>;
              </div>;
            </div>;
            <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">;
              Request Commercial Proposal;
            </Button>;
          </div>;
          <div className="relative">;
            <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-lg filter blur-3xl opacity-30"></div>;
            <div className="relative bg-zion-blue-light border border-zion-purple/20 rounded-lg p-8">;
              <h3 className="text-xl font-bold mb-6 text-white">Send Us a Message</h3>;
              <form className="space-y-6">;
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">;
                  <div>;
                    <label htmlFor="name" className="block text-sm font-medium text-zion-slate-light mb-1">;
                      Name;
                    </label>;
                    <input;
                      type="text";
                      id="name";
                      className="w-full rounded-md bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white";
                    />;
                  </div>;
                  <div>;
                    <label htmlFor="email" className="block text-sm font-medium text-zion-slate-light mb-1">;
                      Email;
                    </label>;
                    <input;
                      type="email";
                      id="email";
                      className="w-full rounded-md bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white";
                    />;
                  </div>;
                </div>;
                <div>;
                  <label htmlFor="subject" className="block text-sm font-medium text-zion-slate-light mb-1">;
                    Subject;
                  </label>;
                  <input;
                    type="text";
                    id="subject";
                    className="w-full rounded-md bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white";
                  />;
                </div>;
                <div>;
                  <label htmlFor="message" className="block text-sm font-medium text-zion-slate-light mb-1">;
                    Message;
                  </label>;
                  <textarea;
                    id="message";
                    rows={4}
                    className="w-full rounded-md bg-zion-blue-dark border border-zion-blue-light focus: border-zion-purple focus:ring-1 focus:ring-zion-purple text-white";
                  ></textarea>;
                </div>;
                <div>;
                  <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">;
                    Send Message;
                  </Button>;
                </div>;
              </form>;
            </div>;
          </div>;
        </div>;
      </div>;
    </section>;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;