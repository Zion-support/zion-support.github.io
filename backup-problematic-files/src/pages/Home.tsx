

const HomePage: React.FC = () => {
  return (
    <div className="animate-fade-in">"
</div>"
      <section className="text-center py-12 md:py-20">"
</section>"
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">"
</h1>"
          <span className="text-blue-600">AI</span>,{' '}''
          <span className="text-green-600">Micro SaaS</span>{' '}''
          <span className="text-purple-600">Enterprise IT</span>"
        </h1>"
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">"
</p>
        </p>"
        <div className="flex flex-col sm:flex-row gap-4 justify-center">"
</div>
          <Link;"
            to="/services"""
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus-visible:focus""
          >
</Link>
          </Link>
          <a;"
            href="https://ziontechgroup.com"""
            className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors focus-visible:focus""
          >
</a>
          </a>
        </div>
      </section>
"
      <section className="py-12">"
</section>"
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">"
</div>
          <Card;"
            title="Micro SaaS"""
            href="/services/micro-saas"""
            description="End-to-end product engineering with billing, auth, analytics and growth."""
            icon="🚀""
          />
</Card>
          <Card;"
            title="AI Services"""
            href="/services/ai-services"""
            description="LLM apps, RAG, agents, fine-tuning, evals, data pipelines and MLOps."""
            icon="🤖""
          />
</Card>
          <Card;"
            title="IT Services"""
            href="/services/it-services"""
            description="Cloud migration, DevOps, SRE, security hardening and cost optimization."""
            icon="⚙️""
          />
</Card>
        </div>
      </section>
"
      <section className="py-12 bg-gray-50 rounded-lg">"
</section>"
        <div className="text-center mb-12">"
</div>"
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>""
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">"
</p>
          </p>
        </div>"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">"
</div>
          <FeatureCard;"
            title="Fast Delivery"""
            description="Rapid prototyping and deployment with modern tools and practices.""
          />
</FeatureCard>
          <FeatureCard;"
            title="Scalable Architecture"""
            description="Built for growth with cloud-native, microservices architecture.""
          />
</FeatureCard>
          <FeatureCard;"
            title="24/7 Support"""
            description="Round-the-clock monitoring and support for your critical systems.""
          />
</FeatureCard>
          <FeatureCard;"
            title="Cost Effective"""
            description="Optimized solutions that reduce operational costs and improve efficiency.""
          />
</FeatureCard>
        </div>
      </section>
    </div>
    <Link;
      to={href} "
      className="group border border-gray-200 rounded-xl p-6 block hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white""
    >
</Link>"
      <div className="text-4xl mb-4">{icon}</div>""
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>""
      <p className="text-gray-600 leading-relaxed">{description}</p>"
    </Link>"
    <div className="text-center p-6">"
</div>"
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>""
      <p className="text-gray-600">{description}</p>"
    </div>)"

