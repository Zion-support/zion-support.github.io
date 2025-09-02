import type { NextPage } from &apos;next&apos;;
import Layout from &apos;../components/Layout&apos;;
import Link from &apos;next/link&apos;;
import { HelpCircle, Search, MessageCircle, Phone, Mail, BookOpen, Video, FileText, Users, Clock, CheckCircle } from &apos;lucide-react&apos;;

const Help: NextPage = () => {
  const faqs = [
    {
      question: &quot;What services does Zion Tech Group offer?&quot;,
      answer: &quot;We offer comprehensive technology solutions including AI development, cloud services, web development, mobile development, blockchain solutions, IoT platforms, and cybersecurity services.&quot;
    },
    {
      question: &quot;How do I get started with a project?&quot;,
      answer: &quot;Contact us through our website, email, or phone to schedule a consultation. We&apos;ll discuss your requirements and provide a customized solution proposal.&quot;
    },
    {
      question: &quot;What is your typical project timeline?&quot;,
      answer: &quot;Project timelines vary based on complexity and scope. Simple websites may take 2-4 weeks, while complex enterprise solutions can take 3-6 months. We provide detailed timelines during consultation.&quot;
    },
    {
      question: &quot;Do you provide ongoing support and maintenance?&quot;,
      answer: &quot;Yes, we offer comprehensive support and maintenance packages to ensure your solutions continue to perform optimally after deployment.&quot;
    },
    {
      question: &quot;What technologies do you work with?&quot;,
      answer: &quot;We work with modern technologies including React, Node.js, Python, AWS, Azure, AI/ML frameworks, blockchain platforms, and mobile development frameworks.&quot;
    },
    {
      question: &quot;How do you ensure data security?&quot;,
      answer: &quot;We implement industry-standard security measures including SSL encryption, secure data storage, regular security audits, and compliance with data protection regulations.&quot;
    }
  ];

  const supportChannels = [
    {
      icon: Mail,
      title: &quot;Email Support&quot;,
      description: &quot;Get help via email with detailed responses&quot;,
      contact: &quot;kleber@ziontechgroup.com&quot;,
      responseTime: &quot;Within 24 hours&quot;,
      color: &quot;blue&quot;
    },
    {
      icon: Phone,
      title: &quot;Phone Support&quot;,
      description: &quot;Speak directly with our technical team&quot;,
      contact: &quot;+1 (302) 464-0950&quot;,
      responseTime: &quot;Mon-Fri 9AM-6PM EST&quot;,
      color: &quot;green&quot;
    },
    {
      icon: MessageCircle,
      title: &quot;Live Chat&quot;,
      description: &quot;Get instant help through our live chat&quot;,
      contact: &quot;Available on website&quot;,
      responseTime: &quot;Real-time&quot;,
      color: &quot;purple&quot;
    }
  ];

  const resources = [
    {
      icon: BookOpen,
      title: &quot;Documentation&quot;,
      description: &quot;Comprehensive guides and API documentation&quot;,
      link: &quot;/docs&quot;
    },
    {
      icon: Video,
      title: &quot;Video Tutorials&quot;,
      description: &quot;Step-by-step video guides and tutorials&quot;,
      link: &quot;/tutorials&quot;
    },
    {
      icon: FileText,
      title: &quot;Knowledge Base&quot;,
      description: &quot;Searchable articles and troubleshooting guides&quot;,
      link: &quot;/knowledge-base&quot;
    },
    {
      icon: Users,
      title: &quot;Community Forum&quot;,
      description: &quot;Connect with other users and get peer support&quot;,
      link: &quot;/community&quot;
    }
  ];

  return (
    <Layout
      title=&quot;Help & Support - Zion Tech Group&quot;
      description=&quot;Get help and support for Zion Tech Group services. Find answers to common questions, contact our support team, and access helpful resources.&quot;
    >
      {/* Hero Section */}
      <section className=&quot;bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20&quot;>
        <div className=&quot;container mx-auto px-4 text-center&quot;>
          <h1 className=&quot;text-5xl md:text-6xl font-bold mb-6&quot;>
            Help &
            <span className=&quot;text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400&quot;> Support</span>
          </h1>
          <p className=&quot;text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200&quot;>
            We&apos;re here to help you succeed. Find answers, get support, and access resources to make the most of our services.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className=&quot;py-12 bg-gray-50&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;max-w-2xl mx-auto&quot;>
            <div className=&quot;relative&quot;>
              <Search className=&quot;absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5&quot; />
              <input
                type=&quot;text&quot;
                placeholder=&quot;Search for help articles, guides, or FAQs...&quot;
                className=&quot;w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg&quot;
              />
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className=&quot;py-20 bg-white&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <h2 className=&quot;text-3xl font-bold text-center text-gray-900 mb-12&quot;>Get Support</h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
            {supportChannels.map((channel, index) => (
              <div key={index} className=&quot;bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition-shadow&quot;>
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-${channel.color}-100`}>
                  <channel.icon className={`w-8 h-8 text-${channel.color}-600`} />
                </div>
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-3&quot;>{channel.title}</h3>
                <p className=&quot;text-gray-600 mb-4&quot;>{channel.description}</p>
                <p className=&quot;text-lg font-medium text-gray-900 mb-2&quot;>{channel.contact}</p>
                <p className=&quot;text-sm text-gray-500&quot;>{channel.responseTime}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className=&quot;py-20 bg-gray-50&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <h2 className=&quot;text-3xl font-bold text-center text-gray-900 mb-12&quot;>Helpful Resources</h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
            {resources.map((resource, index) => (
              <Link key={index} href={resource.link} className=&quot;bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow group&quot;>
                <div className=&quot;w-12 h-12 mb-4 rounded-lg bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors&quot;>
                  <resource.icon className=&quot;w-6 h-6 text-blue-600&quot; />
                </div>
                <h3 className=&quot;text-lg font-semibold text-gray-900 mb-2&quot;>{resource.title}</h3>
                <p className=&quot;text-gray-600 text-sm&quot;>{resource.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className=&quot;py-20 bg-white&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <h2 className=&quot;text-3xl font-bold text-center text-gray-900 mb-12&quot;>Frequently Asked Questions</h2>
          <div className=&quot;max-w-4xl mx-auto&quot;>
            <div className=&quot;space-y-6&quot;>
              {faqs.map((faq, index) => (
                <div key={index} className=&quot;bg-gray-50 rounded-lg p-6&quot;>
                  <h3 className=&quot;text-lg font-semibold text-gray-900 mb-3 flex items-center&quot;>
                    <HelpCircle className=&quot;w-5 h-5 mr-2 text-blue-600&quot; />
                    {faq.question}
                  </h3>
                  <p className=&quot;text-gray-600&quot;>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className=&quot;py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <h2 className=&quot;text-3xl font-bold text-center mb-12&quot;>Quick Actions</h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6&quot;>
            <Link href=&quot;/contact&quot; className=&quot;bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center transition-colors&quot;>
              <div className=&quot;w-12 h-12 mx-auto mb-4 rounded-lg bg-white/20 flex items-center justify-center&quot;>
                <MessageCircle className=&quot;w-6 h-6&quot; />
              </div>
              <h3 className=&quot;text-lg font-semibold mb-2&quot;>Contact Us</h3>
              <p className=&quot;text-sm text-blue-100&quot;>Get in touch for project inquiries</p>
            </Link>

            <Link href=&quot;/services&quot; className=&quot;bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center transition-colors&quot;>
              <div className=&quot;w-12 h-12 mx-auto mb-4 rounded-lg bg-white/20 flex items-center justify-center&quot;>
                <CheckCircle className=&quot;w-6 h-6&quot; />
              </div>
              <h3 className=&quot;text-lg font-semibold mb-2&quot;>Our Services</h3>
              <p className=&quot;text-sm text-blue-100&quot;>Explore what we can do for you</p>
            </Link>

            <Link href=&quot;/about&quot; className=&quot;bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center transition-colors&quot;>
              <div className=&quot;w-12 h-12 mx-auto mb-4 rounded-lg bg-white/20 flex items-center justify-center&quot;>
                <Users className=&quot;w-6 h-6&quot; />
              </div>
              <h3 className=&quot;text-lg font-semibold mb-2&quot;>About Us</h3>
              <p className=&quot;text-sm text-blue-100&quot;>Learn more about our team</p>
            </Link>

            <Link href=&quot;/careers&quot; className=&quot;bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center transition-colors&quot;>
              <div className=&quot;w-12 h-12 mx-auto mb-4 rounded-lg bg-white/20 flex items-center justify-center&quot;>
                <Clock className=&quot;w-6 h-6&quot; />
              </div>
              <h3 className=&quot;text-lg font-semibold mb-2&quot;>Careers</h3>
              <p className=&quot;text-sm text-blue-100&quot;>Join our growing team</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className=&quot;py-20 bg-white&quot;>
        <div className=&quot;container mx-auto px-4 text-center&quot;>
          <h2 className=&quot;text-4xl font-bold text-gray-900 mb-6&quot;>Still Need Help?</h2>
          <p className=&quot;text-xl text-gray-600 mb-8 max-w-3xl mx-auto&quot;>
            Can&apos;t find what you&apos;re looking for? Our support team is ready to help you with any questions or concerns.
          </p>
          <div className=&quot;flex flex-col sm:flex-row justify-center gap-4&quot;>
            <a href=&quot;mailto:kleber@ziontechgroup.com&quot; className=&quot;bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg&quot;>
              Email Support
            </Link>
            <a href=&quot;tel:+13024640950&quot; className=&quot;bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg&quot;>
              Call Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Help;