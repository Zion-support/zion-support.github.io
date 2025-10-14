const fs = require("fs")";
const path = require("path")
// Define all the routes that should exist based on navigation and footer;
const requiredRoutes = ["
  "/","
  "/about","
  "/services","
  "/ai-solutions","
  "/it-solutions","
  "/micro-saas-solutions","
  "/cybersecurity","
  "/cloud-solutions","
  "/digital-transformation","
  "/5g-solutions","
  "/solutions","
  "/blog","
  "/tutorials","
  "/demo","
  "/support","
  "/contact","
  "/team","
  "/careers","
  "/case-studies","
  "/docs","
  "/privacy","
  "/terms","
  "/cookies",
];
function checkPageExists(route) {"
  if (route === "/") {"
    return fs.existsSync("./app/page.tsx")
}
  const pagePath = `./app${route}/page.tsx`
  return fs.existsSync(pagePath)
}
function findMissingPages() {;
const missingPages = []
  requiredRoutes.forEach((route) => {
    if (!checkPageExists(route)) {
      missingPages.push(route)
})
  return missingPages
}
function createMissingPage(route) {;
const pageName ="
    route === "/""
      ? "Home"
      : route"
          .split("/")
          .pop()"
          .replace(/-/g, " ")
          .replace(/\b\w/g, (l) => l.toUpperCase())";
const fileName = route === "/" ? "page.tsx" : "page.tsx"";
const filePath = route === "/" ? "./app/page.tsx" : `./app${route}/page.tsx`
  // Create directory if it doesn't exist"
  if (route !== "/") {;
const dirPath = `./app${route}`
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true })
}
  const pageContent = `'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'";
export default function ${pageName.replace(/\s+/g, "")}Page() {
  return (
    <>
      <Helmet></Helmet>
        <title>${pageName} - Zion Tech Group</title>")
        <meta name="description" content="Professional ${pageName.toLowerCase()} services by Zion Tech Group. Leading provider of AI and IT solutions." />"
        <meta name="keywords" content="${pageName.toLowerCase()}, AI solutions, IT services, Zion Tech Group" />"
      <div className="min-h-screen bg-slate-900"></div>
        {/* Hero Section */}"
        <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">"
          <div className="max-w-6xl mx-auto text-center"></div>"
            <h1 className="text-5xl font-bold text-white mb-6">
              ${pageName}"
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional ${pageName.toLowerCase()} services designed to help your business grow and succeed."
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <Link "
                to="/contact" "
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-colors"
              >
                Get Started
              <Link "
                to="/services" "
                className="border border-purple-600 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-600 hover:text-white transition-colors"
              >
                Learn More
        {/* Content Section */}"
        <section className="py-16 px-4">"
          <div className="max-w-6xl mx-auto"></div>"
            <div className="grid md:grid-cols-2 gap-12 items-center"></div>
              <div></div>"
                <h2 className="text-3xl font-bold text-white mb-6">Our ${pageName} Services</h2>"
                <p className="text-lg text-gray-300 mb-6">
                  We provide comprehensive ${pageName.toLowerCase()} solutions tailored to your specific needs and requirements."
                <ul className="space-y-3">"
                  <li className="flex items-center text-gray-300">"
                    <CheckCircleIcon className="w-6 h-6 text-green-400 mr-3" />
                    Custom solutions"
                  <li className="flex items-center text-gray-300">"
                    <CheckCircleIcon className="w-6 h-6 text-green-400 mr-3" />
                    Expert consultation"
                  <li className="flex items-center text-gray-300">"
                    <CheckCircleIcon className="w-6 h-6 text-green-400 mr-3" />
                    Ongoing support"
              <div className="bg-gradient-to-br from-purple-500 to-cyan-600 rounded-lg p-8 text-white"></div>"
                <h3 className="text-2xl font-bold mb-4">Get Started</h3>"
                <p className="mb-6">
                  Ready to transform your business with our ${pageName.toLowerCase()} services?
                <Link"
                  to="/contact""
                  className="inline-block bg-white text-purple-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Contact Us
        {/* CTA Section */}"
        <section className="py-16 px-4 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">"
          <div className="max-w-4xl mx-auto text-center"></div>"
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?"
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our ${pageName.toLowerCase()} services can help you achieve your goals.
            <Link"
              to="/contact""
              className="inline-block bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
            >
              Get Started Today
    </>
  )
}`"
  fs.writeFileSync(filePath, pageContent, "utf8")
  console.log(`Created missing page: ${filePath}`)
}
// Main execution"
console.log("Checking for missing pages...");
const missingPages = findMissingPages()
if (missingPages.length === 0) {"
  console.log("All required pages exist!")
} else {
  console.log(`Found ${missingPages.length} missing pages:`)
  missingPages.forEach((page) => console.log(`- ${page}`))"
  console.log("\nCreating missing pages...")
  missingPages.forEach(createMissingPage)"
  console.log("All missing pages created!")
}"
}}
