<<<<<<< HEAD
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
    setIsSubmitting (true);
    setIsSubmitting(true),



    try {
      const res = await axios.post ('/api / onsite - request', {
        name,
        email,
        phone,
        company,
        location,

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

      }
    } catch (err: any) {
      logErrorToProduction(err)
      toast({

        title: 'Submission Failed'
        description: 'There was an error submitting your request.'
        variant: 'destructive'
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












=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const ITServiceRequestHero: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">ITServiceRequestHero</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default ITServiceRequestHero;
