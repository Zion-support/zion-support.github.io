import { Users, Zap, Database, Shield, CreditCard, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Users as UsersIcon, CreditCard as CreditCardIcon, Zap as ZapIcon2, Shield as ShieldIcon2, Zap as ZapIcon3 } from 'lucide-react';
import { enhancedMicroSaasServices2025 } from '@/data/comprehensiveServices2025';
import { Users, Zap, Database, Shield, CreditCard, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Users as UsersIcon, CreditCard as CreditCardIcon, Zap as ZapIcon2, Shield as ShieldIcon2, Zap as ZapIcon3 } from 'lucide-react';
// Use the enhanced services data
  const microSaasServices = enhancedMicroSaasServices2025;

  const categories = ['all', ...Array.from(new Set(microSaasServices.map(service => service.category)))];
  const pricingModels = ['all', 'Freemium', 'Subscription', 'One-time'];
  const categories = ['all', 'Productivity', 'Finance', 'Marketing', 'CRM', 'Analytics', 'Scheduling', 'Content', 'Security', 'Media', 'Education', 'Sustainability', 'Legal', 'Healthcare', 'Events', 'Inventory', 'Development', 'AI & Automation', 'AI & Analytics', 'Human Resources', 'Data Protection', 'Legal Tech', 'Blockchain', 'IoT', 'Cybersecurity', 'Data & Analytics'];
  const pricingModels = ['all', 'Freemium', 'Premium', 'Enterprise', 'Subscription', 'One-time'];
