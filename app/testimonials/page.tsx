import Link from 'next/link';

export const metadata = {
  title: 'Client Testimonials | Zion Tech Group',
  description: 'Hear from our satisfied clients about their experience with our AI and IT solutions.',
};

export default function TestimonialsPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16 py-12 bg-gradient-to-br from-purple-50 to-pink-50">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          What Our Clients Say
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover why leading companies trust Zion Tech Group for their AI and IT transformation needs
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Featured Testimonial */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-6xl mb-4">⭐⭐⭐⭐⭐</div>
              <blockquote className="text-2xl font-medium mb-6 italic">
                "Zion Tech Group transformed our entire data infrastructure. Their AI solutions reduced our processing time by 90% and saved us over $500K annually. The team's expertise and dedication are unmatched."
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl mr-4">
                  👨‍💼
                </div>
                <div>
                  <div className="font-semibold text-lg">Michael Chen</div>
                  <div className="opacity-90">CTO, TechCorp Inc.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Testimonial
            quote="The AI workflow automation platform has revolutionized our operations. What used to take days now happens in hours, and our team can focus on strategic initiatives."
            author="Sarah Johnson"
            position="Operations Director"
            company="FinanceFlow Ltd."
            rating={5}
            service="AI Workflow Automation"
            avatar="👩‍💼"
          />
          
          <Testimonial
            quote="Zion Tech Group's cloud migration was seamless. Zero downtime and incredible cost savings. Their expertise in cloud architecture is outstanding."
            author="David Rodriguez"
            position="IT Manager"
            company="RetailMax Corporation"
            rating={5}
            service="Cloud Migration"
            avatar="👨‍💻"
          />

          <Testimonial
            quote="Our AI virtual assistant handles 80% of customer inquiries with 95% satisfaction. The ROI was evident within the first month."
            author="Emily Watson"
            position="Customer Success Manager"
            company="HealthTech Solutions"
            rating={5}
            service="AI Virtual Assistant"
            avatar="👩‍⚕️"
          />

          <Testimonial
            quote="The cybersecurity implementation was comprehensive and thorough. We feel completely secure with our new zero-trust architecture."
            author="Robert Kim"
            position="Security Director"
            company="ManufacturingPro Inc."
            rating={5}
            service="Cybersecurity Consulting"
            avatar="👨‍🔒"
          />

          <Testimonial
            quote="DevOps automation has streamlined our deployment process. We can now deploy updates 10x faster with zero errors."
            author="Lisa Thompson"
            position="DevOps Lead"
            company="EduTech Academy"
            rating={5}
            service="DevOps Automation"
            avatar="👩‍🔧"
          />

          <Testimonial
            quote="The data analytics platform provides insights we never had before. Our decision-making process is now completely data-driven."
            author="James Wilson"
            position="Data Analyst"
            company="LogisticsPlus"
            rating={5}
            service="AI Data Analytics"
            avatar="👨‍📊"
          />

          <Testimonial
            quote="Zion Tech Group delivered beyond our expectations. Their AI solutions have given us a significant competitive advantage."
            author="Maria Garcia"
            position="CEO"
            company="InnovateCorp"
            rating={5}
            service="AI Solutions Suite"
            avatar="👩‍💼"
          />

          <Testimonial
            quote="The team's professionalism and technical expertise are exceptional. They understood our needs and delivered perfect solutions."
            author="Alex Chen"
            position="CTO"
            company="StartupTech"
            rating={5}
            service="IT Consulting"
            avatar="👨‍🚀"
          />

          <Testimonial
            quote="Our inventory management is now fully automated. Stockouts reduced by 40% and excess inventory by 25%. Incredible results!"
            author="Jennifer Lee"
            position="Operations Manager"
            company="SupplyChain Pro"
            rating={5}
            service="AI Inventory Management"
            avatar="👩‍📦"
          />
        </div>

        {/* Stats Section */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Client Satisfaction Metrics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-600">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">99.9%</div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can transform your business with our proven AI and IT solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Get Free Consultation
            </a>
          </div>
          <div className="mt-6 text-sm opacity-75">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Testimonial({
  quote,
  author,
  position,
  company,
  rating,
  service,
  avatar,
}: {
  quote: string;
  author: string;
  position: string;
  company: string;
  rating: number;
  service: string;
  avatar: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
      <div className="flex items-center mb-4">
        <div className="text-3xl mr-3">{avatar}</div>
        <div>
          <div className="font-semibold text-gray-900">{author}</div>
          <div className="text-sm text-gray-600">{position}</div>
          <div className="text-sm text-blue-600 font-medium">{company}</div>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex text-yellow-400 mb-2">
          {[...Array(rating)].map((_, i) => (
            <span key={i}>⭐</span>
          ))}
        </div>
        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
          {service}
        </span>
      </div>

      <blockquote className="text-gray-700 italic">
        "{quote}"
      </blockquote>
    </div>
  );
}