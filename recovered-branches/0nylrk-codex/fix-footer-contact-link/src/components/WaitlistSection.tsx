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
  const { toast } = useToast();  const [email, setEmail] = useState(""),
  const [name, setName] = useState(""),
  const [role, setRole] = useState(""),

import {useState} from "react";""
import {Button} from "@/components/ui/button";""
import {GradientHeading} from "@/components/GradientHeading";""
import {Input} from "@/components/ui/input";""
import {Label} from "@/components/ui/label";""
import {useToast} from "@/hooks/use-toast";""
import {Checkbox} from "@/components/ui/checkbox";"
export function WaitlistSection() {;
"
  const [email, setEmail] = useState("");""
  const [name, setName] = useState("");""
  const [role, setRole] = useState("");"
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();"
import { useState } from "react",""
import { Button } from "@/components/ui/button",""
import { GradientHeading } from "@/components/GradientHeading",""
import { Input } from "@/components/ui/input",""
import { Label } from "@/components/ui/label",""
import { useToast } from "@/hooks/use-toast";""
import { Checkbox } from "@/components/ui/checkbox";""
import { useToast } from "@/hooks/use-toast",""
import { Checkbox } from "@/components/ui/checkbox","
export function WaitlistSection() {"
  const [email, setEmail] = useState(""),""
  const [name, setName] = useState(""),""
  const [role, setRole] = useState(""),"
pr-12325
  const [agreeTerms, setAgreeTerms] = useState(false),
  const [isSubmitting, setIsSubmitting] = useState(false),

  const { toast } = useToast(),

    

  return (

          <div className="text-center mb-12">;
            <GradientHeading>Register Now</GradientHeading>;"
            <p className="text-zion-slate-light text-lg mt-4">;
              Join our growing community of AI and tech professionals. ;
              Complete your registration to access exclusive features and personalized services.;
            </p>;
          </div>;

          <form onSubmit={handleSubmit} className="space-y-6 bg-zion-blue-light p-8 rounded-lg border border-zion-purple/20">;
            <div className="space-y-2">;
              <Label htmlFor="name">Full Name</Label>;              <Input
                id="email"
                type="email"
                placeholder="you@company && company.com"
                value={email}

            <Button 
              type="submit" 
              disabled={isSubmitting} 

              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
            >
              {isSubmitting ? "Processing..." : "Complete Registration"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}


