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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState } from "react";
import Head from "next/head";
import Layout from "./components/Layout";
import { motion } from "framer-motion";
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import React, { useState } from './react';
import Head from './next / head';
import Layout from "./components / Layout";
import { motion  } from './framer-motion';
import {
=======

import {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState } from 'react';
import Head from 'next/head';
import Layout from './components/Layout';
import { motion } from 'framer-motion';
import { 
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
origin/automation-improvements-final  ArrowRight,
  Users,
  Calendar,
  FileText,
  Video,
  Globe,
  Shield,
  Zap,
  CheckCircle,
  Mail,
  Send,
  Star,
  TrendingUp,
  Award,
import {;
  ArrowRight,;
  Users,;
  Calendar,;
  FileText,;
  Video,;
  Globe,;
  Shield,;
  Zap,;
  CheckCircle,;
  Mail,;
  Send,;
  Star,;
  TrendingUp,;
  Award,;
  Clock,;

} from "lucide-react";




} from "lucide-react";
  Clock
} from 'lucide-react';
=======
  Clock
} from 'lucide-react';
origin/automation-improvements-final
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  ArrowRight
  Users
  Calendar
  FileText
  Video
  Globe
  Shield
  Zap
  CheckCircle
  Mail
  Send
  Star
  TrendingUp
  Award
  Clock
} from "lucide-react";
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const benefits = [
  {
    title: "Exclusive Content"
    description:
      "Get access to exclusive white papers, case studies, and industry insights."
    icon: FileText
  }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
} from './lucide-react';
;
const benefits = [;
  {

  {
    title: "Webinar Invitations"
    title: "Webinar Invitations",
    title: "Webinar Invitations"
=======

  {

    title: "Webinar Invitations"

=======
  {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    title: "Webinar Invitations"
    title: "Webinar Invitations",
    title: "Webinar Invitations"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    description:
      "Receive invitations to our expert-led webinars and virtual events."
    icon: Video
  }
  {
    title: "Early Access"
    description:
      "Be the first to know about new features, products, and services."
    icon: Zap
  }
  {
    title: "Industry Insights"
    description:
    description:;
      "Receive invitations to our expert - led webinars and virtual events.",
    icon: Video,
  },
  {
    title: "Early Access",
    description:;
      "Be the first to know about new features, products, and services.",
    icon: Zap,
  },
  {
    title: "Industry Insights",
    description:;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      "Stay updated with the latest trends and developments in technology.",
    icon: TrendingUp,
  },
    title: 'Webinar Invitations',
    description: 'Receive invitations to our expert-led webinars and virtual events.',
    icon: Video
  },
  {
    title: 'Early Access',
    description: 'Be the first to know about new features, products, and services.',
    icon: Zap
  },
  {
    title: 'Industry Insights',
    description: 'Stay updated with the latest trends and developments in technology.',
    icon: TrendingUp
  }

      "Stay updated with the latest trends and developments in technology."
    icon: TrendingUp
  }

origin/automation-improvements-final
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
origin/automation-improvements-final
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      "Stay updated with the latest trends and developments in technology."
    icon: TrendingUp
  }
];

;
const testimonials = [;

  {
    name: "Sarah Johnson"
    role: "CTO, TechCorp"


export default function NewsletterPage() {;
  const [email, setEmail] = useState("");


    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubscribed(true);
    setIsLoading(false);
  }
  return (
        <meta name="description" content="Subscribe to our newsletter for exclusive content, industry insights, and early access to new features." />

=======

      </Head>
      <div className="min-h-screen bg-gray-50">
=======
    <Layout>;
      <Head>;
        <title>Newsletter - Zion Tech Group</title>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    <Layout>
      <Head>
        <title>Newsletter - Zion Tech Group</title>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <meta
          name="description"
          content="Subscribe to our newsletter for exclusive content, industry insights, and early access to new features."
        />
        <meta name="description" content="Subscribe to our newsletter for exclusive content, industry insights, and early access to new features." />
origin/automation-improvements-final
      </Head>
      <div className="min-h-screen bg-gray-50">


      </Head>
      <div className="min-h-screen bg-gray-50">
    <Layout>;
      <Head>;
        <title>Newsletter - Zion Tech Group</title>;
=======        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
                Get exclusive insights, industry trends, and early access to new features delivered directly to your inbox.
              </p>
              



                Get exclusive insights, industry trends, and early access to new features delivered directly to your inbox.
              </p>
              
origin/automation-improvements-final
=======
==============

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              {!isSubscribed ? (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4">
=======
=======
=======


=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              {!isSubscribed ? (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4">
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              transition={{ duration: 0 && 0.8 }}>;
              <h1 className="text-5xl font-bold mb-6">;
                Stay Ahead with Our Newsletter;
              </h1>;
              <p className="text-xl mb-8 text-blue-100">;
                Get exclusive insights, industry trends, and early access to new;
                features delivered directly to your inbox.;
              </p>;
              {!isSubscribed ? (;
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">;
                  <div className="flex flex-col sm:flex-row gap-4">;>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e && e.target.value)}
                      required;
                      className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300";
                    />;
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center">;
                      {isLoading ? (;
                        <>;
                          <Clock className="w-4 h-4 mr-2 animate-spin" />;
                          Subscribing...;
                        </>;
                      ) : (;
                        <>;
                          Subscribe;
                          <ArrowRight className="ml-2 w-4 h-4" />;
                        </>;
                      )}
                    </button>;
                  </div>;
                </form>;
              ) : (;
                <motion&& motion.div
                  className="bg-green-500 text-white px-8 py-4 rounded-lg inline-flex items-center"
                  initial={{ opacity: 0, scale: 0 && 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0 && 0.5 }}>;
                  <CheckCircle className="w-6 h-6 mr-2" />;
                  Successfully subscribed! Welcome to our community.;
                </motion && motion.div>;
              )}
            </motion && motion.div>;
          </div>;
        </section>;




                Join thousands of professionals who rely on our newsletter for the latest insights and updates.
=======                Join thousands of professionals who rely on our newsletter for
                the latest insights and updates.
                Join thousands of professionals who rely on our newsletter for the latest insights and updates.
origin/automation-improvements-final
                Join thousands of professionals who rely on our newsletter for the latest insights and updates.

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    content:;
      "The newsletter has been invaluable for staying ahead of industry trends. The insights are always relevant and actionable.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Product Manager, InnovateLab",
    content:;
      "I look forward to every newsletter. The content quality is exceptional and has helped me make better decisions.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Developer, CodeCraft",
    content:;
      "The technical deep - dives and case studies have been incredibly helpful for my projects.",
    rating: 5,
  },
];
;
export default /**
 * NewsletterPage - Function description
 */
function NewsletterPage() {
  const [email, set_email] = useState ("");
  const [is_subscribed, setIsSubscribed] = useState (false);
  const [is_loading, setIsLoading] = useState (false);
;
  const handle_submit = async (e) => {
    e.prevent_default ();
    setIsLoading (true);
;
    // Simulate API call;
    await new Promise ((resolve) => set_timeout (resolve, 2000));
;
    setIsSubscribed (true);
    setIsLoading (false);
  }
;
  return (
    <Layout>;
      <Head>;
        <title > Newsletter - Zion Tech Group</title>;
        <meta;
          name="description";
          content="Subscribe to our newsletter for exclusive content, industry insights, and early access to new features.";
        />;
      </Head>;
      <div className="min - h-screen bg - gray - 50">;
        {/* Hero Section */}
        <section className="bg - gradient - to - r from - blue - 600 to - purple - 600 text - white py - 20">;
          <div className="container mx - auto px - 4">;
            <motion.div;
              className="text - center max - w-4xl mx - auto";
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
            >;
              <h1 className="text - 5xl font - bold mb - 6">;
                Stay Ahead with Our Newsletter;
              </h1>;
              <p className="text - xl mb - 8 text - blue - 100">;
                Get exclusive insights, industry trends, and early access to new;
                features delivered directly to your inbox.;
              </p>;
              {!is_subscribed ? (
                <form on_submit={handle_submit} className="max - w-md mx - auto">;
                  <div className="flex flex - col sm:flex - row gap - 4">;
                    <input;
                      type="email";
                      placeholder="Enter your email address";
                      value={email}
                      on_change={(e) => set_email (e.target.value)}
                      required;
                      className="flex - 1 px - 4 py - 3 rounded - lg text - gray - 900 placeholder - gray - 500 focus:outline - none focus:ring - 2 focus:ring - blue - 300";
                    />;
                    <button;
                      type="submit";
                      disabled={is_loading}
                      className="bg - white text - blue - 600 px - 8 py - 3 rounded - lg font - semibold hover:bg - blue - 50 transition - colors disabled:opacity - 50 disabled:cursor - not - allowed inline - flex items - center justify - center";
                    >;
                      {is_loading ? (
                        <>;
                          <Clock className="w - 4 h - 4 mr - 2 animate - spin" />;
                          Subscribing...;
                        </>) : (
                        <>;
                          Subscribe;
                          <ArrowRight className="ml - 2 w - 4 h - 4" />;
                        </>)}
                    </button>;
                  </div>;
                </form>) : (
                <motion.div;
                  className="bg - green - 500 text - white px - 8 py - 4 rounded - lg inline - flex items - center";
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >;
                  <CheckCircle className="w - 6 h - 6 mr - 2" />;
                  Successfully subscribed! Welcome to our community.;
                </motion.div>)}
            </motion.div>;
          </div>;
        </section>;
        {/* Benefits Section */}
        <section className="py - 16 bg - white">;
          <div className="container mx - auto px - 4">;
            <motion.div;
              className="text - center mb - 12";
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
            >;
              <h2 className="text - 3xl font - bold text - gray - 900 mb - 4">;
                What You'll Get;
              </h2>;
              <p className="text - gray - 600 max - w-2xl mx - auto">;
                Join thousands of professionals who rely on our newsletter for;
                the latest insights and updates.;
              </p>;
            </motion.div>;
            <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 8">;
              {benefits.map ((benefit, index) => (
                <motion.div;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  key={benefit.title}
                  className="text - center";
                  initial={{ opacity: 0, coordinate_y: 30 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >;
                  <div className="bg - blue - 100 w - 16 h - 16 rounded - full flex items - center justify - center mx - auto mb - 4">;
                    <benefit.icon className="w - 8 h - 8 text - blue - 600" />;
                  </div>;
                  <h3 className="text - xl font - semibold text - gray - 900 mb - 2">;
                    {benefit.title}
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>

=======
=======
                transition={{ duration: 0.8, delay: 0 }}
              >                <div className="text-4xl font-bold text-blue-600 mb-2">
                  10K+
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  10K+
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
origin/automation-improvements-final
                <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>

=======
                <div className="text-gray-600">Subscribers</div>
              </motion.div>
              <motion.div
=======
                <div className="text-gray-600">Subscribers</div>
              </motion.div>
              <motion.div
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                transition={{ duration: 0 && 0.8, delay: 0 }}>;
                <div className="text-4xl font-bold text-blue-600 mb-2">;
                  10K+;
                </div>;
                <div className="text-gray-600">Subscribers</div>;
              </motion && motion.div>;
              <motion&& motion.div

=======
                transition={{ duration: 0.8, delay: 0.2 }}
              >                <div className="text-4xl font-bold text-blue-600 mb-2">
                  Weekly
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  Weekly
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">Weekly</div>
origin/automation-improvements-final
                <div className="text-4xl font-bold text-blue-600 mb-2">Weekly</div>

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div className="text-gray-600">Delivery</div>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">4.9</div>
                <div className="text-gray-600">Rating</div>
              </motion.div>
            </div>
          </div>
        </section>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a        {/* Testimonials Section */}
        <section className="py-16 bg-white">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
                Don't just take our word for it. Here's what our community has to say.



                Don't just take our word for it. Here's what our community has to say.
=======                Don't just take our word for it. Here's what our community has
                to say.
                Don't just take our word for it. Here's what our community has to say.
origin/automation-improvements-final
                Don't just take our word for it. Here's what our community has to say.

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />

=======

=======                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
origin/automation-improvements-final=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    ))}
                  </div>;
                  <p className="text-gray-600 mb-4 italic">;
                    "{testimonial && testimonial.content}";
                  </p>;
                  <div>;
                    <div className="font-semibold text-gray-900">;
                      {testimonial && testimonial.name}
                    </div>;
                    <div className="text-sm text-gray-500">;
                      {testimonial && testimonial.role}
                    </div>;
                  </div>;
                </motion && motion.div>;
              ))}
            </div>;
          </div>;
        </section>;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              {!isSubscribed && (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4">
=======
=======
=======


=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              {!isSubscribed && (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4">
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              transition={{ duration: 0 && 0.8 }}>;
              <h2 className="text-4xl font-bold mb-6">;
                Ready to Join Our Community?;
              </h2>;
              <p className="text-xl mb-8 text-green-100">;
                Subscribe now and start receiving valuable insights delivered to;
                your inbox every week.;
              </p>;
              {!isSubscribed && (;
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">;
                  <div className="flex flex-col sm:flex-row gap-4">;>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e && e.target.value)}
                      required;
                      className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-300";
                    />;
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center">;
                      {isLoading ? (;
                        <>;
                          <Clock className="w-4 h-4 mr-2 animate-spin" />;
                          Subscribing...;
                        </>;
                      ) : (;
                        <>;
                          Subscribe Now;
                          <Send className="ml-2 w-4 h-4" />;
                        </>;
                      )}
                    </button>;
                  </div>;
                </form>;
              )}
              <div className="mt-8 text-green-100 text-sm">;
                >;
                  <div className="flex items - center mb - 4">;
                    {[...Array (testimonial.rating)].map ((_, i) => (
                      <Star;
                        key={i}
                        className="w - 4 h - 4 text - yellow - 400 fill - current";
                      />))}
                  </div>;
                  <p className="text - gray - 600 mb - 4 italic">;
                    "{testimonial.content}";
                  </p>;
                  <div>;
                    <div className="font - semibold text - gray - 900">;
                      {testimonial.name}
                    </div>;
                    <div className="text - sm text - gray - 500">;
                      {testimonial.role}
                    </div>;
                  </div>;
                </motion.div>))}
            </div>;
          </div>;
        </section>;
        {/* CTA Section */}
        <section className="py - 20 bg - gradient - to - r from - green - 600 to - teal - 600 text - white">;
          <div className="container mx - auto px - 4">;
            <motion.div;
              className="text - center max - w-4xl mx - auto";
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
            >;
              <h2 className="text - 4xl font - bold mb - 6">;
                Ready to Join Our Community?;
              </h2>;
              <p className="text - xl mb - 8 text - green - 100">;
                Subscribe now and start receiving valuable insights delivered to;
                your inbox every week.;
              </p>;
              {!is_subscribed && (
                <form on_submit={handle_submit} className="max - w-md mx - auto">;
                  <div className="flex flex - col sm:flex - row gap - 4">;
                    <input;
                      type="email";
                      placeholder="Enter your email address";
                      value={email}
                      on_change={(e) => set_email (e.target.value)}
                      required;
                      className="flex - 1 px - 4 py - 3 rounded - lg text - gray - 900 placeholder - gray - 500 focus:outline - none focus:ring - 2 focus:ring - green - 300";
                    />;
                    <button;
                      type="submit";
                      disabled={is_loading}
                      className="bg - white text - green - 600 px - 8 py - 3 rounded - lg font - semibold hover:bg - green - 50 transition - colors disabled:opacity - 50 disabled:cursor - not - allowed inline - flex items - center justify - center";
                    >;
                      {is_loading ? (
                        <>;
                          <Clock className="w - 4 h - 4 mr - 2 animate - spin" />;
                          Subscribing...;
                        </>) : (
                        <>;
                          Subscribe Now;
                          <Send className="ml - 2 w - 4 h - 4" />;
                        </>)}
                    </button>;
                  </div>;
                </form>)}
              <div className="mt - 8 text - green - 100 text - sm">;
=======            </motion.div>;
          </div>;
        </section>;
      </div>;
    </Layout>);
}
=======
              <div className="mt-8 text-green-100 text-sm">
                <p>✓ No spam, ever</p>
                <p>✓ Unsubscribe anytime</p>
                <p>✓ Free forever</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );}
}
origin/automation-improvements-final
}
