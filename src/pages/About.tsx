import React from 'react';
import { SEO } from "../components/SEO";
import { GradientHeading } from "../components/GradientHeading";
import { ContactSection } from "../components/ContactSection";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Zion Tech Group</h1>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-600 mb-6">
              Zion Tech Group is a leading provider of AI and technology solutions
              that help businesses scale and succeed in the digital age.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We specialize in enterprise-grade AI, micro SaaS development, and IT services
              that drive real business results for our clients.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-600">
                  To deliver cutting-edge technology solutions that empower businesses
                  to achieve their goals and stay competitive in today's fast-paced market.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-600">
                  To be the go-to partner for businesses seeking innovative AI and
                  technology solutions that drive growth and success.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}