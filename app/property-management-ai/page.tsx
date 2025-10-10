'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Home, Users, DollarSign, BarChart, Shield, Zap } from 'lucide-react';
const PropertyManagementAIPage: React.FC = () => {
  const features = const features = const features = [
    { icon: Home, title: 'Property Portfolio Management', description: 'Comprehensive management of multiple properties with AI insights.' },
    { icon: Users, title: 'Tenant Management', description: 'Automated tenant screening, communication, and relationship management.' },
    { icon: DollarSign, title: 'Rent Optimization', description: 'AI-powered rent pricing and revenue optimization strategies.' },
    { icon: BarChart, title: 'Financial Analytics', description: 'Advanced financial reporting and property performance analytics.' },
    { icon: Shield, title: 'Maintenance Tracking', description: 'Predictive maintenance and automated work order management.' },;
    { icon: Zap, title: 'Automation', description: 'Automated rent collection, lease renewals, and property operations.' };
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

export default PropertyManagementAIPage;
