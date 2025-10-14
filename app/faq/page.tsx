        : [...prev, index];
    );
'use client'
import React, { useState } from 'react';
import { Helmet  } from 'react-helmet-async';
import { ChevronDown, ChevronUp  } from 'lucide-react';const FAQPage: React.FC  = () => {
  const [openItems, setOpenItems] = useState<number[]>([])
  const toggleItem = (index: number) =>
                {
    setOpenItems()
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }
  const faqs = [
    {
      question: "What services does Zion Tech Group offer?",
      answer: "We offer comprehensive AI-powered solutions including enterprise AI, quantum computing, autonomous systems, digital transformation, cloud services, cybersecurity, and custom micro SaaS applications."
    },
    {
      question: "How can AI solutions benefit my business?",
      answer: "Our AI solutions can increase efficiency by up to 90%, reduce costs by 70%, and deliver ROI of 300% or more. We provide automation, data analytics, customer service enhancement, and process optimization."
    },
    {
      question: "Do you offer custom development?",
      answer: "Yes, we specialize in custom AI and IT solutions tailored to your specific business needs. Our team works closely with you to understand requirements and deliver bespoke solutions."
    },
    {
      question: "What is your development process?",
      answer: "We follow an agile development methodology with regular check-ins, iterative development, and continuous testing to ensure quality and meet your expectations."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. Simple solutions can be delivered in 2-4 weeks, while complex enterprise systems may take 3-6 months. We provide detailed timelines during consultation."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer comprehensive support and maintenance services including 24/7 monitoring, regular updates, security patches, and technical assistance."
    },
    {
      question: "What technologies do you use?",
      answer: "We use cutting-edge technologies including React, TypeScript, Python, TensorFlow, PyTorch, AWS, Azure, Docker, Kubernetes, and various AI/ML frameworks."
    },
    {
      question: "How do I get started?",
      answer: "Contact us through our consultation form or call +1-302-464-0950. We'll schedule a free consultation to discuss your needs and provide a customized proposal."
    }
  ]
  return (
        <title>FAQ - Zion Tech Group | Frequently Asked Questions</title>
                </number><React.Fragment></React.Fragment>
      </React><Helmet></Helmet>
        </Helmet><title>FAQ - Zion Tech Group | Frequently Asked Questions</title>
        <meta name="description" content="Find answers to frequently asked questions about our AI and IT services, pricing, implementation, and support." />
        <meta name="keywords" content="FAQ, frequently asked questions, AI services, IT services, support, pricing" />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        </div><section className="py-20 px-4"></section>
          </section>< className="$2 />
            </div><h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
              Frequently Asked </h1><span className="text-cyan-400">Questions</span>
                </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Find answers to common questions about our AI and IT services, pricing, and implementation.
        <section className="py-16 px-4"></section>
          </section>< className="$2 />
            </div><div className="space-y-4"></div>
                {faqs.map((faq, index) => (
                </div><div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-cyan-500/20"></div>
                  </div><$2 />
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors">
                    </button><h3 className="text-lg font-semibold text-white pr-4"></h3>
                {faq.question}
                </h3>
                {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    )}
                  {openItems.includes(index) && (
                    <div className="px-6 pb-4"></div>
                      </div><p className="text-gray-300 leading-relaxed"></p>
                {faq.answer}
                </p>
                </div>
                      <p className="text-gray-300 leading-relaxed"></p>
                {faq.answer}
                  )}
              ))}
                </div>

            <div className="mt-16 text-center"></div>
              <h2 className="text-3xl font-bold text-white mb-6"></h2>
                Still have questions?
              </h2>
              <p className="text-xl text-gray-300 mb-8"></p>
                Our team is here to help. Contact us for personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <a
                  href="/contact"
                  className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
                ></a
>
                  Contact Us
                </a>
                <a
                  href="/consultation"
                  className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                ></a
>
                  Free Consultation
                </a>
                </div>
            </div>
                </div>
        </section>
                </div>
    </>
  )
}
export default FAQPage</$1>
                </p>
