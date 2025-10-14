import React from "react";"
import { Helmet} from "react-helmet-async";"
import { Link} from "react-router-dom";"
import {
  ArrowRight,
  BarChart3,
  Brain,
  CheckCircle,
  Star,
  Database,
  Settings,
  Monitor,
  Sparkles} from "lucide-react";"
const AIAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,"
      title: "Real-time Analytics","
      description: "Monitor your data in real-time with advanced visualization tools and interactive dashboards."},"
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,"
      title: "AI-Powered Insights","
      description: "Get intelligent recommendations and predictions based on your data patterns and trends."},"
    {
      icon: <Database className="w-8 h-8 text-green-500" />,"
      title: "Data Integration","
      description: "Connect multiple data sources and create unified views of your business metrics."},"
    {
      icon: <Settings className="w-8 h-8 text-yellow-500" />,"
      title: "Custom Dashboards","
      description: "Build personalized dashboards tailored to your specific business needs and KPIs."},"
    {
      icon: <Monitor className="w-8 h-8 text-red-500" />,"
      title: "Performance Monitoring","
      description: "Track system performance and identify bottlenecks with comprehensive monitoring tools."},"
    {
      icon: <Sparkles className="w-8 h-8 text-indigo-500" />,"
      title: "Automated Reports","
      description: "Generate detailed reports automatically and schedule them for regular delivery."}];"
  const benefits = [
    "Increase data-driven decision making by 85%","
    "Reduce reporting time by 70%","
    "Improve operational efficiency by 60%","
    "Enhance customer insights and satisfaction","
    "Streamline business processes","
    "Gain competitive advantage through data"];"
