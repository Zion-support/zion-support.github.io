
ursor/automate-test-improve-and-merge-code-646c;
import React from 'react';
<<<<<<< HEAD
import { Users, Award, Target, Zap, Shield, Globe, Code, Database } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  const values = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Innovation',
      description: 'We stay at the forefront of technology, constantly exploring new solutions and methodologies to deliver cutting-edge results.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security',
      description: 'Security is paramount in everything we do. We implement enterprise-grade security measures to protect your data and systems.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, ensuring transparent communication and alignment with your business goals.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering high-quality solutions that exceed expectations and drive results.'
    }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      description: 'Visionary leader with 10+ years in technology and business development.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      description: 'Technical architect specializing in AI and cloud solutions.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Michael Chen',
      role: 'Lead Developer',
      description: 'Full-stack developer with expertise in modern web technologies.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">About Zion Tech Group</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We are a leading technology company specializing in AI services, IT solutions, 
              and micro SaaS applications that transform businesses and drive digital innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To empower businesses with cutting-edge technology solutions that drive growth, 
                efficiency, and innovation. We believe that every organization, regardless of size, 
                deserves access to world-class technology that can transform their operations.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our mission is to bridge the gap between complex technology and practical business 
                needs, making advanced solutions accessible and actionable for our clients.
              </p>
              <div className="flex items-center space-x-4">
                <Target className="w-8 h-8 text-blue-600" />
                <span className="text-lg font-semibold text-gray-900">Driving Digital Transformation</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Database className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Data-Driven</h3>
                  <p className="text-sm text-gray-600">Solutions based on analytics and insights</p>
                </div>
                <div className="text-center">
                  <Globe className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Global Reach</h3>
                  <p className="text-sm text-gray-600">Serving clients worldwide</p>
                </div>
                <div className="text-center">
                  <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Award-Winning</h3>
                  <p className="text-sm text-gray-600">Recognized for excellence</p>
                </div>
                <div className="text-center">
                  <Zap className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Fast Delivery</h3>
                  <p className="text-sm text-gray-600">Rapid implementation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="text-blue-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The talented individuals behind our success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with our technology solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-200"
            >
              Get Started Today
            </a>
            <a 
              href="/services" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-200"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
