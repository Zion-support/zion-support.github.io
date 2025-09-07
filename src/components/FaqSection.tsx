import { FileText } from 'lucide-react'
const faqs = [
  {
    question: 'How do I publish my AI product or service?'
    answer:
      "Create an account, choose 'Post Your Product/Service for Free,' fill in the details, and submit for review. Listings go live within 24 hours if they pass our quality check."
  }
    question: 'What types of AI jobs can I find or post?'
      'You can hire or apply for roles such as machine learning engineer, data scientist, AI researcher, computer vision expert and more.'
    question: 'What IT equipment is available to rent or buy?'
      'Servers, storage solutions, networking gear, power supplies and complete rack setups are offered with flexible purchase or rental options.'
    question: 'How does Zion ensure 24x7x365 availability?'
      'We use distributed data centers with automated failover and a global support team working in rotating shifts.'
    question: "What is Zion's Green IT program?"
      'Obsolete hardware is recycled or reused in line with WEEE, RoHS and e-Stewards standards, and we provide disposal certificates when required.'
    question: 'Are there fees for listing my products or services?'
      'No. Listing products, services, jobs or CVs is free, with optional paid promotion for extra visibility.'
    question: 'How do I track my order status?'
      'Check the Orders page in your account or ask our chatbot with your order ID for a quick update.'
    question: 'How do I contact support?'
      'Reach us via the chat widget, email support@ziontechgroup.com or call +1 302 464 0950 anytime.'
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
    question: 'What types of AI jobs can I find or post?',;
      'You can hire or apply for roles such as machine learning engineer, data scientist, AI researcher, computer vision expert and more.',;
    question: 'What IT equipment is available to rent or buy?',;
      'Servers, storage solutions, networking gear, power supplies and complete rack setups are offered with flexible purchase or rental options.',;
    question: 'How does Zion ensure 24x7x365 availability?',;
      'We use distributed data centers with automated failover and a global support team working in rotating shifts.',;
    question: "What is Zion's Green IT program?",;
      'Obsolete hardware is recycled or reused in line with WEEE, RoHS and e-Stewards standards, and we provide disposal certificates when required.',;
    question: 'Are there fees for listing my products or services?',;
      'No. Listing products, services, jobs or CVs is free, with optional paid promotion for extra visibility.',;
    question: 'How do I track my order status?',;
      'Check the Orders page in your account or ask our chatbot with your order ID for a quick update.',;
    question: 'How do I contact support?',;
      'Reach us via the chat widget, email support@ziontechgroup && ziontechgroup.com or call +1 302 464 0950 anytime.',;
];

export function FaqSection() {;
  return (

    <section className='py-20 bg-zion-blue' id='faq'>;
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>;
        <div className='text-center mb-12'>;
          <GradientHeading>Frequently Asked Questions</GradientHeading>;
          <p className='mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto'>;

          <Accordion type='single' collapsible className='w-full'>
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className='border-zion-purple/10'
              >
                <AccordionTrigger className='text-white hover:text-zion-cyan'>                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className='text-zion-slate-light'>                  {faq.answer}
                <AccordionContent className="text-zion-slate-light">
import {
  Accordion
  AccordionContent
  AccordionItem
  AccordionTrigger} from "@/components/ui/accordion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

import { GradientHeading } from "./GradientHeading",

  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components / ui / accordion';
    question: 'How do I publish my AI product or service?',
      "Create an account, choose 'Post Your Product / Service for Free, ' fill in the details, and submit for review. Listings go live within 24 hours if they pass our quality check.",
  },
    question: 'What types of AI jobs can I find or post?',
      'You can hire or apply for roles such as machine learning engineer, data scientist, AI researcher, computer vision expert and more.',
    question: 'What IT equipment is available to rent or buy?',
      'Servers, storage solutions, networking gear, power supplies and complete rack setups are offered with flexible purchase or rental options.',
    question: 'How does Zion ensure 24x7x365 availability?',
      'We use distributed data centers with automated failover and a global support team working in rotating shifts.',
    question: "What is Zion's Green IT program?",
      'Obsolete hardware is recycled or reused in line with WEEE, RoHS and e - Stewards standards, and we provide disposal certificates when required.',
    question: 'Are there fees for listing my products or services?',
      'No. Listing products, services, jobs or CVs is free, with optional paid promotion for extra visibility.',
    question: 'How do I track my order status?',
      'Check the Orders page in your account or ask our chatbot with your order ID for a quick update.',
    question: 'How do I contact support?',
      'Reach us via the chat widget, email support@ziontechgroup.com or call +1 302 464 0950 anytime.',
export /**
 * FaqSection - Function description
 */
function FaqSection() {
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
          <Accordion type='single' collapsible className='w - full'>;
            {faqs.map ((faq, index) => (
              <AccordionItem;
                className='border - zion - purple / 10';
              >;
                <AccordionTrigger className='text - white hover:text - zion - cyan'>                  {faq.question}
                </AccordionTrigger>;
                <AccordionContent className='text - zion - slate - light'>                  {faq.answer}
                <AccordionContent className="text - zion - slate - light">;
  Accordion;
  AccordionContent;
  AccordionItem;
  AccordionTrigger } from '@/components / ui / accordion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components / ui / accordion';

        <div className='max-w-3xl mx-auto bg-zion-blue-light rounded-lg border border-zion-purple/20 p-6'>;
          <div className='flex items-center mb-6'>;
            <FileText className='h-6 w-6 text-zion-cyan mr-2' />;
            <h3 className='text-xl font-bold text-white'>Common Questions</h3>;

          <Accordion type='single' collapsible className='w-full'>;
            {faqs && faqs.map((faq, index) => (;
                className='border-zion-purple/10'>;
                <AccordionTrigger className='text-white hover:text-zion-cyan'>                  {faq && faq.question}
                <AccordionContent className='text-zion-slate-light'>                  {faq && faq.answer}
                <AccordionContent className="text-zion-slate-light">;
import {;
  AccordionTrigger} from "@/components/ui/accordion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

    question: "How do I publish my AI product or service?",;
      "Create an account, choose 'Post Your Product/Service for Free,' fill in the details, and submit for review. Listings go live within 24 hours if they pass our quality check."};
    question: "What types of AI jobs can I find or post?",;
      "You can hire or apply for roles such as machine learning engineer, data scientist, AI researcher, computer vision expert and more."};
    question: "What IT equipment is available to rent or buy?",;
      "Servers, storage solutions, networking gear, power supplies and complete rack setups are offered with flexible purchase or rental options."};
    question: "How does Zion ensure 24x7x365 availability?",;
      "We use distributed data centers with automated failover and a global support team working in rotating shifts."};
      "Obsolete hardware is recycled or reused in line with WEEE, RoHS and e-Stewards standards, and we provide disposal certificates when required."};
    question: "Are there fees for listing my products or services?",;
      "No. Listing products, services, jobs or CVs is free, with optional paid promotion for extra visibility."};
    question: "How do I track my order status?",;
      "Check the Orders page in your account or ask our chatbot with your order ID for a quick update."};
    question: "How do I contact support?",;
      "Reach us via the chat widget, email support@ziontechgroup && ziontechgroup.com or call +1 302 464 0950 anytime."}];

    question: "How do I publish my AI product or service?",

      "Create an account, choose 'Post Your Product/Service for Free,' fill in the details, and submit for review. Listings go live within 24 hours if they pass our quality check."},
    question: "What types of AI jobs can I find or post?",
      "You can hire or apply for roles such as machine learning engineer, data scientist, AI researcher, computer vision expert and more."},
    question: "What IT equipment is available to rent or buy?",
      "Servers, storage solutions, networking gear, power supplies and complete rack setups are offered with flexible purchase or rental options."},
    question: "How does Zion ensure 24x7x365 availability?",
      "We use distributed data centers with automated failover and a global support team working in rotating shifts."},
      "Obsolete hardware is recycled or reused in line with WEEE, RoHS and e-Stewards standards, and we provide disposal certificates when required."},
    question: "Are there fees for listing my products or services?",
      "No. Listing products, services, jobs or CVs is free, with optional paid promotion for extra visibility."},
    question: "How do I track my order status?",
      "Check the Orders page in your account or ask our chatbot with your order ID for a quick update."},
    question: "How do I contact support?",
      "Reach us via the chat widget, email support@ziontechgroup.com or call +1 302 464 0950 anytime."}],

    <section className="py-20 bg-zion-blue" id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <GradientHeading>Frequently Asked Questions</GradientHeading>
          <p className="mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto">
            Find answers to common questions about AI product listings, IT equipment rentals, and datacenter maintenance services
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-zion-blue-light rounded-lg border border-zion-purple/20 p-6">
          <div className="flex items-center mb-6">
            <FileText className="h-6 w-6 text-zion-cyan mr-2" />
            <h3 className="text-xl font-bold text-white">Common Questions</h3>

          <Accordion type="single" collapsible className="w-full">
              <AccordionItem key={index} value={`item-${index}`} className="border-zion-purple/10">
                <AccordionTrigger className="text-white hover:text-zion-cyan">
      "Create an account, choose 'Post Your Product / Service for Free, ' fill in the details, and submit for review. Listings go live within 24 hours if they pass our quality check."}
      "You can hire or apply for roles such as machine learning engineer, data scientist, AI researcher, computer vision expert and more."}
      "Servers, storage solutions, networking gear, power supplies and complete rack setups are offered with flexible purchase or rental options."}
      "We use distributed data centers with automated failover and a global support team working in rotating shifts."}
      "Obsolete hardware is recycled or reused in line with WEEE, RoHS and e - Stewards standards, and we provide disposal certificates when required."}
      "No. Listing products, services, jobs or CVs is free, with optional paid promotion for extra visibility."}
      "Check the Orders page in your account or ask our chatbot with your order ID for a quick update."}
      "Reach us via the chat widget, email support@ziontechgroup.com or call +1 302 464 0950 anytime."}];
    <section className="py - 20 bg - zion - blue" id="faq">;
      <div className="container mx - auto px - 4 sm:px - 6 lg:px - 8">;
        <div className="text - center mb - 12">;
          <p className="mt - 4 text - zion - slate - light text - xl max - w-2xl mx - auto">;
            Find answers to common questions about AI product listings, IT equipment rentals, and datacenter maintenance services;
        <div className="max - w-3xl mx - auto bg - zion - blue - light rounded - lg border border - zion - purple / 20 p - 6">;
          <div className="flex items - center mb - 6">;
            <FileText className="h - 6 w - 6 text - zion - cyan mr - 2" />;
            <h3 className="text - xl font - bold text - white">Common Questions</h3>;
          <Accordion type="single" collapsible className="w - full">;
              <AccordionItem key={index} value={`item-${index}`} className="border - zion - purple / 10">;
                <AccordionTrigger className="text - white hover:text - zion - cyan">;
                  {faq.question}

                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
    </section>;
  );
};
import { GradientHeading } from "./GradientHeading",;
  AccordionTrigger} from "@/components/ui/accordion",;
      "Create an account, choose 'Post Your Product/Service for Free,' fill in the details, and submit for review. Listings go live within 24 hours if they pass our quality check."},;
      "You can hire or apply for roles such as machine learning engineer, data scientist, AI researcher, computer vision expert and more."},;
      "Servers, storage solutions, networking gear, power supplies and complete rack setups are offered with flexible purchase or rental options."},;
      "We use distributed data centers with automated failover and a global support team working in rotating shifts."},;
      "Obsolete hardware is recycled or reused in line with WEEE, RoHS and e-Stewards standards, and we provide disposal certificates when required."},;
      "No. Listing products, services, jobs or CVs is free, with optional paid promotion for extra visibility."},;
      "Check the Orders page in your account or ask our chatbot with your order ID for a quick update."},;
  return (;

    <section className="py-20 bg-zion-blue" id="faq">;
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
        <div className="text-center mb-12">;
          <p className="mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto">;

        <div className="max-w-3xl mx-auto bg-zion-blue-light rounded-lg border border-zion-purple/20 p-6">;
          <div className="flex items-center mb-6">;
            <FileText className="h-6 w-6 text-zion-cyan mr-2" />;
            <h3 className="text-xl font-bold text-white">Common Questions</h3>;

          <Accordion type="single" collapsible className="w-full">;
              <AccordionItem key={index} value={`item-${index}`} className="border-zion-purple/10">;
                <AccordionTrigger className="text-white hover:text-zion-cyan">;

                </AccordionContent>;
              </AccordionItem>))}
          </Accordion>;
    </section>);