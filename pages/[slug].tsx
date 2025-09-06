import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  features: string[];
}

const services: Service[] = [
  {
    id: 'ai-chatbot',
    title: 'AI Chatbot Service',
    description: 'Custom AI chatbot for your business',
    price: '$99/month',
    features: ['24/7 support', 'Custom training', 'Analytics dashboard']
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics Platform',
    description: 'Advanced analytics and reporting',
    price: '$199/month',
    features: ['Real-time dashboards', 'Custom reports', 'API access']
  }
];

export default function ServicePage() {
  const router = useRouter();
  const { slug } = router.query;
  const [service, setService] = useState<Service | null>(null);

  useEffect(() => {
    if (slug) {
      const foundService = services.find(s => s.id === slug);
      setService(foundService || null);
    }
  }, [slug]);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
      <p className="text-lg mb-6">{service.description}</p>
      <div className="bg-gray-100 p-6 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-4">Features</h2>
        <ul className="list-disc list-inside">
          {service.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="text-2xl font-bold text-blue-600">{service.price}</div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = services.map(service => ({
    params: { slug: service.id }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const service = services.find(s => s.id === params?.slug);

  return {
    props: {
      service: service || null
    }
  };
};