'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react'
const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    }
  ]
  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ]
export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" loading="lazy">
      <Helmet>
        <title>Page | Zion Tech Group</title>
        <meta name="description" content="Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="page, AI solutions, IT services, Zion Tech Group, page" />
      </Helmet>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" loading="lazy">Transform your business with our advanced page solutions.</p>
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" loading="lazy">Our page solutions deliver unmatched performance, security, and scalability.</p>
          </div>
          </div>
        </div>
      </section>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" loading="lazy">Experience the power of our page solutions for your business.</p>
          </div>
          </div>
        </div>
      </section>
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8" loading="lazy">Contact our experts to discuss your page needs and get a customized solution.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" loading="lazy">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center" loading="lazy" aria-label="Action button">
                <Phone className="mr-2 h-5 w-5" loading="lazy" />
                Call Now
  </
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center" loading="lazy" aria-label="Action button">
                <Mail className="mr-2 h-5 w-5" loading="lazy" />
                Email Us
  </
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
};
export default PagePage

