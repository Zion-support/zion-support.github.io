

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
          <GradientHeading>Get a Quote Now</GradientHeading>
          <p className="mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto">
            Request your instant commercial proposal and discover how Zion can revolutionize your IT operations
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-zion-blue-light rounded-lg border border-zion-purple/20 p-8">
          {_isSubmitted ? (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-purple/20 rounded-full mb-6">
                <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Quote Request Sent!</h3>
              <p className="text-zion-slate-light mb-6">
                Thank you for your interest in Zion's services. Our team will prepare your personalized commercial proposal and contact you shortly.
              </p>
              <Button 
                onClick={_() => setIsSubmitted(false)}
                variant="outline" 
                className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10"
              >
                Submit Another Request
              </Button>
            </div>
          ) : (
            <form onSubmit={_handleSubmit}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zion-slate-light mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    className="w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-zion-slate-light mb-1">
                    Company
                  </label>
                  <Input
                    id="company"
                    type="text"
                    className="w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zion-slate-light mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    className="w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-zion-slate-light mb-1">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    className="w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white"
                  />
                </div>
              </div>
              
              <div className="mt-6">
                <label htmlFor="interest" className="block text-sm font-medium text-zion-slate-light mb-1">
                  I'm interested in (select all that apply)
                </label>
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
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6">
                <label htmlFor="message" className="block text-sm font-medium text-zion-slate-light mb-1">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  rows={_4}
                  className="w-full rounded-md bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white"
                ></textarea>
              </div>
              
              <div className="mt-6">
                <Button 
                  type="submit" 
                  disabled={_isSubmitting} 
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-3"
                >
                  {_isSubmitting ? "Sending..." : "Get Your Free Commercial Proposal"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
