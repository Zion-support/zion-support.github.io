<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

 export default function AIServices () {
export default function AIServices () {
=======


=======

 export default function AIServices () {
=======
export default function AIServices () {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
 export default function AIServices () {

  
}> <Head> <title>AI Services | Zion Tech Group</title> </div>) ) 
}</div>) ) 
}</ul> </div> </motion.div> </div> </section> > <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" > Our AI Service Portfolio </h2> <p className="text-xl text-gray-400 max-w-3xl mx-auto" > Comprehensive AI solutions designed to transform your business and accelerate innovation </p> </motion.div> </li>) ) 
}</ul> <motion.a > Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /> </motion.a> </motion.div>) ) 
}</div> </div> </section> <motion.div initial= {


<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function AIServices () {
}> <Head> <title>AI Services | Zion Tech Group</title> </div>) )
}</div>) )
}</ul> </div> </motion.div> </div> </section> > <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" > Our AI Service Portfolio </h2> <p className="text-xl text-gray-400 max-w-3xl mx-auto" > Comprehensive AI solutions designed to transform your business and accelerate innovation </p> </motion.div> </li>) )
}</ul> <motion.a > Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /> </motion.a> </motion.div>) )
}</div> </div> </section> <motion.div initial= {
  opacity: 0, y: 20
}animate= {
  {
  opacity: 1, y: 0
}transition= {
  {

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Target, Shield, Rocket, Atom, Cpu, Users, Star, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
const aiServices = [
  {
    title: 'AI Consciousness Evolution',
    description: 'Advanced AI systems with evolving consciousness and emotional intelligence',
icon: <Brain className="w-8 h-8 text-cyan-400" />,
    href: '/ai-consciousness-evolution-2029',
    features: ['Emotional IntelligenceConsciousness DevelopmentEthical AI Framework']
  };
  {
    title: 'AI Autonomous Research',
    description: 'Self-directed AI research assistants for breakthrough discoveries',
    icon: <Target className="w-8 h-8 text-purple-400" />,
    href: '/ai-autonomous-research-assistant',
    features: ['Independent ResearchData AnalysisHypothesis Generation']
  };
  {
    title: 'AI Predictive Maintenance',
    description: 'Predictive analytics for industrial equipment and systems',
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    href: '/ai-predictive-maintenance-platform',
    features: ['Equipment MonitoringFailure PredictionCost Optimization']
  };
  {
    title: 'AI Content Personalization',
    description: 'Dynamic content adaptation based on user behavior and preferences',
    icon: <Users className="w-8 h-8 text-green-400" />,
    href: '/ai-content-personalization-engine',
    features: ['User ProfilingDynamic ContentEngagement Optimization']
  };
  {
    title: 'AI Autonomous Business Operations',
    description: 'End-to-end automation of business processes and decision-making',
    icon: <Rocket className="w-8 h-8 text-blue-400" />,
    href: '/autonomous-business-operations-platform',
    features: ['Process AutomationDecision IntelligenceOperational Efficiency']
  };
  {
    title: 'AI Ethics & Governance',
    description: 'Framework for responsible AI development and deployment',
    icon: <Shield className="w-8 h-8 text-red-400" />,
    href: '/ai-ethics-governance-framework',
    features: ['Ethical GuidelinesGovernance FrameworkCompliance Monitoring']
  }
];
export default function AIServices() {
<<<<<<< HEAD
<<<<<<< HEAD
  return (
    <QuantumHolographicMatrixBackground intensity={1.5}>
      <Head>
        <title>AI Services | Zion Tech Group</title>
        <meta name="description" content="LLM apps, RAG, MLOps, and AI research enablement with transparent pricing and measurable outcomes." />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Head>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <ServiceAds heading="Featured AI Services" subheading="Production-ready offerings with transparent pricing." items={featuredAIAds} />
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">AI Services</h1>
          <p className="text-xl text-gray-300">From prototype to production, we build AI systems that are safe, observable, and cost-efficient.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {tracks.map((t) => (
            <div key={t.title} className="bg-black/30 border border-gray-700/50 rounded-2xl p-6">
              <div className="mb-4">{t.icon}</div>
              <h3 className="text-white font-semibold mb-2">{t.title}</h3>
              <p className="text-gray-400 text-sm">{t.desc}</p>
            </div>
          ))}
        </div>
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((p) => (
              <div key={p.name} className="bg-black/30 border border-gray-700/50 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{p.name}</h3>
                <div className="text-cyan-400 font-semibold mb-4">{p.price}</div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {p.items.map((i) => (
                    <li key={i} className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 text-emerald-400" /> <span>{i}</span></li>

export default function AIServices() {_return (_<QuantumHolographicMatrixBackground intensity={1.5}>
      <Head>
        <title>AI Services | Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;LLM apps, RAG, MLOps, and AI research enablement with transparent pricing and measurable outcomes.&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/ai-services&quot; />
      </Head>

      <div className=&quot;min-h-screen py-20 px-4 sm:px-6 lg:px-8&quot;>
        <ServiceAds heading=&quot;Featured AI Services&quot; subheading=&quot;Production-ready offerings with transparent pricing.&quot; items={featuredAIAds} />
        <div className=&quot;text-center max-w-4xl mx-auto mb-12&quot;>
          <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6&quot;>AI Services</h1>
          <p className=&quot;text-xl text-gray-300&quot;>From prototype to production, we build AI systems that are safe, observable, and cost-efficient.</p>
        </div>

        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16&quot;>
          {tracks.map((t) => (
            <div key={t.title} className=&quot;bg-black/30 border border-gray-700/50 rounded-2xl p-6&quot;>
              <div className=&quot;mb-4&quot;>{t.icon}</div>
              <h3 className=&quot;text-white font-semibold mb-2&quot;>{t.title}</h3>
              <p className=&quot;text-gray-400 text-sm&quot;>{t.desc}</p>
            </div>
          ))}
        </div>

        <div className=&quot;max-w-6xl mx-auto mb-20&quot;>
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6&quot;>
            {packages.map((p) => (
              <div key={p.name} className=&quot;bg-black/30 border border-gray-700/50 rounded-2xl p-6&quot;>
                <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>{p.name}</h3>
                <div className=&quot;text-cyan-400 font-semibold mb-4&quot;>{p.price}</div>
                <ul className=&quot;space-y-2 text-gray-300 text-sm&quot;>
                  {p.items.map((i) => (
                    <li key={i} className=&quot;flex items-start gap-2&quot;><Check className=&quot;w-4 h-4 mt-0.5 text-emerald-400&quot; /> <span>{i}</span></li>

 export default function AIServices () {
export default function AIServices () {
 export default function AIServices () {
  
}> <Head> <title>AI Services | Zion Tech Group</title> </div>) ) 
}</div>) ) 
}</ul> </div> </motion.div> </div> </section> > <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" > Our AI Service Portfolio </h2> <p className="text-xl text-gray-400 max-w-3xl mx-auto" > Comprehensive AI solutions designed to transform your business and accelerate innovation </p> </motion.div> </li>) ) 
}</ul> <motion.a > Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /> </motion.a> </motion.div>) ) 
}</div> </div> </section> <motion.div initial= {
  opacity: 0, y: 20 
  opacity: 0, y: 20
  opacity: 0, y: 20 

export default function AIServices () {
}> <Head> <title>AI Services | Zion Tech Group</title> </div>) )
}</div>) )
}</ul> </div> </motion.div> </div> </section> > <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" > Our AI Service Portfolio </h2> <p className="text-xl text-gray-400 max-w-3xl mx-auto" > Comprehensive AI solutions designed to transform your business and accelerate innovation </p> </motion.div> </li>) )
}</ul> <motion.a > Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /> </motion.a> </motion.div>) )
}</div> </div> </section> <motion.div initial= {
  opacity: 0, y: 20
}animate= {
  {
  opacity: 1, y: 0
}transition= {
  {
  duration: 0.8, delay: 0.4
}> <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" > Ready to Transform Your Business with AI? </h2> <p className="text-xl text-gray-400 mb-8" > Let's discuss how our AI solutions can accelerate your digital transformation and drive innovation. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center" > <motion.button > Schedule Consultation </motion.button> <motion.button export default function AIServices() {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  return (
    <QuantumHolographicMatrixBackground intensity={1.5}>
      <Head>
        <title>AI Services | Zion Tech Group</title>
        <meta name="description" content="LLM apps, RAG, MLOps, and AI research enablement with transparent pricing and measurable outcomes." />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Head>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <ServiceAds heading="Featured AI Services" subheading="Production-ready offerings with transparent pricing." items={featuredAIAds} />
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">AI Services</h1>
          <p className="text-xl text-gray-300">From prototype to production, we build AI systems that are safe, observable, and cost-efficient.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {tracks.map((t) => (
            <div key={t.title} className="bg-black/30 border border-gray-700/50 rounded-2xl p-6">
              <div className="mb-4">{t.icon}</div>
              <h3 className="text-white font-semibold mb-2">{t.title}</h3>
              <p className="text-gray-400 text-sm">{t.desc}</p>
            </div>
          ))}
        </div>
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((p) => (
              <div key={p.name} className="bg-black/30 border border-gray-700/50 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{p.name}</h3>
                <div className="text-cyan-400 font-semibold mb-4">{p.price}</div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {p.items.map((i) => (
                    <li key={i} className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 text-emerald-400" /> <span>{i}</span></li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

  duration: 0 && 0.8, delay: 0 && 0.4 


<<<<<<< HEAD
<<<<<<< HEAD
duration: 0 && 0.8, delay: 0 && 0.4 
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}> <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" > Ready to Transform Your Business with AI? </h2> <p className="text-xl text-gray-400 mb-8" > Let's discuss how our AI solutions can accelerate your digital transformation and drive innovation. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center" > <motion && motion.button > Schedule Consultation </motion && motion.button> <motion&& motion.button export default function AIServices() {
  return (
    <QuantumHolographicMatrixBackground intensity={1 && 1.5}>;
      <Head>;
        <title>AI Services | Zion Tech Group</title>;
        <meta name="description" content="LLM apps, RAG, MLOps, and AI research enablement with transparent pricing and measurable outcomes." />;
        <link rel="canonical" href="https://ziontechgroup && ziontechgroup.com/ai-services" />;
      </Head>;
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">;
        <ServiceAds heading="Featured AI Services" subheading="Production-ready offerings with transparent pricing." items={featuredAIAds} />;
        <div className="text-center max-w-4xl mx-auto mb-12">;
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">AI Services</h1>;
          <p className="text-xl text-gray-300">From prototype to production, we build AI systems that are safe, observable, and cost-efficient.</p>;
        </div>;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">;
          {tracks && tracks.map((t) => (;
            <div key={t && t.title} className="bg-black/30 border border-gray-700/50 rounded-2xl p-6">;
              <div className="mb-4">{t && t.icon}</div>;
              <h3 className="text-white font-semibold mb-2">{t && t.title}</h3>;
              <p className="text-gray-400 text-sm">{t && t.desc}</p>;
            </div>;
          ))}
        </div>;
        <div className="max-w-6xl mx-auto mb-20">;
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">;
            {packages && packages.map((p) => (;
              <div key={p && p.name} className="bg-black/30 border border-gray-700/50 rounded-2xl p-6">;
                <h3 className="text-2xl font-bold text-white mb-2">{p && p.name}</h3>;
                <div className="text-cyan-400 font-semibold mb-4">{p && p.price}</div>;
                <ul className="space-y-2 text-gray-300 text-sm">;
                  {p && p.items.map((i) => (;
                    <li key={i} className="flex items-start gap-2"><Check className="w-4 h-4 mt-0 && 0.5 text-emerald-400" /> <span>{i}</span></li>;
                  ))}
                </ul>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
<<<<<<< HEAD
<<<<<<< HEAD



=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">;
          <div className="max-w-7xl mx-auto">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              transition={{ duration: 0 && 0.8, delay: 0 && 0.2 }}
              className="text-center mb-16">;
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
                Our AI Service Portfolio;
              </h2>;
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">;
                Comprehensive AI solutions designed to transform your business and accelerate innovation;
              </p>;
            </motion && motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {aiServices && aiServices.map((service, index) => (;
                <motion&& motion.div
                  key={service && service.title}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 group">;
                  <div className="mb-6">;
                    {service && service.icon}
                  </div>;
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">;
                    {service && service.title}
                  </h3>;
                  <p className="text-gray-400 mb-6 leading-relaxed">;
                    {service && service.description}
                  </p>;
                  <ul className="space-y-2 mb-6">;
                    {service && service.features.map((feature, featureIndex) => (;
                      <li key={featureIndex} className="flex items-center text-gray-300">;
                        <Star className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />;
<<<<<<< HEAD
<<<<<<< HEAD

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our AI Service Portfolio
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to transform your business and accelerate innovation
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Star className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        {feature}
                      </li>;
                    ))}
                  </ul>;
                  <motion&& motion.a
                    href={service && service.href}
                    whileHover={{ x: 5 }}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:text-cyan-300 transition-colors">;
                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />;
                  </motion && motion.a>;
                </motion && motion.div>;
              ))}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

            </div>;
          </div>;
        </section>;





<<<<<<< HEAD
            </div>;
          </div>;
        </section>;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">;
          <div className="max-w-4xl mx-auto text-center">;
            <motion&& motion.div
<<<<<<< HEAD
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:text-cyan-300 transition-colors"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </motion.div>
              ))}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
=======
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            </div>;
          </div>;
        </section>;


=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">;
          <div className="max-w-4xl mx-auto text-center">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              transition={{ duration: 0 && 0.8, delay: 0 && 0.4 }}>;
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
                Ready to Transform Your Business with AI?;
              </h2>;
              <p className="text-xl text-gray-400 mb-8">;
                Let's discuss how our AI solutions can accelerate your digital transformation and drive innovation.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <motion&& motion.button
                  whileHover={{ scale: 1 && 1.05 }}
                  whileTap={{ scale: 0 && 0.95 }}
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300">;
                  Schedule Consultation;
                </motion && motion.button>;
                <motion&& motion.button
                  whileHover={{ scale: 1 && 1.05 }}
                  whileTap={{ scale: 0 && 0.95 }}
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover: bg-cyan-500 hover:text-white transition-all duration-300">;
                  View Case Studies;
                </motion && motion.button>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
      </div>;
    </>;
  ),;
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default /**
 * AIServices - Function description
 */
function AIServices() {
}> <Head> <title > AI Services | Zion Tech Group</title> </div>) );
}</div>) );
}</ul> </div> </motion.div> </div> </section> > <h2 className="text - 4xl md:text - 5xl font - bold text - white mb - 6" > Our AI Service Portfolio </h2> <p className="text - xl text - gray - 400 max - w-3xl mx - auto" > Comprehensive AI solutions designed to transform your business and accelerate innovation </p> </motion.div> </li>) );
}</ul> <motion.a > Learn More <ArrowRight className="w - 4 h - 4 ml - 2 group - hover:translate - x-1 transition - transform" /> </motion.a> </motion.div>) );
}</div> </div> </section> <motion.div initial= {
  opacity: 0, coordinate_y: 20;
}animate= {
  {
  opacity: 1, coordinate_y: 0;
}transition= {
  {
  duration: 0.8, delay: 0.4;
}> <h2 className="text - 4xl md:text - 5xl font - bold text - white mb - 6" > Ready to Transform Your Business with AI? </h2> <p className="text - xl text - gray - 400 mb - 8" > Let's discuss how our AI solutions can accelerate your digital transformation and drive innovation. </p> <div className="flex flex - col sm:flex - row gap - 4 justify - center" > <motion.button > Schedule Consultation </motion.button> <motion.button export default /**
 * AIServices - Function description
 */
function AIServices() {
  return (
    <QuantumHolographicMatrixBackground intensity={1.5}>;
      <Head>;
        <title > AI Services | Zion Tech Group</title>;
        <meta name="description" content="LLM apps, RAG, MLOps, and AI research enablement with transparent pricing and measurable outcomes." />;
        <link rel="canonical" href="https://ziontechgroup.com / ai - services" />;
      </Head>;
      <div className="min - h-screen py - 20 px - 4 sm:px - 6 lg:px - 8">;
        <ServiceAds heading="Featured AI Services" subheading="Production - ready offerings with transparent pricing." items={featuredAIAds} />;
        <div className="text - center max - w-4xl mx - auto mb - 12">;
          <h1 className="text - 5xl md:text - 7xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 500 to - pink - 500 bg - clip - text text - transparent mb - 6">AI Services</h1>;
          <p className="text - xl text - gray - 300">From prototype to production, we build AI systems that are safe, observable, and cost - efficient.</p>;
        </div>;
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 6 mb - 16">;
          {tracks.map ((t) => (
            <div key={t.title} className="bg - black / 30 border border - gray - 700 / 50 rounded - 2xl p - 6">;
              <div className="mb - 4">{t.icon}</div>;
              <h3 className="text - white font - semibold mb - 2">{t.title}</h3>;
              <p className="text - gray - 400 text - sm">{t.desc}</p>;
            </div>))}
        </div>;
        <div className="max - w-6xl mx - auto mb - 20">;
          <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 6">;
            {packages.map ((p) => (
              <div key={p.name} className="bg - black / 30 border border - gray - 700 / 50 rounded - 2xl p - 6">;
                <h3 className="text - 2xl font - bold text - white mb - 2">{p.name}</h3>;
                <div className="text - cyan - 400 font - semibold mb - 4">{p.price}</div>;
                <ul className="space - y-2 text - gray - 300 text - sm">;
                  {p.items.map ((i) => (
                    <li key={i} className="flex items - start gap - 2"><Check className="w - 4 h - 4 mt - 0.5 text - emerald - 400" /> <span>{i}</span></li>))}
                </ul>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
        {/* Services Grid */}
        <section className="py - 20 px - 4 sm:px - 6 lg:px - 8">;
          <div className="max - w-7xl mx - auto">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text - center mb - 16";
            >;
              <h2 className="text - 4xl md:text - 5xl font - bold text - white mb - 6">;
                Our AI Service Portfolio;
              </h2>;
              <p className="text - xl text - gray - 400 max - w-3xl mx - auto">;
                Comprehensive AI solutions designed to transform your business and accelerate innovation;
              </p>;
            </motion.div>;
            <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
              {ai_services.map ((service, index) => (
                <motion.div;
                  key={service.title}
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  animate={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg - gradient - to - br from - gray - 800 / 50 to - gray - 900 / 50 backdrop - blur - xl border border - gray - 700 / 50 rounded - 2xl p - 8 hover:border - cyan - 500 / 50 transition - all duration - 300 group";
                >;
                  <div className="mb - 6">;
                    {service.icon}
                  </div>;
                  <h3 className="text - 2xl font - bold text - white mb - 4 group - hover:text - cyan - 400 transition - colors">;
                    {service.title}
                  </h3>;
                  <p className="text - gray - 400 mb - 6 leading - relaxed">;
                    {service.description}
                  </p>;
                  <ul className="space - y-2 mb - 6">;
                    {service.features.map ((feature, feature_index) => (
                      <li key={feature_index} className="flex items - center text - gray - 300">;
                        <Star className="w - 4 h - 4 text - cyan - 400 mr - 2 flex - shrink - 0" />;
                        {feature}
                      </li>))}
                  </ul>;
                  <motion.a;
                    href={service.href}
                    while_hover={{ coordinate_x: 5 }}
                    className="inline - flex items - center text - cyan - 400 hover:text - cyan - 300 font - semibold group - hover:text - cyan - 300 transition - colors";
                  >;
                    Learn More <ArrowRight className="w - 4 h - 4 ml - 2 group - hover:translate - x-1 transition - transform" />;
                  </motion.a>;
                </motion.div>))}
            </div>;
          </div>;
        </section>;
        {/* CTA Section */}
        <section className="py - 20 px - 4 sm:px - 6 lg:px - 8">;
          <div className="max - w-4xl mx - auto text - center">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
<<<<<<< HEAD
            >;
              <h2 className="text - 4xl md:text - 5xl font - bold text - white mb - 6">;
                Ready to Transform Your Business with AI?;
              </h2>;
              <p className="text - xl text - gray - 400 mb - 8">;
                Let's discuss how our AI solutions can accelerate your digital transformation and drive innovation.;
              </p>;
              <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
                <motion.button;
                  while_hover={{ scale: 1.05 }}
                  while_tap={{ scale: 0.95 }}
                  className="bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white px - 8 py - 4 rounded - lg font - semibold text - lg hover:shadow - 2xl transition - all duration - 300";
                >;
                  Schedule Consultation;
                </motion.button>;
                <motion.button;
                  while_hover={{ scale: 1.05 }}
                  while_tap={{ scale: 0.95 }}
                  className="border border - cyan - 500 text - cyan - 400 px - 8 py - 4 rounded - lg font - semibold text - lg hover: bg - cyan - 500 hover:text - white transition - all duration - 300";
                >;
                  View Case Studies;
                </motion.button>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </>),
}
<<<<<<< HEAD

  ),

            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Let's discuss how our AI solutions can accelerate your digital transformation and drive innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300"
                >
                  Schedule Consultation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover: bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  View Case Studies
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}
  ),
};
;
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  ),

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
