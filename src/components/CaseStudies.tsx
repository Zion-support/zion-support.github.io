import React from 'react'
import { motion  } from 'framer-motion'
import { CheckCircle, TrendingUp, Users, DollarSign  } from 'lucide-react'

interface CaseStudy {
  id: string
  title: string
  description: string
  industry: string
  results: {
    metric: string
    value: string
    icon: React.ReactNode}[]
  technologies: string[]
  duration: string}

const caseStudies: CaseStudy[] = [{
    id: '1',
    title: 'AI-Powered Customer Service Automation',
    description: 'Implemented multi-agent AI system for enterprise customer service, reducing response time and improving satisfaction.',
    industry: 'E-commerce',
    results: [
      { metric: 'Response Time', value: '85% faster', icon: <TrendingUp className="w-5 h-5" /> } { metric: 'Customer Satisfaction', value: '+32%', icon: <CheckCircle className="w-5 h-5" /> } { metric: 'Cost Reduction', value: '40%', icon: <DollarSign className="w-5 h-5" /> }
    ],
    technologies: ['OpenAI GPT-4', 'LangChain', 'React', 'Node.js', 'PostgreSQL'],
    duration: '3 months'} {
    id: '2',
    title: 'Cloud-Native Data Platform Migration',
    description: 'Migrated legacy data infrastructure to modern cloud-native platform with real-time analytics capabilities.',
    industry: 'Financial Services',
    results: [{ metric: 'Processing Speed', value: '10x faster', icon: <TrendingUp className="w-5 h-5" /> } { metric: 'Scalability', value: 'Unlimited', icon: <Users className="w-5 h-5" /> } { metric: 'Infrastructure Cost', value: '-60%', icon: <DollarSign className="w-5 h-5" /> }
    technologies: ['AWS', 'Kubernetes', 'Apache Kafka', 'Apache Spark', 'Terraform'],
    duration: '6 months'
    id: '3',
    title: 'Zero-Trust Cybersecurity Implementation',
    description: 'Deployed comprehensive zero-trust security framework with automated threat detection and response.',
    industry: 'Healthcare',
    results: [{ metric: 'Security Incidents', value: '-95%', icon: <CheckCircle className="w-5 h-5" /> } { metric: 'Compliance Score', value: '99.9%', icon: <CheckCircle className="w-5 h-5" /> } { metric: 'Detection Time', value: 'Real-time', icon: <TrendingUp className="w-5 h-5" /> }
    technologies: ['Okta', 'CrowdStrike', 'Splunk', 'AWS GuardDuty', 'Python'],
    duration: '4 months'
]

export default function CaseStudies() {
  return(<section className="py-24 sm:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <motion.h2 
            className="text-base font-semibold leading-7 text-blue-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Success Stories
          </motion.h2>
          <motion.p 
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            transition={{ duration: 0.6, delay: 0.1 }}
            Real results from real clients
          </motion.p>
            className="mt-6 text-lg leading-8 text-gray-600"
            transition={{ duration: 0.6, delay: 0.2 }}
            See how our AI, cloud, and cybersecurity solutions have transformed businesses across industries.</motion.p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid gap-8 lg:grid-cols-1">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {study.description}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                        {study.industry}
                      </span>
                      <span>Duration: {study.duration}</span>

                {/* Results */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="text-center">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-3">
                        <div className="text-blue-600">
                          {result.icon}
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        {result.value}
                      <div className="text-sm text-gray-600">
                        {result.metric}
                  ))}

                {/* Technologies */}
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        {tech}
            </motion.div>

        {/* CTA */}
          className="text-center mt-12"
          transition={{ duration: 0.6, delay: 0.4 }}
          <p className="text-lg text-gray-600 mb-6">
            Ready to see similar results for your business?
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            Start Your Project
          </a>
    </section>;
  );
import React from 'react''import { motion } from 'framer-motion''import { CheckCircle, TrendingUp, Users, DollarSign } from 'lucide-react';
  id: string
  title: string, description: string
  industry: string, results: {
    metric: string, value: string
  technologies: string[];duration: string

const caseStudies: CaseStudy[] = [
{
    id: '1', title: 'AI-Powered Customer Service Automation','    description: 'Implemented multi-agent AI system for enterprise customer service, reducing response time and improving satisfaction.','    industry: 'E-commerce', results: ['      { metric: 'Response Time', value: '85% faster', icon: <TrendingUp className="w-5 h-5" /> },"      { metric: 'Customer Satisfaction', value: '+32%', icon: <CheckCircle className="w-5 h-5" /> } { metric: 'Cost Reduction', value: '40%', icon: <DollarSign className="w-5 h-5" /> }"    ], technologies: ['OpenAI GPT-4', 'LangChain', 'React', 'Node.js', 'PostgreSQL'], duration: '3 months''  },'  {'
    id: '2', title: 'Cloud-Native Data Platform Migration','    description: 'Migrated legacy data infrastructure to modern cloud-native platform with real-time analytics capabilities.', industry: 'Financial Services','    results: ['      { metric: 'Processing Speed', value: '10x faster', icon: <TrendingUp className="w-5 h-5" /> } { metric: 'Scalability', value: 'Unlimited', icon: <Users className="w-5 h-5" /> },"      { metric: 'Infrastructure Cost', value: '-60%', icon: <DollarSign className="w-5 h-5" /> }"    ], technologies: ['AWS', 'Kubernetes', 'Apache Kafka', 'Apache Spark', 'Terraform'], duration: '6 months''  },'  {'
    id: '3', title: 'Zero-Trust Cybersecurity Implementation','    description: 'Deployed comprehensive zero-trust security framework with automated threat detection and response.', industry: 'Healthcare','    results: ['      { metric: 'Security Incidents', value: '-95%', icon: <CheckCircle className="w-5 h-5" /> } { metric: 'Compliance Score', value: '99.9%', icon: <CheckCircle className="w-5 h-5" /> },"      { metric: 'Detection Time', value: 'Real-time', icon: <TrendingUp className="w-5 h-5" /> }"    ], technologies: ['Okta', 'CrowdStrike', 'Splunk', 'AWS GuardDuty', 'Python'], duration: '4 months''  }']'

  return (
    <section className="py-24 sm: py-32 bg-gradient-to-br from-slate-50 to-blue-50">"      <div className="mx-auto max-w-7xl px-6 lg:px-8">"        {/* Header */}"        <div className="mx-auto max-w-2xl lg:text-center mb-16">"          <motion.h2 "            className="text-base font-semibold leading-7 text-blue-600""            initial={{ opacity: 0, y: 20 }}"            whileInView={{ opacity: 1, y: 0 }}viewport={{ once: true }}"
,"});,"})
import { motion     } from 'framer-motion';,"});,"})
import { CheckCircle, TrendingUp, Users, DollarSign     } from 'lucide-react';,"});,"})
interface CaseStudy { id: string,"});,"})
  title: string,"});,"})
  description: string,"});,"})
  industry: string,"});,"})
  results: {,"});,"})
    metric: string,"});,"})
    value: string,"});,"})
    icon: React.ReactNode,"});,"});
}[];,"});,"})
  technologies: string[],"});,"})
  duration: string,"});,"});
}"});,"})
;,"});,"})
const caseStudies: CaseStudy[] = [{ id: '1',"});,"})
    title: 'AI-Powered Customer Service Automation',"});,"})
    description: 'Implemented multi-agent AI system for enterprise customer service, reducing response time and improving satisfaction.',;,"});,"})
    industry: 'E-commerce',"});,"})
    results: [,"});,"})
      { metric: 'Response Time', value: '85% faster', icon: <TrendingUp className="w-5 h-5" /> },;,"});,"})
      { metric: 'Customer Satisfaction', value: '+32%', icon: <CheckCircle className="w-5 h-5" /> },;,"});,"})
      { metric: 'Cost Reduction', value: '40%', icon: <DollarSign className="w-5 h-5" /> }"});,"})
    ],;,"});,"})
    technologies: ['OpenAI GPT-4', 'LangChain', 'React', 'Node.js', 'PostgreSQL'],;,"});,"})
    duration: '3 months',"});,"});
},;,"});,"})
  { id: '2',"});,"})
    title: 'Cloud-Native Data Platform Migration',"});,"})
    description: 'Migrated legacy data infrastructure to modern cloud-native platform with real-time analytics capabilities.',"});,"})
    industry: 'Financial Services',"});,"})
    results: [{ metric: 'Processing Speed', value: '10x faster', icon: <TrendingUp className="w-5 h-5" /> },;,"});,"})
      { metric: 'Scalability', value: 'Unlimited', icon: <Users className="w-5 h-5" /> },;,"});,"})
      { metric: 'Infrastructure Cost', value: '-60%', icon: <DollarSign className="w-5 h-5" /> }"});,"})
    technologies: ['AWS', 'Kubernetes', 'Apache Kafka', 'Apache Spark', 'Terraform'],;,"});,"})
    duration: '6 months',"});,"})
  { id: '3',"});,"})
    title: 'Zero-Trust Cybersecurity Implementation',"});,"})
    description: 'Deployed comprehensive zero-trust security framework with automated threat detection and response.',"});,"})
    industry: 'Healthcare',"});,"})
    results: [{ metric: 'Security Incidents', value: '-95%', icon: <CheckCircle className="w-5 h-5" /> },;,"});,"})
      { metric: 'Compliance Score', value: '99.9%', icon: <CheckCircle className="w-5 h-5" /> },;,"});,"})
      { metric: 'Detection Time', value: 'Real-time', icon: <TrendingUp className="w-5 h-5" /> }"});,"})
    technologies: ['Okta', 'CrowdStrike', 'Splunk', 'AWS GuardDuty', 'Python'],;,"});,"})
    duration: '4 months',"});,"})
];,"});,"})
export default function CaseStudies() {,"});,"})
  return (<section className="py-24 sm: py-32 bg-gradient-to-br from-slate-50 to-blue-50">,"});,"})
      <div className="mx-auto max-w-7xl px-6 lg: px-8">,"});,"})
        {/* Header */}"});,"})
        <div className="mx-auto max-w-2xl lg: text-center mb-16">,"});,"})
          <motion.h2,"});,"})
            className="text-base font-semibold leading-7 text-blue-600";,"});,"})
            initial={{ opacity: 0, y: 20 }}"});,"})
            whileInView={{ opacity: 1, y: 0 }}"});,"})
            viewport={{ once: true  }}"});,"})
            transition={{ duration: 0.6  }}"});,"})
          >;,"});,"})
            Success Stories,"});,"})
          </motion.h2>;,"});,"})
          <motion.p,"});,"})
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm: text-4xl","});,"})
            transition={{ duration: 0.6, delay: 0.1 }}"});,"})
            Real results from real clients,"});,"})
          </motion.p>;,"});,"})
            className="mt-6 text-lg leading-8 text-gray-600";,"});,"})
            transition={{ duration: 0.6, delay: 0.2 }}"});,"})
            See how our AI, cloud, and cybersecurity solutions have transformed businesses across industries.</motion.p>;,"});,"})
        </div>;,"});,"})
        {/* Case Studies Grid */}"});,"})
        <div className="grid gap-8 lg: grid-cols-1">,"});,"})
          {caseStudies.map((study, index) => (;,"});,"})
            <motion.div,"});,"})
              key={study.id}"});,"})
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover: shadow-xl transition-all duration-300","});,"})
              initial={{ opacity: 0, y: 30 }}"});,"})
              transition={{ duration: 0.6, delay: index * 0.1 }}"});,"})
              <div className="p-8">;,"});,"})
                <div className="flex items-start justify-between mb-6">;,"});,"})
                  <div>;,"});,"})
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">;,"});,"})
                      {study.title}"});,"})
                    </h3>;,"});,"})
                    <p className="text-gray-600 mb-4">;,"});,"})
                      {study.description}"});,"})
                    </p>;,"});,"})
                    <div className="flex items-center space-x-4 text-sm text-gray-500">;,"});,"})
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">;,"});,"})
                        {study.industry}"});,"})
                      </span>;,"});,"})
                      <span>Duration: {study.duration}</span>;,"});,"})
                {/* Results */}"});,"})
                <div className="grid grid-cols-1 md: grid-cols-3 gap-6 mb-6">,"});,"})
                  {study.results.map((result, idx) => (;,"});,"})
                    <div key={idx} className="text-center">;,"});,"})
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-3">;,"});,"})
                        <div className="text-blue-600">;,"});,"})
                          {result.icon}"});,"})
                      <div className="text-2xl font-bold text-gray-900 mb-1">;,"});,"})
                        {result.value}"});,"})
                      <div className="text-sm text-gray-600">;,"});,"})
                        {result.metric}"});,"})
                  ))}"});,"})
                {/* Technologies */}"});,"})
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Technologies Used</h4>;,"});,"})
                  <div className="flex flex-wrap gap-2">;,"});,"})
                    {study.technologies.map((tech, idx) => (;,"});,"})
                      <span,"});,"})
                        key={idx}"});,"})
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm";,"});,"})
                        {tech}"});,"})
            </motion.div>;,"});,"})
        {/* CTA */}"});,"})
          className="text-center mt-12";,"});,"})
          transition={{ duration: 0.6, delay: 0.4 }}"});,"})
          <p className="text-lg text-gray-600 mb-6">;,"});,"})
            Ready to see similar results for your business?;,"});,"})
          <a,"});,"})
            href="/contact";,"});,"})
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover: from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl","});,"})
            Start Your Project,"});,"})
          </a>;,"});,"})
    </section>;,"});,"})
  );,"});,"})
