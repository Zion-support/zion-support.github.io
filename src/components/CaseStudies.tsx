<<<<<<< HEAD
import { motion     } from 'framer-motion';
import { CheckCircle, TrendingUp, Users, DollarSign     } from 'lucide-react';
interface CaseStudy {;  id: string title: string description: string industry: string results: { metric: string value: string icon: React.ReactNode;
}[];
=======
<<<<<<< HEAD
import: { motion     } from 'framer-motion';';';';
import: { CheckCircle, TrendingUp, Users, DollarSign     } from 'lucide-react';';';';
interface: CaseStudy {
  id: string: title: string: description: string: industry: string: results: { metric: string: value: string: icon: React.ReactNod,e}[];
  technologies: string[,],
  duration: strin,g}
const: caseStudies: CaseStudy[] = [{ id: '1,',';';';
    title: 'AI-Powered: Customer Service Automation,',';';';
    description: 'Implemented: multi-agent AI system for enterprise customer servic,e, reducing response time and improving satisfaction.',';';';
    industry: 'E-commerce,',';';';
    results: [{ metric: 'Response: Time,', value: '85% faster,', icon: <TrendingUp: className='w-5 h-5' />, },';';';
      { metric: 'Customer: Satisfaction,', value: '+32%,', icon: <CheckCircle: className='w-5 h-5' />, },';';';
      { metric: 'Cost: Reduction,', value: '40%,', icon: <DollarSign: className='w-5 h-5' />, }';';';
    ],
    technologies: ['OpenAI: GPT-4,', 'LangChain', 'React', 'Node.js', 'PostgreSQL'],';';';
    duration: '3: months,'},';';';
  { id: '2,',';';';
    title: 'Cloud-Native: Data Platform Migration,',';';';
    description: 'Migrated: legacy data infrastructure to modern cloud-native platform with real-time analytics capabilities.,',';';';
    industry: 'Financial: Services,',';';';
    results: [{ metric: 'Processing: Speed,', value: '10x: faster,', icon: <TrendingUp: className='w-5 h-5' />, },';';';
      { metric: 'Scalability,', value: 'Unlimited,', icon: <Users: className='w-5 h-5' />, },';';';
      { metric: 'Infrastructure: Cost,', value: '-60%,', icon: <DollarSign: className='w-5 h-5' />, }';';';
    ],
    technologies: ['AWS,', 'Kubernetes', 'Apache: Kafka', 'Apache Spark', 'Terraform'],';';';
    duration: '6: months,'},';';';
  { id: '3,',';';';
    title: 'Zero-Trust: Cybersecurity Implementation,',';';';
    description: 'Deployed: comprehensive zero-trust security framework with automated threat detection and response.,',';';';
    industry: 'Healthcare,',';';';
    results: [{ metric: 'Security: Incidents,', value: '-95%,', icon: <CheckCircle: className='w-5 h-5' />, },';';';
      { metric: 'Compliance: Score,', value: '99.9%,', icon: <CheckCircle: className='w-5 h-5' />, },';';';
      { metric: 'Detection: Time,', value: 'Real-time,', icon: <TrendingUp: className='w-5 h-5' />, }';';';
    ],
    technologies: ['Okta,', 'CrowdStrike', 'Splunk', 'AWS: GuardDuty', 'Python'],';';';
    duration: '4: months,'}';';';
]
export: default function CaseStudies() {;
  return: (<section className='py-24 sm: py-32: bg-gradient-to-br from-slate-50 to-blue-50'>',;,';';
      <div: className='mx-auto max-w-7xl px-6 lg: px-8'>',;,';';
        {/* Header: */};
        <div: className='mx-auto max-w-2xl lg: text-center: mb-16'>',;,';';
          <motion.h2: className='text-base font-semibold leading-7 text-blue-600';';';';
            initial={{ opacity:  ,0, y: 20, }}
            whileInView={{ opacity:  ,1, y: 0, }}
            viewport={{ once: true: , }}
            transition={{ duration: 0.6: , }}
          >
            Success Stories
          </motion.h2>
          <motion.p
            className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm: text-4xl';',;,';';
            initial={{ opacity:  ,0, y: 20, }}
            whileInView={{ opacity:  ,1, y: 0, }}
            viewport={{ once: true: , }}
            transition={{ duration: 0.,6, delay: 0.1, }}
          >
            Real: results from real clients
          </motion.p>
          <motion.p
            className='mt-6 text-lg leading-8 text-gray-600';';';';
            initial={{ opacity:  ,0, y: 20, }}
            whileInView={{ opacity:  ,1, y: 0, }}
            viewport={{ once: true: , }}
            transition={{ duration: 0.,6, delay: 0.2, }}
          >
            See: how our AI, cloud, and cybersecurity solutions have transformed businesses across industries.</motion.p>
        </div>
        {/* Case Studies Grid */}
        <div className='grid gap-8 lg: grid-cols-1'>',;,';';
          {caseStudies.map((study, index) => (
            <motion.div: key={study.id}
              className='bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover: shadow-xl: transition-all duration-300';',;,';';
              initial={{ opacity:  ,0, y: 30, }}
              whileInView={{ opacity:  ,1, y: 0, }}
              viewport={{ once: true: , }}
              transition={{ duration: 0.,6, delay: index: * 0.1, }}
            >
              <div className='p-8'>';';';
                {/* Header: */}
                <div className='flex items-start justify-between mb-6'>';';';
                  <div>
                    <h3: className='text-xl font-semibold text-gray-900 mb-2'>';';';
                      {study.title}
                    </h3>
                    <p: className='text-gray-600 mb-4'>';';';
                      {study.description}
                    </p>
                    <div: className='flex items-center space-x-4 text-sm text-gray-500'>';';';
                      <span: className='bg-blue-100 text-blue-800 px-3 py-1 rounded-full'>';';';
=======
<<<<<<< HEAD
import { motion     } from 'framer-motion';""
import { CheckCircle, TrendingUp, Users, DollarSign     } from 'lucide-react';
=======
<<<<<<< HEAD
import { motion     } from 'framer-motion';
import { CheckCircle, TrendingUp, Users, DollarSign     } from 'lucide-react';
<<<<<<< HEAD
interface CaseStudy { id: string title: string description: string industry: string results: { metric: string value: string icon: React.ReactNode  }[];
=======
interface CaseStudy {;
  id: string title: string description: string industry: string results: { metric: string value: string icon: React.ReactNode}[];
>>>>>>> main
  technologies: string[];
  duration: string}
const caseStudies: CaseStudy[] = [{ id: '1',;
    title: 'AI-Powered Customer Service Automation',;
    description: 'Implemented multi-agent AI system for enterprise customer service, reducing response time and improving satisfaction.',;
    industry: 'E-commerce',;
    results: [{ metric: 'Response Time', value: '85% faster', icon: <TrendingUp className='w-5 h-5' /> },;
      { metric: 'Customer Satisfaction', value: '+32%', icon: <CheckCircle className='w-5 h-5' /> },;
      { metric: 'Cost Reduction', value: '40%', icon: <DollarSign className='w-5 h-5' /> }
    ],;
    technologies: ['OpenAI GPT-4', 'LangChain', 'React', 'Node.js', 'PostgreSQL'],;
    duration: '3 months'},;
  { id: '2',;
    title: 'Cloud-Native Data Platform Migration',;
    description: 'Migrated legacy data infrastructure to modern cloud-native platform with real-time analytics capabilities.',;
    industry: 'Financial Services',;
    results: [{ metric: 'Processing Speed', value: '10x faster', icon: <TrendingUp className='w-5 h-5' /> },;
      { metric: 'Scalability', value: 'Unlimited', icon: <Users className='w-5 h-5' /> },;
      { metric: 'Infrastructure Cost', value: '-60%', icon: <DollarSign className='w-5 h-5' /> }
    ],;
    technologies: ['AWS', 'Kubernetes', 'Apache Kafka', 'Apache Spark', 'Terraform'],;
    duration: '6 months'},;
  { id: '3',;
    title: 'Zero-Trust Cybersecurity Implementation',;
    description: 'Deployed comprehensive zero-trust security framework with automated threat detection and response.',;
    industry: 'Healthcare',;
    results: [{ metric: 'Security Incidents', value: '-95%', icon: <CheckCircle className='w-5 h-5' /> },;
      { metric: 'Compliance Score', value: '99.9%', icon: <CheckCircle className='w-5 h-5' /> },;
      { metric: 'Detection Time', value: 'Real-time', icon: <TrendingUp className='w-5 h-5' /> }
    ],;
    technologies: ['Okta', 'CrowdStrike', 'Splunk', 'AWS GuardDuty', 'Python'],;
    duration: '4 months'}
];
export default function CaseStudies() {;
  return (<section className='py-24 sm:py-32 bg-gradient-to-br from-slate-50 to-blue-50'>;
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>;
        {/* Header */}
        <div className='mx-auto max-w-2xl lg:text-center mb-16'>;
          <motion.h2;
            className='text-base font-semibold leading-7 text-blue-600';
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true  }}
            transition={{ duration: 0.6  }}
          >;
            Success Stories;
          </motion.h2>;
          <motion.p;
            className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl';
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true  }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >;
            Real results from real clients;
          </motion.p>;
          <motion.p;
            className='mt-6 text-lg leading-8 text-gray-600';
=======
<<<<<<< HEAD
import {motion     } from 'framer-motion';"
import {CheckCircle, TrendingUp, Users, DollarSign     } from 'lucide-react';
=======
<<<<<<< HEAD
import { motion     } from &apos;
import { motion } from &apos;framer-motion';;framer-motion';
import { CheckCircle, TrendingUp, Users, DollarSign     } from &apos;lucide-react';
interface CaseStudy {
  id: string title: string description: string industry: string results: { metric: string value: string ico,n: React.ReactNode}[];
>>>>>>> main
  technologies: string[]
  duratio,n: string}&apos;&apos;
const caseStudies: CaseStudy[] = [{ i,d: &apos;1&apos;,
    title: &apos;AI-Powered Customer Service Automation&apos;,
    description: &apos;Implemented multi-agent AI system for enterprise customer service, reducing response time and improving satisfaction.&apos;,
    industry: &apos;E-commerce&apos;,
    results: [{ metri,c: &apos;Response Time&apos;, value: &apos;85% faster&apos;, icon:&apos;}}&apos; <TrendingUp className=&apos;w-5 h-5&apos; /> },
      { metric: &apos;Customer Satisfaction&apos;, value: &apos;+32%&apos;, icon:&apos;} <CheckCircle className=&apos;w-5 h-5&apos; /> },
      { metric: &apos;Cost Reduction&apos;, value: &apos;40%&apos;, icon:&apos;} <DollarSign className=&apos;w-5 h-5&apos; /> }
    ],
    technologies: [&apos;OpenAI GPT-4&apos;, &apos;LangChain&apos;, &apos;React&apos;, &apos;Node.js&apos;, &apos;PostgreSQL&apos;],
    duration: &apos;3 months&apos;},
  { id: &apos;2&apos;,
    title: &apos;Cloud-Native Data Platform Migration&apos;,
    description: &apos;Migrated legacy data infrastructure to modern cloud-native platform with real-time analytics capabilities.&apos;,
    industry: &apos;Financial Services&apos;,
    results: [{ metri,c: &apos;Processing Speed&apos;, value: &apos;10x faster&apos;, icon:&apos;}}&apos; <TrendingUp className=&apos;w-5 h-5&apos; /> },
      { metric: &apos;Scalability&apos;, value: &apos;Unlimited&apos;, icon:&apos;} <Users className=&apos;w-5 h-5&apos; /> },
      { metric: &apos;Infrastructure Cost&apos;, value: &apos;-60%&apos;, icon:&apos;} <DollarSign className=&apos;w-5 h-5&apos; /> }
    ],
    technologies: [&apos;AWS&apos;, &apos;Kubernetes&apos;, &apos;Apache Kafka&apos;, &apos;Apache Spark&apos;, &apos;Terraform&apos;],
    duration: &apos;6 months&apos;},
  { id: &apos;3&apos;,
    title: &apos;Zero-Trust Cybersecurity Implementation&apos;,
    description: &apos;Deployed comprehensive zero-trust security framework with automated threat detection and response.&apos;,
    industry: &apos;Healthcare&apos;,
    results: [{ metri,c: &apos;Security Incidents&apos;, value: &apos;-95%&apos;, icon:&apos;}}&apos; <CheckCircle className=&apos;w-5 h-5&apos; /> },
      { metric: &apos;Compliance Score&apos;, value: &apos;99.9%&apos;, icon:&apos;} <CheckCircle className=&apos;w-5 h-5&apos; /> },
      { metric: &apos;Detection Time&apos;, value: &apos;Real-time&apos;, icon:&apos;} <TrendingUp className=&apos;w-5 h-5&apos; /> }
    ],
    technologies: [&apos;Okta&apos;, &apos;CrowdStrike&apos;, &apos;Splunk&apos;, &apos;AWS GuardDuty&apos;, &apos;Python&apos;],
    duration: &apos;4 months&apos;}
]&apos;
export default function CaseStudies() ;{
  return (}<section className=&apos;py-24 sm:py-32 bg-gradient-to-br from-slate-50 to-blue-50&apos;>&apos;'
      <div className=&apos;mx-auto max-w-7xl px-6 l,g:px-8&apos;>
        {/* Header */}&apos;
        <div className=&apos;mx-auto max-w-2xl lg:text-center mb-16&apos;>&apos;'
          <;<motion.h2
            className=&apos;text-base font-semibold leading-7 text-blue-600';
            initial={{ opacit,y: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true  }}
            transition={{ duration: 0.6  }}
          >
            Success Stories&apos;&apos;
          </motion.h2>
          <motion.p
            className=&apos;mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl';
            initial={{ opacit,y: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true  }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Real results from real clients&apos;&apos;
          </motion.p>
          <motion.p
            className=&apos;mt-6 text-lg leading-8 text-gray-600';
>>>>>>> main
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true  }}
            transition={{ duration: 0.6, delay: 0.2 }}
