import { ArrowRight, Share2, Calendar, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function SocialMediaSchedulerPage() {
  return (
    <>
      <Helmet>
        <title>Social Media Scheduler - Zion Tech Group | Social Media Management Tool</title>
        <meta name="description" content="Powerful social media scheduling tool to manage and automate your social media posts across multiple platforms." />
        <meta name="keywords" content="social media scheduler, social media management, content scheduling, social media automation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Social Media Scheduler</h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional social media management solution coming soon.
          </p>
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
}