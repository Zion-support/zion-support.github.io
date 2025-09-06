<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useState } from "react";
import Head from "next/head";
import Layout from "./components/Layout";
import { motion } from "framer-motion";
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React, { useState } from './react';
import Head from './next / head';
import Layout from "./components / Layout";
import { motion  } from './framer-motion';
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useState } from 'react';
import Head from 'next/head';
import Layout from './components/Layout';
import { motion } from 'framer-motion';
import { 
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
origin/automation-improvements-final
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  ArrowRight,
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
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
} from "lucide-react";

=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  Clock,
  Clock,;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
} from "lucide-react";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  Clock
} from 'lucide-react';
<<<<<<< HEAD
=======
>>>>>>> origin/automation-improvements-final
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======

=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
} from "lucide-react";
  Clock
} from 'lucide-react';
origin/automation-improvements-final

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
const benefits = [
  {
    title: "Exclusive Content"
    description:
      "Get access to exclusive white papers, case studies, and industry insights."
    icon: FileText
  }
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
} from './lucide-react';
;
const benefits = [;
  {
<<<<<<< HEAD
<<<<<<< HEAD

=======
    title: "Exclusive Content",
    description:;
      "Get access to exclusive white papers, case studies, and industry insights.",
    icon: FileText,
  },
<<<<<<< HEAD

  {

    title: "Webinar Invitations"

=======
  {


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  {
<<<<<<< HEAD
    title: "Webinar Invitations"
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    title: "Webinar Invitations"
    title: "Webinar Invitations",
    title: "Webinar Invitations"
<<<<<<< HEAD
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

<<<<<<< HEAD
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
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/automation-improvements-final
=======
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      "Stay updated with the latest trends and developments in technology."
    icon: TrendingUp
  }

=======
origin/automation-improvements-final
      "Stay updated with the latest trends and developments in technology."
    icon: TrendingUp
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
];

;
const testimonials = [;

  {
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======


    name: "Sarah Johnson"
    role: "CTO, TechCorp"

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      "Stay updated with the latest trends and developments in technology."
    icon: TrendingUp
  }
];
;
const testimonials = [;
  {
    name: "Sarah Johnson"
    role: "CTO, TechCorp"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
    name: "Sarah Johnson",
    role: "CTO, TechCorp",
    name: "Sarah Johnson"
    role: "CTO, TechCorp"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    content:
      "The newsletter has been invaluable for staying ahead of industry trends. The insights are always relevant and actionable."
    rating: 5
  }
  {
    name: "Michael Chen"
    role: "Product Manager, InnovateLab"
    content:
      "I look forward to every newsletter. The content quality is exceptional and has helped me make better decisions."
    rating: 5
  }
  {
    name: "Emily Rodriguez"
    role: "Developer, CodeCraft"
    content:
      "The technical deep-dives and case studies have been incredibly helpful for my projects."
    rating: 5
  }
];
export default function NewsletterPage() {
  const [email, setEmail] = useState("");
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    name: 'Sarah Johnson',
    role: 'CTO, TechCorp',
    content: 'The newsletter has been invaluable for staying ahead of industry trends. The insights are always relevant and actionable.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager, InnovateLab',
    content: 'I look forward to every newsletter. The content quality is exceptional and has helped me make better decisions.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'Developer, CodeCraft',
    content: 'The technical deep-dives and case studies have been incredibly helpful for my projects.',
    rating: 5
  }
];
<<<<<<< HEAD
export default function NewsletterPage() {
  const [email, setEmail] = useState('');
=======

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


export default function NewsletterPage() {;
  const [email, setEmail] = useState("");


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export default function NewsletterPage() {
  const [email, setEmail] = useState('');
origin/automation-improvements-final
export default function NewsletterPage() {;
  const [email, setEmail] = useState("");
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const benefits = [;
  {;
    title: "Exclusive Content",;
    description:;
      "Get access to exclusive white papers, case studies, and industry insights.",;
    icon: FileText,;
  },;
  {;
    title: "Webinar Invitations",;
    description:;
      "Receive invitations to our expert-led webinars and virtual events.",;
    icon: Video,;
  },;
  {;
    title: "Early Access",;
    description:;
      "Be the first to know about new features, products, and services.",;
    icon: Zap,;
  },;
  {;
    title: "Industry Insights",;
    description:;
      "Stay updated with the latest trends and developments in technology.",;
    icon: TrendingUp,;
  },;
];
const testimonials = [;
  {;
    name: "Sarah Johnson",;
    role: "CTO, TechCorp",;
    content:;
      "The newsletter has been invaluable for staying ahead of industry trends. The insights are always relevant and actionable.",;
    rating: 5,;
  },;
  {;
    name: "Michael Chen",;
    role: "Product Manager, InnovateLab",;
    content:;
      "I look forward to every newsletter. The content quality is exceptional and has helped me make better decisions.",;
    rating: 5,;
  },;
  {;
    name: "Emily Rodriguez",;
    role: "Developer, CodeCraft",;
    content:;
      "The technical deep-dives and case studies have been incredibly helpful for my projects.",;
    rating: 5,;
  },;
];
export default function NewsletterPage() {;
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {;
    e && e.preventDefault();
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    setIsLoading(true);


<<<<<<< HEAD
=======
=======
=======
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
<<<<<<< HEAD

=======
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
origin/automation-improvements-final
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    setIsSubscribed(true);
    setIsLoading(false);
  }
  return (
<<<<<<< HEAD
        <meta name="description" content="Subscribe to our newsletter for exclusive content, industry insights, and early access to new features." />
      </Head>
      <div className="min-h-screen bg-gray-50">
    <Layout>;
      <Head>;
        <title>Newsletter - Zion Tech Group</title>;
=======
    <Layout>
      <Head>
        <title>Newsletter - Zion Tech Group</title>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <meta
          name="description"
          content="Subscribe to our newsletter for exclusive content, industry insights, and early access to new features."
        />
<<<<<<< HEAD

        <meta name="description" content="Subscribe to our newsletter for exclusive content, industry insights, and early access to new features." />

=======
        <meta name="description" content="Subscribe to our newsletter for exclusive content, industry insights, and early access to new features." />
origin/automation-improvements-final
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      </Head>
      <div className="min-h-screen bg-gray-50">
=======

        <meta name="description" content="Subscribe to our newsletter for exclusive content, industry insights, and early access to new features." />

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      </Head>
      <div className="min-h-screen bg-gray-50">
=======
    <Layout>;
      <Head>;
        <title>Newsletter - Zion Tech Group</title>;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <meta
          name="description"
          content="Subscribe to our newsletter for exclusive content, industry insights, and early access to new features."
        />;
      </Head>;
      <div className="min-h-screen bg-gray-50">;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
                Get exclusive insights, industry trends, and early access to new features delivered directly to your inbox.
              </p>
=======
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold mb-6">
                Stay Ahead with Our Newsletter
              </h1>
              <p className="text-xl mb-8 text-blue-100">
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                Get exclusive insights, industry trends, and early access to new
                features delivered directly to your inbox.
              </p>
                Get exclusive insights, industry trends, and early access to new
                features delivered directly to your inbox.
              </p>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

=======

                Get exclusive insights, industry trends, and early access to new features delivered directly to your inbox.
              </p>
              

=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
<<<<<<< HEAD
=======


>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

                Get exclusive insights, industry trends, and early access to new features delivered directly to your inbox.
              </p>
              
origin/automation-improvements-final
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              {!isSubscribed ? (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4">
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
                  <div className="flex flex-col sm:flex-row gap-4">;
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
<<<<<<< HEAD

            </motion && motion.div>;
          </div>;
        </section>;


=======
            </motion && motion.div>;
          </div>;
        </section>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {/* Benefits Section */}
        <section className="py-16 bg-white">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
=======
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What You'll Get
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
<<<<<<< HEAD
<<<<<<< HEAD

                Join thousands of professionals who rely on our newsletter for
                the latest insights and updates.

                Join thousands of professionals who rely on our newsletter for the latest insights and updates.

=======

                Join thousands of professionals who rely on our newsletter for the latest insights and updates.

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
                Join thousands of professionals who rely on our newsletter for
                the latest insights and updates.
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                Join thousands of professionals who rely on our newsletter for the latest insights and updates.
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
                Join thousands of professionals who rely on our newsletter for
                the latest insights and updates.
                Join thousands of professionals who rely on our newsletter for the latest insights and updates.
origin/automation-improvements-final
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

                  <p className="text-gray-600">
                    {benefit.description}
                  </p>

=======
                  key={benefit.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
=======
                  </h3>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  <p className="text-gray-600">{benefit.description}</p>
                  <p className="text-gray-600">{benefit.description}</p>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
<<<<<<< HEAD
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
origin/automation-improvements-final
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                </motion.div>
              ))}
            </div>
          </div>
        </section>
              transition={{ duration: 0 && 0.8 }}>;
              <h2 className="text-3xl font-bold text-gray-900 mb-4">;
                What You'll Get;
              </h2>;
              <p className="text-gray-600 max-w-2xl mx-auto">;
                Join thousands of professionals who rely on our newsletter for;
                the latest insights and updates.;
              </p>;
            </motion && motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
              {benefits && benefits.map((benefit, index) => (;
                <motion&& motion.div
                  key={benefit && benefit.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}>;
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;
                    <benefit && benefit.icon className="w-8 h-8 text-blue-600" />;
                  </div>;
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">;
                    {benefit && benefit.title}
                  </h3>;
                  <p className="text-gray-600">{benefit && benefit.description}</p>;
                </motion && motion.div>;
              ))}
            </div>;
          </div>;
        </section>;
        {/* Stats Section */}
        <section className="py-16 bg-gray-50">;
          <div className="container mx-auto px-4">;
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">;
              <motion&& motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
                <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
=======
                transition={{ duration: 0.8, delay: 0 }}
              >
<<<<<<< HEAD

=======
<<<<<<< HEAD

                <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  10K+
                </div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  10K+
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
<<<<<<< HEAD
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
origin/automation-improvements-final
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                <div className="text-gray-600">Subscribers</div>
              </motion.div>
              <motion.div
                transition={{ duration: 0 && 0.8, delay: 0 }}>;
                <div className="text-4xl font-bold text-blue-600 mb-2">;
                  10K+;
                </div>;
                <div className="text-gray-600">Subscribers</div>;
              </motion && motion.div>;
              <motion&& motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.8, delay: 0 && 0.1 }}>;
                <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>;
                <div className="text-gray-600">Open Rate</div>;
              </motion && motion.div>;
              <motion&& motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
                <div className="text-4xl font-bold text-blue-600 mb-2">Weekly</div>
=======
                transition={{ duration: 0.8, delay: 0.2 }}
              >
<<<<<<< HEAD

=======
<<<<<<< HEAD

                <div className="text-4xl font-bold text-blue-600 mb-2">Weekly</div>

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  Weekly
                </div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  Weekly
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">Weekly</div>
<<<<<<< HEAD
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
origin/automation-improvements-final
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
                transition={{ duration: 0 && 0.8, delay: 0 && 0.2 }}>;
                <div className="text-4xl font-bold text-blue-600 mb-2">;
                  Weekly;
                </div>;
                <div className="text-gray-600">Delivery</div>;
              </motion && motion.div>;
              <motion&& motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.8, delay: 0 && 0.3 }}>;
                <div className="text-4xl font-bold text-blue-600 mb-2">4 && 4.9</div>;
                <div className="text-gray-600">Rating</div>;
              </motion && motion.div>;
            </div>;
          </div>;
        </section>;
        {/* Testimonials Section */}
        <section className="py-16 bg-white">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
=======
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What Our Subscribers Say
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
<<<<<<< HEAD
<<<<<<< HEAD

                Don't just take our word for it. Here's what our community has
                to say.

                Don't just take our word for it. Here's what our community has to say.

=======

                Don't just take our word for it. Here's what our community has to say.

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
                Don't just take our word for it. Here's what our community has
                to say.
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                Don't just take our word for it. Here's what our community has to say.
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
                Don't just take our word for it. Here's what our community has
                to say.
                Don't just take our word for it. Here's what our community has to say.
origin/automation-improvements-final
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  </h3>;
                  <p className="text - gray - 600">{benefit.description}</p>;
                </motion.div>))}
            </div>;
          </div>;
        </section>;
        {/* Stats Section */}
        <section className="py - 16 bg - gray - 50">;
          <div className="container mx - auto px - 4">;
            <div className="grid grid - cols - 2 md:grid - cols - 4 gap - 8">;
              <motion.div;
                className="text - center";
                initial={{ opacity: 0, coordinate_y: 30 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.8, delay: 0 }}
              >;
                <div className="text - 4xl font - bold text - blue - 600 mb - 2">;
                  10K+;
                </div>;
                <div className="text - gray - 600">Subscribers</div>;
              </motion.div>;
              <motion.div;
                className="text - center";
                initial={{ opacity: 0, coordinate_y: 30 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >;
                <div className="text - 4xl font - bold text - blue - 600 mb - 2">98%</div>;
                <div className="text - gray - 600">Open Rate</div>;
              </motion.div>;
              <motion.div;
                className="text - center";
                initial={{ opacity: 0, coordinate_y: 30 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >;
                <div className="text - 4xl font - bold text - blue - 600 mb - 2">;
                  Weekly;
                </div>;
                <div className="text - gray - 600">Delivery</div>;
              </motion.div>;
              <motion.div;
                className="text - center";
                initial={{ opacity: 0, coordinate_y: 30 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >;
                <div className="text - 4xl font - bold text - blue - 600 mb - 2">4.9</div>;
                <div className="text - gray - 600">Rating</div>;
              </motion.div>;
            </div>;
          </div>;
        </section>;
        {/* Testimonials Section */}
        <section className="py - 16 bg - white">;
          <div className="container mx - auto px - 4">;
            <motion.div;
              className="text - center mb - 12";
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
            >;
              <h2 className="text - 3xl font - bold text - gray - 900 mb - 4">;
                What Our Subscribers Say;
              </h2>;
              <p className="text - gray - 600 max - w-2xl mx - auto">;
                Don't just take our word for it. Here's what our community has;
                to say.;
              </p>;
            </motion.div>;
            <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 8">;
              {testimonials.map ((testimonial, index) => (
                <motion.div;
                  key={testimonial.name}
                  className="bg - gray - 50 rounded - lg p - 6";
                  initial={{ opacity: 0, coordinate_y: 30 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
<<<<<<< HEAD

                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />

=======
=======
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              transition={{ duration: 0 && 0.8 }}>;
              <h2 className="text-3xl font-bold text-gray-900 mb-4">;
                What Our Subscribers Say;
              </h2>;
              <p className="text-gray-600 max-w-2xl mx-auto">;
                Don't just take our word for it. Here's what our community has;
                to say.;
              </p>;
            </motion && motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
              {testimonials && testimonials.map((testimonial, index) => (;
                <motion&& motion.div
                  key={testimonial && testimonial.name}
                  className="bg-gray-50 rounded-lg p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (

                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}>;
                  <div className="flex items-center mb-4">;
                    {[...Array(testimonial && testimonial.rating)].map((_, i) => (;
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
<<<<<<< HEAD
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
origin/automation-improvements-final
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

            </div>;
          </div>;
        </section>;


=======
            </div>;
          </div>;
        </section>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
                Subscribe now and start receiving valuable insights delivered to your inbox every week.
              </p>
=======
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Ready to Join Our Community?
              </h2>
              <p className="text-xl mb-8 text-green-100">
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                Subscribe now and start receiving valuable insights delivered to
                your inbox every week.
              </p>
                Subscribe now and start receiving valuable insights delivered to
                your inbox every week.
              </p>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

=======

                Subscribe now and start receiving valuable insights delivered to your inbox every week.
              </p>
              

=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
<<<<<<< HEAD
=======


>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

                Subscribe now and start receiving valuable insights delivered to your inbox every week.
              </p>
              
origin/automation-improvements-final
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              {!isSubscribed && (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4">
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
                  <div className="flex flex-col sm:flex-row gap-4">;
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
<<<<<<< HEAD
<<<<<<< HEAD
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
  );
<<<<<<< HEAD

}

=======


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <p>✓ No spam, ever</p>;
                <p>✓ Unsubscribe anytime</p>;
                <p>✓ Free forever</p>;
              </div>;
<<<<<<< HEAD

}

=======
=======
}
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </Layout>);
<<<<<<< HEAD
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
}
}
origin/automation-improvements-final
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
