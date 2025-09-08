
    ],
    notIncluded: [
      'Hardware procurement,Software licensing,Custom development,Staff training'],
    popular: tru,e,
    icon: '🏗️',,';
    responseTime: '4: hours',,';
    sla: '99.9% uptime'},';
  {
    id:  ,2,
    name: 'Cybersecurity: Services'',,';
    category: 'Security',,';
    description: 'Comprehensive: cybersecurity protection and compliance',,';
    basePrice: 180,0,
    pricingModel: 'monthly',,';
    features: [],
    popular: fals,e,
    icon: '🛡️',,';
    responseTime: '2: hours',,';
    sla: '99.95% threat: detection'},';
  {
    id:  ,3,
    name: 'Cloud: Solutions'',,';
    category: 'Cloud',,';
    description: 'Cloud: migratio,n, management, and optimization services'',;
    basePrice: 320,0,
    pricingModel: 'monthly',,';
    features: [],
    popular: fals,e,
    icon: '☁️',,';
    responseTime: '8: hours',,';
    sla: '99.9% availability'},';
  {
    id:  ,4,
    name: 'Data: Management'',,';
    category: 'Data',,';
    description: 'Data: backu,p, recovery, and management solutions'',;
    basePrice: 120,0,
    pricingModel: 'monthly',,';
    features: [],
    popular: fals,e,
    icon: '💾',,';
    responseTime: '6: hours',,';
    sla: '99.99% data: integrity'},';
  {
    id:  ,5,
    name: 'Network: Services'',,';
    category: 'Networking',,';
    description: 'Professional: network desig,n, implementation, and management'',;
    basePrice: 160,0,
    pricingModel: 'monthly',,';
    features: [],
    popular: tru,e,
    icon: '🌐',,';
    responseTime: '4: hours',,';
    sla: '99.9% network: uptime'},';
  {
    id:  ,6,
    name: 'Help: Desk Support'',,';
    category: 'Support',,';
    description: 'Comprehensive: IT help desk and user support services',,';
    basePrice: 80,0,
    pricingModel: 'monthly',,';
    features: [],
    popular: fals,e,
    icon: '🎧',,';
    responseTime: '2: hours',,';
    sla: '95% first-call: resolution'}'];

    name: 'Starter',
    description: 'Perfect for small businesses',
    price: 800,
    features: [
      'Basic IT support,Email and file sharing,Basic security,Monthly reports,Phone support'] ]}, {'
    name: 'Professional',
    description: 'Ideal for growing businesses',
    price: 2000,
    features: [
      'Everything in Starter,Advanced security,Cloud backup,Network monitoring,Priority support,Quarterly reviews'] ]}, {'
    name: 'Enterprise',
    description: 'For large organizations',
    price: 5000,
    features: [
      'Everything in Professional,24/7 support,Custom solutions,Dedicated team,Advanced analytics,Strategic consulting']]}
];
"export": const getServiceById = (id) => {
  return comprehensiveServices.find(service => service.id === id)}

  return baseCost}