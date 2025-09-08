

   title: string;
   category: &apos;products&apos; | &apos;talent&apos; | &apos;equipment&apos; | &apos;services';
   description: string;
   price: number;
   rating: number;
   reviews: number;
   views: number;
   likes: number;
   image: string;
   tags: string[];
   featured: boolean;
   seller: { name: string;

  'available' |;
  'limited' |;

  products', description: 'High-performance computing cluster optimized for AI workloads with GPU acceleration and scalable architecture., price: 25000, rating: 4.9, reviews: 127, views: 2847, likes: 156, image:,

  id: string;
  text: string;
  type: string;
}

export function generateSearchSuggestions(): SearchSuggestion[] {
  return [
    { id: '1', text: 'AI Services', type: 'category' },
    { id: '2', text: 'Cybersecurity', type: 'category' },
    { id: '3', text: 'Cloud Solutions', type: 'category' },
    { id: '4', text: 'Data Analytics', type: 'category' },
    { id: '5', text: 'Web Development', type: 'category' },
    { id: '6', text: 'IT Consulting', type: 'category' },
    { id: '7', text: 'Blockchain', type: 'category' },
    { id: '8', text: 'Process Automation', type: 'category' },
    { id: '9', text: 'IoT Solutions', type: 'category' },
    { id: '10', text: 'Quantum Computing', type: 'category' },
    { id: '11', text: 'AR/VR Development', type: 'category' },
    { id: '12', text: 'Green Technology', type: 'category' },
    { id: '13', text: 'Micro SAAS', type: 'service' },
    { id: '14', text: 'Enterprise Solutions', type: 'service' },
    { id: '15', text: 'Custom Software', type: 'service' },
    { id: '16', text: 'Digital Transformation', type: 'service' },
    { id: '17', text: 'Machine Learning', type: 'technology' },
    { id: '18', text: 'DevOps', type: 'technology' },
    { id: '19', text: 'Cybersecurity Audit', type: 'service' },
    { id: '20', text: 'Cloud Migration', type: 'service' }
  ];
}
