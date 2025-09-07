


import React from "react";""
import Layout from "../components/Layout";""
import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import MainLayout from '../components/layout/MainLayout';
import {
  // TODO: Implement
}

  TrendingUp,
  Building,
  Rocket,
  Lightbulb,
  Handshake,
  Brain, 
  Users, 
  Award, 
  Target, 
  Heart,
  Globe, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  DollarSign, 
  Clock, 
  BarChart3,
  Phone,

  Mail,
  MapPin;
} from 'lucide-react';
const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We constantly push the boundaries of technology to create cutting-edge solutions that drive real business value.
  },
    icon: Shield,
    title: 'Security',
    description: 'Security is at the core of everything we do, ensuring your data and systems are protected with enterprise-grade security.
    icon: Users,
    title: 'Collaboration',
    description: 'We work closely with our clients as partners, understanding their unique challenges and delivering tailored solutions.
    icon: Target,
    title: 'Excellence',
    description: '$1]
  }];
const team = [
    name: 'John Smith',
    role: 'CEO & Founder',
    expertise: 'Strategic Leadership',
    experience: '15+ years in technology leadership
    name: 'Sarah Johnson',
    role: 'CTO',
    expertise: 'Technical Innovation',
    experience: '12+ years in AI and cloud technologies
    name: 'Mike Chen',
    role: 'Lead Developer',
    expertise: 'Full-Stack Development',
    experience: '10+ years in modern web technologies]
];
const achievements = [
    stat: '500+',
    title: 'Projects Completed',
    description: 'Successfully delivered projects across various industries',
    icon: CheckCircle;
    stat: '99.9%',
    title: 'Client Satisfaction',
    description: 'Consistently high client satisfaction ratings',
    icon: Star;
    stat: '24/7',
    title: 'Support Available',
    description: 'Round-the-clock support for all our clients',
    icon: Clock;
    stat: '50+',
    title: 'Team Members',
    description: 'Expert professionals dedicated to your success',
    icon: Users;]
export default function AboutPage() {
  return (
    <MainLayout;
      title="About Us - Zion Tech Group"""
      description="Learn about Zion Tech Group's mission, values, and team. We're dedicated to delivering cutting-edge technology solutions."""
      keywords="about us, company, team, mission, values, technology solutions""
    >
"
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">"
</div>"
        <div className="container mx-auto px-4 py-16">"
</div>
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}"
            className="text-center mb-16""
</motion>"
            <h1 className="text-5xl font-bold text-white mb-6">"
</h1>
            </h1>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">"
</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">"
                key={index}
                transition={{ duration: 0.6, delay: index * 0.1 }}"
                className="text-center""
                <div className="text-4xl font-bold text-blue-400 mb-2">{achievement.stat}</div>""
                <div className="text-white font-semibold mb-2">{achievement.title}</div>""
                <div className="text-gray-300 text-sm">{achievement.description}</div>"
              </motion.div>)
            ))}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">"
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20""
                <div className="flex items-center mb-4">"
                  <value.icon className="h-8 w-8 text-blue-400 mr-3" />"
</value>"
                  <h3 className="text-2xl font-bold text-white">{value.title}</h3>"
                <p className="text-gray-300">{value.description}</p>"


              </motion.div>
            ))}
          </div>


          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}"
            className="bg-blue-600 rounded-xl p-8 text-center""
            <h2 className="text-3xl font-bold text-white mb-4">"
</h2>
            </h2>"
            <p className="text-xl text-blue-100 mb-8">"
            </p>"
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">"
              <div className="flex items-center text-white">"
                <Phone className="h-5 w-5 mr-2" />"

                <span>+1 302 464 0950</span>
                <Mail className="h-5 w-5 mr-2" />"

                <span>kleber@ziontechgroup.com</span>
                <MapPin className="h-5 w-5 mr-2" />"

                <span>364 E Main St STE 1008 Middletown DE 19709</span>

              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </MainLayout>"
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">"
      <Head>

        <title>About | Zion Tech Group</title>"
        <meta name="description" content="About Zion Tech Group: AI, micro SaaS, and enterprise IT innovators." />"
</meta>"
        <link rel="canonical" href="https://ziontechgroup.com/about" />"
</link>
      
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-black text-white">"
        <div className="max-w-6xl mx-auto space-y-10">"
          <header className="text-center">"
</header>"
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">About Zion Tech Group</h1>""
            <p className="text-gray-300 text-lg">We build real, outcome-oriented AI, micro SaaS, and enterprise IT solutions.</p>"
          </header>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">"
</section>"
            <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">"
              <div className="text-sm text-gray-400 mb-2">What we do</div>""
              <div className="text-gray-200">200+ production-ready services across AI, DevOps, Security, Cloud, and Data.</div>"
              <div className="text-sm text-gray-400 mb-2">How we deliver</div>""
              <div className="text-gray-200">Template-driven deployments, SLAs, clear pricing, and measurable ROI.</div>"
              <div className="text-sm text-gray-400 mb-2">Who we serve</div>""
              <div className="text-gray-200">Startups to enterprises across healthcare, fintech, manufacturing, media, and public sector.</div>"
          </section>
          <section className="grid grid-cols-1 md: grid-cols-2 gap-6">"
              <h2 className="text-2xl font-semibold mb-3">Contact</h2>""
              <ul className="text-gray-300 space-y-2">"
</ul>"
                <li>Mobile: <a className="text-cyan-300" href="tel:+13024640950">+1 302 464 0950</a></li>""
                <li>E-mail: <a className="text-purple-300" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></li>""
                <li>Address: <span className="text-gray-200">364 E Main St STE 1008 Middletown DE 19709</span></li>""
                <li>Website: <a className="text-cyan-300" href="https://ziontechgroup.com">ziontechgroup.com</a></li>"
              </ul>
              <h2 className="text-2xl font-semibold mb-3">Get Started</h2>""
              <p className="text-gray-300 mb-4">Book a consultation to map your roadmap to shipped outcomes.</p>""
              <div className="flex gap-3">"
                <Button href="/contact" className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white">Talk to Sales""
                <Button href="/pricing" variant="outline" className="border border-gray-600 text-gray-200">Pricing"
</div>"
                <Button href="/contact" className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white">Talk to Sales</Button>""
                <Button href="/pricing" variant="outline" className="border border-gray-600 text-gray-200">Pricing</Button>"

              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )


export default AboutPage;"
import React from './react';
import Layout from "../components / Layout";;"

export default /**
 * About - Function description;
 */
function About() {
  return (

    <Layout;"
      title="About Us - Zion Tech Group";""
      description="Learn about Zion Tech Group, our mission, team, and commitment to delivering cutting - edge technology solutions.";"
    >;
      <div className="min - h-screen bg - gray - 50 py - 20">;"
        <div className="container mx - auto px - 4">;"
          <div className="text - center mb - 12">;"
            <h1 className="text - 4xl font - bold text - gray - 900 mb - 4">;"
            </h1>;"
            <p className="text - xl text - gray - 600 max - w-3xl mx - auto">;"
            </p>;
          </div>;"
          <div className="text - center">;"
            <p className="text - gray - 600">About page is under construction.</p>;"
          </div>;
      </div>;)
    );"
    </Layout>);"