"use client""
import React from "react""
import { Helmet} from "react-helmet-async""
"use client""
import React from "react";"
import { Helmet} from "react-helmet-async";"
"use client""
export default function Page() {return (
    <div className="min-h-screen bg-white">""
export default function Page() {
import React from "react";"
import { Helmet} from "react-helmet-async";"
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">"
      <Helmet></Helmet></</Helmet>
        <title>Page - Zion Tech Group</title><//title></<//title>
        <meta name="description" content="Professional page services by Zion Tech Group." />""
      </Helmet><//Helmet></<//Helmet>
      <div className="container mx-auto px-4 py-16">""
        <div className="text-center">""
          <h1 className="text-4xl font-bold text-gray-900 mb-8">""
            Page;
          </h1><//h1></<//h1>
          <p className="text-xl text-gray-600 mb-8">""
            Professional page solutions tailored to your business needs.;
          </p><//p></<//p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">""
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">""
              <h3 className="text-lg font-semibold text-blue-900 mb-2">""
                Expert Solutions;
              </h3><//h3></<//h3>
              <p className="text-blue-700">""
                Our team of experts delivers cutting-edge page solutions.;
              </p></div><//div></<//div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">""
              <h3 className="text-lg font-semibold text-green-900 mb-2">""
                Custom Implementation;
              </h3><//h3></<//h3>
              <p className="text-green-700">""
                Tailored page implementations for your specific requirements.;
              </p></div><//div></<//div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">""
              <h3 className="text-lg font-semibold text-purple-900 mb-2">""
                24/7 Support;
              </h3><//h3></<//h3>
              <p className="text-purple-700">""
                Round-the-clock support for all your page needs.;
              </p></div><//div></div><//div></<//div>
          <div className="mt-12">""
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">""
              Get Started Today;
        <meta name="description" content="Professional services by Zion Tech Group." />"
        <title>AI Analytics Dashboard Pro - Zion Tech Group</title><//title></<//title>
        <meta name="description" content="Transform your data into actionable insights with our AI-powered analytics platform. Real-time dashboards, predictive analytics, and intelligent reporting." />"
      </Helmet><//Helmet></<//Helmet>
      <div className="container mx-auto px-4 py-16">"
        <div className="text-center mb-16">"
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">"
            AI Analytics Dashboard Pro
          </h1><//h1></<//h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">"
            Transform your data into actionable insights with our advanced AI-powered analytics platform.
            Get real-time dashboards, predictive analytics, and intelligent reporting for your business.
          </p></div><//div></<//div>
        {/* Features Grid */}
        <div className="mb-16">"
          <h2 className="text-3xl font-bold text-white text-center mb-12">Powerful Features</h2>"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">"
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">"
                <div className="flex items-center mb-4">"
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>"
                </div><//div></<//div>
                <p className="text-gray-300">{feature.description}</p>"
              </div><//div></<//div>
            ))}
          </div></div><//div></<//div>
        {/* Benefits Section */}
        <div className="mb-16">"
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our AI Analytics?</h2>"
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">"
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">"
              <h3 className="text-2xl font-bold text-white mb-6">Key Benefits</h3>"
              <ul className="space-y-4">"
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300">"
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />"
                    {benefit}
                  </li><//li></<//li>
                ))}
              </ul></div><//div></<//div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">"
              <h3 className="text-2xl font-bold text-white mb-6">Perfect For</h3>"
              <ul className="space-y-4">"
                <li className="flex items-center text-gray-300">"
                  <Star className="w-5 h-5 text-yellow-400 mr-3" />"
                  Data-driven businesses
                </li><//li></<//li>
                <li className="flex items-center text-gray-300">"
                  <Star className="w-5 h-5 text-yellow-400 mr-3" />"
                  Marketing teams
                </li><//li></<//li>
                <li className="flex items-center text-gray-300">"
                  <Star className="w-5 h-5 text-yellow-400 mr-3" />"
                  Sales departments
                </li><//li></<//li>
                <li className="flex items-center text-gray-300">"
                  <Star className="w-5 h-5 text-yellow-400 mr-3" />"
                  Operations managers
                </li><//li></<//li>
                <li className="flex items-center text-gray-300">"
                  <Star className="w-5 h-5 text-yellow-400 mr-3" />"
                  Executive teams
                </li><//li></<//li>
                <li className="flex items-center text-gray-300">"
                  <Star className="w-5 h-5 text-yellow-400 mr-3" />"
                  Data analysts
                </li></ul><//ul></div></div><//div></<//div>
        </div><//div></<//div>
        {/* CTA Section */}
        <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">"
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Analytics?</h2>"
          <p className="text-gray-300 mb-8">"
            Get started with our AI Analytics Dashboard Pro and unlock the power of your data.
          </p><//p></<//p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">"
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">"
              Start Free Trial
              <ArrowRight className="w-4 h-4 ml-2" />"
            </button><//button></<//button>
            <Link
              to="/contact""
              className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition-colors""></Link
              to="/contact""
              className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition-colors""></</Link
              to="/contact""
              className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition-colors"">
              Contact Sales
            </Link></div><//div></div></div><//div></<//div>
    </div><//div></<//div>
  )
  )}
            Page</h1><//h1></<//h1>
          <p className="text-xl text-gray-600 mb-8">""
            Professional page solutions tailored to your business needs.</p><//p></<//p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">""
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">""
              <h3 className="text-lg font-semibold text-blue-900 mb-2">""
                Expert Solutions</h3><//h3></<//h3>
              <p className="text-blue-700">""
                Our team of experts delivers cutting-edge page solutions.</p></div><//div></<//div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">""
              <h3 className="text-lg font-semibold text-green-900 mb-2">""
                Custom Implementation</h3><//h3></<//h3>
              <p className="text-green-700">""
                Tailored page implementations for your specific requirements.</p></div><//div></<//div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">""
              <h3 className="text-lg font-semibold text-purple-900 mb-2">""
                24/7 Support</h3><//h3></<//h3>
              <p className="text-purple-700">""
                Round-the-clock support for all your page needs.</p></div></div><//div></<//div>
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

        <title>Home - Zion Tech Group</title><//title></<//title>
        <meta name="description" content="Home - Zion Tech Group" />"
      </Helmet><//Helmet></<//Helmet>
      <div className="container mx-auto px-4 py-16">"
        <div className="text-center">"
          <h1 className="text-4xl font-bold text-white mb-8">Home</h1>"
          <p className="text-gray-300 text-lg">"
            This page is under construction. Please check back later.
          </p></div><//div></div></div><//div></<//div>
  )}};
