<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, MapPin, Globe, Shield, Zap, CheckCircle } from "lucide-react";

export function ITServiceRequestHero(...args: any[]): any {
  const [location, setLocation] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent)    => {
    e.preventDefault();
    if (location.trim()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
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
        staggerChildren: 0 && 0.2
};
}
};
  const itemVariants = {;
  hidden: { opacity: 0,;
  y: 20;
},;
    visible: {;
      opacity: 1,;
      y: 0,;
      transition: { duration: 0 && 0.5 }
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
        title: 'Missing Information',,
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
}
      setIsSubmitting (true);
      // Simulate API call;
      set_timeout (: unknown {
        setIsSubmitting (false);
        router (`/it - onsite - services?location = ${encodeURIComponent (location)}`)}, 1000)}}}}}}}}}}
  const container_variants = {
  hidden: { opacity: 0,
  coordinate_y: 20;
},
    visible: {
      opacity: 1,
      coordinate_y: 0,
      transition: {
        duration: 0.6,
        stagger_children: 0.2;
}
}
}
  const item_variants = {
  hidden: { opacity: 0,
  coordinate_y: 20;
},
    visible: {
      opacity: 1,
      coordinate_y: 0,
      transition: { duration: 0.5 }
}
}
  const features = [{ icon: Clock, text: "24 / 7 Availability", color: "text - zion - cyan" },
    { icon: Globe, text: "Global Coverage", color: "text - zion - purple" },
    { icon: Shield, text: "Certified Technicians", color: "text - zion - cyan - light" },
    { icon: Zap, text: "Fast Response", color: "text - zion - purple - light" }
  ];
import { motion  } from 'framer-motion';
import { Link  } from 'react-router-dom';";
    { icon: Globe, text: "Global Coverage", color: "text - zion - purple" }, ";
    { icon: Shield, text: "Certified Technicians", color: "text - zion - cyan - light" }, ";
    { icon: Zap, text: "Fast Response", color: "text - zion - purple - light" }
  ];
export /**
 * ITServiceRequestHero - Function description
 */
