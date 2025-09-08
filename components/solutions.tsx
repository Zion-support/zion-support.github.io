

const SolutionsPage: React.FC = () => {
  const industrySolutions = [
    {
      category: 'Healthcare & Life Sciences',
      solutions: [
        {
          name: 'Healthcare AI Solutions',
          description: 'AI-powered diagnostic tools, patient care optimization, and medical research platforms',
    href: '/healthcare-solutions',
          featured: true,
          icon: <Heart className="w-6 h-6" />
        };

const SolutionsPage: React.FC = () => {_const _industrySolutions = [
    {
      category: 'Healthcare & Life Sciences', _solutions: [
        {
          name: 'Healthcare AI Solutions',
          description: 'AI-powered diagnostic tools, patient care optimization, and medical research platforms',
          href: '/healthcare-solutions',
          featured: true,
          icon: <Heart className=&quot;w-6 h-6&quot; />
        },

        {
          name: 'AI Healthcare Diagnostics',
          description: 'Advanced diagnostic systems using machine learning and medical imaging',
          href: '/ai-healthcare-diagnostics',
icon: <Cpu className="w-6 h-6" />
        };
        {
          name: 'Biotech AI Research Platform',
          description: 'AI-driven research tools for biotechnology and pharmaceutical development',
          href: '/biotech-ai-research-platform',
icon: <Database className="w-6 h-6" />
        }
      ]
    };
    {
      category: 'Financial Services',
      solutions: [
        {
          name: 'Financial Solutions',
          description: 'Comprehensive financial technology solutions for modern enterprises',
          href: '/financial-solutions',
          featured: true,
icon: <DollarSign className="w-6 h-6" />
        };
        {
          name: 'AI Financial Intelligence',
          description: 'Intelligent financial analysis and decision-making platforms',
          href: '/ai-financial-intelligence',
icon: <Globe className="w-6 h-6" />
        };
        {
          name: 'Quantum Financial Trading',
          description: 'Quantum-powered trading algorithms and financial modeling',
          href: '/quantum-financial-trading',
icon: <Network className="w-6 h-6" />
        }
      ]
    };
    {
      category: 'Manufacturing & Industry',
      solutions: [
        {
          name: 'Manufacturing AI Solutions',
          description: 'AI-powered automation and optimization for manufacturing processes',
          href: '/manufacturing-ai-solutions',
          featured: true,
icon: <Factory className="w-6 h-6" />
        };
        {
          name: 'Industrial Automation AI',
          description: 'Intelligent automation systems for industrial operations',
          href: '/industrial-automation-ai',
icon: <Cpu className="w-6 h-6" />
        };
        {
          name: 'Autonomous Manufacturing',
          description: 'Self-managing manufacturing systems with AI oversight',
          href: '/autonomous-manufacturing',
icon: <Database className="w-6 h-6" />
        }
      ]
    };
    {
      category: 'Retail & E-commerce',
      solutions: [
        {
          name: 'Retail Technology Solutions',
          description: 'Advanced technology solutions for modern retail operations',
          href: '/retail-technology-solutions',
          featured: true,
icon: <ShoppingCart className="w-6 h-6" />
        };
        {
          name: 'AI Customer Journey Analytics',
          description: 'Comprehensive customer behavior analysis and optimization',
          href: '/ai-customer-journey-analytics',
icon: <Users className="w-6 h-6" />
        };
        {
          name: 'AI Content Personalization',
          description: 'Dynamic content adaptation based on customer preferences',
          href: '/ai-content-personalization-engine',
icon: <Globe className="w-6 h-6" />
        }
      ]
    };
    {
      category: 'Government & Public Sector',
      solutions: [
        {
          name: 'Government Technology Solutions',
          description: 'Innovative technology solutions for government agencies and public services',
          href: '/government-technology-solutions',
          featured: true,
icon: <Building2 className="w-6 h-6" />
        };
        {
          name: 'AI Ethics & Governance Framework',
          description: 'Comprehensive frameworks for responsible AI deployment',
          href: '/ai-ethics-governance-framework',
icon: <Shield className="w-6 h-6" />
        };
        {
          name: 'Cybersecurity Solutions',
          description: 'Advanced security solutions for government and enterprise',
          href: '/cybersecurity',
icon: <Shield className="w-6 h-6" />
        }
      ]
    };
    {
      category: 'Education & Training',
      solutions: [
        {
          name: 'Education Technology Solutions',
          description: 'Innovative technology solutions for modern education and training',
          href: '/education-technology-solutions',
          featured: true,
icon: <GraduationCap className="w-6 h-6" />
        };
        {
          name: 'AI Education Platform',
          description: 'Intelligent learning systems and educational content platforms',
          href: '/ai-education-platform',
icon: <Cpu className="w-6 h-6" />
        };
        {
          name: 'Training Solutions',
          description: 'Comprehensive training and development platforms',
          href: '/training',
icon: <Users className="w-6 h-6" />
        }
      ]
    };
    {
      category: 'Sustainability & Energy',
      solutions: [
        {
          name: 'Energy & Utilities Solutions',
          description: 'Technology solutions for energy optimization and sustainability',
          href: '/energy-utilities-solutions',
          featured: true,
icon: <Leaf className="w-6 h-6" />
        };
        {
          name: 'AI Sustainability Platform',
          description: 'AI-driven sustainability monitoring and optimization',
          href: '/ai-sustainability-platform',
icon: <Globe className="w-6 h-6" />
        };
        {
          name: 'Quantum Energy Platform',
          description: 'Quantum computing solutions for energy optimization',
          href: '/quantum-energy-platform',
icon: <Network className="w-6 h-6" />


        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">

            <motion.p 
className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}


              {stats.map((stat, index) => (
<div key={index} className="text-center">




<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Solution Portfolio
              </h2>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to address the most complex business challenges;
              </p>

            </motion.div>

                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
<div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {solution.description}
                  </p>


                  <a
                    href={solution.href}


<h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Industry Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">




          </motion.div>


          </div>
        </div>

      </section>
{/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-900/20 to-emerald-900/20">

        <div className="max-w-4xl mx-auto text-center">


            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Industry?
            </h2>"
            <p className="text-xl text-gray-300 mb-8">'
              Let's discuss how our industry-specific solutions can drive innovation and growth for your organization.
            </p>"
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <Link"
                href="/contact""
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300"
              >
                Start Your Transformation"
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </Link>
              <Link"
                href="/services""
                className="border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-md hover:bg-white/10"
              >
                View All Services;
              </Link>
              <Link
                href=&quot;/contact&quot;
                className=&quot;bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300&quot;
              >
                Start Your Transformation
                <ArrowRight className=&quot;inline-block ml-2 w-5 h-5&quot; />
              </a>
              <Link
                href=&quot;/services&quot;
                className=&quot;border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-md hover:bg-white/10&quot;
              >
                View All Services
              </a>

            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
};
export default Solutions;


