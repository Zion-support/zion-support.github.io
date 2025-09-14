export interface CaseStudy {
  id: string;
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial: string;
  author: string;
  role?: string;
  image: string;
  duration: string;
  investment: string;
  roi: string;
  slug?: string;
  excerpt?: string;
  content?: string;
  companyLogo?: string;
  pdf?: string;
  category?: string;
  featured?: boolean;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    slug: 'manufacturing-giant-75-percent-reduction-processing-time',
    title: 'Manufacturing Giant Reduces Processing Time by 75% with AI Automation',
    company: 'Global Manufacturing Corp',
    industry: 'Manufacturing',
    challenge: 'Manual processing of production orders and inventory management was causing delays and errors',
    solution: 'AI-Powered Business Process Automation Suite',
    results: [
      '75% reduction in processing time',
      '90% decrease in manual errors',
      '300% increase in productivity',
      '$2.5M annual cost savings'
    ],
    testimonial: 'Zion Tech Group transformed our operations. We can now process orders in minutes instead of hours, and our team can focus on strategic initiatives rather than repetitive tasks.',
    author: 'Sarah Johnson',
    role: 'COO',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=400',
    duration: '8 weeks',
    investment: '$299/month',
    roi: '400% in first year',
    excerpt: 'Global Manufacturing Corp achieved 75% reduction in processing time and $2.5M annual cost savings through AI automation.',
    content: `
      <h2>Challenge</h2>
      <p>Global Manufacturing Corp was struggling with manual processing of production orders and inventory management, which was causing significant delays and errors in their operations.</p>
      
      <h2>Solution</h2>
      <p>We implemented our AI-Powered Business Process Automation Suite, which automated their entire order processing and inventory management workflow.</p>
      
      <h2>Results</h2>
      <ul>
        <li>75% reduction in processing time</li>
        <li>90% decrease in manual errors</li>
        <li>300% increase in productivity</li>
        <li>$2.5M annual cost savings</li>
      </ul>
      
      <blockquote>
        <p>"Zion Tech Group transformed our operations. We can now process orders in minutes instead of hours, and our team can focus on strategic initiatives rather than repetitive tasks."</p>
        <cite>— Sarah Johnson, COO</cite>
      </blockquote>
    `,
    companyLogo: '/logos/global-manufacturing-corp.png',
    category: 'AI Automation',
    featured: true
  },
  {
    id: '2',
    slug: 'ecommerce-platform-300-percent-increase-organic-traffic',
    title: 'E-commerce Platform Increases Organic Traffic by 300%',
    company: 'TechRetail Solutions',
    industry: 'E-commerce',
    challenge: 'Low organic traffic and high content creation costs were limiting growth',
    solution: 'Enterprise AI Content Generation Platform',
    results: [
      '300% increase in organic traffic',
      '80% reduction in content creation costs',
      '200% improvement in SEO rankings',
      '150% increase in conversion rates'
    ],
    testimonial: 'The AI content platform has been a game-changer. We\'re now publishing high-quality content at scale while maintaining our brand voice and seeing incredible SEO results.',
    author: 'Mike Chen',
    role: 'Marketing Director',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=400',
    duration: '6 weeks',
    investment: '$199/month',
    roi: '500% in first year',
    excerpt: 'TechRetail Solutions achieved 300% increase in organic traffic and 80% reduction in content creation costs through AI content generation.',
    content: `
      <h2>Challenge</h2>
      <p>TechRetail Solutions was struggling with low organic traffic and high content creation costs that were limiting their growth potential.</p>
      
      <h2>Solution</h2>
      <p>We deployed our Enterprise AI Content Generation Platform, which automated their content creation process while maintaining brand consistency.</p>
      
      <h2>Results</h2>
      <ul>
        <li>300% increase in organic traffic</li>
        <li>80% reduction in content creation costs</li>
        <li>200% improvement in SEO rankings</li>
        <li>150% increase in conversion rates</li>
      </ul>
      
      <blockquote>
        <p>"The AI content platform has been a game-changer. We're now publishing high-quality content at scale while maintaining our brand voice and seeing incredible SEO results."</p>
        <cite>— Mike Chen, Marketing Director</cite>
      </blockquote>
    `,
    companyLogo: '/logos/techretail-solutions.png',
    category: 'AI Content',
    featured: true
  },
  {
    id: '3',
    slug: 'healthcare-provider-90-percent-improvement-patient-scheduling',
    title: 'Healthcare Provider Improves Patient Scheduling by 90%',
    company: 'Metro Health Systems',
    industry: 'Healthcare',
    challenge: 'Complex patient scheduling and resource allocation were causing inefficiencies',
    solution: 'AI Customer Behavior Analytics & Insights Platform',
    results: [
      '90% improvement in patient scheduling efficiency',
      '50% reduction in no-show rates',
      '35% increase in patient satisfaction',
      '40% improvement in resource utilization'
    ],
    testimonial: 'Our patient scheduling system is now incredibly efficient. The AI insights help us predict patient needs and optimize our resources, resulting in better patient care and operational efficiency.',
    author: 'Dr. Emily Rodriguez',
    role: 'Chief Medical Officer',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&h=400',
    duration: '10 weeks',
    investment: '$449/month',
    roi: '350% in first year',
    excerpt: 'Metro Health Systems achieved 90% improvement in patient scheduling efficiency and 50% reduction in no-show rates through AI analytics.',
    content: `
      <h2>Challenge</h2>
      <p>Metro Health Systems was facing complex patient scheduling and resource allocation challenges that were causing operational inefficiencies.</p>
      
      <h2>Solution</h2>
      <p>We implemented our AI Customer Behavior Analytics & Insights Platform to optimize their scheduling and resource allocation processes.</p>
      
      <h2>Results</h2>
      <ul>
        <li>90% improvement in patient scheduling efficiency</li>
        <li>50% reduction in no-show rates</li>
        <li>35% increase in patient satisfaction</li>
        <li>40% improvement in resource utilization</li>
      </ul>
      
      <blockquote>
        <p>"Our patient scheduling system is now incredibly efficient. The AI insights help us predict patient needs and optimize our resources, resulting in better patient care and operational efficiency."</p>
        <cite>— Dr. Emily Rodriguez, Chief Medical Officer</cite>
      </blockquote>
    `,
    companyLogo: '/logos/metro-health-systems.png',
    category: 'AI Analytics',
    featured: false
  },
  {
    id: '4',
    slug: 'financial-institution-90-percent-reduction-security-incidents',
    title: 'Financial Institution Reduces Security Incidents by 90%',
    company: 'SecureBank International',
    industry: 'Financial Services',
    challenge: 'Increasing cyber threats and complex compliance requirements',
    solution: 'Zero-Trust Security Architecture Implementation',
    results: [
      '90% reduction in security incidents',
      '100% compliance with regulatory requirements',
      '80% reduction in security response time',
      '60% improvement in threat detection accuracy'
    ],
    testimonial: 'Implementing zero-trust security with Zion Tech Group has significantly strengthened our security posture. We now have complete visibility and control over our systems.',
    author: 'David Kim',
    role: 'CISO',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=400',
    duration: '12 weeks',
    investment: '$2,500 project-based',
    roi: '250% in first year',
    excerpt: 'SecureBank International achieved 90% reduction in security incidents and 100% compliance with regulatory requirements through zero-trust security.',
    content: `
      <h2>Challenge</h2>
      <p>SecureBank International was facing increasing cyber threats and complex compliance requirements that were challenging their security posture.</p>
      
      <h2>Solution</h2>
      <p>We implemented a comprehensive Zero-Trust Security Architecture that provided complete visibility and control over their systems.</p>
      
      <h2>Results</h2>
      <ul>
        <li>90% reduction in security incidents</li>
        <li>100% compliance with regulatory requirements</li>
        <li>80% reduction in security response time</li>
        <li>60% improvement in threat detection accuracy</li>
      </ul>
      
      <blockquote>
        <p>"Implementing zero-trust security with Zion Tech Group has significantly strengthened our security posture. We now have complete visibility and control over our systems."</p>
        <cite>— David Kim, CISO</cite>
      </blockquote>
    `,
    companyLogo: '/logos/securebank-international.png',
    category: 'Cybersecurity',
    featured: false
  },
  {
    id: '5',
    slug: 'saas-startup-500-percent-increase-content-production',
    title: 'SaaS Startup Scales Content Production by 500%',
    company: 'CloudFlow Technologies',
    industry: 'SaaS',
    challenge: 'Limited resources for content marketing and lead generation',
    solution: 'Enterprise AI Content Generation Platform',
    results: [
      '500% increase in content production',
      '200% improvement in lead generation',
      '150% increase in website traffic',
      '120% improvement in conversion rates'
    ],
    testimonial: 'As a startup, we needed to scale our content marketing quickly and efficiently. The AI platform allowed us to compete with much larger companies in our space.',
    author: 'Lisa Wang',
    role: 'CEO',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&h=400',
    duration: '4 weeks',
    investment: '$199/month',
    roi: '600% in first year',
    excerpt: 'CloudFlow Technologies achieved 500% increase in content production and 200% improvement in lead generation through AI content automation.',
    content: `
      <h2>Challenge</h2>
      <p>CloudFlow Technologies, as a startup, had limited resources for content marketing and lead generation, making it difficult to compete with larger companies.</p>
      
      <h2>Solution</h2>
      <p>We deployed our Enterprise AI Content Generation Platform to automate their content creation and marketing processes.</p>
      
      <h2>Results</h2>
      <ul>
        <li>500% increase in content production</li>
        <li>200% improvement in lead generation</li>
        <li>150% increase in website traffic</li>
        <li>120% improvement in conversion rates</li>
      </ul>
      
      <blockquote>
        <p>"As a startup, we needed to scale our content marketing quickly and efficiently. The AI platform allowed us to compete with much larger companies in our space."</p>
        <cite>— Lisa Wang, CEO</cite>
      </blockquote>
    `,
    companyLogo: '/logos/cloudflow-technologies.png',
    category: 'AI Content',
    featured: false
  }
];