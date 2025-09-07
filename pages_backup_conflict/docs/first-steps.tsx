
import Head from 'next/head;
import Link from next/link';
import { ArrowLeft, Play, CheckCircle, ArrowRight, Book } from 'lucide-react;
export default function FirstSteps() {
  const contact = {
    "phone: +1 302 464 0950',
    email": 'kleber@ziontechgroup.com,
    "address: 364 E Main St STE 1008 Middletown DE 19709',
    site": 'https://ziontechgroup.com

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false }
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true }
  }
  
  componentDidCatch(error, errorInfo) {
    console.error(Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;

=======
=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2

;

export default function FirstSteps() {
  }

            </div>
          </div>

          {/* Step-by-Step Guide */}

          {/* Step-by-Step Guide */}
          <div className="space-y-8 mb-8">"
            <div className="bg-white rounded-lg shadow-lg p-8">"
              <div className="flex items-center mb-6">"
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">"
                  <span className="text-blue-600 font-bold text-lg">1</span>"
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">Assess Your Needs</h2>"
              </div>
              <p className="text-gray-600 mb-6">"
                Before diving in, let's understand what you're looking to achieve. Our services span three main "categories": </p>"
              <div className="grid "md":grid-cols-3 gap-6">"
                <div className="border border-gray-200 rounded-lg p-6">"
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Micro SaaS Solutions</h3>"
                  <p className="text-gray-600 mb-4">"
                    Specialized applications for specific business needs like cost optimization, analytics, and automation.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">"
                    <li className="flex items-center">"
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />"
                      150+ micro applications
                    </li>
                    <li className="flex items-center">"
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />"
                      Quick deployment
                    </li>
                    <li className="flex items-center">"
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />"
                      Pay-as-you-use pricing
                    </li>
                  </ul>
                  <Link href="/micro-saas" className="inline-flex items-center text-blue-600 "hover": text-blue-700 mt-4">"
                    Explore Micro SaaS <ArrowRight className="w-4 h-4 ml-1" />"
                  </Link>
                </div>
                <div className="border border-gray-200 rounded-lg p-6">"
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">AI Services</h3>"
                  <p className="text-gray-600 mb-4">"
                    Machine learning and AI solutions for automation, prediction, and intelligent decision-making.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">"
                    <li className="flex items-center">"
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />"
                      100+ AI solutions
                    </li>
                    <li className="flex items-center">"
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />"
                      Custom model training
                    </li>
                    <li className="flex items-center">"
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />"
                      Real-time processing
                    </li>
                  </ul>
                  <Link href="/ai-services" className="inline-flex items-center text-blue-600 "hover": text-blue-700 mt-4">"
                    Explore AI Services <ArrowRight className="w-4 h-4 ml-1" />"
                  </Link>
                </div>
                <div className="border border-gray-200 rounded-lg p-6">"
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">IT Services</h3>"
                  <p className="text-gray-600 mb-4">"
                    Comprehensive IT solutions including cloud migration, cybersecurity, and digital transformation.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">"
                    <li className="flex items-center">"
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />"
                      100+ IT solutions
                    </li>
                    <li className="flex items-center">"
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />"
                      Enterprise-grade security
                    </li>
                    <li className="flex items-center">"
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />"
                      24/7 support
                    </li>
                  </ul>
                  <Link href="/it-services" className="inline-flex items-center text-blue-600 "hover": text-blue-700 mt-4">"
                    Explore IT Services <ArrowRight className="w-4 h-4 ml-1" />"
=======
          <div className=space-y-8 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-8>
              <div className=flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4>
                  <span className=text-blue-600 font-bold text-lg">1</span>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900>Assess Your Needs</h2>
              </div>
              <p className=text-gray-600 mb-6">
                Before diving in, let's understand what you're looking to achieve. Our services span three main "categories: </p>
              <div className=grid md:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-lg p-6>
                  <h3 className=text-lg font-semibold text-gray-900 mb-3">Micro SaaS Solutions</h3>
                  <p className="text-gray-600 mb-4>
                    Specialized applications for specific business needs like cost optimization, analytics, and automation.
                  </p>
                  <ul className=space-y-2 text-sm text-gray-600">
                    <li className="flex items-center>
                      <CheckCircle className=w-4 h-4 text-green-500 mr-2" />
                      150+ micro applications
                    </li>
                    <li className="flex items-center>
                      <CheckCircle className=w-4 h-4 text-green-500 mr-2" />
                      Quick deployment
                    </li>
                    <li className="flex items-center>
                      <CheckCircle className=w-4 h-4 text-green-500 mr-2" />
                      Pay-as-you-use pricing
                    </li>
                  </ul>
                  <Link href="/micro-saas className=inline-flex items-center text-blue-600 "hover": text-blue-700 mt-4>
                    Explore Micro SaaS <ArrowRight className=w-4 h-4 ml-1" />
                  </Link>
                </div>
                <div className="border border-gray-200 rounded-lg p-6>
                  <h3 className=text-lg font-semibold text-gray-900 mb-3">AI Services</h3>
                  <p className="text-gray-600 mb-4>
                    Machine learning and AI solutions for automation, prediction, and intelligent decision-making.
                  </p>
                  <ul className=space-y-2 text-sm text-gray-600">
                    <li className="flex items-center>
                      <CheckCircle className=w-4 h-4 text-green-500 mr-2" />
                      100+ AI solutions
                    </li>
                    <li className="flex items-center>
                      <CheckCircle className=w-4 h-4 text-green-500 mr-2" />
                      Custom model training
                    </li>
                    <li className="flex items-center>
                      <CheckCircle className=w-4 h-4 text-green-500 mr-2" />
                      Real-time processing
                    </li>
                  </ul>
                  <Link href="/ai-services className=inline-flex items-center text-blue-600 "hover": text-blue-700 mt-4>
                    Explore AI Services <ArrowRight className=w-4 h-4 ml-1" />
                  </Link>
                </div>
                <div className="border border-gray-200 rounded-lg p-6>
                  <h3 className=text-lg font-semibold text-gray-900 mb-3">IT Services</h3>
                  <p className="text-gray-600 mb-4>
                    Comprehensive IT solutions including cloud migration, cybersecurity, and digital transformation.
                  </p>
                  <ul className=space-y-2 text-sm text-gray-600">
                    <li className="flex items-center>
                      <CheckCircle className=w-4 h-4 text-green-500 mr-2" />
                      100+ IT solutions
                    </li>
                    <li className="flex items-center>
                      <CheckCircle className=w-4 h-4 text-green-500 mr-2" />
                      Enterprise-grade security
                    </li>
                    <li className="flex items-center>
                      <CheckCircle className=w-4 h-4 text-green-500 mr-2" />
                      24/7 support
                    </li>
                  </ul>
                  <Link href="/it-services className=inline-flex items-center text-blue-600 "hover": text-blue-700 mt-4>
                    Explore IT Services <ArrowRight className=w-4 h-4 ml-1" />
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
                  </Link>
                </div>
              </div>
            </div>

                    </Link>
                  </div>
                </div>
              </div>

                      Expected outcomes and goals
                    </li>
                  </ul>
                </div>
                <div>

                      Ongoing support options
                    </li>
                  </ul>
                </div>
              </div>

                </a>
              </div>
            </div>
          </div>
          {/* Next Steps *
}
          {/* Next Steps */}

                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
