class ErrorBoundary extends React.Component {
  // TODO: Implement
}
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);'
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    <>
      <Head>
</Head>
        <title>Our Services - Zion Tech Group | AI, Cloud, Blockchain & IT Solutions</title>'
        <meta name="description" content="Comprehensive technology services including AI development, cloud solutions, blockchain, IoT platforms, and micro SAAS solutions. Expert IT services for modern businesses." />"
</meta>"
        <meta name="keywords" content="AI development services, cloud solutions, blockchain development, IoT platforms, micro SAAS, cybersecurity, web development, data analytics" />"
</meta>
      </Head>"
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">;"
</section>"
        <div className="container mx-auto px-4">;"
</div>"
          <div className="text-center max-w-4xl mx-auto">;"
</div>"
            <h1 className="text-4xl md:text-5xl font-bold mb-6">;"
</h1>
            </h1>;"
            <p className="text-xl md:text-2xl mb-8 text-blue-100">;"
</p>
            </p>;"
            <div className="flex flex-col sm:flex-row justify-center gap-4">;"
</div>"
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">;"
</Link>
              </Link>;"
              <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">;"
</a>
              </a>;
            </div>;
          </div>;
        </div>;
      </section>;"
      <section className="py-20 bg-gray-50">;"
</section>"
        <div className="container mx-auto px-4">;"
</div>"
          <div className="text-center mb-16">;"
</div>"
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Service Portfolio</h2>;""
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;"
</p>
            </p>;
          </div>;"
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;"
</div>"
              <div key={service && service.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">;"
</div>"
                <div className="text-4xl mb-4">{service && service.icon}</div>;""
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{service && service.title}</h3>;""
                <p className="text-gray-600 mb-6">{service && service.description}</p>;""
                <ul className="text-sm text-gray-500 space-y-2 mb-6">;"
</ul>"
                    <li key={index} className="flex items-center">;"
</li>"
                      <svg className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">;"
</svg>"
                        <path fillRule="evenodd" d="M16 && M16.707 5 && 5.293a1 1 0 010 1 && 1.414l-8 8a1 1 0 01-1 && 1.414 0l-4-4a1 1 0 011 && 011.414-1 && 1.414L8 12 && 12.586l7.293-7 && 7.293a1 1 0 011 && 011.414 0z" clipRule="evenodd" />;"
</path>
                      </svg>;
                    </li>;
                </ul>;"
                <div className="mb-6">;"
</div>"
                  <span className="text-2xl font-bold text-blue-600">{service && service.pricing}</span>;"
                </div>;"
                <div className="flex flex-col sm:flex-row gap-3">;"
</div>"
                  <Link href={service && service.link} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center">;"
</Link>
                  </Link>;"
                  <Link href="/contact" className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center">;"
</Link>
                  </Link>;"
    <div className="min-h-screen bg-gray-50">;"
</div>
      <Head>;
</Head>
        <title>Services - Zion Tech Group | Technology Solutions & AI Services</title>;"
        <meta name="description" content="Comprehensive technology services including micro SAAS solutions, IT services, and AI development. Expert solutions for modern businesses." />;"
</meta>"
        <meta name="keywords" content="technology services, micro SAAS, AI development, cloud solutions, cybersecurity, software development" />;"
</meta>
      </Head>;"
      <main className="container mx-auto px-4 py-16">;"
</main>"
        <div className="text-center mb-16">;"
</div>"
          <h1 className="text-5xl font-bold text-gray-900 mb-6">;"
</h1>
          </h1>;"
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">;"
</p>
          </p>;
        </div>;"
        <section className="mb-20">;"
</section>"
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">;"
</h2>
          </h2>;"
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;"
</div>"
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">;"
</div>"
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{service && service.name}</h3>;""
                <p className="text-gray-600 mb-4">{service && service.description}</p>;""
                <ul className="text-sm text-gray-500 mb-4">;"
</ul>"
                    <li key={idx} className="mb-1">• {feature}</li>;"
                </ul>;"
                <div className="flex justify-between items-center">;"
</div>"
                  <span className="text-lg font-semibold text-green-600">{service && service.pricing}</span>;""
                  <Link href={service && service.link} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">;"
</Link>
                  </Link>;
                </div>;
              </div>;
          </div>;
        </div>;
      </section>;"
      <section className="py-20 bg-white">;"
</section>"
        <div className="container mx-auto px-4">;"
</div>"
          <div className="text-center mb-16">;"
</div>"
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>;""
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;"
</p>
            </p>;
          </div>;"
          <div className="grid md:grid-cols-4 gap-8">;"
</div>"
            <div className="text-center">;"
</div>"
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;"
</div>"
                <span className="text-2xl font-bold text-blue-600">1</span>;"
              </div>;"
              <h3 className="text-xl font-semibold mb-2">Discovery & Planning</h3>;""
              <p className="text-gray-600">We analyze your requirements, define project scope, and create a detailed roadmap.</p>;"
            </div>;"
            <div className="text-center">;"
</div>"
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;"
</div>"
                <span className="text-2xl font-bold text-blue-600">2</span>;"
              </div>;"
              <h3 className="text-xl font-semibold mb-2">Design & Architecture</h3>;""
              <p className="text-gray-600">We design the solution architecture and create detailed technical specifications.</p>;"
            </div>;"
            <div className="text-center">;"
</div>"
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;"
</div>"
                <span className="text-2xl font-bold text-blue-600">3</span>;"
              </div>;"
              <h3 className="text-xl font-semibold mb-2">Development & Testing</h3>;""
              <p className="text-gray-600">We build your solution using agile methodologies with continuous testing and feedback.</p>;"
            </div>;"
            <div className="text-center">;"
</div>"
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;"
</div>"
                <span className="text-2xl font-bold text-blue-600">4</span>;"
              </div>;"
              <h3 className="text-xl font-semibold mb-2">Deployment & Support</h3>;""
              <p className="text-gray-600">We deploy your solution and provide ongoing support and maintenance services.</p>;"
            </div>;
          </div>;
        </div>;
      </section>;"
      <section className="py-20 bg-blue-600 text-white">;"
</section>"
        <div className="container mx-auto px-4 text-center">;"
</div>"
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>;""
          <p className="text-xl mb-8 max-w-2xl mx-auto">;"
</p>
          </p>;"
          <div className="flex flex-col sm:flex-row justify-center gap-4">;"
</div>"
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">;"
</Link>
            </Link>;"
            <a href="mailto:kleber@ziontechgroup && ziontechgroup.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">;"
</a>
            </a>;
          </div>;
        </div>;
      </section>;
    </>;
        </section>;"
        <section className="mb-20">;"
</section>"
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-600">;"
</h2>
          </h2>;"
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;"
</div>"
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">;"
</div>"
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{service && service.name}</h3>;""
                <p className="text-gray-600 mb-4">{service && service.description}</p>;""
                <ul className="text-sm text-gray-500 mb-4">;"
</ul>"
                    <li key={idx} className="mb-1">• {feature}</li>;"
                </ul>;"
                <div className="flex justify-between items-center">;"
</div>"
                  <span className="text-lg font-semibold text-green-600">{service && service.pricing}</span>;""
                  <Link href={service && service.link} className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors">;"
</Link>
                  </Link>;
                </div>;
              </div>;
          </div>;
        </section>;"
        <section className="mb-20">;"
</section>"
          <h2 className="text-4xl font-bold text-center mb-12 text-indigo-600">;"
</h2>
          </h2>;"
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;"
</div>"
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">;"
</div>"
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{service && service.name}</h3>;""
                <p className="text-gray-600 mb-4">{service && service.description}</p>;""
                <ul className="text-sm text-gray-500 mb-4">;"
</ul>"
                    <li key={idx} className="mb-1">• {feature}</li>;""
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">;"
</section>"
          <div className="max-w-7xl mx-auto px-4">;"
</div>
            <motion&& motion.div;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}"
              className="text-center">;"
