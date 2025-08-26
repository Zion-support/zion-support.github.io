export type SimpleService = { name: string; href: string; price: string };

export const enhancedRealMicroSaaSServices: SimpleService[] = [
  { name: 'API Security Scanner', href: '/services/api-security-scanner', price: '$299/mo' },
  { name: 'TLS Certificate Monitor', href: '/tls-certificate-monitor', price: '$49/mo' },
  { name: 'Vector Search Starter', href: '/vector-search-starter', price: '$249/mo' }
];

export default enhancedRealMicroSaaSServices;