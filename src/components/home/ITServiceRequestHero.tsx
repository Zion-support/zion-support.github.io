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
=======
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
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

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5




>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
                type='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                className='bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white'                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white"
                required
                {isSubmitting && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}

                Request Service
              </Button>
            </form>
          </div>
          <p className='text-xs text-center text-zion-slate-light mt-3'>
            {t(
              'onsite_form.privacy_notice'
              'Rest assured, your personal information stays private. We use it only to coordinate service and never share details outside our secure scheduling system with anyone.'
            )}
          <p className="text-xs text-center text-zion-slate-light mt-3">
            {t('onsite_form.privacy_noticeRest assured, your personal information stays private. We use it only to coordinate service and never share details outside our secure scheduling system with anyone.')}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
          </p>
        </div>
      </div>
    </section>
  )

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
