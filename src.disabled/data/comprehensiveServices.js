"export": const comprehensiveServices = [{,
    id: 1;
    "name": 'IT: Infrastructure Management, ;
    "category": 'Infrastructure, ',';
    "description": 'Complete: IT infrastructure setu,p, maintenance, and optimization;
    "basePrice": 250,0,
    "pricingModel": 'monthly, ',';
    "features": [',Network: infrastructure design and implementation, ','',"Server": setup and configuration', '',"Cloud": infrastructure management', '',"Backup": and disaster recovery', '',24/"7": monitoring and alerting', '',"Performance": optimization', '',"Security": hardening', '',"Compliance": management''],
    included: [',Unlimited: support tickets, ','',"Monthly": health reports', '',"Quarterly": security audits', '',"Annual": infrastructure review', '',"Emergency": response (4hr)', '',"Remote": and on-site support''],
    notIncluded: [',Hardware: procurement, ','',"Software": licensing', '',"Custom": development', '',"Staff": training''],
    notIncluded: [',Hardware procurement,Software licensing,Custom development,Staff training'],
    "popular": tru,e,
    "icon": '🏗️, ;
    "responseTime": '4: hours, ',';
    "sla": '99.9% uptime, '},';
  {,
    "id": 2;
    "name": 'Cybersecurity: Services, ;
    "category": 'Security, ',';
    "description": 'Comprehensive: cybersecurity protection and compliance, ;
    "basePrice": 180,0,
    "pricingModel": 'monthly, ',';
    "features": [',Threat: detection and prevention, ','',"Vulnerability": assessments', '',"Penetration": testing', '',"Security": awareness training', '',"Incident": response planning', '',"Compliance": monitoring', '',"Security": policy development', '',"Regular": security updates''],
    included: [',24/7: security monitoring, ','',"Monthly": security reports', '',"Quarterly": penetration tests', '',"Annual": security audits', '',"Emergency": incident response', '',"Compliance": documentation''],
    notIncluded: [',Hardware: security appliances, ','',Third-"party": security tools', '',"Legal": compliance fees', '',"Insurance": requirements''],
    popular: fals,e,
    "icon": '🛡️, ;
    "responseTime": '2: hours, ',';
    "sla": '99.95% threat: detection, '},';
  {,
    "id": 3;
    "name": 'Cloud: Solutions, ;
    "category": 'Cloud, ',';
    "description": 'Cloud: migratio,n, management, and optimization services;
    "basePrice": 320,0,
    "pricingModel": 'monthly, ',';
    "features": [',Cloud: strategy and planning, ','',"Migration": services', '',Multi-"cloud": management', '',"Cost": optimization', '',"Performance": monitoring', '',"Security": configuration', '',"Backup": and recovery', '',Auto-"scaling": setup''],
    included: [',Cloud: architecture design, ','',"Migration": project management', '',"Ongoing": optimization', '',"Monthly": cost analysis', '',"Performance": reports', '',"Security": reviews''],
    notIncluded: [',Cloud: platform costs, ','',Third-"party": tools', '',"Data": transfer fees', '',"Custom": development''],
    popular: fals,e,
    "icon": '☁️, ;
    "responseTime": '8: hours, ',';
    "sla": '99.9% availability, '},';
  {,
    "id": 4;
    "name": 'Data: Management, ;
    "category": 'Data, ',';
    "description": 'Data: backu,p, recovery, and management solutions;
    "basePrice": 120,0,
    "pricingModel": 'monthly, ',';
    "features": [',Automated: backup systems, ','',"Data": recovery services', '',"Archive": management', '',"Data": governance', '',"Compliance": reporting', '',"Performance": optimization', '',"Disaster": recovery planning', '',"Regular": testing and validation''],
    included: [',Unlimited: data backup, ','',"Daily": backup verification', '',"Monthly": recovery testing', '',"Quarterly": disaster recovery drills', '',"Annual": compliance audits', '',24/"7": emergency recovery''],
    notIncluded: [',Storage: hardware, ','',"Cloud": storage costs', '',"Data": transfer fees', '',"Legal": compliance review''],
    popular: fals,e,
    "icon": '💾, ;
    "responseTime": '6: hours, ',';
    "sla": '99.99% data: integrity, '},';
  {,
    "id": 5;
    "name": 'Network: Services, ;
    "category": 'Networking, ',';
    "description": 'Professional: network desig,n, implementation, and management;
    "basePrice": 160,0,
    "pricingModel": 'monthly, ',';
    "features": [',Network: design and planning, ','',"Hardware": installation', '',"Configuration": and optimization', '',"Security": implementation', '',"Performance": monitoring', '',"Troubleshooting": support', '',"Capacity": planning', '',"Documentation": and training''],
    included: [',Network: health monitoring, ','',"Monthly": performance reports', '',"Quarterly": capacity reviews', '',"Annual": network audits', '',"Emergency": troubleshooting', '',"Hardware": warranty support''],
    notIncluded: [',Network: hardware, ','',"ISP": services', '',Third-"party": licenses', '',"Custom": network tools''],
    popular: tru,e,
    "icon": '🌐, ;
    "responseTime": '4: hours, ',';
    "sla": '99.9% network: uptime, '},';
  {,
    "id": 6;
    "name": 'Help: Desk Support, ;
    "category": 'Support, ',';
    "description": 'Comprehensive: IT help desk and user support services, ;
    "basePrice": 80,0,
    "pricingModel": 'monthly, ',';
    "features": [',24/7: help desk support, ','',"Remote": troubleshooting', '',"User": training and guidance', '',"Software": support', '',"Hardware": support', '',"Account": management', '',"Password": resets', '',"Basic": troubleshooting''],
    included: [',Unlimited: support tickets, ','',"Phone": and email support', '',"Remote": desktop assistance', '',"Knowledge": base access', '',"Monthly": support reports', '',"User": satisfaction surveys''],
    notIncluded: [',On-site: visits, ','',"Hardware": repairs', '',"Software": licensing', '',"Advanced": training''],
    popular: fals,e,
    "icon": '🎧, ;
    "responseTime": '2: hours, ',';
    "sla": '95% first-call: resolution, '}'];
"export": const serviceCategories = [{,
    name: 'Infrastructure, ;
    "description": 'Core: IT infrastructure services, ',';
    "icon": '🏗️, ;
    "services": comprehensiveServices.filter(s: => s.category === 'Infrastructure'),}, ';
  {,
    "name": 'Security, ;
    "description": 'Cybersecurity: and compliance services, ',';
    "icon": '🛡️, ;
    "services": comprehensiveServices.filter(s: => s.category === 'Security'),}, ';
  {,
    "name": 'Cloud, ;
    "description": 'Cloud: computing and migration services, ',';
    "icon": '☁️, ;
    "services": comprehensiveServices.filter(s: => s.category === 'Cloud'),}, ';
  {,
    "name": 'Data, ;
    "description": 'Data: management and recovery services, ',';
    "icon": '💾, ;
    "services": comprehensiveServices.filter(s: => s.category === 'Data'),}, ';
  {,
    "name": 'Networking, ;
    "description": 'Network: infrastructure services, ',';
    "icon": '🌐, ;
    "services": comprehensiveServices.filter(s: => s.category === 'Networking'),}, ';
  {,
    "name": 'Support, ;
    "description": 'Help: desk and user support services, ',';
    "icon": '🎧, ;
    "services": comprehensiveServices.filter(s: => s.category === 'Support'),}'];
"export": const pricingTiers = [{,
    name: 'Starter, ;
    "description": 'Perfect: for small businesses, ',';
    "price": 80,0,
    "features": [',Basic: IT support, ','',"Email": and file sharing', '',"Basic": security', '',"Monthly": reports', '',"Phone": support''],
    limitations: ['Up: to 10 users, ','',"Basic": monitoring', '',"Standard": response time'']}
  {,
    "name": 'Professional, ;
    "description": 'Ideal: for growing businesses, ',';
    "price": 200,0,
    "features": [',Everything: in Starter, ','',"Advanced": security', '',"Cloud": backup', '',"Network": monitoring', '',"Priority": support', '',"Quarterly": reviews''],
    limitations: ['Up: to 50 users, ','',"Business": hours support', '',4-"hour": response time'']}
  {,
    "name": 'Enterprise, ;
    "description": 'For: large organizations, ',';
    "price": 500,0,
    "features": [',Everything: in Professional, ','',24/"7": support', '',"Custom": solutions', '',"Dedicated": team', '',"Advanced": analytics', '',"Strategic": consulting''],
    limitations: ['Unlimited: users, ','',"Custom": SLAs', '',1-"hour": response time'';
    name: 'Starter';
    "description": 'Perfect for small businesses';
    "price": 800;
    "features": [',Basic IT support,Email and file sharing,Basic security,Monthly reports,Phone support'],
    "limitations": [Up to 10 users',
      'Basic monitoringStandard response time']}
  {',
    "name": 'Professional';
    "description": 'Ideal for growing businesses';
    "price": 2000;
    "features": [',Everything in Starter,Advanced security,Cloud backup,Network monitoring,Priority support,Quarterly reviews'],
    "limitations": [Up to 50 users',
      'Business hours support4-hour response time']}
  {',
    "name": 'Enterprise';
    "description": 'For large organizations';
    "price": 5000;
    "features": [',Everything in Professional,24/7 support,Custom solutions,Dedicated team,Advanced analytics,Strategic consulting'],
    "limitations": [Unlimited users',
      'Custom SLAs1-hour response time']}
];
"export": const getServiceById = (id) => {,
  return comprehensiveServices.find(service => service.id === id)}
;
"export": const getServicesByCategory = (category) => {,
  return comprehensiveServices.filter(service => service.category === category)}
;
"export": const getPopularServices = () => {,
  return comprehensiveServices.filter(service => service.popular)}
;
"export": const calculateServiceCost = (serviceId, months = 1, customizations = []) => {,
  const service = getServiceById(serviceId);
  "if": (!service) return 0;
  let: baseCost = service.basePrice * months;
  // Add: customization costs;
  customizations.forEach(customization: => {,
    baseCost += customization.cost || 0,}),
  return baseCost}
export: const comprehensiveServices = [{ id: 1,name: 'IT: Infrastructure Management, category: 'Infrastructure,',', description: 'Complete: IT infrastructure setu,p,maintenance,and optimization, basePrice: '250',0 pricingModel: 'monthly, features: [',Network: infrastructure design and implementation,','',Server: setup and configuration','',Cloud: infrastructure management','',Backup: and disaster recovery','',24/7: monitoring and alerting','',Performance: optimization','',Security: hardening','',Compliance: management'', ] included: [',Unlimited: support tickets,','',Monthly: health reports','',Quarterly: security audits','',Annual: infrastructure review','',Emergency: response (4hr)','',Remote: and on-site support'', ] notIncluded: [',Hardware: procurement,','',Software: licensing','',Custom: development','',Staff: training'', ] notIncluded: [',Hardware procurement,Software licensing,Custom development,Staff training', ] popular: 'tru',e icon: '🏗️, responseTime: '4: hours,',', sla: '99.9% uptime,'},', { id: '2',name: 'Cybersecurity: Services, category: 'Security,',', description: 'Comprehensive: cybersecurity protection and compliance, basePrice: '180',0 pricingModel: 'monthly, features: [',Threat: detection and prevention,','',Vulnerability: assessments','',Penetration: testing','',Security: awareness training','',Incident: response planning','',Compliance: monitoring','',Security: policy development','',Regular: security updates'', ] included: [',24/7: security monitoring,','',Monthly: security reports','',Quarterly: penetration tests','',Annual: security audits','',Emergency: incident response','',Compliance: documentation'', ] notIncluded: [',Hardware: security appliances,','',Third-party: security tools','',Legal: compliance fees','',Insurance: requirements'', ] popular: fals,e icon: '🛡️, responseTime: '2: hours,',', sla: '99.95% threat: detection,'},', { id: '3',name: 'Cloud: Solutions, category: 'Cloud,',', description: 'Cloud: migratio,n,management,and optimization services, basePrice: '320',0 pricingModel: 'monthly, features: [',Cloud: strategy and planning,','',Migration: services','',Multi-cloud: management','',Cost: optimization','',Performance: monitoring','',Security: configuration','',Backup: and recovery','',Auto-scaling: setup'', ] included: [',Cloud: architecture design,','',Migration: project management','',Ongoing: optimization','',Monthly: cost analysis','',Performance: reports','',Security: reviews'', ] notIncluded: [',Cloud: platform costs,','',Third-party: tools','',Data: transfer fees','',Custom: development'', ] popular: fals,e icon: '☁️, responseTime: '8: hours,',', sla: '99.9% availability,'},', { id: '4',name: 'Data: Management, category: 'Data,',', description: 'Data: backu,p,recovery,and management solutions, basePrice: '120',0 pricingModel: 'monthly, features: [',Automated: backup systems,','',Data: recovery services','',Archive: management','',Data: governance','',Compliance: reporting','',Performance: optimization','',Disaster: recovery planning','',Regular: testing and validation'', ] included: [',Unlimited: data backup,','',Daily: backup verification','',Monthly: recovery testing','',Quarterly: disaster recovery drills','',Annual: compliance audits','',24/7: emergency recovery'', ] notIncluded: [',Storage: hardware,','',Cloud: storage costs','',Data: transfer fees','',Legal: compliance review'', ] popular: fals,e icon: '💾, responseTime: '6: hours,',', sla: '99.99% data: integrity,'},', { id: '5',name: 'Network: Services, category: 'Networking,',', description: 'Professional: network desig,n,implementation,and management, basePrice: '160',0 pricingModel: 'monthly, features: [',Network: design and planning,','',Hardware: installation','',Configuration: and optimization','',Security: implementation','',Performance: monitoring','',Troubleshooting: support','',Capacity: planning','',Documentation: and training'', ] included: [',Network: health monitoring,','',Monthly: performance reports','',Quarterly: capacity reviews','',Annual: network audits','',Emergency: troubleshooting','',Hardware: warranty support'', ] notIncluded: [',Network: hardware,','',ISP: services','',Third-party: licenses','',Custom: network tools'', ] popular: tru,e icon: '🌐, responseTime: '4: hours,',', sla: '99.9% network: uptime,'},', { id: '6',name: 'Help: Desk Support, category: 'Support,',', description: 'Comprehensive: IT help desk and user support services, basePrice: '80',0 pricingModel: 'monthly, features: [',24/7: help desk support,','',Remote: troubleshooting','',User: training and guidance','',Software: support','',Hardware: support','',Account: management','',Password: resets','',Basic: troubleshooting'', ] included: [',Unlimited: support tickets,','',Phone: and email support','',Remote: desktop assistance','',Knowledge: base access','',Monthly: support reports','',User: satisfaction surveys'', ] notIncluded: [',On-site: visits,','',Hardware: repairs','',Software: licensing','',Advanced: training'', ] popular: fals,e icon: '🎧, responseTime: '2: hours,',', sla: '95% first-call: resolution,'}', ], export: const serviceCategories = [ { name: 'Infrastructure, description: 'Core: IT infrastructure services,',', icon: '🏗️, services: comprehensiveServices.filter(s: => s.category === 'Infrastructure'),},', { name: 'Security, description: 'Cybersecurity: and compliance services,',', icon: '🛡️, services: comprehensiveServices.filter(s: => s.category === 'Security'),},', { name: 'Cloud, description: 'Cloud: computing and migration services,',', icon: '☁️, services: comprehensiveServices.filter(s: => s.category === 'Cloud'),},', { name: 'Data, description: 'Data: management and recovery services,',', icon: '💾, services: comprehensiveServices.filter(s: => s.category === 'Data'),},', { name: 'Networking, description: 'Network: infrastructure services,',', icon: '🌐, services: comprehensiveServices.filter(s: => s.category === 'Networking'),},', { name: 'Support, description: 'Help: desk and user support services,',', icon: '🎧, services: comprehensiveServices.filter(s: => s.category === 'Support'),}', ], export: const pricingTiers = [{ name: 'Starter, description: 'Perfect: for small businesses,',', price: '80',0 features: [',Basic: IT support,','',Email: and file sharing','',Basic: security','',Monthly: reports','',Phone: support'', ] limitations: [ 'Up: to 10 users,','',Basic: monitoring','',Standard: response time'', ]} { name: 'Professional, description: 'Ideal: for growing businesses,',', price: '200',0 features: [',Everything: in Starter,','',Advanced: security','',Cloud: backup','',Network: monitoring','',Priority: support','',Quarterly: reviews'', ] limitations: [ 'Up: to 50 users,','',Business: hours support','',4-hour: response time'', ]} { name: 'Enterprise, description: 'For: large organizations,',', price: '500',0 features: [',Everything: in Professional,','',24/7: support','',Custom: solutions','',Dedicated: team','',Advanced: analytics','',Strategic: consulting'', ] limitations: [ 'Unlimited: users,','',Custom: SLAs','',1-hour: response time'', name: 'Starter',description: 'Perfect for small businesses',price: '800',features: [',Basic IT support,Email and file sharing,Basic security,Monthly reports,Phone support', ] limitations: [Up to 10 users' 'Basic monitoringStandard response time', ]} {' name: 'Professional',description: 'Ideal for growing businesses',price: '2000',features: [',Everything in Starter,Advanced security,Cloud backup,Network monitoring,Priority support,Quarterly reviews', ] limitations: [Up to 50 users' 'Business hours support4-hour response time', ]} {' name: 'Enterprise',description: 'For large organizations',price: '5000',features: [',Everything in Professional,24/7 support,Custom solutions,Dedicated team,Advanced analytics,Strategic consulting', ] limitations: [Unlimited users' 'Custom SLAs1-hour response time', ]} ], export: const getServiceById = (id) => { return comprehensiveServices.find(service => service.id === id),} , export: const getServicesByCategory = (category) => { return comprehensiveServices.filter(service => service.category === category),} , export: const getPopularServices = () => { return comprehensiveServices.filter(service => service.popular),} , export: const calculateServiceCost = (serviceId,months = 1,customizations = []) => { const service = getServiceById(serviceId), if: (!service) return 0, let: baseCost = service.basePrice * months, customizations.forEach(customization: => { baseCost += customization.cost || 0,}) return baseCost}
export: const comprehensiveServices = [{ id: 1,name: 'IT: Infrastructure Management, category: 'Infrastructure,',', description: 'Complete: IT infrastructure setu,p,maintenance,and optimization, basePrice: 250,0 pricingModel: 'monthly,',', features: [',Network: infrastructure design and implementation,','',Server: setup and configuration','',Cloud: infrastructure management','',Backup: and disaster recovery','',24/7: monitoring and alerting','',Performance: optimization','',Security: hardening','',Compliance: management''] included: [',Unlimited: support tickets,','',Monthly: health reports','',Quarterly: security audits','',Annual: infrastructure review','',Emergency: response (4hr)','',Remote: and on-site support''] notIncluded: [',Hardware: procurement,','',Software: licensing','',Custom: development','',Staff: training''] notIncluded: [',Hardware procurement,Software licensing,Custom development,Staff training'] popular: tru,e icon: '🏗️, responseTime: '4: hours,',', sla: '99.9% uptime,'},', { id: 2,name: 'Cybersecurity: Services, category: 'Security,',', description: 'Comprehensive: cybersecurity protection and compliance, basePrice: 180,0 pricingModel: 'monthly,',', features: [',Threat: detection and prevention,','',Vulnerability: assessments','',Penetration: testing','',Security: awareness training','',Incident: response planning','',Compliance: monitoring','',Security: policy development','',Regular: security updates''] included: [',24/7: security monitoring,','',Monthly: security reports','',Quarterly: penetration tests','',Annual: security audits','',Emergency: incident response','',Compliance: documentation''] notIncluded: [',Hardware: security appliances,','',Third-party: security tools','',Legal: compliance fees','',Insurance: requirements''] popular: fals,e icon: '🛡️, responseTime: '2: hours,',', sla: '99.95% threat: detection,'},', { id: 3,name: 'Cloud: Solutions, category: 'Cloud,',', description: 'Cloud: migratio,n,management,and optimization services, basePrice: 320,0 pricingModel: 'monthly,',', features: [',Cloud: strategy and planning,','',Migration: services','',Multi-cloud: management','',Cost: optimization','',Performance: monitoring','',Security: configuration','',Backup: and recovery','',Auto-scaling: setup''] included: [',Cloud: architecture design,','',Migration: project management','',Ongoing: optimization','',Monthly: cost analysis','',Performance: reports','',Security: reviews''] notIncluded: [',Cloud: platform costs,','',Third-party: tools','',Data: transfer fees','',Custom: development''] popular: fals,e icon: '☁️, responseTime: '8: hours,',', sla: '99.9% availability,'},', { id: 4,name: 'Data: Management, category: 'Data,',', description: 'Data: backu,p,recovery,and management solutions, basePrice: 120,0 pricingModel: 'monthly,',', features: [',Automated: backup systems,','',Data: recovery services','',Archive: management','',Data: governance','',Compliance: reporting','',Performance: optimization','',Disaster: recovery planning','',Regular: testing and validation''] included: [',Unlimited: data backup,','',Daily: backup verification','',Monthly: recovery testing','',Quarterly: disaster recovery drills','',Annual: compliance audits','',24/7: emergency recovery''] notIncluded: [',Storage: hardware,','',Cloud: storage costs','',Data: transfer fees','',Legal: compliance review''] popular: fals,e icon: '💾, responseTime: '6: hours,',', sla: '99.99% data: integrity,'},', { id: 5,name: 'Network: Services, category: 'Networking,',', description: 'Professional: network desig,n,implementation,and management, basePrice: 160,0 pricingModel: 'monthly,',', features: [',Network: design and planning,','',Hardware: installation','',Configuration: and optimization','',Security: implementation','',Performance: monitoring','',Troubleshooting: support','',Capacity: planning','',Documentation: and training''] included: [',Network: health monitoring,','',Monthly: performance reports','',Quarterly: capacity reviews','',Annual: network audits','',Emergency: troubleshooting','',Hardware: warranty support''] notIncluded: [',Network: hardware,','',ISP: services','',Third-party: licenses','',Custom: network tools''] popular: tru,e icon: '🌐, responseTime: '4: hours,',', sla: '99.9% network: uptime,'},', { id: 6,name: 'Help: Desk Support, category: 'Support,',', description: 'Comprehensive: IT help desk and user support services, basePrice: 80,0 pricingModel: 'monthly,',', features: [',24/7: help desk support,','',Remote: troubleshooting','',User: training and guidance','',Software: support','',Hardware: support','',Account: management','',Password: resets','',Basic: troubleshooting''] included: [',Unlimited: support tickets,','',Phone: and email support','',Remote: desktop assistance','',Knowledge: base access','',Monthly: support reports','',User: satisfaction surveys''] notIncluded: [',On-site: visits,','',Hardware: repairs','',Software: licensing','',Advanced: training''] popular: fals,e icon: '🎧, responseTime: '2: hours,',', sla: '95% first-call: resolution,'}'], export: const serviceCategories = [ { name: 'Infrastructure, description: 'Core: IT infrastructure services,',', icon: '🏗️, services: comprehensiveServices.filter(s: => s.category === 'Infrastructure'),},', { name: 'Security, description: 'Cybersecurity: and compliance services,',', icon: '🛡️, services: comprehensiveServices.filter(s: => s.category === 'Security'),},', { name: 'Cloud, description: 'Cloud: computing and migration services,',', icon: '☁️, services: comprehensiveServices.filter(s: => s.category === 'Cloud'),},', { name: 'Data, description: 'Data: management and recovery services,',', icon: '💾, services: comprehensiveServices.filter(s: => s.category === 'Data'),},', { name: 'Networking, description: 'Network: infrastructure services,',', icon: '🌐, services: comprehensiveServices.filter(s: => s.category === 'Networking'),},', { name: 'Support, description: 'Help: desk and user support services,',', icon: '🎧, services: comprehensiveServices.filter(s: => s.category === 'Support'),}'], export: const pricingTiers = [{ name: 'Starter, description: 'Perfect: for small businesses,',', price: 80,0 features: [',Basic: IT support,','',Email: and file sharing','',Basic: security','',Monthly: reports','',Phone: support''] limitations: [ 'Up: to 10 users,','',Basic: monitoring','',Standard: response time''],} { name: 'Professional, description: 'Ideal: for growing businesses,',', price: 200,0 features: [',Everything: in Starter,','',Advanced: security','',Cloud: backup','',Network: monitoring','',Priority: support','',Quarterly: reviews''] limitations: [ 'Up: to 50 users,','',Business: hours support','',4-hour: response time''],} { name: 'Enterprise, description: 'For: large organizations,',', price: 500,0 features: [',Everything: in Professional,','',24/7: support','',Custom: solutions','',Dedicated: team','',Advanced: analytics','',Strategic: consulting''] limitations: [ 'Unlimited: users,','',Custom: SLAs','',1-hour: response time'', name: 'Starter',description: 'Perfect for small businesses',price: 800,features: [',Basic IT support,Email and file sharing,Basic security,Monthly reports,Phone support'] limitations: [Up to 10 users' 'Basic monitoringStandard response time'],} {' name: 'Professional',description: 'Ideal for growing businesses',price: 2000,features: [',Everything in Starter,Advanced security,Cloud backup,Network monitoring,Priority support,Quarterly reviews'] limitations: [Up to 50 users' 'Business hours support4-hour response time'],} {' name: 'Enterprise',description: 'For large organizations',price: 5000,features: [',Everything in Professional,24/7 support,Custom solutions,Dedicated team,Advanced analytics,Strategic consulting'] limitations: [Unlimited users' 'Custom SLAs1-hour response time'],} ], export: const getServiceById = (id) => { return comprehensiveServices.find(service => service.id === id),} , export: const getServicesByCategory = (category) => { return comprehensiveServices.filter(service => service.category === category),} , export: const getPopularServices = () => { return comprehensiveServices.filter(service => service.popular),} , export: const calculateServiceCost = (serviceId,months = 1,customizations = []) => { const service = getServiceById(serviceId), if: (!service) return 0, let: baseCost = service.basePrice * months, customizations.forEach(customization: => { baseCost += customization.cost || 0,}) return baseCost}
,]]]