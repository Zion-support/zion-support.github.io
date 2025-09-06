<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
import {useState} from "react";
import {Button} from "@/components/ui/button";
import {GradientHeading} from "@/components/GradientHeading";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {useToast} from "@/hooks/use-toast";
import {Checkbox} from "@/components/ui/checkbox";
export function WaitlistSection() {;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
<<<<<<< HEAD
<<<<<<< HEAD
=======
import {useState} from "react";"
import {Button} from "@/components/ui/button";"
import {GradientHeading} from "@/components/GradientHeading";"
import {Input} from "@/components/ui/input";"
import {Label} from "@/components/ui/label";"
import {useToast} from "@/hooks/use-toast";"
import {Checkbox} from "@/components/ui/checkbox";
export function WaitlistSection() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const { toast } = useToast();
"
import { useState } from "react","
import { Button } from "@/components/ui/button","
import { GradientHeading } from "@/components/GradientHeading","
import { Input } from "@/components/ui/input","
import { Label } from "@/components/ui/label",";
import { useToast } from "@/hooks/use-toast";"
import { Checkbox } from "@/components/ui/checkbox";"
import { useToast } from "@/hooks/use-toast","
import { Checkbox } from "@/components/ui/checkbox",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export function WaitlistSection() {
  const [email, setEmail] = useState(""),
=======
  const { toast } = useToast();  const [email, setEmail] = useState(""),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  const { toast } = useToast();  const [email, setEmail] = useState(""),
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const [name, setName] = useState(""),
  const [role, setRole] = useState(""),
  const [agreeTerms, setAgreeTerms] = useState(false),
  const [isSubmitting, setIsSubmitting] = useState(false),
=======

export function WaitlistSection() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const { toast } = useToast(),

<<<<<<< HEAD
<<<<<<< HEAD



<<<<<<< HEAD
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email |!name |!role |!agreeTerms) {
      toast({
        variant: "destructive"
        title: "Missing information"
        description: "Please fill all fields and agree to the terms."})
      return
    }
<<<<<<< HEAD




>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======



    setIsSubmitting(true);
    try {
      // Simulating an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    
    setIsSubmitting(true),
    
    try {
      // Simulating an API call
      await new Promise(resolve => setTimeout(resolve, 1000)),
      

      toast({
        title: "Success!"
        description: "Thank you for registering with Zion. We'll be in touch soon."})
      // Reset form
      setEmail(""),
      setName(""),
      setRole(""),      setEmail(""),
      setName(""),
      setRole(""),
      setAgreeTerms(false)
    } catch (error) {
      toast({
        variant: "destructive"
        title: "Something went wrong"
        description: "Please try again later."})    } finally {
      setIsSubmitting (false);
    }
  }
    } finally {
=======
    
    setIsSubmitting(true),
    ;
    try {};
      // Simulating an API call;
      toast({"
        title: "Success!""
        description: "Thank you for registering with Zion. We'll be in touch soon."})
      // Reset form;
"
      setEmail(""),"
      setName(""),"
      setRole(""),

      setAgreeTerms(false)
    } catch (error) {}
      toast({"
        variant: "destructive""
        title: "Something went wrong""
        description: "Please try again later."})
'
import { useState } from './react';'
import { Button } from '@/components / ui / button';'
import { GradientHeading } from '@/components / GradientHeading';'
import { Input } from '@/components / ui / input';'
import { Label } from '@/components / ui / label';'
import { use_toast } from '@/hooks / use - toast';'
import { Checkbox } from '@/components / ui / checkbox';
export /**;
 * WaitlistSection - Function description;
 */
function WaitlistSection() { return null; }
  const { toast } = use_toast ();
;
  const handle_submit = async (e: React.FormEvent) => {}
    e.prevent_default (),
    // Check condition;
if ( {) {}
  $2;
}
      toast ({"
        variant: "destructive","
        title: "Missing information","
        description: "Please fill all fields and agree to the terms."}),
      return;
    }
    setIsSubmitting (true);
;
    try {}
      // Simulating an API call;
      await new Promise (resolve => set_timeout (resolve, 1000));
