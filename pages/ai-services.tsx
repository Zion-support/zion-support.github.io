
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
import React from "react";
import Layout from "../components/Layout";
export default function AIServices() {
  return (
<Layout
import React from 'react';
import Layout from '../components/Layout';
=======ursor/integrate-build-improve-and-re-verify-8f7d
import React from 'react';
import Layout from '../components/Layout';

export default function AIServices() {
  return (
    <Layout
origin/automation-improvements-final
      title="AI Services - Zion Tech Group"
      description="Comprehensive AI services including machine learning, computer vision, natural language processing, and more."
    >
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">=======            <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI solutions and services.
            </p>
          </div>
          <div className="text-center">
            <p className="text-gray-600">AI Services page is under construction.</p>


origin/automation-improvements-final
=======
=======



=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
origin/automation-improvements-final
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import Link from 'next/link',
import Head from 'next/head';
import { useState, useEffect  } from 'react';
import { ContactInfo  } from '../types';
import ErrorBoundary from '../components/ErrorBoundary';
=======    </Layout>;
  );


  const contact: ContactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
}
=======
=======

          {/* Category Filter */}
=======
}

=======>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <section className="py-8 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {categories.map((category) => (
                  <button
          {/* Services Grid */}
=======                Contact our AI experts to discuss how our advanced artificial intelligence services
                can transform your business operations and drive innovation.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors"
                >
                  Get AI Consultation
                </Link>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======                <a
                  href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"

)
=======  )
}
import SEO from '../components/SEO';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Link from 'next/link';
export default function AIServicesPage() {
  return (
    <UltraAdvancedFuturisticBackground>
      <SEO title="AI Services | Zion Tech Group" description="LLM apps, RAG, evaluation, guardrails, and automation with transparent pricing." canonical="https://ziontechgroup.com/ai-services/" />
      <div className="container mx-auto px-4 py-24 text-white">
        <div className="max-w-5xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">AI Services</h1>
          <p className="text-gray-300 text-lg">Productized AI solutions: evaluation labs, safety & guardrails, chatbots, agents, search/RAG, and automation. See <Link className="text-cyan-400 underline" href="/market-pricing">Market Pricing</Link> for typical vendor benchmarks.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'RAG & Vector Search', href: '/vector-search-starter' },
              { title: 'AI Evaluation Lab', href: '/rag-evaluation-lab' },
              { title: 'AI Guardrails', href: '/ai-powered-cybersecurity' },
              { title: 'AI Content Generator', href: '/intelligent-content-automation-platform' },
              { title: 'AI Customer Service', href: '/ai-customer-service' },
              { title: 'AI Sales Intelligence', href: '/ai-sales-automation' }].map((c) => (
}
}

}

=======origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
}
}
origin/main
origin/automation-improvements-final
}
}
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}

=======
}
}
    </Layout>);
}
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <section className="py-16 px-4 bg-slate-900/40">;
            <div className="max-w-6xl mx-auto">;
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">;
                Our AI Capabilities;
              </h2>;
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">;
                <div className="text-center">;
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">;
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">;
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />;
                    </svg>;
                  </div>;
                  <h3 className="text-xl font-bold mb-2">Machine Learning</h3>;
                  <p className="text-slate-400">Advanced ML algorithms for pattern recognition and predictive modeling</p>;
                </div>;
                <div className="text-center">;
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">;
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">;
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />;
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />;
                    </svg>;
                  </div>;
                  <h3 className="text-xl font-bold mb-2">Computer Vision</h3>;
                  <p className="text-slate-400">Image and video analysis with object detection and recognition</p>;
                </div>;
                <div className="text-center">;
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">;
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">;
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />;
                    </svg>;
                  </div>;
                  <h3 className="text-xl font-bold mb-2">Natural Language</h3>;
                  <p className="text-slate-400">Advanced NLP for text analysis, translation, and understanding</p>;
                </div>;
                <div className="text-center">;
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">;
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">;
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />;
                    </svg>;
                  </div>;
                  <h3 className="text-xl font-bold mb-2">Predictive Analytics</h3>;
                  <p className="text-slate-400">Data-driven insights and forecasting for business intelligence</p>;
                </div>;
              </div>;
            </div>;
          </section>;
          {/* CTA Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          <section className="py-16 px-4">;
            <div className="max-w-4xl mx-auto text-center">;
              <h2 className="text-3xl md:text-4xl font-bold mb-8">;
                Ready to Harness AI Power?;
              </h2>;
              <p className="text-lg text-slate-300 mb-8">;
                Contact our AI experts to discuss how our advanced artificial intelligence services;
                can transform your business operations and drive innovation.;
              </p>;
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">;
                <Link;
                  href="/contact";
                  className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors";
                >;
                  Get AI Consultation;
                </Link>;
                <a;
                  href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} ;
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors";
                >;
                  Call {contact.phone  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </a>;
                <a;
                  href={`mailto:${contact.email}`} ;
                  className="px-8 py-3 bg-slate-800 hover: bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors";
                >;
                  Email Us;
                </a>;
              </div>;
            </div>;
          </section>;
        </main>;
      </ErrorBoundary>;
    </>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
import SEO from '../components/SEO';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Link from 'next/link';
export default function AIServicesPage(req, res) {
  try {
  return (;
    <UltraAdvancedFuturisticBackground>;
      <SEO title="AI Services | Zion Tech Group" description="LLM apps, RAG, evaluation, guardrails, and automation with transparent pricing." canonical="https://ziontechgroup.com/ai-services/" />;
      <div className="container mx-auto px-4 py-24 text-white">;
        <div className="max-w-5xl mx-auto space-y-8">;
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">AI Services</h1>;
          <p className="text-gray-300 text-lg">Productized AI solutions: evaluation labs, safety & guardrails, chatbots, agents, search/RAG, and automation. See <Link className="text-cyan-400 underline" href="/market-pricing">Market Pricing</Link> for typical vendor benchmarks.</p>;
          <div className="grid md:grid-cols-3 gap-6">;
            {[;
              { title: 'RAG & Vector Search', href: '/vector-search-starter' },;
              { title: 'AI Evaluation Lab', href: '/rag-evaluation-lab' },;
              { title: 'AI Guardrails', href: '/ai-powered-cybersecurity' },;
              { title: 'AI Content Generator', href: '/intelligent-content-automation-platform' };
              { title: 'AI Customer Service', href: '/ai-customer-service' };
              { title: 'AI Sales Intelligence', href: '/ai-sales-automation' }].map((c) => (;
              <Link key={c.href} href={c.href} className="p-6 rounded-2xl bg-black/40 border border-white/10 hover:border-cyan-500/40 transition-colors">;
                <div className="text-xl font-semibold">{c.title}</div>;
                <div className="text-sm text-gray-400 mt-2">Implementation‑ready with pricing and SLAs.</div>;
              </Link>;
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
          <div className="text-sm text-gray-400">Questions? <Link className="text-cyan-400 underline" href="/contact">Contact us</Link>.</div>;
        </div>;
      </div>;
    </UltraAdvancedFuturisticBackground>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
