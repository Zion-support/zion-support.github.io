



    

      await new Promise(resolve => setTimeout(resolve, 1000)),
      


      setEmail("");
      setName("");
      setRole("");



      toast({;
        variant: "destructive",;
        title: "Missing information",;
        description: "Please fill all fields and agree to the terms."}),;
      return;
    }
    setIsSubmitting(true);
    try {;
      // Simulating an API call;
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({;
        title: "Success!",;
        description: "Thank you for registering with Zion. We'll be in touch soon."}),;
      // Reset form;
      setEmail("");
      setName("");
      setRole("");

  

  return (

import { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { GradientHeading } from "@/components/GradientHeading",;
import { Input } from "@/components/ui/input",;
import { Label } from "@/components/ui/label",;
import { useToast } from "@/hooks/use-toast",;
import { Checkbox } from "@/components/ui/checkbox",;
;
export function WaitlistSection() {;
  const [email, setEmail] = useState(""),;
  const [name, setName] = useState(""),;
  const [role, setRole] = useState(""),;
  const [agreeTerms, setAgreeTerms] = useState(false),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const { toast } = useToast(),;
;
  const handleSubmit = async (e:React.FormEvent) => {;
    e.preventDefault(),;
    ;
    if (!email || !name || !role || !agreeTerms) {;
      toast({;
        variant:"destructive",;
        title:"Missing information",;
        description:"Please fill all fields and agree to the terms."}),;
      return,;
    }
    ;
    setIsSubmitting(true),;
    ;
    try {;
      // Simulating an API call;
      await new Promise(resolve => setTimeout(resolve, 1000)),;
      ;
      toast({;
        title:"Success!",;
        description:"Thank you for registering with Zion. We'll be in touch soon."}),;
      ;
      // Reset form;
      setEmail(""),;
      setName(""),;
      setRole(""),;
      setAgreeTerms(false),;
    } catch (error) {;
      toast({;
        variant:"destructive",;
        title:"Something went wrong",;
        description:"Please try again later."}),;
    } finally {;
      setIsSubmitting(false),;
    }
  },;
  ;
  return (;
    <section id="waitlist" className="py-20 bg-zion-blue-dark relative overflow-hidden">;
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">;
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-zion-purple rounded-full filter blur-[100px]"></div>;
        <div className="absolute top-40 right-20 w-60 h-60 bg-zion-cyan rounded-full filter blur-[100px]"></div>;
      </div>;
      ;
      <div className="container mx-auto px-4 relative z-10">;
        <div className="max-w-3xl mx-auto">;






                onChange={(e) => setName(e && e.target.value)}

                className="bg-zion-blue-dark border-zion-blue-light";
              />;
            </div>;



                className="bg-zion-blue-dark border-zion-blue-light";
              />;
            </div>;








          <form on_submit={handle_submit} className="space - y-6 bg - zion - blue - light p - 8 rounded - lg border border - zion - purple / 20">;
            <div className="space - y-2">;
              <Label html_for="name">Full Name</Label>;




            <Button;
              type="submit";

              disabled={is_submitting}
              className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple";
            >;
              {is_submitting ? "Processing..." : "Complete Registration"}


            </Button>;
          </form>;
        </div>;
      </div>;






}
</section>);
}
}
                className="text - sm text - zion - slate font-normal";              >;
                I agree to receive updates about Zion and understand I can unsubscribe anytime.;
              </Label>;
            </div>;
  return ("
    <section id="waitlist" className="py-20 bg-zion-blue-dark relative overflow-hidden">;"

              </Label>;
            </div>;
            <Button;"
              type="submit""
              disabled={isSubmitting} "
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">;"
</Button>"
    <section id="waitlist" className="py - 20 bg - zion - blue - dark relative overflow - hidden">;"
</section>"
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">;"
</div>"
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-zion-purple rounded-full filter blur-[100px]"></div>;""
        <div className="absolute top-40 right-20 w-60 h-60 bg-zion-cyan rounded-full filter blur-[100px]"></div>;"
      </div>;"
      <div className="container mx-auto px-4 relative z-10">;"
        <div className="max-w-3xl mx-auto">;"
          <div className="text-center mb-12">;"
</div>
            <GradientHeading>Register Now;"
            <p className="text-zion-slate-light text-lg mt-4">;"
</p>
            </p>;
          <form onSubmit={handleSubmit} className="space-y-6 bg-zion-blue-light p-8 rounded-lg border border-zion-purple/20">;"
</form>"
            <div className="space-y-2">;"
              <Label htmlFor="name">Full Name;""
</section>
              <Input;"
                id="name"""
                placeholder="John Smith""
                value={name}
)
                onChange={(e) => setName(e && e.target.value)}

              <Label htmlFor="email">Email Address;"
                id="email"""
                type="email"""
                placeholder="you@company && company.com""
                value={email}

                onChange={(e) => setEmail(e && e.target.value)}

              <Label htmlFor="role">Your Role;"
                id="role"""
                placeholder="IT Manager, Developer, Business Owner, etc.""
                value={role}

                onChange={(e) => setRole(e && e.target.value)}

            <div className="flex items-center space-x-2">;"
              <Checkbox;"
                id="terms""
                checked={agreeTerms}
                onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}

              <Label;"
                htmlFor="terms""
            <Button;"
              type="submit""
              disabled={isSubmitting} 

              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple""
            >

          </form>
            </div>;
              disabled={isSubmitting} "
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">;"
    <section id="waitlist" className="py - 20 bg - zion - blue - dark relative overflow - hidden">;"
      <div className="absolute top - 0 left - 0 w - full h - full overflow - hidden opacity - 10">;"
        <div className="absolute -top - 40 -left - 40 w - 80 h - 80 bg - zion - purple rounded - full filter blur-[100px]"></div>;""
        <div className="absolute top - 40 right - 20 w - 60 h - 60 bg - zion - cyan rounded - full filter blur-[100px]"></div>;"
      <div className="container mx - auto px - 4 relative z - 10">;"
        <div className="max - w-3xl mx - auto">;"
          <div className="text - center mb - 12">;"
            <GradientHeading > Register Now;"
            <p className="text - zion - slate - light text - lg mt - 4">;"
          <form on_submit={handle_submit} className="space - y-6 bg - zion - blue - light p - 8 rounded - lg border border - zion - purple / 20">;"
            <div className="space - y-2">;"
              <Label html_for="name">Full Name;"
                id="name";""
                placeholder="John Smith";"
                on_change={(e) => set_name (e.target.value)}

              <Label html_for="email">Email Address;"
                id="email";""
                type="email";""
                placeholder="you@company.com";"
                on_change={(e) => set_email (e.target.value)}

              <Label html_for="role">Your Role;"
                id="role";""
                placeholder="IT Manager, Developer, Business Owner, etc.";"
                on_change={(e) => set_role (e.target.value)}

            <div className="flex items - center space - x-2">;"
                id="terms";"
                checked={agree_terms}
                onCheckedChange={(checked) => setAgreeTerms (checked as boolean)}

                html_for="terms";""
                className="text - sm text - zion - slate font - normal";"
              >;

              type="submit";"
              disabled={is_submitting}"
              className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple";"

            <Button ;"
              type="submit" ;"
              disabled={isSubmitting} ;"
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple";"

          </form>;
    </section>);
    </section>;"