;
      toast ({"
        title: "Success!",'"
        description: "Thank you for registering with Zion. We'll be in touch soon."}),
      // Reset form;"
      set_email ("");"
      set_name ("");"
      set_role ("");
      setAgreeTerms (false);
    } catch (error) {}
      toast ({"
        variant: "destructive","
        title: "Something went wrong","
        description: "Please try again later."});




    } finally {}
      setIsSubmitting (false);
    }
  }

  const handleSubmit = async (e: React && React.FormEvent) => {;
    e && e.preventDefault(),;

    if (!email || !name || !role || !agreeTerms) {;
      toast({;"
        variant: "destructive",;"
        title: "Missing information",;"
        description: "Please fill all fields and agree to the terms."}),;
      return;
    }

    setIsSubmitting(true);

    try {;
      // Simulating an API call;
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({;"
        title: "Success!",;'"
        description: "Thank you for registering with Zion. We'll be in touch soon."}),;

      // Reset form;"
      setEmail("");"
      setName("");"
      setRole("");
      setAgreeTerms(false);
    } catch (error) {;
      toast({;"
        variant: "destructive",;"
        title: "Something went wrong",;"
        description: "Please try again later."});
    } finally {;
      setIsSubmitting(false);
    }
  };

    } finally {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      setIsSubmitting(false)
    }

  },
  

  return (
<<<<<<< HEAD
    <section id="waitlist" className="py-20 bg-zion-blue-dark relative overflow-hidden">;
      {/* Background elements */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-zion-purple rounded-full filter blur-[100px]"></div>;
        <div className="absolute top-40 right-20 w-60 h-60 bg-zion-cyan rounded-full filter blur-[100px]"></div>;
      </div>;
      <div className="container mx-auto px-4 relative z-10">;
        <div className="max-w-3xl mx-auto">;
=======
"
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">;"
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-zion-purple rounded-full filter blur-[100px]"></div>;"
        <div className="absolute top-40 right-20 w-60 h-60 bg-zion-cyan rounded-full filter blur-[100px]"></div>;
      </div>;
"
      <div className="container mx-auto px-4 relative z-10">;"
        <div className="max-w-3xl mx-auto">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <div className="text-center mb-12">;
            <GradientHeading>Register Now</GradientHeading>;"
            <p className="text-zion-slate-light text-lg mt-4">;
              Join our growing community of AI and tech professionals. ;
              Complete your registration to access exclusive features and personalized services.;
            </p>;
          </div>;

<<<<<<< HEAD
          <form onSubmit={handleSubmit} className="space-y-6 bg-zion-blue-light p-8 rounded-lg border border-zion-purple/20">;
            <div className="space-y-2">;
              <Label htmlFor="name">Full Name</Label>;              <Input
                id="email"
                type="email"
                placeholder="you@company && company.com"
                value={email}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


  return ("
    <section id="waitlist" className="py-20 bg-zion-blue-dark relative overflow-hidden">;
      {/* Background elements */}

              <Input"
                id="name""
                placeholder="John Smith"
                value={name}

                onChange={(e) => setName(e && e.target.value)}"
                className="bg-zion-blue-dark border-zion-blue-light";
              />;
            </div>;



              <Input"
                id="email""
                type="email""
                placeholder="you@company && company.com"
                value={email}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

                onChange={(e) => setEmail(e && e.target.value)}"
                className="bg-zion-blue-dark border-zion-blue-light";
              />;
            </div>;



              <Input"
                id="role""
                placeholder="IT Manager, Developer, Business Owner, etc."
                value={role}

                onChange={(e) => setRole(e && e.target.value)}"
                className="bg-zion-blue-dark border-zion-blue-light";
              />;
            </div>;



                checked={agreeTerms}
                onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
              />;
              <Label"
                htmlFor="terms"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
                onChange={(e) => setRole(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={agreeTerms}
                onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
              />
              <Label
                htmlFor="terms"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                className="text-sm text-zion-slate font-normal"
              >
                I agree to receive updates about Zion and understand I can unsubscribe anytime.
              </Label>
            </div>
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f




            <Button "
              type="submit" 
              disabled={isSubmitting} 

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
            <Button
              type="submit"
              disabled={isSubmitting}
            <Button 
              type="submit" 
              disabled={isSubmitting} 
<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
            >"
              {isSubmitting ? "Processing..." : "Complete Registration"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
}
import { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { GradientHeading } from "@/components/GradientHeading",;
import { Input } from "@/components/ui/input",;
import { Label } from "@/components/ui/label",;
import { useToast } from "@/hooks/use-toast",;
=======

}"
import { useState } from "react",;"
import { Button } from "@/components/ui/button",;"
import { GradientHeading } from "@/components/GradientHeading",;"
import { Input } from "@/components/ui/input",;"
import { Label } from "@/components/ui/label",;"
import { useToast } from "@/hooks/use-toast",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Checkbox } from "@/components/ui/checkbox",;
export function WaitlistSection() { return null; }
  const { toast } = useToast(),;
  const handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault(),;
    if (!email || !name || !role || !agreeTerms) {;
<<<<<<< HEAD
      toast({;
        variant: "destructive",;
<<<<<<< HEAD
<<<<<<< HEAD
        title: "Missing information",;
        description: "Please fill all fields and agree to the terms."}),;
      return;
    }
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
;
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
      toast({;"
        variant: "destructive",;"
        title: "Missing information",;"
        description: "Please fill all fields and agree to the terms."}),;
      return;
    }
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                className="text-sm text-zion-slate font-normal">;
                I agree to receive updates about Zion and understand I can unsubscribe anytime.;
              </Label>;
            </div>;




            <Button"
              type="submit" 
              disabled={isSubmitting} "
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">;"
              {isSubmitting ? "Processing..." : "Complete Registration"}






;
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        title: "Missing information",,
  description: "Please fill all fields and agree to the terms."}),;
      return
};
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return (
    <section id="waitlist" className="py - 20 bg - zion - blue - dark relative overflow-hidden">;
      {/* Background elements */}
      <div className="absolute top - 0 left - 0 w - full h - full overflow - hidden opacity-10">;
        <div className="absolute -top - 40 -left - 40 w - 80 h - 80 bg - zion - purple rounded-full filter blur-[100px]"></div>;
        <div className="absolute top - 40 right - 20 w - 60 h - 60 bg - zion - cyan rounded-full filter blur-[100px]"></div>;
      </div>;
      <div className="container mx - auto px - 4 relative z-10">;
        <div className="max - w-3xl mx-auto">;
          <div className="text - center mb-12">;
            <GradientHeading > Register Now</GradientHeading>;
            <p className="text - zion - slate - light text - lg mt-4">;
              Join our growing community of AI and tech professionals.;
              Complete your registration to access exclusive features and personalized services.;
            </p>;
          </div>;              <Input;
                id="name";
                placeholder="John Smith";
                value={name}              <Input;
                id="role";
                placeholder="IT Manager, Developer, Business Owner, etc.";
                value={role}
                on_change={(e) => set_role (e.target.value)}
                className="bg - zion - blue - dark border - zion - blue-light";
              />;
            </div>;
            <div className="flex items - center space-x-2">;
              <Checkbox;
                id="terms";
                checked={agree_terms}
                onCheckedChange={(checked) => setAgreeTerms (checked as boolean)}
              />;
              <Label;
                html_for="terms";
                className="text - sm text - zion - slate font-normal";              >;
=======
  return ("
    <section id="waitlist" className="py - 20 bg - zion - blue - dark relative overflow - hidden">;
      {/* Background elements */}"
      <div className="absolute top - 0 left - 0 w - full h - full overflow - hidden opacity - 10">;"
        <div className="absolute -top - 40 -left - 40 w - 80 h - 80 bg - zion - purple rounded - full filter blur-[100px]"></div>;"
        <div className="absolute top - 40 right - 20 w - 60 h - 60 bg - zion - cyan rounded - full filter blur-[100px]"></div>;
      </div>;"
      <div className="container mx - auto px - 4 relative z - 10">;"
        <div className="max - w-3xl mx - auto">;"
          <div className="text - center mb - 12">;
            <GradientHeading > Register Now</GradientHeading>;"
            <p className="text - zion - slate - light text - lg mt - 4">;



              Join our growing community of AI and tech professionals.;
              Complete your registration to access exclusive features and personalized services.;
            </p>;
          </div>;



              <Input;"
                id="name";"
                placeholder="John Smith";
                value={name}



              <Input;"
                id="email";"
                type="email";"
                placeholder="you@company.com";
                value={email}



              <Input;"
                id="role";"
                placeholder="IT Manager, Developer, Business Owner, etc.";
                value={role}



              >;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                I agree to receive updates about Zion and understand I can unsubscribe anytime.;
              </Label>;
<<<<<<< HEAD
<<<<<<< HEAD
            </div>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            <Button;
              type="submit";
              disabled={is_submitting}
              className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple";
            >;
              {is_submitting ? "Processing..." : "Complete Registration"}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
            ;
            <Button ;
              type="submit" ;
              disabled={isSubmitting} ;
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple";
            >;
              {isSubmitting ? "Processing..." :"Complete Registration"}
            <Button;
              type="submit";
              disabled={isSubmitting} ;
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple";
            >;
              {isSubmitting ? "Processing..." : "Complete Registration"}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            </Button>;
          </form>;
        </div>;
      </div>;
<<<<<<< HEAD
    </section>;
  );
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======






}
    </section>);
    </section>;
  ),; const handleSubmit = async (e: React.FormEvent) => {}
  e.preventDefault ();
