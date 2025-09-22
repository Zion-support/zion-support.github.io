
import { Button } from "./ui/button",;
import { Input } from "./ui/input",;
import { GradientHeading } from "./GradientHeading",;
import { useState } from "react",;
;
export function QuoteFormSection() {;
  const [isSubmitted, setIsSubmitted] = useState(false),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
;
  const handleSubmit = (e:React.FormEvent) => {;
    e.preventDefault(),;
    setIsSubmitting(true),;
    ;
    // Simulate form submission;
    setTimeout(() => {;
      setIsSubmitting(false),;
      setIsSubmitted(true);

    <section className="py-20 bg-zion-blue">;
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
        <div className="text-center mb-12">;
          <GradientHeading>Get a Quote Now</GradientHeading>;
          <p className="mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto">;
            Request your instant commercial proposal and discover how Zion can revolutionize your IT operations;
          </p>;
        </div>;

        <div className="max-w-2xl mx-auto bg-zion-blue-light rounded-lg border border-zion-purple/20 p-8">;
          {isSubmitted ? (;
            <div className="text-center py-8">;
              <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-purple/20 rounded-full mb-6">;

                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>;
                </svg>;
              </div>;
              <h3 className="text-2xl font-bold text-white mb-4">Quote Request Sent!</h3>;
              <p className="text-zion-slate-light mb-6">;
                Thank you for your interest in Zion's services. Our team will prepare your personalized commercial proposal and contact you shortly.;
              </p>;

                onClick={() => setIsSubmitted(false)}
                variant="outline" ;
                className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10";
              >;
                Submit Another Request;
              </Button>;
            </div>;

            <form onSubmit={handleSubmit}>;
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">;
                <div>;
                  <label htmlFor="name" className="block text-sm font-medium text-zion-slate-light mb-1">;
                    Name;
                  </label>;

                  />;
                </div>;
                <div>;
                  <label htmlFor="company" className="block text-sm font-medium text-zion-slate-light mb-1">;
                    Company;
                  </label>;

                  />;
                </div>;
                <div>;
                  <label htmlFor="email" className="block text-sm font-medium text-zion-slate-light mb-1">;
                    Email;
                  </label>;

                  />;
                </div>;
                <div>;
                  <label htmlFor="phone" className="block text-sm font-medium text-zion-slate-light mb-1">;
                    Phone;
                  </label>;

              <div className="mt-6">;
                <label htmlFor="interest" className="block text-sm font-medium text-zion-slate-light mb-1">;
                  I'm interested in (select all that apply);
                </label>;
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 mt-2">;
                  {["AI Products/Services", "IT Equipment", "Server Solutions", "Storage Solutions", "Networking", "24/7 Support", "Recycling Services"].map((item, index) => (;
                    <div key={index} className="flex items-center">;

                      />;
                      <label htmlFor={`interest-${index}`} className="ml-2 text-sm text-zion-slate-light">;
                        {item}
                      </label>;
                    </div>;
                  ))}
                </div>;
              </div>;

              <div className="mt-6">;
                <label htmlFor="message" className="block text-sm font-medium text-zion-slate-light mb-1">;
                  Additional Details;
                </label>;

                </Button>;
              </div>;
            </form>;
          )}
        </div>;
      </div>;
    </section>;