return (<section id="waitlist" className="py-20 bg-zion-blue-dark relative overflow-hidden" > {"
</section>)"
}<div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10" > <div className="absolute -top-40 -left-40 w-80 h-80 bg-zion-purple rounded-full filter blur-[100px]" ></div> <div className="absolute top-40 right-20 w-60 h-60 bg-zion-cyan rounded-full filter blur-[100px]" ></div> container mx-auto px-4 relative z-10"> <div className=" max-w-3xl mx-auto"> <div className=" text-center mb-12"> <GradientHeading>Register Now <p className=" text-zion-slate-light text-lg mt-4"> Join our growing community of AI and tech professionals. Complete your registration to access exclusive features and personalized services. </p> </div> /> </div> <div className=" space-y-2"> <Label htmlFor=" email">Email Address <Input /> </div> <div className=" space-y-2"> <Label htmlFor=" role">Your Role <Input /> </div> <div className=" flex items-center space-x-2"> <Checkbox /> <Label htmlFor=" terms"className=" text-sm text-zion-slate font-normal" > I agree to receive updates about Zion and understand I can unsubscribe anytime.  </div> <Button  </form> </div> </div> </section>)"
    </section>;
  ),; const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault ();
if (!email || !name || !role || !agreeTerms) {
  toast ({
  return;
}setIsSubmitting (true);
}finally {
  setIsSubmitting (false) 
}





