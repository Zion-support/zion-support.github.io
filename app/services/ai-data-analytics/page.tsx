// import React from 'react';
import { Link } from 'react-router-dom';
// Metadata interface for React Helmet
interface Metadata {
  title?: string;
  description?: string;
  keywords?: string;
}
export const metadata: Metadata = {
  title: 'AI Data Analytics Services | Zion Tech Group',
  description: 'Transform data into actionable insights with our AI data analytics services. Predictive modeling, real-time dashboards, and machine learning solutions.',
  keywords: 'AI data analytics, predictive analytics, business intelligence, data visualization, machine learning',
};

export default function AIDataAnalyticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            AI Data Analytics Services
          </h1>
          <p className="text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Transform your data into actionable insights with cutting-edge AI analytics, 
            predictive modeling, and real-time business intelligence solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </section>

                </li>
              </ul>
            </div>

                </li>
              </ul>
            </div>

                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}