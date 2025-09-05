import Layout from '../components/Layout';

const stats = [
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Support Available' },
  { number: '3,500+', label: 'Projects Completed' },
  { number: '95+', label: 'Services & Solutions' },
  { number: '200+', label: 'Expert Team Members' },
  { number: '20+', label: 'Years Experience' }
];

const contactInfo = {
  phone: '+1 (302) 464-0950',
  email: 'info@ziontechgroup.com',
  address: '123 Business Ave, Suite 100, Wilmington, DE 19801'
};

const services = [
  {
    title: 'AI Solutions',
    description: 'Cutting-edge artificial intelligence services',
    icon: Brain
  },
  {
    title: 'Cloud Services',
    description: 'Scalable cloud infrastructure solutions',
    icon: Cloud
  },
  {
    title: 'Cybersecurity',
    description: 'Advanced security solutions for your business',
    icon: Shield
  }
];

export default function HomePage() {
  return (
    <Layout 
      title="Zion Tech Group - Leading AI & Technology Solutions"
      description="Transform your business with cutting-edge AI solutions, cloud services, and technology consulting."
    >
      <div className="min-h-screen bg-gray-50">
        <h1>Welcome to Zion Tech Group</h1>
      </div>
    </Layout>
  );
}
