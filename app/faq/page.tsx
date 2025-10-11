'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ChevronUp } from 'lucide-react';
const FAQPage: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const toggleItem = (index: number) => {
    setOpenItems();
      prev.includes(index) ;
        ? prev.filter(item => item !== index);
        : [...prev, index];
    );
  }
  const faqs = [
    {
      question: "What AI services do you offer?",
      answer: "We offer comprehensive AI services including marketing automation, customer support, data analytics, content generation, healthcare solutions, financial services, e-commerce solutions, cybersecurity, mobile apps, sales automation, workflow automation, and data visualization."
    },
    {
      question: "How can AI benefit my business?",
      answer: "AI can automate repetitive tasks, provide data-driven insights, improve customer experience, enhance security, optimize operations, and drive innovation. Our solutions typically deliver 300% ROI within the first year."
    },
    {
      question: "Do you provide IT infrastructure services?",
      answer: "Yes, we offer complete IT infrastructure services including cloud migration, DevOps, database management, cybersecurity, managed IT services, and IT consulting to modernize your technology stack."
    },
    {
      question: "What is your pricing model?",
      answer: "We offer flexible pricing models including subscription-based plans starting at $99/month for small businesses, custom enterprise solutions, and project-based pricing. Contact us for a personalized quote."
    },
    {
      question: "Do you offer 24/7 support?",
      answer: "Yes, we provide 24/7 technical support for all our services. Our support team is available via phone, email, and live chat to ensure your systems run smoothly around the clock."
    },
    {
      question: "How long does implementation take?",
      answer: "Implementation timelines vary based on project complexity. Simple AI solutions can be deployed in 2-4 weeks, while comprehensive digital transformation projects may take 3-6 months. We provide detailed timelines during consultation."
    },
    {
      question: "Do you work with small businesses?",
      answer: "Absolutely! We work with businesses of all sizes, from startups to enterprise organizations. Our micro SAAS solutions are specifically designed for small businesses looking to leverage AI technology."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve a wide range of industries including healthcare, finance, e-commerce, manufacturing, education, real estate, legal, and more. Our solutions are tailored to meet industry-specific requirements and compliance standards.";
    };
  ];
  return() {faqs.map((faq, index) => ()
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors">
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                    {openItems.includes(index) ? ()
                    ) : ()
                    )}
                  </button>
                  {openItems.includes(index) && ()
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQPage;
