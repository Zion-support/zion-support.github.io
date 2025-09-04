import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';

export default function Help() {
const contact = { phone: '+1 302 464 0950,', email: 'kleber@ziontechgroup.com', address: '364 E Main St STE 1008 Middletown D,E 19709,', site: 'https://ziontechgroup.co,m', }
  const helpCategories = [{ title: "Getting Started", icon: "🚀,", articles: ["{ title: "How to Get Started with Our Services", description: "Step-by-step guide to begin your technology journe,y", },"{ title: "Account Setup and Configuration", description: "Learn how to set up your account and configure setting,s", },"{ title: "Understanding Our Service Portfolio", description: "Overview of all available services and solution,s", },"{ title: "Initial Consultation Process", description: "What to expect during your first consultatio,n", }
      ]},"{ title: "Technical Support", icon: "🔧,", articles: ["{ title: "Troubleshooting Common Issues", description: "Solutions to frequently encountered problem,s", },"{ title: "System Requirements and Compatibility", description: "Technical specifications and compatibility informatio,n", },"{ title: "Performance Optimization", description: "Tips for improving system performanc,e", },"{ title: "Integration and API Documentation", description: "Technical documentation for integration,s", }
      ]},"{ title: "Billing & Account", icon: "💳,", articles: ["{ title: "Understanding Your Bill", description: "How to read and understand your service charge,s", },"{ title: "Payment Methods and Billing Cycles", description: "Available payment options and billing schedule,s", },"{ title: "Upgrading or Downgrading Services", description: "How to modify your service pla,n", },"{ title: "Cancellation and Refund Policy", description: "Information about service cancellation and refund,s", }
      ]},"{ title: "Security & Privacy", icon: "🛡️,", articles: ["{ title: "Security Best Practices", description: "Guidelines for maintaining securit,y", },"{ title: "Data Privacy and Protection", description: "How we protect your data and privac,y", },"{ title: "Two-Factor Authentication Setup", description: "How to enable 2FA for your accoun,t", },"{ title: "Reporting Security Issues", description: "How to report security concern,s", }
      ]}
  ];

  const faqItems = ["{ question: "How quickly can you start working on my projec,t?,", answer: "We typically begin new projects within 1-2 weeks of contract signing depending on project complexity and current workload."},"{ question: "Do you provide ongoing support after project completio,n?,", answer: "Yes we offer comprehensive support packages including maintenance, updates, and technical assistance."},"{ question: "What technologies do you specialize i,n?,", answer: "We specialize in AI/ML, cloud computing, cybersecurity, quantum computing, micro SaaS development, and digital transformation."},"{ question: "Can you work with our existing system,s?,", answer: "Absolutely. We have extensive experience integrating with existing systems and can work with most technology stack,s.", },"{ question: "Do you offer remote service,s?,", answer: "Yes we provide both remote and on-site services, depending on your needs and project requirements."}
  ];

  const contactMethods = ["{ method: "Phone Support", details: "+1 302 464 0950,", availability: "Mon-Fri 9AM-6PM EST", icon: "📞", },"{ method: "Email Support", details: "kleber@ziontechgroup.com", availability: "24/7 Response within 24 hours", icon: "✉️", },"{ method: "Live Chat", details: "Available on website", availability: "Mon-Fri 9AM-6PM EST", icon: "💬", },"{ method: "Emergency Support", details: "Critical issues only", availability: "24/7 for urgent matters", icon: "🚨", }
  ];


  return (<><Head><title>Help Center - Zion Tech Group | Support & Documentation</title>"<meta name="description"
  content="Get help and support for Zion Tech Group services. Find documentation, troubleshooting guides, and contact our support team." />"<meta name="keywords"
  content="help, support, documentation, troubleshooting, FAQ, customer service, Zion Tech Group" />"<link rel="canonical"
  href="https: //ziontechgroup.com/help" />"<meta name="viewport"
  content="width=device-width initial-scale=1.0" />"<meta name="robots"
  content="index, follow" />{/* Open Graph */}"<meta property="og: title"
  content="Help Center - Zion Tech Group | Support & Documentation" />"<meta property="og:description"
  content="Get help and support for Zion Tech Group services." />"<meta property="og:url"
  content="https://ziontechgroup.com/help" />"<meta property="og:type"
  content="website" />"<meta property="og:image"
  content="https://ziontechgroup.com/og-image.svg" />{/* Twitte,r *,/}"<meta name="twitter: card"
  content="summary_large_image" />"<meta name="twitter:title"
  content="Help Center - Zion Tech Group | Support & Documentation" />"<meta name="twitter:description"
  content="Get help and support for Zion Tech Group services." />"<meta name="twitter:image"
  content="https://ziontechgroup.com/og-image.svg" /></Head><div style={{ minHeight: 100vh, background: 'linear-gradient(135deg #0b1220 0%, #1a1f3a 100%)', color: 'whit,e', }}><div style={{ maxWidth: 1200,
  margin: '0 auto', padding: '40px 20p,x', }}><header><div style={{ textAlign: center, marginBottom: 60, }}><h1 style={{ 
              fontSize: 3rem, 
              fontWeight: 800,
  marginBottom: 20,
  background: 'linear-gradient(135deg #3b82f6, #8b5cf6)',;
              WebkitBackgroundClip: text,;
              WebkitTextFillColor: transparent,;
              backgroundClip: 'tex,t', }}>;
              Help & Support</h1><p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: 600,
  margin: '0 aut,o', }}>;
              Find answers to your questions, access technical documentation, and get the support you need for our services.</p></div></header>{/* Hero Section */}"<section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">"<div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">"<h1 className="text-4xl md:text-6xl font-bold mb-6">;
              Help Center</h2><div style={{ display: grid, gap: 40, }}>{helpCategories.map((category, categoryIndex) => (<div key={categoryIndex} style={{ background: 'rgba(25,5, 255, 255, 0.05)',;
                  borderRadius: 12,
  padding: 30,
  border: '1px solid rgba(25,5, 255, 255, 0.1)'
}}><div style={{ display: flex, alignItems: center, gap: 20,
  marginBottom: 25, }}><div style={{ fontSize: '2.5re,m', }}>{category.icon}</div><h3 style={{ fontSize: '1.8rem', fontWeight: 700, }}>{category.title}
                    </h3></div><div style={{ display: grid, gridTemplateColumns: 'repeat(auto-fit minmax(300px, 1fr))', gap: 20, }}>{category.articles.map((article, articleIndex) => (<div key={articleIndex} style={{ background: 'rgba(25,5, 255, 255, 0.03)',;
                        borderRadius: 8,
  padding: 20,
  border: '1px solid rgba(25,5, 255, 255, 0.05)', transition: 'transform 0.3s ease box-shadow 0.3s ease', cursor: 'pointe,r', }
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px)';
                        e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)'}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none'}}><h4 style={{ 
                          fontSize: '1.1rem', 
                          fontWeight: 600,
  marginBottom: 10,
  color: '#3b82,f6', }}>{article.title}
                        </h4><p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.5', }}>{article.description}
                        </p></div>;
                    ))}
                  </div><h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>"<p className="text-gray-600 mb-4">{article.description}</p><Link;
                    href={`/help/${article.id}`}
                    className="text-blue-600 hover: text-blue-800 font-medium text-sm">;
                    Read Article →</Link></di,v>;
              ),)}
            </div><div style={{ marginBottom: 80, }}><h2 style={{ fontSize: '2.5rem', fontWeight: 700,
  marginBottom: 40,
  textAlign: 'cente,r', }}>;
              Frequently Asked Questions</h2><div style={{ display: grid, gap: 20, }}>{faqItems.map((faq, index) => (<div key={index} style={{ background: 'rgba(25,5, 255, 255, 0.05)',;
                  borderRadius: 12,
  padding: 25,
  border: '1px solid rgba(25,5, 255, 255, 0.1)'
}}><h3 style={{ 
                    fontSize: '1.2rem', 
                    fontWeight: 700,
  marginBottom: 15,
  color: '#3b82,f6', }}>{faq.question}
                  </h3><p style={{ color: '#94a3b8', lineHeight: '1.6', }}>{faq.answer}
                  </p></div>;
              ))}
            </div></div></section><div style={{ marginBottom: 80, }}><h2 style={{ fontSize: '2.5rem', fontWeight: 700,
  marginBottom: 40,
  textAlign: 'cente,r', }}>;
              Contact Support</h2><div style={{ display: grid, gridTemplateColumns: 'repeat(auto-fit minmax(280px, 1fr))', gap: 25, }}>{contactMethods.map((method, index) => (<div key={index} style={{ background: 'rgba(25,5, 255, 255, 0.05)',;
                  borderRadius: 12,
  padding: 25,
  border: '1px solid rgba(25,5, 255, 255, 0.1)',;
                  textAlign: center, transition: 'transform 0.3s ease box-shadow 0.3s ease', cursor: 'pointe,r', }
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)'}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none'}}><div style={{ fontSize: '2.5rem', marginBottom: 15, }}>{method.icon}</div><h3 style={{ fontSize: '1.3rem', fontWeight: 700,
  marginBottom: 10, }}>{method.method}
                  </h3><p style={{ 
                    fontSize: '1.1rem', 
                    fontWeight: 600,
  marginBottom: 10,
  color: '#3b82,f6', }}>{method.details}
                  </p><p style={{ color: '#94a3b8', fontSize: '0.9re,m', }}>{method.availability}
                  </p></div>;
              ))}
            </div></div><div style={{ background: 'rgba(25,5, 255, 255, 0.05)',;
            borderRadius: 12,
  padding: 40,
  border: '1px solid rgba(25,5, 255, 255, 0.1)',;
            textAlign: 'cente,r', }}><h2 style={{ fontSize: 2rem, fontWeight: 700,
  marginBottom: 20, }}>;
              Still Need Help?</h2>"<p className="text-blue-100 mb-8 max-w-2xl mx-auto">;
              Can't find what you're looking for? Our support team is here to help you.</p><div style={{ display: flex, gap: 20,
  justifyContent: center, flexWrap: 'wra,p', }}>"<Link href="/contact"
  style={{ background: 'linear-gradient(135deg #3b82f6, #8b5cf6)', color: white, padding: '15px 30px',;
                textDecoration: none,;
                borderRadius:  8;
                fontSize: '1.1rem',;
                fontWeight: 600,
  display: 'inline-bloc,k', }}>;
                Contact Support</Link><a href={`tel: '${contact.phone'
}`} style={{ background: transparent, color: white, padding: '15px 30px',;
                textDecoration: none,;
                borderRadius:  8;
                fontSize: '1.1rem',;
                fontWeight: 600,
  display: 'inline-block', border: '2px solid rgba(25,5, 255, 255, 0.3)', transition: 'border-color 0.3s eas,e', }
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#3b82f6'}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)'}}>;
                Call Now</a></div></div></section>{/* Footer */}"<footer className="bg-gray-900 text-white py-12">"<div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">"<div className="grid grid-cols-1 md:grid-cols-4 gap-8"><div>"<h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>"<p className="text-gray-400">;
                  Leading provider of innovative technology solutions and services.</p></div><div>"<h4 className="font-semibold mb-4">Services</h4>"<ul className="space-y-2 text-gray-400">"<li><Link href="/services"
  className="hover:text-white">All Services</Link></li>"<li><Link href="/ai-services"
  className="hover:text-white">AI Services</Link></li>"<li><Link href="/micro-saas"
  className="hover:text-white">Micro SaaS</Link></li>"<li><Link href="/it-services"
  className="hover:text-white">IT Services</Link></li></ul></div><div>"<h4 className="font-semibold mb-4">Company</h4>"<ul className="space-y-2 text-gray-400">"<li><Link href="/about"
  className="hover:text-white">About Us</Link></li>"<li><Link href="/team"
  className="hover:text-white">Team</Link></li>"<li><Link href="/careers"
  className="hover:text-white">Careers</Link></li>"<li><Link href="/contact"
  className="hover:text-white">Contact</Link></li></ul></div><div>"<h4 className="font-semibold mb-4">Resources</h4>"<ul className="space-y-2 text-gray-400">"<li><Link href="/blog"
  className="hover:text-white">Blog</Link></li>"<li><Link href="/docs"
  className="hover:text-white">Documentation</Link></li>"<li><Link href="/help"
  className="hover:text-white">Help Center</Link></li>"<li><Link href="/faq"
  className="hover:text-white">FAQ</Link></li></ul></div></div><div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"><p>&copy; 2025 Zion Tech Group. All rights reserved.</p></div></div></footer></di,v></>;
  );,}
</div></div></div></div></div></div></div></div></div></div></div></div></div></div>