const serviceCategories = [ {
  title: '🚀 2028 Futuristic Innovations', icon: Rocket, color: 'from-violet-600 to-purple-600', description: 'Beyond the future of technology', services: [ {
  name: 'AI Climate Prediction Platform', href: '/ai-climate-prediction-platform', description: 'Predict climate changes with 99.9% accuracy', price: '$2, 999/month' 
}
{
  name: 'Quantum Cybersecurity Firewall', href: '/quantum-cybersecurity-firewall', description: 'Unbreakable quantum encryption', price: '$4, 999/month' 
}
{
  name: 'Autonomous Drone Delivery Network', href: '/autonomous-drone-delivery-network', description: 'AI-powered drone delivery', price: '$1, 999/month' 
}
{
  name: 'AI Healthcare Diagnosis Platform', href: '/ai-healthcare-diagnosis-platform', description: 'Revolutionary medical diagnosis', price: '$3, 999/month' 
}] 
}
{
  title: '🏙️ Smart City & Infrastructure', icon: Building, color: 'from-blue-600 to-cyan-600', description: 'Intelligent urban solutions', services: [ {
  name: 'Smart City Infrastructure Management', href: '/smart-city-infrastructure-management', description: 'IoT and AI urban optimization', price: '$5, 999/month' 
}
{
  name: 'IoT Energy Management System', href: '/iot-energy-management-system', description: 'Smart energy optimization', price: '$1, 999/month' 
}
{
  name: 'Digital Twin Manufacturing Platform', href: '/digital-twin-manufacturing-platform', description: 'Virtual manufacturing replicas', price: '$4, 999/month' 
}
{
  name: 'Autonomous Manufacturing AI', href: '/autonomous-manufacturing-ai', description: 'Self-optimizing factories', price: '$6, 999/month' 
}] 
}
{
  title: '⚛️ Quantum & Advanced Tech', icon: Atom, color: 'from-indigo-600 to-blue-600', description: 'Quantum computing and beyond', services: [ {
  name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading-platform', description: 'Quantum-powered trading', price: '$8, 999/month' 
}
{
  name: 'Quantum Machine Learning Platform', href: '/quantum-machine-learning-platform', description: 'Quantum computing for ML', price: '$7, 999/month' 
}
{
  name: 'Quantum Internet Security Gateway', href: '/quantum-internet-security-gateway', description: 'Unbreakable internet security', price: '$3, 999/month' 
}
{
  name: 'Quantum Internet Protocol', href: '/quantum-internet-protocol', description: 'Next-generation internet', price: '$5, 999/month' 
}] 
}
{
  title: '🤖 AI & Machine Learning', icon: Brain, color: 'from-emerald-600 to-teal-600', description: 'Next-generation AI solutions', services: [ {
  name: 'AI Customer Service Automation', href: '/ai-customer-service-automation', description: 'Intelligent customer support', price: '$899/month' 
}
{
  name: 'AI Education Platform', href: '/ai-education-platform', description: 'Personalized learning with AI', price: '$1, 499/month' 
}
{
  name: 'AI Content Creation Suite', href: '/ai-content-creation-suite', description: 'Unlimited AI content creation', price: '$1, 299/month' 
}
{
  name: 'AI Legal Research Platform', href: '/ai-legal-research-platform', description: 'Intelligent legal research', price: '$2, 999/month' 
}] 
}
{
  title: '⛓️ Blockchain & Web3', icon: Layers, color: 'from-orange-600 to-red-600', description: 'Decentralized solutions', services: [ {
  name: 'Blockchain Supply Chain Transparency', href: '/blockchain-supply-chain-transparency', description: 'End-to-end supply chain visibility', price: '$2, 499/month' 
}
{
  name: 'Smart Contract Automation Platform', href: '/smart-contract-automation', description: 'Automated blockchain contracts', price: '$1, 999/month' 
}
{
  name: 'DeFi Yield Optimization', href: '/defi-yield-optimization', description: 'Maximize DeFi returns', price: '$3, 999/month' 
}
            <div className="relative" />;"
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-purple-400" />;

            {/* Company Links */}

{companyLinks.slice(1, 5).map(link => (}
              <Link;}
key={link.name}
                href={link.href}
                className='text-purple-200 hover:text-white transition-colors py-2 flex items-center space-x-2' />

                <link.icon className='w-4 h-4' />;
                <span />{link.name.replace(/^[🏠🚀⭐💰📊📚🎯📞🔒]/g, '').trim()}
                </span>;
              </Link>;
            ))}
          </div>;
          {/* Search and Actions */}
<div className='hidden lg:flex items-center space-x-4' />;
            {/* Search */}
            <div className='relative' />;
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-purple-400' />;
              <input;
                type='text';
                placeholder='Search services...';
                value={searchQuery}
                onChange={e = /> setSearchQuery(e.target.value)}
                className='w-64 pl-10 pr-4 py-2 bg-purple-900/30 border border-purple-500/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent';
              />;
            </div>;
            {/* CTA Button */}
            <Link;
href='/contact';
              className='px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-lg hover:shadow-purple-500/25' />

              Get Started;
            </Link>;
          </div>;
          {/* Mobile Menu Button */}
<div className='lg:hidden' />;
            <button;
              onClick={toggleMenu}
              className='text-purple-200 hover:text-white transition-colors p-2' />

              {isOpen ? (<X className='w-6 h-6' />;}
              ) : (<Menu className='w-6 h-6' />;}
              )}

            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence />;
        {isOpen && (<motion&& motion.div;}
            initial={{ opacity: 0, height: 0 }
}
{
  title: '🚗 Autonomous & Mobility', icon: Car, color: 'from-red-600 to-pink-600', description: 'Self-driving and mobility solutions', services: [ {
  name: 'Autonomous Vehicle Fleet Management', href: '/autonomous-vehicle-fleet-management', description: 'Intelligent fleet management', price: '$3, 999/month' 
}
{
  name: 'Smart Traffic Management System', href: '/smart-traffic-management', description: 'AI traffic optimization', price: '$4, 999/month' 
}
{
  name: 'Electric Vehicle Charging Network', href: '/ev-charging-network', description: 'Smart EV infrastructure', price: '$2, 999/month' 
}
                          </h4>;
                          <p className='text-xs text-purple-300' />;
                            {service.description}
                          </p>;
                          <span className='text-xs text-purple-400 font-medium' />;
                            {service.price}

                          </span>
                        </Link>

                      ))}
                    </div>;
                  </div>;
                ))}
              {/* Mobile Company Links */}
