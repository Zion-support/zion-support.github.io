import Link from 'next/link';'
import { ArrowRightIcon } from '@heroicons/react/24/outline';'

import Link from "next/link";"

export const metadata = {
  }
  "title": 'It Services - Zion Tech Group','
  "description": 'Professional it services solutions for your business needs.','
};

export default function ItServicesPage() {
}
return (;
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">"
      <div className="container mx-auto px-4 py-20">"
        <div className="text-center mb-16">"
          <h1 className="text-5xl font-bold text-gray-900 mb-6">"
            It Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
            Professional it services solutions designed to meet your business requirements,
and drive growth. Our expert team delivers high-quality, scalable solutions.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">"
          {/* Features Grid */}
          <div className="grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-3 gap-8 mb-16">"
            <div className="bg-white rounded-xl shadow-lg p-8 "hover":shadow-xl transition-shadow">"
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">"
                <span className="text-3xl">⚡</span>"
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fast Implementation</h3>"
              <p className="text-gray-600">"
                Quick deployment and setup to get your solution running in no time.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 "hover":shadow-xl transition-shadow">"
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">"
                <span className="text-3xl">🔒</span>"
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure & Reliable</h3>"
              <p className="text-gray-600">"
                Enterprise-grade security and reliability for your peace of mind.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 "hover":shadow-xl transition-shadow">"
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">"
                <span className="text-3xl">📈</span>"
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Scalable Solutions</h3>"
              <p className="text-gray-600">"
                Built to grow with your business and adapt to changing needs.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white rounded-xl shadow-lg p-12">"
            <h2 className="text-3xl font-bold text-gray-900 mb-6">"
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">"
              Contact us today to discuss your it services requirements,
and get a custom solution tailored to your needs.
            </p>
            <div className="flex flex-col "sm":flex-row gap-4 justify-center">"
              <Link,
href="/contact""
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold "hover":bg-blue-700 transition-colors inline-flex items-center""
              >
                Get Started
                <ArrowRightIcon className="h-5 w-5 ml-2" />"
              </Link>
              <Link,
href="/services""
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold "hover":border-blue-400 "hover":text-blue-600 transition-colors""
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );


export const metadata = {
  }
  "title": "IT Services | Zion Tech Group","
  "description": "Comprehensive IT services including cloud migration, DevOps, cybersecurity, and infrastructure management for enterprise-scale solutions.","
import React from 'react';'

export const metadata = { 
  }
  "title": 'IT Services | Zion Tech Group','
  "description": 'Comprehensive IT services including cloud migration, DevOps, cybersecurity, infrastructure management, and enterprise solutions for modern businesses.','
  "keywords": 'IT services, cloud migration, DevOps, cybersecurity, infrastructure, enterprise IT, cloud consulting, SRE''
};

export default function ITServicesPage() {
}
return (;
    <div className="animate-fade-in">"
      <div className="text-center mb-16">"
        <h1 className="text-4xl font-bold text-gray-900 mb-6">"
    <div className="space-y-16">"
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">"
        <h1 className="text-4xl "md":text-6xl font-bold text-gray-900 mb-6">"
          IT Services
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">"
          Comprehensive IT solutions for modern businesses. 
          From cloud migration to cybersecurity, we keep your technology infrastructure running smoothly.
        </p>
        <div className="flex flex-col "sm":flex-row gap-4 justify-center">"
          <a,
href=""mailto":kleber@ziontechgroup.com?subject=IT Services Inquiry""
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold "hover":bg-blue-700 transition-colors""
          >
            Get IT Consultation
          </a>
          <a,
href=""tel":+13024640950""
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold "hover":bg-blue-600 "hover":text-white transition-colors""
          >
            Call +1 302 464 0950
          </a>
        </div>

        </div>
      </div>

      <div className="text-center mb-16">"
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our IT Service Process</h2>"
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">"
          We follow a proven methodology to deliver successful IT solutions and transformations.
        </p>
        <div className="grid grid-cols-1 "md":grid-cols-3 gap-8">"
          <ProcessStep,
step="1""
            title="Assessment & Planning""
            description="Analyze current infrastructure, identify gaps, and create a comprehensive IT strategy."" />
          <ProcessStep,
step="2""
            title="Implementation & Migration""
            description="Execute the plan with minimal disruption, ensuring smooth transitions and optimal performance."" />
          <ProcessStep,
step="3""
            title="Management & Optimization""
            description="Provide ongoing support, monitoring, and continuous optimization for peak performance."" />
        </div>
      </div>

      <CTA />
    </div>
  );

}

