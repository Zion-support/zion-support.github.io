import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
export default WebDevelopmentPage;

const WebDevelopmentPage: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Modern, responsive web applications built with React, Next.js, and cutting-edge technologies.',
      features: ['React/Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
      price: 'Starting at $3,000',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Code,
      title: 'Backend Development',
      description: 'Robust server-side applications with Node.js, Python, and scalable architectures.',
      features: ['Node.js/Python', 'RESTful APIs', 'Database Design', 'Cloud Integration'],
      price: 'Starting at $4,000',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Globe,
      title: 'Full-Stack Development',
      description: 'Complete web solutions from frontend to backend with seamless integration.',
      features: ['End-to-End Development', 'Database Integration', 'API Development', 'Deployment'],
      price: 'Starting at $6,000',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Settings,
      title: 'E-commerce Solutions',
      description: 'Custom e-commerce platforms with payment integration and inventory management.',
      features: ['Payment Integration', 'Inventory Management', 'Order Processing', 'Admin Dashboard'],
      price: 'Starting at $8,000',
      color: 'from-orange-500 to-red-500'
    }
  ];
  const technologies = [
    {
      title: 'Frontend',
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
    },
    {
      title: 'Backend',
      items: ['Node.js', 'Python', 'Express.js', 'FastAPI', 'PostgreSQL']
    },
    {
      title: 'Cloud',
      items: ['AWS', 'Azure', 'Google Cloud', 'Vercel', 'Netlify']
    },
    {
      title: 'Tools',
      items: ['Git', 'Docker', 'CI/CD', 'Testing', 'Monitoring']
    }
  ];
  return (
    <></>
      <Helmet></Helmet>
        <title>Web Development - Zion Tech Group</title>
        <meta const name = "description" content="Professional web development services including frontend, backend, full-stack, and e-commerce solutions. Modern, responsive, and scalable web applications." /  /></meta>
        <meta name="keywords" content="web development, frontend development, backend development, full-stack development, e-commerce, React, Node.js" /></meta>

export default function WebDevelopmentPage() {
  return (
    <><Helmet>
        <title>WebDevelopment - Zion Tech Group</title>
        <meta name="description" content="Professional web development solutions and services." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">WebDevelopment</h1>
          <p className="text-lg text-gray-300 mb-8">Professional web development solutions coming soon.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div></>
  );
}
