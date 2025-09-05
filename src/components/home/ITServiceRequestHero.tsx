<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import React, { useState } from &quot;react&quot;;
import Image from &quot;next/image&quot;;
import { GradientHeading } from &quot;@/components/GradientHeading&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
import { useToast } from &quot;@/hooks/use-toast&quot;;
import axios from &quot;axios&quot;;
import { Loader2 } from 'lucide-react'
import { useTranslation } from &quot;react-i18next&quot;;
import {logErrorToProduction} from '@/utils/productionLogger';
=======
import React, {_useState} from "react";
import Image from "next/image";
import axios from "axios";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export function ITServiceRequestHero() {_const [name, _setName] = useState("");
  const [email, _setEmail] = useState("");
  const [phone, _setPhone] = useState("");
  const [company, _setCompany] = useState("");
  const [location, _setLocation] = useState("");
  const [details, _setDetails] = useState("");
  const [isSubmitting, _setIsSubmitting] = useState(false);
  const { toast} = useToast();
  const {_t} = useTranslation();

<<<<<<< HEAD
  const [name, setName] = useState("&quot;);
  const [email, setEmail] = useState("&quot;);
  const [phone, setPhone] = useState("&quot;);
  const [company, setCompany] = useState("&quot;);
  const [location, setLocation] = useState("&quot;);
  const [details, setDetails] = useState("&quot;);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t } = useTranslation();
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(),

    if (!name || !email || !location) {
      toast({
<<<<<<< HEAD
        title: "Missing Information",
        description: "Name, email and location are required.",
        variant: "destructive"}),
      return
=======
        title: &quot;Missing Information&quot;,
        description: &quot;Name, email and location are required.&quot;,
        variant: &quot;destructive&quot;});
=======
  const _handleSubmit = async (_e: React.FormEvent) => {_e.preventDefault();

    if (!name || !email || !location) {
      toast({
        title: "Missing Information", _description: "Name, _email and location are required.", _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }

<<<<<<< HEAD
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
<<<<<<< HEAD
          title: "Request received",
          description: "We've received your request. Our team will reach out shortly."}),
        setName(""),
        setEmail(""),
        setPhone(""),
        setCompany(""),
        setLocation(""),
        setDetails("")
=======
          title: &quot;Request received&quot;,
          description: &quot;We've received your request. Our team will reach out shortly.&quot;});
        setName("&quot;);
        setEmail("&quot;);
        setPhone("&quot;);
        setCompany("&quot;);
        setLocation("&quot;);
        setDetails("&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }
    } catch (err: any) {
      logErrorToProduction(err),
      toast({
<<<<<<< HEAD
        title: "Submission Failed",
        description: "There was an error submitting your request.",
        variant: "destructive"})
=======
        title: &quot;Submission Failed&quot;,
        description: &quot;There was an error submitting your request.&quot;,
        variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsSubmitting(false)
    }
  },
=======
    setIsSubmitting(true);
    try {_const _res = await axios.post("/api/onsite-request", _{
        name, _email, _phone, _company, _location, _details});

      if (res.status === 200) {_toast({
          title: "Request received", _description: "We've received your request. Our team will reach out shortly."});
        setName("");
        setEmail("");
        setPhone("");
        setCompany("");
        setLocation("");
        setDetails("");
      }
    } catch (err: unknown) {_logErrorToProduction(err);
      toast({
        title: "Submission Failed", _description: "There was an error submitting your request.", _variant: "destructive"});
    } finally {_setIsSubmitting(false);}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <section
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
            <Image
<<<<<<< HEAD
              src=&quot;/logos/zion-logo.png&quot;
              alt=&quot;Zion logo&quot;
              width={200}
              height={200}
              className=&quot;w-full h-auto md:w-40&quot;
            />
            <form onSubmit={handleSubmit} className=&quot;space-y-4 flex-1&quot;>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className=&quot;bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white&quot;
                required
              />
<<<<<<< HEAD
              <p className="text-xs text-zion-slate-light">{t('onsite_form.name_helperEnter the main contact for this request.')}</p>
=======
              <p className=&quot;text-xs text-zion-slate-light&quot;>{t('onsite_form.name_helper', 'Enter the main contact for this request.')}</p>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
              <Input
                type=&quot;email&quot;
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=&quot;bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white&quot;
                required
              />
              <p className=&quot;text-xs text-zion-slate-light&quot;>{t('onsite_form.email_helper', &quot;We'll confirm your request here.&quot;)}</p>
              <Input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className=&quot;bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white&quot;
              />
<<<<<<< HEAD
              <p className="text-xs text-zion-slate-light">{t('onsite_form.phone_helperInclude a direct line for urgent updates.')}</p>
=======
              <p className=&quot;text-xs text-zion-slate-light&quot;>{t('onsite_form.phone_helper', 'Include a direct line for urgent updates.')}</p>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
              <Input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className=&quot;bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white&quot;
              />
<<<<<<< HEAD
              <p className="text-xs text-zion-slate-light">{t('onsite_form.company_helperWho do you represent?')}</p>
=======
              <p className=&quot;text-xs text-zion-slate-light&quot;>{t('onsite_form.company_helper', 'Who do you represent?')}</p>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
              <Input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className=&quot;bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white&quot;
                required
              />
<<<<<<< HEAD
              <p className="text-xs text-zion-slate-light">{t('onsite_form.location_helperWhere do you need on-site support?')}</p>
=======
              <p className=&quot;text-xs text-zion-slate-light&quot;>{t('onsite_form.location_helper', 'Where do you need on-site support?')}</p>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
              <Textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className=&quot;bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white min-h-[80px]&quot;
              />
<<<<<<< HEAD
              <p className="text-xs text-zion-slate-light">{t('onsite_form.details_helperShare any important context for our technicians.')}</p>
=======
              <p className=&quot;text-xs text-zion-slate-light&quot;>{t('onsite_form.details_helper', 'Share any important context for our technicians.')}</p>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
              <Button
                type=&quot;submit&quot;
                disabled={isSubmitting}
                className=&quot;w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-3 px-6 transition-transform hover:scale-105&quot;
              >
                {isSubmitting && (
                  <Loader2 className=&quot;mr-2 h-4 w-4 animate-spin&quot; />
=======
              src="/logos/zion-logo.png"
              alt="Zion logo"
              width={_200}
              height={_200}
              className="w-full h-auto md:w-40"
            />
            <form onSubmit={_handleSubmit} className="space-y-4 flex-1">
              <Input
                value={_name}
                onChange={_(_e) => setName(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white"
                required
              />
              <p className="text-xs text-zion-slate-light">{_t('onsite_form.name_helper', _'Enter the main contact for this request.')}</p>
              <Input
                type="email"
                value={_email}
                onChange={_(_e) => setEmail(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white"
                required
              />
              <p className="text-xs text-zion-slate-light">{_t('onsite_form.email_helper', _"We'll confirm your request here.")}</p>
              <Input
                value={_phone}
                onChange={_(_e) => setPhone(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white"
              />
              <p className="text-xs text-zion-slate-light">{_t('onsite_form.phone_helper', _'Include a direct line for urgent updates.')}</p>
              <Input
                value={_company}
                onChange={_(_e) => setCompany(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white"
              />
              <p className="text-xs text-zion-slate-light">{_t('onsite_form.company_helper', _'Who do you represent?')}</p>
              <Input
                value={_location}
                onChange={_(_e) => setLocation(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white"
                required
              />
              <p className="text-xs text-zion-slate-light">{_t('onsite_form.location_helper', _'Where do you need on-site support?')}</p>
              <Textarea
                value={_details}
                onChange={_(_e) => setDetails(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white min-h-[80px]"
              />
              <p className="text-xs text-zion-slate-light">{_t('onsite_form.details_helper', _'Share any important context for our technicians.')}</p>
              <Button
                type="submit"
                disabled={_isSubmitting}
                className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-3 px-6 transition-transform hover:scale-105"
              >
                {_isSubmitting && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                )}
                Request Service
              </Button>
            </form>
          </div>
<<<<<<< HEAD
          <p className="text-xs text-center text-zion-slate-light mt-3">
<<<<<<< HEAD
            {t('onsite_form.privacy_noticeRest assured, your personal information stays private. We use it only to coordinate service and never share details outside our secure scheduling system with anyone.')}
=======
          <p className=&quot;text-xs text-center text-zion-slate-light mt-3&quot;>
            {t('onsite_form.privacy_notice', 'Rest assured, your personal information stays private. We use it only to coordinate service and never share details outside our secure scheduling system with anyone.')}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
            {_t('onsite_form.privacy_notice', _'Rest assured, _your personal information stays private. We use it only to coordinate service and never share details outside our secure scheduling system with anyone.')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </p>
        </div>
      </div>
    </section>
  )
}
