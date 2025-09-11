<<<<<<< HEAD
<<<<<<< HEAD
import { Loader2 } from 'lucide-react'

import { useTranslation } from 'react-i18next'
import React, { useState } from 'react'
import Image from 'next/image'
import { GradientHeading } from '@/components/GradientHeading'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import axios from 'axios'
import { Loader2 } from 'lucide-react'

import { useTranslation } from 'react-i18next'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
import { logErrorToProduction } from '@/utils/productionLogger'; export function ITServiceRequestHero() { export function ITServiceRequestHero(...args[]):  {
  const [location, setLocation] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const handleSubmit = async e: React.FormEvent {e.preventDefault()
    if(location.trim()) {
      setIsSubmitting(true)
      // Simulate API call
      setTimeout(: unknown {
        setIsSubmitting(false)
        router(`/it-onsite-services?location = ${encodeURIComponent(location)}`)}, 1000)}}}}}}}}}}
  const containerVariants = {
  hidden: { opacity: 0
  y: 20
}
    visible: {
      opacity: 1
      y: 0
      transition: {
        duration: 0.6
        staggerChildren: 0.2
}
}
}
  const itemVariants = {
  hidden: { opacity: 0
  y: 20
}
    visible: {
      opacity: 1
      y: 0
      transition: { duration: 0.5 }
}
}
  const features = [{ icon: Clock, text: "24/7 Availability", color: "text-zion-cyan" }
    { icon: Globe, text: "Global Coverage", color: "text-zion-purple" }
    { icon: Shield, text: "Certified Technicians", color: "text-zion-cyan-light" }
    { icon: Zap, text: "Fast Response", color: "text-zion-purple-light" }
  ]
import { motion  } from 'framer-motion'
  const features = [{ icon: Clock, text: "24/7 Availability", color: "text-zion-cyan" },
    { icon: Globe, text: "Global Coverage", color: "text-zion-purple" },
    { icon: Shield, text: "Certified Technicians", color: "text-zion-cyan-light" },
    { icon: Zap, text: "Fast Response", color: "text-zion-purple-light" };
  ];
import { motion  } from 'framer-motion';
import { Link  } from 'react-router-dom';"
    { icon: Globe, text: "Global Coverage", color: "text-zion-purple" },"
    { icon: Shield, text: "Certified Technicians", color: "text-zion-cyan-light" },"
    { icon: Zap, text: "Fast Response", color: "text-zion-purple-light" }
  ]
