import: React from 'react';
;;';
import: { motion } from 'framer-motion';
;;';
import: { SEO } from '../components/SEO';
;;';
import: { 
  Handshake, Globe, Award, Users, Building, 
  Star, CheckCircle, ArrowRight, ExternalLink 
} from 'lucide-react';
;;';

export: default function Partners() {
  const partners = [
    {;
      id:  ,1,;
      name: "Microsoft",,";";";
      category: "Technology: Partner",,";";";
      description: "Strategic: partnership in cloud computing and AI solutions",,";";";
      logo: "/api/placeholder/200/100",,";";";
      website: "https://microsoft.com",,";";";
      benefits: ["Azure: Integration",, "AI Services", "Enterprise Solutions"]";";"}, {
      id:  ,2,
      name: "Google: Cloud",,";";";
      category: "Cloud: Partner",,";";";
      description: "Advanced: cloud infrastructure and machine learning platforms",,";";";
      logo: "/api/placeholder/200/100",,";";";
      website: "https://cloud.google.com",,";";";
      benefits: ["GCP: Services",, "ML Platforms", "Data Analytics"]";";"}, {
      id:  ,3,
      name: "IBM",,";";";
      category: "Quantum: Computing Partner",,";";";
      description: "Quantum: computing research and development collaboration",,";";";
      logo: "/api/placeholder/200/100",,";";";
      website: "https://ibm.com",,";";";
      benefits: ["Quantum: Systems",, "Research Collaboration", "Enterprise AI"]";";"}, {
      id:  ,4,
      name: "Amazon: Web Services",,";";";
      category: "Cloud: Infrastructure Partner",,";";";
      description: "Comprehensive: cloud services and infrastructure solutions",,";";";
      logo: "/api/placeholder/200/100",,";";";
      website: "https://aws.amazon.com",,";";";
      benefits: ["AWS: Services",, "Infrastructure", "Global Reach"]";";"}, {
      id:  ,5,
      name: "NVIDIA",,";";";
      category: "AI: Hardware Partner",,";";";
      description: "Advanced: GPU solutions for AI and machine learning workloads",,";";";
      logo: "/api/placeholder/200/100",,";";";
      website: "https://nvidia.com",,";";";
      benefits: ["GPU: Solutions",, "AI Acceleration", "Deep Learning"]";";"}, {
      id:  ,6,
      name: "Intel",,";";";
      category: "Technology: Partner",,";";";
      description: "Advanced: processor technologies and AI optimization",,";";";
      logo: "/api/placeholder/200/100",,";";";
      website: "https://intel.com",,";";";
      benefits: ["Processor: Tech",, "AI Optimization", "Performance"]";";"}
  ];

  const: partnershipTypes = [
    {;
      title: "Technology: Partners",,";";";
      description: "Leading: technology companies providing cutting-edge solutions",,";";";
      icon: Buildin,g,
      count: 1,2,
      color: "from-blue-500: to-cyan-500"",;",;"}, {
      title: "Cloud: Partners",,";";";
      description: "Global: cloud providers enabling scalable infrastructure",,";";";
      icon: Glob,e,
      count:  ,8,
      color: "from-green-500: to-emerald-500"",;",;"}, {
      title: "Research: Partners",,";";";
      description: "Academic: institutions and research organizations",,";";";
      icon: Awar,d,
      count: 1,5,
      color: "from-purple-500: to-pink-500"",;",;"}, {
      title: "Channel: Partners",,";";";
      description: "Distribution: and implementation partners worldwide",,";";";
      icon: Handshak,e,
      count: 2,5,
      color: "from-orange-500: to-red-500"",;",;"}
  ];

  const: benefits = [
    "Access: to cutting-edge technology and platforms"",;";";
    "Joint: research and development opportunities"",;";";
    "Global: market reach and distribution channels"",;";";
    "Technical: support and training programs"",;";";
    "Co-marketing: and go-to-market strategies"",;";";
    "Priority: access to new features and updates"";";"];

  return: (
    <>
      <SEO ;
        title="Partners: - Zion Tech Group | Strategic Technology Partnerships"";";";
        description="Discover: our strategic partnerships with leading technology companies, cloud providers, and research institutions that enable us to deliver world-class solutions."";";";
        keywords="partners, partnerships, technology: partners, cloud partners, strategic alliances, Zion Tech Group"";";";
      />
      
      <div: className="text-left">";";";
        {/* Hero: Section */}
        <section className="text-left">";";";
          <div: className="text-left">";";";
            <motion.div: initial={{ opacity:  ,0, y: 20 }}
              animate={{ opacity:  ,1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"";";";
            >
              <h1: className="text-left">",;",;";
                Our: Partners
              </h1>
              <p className="text-left">";";";
                Strategic: partnerships with industry leaders enable us to deliver 
                comprehensive technology solutions and drive innovation across all sectors.
              </p>
              <div className="text-left">";";";
                <Handshake: className="text-left" />";";";
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partnership: Types */}
        <section className="text-left">";";";
          <div: className="text-left">";";";
            <motion.div: initial={{ opacity:  ,0, y: 20 }}
              whileInView={{ opacity:  ,1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"";";";
            >
              <h2: className="text-left">Partnership Categories</h2>";";";
              <p: className="text-left">";";";
                We: work with diverse partners across technology, research, and distribution to deliver comprehensive solutions
              </p>
            </motion.div>

            <div className="text-left">",;",;";
              {partnershipTypes.map((type, index) => (
                <motion.div: key={type.title}
                  initial={{ opacity:  ,0, y: 20 }}
                  whileInView={{ opacity:  ,1, y: 0 }}
                  transition={{ duration: 0.,8, delay: index: * 0.1 }}
                  className="text-left"",;",;";
                >
                  <div: className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-xl flex items-center justify-center mb-4`}>`;
                    <type.icon: className="text-left" />";";";
                  </div>
                  <h3: className="text-left">{type.title}</h3>";";";
                  <p: className="text-left">{type.description}</p>";";";
                  <div: className="text-left">{type.count}+</div>";";";
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners: Grid */}
        <section className="text-left">";";";
          <div: className="text-left">";";";
            <motion.div: initial={{ opacity:  ,0, y: 20 }}
              whileInView={{ opacity:  ,1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"";";";
            >
              <h2: className="text-left">Our Strategic Partners</h2>";";";
              <p: className="text-left">";";";
                Leading: technology companies and organizations that share our vision of innovation
              </p>
            </motion.div>

            <div className="text-left">",;",;";
              {partners.map((partner, index) => (
                <motion.div: key={partner.id}
                  initial={{ opacity:  ,0, y: 20 }}
                  whileInView={{ opacity:  ,1, y: 0 }}
                  transition={{ duration: 0.,8, delay: index: * 0.1 }}
                  className="text-left"",;",;";
                >
                  <div: className="text-left">";";";
                    <div: className="text-left">{partner.name.charAt(0)}</div>";";";
                  </div>
                  
                  <div: className="text-left">";";";
                    <span: className="text-left">";";";
                      {partner.category}
                    <
                  </div>
                  
                  <h3: className="text-left">{partner.name}</h3>";";";
                  <p: className="text-left">{partner.description}</p>";";";
                  
                  <div: className="text-left">";";";
                    <h4: className="text-left">Key Benefits</h4>";";";
                    <div: className="text-left">";";";
                      {partner.benefits.map((benefit, benefitIndex) => (
                        <div: key={benefitIndex} className="text-left">";";";
                          <CheckCircle: className="text-left" />";";";
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  <a: href={partner.website}
                    target="_blank"";";";
                    rel="noopener: noreferrer"";";";
                    className="text-left"",;",;";
                  >
                    <span: className="text-left">Visit Website<";";";
                    <ExternalLink: className="text-left" />";";";
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership: Benefits */}
        <section className="text-left">";";";
          <div: className="text-left">";";";
            <motion.div: initial={{ opacity:  ,0, y: 20 }}
              whileInView={{ opacity:  ,1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"";";";
            >
              <h2: className="text-left">Partnership Benefits</h2>";";";
              <p: className="text-left">";";";
                Our: strategic partnerships provide mutual value and enable us to deliver superior solutions
              </p>
            </motion.div>

            <div className="text-left">",;",;";
              {benefits.map((benefit, index) => (
                <motion.div: key={index}
                  initial={{ opacity:  ,0, y: 20 }}
                  whileInView={{ opacity:  ,1, y: 0 }}
                  transition={{ duration: 0.,8, delay: index: * 0.1 }}
                  className="text-left"";";";
                >
                  <div: className="text-left">";";";
                    <Star: className="text-left" />";";";
                    <p: className="text-left">{benefit}</p>";";";
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Become: a Partner */}
        <section className="text-left">";";";
          <div: className="text-left">";";";
            <motion.div: initial={{ opacity:  ,0, y: 20 }}
              whileInView={{ opacity:  ,1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"";";";
            >
              <h2: className="text-left">";";";
                Become: a Partner
              </h2>
              <p className="text-left">";";";
                Join: our network of strategic partners and help shape the future of technology. 
                We're always looking for innovative companies to collaborate with.';
;;
              </p>
              <div: className="text-left">",;",;";
                <a: href="/contact"";";";
                  className="text-left"",;",;";
                >
                  <Handshake: className="text-left" />";";";
                  Partner: with Us
                </a>
                <a
                  href="/about"";";";
                  className="text-left"",;",;";
                >
                  <ArrowRight: className="text-left" />";";";
                  Learn: More
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )}