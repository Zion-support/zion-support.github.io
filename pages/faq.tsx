import React from 'react';
import Head from 'next/head';
  return (
    <>
      <Head>
        <title>Frequently Asked Questions - Zion Tech Group</title>
        <meta name="description" content="Find answers to common questions about Zion Tech Group's micro SaaS products, AI services, and IT solutions. Get help with pricing, implementation, and support." />
        <meta name="keywords" content="FAQ, frequently asked questions, zion tech group, micro SaaS, AI services, IT solutions" />
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
              Get Answers to Common Questions
            </p>
            <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto">
              Find answers to the most common questions about our services, pricing, 
              implementation, and support. Can&apos;t find what you&apos;re looking for? Contact us directly.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="p-8 bg-slate-900/60 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold mb-4 text-blue-400">{faq.question}</h3>
                  <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-4 bg-slate-900/40">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Still Have Questions?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Our team is here to help. Contact us for personalized answers to your specific questions 
              and to discuss how we can help your business.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                Call {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors">
                Email {contact.email}
              </a>
              <Link href="/contact" className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors">
                Contact Form
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Faq;