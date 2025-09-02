export interface ServiceItem {
  id: string;
  title: string;
  category?: string;
  price?: number; // monthly USD for micro SaaS or avg project price for services
  rating?: number;
  image?: string;
  description?: string;
}

// Local, reliable implementation to avoid runtime fetch failures.
// In the future this can be replaced with an API call.
export async function fetchServices(
  category?: string,
  query?: string
): Promise<ServiceItem[]> {
  const allServices: ServiceItem[] = [
    {
      id: "ai-autonomous-systems",
      title: "AI Autonomous Systems",
      category: "AI",
      price: 15000,
      rating: 4.9,
      image: "/images/services/ai-autonomous.jpg",
      description:
        "Intelligent multi-agent copilots, RAG systems, and automated decisioning for operations."
    },
    {
      id: "cloud-platforms",
      title: "Cloud Platforms",
      category: "Cloud",
      price: 20000,
      rating: 4.8,
      image: "/images/services/cloud-platforms.jpg",
      description:
        "Serverless, Kubernetes, data pipelines, and multi-cloud architecture with SRE/FinOps."
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity",
      category: "Security",
      price: 18000,
      rating: 4.9,
      image: "/images/services/cybersecurity.jpg",
      description:
        "Zero-trust, compliance automation, incident response, and comprehensive security audits."
    },
    {
      id: "micro-saas",
      title: "Micro SaaS",
      category: "SaaS",
      price: 12000,
      rating: 4.7,
      image: "/images/services/micro-saas.jpg",
      description:
        "Rapid development of targeted SaaS products with payments, auth, and analytics."
    }
  ];

  let filtered = allServices;
  if (category) {
    filtered = filtered.filter(
      (service) => service.category?.toLowerCase() === category.toLowerCase()
    );
  }
  if (query) {
    const q = query.toLowerCase();
    filtered = filtered.filter(
      (service) =>
        service.title.toLowerCase().includes(q) ||
        service.description?.toLowerCase().includes(q)
    );
  }
  return Promise.resolve(filtered);
}