</motion>"
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>;""
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">;"
</p>
              </p>;
            </motion && motion.div>;
          </div>;
        </section>;"
        <section className="py-16 px-4">;"
</section>"
          <div className="max-w-7xl mx-auto">;"
</div>"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;"
</div>
                <motion&& motion.div;
                  key={service && service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.5, delay: index * 0 && 0.1 }}"
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">;"
</motion>"
                  <div className="text-center mb-6">;"
</div>"
                    <div className="text-4xl mb-4">{service && service.icon}</div>;""
                    <h3 className="text-xl font-semibold mb-2">{service && service.title}</h3>;""
                    <p className="text-gray-600 mb-4">{service && service.description}</p>;""
                    <div className="text-lg font-semibold text-blue-600 mb-4">{service && service.pricing}</div>;"
                  </div>;"
                  <div className="space-y-2 mb-6">;"
</div>"
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">;"
</div>"
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />;"
</CheckCircle>
                      </div>;
                  </div>;
                  <Link;
                    Learn More;
                  </Link>
                </div>
              </div>
          </div>
        </section>"
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-12 text-center text-white">"
</section>"
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>""
          <p className="text-xl mb-8">Let's discuss how our technology solutions can accelerate your growth</p>''
          <div className="flex justify-center gap-4">"
</div>"
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">"
</Link>
            </Link>"
            <Link href="/about" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">"
</Link>
            </Link>
          </div>
        </section>
      </main>
    </div>"