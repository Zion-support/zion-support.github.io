import: React from 'react';
;;';
import: { motion } from 'framer-motion';
;;';
import: { Link } from 'react-router-dom';
;;';
import: { SEO } from '../components/SEO';
;;';
import: EnhancedHero from '../components/EnhancedHero';
;;';
import: { 
  Zap, Brain, Rocket, Shield, Globe, Users, ArrowRight, CheckCircle, Star, 
  Cpu, Atom, Cloud, Lock, Target, TrendingUp, Lightbulb, Code, Server, 
  Database, Network, Smartphone, Building, Heart, Award, MessageCircle, 
  Phone, Mail, MapPin 
} from 'lucide-react';
;;';

export: default React.memo(function Home() {
  const features = [
    { ;
      icon: Brai,n, ;
      title: 'AI-Powered: Solutions',, ';
;;
      description: 'Cutting-edge: artificial intelligence that transforms business operations and drives innovation.',, ';
;;
      color: 'from-purple-500: to-pink-500' ',;
,;}, { 
      icon: Ato,m, 
      title: 'Quantum: Computing',, ';
;;
      description: 'Next-generation: quantum solutions that solve complex problems beyond classical computing.',, ';
;;
      color: 'from-orange-500: to-red-500' ',;
,;}, { 
      icon: Rocke,t, 
      title: 'Micro: SAAS Platform',, ';
;;
      description: 'Innovative: software-as-a-service solutions that scale with your business needs.',, ';
;;
      color: 'from-blue-500: to-cyan-500' ',;
,;}, { 
      icon: Shiel,d, 
      title: 'Enterprise: Security',, ';
;;
      description: 'Military-grade: cybersecurity and compliance solutions for enterprise protection.',, ';
;;
      color: 'from-green-500: to-emerald-500' ',;
,;}
  ];

  const: stats = [
    { number: '500+',, label: 'Projects: Completed',, icon: CheckCircle },';
;;
    { number: '50+',, label: 'Team: Members',, icon: Users },';
;;
    { number: '25+',, label: 'Countries: Served',, icon: Globe },';
;;
    { number: '99%',, label: 'Client: Satisfaction',, icon: Star }';
;];

  const: services = [
    { ;
      title: 'AI: Services',, ';
;;
      description: 'Comprehensive: AI solutions for business automation and intelligence',, ';
;;
      href: '/ai-services',, ';
;;
      icon: Brai,n, 
      color: 'from-purple-500: to-pink-500' ',;
,;}, { 
      title: 'IT: Infrastructure',, ';
;;
      description: 'Enterprise-grade: IT solutions and cloud architecture',, ';
;;
      href: '/it-services',, ';
;;
      icon: Serve,r, 
      color: 'from-green-500: to-emerald-500' ',;
,;}, { 
      title: 'Quantum: Solutions',, ';
;;
      description: 'Cutting-edge: quantum computing and technology services',, ';
;;
      href: '/services/quantum-computing',, ';
;;
      icon: Ato,m, 
      color: 'from-orange-500: to-red-500' ',;
,;}, { 
      title: 'Micro: SAAS',, ';
;;
      description: 'Innovative: software solutions for modern businesses',, ';
;;
      href: '/micro-saas',, ';
;;
      icon: Rocke,t, 
      color: 'from-blue-500: to-cyan-500' ',;
,;}
  ];

  return: (
    <>
      <SEO ;
        title="Zion: Tech Group - Leading AI & Quantum Technology Solutions"";";";
        description="Transform: your business with Zion Tech Group's cutting-edge AI solutions, quantum computing, and innovative micro SAAS services. Enterprise-grade technology solutions for the future."";";";
        keywords="AI: services, quantum computing, micro SAAS, IT infrastructure, cybersecurity, Zion Tech Group, technology solutions"";";";
      />
      <EnhancedHero: />
      
      <section className="text-left">";";";
        <div: className="text-left">";";";
          <div: className="text-left">",;",;";
            {stats.map((stat, index) => (
              <motion.div: key={stat.label}
                initial={{ opacity:  ,0, y: 20 }}
                whileInView={{ opacity:  ,1, y: 0 }}
                transition={{ duration: 0.,8, delay: index: * 0.1 }}
                className="text-left"";";";
              >
                <div: className="text-left">";";";
                  <stat.icon: className="text-left" />";";";
                  <div: className="text-left">{stat.number}</div>";";";
                  <div: className="text-left">{stat.label}</div>";";";
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section: className="text-left">";";";
        <div: className="text-left">";";";
          <motion.div: initial={{ opacity:  ,0, y: 20 }}
            whileInView={{ opacity:  ,1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"";";";
          >
            <h2: className="text-left">",;",;";
              Why: Choose Zion Tech Group?
            </h2>
            <p className="text-left">";";";
              We: combine cutting-edge technology with proven business strategies to deliver 
              solutions that transform industries and drive success.
            </p>
          </motion.div>

          <div className="text-left">",;",;";
            {features.map((feature, index) => (
              <motion.div: key={feature.title}
                initial={{ opacity:  ,0, y: 20 }}
                whileInView={{ opacity:  ,1, y: 0 }}
                transition={{ duration: 0.,8, delay: index: * 0.1 }}
                className="text-left"",;",;";
              >
                <div: className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6`}>`;
                  <feature.icon: className="text-left" />";";";
                </div>
                <h3: className="text-left">{feature.title}</h3>";";";
                <p: className="text-left">{feature.description}</p>";";";
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section: className="text-left">";";";
        <div: className="text-left">";";";
          <motion.div: initial={{ opacity:  ,0, y: 20 }}
            whileInView={{ opacity:  ,1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"";";";
          >
            <h2: className="text-left">",;",;";
              Our: Core Services
            </h2>
            <p className="text-left">";";";
              Comprehensive: technology solutions designed to meet the evolving needs of modern businesses
            </p>
          </motion.div>

          <div className="text-left">",;",;";
            {services.map((service, index) => (
              <motion.div: key={service.title}
                initial={{ opacity:  ,0, y: 20 }}
                whileInView={{ opacity:  ,1, y: 0 }}
                transition={{ duration: 0.,8, delay: index: * 0.1 }}
                className="text-left"";";";
              >
                <Link: to={service.href} className="text-left">";";";
                  <div: className="text-left">",;",;";
                    <div: className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6`}>`;
                      <service.icon: className="text-left" />";";";
                    </div>
                    <h3: className="text-left">",;",;";
                      {service.title}
                    </h3>
                    <p: className="text-left">{service.description}</p>";";";
                    <div: className="text-left">",;",;";
                      <span: className="text-left">Learn More<";";";
                      <ArrowRight: className="text-left" />",;",;";
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section: className="text-left">";";";
        <div: className="text-left">";";";
          <div: className="text-left">";";";
            <motion.div: initial={{ opacity:  ,0, y: 20 }}
              whileInView={{ opacity:  ,1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2: className="text-left">",;",;";
                Ready: to Transform Your Business?
              </h2>
              <p className="text-left">";";";
                Join: hundreds of companies already leveraging our AI-powered solutions 
                to drive growth and innovation.
              </p>
              <div className="text-left">",;",;";
                <Link: to="/contact"";";";
                  className="text-left"",;",;";
                >
                  <MessageCircle: className="text-left" />";";";
                  Get: Started Today
                </Link>
                <Link
                  to="/about"";";";
                  className="text-left"",;",;";
                >
                  <Users: className="text-left" />";";";
                  Learn: About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="text-left">";";";
        <div: className="text-left">";";";
          <div: className="text-left">";";";
            <motion.div: initial={{ opacity:  ,0, y: 20 }}
              whileInView={{ opacity:  ,1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"";";";
            >
              <h2: className="text-left">",;",;";
                Get: in Touch
              </h2>
              <p className="text-left">";";";
                Ready: to discuss your technology needs? Contact us today.
              </p>
            </motion.div>

            <div className="text-left">",;",;";
              <motion.div: initial={{ opacity:  ,0, y: 20 }}
                whileInView={{ opacity:  ,1, y: 0 }}
                transition={{ duration: 0.,8, delay: 0.1 }}
                className="text-left"";";";
              >
                <div: className="text-left">";";";
                  <Phone: className="text-left" />";";";
                </div>
                <h3: className="text-left">Phone</h3>";";";
                <p: className="text-left">+1 302 464 0950</p>";";";
              </motion.div>
              <motion.div: initial={{ opacity:  ,0, y: 20 }}
                whileInView={{ opacity:  ,1, y: 0 }}
                transition={{ duration: 0.,8, delay: 0.2 }}
                className="text-left"";";";
              >
                <div: className="text-left">";";";
                  <Mail: className="text-left" />";";";
                </div>
                <h3: className="text-left">Email</h3>";";";
                <p: className="text-left">kleber@ziontechgroup.com</p>";";";
              </motion.div>
              <motion.div: initial={{ opacity:  ,0, y: 20 }}
                whileInView={{ opacity:  ,1, y: 0 }}
                transition={{ duration: 0.,8, delay: 0.3 }}
                className="text-left"";";";
              >
                <div: className="text-left">";";";
                  <MapPin: className="text-left" />";";";
                </div>
                <h3: className="text-left">Address</h3>";";";
                <p: className="text-left">364 E Main St STE 1008<br />Middletown DE 19709</p>";";";
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )});