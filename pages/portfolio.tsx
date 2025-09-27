import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../src/components/SEO';

export default function Portfolio(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Modern e-commerce solution with AI-powered recommendations",
      category: "Web Development",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "MongoDB", "AI/ML"]
    },
    {
      id: 2,
      title: "Cloud Migration",
      description: "Complete cloud infrastructure migration for enterprise client",
      category: "Cloud Computing",
      image: "/api/placeholder/600/400",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"]
    },
    {
      id: 3,
      title: "AI Analytics Dashboard",
      description: "Real-time analytics dashboard with machine learning insights",
      category: "AI/ML",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "TensorFlow", "React", "D3.js"]
    }
  ];

  return (
    <>
      <SEO />
      <Head>
        <title>Portfolio - Zion App</title>
        <meta name="description" content="Explore our portfolio of successful projects and case studies." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <nav className="mb-8">
            <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
              ← Back to Home
            </Link>
          </nav>

          <header className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-blue-600 mb-4">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our successful projects and the innovative solutions we've delivered.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Project Image</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}