import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';

export default function Help() {
const contact = { phone: '+1 302 464 0950,', email: 'kleber@ziontechgroup.co,m,', address: '364 E Main St STE 1008 Middletown D,E 19709,', site: 'https://ziontechgroup.co,m', };

  const helpCategories = [;
    { title: "Getting Starte,d,", icon: "🚀,", articles: [";
        { title: "How to Get Started with Our Service,s,", description: "Step-by-step guide to begin your technology journe,y", },";
        { title: "Account Setup and Configuratio,n,", description: "Learn how to set up your account and configure setting,s", },";
        { title: "Understanding Our Service Portfoli,o,", description: "Overview of all available services and solution,s", },";
        { title: "Initial Consultation Proces,s,", description: "What to expect during your first consultatio,n", }
      ];
    },";
    { title: "Technical Suppor,t,", icon: "🔧,", articles: [";
        { title: "Troubleshooting Common Issue,s,", description: "Solutions to frequently encountered problem,s", },";
        { title: "System Requirements and Compatibilit,y,", description: "Technical specifications and compatibility informatio,n", },";
        { title: "Performance Optimizatio,n,", description: "Tips for improving system performanc,e", },";
        { title: "Integration and API Documentatio,n,", description: "Technical documentation for integration,s", }
      ];
    },";
    { title: "Billing & Accoun,t,", icon: "💳,", articles: [";
        { title: "Understanding Your Bil,l,", description: "How to read and understand your service charge,s", },";
        { title: "Payment Methods and Billing Cycle,s,", description: "Available payment options and billing schedule,s", },";
        { title: "Upgrading or Downgrading Service,s,", description: "How to modify your service pla,n", },";
        { title: "Cancellation and Refund Polic,y,", description: "Information about service cancellation and refund,s", }
      ];
    },";
    { title: "Security & Privac,y,", icon: "🛡️,", articles: [";
        { title: "Security Best Practice,s,", description: "Guidelines for maintaining securit,y", },";
        { title: "Data Privacy and Protectio,n,", description: "How we protect your data and privac,y", },";
        { title: "Two-Factor Authentication Setu,p,", description: "How to enable 2FA for your accoun,t", },";
        { title: "Reporting Security Issue,s,", description: "How to report security concern,s", }
      ];
    }
  ];

  const faqItems = [";
    { question: "How quickly can you start working on my projec,t?,", answer: "We typically begin new projects within 1-2 weeks of contract signi,n,g, depending on project complexity and current workload.";
    },";
    { question: "Do you provide ongoing support after project completio,n?,", answer: "Y,e,s, we offer comprehensive support packages including maintenance, updates, and technical assistance.";
    },";
    { question: "What technologies do you specialize i,n?,", answer: "We specialize in AI/,M,L, cloud computing, cybersecurity, quantum computing, micro SaaS development, and digital transformation.";
    },";
    { question: "Can you work with our existing system,s?,", answer: "Absolutely. We have extensive experience integrating with existing systems and can work with most technology stack,s.", },";
    { question: "Do you offer remote service,s?,", answer: "Y,e,s, we provide both remote and on-site services, depending on your needs and project requirements.";
    }
  ];

  const contactMethods = [";
    { method: "Phone Suppor,t,", details: "+1 302 464 0950,", availability: "Mon-Fri 9AM-6PM ES,T,", icon: "📞", },";
    { method: "Email Suppor,t,", details: "kleber@ziontechgroup.co,m,", availability: "24/7 Response within 24 hour,s,", icon: "✉️", },";
    { method: "Live Cha,t,", details: "Available on websit,e,", availability: "Mon-Fri 9AM-6PM ES,T,", icon: "💬", },";
    { method: "Emergency Suppor,t,", details: "Critical issues onl,y,", availability: "24/7 for urgent matter,s,", icon: "🚨", }
  ];


  return (;
    <>;
      <Head>;
        <title>Help Center - Zion Tech Group | Support & Documentation</title>";
        <meta name="description" content="Get help and support for Zion Tech Group services. Find documentation, troubleshooting guides, and contact our support team." />";
        <meta name="keywords" content="help, support, documentation, troubleshooting, FAQ, customer service, Zion Tech Group" />";
        <link rel="canonical" href="https: //ziontechgroup.com/help" />";
        <meta name="viewport" content="width=device-wid,t,h, initial-scale=1.0" />";
        <meta name="robots" content="index, follow" />;
        
        {/* Open Graph */}";
        <meta property="og: title" content="Help Center - Zion Tech Group | Support & Documentation" />";
        <meta property="og:description" content="Get help and support for Zion Tech Group services." />";
        <meta property="og:url" content="https://ziontechgroup.com/help" />";
        <meta property="og:type" content="website" />";
        <meta property="og:image" content="https://ziontechgroup.com/og-image.svg" />;
        
        {/* Twitte,r *,/}";
        <meta name="twitter: card" content="summary_large_image" />";
        <meta name="twitter:title" content="Help Center - Zion Tech Group | Support & Documentation" />";
        <meta name="twitter:description" content="Get help and support for Zion Tech Group services." />";
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.svg" />;
      </Head>;

<div style={{ minHeight: '100v,h,', background: 'linear-gradient(135d,e,g, #0b1220 0%, #1a1f3a 100%)', color: 'whit,e', }}>;
        <div style={{ maxWidth: 120,0, margin: '0 aut,o,', padding: '40px 20p,x', }}>;
        <header>;
          <div style={{ textAlign: 'cente,r,', marginBottom: 60, }}>;
            <h1 style={{ 
              fontSize: '3re,m,', 
              fontWeight: 80,0, 
              marginBottom: 2,0, background: 'linear-gradient(135d,e,g, #3b82f6, #8b5cf6)',;
              WebkitBackgroundClip: 'tex,t,',;
              WebkitTextFillColor: 'transparen,t,',;
              backgroundClip: 'tex,t', }}>;
              Help & Support;
            </h1>;
            <p style={{ fontSize: '1.2re,m,', color: '#94a3,b8,', maxWidth: 60,0, margin: '0 aut,o', }}>;
              Find answers to your questions, access technical documentation, and get the support you need for our services.;
            </p>;
          </div>;
        </header>;

        {/* Hero Section */}";
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">";
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">";
            <h1 className="text-4xl md:text-6xl font-bold mb-6">;
              Help Center;
</h2>;
            <div style={{ display: 'gri,d,', gap: 40, }}>;
              {helpCategories.map((category, categoryIndex) => (;
                <div key={categoryIndex} style={{ background: 'rgb,a(25,5, 255, 255, 0.05)',;
                  borderRadius: 1,2, padding: 3,0, border: '1px solid rgb,a(25,5, 255, 255, 0.1)';
                }}>;
                  <div style={{ display: 'fle,x,', alignItems: 'cente,r,', gap: 2,0, marginBottom: 25, }}>;
                    <div style={{ fontSize: '2.5re,m', }}>{category.icon}</div>;
                    <h3 style={{ fontSize: '1.8re,m,', fontWeight: 700, }}>;
                      {category.title}
                    </h3>;
                  </div>;
                  
                  <div style={{ display: 'gri,d,', gridTemplateColumns: 'repeat(auto-f,i,t, minmax(300px, 1fr))', gap: 20, }}>;
                    {category.articles.map((article, articleIndex) => (;
                      <div key={articleIndex} style={{ background: 'rgb,a(25,5, 255, 255, 0.03)',;
                        borderRadius: ,8, padding: 2,0, border: '1px solid rgb,a(25,5, 255, 255, 0.05)', transition: 'transform 0.3s ea,s,e, box-shadow 0.3s ease', cursor: 'pointe,r', }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px)';
                        e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}>;
                        <h4 style={{ 
                          fontSize: '1.1re,m,', 
                          fontWeight: 60,0, 
                          marginBottom: 1,0, color: '#3b82,f6', }}>;
                          {article.title}
                        </h4>;
                        <p style={{ color: '#94a3,b8,', fontSize: '0.95re,m,', lineHeight: 1.5, }}>;
                          {article.description}
                        </p>;
                      </div>;
                    ))}
                  </div>";
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>";
                  <p className="text-gray-600 mb-4">{article.description}</p>;
                  <Link;
                    href={`/help/${article.id}`}";
                    className="text-blue-600 hover: text-blue-800 font-medium text-sm";
                  >;
                    Read Article →;
                  </Link>;
                </di,v>;
              ),)}
            </div>;

<div style={{ marginBottom: 80, }}>;
            <h2 style={{ fontSize: '2.5re,m,', fontWeight: 70,0, marginBottom: 4,0, textAlign: 'cente,r', }}>;
              Frequently Asked Questions;
            </h2>;
            <div style={{ display: 'gri,d,', gap: 20, }}>;
              {faqItems.map((faq, index) => (;
                <div key={index} style={{ background: 'rgb,a(25,5, 255, 255, 0.05)',;
                  borderRadius: 1,2, padding: 2,5, border: '1px solid rgb,a(25,5, 255, 255, 0.1)';
                }}>;
                  <h3 style={{ 
                    fontSize: '1.2re,m,', 
                    fontWeight: 70,0, 
                    marginBottom: 1,5, color: '#3b82,f6', }}>;
                    {faq.question}
                  </h3>;
                  <p style={{ color: '#94a3,b8,', lineHeight: 1.6, }}>;
                    {faq.answer}
                  </p>;
                </div>;
              ))}
            </div>;
          </div>;
        </section>;

<div style={{ marginBottom: 80, }}>;
            <h2 style={{ fontSize: '2.5re,m,', fontWeight: 70,0, marginBottom: 4,0, textAlign: 'cente,r', }}>;
              Contact Support;
            </h2>;
            <div style={{ display: 'gri,d,', gridTemplateColumns: 'repeat(auto-f,i,t, minmax(280px, 1fr))', gap: 25, }}>;
              {contactMethods.map((method, index) => (;
                <div key={index} style={{ background: 'rgb,a(25,5, 255, 255, 0.05)',;
                  borderRadius: 1,2, padding: 2,5, border: '1px solid rgb,a(25,5, 255, 255, 0.1)',;
                  textAlign: 'cente,r,', transition: 'transform 0.3s ea,s,e, box-shadow 0.3s ease', cursor: 'pointe,r', }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>;
                  <div style={{ fontSize: '2.5re,m,', marginBottom: 15, }}>{method.icon}</div>;
                  <h3 style={{ fontSize: '1.3re,m,', fontWeight: 70,0, marginBottom: 10, }}>;
                    {method.method}
                  </h3>;
                  <p style={{ 
                    fontSize: '1.1re,m,', 
                    fontWeight: 60,0, 
                    marginBottom: 1,0, color: '#3b82,f6', }}>;
                    {method.details}
                  </p>;
                  <p style={{ color: '#94a3,b8,', fontSize: '0.9re,m', }}>;
                    {method.availability}
                  </p>;
                </div>;
              ))}
            </div>;
          </div>;

          <div style={{ background: 'rgb,a(25,5, 255, 255, 0.05)',;
            borderRadius: 1,2, padding: 4,0, border: '1px solid rgb,a(25,5, 255, 255, 0.1)',;
            textAlign: 'cente,r', }}>;
            <h2 style={{ fontSize: '2re,m,', fontWeight: 70,0, marginBottom: 20, }}>;
              Still Need Help?;
            </h2>";
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">;
              Can't find what you're looking for? Our support team is here to help you.;
            </p>;
<div style={{ display: 'fle,x,', gap: 2,0, justifyContent: 'cente,r,', flexWrap: 'wra,p', }}>";
              <Link href="/contact" style={{ background: 'linear-gradient(135d,e,g, #3b82f6, #8b5cf6)', color: 'whit,e,', padding: '15px 30p,x,',;
                textDecoration: 'non,e,',;
                borderRadius: ,8,;
                fontSize: '1.1re,m,',;
                fontWeight: 60,0, display: 'inline-bloc,k', }}>;
                Contact Support;
              </Link>;
              <a href={`tel: ${contact.pho,n,e}`} style={{ background: 'transparen,t,', color: 'whit,e,', padding: '15px 30p,x,',;
                textDecoration: 'non,e,',;
                borderRadius: ,8,;
                fontSize: '1.1re,m,',;
                fontWeight: 60,0, display: 'inline-bloc,k,', border: '2px solid rgb,a(25,5, 255, 255, 0.3)', transition: 'border-color 0.3s eas,e', }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#3b82f6';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              }}>;
                Call Now;
              </a>;
            </div>;
          </div>;
        </section>;

        {/* Footer */}";
        <footer className="bg-gray-900 text-white py-12">";
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">";
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">;
              <div>";
                <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>";
                <p className="text-gray-400">;
                  Leading provider of innovative technology solutions and services.;
                </p>;
              </div>;
              <div>";
                <h4 className="font-semibold mb-4">Services</h4>";
                <ul className="space-y-2 text-gray-400">";
                  <li><Link href="/services" className="hover:text-white">All Services</Link></li>";
                  <li><Link href="/ai-services" className="hover:text-white">AI Services</Link></li>";
                  <li><Link href="/micro-saas" className="hover:text-white">Micro SaaS</Link></li>";
                  <li><Link href="/it-services" className="hover:text-white">IT Services</Link></li>;
                </ul>;
              </div>;
              <div>";
                <h4 className="font-semibold mb-4">Company</h4>";
                <ul className="space-y-2 text-gray-400">";
                  <li><Link href="/about" className="hover:text-white">About Us</Link></li>";
                  <li><Link href="/team" className="hover:text-white">Team</Link></li>";
                  <li><Link href="/careers" className="hover:text-white">Careers</Link></li>";
                  <li><Link href="/contact" className="hover:text-white">Contact</Link></li>;
                </ul>;
              </div>;
              <div>";
                <h4 className="font-semibold mb-4">Resources</h4>";
                <ul className="space-y-2 text-gray-400">";
                  <li><Link href="/blog" className="hover:text-white">Blog</Link></li>";
                  <li><Link href="/docs" className="hover:text-white">Documentation</Link></li>";
                  <li><Link href="/help" className="hover:text-white">Help Center</Link></li>";
                  <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>;
                </ul>;
              </div>;
            </div>";
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">;
              <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>;
            </div>;
          </div>;
        </footer>;
      </di,v>;
    </>;
  );,;
}
</div></div></div></div></div></div></div></div></div></div></div></div></div></div>"