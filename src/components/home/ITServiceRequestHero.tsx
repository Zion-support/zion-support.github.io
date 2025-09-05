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
export function ITServiceRequestHero() {const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [details, setDetails] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast} = useToast();
  const {t} = useTranslation();

  const [name, setName] = useState("&quot;);
  const [email, setEmail] = useState("&quot;);
  const [phone, setPhone] = useState("&quot;);
  const [company, setCompany] = useState("&quot;);
  const [location, setLocation] = useState("&quot;);
  const [details, setDetails] = useState("&quot;);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t } = useTranslation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(),

    if (!name || !email || !location) {
      toast({
        title: "Missing Information",
        description: "Name, email and location are required.",
        variant: "destructive"}),
      return      return
    }

    setIsSubmitting(true),
    try {
      const res = await axios.post(&quot;/api/onsite-request&quot;, {
        name,
        email,
        phone,
        company,
        location,
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
        setDetails("")      }
    } catch (err: any) {
      logErrorToProduction(err),
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request.",
        variant: "destructive"})    } finally {
      setIsSubmitting(false)
    }
  },
    setIsSubmitting(true);
    try {const res = await axios.post("/api/onsite-request", _{
        name, email, phone, company, location, details});

      if (res.status === 200) {toast({
          title: "Request received", description: "We've received your request. Our team will reach out shortly."});
        setName("");
        setEmail("");
        setPhone("");
        setCompany("");
        setLocation("");
        setDetails("")
      }
    } catch (err: unknown) {logErrorToProduction(err);
      toast({
        title: "Submission Failed", description: "There was an error submitting your request.", variant: "destructive"})
    } finally {setIsSubmitting(false)}
  };

  return (
    <section,
className=&quot;py-16 md:py-24 border-b border-zion-purple/20 bg-[radial-gradient(#0f172a,_#020617)]&quot;
    >
      <div className=&quot;container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center&quot;>
        <div className=&quot;md:h-full md:flex md:flex-col md:items-center md:justify-center&quot;>
          <GradientHeading className=&quot;mb-6 text-4xl md:text-5xl text-center&quot;>
            24x7 Global IT Onsite Services
          </GradientHeading>
          <p className=&quot;text-lg text-zion-slate-light mb-8 max-w-md text-center&quot;>
            Worldwide coverage and rapid dispatch of certified technicians.
          </p>
        </div>
        <div className=&quot;bg-zion-blue-light p-6 rounded-lg shadow-lg w-full max-w-md md:ml-auto&quot;>
          <div className=&quot;flex flex-col md:flex-row items-center gap-4&quot;>
            <Image,
src=&quot;/logos/zion-logo.png&quot;
              alt=&quot;Zion logo&quot;
              width={200}
              height={200}
              className=&quot;w-full h-auto md:w-40&quot;
            />
            <form onSubmit={handleSubmit} className=&quot;space-y-4 flex-1&quot;>
              <Input,
value={name}
                onChange={(e) => setName(e.target.value)}
                className=&quot;bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white&quot;
                required
              />
              <p className="text-xs text-zion-slate-light">{t('onsiteform.namehelperEnter the main contact for this request.')}</p>              <Input,
type=&quot;email&quot;
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=&quot;bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white&quot;
                required
              />
              <p className=&quot;text-xs text-zion-slate-light&quot;>{t('onsiteform.emailhelper', &quot;We'll confirm your request here.&quot;)}</p>
              <Input,
value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className=&quot;bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white&quot;
              />
              <p className="text-xs text-zion-slate-light">{t('onsiteform.phonehelperInclude a direct line for urgent updates.')}</p>              <Input,
value={company}
                onChange={(e) => setCompany(e.target.value)}
                className=&quot;bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white&quot;
              />
              <p className="text-xs text-zion-slate-light">{t('onsiteform.companyhelperWho do you represent?')}</p>              <Input,
value={location}
                onChange={(e) => setLocation(e.target.value)}
                className=&quot;bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white&quot;
                required
              />
              <p className="text-xs text-zion-slate-light">{t('onsiteform.locationhelperWhere do you need on-site support?')}</p>              <Textarea,
value={details}
                onChange={(e) => setDetails(e.target.value)}
                className=&quot;bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white min-h-[80px]&quot;
              />
              <p className="text-xs text-zion-slate-light">{t('onsiteform.detailshelperShare any important context for our technicians.')}</p>              <Button,
type=&quot;submit&quot;
                disabled={isSubmitting}
                className=&quot;w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-3 px-6 transition-transform hover:scale-105&quot;
              >
                {isSubmitting && (
                  <Loader2 className=&quot;mr-2 h-4 w-4 animate-spin&quot; />
              src="/logos/zion-logo.png"
              alt="Zion logo"
              width={200}
              height={200}
              className="w-full h-auto md:w-40"
            />
            <form onSubmit={handleSubmit} className="space-y-4 flex-1">
              <Input,
value={name}
                onChange={_(e) => setName(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white"
                required
              />
              <p className="text-xs text-zion-slate-light">{t('onsiteform.namehelper', _'Enter the main contact for this request.')}</p>
              <Input,
type="email"
                value={email}
                onChange={_(e) => setEmail(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white"
                required
              />
              <p className="text-xs text-zion-slate-light">{t('onsiteform.emailhelper', _"We'll confirm your request here.")}</p>
              <Input,
value={phone}
                onChange={_(e) => setPhone(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white"
              />
              <p className="text-xs text-zion-slate-light">{t('onsiteform.phonehelper', _'Include a direct line for urgent updates.')}</p>
              <Input,
value={company}
                onChange={_(e) => setCompany(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white"
              />
              <p className="text-xs text-zion-slate-light">{t('onsiteform.companyhelper', _'Who do you represent?')}</p>
              <Input,
value={location}
                onChange={_(e) => setLocation(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white"
                required
              />
              <p className="text-xs text-zion-slate-light">{t('onsiteform.locationhelper', _'Where do you need on-site support?')}</p>
              <Textarea,
value={details}
                onChange={_(e) => setDetails(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white min-h-[80px]"
              />
              <p className="text-xs text-zion-slate-light">{t('onsiteform.detailshelper', _'Share any important context for our technicians.')}</p>
              <Button,
type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-3 px-6 transition-transform hover:scale-105"
              >
                {isSubmitting && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Request Service
              </Button>
            </form>
          </div>
          <p className="text-xs text-center text-zion-slate-light mt-3">
            {t('onsiteform.privacynoticeRest assured, your personal information stays private. We use it only to coordinate service and never share details outside our secure scheduling system with anyone.')}            {t('onsiteform.privacynotice', _'Rest assured, your personal information stays private. We use it only to coordinate service and never share details outside our secure scheduling system with anyone.')}
          </p>
        </div>
      </div>
    </section>
  )
}
