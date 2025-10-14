import React from "react""
import { Helmet} from "react-helmet-async""
"use client""
import React from "react";"
import { Helmet} from "react-helmet-async";"
"use client""
export default function Page() {return (
    <div className="min-h-screen bg-white">""
      <Helmet></Helmet></</Helmet>
        <title>CoreWebVitals - Zion Tech Group</title><//title></<//title>
        <meta name="description" content="Professional corewebvitals services by Zion Tech Group." />""
      </Helmet><//Helmet></<//Helmet>
      <div className="container mx-auto px-4 py-16">""
        <div className="text-center">""
          <h1 className="text-4xl font-bold text-gray-900 mb-8">""
            CoreWebVitals;
          </h1><//h1></<//h1>
          <p className="text-xl text-gray-600 mb-8">""
            Professional corewebvitals solutions tailored to your business needs.;
          </p><//p></<//p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">""
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">""
              <h3 className="text-lg font-semibold text-blue-900 mb-2">""
                Expert Solutions;
              </h3><//h3></<//h3>
              <p className="text-blue-700">""
                Our team of experts delivers cutting-edge corewebvitals solutions.;
              </p></div><//div></<//div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">""
              <h3 className="text-lg font-semibold text-green-900 mb-2">""
                Custom Implementation;
              </h3><//h3></<//h3>
              <p className="text-green-700">""
                Tailored corewebvitals implementations for your specific requirements.;
              </p></div><//div></<//div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">""
              <h3 className="text-lg font-semibold text-purple-900 mb-2">""
                24/7 Support;
              </h3><//h3></<//h3>
              <p className="text-purple-700">""
                Round-the-clock support for all your corewebvitals needs.;
              </p></div><//div></div><//div></<//div>
          <div className="mt-12">""
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">""
              Get Started Today;
            </button></div><//div></div></div><//div></<//div>
    </div><//div></<//div>
  )
import React, { useEffect} from "react";"
import { onCLS, onINP, onFCP, onLCP, onTTFB} from "web-vitals";"
interface WebVitalsData {
  name: string;
  value: number;
  delta: number;
  id: string;
  navigationType: string}
const CoreWebVitals: React.FC = () => {
  useEffect(() => {
    const reportWebVitals = (data: WebVitalsData) => {
      // Send to Google Analytics if available
      if (typeof window !== "undefined" && (window as any).gtag) {"
        (window as any).gtag("event", "web_vitals", {"
          metric_name: data.name,
          metric_value: Math.round(data.value),
          metric_delta: Math.round(data.delta),
          metric_id: data.id,
          metric_navigation_type: data.navigationType})}
      // Log to console in development
      if (process.env.NODE_ENV === "development") {"
        console.log("Web Vitals:", data)}};"
    // Track Core Web Vitals
    onCLS(reportWebVitals);
    onINP(reportWebVitals);
    onFCP(reportWebVitals);
    onLCP(reportWebVitals);
    onTTFB(reportWebVitals)}, []);
  return null};

import React from "react";"
const CoreWebVitals = () => {
  return (
    <div className="p-4">"
      <h2 className="text-xl font-semibold mb-2">CoreWebVitals</h2>"
      <p>This component is under construction.</p></div><//div></<//div>
  )}
            CoreWebVitals</h1><//h1></<//h1>
          <p className="text-xl text-gray-600 mb-8">""
            Professional corewebvitals solutions tailored to your business needs.</p><//p></<//p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">""
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">""
              <h3 className="text-lg font-semibold text-blue-900 mb-2">""
                Expert Solutions</h3><//h3></<//h3>
              <p className="text-blue-700">""
                Our team of experts delivers cutting-edge corewebvitals solutions.</p></div><//div></<//div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">""
              <h3 className="text-lg font-semibold text-green-900 mb-2">""
                Custom Implementation</h3><//h3></<//h3>
              <p className="text-green-700">""
                Tailored corewebvitals implementations for your specific requirements.</p></div><//div></<//div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">""
              <h3 className="text-lg font-semibold text-purple-900 mb-2">""
                24/7 Support</h3><//h3></<//h3>
              <p className="text-purple-700">""
                Round-the-clock support for all your corewebvitals needs.</p></div></div><//div></<//div>
          <div className="mt-12">""
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">""
              Get Started Today</button></div></div></div></div><//div></<//div>
  )
            </button></div><//div></div></div><//div></<//div>
    </div><//div></<//div>
  )}}""
            </button>;
          </div></div><//div></div></div><//div></<//div>
  )}}""
  )};
