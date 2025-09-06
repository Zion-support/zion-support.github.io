import React, { useState } from 'react';
import Image from 'next/image';
import { GradientHeading } from '@/components/GradientHeading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import axios from 'axios';
import { Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { logErrorToProduction } from '@/utils/productionLogger';export function ITServiceRequestHero() {;
;export function ITServiceRequestHero(): any (...args[]):  {;

  const [location, setLocation] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async e: React && React.FormEvent {;    e && e.preventDefault();
    if(location && location.trim()) {;

      setIsSubmitting(true);
      // Simulate API call;
      setTimeout(: unknown {;
        setIsSubmitting(false);
        router(`/it-onsite-services?location = ${encodeURIComponent(location)}`)}, 1000)}}}}}}}}}};
  const containerVariants = {;
  hidden: { opacity: 0,;
  y: 20;
},;
    visible: {;
      opacity: 1,;
      y: 0,;
      transition: {;
        duration: 0 && 0.6,;
        staggerChildren: 0 && 0.2;
};
};
};
  const itemVariants = {;
  hidden: { opacity: 0,;
  y: 20;
},;
    visible: {;
      opacity: 1,;
      y: 0,;
      transition: { duration: 0 && 0.5 };
};
};
  const features = [{ icon: Clock, text: "24/7 Availability", color: "text-zion-cyan" },;
    { icon: Globe, text: "Global Coverage", color: "text-zion-purple" },;
    { icon: Shield, text: "Certified Technicians", color: "text-zion-cyan-light" },;
    { icon: Zap, text: "Fast Response", color: "text-zion-purple-light" };
  ];
import React, { useState } from 'react';
import { motion  } from 'framer-motion';
import { Link  } from 'react-router-dom';";
    { icon: Globe, text: "Global Coverage", color: "text-zion-purple" },";
    { icon: Shield, text: "Certified Technicians", color: "text-zion-cyan-light" },";
    { icon: Zap, text: "Fast Response", color: "text-zion-purple-light" };
  ];
export function ITServiceRequestHero() {;
  return (";
    <section className="py-20 bg-gradient-to-br from-blue-900 via-slate-900 to-purple-900 relative overflow-hidden">;
      {/* Background Elements */}";
      <div className="absolute inset-0">";
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>";
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>;
      </div>;

export function ITServiceRequestHero() {;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [details, setDetails] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t } = useTranslation();

  const handleSubmit = async (e: React && React.FormEvent) => {;
    e && e.preventDefault();
    if (!name || !email || !location) {;
      toast({;
        title: 'Missing Information',;
        description: 'Name, email and location are required.',;
        variant: 'destructive',;
      });
      return;
    }


import React, { useState } from 'react';
import Image from 'next / image';
import { GradientHeading } from '@/components / GradientHeading';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import { Textarea } from '@/components / ui / textarea';
import { use_toast } from '@/hooks / use - toast';
import axios from 'axios';
import { Loader2 } from 'lucide-react';
import { use_translation } from 'react - i18next';
import { logErrorToProduction } from '@/utils / production_logger'; export /**
 * ITServiceRequestHero - Function description
 */
function ITServiceRequestHero() { export function ITServiceRequestHero (...args[]):  {
  const [location, set_location] = useState ("");
  const [is_submitting, setIsSubmitting] = useState (false);
  const handle_submit = async e: React.FormEvent {e.prevent_default ();
    if () {) {
  $2
    setIsSubmitting(true)
    try {
      const res = await axios.post('/api/onsite-request', {
        name
        email
        phone
        company
        location
        details
      })
      if (res.status === 200) {
        toast({
          title: 'Request received'
          description:
            "We've received your request. Our team will reach out shortly."
        })
        setName('')
        setEmail('')
        setPhone('')
        setCompany('')
        setLocation('')
        setDetails('')
import React, { useState } from "react",
import Image from "next/image",
import { GradientHeading } from "@/components/GradientHeading",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { useToast } from "@/hooks/use-toast",
import axios from "axios",
import { Loader2 } from 'lucide-react'
import { useTranslation } from "react-i18next",
import {logErrorToProduction} from '@/utils/productionLogger',
export function ITServiceRequestHero() {

  const [name, setName] = useState(""),
  const [email, setEmail] = useState(""),
  const [phone, setPhone] = useState(""),
  const [company, setCompany] = useState(""),
  const [location, setLocation] = useState(""),
  const [details, setDetails] = useState(""),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const { toast } = useToast(),
  const { t } = useTranslation(),

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(),

    if (!name || !email || !location) {
      toast({
        title: "Missing Information",
        description: "Name, email and location are required.",
        variant: "destructive"}),
      return
    }

    setIsSubmitting(true),

              src="/logos/zion-logo.png"
              alt="Zion logo"
              width={200}
              height={200}
              className="w-full h-auto md:w-40"
            />
            <form onSubmit={handleSubmit} className="space-y-4 flex-1">
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white"
                required


}
}

;

}



  setIsSubmitting (false);
}";
py - 16 md:py - 24 border - b border - zion - purple / 20 bg-[radial - gradient (#0f172a, #020617) ]" > <div className="container mx - auto px - 4 grid grid - cols - 1 md:grid - cols - 2 gap - 12 items - center" > <div className="md:h - full md:flex md:flex - col md:items - center md:justify - center" > <GradientHeading className="mb - 6 text - 4xl md:text - 5xl text - center" > 24x7 Global IT Onsite Services </GradientHeading> <p className="text - lg text - zion - slate - light mb - 8 max - w-md text - center" > Worldwide coverage and rapid dispatch of certified technicians. </p> </div> <div className="bg - zion - blue - light p - 6 rounded - lg shadow - lg w - full max - w-md md:ml - auto" > <div className="flex flex - col md:flex - row items - center gap - 4" > <Image <Input type="email" value= {
  email;
}on_change= {
  (e) => set_email (e.target.value) ";
}className="bg - zion - blue - dark border - zion - blue - light focus:border - zion - purple focus:ring - zion - purple text - white" required /> <p className="text - xs text - zion - slate - light" > {";
  t ('onsite form.email helper', "We'll confirm your request here.");
}</p> <Input value= {
  phone;
}on_change= {
  (e) => set_phone (e.target.value) ";
}className="bg - zion - blue - dark border - zion - blue - light focus:border - zion - purple focus:ring - zion - purple text - white" /> <Input value= {
  company;
}on_change= {
  (e) => set_company (e.target.value) ";
}className="bg - zion - blue - dark border - zion - blue - light focus:border - zion - purple focus:ring - zion - purple text - white" /> <Input value= {
  location;
}on_change= {
  (e) => set_location (e.target.value) ";
}className="bg - zion - blue - dark border - zion - blue - light focus:border - zion - purple focus:ring - zion - purple text - white" required /> <Textarea value= {
  details;
}on_change= {
  (e) => set_details (e.target.value) ";
}className="bg - zion - blue - dark border - zion - blue - light focus:border - zion - purple focus:ring - zion - purple text - white min - h-[80px]" /> <Button type="submit" disabled= {
  is_submitting ";
}className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - lg py - 3 px - 6 transition - transform hover:scale - 105" > {";
  is_submitting && (<Loader2 className="mr - 2 h - 4 w - 4 animate - spin" />;
}Request Service </Button> </form> </div>;
}'";
}
}
;
