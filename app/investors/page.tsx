'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';
const PagePage: React.FC = () => {
    const features: any[] = [
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',,
    {
    ]
return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet>
        <title>Page | Zion Tech Group</title>
        <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      </Helmet>
  }

      {/* Hero Section */}
            <h2>
              Why Choose Our Page?</h2>
            <p>
              Our page solutions deliver unmatched performance, security, and scalability.</p>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}

          </div>
      </section>
            <h2>
              Key Benefits</h2>
            <p>
              Experience the power of our page solutions for your business.</p>
              </div>
            ))}
          </div>
      </section>

      {/* CTA Section */}
          </div>
      </section>
    </div>
  );
};

export default PagePage;
