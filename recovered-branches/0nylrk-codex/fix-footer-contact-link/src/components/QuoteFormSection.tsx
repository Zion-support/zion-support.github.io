
<<<<<<< HEAD
<<<<<<< HEAD
import { Button } from "./ui/button",
import { Input } from "./ui/input",
import { GradientHeading } from "./GradientHeading",
import { useState } from "react",
=======
import { Button } from &quot;./ui/button&quot;;
import { Input } from &quot;./ui/input&quot;;
import { GradientHeading } from &quot;./GradientHeading&quot;;
import { useState } from &quot;react&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function QuoteFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false),
  const [isSubmitting, setIsSubmitting] = useState(false),

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(),
    setIsSubmitting(true),
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false),
      setIsSubmitted(true)
    }, 1000)
  },

  return (
    <section className=&quot;py-20 bg-zion-blue&quot;>
      <div className=&quot;container mx-auto px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;text-center mb-12&quot;>
=======

export function QuoteFormSection() {_const [isSubmitted, _setIsSubmitted] = useState(false);
  const [isSubmitting, _setIsSubmitting] = useState(false);

  const _handleSubmit = (_e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout__(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);}, 1000);
  };

  return (_<section className="py-20 bg-zion-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <GradientHeading>Get a Quote Now</GradientHeading>
          <p className=&quot;mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto&quot;>
            Request your instant commercial proposal and discover how Zion can revolutionize your IT operations
          </p>
        </div>

<<<<<<< HEAD
        <div className=&quot;max-w-2xl mx-auto bg-zion-blue-light rounded-lg border border-zion-purple/20 p-8&quot;>
          {isSubmitted ? (
            <div className=&quot;text-center py-8&quot;>
              <div className=&quot;inline-flex items-center justify-center w-16 h-16 bg-zion-purple/20 rounded-full mb-6&quot;>
                <svg className=&quot;w-8 h-8 text-zion-cyan&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M5 13l4 4L19 7&quot;></path>
=======
        <div className="max-w-2xl mx-auto bg-zion-blue-light rounded-lg border border-zion-purple/20 p-8">
          {_isSubmitted ? (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-purple/20 rounded-full mb-6">
                <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </svg>
              </div>
              <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>Quote Request Sent!</h3>
              <p className=&quot;text-zion-slate-light mb-6&quot;>
                Thank you for your interest in Zion's services. Our team will prepare your personalized commercial proposal and contact you shortly.
              </p>
              <Button 
<<<<<<< HEAD
                onClick={() => setIsSubmitted(false)}
                variant=&quot;outline&quot; 
                className=&quot;border-zion-purple text-zion-cyan hover:bg-zion-purple/10&quot;
=======
                onClick={_() => setIsSubmitted(false)}
                variant="outline" 
                className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                Submit Another Request
              </Button>
            </div>
          ) : (
<<<<<<< HEAD
            <form onSubmit={handleSubmit}>
              <div className=&quot;grid grid-cols-1 gap-6 sm:grid-cols-2&quot;>
=======
            <form onSubmit={_handleSubmit}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <div>
                  <label htmlFor=&quot;name&quot; className=&quot;block text-sm font-medium text-zion-slate-light mb-1&quot;>
                    Name
                  </label>
                  <Input
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
                  <Input
                    id=&quot;company&quot;
                    type=&quot;text&quot;
                    className=&quot;w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white&quot;
                  />
                </div>
                <div>
                  <label htmlFor=&quot;email&quot; className=&quot;block text-sm font-medium text-zion-slate-light mb-1&quot;>
                    Email
                  </label>
                  <Input
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
                  <Input
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
<<<<<<< HEAD
                <div className=&quot;grid grid-cols-1 gap-3 sm:grid-cols-2 mt-2&quot;>
                  {[&quot;AI Products/Services&quot;, &quot;IT Equipment&quot;, &quot;Server Solutions&quot;, &quot;Storage Solutions&quot;, &quot;Networking&quot;, &quot;24/7 Support&quot;, &quot;Recycling Services&quot;].map((item, index) => (
                    <div key={index} className=&quot;flex items-center&quot;>
                      <input
                        id={`interest-${index}`}
                        type=&quot;checkbox&quot;
                        className=&quot;h-4 w-4 bg-zion-blue-dark border-zion-purple text-zion-purple focus:ring-zion-purple/50&quot;
                      />
                      <label htmlFor={`interest-${index}`} className=&quot;ml-2 text-sm text-zion-slate-light&quot;>
                        {item}
=======
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 mt-2">
                  {_["AI Products/Services", _"IT Equipment", _"Server Solutions", _"Storage Solutions", _"Networking", _"24/7 Support", _"Recycling Services"].map(_(item, _index) => (
                    <div key={index} className="flex items-center">
                      <input
                        id={_`interest-${index}`}
                        type="checkbox"
                        className="h-4 w-4 bg-zion-blue-dark border-zion-purple text-zion-purple focus:ring-zion-purple/50"
                      />
                      <label htmlFor={_`interest-${index}`} className="ml-2 text-sm text-zion-slate-light">
                        {_item}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className=&quot;mt-6&quot;>
                <label htmlFor=&quot;message&quot; className=&quot;block text-sm font-medium text-zion-slate-light mb-1&quot;>
                  Additional Details
                </label>
                <textarea
<<<<<<< HEAD
                  id=&quot;message&quot;
                  rows={4}
                  className=&quot;w-full rounded-md bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white&quot;
=======
                  id="message"
                  rows={_4}
                  className="w-full rounded-md bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                ></textarea>
              </div>
              
              <div className=&quot;mt-6&quot;>
                <Button 
<<<<<<< HEAD
                  type=&quot;submit&quot; 
                  disabled={isSubmitting} 
                  className=&quot;w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-3&quot;
                >
                  {isSubmitting ? &quot;Sending...&quot; : &quot;Get Your Free Commercial Proposal&quot;}
=======
                  type="submit" 
                  disabled={_isSubmitting} 
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-3"
                >
                  {_isSubmitting ? "Sending..." : "Get Your Free Commercial Proposal"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
