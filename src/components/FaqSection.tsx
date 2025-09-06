<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';

<<<<<<< HEAD
import { GradientHeading } from "./GradientHeading",
import {
=======
=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
const FaqSection = () => {
=======
const FaqSection: React.FC = () => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
      question: "What services does Zion Tech offer?",
      answer: "We offer comprehensive AI solutions, IT services, cloud migration, cybersecurity, data analytics, and digital transformation services to help businesses modernize and grow."
    },
    {
      question: "How long does implementation take?",
      answer: "Implementation timelines vary based on project complexity. Simple solutions can be deployed in 2-4 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed timelines during consultation."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer 24/7 support for all our services. Our support includes monitoring, maintenance, updates, and technical assistance to ensure optimal performance."
    },
    {
      question: "What makes Zion Tech different?",
      answer: "We combine cutting-edge AI technology with deep industry expertise, offer personalized solutions, provide comprehensive support, and maintain a track record of successful implementations across various industries."
    },
    {
      question: "Do you work with small businesses?",
      answer: "Absolutely! We work with businesses of all sizes, from startups to large enterprises. Our solutions are scalable and can be tailored to fit any budget and requirement."
    },
    {
      question: "How do you ensure data security?",
      answer: "We implement enterprise-grade security measures including encryption, access controls, regular security audits, compliance with industry standards, and continuous monitoring to protect your data."
    }
=======
      question: 'What services does Zion Tech offer?',
      answer: 'We offer comprehensive AI solutions, IT services, cloud migration, cybersecurity, data analytics, and digital transformation services to help businesses modernize and grow.',
=======
      question: "What services does Zion Tech Group offer?",
      answer: "We offer comprehensive AI solutions, IT services, cloud infrastructure, cybersecurity, data analytics, and digital transformation services. Our team specializes in cutting-edge technologies to help businesses modernize and scale."
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity and scope. Simple implementations can take 2-4 weeks, while comprehensive digital transformations may take 3-6 months. We provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you provide ongoing support after implementation?",
      answer: "Yes, we offer 24/7 support and maintenance services. Our support packages include monitoring, updates, troubleshooting, and optimization to ensure your systems run smoothly and efficiently."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve a wide range of industries including healthcare, finance, e-commerce, manufacturing, education, and government. Our solutions are tailored to meet the specific needs and compliance requirements of each industry."
    },
    {
      question: "How do you ensure data security and compliance?",
      answer: "We implement enterprise-grade security measures including encryption, access controls, regular audits, and compliance with industry standards like SOC 2, HIPAA, and GDPR. Security is our top priority in every solution we deliver."
    },
    {
<<<<<<< HEAD
      question: 'How do you ensure data security?',
      answer: 'We implement enterprise-grade security measures including encryption, access controls, regular security audits, compliance with industry standards, and continuous monitoring to protect your data.',
    },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
      question: "What makes Zion Tech Group different from competitors?",
      answer: "Our combination of cutting-edge technology expertise, proven methodology, 24/7 support, and commitment to client success sets us apart. We focus on delivering measurable ROI and long-term partnerships rather than just technical implementations."
    }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our services and processes.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-500" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our team is here to help. Contact us for personalized answers to your specific questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Contact Us
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default FaqSection;
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
<<<<<<< HEAD
=======
=======
>>>>>>> main
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======