export function ITServiceRequestHero() {
  return ("
    <section className="py-20 bg-gradient-to-br from-blue-900 via-slate-900 to-purple-900 relative overflow-hidden">
      {/* Background Elements */}"
      <div className="absolute inset-0">"
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>"
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
export function ITServiceRequestHero() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [company, setCompany] = useState('')
  const [location, setLocation] = useState('')
  const [details, setDetails] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const { t } = useTranslation()
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name |!email |!location) {
      toast({
        title: 'Missing Information'
        description: 'Name, email and location are required.'
        variant: 'destructive'
      })
      return;
    }
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

=======
import { logErrorToProduction } from '@/utils/productionLogger';export function ITServiceRequestHero() {;
;export function ITServiceRequestHero(): any (...args[]):  {;

=======
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

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD

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
    <section className="py - 20 bg - gradient - to - br from - blue - 900 via - slate - 900 to - purple - 900 relative overflow - hidden">;
      {/* Background Elements */}";
      <div className="absolute inset - 0">";
        <div className="absolute top - 0 left - 0 w - 96 h - 96 bg - blue - 500 / 10 rounded - full blur - 3xl"></div>";
        <div className="absolute bottom - 0 right - 0 w - 96 h - 96 bg - purple - 500 / 10 rounded - full blur - 3xl"></div>;
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    setIsSubmitting (true);
    setIsSubmitting(true),
      const res = await axios.post("/api/onsite-request", {
ursor/fix-website-loading-errors-and-merge-6662

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <Input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Enter service location (e.g., New York, NY)" className="w-full bg-white/10 border-white/30 focus:border-zion-cyan focus:ring-zion-cyan text-white placeholder-zion-slate-light rounded-xl py-4 px-4 text-lg backdrop-blur-sm" required/>
                    <MapPin className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-cyan/50"/>
                  </div>

    try {
      const res = await axios.post ('/api / onsite - request', {
<<<<<<< HEAD
    try {
      const res = await axios.post("/api/onsite-request", {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        name,
        email,
        phone,
        company,
        location,
<<<<<<< HEAD
        details,
      })
      if (res.status === 200) {
        toast({
          title: 'Request received',
          description:
            "We've received your request. Our team will reach out shortly.",
        })
        setName('')
        setEmail('')
        setPhone('')
        setCompany('')
        setLocation('')
        setDetails('')
        details}),

      if (res.status === 200) {
        toast({
          title: "Request received",
          description: "We've received your request. Our team will reach out shortly."}),
        setName(""),
        setEmail(""),
        setPhone(""),
        setCompany(""),
        setLocation(""),
        setDetails("")
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      }
    } catch (err: any) {
      logErrorToProduction(err)
      toast({
<<<<<<< HEAD
    } catch (err: any) {
      logErrorToProduction(err)
      toast({
        title: 'Submission Failed'
        description: 'There was an error submitting your request.'
        variant: 'destructive'
=======

        title: 'Submission Failed',
        description: 'There was an error submitting your request.',
        variant: 'destructive',

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      })

    } finally {
      setIsSubmitting (false);
    }
  }
<<<<<<< HEAD
        title: 'Submission Failed'
        description: 'There was an error submitting your request.'
        variant: 'destructive'
        title: 'Submission Failed',
        description: 'There was an error submitting your request.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }
        title: "Submission Failed",
        description: "There was an error submitting your request.",
        variant: "destructive"})
    } finally {
      setIsSubmitting(false)
    }
  },
=======




>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

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
    <section className="py - 20 bg - gradient - to - br from - blue - 900 via - slate - 900 to - purple - 900 relative overflow - hidden">;
      {/* Background Elements */}";
      <div className="absolute inset - 0">";
        <div className="absolute top - 0 left - 0 w - 96 h - 96 bg - blue - 500 / 10 rounded - full blur - 3xl"></div>";
        <div className="absolute bottom - 0 right - 0 w - 96 h - 96 bg - purple - 500 / 10 rounded - full blur - 3xl"></div>;
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
        title: "Submission Failed",
        description: "There was an error submitting your request.",
        variant: "destructive"})
    } finally {
      setIsSubmitting(false)
    }
  },

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
              <p className='text-xs text-zion-slate-light'>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
              src='/logos/zion-logo.png'
              alt='Zion logo'
              width={200}
              height={200}
              className='w-full h-auto md:w-40'            />
            <form onSubmit={handleSubmit} className='space-y-4 flex-1'>
              <Input
                value={name}
                onChange={e => setName(e.target.value)}
                className='bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white'                required
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
                )}
              </p>
              <Input
<<<<<<< HEAD
                type='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                className='bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white'                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white"
                required
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                )}
              </p>
              <Input



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
                )}
              </p>
              <Input
                value={phone}
                onChange={e => setPhone(e.target.value)}
                className='bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white'              />
              <p className='text-xs text-zion-slate-light'>
                {t(
                  'onsite_form.phone_helper'
                  'Include a direct line for urgent updates.'
                )}
              </p>
              <Input
                value={company}
                onChange={e => setCompany(e.target.value)}
                className='bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white'              />
              <p className='text-xs text-zion-slate-light'>
                {t('onsite_form.company_helper', 'Who do you represent?')}
              </p>
              <Input
                value={location}
                onChange={e => setLocation(e.target.value)}
                className='bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white'                required
              />
              <p className='text-xs text-zion-slate-light'>
                {t(
                  'onsite_form.location_helper'
                  'Where do you need on-site support?'
                )}
              </p>
              <Textarea
                value={details}
                onChange={e => setDetails(e.target.value)}
                className='bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white min-h-[80px]'              />
              <p className='text-xs text-zion-slate-light'>
                {t(
                  'onsite_form.details_helper'
                  'Share any important context for our technicians.'
                )}
              </p>
              <Button
                type='submit'
                disabled={isSubmitting}
                className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-3 px-6 transition-transform hover:scale-105'              >
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
              <p className="text-xs text-zion-slate-light">{t('onsite_form.name_helperEnter the main contact for this request.')}</p>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white"
                required
              />
              <p className="text-xs text-zion-slate-light">{t('onsite_form.email_helper', "We'll confirm your request here.")}</p>
              <Input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white"
              />
              <p className="text-xs text-zion-slate-light">{t('onsite_form.phone_helperInclude a direct line for urgent updates.')}</p>
              <Input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white"
              />
              <p className="text-xs text-zion-slate-light">{t('onsite_form.company_helperWho do you represent?')}</p>
              <Input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white"
                required
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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



