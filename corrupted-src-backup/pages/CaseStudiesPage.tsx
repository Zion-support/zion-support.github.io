import React from "react";
import { Helmet } from "react-helmet-async";
import SuccessStoriesShowcase from "../components/SuccessStoriesShowcase";

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: "fortune-100-manufacturing",
      title: "Fortune 100 Manufacturing Company",
      description:
        "How we helped a Fortune 100 manufacturing company reduce costs by 40% using AI-powered optimization.",
      results: [
        "40% cost reduction",
        "60% faster processing",
        "99.9% uptime",
        "$50M annual savings",
      ],
      industry: "Manufacturing",
      duration: "12 months",
    },
    {
      id: "healthcare-provider",
      title: "Healthcare Provider Network",
      description:
        "AI-driven patient care optimization that improved outcomes while reducing operational costs.",
      results: [
        "25% better patient outcomes",
        "30% cost reduction",
        "50% faster diagnosis",
        "95% patient satisfaction",
      ],
      industry: "Healthcare",
      duration: "8 months",
    },
    {
      id: "financial-services",
      title: "Financial Services Firm",
      description:
        "Advanced fraud detection and risk management system that prevented millions in losses.",
      results: [
        "99.8% fraud detection accuracy",
        "80% reduction in false positives",
        "$100M+ prevented losses",
        "50% faster processing",
      ],
      industry: "Financial Services",
      duration: "6 months",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta
          name="description"
          content="Real-world case studies showcasing our AI solutions and their impact."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world case studies showcasing our AI solutions and their
              transformative impact.
            </p>
          </div>

          <SuccessStoriesShowcase />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  {study.industry}
                </span>
                <span className="ml-2 text-sm text-gray-500">
                  {study.duration}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {study.title}
              </h3>

              <p className="text-gray-600 mb-4">{study.description}</p>

              <ul className="space-y-2">
                {study.results.map((result, index) => (
                  <li
                    key={index}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <SuccessStoriesShowcase />
      </div>
    </div>
  );
};

export default CaseStudiesPage;
