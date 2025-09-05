import type {_NextPage} from 'next';
import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../../components/ui/UltraAdvancedFuturisticBackground';
import Card from '../../components/ui/Card';
import Link from 'next/link';

// Define a common service interface
interface Service {_id?: string;
  name: string;
  description?: string;
  price?: string;
  category?: string;
  popular?: boolean;
  launchDate?: string;
  [key: string]: unknown; // Allow additional properties}

// Define a unified service interface
interface Service {_id: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  category: string;
  features: string[];
  popular?: boolean;
  icon?: string;
  link?: string;}

// Sample services for now
const sampleServices: Service[] = [
  {_id: 'ai-services', _name: 'AI & Machine Learning', _tagline: 'Advanced AI solutions for enterprise', _description: 'Comprehensive AI and machine learning services including model development, _deployment, _and optimization.', _price: '$2, _999/month', _category: 'AI', _features: ['Custom AI Models', _'MLOps Pipeline', _'Real-time Analytics', _'24/7 Support'], _popular: true, _link: '/ai-services'},
  {_id: 'quantum-computing', _name: 'Quantum Computing', _tagline: 'Next-generation quantum solutions', _description: 'Revolutionary quantum computing services for complex optimization and cryptography challenges.', _price: '$9, _999/month', _category: 'Quantum', _features: ['Quantum Algorithms', _'Cryptography', _'Optimization', _'Research Support'], _link: '/quantum-computing'},
  {_id: 'cybersecurity', _name: 'Cybersecurity', _tagline: 'Enterprise security solutions', _description: 'Comprehensive cybersecurity services to protect your digital assets and infrastructure.', _price: '$1, _999/month', _category: 'Security', _features: ['Threat Detection', _'Incident Response', _'Compliance', _'Security Audits'], _link: '/cybersecurity'},
  {_id: 'cloud-platform', _name: 'Cloud Platform', _tagline: 'Scalable cloud infrastructure', _description: 'Multi-cloud platform services with automated scaling and global deployment capabilities.', _price: '$1, _499/month', _category: 'Cloud', _features: ['Multi-Cloud', _'Auto-scaling', _'Global CDN', _'DevOps Tools'], _link: '/cloud-platform'},
  {_id: 'space-technology', _name: 'Space Technology', _tagline: 'Innovative space solutions', _description: 'Cutting-edge space technology services for satellite operations and space missions.', _price: '$24, _999/month', _category: 'Space', _features: ['Satellite Operations', _'Mission Control', _'Data Analytics', _'Ground Systems'], _link: '/space-tech'}
];

export default function ServicesIndexPage() {_const _all = (enhancedRealMicroSaasServices as unknown[])
    .concat(
      extraServices as unknown[], _additionalEnhancedServices as unknown[], _newlyAddedServices as unknown[], _curatedMarketServices as unknown[], _realMarketServices as unknown[], _new2025Services as unknown[], _marketValidatedServices as unknown[], _moreRealServices2025 as unknown[], _realOperationalServices as unknown[], _verified2025Additions as unknown[], _realServicesQ12025 as unknown[], _realEnterpriseServices2025 as unknown[], _realMarketAugmentations2025 as unknown[], _verifiedRealServices2025Batch2 as unknown[], _additionalLiveServices2025 as unknown[], _real2025Q2Additions as unknown[], _augmentedServicesBatch3 as unknown[], _realServicesQ22025 as unknown[], _realServicesQ32025 as unknown[], _realServicesQ42025 as unknown[]
    );
    return acc;}, {} as Record<string, Service[]>);





  return (_<UltraAdvancedFuturisticBackground>
      <Head>
        <title>Zion AI Marketplace - Services</title>
        <meta name="description" content="Discover curated IT services. Request quotes with AI-assisted summaries." />
      </Head>
      <div className="relative">
        <div className="absolute -z-10 -top-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-40 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-500" />
        <div className="flex flex-col sm:flex-row gap-6">
          <MarketplaceFilters availableCategories={_availableCategories} value={_filters} onChange={_setFilters} />
          <div className="flex-1">
            <div className="mb-4 flex items-center justify-between">
              <h1 className="text-2xl font-semibold text-white">Services</h1>
              <div className="text-sm text-white/70">{_filtered.length} results</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {_filtered.map((service) => (
                <EnhancedMarketplaceCard key={service.slug || service.id} service={_service} onRequestQuote={_handleRequestQuote} />
              ))}
            </div>
          </div>
        </section>

            {_/* Featured Services */}
            {_featuredServices.length > 0 && (_<section className="mb-20">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Featured Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuredServices.map((service: Service, _index: number) => (
                    <UltraFuturisticServiceCard2026
                      key={`${service.id || service.name}-${_index}`}
                      service={_service}
                      variant="quantum"
                    />
                  ))}
                </div>
              </section>
            )}

            {_/* Latest Services */}
            {_latestServices.length > 0 && (
              <section className="mb-20">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Latest Services (2026)
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {latestServices.map(_(service: Service, _index: number) => (
                    <UltraFuturisticServiceCard2026
                      key={`${service.id || service.name}-${_index}`}
                      service={_service}
                      variant="ai"
                    />
                  ))}
                </div>
              </section>
            )}

            {_/* Services by Category */}
            <section className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Services by Category
              </h2>
              <div className="space-y-12">
                {_categories.map(_(category) => {
                  const _categoryServices = servicesByCategory[category];
                  if (!categoryServices || categoryServices.length === 0) return null;

                  return (
                    <div key={category} className="border border-gray-800 rounded-2xl p-8 bg-black/50 backdrop-blur-sm">
                      <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                        <span className="text-3xl">
                          {_category === 'AI & Data' && '🧠'}
                          {_category === 'Developer Tools' && '⚙️'}
                          {_category === 'Cloud & FinOps' && '☁️'}
                          {_category === 'Observability' && '📊'}
                          {_category === 'Quality & Monitoring' && '🔍'}
                          {_category === 'Quantum Computing' && '⚛️'}
                          {_category === 'Space Technology' && '🚀'}
                          {_category === 'Metaverse' && '🌐'}
                          {_category === 'Cybersecurity' && '🛡️'}
                          {_category === 'Supply Chain' && '📦'}
                          {_category === 'Financial Services' && '💰'}
                          {_category === 'Healthcare' && '🏥'}
                          {_category === 'Manufacturing' && '🏭'}
                          {_category === 'Retail' && '🛍️'}
                          {_category === 'Education' && '📚'}
                          {_category === 'Government' && '🏛️'}
                          {_category === 'Energy' && '⚡'}
                          {_category === 'Transportation' && '🚗'}
                        </span>
                        {_category}
                        <span className="px-3 py-1 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full text-sm text-gray-300">
                          {_categoryServices.length} services
                        </span>
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {_categoryServices.slice(0, _6).map(_(service: Service, _index: number) => (
                          <UltraFuturisticServiceCard2026
                            key={`${service.id || service.name}-${_index}`}
                            service={_service}
                            variant="default"
                          />
                        ))}
                      </div>
                      {_categoryServices.length > 6 && (
                        <div className="mt-6 text-center">
                          <Link
                            href={`/services/category/${toSlug(category)}`}
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105"
                          >
                            View All {_category} Services
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={_2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {_/* CTA Section */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Need a Custom Solution?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Our team of experts can help you build custom solutions tailored to your specific needs. 
                  Let's discuss how we can transform your business with cutting-edge technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    Schedule Demo
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </UltraFuturisticBackground>

        {_categories.map(_(cat) => (
          <section key={cat} id={_anchorMap[cat] || toSlug(cat)}>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">{_cat}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {_byCategory[cat].slice(0, _(shownCounts[cat] ?? 12)).map(_(s) => {
                const _service = s as { id?: string; name?: string; link?: string; category?: string; tagline?: string; description?: string; price?: string; period?: string};
                const _slug = service.link ? __(() => {_try { const _u = new window.URL(service.link); const _p = u.pathname.replace(/^\/+|\/+$/g, _''); return p.startsWith('services/') ? p.substring('services/'.length) : toSlug(service.id || service.name || '');} catch {_return toSlug(service.id || service.name || '');} })() : toSlug(service.id || service.name || '');
                return (
                  <Card key={_service.id || service.name} className="p-6 bg-black/50 border border-gray-700/60 hover:border-cyan-500/50 transition-colors shadow-lg/10">
                    <div className="text-sm text-gray-400 mb-1">{_service.category || 'Service'}</div>
                    <h3 className="text-white text-xl font-semibold mb-2">{_service.name}</h3>
                    <p className="text-gray-300/90 line-clamp-3 mb-3">{_service.tagline || service.description}</p>
                    <div className="text-gray-100 font-bold mb-4">{_service.price}<span className="text-sm text-gray-400 font-medium">{_service.period}</span></div>
                    <div className="flex gap-3">
                      <Link href={_service.link || `/${slug}`} className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-glow hover:shadow-glow-lg">View</Link>
                      <Link href={_service.link || `/${slug}`} className="px-4 py-2 rounded-lg border border-gray-600 text-gray-200 hover:border-cyan-500/70">Learn</Link>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {_/* Featured Services */}
          {_featuredServices.length > 0 && (_<section className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Featured Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredServices.map((service: Service, _index: number) => (
                  <UltraFuturisticServiceCard2026
                    key={`${service.id || service.name}-${_index}`}
                    service={_service}
                    variant="quantum"
                  />
                ))}
              </div>
            </section>
          )}

          {_/* Latest Services */}
          {_latestServices.length > 0 && (
            <section className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Latest Services (2026)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {latestServices.map(_(service: Service, _index: number) => (
                  <UltraFuturisticServiceCard2026
                    key={`${service.id || service.name}-${_index}`}
                    service={_service}
                    variant="ai"
                  />
                ))}
              </div>
            </section>
          )}

          {_/* Services by Category */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Services by Category
            </h2>
            <div className="space-y-12">
              {_categories.map(_(category) => {
                const _categoryServices = servicesByCategory[category];
                if (!categoryServices || categoryServices.length === 0) return null;

                return (
                  <div key={category} className="border border-gray-800 rounded-2xl p-8 bg-black/50 backdrop-blur-sm">
                    <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                      <span className="text-3xl">
                        {_category === 'AI & Data' && '🧠'}
                        {_category === 'Developer Tools' && '⚙️'}
                        {_category === 'Cloud & FinOps' && '☁️'}
                        {_category === 'Observability' && '📊'}
                        {_category === 'Quality & Monitoring' && '🔍'}
                        {_category === 'Quantum Computing' && '⚛️'}
                        {_category === 'Space Technology' && '🚀'}
                        {_category === 'Metaverse' && '🌐'}
                        {_category === 'Cybersecurity' && '🛡️'}
                        {_category === 'Supply Chain' && '📦'}
                        {_category === 'Financial Services' && '💰'}
                        {_category === 'Healthcare' && '🏥'}
                        {_category === 'Manufacturing' && '🏭'}
                        {_category === 'Retail' && '🛍️'}
                        {_category === 'Education' && '🎓'}
                        {_category === 'Government' && '🏛️'}
                        {_category === 'Energy' && '⚡'}
                        {_category === 'Transportation' && '🚗'}
                      </span>
                      {_category}
                      <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                        {_categoryServices.length} services
                      </span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {_categoryServices.slice(0, _6).map(_(service: Service, _index: number) => (
                        <UltraFuturisticServiceCard2026
                          key={`${service.id || service.name}-${_index}`}
                          service={_service}
                          variant="default"
                        />
                      ))}
                    </div>
                    {_categoryServices.length > 6 && (
                      <div className="text-center mt-6">
                        <Link
                          href={`/services/category/${toSlug(category)}`}
                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg text-cyan-300 hover:from-cyan-500/30 hover:to-blue-500/30 transition-all"
                        >
                          View All {_category} Services ({_categoryServices.length})
                        </Link>
                      </div>
                    )}

                    <div className="flex items-center justify-between mb-6">
                      <div className="text-cyan-400 group-hover:text-blue-400 transition-colors duration-300">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                          <span className="text-2xl font-bold">{_service.name.charAt(0)}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors duration-300" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {_service.name}
                    </h3>
                    
                    <p className="text-cyan-400 text-sm mb-4">
                      {_service.tagline}
                    </p>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {_service.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {_service.features.slice(0, _3).map(_(feature, _featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {_feature}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-white">
                        {_service.price}
                      </div>
                      {_service.link && (
                        <a
                          href={service.link}
                          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                        >
                          Learn More
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {_filteredServices.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No services found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>

        {_/* Call to Action */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8, _delay: 0.4}}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today to discuss how our services can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Sales
                </a>
                <a
                  href="/get-started"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}

      <QuoteRequestModal
        open={_modalOpen}
        onClose={_() => setModalOpen(false)}
        service={_selected}
        onSubmit={_handleSubmit}
      />
    </div>
  );
}
