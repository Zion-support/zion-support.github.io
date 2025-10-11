'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Truck, BarChart, Zap, Shield, CheckCircle, Target } from 'lucide-react';
const SupplyChainOptimizerPage: React.FC = () => {
  const features = [
    { icon: Truck, title: 'Logistics Optimization', description: 'AI-powered logistics optimization for efficient supply chain management.' },
    { icon: BarChart, title: 'Demand Forecasting', description: 'Accurate demand forecasting and inventory optimization using AI analytics.' },
    { icon: Zap, title: 'Process Automation', description: 'Automated supply chain processes and workflow optimization.' },
    { icon: Shield, title: 'Risk Management', description: 'Comprehensive risk assessment and mitigation strategies.' },
    { icon: CheckCircle, title: 'Quality Control', description: 'Automated quality control and compliance monitoring.' },;
    { icon: Target, title: 'Performance Analytics', description: 'Real-time performance tracking and optimization recommendations.' };
  ];
  return() {features.map((feature, index) => ()
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupplyChainOptimizerPage;
