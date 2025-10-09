import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const FAQPage: React.FC = () => {
  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What is Zion Tech Group?",
          answer: "Zion Tech Group is a leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. We help businesses transform their operations with cutting-edge technology."
        },
        {
          question: "What services do you offer?",
          answer: "We offer comprehensive AI services, cloud infrastructure, cybersecurity, data analytics, mobile development, workflow automation, quantum computing, blockchain solutions, autonomous systems, and business intelligence services."
        },
        {
          question: "How can I get started?",
          answer: "You can get started by calling us at (302) 464-0950 for a free consultation, or visit our contact page to schedule a meeting. We'll assess your needs and provide a customized solution."
        }
      ]
    },
    {
      category: "AI Services",
      questions: [
        {
          question: "What AI technologies do you specialize in?",
          answer: "We specialize in machine learning, natural language processing, computer vision, predictive analytics, autonomous systems, and quantum computing applications for enterprise use."
        },
        {
          question: "How long does AI implementation take?",
          answer: "Implementation timelines vary based on project complexity. Simple AI solutions can be deployed in 2-4 weeks, while comprehensive enterprise AI transformations typically take 3-6 months."
        },
        {
          question: "Do you provide ongoing support?",
          answer: "Yes, we provide 24/7 support for all our AI solutions, including monitoring, maintenance, updates, and optimization to ensure peak performance."
        }
      ]
    },
    {
      category: "Pricing & Billing",
      questions: [
        {
          question: "What are your pricing models?",
          answer: "We offer flexible pricing models including monthly subscriptions starting at $199/month, project-based pricing for custom solutions, and enterprise packages with volume discounts."
        },
        {
          question: "Do you offer free consultations?",
          answer: "Yes, we provide free initial consultations to assess your needs and provide recommendations. This includes a detailed analysis of your current systems and proposed solutions."
        },
        {
          question: "Are there any setup fees?",
          answer: "Setup fees vary by project complexity. Simple implementations may have no setup fees, while complex enterprise solutions may include one-time setup costs that are clearly outlined in your proposal."
        }
      ]
    },
    {
      category: "Technical Support",
      questions: [
        {
          question: "What is your uptime guarantee?",
          answer: "We guarantee 99.9% uptime for all our services, backed by our robust cloud infrastructure and 24/7 monitoring systems."
        },
        {
          question: "How do you ensure data security?",
          answer: "We implement bank-level security with SOC 2 Type II certification, ISO 27001 compliance, end-to-end encryption, and regular security audits to protect your data."
        },
        {
          question: "Do you provide training for our team?",
          answer: "Yes, we provide comprehensive training programs for your team to ensure they can effectively use and maintain the solutions we implement."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center neon-text">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Find answers to common questions about our AI services, pricing, and technical support.
          </p>

          <div className="space-y-12">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="cyber-card">
                <h2 className="text-2xl font-bold text-cyan-400 mb-6">{category.category}</h2>
                <div className="space-y-6">
                  {category.questions.map((faq, faqIndex) => (
                    <div key={faqIndex} className="border-b border-gray-700 pb-6 last:border-b-0">
                      <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center cyber-card">
            <h2 className="text-2xl font-bold text-white mb-4">Still have questions?</h2>
            <p className="text-gray-300 mb-6">
              Our team is here to help. Contact us for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button"
              >
                📞 Call (302) 464-0950
              </a>
              <a
                href="/contact"
                className="cyber-button"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQPage;