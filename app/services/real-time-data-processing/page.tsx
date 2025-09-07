import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';


export const metadata = {
  title: 'Real Time Data Processing - Zion Tech Group',}
  description: 'Professional real time data processing solutions for your business needs.',}
};

export default function RealTimeDataProcessingPage() {
  return (
    <div className=\"min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50\" />
      <div className=\"container mx-auto px-4 py-20\" />
        <div className=\"text-center mb-16\" />
          <h1 className=\"text-5xl font-bold text-gray-900 mb-6\" />
            Real Time Data Processing;
          </h1>
          <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\" />
            Professional real time data processing solutions designed to meet your business requirements;
and drive growth. Our expert team delivers high-quality, scalable solutions.
          </p>
        </div>
}
        <div className=\"max-w-6xl mx-auto\" />}
          {/* Features Grid */}
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16\" />
            <div className=\"bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow\" />
              <div className=\"w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6\" />
                <span className=\"text-3xl\" />⚡</span>
              </div>
              <h3 className=\"text-xl font-semibold text-gray-900 mb-4\" />Fast Implementation</h3>
              <p className=\"text-gray-600\" />
                Quick deployment and setup to get your solution running in no time.
              </p>
            </div>

            <div className=\"bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow\" />
              <div className=\"w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6\" />
                <span className=\"text-3xl\" />🔒</span>
              </div>
              <h3 className=\"text-xl font-semibold text-gray-900 mb-4\" />Secure & Reliable</h3>
              <p className=\"text-gray-600\" />
                Enterprise-grade security and reliability for your peace of mind.
              </p>
            </div>

            <div className=\"bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow\" />
              <div className=\"w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6\" />
                <span className=\"text-3xl\" />📈</span>
              </div>
              <h3 className=\"text-xl font-semibold text-gray-900 mb-4\" />Scalable Solutions</h3>
              <p className=\"text-gray-600\" />
                Built to grow with your business and adapt to changing needs.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className=\"text-center bg-white rounded-xl shadow-lg p-12\" />
            <h2 className=\"text-3xl font-bold text-gray-900 mb-6\" />
              Ready to Get Started?
            </h2>
            <p className=\"text-xl text-gray-600 mb-8 max-w-2xl mx-auto\" />
              Contact us today to discuss your real time data processing requirements;
and get a custom solution tailored to your needs.
            </p>
            <div className=\"flex flex-col sm:flex-row gap-4 justify-center\" />
              <Link;
href=\"/contact\"
                className=\"bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center\"
               />
                Get Started;
                <ArrowRightIcon className=\"h-5 w-5 ml-2\" />
              </Link>
              <Link;
href=\"/services\"
                className=\"border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-600 transition-colors\"
               />
                View All Services;
              </Link>
            </div>
        
        <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\" />
          <div className=\"bg-white/10 backdrop-blur-sm rounded-xl p-8\" />
            <h3 className=\"text-2xl font-bold text-white mb-4\" />Feature 1</h3>
            <p className=\"text-gray-300 mb-6\" />Description of the first key feature.</p>
            <ul className=\"space-y-2 text-gray-300\" />
              <li />• Benefit 1</li>
              <li />• Benefit 2</li>
              <li />• Benefit 3</li>
            </ul>
          </div>
          
          <div className=\"bg-white/10 backdrop-blur-sm rounded-xl p-8\" />
            <h3 className=\"text-2xl font-bold text-white mb-4\" />Feature 2</h3>
            <p className=\"text-gray-300 mb-6\" />Description of the second key feature.</p>
            <ul className=\"space-y-2 text-gray-300\" />
              <li />• Benefit 1</li>
              <li />• Benefit 2</li>
              <li />• Benefit 3</li>
            </ul>
          </div>
          
          <div className=\"bg-white/10 backdrop-blur-sm rounded-xl p-8\" />
            <h3 className=\"text-2xl font-bold text-white mb-4\" />Feature 3</h3>
            <p className=\"text-gray-300 mb-6\" />Description of the third key feature.</p>
            <ul className=\"space-y-2 text-gray-300\" />
              <li />• Benefit 1</li>
              <li />• Benefit 2</li>
              <li />• Benefit 3</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}
}



}
}
}




