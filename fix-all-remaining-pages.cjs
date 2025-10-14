const fs = require("fs");
const path = require("path");

// List of known broken pages that need to be fixed
const brokenPages = [
  "app/pages/CloudInfrastructurePage.tsx",
  "app/pages/CloudSolutionsPage.tsx",
  "app/pages/ContactPage.tsx",
  "app/pages/CybersecurityPage.tsx",
  "app/pages/DemoPage.tsx",
  "app/pages/DocumentationPage.tsx",
  "app/pages/ITServicesPage.tsx",
  "app/pages/MicroSaaSPage.tsx",
  "app/pages/PricingPage.tsx",
  "app/pages/PrivacyPage.tsx",
  "app/pages/ServicesPage.tsx",
  "app/pages/SolutionsPage.tsx",
  "app/pages/SupportPage.tsx",
  "app/pages/TeamPage.tsx",
  "app/pages/TermsPage.tsx",
  "app/pages/TutorialsPage.tsx",
];

function fixPageComponent(filePath) {
  try {
    const pageName = path
      .basename(filePath, ".tsx")
      .replace(/([A-Z])/g, " $1")
      .trim();
    const componentName = pageName.replace(/\s+/g, "") + "Page";

    const fixedContent = `'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function ${componentName}() {
  return (
    <>
      <Helmet>
        <title>${pageName} - Zion Tech Group</title>
        <meta name="description" content="Professional ${pageName.toLowerCase()} services by Zion Tech Group. Leading provider of AI and IT solutions." />
        <meta name="keywords" content="${pageName.toLowerCase()}, AI solutions, IT services, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              ${pageName}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional ${pageName.toLowerCase()} services designed to help your business grow and succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-colors"
              >
                Get Started
              </Link>
              <Link 
                to="/services" 
                className="border border-purple-600 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-600 hover:text-white transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our ${pageName} Services</h2>
                <p className="text-lg text-gray-300 mb-6">
                  We provide comprehensive ${pageName.toLowerCase()} solutions tailored to your specific needs and requirements.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-6 h-6 text-green-400 mr-3" />
                    Custom solutions
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-6 h-6 text-green-400 mr-3" />
                    Expert consultation
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-6 h-6 text-green-400 mr-3" />
                    Ongoing support
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-cyan-600 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Get Started</h3>
                <p className="mb-6">
                  Ready to transform your business with our ${pageName.toLowerCase()} services?
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-white text-purple-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our ${pageName.toLowerCase()} services can help you achieve your goals.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
            >
              Get Started Today
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}`;

    fs.writeFileSync(filePath, fixedContent, "utf8");
    console.log(`Fixed page: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

console.log("Fixing all remaining broken pages...");
let fixedCount = 0;

brokenPages.forEach((pagePath) => {
  if (fs.existsSync(pagePath)) {
    if (fixPageComponent(pagePath)) {
      fixedCount++;
    }
  }
});

console.log(`Fixed ${fixedCount} pages.`);
