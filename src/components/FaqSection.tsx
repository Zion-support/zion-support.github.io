
<<<<<<< HEAD
import { GradientHeading } from "./GradientHeading",;
import {;
  Accordion,;
  AccordionContent,;
  AccordionItem,;
  AccordionTrigger} from "@/components/ui/accordion",;
import { FileText } from 'lucide-react';
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
;
        <div className="max-w-3xl mx-auto bg-zion-blue-light rounded-lg border border-zion-purple/20 p-6">;
          <div className="flex items-center mb-6">;
            <FileText className="h-6 w-6 text-zion-cyan mr-2" />;
            <h3 className="text-xl font-bold text-white">Common Questions</h3>;
          </div>;
          ;
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
  ),;
=======
import { GradientHeading } from "./GradientHeading",import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger} from "@/components/ui/accordion",import { FileText } from 'lucide-react'

const faqs = [
  {
    question: &quot;How do I publish my AI product or service?&quot;,
    answer:
      &quot;Create an account, choose 'Post Your Product/Service for Free,' fill in the details, and submit for review. Listings go live within 24 hours if they pass our quality check.&quot;},
  {
    question: &quot;What types of AI jobs can I find or post?&quot;,
    answer:
      &quot;You can hire or apply for roles such as machine learning engineer, data scientist, AI researcher, computer vision expert and more.&quot;},
  {
    question: &quot;What IT equipment is available to rent or buy?&quot;,
    answer:
      &quot;Servers, storage solutions, networking gear, power supplies and complete rack setups are offered with flexible purchase or rental options.&quot;},
  {
    question: &quot;How does Zion ensure 24x7x365 availability?&quot;,
    answer:
      &quot;We use distributed data centers with automated failover and a global support team working in rotating shifts.&quot;},
  {
    question: &quot;What is Zion's Green IT program?&quot;,
    answer:
      &quot;Obsolete hardware is recycled or reused in line with WEEE, RoHS and e-Stewards standards, and we provide disposal certificates when required.&quot;},
  {
    question: &quot;Are there fees for listing my products or services?&quot;,
    answer:
      &quot;No. Listing products, services, jobs or CVs is free, with optional paid promotion for extra visibility.&quot;},
  {
    question: &quot;How do I track my order status?&quot;,
    answer:
      &quot;Check the Orders page in your account or ask our chatbot with your order ID for a quick update.&quot;},
  {
    question: &quot;How do I contact support?&quot;,
    answer:
      "Reach us via the chat widget, email support@ziontechgroup.com or call +1 302 464 0950 anytime."}],
export function FaqSection() {
  return (
    <section className=&quot;py-20 bg-zion-blue&quot; id=&quot;faq&quot;>
      <div className=&quot;container mx-auto px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;text-center mb-12&quot;>
          <GradientHeading>Frequently Asked Questions</GradientHeading>
          <p className=&quot;mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto&quot;>
            Find answers to common questions about AI product listings, IT equipment rentals, and datacenter maintenance services
import {_Accordion, _AccordionContent, _AccordionItem, _AccordionTrigger} from "@/components/ui/accordion";

const _faqs = [
  {_question: "How do I publish my AI product or service?", _answer:
      "Create an account, _choose 'Post Your Product/Service for Free, _' fill in the details, _and submit for review. Listings go live within 24 hours if they pass our quality check."},
  {_question: "What types of AI jobs can I find or post?", _answer:
      "You can hire or apply for roles such as machine learning engineer, _data scientist, _AI researcher, _computer vision expert and more."},
  {_question: "What IT equipment is available to rent or buy?", _answer:
      "Servers, _storage solutions, _networking gear, _power supplies and complete rack setups are offered with flexible purchase or rental options."},
  {_question: "How does Zion ensure 24x7x365 availability?", _answer:
      "We use distributed data centers with automated failover and a global support team working in rotating shifts."},
  {_question: "What is Zion's Green IT program?", _answer:
      "Obsolete hardware is recycled or reused in line with WEEE, _RoHS and e-Stewards standards, _and we provide disposal certificates when required."},
  {_question: "Are there fees for listing my products or services?", _answer:
      "No. Listing products, _services, _jobs or CVs is free, _with optional paid promotion for extra visibility."},
  {_question: "How do I track my order status?", _answer:
      "Check the Orders page in your account or ask our chatbot with your order ID for a quick update."},
  {_question: "How do I contact support?", _answer:
      "Reach us via the chat widget, _email support@ziontechgroup.com or call +1 302 464 0950 anytime."}];

export function FaqSection() {_return (_<section className="py-20 bg-zion-blue" id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <GradientHeading>Frequently Asked Questions</GradientHeading>
          <p className="mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto">
            Find answers to common questions about AI product listings, _IT equipment rentals, _and datacenter maintenance services
          </p>
        </div>

        <div className=&quot;max-w-3xl mx-auto bg-zion-blue-light rounded-lg border border-zion-purple/20 p-6&quot;>
          <div className=&quot;flex items-center mb-6&quot;>
            <FileText className=&quot;h-6 w-6 text-zion-cyan mr-2&quot; />
            <h3 className=&quot;text-xl font-bold text-white&quot;>Common Questions</h3>
          </div>
          
          <Accordion type=&quot;single&quot; collapsible className=&quot;w-full&quot;>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className=&quot;border-zion-purple/10&quot;>
                <AccordionTrigger className=&quot;text-white hover:text-zion-cyan&quot;>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className=&quot;text-zion-slate-light&quot;>
                  {faq.answer}                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
