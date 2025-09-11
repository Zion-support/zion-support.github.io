<<<<<<< HEAD
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function FAQPage() {
  const [openCategory, setOpenCategory] = useState('general');

  const faqData = {
    general: [
      {
        question: 'What is Zion Tech Group and what do you specialize in?',
        answer: 'Zion Tech Group is a leading technology company specializing in AI automation and autonomous systems. We develop cutting-edge solutions that enable organizations to operate more efficiently, intelligently, and autonomously. Our expertise spans across AI, machine learning, edge computing, IoT integration, and sustainable technology solutions.'
      },
      {
        question: 'How long has Zion Tech Group been in business?',
        answer: 'Zion Tech Group has been at the forefront of AI automation technology for over 8 years. We\'ve successfully delivered autonomous systems to hundreds of organizations across various industries, establishing ourselves as a trusted partner in digital transformation and AI implementation.'
      },
      {
        question: 'What industries do you serve?',
        answer: 'We serve a diverse range of industries including healthcare, manufacturing, financial services, retail, transportation, energy, and government. Our AI automation solutions are designed to be industry-agnostic and can be customized to meet the specific needs of any sector.'
      },
      {
        question: 'Do you offer consulting services in addition to technology solutions?',
        answer: 'Yes, we provide comprehensive consulting services including AI strategy development, implementation planning, change management, and ongoing optimization. Our team of experts works closely with clients to ensure successful adoption and maximum ROI from AI automation investments.'
      }
    ],
    technology: [
      {
        question: 'What types of AI technologies do you work with?',
        answer: 'We work with a comprehensive range of AI technologies including machine learning, deep learning, natural language processing, computer vision, reinforcement learning, and edge AI. Our solutions incorporate the latest advancements in AI research and are designed to be scalable, secure, and sustainable.'
      },
      {
        question: 'How do you ensure the security of AI systems?',
        answer: 'Security is built into every layer of our AI systems. We implement multi-layered security architectures including encryption, secure model deployment, threat detection, and regular security audits. Our systems comply with industry standards and regulatory requirements while maintaining the highest levels of data protection.'
      },
      {
        question: 'Can your AI systems operate offline or in edge environments?',
        answer: 'Absolutely. We specialize in edge AI solutions that can operate independently of cloud infrastructure. Our edge AI systems are designed to process data locally, reducing latency, improving privacy, and enabling autonomous operation even in environments with limited connectivity.'
      },
      {
        question: 'How do you handle data privacy and compliance?',
        answer: 'We implement comprehensive data privacy measures including data anonymization, differential privacy, and secure multi-party computation. Our systems are designed to comply with GDPR, HIPAA, SOX, and other relevant regulations while maintaining the highest standards of data protection and ethical AI practices.'
      }
    ],
    implementation: [
      {
        question: 'How long does it typically take to implement AI automation?',
        answer: 'Implementation timelines vary depending on the complexity and scope of the project. Simple automation projects can be completed in 4-8 weeks, while comprehensive enterprise transformations may take 6-18 months. We work with clients to establish realistic timelines and deliver value incrementally throughout the process.'
      },
      {
        question: 'What kind of support do you provide during and after implementation?',
        answer: 'We provide comprehensive support throughout the entire implementation process and beyond. This includes dedicated project management, technical support, user training, documentation, and ongoing optimization services. Our support team is available 24/7 for critical issues and we offer various support tiers to meet different needs.'
      },
      {
        question: 'Do you provide training for our staff?',
        answer: 'Yes, we offer comprehensive training programs for technical and non-technical staff. Our training covers system operation, maintenance, troubleshooting, and best practices for maximizing the value of AI automation. We also provide ongoing education as new features and capabilities are released.'
      },
      {
        question: 'Can we integrate your solutions with our existing systems?',
        answer: 'Absolutely. Our AI systems are designed with open architectures and standard APIs that enable seamless integration with existing enterprise systems. We have extensive experience integrating with ERP systems, CRM platforms, databases, and custom applications across various technology stacks.'
      }
    ],
    sustainability: [
      {
        question: 'How do you address environmental concerns in AI systems?',
        answer: 'We\'re committed to sustainable AI development. Our systems use energy-efficient algorithms, renewable energy-powered infrastructure, and optimization techniques that minimize environmental impact. We also help clients measure and reduce the carbon footprint of their AI operations through our sustainability tools and consulting services.'
      },
      {
        question: 'What makes your AI systems "green"?',
        answer: 'Our green AI systems incorporate several key features: energy-efficient model architectures, intelligent resource allocation, renewable energy integration, and carbon footprint monitoring. We\'ve developed proprietary techniques that achieve comparable performance to traditional AI systems while using significantly less computational power.'
      },
      {
        question: 'Do you offer sustainability reporting and metrics?',
        answer: 'Yes, we provide comprehensive sustainability reporting including carbon emissions tracking, energy efficiency metrics, and environmental impact assessments. Our clients can monitor the environmental performance of their AI systems in real-time and receive detailed reports for compliance and optimization purposes.'
      }
    ],
    healthcare: [
      {
        question: 'How do you ensure HIPAA compliance in healthcare AI systems?',
        answer: 'Our healthcare AI systems are built with HIPAA compliance as a foundational requirement. We implement end-to-end encryption, secure data transmission, access controls, audit logging, and regular security assessments. All our healthcare solutions undergo rigorous compliance testing and are regularly updated to meet evolving regulatory requirements.'
      },
      {
        question: 'What types of healthcare applications do you support?',
        answer: 'We support a wide range of healthcare applications including diagnostic imaging, patient monitoring, predictive analytics, administrative automation, and clinical decision support. Our systems are designed to enhance rather than replace human expertise, improving patient outcomes while reducing administrative burden on healthcare professionals.'
      },
      {
        question: 'How do you handle patient data privacy?',
        answer: 'Patient data privacy is paramount in all our healthcare solutions. We implement multiple layers of protection including data anonymization, secure multi-party computation, and zero-knowledge proofs. Our systems are designed to process sensitive health information while maintaining the highest standards of privacy and security.'
      }
    ],
    pricing: [
      {
        question: 'What is your pricing model?',
        answer: 'We offer flexible pricing models including subscription-based services, project-based pricing, and enterprise licensing. Pricing depends on the scope of services, system complexity, and support requirements. We work with each client to develop a pricing structure that aligns with their budget and business objectives.'
      },
      {
        question: 'Do you offer free trials or proof-of-concept projects?',
        answer: 'Yes, we offer free trials and proof-of-concept projects for qualified organizations. This allows potential clients to experience the value of our AI automation solutions firsthand before making a full commitment. We also provide detailed ROI analysis and case studies to help clients understand the business impact.'
      },
      {
        question: 'What ongoing costs should we expect?',
        answer: 'Ongoing costs typically include system maintenance, updates, support services, and any additional features or capacity. We provide transparent pricing for all ongoing services and work with clients to optimize costs while maintaining system performance and reliability.'
      }
    ]
  };

  const categories = [
    { id: 'general', name: 'General Questions', icon: '🏢' },
    { id: 'technology', name: 'Technology & AI', icon: '🤖' },
    { id: 'implementation', name: 'Implementation & Support', icon: '🚀' },
    { id: 'sustainability', name: 'Sustainability & Green AI', icon: '🌱' },
    { id: 'healthcare', name: 'Healthcare Solutions', icon: '🏥' },
    { id: 'pricing', name: 'Pricing & Business', icon: '💰' }
  ];

  return (
    <>
      <Head>
        <title>FAQ | Zion Tech Group - Frequently Asked Questions</title>
        <meta name="description" content="Find answers to common questions about Zion Tech Group's AI automation solutions, implementation process, and services." />
        <meta property="og:title" content="FAQ | Zion Tech Group" />
        <meta property="og:description" content="Find answers to common questions about Zion Tech Group's AI automation solutions." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <nav className="mb-8">
              <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Home
              </Link>
            </nav>
            
            <header className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Find answers to common questions about our AI automation solutions, 
                implementation process, and services.
              </p>
            </header>
            
            {/* Category Navigation */}
            <div className="mb-12">
              <div className="flex flex-wrap gap-4 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setOpenCategory(category.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      openCategory === category.id
                        ? 'bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white'
                        : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    <span className="text-lg">{category.icon}</span>
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            
            {/* FAQ Content */}
            <div className="space-y-6">
              {faqData[openCategory as keyof typeof faqData]?.map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                  <h3 className="text-xl font-bold mb-4 text-cyan-400">
                    {item.question}
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Contact Section */}
            <section className="mt-20 text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20">
                <h2 className="text-2xl font-bold mb-4 text-white">Still Have Questions?</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  Can't find the answer you're looking for? Our team of AI automation experts 
                  is here to help. Get in touch with us for personalized assistance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"
                  >
                    Contact Our Team
                  </Link>
                  <Link 
                    href="/resources"
                    className="bg-white/10 text-white px-8 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    Browse Resources
                  </Link>
                </div>
              </div>
            </section>
            
            {/* Related Pages */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold mb-8 text-center text-white">Explore More</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/services" className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Our Services</h3>
                  <p className="text-white/80 text-sm">Discover our comprehensive AI automation solutions</p>
                </Link>
                
                <Link href="/blog" className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">📚</span>
                  </div>
                  <h3 className="text-lg font-semibold text-fuchsia-400 mb-2">Blog & Insights</h3>
                  <p className="text-white/80 text-sm">Read our latest thoughts on AI and automation</p>
                </Link>
                
                <Link href="/case-studies" className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-green-400/30 transition-all duration-300 text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Case Studies</h3>
                  <p className="text-white/80 text-sm">See how we've helped other organizations succeed</p>
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
=======
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
>>>>>>> main
import React from 'react';
import Head from "next/head";
import Link from "next/link";

export default function FAQ() {
  const contact = {
    phone: "+1 302 464 0950"
    email: "kleber@ziontechgroup.com"
    address: "364 E Main St STE 1008 Middletown DE 19709"
    site: "https://ziontechgroup.com"
  }
  const faqs = [
    {
      question: "What services does Zion Tech Group offer?"
      answer:
        "We offer 40+ micro SaaS products, 16+ AI services, and 16+ IT solutions including cloud migration, cybersecurity, data engineering, machine learning, and more."
    }
    {
      question: "How do I get started with your services?"
      answer:
        "Contact us through our contact form, call us at +1 302 464 0950, or email kleber@ziontechgroup.com. We'll schedule a consultation to understand your needs and provide a custom solution."
    }
    {
      question: "What is the typical pricing for your services?"
      answer:
        "Pricing varies by service and complexity. Micro SaaS products typically range from $99-$3,500/month, AI services from $699-$12,999/month, and IT services from $999-$15,999/month. Contact us for a custom quote."
    }
    {
      question: "Do you offer custom development?"
      answer:
        "Yes, we specialize in custom development for micro SaaS products, AI solutions, and IT services. We work closely with clients to build tailored solutions that meet their specific business requirements."
    }
    {
      question: "What technologies do you work with?"
      answer:
        "We work with modern technologies including AWS, Azure, GCP, Kubernetes, Docker, Python, JavaScript, React, Node.js, machine learning frameworks, and various cloud and AI platforms."
    }
    {
      question: "How long does a typical project take?"
      answer:
        "Project timelines vary based on complexity. Simple micro SaaS products can be delivered in 2-4 weeks, while complex AI or IT solutions may take 2-6 months. We provide detailed timelines during consultation."
    }
    {
      question: "Do you provide ongoing support?"
      answer:
        "Yes, we offer comprehensive support and maintenance services for all our solutions. This includes monitoring, updates, troubleshooting, and optimization to ensure optimal performance."
    }
    {
      question: "Can you help with cloud migration?"
      answer:
        "Absolutely! We specialize in cloud migration and modernization services, helping businesses move to AWS, Azure, or GCP with minimal downtime and maximum efficiency."
    }
    {
      question: "What makes your AI services different?"
      answer:
        "Our AI services are tailored to specific business needs, not generic solutions. We focus on practical applications that deliver measurable ROI, with custom model development and integration support."
    }
    {
      question: "Do you work with small businesses?"
      answer:
        "Yes, we work with businesses of all sizes, from startups to enterprises. Our micro SaaS products are particularly well-suited for small and medium businesses looking for cost-effective solutions."
    }
=======
import Head from 'next/head'
import Link from 'next/link'
export default function FAQ() {
  const contact = {

    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

  const faqs = [
    {
      question: "What services does Zion Tech Group offer ? ",
      answer : "We offer 40+ micro SaaS products, 16+ AI services, and 16+ IT solutions including cloud migration, cybersecurity, data engineering, machine learning, and more."
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
      answer: "Yes, we work with businesses of all sizes, from startups to enterprises. Our micro SaaS products are particularly well-suited for small and medium businesses looking for cost-effective solutions."
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ]

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        />;
        <link rel="canonical" href={`${contact && contact.site}/faq`} />;
      </Head>;
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">;
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">;
          <div className="max-w-4xl mx-auto">;
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">;
              Frequently Asked Questions;
            </h1>;
            <p className="text-xl text-slate-300 mb-8">;
              Get Answers to Common Questions;
            </p>;
            <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto">;
              Find answers to the most common questions about our services,;
              pricing, implementation, and support. Can&apos;t find what;
              you&apos;re looking for? Contact us directly.;
            </p>;
          </div>;
        </section>;
        {/* FAQ Section */}
        <section className="py-16 px-4">;
          <div className="max-w-4xl mx-auto">;
            <div className="space-y-8">;
              {faqs && faqs.map((faq, index) => (;
                <div
                  key={index}
                  className="p-8 bg-slate-900/60 rounded-xl border border-white/10">;
                  <h3 className="text-xl font-bold mb-4 text-blue-400">;
                    {faq && faq.question}
                  </h3>;
                  <p className="text-slate-300 leading-relaxed">{faq && faq.answer}</p>;
                </div>;
              ))}

              Find answers to the most common questions about our services, pricing,
              implementation, and support. Can't find what you're looking for? Contact us directly.
            </p>
          </div>
        </section>


        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="p-8 bg-slate-900/60 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold mb-4 text-blue-400">{faq.question}</h3>
                  <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>
          </div>
        </section>
        {/* Contact CTA */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

        <section className="py-16 px-4 bg-slate-900/40">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Still Have Questions?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Our team is here to help. Contact us for personalized answers to
              your specific questions and to discuss how we can help your
              business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
import Head from "next/head";
import Link from "next/link";
origin/main
export default function FAQ() {
  const contact = {
    phone: "+1 302 464 0950"
    email: "kleber@ziontechgroup.com"
    address: "364 E Main St STE 1008 Middletown DE 19709"
    site: "https://ziontechgroup.com"
  }
  const faqs = [
    {
      question: "What services does Zion Tech Group offer?"
      answer:
        "We offer 40+ micro SaaS products, 16+ AI services, and 16+ IT solutions including cloud migration, cybersecurity, data engineering, machine learning, and more."
    }
    {
      question: "How do I get started with your services?"
      answer:
        "Contact us through our contact form, call us at +1 302 464 0950, or email kleber@ziontechgroup.com. We'll schedule a consultation to understand your needs and provide a custom solution."
    }
    {
      question: "What is the typical pricing for your services?"
      answer:
        "Pricing varies by service and complexity. Micro SaaS products typically range from $99-$3,500/month, AI services from $699-$12,999/month, and IT services from $999-$15,999/month. Contact us for a custom quote."
    }
    {
      question: "Do you offer custom development?"
      answer:
        "Yes, we specialize in custom development for micro SaaS products, AI solutions, and IT services. We work closely with clients to build tailored solutions that meet their specific business requirements."
    }
    {
      question: "What technologies do you work with?"
      answer:
        "We work with modern technologies including AWS, Azure, GCP, Kubernetes, Docker, Python, JavaScript, React, Node.js, machine learning frameworks, and various cloud and AI platforms."
    }
    {
      question: "How long does a typical project take?"
      answer:
        "Project timelines vary based on complexity. Simple micro SaaS products can be delivered in 2-4 weeks, while complex AI or IT solutions may take 2-6 months. We provide detailed timelines during consultation."
    }
    {
      question: "Do you provide ongoing support?"
      answer:
        "Yes, we offer comprehensive support and maintenance services for all our solutions. This includes monitoring, updates, troubleshooting, and optimization to ensure optimal performance."
    }
    {
      question: "Can you help with cloud migration?"
      answer:
        "Absolutely! We specialize in cloud migration and modernization services, helping businesses move to AWS, Azure, or GCP with minimal downtime and maximum efficiency."
    }
    {
      question: "What makes your AI services different?"
      answer:
        "Our AI services are tailored to specific business needs, not generic solutions. We focus on practical applications that deliver measurable ROI, with custom model development and integration support."
    }
    {
      question: "Do you work with small businesses?"
      answer:
        "Yes, we work with businesses of all sizes, from startups to enterprises. Our micro SaaS products are particularly well-suited for small and medium businesses looking for cost-effective solutions."
    }
  ];
import Head from 'next/head'
import Link from 'next/link'
export default function FAQ() {
  const contact = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    site: "https://ziontechgroup.com",;
  };
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  const faqs = [
    {
      question: "What services does Zion Tech Group offer ? ",
      answer : "We offer 40+ micro SaaS products, 16+ AI services, and 16+ IT solutions including cloud migration, cybersecurity, data engineering, machine learning, and more."
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
      answer: "Yes, we work with businesses of all sizes, from startups to enterprises. Our micro SaaS products are particularly well-suited for small and medium businesses looking for cost-effective solutions."
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ]
  return (
    <>
<<<<<<< HEAD
      <Head><title>faq - Zion App</title><meta name="description" content="faq page" /></Head><div className="container mx-auto px-4 py-8"><h1 className="text-3xl font-bold mb-6">faq</h1><p className="text-lg mb-4">This page is under construction.</p><div className="mt-4"><a href="/" className="text-blue-600 hover:underline">;
            ← Back to Home</a></div></div></>;
  );
=======
}
=======
      <Head>
        <title>Frequently Asked Questions - Zion Tech Group</title>
        <meta name="description" content="Find answers to common questions about Zion Tech Group's micro SaaS products, AI services, and IT solutions. Get help with pricing, implementation, and support." />
        <meta name="keywords" content="FAQ, frequently asked questions, zion tech group, micro SaaS, AI services, IT solutions" />
        <link rel="canonical" href={`${contact.site}/faq`} />
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Get Answers to Common Questions
            </p>
            <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto">
              Find answers to the most common questions about our services
              pricing, implementation, and support. Can&apos;t find what
              you&apos;re looking for? Contact us directly.
            </p>
          </div>
        </section>
        {/* FAQ Section */}
              Find answers to the most common questions about our services, pricing,
              implementation, and support. Can't find what you're looking for? Contact us directly.
            </p>
          </div>
        </section>
    >
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Find answers to common questions about our services
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>




  );
}=======
                className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors">;
            <div className="flex flex - col sm:flex - row items - center justify - center gap - 4">;
              <a;
                href={`tel:${contact.phone.replace (/[^\d+]/g, "")}`}
                className="px - 8 py - 3 bg - blue - 600 hover:bg - blue - 700 rounded - lg font - semibold transition - colors";
              >;
                Call {contact.phone}
              </a>;
              <a;
                href={`mailto:${contact.email}`}
                className="px - 8 py - 3 bg - purple - 600 hover:bg - purple - 700 rounded - lg font - semibold transition - colors";
              >;
                Email {contact.email}
              </a>;
              <Link;
                href="/contact";
                className="px - 8 py - 3 bg - slate - 800 hover:bg - slate - 700 border border - white / 10 rounded - lg font - semibold transition - colors";
              >;
                Contact Form;
              </Link>;
            </div>;
          </div>;
        </section>;
      </main>;

    </>);

}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> main