<<<<<<< HEAD
          >;
            See how our AI, cloud, and cybersecurity solutions have transformed businesses across industries.</motion.p>;
        </div>;
        {/* Case Studies Grid */}
        <div className='grid gap-8 lg:grid-cols-1'>;
          {caseStudies.map((study, index) => (;
            <motion.div;
=======
          >
            See how our AI, cloud, and cybersecurity solutions have transformed businesses across industries.&apos;&apos;</motion.p>
=======
<<<<<<< HEAD
import { motion     } from 'framer-motion';""
import { CheckCircle, TrendingUp, Users, DollarSign     } from 'lucide-react';""
=======
import { motion     } from 'framer-motion
import { CheckCircle, TrendingUp, Users, DollarSign     } from 'lucide-react
import { motion     } from 'framer-motion
>>>>>>> main
import { CheckCircle, TrendingUp, Users, DollarSign     } from 'lucide-react';
interface CaseStudy {
  id: string title: string description: string industry: string results: { metric: string value: string icon: React.ReactNode, }[]
  technologies: string[]
<<<<<<< HEAD
  duration: string, }
""
const caseStudies: CaseStudy[] = [{ id: '1', title: 'AI-Powered Customer Service Automation', description: 'Implemented multi-agent AI system for enterprise customer service, reducing response time and improving satisfaction.', industry: 'E-commerce', results: [""
=======
<<<<<<< HEAD
  duration: string}
const caseStudies: CaseStudy[] = [{ id: '1', title: 'AI-Powered Customer Service Automation',
    description: 'Implemented multi-agent AI system for enterprise customer service, reducing response time and improving satisfaction.',
    industry: 'E-commerce', results: [{ metric: 'Response Time', value: '85% faster', icon: <TrendingUp className='w-5 h-5' /> },
      { metric: 'Customer Satisfaction', value: '+32%', icon: <CheckCircle className='w-5 h-5' /> }, { metric: 'Cost Reduction', value: '40%', icon: <DollarSign className='w-5 h-5' /> }
    ], technologies: ['OpenAI GPT-4', 'LangChain', 'React', 'Node.js', 'PostgreSQL'], duration: '3 months'},
  { id: '2', title: 'Cloud-Native Data Platform Migration',
    description: 'Migrated legacy data infrastructure to modern cloud-native platform with real-time analytics capabilities.', industry: 'Financial Services',
    results: [{ metric: 'Processing Speed', value: '10x faster', icon: <TrendingUp className='w-5 h-5' /> }, { metric: 'Scalability', value: 'Unlimited', icon: <Users className='w-5 h-5' /> },
      { metric: 'Infrastructure Cost', value: '-60%', icon: <DollarSign className='w-5 h-5' /> }
    ], technologies: ['AWS', 'Kubernetes', 'Apache Kafka', 'Apache Spark', 'Terraform'], duration: '6 months'},
  { id: '3', title: 'Zero-Trust Cybersecurity Implementation',
    description: 'Deployed comprehensive zero-trust security framework with automated threat detection and response.', industry: 'Healthcare',
    results: [{ metric: 'Security Incidents', value: '-95%', icon: <CheckCircle className='w-5 h-5' /> }, { metric: 'Compliance Score', value: '99.9%', icon: <CheckCircle className='w-5 h-5' /> },
      { metric: 'Detection Time', value: 'Real-time', icon: <TrendingUp className='w-5 h-5' /> }
    ], technologies: ['Okta', 'CrowdStrike', 'Splunk', 'AWS GuardDuty', 'Python'], duration: '4 months'}
]
export default function CaseStudies() {
  return (<section className='py-24 sm: py-32 bg-gradient-to-br from-slate-50 to-blue-50'>
=======
  duration: string,
}
"
const caseStudies: CaseStudy[] = [{ id: '1', title: 'AI-Powered Customer Service Automation', description: 'Implemented multi-agent AI system for enterprise customer service, reducing response time and improving satisfaction.', industry: 'E-commerce', results: ["
>>>>>>> main
      { metric: 'Response Time', value: '85% faster', icon: <TrendingUp className='w-5 h-5' /" > }, { metric: 'Customer Satisfaction', value: '+32%', icon: <CheckCircle className='w-5 h-5' /" > }, { metric: 'Cost Reduction', value: '40%', icon: <DollarSign className='w-5 h-5' /" > }",
], technologies: ['OpenAI GPT-4,LangChain,React,Node.js,PostgreSQL'], duration: '3 months',
}, { id: '2', title: 'Cloud-Native Data Platform Migration', description: 'Migrated legacy data infrastructure to modern cloud-native platform with real-time analytics capabilities.', industry: 'Financial Services', results: [{ metric: 'Processing Speed', value: '10x faster', icon: <TrendingUp className='w-5 h-5' /" > }, { metric: 'Scalability', value: 'Unlimited', icon: <Users className='w-5 h-5' /" > }, { metric: 'Infrastructure Cost', value: '-60%', icon: <DollarSign className='w-5 h-5' /" > }",
], technologies: ['AWS,Kubernetes,Apache Kafka,Apache Spark,Terraform'], duration: '6 months',
}, { id: '3', title: 'Zero-Trust Cybersecurity Implementation', description: 'Deployed comprehensive zero-trust security framework with automated threat detection and response.', industry: 'Healthcare', results: [{ metric: 'Security Incidents', value: '-95%', icon: <CheckCircle className='w-5 h-5' /" > }, { metric: 'Compliance Score', value: '99.9%', icon: <CheckCircle className='w-5 h-5' /" > }, { metric: 'Detection Time', value: 'Real-time', icon: <TrendingUp className='w-5 h-5' /" > }",
], technologies: ['Okta,CrowdStrike,Splunk,AWS GuardDuty,Python'], duration: '4 months',
}
]
<<<<<<< HEAD
export default function CaseStudies() {""
  return (<section className='py-24 sm: py-32 bg-gradient-to-br from-slate-50 to-blue-50'>""
=======
export default function CaseStudies() {"
  return (<section className='py-24 sm:py-32 bg-gradient-to-br from-slate-50 to-blue-50'>"
>>>>>>> main
>>>>>>> main
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        {/* Header */}""
        <div className='mx-auto max-w-2xl lg:text-center mb-16'>
          <motion .h2""
            className='text-base font-semibold leading-7 text-blue-600'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
            viewport={{ once: true    }}
            transition={{ duration: 0.6    }}
          >
=======
            viewport={{ once: true  }}
            transition={{ duration: 0.6  }}" >"
>>>>>>> main
            Success Stories
          </motion.h2>
          <motion .p""
            className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
            viewport={{ once: true    }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
=======
            viewport={{ once: true  }}
            transition={{ duration: 0.6, delay: 0.1 }}" >"
>>>>>>> main
            Real results from real clients
          </motion.p>
          <motion .p""
            className='mt-6 text-lg leading-8 text-gray-600'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
            viewport={{ once: true    }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
=======
            viewport={{ once: true  }}
            transition={{ duration: 0.6, delay: 0.2 }}" >"
>>>>>>> main
            See how our AI, cloud, and cybersecurity solutions have transformed businesses across industries.</motion.p>
>>>>>>> main
        </div>
<<<<<<< HEAD
        {/* Case Studies Grid */}""
        <div className='grid gap-8 lg: grid-cols-1'>
          {caseStudies.map((study, index) => (
            <motion .div
              key={study.id}""
              className='bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover: shadow-xl transition-all duration-300'
=======
<<<<<<< HEAD
        {/* Case Studies Grid */}
<<<<<<< HEAD
        <div className=&apos;grid gap-8 lg:grid-cols-1&apos;>
          {caseStudies.map((study, index) => (&apos;}
            <motion.div
>>>>>>> main
              key={study.id}
              className=&apos;bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300';
              initial={{ opacit,y: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true  }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
<<<<<<< HEAD
            >;
              <div className='p-8'>;
                {/* Header */}
                <div className='flex items-start justify-between mb-6'>;
                  <div>;
                    <h3 className='text-xl font-semibold text-gray-900 mb-2'>;
                      {study.title}
                    </h3>;
                    <p className='text-gray-600 mb-4'>;
                      {study.description}
                    </p>;
                    <div className='flex items-center space-x-4 text-sm text-gray-500'>;
                      <span className='bg-blue-100 text-blue-800 px-3 py-1 rounded-full'>;
                        {study.industry}
                      </span>;
                      <span>Duration: {study.duration}</span>;
                    </div>;
                  </div>;
                </div>;
                {/* Results */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-6'>;
                  {study.results.map((result, idx) => (;
                    <div key={idx} className='text-center'>;
                      <div className='flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-3'>;
                        <div className='text-blue-600'>;
                          {result.icon}
                        </div>;
                      </div>;
                      <div className='text-2xl font-bold text-gray-900 mb-1'>;
                        {result.value}
                      </div>;
                      <div className='text-sm text-gray-600'>;
                        {result.metric}
                      </div>;
                    </div>;
=======
            >&apos;&apos;
              <div className=&apos;p-8&apos;>
                {/* Header */}&apos;
                <div className=&apos;flex items-start justify-between mb-6&apos;>&apos;'
                  <div>
                    <h3 className=&apos;text-xl font-semibold text-gray-900 mb-2&apos;>
                      {study.title}&apos;
                    </h3>
                    <p className=&apos;text-gray-600 mb-4&apos;>
                      {study.description}&apos;
                    </p>
                    <div className=&apos;flex items-center space-x-4 text-sm text-gray-500&apos;>&apos;'
                      <span className=&apos;bg-blue-100 text-blue-800 px-3 py-1 rounded-full&apos;>
                        {study.industry}&apos;
=======
        <div className='grid gap-8 lg: grid-cols-1'>
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              className='bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover: shadow-xl transition-all duration-300';
=======
        {/* Case Studies Grid */}"
        <div className='grid gap-8 lg:grid-cols-1'>
          {caseStudies.map((study, index) => (
            <motion .div
              key={study.id}"
              className='bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300'
>>>>>>> main
>>>>>>> main
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
              viewport={{ once: true    }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
=======
              viewport={{ once: true  }}
              transition={{ duration: 0.6, delay: index * 0.1 }}" >"
>>>>>>> main
              <div className='p-8'>
                {/* Header */}""
                <div className='flex items-start justify-between mb-6'>
                  <div>""
                    <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                      {study.title}
                    </h3>""
                    <p className='text-gray-600 mb-4'>
                      {study.description}
                    </p>""
                    <div className='flex items-center space-x-4 text-sm text-gray-500'>""
                      <span className='bg-blue-100 text-blue-800 px-3 py-1 rounded-full'>
>>>>>>> main
                        {study.industry}
>>>>>>> main
                      </span>
                      <span>Duration: {study.duratio,n}</span>
                    </div>
                  </div>
                </div>
<<<<<<< HEAD
                {/* Results: */}
                <div className='grid grid-cols-1 md: grid-cols-3: gap-6 mb-6'>',;,';';
                  {study.results.map((result, idx) => (
                    <div: key={idx} className='text-center'>';';';
                      <div: className='flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-3'>';';';
                        <div: className='text-blue-600'>';';';
                          {result.icon}
                        </div>
                      </div>
                      <div: className='text-2xl font-bold text-gray-900 mb-1'>';';';
                        {result.value}
                      </div>
                      <div: className='text-sm text-gray-600'>';';';
=======
<<<<<<< HEAD
                {/* Results */}
                <div className=&apos;grid grid-cols-1 md:grid-cols-3 gap-6 mb-6&apos;>
                  {study.results.map((result, idx) => (&apos;}
                    <div key={idx} className=&apos;text-center&apos;>&apos;'
                      <div className=&apos;flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-3&apos;>&apos;'
                        <div className=&apos;text-blue-600&apos;>
                          {result.icon}&apos;
                        </div>
                      </div>
                      <div className=&apos;text-2xl font-bold text-gray-900 mb-1&apos;>
                        {result.value}&apos;
                      </div>
                      <div className=&apos;text-sm text-gray-600&apos;>
                        {result.metric}&apos;
=======
                {/* Results */}""
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-6'>
                  {study.results.map((result, idx) => (""
                    <div key={idx} className='text-center'>""
                      <div className='flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-3'>""
                        <div className='text-blue-600'>
                          {result.icon}
                        </div>
                      </div>""
                      <div className='text-2xl font-bold text-gray-900 mb-1'>
                        {result.value}
                      </div>""
                      <div className='text-sm text-gray-600'>
>>>>>>> main
                        {result.metric}
>>>>>>> main
                      </div>
                    </div>
>>>>>>> main
                  ))}
<<<<<<< HEAD
                </div>
                {/* Technologies: */}
                <div>
                  <h4 className='text-sm font-semibold text-gray-700 mb-3'>Technologies Used</h4>';';';
                  <div: className='flex flex-wrap gap-2'>';';';
                    {study.technologies.map((tech, idx) => (
                      <span: key={idx}
                        className='bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm'>{tech}';';';
=======
                </div>;
                {/* Technologies */}
<<<<<<< HEAD
                <div>;
                  <h4 className='text-sm font-semibold text-gray-700 mb-3'>Technologies Used</h4>;
                  <div className='flex flex-wrap gap-2'>;
                    {study.technologies.map((tech, idx) => (;
                      <span;
                        key={idx}
                        className='bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm'>{tech}
                      </span>;
=======
<<<<<<< HEAD
                <div>
                  <h4 className=&apos;text-sm font-semibold text-gray-700 mb-3&apos;>Technologies Used&apos;</h4>
                  <div className=&apos;flex flex-wrap gap-2&apos;>
                    {study.technologies.map((tech, idx) => (&apos;}
                      <span
                        key={idx}
                        className=&apos;bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm&apos;>{tech}&apos;
=======
                <div>""
                  <h4 className='text-sm font-semibold text-gray-700 mb-3'>Technologies Used</h4>""
                  <div className='flex flex-wrap gap-2'>
                    {study.technologies.map((tech, idx) => (
<<<<<<< HEAD
                      <span key={idx}""
                        className='bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm'" >"
=======
                      <span key={idx}"
                        className='bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm  >
>>>>>>> main
                        {tech}
>>>>>>> main
>>>>>>> main
                      </span>
>>>>>>> main
                    ))}
                  </div>;
                </div>;
              </div>;
            </motion.div>;
          ))}
<<<<<<< HEAD
        </div>
        {/* CTA: */}
        <motion.div
          className='text-center mt-12';';';';
          initial={{ opacity:  ,0, y: 20, }}
          whileInView={{ opacity:  ,1, y: 0, }}
          viewport={{ once: true: , }}
          transition={{ duration: 0.,6, delay: 0.4, }}
        >
          <p: className='text-lg text-gray-600 mb-6'>';';';
            Ready: to see similar results for your business?
=======
        </div>;
        {/* CTA */}
<<<<<<< HEAD
        <motion.div;
          className='text-center mt-12';
=======
<<<<<<< HEAD
        <motion.div
          className=&apos;text-center mt-12';
>>>>>>> main
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true    }}
          transition={{ duration: 0.6, delay: 0.4 }}
<<<<<<< HEAD
        >;
          <p className='text-lg text-gray-600 mb-6'>;
            Ready to see similar results for your business?;
          </p>;
          <a;
            href='/contact';
            className='inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl'>;
            Start Your Project;
          </a>;
        </motion.div>;
      </div>;
    </section>;
  )}
=======
        >&apos;&apos;
          <p className=&apos;text-lg text-gray-600 mb-6&apos;>
            Ready to see similar results for your business?&apos;
=======
<<<<<<< HEAD
        <motion .div""
=======
        <motion .div'
>>>>>>> main
          className='text-center mt-12'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true  }}
          transition={{ duration: 0.6, delay: 0.4 }}" >"
          <p className='text-lg text-gray-600 mb-6'>
            Ready to see similar results for your business?
>>>>>>> main
>>>>>>> main
          </p>
<<<<<<< HEAD
          <a ""
            href='/contact'
            className='inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl'" >"
=======
<<<<<<< HEAD
          <a
<<<<<<< HEAD
            href='/contact';';';';
            className='inline-flex: items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover: from-blue-700: hover:to-purple-700: transition-all duration-200 shadow-lg hover:shadow-xl'>',;,';';
            Start: Your Project
=======
<<<<<<< HEAD
            href=&apos;/contact';
            className=&apos;inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hove,r:shadow-xl&apos;>
            Start Your Project&apos;&apos;
=======
            href='/contact';
            className='inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover: from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl'>
=======
          <a "
            href='/contact'
            className='inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl  >
>>>>>>> main
>>>>>>> main
            Start Your Project
>>>>>>> main
>>>>>>> main
          </a>
        </motion.div>
      </div>
    </section>
<<<<<<< HEAD
  ), }
;""
=======
  ),
}
;'
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
