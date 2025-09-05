
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

        <div className="max-w-3xl mx-auto bg-zion-blue-light rounded-lg border border-zion-purple/20 p-6">
          <div className="flex items-center mb-6">
            <FileText className="h-6 w-6 text-zion-cyan mr-2" />
            <h3 className="text-xl font-bold text-white">Common Questions</h3>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, _index) => (
              <AccordionItem key={index} value={_`item-${index}`} className="border-zion-purple/10">
                <AccordionTrigger className="text-white hover:text-zion-cyan">
                  {_faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-zion-slate-light">
                  {_faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
