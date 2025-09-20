<<<<<<< HEAD
  const containerVariants = {
  hidden: { opacity: 0,
  y: 20

},
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      };
    };
  };

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
              <p className="text-xs text-zion-slate-light">{t('onsite_form.name_helper', 'Enter the main contact for this request.')}</p>
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
              <p className="text-xs text-zion-slate-light">{t('onsite_form.phone_helper', 'Include a direct line for urgent updates.')}</p>
              <Input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white"
              />
              <p className="text-xs text-zion-slate-light">{t('onsite_form.company_helper', 'Who do you represent?')}</p>
              <Input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white"
                required
              />
              <p className="text-xs text-zion-slate-light">{t('onsite_form.location_helper', 'Where do you need on-site support?')}</p>
              <Textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white min-h-[80px]"
              />
              <p className="text-xs text-zion-slate-light">{t('onsite_form.details_helper', 'Share any important context for our technicians.')}</p>
              <Button
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
            {t('onsite_form.privacy_notice', 'Rest assured, your personal information stays private. We use it only to coordinate service and never share details outside our secure scheduling system with anyone.')}
          </p>
        </div>
      </div>

      <motion.div"
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
"
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}"
          <motion.div variants={itemVariants} className="text-white">"
            <div className="flex items-center gap-3 mb-6">"
              <div className="p-2 bg-zion-cyan/20 rounded-lg">"
                <Zap className="w-6 h-6 text-zion-cyan"  />
              </div>"              <span className="text-zion-cyan font-semibold text-sm uppercase tracking-wider">
                Global IT Services
              </span>
            </div>
"
            <GradientHeading className="mb-6 text-4xl md:text-5xl lg:text-6xl leading-tight">
              24/7 Global IT Onsite Services
            </GradientHeading>
"
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl leading-relaxed">
              Get professional IT technicians anywhere in the world, anytime you need them.'
              From emergency repairs to scheduled maintenance, we're there when you need us most.</p>
"
            <div className="space-y-4 mb-8">"
              <div className="flex items-center gap-3">"
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">"
                  <span className="text-white text-sm">✓</span>
                </div>"
                <span className="text-gray-200">24/7 Technical Support</span>
              </div>"
              <div className="flex items-center gap-3">"
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">"
                  <span className="text-white text-sm">✓</span>
                </div>"
                <span className="text-gray-200">Certified IT Professionals</span>
              </div>"
              <div className="flex items-center gap-3">"
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">"
                  <span className="text-white text-sm">✓</span>
                </div>"
                <span className="text-gray-200">Custom Solutions for Your Business</span>
              </div>
            </div>
"
            <div className="flex flex-col sm:flex-row gap-4">
              <Button'
                onClick={() => document.getElementById('service-form')?.scrollIntoView({ behavior: 'smooth' })}"
                className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-dark hover:to-zion-blue-dark text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"

                Request Service Now"
                <MapPin className="w-5 h-5 ml-2"  />              </Button>
              <Button"
                variant="outline"
                className="border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan/10 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"

                Learn More
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial = {

  { opacity: 0,
  x: 30

}}
            whileInView = {

  { opacity: 1,
  x: 0

}}
            viewport={{ once: true }}
            transition = {

  { duration: 0.8,
  delay: 0.2

}}"
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8"
          >"
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center">
=======
import React, { useState } from "react";
import Image from "next/image";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import { Loader2 } from 'lucide-react'
import { useTranslation } from "react-i18next";
import {logErrorToProduction} from '@/utils/productionLogger';

  const [location, setLocation] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async e: React.FormEvent {;    e.preventDefault();
    if(location.trim()) {

      setIsSubmitting(true);
      // Simulate API call
      setTimeout(: unknown {
        setIsSubmitting(false);
        router(`/it-onsite-services?location = ${encodeURIComponent(location)}`)}, 1000)}}}}}}}}}};

            "
            <div className="space-y-6">"
              <div className="flex items-center gap-4">"
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">"
                  <span className="text-white text-xl">📞</span>
                </div>
                <div>"
                  <p className="text-gray-300 text-sm">Phone</p>"
                  <p className="text-white font-semibold">+1 302 464 0950</p>
                </div>
              </div>
              "
              <div className="flex items-center gap-4">"
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">"
                  <span className="text-white text-xl">✉️</span>
                </div>
                <div>"
                  <p className="text-gray-300 text-sm">Email</p>"
                  <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
                </div>
              </div>
              "
              <div className="flex items-center gap-4">"
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">"
                  <span className="text-white text-xl">📍</span>
                </div>
                <div>"
                  <p className="text-gray-300 text-sm">Address</p>"
                  <p className="text-white font-semibold text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              "
              <div className="flex items-center gap-4">"
                <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center">"
                  <span className="text-white text-xl">🌐</span>
                </div>
                <div>"
                  <p className="text-gray-300 text-sm">Website</p>"
                  <p className="text-white font-semibold">ziontechgroup.com</p>
                </div>
              </div>
            </div>
"
            <div className="mt-8 text-center">"
              <p className="text-gray-400 text-sm mb-4">
                Available 24/7 for emergency support
              </p>"
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-600/20 border border-green-500/30 rounded-full">"
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>"
                <span className="text-green-400 text-sm font-semibold">Online Now</span>
              </div>
            </div>;
          </motion.div>;
        </div>;
      </div>;
    </section>;
  )}
'"`
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-0cd1
