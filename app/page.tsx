import { ArrowRight, CheckCircle, Star, ImageIcon, Upload, Zap, Download, Clock, X, Circle } from 'lucide-react';
import Link from 'next/link';
import Head from 'next/head';
&apos;use client&apos;;

import Footer from &apos;./components/Footer&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;
import { ArrowRight } from &apos;lucide-react&apos;;

const features = [
  {
    title: &apos;AI Solutions&apos;,
    description: &apos;Cutting-edge artificial intelligence solutions&apos;,
    icon: () => <div className=&quot;w-8 h-8 bg-blue-600 rounded&quot; />,
    href: &apos;/ai-solutions&apos;
  },
  {
    title: &apos;IT Services&apos;,
    description: &apos;Comprehensive IT support and services&apos;,
    icon: () => <div className=&quot;w-8 h-8 bg-green-600 rounded&quot; />,
    href: &apos;/it-services&apos;
  },
  {
    title: &apos;Web Development&apos;,
    description: &apos;Modern web applications and websites&apos;,
    icon: () => <div className=&quot;w-8 h-8 bg-purple-600 rounded&quot; />,
    href: &apos;/web-development&apos;
  },
  {
    title: &apos;Consulting&apos;,
    description: &apos;Expert technology consulting&apos;,
    icon: () => <div className=&quot;w-8 h-8 bg-orange-600 rounded&quot; />,
    href: &apos;/consulting&apos;
  }
];

const stats = [
  { number: &apos;100+&apos;, label: &apos;Projects Completed&apos; },
  { number: &apos;50+&apos;, label: &apos;Happy Clients&apos; },
  { number: &apos;5+&apos;, label: &apos;Years Experience&apos; },
  { number: &apos;24/7&apos;, label: &apos;Support Available&apos; }
];

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Zion Tech Group - AI & IT Solutions</title>
        <meta name=&quot;description&quot; content=&quot;Professional services by Zion Tech Group.&quot; />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center&quot;></div>
          <h1 className=&quot;text-4xl font-bold text-white mb-4&quot;>Zion Tech Group - AI & IT Solutions</h1>
          <p className=&quot;text-xl text-gray-300 mb-8&quot;>Professional AI & IT solutions services coming soon.</p>
          <Link href=&quot;/contact&quot;
            className=&quot;bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit&quot;
          >
            Contact Us
            <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <section className=&quot;py-20 px-4&quot;></section>
        <div className=&quot;max-w-7xl mx-auto&quot;></div>
          <div className=&quot;text-center mb-16&quot;></div>
            <h2 className=&quot;text-4xl font-bold text-gray-900 mb-4&quot;>Our Services</h2>
            <p className=&quot;text-xl text-gray-600&quot;>
              Comprehensive solutions to accelerate your digital transformation
            </p>
          </div>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
            {features.map((feature, index) => (
              <div key={index} className=&quot;bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow&quot;></div>
                <div className=&quot;w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6&quot;></div>
                  <feature.icon />
                </div>
                <h3 className=&quot;text-xl font-bold text-gray-900 mb-3&quot;>{feature.title}</h3>
                <p className=&quot;text-gray-600 mb-4&quot;>{feature.description}</p>
                <Link 
                  href={feature.href}
                  className=&quot;inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold&quot;
                >
                  Learn More
                  <ArrowRight className=&quot;ml-1 h-4 w-4&quot; />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className=&quot;py-16 px-4 bg-gray-50&quot;></section>
        <div className=&quot;max-w-7xl mx-auto&quot;></div>
          <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-8&quot;></div>
            {stats.map((stat, index) => (
              <div key={index} className=&quot;text-center&quot;></div>
                <div className=&quot;text-4xl font-bold text-blue-600 mb-2&quot;>{stat.number}</div>
                <div className=&quot;text-gray-600&quot;>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;py-20 px-4 bg-blue-600&quot;></section>
        <div className=&quot;max-w-7xl mx-auto text-center&quot;></div>
          <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>
            Ready to Transform Your Business?
          </h2>
          <p className=&quot;text-xl text-blue-100 mb-8 max-w-2xl mx-auto&quot;>
            Let&apos;s discuss how our solutions can help you achieve your goals.
          </p>
          <Link 
            href=&quot;/contact&quot; 
            className=&quot;inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold&quot;
          >
            Start Your Project
            <ArrowRight className=&quot;ml-2 h-5 w-5&quot; />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}