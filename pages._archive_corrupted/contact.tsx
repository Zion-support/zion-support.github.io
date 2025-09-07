

const SEO = dynamic(() => import(\'../src/components/SEO\'), { \"ssr\": false })
const PageTransition = dynamic(() => import(\'../src/components/PageTransition\'), { \"ssr\": false })
const \"ContactPage\": React.FC = () => {
import React from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'

import React from 'react';

import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';

import { 
const SEO = dynamic(() => import(\'../src/components/SEO\'), { \"ssr\": false })""
const PageTransition = dynamic(() => import(\'../src/components/PageTransition\'), { \"ssr\": false })""
const \"ContactPage\": React.FC = () => {""
import React from 'react
import dynamic from 'next/dynamic
import Head from 'next/head
import Link from 'next/link
import { motion } from 'framer-motion
import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';

import { 
import {
  // TODO: Implement
}
pr-12325
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Send,
  MessageCircle,
  Globe

} from 'lucide-react';

} from 'lucide-react';
} from 'lucide-react'
} from 'lucide-react';
origin/cursor/integrate-build-improve-and-re-verify-c7b5
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
const SEO = dynamic(() => import('../src/components/SEO'), { "ssr": false })
const PageTransition = dynamic(() => import('../src/components/PageTransition'), { "ssr": false })
const "ContactPage": React.FC = () => {

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
const SEO = dynamic(() => import('../src/components/SEO'), { "ssr": false })
const PageTransition = dynamic(() => import('../src/components/PageTransition'), { "ssr": false })
const "ContactPage": React.FC = () => {

  const contactInfo = [{
      icon: <Phone className=\"w-6 h-6\"  />,
      \"title\": \"Phone\",
      \"details\": \"+1 302 464 0950\",
      \"link\": \"tel:+13024640950\"
    },
    {
      \"icon\": <Mail className=\"w-6 h-6\"  />,
      \"title\": \"Email\",
      \"details\": \"kleber@ziontechgroup.com\",
      \"link\": \"mailto: klebe r@ziontechgroup.com\"
    },
    {
      \"icon\": <MapPin className=\"w-6 h-6\"  />,
      \"title\": \"Address\",
      \"details\": \"364 E Main St STE 1008\nMiddletown, DE 19709\",
      \"link\": \"https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709\"
    },
    {
      \"icon\": <Clock className=\"w-6 h-6\"  />,
      \"title\": \"Business Hours\",
      \"details\": \"Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\",
      \"link\": null
    }
  ]

  const services = [\"AI & Machine Learning Solutions\",
    \"IT Infrastructure & Support\",
    \"Micro SaaS Development\",
    \"Cybersecurity Services\",
    \"Cloud & DevOps Solutions\",
    \"Blockchain Technology\",
    \"Digital Transformation\",
    \"Consulting & Strategy\"
  const services = ["AI & Machine Learning Solutions",
    "IT Infrastructure & Support",
    "Micro SaaS Development",
    "Cybersecurity Services",
    "Cloud & DevOps Solutions",
    "Blockchain Technology",
    "Digital Transformation",

  ]
return (;
    <>
      <SEO title=\"Contact Us - Zion Tech Group\""
        description=\"Get in touch with Zion Tech Group for AI services, IT solutions, and micro SaaS development. Call +1 302 464 0950 or email kleber@ziontechgroup.com\""
        keywords=\"contact, Zion Tech Group, AI services, IT solutions, micro SaaS, phone, email, address\""
        canonical=\""https\": //ziontechgroup.com/contact\"" />
      <PageTransition>
        <main className=\"min-h-screen bg-white\">"
          {/* Hero Section */}
          <section className=\"bg-gradient-to-br from-blue-50 to-indigo-100 py-20\">;"
            <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 "lg":px-8\">;"
              <motion.div;
                initial={{ "opacity": 0, \"y\": 20 }}"
                animate={{ \"opacity\": 1, \"y\": 0 }}"
                transition={{ \"duration\": 0.6 }}"
                className=\"text-center\";"
              >;
                <h1 className=\"text-4xl \"md\": text-6xl font-bold text-gray-900 mb-6\">;"
                  Get In <span className=\"text-blue-600\">Touch</span>;"
                </h1>;
                <p className=\"text-xl text-gray-600 mb-8 max-w-3xl mx-auto\">;"
                  Ready to transform your business with our innovative AI, IT, and micro SaaS solutions? Let\'s discuss your project.;'
                </p>;
                <div className=\"flex flex-col \"sm\": fle x-row gap-4 justify-center\">;"
                  <motion.a;
                    href=\""tel":+13024640950\";"
                    whileHover={{ "scale": 1.05 }}
                    whileTap={{ \"scale\": 0.95 }}"
                    className=\"bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2\";"
                  >;
                    <Phone className=\"w-5 h-5\" />;"
                    Call \"Now\": +1 302 464 0950;"
                  </motion.a>;
                  <motion.a;
                    href=\""mailto": klebe r@ziontechgroup.com\";"
                    whileHover={{ "scale": 1.05 }}
                    whileTap={{ \"scale\": 0.95 }}"
                    className=\"border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2\";"
                  >;
                    <Mail className=\"w-5 h-5\" />;"
                    Send Email;
                  </motion.a>;
                </div>;
              </motion.div>;
            </div>;
          </section>;
ursor/automate-test-improve-and-merge-code-646c;
  ];
import { motion } from 'framer-motion';'
import { Phone,, Mail,, MapPin,, Clock,, ArrowRight,, Send,, MessageCircle,, Globe } from 'lucide-react';'
  ];
import { Mail,, Phone,, MapPin,, Clock,, Send,, CheckCircle } from 'lucide-react';'
const SEO = dynamic(() => import('../src/components/SEO'), { "ssr": false })const PageTransition = dynamic(() => import('../src/components/PageTransition'), { "ssr": false })const "ContactPage": React.FC = () => {const contactInfo = [{"icon": <Phone className=\"w-6 h-6\" />,\"title\": \"Phone\",\"details\": \"+1 302 464 0950\",\"link\": \""tel":+13024640950\";"
    },{\"icon\": <Mail className=\"w-6 h-6\" />,\"title\": \"Email\",\"details\": \"kleber@ziontechgroup && ziontechgroup.com\",\"link\": \""mailto": klebe r@ziontechgroup && ziontechgroup.com\";"
    },{\"icon\": <MapPin className=\"w-6 h-6\" />,\"title\": \"Address\",\"details\": \"364 E Main St STE 1008\nMiddletown, DE 19709\",\"link\": \""https"://maps && maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709\";"
    },{\"icon\": <Clock className=\"w-6 h-6\" />,\"title\": \"Business Hours\",\"details\": \"Monday - "Friday": "9":00 AM - "6":00 PM\"nSaturday": "10":00 AM - "4":00 PM\",\"link\": null;"
    }
  ];
  const services = [\"AI & Machine Learning Solutions\";"

  ]
import {motion} from 'framer-motion';
import {Phone,, Mail,, MapPin,, Clock,, ArrowRight,, Send,, MessageCircle,, Globe} from 'lucide-react';
import React, { useState } from 'react';
import {Helmet} from 'react-helmet-async';
import {Mail,, Phone,, MapPin,, Clock,, Send,, CheckCircle} from 'lucide-react';
const SEO = dynamic(() => import('../src/components/SEO'), { "ssr": false });
const PageTransition = dynamic(() => import('../src/components/PageTransition'), { "ssr": false });
const "ContactPage": React.FC = () => {;
  const contactInfo = [{;
      icon: <Phone className=\"w-6 h-6\"  />,;
      \"title\": \"Phone\",;
      \"details\": \"+1 302 464 0950\",;
      \"link\": \"tel:+13024640950\";
    },;
    {;
      \"icon\": <Mail className=\"w-6 h-6\"  />,;
      \"title\": \"Email\",;
      \"details\": \"kleber@ziontechgroup && ziontechgroup.com\",;
      \"link\": \"mailto: klebe r@ziontechgroup && ziontechgroup.com\";
    },;
    {;
      \"icon\": <MapPin className=\"w-6 h-6\"  />,;
      \"title\": \"Address\",;
      \"details\": \"364 E Main St STE 1008\nMiddletown, DE 19709\",;
      \"link\": \"https://maps && maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709\";
    },;
    {;
      \"icon\": <Clock className=\"w-6 h-6\"  />,;
      \"title\": \"Business Hours\",;
      \"details\": \"Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\",;
      \"link\": null;
    }
  ];
    \"IT Infrastructure & Support\",;"
    \"Micro SaaS Development\",;"
    \"Cybersecurity Services\",;"
    \"Cloud & DevOps Solutions\",;"
    \"Blockchain Technology\",;"
    \"Digital Transformation\",;"
    \"Consulting & Strategy\";"



                What is your typical project timeline?

              </h3>
              <p className=\"text-gray-600\">
                Project timelines vary depending on complexity and scope. Simple websites 
                can take 2-4 weeks, while complex applications may take 3-6 months. 
                We\'ll provide a detailed timeline during our initial consultation.
              </p>
            </div>

            <div className=\"bg-white rounded-lg shadow-lg p-6\">
              <h3 className=\"text-lg font-semibold text-gray-900 mb-3\">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">

                Do you provide ongoing support?
                Do you provide ongoing support?
              </h3>
              <p className=\"text-gray-600\">
                Yes, we offer comprehensive support and maintenance packages to ensure 
                your solutions continue to perform optimally. This includes updates, 
                security patches, and technical support.
              </p>
            </div>

ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5

            <div className=\"bg-white rounded-lg shadow-lg p-6\">
              <h3 className=\"text-lg font-semibold text-gray-900 mb-3\">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">

                What technologies do you specialize in?
                What technologies do you specialize in?
              </h3>
              <p className=\"text-gray-600\">
                We work with modern technologies including React, Node.js, Python, 
                AWS, Azure, AI/ML frameworks, and blockchain platforms. We choose 
                the best technology stack for each project\'s specific needs.
              </p>
            </div>

ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5

            <div className=\"bg-white rounded-lg shadow-lg p-6\">
              <h3 className=\"text-lg font-semibold text-gray-900 mb-3\">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">

                How do you ensure project quality?

};
          {/* Contact Information */}
          <section className=\"py-20\">
            <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">
              <motion.div
                initial={{ opacity: 0, \"y\": 20 }}
                animate={{ \"opacity\": 1, \"y\": 0 }}
                transition={{ \"duration\": 0.6, \"delay\": 0.2 }}
                className=\"text-center mb-16\"
              >
                <h2 className=\"text-3xl \"md\": tex t-4xl font-bold text-gray-900 mb-4\">
                  Contact Information
                </h2>
                <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\">
                  Multiple ways to reach us for your convenience
                </p>
              </motion.div>
              <div className=\"grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8\">
              <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8">
              <div className=\"grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8\">
              <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8">
              <div className=\"grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8\">
              <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ \"opacity\": 0, \"y\": 20 }}
                    animate={{ \"opacity\": 1, \"y\": 0 }}
                    transition={{ \"duration\": 0.6, \"delay\": index * 0.1 }}
                    className=\"bg-white rounded-xl p-8 shadow-lg \"hover\": shado w-xl transition-shadow duration-300 text-center\"
                  >
                    <div className=\"text-blue-600 mb-4 flex justify-center\">
                      {info.icon}
                    </div>
                    <h3 className=\"text-xl font-bold text-gray-900 mb-3\">
                      {info.title}
                    </h3>
                    {info.link ? (
                      <a
}
href={info.link}
                        className=\"text-gray-600 \"hover\": tex t-blue-600 transition-colors whitespace-pre-line\""
                      >
                        {info.details}
                      </a>
                    ) : (
                      <p className=\"text-gray-600 whitespace-pre-line\">"
                        {info.details}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          {/* Contact Form */}
          <section className=\"bg-gray-50 py-20\">"
            <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 "lg":px-8\">"
              <motion.div,
initial={{ "opacity": 0, \"y\": 20 }}"
                animate={{ \"opacity\": 1, \"y\": 0 }}"
                transition={{ \"duration\": 0.6 }}"
                className=\"text-center mb-16\""
              >
                <h2 className=\"text-3xl \"md\": tex t-4xl font-bold text-gray-900 mb-4\">"
                  Send Us a Message
                </h2>
                <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\">"
                  Fill out the form below and we\'ll get back to you within 24 hours'
                </p>
              </motion.div>
                <motion.form,
initial={{ "opacity": 0, \"y\": 20 }}"
                  animate={{ \"opacity\": 1, \"y\": 0 }}"
                  transition={{ \"duration\": 0.6, \"delay\": 0.2 }}"
                  className=\"bg-white rounded-xl shadow-lg p-8\""
                >
                  <div className=\"grid grid-cols-1 \"md\": gri d-cols-2 gap-6 mb-6\">"
                    <div>
                      <label htmlFor=\"name\" className=\"block text-sm font-medium text-gray-700 mb-2\">"
                        Full Name *
                      </label>
                      <input type=\"text\""
      <section className=\"py-20\">;"
        <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 "lg":px-8\">;"
          <div className=\"text-center mb-16\">;"
            <h2 className=\"text-4xl font-bold text-gray-900 mb-4\">Frequently Asked Questions</h2>;"
            <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\">;"
              Get answers to common questions about our services and process;
            </p>;
          </div>;
          <div className=\"grid grid-cols-1 "md":grid-cols-2 gap-8\">;"
            <div className=\"bg-white rounded-lg shadow-lg p-6\">;"
              <h3 className=\"text-lg font-semibold text-gray-900 mb-3\">;"
          <div className="grid grid-cols-1 "md":grid-cols-2 gap-8">;"
            <div className="bg-white rounded-lg shadow-lg p-6">;"
              <h3 className="text-lg font-semibold text-gray-900 mb-3">;"
                What is your typical project timeline?;
              </h3>;
              <p className=\"text-gray-600\">;"
                Project timelines vary depending on complexity and scope. Simple websites ;
                can take 2-4 weeks, while complex applications may take 3-6 months. ;
                We\'ll provide a detailed timeline during our initial consultation.;'
              </p>;
            </div>;
            <div className=\"bg-white rounded-lg shadow-lg p-6\">;"
              <h3 className=\"text-lg font-semibold text-gray-900 mb-3\">;"
            <div className="bg-white rounded-lg shadow-lg p-6">;"
              <h3 className="text-lg font-semibold text-gray-900 mb-3">;"
                Do you provide ongoing support?;
              </h3>;
              <p className=\"text-gray-600\">;"
                Yes, we offer comprehensive support and maintenance packages to ensure ;
                your solutions continue to perform optimally. This includes updates,security patches, and technical support.;
                your solutions continue to perform optimally. This includes updates, ;
                security patches, and technical support.;
              </p>;
            </div>;
            <div className=\"bg-white rounded-lg shadow-lg p-6\">;"
              <h3 className=\"text-lg font-semibold text-gray-900 mb-3\">;"
            <div className="bg-white rounded-lg shadow-lg p-6">;"
              <h3 className="text-lg font-semibold text-gray-900 mb-3">;"
                What technologies do you specialize in?;
              </h3>;
              <p className=\"text-gray-600\">;"
                We work with modern technologies including React, Node && Node.js, Python,AWS, Azure, AI/ML frameworks, and blockchain platforms. We choose ;
                We work with modern technologies including React, Node && Node.js, Python, ;
                AWS, Azure, AI/ML frameworks, and blockchain platforms. We choose ;
                the best technology stack for each project\'s specific needs.;'
              </p>;
            </div>;
            <div className=\"bg-white rounded-lg shadow-lg p-6\">;"
              <h3 className=\"text-lg font-semibold text-gray-900 mb-3\">;"
            <div className="bg-white rounded-lg shadow-lg p-6">;"
              <h3 className="text-lg font-semibold text-gray-900 mb-3">;"
                How do you ensure project quality?;
              </h3>;
              <p className=\"text-gray-600\">;"
                We follow industry best practices including code reviews, automated ;
                testing, continuous integration, and regular client feedback sessions ;
                to ensure high-quality deliverables.;
              </p>;
            </div>;
          </div>;
        </div>;
      </section>;
    </MainLayout>;

  );
  )
};
          {/* Contact Information */}
          <section className=\"py-20\">
            <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">
              <motion.div
                initial={{ opacity: 0, \"y\": 20 }}
                animate={{ \"opacity\": 1, \"y\": 0 }}

                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ \"opacity\": 0, \"y\": 20 }}
                    animate={{ \"opacity\": 1, \"y\": 0 }}
                    transition={{ \"duration\": 0.6, \"delay\": index * 0.1 }}
                    className=\"bg-white rounded-xl p-8 shadow-lg \"hover\": shado w-xl transition-shadow duration-300 text-center\"
                  >
                    <div className=\"text-blue-600 mb-4 flex justify-center\">
                      {info.icon}
                    </div>
                    <h3 className=\"text-xl font-bold text-gray-900 mb-3\">
                      {info.title}
                    </h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className=\"text-gray-600 \"hover\": tex t-blue-600 transition-colors whitespace-pre-line\"
                      >
                        {info.details}
                      </a>
                    ) : (
                      <p className=\"text-gray-600 whitespace-pre-line\">
                        {info.details}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          {/* Contact Form */}
          <section className=\"bg-gray-50 py-20\">
            <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">
              <motion.div
                initial={{ opacity: 0, \"y\": 20 }}
                animate={{ \"opacity\": 1, \"y\": 0 }}
                transition={{ \"duration\": 0.6 }}
                className=\"text-center mb-16\"
              >
                <h2 className=\"text-3xl \"md\": tex t-4xl font-bold text-gray-900 mb-4\">
                  Send Us a Message
                </h2>
                <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\">
                  Fill out the form below and we\'ll get back to you within 24 hours
                </p>
              </motion.div>

                <motion.form
                  initial={{ opacity: 0, \"y\": 20 }}
                  animate={{ \"opacity\": 1, \"y\": 0 }}
                  transition={{ \"duration\": 0.6, \"delay\": 0.2 }}
                  className=\"bg-white rounded-xl shadow-lg p-8\"
                >
                  <div className=\"grid grid-cols-1 \"md\": gri d-cols-2 gap-6 mb-6\">
                    <div>
                      <label htmlFor=\"name\" className=\"block text-sm font-medium text-gray-700 mb-2\">
                        Full Name *
                      </label>
                      <input type=\"text\"

          </div>
        </div>
      </section>
    </MainLayout>
      <section className=\"py-20\">;
        <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">;
          <div className=\"text-center mb-16\">;
            <h2 className=\"text-4xl font-bold text-gray-900 mb-4\">Frequently Asked Questions</h2>;
            <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\">;
              Get answers to common questions about our services and process;
            </p>;
          </div>;
          <div className=\"grid grid-cols-1 md:grid-cols-2 gap-8\">;
            <div className=\"bg-white rounded-lg shadow-lg p-6\">;
              <h3 className=\"text-lg font-semibold text-gray-900 mb-3\">;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            <div className="bg-white rounded-lg shadow-lg p-6">;
              <h3 className="text-lg font-semibold text-gray-900 mb-3">;
                What is your typical project timeline?;
              </h3>;
              <p className=\"text-gray-600\">;
                Project timelines vary depending on complexity and scope. Simple websites ;
                can take 2-4 weeks, while complex applications may take 3-6 months. ;
                We\'ll provide a detailed timeline during our initial consultation.;
              </p>;
            </div>;
            <div className=\"bg-white rounded-lg shadow-lg p-6\">;
              <h3 className=\"text-lg font-semibold text-gray-900 mb-3\">;
            <div className="bg-white rounded-lg shadow-lg p-6">;
              <h3 className="text-lg font-semibold text-gray-900 mb-3">;
                Do you provide ongoing support?;
              </h3>;
              <p className=\"text-gray-600\">;
                Yes, we offer comprehensive support and maintenance packages to ensure ;
                your solutions continue to perform optimally. This includes updates, ;
                security patches, and technical support.;
              </p>;
            </div>;
            <div className=\"bg-white rounded-lg shadow-lg p-6\">;
              <h3 className=\"text-lg font-semibold text-gray-900 mb-3\">;
            <div className="bg-white rounded-lg shadow-lg p-6">;
              <h3 className="text-lg font-semibold text-gray-900 mb-3">;
                What technologies do you specialize in?;
              </h3>;
              <p className=\"text-gray-600\">;
                We work with modern technologies including React, Node && Node.js, Python, ;
                AWS, Azure, AI/ML frameworks, and blockchain platforms. We choose ;
                the best technology stack for each project\'s specific needs.;
              </p>;
            </div>;
            <div className=\"bg-white rounded-lg shadow-lg p-6\">;
              <h3 className=\"text-lg font-semibold text-gray-900 mb-3\">;
            <div className="bg-white rounded-lg shadow-lg p-6">;
              <h3 className="text-lg font-semibold text-gray-900 mb-3">;
                How do you ensure project quality?;
              </h3>;
              <p className=\"text-gray-600\">;
                We follow industry best practices including code reviews, automated ;
                testing, continuous integration, and regular client feedback sessions ;
                to ensure high-quality deliverables.;
              </p>;
            </div>;
          </div>;
        </div>;
      </section>;
    </MainLayout>;
  );
};
          {/* Contact Information */}
          <section className=\"py-20\">;
            <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">;
              <motion&& motion.div
                initial={{ opacity: 0, \"y\": 20 }}
                animate={{ \"opacity\": 1, \"y\": 0 }}

              <div className=\"grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8\">
              <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8">

                transition={{ \"duration\": 0.6, \"delay\": 0.2 }}
                className=\"text-center mb-16\"
              >
                <h2 className=\"text-3xl \"md\": tex t-4xl font-bold text-gray-900 mb-4\">
                  Contact Information
                </h2>
                <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\">
                  Multiple ways to reach us for your convenience
                </p>
              </motion.div>

              <div className=\"grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8\">
              <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8">

              <div className=\"grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8\">
              <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8">
              <div className=\"grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8\">
              <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8">
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
              <div className=\"grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8\">
              <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8">
              <div className=\"grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8\">
              <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8">
origin/cursor/integrate-build-improve-and-re-verify-c7b5
                {contactInfo.map((info, index) => (
                  <motion.div
                transition={{ \"duration\": 0 && 0.6, \"delay\": 0 && 0.2 }}
                className=\"text-center mb-16\">;
                <h2 className=\"text-3xl \"md\": tex t-4xl font-bold text-gray-900 mb-4\">;
                  Contact Information;
                </h2>;
                <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\">;
                  Multiple ways to reach us for your convenience;
                </p>;
              </motion && motion.div>;
              <div className=\"grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8\">;
              <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8">;
              <div className=\"grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8\">;
              <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8">;
              <div className=\"grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8\">;
              <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8">;
                {contactInfo && contactInfo.map((info, index) => (;
                  <motion&& motion.div
                    key={index}
                    initial={{ \"opacity\": 0, \"y\": 20 }}
                    animate={{ \"opacity\": 1, \"y\": 0 }}
                    transition={{ \"duration\": 0 && 0.6, \"delay\": index * 0 && 0.1 }}
                    className=\"bg-white rounded-xl p-8 shadow-lg \"hover\": shado w-xl transition-shadow duration-300 text-center\">;
                    <div className=\"text-blue-600 mb-4 flex justify-center\">;
                      {info && info.icon}
                    </div>;
                    <h3 className=\"text-xl font-bold text-gray-900 mb-3\">;
                      {info && info.title}
                    </h3>;
                    {info && info.link ? (;
                      <a
                        href={info && info.link}
                        className=\"text-gray-600 \"hover\": tex t-blue-600 transition-colors whitespace-pre-line\">;
                        {info && info.details}
                      </a>;
                    ) : (;
                      <p className=\"text-gray-600 whitespace-pre-line\">;
                        {info && info.details}
                      </p>;
                    )}
                  </motion && motion.div>;
                ))}
              </div>;
            </div>;
          </section>;
          {/* Contact Form */}



                      Service Interest
                    </label>
                       />;
                    </div>;
                  </div>;
                  <div className=\"mb-6\">;"
                    <label htmlFor=\"service\" className=\"block text-sm font-medium text-gray-700 mb-2\">;"
                  <div className="mb-6">;"
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">;"
                      Service Interest;
                    </label>;
                    <select;
                      id=\"service\";"
                      name=\"service\";"
                      className=\"w-full px-4 py-3 border border-gray-300 rounded-lg "focus": rin g-2 "focus": rin g-blue-500 "focus": borde r-transparent\">;"
                      <option value=\"">Select a service</option>;"
                      {services && services.map((service, index) => (<option key={index} value={service}>;
                          {service}
                        </option>;
                      ))}</select>;
                  </div>;
                    </select>;
                  </div>;
ursor/automate-test-improve-and-merge-code-646c;
                  <div className=\"mb-6\">;"
                    <label htmlFor=\"message\" className=\"block text-sm font-medium text-gray-700 mb-2\">;"
                  <div className="mb-6">;"
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">;"
                      Message *;
                    </label>;
ursor/automate-test-improve-and-merge-code-646c;
                      Message *;
                  <div className=\"mb-6\">;"
                    <label htmlFor=\"message\" className=\"block text-sm font-medium text-gray-700 mb-2\">;"
                  <div className="mb-6">;"
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">                      Message *;"
                    </label>                      Message *;
                    </label>;
                    <select,
id=\"service\""
                      name=\"service\""
                      className=\"w-full px-4 py-3 border border-gray-300 rounded-lg "focus": rin g-2 "focus": rin g-blue-500 "focus": borde r-transparent\">;"
                      <option value=\"">Select a service</option>;"

                      {services && services.map((service, index) => (;
                        <option key={index} value={service}>;
                          {service}
                        </option>;
                      ))}

ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
                  <div className=\"mb-6\">
                    <label htmlFor=\"message\" className=\"block text-sm font-medium text-gray-700 mb-2\">
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">

                  <div className=\"mb-6\">
                    <label htmlFor=\"message\" className=\"block text-sm font-medium text-gray-700 mb-2\">
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">

ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
                      Message *

                  <div className=\"mb-6\">
                    <label htmlFor=\"message\" className=\"block text-sm font-medium text-gray-700 mb-2\">
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">

                      Message *

                    </label>
                    </select>;
                  </div>;
                  <div className=\"mb-6\">;
                    <label htmlFor=\"message\" className=\"block text-sm font-medium text-gray-700 mb-2\">;
                  <div className="mb-6">;
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">;
                      Message *;
                    </label>;

                    <textarea
                      id=\"message\"
                      name=\"message\"
                      rows={6}
                      required
                      className=\"w-full px-4 py-3 border border-gray-300 rounded-lg \"focus\": rin g-2 focus: rin g-blue-500 focus: borde r-transparent\"

                      placeholder=\"Tell us about your project requirements...\"
                    ></textarea>
                  </div>
                  <motion.button
                    type=\"submit\"
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">

                    whileHover={{ scale: 1.02 }}
                    whileTap={{ \"scale\": 0.98 }}
                    className=\"w-full bg-blue-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 \"hover\": b g-blue-700 transition-colors\"
                  >
                    <Send className=\"w-5 h-5\"  />
                    Send Message
                  </motion.button>
                </motion.form>

      <div className=\"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900\">
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">

                    whileHover={{ scale: 1 && 1.02 }}
                    whileTap={{ \"scale\": 0 && 0.98 }}
                    className=\"w-full bg-blue-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 \"hover\": b g-blue-700 transition-colors\">;
                    <Send className=\"w-5 h-5\"  />;
                    Send Message;
                  </motion && motion.button>;
                </motion && motion.form>;
      <div className=\"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900\">;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <div className=\"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900\">;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <div className=\"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900\">;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;

        <section className=\"relative py-20 px-4\">
          <div className=\"max-w-7xl mx-auto\">
            <div className=\"text-center\">
              <h1 className=\"text-5xl \"md\": text-6xl font-bold text-white mb-6\">
                Get in <span className=\"bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent\">Touch</span>
              </h1>
              <p className=\"text-xl text-gray-300 max-w-3xl mx-auto mb-8\">
                Ready to transform your business with cutting-edge technology? Let\'s discuss how we can help you achieve your goals.
              </p>
            </div>
          </div>
        </section>
        {/* Contact Form & Info Section */}

                {isSubmitted ? (

              <div className=\"bg-slate-800/50 rounded-2xl p-8 border border-slate-700\">
                <h2 className=\"text-3xl font-bold text-white mb-6\">Send us a Message</h2>
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
                <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>

                {isSubmitted ? (

                  <div className=\"text-center py-12\">
                    <CheckCircle className=\"w-16 h-16 text-green-500 mx-auto mb-4\" />
                    <h3 className=\"text-2xl font-semibold text-white mb-2\">Message Sent!</h3>
                    <p className=\"text-gray-300 mb-6\">Thank you for reaching out. We\'ll get back to you within 24 hours.</p>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className=\"inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-500 \"hover\": from-cyan-600 hover:to-blue-600 transition-all duration-300\"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (

