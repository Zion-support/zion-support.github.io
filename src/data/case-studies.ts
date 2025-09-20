<<<<<<< HEAD
export const CASE_STUDIES = [
  {
    id: '1',
    title: 'AI-Powered Customer Service Transformation',
    description: 'How we helped a Fortune 500 company reduce support costs by 60% using AI chatbots',
    client: 'TechCorp Inc.',
    industry: 'Technology',
    duration: '6 months',
    technologies: ['React', 'Node.js', 'OpenAI', 'MongoDB'],
    challenge: 'The client was struggling with high customer service costs and long response times.',
    solution: 'We implemented an AI-powered chatbot system that could handle 80% of customer inquiries automatically.',
    results: 'Reduced support costs by 60% and improved customer satisfaction scores by 40%.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop',
    slug: 'ai-customer-service-transformation',
    metrics: [
      { label: 'Cost Reduction', value: '60%' },
      { label: 'Response Time', value: '2 min' },
      { label: 'Customer Satisfaction', value: '95%' }
    ]
  },
  {
    id: '2',
    title: 'E-commerce Platform Optimization',
    description: 'Scaled a growing e-commerce platform to handle 10x traffic increase',
    client: 'ShopFast',
    industry: 'E-commerce',
    duration: '4 months',
    technologies: ['Next.js', 'AWS', 'Redis', 'PostgreSQL'],
    challenge: 'The platform was experiencing performance issues and couldn\'t handle peak traffic.',
    solution: 'We optimized the architecture, implemented caching, and scaled the infrastructure.',
    results: 'Achieved 99.9% uptime and handled 10x more concurrent users.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
    slug: 'ecommerce-platform-optimization',
    metrics: [
      { label: 'Uptime', value: '99.9%' },
      { label: 'Performance', value: '3x faster' },
      { label: 'Scalability', value: '10x' }
    ]
=======
export interface CaseStudy {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  client: string;
  industry: string;
  duration: string;
  technologies: string[];
  results?: Array<{
    value: string;
    label: string;
  }>;
  image: string;
  featured: boolean;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    title: "AI-Powered Supply Chain Optimization for Global Retailer",
    slug: "ai-supply-chain-optimization",
    excerpt: "How we helped a global retailer reduce supply chain costs by 30% using AI-powered demand forecasting and inventory optimization.",
    content: `
      <h2>Challenge</h2>
      <p>A global retailer with operations in 50+ countries was struggling with supply chain inefficiencies, leading to stockouts, overstock situations, and increased costs. The company needed a solution to optimize their inventory management and demand forecasting across multiple regions and product categories.</p>
      
      <h2>Solution</h2>
      <p>We developed a comprehensive AI-powered supply chain optimization platform that combines machine learning algorithms for demand forecasting, inventory optimization, and logistics planning. The solution integrates with their existing ERP systems and provides real-time insights and recommendations.</p>
      
      <h2>Implementation</h2>
      <p>The implementation involved:</p>
      <ul>
        <li>Data integration from multiple sources (ERP, POS, weather, economic indicators)</li>
        <li>Development of machine learning models for demand forecasting</li>
        <li>Creation of optimization algorithms for inventory management</li>
        <li>Real-time dashboard for supply chain visibility</li>
        <li>Automated reorder point calculations</li>
      </ul>
      
      <h2>Results</h2>
      <p>The AI-powered solution delivered significant improvements across all key metrics, resulting in reduced costs, improved customer satisfaction, and better inventory management.</p>
    `,
    client: "Global Retail Corp",
    industry: "Retail",
    duration: "6 months",
    technologies: ["Python", "TensorFlow", "Apache Kafka", "PostgreSQL", "React", "Docker"],
    results: [
      { value: "30%", label: "Reduction in supply chain costs" },
      { value: "25%", label: "Improvement in forecast accuracy" },
      { value: "40%", label: "Reduction in stockouts" },
      { value: "20%", label: "Decrease in excess inventory" }
    ],
    image: "/api/placeholder/800/400",
    featured: true
  },
  {
    id: 2,
    title: "Machine Learning Fraud Detection for Financial Services",
    slug: "ml-fraud-detection-financial",
    excerpt: "Implementing real-time fraud detection system that reduced false positives by 60% while maintaining 99.9% accuracy in fraud detection.",
    content: `
      <h2>Challenge</h2>
      <p>A leading financial services company was experiencing high rates of false positives in their fraud detection system, leading to customer frustration and increased operational costs. They needed a more accurate and efficient solution that could detect fraud in real-time while minimizing false alarms.</p>
      
      <h2>Solution</h2>
      <p>We developed an advanced machine learning-based fraud detection system that uses ensemble methods and real-time feature engineering to identify fraudulent transactions with high accuracy and low false positive rates.</p>
      
      <h2>Implementation</h2>
      <p>The solution included:</p>
      <ul>
        <li>Real-time transaction processing pipeline</li>
        <li>Feature engineering for behavioral patterns</li>
        <li>Ensemble machine learning models</li>
        <li>Real-time scoring and decision engine</li>
        <li>Continuous model monitoring and retraining</li>
      </ul>
      
      <h2>Results</h2>
      <p>The new fraud detection system significantly improved accuracy while reducing false positives, leading to better customer experience and reduced operational costs.</p>
    `,
    client: "Financial Services Inc",
    industry: "Financial Services",
    duration: "4 months",
    technologies: ["Python", "Scikit-learn", "Apache Spark", "Kafka", "Redis", "AWS"],
    results: [
      { value: "99.9%", label: "Fraud detection accuracy" },
      { value: "60%", label: "Reduction in false positives" },
      { value: "50%", label: "Faster transaction processing" },
      { value: "35%", label: "Reduction in operational costs" }
    ],
    image: "/api/placeholder/800/400",
    featured: false
>>>>>>> 1204603bb86c207deec1187a655ed9994fda37b5
  }
];