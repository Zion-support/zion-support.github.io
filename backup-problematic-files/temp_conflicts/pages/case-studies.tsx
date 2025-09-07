import React from 'react',;
import Head from 'next/head',;
import Link from 'next/link',;
import SmartHeader from '../components/SmartHeader',;
import SmartFooter from '../components/SmartFooter',;
;
export default function CaseStudies() {;
  const caseStudies = [;
    {;
      id:'enterprise-ai-transformation',;
      title:'Enterprise AI Transformation',;
      company:'Global Manufacturing Corp',;
      industry:'Manufacturing',;
      challenge:'Complex supply chain management with 50+ locations worldwide, manual processes causing delays and inefficiencies.',;
      solution:'Implemented AI Autonomous Business Manager with predictive analytics and automated decision-making.',;
      results:[;
        '40% reduction in supply chain delays25% improvement in inventory management',;
        '30% cost savings in operations99.9% uptime achieved';']
      ],;
      technologies:['AI/MLPredictive Analytics', 'AutomationCloud Infrastructure'],;
      duration:'6 months',;
      roi:'300%',;
    },;
      id:'cybersecurity-automation',;
      title:'Cybersecurity Automation Platform',;
      company:'Financial Services Inc',;
      industry:'Financial Services',;
      challenge:'Increasing cyber threats, manual security monitoring, compliance requirements, and 24/7 security operations.',;
      solution:'Deployed AI-Powered Enterprise Security with autonomous threat detection and response.',;
        '95% faster threat detection80% reduction in false positives',;
        '100% compliance achievementZero security breaches';']
      technologies:['AI SecurityThreat Intelligence', 'AutomationCompliance'],;
      duration:'4 months',;
      roi:'400%',;
      id:'ai-content-automation',;
      title:'AI Content Creation Revolution',;
      company:'Digital Marketing Agency',;
      industry:'Marketing & Advertising',;
      challenge:'High content creation costs, inconsistent quality, slow turnaround times, and scaling challenges.',;
      solution:'Integrated AI Content Generation Platform with personalized content creation and optimization.',;
        '70% reduction in content creation time60% improvement in content quality',;
        '3x increase in content output45% cost savings';']
      technologies:['NLPContent AI', 'PersonalizationAnalytics'],;
      duration:'3 months',;
      roi:'250%',;
      id:'quantum-computing-research',;
      title:'Quantum Computing Research Platform',;
      company:'Research Institute',;
      industry:'Research & Development',;
      challenge:'Complex computational problems, limited computing resources, and need for breakthrough research capabilities.',;
      solution:'Deployed Quantum Cloud Infrastructure with AI-powered research automation.',;
        '1000x faster computation for specific problemsBreakthrough discoveries in 3 research areas',;
        '50% reduction in research timeNew patent applications filed';']
      technologies:['Quantum ComputingAI Research', 'Cloud NativeResearch Automation'],;
      duration:'12 months',;
      roi:'500%',;
      id:'healthcare-ai-diagnostics',;
      title:'Healthcare AI Diagnostics System',;
      company:'Regional Medical Center',;
      industry:'Healthcare',;
      challenge:'High diagnostic error rates, long wait times, limited specialist availability, and increasing patient load.',;
      solution:'Implemented AI Autonomous Healthcare Physician with diagnostic assistance and patient monitoring.',;
        '90% reduction in diagnostic errors60% faster diagnosis times',;
        '40% improvement in patient outcomes24/7 diagnostic availability';']
      technologies:['Medical AIComputer Vision', 'DiagnosticsPatient Monitoring'],;
      duration:'8 months',;
      roi:'350%',;
      id:'blockchain-analytics-platform',;
      title:'Blockchain Analytics & Governance',;
      company:'Cryptocurrency Exchange',;
      industry:'Blockchain & Finance',;
      challenge:'Complex blockchain transactions, regulatory compliance, fraud detection, and market analysis needs.',;
      solution:'Built AI Blockchain Analytics platform with governance and compliance automation.',;
        '99.9% fraud detection accuracyReal-time compliance monitoring',;
        '50% reduction in regulatory reporting timeEnhanced market insights';']
      technologies:['BlockchainAI Analytics', 'ComplianceReal-time Processing'],;
      duration:'5 months',;
      roi:'280%',;
    }
  return (;
    <>;
      <Head>;

        <title>Case Studies - Zion Tech Group | Client Success Stories & AI Implementations</title>;
        <meta name="description" content="Explore real-world case studies of Zion Tech Group's AI solutions. See how we've transformed businesses across industries with autonomous technology." />;"
</meta>"
        <meta name="keywords" content="case studies, AI implementations, client success stories, business transformation, Zion Tech Group" />;"
        <meta property="og:title" content="Case Studies - Zion Tech Group" />;"
        <meta property="og:description" content="Real-world examples of AI transformation and business success." />;"
        <meta property="og:type" content="website" />;"
        <meta property="og:url" content="https://ziontechgroup.com/case-studies" />;"
        <link rel="canonical" href="https://ziontechgroup.com/case-studies" />;"
</link>
      ;"
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">;"
</div>
        <SmartHeader />;
"
        <main id="main-content" className="pt-16">;"
</main>"
          <section className="relative py-20 px-6">;"
</section>"
            <div className="mx-auto max-w-7xl">;"
</div>"
              <div className="text-center">;"
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent mb-6">;"
</h1>
                </h1>;"
                <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">;"
</p>
                </p>;"
                <div className="flex flex-col sm:flex-row gap-4 justify-center">;"
                  <Link ;"
                    href="/services" ;""
                    className="px-8 py-4 bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105";"
                  >;

                    href="/contact" ;""
                    className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300";"

                </div>;
          </section>;"
          <section className="py-20 px-6 bg-white/5">;"
              <div className="grid md:grid-cols-4 gap-8 text-center">;"
                <div>;
                  <div className="text-5xl font-bold text-fuchsia-400 mb-2">50+</div>;""
                  <div className="text-white/70">Successful Implementations</div>;"
                  <div className="text-5xl font-bold text-cyan-400 mb-2">15+</div>;""
                  <div className="text-white/70">Industries Served</div>;"
                  <div className="text-5xl font-bold text-green-400 mb-2">300%</div>;""
                  <div className="text-white/70">Average ROI</div>;"
                  <div className="text-5xl font-bold text-purple-400 mb-2">99.9%</div>;""
                  <div className="text-white/70">Client Satisfaction</div>;"
          <section className="py-20 px-6">;"
              <div className="text-center mb-16">;"
                <h2 className="text-4xl font-bold text-white mb-6">Featured Success Stories</h2>;""
                <p className="text-xl text-white/70 max-w-3xl mx-auto">;"
                </p>;
              </div>;"
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;"
                  <div key={study.id} className="bg-white/5 rounded-lg border border-white/10 overflow-hidden hover:border-fuchsia-500/30 transition-all duration-300 hover:scale-105">;"
                    <div className="p-6">;"
                      <div className="text-4xl mb-4">{study.image}</div>;""
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-fuchsia-500/20 border border-fuchsia-500/30 text-fuchsia-300 text-xs font-medium mb-4">;"
                      <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>;""
                      <p className="text-white/60 text-sm mb-4">{study.company}</p>;""
                      <div className="space-y-3 mb-6">;"
                          <h4 className="text-white font-semibold text-sm mb-1">Challenge:</h4>;""
                          <p className="text-white/70 text-sm">{study.challenge}</p>;"
                          <h4 className="text-white font-semibold text-sm mb-1">Solution:</h4>;""
                          <p className="text-white/70 text-sm">{study.solution}</p>;"
                      <div className="mb-6">;"
                        <h4 className="text-white font-semibold text-sm mb-2">Key Results:</h4>;""
                        <ul className="space-y-1">;"
</ul>"
                            <li key={index} className="text-white/70 text-sm flex items-start">;"
</li>
                            </li>;
                        </ul>;
                      <div className="grid grid-cols-2 gap-4 mb-6 text-sm">;"
                          <span className="text-white/60">Duration:</span>;""
                          <div className="text-white font-semibold">{study.duration}</div>;"
                          <span className="text-white/60">ROI:</span>;""
                          <div className="text-white font-semibold">{study.roi}</div>;"
                        <h4 className="text-white font-semibold text-sm mb-2">Technologies:</h4>;""
                        <div className="flex flex-wrap gap-2">;"
                            <span key={index} className="px-2 py-1 bg-white/10 rounded text-xs text-white/80">;"
</span>
                            </span>;
                      <Link ;
                        href={`/case-studies/${study.id}`}"
                        className="w-full px-4 py-2 bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 text-center block";"

                <h2 className="text-4xl font-bold text-white mb-6">Industries We Transform</h2>;""
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">;"
                  <div className="w-20 h-20 bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">;"
                  <h3 className="text-lg font-bold text-white mb-2">Manufacturing</h3>;""
                  <p className="text-white/60 text-sm">Supply chain optimization, predictive maintenance, quality control</p>;"
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">;"
                  <h3 className="text-lg font-bold text-white mb-2">Financial Services</h3>;""
                  <p className="text-white/60 text-sm">Risk management, fraud detection, compliance automation</p>;"
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">;"
                  <h3 className="text-lg font-bold text-white mb-2">Healthcare</h3>;""
                  <p className="text-white/60 text-sm">Diagnostic assistance, patient monitoring, research automation</p>;"
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg flex items-center justify-center mx-auto mb-4">;"
                  <h3 className="text-lg font-bold text-white mb-2">Technology</h3>;""
                  <p className="text-white/60 text-sm">AI development, automation, cloud infrastructure</p>;"
                <h2 className="text-4xl font-bold text-white mb-6">What Our Clients Say</h2>;""
              <div className="grid md:grid-cols-3 gap-8">;"
                <div className="bg-white/5 rounded-lg p-6 border border-white/10">;"
                  <div className="flex items-center mb-4">;"
                    <div className="w-12 h-12 bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-full flex items-center justify-center mr-4">;"
                      <div className="text-white font-semibold">John Smith</div>;""
                      <div className="text-white/60 text-sm">CTO, Global Manufacturing</div>;"
                  <p className="text-white/80 text-sm">;"
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">;"
                      <div className="text-white font-semibold">Sarah Johnson</div>;""
                      <div className="text-white/60 text-sm">CEO, Digital Marketing Agency</div>;"
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-4">;"
                      <div className="text-white font-semibold">Dr. Michael Chen</div>;""
                      <div className="text-white/60 text-sm">Research Director, Institute</div>;"
            <div className="mx-auto max-w-4xl text-center">;"
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Write Your Success Story?</h2>;""
              <p className="text-xl text-white/80 mb-8">;"


          </section>;
        </main>;
        <SmartFooter />;

    </>;)
  );
"`;