function FeatureItem() {
}
return (;
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 "hover":shadow-lg transition-shadow">"
      <div className="text-4xl mb-4">{icon}</div>"
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>"
      <p className="text-gray-600 mb-4">{description}</p>"
      <ul className="space-y-2">"
        {benefits.map((benefit, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">"
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>"
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BenefitCard() {
}
return (;
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">"
      <div className="text-4xl mb-4 text-green-600">{icon}</div>"
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>"
      <p className="text-gray-600">{description}</p>"
    </div>
  );
}

function ProcessStep() {
}
return (;
    <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200">"
      <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">"
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>"
      <p className="text-gray-600">{description}</p>"
    </div>
  );
}

function CTA() {
}
return (;
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8 text-center">"
      <h3 className="text-2xl font-bold text-gray-900 mb-4">"
        Ready to Modernize Your IT Infrastructure?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">"
        Contact us today for a free IT consultation and discover how our services can transform your technology landscape.
      </p>
      <div className="flex flex-col "sm":flex-row gap-4 justify-center">"
        <a,
href=""tel":+13024640950""
          className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold "hover":bg-green-700 transition-colors""
        >
          Call +1 302 464 0950
        </a>
        <a,
href=""mailto":kleber@ziontechgroup.com""
          className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold "hover":bg-green-600 "hover":text-white transition-colors""
        >
          Email Us
        </a>
      </div>
      <div className="mt-6 text-sm text-gray-600">"
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
      </div>
    </div>
  );

}
        </div>
      </div>
    </div>
  );
}

        </div>
      </div>

      <div className="text-center mb-16">"
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our IT Service Process</h2>"
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">"
          We follow a proven methodology to deliver successful IT solutions and transformations.
        </p>
        <div className="grid grid-cols-1 "md":grid-cols-3 gap-8">"
          <ProcessStep,
step="1""
            title="Assessment & Planning""
            description="Analyze current infrastructure, identify gaps, and create a comprehensive IT strategy."" />
          <ProcessStep,
step="2""
            title="Implementation & Migration""
            description="Execute the plan with minimal disruption, ensuring smooth transitions and optimal performance."" />
          <ProcessStep,
step="3""
            title="Management & Optimization""
            description="Provide ongoing support, monitoring, and continuous optimization for peak performance."" />
        </div>
      </div>

      <CTA />
    </div>
  );

}

function FeatureItem() {
}
return (;
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 "hover":shadow-lg transition-shadow">"
      <div className="text-4xl mb-4">{icon}</div>"
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>"
      <p className="text-gray-600 mb-4">{description}</p>"
      <ul className="space-y-2">"
        {benefits.map((benefit, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">"
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>"
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BenefitCard() {
}
return (;
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">"
      <div className="text-4xl mb-4 text-green-600">{icon}</div>"
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>"
      <p className="text-gray-600">{description}</p>"
    </div>
  );
}

function ProcessStep() {
}
return (;
    <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200">"
      <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">"
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>"
      <p className="text-gray-600">{description}</p>"
    </div>
  );
}

function CTA() {
}
return (;
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8 text-center">"
      <h3 className="text-2xl font-bold text-gray-900 mb-4">"
        Ready to Modernize Your IT Infrastructure?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">"
        Contact us today for a free IT consultation and discover how our services can transform your technology landscape.
      </p>
      <div className="flex flex-col "sm":flex-row gap-4 justify-center">"
        <a,
href=""tel":+13024640950""
          className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold "hover":bg-green-700 transition-colors""
        >
          Call +1 302 464 0950
        </a>
        <a,
href=""mailto":kleber@ziontechgroup.com""
          className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold "hover":bg-green-600 "hover":text-white transition-colors""
        >
          Email Us
        </a>
      </div>
      <div className="mt-6 text-sm text-gray-600">"
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
      </div>
    </div>
  );

      </section>
    </div>
  );
}

        </div>
      </div>

      <div className="text-center mb-16">"
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our IT Service Process</h2>"
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">"
          We follow a proven methodology to deliver successful IT solutions and transformations.
        </p>
        <div className="grid grid-cols-1 "md":grid-cols-3 gap-8">"
          <ProcessStep,
step="1""
            title="Assessment & Planning""
            description="Analyze current infrastructure, identify gaps, and create a comprehensive IT strategy."" />
          <ProcessStep,
step="2""
            title="Implementation & Migration""
            description="Execute the plan with minimal disruption, ensuring smooth transitions and optimal performance."" />
          <ProcessStep,
step="3""
            title="Management & Optimization""
            description="Provide ongoing support, monitoring, and continuous optimization for peak performance."" />
        </div>
      </div>

      <CTA />
    </div>
  );

}

function FeatureItem() {
}
return (;
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 "hover":shadow-lg transition-shadow">"
      <div className="text-4xl mb-4">{icon}</div>"
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>"
      <p className="text-gray-600 mb-4">{description}</p>"
      <ul className="space-y-2">"
        {benefits.map((benefit, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">"
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>"
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BenefitCard() {
}
return (;
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">"
      <div className="text-4xl mb-4 text-green-600">{icon}</div>"
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>"
      <p className="text-gray-600">{description}</p>"
    </div>
  );
}

function ProcessStep() {
}
return (;
    <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200">"
      <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">"
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>"
      <p className="text-gray-600">{description}</p>"
    </div>
  );
}

function CTA() {
}
return (;
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8 text-center">"
      <h3 className="text-2xl font-bold text-gray-900 mb-4">"
        Ready to Modernize Your IT Infrastructure?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">"
        Contact us today for a free IT consultation and discover how our services can transform your technology landscape.
      </p>
      <div className="flex flex-col "sm":flex-row gap-4 justify-center">"
        <a,
href=""tel":+13024640950""
          className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold "hover":bg-green-700 transition-colors""
        >
          Call +1 302 464 0950
        </a>
        <a,
href=""mailto":kleber@ziontechgroup.com""
          className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold "hover":bg-green-600 "hover":text-white transition-colors""
        >
          Email Us
        </a>
      </div>
      <div className="mt-6 text-sm text-gray-600">"
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
      </div>
    </div>
  );


