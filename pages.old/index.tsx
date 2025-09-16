import React from 'react';
<<<<<<< HEAD

const index: React.FC = () => {
=======
import Head from 'next/head';
import Link from 'next/link';

import { Brain, Network, Cloud, ArrowRight } from 'lucide-react';
const stats = [{ "number": '99.9%', "label": 'Uptime Guarantee' },
  { "number": '24/7', "label": 'Support Available' },
  { "number": '500+', "label": 'Projects Completed' },
  { "number": '50+', "label": 'Expert Team Members' }
];
const services = [{
    "title": "AI Services",
    "description": "Cutting-edge artificial intelligence solutions",
    "icon": Brain,
    "href": "/ai-services"},
  {
    "title": "IT Services", 
    "description": "Comprehensive information technology services",
    "icon": Network,
    "href": "/it-services"},
  {
    "title": "Micro SaaS",
    "description": "Scalable software as a service solutions",
    "icon": Cloud,
    "href": "/micro-saas"}
];
export default function HomePage() {
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">index</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
<<<<<<< HEAD
};

export default index;
=======
}
 return ( <motion.div key={index} className="bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group" initial={{ opacity: 0,y: 30 }} whileInView={{ opacity: 1,y: 0 }} transition={{ duration: 0.8,delay: index * 0.1 }} viewport={{ once: true }} whileHover={{ y: -5 }} > <div className="text-blue-600 mb-4 group-hover:text-purple-600 transition-colors"> <IconComponent className="w-10 h-10 md:w-12 md:h-12" /> </div> <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4"> {service.title} </h3> <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed"> {service.description} </p> <Link href={service.href} className="text-blue-600 hover:text-blue-700 font-semibold group-hover:text-purple-600 transition-colors inline-flex items-center" > <span>Learn More</span> <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" /> </Link> </motion.div> )})} </div> </div> </section> {} <section className="py-20 bg-white"> <div className="container mx-auto px-4"> <div className="grid grid-cols-2 md:grid-cols-4 gap-8"> {stats.map((stat,index) => ( <motion.div key={index} className="text-center" initial={{ opacity: 0,y: 30 }} whileInView={{ opacity: 1,y: 0 }} transition={{ duration: 0.8,delay: index * 0.1 }} viewport={{ once: true }} > <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2"> {stat.number} </div> <div className="text-gray-600 font-medium">{stat.label}</div> </motion.div> ))} </div> </div> </section> {} <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white"> <div className="container mx-auto px-4 text-center"> <motion.div initial={{ opacity: 0,y: 30 }} whileInView={{ opacity: 1,y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} > <h2 className="text-3xl md:text-4xl font-bold mb-6"> Ready to Transform Your Business? </h2> <p className="text-xl mb-8 max-w-2xl mx-auto"> Let our expert team help you leverage cutting-edge technology to drive growth and innovation. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"> Get Free Consultation </Link> <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"> Learn About Us </Link> </div> </motion.div> </div> </section> </div> )}
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