>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import { FileText } from 'lucide-react'
const faqs = [
  {
    question: 'How do I publish my AI product or service?'
    answer:
      "Create an account, choose 'Post Your Product/Service for Free,' fill in the details, and submit for review. Listings go live within 24 hours if they pass our quality check."
  }
  {
    question: 'What types of AI jobs can I find or post?'
    answer:
      'You can hire or apply for roles such as machine learning engineer, data scientist, AI researcher, computer vision expert and more.'
  }
  {
    question: 'What IT equipment is available to rent or buy?'
    answer:
      'Servers, storage solutions, networking gear, power supplies and complete rack setups are offered with flexible purchase or rental options.'
  }
  {
    question: 'How does Zion ensure 24x7x365 availability?'
    answer:
      'We use distributed data centers with automated failover and a global support team working in rotating shifts.'
  }
  {
    question: "What is Zion's Green IT program?"
    answer:
      'Obsolete hardware is recycled or reused in line with WEEE, RoHS and e-Stewards standards, and we provide disposal certificates when required.'
  }
  {
    question: 'Are there fees for listing my products or services?'
    answer:
      'No. Listing products, services, jobs or CVs is free, with optional paid promotion for extra visibility.'
  }
  {
    question: 'How do I track my order status?'
    answer:
      'Check the Orders page in your account or ask our chatbot with your order ID for a quick update.'
  }
  {
    question: 'How do I contact support?'
    answer:
      'Reach us via the chat widget, email support@ziontechgroup.com or call +1 302 464 0950 anytime.'
  }
]
export function FaqSection() {
import { GradientHeading } from './GradientHeading';
  Accordion,;
  AccordionContent,;
  AccordionItem,;
  AccordionTrigger,;
} from '@/components/ui/accordion';
import { FileText } from 'lucide-react';
const faqs = [;
  {;
    question: 'How do I publish my AI product or service?',;
    answer:;
      "Create an account, choose 'Post Your Product/Service for Free,' fill in the details, and submit for review. Listings go live within 24 hours if they pass our quality check.",;
  },;
  {;
    question: 'What types of AI jobs can I find or post?',;
    answer:;
      'You can hire or apply for roles such as machine learning engineer, data scientist, AI researcher, computer vision expert and more.',;
  },;
  {;
    question: 'What IT equipment is available to rent or buy?',;
    answer:;
      'Servers, storage solutions, networking gear, power supplies and complete rack setups are offered with flexible purchase or rental options.',;
  },;
  {;
    question: 'How does Zion ensure 24x7x365 availability?',;
    answer:;
      'We use distributed data centers with automated failover and a global support team working in rotating shifts.',;
  },;
  {;
    question: "What is Zion's Green IT program?",;
    answer:;
      'Obsolete hardware is recycled or reused in line with WEEE, RoHS and e-Stewards standards, and we provide disposal certificates when required.',;
  },;
  {;
    question: 'Are there fees for listing my products or services?',;
    answer:;
      'No. Listing products, services, jobs or CVs is free, with optional paid promotion for extra visibility.',;
  },;
  {;
    question: 'How do I track my order status?',;
    answer:;
      'Check the Orders page in your account or ask our chatbot with your order ID for a quick update.',;
  },;
  {;
    question: 'How do I contact support?',;
    answer:;
      'Reach us via the chat widget, email support@ziontechgroup && ziontechgroup.com or call +1 302 464 0950 anytime.',;
  },;
];
<<<<<<< HEAD

