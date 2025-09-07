const serviceCategories = [ {
  title: '🚀 2030 Ultra-Futuristic AI Services', icon: Brain, color: 'from-violet-600 via-purple-600 to-indigo-600', description: 'Next-generation AI consciousness and creativity', services: [ {
  name: 'AI Consciousness Evolution Platform', href: '/ai-consciousness-evolution-platform', description: 'Develop genuine AI consciousness', price: '$19, 999/month' 
}
{
  name: 'AI Emotional Intelligence Platform', href: '/ai-emotion-intelligence-platform', description: 'Real-time emotion analysis and response', price: '$1, 299/month' 
}
{
  name: 'AI Creativity Orchestrator', href: '/ai-creativity-orchestrator', description: 'Multi-model creativity fusion', price: '$1, 799/month' 
}
{
  name: 'AI Autonomous Business Manager', href: '/ai-autonomous-business-manager', description: 'Fully autonomous business operations', price: '$3, 999/month' 
}] 
}
{
  title: '⚛️ 2030 Quantum & Emerging Tech', icon: Atom, color: 'from-indigo-600 via-blue-600 to-cyan-600', description: 'Quantum computing and beyond', services: [ {
  name: 'Quantum Internet Security Gateway', href: '/quantum-internet-security-gateway', description: 'Unbreakable quantum encryption', price: '$3, 999/month' 
}
{
  name: 'Quantum Learning Accelerator', href: '/quantum-learning-accelerator', description: 'Quantum-enhanced learning paths', price: '$899/month' 
}
{
  name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading-platform', description: 'Quantum-powered trading algorithms', price: '$4, 999/month' 
}
                <div className='absolute top-full left-0 w-screen max-w-6xl bg-black/95 backdrop-blur-xl border border-purple-500/20 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-4' />;
                  <div className='p-8' />;
                    <div className='grid grid-cols-2 gap-8' />;
                      {serviceCategories && serviceCategories.map((category, index) => (<div key={index} className='space-y-4' />;
                          <div className='flex items-center space-x-3' />;

                            <div;
className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}
                             />
                              <category.icon className='w-5 h-5 text-white' />
                            </div>
                            <div />
                              <h3 className='text-lg font-semibold text-white' />

                                {category.title}
                              </h3>;
                              <p className='text-sm text-gray-400' />;
                                {category.description}
                              </p>;
                            </div>;
                          </div>;
                          <div className='space-y-2' />;
                            {category.services.map((service, serviceIndex) => (<Link;}
                                key={serviceIndex}
                                href={service.href}
className='block p-3 rounded-lg hover:bg-purple-500/10 transition-colors duration-200 group' />

                                <div className='flex items-center justify-between' />;
                                  <div />;
                                    <h4 className='text-sm font-medium text-white group-hover:text-purple-400 transition-colors' />;
                                      {service.name}
                                    </h4>;
                                    <p className='text-xs text-gray-400' />;
                                      {service.description}
                                    </p>;
                                  </div>;
                                  <span className='text-xs font-mono text-purple-400' />;
                                    {service.price}

                                  </span>
                                </div>
                              </Link>

                            ))}
                          </div>;
                        </div>;
                      ))}
      {/* Main Navigation */}
      <nav;
        className={`fixed top - 0 left - 0 right - 0 z - 50 transition - all duration - 300 ${is_scrolled;
            ? 'bg - black / 90 backdrop - blur - xl border - b border - purple - 500 / 20 shadow - 2xl';}
            : 'bg - gradient - to - r from - black / 95 via - purple - 900 / 95 to - black / 95 backdrop - blur - sm';}
        }`} />

        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8' />;
          <div className='flex items - center justify - between h - 20' />;
            {/* Logo */}
            <div className='flex items - center space - x-4' />;
              <Link href='/' className='flex items - center space - x-3 group' />;
                <div className='relative' />;
                  <div className='w - 12 h - 12 bg - gradient - to - r from - purple - 500 to - cyan - 500 rounded - xl flex items - center justify - center transform group - hover:shadow - lg hover:shadow - cyan - 400 / 40 transition - transform duration - 300' />;
                    <Zap className='w - 6 h - 6 text - white' />;
                  </div>;
                  <div className='absolute inset - 0 bg - gradient - to - r from - purple - 500 to - cyan - 500 rounded - xl blur - lg opacity - 50 group - hover:opacity - 75 transition - opacity duration - 300' /></div>;
                </div>;
                <div className='flex flex - col' />;
                  <span className='text - 2xl font - bold bg - gradient - to - r from - purple - 400 to - cyan - 400 bg - clip - text text - transparent' />;
                    Zion Tech Group;
                  </span>;
                  <span className='text - xs text - gray - 400 font - mono' />;
                    2030 Future Technology;
                  </span>                </div>            {/* Logo */}
            <div className="flex items - center space - x-4" />;"
              <Link href="/" className="flex items - center space - x-3 group" />;"
                <div className="relative" />;"
                  <div className="w - 12 h - 12 bg - gradient - to - r from - purple - 500 to - cyan - 500 rounded - xl flex items - center justify - center transform group - hover:shadow - lg hover:shadow - cyan - 400 / 40 transition - transform duration - 300" />;"
                    <Zap className="w - 6 h - 6 text - white" />;
                  </div>;"
                  <div className="absolute inset - 0 bg - gradient - to - r from - purple - 500 to - cyan - 500 rounded - xl blur - lg opacity - 50 group - hover:opacity - 75 transition - opacity duration - 300" /></div>;
                </div>;"
                <div className="flex flex - col" />;"
                  <span className="text - 2xl font - bold bg - gradient - to - r from - purple - 400 to - cyan - 400 bg - clip - text text - transparent" />;
                    Zion Tech Group;
                  </span>;"
                  <span className="text - xs text - gray - 400 font - mono" />2030 Future Technology</span>;
                </div>;
              </Link>;
            </div>;
            {/* Desktop Navigation */}
            <div className='hidden lg:flex items - center space - x-8' />;
              {main_navigation.map (item => (<Link;}
                  key={item.name}
                  href={item.href}
                  className='flex items - center space - x-2 text - gray - 300 hover:text - white transition - colors duration - 200 group' />

                  <item.icon className='w - 4 h - 4 group - hover:text - purple - 400 transition - colors' />;
                  <span />{item.name}</span>;
                </Link>))}
              {/* Services Dropdown */}
              <div className='relative group' />;
                <button className='flex items - center space - x-2 text - gray - 300 hover:text - white transition - colors duration - 200' />;
                  <Briefcase className='w - 4 h - 4' />;
                  <span /> Services</span>;
                  <ChevronDown className='w - 4 h - 4 group - hover:rotate - 180 transition - transform duration - 200' />;
                </button>;
                {/* Mega Menu */}
                <div className='absolute top - full left - 0 w - screen max - w-6xl bg - black / 95 backdrop - blur - xl border border - purple - 500 / 20 rounded - 2xl shadow - 2xl opacity - 0 invisible group - hover:opacity - 100 group - hover:visible transition - all duration - 300 transform group - hover:translate - y-0 translate - y-4' />;
                  <div className='p - 8' />;
                    <div className='grid grid - cols - 2 gap - 8' />;
                      {service_categories.map ((category, index) => (<div key={index} className='space - y-4' />;
                          <div className='flex items - center space - x-3' />;
                            <div;
                              className={`p - 2 rounded - lg bg - gradient - to - r ${category.color}`} />

                              <category.icon className='w - 5 h - 5 text - white' />;
                            </div>;
                            <div />;
                              <h3 className='text - lg font - semibold text - white' />;
                                {category.title}
                              </h3>;
                              <p className='text - sm text - gray - 400' />;
                                {category.description}
                              </p>;
                            </div>;
                          </div>;
                          <div className='space - y-2' />                            {category.services.map ((service, service_index) => (<Link;}
                                key={service_index}
                                href={service.href}
                                className='block p - 3 rounded - lg hover:bg - purple - 500 / 10 transition - colors duration - 200 group'                <Link;
                  key={item.name}
                  href={item.href}"
                  className="flex items - center space - x-2 text - gray - 300 hover:text - white transition - colors duration - 200 group" />
"
                  <item.icon className="w - 4 h - 4 group - hover:text - purple - 400 transition - colors" />;
                  <span />{item.name}</span>;
                </Link>))}
              {/* Services Dropdown */}"
              <div className="relative group" />;"
                <button className="flex items - center space - x-2 text - gray - 300 hover:text - white transition - colors duration - 200" />;"
                  <Briefcase className="w - 4 h - 4" />;
                  <span /> Services</span>;"
                  <ChevronDown className="w - 4 h - 4 group - hover:rotate - 180 transition - transform duration - 200" />;
                </button>;
                {/* Mega Menu */}"
                <div className="absolute top - full left - 0 w - screen max - w-6xl bg - black / 95 backdrop - blur - xl border border - purple - 500 / 20 rounded - 2xl shadow - 2xl opacity - 0 invisible group - hover:opacity - 100 group - hover:visible transition - all duration - 300 transform group - hover:translate - y-0 translate - y-4" />;"
                  <div className="p - 8" />;"
                    <div className="grid grid - cols - 2 gap - 8" />;"
                      {service_categories.map ((category, index) => (<div key={index} className="space - y-4" />;"
                          <div className="flex items - center space - x-3" />;
                            <div className={`p - 2 rounded - lg bg - gradient - to - r ${category.color}`} />
"
                              <category.icon className="w - 5 h - 5 text - white" />;
                            </div>;
                            <div />;"
                              <h3 className="text - lg font - semibold text - white" />{category.title}</h3>;"
                              <p className="text - sm text - gray - 400" />{category.description}</p>;
                            </div>;
                          </div>;"
                          <div className="space - y-2" />;
                            {category.services.map ((service, service_index) => (<Link;}
                                key={service_index}
                                href={service.href}
                                className='block p - 3 rounded - lg hover:bg - purple - 500 / 10 transition - colors duration - 200 group' />

                                <div className='flex items - center justify - between' />;
                                  <div />;
                                    <h4 className='text - sm font - medium text - white group - hover:text - purple - 400 transition - colors' />;
                                      {service.name}
                                    </h4>;
                                    <p className='text - xs text - gray - 400' />;
                                      {service.description}
                                    </p>;
                                  </div>;
                                  <span className='text - xs font - mono text - purple - 400' />;
                                    {service.price}
                                  </span>                                </div>                              >;"
                                <div className="flex items - center justify - between" />;
                                  <div />;"
                                    <h4 className="text - sm font - medium text - white group - hover:text - purple - 400 transition - colors" />;
                                      {service.name}
                                    </h4>;"
                                    <p className="text - xs text - gray - 400" />{service.description}</p>;
                                  </div>;"
                                  <span className="text - xs font - mono text - purple - 400" />{service.price}</span>;
                                </div>;
                              </Link>))}
                          </div>;
                        </div>))}</div>;
                  </div>;
                </div>;
              </div>;
            </div>;

            {/* CTA Buttons */}

<div className='hidden lg: flex items-center space-x-4' />
              <Link;
href='/contact'
                className='px-6 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-lg hover:shadow-purple-500/25'
               />
                Get Started;
              </Link>
              <Link;
href='/pricing'
                className='px-6 py-2 border border-purple-500/30 text-purple-400 rounded-lg hover:bg-purple-500/10 transition-all duration-200'
               />
                View Pricing;
              </Link>
            </div>

            {/* Mobile Menu Button *}
}
{
  title: '🧬 2030 Biotech & DNA Computing', icon: Microscope, color: 'from-green-600 via-emerald-600 to-teal-600', description: 'Biological computing and genetic engineering', services: [ {
  name: 'Biotech DNA Computing Platform', href: '/biotech-dna-computing-platform', description: 'DNA-based computation', price: '$5, 999/month' 
}
{
  name: 'Biotech Personalized Nutrition', href: '/biotech-personalized-nutrition', description: 'DNA-based nutrition plans', price: '$599/month' 
}
{
  name: 'AI Predictive Health Analytics', href: '/ai-predictive-health-analytics', description: 'Predictive health outcomes', price: '$1, 599/month' 
}
{
  name: 'Advanced Research Automation', href: '/advanced-research-automation', description: 'Automated research workflows', price: '$1, 999/month' 
}] 
}
{
  title: '🏙️ 2030 Enterprise IT Solutions', icon: Cpu, color: 'from-blue-600 via-cyan-600 to-teal-600', description: 'Autonomous enterprise infrastructure', services: [ {
  name: 'Autonomous DevOps Platform', href: '/autonomous-devops-platform', description: 'Fully autonomous DevOps', price: '$2, 999/month' 
}
{
  name: 'Autonomous IT Operations Center', href: '/autonomous-it-operations-center', description: 'Self-managing IT infrastructure', price: '$6, 999/month' 
}
{
  name: 'AI-Powered Enterprise Security', href: '/ai-powered-enterprise-security', description: 'AI-driven threat detection', price: '$2, 999/month' 
}
{
  name: 'Intelligent Data Governance', href: '/intelligent-data-governance', description: 'AI-powered data management', price: '$7, 999/month' 
}] 
}
{
  title: '🌌 2030 Space & Metaverse Tech', icon: Rocket, color: 'from-teal-600 via-emerald-600 to-green-600', description: 'Space exploration and digital reality', services: [ {
  name: 'Space Mining Automation Platform', href: '/space-mining-automation-platform', description: 'Automated asteroid mining', price: '$8, 999/month' 
}
{
  name: 'Metaverse Digital Reality Platform', href: '/metaverse-digital-reality-platform', description: 'Immersive virtual worlds', price: '$2, 499/month' 
}
{
  name: 'Quantum Research Platform', href: '/quantum-research-platform', description: 'Quantum computing research', price: '$3, 999/month' 
}
{
  name: 'AI Research Assistant', href: '/ai-research-assistant', description: 'Intelligent research support', price: '$899/month' 
}] 
}
{
  title: '🎯 2030 Innovative Micro SAAS', icon: Target, color: 'from-green-600 via-yellow-600 to-orange-600', description: 'Cutting-edge micro solutions', services: [ {
  name: 'AI Business Intelligence Suite 2030', href: '/ai-business-intelligence-suite-2030', description: 'AI-powered business analytics and insights', price: '$299/month' 
}
{
  name: 'AI Customer Experience Platform 2030', href: '/ai-customer-experience-platform-2030', description: 'AI-powered customer experience management', price: '$199/month' 
}
{
  name: 'AI Marketing Automation Suite 2030', href: '/ai-marketing-automation-2030', description: 'Intelligent marketing automation powered by AI', price: '$179/month' 
}
{
  name: 'AI HR Management Suite 2030', href: '/ai-hr-management-suite-2030', description: 'Intelligent human resources management powered by AI', price: '$149/month' 
}] 
}]
</a> </div> </div> </div> </div> {
  /* Main Navigation */ 
}<nav className= {
  `fixed top-0 left-0 right-0 z-50 transition-all duration-300 $ {
  isScrolled ? 'bg-black/90 backdrop-blur-xl border-b border-purple-500/20 shadow-2xl' </div> <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" ></div> </div> <div className="flex flex-col" > <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent" > Zion Tech Group </span> <span className="text-xs text-gray-400 font-mono" >2030 Future Technology</span> </div> </a> </div> <span>Services</span> <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" /> </button> > <div className="flex items-center justify-between" > <div> </div> </a>) ) 
}</div> </div>) ) 
}</div> </div> </div> </div> </div> <Link href="/contact" className="px-6 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-lg hover:shadow-purple-500/25" > Get Started </a> <Link href="/pricing" className="px-6 py-2 border border-purple-500/30 text-purple-400 rounded-lg hover:bg-purple-500/10 transition-all duration-200" > View Pricing </a> </div> </button> </div> </div> </div> {
  /* Mobile Menu */ 
}<AnimatePresence> <Link key= {
  link.name 
}href= {
  link.href 
}onClick= {
  closeMenu 
}className= {
  `p-3 rounded-lg text-center transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30 $ {
  link.color.includes ('from-') ? `bg-gradient-to-r $ {
  link.color 
}text-white` : 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
}` 
}>) ) 
}</div> </div> > Get Started </a> <Link > View Pricing </a> </div> </div> </motion.div>) 
}</AnimatePresence> </nav> </>) 
}