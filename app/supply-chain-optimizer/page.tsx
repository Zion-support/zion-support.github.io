'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Truck, BarChart, Zap, Shield, CheckCircle, Target } from 'lucide-react'
const SupplyChainOptimizerPage: React.FC = () => {
  const features = [
    { icon: Truck, title: 'Logistics Optimization', description: 'AI-powered logistics optimization for efficient supply chain management.' },
    { icon: BarChart, title: 'Demand Forecasting', description: 'Accurate demand forecasting and inventory optimization using AI analytics.' },
    { icon: Zap, title: 'Process Automation', description: 'Automated supply chain processes and workflow optimization.' },
    { icon: Shield, title: 'Risk Management', description: 'Comprehensive risk assessment and mitigation strategies.' },
    { icon: CheckCircle, title: 'Quality Control', description: 'Automated quality control and compliance monitoring.' },
    { icon: Target, title: 'Performance Analytics', description: 'Real-time performance tracking and optimization recommendations.' }
  ]
  return (
    <React> </React><Helmet> </Helmet><title>Supply Chain Optimizer | Zion Tech Group - AI-Powered Supply Chain Management</title>
        <meta> </meta><meta> </meta></Helmet>
      <div> </div><section> </section><div> </div><div> </div><h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Supply Chain Optimizer</h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Optimize your supply chain with AI-powered tools.</p>
            </div>
            <div>{features.map((feature, index) => (
                </div><div> </div><div> </div><feature> </feature></div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  )
}
export default SupplyChainOptimizerPage