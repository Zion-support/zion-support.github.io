<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import React from "react";
import Head from "next/head";
=======
import React from "react";""
import Head from "next/head";"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import {
  // TODO: Implement
}
  Phone,
  Mail,
  MapPin,
  Check,
  ArrowRight,
  Shield,
<<<<<<< HEAD
  Star,;
<<<<<<< HEAD

=======
    s.link.endsWith("/quantum-internet-security-platform")
    s.link.endsWith("/quantum-internet-security-platform"),;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
} from "lucide-react";
import UltraAdvancedFuturisticBackground from "../components/ui/UltraAdvancedFuturisticBackground";
import Button from "../components/ui/Button";
import { enhancedRealMicroSaasServices } from "../data/enhanced-real-micro-saas-services";
=======
  Star,;"
} from "lucide-react";""
import UltraAdvancedFuturisticBackground from "../components/ui/UltraAdvancedFuturisticBackground";""
import Button from "../components/ui/Button";""
import { enhancedRealMicroSaasServices } from "../data/enhanced-real-micro-saas-services";"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export default function QuantumInternetSecurityPage() {
  const service = enhancedRealMicroSaasServices.find((s) =>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  );
  if (!service) return null;

  return (
    <UltraAdvancedFuturisticBackground>

      <Head>

        <title>{service.name} - Zion Tech Group</title>"
        <meta name="description" content={service.description} />"
</meta>
        <link;"
          rel="canonical"""
          href="https://ziontechgroup.com/quantum-internet-security-platform""
        />
</link>
      "
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">"
</div>"
        <div className="max-w-6xl mx-auto">"
          <div className="text-center mb-10">"
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-green-400 to-cyan-400 bg-clip-text text-transparent flex items-center justify-center gap-3">"
</h1>"
              <Shield className="w-10 h-10" />"

            <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">"
</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">"
            <div className="lg:col-span-2 bg-black/30 rounded-2xl border border-emerald-500/30 p-6">"
              <h2 className="text-2xl font-semibold mb-4">"
</h2>
              </h2>"
              <p className="text-slate-300 mb-6">{service.description}</p>""
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">"
</ul>
                  <li;
                    key={i}"
                    className="flex items-start space-x-3 text-slate-200""
                  >
</li>"
                    <Check className="w-5 h-5 text-emerald-400 mt-0.5" />"

                    <span>{feat}</span>
                  </li>
            <div className="bg-black/30 rounded-2xl border border-emerald-500/30 p-6 h-fit">"
              <div className="flex items-end justify-between mb-3">"
</div>
                <div>
<<<<<<< HEAD
                  <div className="text-3xl font-bold text-white">
                    {service.price}
                    <span className="text-slate-400 text-base">
                      {service.period}
                    </span>
                  </div>
                  <div className="text-slate-400">
<<<<<<< HEAD
                    {service.trialDays}-day free trial • Setup:{" "}
=======
                    {service.trialDays}-day free trial  Setup:{" "}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                    {service.setupTime}
                  </div>
                </div>
                <div className="flex items-center text-yellow-400">
                  <Star className="w-4 h-4 mr-1" />
                  {service.rating.toFixed(1)}
                </div>
              </div>
              <Button
                href="/contact"
                variant="quantum"
                size="lg"
                className="w-full"
              >
                Request a Security Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-cyan-400" />
=======
                  <div className="text-3xl font-bold text-white">"
                    <span className="text-slate-400 text-base">"
</span>
                  <div className="text-slate-400">"
                <div className="flex items-center text-yellow-400">"
                  <Star className="w-4 h-4 mr-1" />"

              <Button;"
                href="/contact"""
                variant="quantum"""
                size="lg"""
                className="w-full""
                <ArrowRight className="w-5 h-5 ml-2" />"

              <div className="mt-6 space-y-3 text-sm text-slate-300">"
                <div className="flex items-center space-x-2">"
                  <Phone className="w-4 h-4 text-cyan-400" />"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  <span>{service.contactInfo.mobile}</span>
                  <Mail className="w-4 h-4 text-purple-400" />"

                  <span>{service.contactInfo.email}</span>
<<<<<<< HEAD
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-green-400" />
                  <span className="text-xs">{service.contactInfo.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/temp_conflicts/pages/mdm-mobile-device-management.tsx
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
}
;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                  <MapPin className="w-4 h-4 text-green-400" />"
                  <span className="text-xs">{service.contactInfo.address}</span>"
    )"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
