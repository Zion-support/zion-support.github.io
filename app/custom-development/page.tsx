import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Star } from 'lucide-react';
import { Database } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Code } from 'lucide-react';
import { BarChart3 } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Smartphone } from 'lucide-react';
<<<<<<< HEAD


=======
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-fbfa
export default function page() {

  const features = [
    { title: "Feature 1", description: "Description 1" },
    { title: "Feature 2", description: "Description 2" }
  ];
  const services = [
    {
      title: "Custom Software Development",
      description: "Tailored software solutions built to meet your specific business requirements. From concept to deployment, we create applications that drive your business forward.",
      icon: <Code className="w-8 h-8" />,
      path: "/custom-software",
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $5,000",
      features: ["Custom Applications", "API Development", "Database Design", "Quality Assurance"]
    },
    {
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies. From simple websites to complex web platforms, we deliver exceptional user experiences.",
      icon: <Globe className="w-8 h-8" />,
      path: "/web-development",
      color: "from-green-500 to-emerald-500",
      price: "Starting at $2,500",
      features: ["Responsive Design", "SEO Optimization", "Performance Tuning", "Security Hardening"]
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android. User-friendly interfaces with seamless performance across all devices.",
      icon: <Smartphone className="w-8 h-8" />,
      path: "/mobile-development",
      color: "from-purple-500 to-pink-500",
      price: "Starting at $8,000",
      features: ["iOS & Android", "Cross-platform", "App Store Optimization", "Push Notifications"]
    },
    {
      title: "E-commerce Development",
      description: "Complete e-commerce solutions with payment integration, inventory management, and customer relationship management features.",
      icon: <Zap className="w-8 h-8" />,
      path: "/e-commerce-development",
      color: "from-orange-500 to-red-500",
      price: "Starting at $4,000",
      features: ["Payment Integration", "Inventory Management", "Order Processing", "Customer Portal"]
    },
    {
      title: "Database Development",
      description: "Custom database solutions with optimized performance, data integrity, and scalability. From design to implementation and maintenance.",
      icon: <Database className="w-8 h-8" />,
      path: "/database-management",
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $3,000",
      features: ["Database Design", "Performance Optimization", "Data Migration", "Backup & Recovery"]
    },
    {
      title: "API Development",
      description: "RESTful and GraphQL APIs for seamless integration between systems. Scalable, secure, and well-documented API solutions.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/api-development",
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $2,000",
      features: ["RESTful APIs", "GraphQL", "API Documentation", "Rate Limiting"]
  ];
<<<<<<< HEAD
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
=======

  return null;
};
>>>>>>> cursor/fix-errors-and-merge-to-main-fbfa

export default function CustomDevelopmentPage() {

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Custom Development - Zion Tech Group</title>
        <meta name="description" content="Custom Development solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Custom Development</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive custom development solutions designed to meet your business needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
}