if (!email || !name || !role || !agreeTerms) {}
  toast ({}
  return;
}setIsSubmitting (true);
}finally {}
  setIsSubmitting (false) 
}
};"
return (<section id="waitlist" className="py-20 bg-zion-blue-dark relative overflow-hidden" > {}
  /* Background elements */ "
}<div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10" > <div className="absolute -top-40 -left-40 w-80 h-80 bg-zion-purple rounded-full filter blur-[100px]" ></div> <div className="absolute top-40 right-20 w-60 h-60 bg-zion-cyan rounded-full filter blur-[100px]" ></div> container mx-auto px-4 relative z-10"> <div className=" max-w-3xl mx-auto"> <div className=" text-center mb-12"> <GradientHeading>Register Now</GradientHeading> <p className=" text-zion-slate-light text-lg mt-4"> Join our growing community of AI and tech professionals. Complete your registration to access exclusive features and personalized services. </p> </div> /> </div> <div className=" space-y-2"> <Label htmlFor=" email">Email Address</Label> <Input /> </div> <div className=" space-y-2"> <Label htmlFor=" role">Your Role</Label> <Input /> </div> <div className=" flex items-center space-x-2"> <Checkbox /> <Label htmlFor=" terms"className=" text-sm text-zion-slate font-normal" > I agree to receive updates about Zion and understand I can unsubscribe anytime. </Label> </div> <Button </Button> </form> </div> </div> </section>) 
}
    </section>;
  );
}
;


}
;
    </section>);
}
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
            </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
            </div>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
