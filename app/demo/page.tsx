'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Play, ArrowRight, CheckCircle } from 'lucide-react'
const DemoPage: React.FC = () => {
  const demos = [
    {
      title: 'AI Analytics Dashboard',
      description: 'See how our AI analytics can transform your business intelligence',
      duration: '5 min',
      features: ['Real-time data visualization', 'Predictive analytics', 'Custom reports']
    },
    {
      title: 'AI Customer Support Bot',
      description: 'Experience our intelligent customer support automation',
      duration: '3 min',
      features: ['Natural language processing', 'Multi-channel support', 'Sentiment analysis']
    },
    {
      title: 'AI Content Generation',
      description: 'Watch our AI create high-quality content in seconds',
      duration: '4 min',
      features: ['Blog posts', 'Social media content', 'Product descriptions']
    }
  ]
  return (
    <React> </React><Helmet> </Helmet><title>Demo - Zion Tech Group | See Our AI Solutions in Action</title>
        <meta> </meta><meta> </meta></Helmet>
      <div> </div><section> </section><div> </div><h1>See Our </h1><span className="text-cyan-400">Solutions</span> in Action
            </h1>
            <p>Experience our AI and IT solutions through interactive demos. See how our technology can transform your business.
            </p></p>
          </div>
        </section>
        <section> </section><div> </div><div>{demos.map((demo, index) => (
                </div><div> </div><div> </div><Play> </Play></div>
                  <h3 className="text-xl font-semibold text-white mb-3">{demo.title}</h3>
                  <p className="text-gray-300 mb-4">{demo.description}</p>
                  <div className="text-sm text-cyan-400 mb-4">Duration: {demo.duration}</div>
                  <ul>{demo.features.map((feature, featureIndex) => (
                      </ul><li> </li><CheckCircle>{feature}
                      </CheckCircle></li>
                    ))}
                  </ul>
                  <button> </button><Play>Watch Demo
                  </Play></button>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section> </section><div> </div><div> </div><h2 className="text-2xl font-semibold text-white mb-4">Ready to See More?</h2>
              <p>Schedule a personalized demo with our experts to see how our solutions can address your specific business needs.
              </p></p>
              <a>Schedule Demo
                </a><ArrowRight> </ArrowRight></a>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  )
}
export default DemoPage