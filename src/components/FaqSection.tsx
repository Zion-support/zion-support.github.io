<<<<<<< HEAD
import React, { useState } from 'react';

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What services does Zion Tech offer?',
      answer: 'We offer comprehensive AI solutions, IT services, cloud migration, cybersecurity, data analytics, and digital transformation services to help businesses modernize and grow.',
    },
    {
      question: 'How long does implementation take?',
      answer: 'Implementation timelines vary based on project complexity. Simple solutions can be deployed in 2-4 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed timelines during consultation.',
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we offer 24/7 support for all our services. Our support includes monitoring, maintenance, updates, and technical assistance to ensure optimal performance.',
    },
    {
      question: 'What makes Zion Tech different?',
      answer: 'We combine cutting-edge AI technology with deep industry expertise, offer personalized solutions, provide comprehensive support, and maintain a track record of successful implementations across various industries.',
    },
    {
      question: 'Do you work with small businesses?',
      answer: 'Absolutely! We work with businesses of all sizes, from startups to large enterprises. Our solutions are scalable and can be tailored to fit any budget and requirement.',
    },
    {
      question: 'How do you ensure data security?',
      answer: 'We implement enterprise-grade security measures including encryption, access controls, regular security audits, compliance with industry standards, and continuous monitoring to protect your data.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Find answers to common questions about our services and processes.
        </p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
<<<<<<< HEAD
=======
=======
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





        <div className="max-w-3xl mx-auto bg-zion-blue-light rounded-lg border border-zion-purple/20 p-6">
          <div className="flex items-center mb-6">
            <FileText className="h-6 w-6 text-zion-cyan mr-2" />
            <h3 className="text-xl font-bold text-white">Common Questions</h3>
          </div>


          


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

                </AccordionContent>;
              </AccordionItem>))}
          </Accordion>;
        </div>;
      </div>;
    </section>);
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
