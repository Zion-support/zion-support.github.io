
import { GradientHeading } from "@/components/GradientHeading",;
import { Button } from "@/components/ui/button",;
import { Mail } from "lucide-react",;
;
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

              Request Commercial Proposal;
            </Button>;
          </div>;
          <div className="relative">;

                      Name;
                    </label>;
                    <input;
                      type="text";
                      id="name";

                      Email;
                    </label>;
                    <input;
                      type="email";
                      id="email";

                    />;
                  </div>;
                </div>;
                <div>;

                    Subject;
                  </label>;
                  <input;
                    type="text";
                    id="subject";

                    Message;
                  </label>;
                  <textarea;
                    id="message";
                    rows={4}

                    Send Message;
                  </Button>;
                </div>;
              </form>;
            </div>;
          </div>;
        </div>;
      </div>;
