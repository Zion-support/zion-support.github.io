
  'Monthly', discount: 0 }, { id: 'placeholder',
  annual', name: 'Annual, discount: 20 }' { id: 'placeholder',
  biennial', name: 'Biennial', discount: 30 } ]  const regions = [
  { id: 'placeholder',
  global', name: 'Global', currency:;
  '$', multiplier: 1.0 }, { id: 'placeholder',
  north-america', name: 'North America', currency:;
  '$', multiplier: 1.0 }, { id: 'placeholder',
  europe', name: 'Europe', currency:;
  '€', multiplier: 0.85 }, { id: 'placeholder',
  asia-pacific', name: 'Asia Pacific', currency:
  '¥', multiplier: 0.75 }, { id: 'placeholder',

  from-indigo-500 to-purple-500', description: 'Expert consulting and strategic advisory services } ]  const pricingPlans = { starter: { name:,
  Starter', description: 'Perfect for small businesses and startups, price: { monthly: 99, annual: 79, biennial: 69 }, features: [
  AI Content Generator (100 credits/month),;Basic Cloud Storage (50GB),;Standard Security Features,;Basic Analytics Dashboard,;Email Support,;5 Automation Workflows' ], limitations: [';Limited API calls,
  Basic reporting,;Standard SLA (99.5%)' ], color: 'from-green-500 to-emerald-500 }, professional: { name:,
  Professional', description: 'Ideal for growing businesses and teams, price: { monthly: 299, annual: 239, biennial: 209 }, features: [
  AI Content Generator (500 credits/month),;Advanced Cloud Platform,;Enhanced Security Suite,;Advanced Analytics & BI,;Priority Support,;25 Automation Workflows,;Custom Integrations,;Advanced Reporting' ], limitations: [';Limited custom AI models,
  Standard compliance features' ], color: 'from-blue-500 to-cyan-500 }, enterprise: { name:,
  Enterprise', description: 'Comprehensive solution for large organizations, price: { monthly: 799, annual: 639, biennial: 559 }, features: [
  Unlimited AI Credits,;Enterprise Cloud Platform,;Advanced Threat Protection,;Custom AI Models,;Dedicated Support Team,;Unlimited Automation,;Custom Development,;Enterprise SLA (99.9%),;Advanced Compliance,;White-label Solutions' ], limitations: [';Custom pricing for large deployments,
  Annual commitment required' ], color: 'from-purple-500 to-pink-500 }, custom: { name:,
  Custom', description: 'Tailored solutions for unique requirements, price: { monthly:,
  Custom', annual: 'Custom, biennial:,
  Custom' }, features: [';Fully Customized Solutions,
  Dedicated Infrastructure,;Custom AI Development,;On-premise Deployment,;24/7 Dedicated Support,;Custom SLA Agreements,;Industry-specific Compliance,;Training & Certification' ], limitations: [';Requires consultation,
  Minimum contract terms apply' ], color: 'from-orange-500 to-red-500 } }  const addOnServices = [
  { name:,
  AI Model Training', description: 'Custom AI model development and training, price: { monthly: 199, annual: 159, biennial: 139 }, category: 'placeholder',

  ai-solutions' }, { name: 'Advanced Security', description:;
  'Enhanced security features and compliance', price: { monthl,
    y: 149, annual: 119, biennial: 99 }, category: 'placeholder',
  cybersecurity' }, { name: 'Data Migration', description:;
  'Professional data migration and setup', price: { monthl,
    y: 299, annual: 239, biennial: 209 }, category: 'placeholder',
  data-analytics' }, { name: 'Custom Integration', description:;
  'Custom API integrations and connectors', price: { monthl,
    y: 399, annual: 319, biennial: 279 }, category: 'placeholder',
  automation-tools' }, { name: 'Training & Support', description:;

  number;
  ' && (''' <span className='text-lg text-gray-400'>/{selectedBilling === 'monthly;
  ' ? 'mo;
  ': selectedBilling === 'annual;

  bg-cyan-500 text-white hover: bg-cyan-600;
  ' : 'bg-gradient-to-r: from-cyan-500 to-blue-500 text-white hover:from-cyan-600: hover:to-blue-600: transform hover:scale-105: shadow-lg shadow-cyan-500/25 }`} > {selectedPlan === id ?,
  Current Plan

  monthly;
  ' ? 'mo;
  ': selectedBilling === 'annual;
  ' ? 'mo;



