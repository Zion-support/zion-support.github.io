
import { useState } from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { GradientHeading } from &quot;@/components/GradientHeading&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Label } from &quot;@/components/ui/label&quot;;
import { useToast } from &quot;@/hooks/use-toast&quot;;
import { Checkbox } from &quot;@/components/ui/checkbox&quot;;

export function WaitlistSection() {
  const [email, setEmail] = useState("&quot;);
  const [name, setName] = useState("&quot;);
  const [role, setRole] = useState("&quot;);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !name || !role || !agreeTerms) {
      toast({
        variant: &quot;destructive&quot;,
        title: &quot;Missing information&quot;,
        description: &quot;Please fill all fields and agree to the terms.&quot;});
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulating an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: &quot;Success!&quot;,
        description: &quot;Thank you for registering with Zion. We'll be in touch soon.&quot;});
      
      // Reset form
      setEmail("&quot;);
      setName("&quot;);
      setRole("&quot;);
      setAgreeTerms(false);
    } catch (error) {
      toast({
        variant: &quot;destructive&quot;,
        title: &quot;Something went wrong&quot;,
        description: &quot;Please try again later.&quot;});
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id=&quot;waitlist&quot; className=&quot;py-20 bg-zion-blue-dark relative overflow-hidden&quot;>
      {/* Background elements */}
      <div className=&quot;absolute top-0 left-0 w-full h-full overflow-hidden opacity-10&quot;>
        <div className=&quot;absolute -top-40 -left-40 w-80 h-80 bg-zion-purple rounded-full filter blur-[100px]&quot;></div>
        <div className=&quot;absolute top-40 right-20 w-60 h-60 bg-zion-cyan rounded-full filter blur-[100px]&quot;></div>
      </div>
      
      <div className=&quot;container mx-auto px-4 relative z-10&quot;>
        <div className=&quot;max-w-3xl mx-auto&quot;>
          <div className=&quot;text-center mb-12&quot;>
            <GradientHeading>Register Now</GradientHeading>
            <p className=&quot;text-zion-slate-light text-lg mt-4&quot;>
              Join our growing community of AI and tech professionals. 
              Complete your registration to access exclusive features and personalized services.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className=&quot;space-y-6 bg-zion-blue-light p-8 rounded-lg border border-zion-purple/20&quot;>
            <div className=&quot;space-y-2&quot;>
              <Label htmlFor=&quot;name&quot;>Full Name</Label>
              <Input
                id=&quot;name&quot;
                placeholder=&quot;John Smith&quot;
                value={name}
                onChange={(e) => setName(e.target.value)}
                className=&quot;bg-zion-blue-dark border-zion-blue-light&quot;
              />
            </div>

            <div className=&quot;space-y-2&quot;>
              <Label htmlFor=&quot;email&quot;>Email Address</Label>
              <Input
                id=&quot;email&quot;
                type=&quot;email&quot;
                placeholder=&quot;you@company.com&quot;
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=&quot;bg-zion-blue-dark border-zion-blue-light&quot;
              />
            </div>

            <div className=&quot;space-y-2&quot;>
              <Label htmlFor=&quot;role&quot;>Your Role</Label>
              <Input
                id=&quot;role&quot;
                placeholder=&quot;IT Manager, Developer, Business Owner, etc.&quot;
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className=&quot;bg-zion-blue-dark border-zion-blue-light&quot;
              />
            </div>
            
            <div className=&quot;flex items-center space-x-2&quot;>
              <Checkbox 
                id=&quot;terms&quot; 
                checked={agreeTerms}
                onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
              />
              <Label
                htmlFor=&quot;terms&quot;
                className=&quot;text-sm text-zion-slate font-normal&quot;
              >
                I agree to receive updates about Zion and understand I can unsubscribe anytime.
              </Label>
            </div>
            
            <Button 
              type=&quot;submit&quot; 
              disabled={isSubmitting} 
              className=&quot;w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple&quot;
            >
              {isSubmitting ? &quot;Processing...&quot; : &quot;Complete Registration&quot;}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
