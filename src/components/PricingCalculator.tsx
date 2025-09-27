import React, { useState, useEffect } from 'react';

interface CalculatorInputs {
  service: string;
  complexity: string;
  timeline: string;
  teamSize: number;
  additionalFeatures: string[];
}

interface PricingOption {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  features: string[];
}

export const PricingCalculator: React.FC = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    service: '',
    complexity: 'standard',
    timeline: 'standard',
    teamSize: 1,
    additionalFeatures: []
  });

  const [estimatedPrice, setEstimatedPrice] = useState(0);
  const [breakdown, setBreakdown] = useState<any[]>([]);

  const services: PricingOption[] = [
    {
      id: 'web-dev',
      name: 'Web Development',
      description: 'Custom web applications and websites',
      basePrice: 15000,
      features: ['Responsive Design', 'CMS Integration', 'SEO Optimization', 'Performance Optimization']
    },
    {
      id: 'mobile',
      name: 'Mobile Development',
      description: 'iOS and Android applications',
      basePrice: 25000,
      features: ['Native Apps', 'Cross-platform', 'App Store Optimization', 'Push Notifications']
    },
    {
      id: 'ai-ml',
      name: 'AI & Machine Learning',
      description: 'Artificial intelligence solutions',
      basePrice: 35000,
      features: ['Custom Models', 'Data Processing', 'API Integration', 'Training & Optimization']
    },
    {
      id: 'cloud',
      name: 'Cloud Solutions',
      description: 'Cloud infrastructure and deployment',
      basePrice: 20000,
      features: ['Infrastructure Setup', 'DevOps', 'Monitoring', 'Security']
    },
    {
      id: 'data-analytics',
      name: 'Data Analytics',
      description: 'Business intelligence and analytics',
      basePrice: 18000,
      features: ['Data Visualization', 'Reporting', 'Predictive Analytics', 'Dashboard Creation']
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      description: 'Security solutions and audits',
      basePrice: 12000,
      features: ['Security Audit', 'Penetration Testing', 'Compliance', 'Monitoring']
    }
  ];

  const additionalFeatures = [
    { id: 'api-integration', name: 'API Integration', price: 5000 },
    { id: 'mobile-responsive', name: 'Mobile Responsive Design', price: 3000 }
  ];

  useEffect(() => {
    calculatePrice();
  }, [inputs]);

  const calculatePrice = () => {
    if (!inputs.service) {
      setEstimatedPrice(0);
      setBreakdown([]);
      return;
    }

    const selectedService = services.find(s => s.id === inputs.service);
    if (!selectedService) return;

    let total = selectedService.basePrice;
    const priceBreakdown = [
      {
        item: selectedService.name,
        price: selectedService.basePrice,
        description: 'Base service cost'
      }
    ];

    // Complexity multiplier
    const complexityMultipliers = {
      basic: 0.7,
      standard: 1.0,
      advanced: 1.5,
      enterprise: 2.0
    };

    const complexityMultiplier = complexityMultipliers[inputs.complexity as keyof typeof complexityMultipliers];
    const complexityAdjustment = selectedService.basePrice * (complexityMultiplier - 1);

    if (complexityAdjustment > 0) {
      priceBreakdown.push({
        item: `${inputs.complexity.charAt(0).toUpperCase() + inputs.complexity.slice(1)} Complexity`,
        price: complexityAdjustment,
        description: `${Math.round((complexityMultiplier - 1) * 100)}% complexity adjustment`
      });
    }

    total *= complexityMultiplier;

    // Timeline multiplier
    const timelineMultipliers = {
      rush: 1.5,
      standard: 1.0,
      flexible: 0.9
    };

    const timelineMultiplier = timelineMultipliers[inputs.timeline as keyof typeof timelineMultipliers];
    const timelineAdjustment = total * (timelineMultiplier - 1);

    if (timelineAdjustment !== 0) {
      priceBreakdown.push({
        item: `${inputs.timeline.charAt(0).toUpperCase() + inputs.timeline.slice(1)} Timeline`,
        price: timelineAdjustment,
        description: `${Math.round((timelineMultiplier - 1) * 100)}% timeline adjustment`
      });
    }

    total *= timelineMultiplier;

    // Team size adjustment
    if (inputs.teamSize > 1) {
      const teamAdjustment = total * (inputs.teamSize - 1) * 0.2;
      priceBreakdown.push({
        item: `Team Size (${inputs.teamSize} members)`,
        price: teamAdjustment,
        description: 'Additional team coordination cost'
      });
      total += teamAdjustment;
    }

    // Additional features
    let featuresTotal = 0;
    inputs.additionalFeatures.forEach(featureId => {
      const feature = additionalFeatures.find(f => f.id === featureId);
      if (feature) {
        featuresTotal += feature.price;
        priceBreakdown.push({
          item: feature.name,
          price: feature.price,
          description: 'Additional feature'
        });
      }
    });

    total += featuresTotal;

    setEstimatedPrice(Math.round(total));
    setBreakdown(priceBreakdown);
  };

  const handleInputChange = (field: keyof CalculatorInputs, value: any) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFeatureToggle = (featureId: string) => {
    setInputs(prev => ({
      ...prev,
      additionalFeatures: prev.additionalFeatures.includes(featureId)
        ? prev.additionalFeatures.filter(id => id !== featureId)
        : [...prev.additionalFeatures, featureId]
    }));
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="mb-8">
        <h3 className="text-3xl font-bold text-gray-800 mb-3" id="project-pricing-calculator">
          Project Pricing Calculator
        </h3>
        <p className="text-gray-600 text-lg">
          Get an instant estimate for your project based on your specific requirements.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="space-y-6">
          {/* Service Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Select Service
            </label>
            <select
              value={inputs.service}
              onChange={(e) => handleInputChange('service', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Choose a service...</option>
              {services.map(service => (
                <option key={service.id} value={service.id}>
                  {service.name} - {formatPrice(service.basePrice)}
                </option>
              ))}
            </select>
          </div>

          {/* Complexity */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Project Complexity
            </label>
            <select
              value={inputs.complexity}
              onChange={(e) => handleInputChange('complexity', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="basic">Basic</option>
              <option value="standard">Standard</option>
              <option value="advanced">Advanced</option>
              <option value="enterprise">Enterprise</option>
            </select>
          </div>

          {/* Timeline */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Timeline
            </label>
            <select
              value={inputs.timeline}
              onChange={(e) => handleInputChange('timeline', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="flexible">Flexible (3-6 months)</option>
              <option value="standard">Standard (2-3 months)</option>
              <option value="rush">Rush (1-2 months)</option>
            </select>
          </div>

          {/* Team Size */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Team Size
            </label>
            <input
              type="number"
              min="1"
              max="20"
              value={inputs.teamSize}
              onChange={(e) => handleInputChange('teamSize', parseInt(e.target.value))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Additional Features */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Additional Features
            </label>
            <div className="space-y-2">
              {additionalFeatures.map(feature => (
                <label key={feature.id} className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={inputs.additionalFeatures.includes(feature.id)}
                    onChange={() => handleFeatureToggle(feature.id)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">
                    {feature.name} (+{formatPrice(feature.price)})
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Price Estimate */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h4 className="text-xl font-bold text-gray-800 mb-4">Price Estimate</h4>
          <div className="text-center mb-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              {formatPrice(estimatedPrice)}
            </div>
            <p className="text-gray-600">Total project cost</p>
          </div>

          {breakdown.length > 0 && (
            <div>
              <h5 className="font-semibold text-gray-700 mb-3">Cost Breakdown</h5>
              <div className="space-y-2">
                {breakdown.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200">
                    <div>
                      <div className="text-sm font-medium text-gray-800">{item.item}</div>
                      <div className="text-xs text-gray-500">{item.description}</div>
                    </div>
                    <div className="text-sm font-semibold text-gray-700">
                      {formatPrice(item.price)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PricingCalculator;