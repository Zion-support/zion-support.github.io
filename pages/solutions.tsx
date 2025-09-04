import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Building2, 
  ShoppingCart, 
  GraduationCap, 
  Heart, 
  Factory, 
  Car,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

const solutions = [
  {
    title: "Enterprise Solutions",
    description: "Comprehensive technology solutions for large enterprises and corporations.",
    icon: Building2,
    industries: ["Finance", "Healthcare", "Manufacturing", "Retail"],
    features: ["Scalable Architecture", "Enterprise Security", "24/7 Support", "Custom Integration"],
    href: "/solutions/enterprise"
  },
  {
    title: "E-commerce Solutions",
    description: "Complete e-commerce platforms and online marketplace solutions.",
    icon: ShoppingCart,
    industries: ["Retail", "Fashion", "Electronics", "Food & Beverage"],
    features: ["Payment Integration", "Inventory Management", "Order Processing", "Analytics Dashboard"],
    href: "/solutions/ecommerce"
  },
  {
    title: "Education Technology",
    description: "Innovative learning management systems and educational platforms.",
    icon: GraduationCap,
    industries: ["Schools", "Universities", "Training Centers", "Online Learning"],
    features: ["Learning Management", "Student Tracking", "Assessment Tools", "Mobile Learning"],
    href: "/solutions/education"
  },
  {
    title: "Healthcare Solutions",
    description: "Digital health platforms and medical management systems.",
    icon: Heart,
    industries: ["Hospitals", "Clinics", "Telemedicine", "Medical Research"],
    features: ["Patient Management", "Electronic Records", "Telemedicine", "Compliance"],
    href: "/solutions/healthcare"
  },
  {
    title: "Manufacturing IoT",
    description: "Smart manufacturing solutions with IoT integration.",
    icon: Factory,
    industries: ["Automotive", "Electronics", "Textiles", "Food Processing"],
    features: ["Process Monitoring", "Quality Control", "Predictive Maintenance", "Supply Chain"],
    href: "/solutions/manufacturing"
  },
  {
    title: "Automotive Solutions",
    description: "Connected vehicle platforms and automotive technology solutions.",
    icon: Car,
    industries: ["Car Manufacturers", "Fleet Management", "Ride Sharing", "Autonomous Vehicles"],
    features: ["Vehicle Tracking", "Diagnostics", "Fleet Management", "Safety Systems"],
    href: "/solutions/automotive"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechCorp Inc.",
    role: "CTO",
    content: "Zion Tech Group transformed our digital infrastructure. Their AI solutions increased our efficiency by 40%.",
    rating: 5
  },
  {
    name: "Michael Chen",
    company: "HealthFirst Medical",
    role: "IT Director",
    content: "The healthcare platform they built for us has revolutionized our patient management system.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    company: "EduTech Solutions",
    role: "Founder",
    content: "Their education technology solutions helped us scale from 100 to 10,000 students seamlessly.",
    rating: 5
  }
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>Industry Solutions - Zion Tech Group</title>
        <meta name="description" content="Industry-specific technology solutions for enterprise, healthcare, education, manufacturing, and more." />
        <meta name="keywords" content="enterprise solutions, healthcare technology, education platforms, manufacturing IoT, automotive solutions" />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Industry <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Tailored technology solutions designed for specific industries and business verticals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-blue-600 mb-4 group-hover:text-purple-600 transition-colors">
                    <IconComponent className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Industries:</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.industries.map((industry, industryIndex) => (
                        <span key={industryIndex} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    href={solution.href}
                    className="text-blue-600 hover:text-blue-700 font-semibold group-hover:text-purple-600 transition-colors inline-flex items-center"
                  >
                    <span>Explore Solution</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what industry leaders say about our solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.content}&rdquo;</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let us create a custom solution tailored to your industry&apos;s unique challenges and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                Get Custom Solution
              </Link>
              <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}