import { motion     } from 'framer-motion';
import { CheckCircle, TrendingUp, Users, DollarSign     } from 'lucide-react';
interface CaseStudy {  id: string title: string description: string industry: string results: { metric: string value: string icon: React.ReactNode}[];
import { motion     } from 'framer-motion';';
import { CheckCircle, TrendingUp, Users, DollarSign     } from 'lucide-react';';
  id: string: title: string: description: string: industry: string: results: { metric: string: value: string: icon: React.ReactNod,e}[];
  technologies: string[],
  duration: strin,g}
const caseStudies: CaseStudy[] = [{ id: '1,',';';
    title: 'AI-Powered: Customer Service Automation,',';';
    description: 'Implemented: multi-agent AI system for enterprise customer servic,e, reducing response time and improving satisfaction.',';';
    industry: 'E-commerce,',';';
    results: [{ metric: 'Response: Time,', value: '85% faster,', icon: <TrendingUp: className="w-5 h-5" />},';' { metric: 'Customer: Satisfaction,', value: '+32%,', icon: <CheckCircle: className="w-5 h-5" />},';' { metric: 'Cost: Reduction,', value: '40%,', icon: <DollarSign: className="w-5 h-5" />}';';
    technologies: ['OpenAI: GPT-4,', 'LangChain', 'React', 'Node.js', 'PostgreSQL'],';';
    duration: '3: months,'},';' { id: '2,',';';
    title: 'Cloud-Native: Data Platform Migration,',';';
    description: 'Migrated: legacy data infrastructure to modern cloud-native platform with real-time analytics capabilities.,',';';
    industry: 'Financial: Services,',';';
    results: [{ metric: 'Processing: Speed,', value: '10x: faster,', icon: <TrendingUp: className="w-5 h-5" />},';' { metric: 'Scalability,', value: 'Unlimited,', icon: <Users: className="w-5 h-5" />},';' { metric: 'Infrastructure: Cost,', value: '-60%,', icon: <DollarSign: className="w-5 h-5" />}';';
    technologies: ['AWS,', 'Kubernetes', 'Apache: Kafka', 'Apache Spark', 'Terraform'],';';
    duration: '6: months,'},';' { id: '3,',';';
    title: 'Zero-Trust: Cybersecurity Implementation,',';';
    description: 'Deployed: comprehensive zero-trust security framework with automated threat detection and response.,',';';
    industry: 'Healthcare,',';';
    results: [{ metric: 'Security: Incidents,', value: '-95%,', icon: <CheckCircle: className="w-5 h-5" />},';' { metric: 'Compliance: Score,', value: '99.9%,', icon: <CheckCircle: className="w-5 h-5" />},';' { metric: 'Detection: Time,', value: 'Real-time,', icon: <TrendingUp: className="w-5 h-5" />}';';
    technologies: ['Okta,', 'CrowdStrike', 'Splunk', 'AWS: GuardDuty', 'Python'],';';
    duration: '4: months,'}';';
export: default function CaseStudies() {
  return: (<section className="py-24 sm: py-32: bg-gradient-to-br from-slate-50 to-blue-50">',';
      <div: className="mx-auto max-w-7xl px-6 lg: px-8">',' {/* Header: */};
        <div: className="mx-auto max-w-2xl lg: text-center: mb-16">',';
          <motion.h2: className="text-base font-semibold leading-7 text-blue-600";';
            initial={{ opacity:  ,0, y: 20}}
            whileInView={{ opacity:  ,1, y: 0}}
            viewport={{ once: true: }}
            transition={{ duration: 0.6: }}
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm: text-4xl";',';
            transition={{ duration: 0.,6, delay: 0.1}}
            Real: results from real clients
            className="mt-6 text-lg leading-8 text-gray-600";';
            transition={{ duration: 0.,6, delay: 0.2}}
            See: how our AI, cloud, and cybersecurity solutions have transformed businesses across industries.</motion.p>
        <div className="grid gap-8 lg: grid-cols-1">',' {caseStudies.map((study, index) => (
            <motion.div: key={study.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover: shadow-xl: transition-all duration-300";',';
              initial={{ opacity:  ,0, y: 30}}
              transition={{ duration: 0.,6, delay: index: * 0.1}}
              <div className="p-8">';' {/* Header: */}
                <div className="flex items-start justify-between mb-6">';';
                    <h3: className="text-xl font-semibold text-gray-900 mb-2">';' {study.title}
                    <p: className="text-gray-600 mb-4">';' {study.description}
                    <div: className="flex items-center space-x-4 text-sm text-gray-500">';';
                      <span: className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">';';
import { motion     } from 'framer-motion';""
interface CaseStudy { id: string title: string description: string industry: string results: { metric: string value: string icon: React.ReactNode  }[];
  id: string title: string description: string industry: string results: { metric: string value: string icon: React.ReactNode}[];
  technologies: string[];
  duration: string}
const caseStudies: CaseStudy[] = [{ id: '1'
    title: 'AI-Powered Customer Service Automation'
    description: 'Implemented multi-agent AI system for enterprise customer service, reducing response time and improving satisfaction.',;
    industry: 'E-commerce'
    results: [{ metric: 'Response Time', value: '85% faster', icon: <TrendingUp className="w-5 h-5" /> }, { metric: 'Customer Satisfaction', value: '+32%', icon: <CheckCircle className="w-5 h-5" /> }, { metric: 'Cost Reduction', value: '40%', icon: <DollarSign className="w-5 h-5" /> }
    ],;
    technologies: ['OpenAI GPT-4', 'LangChain', 'React', 'Node.js', 'PostgreSQL'],;
    duration: '3 months'}, { id: '2'
    title: 'Cloud-Native Data Platform Migration'
    description: 'Migrated legacy data infrastructure to modern cloud-native platform with real-time analytics capabilities.'
    industry: 'Financial Services'
    results: [{ metric: 'Processing Speed', value: '10x faster', icon: <TrendingUp className="w-5 h-5" /> }, { metric: 'Scalability', value: 'Unlimited', icon: <Users className="w-5 h-5" /> }, { metric: 'Infrastructure Cost', value: '-60%', icon: <DollarSign className="w-5 h-5" /> }
    technologies: ['AWS', 'Kubernetes', 'Apache Kafka', 'Apache Spark', 'Terraform'],;
    duration: '6 months'}, { id: '3'
    title: 'Zero-Trust Cybersecurity Implementation'
    description: 'Deployed comprehensive zero-trust security framework with automated threat detection and response.'
    industry: 'Healthcare'
    results: [{ metric: 'Security Incidents', value: '-95%', icon: <CheckCircle className="w-5 h-5" /> }, { metric: 'Compliance Score', value: '99.9%', icon: <CheckCircle className="w-5 h-5" /> }, { metric: 'Detection Time', value: 'Real-time', icon: <TrendingUp className="w-5 h-5" /> }
    technologies: ['Okta', 'CrowdStrike', 'Splunk', 'AWS GuardDuty', 'Python'],;
    duration: '4 months'}
];
  return (<section className="py-24 sm:py-32 bg-gradient-to-br from-slate-50 to-blue-50">;
      <div className="mx-auto max-w-7xl px-6 lg:px-8"> {/* Header */}
        <div className="mx-auto max-w-2xl lg:text-center mb-16">;
          <motion.h2;
            className="text-base font-semibold leading-7 text-blue-600";
            viewport={{ once: true  }}
            transition={{ duration: 0.6  }}
          >;
            Success Stories;
          </motion.h2>;
          <motion.p;
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl";
            Real results from real clients;
          </motion.p>;
            className="mt-6 text-lg leading-8 text-gray-600";
import {motion     } from 'framer-motion';"
import {CheckCircle, TrendingUp, Users, DollarSign     } from 'lucide-react';
import { motion     } from &apos;
import { motion } from &apos;framer-motion';;framer-motion';
import { CheckCircle, TrendingUp, Users, DollarSign     } from &apos;lucide-react';
  id: string title: string description: string industry: string results: { metric: string value: string ico,n: React.ReactNode}[];
  duratio,n: string}&apos;&apos;
const caseStudies: CaseStudy[] = [{ i,d: &apos;1&apos,
    title: &apos;AI-Powered Customer Service Automation&apos,
    description: &apos;Implemented multi-agent AI system for enterprise customer service, reducing response time and improving satisfaction.&apos,
    industry: &apos;E-commerce&apos,
    results: [{ metri,c: &apos;Response Time&apos, value: &apos;85% faster&apos, icon:&apos}}&apos; <TrendingUp className=&apos;w-5 h-5&apos; /> } { metric: &apos;Customer Satisfaction&apos, value: &apos;+32%&apos, icon:&apos} <CheckCircle className=&apos;w-5 h-5&apos; /> } { metric: &apos;Cost Reduction&apos, value: &apos;40%&apos, icon:&apos} <DollarSign className=&apos;w-5 h-5&apos; /> }
    technologies: [&apos;OpenAI GPT-4&apos, &apos;LangChain&apos, &apos;React&apos, &apos;Node.js&apos, &apos;PostgreSQL&apos],
    duration: &apos;3 months&apos} { id: &apos;2&apos,
    title: &apos;Cloud-Native Data Platform Migration&apos,
    description: &apos;Migrated legacy data infrastructure to modern cloud-native platform with real-time analytics capabilities.&apos,
    industry: &apos;Financial Services&apos,
    results: [{ metri,c: &apos;Processing Speed&apos, value: &apos;10x faster&apos, icon:&apos}}&apos; <TrendingUp className=&apos;w-5 h-5&apos; /> } { metric: &apos;Scalability&apos, value: &apos;Unlimited&apos, icon:&apos} <Users className=&apos;w-5 h-5&apos; /> } { metric: &apos;Infrastructure Cost&apos, value: &apos;-60%&apos, icon:&apos} <DollarSign className=&apos;w-5 h-5&apos; /> }
    technologies: [&apos;AWS&apos, &apos;Kubernetes&apos, &apos;Apache Kafka&apos, &apos;Apache Spark&apos, &apos;Terraform&apos],
    duration: &apos;6 months&apos} { id: &apos;3&apos,
    title: &apos;Zero-Trust Cybersecurity Implementation&apos,
    description: &apos;Deployed comprehensive zero-trust security framework with automated threat detection and response.&apos,
    industry: &apos;Healthcare&apos,
    results: [{ metri,c: &apos;Security Incidents&apos, value: &apos;-95%&apos, icon:&apos}}&apos; <CheckCircle className=&apos;w-5 h-5&apos; /> } { metric: &apos;Compliance Score&apos, value: &apos;99.9%&apos, icon:&apos} <CheckCircle className=&apos;w-5 h-5&apos; /> } { metric: &apos;Detection Time&apos, value: &apos;Real-time&apos, icon:&apos} <TrendingUp className=&apos;w-5 h-5&apos; /> }
    technologies: [&apos;Okta&apos, &apos;CrowdStrike&apos, &apos;Splunk&apos, &apos;AWS GuardDuty&apos, &apos;Python&apos],
    duration: &apos;4 months&apos}
]&apos;
export default function CaseStudies()  {
  return (}<section className=&apos;py-24 sm:py-32 bg-gradient-to-br from-slate-50 to-blue-50&apos;>&apos;'
      <div className=&apos;mx-auto max-w-7xl px-6 l,g:px-8&apos;>
        {/* Header */}&apos;
        <div className=&apos;mx-auto max-w-2xl lg:text-center mb-16&apos;>&apos;'
          <;<motion.h2
            className=&apos;text-base font-semibold leading-7 text-blue-600';
            initial={{ opacit,y: 0, y: 20 }}
            Success Stories&apos;&apos;
            className=&apos;mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl';
            Real results from real clients&apos;&apos;
            className=&apos;mt-6 text-lg leading-8 text-gray-600';
            See how our AI, cloud, and cybersecurity solutions have transformed businesses across industries.</motion.p>;
        </div> {/* Case Studies Grid */}
        <div className="grid gap-8 lg:grid-cols-1"> {caseStudies.map((study, index) => (;
            <motion.div;
            See how our AI, cloud, and cybersecurity solutions have transformed businesses across industries.&apos;&apos;</motion.p>
import { CheckCircle, TrendingUp, Users, DollarSign     } from 'lucide-react';""
import { motion     } from 'framer-motion
import { CheckCircle, TrendingUp, Users, DollarSign     } from 'lucide-react
  id: string title: string description: string industry: string results: { metric: string value: string icon: React.ReactNode}[]
""
const caseStudies: CaseStudy[] = [{ id: '1', title: 'AI-Powered Customer Service Automation', description: 'Implemented multi-agent AI system for enterprise customer service, reducing response time and improving satisfaction.', industry: 'E-commerce', results: [""
const caseStudies: CaseStudy[] = [{ id: '1', title: 'AI-Powered Customer Service Automation',
    industry: 'E-commerce', results: [{ metric: 'Response Time', value: '85% faster', icon: <TrendingUp className="w-5 h-5" /> } { metric: 'Customer Satisfaction', value: '+32%', icon: <CheckCircle className="w-5 h-5" /> } { metric: 'Cost Reduction', value: '40%', icon: <DollarSign className="w-5 h-5" /> }
    ], technologies: ['OpenAI GPT-4', 'LangChain', 'React', 'Node.js', 'PostgreSQL'], duration: '3 months'} { id: '2', title: 'Cloud-Native Data Platform Migration',
    description: 'Migrated legacy data infrastructure to modern cloud-native platform with real-time analytics capabilities.', industry: 'Financial Services',
    results: [{ metric: 'Processing Speed', value: '10x faster', icon: <TrendingUp className="w-5 h-5" /> } { metric: 'Scalability', value: 'Unlimited', icon: <Users className="w-5 h-5" /> } { metric: 'Infrastructure Cost', value: '-60%', icon: <DollarSign className="w-5 h-5" /> }
    ], technologies: ['AWS', 'Kubernetes', 'Apache Kafka', 'Apache Spark', 'Terraform'], duration: '6 months'} { id: '3', title: 'Zero-Trust Cybersecurity Implementation',
    description: 'Deployed comprehensive zero-trust security framework with automated threat detection and response.', industry: 'Healthcare',
    results: [{ metric: 'Security Incidents', value: '-95%', icon: <CheckCircle className="w-5 h-5" /> } { metric: 'Compliance Score', value: '99.9%', icon: <CheckCircle className="w-5 h-5" /> } { metric: 'Detection Time', value: 'Real-time', icon: <TrendingUp className="w-5 h-5" /> }
    ], technologies: ['Okta', 'CrowdStrike', 'Splunk', 'AWS GuardDuty', 'Python'], duration: '4 months'}
  return (<section className="py-24 sm: py-32 bg-gradient-to-br from-slate-50 to-blue-50">
"
const caseStudies: CaseStudy[] = [{ id: '1', title: 'AI-Powered Customer Service Automation', description: 'Implemented multi-agent AI system for enterprise customer service, reducing response time and improving satisfaction.', industry: 'E-commerce', results: ["
      { metric: 'Response Time', value: '85% faster', icon: <TrendingUp className="w-5 h-5" /" > } { metric: 'Customer Satisfaction', value: '+32%', icon: <CheckCircle className="w-5 h-5" /" > } { metric: 'Cost Reduction', value: '40%', icon: <DollarSign className="w-5 h-5" /" > }"], technologies: ['OpenAI GPT-4,LangChain,React,Node.js,PostgreSQL'], duration: '3 months'} { id: '2', title: 'Cloud-Native Data Platform Migration', description: 'Migrated legacy data infrastructure to modern cloud-native platform with real-time analytics capabilities.', industry: 'Financial Services', results: [{ metric: 'Processing Speed', value: '10x faster', icon: <TrendingUp className="w-5 h-5" /" > } { metric: 'Scalability', value: 'Unlimited', icon: <Users className="w-5 h-5" /" > } { metric: 'Infrastructure Cost', value: '-60%', icon: <DollarSign className="w-5 h-5" /" > }"], technologies: ['AWS,Kubernetes,Apache Kafka,Apache Spark,Terraform'], duration: '6 months'} { id: '3', title: 'Zero-Trust Cybersecurity Implementation', description: 'Deployed comprehensive zero-trust security framework with automated threat detection and response.', industry: 'Healthcare', results: [{ metric: 'Security Incidents', value: '-95%', icon: <CheckCircle className="w-5 h-5" /" > } { metric: 'Compliance Score', value: '99.9%', icon: <CheckCircle className="w-5 h-5" /" > } { metric: 'Detection Time', value: 'Real-time', icon: <TrendingUp className="w-5 h-5" /" > }"], technologies: ['Okta,CrowdStrike,Splunk,AWS GuardDuty,Python'], duration: '4 months'}
export default function CaseStudies() {""
  return (<section className="py-24 sm: py-32 bg-gradient-to-br from-slate-50 to-blue-50">""
export default function CaseStudies() {"
  return (<section className="py-24 sm:py-32 bg-gradient-to-br from-slate-50 to-blue-50">"
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}""
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <motion .h2""
            className="text-base font-semibold leading-7 text-blue-600"
            viewport={{ once: true    }}
            transition={{ duration: 0.6    }}
            transition={{ duration: 0.6  }}" >"
          <motion .p""
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            transition={{ duration: 0.6, delay: 0.1 }}" >"
            className="mt-6 text-lg leading-8 text-gray-600"
            transition={{ duration: 0.6, delay: 0.2 }}" >"
        {/* Case Studies Grid */}""
        <div className="grid gap-8 lg: grid-cols-1">
            <motion .div
              key={study.id}"";
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover: shadow-xl transition-all duration-300";
        <div className=&apos;grid gap-8 lg:grid-cols-1&apos;>
          {caseStudies.map((study, index) => (&apos}
              className=&apos;bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300';
              initial={{ opacit,y: 0, y: 30 }}
              <div className="p-8"> {/* Header */}
                <div className="flex items-start justify-between mb-6">;
                  <div>;
                    <h3 className="text-xl font-semibold text-gray-900 mb-2"> {study.title}
                    </h3>;
                    <p className="text-gray-600 mb-4"> {study.description}
                    </p>;
                    <div className="flex items-center space-x-4 text-sm text-gray-500">;
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full"> {study.industry}
                      </span>;
                      <span>Duration: {study.duration}</span>;
                    </div>;
                </div> {/* Results */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"> {study.results.map((result, idx) => (;
                    <div key={idx} className="text-center">;
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-3">;
                        <div className="text-blue-600"> {result.icon}
                      <div className="text-2xl font-bold text-gray-900 mb-1"> {result.value}
                      <div className="text-sm text-gray-600"> {result.metric}
            >&apos;&apos;
              <div className=&apos;p-8&apos;>
                <div className=&apos;flex items-start justify-between mb-6&apos;>&apos;'
                    <h3 className=&apos;text-xl font-semibold text-gray-900 mb-2&apos;>
                      {study.title}&apos;
                    <p className=&apos;text-gray-600 mb-4&apos;>
                      {study.description}&apos;
                    <div className=&apos;flex items-center space-x-4 text-sm text-gray-500&apos;>&apos;'
                      <span className=&apos;bg-blue-100 text-blue-800 px-3 py-1 rounded-full&apos;>
                        {study.industry}&apos;
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover: shadow-xl transition-all duration-300" {/* Case Studies Grid */}"
        <div className="grid gap-8 lg:grid-cols-1">
              key={study.id}"
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
              <div className="p-8">"                {/* Header */}"                <div className="flex items-start justify-between mb-6">"                  <div>"                    <h3 className="text-xl font-semibold text-gray-900 mb-2">"                      {study.title}"                    </h3>
                    <p className="text-gray-600 mb-4">"                      {study.description}"                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">"                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">"                        {study.industry}"                      </span><span>Duration: {study.duration}</span>"
              transition={{ duration: 0.6, delay: index * 0.1 }}" >"
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>""
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    </h3>""
                    <p className="text-gray-600 mb-4">
                    </p>""
                    <div className="flex items-center space-x-4 text-sm text-gray-500">""
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                      <span>Duration: {study.duratio,n}</span>
                {/* Results: */}
                <div className="grid grid-cols-1 md: grid-cols-3: gap-6 mb-6">',' {study.results.map((result, idx) => (
                    <div: key={idx} className="text-center">';';
                      <div: className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-3">';';
                        <div: className="text-blue-600">';' {result.icon}
                      <div: className="text-2xl font-bold text-gray-900 mb-1">';' {result.value}
                      <div: className="text-sm text-gray-600">';' {/* Results */}
                <div className=&apos;grid grid-cols-1 md:grid-cols-3 gap-6 mb-6&apos;>
                  {study.results.map((result, idx) => (&apos}
                    <div key={idx} className=&apos;text-center&apos;>&apos;'
                      <div className=&apos;flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-3&apos;>&apos;'
                        <div className=&apos;text-blue-600&apos;>
                          {result.icon}&apos;
                      <div className=&apos;text-2xl font-bold text-gray-900 mb-1&apos;>
                        {result.value}&apos;
                      <div className=&apos;text-sm text-gray-600&apos;>
                        {result.metric}&apos {/* Results */}""
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {study.results.map((result, idx) => (""
                    <div key={idx} className="text-center">""
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-3">""
                        <div className="text-blue-600">
                      </div>""
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                      <div className="text-sm text-gray-600">
                {/* Technologies: */}
<h4 className="text-sm font-semibold text-gray-700 mb-3">Technologies Used</h4>"                  <div className="flex flex-wrap gap-2">"                    {study.technologies.map((tech, idx) => ("                      <span"
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Technologies Used</h4>';';
                  <div: className="flex flex-wrap gap-2">';' {study.technologies.map((tech, idx) => (
                      <span: key={idx}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">{tech}';';
                </div> {/* Technologies */}
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Technologies Used</h4>;
                  <div className="flex flex-wrap gap-2"> {study.technologies.map((tech, idx) => (;
                      <span;
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">{tech}
                  <h4 className=&apos;text-sm font-semibold text-gray-700 mb-3&apos;>Technologies Used&apos;</h4>
                  <div className=&apos;flex flex-wrap gap-2&apos;>
                    {study.technologies.map((tech, idx) => (&apos}
                        className=&apos;bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm&apos;>{tech}&apos;
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Technologies Used</h4>""
                  <div className="flex flex-wrap gap-2">
                      <span key={idx}""
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"" >"
                      <span key={idx}"
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm  >
            </motion.div>;
        {/* CTA: */}
          className="text-center mt-12';';
          transition={{ duration: 0.,6, delay: 0.4}}
          <p: className="text-lg text-gray-600 mb-6">';';
            Ready: to see similar results for your business?
        </div> {/* CTA */}
          className="text-center mt-12";
          className=&apos;text-center mt-12';
          <p className="text-lg text-gray-600 mb-6">;
            Ready to see similar results for your business?;
          <a;
            href='/contact';
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">;
            Start Your Project;
          </a>;
    </section>;
  )}
          <p className=&apos;text-lg text-gray-600 mb-6&apos;>
            Ready to see similar results for your business?&apos;
        <motion .div""
        <motion .div'
          className="text-center mt-12"
          transition={{ duration: 0.6, delay: 0.4 }}" >"
          <p className="text-lg text-gray-600 mb-6">
          <a ""
            href='/contact'
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover: from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"" >"
            href="/contact""            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl""          >"            Start Your Project</a>"
            href='/contact';';
            className="inline-flex: items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover: from-blue-700: hover:to-purple-700: transition-all duration-200 shadow-lg hover:shadow-xl">',';
            Start: Your Project
            href=&apos;/contact';
            className=&apos;inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hove,r:shadow-xl&apos;>
            Start Your Project&apos;&apos;
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover: from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
          <a "
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl  >
;""
;"
"