/* eslint-disable */
import Metadata from 'next';
import Link from 'next/link';

export const metadata = {
  title: 'Service Health Dashboard & Monitoring | Zion Tech Group',
  description: 'Real-time monitoring, alerting, and self-healing for web services, APIs, and infrastructure with free/open-source tools.',
  openGraph: {
    title: 'Service Health Dashboard & Monitoring | Zion Tech Group',
    description: 'Real-time monitoring, alerting, and self-healing for web services, APIs, and infrastructure',
    url: 'https://ziontechgroup.com/services/service-health-dashboard',
  },
  twitter: { card: 'summary_large_image' }
};

const features = [
  "HTTP/HTTPS health checks with custom intervals",
  "Multi-channel alerts (Telegram, Email, SMS via free tiers)",
  "Automatic service restart on failure (self-healing)",
  "Response time and throughput metrics",
  "Public status page generation (GitHub Pages/Netlify)",
  "Incident logging and resolution tracking",
  "SSL certificate expiry monitoring",
  "Domain and DNS health checks"
];

const benefits = [
  "Detect downtime before customers notice",
  "Reduce MTTR with automated self-healing",
  "Transparent service status builds customer trust",
  "Prevent revenue loss from unnoticed outages",
  "Compliance with uptime SLA requirements",
  "Zero-cost monitoring using open-source tools",
  "Scalable from single service to microservices architecture",
  "Detailed analytics for capacity planning"
];

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <section className="py-20 text-center max-w-7xl mx-auto px-4">
        <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6 font-semibold">
          IT Service
        </span>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Service Health Dashboard & Monitoring</h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">Real-time monitoring, alerting, and self-healing for web services, APIs, and infrastructure</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all">
            Get Started Today
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature}</h3>
                <p className="text-gray-600">Enterprise-grade monitoring capabilities using free/open-source tools.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Benefits & Results</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{benefit}</h3>
                  <p className="text-gray-600">Achieve operational excellence with proactive monitoring.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-lg">
                <div className="flex-shrink-0">
                  <span className="text-2xl bg-blue-100 text-blue-600 rounded-full p-3">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Continuous Monitoring</h3>
                  <p className="text-gray-600">Lightweight agents continuously check your services, APIs, and infrastructure endpoints using HTTP/HTTPS, DNS, and SSL checks.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-lg">
                <div className="flex-shrink-0">
                  <span className="text-2xl bg-blue-100 text-blue-600 rounded-full p-3">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Intelligent Alerting</h3>
                  <p className="text-gray-600">When issues are detected, alerts are sent via your preferred channels (Telegram, Email, SMS) with contextual information for rapid diagnosis.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-lg">
                <div className="flex-shrink-0">
                  <span className="text-2xl bg-blue-100 text-blue-600 rounded-full p-3">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Self-Healing</h3>
                  <p className="text-gray-600">For common issues, the system can automatically restart services, clear caches, or scale resources based on predefined policies.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-lg">
                <div className="flex-shrink-0">
                  <span className="text-2xl bg-blue-100 text-blue-600 rounded-full p-3">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Transparent Status</h3>
                  <p className="text-gray-600">A public status page keeps stakeholders informed, while detailed logs and metrics enable post-incident analysis and capacity planning.</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technology Stack</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                  <span>Python/Bash for health checks</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                  <span>Cron/Systemd for scheduling</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                  <span>Telegram Bot API/Pushover/SMTP for alerts</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                  <span>JSONL/SQLite for logging</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                  <span>GitHub Pages/Netlify for status page</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Ensure Your Services Stay Online?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how our Service Health Dashboard can help you achieve zero-downtime operations.
          </p>
          <a href="/contact" className="inline-block px-10 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors">
            Schedule Your Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
}