=======
const About: React.FC = () => {return (<div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen">;
      <div className="container mx-auto px-4 py-16">;
        <div className="text-center mb-16">;
import React, { useState } from 'react';
import { motion  } from 'framer-motion';
import Card from '../components/Card';
const About: React.FC = () => {const [activeTab, setActiveTab]  = useState('mission')const teamMembers = [;
    {name: 'Dr. Sarah Chen',role: 'Chief Technology Officer',expertise: 'AI & Machine Learning',image: '👩‍💼',description: 'Leading our AI initiatives with 15+ years of experience in machine learning and data science.';
    },{name: 'Michael Rodriguez',role: 'Head of Engineering',expertise: 'Cloud Architecture',image: '👨‍💻',description: 'Expert in scalable cloud solutions and microservices architecture with a track record of successful enterprise deployments.';
    },{name: 'Emily Johnson',role: 'Security Director',expertise: 'Cybersecurity',image: '👩‍🔬',description: 'Cybersecurity specialist ensuring our solutions meet the highest security standards and compliance requirements.';
    },{name: 'David Kim',role: 'Product Manager',expertise: 'Digital Transformation',image: '👨‍💼',description: 'Driving product strategy and digital transformation initiatives for our enterprise clients.';
    }
  ];const containerVariants = {hidden: { opacity: 0 },visible: {opacity: 1,transition: {staggerChildren: 0.1;
      }
    }
  }const itemVariants = {hidden: { y: 20, opacity: 0 },visible: {y: 0,opacity: 1,transition: {duration: 0.6,ease: 'easeOut';
      }
    }
  }return (<motion.div;
      className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen";
      variants={containerVariants}
      initial="hidden";
      animate="visible";
    >;
      <div className="container mx-auto px-4 py-16">;
        <motion.div className="text-center mb-16" variants={itemVariants}>;
          <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">;
            About Zion Tech Group;
          </h1>;
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
            We are a leading technology company specializing in AI solutions, cybersecurity,and cloud infrastructure. Our mission is to transform businesses through;
            innovative technology solutions.;
          </p>;
        </div>;
  const values = [;
    {icon: <Target className="w-8 h-8" />,title: 'Innovation First',description: 'We constantly push the boundaries of what\'s possible with cutting-edge technology and creative solutions.';
    },{icon: <Users className="w-8 h-8" />,title: 'Client-Centric',description: 'Your success is our success. We build lasting partnerships based on trust, transparency, and results.';
    },{icon: <Award className="w-8 h-8" />,title: 'Excellence',description: 'We maintain the highest standards in everything we do, from code quality to customer service.';
    }
  ];
ursor/integrate-build-improve-and-re-verify-9d47;
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">;
          <Card;
            title="Our Mission";
            description="To empower businesses with cutting-edge AI and technology solutions that drive innovation, efficiency, and growth in the digital age.";
          />;
          <Card;
            title="Our Vision";
            description="To be the global leader in AI-powered technology solutions, transforming industries and creating a smarter, more connected world.";
          />;
          <Card;
            title="Our Values";
            description="We maintain the highest standards in everything we do, from our code quality to our customer service and support.";
          />;
        </div>;
  const team = [;
    {name: 'Sarah Johnson',role: 'CEO & Founder',bio: '15+ years in AI and enterprise software. Former Google AI researcher.',image: '/team/sarah-johnson.jpg';
    },{name: 'Mike Chen',role: 'CTO',bio: 'Expert in cloud architecture and scalable systems. Ex-AWS principal engineer.',image: '/team/mike-chen.jpg';
    },{name: 'Emily Davis',role: 'Head of Design',bio: 'Award-winning UX designer with a focus on accessibility and user experience.',image: '/team/emily-davis.jpg';
    }
  ];const stats = [;
    { number: '500+', label: 'Projects Delivered' },{ number: '100+', label: 'Happy Clients' },{ number: '5+', label: 'Years Experience' },{ number: '24/7', label: 'Support Available' }const About: React.FC = () => {import { SEO } from "@/components/SEO",import { GradientHeading } from "@/components/GradientHeading",import { ContactSection  } from '@/components/ContactSection';
import Link from 'next/link';
export default function About() {const team = [;
    {name: 'Alex Johnson',role: 'CEO',image:;
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=300&q=80',bio: "Alex Johnson leads Zion as CEO, driving the company's vision to democratize AI globally. With over a decade of experience in technology startups, Alex previously built enterprise platforms adopted by Fortune 500 companies. At Zion, he focuses on building partnerships and ensuring that innovation benefits everyone. Alex believes in open collaboration and empowers the team to push boundaries while upholding transparency. Outside work, he mentors young entrepreneurs and enjoys exploring new cultures. He loves hiking, reading science fiction, and cooking.";
    },{name: 'Maria Chen',role: 'CTO',image:;
        'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=300&q=80',bio: "Maria Chen, Zion's CTO, oversees the platform's technical strategy and architecture. She has led engineering teams at several AI-focused startups, delivering scalable solutions that power millions of users. At Zion, Maria champions a culture of experimentation and rigorous security, ensuring the marketplace remains reliable and cutting-edge. She collaborates closely with open-source communities and mentors young developers in her spare time. Maria holds a master's in computer science and enjoys painting landscapes when she's not coding. She also loves robotics projects.";
    },{name: 'Sam Lee',role: 'Head of Community',image:;
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',bio: "Sam Lee serves as Zion's Head of Community, cultivating relationships with developers, partners, and customers worldwide. He previously launched multiple tech communities that grew from small meetups into thriving networks. At Zion, Sam orchestrates events, online forums, and mentorship programs that encourage collaboration and knowledge sharing. His empathetic approach helps newcomers feel welcomed while promoting an inclusive culture. Sam studied communications and has a background in user advocacy. In his downtime, he enjoys photography and traveling with his family, often.";
    }
  ];const timeline = [;
    {year: '2019',text: 'Company founded to link AI innovators with businesses through a truly open global marketplace worldwide.';
    },{year: '2020',text: 'Launched early beta, inviting first users to explore collaborative tools and provide invaluable feedback insights.';
    },{year: '2021',text: 'Closed seed round, expanding engineering team to accelerate development and scale infrastructure globally for growth.';
    },{year: '2022',text: 'Released ZionGPT core, forging partnerships with industry leaders across multiple high-tech sectors to drive innovation.';
    },{year: '2023',text: 'Hosted inaugural Zion Summit showcasing real-world deployments and collaborative community-driven innovation from around the world.';
    },{year: '2024',text: 'Expanded into decentralized talent marketplace empowering creators worldwide to launch cutting-edge AI solutions and collaborate.';
    }
  ];return (<>;
      <SEO;
        title="About Us - Zion Tech Group";
        description="Learn about Zion Tech Group's mission to transform businesses through innovative AI and technology solutions. Meet our expert team and discover our values.";
        keywords="about us, team, mission, values, AI company, technology solutions";
        url="/about";
      />;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">;
        <Header />;
        <main>;
          {/* Hero Section */}
          <section className="pt-20 pb-16 px-4">;
            <div className="max-w-7xl mx-auto">;
              <ScrollAnimation animation="slideUp" delay={0.2}>;
                <div className="text-center mb-16">;
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">;
                    About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Zion Tech Group</span>;
                  </h1>;
                  <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">;
                    We're a team of passionate technologists dedicated to transforming businesses;
                    through innovative AI and technology solutions.;
                  </p>;
        title='About Zion - The Future of AI & Tech Marketplace';
        description="Learn about Zion's mission to create the first free marketplace dedicated to high-tech and artificial intelligence.";
        keywords='about Zion, AI marketplace, tech platform, mission, vision, team';
        canonical='https://app.ziontechgroup.com/about';
      />;
      <main className='min-h-screen bg-zion-blue pt-24 pb-20'>;
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 space-y-24'>;
          <div className='text-center content-section'>;
            <GradientHeading>About Zion</GradientHeading>;
            <p className='mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto'>;
              The world's first free marketplace dedicated to high-tech and;
              artificial intelligence;
            </p>;
          </div>;
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center content-section'>;
            <div>;
              <h2 className='text-3xl font-bold text-white mb-6'>;
                Our Mission;
              </h2>;
              <p className='text-zion-slate-light text-lg mb-6'>;
                At Zion, we're on a mission to democratize access to;
                cutting-edge AI and technology solutions. We believe that;
                innovation thrives when barriers are removed and connections are;
                made.;
              </p>;
              <p className='text-zion-slate-light text-lg mb-6'>;
                Our platform brings together talented AI specialists, innovative;
                companies, and the latest technological solutions in one;
                seamless ecosystem.;
              </p>;
              <p className='text-zion-slate-light text-lg'>;
                By connecting talent with opportunity and innovation with;
                implementation, we're creating a global community where the;
                future of technology is being built today.;
              </p>;
            </div>;
            <div className='rounded-lg overflow-hidden relative w-full h-full'>;
              <img;
                src='https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=600&q=80';
                alt='Team collaboration';
                className='object-cover';
              />;
            </div>;
          </div>;
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse content-section'>;
            <div>;
              <h2 className='text-3xl font-bold text-white mb-6'>Our Vision</h2>;
              <p className='text-zion-slate-light text-lg mb-6'>;
                We envision a world where AI and technology are accessible to;
                all, regardless of geographical or financial constraints. A;
                world where the best minds can collaborate to solve the most;
                challenging problems.;
              </p>;
              <p className='text-zion-slate-light text-lg mb-6'>;
                Zion is building that world by creating a transparent, ethical,and inclusive platform that puts people at the center of;
                technological advancement.;
              </p>;
              <p className='text-zion-slate-light text-lg'>;
                Our goal is to become the premier destination for AI and tech;
                innovation, fostering a community that shapes the future of how;
                we live, work, and interact with technology.;
              </p>;
            </div>;
            <div className='rounded-lg overflow-hidden lg:order-first relative w-full h-full'>;
              <img;
                src='https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&h=600&q=80';
                alt='Tech innovation';
                className='object-cover';
              />;
            </div>;
          </div>;
          <div className='text-center content-section'>;
            <h2 className='text-3xl font-bold text-white mb-8'>Our Values</h2>;
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>;
              <div className='bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light'>;
                <div className='bg-zion-blue inline-flex p-4 rounded-full mb-4'>;
                  <svg;
                    className='w-8 h-8 text-zion-cyan';
                    fill='none';
                    stroke='currentColor';
                    viewBox='0 0 24 24';
                    xmlns='http://www.w3.org/2000/svg';
                  >;
                    <path;
                      strokeLinecap='round';
                      strokeLinejoin='round';
                      strokeWidth={2}
                      d='M13 10V3L4 14h7v7l9-11h-7z';
                    />;
                  </svg>;
                </div>;
                <h3 className='text-xl font-bold text-white mb-3'>;
                  Innovation;
                </h3>;
                <p className='text-zion-slate-light'>;
                  We embrace cutting-edge technologies and creative thinking to;
                  push the boundaries of what's possible.;
                </p>;
              </div>;
              <div className='bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light'>;
                <div className='bg-zion-blue inline-flex p-4 rounded-full mb-4'>;
                  <svg;
                    className='w-8 h-8 text-zion-purple';
                    fill='none';
                    stroke='currentColor';
                    viewBox='0 0 24 24';
                    xmlns='http://www.w3.org/2000/svg';
                  >;
                    <path;
                      strokeLinecap='round';
                      strokeLinejoin='round';
                      strokeWidth={2}
                      d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z';
                    />;
                  </svg>;
                </div>;
                <h3 className='text-xl font-bold text-white mb-3'>Community</h3>;
                <p className='text-zion-slate-light'>;
                  We believe in the power of collaboration and fostering an;
                  inclusive ecosystem where everyone can thrive.;
                </p>;
              </div>;
              <div className='bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light'>;
                <div className='bg-zion-blue inline-flex p-4 rounded-full mb-4'>;
                  <svg;
                    className='w-8 h-8 text-zion-cyan';
                    fill='none';
                    stroke='currentColor';
                    viewBox='0 0 24 24';
                    xmlns='http://www.w3.org/2000/svg';
                  >;
                    <path;
                      strokeLinecap='round';
                      strokeLinejoin='round';
                      strokeWidth={2}
                      d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z';
                    />;
                  </svg>;
                </div>;
                <h3 className='text-xl font-bold text-white mb-3'>Trust</h3>;
                <p className='text-zion-slate-light'>;
                  We maintain the highest standards of integrity, transparency,and ethical practices in everything we do.;
                </p>;
              </div>;
            </div>;
          </div>;
          <div className='content-section'>;
            <h2 className='text-3xl font-bold text-white mb-8 text-center'>;
              Company Timeline;
            </h2>;
            <ol className='relative border-l border-zion-blue-light pl-6 max-w-3xl mx-auto'>;
              {timeline.map(event => (<li key={event.year} className='mb-10 ml-4'>;
                  <span className='absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-zion-cyan' />;
                  <time className='font-semibold text-white'>{event.year}</time>;
                  <p className='text-zion-slate-light mt-2'>{event.text}</p>;
                </li>;
              ))}
            </ol>;
          </div>;
          <div className='content-section text-center'>;
            <h2 className='text-3xl font-bold text-white mb-8'>;
              Meet the Team;
            </h2>;
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-8'>;
              {team.map(member => (<div key={member.name} className='text-center space-y-3'>;
                  <div className='relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden'>;
                    <img;
                      src={member.image}
                      alt={member.name}
                      className='object-cover rounded-full';
                    />;
                  </div>;
                  <p className='text-white font-bold'>{member.name}</p>;
                  <p className='text-zion-slate-light'>{member.role}</p>;
                  <p className='text-zion-slate-light text-sm'>{member.bio}</p>;
                </div>;
              ))}
            </div>;
          </div>;
          <div className='content-section text-center'>;
            <h2 className='text-3xl font-bold text-white mb-4'>Press Kit</h2>;
            <p className='text-zion-slate-light mb-4'>;
              Download our logos, color palette and press release templates.;
            </p>;
            <a;
              href='/toolkit_assets/media_kit.zip';
              download;
              className='text-zion-cyan underline';
            >;
              Download Media Kit (.zip)</a>;
          </div>;
        </div>;
        <div className='content-section text-center'>;
          <p className='text-zion-slate-light text-lg'>;
            Ready to work with us? Explore our{' '}
            <Link href='/services' legacyBehavior>;
              <a className='text-zion-cyan underline'>AI & IT services</a>;
            </Link>{' '}
            or{' '}
            <Link href='/contact' className='text-zion-cyan underline'>;
              get in touch;
            </Link>;
            . For the latest updates, visit our{' '}
            <Link href='/blog' legacyBehavior>;
              <a className='text-zion-cyan underline'>blog</a>;
            </Link>;
            .;
          </p>;
        </div>;
        <ContactSection />;
      </main>;
    </>;
  )export default function AboutPage() {return (<div className="space-y-16">;
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">;
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">;
          About Zion Tech Group;
        </h1>;
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">;
          Leading AI & Technology Solutions for a Smarter Future. We deliver cutting-edge;
          technology solutions that transform businesses and drive innovation.;
        </p>;
      </section>;
      <section className="py-12">;
        <div className="max-w-4xl mx-auto">;
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mission</h2>;
          <p className="text-lg text-gray-600 mb-6">;
            At Zion Tech Group, we believe in the power of technology to transform businesses and create meaningful impact.;
            Our mission is to deliver innovative AI and technology solutions that help organizations thrive in the digital age.;
          </p>;
          <p className="text-lg text-gray-600 mb-6">;
            With over 1000+ successful projects delivered across various industries, we combine technical expertise;
            with business acumen to create solutions that drive real results.;
          </p>;
        </div>;
      </section>;
      <section className="py-12 bg-gray-50 rounded-lg">;
        <div className="max-w-4xl mx-auto">;
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            <div>;
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get in Touch</h3>;
              <div className="space-y-4">;
                <div>;
                  <p className="font-semibold text-gray-700">Phone:</p>;
                  <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-800">;
                    +1 302 464 0950;
                  </a>;
                </div>;
                <div>;
                  <p className="font-semibold text-gray-700">Email:</p>;
                  <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-800">;
                    kleber@ziontechgroup.com;
                  </a>;
                </div>;
                <div>;
                  <p className="font-semibold text-gray-700">Address:</p>;
                  <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>;
                </div>;
              </div>;
            </div>;
            <div>;
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us?</h3>;
              <ul className="space-y-2">;
                <li className="flex items-center">;
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>;
                  <span>1000+ successful projects</span>;
                </li>;
                <li className="flex items-center">;
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>;
                  <span>24/7 technical support</span>;
                </li>;
                <li className="flex items-center">;
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>;
                  <span>Enterprise-grade security</span>;
                </li>;
                <li className="flex items-center">;
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>;
                  <span>Custom solutions for every need</span>;
                </li>;
              </ul>;
            </div>;
          </section>;
          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">;
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">;
              <ScrollAnimation animation="fadeIn" delay={0.2}>;
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
                  Ready to Work With Us?;
                </h2>;
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
                  Let's discuss how we can help transform your business with our innovative solutions.;
                </p>;
                <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                  <Button size="lg" asChild>;
                    <Link to="/contact">;
                      Get Started Today;
                      <ArrowRight className="ml-2 h-5 w-5" />;
                    </Link>;
                  </Button>;
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900" asChild>;
                    <Link to="/services">View Our Services</Link>;
                  </Button>;
                </div>;
              </ScrollAnimation>;
            </div>;
          </section>;
        </main>;
        <Footer />;
ursor/automate-test-improve-and-merge-code-646c;
      </div>;
    </div>;
            We are a leading technology company specializing in AI solutions, cybersecurity,and cloud infrastructure. Our mission is to transform businesses through;
            innovative technology solutions.;
          </p>;
        </motion.div>;
        {/* Tab Navigation */}
        <motion.div className="flex flex-wrap justify-center mb-12" variants={itemVariants}>;
          {[;
            { id: 'mission', label: 'Our Mission' },{ id: 'team', label: 'Our Team' },{ id: 'values', label: 'Our Values' }
          ].map(tab => (<button;
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 mx-2 mb-2 rounded-lg transition-all duration-300 ${activeTab === tab.id;
                  ? 'bg-cyan-600 text-white';
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600';
              }`}
            >;
              {tab.label}
            </button>;
          ))}
        </motion.div>;
        {/* Tab Content */}
        <motion.div className="max-w-6xl mx-auto" variants={itemVariants}>;
          {activeTab === 'mission' && (<motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={itemVariants}>;
              <Card;
                title="Our Mission";
                description="To empower businesses with cutting-edge AI and technology solutions that drive innovation, efficiency, and growth in the digital age.";
                icon="🎯";
              />;
              <Card;
                title="Our Vision";
                description="To be the global leader in AI-powered technology solutions, transforming industries and creating a smarter, more connected world.";
                icon="🚀";
              />;
            </motion.div>;
          )}{activeTab === 'team' && (<motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" variants={itemVariants}>;
              {teamMembers.map((member, index) => (<Card;
                  key={index}
                  title={member.name}
                  description={member.description}
                  icon={member.image}
                  className="text-center";
                >;
                  <div className="mt-4">;
                    <p className="text-cyan-400 font-semibold">{member.role}</p>;
                    <p className="text-sm text-gray-400">{member.expertise}</p>;
                  </div>;
                </Card>;
              ))}
            </motion.div>;
          )}{activeTab === 'values' && (<motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={itemVariants}>;
              <Card;
                title="Innovation";
                description="We constantly push the boundaries of what's possible with technology, always seeking new and better ways to solve complex problems.";
                icon="💡";
              />;
              <Card;
                title="Excellence";
                description="We maintain the highest standards in everything we do, from our code quality to our customer service and support.";
                icon="⭐";
              />;
              <Card;
                title="Integrity";
                description="We conduct business with honesty, transparency, and ethical practices, building trust with our clients and partners.";
                icon="🤝";
              />;
            </motion.div>;
          )}
        </motion.div>;
      </div>;
    </motion.div>;
    </>;
ursor/integrate-build-improve-and-re-verify-9d47;
  )}export default About;</div>;
        </div>;
      </section>;
import { Link  } from 'react-router-dom';
import { ArrowRight, Users, Award, Target  } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
const About: React.FC = () => {const values = [;
    {icon: <Target className="w-8 h-8" />,title: 'Innovation First',description: 'We constantly push the boundaries of what\'s possible with cutting-edge technology and creative solutions.';
    },{icon: <Users className="w-8 h-8" />,title: 'Client-Centric',description: 'Your success is our success. We build lasting partnerships based on trust, transparency, and results.';
    },{icon: <Award className="w-8 h-8" />,title: 'Excellence',description: 'We maintain the highest standards in everything we do, from code quality to customer service.';
    }
  ];const team = [;
    {name: 'Sarah Johnson',role: 'CEO & Founder',bio: '15+ years in AI and enterprise software. Former Google AI researcher.',image: '/team/sarah-johnson.jpg';
    },{name: 'Mike Chen',role: 'CTO',bio: 'Expert in cloud architecture and scalable systems. Ex-AWS principal engineer.',image: '/team/mike-chen.jpg';
    },{name: 'Emily Davis',role: 'Head of Design',bio: 'Award-winning UX designer with a focus on accessibility and user experience.',image: '/team/emily-davis.jpg';
    }
  ];const stats = [;
    { number: '500+', label: 'Projects Delivered' },{ number: '100+', label: 'Happy Clients' },{ number: '5+', label: 'Years Experience' },{ number: '24/7', label: 'Support Available' }
  ];return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">;
      <Header />;
      <main>;
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">;
          <div className="max-w-7xl mx-auto">;
            <div className="text-center mb-16">;
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">;
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Zion Tech Group</span>;
              </h1>;
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">;
                We're a team of passionate technologists dedicated to transforming businesses;
                through innovative AI and technology solutions.;
              </p>;
            </div>;
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">;
              {stats.map((stat, index) => (<div key={index} className="text-center">;
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">;
                    {stat.number}
                  </div>;
                  <div className="text-gray-400 text-sm md:text-base">;
                    {stat.label}
                  </div>;
                </div>;
              ))}
            </div>;
          </div>;
        </section>;
        {/* Mission Section */}
        <section className="py-20 bg-gray-900/50">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="text-center mb-16">;
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Mission</span>;
              </h2>;
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">;
                To democratize access to cutting-edge AI and technology solutions,empowering businesses of all sizes to compete and thrive in the digital age.;
              </p>;
            </div>;
            <div className="grid md:grid-cols-3 gap-8">;
              {values.map((value, index) => (<div key={index} className="text-center">;
                  <Card className="p-8 bg-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:bg-gray-800/70 transition-all duration-300 hover:border-cyan-400/50">;
                    <div className="text-cyan-400 mb-4 flex justify-center">;
                      {value.icon}
                    </div>;
                    <h3 className="text-xl font-semibold text-white mb-4">;
                      {value.title}
                    </h3>;
                    <p className="text-gray-300 leading-relaxed">;
                      {value.description}
                    </p>;
                  </Card>;
                </div>;
              ))}
            </div>;
          </div>;
        </section>;
        {/* Team Section */}
        <section className="py-20">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="text-center mb-16">;
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
                Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Team</span>;
              </h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                The brilliant minds behind our innovative solutions;
              </p>;
            </div>;
            <div className="grid md:grid-cols-3 gap-8">;
              {team.map((member, index) => (<div key={index} className="text-center group">;
                  <Card className="p-8 bg-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:bg-gray-800/70 transition-all duration-300 hover:border-cyan-400/50">;
                    <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">;
                      <span className="text-black font-bold text-2xl">;
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>;
                    </div>;
                    <h3 className="text-xl font-semibold text-white mb-2">;
                      {member.name}
                    </h3>;
                    <p className="text-cyan-400 mb-4 font-medium">;
                      {member.role}
                    </p>;
                    <p className="text-gray-300 leading-relaxed">;
                      {member.bio}
                    </p>;
                  </Card>;
                </div>;
              ))}
            </div>;
          </div>;
        </section>;
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">;
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Ready to Work With Us?;
            </h2>;
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
              Let's discuss how we can help transform your business with our innovative solutions.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <Link;
                to="/contact";
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500";
              >;
                Get Started Today;
                <ArrowRight className="ml-2 h-5 w-5" />;
              </Link>;
              <Link;
                to="/services";
                className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white";
              >;
                View Our Services;
              </Link>;
            </div>;
          </div>;
        </section>;
      </main>;
      <Footer />;
    </div>;
            We are a leading technology company specializing in AI solutions, cybersecurity,and cloud infrastructure. Our mission is to transform businesses through;
            innovative technology solutions.;
          </p>;
        </motion.div>;
        {/* Tab Navigation */}
        <motion.div className="flex flex-wrap justify-center mb-12" variants={itemVariants}>;
          {[;
            { id: 'mission', label: 'Our Mission' },{ id: 'team', label: 'Our Team' },{ id: 'values', label: 'Our Values' }
          ].map(tab => (<button;
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 mx-2 mb-2 rounded-lg transition-all duration-300 ${activeTab === tab.id;
                  ? 'bg-cyan-600 text-white';
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600';
              }`}
            >;
              {tab.label}
            </button>;
          ))}
        </motion.div>;
        {/* Tab Content */}
        <motion.div className="max-w-6xl mx-auto" variants={itemVariants}>;
          {activeTab === 'mission' && (<motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={itemVariants}>;
              <Card;
                title="Our Mission";
                description="To empower businesses with cutting-edge AI and technology solutions that drive innovation, efficiency, and growth in the digital age.";
                icon="🎯";
              />;
              <Card;
                title="Our Vision";
                description="To be the global leader in AI-powered technology solutions, transforming industries and creating a smarter, more connected world.";
                icon="🚀";
              />;
            </motion.div>;
          )}{activeTab === 'team' && (<motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" variants={itemVariants}>;
              {teamMembers.map((member, index) => (<Card;
                  key={index}
                  title={member.name}
                  description={member.description}
                  icon={member.image}
                  className="text-center";
                >;
                  <div className="mt-4">;
                    <p className="text-cyan-400 font-semibold">{member.role}</p>;
                    <p className="text-sm text-gray-400">{member.expertise}</p>;
                  </div>;
                </Card>;
              ))}
            </motion.div>;
          )}{activeTab === 'values' && (<motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={itemVariants}>;
              <Card;
                title="Innovation";
                description="We constantly push the boundaries of what's possible with technology, always seeking new and better ways to solve complex problems.";
                icon="💡";
              />;
              <Card;
                title="Excellence";
                description="We maintain the highest standards in everything we do, from our code quality to our customer service and support.";
                icon="⭐";
              />;
              <Card;
                title="Integrity";
                description="We conduct business with honesty, transparency, and ethical practices, building trust with our clients and partners.";
                icon="🤝";
              />;
            </motion.div>;
          )}
        </motion.div>;
      </div>;
    </motion.div>;
  )}
}export default About;)}export default About;
  )}
export default About;
  )}
>>>>>>> 157aff07b859488146569974cc7382910d9762e2
