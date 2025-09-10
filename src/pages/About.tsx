import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { ContactSection } from "@/components/ContactSection";
import Link from "next/link";

export default function About() {
  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      expertise: 'AI & Machine Learning',
      image: '👩‍💼',
      description: 'Leading our AI initiatives with 15+ years of experience in machine learning and data science.',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Engineering',
      expertise: 'Cloud Architecture',
      image: '👨‍💻',
      description: 'Expert in scalable cloud solutions and microservices architecture with a track record of successful enterprise deployments.',
    },
    {
      name: 'Emily Johnson',
      role: 'Security Director',
      expertise: 'Cybersecurity',
      image: '👩‍🔬',
      description: 'Cybersecurity specialist ensuring our solutions meet the highest security standards and compliance requirements.',
    },
    {
      name: 'David Kim',
      role: 'Product Manager',
      expertise: 'Digital Transformation',
      image: '👨‍💼',
      description: 'Driving product strategy and digital transformation initiatives for our enterprise clients.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-white py-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl font-bold text-gray-900 mb-8"
          variants={itemVariants}
        >
          About Zion Tech Group
        </motion.h1>
        <motion.div className="prose max-w-4xl" variants={itemVariants}>
          <p className="text-lg text-gray-600 mb-6">
            Zion Tech is a leading technology company specializing in innovative
            solutions for businesses of all sizes. We combine cutting-edge
            technology with deep industry expertise to deliver exceptional
            results.
          </p>
          <p className="text-lg text-gray-600">
            Our team of experienced professionals is dedicated to helping our
            clients achieve their technology goals and drive business growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with AI-driven solutions that automate processes, enhance productivity,
                and drive exponential growth through innovative technology.
              </p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the world&apos;s leading provider of intelligent business solutions that transform
                how companies operate and compete in the digital age.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

          <div className="content-section">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Company Timeline</h2>
            <ol className="relative border-l border-zion-blue-light pl-6 max-w-3xl mx-auto">
              {timeline.map((event) => (
                <li key={event.year} className="mb-10 ml-4">
                  <span className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-zion-cyan" />
                  <time className="font-semibold text-white">{event.year}</time>
                  <p className="text-zion-slate-light mt-2">{event.text}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="content-section text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Meet the Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {team.map((member) => (
                <div key={member.name} className="text-center space-y-3">
                  <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover rounded-full"
                    />
                  </div>
                  <p className="text-white font-bold">{member.name}</p>
                  <p className="text-zion-slate-light">{member.role}</p>
                  <p className="text-zion-slate-light text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="content-section text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Press Kit</h2>
            <p className="text-zion-slate-light mb-4">Download our logos, color palette and press release templates.</p>
            <a
              href="/toolkit_assets/media_kit.zip"
              download
              className="text-zion-cyan underline"
            >
              Download Media Kit (.zip)
            </a>
          </div>
        </div>

        <div className="content-section text-center">
          <p className="text-zion-slate-light text-lg">
            Ready to work with us? Explore our{' '}
            <Link href="/services" legacyBehavior>
              <a className="text-zion-cyan underline">AI & IT services</a>
            </Link>{' '}
            or{' '}
            <Link href="/contact" className="text-zion-cyan underline">get in touch</Link>. For the latest updates, visit our{' '}
            <Link href="/blog" legacyBehavior>
              <a className="text-zion-cyan underline">blog</a>
            </Link>
            .
          </p>
        </div>

        <ContactSection />
      </main>
    </>
  );
}
>>>>>>> origin/automation/changelog
