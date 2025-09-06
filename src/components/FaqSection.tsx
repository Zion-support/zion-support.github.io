<<<<<<< HEAD
<<<<<<<< HEAD:src/components/FaqSection.tsx

<<<<<<< HEAD

  Accordion,
  AccordionContent,
  AccordionItem,
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { GradientHeading } from './GradientHeading'
  Accordion
  AccordionContent
  AccordionItem
  AccordionTrigger
} from '@/components/ui/accordion'
<<<<<<< HEAD
>>>>>>>   Accordion,
  AccordionContent,
  AccordionItem,
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

>>>>>>> import { FileText } from 'lucide-react'
=======
=======
import {
=======
import { GradientHeading } from './GradientHeading'
=======
import {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  Accordion,
  AccordionContent,
  AccordionItem,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

import { FileText } from 'lucide-react'
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> import { GradientHeading } from './GradientHeading';
========
<<<<<<< HEAD
import { GradientHeading } from './GradientHeading';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/FaqSection.tsx
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
<<<<<<<< HEAD:src/components/FaqSection.tsx
=======
  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <section className='py-20 bg-zion-blue' id='faq'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <GradientHeading>Frequently Asked Questions</GradientHeading>
          <p className='mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto'>
            Find answers to common questions about AI product listings, IT
            equipment rentals, and datacenter maintenance services
          </p>
        </div>
        <div className='max-w-3xl mx-auto bg-zion-blue-light rounded-lg border border-zion-purple/20 p-6'>
          <div className='flex items-center mb-6'>
            <FileText className='h-6 w-6 text-zion-cyan mr-2' />
            <h3 className='text-xl font-bold text-white'>Common Questions</h3>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { GradientHeading } from "./GradientHeading",
import {
========
    <section className='py-20 bg-zion-blue' id='faq'>;
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>;
        <div className='text-center mb-12'>;
          <GradientHeading>Frequently Asked Questions</GradientHeading>;
          <p className='mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto'>;
import { GradientHeading } from './GradientHeading';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/FaqSection.tsx
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
<<<<<<<< HEAD:src/components/FaqSection.tsx

<<<<<<< HEAD
=======
<<<<<<< HEAD
const faqs = [
  {
    question: "How do I publish my AI product or service?"
    answer:
      "Create an account, choose 'Post Your Product/Service for Free,' fill in the details, and submit for review. Listings go live within 24 hours if they pass our quality check."}
  {
    question: "What types of AI jobs can I find or post?"
    answer:
      "You can hire or apply for roles such as machine learning engineer, data scientist, AI researcher, computer vision expert and more."}
  {
    question: "What IT equipment is available to rent or buy?"
    answer:
      "Servers, storage solutions, networking gear, power supplies and complete rack setups are offered with flexible purchase or rental options."}
  {
    question: "How does Zion ensure 24x7x365 availability?"
    answer:
      "We use distributed data centers with automated failover and a global support team working in rotating shifts."}
  {
    question: "What is Zion's Green IT program?"
    answer:
      "Obsolete hardware is recycled or reused in line with WEEE, RoHS and e-Stewards standards, and we provide disposal certificates when required."}
  {
    question: "Are there fees for listing my products or services?"
    answer:
      "No. Listing products, services, jobs or CVs is free, with optional paid promotion for extra visibility."}
  {
    question: "How do I track my order status?"
    answer:
      "Check the Orders page in your account or ask our chatbot with your order ID for a quick update."}
  {
    question: "How do I contact support?"
    answer:
      "Reach us via the chat widget, email support@ziontechgroup.com or call +1 302 464 0950 anytime."}]

<<<<<<< HEAD
=======
=======
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { GradientHeading } from "./GradientHeading",
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger} from "@/components/ui/accordion",
import { FileText } from 'lucide-react'

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const faqs = [
  {
    question: "How do I publish my AI product or service?",
    answer:
<<<<<<< HEAD

=======

import { GradientHeading } from "./GradientHeading";

onst faqs = [
  {
    question: "How do I publish my AI product or service?",
    answer:
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      "Create an account, choose 'Post Your Product/Service for Free,' fill in the details, and submit for review. Listings go live within 24 hours if they pass our quality check."}
  {
    question: "What types of AI jobs can I find or post?",
    answer:
      "You can hire or apply for roles such as machine learning engineer, data scientist, AI researcher, computer vision expert and more."}
  {
    question: "What IT equipment is available to rent or buy?",
    answer:
      "Servers, storage solutions, networking gear, power supplies and complete rack setups are offered with flexible purchase or rental options."}
  {
    question: "How does Zion ensure 24x7x365 availability?",
    answer:
      "We use distributed data centers with automated failover and a global support team working in rotating shifts."}
  {
    question: "What is Zion's Green IT program?",
    answer:
      "Obsolete hardware is recycled or reused in line with WEEE, RoHS and e-Stewards standards, and we provide disposal certificates when required."}
  {
    question: "Are there fees for listing my products or services?",
    answer:
      "No. Listing products, services, jobs or CVs is free, with optional paid promotion for extra visibility."}
  {
    question: "How do I track my order status?",
    answer:
      "Check the Orders page in your account or ask our chatbot with your order ID for a quick update."}
  {
    question: "How do I contact support?",
    answer:
      "Reach us via the chat widget, email support@ziontechgroup.com or call +1 302 464 0950 anytime."}]
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

<<<<<<< HEAD
<<<<<<< HEAD
export function FaqSection() {
=======
xport function FaqSection() {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function FaqSection() {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <section className="py-20 bg-zion-blue" id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <GradientHeading>Frequently Asked Questions</GradientHeading>
          <p className="mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto">
            Find answers to common questions about AI product listings, IT equipment rentals, and datacenter maintenance services
          </p>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>         <div className="max-w-3xl mx-auto bg-zion-blue-light rounded-lg border border-zion-purple/20 p-6">
ursor/fix-website-loading-errors-and-merge-6662
  return (





>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        <div className="max-w-3xl mx-auto bg-zion-blue-light rounded-lg border border-zion-purple/20 p-6">
>>>>>>>           <div className="flex items-center mb-6">
=======
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        <div className="max-w-3xl mx-auto bg-zion-blue-light rounded-lg border border-zion-purple/20 p-6">
          <div className="flex items-center mb-6">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <FileText className="h-6 w-6 text-zion-cyan mr-2" />
            <h3 className="text-xl font-bold text-white">Common Questions</h3>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>           <Accordion type="single" collapsible className="w-full">
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          <Accordion type="single" collapsible className="w-full">
>>>>>>>             {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-zion-purple/10">
                <AccordionTrigger className="text-white hover:text-zion-cyan">
========
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
  return (
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/FaqSection.tsx
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
<<<<<<<< HEAD:src/components/FaqSection.tsx

                </AccordionTrigger>
                <AccordionContent className="text-zion-slate-light">
<<<<<<< HEAD

=======
=======
=======
          
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-zion-purple/10">
                <AccordionTrigger className="text-white hover:text-zion-cyan">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-zion-slate-light">
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
<<<<<<< HEAD
========
                </AccordionTrigger>;
                <AccordionContent className="text - zion - slate - light">;
                  {faq.answer}
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
                  {faq && faq.question}
                </AccordionTrigger>;
                <AccordionContent className="text-zion-slate-light">;
                  {faq && faq.answer}
=======

=======
      </div>;
    </section>;
  );
};
}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { GradientHeading } from "./GradientHeading",;
import {;
  Accordion,;
  AccordionContent,;
  AccordionItem,;
  AccordionTrigger} from "@/components/ui/accordion",;
import { FileText } from 'lucide-react';
<<<<<<< HEAD
;
const faqs = [;
  {;
    question:"How do I publish my AI product or service?",;
    answer:;
      "Create an account, choose 'Post Your Product/Service for Free,' fill in the details, and submit for review. Listings go live within 24 hours if they pass our quality check."},;
  {;
    question:"What types of AI jobs can I find or post?",;
    answer:;
      "You can hire or apply for roles such as machine learning engineer, data scientist, AI researcher, computer vision expert and more."},;
  {;
    question:"What IT equipment is available to rent or buy?",;
    answer:;
      "Servers, storage solutions, networking gear, power supplies and complete rack setups are offered with flexible purchase or rental options."},;
  {;
    question:"How does Zion ensure 24x7x365 availability?",;
    answer:;
      "We use distributed data centers with automated failover and a global support team working in rotating shifts."},;
  {;
    question:"What is Zion's Green IT program?",;
    answer:;
      "Obsolete hardware is recycled or reused in line with WEEE, RoHS and e-Stewards standards, and we provide disposal certificates when required."},;
  {;
    question:"Are there fees for listing my products or services?",;
    answer:;
      "No. Listing products, services, jobs or CVs is free, with optional paid promotion for extra visibility."},;
  {;
    question:"How do I track my order status?",;
    answer:;
      "Check the Orders page in your account or ask our chatbot with your order ID for a quick update."},;
  {;
    question:"How do I contact support?",;
    answer:;
      "Reach us via the chat widget, email support@ziontechgroup.com or call +1 302 464 0950 anytime."}],;
;
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className="max-w-3xl mx-auto bg-zion-blue-light rounded-lg border border-zion-purple/20 p-6">;
          <div className="flex items-center mb-6">;
            <FileText className="h-6 w-6 text-zion-cyan mr-2" />;
            <h3 className="text-xl font-bold text-white">Common Questions</h3>;
          </div>;
<<<<<<< HEAD
          ;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <Accordion type="single" collapsible className="w-full">;
            {faqs.map((faq, index) => (;
              <AccordionItem key={index} value={`item-${index}`} className="border-zion-purple/10">;
                <AccordionTrigger className="text-white hover:text-zion-cyan">;
<<<<<<< HEAD
                  {faq.question}
                </AccordionTrigger>;
                <AccordionContent className="text-zion-slate-light">;
                  {faq.answer}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                </AccordionContent>;
              </AccordionItem>;
            ))}
          </Accordion>;
        </div>;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/FaqSection.tsx
      </div>;
    </section>;
<<<<<<< HEAD
  );
};
}
<<<<<<<< HEAD:src/components/FaqSection.tsx
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
  );
}
                </AccordionContent>;
              </AccordionItem>))}
          </Accordion>;
        </div>;
      </div>;
    </section>);
}
=======
  ),;}
 import { ;
  {;
  {;
  Accordion;
AccordionContent;
AccordionItem;
import {;
  FileText ;
 } from "lucide-react";
const faqs = [ {;
  question: "How do I publish my AI product or service?";'";
answer: "Create an account, choose 'Post Your Product/Service for Free,  ' fill in the details, and submit for review. Listings go live within 24 hours if they pass our quality check." ;
};
{";
  question: "What types of AI jobs can I find or post?";";
answer: "You can hire or apply for roles such as machine learning engineer, data scientist,  AI researcher, computer vision expert and more." ;
};
{";
  question: "What IT equipment is available to rent or buy?";";
answer: "Servers, storage solutions,  networking gear, power supplies and complete rack setups are offered with flexible purchase or rental options." ;
};
{";
  question: "How does Zion ensure 24x7x365 availability?";";
answer: "We use distributed data centers with automated failover and a global support team working in rotating shifts." ;
};
{'";
  question: "What is Zion's Green IT program?";";
answer: "Obsolete hardware is recycled or reused in line with WEEE,  RoHS and e-Stewards standards, and we provide disposal certificates when required." ;
};
{";
  question: "Are there fees for listing my products or services?";";
answer: "No. Listing products, services,  jobs or CVs is free, with optional paid promotion for extra visibility." ;
};
{";
  question: "How do I track my order status?";";
answer: "Check the Orders page in your account or ask our chatbot with your order ID for a quick update." ;
};
{";
  question: "How do I contact support?";
answer: export function FaqSection () {";
  return (<section className="py-20 bg-zion-blue" id="faq" > <div className="container mx-auto px-4 sm:px-6 lg:px-8" > <div className="text-center mb-12" > <GradientHeading>Frequently Asked Questions</GradientHeading> <p className="mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto" > Find answers to common questions about AI product listings,  IT equipment rentals, and datacenter maintenance services max-w-3xl mx-auto bg-zion-blue-light rounded-lg border border-zion-purple/20 p-6"> <div className=" flex items-center mb-6"> <FileText className=" h-6 w-6 text-zion-cyan mr-2"/> <h3 className=" text-xl font-bold text-white" >Common Questions</h3> </div> </AccordionContent> </AccordionItem>) ) ;
}</Accordion> </div> </div> </section>) ;
}'"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/FaqSection.tsx
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
