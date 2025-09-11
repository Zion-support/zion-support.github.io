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
