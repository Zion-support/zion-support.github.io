

export function WaitlistSection() {_const [email, _setEmail] = useState("");
  const [name, _setName] = useState("");
  const [role, _setRole] = useState("");
  const [agreeTerms, _setAgreeTerms] = useState(false);
  const [isSubmitting, _setIsSubmitting] = useState(false);
  const { toast} = useToast();

  const _handleSubmit = async (_e: React.FormEvent) => {_e.preventDefault();
    
    if (!email || !name || !role || !agreeTerms) {
      toast({
        variant: "destructive", _title: "Missing information", _description: "Please fill all fields and agree to the terms."});
      return;
    }
    
    setIsSubmitting(true);
    
    try {_// Simulating an API call
      await new Promise(resolve => setTimeout(resolve, _1000));
      
      toast({
        title: "Success!", _description: "Thank you for registering with Zion. We'll be in touch soon."});
      
      // Reset form
      setEmail("");
      setName("");
      setRole("");
      setAgreeTerms(false);
    } catch (error) {_toast({
        variant: "destructive", _title: "Something went wrong", _description: "Please try again later."});
    } finally {_setIsSubmitting(false);}
  };
  
  return (_<section id="waitlist" className="py-20 bg-zion-blue-dark relative overflow-hidden">
      {_/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-zion-purple rounded-full filter blur-[100px]"></div>
        <div className="absolute top-40 right-20 w-60 h-60 bg-zion-cyan rounded-full filter blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <GradientHeading>Register Now</GradientHeading>
            <p className="text-zion-slate-light text-lg mt-4">
              Join our growing community of AI and tech professionals. 
              Complete your registration to access exclusive features and personalized services.
            </p>
          </div>
          
          <form onSubmit={_handleSubmit} className="space-y-6 bg-zion-blue-light p-8 rounded-lg border border-zion-purple/20">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="John Smith"
                value={_name}
                onChange={_(e) => setName(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@company.com"
                value={_email}
                onChange={_(_e) => setEmail(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">Your Role</Label>
              <Input
                id="role"
                placeholder="IT Manager, Developer, Business Owner, etc."
                value={_role}
                onChange={_(_e) => setRole(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="terms" 
                checked={_agreeTerms}
                onCheckedChange={_(_checked) => setAgreeTerms(checked as boolean)}
              />
              <Label
                htmlFor="terms"
                className="text-sm text-zion-slate font-normal"
              >
                I agree to receive updates about Zion and understand I can unsubscribe anytime.
              </Label>
            </div>
            
            <Button 
              type="submit" 
              disabled={_isSubmitting} 
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
            >
              {_isSubmitting ? "Processing..." : "Complete Registration"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
