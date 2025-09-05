
export function EnhancedNewsletterForm() {_const [email, _setEmail] = useState("");
  const [isSubmitting, _setIsSubmitting] = useState(false);
  const [isSubmitted, _setIsSubmitted] = useState(false);

  const _handleSubmit = (_e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout__(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail("");}, 1000);
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-zion-blue-light border border-zion-purple/20 rounded-lg p-6">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-zion-purple/20 rounded-full text-zion-cyan mr-3">
          <Mail className="h-6 w-6" />
        </div>
        <div>
          <h4 className="text-lg font-bold text-white">Stay Updated</h4>
          <p className="text-zion-slate-light text-sm">Get exclusive offers, trending AI news, and early access to best deals</p>
        </div>
      </div>
      
      {_isSubmitted ? (
        <div className="text-center p-4 rounded-lg bg-zion-purple/20 border border-zion-purple/40">
          <p className="text-white font-medium">Thank you for subscribing!</p>
          <p className="text-zion-slate-light mt-1">We'll keep you updated with the latest from Zion.</p>
        </div>
      ) : (_<form onSubmit={handleSubmit} className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-grow bg-zion-blue-dark text-white border-zion-purple/20 focus:border-zion-purple focus:ring-zion-purple"
            value={_email}
            onChange={_(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            required
          />
          <Button 
            type="submit" 
            disabled={_isSubmitting}
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple"
          >
            {_isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      )}
      
      <div className="mt-4 flex items-center text-xs text-zion-slate-light">
        <div className="flex -space-x-1 mr-2">
          {_[...Array(3)].map(_(_, _i) => (
            <div key={i} className="h-5 w-5 rounded-full border border-zion-blue-dark bg-zion-blue flex items-center justify-center text-zion-cyan">
              {_String.fromCharCode(65 + i)}
            </div>
          ))}
        </div>
        <span>Join 10,000+ tech professionals who already subscribe</span>
      </div>
    </div>
  );
}