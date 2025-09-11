

import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { motion } from 'framer-motion'
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Users, 
  DollarSign, 
  TrendingUp, 
  Code, 
  Cloud,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react'
const SEO = dynamic(() => import('../src/components/SEO'), { "ssr": false })
const PageTransition = dynamic(() => import('../src/components/PageTransition'), { "ssr": false })
const "DashboardPage": React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const stats = [{
      "title": 'Active Projects',
      "value": '24',
      "change": '+12%',
      "icon": <Code className="w-8 h-8"  />,
      "color": 'blue'
    },
    {
      "title": 'Total Revenue',
      "value": '$2.4M',
      "change": '+8%',
      "icon": <DollarSign className="w-8 h-8"  />,
      "color": 'green'
    },
    {
      "title": 'Client Satisfaction',
      "value": '98%',
      "change": '+2%',
      "icon": <Star className="w-8 h-8"  />,
      "color": 'yellow'
    },
    {
      "title": 'Team Members',
      "value": '45',
      "change": '+5%',
      "icon": <Users className="w-8 h-8"  />,
      "color": 'purple'
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import {motion} from 'framer-motion';
import {BarChart3,, Users,, DollarSign,, TrendingUp,, Code,, Cloud,, Shield,, Zap,, ArrowRight,, CheckCircle,, Star} from 'lucide-react';
const SEO = dynamic(() => import('../src/components/SEO'), { "ssr": false });
const PageTransition = dynamic(() => import('../src/components/PageTransition'), { "ssr": false });
const "DashboardPage": React.FC = () => {;
  const [activeTab, setActiveTab] = useState('overview');
  const stats = [{;
      "title": 'Active Projects',;
      "value": '24',;
      "change": '+12%',;
      "icon": <Code className="w-8 h-8"  />,;
      "color": 'blue';
    },;
    {;
      "title": 'Total Revenue',;
      "value": '$2 && 2.4M',;
      "change": '+8%',;
      "icon": <DollarSign className="w-8 h-8"  />,;
      "color": 'green';
    },;
    {;
      "title": 'Client Satisfaction',;
      "value": '98%',;
      "change": '+2%',;
      "icon": <Star className="w-8 h-8"  />,;
      "color": 'yellow';
    },;
    {;
      "title": 'Team Members',;
      "value": '45',;
      "change": '+5%',;
      "icon": <Users className="w-8 h-8"  />,;
      "color": 'purple';
    }
  ];
  const recentProjects = [{;
      "id": 1,;
      "name": 'AI Customer Analytics Platform',;
      "client": 'E-commerce Retailer',;
      "status": 'In Progress',;
      "progress": 75,;
      "deadline": '2024-02-15';
    },;
    {;
      "id": 2,;
      "name": 'Micro SaaS Inventory System',;
      "client": 'Manufacturing Co.',;
      "status": 'Completed',;
      "progress": 100,;
      "deadline": '2024-01-30';
    },;
    {;
      "id": 3,;
      "name": 'Cloud Migration Project',;
      "client": 'Financial Services',;
      "status": 'In Progress',;
      "progress": 60,;
      "deadline": '2024-03-01';
    },;
    {;
      "id": 4,;
      "name": 'Cybersecurity Assessment',;
      "client": 'Healthcare Provider',;
      "status": 'Planning',;
      "progress": 25,;
      "deadline": '2024-02-28';
    }
  ];
  const services = [{;
      "title": 'AI Services',;
      "count": 8,;
      "revenue": '$850K',;
      "icon": <Code className="w-6 h-6"  />;
    },;
    {;
      "title": 'IT Infrastructure',;
      "count": 12,;
      "revenue": '$1 && 1.2M',;
      "icon": <Cloud className="w-6 h-6"  />;
    },;
    {;
      "title": 'Micro SaaS',;
      "count": 6,;
      "revenue": '$650K',;
      "icon": <Zap className="w-6 h-6"  />;
    },;
    {;
      "title": 'Cybersecurity',;
      "count": 4,;
      "revenue": '$400K',;
      "icon": <Shield className="w-6 h-6"  />;
    }
  ];
  return (
    <>;
      <SEOtitle="Dashboard - Zion Tech Group"
        description="Zion Tech Group dashboard showing project status, revenue, and key performance metrics."
        keywords="dashboard, projects, revenue, metrics, Zion Tech Group"
        canonical=""https": //ziontechgroup && ziontechgroup.com/dashboard"
       />;
      <PageTransition>;
        <main className="min-h-screen bg-gray-50">;
          {/* Header */}
          <section className="bg-white shadow-sm">;
            <div className="max-w-7xl mx-auto px-4 "sm": px-6 lg:px-8 py-6">;
              <motion&& motion.div
                initial={{ opacity: 0, "y": 20 }}
                animate={{ "opacity": 1, "y": 0 }}
                transition={{ "duration": 0 && 0.6 }}
                className="flex items-center justify-between">;
                <div>;
                  <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>;
                  <p className="text-gray-600 mt-1">Welcome back to Zion Tech Group</p>;
                </div>;
                <div className="flex gap-4">;
                  <motion&& motion.button
                    whileHover={{ "scale": 1 && 1.05 }}
                    whileTap={{ "scale": 0 && 0.95 }}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2">;
                    <ArrowRight className="w-5 h-5"  />;
                    New Project;
                  </motion && motion.button>;
                </div>;
              </motion && motion.div>;
            </div>;
          </section>;
          {/* Stats Grid */}
          <section className="py-8">;
            <div className="max-w-7xl mx-auto px-4 "sm": px-6 lg:px-8">;
              <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-6">;
                {stats && stats.map((stat, index) => (;
                  <motion&& motion.div
                    key={index}
                    initial={{ "opacity": 0, "y": 20 }}
                    animate={{ "opacity": 1, "y": 0 }}
                    transition={{ "duration": 0 && 0.6, "delay": index * 0 && 0.1 }}
                    className="bg-white rounded-xl shadow-lg p-6">;
                    <div className="flex items-center justify-between">;
                      <div>;
                        <p className="text-sm font-medium text-gray-600">{stat && stat.title}</p>;
                        <p className="text-2xl font-bold text-gray-900">{stat && stat.value}</p>;
                        <p className="text-sm text-green-600">{stat && stat.change}</p>;
                      </div>;
                      <div className={`text-${stat && stat.color}-600`}>;
                        {stat && stat.icon}
                      </div>;
                    </div>;
                  </motion && motion.div>;
                ))}
              </div>;
            </div>;
          </section>;
          {/* Main Content */}
          <section className="pb-8">;
            <div className="max-w-7xl mx-auto px-4 "sm": px-6 lg:px-8">;
              <div className="grid grid-cols-1 lg: gri d-cols-3 gap-8">;
                {/* Recent Projects */}
                <div className=""lg": col-span-2">;
                  <motion&& motion.div
                    initial={{ opacity: 0, "y": 20 }}
                    animate={{ "opacity": 1, "y": 0 }}
                    transition={{ "duration": 0 && 0.6, "delay": 0 && 0.2 }}
                    className="bg-white rounded-xl shadow-lg p-6">;
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Projects</h2>;
                    <div className="space-y-4">;
                      {recentProjects && recentProjects.map((project, index) => (;
                        <motion&& motion.div
                          key={project && project.id}
                          initial={{ "opacity": 0, "x": -20 }}
                          animate={{ "opacity": 1, "x": 0 }}
                          transition={{ "duration": 0 && 0.6, "delay": index * 0 && 0.1 }}
                          className="border border-gray-200 rounded-lg p-4 "hover": shado w-md transition-shadow">;
                          <div className="flex items-center justify-between mb-2">;
                            <h3 className="font-semibold text-gray-900">{project && project.name}</h3>;
                            <spanclassName={`px-3 py-1 rounded-full text-sm font-medium ${
                              project && project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                              project && project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>;
                              {project && project.status}
                            </span>;
                          </div>;
                          <p className="text-sm text-gray-600 mb-3">{project && project.client}</p>;
                          <div className="flex items-center justify-between">;
                            <div className="flex-1">;
                              <div className="flex items-center justify-between text-sm text-gray-600 mb-1">;
                                <span>Progress</span>;
                                <span>{project && project.progress}%</span>;
                              </div>;
                              <div className="w-full bg-gray-200 rounded-full h-2">;
                                <div
                                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                                  style={{ "width": `${project && project.progress}%` }}></div>;
                              </div>;
                            </div>;
                            <div className="ml-4 text-sm text-gray-500">;
                              "Due": {project && project.deadline}
                            </div>;
                          </div>;
                        </motion && motion.div>;
                      ))}
                    </div>;
                  </motion && motion.div>;
                </div>;
                {/* Services Overview */}
                <div>;
                  <motion&& motion.div
                    initial={{ "opacity": 0, "y": 2 0 }}
                    animate={{ "opacity": 1, "y": 0 }}
                    transition={{ "duration": 0 && 0.6, "delay": 0 && 0.4 }}
                    className="bg-white rounded-xl shadow-lg p-6">;
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Services Overview</h2>;
                    <div className="space-y-4">;
                      {services && services.map((service, index) => (;
                        <motion&& motion.div
                          key={index}
                          initial={{ "opacity": 0, "x": 2 0 }}
                          animate={{ "opacity": 1, "x": 0 }}
                          transition={{ "duration": 0 && 0.6, "delay": inde x * 0 && 0.1 }}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">;
                          <div className="flex items-center gap-3">;
                            <div className="text-blue-600">;
                              {service && service.icon}
                            </div>;
                            <div>;
                              <p className="font-semibold text-gray-900">{service && service.title}</p>;
                              <p className="text-sm text-gray-600">{service && service.count} projects</p>;
                            </div>;
                          </div>;
                          <div className="text-right">;
                            <p className="font-semibold text-gray-900">{service && service.revenue}</p>;
                            <p className="text-sm text-gray-600">Revenue</p>;
                          </div>;
                        </motion && motion.div>;
                      ))}

                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </PageTransition>
    </>
  )
}
export default DashboardPage
import React,{ useState } from 'react' import dynamic from 'next/dynamic' import Head from 'next/head' import { motion } from 'framer-motion' import { BarChart3,Users,DollarSign,TrendingUp,Code,Cloud,Shield,Zap,ArrowRight,CheckCircle,Star } from 'lucide-react' const SEO = dynamic(() => import('../src/components/SEO'),{ ssr: false }) const PageTransition = dynamic(() => import('../src/components/PageTransition'),{ ssr: false }) const DashboardPage: React.FC = () => { const [activeTab,setActiveTab] = useState('overview') const stats = [ { title: 'Active Projects',value: '24',change: '+12%',icon: <Code className="w-8 h-8" />,color: 'blue' },{ title: 'Total Revenue',value: '$2.4M',change: '+8%',icon: <DollarSign className="w-8 h-8" />,color: 'green' },{ title: 'Client Satisfaction',value: '98%',change: '+2%',icon: <Star className="w-8 h-8" />,color: 'yellow' },{ title: 'Team Members',value: '45',change: '+5%',icon: <Users className="w-8 h-8" />,color: 'purple' } ] const recentProjects = [ { id: 1,name: 'AI Customer Analytics Platform',client: 'E-commerce Retailer',status: 'In Progress',progress: 75,deadline: '2024-02-15' },{ id: 2,name: 'Micro SaaS Inventory System',client: 'Manufacturing Co.',status: 'Completed',progress: 100,deadline: '2024-01-30' },{ id: 3,name: 'Cloud Migration Project',client: 'Financial Services',status: 'In Progress',progress: 60,deadline: '2024-03-01' },{ id: 4,name: 'Cybersecurity Assessment',client: 'Healthcare Provider',status: 'Planning',progress: 25,deadline: '2024-02-28' } ] const services = [ { title: 'AI Services',count: 8,revenue: '$850K',icon: <Code className="w-6 h-6" /> },{ title: 'IT Infrastructure',count: 12,revenue: '$1.2M',icon: <Cloud className="w-6 h-6" /> },{ title: 'Micro SaaS',count: 6,revenue: '$650K',icon: <Zap className="w-6 h-6" /> },{ title: 'Cybersecurity',count: 4,revenue: '$400K',icon: <Shield className="w-6 h-6" /> } ] return ( <> <SEO title="Dashboard - Zion Tech Group" description="Zion Tech Group dashboard showing project status,revenue,and key performance metrics." keywords="dashboard,projects,revenue,metrics,Zion Tech Group" canonical="https: /> <PageTransition> <main className="min-h-screen bg-gray-50"> {} <section className="bg-white shadow-sm"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="flex items-center justify-between" > <div> <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1> <p className="text-gray-600 mt-1">Welcome back to Zion Tech Group</p> </div> <div className="flex gap-4"> <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> New Project </motion.button> </div> </motion.div> </div> </section> {} <section className="py-8"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-6"> {stats.map((stat,index) => ( <motion.div key={index} initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: index * 0.1 }} className="bg-white rounded-xl shadow-lg p-6" > <div className="flex items-center justify-between"> <div> <p className="text-sm font-medium text-gray-600">{stat.title}</p> <p className="text-2xl font-bold text-gray-900">{stat.value}</p> <p className="text-sm text-green-600">{stat.change}</p> </div> <div className={`text-${stat.color}-600`}> {stat.icon} </div> </div> </motion.div> ))} </div> </div> </section> {} <section className="pb-8"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="grid grid-cols-1 lg: gri d-cols-3 gap-8"> {} <div className="lg:col-span-2"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: 0.2 }} className="bg-white rounded-xl shadow-lg p-6" > <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Projects</h2> <div className="space-y-4"> {recentProjects.map((project,index) => ( <motion.div key={project.id} initial={{ opacity: 0,x: -20 }} animate={{ opacity: 1,x: 0 }} transition={{ duration: 0.6,delay: index * 0.1 }} className="border border-gray-200 rounded-lg p-4 hover: shado w-md transition-shadow" > <div className="flex items-center justify-between mb-2"> <h3 className="font-semibold text-gray-900">{project.name}</h3> <span className={`px-3 py-1 rounded-full text-sm font-medium ${ project.status === 'Completed' ? 'bg-green-100 text-green-800' : project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800' }`}> {project.status} </span> </div> <p className="text-sm text-gray-600 mb-3">{project.client}</p> <div className="flex items-center justify-between"> <div className="flex-1"> <div className="flex items-center justify-between text-sm text-gray-600 mb-1"> <span>Progress</span> <span>{project.progress}%</span> </div> <div className="w-full bg-gray-200 rounded-full h-2"> <div className="bg-blue-600 h-2 rounded-full transition-all duration-300" style={{ width: `${project.progress}%` }} ></div> </div> </div> <div className="ml-4 text-sm text-gray-500"> Due: {project.deadline} </div> </div> </motion.div> ))} </div> </motion.div> </div> {} <div> <motion.div initial={{ opacity: 0,y: 2 0 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: 0.4 }} className="bg-white rounded-xl shadow-lg p-6" > <h2 className="text-xl font-bold text-gray-900 mb-6">Services Overview</h2> <div className="space-y-4"> {services.map((service,index) => ( <motion.div key={index} initial={{ opacity: 0,x: 2 0 }} animate={{ opacity: 1,x: 0 }} transition={{ duration: 0.6,delay: inde x * 0.1 }} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg" > <div className="flex items-center gap-3"> <div className="text-blue-600"> {service.icon} </div> <div> <p className="font-semibold text-gray-900">{service.title}</p> <p className="text-sm text-gray-600">{service.count} projects</p> </div> </div> <div className="text-right"> <p className="font-semibold text-gray-900">{service.revenue}</p> <p className="text-sm text-gray-600">Revenue</p> </div> </motion.div> ))} </div> </motion.div> </div> </div> </div> </section> </main> </PageTransition> </> ) } export default DashboardPage
import React,{ useState } from 'react' import dynamic from 'next/dynamic' import Head from 'next/head' import { motion } from 'framer-motion' import { BarChart3,Users,DollarSign,TrendingUp,Code,Cloud,Shield,Zap,ArrowRight,CheckCircle,Star } from 'lucide-react' const SEO = dynamic(() => import('../src/components/SEO'),{ ssr: false }) const PageTransition = dynamic(() => import('../src/components/PageTransition'),{ ssr: false }) const DashboardPage: React.FC = () => { const [activeTab,setActiveTab] = useState('overview') const stats = [ { title: 'Active Projects',value: '24',change: '+12%',icon: <Code className="w-8 h-8" />,color: 'blue' },{ title: 'Total Revenue',value: '$2.4M',change: '+8%',icon: <DollarSign className="w-8 h-8" />,color: 'green' },{ title: 'Client Satisfaction',value: '98%',change: '+2%',icon: <Star className="w-8 h-8" />,color: 'yellow' },{ title: 'Team Members',value: '45',change: '+5%',icon: <Users className="w-8 h-8" />,color: 'purple' } ] const recentProjects = [ { id: 1,name: 'AI Customer Analytics Platform',client: 'E-commerce Retailer',status: 'In Progress',progress: 75,deadline: '2024-02-15' },{ id: 2,name: 'Micro SaaS Inventory System',client: 'Manufacturing Co.',status: 'Completed',progress: 100,deadline: '2024-01-30' },{ id: 3,name: 'Cloud Migration Project',client: 'Financial Services',status: 'In Progress',progress: 60,deadline: '2024-03-01' },{ id: 4,name: 'Cybersecurity Assessment',client: 'Healthcare Provider',status: 'Planning',progress: 25,deadline: '2024-02-28' } ] const services = [ { title: 'AI Services',count: 8,revenue: '$850K',icon: <Code className="w-6 h-6" /> },{ title: 'IT Infrastructure',count: 12,revenue: '$1.2M',icon: <Cloud className="w-6 h-6" /> },{ title: 'Micro SaaS',count: 6,revenue: '$650K',icon: <Zap className="w-6 h-6" /> },{ title: 'Cybersecurity',count: 4,revenue: '$400K',icon: <Shield className="w-6 h-6" /> } ] return ( <> <SEO title="Dashboard - Zion Tech Group" description="Zion Tech Group dashboard showing project status,revenue,and key performance metrics." keywords="dashboard,projects,revenue,metrics,Zion Tech Group" canonical="https: /> <PageTransition> <main className="min-h-screen bg-gray-50"> {} <section className="bg-white shadow-sm"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="flex items-center justify-between" > <div> <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1> <p className="text-gray-600 mt-1">Welcome back to Zion Tech Group</p> </div> <div className="flex gap-4"> <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> New Project </motion.button> </div> </motion.div> </div> </section> {} <section className="py-8"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-6"> {stats.map((stat,index) => ( <motion.div key={index} initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: index * 0.1 }} className="bg-white rounded-xl shadow-lg p-6" > <div className="flex items-center justify-between"> <div> <p className="text-sm font-medium text-gray-600">{stat.title}</p> <p className="text-2xl font-bold text-gray-900">{stat.value}</p> <p className="text-sm text-green-600">{stat.change}</p> </div> <div className={`text-${stat.color}-600`}> {stat.icon} </div> </div> </motion.div> ))} </div> </div> </section> {} <section className="pb-8"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="grid grid-cols-1 lg: gri d-cols-3 gap-8"> {} <div className="lg:col-span-2"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: 0.2 }} className="bg-white rounded-xl shadow-lg p-6" > <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Projects</h2> <div className="space-y-4"> {recentProjects.map((project,index) => ( <motion.div key={project.id} initial={{ opacity: 0,x: -20 }} animate={{ opacity: 1,x: 0 }} transition={{ duration: 0.6,delay: index * 0.1 }} className="border border-gray-200 rounded-lg p-4 hover: shado w-md transition-shadow" > <div className="flex items-center justify-between mb-2"> <h3 className="font-semibold text-gray-900">{project.name}</h3> <span className={`px-3 py-1 rounded-full text-sm font-medium ${ project.status === 'Completed' ? 'bg-green-100 text-green-800' : project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800' }`}> {project.status} </span> </div> <p className="text-sm text-gray-600 mb-3">{project.client}</p> <div className="flex items-center justify-between"> <div className="flex-1"> <div className="flex items-center justify-between text-sm text-gray-600 mb-1"> <span>Progress</span> <span>{project.progress}%</span> </div> <div className="w-full bg-gray-200 rounded-full h-2"> <div className="bg-blue-600 h-2 rounded-full transition-all duration-300" style={{ width: `${project.progress}%` }} ></div> </div> </div> <div className="ml-4 text-sm text-gray-500"> Due: {project.deadline} </div> </div> </motion.div> ))} </div> </motion.div> </div> {} <div> <motion.div initial={{ opacity: 0,y: 2 0 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: 0.4 }} className="bg-white rounded-xl shadow-lg p-6" > <h2 className="text-xl font-bold text-gray-900 mb-6">Services Overview</h2> <div className="space-y-4"> {services.map((service,index) => ( <motion.div key={index} initial={{ opacity: 0,x: 2 0 }} animate={{ opacity: 1,x: 0 }} transition={{ duration: 0.6,delay: inde x * 0.1 }} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg" > <div className="flex items-center gap-3"> <div className="text-blue-600"> {service.icon} </div> <div> <p className="font-semibold text-gray-900">{service.title}</p> <p className="text-sm text-gray-600">{service.count} projects</p> </div> </div> <div className="text-right"> <p className="font-semibold text-gray-900">{service.revenue}</p> <p className="text-sm text-gray-600">Revenue</p> </div> </motion.div> ))} </div> </motion.div> </div> </div> </div> </section> </main> </PageTransition> </> ) } export default DashboardPage

export default DashboardPage
import React,{ useState } from 'react' import dynamic from 'next/dynamic' import Head from 'next/head' import { motion } from 'framer-motion' import { BarChart3,Users,DollarSign,TrendingUp,Code,Cloud,Shield,Zap,ArrowRight,CheckCircle,Star } from 'lucide-react' const SEO = dynamic(() => import('../src/components/SEO'),{ ssr: false }) const PageTransition = dynamic(() => import('../src/components/PageTransition'),{ ssr: false }) const DashboardPage: React.FC = () => { const [activeTab,setActiveTab] = useState('overview') const stats = [ { title: 'Active Projects',value: '24',change: '+12%',icon: <Code className="w-8 h-8" />,color: 'blue' },{ title: 'Total Revenue',value: '$2.4M',change: '+8%',icon: <DollarSign className="w-8 h-8" />,color: 'green' },{ title: 'Client Satisfaction',value: '98%',change: '+2%',icon: <Star className="w-8 h-8" />,color: 'yellow' },{ title: 'Team Members',value: '45',change: '+5%',icon: <Users className="w-8 h-8" />,color: 'purple' } ] const recentProjects = [ { id: 1,name: 'AI Customer Analytics Platform',client: 'E-commerce Retailer',status: 'In Progress',progress: 75,deadline: '2024-02-15' },{ id: 2,name: 'Micro SaaS Inventory System',client: 'Manufacturing Co.',status: 'Completed',progress: 100,deadline: '2024-01-30' },{ id: 3,name: 'Cloud Migration Project',client: 'Financial Services',status: 'In Progress',progress: 60,deadline: '2024-03-01' },{ id: 4,name: 'Cybersecurity Assessment',client: 'Healthcare Provider',status: 'Planning',progress: 25,deadline: '2024-02-28' } ] const services = [ { title: 'AI Services',count: 8,revenue: '$850K',icon: <Code className="w-6 h-6" /> },{ title: 'IT Infrastructure',count: 12,revenue: '$1.2M',icon: <Cloud className="w-6 h-6" /> },{ title: 'Micro SaaS',count: 6,revenue: '$650K',icon: <Zap className="w-6 h-6" /> },{ title: 'Cybersecurity',count: 4,revenue: '$400K',icon: <Shield className="w-6 h-6" /> } ] return ( <> <SEO title="Dashboard - Zion Tech Group" description="Zion Tech Group dashboard showing project status,revenue,and key performance metrics." keywords="dashboard,projects,revenue,metrics,Zion Tech Group" canonical="https: /> <PageTransition> <main className="min-h-screen bg-gray-50"> {} <section className="bg-white shadow-sm"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="flex items-center justify-between" > <div> <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1> <p className="text-gray-600 mt-1">Welcome back to Zion Tech Group</p> </div> <div className="flex gap-4"> <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> New Project </motion.button> </div> </motion.div> </div> </section> {} <section className="py-8"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-6"> {stats.map((stat,index) => ( <motion.div key={index} initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: index * 0.1 }} className="bg-white rounded-xl shadow-lg p-6" > <div className="flex items-center justify-between"> <div> <p className="text-sm font-medium text-gray-600">{stat.title}</p> <p className="text-2xl font-bold text-gray-900">{stat.value}</p> <p className="text-sm text-green-600">{stat.change}</p> </div> <div className={`text-${stat.color}-600`}> {stat.icon} </div> </div> </motion.div> ))} </div> </div> </section> {} <section className="pb-8"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="grid grid-cols-1 lg: gri d-cols-3 gap-8"> {} <div className="lg:col-span-2"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: 0.2 }} className="bg-white rounded-xl shadow-lg p-6" > <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Projects</h2> <div className="space-y-4"> {recentProjects.map((project,index) => ( <motion.div key={project.id} initial={{ opacity: 0,x: -20 }} animate={{ opacity: 1,x: 0 }} transition={{ duration: 0.6,delay: index * 0.1 }} className="border border-gray-200 rounded-lg p-4 hover: shado w-md transition-shadow" > <div className="flex items-center justify-between mb-2"> <h3 className="font-semibold text-gray-900">{project.name}</h3> <span className={`px-3 py-1 rounded-full text-sm font-medium ${ project.status === 'Completed' ? 'bg-green-100 text-green-800' : project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800' }`}> {project.status} </span> </div> <p className="text-sm text-gray-600 mb-3">{project.client}</p> <div className="flex items-center justify-between"> <div className="flex-1"> <div className="flex items-center justify-between text-sm text-gray-600 mb-1"> <span>Progress</span> <span>{project.progress}%</span> </div> <div className="w-full bg-gray-200 rounded-full h-2"> <div className="bg-blue-600 h-2 rounded-full transition-all duration-300" style={{ width: `${project.progress}%` }} ></div> </div> </div> <div className="ml-4 text-sm text-gray-500"> Due: {project.deadline} </div> </div> </motion.div> ))} </div> </motion.div> </div> {} <div> <motion.div initial={{ opacity: 0,y: 2 0 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: 0.4 }} className="bg-white rounded-xl shadow-lg p-6" > <h2 className="text-xl font-bold text-gray-900 mb-6">Services Overview</h2> <div className="space-y-4"> {services.map((service,index) => ( <motion.div key={index} initial={{ opacity: 0,x: 2 0 }} animate={{ opacity: 1,x: 0 }} transition={{ duration: 0.6,delay: inde x * 0.1 }} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg" > <div className="flex items-center gap-3"> <div className="text-blue-600"> {service.icon} </div> <div> <p className="font-semibold text-gray-900">{service.title}</p> <p className="text-sm text-gray-600">{service.count} projects</p> </div> </div> <div className="text-right"> <p className="font-semibold text-gray-900">{service.revenue}</p> <p className="text-sm text-gray-600">Revenue</p> </div> </motion.div> ))} </div> </motion.div> </div> </div> </div> </section> </main> </PageTransition> </> ) } export default DashboardPage
import React,{ useState } from 'react' import dynamic from 'next/dynamic' import Head from 'next/head' import { motion } from 'framer-motion' import { BarChart3,Users,DollarSign,TrendingUp,Code,Cloud,Shield,Zap,ArrowRight,CheckCircle,Star } from 'lucide-react' const SEO = dynamic(() => import('../src/components/SEO'),{ ssr: false }) const PageTransition = dynamic(() => import('../src/components/PageTransition'),{ ssr: false }) const DashboardPage: React.FC = () => { const [activeTab,setActiveTab] = useState('overview') const stats = [ { title: 'Active Projects',value: '24',change: '+12%',icon: <Code className="w-8 h-8" />,color: 'blue' },{ title: 'Total Revenue',value: '$2.4M',change: '+8%',icon: <DollarSign className="w-8 h-8" />,color: 'green' },{ title: 'Client Satisfaction',value: '98%',change: '+2%',icon: <Star className="w-8 h-8" />,color: 'yellow' },{ title: 'Team Members',value: '45',change: '+5%',icon: <Users className="w-8 h-8" />,color: 'purple' } ] const recentProjects = [ { id: 1,name: 'AI Customer Analytics Platform',client: 'E-commerce Retailer',status: 'In Progress',progress: 75,deadline: '2024-02-15' },{ id: 2,name: 'Micro SaaS Inventory System',client: 'Manufacturing Co.',status: 'Completed',progress: 100,deadline: '2024-01-30' },{ id: 3,name: 'Cloud Migration Project',client: 'Financial Services',status: 'In Progress',progress: 60,deadline: '2024-03-01' },{ id: 4,name: 'Cybersecurity Assessment',client: 'Healthcare Provider',status: 'Planning',progress: 25,deadline: '2024-02-28' } ] const services = [ { title: 'AI Services',count: 8,revenue: '$850K',icon: <Code className="w-6 h-6" /> },{ title: 'IT Infrastructure',count: 12,revenue: '$1.2M',icon: <Cloud className="w-6 h-6" /> },{ title: 'Micro SaaS',count: 6,revenue: '$650K',icon: <Zap className="w-6 h-6" /> },{ title: 'Cybersecurity',count: 4,revenue: '$400K',icon: <Shield className="w-6 h-6" /> } ] return ( <> <SEO title="Dashboard - Zion Tech Group" description="Zion Tech Group dashboard showing project status,revenue,and key performance metrics." keywords="dashboard,projects,revenue,metrics,Zion Tech Group" canonical="https: /> <PageTransition> <main className="min-h-screen bg-gray-50"> {} <section className="bg-white shadow-sm"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="flex items-center justify-between" > <div> <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1> <p className="text-gray-600 mt-1">Welcome back to Zion Tech Group</p> </div> <div className="flex gap-4"> <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> New Project </motion.button> </div> </motion.div> </div> </section> {} <section className="py-8"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-6"> {stats.map((stat,index) => ( <motion.div key={index} initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: index * 0.1 }} className="bg-white rounded-xl shadow-lg p-6" > <div className="flex items-center justify-between"> <div> <p className="text-sm font-medium text-gray-600">{stat.title}</p> <p className="text-2xl font-bold text-gray-900">{stat.value}</p> <p className="text-sm text-green-600">{stat.change}</p> </div> <div className={`text-${stat.color}-600`}> {stat.icon} </div> </div> </motion.div> ))} </div> </div> </section> {} <section className="pb-8"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="grid grid-cols-1 lg: gri d-cols-3 gap-8"> {} <div className="lg:col-span-2"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: 0.2 }} className="bg-white rounded-xl shadow-lg p-6" > <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Projects</h2> <div className="space-y-4"> {recentProjects.map((project,index) => ( <motion.div key={project.id} initial={{ opacity: 0,x: -20 }} animate={{ opacity: 1,x: 0 }} transition={{ duration: 0.6,delay: index * 0.1 }} className="border border-gray-200 rounded-lg p-4 hover: shado w-md transition-shadow" > <div className="flex items-center justify-between mb-2"> <h3 className="font-semibold text-gray-900">{project.name}</h3> <span className={`px-3 py-1 rounded-full text-sm font-medium ${ project.status === 'Completed' ? 'bg-green-100 text-green-800' : project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800' }`}> {project.status} </span> </div> <p className="text-sm text-gray-600 mb-3">{project.client}</p> <div className="flex items-center justify-between"> <div className="flex-1"> <div className="flex items-center justify-between text-sm text-gray-600 mb-1"> <span>Progress</span> <span>{project.progress}%</span> </div> <div className="w-full bg-gray-200 rounded-full h-2"> <div className="bg-blue-600 h-2 rounded-full transition-all duration-300" style={{ width: `${project.progress}%` }} ></div> </div> </div> <div className="ml-4 text-sm text-gray-500"> Due: {project.deadline} </div> </div> </motion.div> ))} </div> </motion.div> </div> {} <div> <motion.div initial={{ opacity: 0,y: 2 0 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: 0.4 }} className="bg-white rounded-xl shadow-lg p-6" > <h2 className="text-xl font-bold text-gray-900 mb-6">Services Overview</h2> <div className="space-y-4"> {services.map((service,index) => ( <motion.div key={index} initial={{ opacity: 0,x: 2 0 }} animate={{ opacity: 1,x: 0 }} transition={{ duration: 0.6,delay: inde x * 0.1 }} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg" > <div className="flex items-center gap-3"> <div className="text-blue-600"> {service.icon} </div> <div> <p className="font-semibold text-gray-900">{service.title}</p> <p className="text-sm text-gray-600">{service.count} projects</p> </div> </div> <div className="text-right"> <p className="font-semibold text-gray-900">{service.revenue}</p> <p className="text-sm text-gray-600">Revenue</p> </div> </motion.div> ))} </div> </motion.div> </div> </div> </div> </section> </main> </PageTransition> </> ) } export default DashboardPage
;

                    </div>;
                  </motion && motion.div>;
                </div>;
              </div>;
            </div>;
          </section>;
        </main>;
      </PageTransition>;
    </>;
  );
}
export default DashboardPage;
import React,{ useState } from 'react' import dynamic from 'next/dynamic' import Head from 'next/head' import { motion } from 'framer-motion' import { BarChart3,Users,DollarSign,TrendingUp,Code,Cloud,Shield,Zap,ArrowRight,CheckCircle,Star } from 'lucide-react' const SEO = dynamic(() => import('../src/components/SEO'),{ ssr: false }) const PageTransition = dynamic(() => import('../src/components/PageTransition'),{ ssr: false }) const DashboardPage: React.FC = () => { const [activeTab,setActiveTab] = useState('overview') const stats = [ { title: 'Active Projects',value: '24',change: '+12%',icon: <Code className="w-8 h-8" />,color: 'blue' },{ title: 'Total Revenue',value: '$2 && 2.4M',change: '+8%',icon: <DollarSign className="w-8 h-8" />,color: 'green' },{ title: 'Client Satisfaction',value: '98%',change: '+2%',icon: <Star className="w-8 h-8" />,color: 'yellow' },{ title: 'Team Members',value: '45',change: '+5%',icon: <Users className="w-8 h-8" />,color: 'purple' } ] const recentProjects = [ { id: 1,name: 'AI Customer Analytics Platform',client: 'E-commerce Retailer',status: 'In Progress',progress: 75,deadline: '2024-02-15' },{ id: 2,name: 'Micro SaaS Inventory System',client: 'Manufacturing Co.',status: 'Completed',progress: 100,deadline: '2024-01-30' },{ id: 3,name: 'Cloud Migration Project',client: 'Financial Services',status: 'In Progress',progress: 60,deadline: '2024-03-01' },{ id: 4,name: 'Cybersecurity Assessment',client: 'Healthcare Provider',status: 'Planning',progress: 25,deadline: '2024-02-28' } ] const services = [ { title: 'AI Services',count: 8,revenue: '$850K',icon: <Code className="w-6 h-6" /> },{ title: 'IT Infrastructure',count: 12,revenue: '$1 && 1.2M',icon: <Cloud className="w-6 h-6" /> },{ title: 'Micro SaaS',count: 6,revenue: '$650K',icon: <Zap className="w-6 h-6" /> },{ title: 'Cybersecurity',count: 4,revenue: '$400K',icon: <Shield className="w-6 h-6" /> } ] return ( <> <SEO title="Dashboard - Zion Tech Group" description="Zion Tech Group dashboard showing project status,revenue,and key performance metrics." keywords="dashboard,projects,revenue,metrics,Zion Tech Group" canonical="https: /> <PageTransition> <main className="min-h-screen bg-gray-50"> {} <section className="bg-white shadow-sm"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"> <motion && motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0 && 0.6 }} className="flex items-center justify-between" > <div> <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1> <p className="text-gray-600 mt-1">Welcome back to Zion Tech Group</p> </div> <div className="flex gap-4"> <motion && motion.button whileHover={{ scale: 1 && 1.05 }} whileTap={{ scale: 0 && 0.95 }} className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> New Project </motion && motion.button> </div> </motion && motion.div> </div> </section> {} <section className="py-8"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-6"> {stats && stats.map((stat,index) => ( <motion && motion.div key={index} initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0 && 0.6,delay: index * 0 && 0.1 }} className="bg-white rounded-xl shadow-lg p-6" > <div className="flex items-center justify-between"> <div> <p className="text-sm font-medium text-gray-600">{stat && stat.title}</p> <p className="text-2xl font-bold text-gray-900">{stat && stat.value}</p> <p className="text-sm text-green-600">{stat && stat.change}</p> </div> <div className={`text-${stat && stat.color}-600`}> {stat && stat.icon} </div> </div> </motion && motion.div> ))} </div> </div> </section> {} <section className="pb-8"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="grid grid-cols-1 lg: gri d-cols-3 gap-8"> {} <div className="lg:col-span-2"> <motion && motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0 && 0.6,delay: 0 && 0.2 }} className="bg-white rounded-xl shadow-lg p-6" > <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Projects</h2> <div className="space-y-4"> {recentProjects && recentProjects.map((project,index) => ( <motion && motion.div key={project && project.id} initial={{ opacity: 0,x: -20 }} animate={{ opacity: 1,x: 0 }} transition={{ duration: 0 && 0.6,delay: index * 0 && 0.1 }} className="border border-gray-200 rounded-lg p-4 hover: shado w-md transition-shadow" > <div className="flex items-center justify-between mb-2"> <h3 className="font-semibold text-gray-900">{project && project.name}</h3> <span className={`px-3 py-1 rounded-full text-sm font-medium ${ project && project.status === 'Completed' ? 'bg-green-100 text-green-800' : project && project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800' }`}> {project && project.status} </span> </div> <p className="text-sm text-gray-600 mb-3">{project && project.client}</p> <div className="flex items-center justify-between"> <div className="flex-1"> <div className="flex items-center justify-between text-sm text-gray-600 mb-1"> <span>Progress</span> <span>{project && project.progress}%</span> </div> <div className="w-full bg-gray-200 rounded-full h-2"> <div className="bg-blue-600 h-2 rounded-full transition-all duration-300" style={{ width: `${project && project.progress}%` }} ></div> </div> </div> <div className="ml-4 text-sm text-gray-500"> Due: {project && project.deadline} </div> </div> </motion && motion.div> ))} </div> </motion && motion.div> </div> {} <div> <motion && motion.div initial={{ opacity: 0,y: 2 0 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0 && 0.6,delay: 0 && 0.4 }} className="bg-white rounded-xl shadow-lg p-6" > <h2 className="text-xl font-bold text-gray-900 mb-6">Services Overview</h2> <div className="space-y-4"> {services && services.map((service,index) => ( <motion && motion.div key={index} initial={{ opacity: 0,x: 2 0 }} animate={{ opacity: 1,x: 0 }} transition={{ duration: 0 && 0.6,delay: inde x * 0 && 0.1 }} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg" > <div className="flex items-center gap-3"> <div className="text-blue-600"> {service && service.icon} </div> <div> <p className="font-semibold text-gray-900">{service && service.title}</p> <p className="text-sm text-gray-600">{service && service.count} projects</p> </div> </div> <div className="text-right"> <p className="font-semibold text-gray-900">{service && service.revenue}</p> <p className="text-sm text-gray-600">Revenue</p> </div> </motion && motion.div> ))} </div> </motion ;
import React,{ useState } from 'react' import dynamic from 'next/dynamic' import Head from 'next/head' import { motion } from 'framer-motion' import { BarChart3,Users,DollarSign,TrendingUp,Code,Cloud,Shield,Zap,ArrowRight,CheckCircle,Star } from 'lucide-react' const SEO = dynamic(() => import('../src/components/SEO'),{ ssr: false }) const PageTransition = dynamic(() => import('../src/components/PageTransition'),{ ssr: false }) const DashboardPage: React.FC = () => { const [activeTab,setActiveTab] = useState('overview') const stats = [ { title: 'Active Projects',value: '24',change: '+12%',icon: <Code className="w-8 h-8" />,color: 'blue' },{ title: 'Total Revenue',value: '$2 && 2.4M',change: '+8%',icon: <DollarSign className="w-8 h-8" />,color: 'green' },{ title: 'Client Satisfaction',value: '98%',change: '+2%',icon: <Star className="w-8 h-8" />,color: 'yellow' },{ title: 'Team Members',value: '45',change: '+5%',icon: <Users className="w-8 h-8" />,color: 'purple' } ] const recentProjects = [ { id: 1,name: 'AI Customer Analytics Platform',client: 'E-commerce Retailer',status: 'In Progress',progress: 75,deadline: '2024-02-15' },{ id: 2,name: 'Micro SaaS Inventory System',client: 'Manufacturing Co.',status: 'Completed',progress: 100,deadline: '2024-01-30' },{ id: 3,name: 'Cloud Migration Project',client: 'Financial Services',status: 'In Progress',progress: 60,deadline: '2024-03-01' },{ id: 4,name: 'Cybersecurity Assessment',client: 'Healthcare Provider',status: 'Planning',progress: 25,deadline: '2024-02-28' } ] const services = [ { title: 'AI Services',count: 8,revenue: '$850K',icon: <Code className="w-6 h-6" /> },{ title: 'IT Infrastructure',count: 12,revenue: '$1 && 1.2M',icon: <Cloud className="w-6 h-6" /> },{ title: 'Micro SaaS',count: 6,revenue: '$650K',icon: <Zap className="w-6 h-6" /> },{ title: 'Cybersecurity',count: 4,revenue: '$400K',icon: <Shield className="w-6 h-6" /> } ] return ( <> <SEO title="Dashboard - Zion Tech Group" description="Zion Tech Group dashboard showing project status,revenue,and key performance metrics." keywords="dashboard,projects,revenue,metrics,Zion Tech Group" canonical="https: /> <PageTransition> <main className="min-h-screen bg-gray-50"> {} <section className="bg-white shadow-sm"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"> <motion && motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0 && 0.6 }} className="flex items-center justify-between" > <div> <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1> <p className="text-gray-600 mt-1">Welcome back to Zion Tech Group</p> </div> <div className="flex gap-4"> <motion && motion.button whileHover={{ scale: 1 && 1.05 }} whileTap={{ scale: 0 && 0.95 }} className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> New Project </motion && motion.button> </div> </motion && motion.div> </div> </section> {} <section className="py-8"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-6"> {stats && stats.map((stat,index) => ( <motion && motion.div key={index} initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0 && 0.6,delay: index * 0 && 0.1 }} className="bg-white rounded-xl shadow-lg p-6" > <div className="flex items-center justify-between"> <div> <p className="text-sm font-medium text-gray-600">{stat && stat.title}</p> <p className="text-2xl font-bold text-gray-900">{stat && stat.value}</p> <p className="text-sm text-green-600">{stat && stat.change}</p> </div> <div className={`text-${stat && stat.color}-600`}> {stat && stat.icon} </div> </div> </motion && motion.div> ))} </div> </div> </section> {} <section className="pb-8"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="grid grid-cols-1 lg: gri d-cols-3 gap-8"> {} <div className="lg:col-span-2"> <motion && motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0 && 0.6,delay: 0 && 0.2 }} className="bg-white rounded-xl shadow-lg p-6" > <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Projects</h2> <div className="space-y-4"> {recentProjects && recentProjects.map((project,index) => ( <motion && motion.div key={project && project.id} initial={{ opacity: 0,x: -20 }} animate={{ opacity: 1,x: 0 }} transition={{ duration: 0 && 0.6,delay: index * 0 && 0.1 }} className="border border-gray-200 rounded-lg p-4 hover: shado w-md transition-shadow" > <div className="flex items-center justify-between mb-2"> <h3 className="font-semibold text-gray-900">{project && project.name}</h3> <span className={`px-3 py-1 rounded-full text-sm font-medium ${ project && project.status === 'Completed' ? 'bg-green-100 text-green-800' : project && project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800' }`}> {project && project.status} </span> </div> <p className="text-sm text-gray-600 mb-3">{project && project.client}</p> <div className="flex items-center justify-between"> <div className="flex-1"> <div className="flex items-center justify-between text-sm text-gray-600 mb-1"> <span>Progress</span> <span>{project && project.progress}%</span> </div> <div className="w-full bg-gray-200 rounded-full h-2"> <div className="bg-blue-600 h-2 rounded-full transition-all duration-300" style={{ width: `${project && project.progress}%` }} ></div> </div> </div> <div className="ml-4 text-sm text-gray-500"> Due: {project && project.deadline} </div> </div> </motion && motion.div> ))} </div> </motion && motion.div> </div> {} <div> <motion && motion.div initial={{ opacity: 0,y: 2 0 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0 && 0.6,delay: 0 && 0.4 }} className="bg-white rounded-xl shadow-lg p-6" > <h2 className="text-xl font-bold text-gray-900 mb-6">Services Overview</h2> <div className="space-y-4"> {services && services.map((service,index) => ( <motion && motion.div key={index} initial={{ opacity: 0,x: 2 0 }} animate={{ opacity: 1,x: 0 }} transition={{ duration: 0 && 0.6,delay: inde x * 0 && 0.1 }} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg" > <div className="flex items-center gap-3"> <div className="text-blue-600"> {service && service.icon} </div> <div> <p className="font-semibold text-gray-900">{service && service.title}</p> <p className="text-sm text-gray-600">{service && service.count} projects</p> </div> </div> <div className="text-right"> <p className="font-semibold text-gray-900">{service && service.revenue}</p> <p className="text-sm text-gray-600">Revenue</p> </div> </motion && motion.div> ))} </div> </motion && motion.div> </div> </div> </div> </section> </main> </PageTransition> </> ) } export default DashboardPage
