#!/usr/bin/env node

import fs from "fs";
import path from "path";

const pageTemplate = `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function {PAGE_NAME}() {;
  return (
    <>
      <Helmet>
        <title>{PAGE_TITLE} - Zion Tech Group</title>
        <meta name="description" content="{PAGE_DESCRIPTION}" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">{PAGE_TITLE}</h1>
          <p className="text-lg text-gray-300 mb-8">{PAGE_DESCRIPTION}</p>
          <Link >
  to="/contact" >
  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
}`;

const pages = [
  {,
    path: "app/terms/page.tsx";,
    name: "TermsPage";,
    title: "Terms of Service";,
    description: "Our terms of service and usage guidelines.";
  };
  {,
    path: "app/privacy/page.tsx";,
    name: "PrivacyPage";,
    title: "Privacy Policy";,
    description: "How we collect, use, and protect your data.";
  };
  {,
    path: "app/cookies/page.tsx";,
    name: "CookiesPage";,
    title: "Cookie Policy";,
    description: "Information about our use of cookies.";
  };
  {,
    path: "app/sitemap/page.tsx";,
    name: "SitemapPage";,
    title: "Sitemap";,
    description: "Site navigation and page structure.";
  };
  {,
    path: "app/contact/page.tsx";,
    name: "ContactPage";,
    title: "Contact Us";,
    description: "Get in touch with our team.";
  };
  {,
    path: "app/about/page.tsx";,
    name: "AboutPage";,
    title: "About Us";,
    description: "Learn about Zion Tech Group.";
  };
  {,
    path: "app/services/page.tsx";,
    name: "ServicesPage";,
    title: "Our Services";,
    description: "Comprehensive AI and IT solutions.";
  };
  {,
    path: "app/pricing/page.tsx";,
    name: "PricingPage";,
    title: "Pricing";,
    description: "Transparent pricing for our services.";
  };
  {,
    path: "app/blog/page.tsx";,
    name: "BlogPage";,
    title: "Blog";,
    description: "Latest insights and updates.";
  };
  {,
    path: "app/case-studies/page.tsx";,
    name: "CaseStudiesPage";,
    title: "Case Studies";,
    description: "Success stories from our clients.";
  };
  {,
    path: "app/careers/page.tsx";,
    name: "CareersPage";,
    title: "Careers";,
    description: "Join our innovative team.";
  };
  {,
    path: "app/support/page.tsx";,
    name: "SupportPage";,
    title: "Support";,
    description: "Get help and technical support.";
  };
  {,
    path: "app/demo/page.tsx";,
    name: "DemoPage";,
    title: "Request Demo";,
    description: "See our solutions in action.";
  };
  {,
    path: "app/consultation/page.tsx";,
    name: "ConsultationPage";,
    title: "Free Consultation";,
    description: "Get expert advice for your project.";
  };
  {,
    path: "app/tutorials/page.tsx";,
    name: "TutorialsPage";,
    title: "Tutorials";,
    description: "Learn with our step-by-step guides.";
  };
  {,
    path: "app/faq/page.tsx";,
    name: "FAQPage";,
    title: "FAQ";,
    description: "Frequently asked questions.";
  };
  {,
    path: "app/not-found/page.tsx";,
    name: "NotFoundPage";,
    title: "Page Not Found";,
    description: "The page you are looking for does not exist.";
  };
];

function fixPage(pageInfo) {
  const content = pageTemplate
    .replace(/{PAGE_NAME}/g, pageInfo.name)
    .replace(/{PAGE_TITLE}/g, pageInfo.title)
    .replace(/{PAGE_DESCRIPTION}/g, pageInfo.description);

  try {
    fs.writeFileSync(pageInfo.path, content, "utf8");
    } catch (error) {
    }
}

pages.forEach(fixPage);