<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              />
              <p className="text-xs text-zion-slate-light">{t('onsite_form.location_helperWhere do you need on-site support?')}</p>
              <Textarea
                value={details}
<<<<<<< HEAD
<<<<<<< HEAD
              <p className="text-xs text-zion-slate-light">{t('onsite_form.location_helperWhere do you need on-site support?')}</p>
              <Textarea
                value={details}
                onChange={e => setDetails(e.target.value)}
                className='bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white min-h-[80px]'              />
              <p className='text-xs text-zion-slate-light'>
                {t(
                  'onsite_form.details_helper',
                  'Share any important context for our technicians.'
                )}
              </p>
              <Button
                type='submit'
                disabled={isSubmitting}
                className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-3 px-6 transition-transform hover:scale-105'              >
                onChange={(e) => setDetails(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white min-h-[80px]"
              />
              <p className="text-xs text-zion-slate-light">{t('onsite_form.details_helperShare any important context for our technicians.')}</p>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-3 px-6 transition-transform hover:scale-105"
              >
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                {isSubmitting && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                Request Service
              </Button>
            </form>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <p className='text-xs text-center text-zion-slate-light mt-3'>
            {t(
              'onsite_form.privacy_notice'
              'Rest assured, your personal information stays private. We use it only to coordinate service and never share details outside our secure scheduling system with anyone.'
            )}
          <p className="text-xs text-center text-zion-slate-light mt-3">
            {t('onsite_form.privacy_noticeRest assured, your personal information stays private. We use it only to coordinate service and never share details outside our secure scheduling system with anyone.')}
<<<<<<< HEAD
          <p className="text-xs text-center text-zion-slate-light mt-3">
            {t('onsite_form.privacy_noticeRest assured, your personal information stays private. We use it only to coordinate service and never share details outside our secure scheduling system with anyone.')}
=======


          <p className="text-xs text-center text-zion-slate-light mt-3">
            {t('onsite_form.privacy_noticeRest assured, your personal information stays private. We use it only to coordinate service and never share details outside our secure scheduling system with anyone.')}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </p>
        </div>
      </div>
    </section>
  )
<<<<<<< HEAD
<<<<<<< HEAD
}finally {
  setIsSubmitting (false)
}catch (err: any) {
  logErrorToProduction (err)
toast ({
}finally {
  setIsSubmitting (false)
}finally {;
  setIsSubmitting (false) ;
=======

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

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}catch (err: any) {
  logErrorToProduction (err);
toast ({
}finally {


}finally {;
  setIsSubmitting (false) ;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
}
}
;
;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

;

import React, { useState } from "react",;
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
        title: "Missing Information",;
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
          title: "Request received",;
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
        title: "Submission Failed",;
        description: "There was an error submitting your request.";
        variant: "destructive"});
    } finally {;
      setIsSubmitting(false);
    }
  };
  return (;
    <section;
      className="py-16 md:py-24 border-b border-zion-purple/20 bg-[radial-gradient(#0f172a,_#020617)]";
    >;
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">;
        <div className="md:h-full md:flex md:flex-col md:items-center md:justify-center">;
          <GradientHeading className="mb-6 text-4xl md:text-5xl text-center">;
            24x7 Global IT Onsite Services;
          </GradientHeading>;
          <p className="text-lg text-zion-slate-light mb-8 max-w-md text-center">;
            Worldwide coverage and rapid dispatch of certified technicians.;
          </p>;
        </div>;
        <div className="bg-zion-blue-light p-6 rounded-lg shadow-lg w-full max-w-md md:ml-auto">;
          <div className="flex flex-col md:flex-row items-center gap-4">;
            <Image;
              src="/logos/zion-logo.png";
              alt="Zion logo";
              width={200}
              height={200}
              className="w-full h-auto md:w-40";
            />;
            <form onSubmit={handleSubmit} className="space-y-4 flex-1">;
              <Input;
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white";
                required;
              />;
              <p className="text-xs text-zion-slate-light">{t('onsite_form.name_helperEnter the main contact for this request.')}</p>;
              <Input;
                type="email";
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white";
                required;
              />;
              <p className="text-xs text-zion-slate-light">{t('onsite_form.email_helper', "We'll confirm your request here.")}</p>;
              <Input;
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white";
              />;
              <p className="text-xs text-zion-slate-light">{t('onsite_form.phone_helperInclude a direct line for urgent updates.')}</p>;
              <Input;
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white";
              />;
              <p className="text-xs text-zion-slate-light">{t('onsite_form.company_helperWho do you represent?')}</p>;
              <Input;
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white";
                required;
              />;
              <p className="text-xs text-zion-slate-light">{t('onsite_form.location_helperWhere do you need on-site support?')}</p>;
              <Textarea;
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white min-h-[80px]";
              />;
              <p className="text-xs text-zion-slate-light">{t('onsite_form.details_helperShare any important context for our technicians.')}</p>;
              <Button;
                type="submit";
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-3 px-6 transition-transform hover:scale-105";
              >;
                {isSubmitting && (;
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
                )}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                Request Service;
              </Button>;
            </form>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD
          <p className="text-xs text-center text-zion-slate-light mt-3">;
            {t('onsite_form.privacy_noticeRest assured, your personal information stays private. We use it only to coordinate service and never share details outside our secure scheduling system with anyone.')}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <p className='text-xs text-center text-zion-slate-light mt-3'>;
            {t(;
              'onsite_form && onsite_form.privacy_notice',;
              'Rest assured, your personal information stays private. We use it only to coordinate service and never share details outside our secure scheduling system with anyone.';
            )}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </p>;
        </div>;
      </div>;
    </section>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
;


}
;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

}catch (err: any) {;
  logErrorToProduction (err);
toast ({;

}finally {;
  setIsSubmitting (false) ;
};";
py-16 md:py-24 border-b border-zion-purple/20 bg-[radial-gradient (#0f172a, #020617) ]" > <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center" > <div className="md:h-full md:flex md:flex-col md:items-center md:justify-center" > <GradientHeading className="mb-6 text-4xl md:text-5xl text-center" > 24x7 Global IT Onsite Services </GradientHeading> <p className="text-lg text-zion-slate-light mb-8 max-w-md text-center" > Worldwide coverage and rapid dispatch of certified technicians. </p> </div> <div className="bg-zion-blue-light p-6 rounded-lg shadow-lg w-full max-w-md md:ml-auto" > <div className="flex flex-col md:flex-row items-center gap-4" > <Image<Input type="email" value= {
  email 
}onChange= {
  (e) => setEmail (e && e.target.value) ";
}className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white" required /> <p className="text-xs text-zion-slate-light" > {";
  t ('onsite form && form.email helper', "We'll confirm your request here.") ;
}</p> <Inputvalue= {
  phone 
}onChange= {
  (e) => setPhone (e && e.target.value) ";
}className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white" /> <Inputvalue= {
  company 
}onChange= {
  (e) => setCompany (e && e.target.value) ";
}className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white" /> <Inputvalue= {
  location 
}onChange= {
  (e) => setLocation (e && e.target.value) ";
}className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white" required /> <Textareavalue= {
  details 
}onChange= {
  (e) => setDetails (e && e.target.value) ";
}className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white min-h-[80px]" /> <Buttontype="submit" disabled= {
  isSubmitting "
}className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-3 px-6 transition-transform hover:scale-105"> {";
  isSubmitting && (<Loader2 className="mr-2 h-4 w-4 animate-spin" /> ;
}Request Service </Button> </form> </div> ;
}'";
}
<<<<<<< HEAD
}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


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
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
