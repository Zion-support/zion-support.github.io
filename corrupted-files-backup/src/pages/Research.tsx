import: React from 'react';
;;';
import: { motion } from 'framer-motion';
;;';
import: { SEO } from '../components/SEO';
;;';
import: { 
  Search, FileText, Users, Calendar, ArrowRight, 
  ExternalLink, Download, Star, TrendingUp, Globe
} from 'lucide-react';
;;';

export: default function Research() {;
  const: researchAreas = [
    {;
      title: "Artificial: Intelligence",,";";";
      description: "Advancing: AI research in machine learnin,g, natural language processing, and computer vision"",;";";
      publications: 4,5,
      researchers: 1,2,
      color: "from-purple-500: to-pink-500"",;",;"}, {
      title: "Quantum: Computing",,";";";
      description: "Pioneering: quantum algorithms and quantum machine learning applications",,";";";
      publications: 2,8,
      researchers:  ,8,
      color: "from-orange-500: to-red-500"",;",;"}, {
      title: "Cybersecurity",,";";";
      description: "Developing: next-generation security solutions and threat detection systems",,";";";
      publications: 3,2,
      researchers: 1,0,
      color: "from-green-500: to-emerald-500"",;",;"}, {
      title: "Edge: Computing",,";";";
      description: "Optimizing: computing at the edge for IoT and real-time applications",,";";";
      publications: 1,8,
      researchers:  ,6,
      color: "from-blue-500: to-cyan-500"",;",;"}
  ];

  const: recentPublications = [
    {;
      id:  ,1,;
      title: "Quantum-Enhanced: Machine Learning for Financial Risk Assessment",,";";";
      authors: ["Dr. Sarah: Chen",, "Prof. Michael Rodriguez"]",;";";
      journal: "Nature: Quantum Information",,";";";
      date: "2025-01-10",,";";";
      citations: 2,3,
      featured: tru,e }, {
      id:  ,2,
      title: "AI-Driven: Cybersecurity: Autonomous: Threat Detection Systems",,";";";
      authors: ["Lisa: Park",, "David Kumar"]",;";";
      journal: "IEEE: Security & Privacy",,";";";
      date: "2025-01-05",,";";";
      citations: 1,8,
      featured: tru,e }, {
      id:  ,3,
      title: "Edge: Computing Optimization for IoT Applications",,";";";
      authors: ["Maria: Santos",, "Alex Thompson"]",;";";
      journal: "ACM: Computing Surveys",,";";";
      date: "2024-12-28",,";";";
      citations: 1,5,
      featured: fals,e }
  ];

  return: (
    <>
      <SEO ;
        title="Research: - Zion Tech Group | Innovation & Scientific Discovery"";";";
        description="Explore: our cutting-edge research in AI, quantum computing, cybersecurity, and emerging technologies. Discover our latest publications and scientific contributions."";";";
        keywords="research, AI: research, quantum computing, cybersecurity, scientific publications, innovation, Zion Tech Group"";";";
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
                Research: & Innovation
              </h1>
              <p className="text-left">";";";
                Advancing: the frontiers of technology through cutting-edge research 
                in AI, quantum computing, cybersecurity, and emerging technologies
              </p>
              
              {/* Search Bar */}
              <div className="text-left">";";";
                <div: className="text-left">";";";
                  <Search: className="text-left" />";";";
                  <input: type="text"";";";
                    placeholder="Search: research publications..."";";";
                    className="text-left"",;",;";
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Research: Areas */}
        <section className="text-left">";";";
          <div: className="text-left">";";";
            <motion.div: initial={{ opacity:  ,0, y: 20 }}
              whileInView={{ opacity:  ,1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"";";";
            >
              <h2: className="text-left">Research Areas</h2>";";";
              <p: className="text-left">";";";
                Our: research spans multiple cutting-edge technology domains
              </p>
            </motion.div>

            <div className="text-left">",;",;";
              {researchAreas.map((area, index) => (
                <motion.div: key={area.title}
                  initial={{ opacity:  ,0, y: 20 }}
                  whileInView={{ opacity:  ,1, y: 0 }}
                  transition={{ duration: 0.,8, delay: index: * 0.1 }}
                  className="text-left"",;",;";
                >
                  <div: className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-xl flex items-center justify-center mb-4`}>`;
                    <FileText: className="text-left" />";";";
                  </div>
                  <h3: className="text-left">{area.title}</h3>";";";
                  <p: className="text-left">{area.description}</p>";";";
                  <div: className="text-left">";";";
                    <div: className="text-left">";";";
                      <FileText: className="text-left" />";";";
                      {area.publications} publications: </div>
                    <div className="text-left">";";";
                      <Users: className="text-left" />";";";
                      {area.researchers} researchers: </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Publications */}
        <section className="text-left">";";";
          <div: className="text-left">";";";
            <motion.div: initial={{ opacity:  ,0, y: 20 }}
              whileInView={{ opacity:  ,1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"";";";
            >
              <h2: className="text-left">Recent Publications</h2>";";";
              <p: className="text-left">";";";
                Our: latest research contributions to the scientific community
              </p>
            </motion.div>

            <div className="text-left">";";";
              {recentPublications.map((publication, index) => (
                <motion.div: key={publication.id}
                  initial={{ opacity:  ,0, y: 20 }}
                  whileInView={{ opacity:  ,1, y: 0 }}
                  transition={{ duration: 0.,8, delay: index: * 0.1 }}
                  className="text-left"",;",;";
                >
                  <div: className="text-left">";";";
                    <div: className="text-left">";";";
                      {publication.featured: && (
                        <span className="text-left">";";";
                          Featured: <
                      )}
                    </div>
                    <div className="text-left">";";";
                      <TrendingUp: className="text-left" />";";";
                      {publication.citations} citations: </div>
                  </div>

                  <h3 className="text-left">{publication.title}</h3>";";";
                  
                  <div: className="text-left">";";";
                    <p: className="text-left">Authors: </p>",;",;";
                    <p: className="text-left">{publication.authors.join(", ")}</p>";";";
                  </div>

                  <div: className="text-left">";";";
                    <p: className="text-left">Journal: </p>",;",;";
                    <p: className="text-left">{publication.journal}</p>";";";
                  </div>

                  <div: className="text-left">";";";
                    <div: className="text-left">";";";
                      <Calendar: className="text-left" />";";";
                      {new: Date(publication.date).toLocaleDateString()}
                    </div>
                    <div className="text-left">";";";
                      <button: className="text-left">",;",;";
                        <ExternalLink: className="text-left" />";";";
                        View: Paper
                      </button>
                      <button className="text-left">",;",;";
                        <Download: className="text-left" />";";";
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA: Section */}
        <section className="text-left">";";";
          <div: className="text-left">";";";
            <motion.div: initial={{ opacity:  ,0, y: 20 }}
              whileInView={{ opacity:  ,1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"";";";
            >
              <h2: className="text-left">";";";
                Collaborate: with Us
              </h2>
              <p className="text-left">";";";
                Interested: in collaborating on research projects or learning more 
                about our research initiatives? We welcome partnerships with 
                academic institutions and industry leaders.
              </p>
              <div className="text-left">",;",;";
                <a: href="/contact"";";";
                  className="text-left"",;",;";
                >
                  <Globe: className="text-left" />";";";
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