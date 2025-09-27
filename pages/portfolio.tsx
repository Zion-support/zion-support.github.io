import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function Portfolio(): JSX.Element {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const { trackClick } = useAnalytics();

  const projects = [
    {
      id: 1,
      title: 'AI-Powered E-commerce Platform',
      description: 'A comprehensive e-commerce solution with AI-driven recommendations and analytics.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Node.js', 'AI/ML', 'PostgreSQL']
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Migration',
      description: 'Complete migration of legacy systems to modern cloud infrastructure.',
      image: '/api/placeholder/400/300',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform']
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with advanced security features.',
      image: '/api/placeholder/400/300',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Blockchain']
    }
  ];

  return (
    <>
      <SEO 
        title='Portfolio - Zion Tech Group'
        description='Explore our portfolio of successful technology projects and solutions.'
        keywords='portfolio, projects, case studies, technology'
      />
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main className='min-h-screen bg-gray-50 py-20'>
        <div className='container mx-auto px-4'>
          <h1 className='text-4xl font-bold text-center mb-8'>Our Portfolio</h1>
          <p className='text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto'>
            Explore our successful projects and see how we have helped businesses transform through technology.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projects.map((project) => (
              <div 
                key={project.id} 
                className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow'
                onClick={() => {
                  setSelectedProject(project.id);
                  trackClick('portfolio-project-' + project.id, 'engagement');
                }}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className='w-full h-48 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
                  <p className='text-gray-600 mb-4'>{project.description}</p>
                  <div className='flex flex-wrap gap-2'>
                    {project.technologies.map((tech, index) => (
                      <span key={index} className='bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm'>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};
