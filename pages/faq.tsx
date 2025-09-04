import Head from 'next/head';
import Link from 'next/link';

export default function FAQ() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  };

  const faqs = [
    {
      question: "What services does Zion Tech Group offer?",
      answer: "We offer 40+ micro SaaS products, 16+ AI services, and 16+ IT solutions including cloud migration, cybersecurity, data engineering, machine learning, and more."
    },
    {
      question: "How do I get started with your services?",
      answer: "Contact us through our contact form, call us at +1 302 464 0950, or email kleber@ziontechgroup.com. We'll schedule a consultation to understand your needs and provide a custom solution."
    },
    {
      question: "What is the typical pricing for your services?",
      answer: "Pricing varies by service and complexity. Micro SaaS products typically range from $99-$3,500/month, AI services from $699-$12,999/month, and IT services from $999-$15,999/month. Contact us for a custom quote."
    },
    {
      question: "Do you offer custom development?",
      answer: "Yes, we specialize in custom development for micro SaaS products, AI solutions, and IT services. We work closely with clients to build tailored solutions that meet their specific business requirements."
    },
    {
      question: "What technologies do you work with?",
      answer: "We work with modern technologies including AWS, Azure, GCP, Kubernetes, Docker, Python, JavaScript, React, Node.js, machine learning frameworks, and various cloud and AI platforms."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. Simple micro SaaS products can be delivered in 2-4 weeks, while complex AI or IT solutions may take 2-6 months. We provide detailed timelines during consultation."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer comprehensive support and maintenance services for all our solutions. This includes monitoring, updates, troubleshooting, and optimization to ensure optimal performance."
    },
    {
      question: "Can you help with cloud migration?",
      answer: "Absolutely! We specialize in cloud migration and modernization services, helping businesses move to AWS, Azure, or GCP with minimal downtime and maximum efficiency."
    },
    {
      question: "What makes your AI services different?",
      answer: "Our AI services are tailored to specific business needs, not generic solutions. We focus on practical applications that deliver measurable ROI, with custom model development and integration support."
    },
    {
      question: "Do you work with small businesses?",
      answer: "Yes, we work with businesses of all sizes, from startups to enterprise organizations. Our micro SaaS products are particularly well-suited for small and medium businesses looking for cost-effective solutions."
    },
    {
      question: "What is your response time for support?",
      answer: "We provide 24/7 support for critical issues and typically respond within 2-4 hours during business hours. Emergency support is available 24/7 for enterprise clients."
    },
    {
      question: "Do you offer training for your solutions?",
      answer: "Yes, we provide comprehensive training and documentation for all our solutions. This includes user guides, video tutorials, and hands-on training sessions to ensure your team can effectively use the tools."
    }
  ];

  return (
    <>
      <Head>
        <title>FAQ - Zion Tech Group | Frequently Asked Questions</title>
        <meta name="description" content="Find answers to frequently asked questions about Zion Tech Group's micro SaaS products, AI services, and IT solutions. Get the information you need to make informed decisions." />
        <meta name="keywords" content="FAQ, frequently asked questions, zion tech group, micro SaaS, AI services, IT solutions, support" />
        <link rel="canonical" href={`${contact.site}/faq`} />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Find answers to common questions about our services and solutions
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-900/60 rounded-xl border border-white/10 p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">
                    {faq.question}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-4 bg-slate-900/60">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Can't find the answer you're looking for? Contact our team for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </Link>
              <a 
                href={`tel:${contact.phone}`}
                className="border-2 border-blue-600 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Call {contact.phone}
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}