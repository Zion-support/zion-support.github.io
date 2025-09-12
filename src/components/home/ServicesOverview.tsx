import React from "react"

import { motion } from 'framer-motion';
const industries = [];
const services = [];
const solutions = [];

interface Service {
  category: string;
icon: React.ComponentType<{ className?: string;
}>;
  color: string;
  items: string[];
  description?: string}

interface ServicesOverviewProps extends React.PropsWithChildren<{}> {

  services: Service[]}

const ServicesOverview: React.FC<ServicesOverviewProps> = ({ services }) => {

  return ()

    <section className="py-20 bg-gradient-to-b from-zion-slate-dark/30 via-zion-slate-dark/20 to-zion-slate-dark/30" role="region" aria-labelledby="services-heading">"
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div"
          className="text-center mb-16"
          initial = {

  { opacity: 0;
  y: 30;
}}
          whileInView = {

  { opacity: 1;
  y: 0;
}}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
"
          <div className="inline-flex items-center mb-4 px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full">"
            <Sparkles className="w-4 h-4 text-zion-cyan mr-2"   />"
            <span className="text-zion-cyan text-sm font-medium">Innovation First</span>
          </div>
"
          <h2 id="services-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">"
            Our <span className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">Services</span>
          </h2>
"
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to drive innovation and growth across all industries;
          </p>
        </motion.div>
"
        <div className="grid grid-cols-1 lg: grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index (
            <motion.div;
              key={service.category}"
              className="group relative bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/20 overflow-hidden"
              initial = {

  { opacity: 0;
  x: index % 2 === 0 ? -30 : 30;
}}
              whileInView = {

  { opacity: 1;
  x: 0;
}}
              transition = {

  { duration: 0.8;
  delay: index * 0.1;
}}
              viewport={{ once: true }}
              whileHover={{

                y: -5,
  transition: { duration: 0.3

