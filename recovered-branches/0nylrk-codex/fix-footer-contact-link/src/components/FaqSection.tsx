
<<<<<<< HEAD
import { GradientHeading } from "./GradientHeading",;
import {;
  Accordion,;
  AccordionContent,;
  AccordionItem,;
  AccordionTrigger} from "@/components/ui/accordion",;
import { FileText } from "lucide-react",;
;
const faqs = [;
  {;
    question:"How do I publish my AI product or service on Zion?",;
    answer:"Publishing on Zion is completely free and straightforward. Simply create an account, click on 'Post Your Product/Service for Free' button, fill in the required details about your offering, add images, set pricing, and submit for review. Your listing will be live within 24 hours after passing our quality check."},;
  {;
    question:"What types of AI jobs can I find or post on Zion?",;
    answer:"Zion hosts a wide range of AI-related job opportunities including machine learning engineers, data scientists, AI researchers, computer vision specialists, NLP experts, AI product managers, and more. Employers can post any tech or AI-related position, and job seekers can publish their CV with AI-specific skills highlighted for better matching."},;
  {;
    question:"What IT equipment is available for purchase or rental?",;
    answer:"Zion offers a comprehensive range of IT equipment including servers (rack, tower, blade), storage solutions (SAN, NAS, DAS), networking equipment (switches, routers, firewalls), power supplies, and complete rack solutions. All equipment is available for purchase or flexible rental terms, with options for new, refurbished, or certified used equipment."},;
  {;
    question:"How does Zion ensure 24x7x365 global availability?",;
    answer:"Our infrastructure is built on geographically distributed data centers with redundant systems and automatic failover mechanisms. We maintain a global team of IT specialists operating in rotating shifts across different time zones, ensuring seamless support and service availability at all times, regardless of your location."},;
  {;
    question:"What is Zion's Green IT and recycling program?",;
    answer:"Zion's Green IT initiative focuses on sustainable IT practices throughout the equipment lifecycle. Our recycling program ensures proper disposal of obsolete equipment, component reuse where possible, and adherence to international environmental standards including WEEE, RoHS, and e-Stewards certification. We provide certificates of proper disposal for corporate compliance requirements."},;
  {;
    question:"Are there any fees for listing my products or services?",;
    answer:"No, publishing your products, services, job listings, or CV on Zion is completely free. We believe in creating an open marketplace that fosters innovation and connection in the tech and AI community without barriers to entry. Premium placement options are available for enhanced visibility, but the basic listing service has no costs attached."}],;
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
  AccordionTrigger} from "@/components/ui/accordion",
import { FileText } from "lucide-react",const faqs = [
  {
    question: &quot;How do I publish my AI product or service on Zion?&quot;,
    answer: &quot;Publishing on Zion is completely free and straightforward. Simply create an account, click on 'Post Your Product/Service for Free' button, fill in the required details about your offering, add images, set pricing, and submit for review. Your listing will be live within 24 hours after passing our quality check.&quot;},
  {
    question: &quot;What types of AI jobs can I find or post on Zion?&quot;,
    answer: &quot;Zion hosts a wide range of AI-related job opportunities including machine learning engineers, data scientists, AI researchers, computer vision specialists, NLP experts, AI product managers, and more. Employers can post any tech or AI-related position, and job seekers can publish their CV with AI-specific skills highlighted for better matching.&quot;},
  {
    question: &quot;What IT equipment is available for purchase or rental?&quot;,
    answer: &quot;Zion offers a comprehensive range of IT equipment including servers (rack, tower, blade), storage solutions (SAN, NAS, DAS), networking equipment (switches, routers, firewalls), power supplies, and complete rack solutions. All equipment is available for purchase or flexible rental terms, with options for new, refurbished, or certified used equipment.&quot;},
  {
    question: &quot;How does Zion ensure 24x7x365 global availability?&quot;,
    answer: &quot;Our infrastructure is built on geographically distributed data centers with redundant systems and automatic failover mechanisms. We maintain a global team of IT specialists operating in rotating shifts across different time zones, ensuring seamless support and service availability at all times, regardless of your location.&quot;},
  {
    question: &quot;What is Zion's Green IT and recycling program?&quot;,
    answer: &quot;Zion's Green IT initiative focuses on sustainable IT practices throughout the equipment lifecycle. Our recycling program ensures proper disposal of obsolete equipment, component reuse where possible, and adherence to international environmental standards including WEEE, RoHS, and e-Stewards certification. We provide certificates of proper disposal for corporate compliance requirements.&quot;},
  {
    question: "Are there any fees for listing my products or services?",
    answer: "No, publishing your products, services, job listings, or CV on Zion is completely free. We believe in creating an open marketplace that fosters innovation and connection in the tech and AI community without barriers to entry. Premium placement options are available for enhanced visibility, but the basic listing service has no costs attached."}],
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
  {_question: "How do I publish my AI product or service on Zion?", _answer: "Publishing on Zion is completely free and straightforward. Simply create an account, _click on 'Post Your Product/Service for Free' button, _fill in the required details about your offering, _add images, _set pricing, _and submit for review. Your listing will be live within 24 hours after passing our quality check."},
  {_question: "What types of AI jobs can I find or post on Zion?", _answer: "Zion hosts a wide range of AI-related job opportunities including machine learning engineers, _data scientists, _AI researchers, _computer vision specialists, _NLP experts, _AI product managers, _and more. Employers can post any tech or AI-related position, _and job seekers can publish their CV with AI-specific skills highlighted for better matching."},
  {_question: "What IT equipment is available for purchase or rental?", _answer: "Zion offers a comprehensive range of IT equipment including servers (rack, _tower, _blade), _storage solutions (SAN, _NAS, _DAS), _networking equipment (switches, _routers, _firewalls), _power supplies, _and complete rack solutions. All equipment is available for purchase or flexible rental terms, _with options for new, _refurbished, _or certified used equipment."},
  {_question: "How does Zion ensure 24x7x365 global availability?", _answer: "Our infrastructure is built on geographically distributed data centers with redundant systems and automatic failover mechanisms. We maintain a global team of IT specialists operating in rotating shifts across different time zones, _ensuring seamless support and service availability at all times, _regardless of your location."},
  {_question: "What is Zion's Green IT and recycling program?", _answer: "Zion's Green IT initiative focuses on sustainable IT practices throughout the equipment lifecycle. Our recycling program ensures proper disposal of obsolete equipment, _component reuse where possible, _and adherence to international environmental standards including WEEE, _RoHS, _and e-Stewards certification. We provide certificates of proper disposal for corporate compliance requirements."},
  {_question: "Are there any fees for listing my products or services?", _answer: "No, _publishing your products, _services, _job listings, _or CV on Zion is completely free. We believe in creating an open marketplace that fosters innovation and connection in the tech and AI community without barriers to entry. Premium placement options are available for enhanced visibility, _but the basic listing service has no costs attached."}];

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
