import { ArrowRight, Zap, Workflow, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function TaskAutomationWorkflowPage() {
  return (
    <>
      <Helmet>
        <title>Task Automation Workflow - Zion Tech Group | Workflow Automation Tool</title>
        <meta name="description" content="Powerful task automation workflow tool to streamline business processes and increase productivity through intelligent automation." />
        <meta name="keywords" content="task automation, workflow automation, business process automation, productivity tools" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Task Automation Workflow</h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional workflow automation solution coming soon.
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