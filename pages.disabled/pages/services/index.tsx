
const categories = [\'AI Services\', \'IT Services\', \'Development\', \'Security\'];
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Database, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, FileText, BarChart3, Cpu, Headphones, Calendar, Send, Layers } from 'lucide-react';
const categories = ['AI Services', 'IT Services', 'Development', 'Security'];

ursor/fix-syntax-push-and-merge-to-main-40de
            {services.map((service, index) => (
              <div key={index} className=\"bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6\">
                <div className=\"flex items-center mb-4\">
                  <div className=\"p-3 bg-blue-100 rounded-lg mr-4\">
                    <service.icon className=\"w-6 h-6 text-blue-600\" />
                  </div>
                  <h3 className=\"text-xl font-semibold text-gray-900\">{service.name}</h3>
                </div>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className=\"flex items-center text-sm text-gray-600\">
                      <Check className=\"w-4 h-4 text-green-500 mr-2\" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href={service.href}
                  className=\"inline-flex items-center text-blue-600 hover:text-blue-700 font-medium\"
                >
                  Learn More
                  <ArrowRight className=\"w-4 h-4 ml-1\" />
                </Link>
              </div>
            ))}
          </div>                href=\"/contact\"
                className=\"bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors\">;
                Get Free Consultation;
              </Link>;
              <Link
                href=\"/pricing\"
                className=\"border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors\">;
                View Pricing;
              </Link>;
            </div>;
          </div>;
        </div>;
      </div>;
    </>;
  );

