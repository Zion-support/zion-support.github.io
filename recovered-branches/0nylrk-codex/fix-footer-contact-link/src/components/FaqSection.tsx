
import { GradientHeading } from &quot;./GradientHeading&quot;;
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger} from &quot;@/components/ui/accordion&quot;;
import { FileText } from &quot;lucide-react&quot;;

const faqs = [
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
    question: &quot;Are there any fees for listing my products or services?&quot;,
    answer: &quot;No, publishing your products, services, job listings, or CV on Zion is completely free. We believe in creating an open marketplace that fosters innovation and connection in the tech and AI community without barriers to entry. Premium placement options are available for enhanced visibility, but the basic listing service has no costs attached.&quot;}];

export function FaqSection() {
  return (
    <section className=&quot;py-20 bg-zion-blue&quot; id=&quot;faq&quot;>
      <div className=&quot;container mx-auto px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;text-center mb-12&quot;>
          <GradientHeading>Frequently Asked Questions</GradientHeading>
          <p className=&quot;mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto&quot;>
            Find answers to common questions about AI product listings, IT equipment rentals, and datacenter maintenance services
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
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
