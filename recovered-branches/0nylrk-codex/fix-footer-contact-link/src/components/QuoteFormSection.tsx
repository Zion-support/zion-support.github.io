
import { Button } from "./ui/button",
import { Input } from "./ui/input",
import { GradientHeading } from "./GradientHeading",
import { useState } from "react",export function QuoteFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false),
  const [isSubmitting, setIsSubmitting] = useState(false),

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(),
    setIsSubmitting(true),
    
    // Simulate form submission,
setTimeout(() => {
      setIsSubmitting(false),
      setIsSubmitted(true)
    }, 1000)
  },

  return (
    <section className=&quot;py-20 bg-zion-blue&quot;>
      <div className=&quot;container mx-auto px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;text-center mb-12&quot;>

export function QuoteFormSection() {const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission,
setTimeout_(() => {
      setIsSubmitting(false);
      setIsSubmitted(true)}, 1000)
  };

  return (_<section className="py-20 bg-zion-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <GradientHeading>Get a Quote Now</GradientHeading>
          <p className=&quot;mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto&quot;>
            Request your instant commercial proposal and discover how Zion can revolutionize your IT operations
          </p>
        </div>

        <div className=&quot;max-w-2xl mx-auto bg-zion-blue-light rounded-lg border border-zion-purple/20 p-8&quot;>
          {isSubmitted ? (
            <div className=&quot;text-center py-8&quot;>
              <div className=&quot;inline-flex items-center justify-center w-16 h-16 bg-zion-purple/20 rounded-full mb-6&quot;>
                <svg className=&quot;w-8 h-8 text-zion-cyan&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M5 13l4 4L19 7&quot;></path>                </svg>
              </div>
              <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>Quote Request Sent!</h3>
              <p className=&quot;text-zion-slate-light mb-6&quot;>
                Thank you for your interest in Zion's services. Our team will prepare your personalized commercial proposal and contact you shortly.
              </p>
              <Button,
onClick={() => setIsSubmitted(false)}
                variant=&quot;outline&quot; 
                className=&quot;border-zion-purple text-zion-cyan hover:bg-zion-purple/10&quot;              >
                Submit Another Request
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className=&quot;grid grid-cols-1 gap-6 sm:grid-cols-2&quot;>                <div>
                  <label htmlFor=&quot;name&quot; className=&quot;block text-sm font-medium text-zion-slate-light mb-1&quot;>
                    Name
                  </label>
                  <Input,
id=&quot;name&quot;
                    type=&quot;text&quot;
                    className=&quot;w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white&quot;
                    required
                  />
                </div>
                <div>
                  <label htmlFor=&quot;company&quot; className=&quot;block text-sm font-medium text-zion-slate-light mb-1&quot;>
                    Company
                  </label>
                  <Input,
id=&quot;company&quot;
                    type=&quot;text&quot;
                    className=&quot;w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white&quot;
                  />
                </div>
                <div>
                  <label htmlFor=&quot;email&quot; className=&quot;block text-sm font-medium text-zion-slate-light mb-1&quot;>
                    Email
                  </label>
                  <Input,
id=&quot;email&quot;
                    type=&quot;email&quot;
                    className=&quot;w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white&quot;
                    required
                  />
                </div>
                <div>
                  <label htmlFor=&quot;phone&quot; className=&quot;block text-sm font-medium text-zion-slate-light mb-1&quot;>
                    Phone
                  </label>
                  <Input,
id=&quot;phone&quot;
                    type=&quot;tel&quot;
                    className=&quot;w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white&quot;
                  />
                </div>
              </div>
              
              <div className=&quot;mt-6&quot;>
                <label htmlFor=&quot;interest&quot; className=&quot;block text-sm font-medium text-zion-slate-light mb-1&quot;>
                  I'm interested in (select all that apply)
                </label>
                <div className=&quot;grid grid-cols-1 gap-3 sm:grid-cols-2 mt-2&quot;>
                  {[&quot;AI Products/Services&quot;, &quot;IT Equipment&quot;, &quot;Server Solutions&quot;, &quot;Storage Solutions&quot;, &quot;Networking&quot;, &quot;24/7 Support&quot;, &quot;Recycling Services&quot].map((item, index) => (
                    <div key={index} className=&quot;flex items-center&quot;>
                      <input,
id={`interest-${index}`}
                        type=&quot;checkbox&quot;
                        className=&quot;h-4 w-4 bg-zion-blue-dark border-zion-purple text-zion-purple focus:ring-zion-purple/50&quot;
                      />
                      <label htmlFor={`interest-${index}`} className=&quot;ml-2 text-sm text-zion-slate-light&quot;>
                        {item}                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className=&quot;mt-6&quot;>
                <label htmlFor=&quot;message&quot; className=&quot;block text-sm font-medium text-zion-slate-light mb-1&quot;>
                  Additional Details
                </label>
                <textarea,
id=&quot;message&quot;
                  rows={4}
                  className=&quot;w-full rounded-md bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white&quot;                ></textarea>
              </div>
              
              <div className=&quot;mt-6&quot;>
                <Button,
type=&quot;submit&quot; 
                  disabled={isSubmitting} 
                  className=&quot;w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-3&quot;
                >
                  {isSubmitting ? &quot;Sending...&quot; : &quot;Get Your Free Commercial Proposal&quot}                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
