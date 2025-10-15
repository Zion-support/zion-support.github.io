const fs = require("fs");
const path = require("path");

const pages = [
  "5g-implementation",
  "5g-iot-solutions",
  "5g-mobile-applications",
  "5g-network-infrastructure",
  "5g-private-networks",
  "5g-smart-city-solutions",
  "5g-solutions",
];

const template = `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function {PAGE_NAME}Page() {
  return (
    <>
      <Helmet>
        <title>{PAGE_TITLE} - Zion Tech Group</title>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">{PAGE_TITLE}</h1>
          <p className="text-lg text-gray-300 mb-8">Professional {PAGE_DESCRIPTION} services coming soon.</p>
          <Link 
            to="/contact" 
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

const pageTitles = {
  "5g-implementation": "5G Implementation",
  "5g-iot-solutions": "5G IoT Solutions",
  "5g-mobile-applications": "5G Mobile Applications",
  "5g-network-infrastructure": "5G Network Infrastructure",
  "5g-private-networks": "5G Private Networks",
  "5g-smart-city-solutions": "5G Smart City Solutions",
  "5g-solutions": "5G Solutions",
};

const pageDescriptions = {
  "5g-implementation": "5G implementation",
  "5g-iot-solutions": "5G IoT solutions",
  "5g-mobile-applications": "5G mobile applications",
  "5g-network-infrastructure": "5G network infrastructure",
  "5g-private-networks": "5G private networks",
  "5g-smart-city-solutions": "5G smart city solutions",
  "5g-solutions": "5G solutions",
};

pages.forEach((page) => {
  const pageName = page
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

  const content = template
    .replace(/{PAGE_NAME}/g, pageName)
    .replace(/{PAGE_TITLE}/g, pageTitles[page])
    .replace(/{PAGE_DESCRIPTION}/g, pageDescriptions[page]);

  const filePath = path.join(__dirname, "app", page, "page.tsx");
  fs.writeFileSync(filePath, content);
  console.log(`Fixed ${page}/page.tsx`);
});