<div className='space-y-4' />;
                <h3 className='text-lg font-semibold text-white border-b border-purple-500/30 pb-2' />;
                  Company;
                </h3>;
                <div className='grid grid-cols-2 gap-4' />;
                  {companyLinks.map(link => (<Link;}
                      key={link.name}
                      href={link.href}
                      onClick={closeMenu}
className='flex items-center space-x-3 p-3 rounded-lg bg-purple-900/20 hover:bg-purple-900/40 transition-colors' />

                      <link.icon className='w-5 h-5 text-purple-400' />;
                      <span className='text-purple-200' />;
                        {link.name.replace(/^[🏠🚀⭐💰📊📚🎯📞🔒]/g, '').trim()}
                      </span>;
                    </Link>;
                  ))}

                </div>
              </div>
              {/* Mobile CTA */}

<div className='pt-4 border-t border-purple-500/30' />
                <Link;
href='/contact'

                  onClick={closeMenu}
                  className='block w-full text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300' />

                  Get Started;
                </Link>;
              </div>;
            </div>;
          </motion.div>;
        )}

      </AnimatePresence>

      {/* Search Results Dropdown */}
      {searchQuery && filteredServices.length > 0 && (<div className='absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl shadow-2xl z-50' />;
          <div className='p-4' />;
            <div className='space-y-2' />;}
              {filteredServices.slice(0, 8).map(service => (<Link;}
                  key={service.name}
                  href={service.href}
                  className='block p-3 rounded-lg bg-purple-900/20 hover:bg-purple-900/40 transition-colors' />

                  <div className='flex items-center justify-between' />;
                    <div />;
                      <h4 className='text-sm font-medium text-white' />;
                        {service.name}
                      </h4>;
                      <p className='text-xs text-purple-300' />;
                        {service.description}
                      </p>;
                    </div>;
                    <span className='text-xs text-purple-400 font-medium' />;
                      {service.price}
                    </span>;
                  </div>;
                    </span>                  </div>;
                </Link>;
      {/* Search Results Dropdown */}
      {searchQuery && filteredServices && filteredServices.length > 0 && (<div className='absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl shadow-2xl z-50' />;
          <div className='p-4' />;
            <div className='space-y-2' />;}
              {filteredServices && filteredServices.slice(0, 8).map(service => (<Link;}
                  key={service && service.name}
                  href={service && service.href}
                  className='block p-3 rounded-lg bg-purple-900/20 hover:bg-purple-900/40 transition-colors' />;
                  <div className='flex items-center justify-between' />;
                    <div />;
                      <h4 className='text-sm font-medium text-white' />;
                        {service && service.name}
                      </h4>;
                      <p className='text-xs text-purple-300' />;
                        {service && service.description}
                      </p>;
                    </div>;
                    <span className='text-xs text-purple-400 font-medium' />;
                      {service && service.price}
                    </span>                  </div>                <Link;
                  key={service && service.name}
                  href={service && service.href}"
                  className="block p-3 rounded-lg bg-purple-900/20 hover:bg-purple-900/40 transition-colors" />;"
                  <div className="flex items-center justify-between" />;
                    <div />;"
                      <h4 className="text-sm font-medium text-white" />{service && service.name}</h4>;"
                      <p className="text-xs text-purple-300" />{service && service.description}</p>;
                    </div>;"
                    <span className="text-xs text-purple-400 font-medium" />{service && service.price}</span>;
                  </div>;
                </Link>;
              ))}
            </div>;
          </div>;
        </div>;

      )}

    </nav>
  );
}
{
  title: '🏥 Healthcare & Biotech', icon: Heart, color: 'from-pink-600 to-rose-600', description: 'Advanced healthcare solutions', services: [ {
  name: 'AI Drug Discovery Platform', href: '/ai-drug-discovery-platform', description: 'Accelerate drug development', price: '$9, 999/month' 
}
{
  name: 'Personalized Medicine AI', href: '/personalized-medicine-ai', description: 'Tailored treatment plans', price: '$4, 999/month' 
}
{
  name: 'Telemedicine AI Platform', href: '/telemedicine-ai-platform', description: 'Intelligent remote healthcare', price: '$2, 999/month' 
}
{
  name: 'Medical Imaging AI', href: '/medical-imaging-ai', description: 'Advanced diagnostic imaging', price: '$3, 999/month' 
}] 
}
{
  title: '🎓 Education & Training', icon: GraduationCap, color: 'from-green-600 to-emerald-600', description: 'Next-generation learning', services: [ {
  name: 'Virtual Reality Learning Platform', href: '/vr-learning-platform', description: 'Immersive educational experiences', price: '$1, 999/month' 
}
{
  name: 'AI Tutoring System', href: '/ai-tutoring-system', description: 'Personalized AI tutoring', price: '$899/month' 
}
{
  name: 'Corporate Training AI', href: '/corporate-training-ai', description: 'Intelligent employee training', price: '$2, 499/month' 
}
{
  name: 'Language Learning AI', href: '/language-learning-ai', description: 'AI-powered language acquisition', price: '$1, 299/month' 
}] 
}
{
  title: '⚖️ Legal & Compliance', icon: Scale, color: 'from-slate-600 to-gray-600', description: 'Legal technology solutions', services: [ {
  name: 'Contract Analysis AI', href: '/contract-analysis-ai', description: 'Intelligent contract review', price: '$2, 999/month' 
}
{
  name: 'Compliance Monitoring Platform', href: '/compliance-monitoring-platform', description: 'Automated compliance tracking', price: '$3, 999/month' 
}
{
  name: 'Legal Document Automation', href: '/legal-document-automation', description: 'Automated legal documents', price: '$1, 999/month' 
}
{
  name: 'Regulatory Change Tracker', href: '/regulatory-change-tracker', description: 'Monitor regulatory updates', price: '$1, 499/month' 
}] 
}
{
  title: '🌍 Sustainability & Green Tech', icon: Leaf, color: 'from-emerald-600 to-green-600', description: 'Environmental solutions', services: [ {
  name: 'Carbon Footprint Tracking', href: '/carbon-footprint-tracking', description: 'Monitor environmental impact', price: '$1, 499/month' 
}
{
  name: 'Renewable Energy Management', href: '/renewable-energy-management', description: 'Optimize green energy', price: '$2, 999/month' 
}
{
  name: 'Waste Management AI', href: '/waste-management-ai', description: 'Intelligent waste optimization', price: '$1, 999/month' 
}
{
  name: 'Sustainable Supply Chain', href: '/sustainable-supply-chain', description: 'Green supply chain solutions', price: '$3, 999/month' 
}] 
}]
const filteredServices = serviceCategories.flatMap (category => category.services.filter (service => service.name.toLowerCase () .includes (searchQuery.toLowerCase () ) || service.description.toLowerCase () .includes (searchQuery.toLowerCase () ) ) )
return (</a> </div> </div> </div> </div> </div> <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300 -z-10" ></div> </div> <div className="hidden md:block" > <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent" > Zion Tech Group </h1> <p className="text-xs text-purple-300" >2028 Future Technology</p> </div> </a> </div> <span>Services</span> <ChevronDown className="w-4 h-4" /> </button> > <div className="flex items-center justify-between" > <div> </div> </a>) ) 
}</div> </div>) ) 
}</div> <div className="mt-6 pt-6 border-t border-purple-500/20" > <div className="flex items-center justify-between" > <p className="text-purple-300" >Explore all our cutting-edge services</p> <Link href="/services" className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30" > View All Services </a> </div> </div> </div> </div> </div> {
  /* Company Links */ 
}{
  companyLinks.slice (1, 5) .map ( (link) => (<Link key= {
  link.name 
}/> </div> {
  /* CTA Button */ 
}<Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-lg hover:shadow-purple-500/25" > Get Started </a> </div> </button> </div> </div> </div> {
  /* Mobile Menu */ 
}<AnimatePresence>) ) 
}</div> </div>) ) 
}</div>) ) 
}</div> </div> > Get Started </a> </div> </div> </motion.div>) 
}</AnimatePresence> > <div className="flex items-center justify-between" > <div> </div> </a>) ) 
}</div> </div> </div>) 
}</nav>) 
}