export function FaqSection() {;
  return (
    <section className='py-20 bg-zion-blue' id='faq'>;
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>;
        <div className='text-center mb-12'>;
          <GradientHeading>Frequently Asked Questions</GradientHeading>;
          <p className='mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto'>;
import { GradientHeading } from './GradientHeading';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger} from "@/components/ui/accordion",
import { FileText } from 'lucide-react'

<<<<<<< HEAD
=======

import { GradientHeading } from "./GradientHeading";

        <div className='max - w-3xl mx - auto bg - zion - blue - light rounded - lg border border - zion - purple / 20 p - 6'>;
          <div className='flex items - center mb - 6'>;
            <FileText className='h - 6 w - 6 text - zion - cyan mr - 2' />;
            <h3 className='text - xl font - bold text - white'>Common Questions</h3>;
          </div>;
          <Accordion type='single' collapsible className='w - full'>;
            {faqs.map ((faq, index) => (
              <AccordionItem;
                key={index}
                value={`item-${index}`}
                className='border - zion - purple / 10';
              >;
                <AccordionTrigger className='text - white hover:text - zion - cyan'>                  {faq.question}
                </AccordionTrigger>;
                <AccordionContent className='text - zion - slate - light'>                  {faq.answer}
                <AccordionContent className="text - zion - slate - light">;
import {
  Accordion;
  AccordionContent;
  AccordionItem;
  AccordionTrigger } from '@/components / ui / accordion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components / ui / accordion';
const faqs = [;
  {

        <div className='max-w-3xl mx-auto bg-zion-blue-light rounded-lg border border-zion-purple/20 p-6'>;
          <div className='flex items-center mb-6'>;
            <FileText className='h-6 w-6 text-zion-cyan mr-2' />;
            <h3 className='text-xl font-bold text-white'>Common Questions</h3>;
          </div>;

          <Accordion type='single' collapsible className='w-full'>;
            {faqs && faqs.map((faq, index) => (;
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className='border-zion-purple/10'>;
                <AccordionTrigger className='text-white hover:text-zion-cyan'>                  {faq && faq.question}
                </AccordionTrigger>;
                <AccordionContent className='text-zion-slate-light'>                  {faq && faq.answer}
                <AccordionContent className="text-zion-slate-light">;
import {;
  Accordion;
  AccordionContent;
  AccordionItem;
  AccordionTrigger} from "@/components/ui/accordion";
import { FileText } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [;
  {;
    question: "How do I publish my AI product or service?",;
    answer:;
      "Create an account, choose 'Post Your Product/Service for Free,' fill in the details, and submit for review. Listings go live within 24 hours if they pass our quality check."};
  {;
    question: "What types of AI jobs can I find or post?",;
    answer:;
      "You can hire or apply for roles such as machine learning engineer, data scientist, AI researcher, computer vision expert and more."};
  {;
    question: "What IT equipment is available to rent or buy?",;
    answer:;
      "Servers, storage solutions, networking gear, power supplies and complete rack setups are offered with flexible purchase or rental options."};
  {;
    question: "How does Zion ensure 24x7x365 availability?",;
    answer:;
      "We use distributed data centers with automated failover and a global support team working in rotating shifts."};
  {;
    question: "What is Zion's Green IT program?",;
    answer:;
      "Obsolete hardware is recycled or reused in line with WEEE, RoHS and e-Stewards standards, and we provide disposal certificates when required."};
  {;
    question: "Are there fees for listing my products or services?",;
    answer:;
      "No. Listing products, services, jobs or CVs is free, with optional paid promotion for extra visibility."};
  {;
    question: "How do I track my order status?",;
    answer:;
      "Check the Orders page in your account or ask our chatbot with your order ID for a quick update."};
  {;
    question: "How do I contact support?",;
    answer:;
      "Reach us via the chat widget, email support@ziontechgroup && ziontechgroup.com or call +1 302 464 0950 anytime."}];


export function FaqSection() {;


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const faqs = [
  {
    question: "How do I publish my AI product or service?",
    answer:
<<<<<<< HEAD
      "Create an account, choose 'Post Your Product/Service for Free,' fill in the details, and submit for review. Listings go live within 24 hours if they pass our quality check."},
  {
    question: "What types of AI jobs can I find or post?",
    answer:
      "You can hire or apply for roles such as machine learning engineer, data scientist, AI researcher, computer vision expert and more."},
  {
    question: "What IT equipment is available to rent or buy?",
    answer:
      "Servers, storage solutions, networking gear, power supplies and complete rack setups are offered with flexible purchase or rental options."},
  {
    question: "How does Zion ensure 24x7x365 availability?",
    answer:
      "We use distributed data centers with automated failover and a global support team working in rotating shifts."},
  {
    question: "What is Zion's Green IT program?",
    answer:
      "Obsolete hardware is recycled or reused in line with WEEE, RoHS and e-Stewards standards, and we provide disposal certificates when required."},
  {
    question: "Are there fees for listing my products or services?",
    answer:
      "No. Listing products, services, jobs or CVs is free, with optional paid promotion for extra visibility."},
  {
    question: "How do I track my order status?",
    answer:
      "Check the Orders page in your account or ask our chatbot with your order ID for a quick update."},
  {
    question: "How do I contact support?",
    answer:
      "Reach us via the chat widget, email support@ziontechgroup.com or call +1 302 464 0950 anytime."}],
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

export function FaqSection() {
  return (

<<<<<<< HEAD
=======




>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <div className="max-w-3xl mx-auto bg-zion-blue-light rounded-lg border border-zion-purple/20 p-6">
          <div className="flex items-center mb-6">
            <FileText className="h-6 w-6 text-zion-cyan mr-2" />
            <h3 className="text-xl font-bold text-white">Common Questions</h3>
          </div>


          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-zion-purple/10">
                <AccordionTrigger className="text-white hover:text-zion-cyan">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-zion-slate-light">
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { GradientHeading } from "./GradientHeading",;
import {;
  Accordion,;
  AccordionContent,;
  AccordionItem,;
  AccordionTrigger} from "@/components/ui/accordion",;
import { FileText } from 'lucide-react';
const faqs = [;
  {;
    question: "How do I publish my AI product or service?",;
    answer:;
      "Create an account, choose 'Post Your Product/Service for Free,' fill in the details, and submit for review. Listings go live within 24 hours if they pass our quality check."},;
  {;
    question: "What types of AI jobs can I find or post?",;
    answer:;
      "You can hire or apply for roles such as machine learning engineer, data scientist, AI researcher, computer vision expert and more."},;
  {;
    question: "What IT equipment is available to rent or buy?",;
    answer:;
      "Servers, storage solutions, networking gear, power supplies and complete rack setups are offered with flexible purchase or rental options."},;
  {;
    question: "How does Zion ensure 24x7x365 availability?",;
    answer:;
      "We use distributed data centers with automated failover and a global support team working in rotating shifts."},;
  {;
    question: "What is Zion's Green IT program?",;
    answer:;
      "Obsolete hardware is recycled or reused in line with WEEE, RoHS and e-Stewards standards, and we provide disposal certificates when required."},;
  {;
    question: "Are there fees for listing my products or services?",;
    answer:;
      "No. Listing products, services, jobs or CVs is free, with optional paid promotion for extra visibility."},;
  {;
    question: "How do I track my order status?",;
    answer:;
      "Check the Orders page in your account or ask our chatbot with your order ID for a quick update."},;
  {;
    question: "How do I contact support?",;
    answer:;
      "Reach us via the chat widget, email support@ziontechgroup.com or call +1 302 464 0950 anytime."}];
export function FaqSection() {;
  return (;
    <section className="py-20 bg-zion-blue" id="faq">;
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
        <div className="text-center mb-12">;
          <GradientHeading>Frequently Asked Questions</GradientHeading>;
          <p className="mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto">;
            Find answers to common questions about AI product listings, IT equipment rentals, and datacenter maintenance services;
          </p>;
        </div>;
        <div className="max-w-3xl mx-auto bg-zion-blue-light rounded-lg border border-zion-purple/20 p-6">;
          <div className="flex items-center mb-6">;
            <FileText className="h-6 w-6 text-zion-cyan mr-2" />;
            <h3 className="text-xl font-bold text-white">Common Questions</h3>;
          </div>;
          <Accordion type="single" collapsible className="w-full">;
            {faqs.map((faq, index) => (;
              <AccordionItem key={index} value={`item-${index}`} className="border-zion-purple/10">;
                <AccordionTrigger className="text-white hover:text-zion-cyan">;
                  {faq.question}
                </AccordionTrigger>;
                <AccordionContent className="text-zion-slate-light">;
                  {faq.answer}
                </AccordionContent>;
              </AccordionItem>;
            ))}
          </Accordion>;
        </div>;
      </div>;
    </section>;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
=======
>>>>>>> fc9ad33614067110319e944190e4534fa8fe3115

export function FaqSection() {;
  return (
    <section className='py-20 bg-zion-blue' id='faq'>;
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>;
        <div className='text-center mb-12'>;
          <GradientHeading>Frequently Asked Questions</GradientHeading>;
          <p className='mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto'>;
import { GradientHeading } from './GradientHeading';
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components / ui / accordion';
import { FileText } from 'lucide-react';
const faqs = [;
  {
    question: 'How do I publish my AI product or service?',
    answer:;
      "Create an account, choose 'Post Your Product / Service for Free, ' fill in the details, and submit for review. Listings go live within 24 hours if they pass our quality check.",
  },
  {
    question: 'What types of AI jobs can I find or post?',
    answer:;
      'You can hire or apply for roles such as machine learning engineer, data scientist, AI researcher, computer vision expert and more.',
  },
  {
    question: 'What IT equipment is available to rent or buy?',
    answer:;
      'Servers, storage solutions, networking gear, power supplies and complete rack setups are offered with flexible purchase or rental options.',
  },
  {
    question: 'How does Zion ensure 24x7x365 availability?',
    answer:;
      'We use distributed data centers with automated failover and a global support team working in rotating shifts.',
  },
  {
    question: "What is Zion's Green IT program?",
    answer:;
      'Obsolete hardware is recycled or reused in line with WEEE, RoHS and e - Stewards standards, and we provide disposal certificates when required.',
  },
  {
    question: 'Are there fees for listing my products or services?',
    answer:;
      'No. Listing products, services, jobs or CVs is free, with optional paid promotion for extra visibility.',
  },
  {
    question: 'How do I track my order status?',
    answer:;
      'Check the Orders page in your account or ask our chatbot with your order ID for a quick update.',
  },
  {
    question: 'How do I contact support?',
    answer:;
      'Reach us via the chat widget, email support@ziontechgroup.com or call +1 302 464 0950 anytime.',
  },
];
export /**
 * FaqSection - Function description
 */
function FaqSection() {
  return (
    <section className='py - 20 bg - zion - blue' id='faq'>;
      <div className='container mx - auto px - 4 sm:px - 6 lg:px - 8'>;
        <div className='text - center mb - 12'>;
          <GradientHeading > Frequently Asked Questions</GradientHeading>;
          <p className='mt - 4 text - zion - slate - light text - xl max - w-2xl mx - auto'>;
            Find answers to common questions about AI product listings, IT;
            equipment rentals, and datacenter maintenance services;
          </p>;
        </div>;

import { GradientHeading } from "./GradientHeading";

        <div className='max - w-3xl mx - auto bg - zion - blue - light rounded - lg border border - zion - purple / 20 p - 6'>;
          <div className='flex items - center mb - 6'>;
            <FileText className='h - 6 w - 6 text - zion - cyan mr - 2' />;
            <h3 className='text - xl font - bold text - white'>Common Questions</h3>;
          </div>;
          <Accordion type='single' collapsible className='w - full'>;
            {faqs.map ((faq, index) => (
              <AccordionItem;
                key={index}
                value={`item-${index}`}
                className='border - zion - purple / 10';
              >;
                <AccordionTrigger className='text - white hover:text - zion - cyan'>                  {faq.question}
                </AccordionTrigger>;
                <AccordionContent className='text - zion - slate - light'>                  {faq.answer}
                <AccordionContent className="text - zion - slate - light">;
import {
  Accordion;
  AccordionContent;
  AccordionItem;
  AccordionTrigger } from '@/components / ui / accordion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components / ui / accordion';
const faqs = [;
  {

        <div className='max-w-3xl mx-auto bg-zion-blue-light rounded-lg border border-zion-purple/20 p-6'>;
          <div className='flex items-center mb-6'>;
            <FileText className='h-6 w-6 text-zion-cyan mr-2' />;
            <h3 className='text-xl font-bold text-white'>Common Questions</h3>;
          </div>;

          <Accordion type='single' collapsible className='w-full'>;
            {faqs && faqs.map((faq, index) => (;
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className='border-zion-purple/10'>;
                <AccordionTrigger className='text-white hover:text-zion-cyan'>                  {faq && faq.question}
                </AccordionTrigger>;
                <AccordionContent className='text-zion-slate-light'>                  {faq && faq.answer}
                <AccordionContent className="text-zion-slate-light">;
import {;
  Accordion;
  AccordionContent;
  AccordionItem;
  AccordionTrigger} from "@/components/ui/accordion";
import { FileText } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [;
  {;
    question: "How do I publish my AI product or service?",;
    answer:;
      "Create an account, choose 'Post Your Product/Service for Free,' fill in the details, and submit for review. Listings go live within 24 hours if they pass our quality check."};
  {;
    question: "What types of AI jobs can I find or post?",;
    answer:;
      "You can hire or apply for roles such as machine learning engineer, data scientist, AI researcher, computer vision expert and more."};
  {;
    question: "What IT equipment is available to rent or buy?",;
    answer:;
      "Servers, storage solutions, networking gear, power supplies and complete rack setups are offered with flexible purchase or rental options."};
  {;
    question: "How does Zion ensure 24x7x365 availability?",;
    answer:;
      "We use distributed data centers with automated failover and a global support team working in rotating shifts."};
  {;
    question: "What is Zion's Green IT program?",;
    answer:;
      "Obsolete hardware is recycled or reused in line with WEEE, RoHS and e-Stewards standards, and we provide disposal certificates when required."};
  {;
    question: "Are there fees for listing my products or services?",;
    answer:;
      "No. Listing products, services, jobs or CVs is free, with optional paid promotion for extra visibility."};
  {;
    question: "How do I track my order status?",;
    answer:;
      "Check the Orders page in your account or ask our chatbot with your order ID for a quick update."};
  {;
    question: "How do I contact support?",;
    answer:;
      "Reach us via the chat widget, email support@ziontechgroup && ziontechgroup.com or call +1 302 464 0950 anytime."}];

export function FaqSection() {;

const faqs = [
  {
    question: "How do I publish my AI product or service?",
    answer:

export function FaqSection() {
  return (

<<<<<<< HEAD




=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        <div className="max-w-3xl mx-auto bg-zion-blue-light rounded-lg border border-zion-purple/20 p-6">
          <div className="flex items-center mb-6">
            <FileText className="h-6 w-6 text-zion-cyan mr-2" />
            <h3 className="text-xl font-bold text-white">Common Questions</h3>
          </div>

<<<<<<< HEAD

          


          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-zion-purple/10">
                <AccordionTrigger className="text-white hover:text-zion-cyan">
    question: "How do I publish my AI product or service?",
    answer:;
      "Create an account, choose 'Post Your Product / Service for Free, ' fill in the details, and submit for review. Listings go live within 24 hours if they pass our quality check."}
  {
    question: "What types of AI jobs can I find or post?",
    answer:;
      "You can hire or apply for roles such as machine learning engineer, data scientist, AI researcher, computer vision expert and more."}
  {
    question: "What IT equipment is available to rent or buy?",
    answer:;
      "Servers, storage solutions, networking gear, power supplies and complete rack setups are offered with flexible purchase or rental options."}
  {
    question: "How does Zion ensure 24x7x365 availability?",
    answer:;
      "We use distributed data centers with automated failover and a global support team working in rotating shifts."}
  {
    question: "What is Zion's Green IT program?",
    answer:;
      "Obsolete hardware is recycled or reused in line with WEEE, RoHS and e - Stewards standards, and we provide disposal certificates when required."}
  {
    question: "Are there fees for listing my products or services?",
    answer:;
      "No. Listing products, services, jobs or CVs is free, with optional paid promotion for extra visibility."}
  {
    question: "How do I track my order status?",
    answer:;
      "Check the Orders page in your account or ask our chatbot with your order ID for a quick update."}
  {
    question: "How do I contact support?",
    answer:;
      "Reach us via the chat widget, email support@ziontechgroup.com or call +1 302 464 0950 anytime."}];
export /**
 * FaqSection - Function description
 */
function FaqSection() {
  return (
    <section className="py - 20 bg - zion - blue" id="faq">;
      <div className="container mx - auto px - 4 sm:px - 6 lg:px - 8">;
        <div className="text - center mb - 12">;
          <GradientHeading > Frequently Asked Questions</GradientHeading>;
          <p className="mt - 4 text - zion - slate - light text - xl max - w-2xl mx - auto">;
            Find answers to common questions about AI product listings, IT equipment rentals, and datacenter maintenance services;
          </p>;
        </div>;
        <div className="max - w-3xl mx - auto bg - zion - blue - light rounded - lg border border - zion - purple / 20 p - 6">;
          <div className="flex items - center mb - 6">;
            <FileText className="h - 6 w - 6 text - zion - cyan mr - 2" />;
            <h3 className="text - xl font - bold text - white">Common Questions</h3>;
          </div>;
          <Accordion type="single" collapsible className="w - full">;
            {faqs.map ((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border - zion - purple / 10">;
                <AccordionTrigger className="text - white hover:text - zion - cyan">;
                  {faq.question}

                </AccordionTrigger>
                <AccordionContent className="text-zion-slate-light">

import { GradientHeading } from "./GradientHeading",;
import {;
  Accordion,;
  AccordionContent,;
  AccordionItem,;
  AccordionTrigger} from "@/components/ui/accordion",;
import { FileText } from 'lucide-react';
const faqs = [;
  {;
    question: "How do I publish my AI product or service?",;
    answer:;
      "Create an account, choose 'Post Your Product/Service for Free,' fill in the details, and submit for review. Listings go live within 24 hours if they pass our quality check."},;
  {;
    question: "What types of AI jobs can I find or post?",;
    answer:;
      "You can hire or apply for roles such as machine learning engineer, data scientist, AI researcher, computer vision expert and more."},;
  {;
    question: "What IT equipment is available to rent or buy?",;
    answer:;
      "Servers, storage solutions, networking gear, power supplies and complete rack setups are offered with flexible purchase or rental options."},;
  {;
    question: "How does Zion ensure 24x7x365 availability?",;
    answer:;
      "We use distributed data centers with automated failover and a global support team working in rotating shifts."},;
  {;
    question: "What is Zion's Green IT program?",;
    answer:;
      "Obsolete hardware is recycled or reused in line with WEEE, RoHS and e-Stewards standards, and we provide disposal certificates when required."},;
  {;
    question: "Are there fees for listing my products or services?",;
    answer:;
      "No. Listing products, services, jobs or CVs is free, with optional paid promotion for extra visibility."},;
  {;
    question: "How do I track my order status?",;
    answer:;
      "Check the Orders page in your account or ask our chatbot with your order ID for a quick update."},;
  {;
    question: "How do I contact support?",;
    answer:;
      "Reach us via the chat widget, email support@ziontechgroup.com or call +1 302 464 0950 anytime."}];
export function FaqSection() {;
  return (;

    <section className="py-20 bg-zion-blue" id="faq">;
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
        <div className="text-center mb-12">;
          <GradientHeading>Frequently Asked Questions</GradientHeading>;
          <p className="mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto">;
            Find answers to common questions about AI product listings, IT equipment rentals, and datacenter maintenance services;
          </p>;
        </div>;

        <div className="max-w-3xl mx-auto bg-zion-blue-light rounded-lg border border-zion-purple/20 p-6">;
          <div className="flex items-center mb-6">;
            <FileText className="h-6 w-6 text-zion-cyan mr-2" />;
            <h3 className="text-xl font-bold text-white">Common Questions</h3>;
          </div>;

          <Accordion type="single" collapsible className="w-full">;
            {faqs && faqs.map((faq, index) => (;
              <AccordionItem key={index} value={`item-${index}`} className="border-zion-purple/10">;
                <AccordionTrigger className="text-white hover:text-zion-cyan">;

  );
}

<<<<<<< HEAD
export default FaqSection;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-cf89
=======
                </AccordionContent>;
              </AccordionItem>))}
          </Accordion>;
        </div>;
      </div>;
    </section>);
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
>>>>>>> fc9ad33614067110319e944190e4534fa8fe3115
=======
export default FaqSection;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  );
}

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
