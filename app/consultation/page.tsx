'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';

interface ConsultationType {
  id: number;
  name: string;
  description: string;
  duration: string;
  price: string;
  features: string[];

  const consultationTypes: ConsultationType[] = [
    {
      id: '1',
>>>>>>> origin/main
      name: 'Discovery Call',
      description: 'Initial consultation to understand your business needs and challenges',
      duration: '30 minutes',
      price: 'Free',
      ],
      popular: true});;)
},
    {
      id: '3',
      name: 'Technical Deep Dive',
      description: 'In-depth technical analysis and solution architecture design',
      duration: '4-8 hours',
      price: '$1,200',
      features: [
        'Technical architecture review',
        'Security assessment',
        'Performance optimization',
        'Integration planning',
      ],
      popular: false});;)
}
  ];

  const experts = [
    {
      name: 'Dr. Sarah Chen',
      role: 'AI & Machine Learning Consultant',
      experience: '15+ years',
      expertise: ['AI Strategy', 'Machine Learning', 'Data Science'],
      image: '/images/experts/sarah-chen.jpg'});;)
},
    {
      name: 'Michael Rodriguez',
      role: 'Cloud Architecture Specialist',
      experience: '12+ years',
    {
      name: 'Alex Thompson',
      role: 'Cybersecurity Consultant',
      experience: '10+ years',
      expertise: ['Security Audits', 'Compliance', 'Risk Management'],
      image: '/images/experts/alex-thompson.jpg'});;)
}
  ];
>>>>>>> cursor/fix-errors-and-merge-to-main-550e

    }
  ];

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-8a15
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-8a15
>>>>>>> origin/main
  };
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b

const PagePage: React.FC = () => {
  return (
    <>
      <Helmet>
      </Helmet>
=======
  return (<div>
        <title>Consultation - Zion Tech Group | Expert IT Consulting<
        <meta name="description" content="Get expert consultation on AI, cloud computing, cybersecurity, and IT strategy. Book a consultation with our experienced team." 
        <meta name="keywords" content="IT consultation, AI consulting, cloud consulting, cybersecurity consulting, technology strategy" 
      <
>>>>>>> cursor/fix-errors-and-merge-to-main-e8e3

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Page
              </span>
            </h1>
            </div>
          </div>
        </section>

              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:from-cyan-300 hover:to-purple-300 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center gap-2 bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold border border-slate-600 hover:bg-slate-600 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </div>
            </div>
              </div>
            ));
          </div>
        </div>
      </section>

            </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-bba0
          </div>
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Now
            </button>
            <button></button>
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
=======
>>>>>>> main
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b
  );
};

export default PagePage;
>>>>>>> origin/main
