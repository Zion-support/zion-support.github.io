<<<<<<< HEAD
import React from 'react';
export function TrustIndicatorsCompact({ className }) {
import { Shield, Lock, Award, Users, Globe, CheckCircle, Star, Zap export function TrustIndicators({ className, showStats = true, showCertifications = true }) {
    const indicators = [{

            icon: Shield,
            title: "Enterprise Security","
            description: "SOC 2 Type II certified with end-to-end encryption","
            color: "text-zion-cyan"
        },
        {

            icon: Lock,"
            title: "Data Protection","
            description: "GDPR & CCPA compliant with zero-knowledge architecture","
            color: "text-zion-purple"
        },
        {

            icon: Award,"
            title: "Industry Leader","
            description: "Recognized by Gartner & Forrester as market leader","
            color: "text-zion-cyan"
        },
        {

            icon: Users,"
            title: "Verified Community","
            description: "10,000+ verified professionals and companies","
            color: "text-zion-purple"

    ];
    const certifications = ["
        { name: "SOC 2 Type II", status: "Certified", year: "2024" },"
        { name: "ISO 27001", status: "Certified", year: "2024" },"
        { name: "GDPR", status: "Compliant", year: "2024" },"
        { name: "CCPA", status: "Compliant", year: "2024" }
    ];
    const stats = ["
        { label: "Active Users", value: "50K+", icon: Users },"
        { label: "Countries", value: "100+", icon: Globe },"
        { label: "Projects", value: "$10M+", icon: Award },"
        { label: "Uptime", value: "99.9%", icon: Zap }
    ];
    return (<section className={`py-16 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark ${className || ''}`}>"
      <div className="container mx-auto px-4">
        {/* Header */}"
        <div className="text-center mb-16">"
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>"
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Zion Tech Group maintains the highest standards of security, compliance, and reliability
            to ensure your business operations remain secure and uninterrupted.</p>
        </div>

        {/* Trust Indicators Grid */}"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">"
          {indicators.map((indicator, index) => (<div key={index} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-zion-cyan/30 transition-all duration-300 hover:transform hover:scale-105">`
              <div className={`mx-auto w-16 h-16 bg-zion-cyan/10 rounded-full flex items-center justify-center mb-4`}>`
                <indicator.icon className={`w-8 h-8 ${indicator.color}`}/>
              </div>"
              <h3 className="text-lg font-semibold text-white mb-2">
                {indicator.title}
              </h3>"
              <p className="text-zion-slate-light text-sm leading-relaxed">
                {indicator.description}
              </p>
            </div>) ) }
        </div>

        {/* Stats Section */}"
        {showStats && (<div className="mb-16">"
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">"
              {stats.map((stat, index) => (<div key={index} className="text-center">"
                  <div className="flex justify-center mb-3">"
                    <stat.icon className="w-8 h-8 text-zion-cyan"/>
                  </div>"
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>"
                  <div className="text-zion-slate-light text-sm">
                    {stat.label}
                  </div>
                </div>) ) }
            </div>
          </div>) }

        {/* Certifications Section */}"
        {showCertifications && (<div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">"
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Certifications & Compliance
            </h3>"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">"
              {certifications.map((cert, index) => (<div key={index} className="text-center p-4 bg-white/5 rounded-lg border border-white/10">"
                  <div className="w-12 h-12 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-3">"
                    <CheckCircle className="w-6 h-6 text-zion-cyan"/>
                  </div>"
                  <h4 className="font-semibold text-white mb-1">{cert.name}</h4>"
                  <div className="text-zion-cyan text-sm font-medium mb-1">{cert.status}</div>"
                  <div className="text-zion-slate-light text-xs">{cert.year}</div>
                </div>))}
            </div>
          </div>) }

        {/* Customer Testimonials Preview */}"
        <div className="mt-16 text-center">"
          <div className="flex justify-center items-center gap-2 mb-4">"
            {[...Array(5)].map((_, i) => (<Star key={i} className="w-5 h-5 text-yellow-400 fill-current"/>))}
          </div>"
          <p className="text-zion-slate-light mb-2">'"
            "Zion Tech Group has transformed how we source tech talent.The platform's security and reliability give us complete confidence."
          </p>"
          <p className="text-white font-medium">- Sarah Chen, CTO at TechCorp</p>
        </div>
      </div>
    </section>) }
// Compact version for smaller spaces
export function TrustIndicatorsCompact({ className }) {
'`
    return (<div className={`flex flex-wrap justify-center gap-6 ${className || ''}`}>"
      <div className="flex items-center gap-2 text-zion-cyan text-sm">"
        <Shield className="w-4 h-4"/>
        <span>SOC 2 Certified</span>
      </div>"
      <div className="flex items-center gap-2 text-zion-purple text-sm">"
        <Lock className="w-4 h-4"/>
        <span>GDPR Compliant</span>
      </div>"
      <div className="flex items-center gap-2 text-zion-cyan text-sm">"
        <Users className="w-4 h-4"/>
        <span>10K+ Verified</span>
      </div>"
      <div className="flex items-center gap-2 text-zion-purple text-sm">"
        <Zap className="w-4 h-4"/>
        <span>99.9% Uptime</span>
      </div>
    </div>)}
'"`
=======
import React from "react"
"import { " Shield, Lock, Award, Users, Globe, CheckCircle, Star, Zap    } from "lucide-react";export: function TrustIndicators({" className, showStats = true, showCertifications = true}) { const indicators = []" const certifications = []" const stats = []" return: () <section" className="{"py-16" bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark ${className || "}"}" >" <div className="container mx-auto px-4">" {}" <div className="text-center mb-16">" <h2 className="text-3xl md: text-4xl: font-bold text-white mb-4">" Trusted by Industry Leaders" </h2>" <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">" Zion Tech Group maintains the highest standards of securit,y, compliance, and reliability to ensure your business operations" remain secure and uninterrupted." </p> </div> {}" <div className="grid grid-cols-1 md: grid-cols-2: lg:grid-cols-4: gap-8 mb-16">" {indicators.map((indicato,r, index) => (" <div key={index}" className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover: border-zion-cyan/30: transition-all duration-300 hover:transform: hover:scale-105" >" <div"" className="{"mx-auto:" w-16 h-16 bg-zion-cyan/10 rounded-full flex items-center justify-center mb-4,"}" >"" <indicator.icon className="{"w-8" h-8 ${indicator.color}"} />" </div>" <h3 className="text-lg font-semibold text-white mb-2">" {indicator.title}" </h3>" <p className="text-zion-slate-light text-sm leading-relaxed">" {indicator.description}" </p> ";";";"
"import { " Shield, Lock, Award, Users, Globe, CheckCircle, Star, Zap    } from "lucide-react""export function TrustIndicators({" className, showStats = true, showCertifications = true}) { const indicators = []" const certifications = []" const stats = []" return: () <section" className="{"py-16" bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark ${className || "}"}" >" <div className="container mx-auto px-4">" {}" <div className="text-center mb-16">" <h2 className="text-3xl md: text-4xl: font-bold text-white mb-4">" Trusted by Industry Leaders" </h2>" <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">" Zion Tech Group maintains the highest standards of securit,y, compliance, and reliability to ensure your business operations" remain secure and uninterrupted." </p> </div> {}" <div className="grid grid-cols-1 md: grid-cols-2: lg:grid-cols-4: gap-8 mb-16">" {indicators.map((indicato,r, index) => (" <div key={index}" className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover: border-zion-cyan/30: transition-all duration-300 hover:transform: hover:scale-105" >" <div"" className="{"mx-auto:" w-16 h-16 bg-zion-cyan/10 rounded-full flex items-center justify-center mb-4,"}" >"" <indicator.icon className="{"w-8" h-8 ${indicator.color}"} />" </div>" <h3 className="text-lg font-semibold text-white mb-2">" {indicator.title}" </h3>" <p className="text-zion-slate-light text-sm leading-relaxed">" {indicator.description}" </p> """;";";"
"import { " Shield, Lock, Award, Users, Globe, CheckCircle, Star, Zap    } from "lucide-react";export function TrustIndicators({" className, showStats = true, showCertifications = true}) { const indicators = []" const certifications = []" const stats = []" return () <section" className="{"py-16" bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark ${className || "}"}" >" <div className="container mx-auto px-4">" {}" <div className="text-center mb-16">" <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">" Trusted by Industry Leaders" </h2>" <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">" Zion Tech Group maintains the highest standards of security, compliance, and reliability to ensure your business operations" remain secure and uninterrupted." </p> </div> {}" <div className="grid grid-cols-1 md: grid-cols-2 l,"
    g:grid-cols-4 gap-8 mb-16">" {indicators.map((indicator, index) => (" <div key={index}" className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover: border-zion-cyan/30 transition-all duration-300 hove,
    r:transform hove,">
    r:scale-105" >" <div"" className="{"mx-auto" w-16 h-16 bg-zion-cyan/10 rounded-full flex items-center justify-center mb-4"}" >"" <indicator.icon className="{"w-8" h-8 ${indicator.color}"} />" </div>" <h3 className="text-lg font-semibold text-white mb-2">" {indicator.title}" </h3>" <p className="text-zion-slate-light text-sm leading-relaxed">" {indicator.description}" </p> """
"import { " Shield, Lock, Award, Users, Globe, CheckCircle, Star, Zap    } from "lucide-react""export function TrustIndicators({" className, showStats = true, showCertifications = true}) { const indicators = [] const certifications = [] const stats = [] return () <section" className="{"py-16" bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark ${className || "}"} >" <div className="container mx-auto px-4> {} <div className="text-center mb-16> <h2 className="text-3xl md: text-4xl font-bold text-white mb-4> Trusted by Industry Leaders" </h2>" <p className="text-xl text-zion-slate-light max-w-3xl mx-auto> Zion Tech Group maintains the highest standards of security, compliance, and reliability to ensure your business operations" remain secure and uninterrupted." </p> </div> {} <div className="grid grid-cols-1 md: grid-cols-2 l,">
    g:grid-cols-4 gap-8 mb-16> {indicators.map((indicator, index) => (" <div key="{index}" className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover: border-zion-cyan/30 transition-all duration-300 hove,"
    r:scale-105" >" <div"" className="{"mx-auto" w-16 h-16 bg-zion-cyan/10 rounded-full flex items-center justify-center mb-4"}" >"" <indicator.icon className="{"w-8" h-8 ${indicator.color}"} />" </div>" <h3 className="text-lg font-semibold text-white mb-2> {indicator.title} </h3>" <p className="text-zion-slate-light text-sm leading-relaxed> {indicator.description} </p> """";"
"import { " Shield, Lock, Award, Users, Globe, CheckCircle, Star, Zap    } from "lucide-react";export function TrustIndicators({" className, showStats = true, showCertifications = true}) { const indicators = []" const certifications = []" const stats = []" return () <section" className="{"py-16" bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark ${className || "}"}" >" <div className="container mx-auto px-4">" {}" <div className="text-center mb-16">" <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">" Trusted by Industry Leaders" </h2>" <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">" Zion Tech Group maintains the highest standards of security, compliance, and reliability to ensure your business operations" remain secure and uninterrupted." </p> </div> {}" <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8 mb-16">" {indicators.map((indicator, index) => (" <div key={index}" className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover: border-zion-cyan/30 transition-all duration-300 hover:transform hover:scale-105" >" <div"" className="{"mx-auto" w-16 h-16 bg-zion-cyan/10 rounded-full flex items-center justify-center mb-4"}" >"" <indicator.icon className="{"w-8" h-8 ${indicator.color}"} />" </div>" <h3 className="text-lg font-semibold text-white mb-2">" {indicator.title}" </h3>" <p className="text-zion-slate-light text-sm leading-relaxed">" {indicator.description}" </p> ;"
"import { " Shield, Lock, Award, Users, Globe, CheckCircle, Star, Zap    } from "lucide-react"export function TrustIndicators({" className, showStats = true, showCertifications = true}) { const indicators = []" const certifications = []" const stats = []" return () <section" className="{"py-16" bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark ${className || "}"}" >" <div className="container mx-auto px-4">" {}" <div className="text-center mb-16">" <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">" Trusted by Industry Leaders" </h2>" <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">" Zion Tech Group maintains the highest standards of security, compliance, and reliability to ensure your business operations" remain secure and uninterrupted." </p> </div> {}" <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8 mb-16">" {indicators.map((indicator, index) => (" <div key={index}" className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover: border-zion-cyan/30 transition-all duration-300 hover:transform hover:scale-105" >" <div"" className="{"mx-auto" w-16 h-16 bg-zion-cyan/10 rounded-full flex items-center justify-center mb-4"}" >"" <indicator.icon className="{"w-8" h-8 ${indicator.color}"} />" </div>" <h3 className="text-lg font-semibold text-white mb-2">" {indicator.title}" </h3>" <p className="text-zion-slate-light text-sm leading-relaxed">" {indicator.description}" </p> "";"
"import {" Shield, Lock, Award, Users, Globe, CheckCircle, Star, Zap    } from "lucide-react";export function TrustIndicators({" className, showStats = true, showCertifications = true}) {const indicators = []" const certifications = []" const stats = []" return () <section" className="{"py-16" bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark ${className || "}"}" >" <div className="container mx-auto px-4">" {}" <div className="text-center mb-16">" <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">" Trusted by Industry Leaders" </h2>" <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">" Zion Tech Group maintains the highest standards of security, compliance, and reliability to ensure your business operations" remain secure and uninterrupted." </p> </div> {}" <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8 mb-16">" {indicators.map((indicator, index) => (" <div key={index}" className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover: border-zion-cyan/30 transition-all duration-300 hover:transform hover:scale-105" >" <div"" className="{"mx-auto" w-16 h-16 bg-zion-cyan/10 rounded-full flex items-center justify-center mb-4"}" >"" <indicator.icon className="{"w-8" h-8 ${indicator.color}"} />" </div>" <h3 className="text-lg font-semibold text-white mb-2">" {indicator.title}" </h3>" <p className="text-zion-slate-light text-sm leading-relaxed">" {indicator.description}" </p> ""
"import {" Shield, Lock, Award, Users, Globe, CheckCircle, Star, Zap    } from "lucide-react""export function TrustIndicators({" className, showStats = true, showCertifications = true}) {const indicators = []" const certifications = []" const stats = []" return () <section" className="{"py-16" bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark ${className || "}"}" >" <div className="container mx-auto px-4">" {}" <div className="text-center mb-16">" <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">" Trusted by Industry Leaders" </h2>" <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">" Zion Tech Group maintains the highest standards of security, compliance, and reliability to ensure your business operations" remain secure and uninterrupted." </p> </div> {}" <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8 mb-16">" {indicators.map((indicator, index) => (" <div key={index}" className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover: border-zion-cyan/30 transition-all duration-300 hover:transform hover:scale-105" >" <div"" className="{"mx-auto" w-16 h-16 bg-zion-cyan/10 rounded-full flex items-center justify-center mb-4"}" >"" <indicator.icon className="{"w-8" h-8 ${indicator.color}"} />" </div>" <h3 className="text-lg font-semibold text-white mb-2">" {indicator.title}" </h3>" <p className="text-zion-slate-light text-sm leading-relaxed">" {indicator.description}" </p> """;"
"import { &quot; Shield, Lock, Award, Users, Globe, CheckCircle, Star, Zap    } from &apos;lucide-react&apos;";&quot;&quot;export function TrustIndicators({&quot; className, showStats = true, showCertifications = true}) {&quot} const indicators = []&quot;&quot;" const certifications = []&quot;&quot;" const stats = []&quot; return ()&quot; <section&quot; className="{"py-16" bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark ${className || &quot}"}&quot; >&quot;&quot;" <div className="&quot;container" mx-auto px-4&quot;>&quot {}&quot;&quot;" <div className="&quot;text-center" mb-16&quot;>"&quot;&quot; <h2 className="&quot;text-3xl" md: text-4xl font-bold text-white mb-4&quot;>&quot; Trusted by Industry Leaders&quot;&quot;" </h2>&quot,&quot," <p className="&quot,text-xl" text-zion-slate-light max-w-3xl mx-auto&quot,>&quot, Zion Tech Group maintains the highest standards of security, compliance, and reliability to ensure your business operations&quot; remain secure and uninterrupted."&quot;&quot; </p> </div> {}&quot;&quot;" <div className="&quot;grid" grid-cols-1 md: grid-cols-2 l,g: grid-cols-4 gap-8 mb-16&quot,>&quot {indicators.map((indicator, index) => (&quot;&quot}" <div key="{index}&quot;" className="&quot;text-center" p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover: border-zion-cyan/30 transition-all duration-300 hover:transform hove,r: scale-105&quot, >&quot,&quot," <div"" className="{"mx-auto" w-16 h-16 bg-zion-cyan/10 rounded-full flex items-center justify-center mb-4"}" >"" <indicator.icon className="{"w-8" h-8 ${indicator.color}"} />" </div>&quot;&quot;" <h3 className="&quot;text-lg" font-semibold text-white mb-2&quot;>&quot {indicator.title}&quot;&quot;" </h3>&quot;&quot;" <p className="&quot;text-zion-slate-light" text-sm leading-relaxed&quot;>&quot {indicator.description}&quot;&quot;" </p> "
&apos;import { &apos; Shield, Lock, Award, Users, Globe, CheckCircle, Star, Zap    } from &apos;lucide-react&apos;&apos,"export function TrustIndicators({&apos; className, showStats = true, showCertifications = true}) {&apos} const indicators = []&apos;&apos, const certifications = []&apos;&apos, const stats = []&apos; return ()&apos; <section&apos; className="{"py-16" bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark ${className || &apos}"}&apos; >&apos;&apos, <div className="&apos;container" mx-auto px-4&apos;>&apos {}&apos;&apos, <div className="&apos;text-center" mb-16&apos;>"&apos;&apos; <h2 className="&apos;text-3xl" md: text-4xl font-bold text-white mb-4&apos;>&apos, Trusted by Industry Leaders&apos,&apos, </h2>&apos;&apos, <p className="&apos,text-xl" text-zion-slate-light max-w-3xl mx-auto&apos,>&apos, Zion Tech Group maintains the highest standards of security, compliance, and reliability to ensure your business operations&apos; remain secure and uninterrupted."&apos;&apos; </p> </div> {}&apos;&apos, <div className="&apos;grid" grid-cols-1 md: grid-cols-2 l,g: grid-cols-4 gap-8 mb-16&apos,>&apos {indicators.map((indicator, index) => (&apos;&apos}" <div key="{index}&apos;" className="&apos;text-center" p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover: border-zion-cyan/30 transition-all duration-300 hover:transform hove,r: scale-105&apos, >&apos,&apos," <div"" className="{"mx-auto" w-16 h-16 bg-zion-cyan/10 rounded-full flex items-center justify-center mb-4"}" >"" <indicator.icon className="{"w-8" h-8 ${indicator.color}"} />" </div>&apos;&apos, <h3 className="&apos;text-lg" font-semibold text-white mb-2&apos;>&apos {indicator.title}&apos;&apos, </h3>&apos;&apos, <p className="&apos;text-zion-slate-light" text-sm leading-relaxed&apos;>&apos {indicator.description}&apos;&apos, <;</p> &apos;&quot
;&quot;""
"import { " Shield, Lock, Award, Users, Globe, CheckCircle, Star, Zap    } from "lucide-react";export function TrustIndicators({" className, showStats = true, showCertifications = true}) { const indicators = []" const certifications = []" const stats = []" return () <section " className="{"py-16" bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark ${className || "}"}"" >" <div className="container mx-auto px-4">" {}" <div className="text-center mb-16">" <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">" Trusted by Industry Leaders" </h2>" <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">" Zion Tech Group maintains the highest standards of security, compliance, and reliability to ensure your business operations" remain secure and uninterrupted." </p> </div> {}" <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8 mb-16">" {indicators.map((indicator, index) => (" <div key={index}" className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover: border-zion-cyan/30 transition-all duration-300 hover:transform hover:scale-105"" >" <div "" className="{"mx-auto" w-16 h-16 bg-zion-cyan/10 rounded-full flex items-center justify-center mb-4"}"" >"" <indicator .icon className="{"w-8" h-8 ${indicator.color}"} /" >" </div>" <h3 className="text-lg font-semibold text-white mb-2">" {indicator.title}" </h3>" <p className="text-zion-slate-light text-sm leading-relaxed">" {indicator.description}" </p> """
"import { " Shield, Lock, Award, Users, Globe, CheckCircle, Star, Zap    } from "lucide-react""export function TrustIndicators({" className, showStats = true, showCertifications = true}) { const indicators = []" const certifications = []" const stats = []" return () <section " className="{"py-16" bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark ${className || "}"}"" >" <div className="container mx-auto px-4">" {}" <div className="text-center mb-16">" <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">" Trusted by Industry Leaders" </h2>" <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">" Zion Tech Group maintains the highest standards of security, compliance, and reliability to ensure your business operations" remain secure and uninterrupted." </p> </div> {}" <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8 mb-16">" {indicators.map((indicator, index) => (" <div key={index}" className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover: border-zion-cyan/30 transition-all duration-300 hover:transform hover:scale-105"" >" <div "" className="{"mx-auto" w-16 h-16 bg-zion-cyan/10 rounded-full flex items-center justify-center mb-4"}"" >"" <indicator .icon className="{"w-8" h-8 ${indicator.color}"} /" >" </div>" <h3 className="text-lg font-semibold text-white mb-2">" {indicator.title}" </h3>" <p className="text-zion-slate-light text-sm leading-relaxed">" {indicator.description}" </p> "";""
}}}}""
"import { " Shield, Lock, Award, Users, Globe, CheckCircle, Star, Zap    } from "lucide-react";export function TrustIndicators({" className, showStats = true, showCertifications = true}) { const indicators = []" const certifications = []" const stats = []" return () <section" className="{"py-16" bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark ${className || "}"}" >" <div className="container mx-auto px-4">" {}" <div className="text-center mb-16">" <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">" Trusted by Industry Leaders" </h2>" <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">" Zion Tech Group maintains the highest standards of security, compliance, and reliability to ensure your business operations" remain secure and uninterrupted." </p> </div> {}" <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8 mb-16">" {indicators.map((indicator, index) => (" <div key={index}" className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover: border-zion-cyan/30 transition-all duration-300 hover:transform hover:scale-105" >" <div"" className="{"mx-auto" w-16 h-16 bg-zion-cyan/10 rounded-full flex items-center justify-center mb-4"}" >"" <indicator.icon className="{"w-8" h-8 ${indicator.color}"} />" </div>" <h3 className="text-lg font-semibold text-white mb-2">" {indicator.title}" </h3>" <p className="text-zion-slate-light text-sm leading-relaxed">" {indicator.description}" </p> ""
"import { " Shield, Lock, Award, Users, Globe, CheckCircle, Star, Zap    } from "lucide-react""export function TrustIndicators({" className, showStats = true, showCertifications = true}) { const indicators = []" const certifications = []" const stats = []" return () <section" className="{"py-16" bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark ${className || "}"}" >" <div className="container mx-auto px-4">" {}" <div className="text-center mb-16">" <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">" Trusted by Industry Leaders" </h2>" <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">" Zion Tech Group maintains the highest standards of security, compliance, and reliability to ensure your business operations" remain secure and uninterrupted." </p> </div> {}" <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8 mb-16">" {indicators.map((indicator, index) => (" <div key={index}" className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover: border-zion-cyan/30 transition-all duration-300 hover:transform hover:scale-105" >" <div"" className="{"mx-auto" w-16 h-16 bg-zion-cyan/10 rounded-full flex items-center justify-center mb-4"}" >"" <indicator.icon className="{"w-8" h-8 ${indicator.color}"} />" </div>" <h3 className="text-lg font-semibold text-white mb-2">" {indicator.title}" </h3>" <p className="text-zion-slate-light text-sm leading-relaxed">" {indicator.description}" </p> """;"
"import { " Shield, Lock, Award, Users, Globe, CheckCircle, Star, Zap    }  from "lucide-react;export function TrustIndicators({" className, showStats = true, showCertifications = true}) { const indicators = []" const certifications = []" const stats = []" return () <section " className="{"py-16" bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark ${className || "}"}"" >" <div className="container mx-auto px-4">" {}" <div className="text-center mb-16">" <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">" Trusted by Industry Leaders" </h2>" <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">" Zion Tech Group maintains the highest standards of security, compliance, and reliability to ensure your business operations" remain secure and uninterrupted." </p> </div> {}" <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8 mb-16">" {indicators.map((indicator, index) => (" <div key={index}" className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover: border-zion-cyan/30 transition-all duration-300 hover:transform hover:scale-105"" >" <div "" className="{"mx-auto" w-16 h-16 bg-zion-cyan/10 rounded-full flex items-center justify-center mb-4"}"" >"" <indicator .icon className="{"w-8" h-8 ${indicator.color}"} /" >" </div>" <h3 className="text-lg font-semibold text-white mb-2">" {indicator.title}" </h3>" <p className="text-zion-slate-light text-sm leading-relaxed">" {indicator.description}" </p> """
"import { " Shield, Lock, Award, Users, Globe, CheckCircle, Star, Zap    }  from "lucide-reactexport function TrustIndicators({" className, showStats = true, showCertifications = true}) { const indicators = []" const certifications = []" const stats = []" return () <section " className="{"py-16" bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark ${className || "}"}"" >" <div className="container mx-auto px-4">" {}" <div className="text-center mb-16">" <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">" Trusted by Industry Leaders" </h2>" <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">" Zion Tech Group maintains the highest standards of security, compliance, and reliability to ensure your business operations" remain secure and uninterrupted." </p> </div> {}" <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8 mb-16">" {indicators.map((indicator, index) => (" <div key={index}" className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover: border-zion-cyan/30 transition-all duration-300 hover:transform hover:scale-105"" >" <div "" className="{"mx-auto" w-16 h-16 bg-zion-cyan/10 rounded-full flex items-center justify-center mb-4"}"" >"" <indicator .icon className="{"w-8" h-8 ${indicator.color}"} /" >` </div>" <h3 className="text-lg font-semibold text-white mb-2">" {indicator.title}" </h3>" <p className="text-zion-slate-light text-sm leading-relaxed">" {indicator.description}" </p> ';"
;"

  );
export default Component
>>>>>>> main
