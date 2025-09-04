import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function Careers() {
  const jobOpenings = [
    {
      title: "Senior AI Engineer",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      description: "Lead the development of our AI-powered solutions and machine learning models.",
      requirements: [
        "5+ years experience in AI/ML",
        "Proficiency in Python, TensorFlow, PyTorch",
        "Experience with cloud platforms",
        "Strong problem-solving skills"
      ]
    },
    {
      title: "DevOps Engineer",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      description: "Manage and optimize our cloud infrastructure and deployment pipelines.",
      requirements: [
        "3+ years experience in DevOps",
        "Experience with AWS, Azure, or GCP",
        "Knowledge of Docker and Kubernetes",
        "CI/CD pipeline experience"
      ]
    },
    {
      title: "Frontend Developer",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      description: "Build responsive and interactive user interfaces for our web applications.",
      requirements: [
        "3+ years experience in React/Next.js",
        "Proficiency in TypeScript",
        "Experience with Tailwind CSS",
        "Strong UI/UX skills"
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Careers — Zion Tech Group</title>
        <meta name="description" content="Join our team of innovative professionals and help shape the future of technology." />
      </Head>

      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Careers at Zion Tech Group
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our team of innovative professionals and help shape the future of technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border">
                <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                <p className="text-gray-600 mb-2">{job.location} • {job.type}</p>
                <p className="text-gray-700 mb-4">{job.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Requirements:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600">
                    {job.requirements.map((req, reqIndex) => (
                      <li key={reqIndex}>{req}</li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Don't See a Perfect Match?
            </h2>
            <p className="text-gray-600 mb-8">
              We're always looking for talented individuals. Send us your resume and let's talk!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Send Resume
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}