function ITServiceRequestHero() {
  return (";
    <section className="py - 20 bg - gradient - to - br from - blue - 900 via - slate - 900 to - purple - 900 relative overflow-hidden">;
      {/* Background Elements */}";
      <div className="absolute inset-0">";
        <div className="absolute top - 0 left - 0 w - 96 h - 96 bg - blue - 500 / 10 rounded - full blur-3xl"></div>";
        <div className="absolute bottom - 0 right - 0 w - 96 h - 96 bg - purple - 500 / 10 rounded - full blur-3xl"></div>;
      </div>;
export /**
 * ITServiceRequestHero - Function description
 */
function ITServiceRequestHero() {
  const [name, set_name] = useState ('');
  const [email, set_email] = useState ('');
  const [phone, set_phone] = useState ('');
  const [company, set_company] = useState ('');
  const [location, set_location] = useState ('');
  const [details, set_details] = useState ('');
  const [is_submitting, setIsSubmitting] = useState (false);
  const { toast } = use_toast ();
  const { t } = use_translation ();
  const handle_submit = async (e: React.FormEvent) => {
    e.prevent_default ();
    // Check condition
if ( {) {
  $2
}
      toast ({
        title: 'Missing Information',
        description: 'Name, email and location are required.',
        variant: 'destructive',
      });
      return;
    }
    setIsSubmitting (true);
    setIsSubmitting(true),

    try {
      const res = await axios.post ('/api / onsite - request', {
        name,
        email,
        phone,
        company,
        location,

      }
    } catch (err: any) {
      logErrorToProduction(err)
      toast({

        title: 'Submission Failed',
        description: 'There was an error submitting your request.',
        variant: 'destructive',

      })

    } finally {
      setIsSubmitting (false);
    }
  }

  return (
    <section
      className="py-16 md:py-24 border-b border-zion-purple/20 bg-[radial-gradient(#0f172a,_#020617)]"
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="md:h-full md:flex md:flex-col md:items-center md:justify-center">
          <GradientHeading className="mb-6 text-4xl md:text-5xl text-center">
            24x7 Global IT Onsite Services
          </GradientHeading>
          <p className="text-lg text-zion-slate-light mb-8 max-w-md text-center">
            Worldwide coverage and rapid dispatch of certified technicians.
          </p>
        </div>
        <div className="bg-zion-blue-light p-6 rounded-lg shadow-lg w-full max-w-md md:ml-auto">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Image

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

              />
              <p className='text-xs text-zion-slate-light'>
                {t(
                  'onsite_form.name_helper'
                  'Enter the main contact for this request.'

                onChange={e => setName(e && e.target.value)}
                className='bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white'                required;
              />;
              <p className='text-xs text-zion-slate-light'>;
                {t(;
                  'onsite_form && onsite_form.name_helper',;
                  'Enter the main contact for this request.';

                )}
              </p>;
              <Input
                type='email'
                value={email}

                )}
              </p>
              <Input

              />
              <p className='text-xs text-zion-slate-light'>
                {t(
                  'onsite_form.email_helper'
                  "We'll confirm your request here."
                onChange={e => setEmail(e && e.target.value)}
                className='bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white'                required;
              />;
              <p className='text-xs text-zion-slate-light'>;
                {t(;
                  'onsite_form && onsite_form.email_helper',;
                  "We'll confirm your request here.";
                )}
              </p>;
              <Input
                value={phone}

                onChange={e => setPhone(e && e.target.value)}
                className='bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white'              />;
              <p className='text-xs text-zion-slate-light'>;
                {t(;
                  'onsite_form && onsite_form.phone_helper',;
                  'Include a direct line for urgent updates.';

                )}
              </p>;
              <Input
                value={company}
                onChange={e => setCompany(e && e.target.value)}
                className='bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white'              />;
              <p className='text-xs text-zion-slate-light'>;
                {t('onsite_form && onsite_form.company_helper', 'Who do you represent?')}
              </p>;
              <Input
                value={location}

                onChange={e => setLocation(e && e.target.value)}
                className='bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white'                required;
              />;
              <p className='text-xs text-zion-slate-light'>;
                {t(;
                  'onsite_form && onsite_form.location_helper',;
                  'Where do you need on-site support?';

                )}
              </p>;
              <Textarea
                value={details}

                onChange={e => setDetails(e && e.target.value)}
                className='bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white min-h-[80px]'              />;
              <p className='text-xs text-zion-slate-light'>;
                {t(;
                  'onsite_form && onsite_form.details_helper',;
                  'Share any important context for our technicians.';

                )}
              </p>;
              <Button
                type='submit'
                disabled={isSubmitting}
                className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-3 px-6 transition-transform hover:scale-105'>;
                {isSubmitting && (;
                  <Loader2 className='mr-2 h-4 w-4 animate-spin' />;
                )}

              />
              <p className="text-xs text-zion-slate-light">{t('onsite_form.location_helperWhere do you need on-site support?')}</p>
              <Textarea
                value={details}

                {isSubmitting && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}

                Request Service
              </Button>
            </form>
          </div>

          <p className="text-xs text-center text-zion-slate-light mt-3">
            {t('onsite_form.privacy_noticeRest assured, your personal information stays private. We use it only to coordinate service and never share details outside our secure scheduling system with anyone.')}

          </p>
        </div>
      </div>
    </section>
  )

    <section className='py - 16 md:py - 24 border - b border - zion - purple / 20 bg-[radial - gradient (#0f172a, _#020617)]'>;
      <div className='container mx - auto px - 4 grid grid - cols - 1 md:grid - cols - 2 gap - 12 items - center'>;
        <div className='md:h - full md:flex md:flex - col md:items - center md:justify - center'>;
          <GradientHeading className='mb - 6 text - 4xl md:text - 5xl text - center'>;
            24x7 Global IT Onsite Services;
          </GradientHeading>;
          <p className='text - lg text - zion - slate - light mb - 8 max - w-md text - center'>;
            Worldwide coverage and rapid dispatch of certified technicians.;
          </p>;
        </div>;
        <div className='bg - zion - blue - light p - 6 rounded - lg shadow - lg w - full max - w-md md:ml - auto'>;
          <div className='flex flex - col md:flex - row items - center gap - 4'>;
            <Image;
              src='/logos / zion - logo.png';
              alt='Zion logo';
              width={200}
              height={200}
              className='w - full h - auto md:w - 40'            />;
            <form on_submit={handle_submit} className='space - y-4 flex - 1'>;
              <Input;
                value={name}
                on_change={e => set_name (e.target.value)}
                className='bg - zion - blue - dark border - zion - blue - light focus:border - zion - purple focus:ring - zion - purple text - white'                required;
              />;
              <p className='text - xs text - zion - slate - light'>;
                {t (
                  'onsite_form.name_helper',
                  'Enter the main contact for this request.')}
              </p>;
              <Input;
                type='email';
                value={email}
                on_change={e => set_email (e.target.value)}
                className='bg - zion - blue - dark border - zion - blue - light focus:border - zion - purple focus:ring - zion - purple text - white'                required;
              />;
              <p className='text - xs text - zion - slate - light'>;
                {t (
                  'onsite_form.email_helper',
                  "We'll confirm your request here.")}
              </p>;
              <Input;
                value={phone}
                on_change={e => set_phone (e.target.value)}
                className='bg - zion - blue - dark border - zion - blue - light focus:border - zion - purple focus:ring - zion - purple text - white'              />;
              <p className='text - xs text - zion - slate - light'>;
                {t (
                  'onsite_form.phone_helper',
                  'Include a direct line for urgent updates.')}
              </p>;
              <Input;
                value={company}
                on_change={e => set_company (e.target.value)}
                className='bg - zion - blue - dark border - zion - blue - light focus:border - zion - purple focus:ring - zion - purple text - white'              />;
              <p className='text - xs text - zion - slate - light'>;
                {t ('onsite_form.company_helper', 'Who do you represent?')}
              </p>;
              <Input;
                value={location}
                on_change={e => set_location (e.target.value)}
                className='bg - zion - blue - dark border - zion - blue - light focus:border - zion - purple focus:ring - zion - purple text - white'                required;
              />;
              <p className='text - xs text - zion - slate - light'>;
                {t (
                  'onsite_form.location_helper',
                  'Where do you need on - site support?')}
              </p>;
              <Textarea;
                value={details}
                on_change={e => set_details (e.target.value)}
                className='bg - zion - blue - dark border - zion - blue - light focus:border - zion - purple focus:ring - zion - purple text - white min - h-[80px]'              />;
              <p className='text - xs text - zion - slate - light'>;
                {t (
                  'onsite_form.details_helper',
                  'Share any important context for our technicians.')}
              </p>;
              <Button;
                type='submit';
                disabled={is_submitting}
                className='w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - lg py - 3 px - 6 transition - transform hover:scale - 105'              >;
                {is_submitting && (
                  <Loader2 className='mr - 2 h - 4 w - 4 animate - spin' />)}
                Request Service;
              </Button>;
            </form>;
          </div>;
          <p className='text - xs text - center text - zion - slate - light mt - 3'>;
            {t (
              'onsite_form.privacy_notice',
              'Rest assured, your personal information stays private. We use it only to coordinate service and never share details outside our secure scheduling system with anyone.')}
          </p>;
        </div>;
      </div>;
    </section>);

}catch (err: any) {
  logErrorToProduction (err);
toast ({
}finally {

}finally {;
  setIsSubmitting (false) 
};"
py-16 md:py-24 border-b border-zion-purple/20 bg-[radial-gradient (#0f172a, #020617) ]" > <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center" > <div className="md:h-full md:flex md:flex-col md:items-center md:justify-center" > <GradientHeading className="mb-6 text-4xl md:text-5xl text-center" > 24x7 Global IT Onsite Services </GradientHeading> <p className="text-lg text-zion-slate-light mb-8 max-w-md text-center" > Worldwide coverage and rapid dispatch of certified technicians. </p> </div> <div className="bg-zion-blue-light p-6 rounded-lg shadow-lg w-full max-w-md md:ml-auto" > <div className="flex flex-col md:flex-row items-center gap-4" > <Image <Input type="email" value= {
  email
}onChange= {
  (e) => setEmail (e.target.value) "
}className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white" required /> <p className="text-xs text-zion-slate-light" > {"
  t ('onsite form.email helper', "We'll confirm your request here.")
}</p> <Input value= {
  phone
}onChange= {
  (e) => setPhone (e.target.value) "
}className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white" /> <Input value= {
  company
}onChange= {
  (e) => setCompany (e.target.value) "
}className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white" /> <Input value= {
  location
}onChange= {
  (e) => setLocation (e.target.value) "
}className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white" required /> <Textarea value= {
  details
}onChange= {
  (e) => setDetails (e.target.value) "
}className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white min-h-[80px]" /> <Button type="submit" disabled= {
  isSubmitting "
}className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-3 px-6 transition-transform hover:scale-105" > {"
  isSubmitting && (<Loader2 className="mr-2 h-4 w-4 animate-spin" />
}Request Service </Button> </form> </div>
}'"

}
}
import Image from "next/image",;
import { GradientHeading } from "@/components/GradientHeading",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { useToast } from "@/hooks/use-toast",;
import axios from "axios",;
import { Loader2 } from 'lucide-react';
import { useTranslation } from "react-i18next",;
import {logErrorToProduction} from '@/utils/productionLogger',;
export function ITServiceRequestHero() {;
  const [name, setName] = useState(""),;
  const [email, setEmail] = useState(""),;
  const [phone, setPhone] = useState(""),;
  const [company, setCompany] = useState(""),;
  const [location, setLocation] = useState(""),;
  const [details, setDetails] = useState(""),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const { toast } = useToast(),;
  const { t } = useTranslation(),;
  const handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault(),;
    if (!name || !email || !location) {;
      toast({;
        title: "Missing Information",,
  description: "Name, email and location are required.",;
        variant: "destructive"}),;
      return;
    }
;
    setIsSubmitting(true),;
    try {;
      const res = await axios.post("/api/onsite-request", {;
        name,;
        email,;
        phone,;
        company,;
        location,;
        details}),;
      if (res.status === 200) {;
        toast({;
          title: "Request received",,
  description: "We've received your request. Our team will reach out shortly."}),;
        setName(""),;
        setEmail(""),;
        setPhone(""),;
        setCompany(""),;
        setLocation(""),;
        setDetails("");
      }
    } catch (err: any) {;
      logErrorToProduction(err),;
      toast({;
        title: "Submission Failed",,
  description: "There was an error submitting your request.";
        variant: "destructive"});
    } finally {;
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const features = [
    { icon: Clock, text: "24/7 Global Support", color: "text-zion-cyan" },
    { icon: Globe, text: "Worldwide Coverage", color: "text-zion-purple-light" },
    { icon: Shield, text: "Certified Technicians", color: "text-zion-blue-light" },
    { icon: Zap, text: "Same Day Response", color: "text-zion-cyan-light" }
  ];

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple/30 py-16 md:py-24 border-b border-zion-purple/20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
=======
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-d0e7
=======
    <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark py-20 md:py-28 border-b border-zion-purple/20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
>>>>>>> origin/main
      </div>

      <motion.div 
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 bg-zion-cyan/20 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-zion-cyan" />
              </div>
              <span className="text-zion-cyan font-semibold text-lg">Premium Service</span>
            </div>
            
            <GradientHeading className="mb-6 text-4xl md:text-5xl lg:text-6xl leading-tight">
              24x7 Global IT Onsite Services
            </GradientHeading>
            
            <p className="text-lg md:text-xl text-zion-slate-light mb-8 max-w-lg leading-relaxed">
              Request professional technicians anywhere in the world, anytime you need them. 
              Our certified experts provide rapid response and reliable solutions for all your IT needs.
            </p>

            {/* Feature highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-3"
                  variants={itemVariants}
                >
                  <feature.icon className={`w-5 h-5 ${feature.color}`} />
                  <span className="text-zion-slate-light text-sm font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 text-zion-slate-light text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-zion-cyan" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-zion-cyan" />
                <span>99.9% Uptime</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="bg-gradient-to-br from-zion-blue-light/10 to-zion-purple/10 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-zion-purple/20">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Request Service</h3>
                <p className="text-zion-slate-light">Get instant quotes from certified technicians</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                  <Input
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter service location (city, country)"
                    className="pl-12 bg-zion-blue-dark/50 border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white placeholder-zion-slate-light h-14 text-lg rounded-xl"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 rounded-xl shadow-2xl shadow-zion-purple/25 transition-all duration-300 hover:scale-105 h-14"
                >
                  Get Instant Quote
                </Button>
                
                <div className="text-center">
                  <p className="text-xs text-zion-slate-light">
                    Available worldwide, 24 hours a day • Response within 2 hours
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
import React from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Search, Filter } from 'lucide-react';

export function ITServiceRequestHero() {
  return (
    <section className="py-16 bg-zion-blue-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need IT Services?
          </h2>
          <p className="text-zion-slate-light max-w-2xl mx-auto">
            Find the perfect IT professional or service for your project. Get started in minutes.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-zion-blue rounded-lg p-8 border border-zion-blue-lighter">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
                <Input
                  type="text"
                  placeholder="What service do you need?"
                  className="pl-10 bg-zion-blue-light border-zion-blue-lighter text-white placeholder:text-zion-slate-light focus:border-zion-cyan"
                />
              </div>
<<<<<<< HEAD
              <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple px-8">
                <Filter className="h-4 w-4 mr-2" />
                Search
              </Button>
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="border-zion-blue-lighter text-zion-slate-light hover:bg-zion-blue-lighter hover:text-white">
                Web Development
              </Button>
              <Button variant="outline" className="border-zion-blue-lighter text-zion-slate-light hover:bg-zion-blue-lighter hover:text-white">
                Mobile Apps
              </Button>
              <Button variant="outline" className="border-zion-blue-lighter text-zion-slate-light hover:bg-zion-blue-lighter hover:text-white">
                Cloud Services
              </Button>
              <Button variant="outline" className="border-zion-blue-lighter text-zion-slate-light hover:bg-zion-blue-lighter hover:text-white">
                Cybersecurity
              </Button>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
    </section>
  );
}
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-609d
=======
import React from 'react';

export const ITServiceRequestHero: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-zion-blue to-zion-purple text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          IT Services & AI Solutions
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Transform your business with cutting-edge technology solutions. From AI chatbots to cloud infrastructure, 
          we deliver results that drive growth and innovation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-zion-cyan text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-zion-cyan-dark transition-colors">
            Get Free Consultation
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-zion-blue transition-colors">
            View All Services
          </button>
        </div>
      </div>
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
    </section>
  );
};
=======
import React from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Search, Filter } from 'lucide-react';

export function ITServiceRequestHero() {
  return (
    <section className="py-16 bg-zion-blue-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need IT Services?
          </h2>
          <p className="text-zion-slate-light max-w-2xl mx-auto">
            Find the perfect IT professional or service for your project. Get started in minutes.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-zion-blue rounded-lg p-8 border border-zion-blue-lighter">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
                <Input
                  type="text"
                  placeholder="What service do you need?"
                  className="pl-10 bg-zion-blue-light border-zion-blue-lighter text-white placeholder:text-zion-slate-light focus:border-zion-cyan"
                />
              </div>
              <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple px-8">
                <Filter className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="border-zion-blue-lighter text-zion-slate-light hover:bg-zion-blue-lighter hover:text-white">
                Web Development
              </Button>
              <Button variant="outline" className="border-zion-blue-lighter text-zion-slate-light hover:bg-zion-blue-lighter hover:text-white">
                Mobile Apps
              </Button>
              <Button variant="outline" className="border-zion-blue-lighter text-zion-slate-light hover:bg-zion-blue-lighter hover:text-white">
                Cloud Services
              </Button>
              <Button variant="outline" className="border-zion-blue-lighter text-zion-slate-light hover:bg-zion-blue-lighter hover:text-white">
                Cybersecurity
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
