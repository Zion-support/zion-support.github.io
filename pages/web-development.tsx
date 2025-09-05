import React from 'react',
import Head from 'next/head',
import Link from 'next/link',
import { motion } from 'framer-motion',
import { Globe, Smartphone, Database, Zap, CheckCircle } from 'lucide-react',
const services = [,
  {,
    title: "Frontend Development", description: "Modern, responsive web applications using React, Next.js, Vue.js, and Angular", ,
    icon: Globe, features: ["Responsive Design", "Progressive Web Apps", "Single Page Applications", "Cross-browser Compatibility"] },;
  {,
    title: "Backend Development", description: "Scalable server-side applications with Node.js, Python, PHP, and Java", ,
    icon: Database, features: ["RESTful APIs", "GraphQL", "Microservices", "Database Design"] },;
  {,
    title: "Mobile Development", description: "Native and cross-platform mobile apps for iOS and Android", icon: Smartphone, features: ["React Native", "Flutter", "Native iOS/Android", "Hybrid Apps"] },;
  {,
    title: "E-commerce Solutions", description: "Complete online stores with payment integration and inventory management", icon: Zap, features: ["Shopping Carts", "Payment Gateways", "Inventory Management", "Order Processing"] }],
const technologies = ["React & Next.js", "Vue.js & Nuxt.js", "Angular", "Node.js", "Python Django", "PHP Laravel", ,
  "Java Spring", "C# .NET", "MongoDB", "PostgreSQL", "MySQL", "Redis", "AWS", "Azure", "Docker"],
export default function WebDevelopment() {,
  return(<>,
      <Head>,
        <title>Web Development Services - Zion Tech Group</title>,
        <meta name="description" content="Professional web development services including frontend, backend, mobile apps, and e-commerce solutions. Modern technologies and expert implementation."  />,
        <meta name="keywords" content="web development, frontend development, backend development, mobile apps, e-commerce, React, Node.js"  />,
        <meta property="og: title" content="Web Development Services - Zion Tech Group"  />,
        <meta property="og:description" content="Transform your ideas into powerful web applications with our expert development team."  />,
        <meta property="og:url" content="https://ziontechgroup.com/web-development"  />,
        <meta property="og:type" content="website"  />,
        <link rel="canonical" href="https://ziontechgroup.com/web-development"  />,
      </Head>,
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">,
        {/* Hero Section */ ,};
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">,
          <div className="absolute inset-0">,
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>,
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>,
          </div>,
          <div className="container mx-auto px-4 relative z-10">,
            <motion.div,
              initial={{opacity: 0, y: 30 ,}};
              animate={{opacity: 1, y: 0 ,}};
              transition={{duration: 0.8 ,}};
              className="text-center",
            >,
              <h1 className="text-4xl md: text-6xl font-bold mb-6">,
                Professional{ ' ' ,};
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">,
                  Web Development,
                </span>,
              </h1>,
              <p className="text-xl md: text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">,
                Transform your ideas into powerful, scalable web applications. From frontend to backend, ,
                mobile apps to e-commerce solutions, we deliver cutting-edge web development services.,
              </p>,
              <div className="flex flex-col sm: flex-row gap-4 justify-center">,
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">,
                  Start Your Project,
                </Link>,
                <Link href="/portfolio" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">,
                  View Portfolio,
                </Link>,
              </div>,
            </motion.div>,
          </div>,
        </section>,
        { /* Services Section */ ,};
        <section className="py-20 bg-white">,
          <div className="container mx-auto px-4">,
            <motion.div,
              initial={{opacity: 0, y: 30 ,}};
              whileInView={{opacity: 1, y: 0 ,}};
              transition={{duration: 0.8 ,}};
              className="text-center mb-16",
            >,
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Web Development Services</h2>,
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">,
                We offer comprehensive web development solutions tailored to your business needs,
              </p>,
            </motion.div>,
            <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">,
              { services.map((service, index) => (,
                <motion.div,
                  key={index };
                  initial={{opacity: 0, y: 30 ,}};
                  whileInView={{opacity: 1, y: 0 ,}};
                  transition={{duration: 0.8, delay: index * 0.1 ,}};
                  className="bg-white p-6 rounded-xl shadow-lg hover: shadow-xl transition-shadow duration-300",
                >,
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">,
                    <service.icon className="w-6 h-6 text-blue-600"  />,
                  </div>,
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{ service.title ,}</h3>,
                  <p className="text-gray-600 mb-4">{ service.description }</p>,
                  <ul className="space-y-2">,
                    { service.features.map((feature, featureIndex) => (,
                      <li key={featureIndex } className="flex items-center text-sm text-gray-600">,
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2"  />,
                        { feature };
                      </li>))};
                  </ul>,
                </motion.div>,
              ))};
            </div>,
          </div>,
        </section>,
        { /* Technologies Section */ };
        <section className="py-20 bg-gray-50">,
          <div className="container mx-auto px-4">,
            <motion.div,
              initial={{opacity: 0, y: 30 ,}};
              whileInView={{opacity: 1, y: 0 ,}};
              transition={{duration: 0.8 ,}};
              className="text-center mb-16",
            >,
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies We Use</h2>,
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">,
                We work with the latest and most reliable technologies in web development,
              </p>,
            </motion.div>,
            <div className="grid grid-cols-2 md: grid-cols-3 lg:grid-cols-5 gap-4">,
              { technologies.map((tech, index) => (,
                <motion.div,
                  key={index };
                  initial={{opacity: 0, scale: 0.8 ,}};
                  whileInView={{opacity: 1, scale: 1 ,}};
                  transition={{duration: 0.5, delay: index * 0.05 ,}};
                  className="bg-white p-4 rounded-lg shadow-md hover: shadow-lg transition-shadow duration-300 text-center",
                >,
                  <span className="text-gray-800 font-medium">{ tech ,}</span>,
                </motion.div>))};
            </div>,
          </div>,
        </section>,
        { /* CTA Section */ };
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">,
          <div className="container mx-auto px-4 text-center">,
            <motion.div,
              initial={{opacity: 0, y: 30 ,}};
              whileInView={{opacity: 1, y: 0 ,}};
              transition={{duration: 0.8 ,}};
            >,
              <h2 className="text-4xl font-bold mb-6">Ready to Build Your Web Application?</h2>,
              <p className="text-xl mb-8 max-w-3xl mx-auto">,
                Let's discuss your project requirements and create something amazing together,
              </p>,
              <div className="flex flex-col sm: flex-row gap-4 justify-center">,
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">,
                  Get Free Quote,
                </Link>,
                <Link href="/portfolio" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">,
                  View Our Work,
                </Link>,
              </div>,
            </motion.div>,
          </div>,
        </section>,
      </div>,
    </>,
  ),
,};