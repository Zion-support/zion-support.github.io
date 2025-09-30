import React from 'react';

export default function CustomerTestimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "Zion Tech Group's AI data analytics transformed our decision-making process completely. We now make data-driven decisions 300% faster than before, and our revenue has increased by 40% in just 6 months.",
      author: "Sarah Johnson",
      title: "CEO",
      company: "TechCorp Solutions",
      image: "/images/testimonials/sarah-johnson.jpg",
      results: [
        { metric: "300%", label: "Faster Decisions" },
        { metric: "40%", label: "Revenue Growth" },
        { metric: "6 months", label: "ROI Timeline" }
      ]
    },
    {
      id: 2,
      quote: "The AI workflow automation service eliminated 80% of our manual processes. Our team can now focus on strategic initiatives instead of repetitive tasks. The ROI was achieved within the first quarter.",
      author: "Michael Rodriguez",
      title: "Operations Director",
      company: "CloudScale Enterprises",
      image: "/images/testimonials/michael-rodriguez.jpg",
      results: [
        { metric: "80%", label: "Process Automation" },
        { metric: "3 months", label: "ROI Achievement" },
        { metric: "75%", label: "Time Savings" }
      ]
    },
    {
      id: 3,
      quote: "Our AI virtual assistant handles 90% of customer inquiries automatically with 98% satisfaction rate. Customer support costs reduced by 60% while improving response times dramatically.",
      author: "Jennifer Liu",
      title: "Customer Success Manager",
      company: "Precision Manufacturing Corp",
      image: "/images/testimonials/jennifer-liu.jpg",
      results: [
        { metric: "90%", label: "Auto-Handling" },
        { metric: "98%", label: "Satisfaction Rate" },
        { metric: "60%", label: "Cost Reduction" }
      ]
    },
    {
      id: 4,
      quote: "The cloud migration was seamless with zero downtime. Our infrastructure costs reduced by 45% while improving performance and security. Zion Tech Group's expertise made all the difference.",
      author: "David Chen",
      title: "CTO",
      company: "Innovation Labs",
      image: "/images/testimonials/david-chen.jpg",
      results: [
        { metric: "0%", label: "Downtime" },
        { metric: "45%", label: "Cost Savings" },
        { metric: "99.9%", label: "Uptime" }
      ]
    },
    {
      id: 5,
      quote: "DevOps automation reduced our deployment time from hours to minutes. The CI/CD pipeline they built has eliminated deployment errors and improved our release velocity by 500%.",
      author: "Amanda Thompson",
      title: "Engineering Manager",
      company: "Digital Dynamics",
      image: "/images/testimonials/amanda-thompson.jpg",
      results: [
        { metric: "500%", label: "Faster Deployments" },
        { metric: "0", label: "Deployment Errors" },
        { metric: "10x", label: "Release Velocity" }
      ]
    },
    {
      id: 6,
      quote: "Cybersecurity consulting helped us achieve 100% compliance with industry standards. Security incidents reduced by 95% and we now have 24/7 monitoring with instant threat response.",
      author: "Robert Kim",
      title: "Security Director",
      company: "Financial Services Inc",
      image: "/images/testimonials/robert-kim.jpg",
      results: [
        { metric: "100%", label: "Compliance" },
        { metric: "95%", label: "Incident Reduction" },
        { metric: "24/7", label: "Monitoring" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Success Stories from Our Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how businesses across industries have transformed their operations 
            and achieved remarkable results with our AI and IT solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Overall Stats */}
        <div className="bg-white rounded-2xl p-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Proven Results Across All Industries
            </h3>
            <p className="text-xl text-gray-600">
              Our clients consistently achieve outstanding results with measurable ROI
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Projects Delivered</div>
              <div className="text-sm text-gray-600">Successfully completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">$2M+</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Client Savings</div>
              <div className="text-sm text-gray-600">Average annual savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Client Satisfaction</div>
              <div className="text-sm text-gray-600">Would recommend us</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">3 months</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Average ROI</div>
              <div className="text-sm text-gray-600">Time to positive returns</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business achieve similar results 
            with our proven AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: any }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Quote */}
      <div className="mb-6">
        <div className="text-4xl text-blue-600 mb-4">"</div>
        <p className="text-gray-700 italic leading-relaxed">{testimonial.quote}</p>
        <div className="text-4xl text-blue-600 text-right mt-4">"</div>
      </div>

      {/* Author Info */}
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
          {testimonial.author.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <div className="font-semibold text-gray-900">{testimonial.author}</div>
          <div className="text-sm text-gray-600">{testimonial.title}</div>
          <div className="text-sm text-blue-600 font-semibold">{testimonial.company}</div>
        </div>
      </div>

      {/* Results */}
      <div className="border-t pt-4">
        <h4 className="font-semibold text-gray-900 mb-3 text-sm">Achieved Results:</h4>
        <div className="grid grid-cols-3 gap-3">
          {testimonial.results.map((result: any, index: number) => (
            <div key={index} className="text-center">
              <div className="text-lg font-bold text-blue-600">{result.metric}</div>
              <div className="text-xs text-gray-600">{result.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}