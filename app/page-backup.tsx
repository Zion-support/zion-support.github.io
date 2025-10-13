'use client';
const HomePage: React.FC = memo(() => {,
    const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    preloadComponents();
    setIsLoaded(true)}, []);
      benefits: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']},'
    {icon: Cloud,
      benefits: ['AWS/Azure/GCP', 'Container Orchestration', 'Auto-scaling', 'Disaster Recovery']},'
    {icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      benefits: ['Threat Detection', 'Vulnerability Assessment', 'Compliance', 'Incident Response']},'
    {icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions designed specifically for your business requirements.',
      benefits: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration']},'
    {icon: BarChart,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics tools.',
      benefits: ['Business Intelligence', 'Real-time Dashboards', 'Data Visualization', 'Reporting']},'
    {icon: Users,
      title: 'IT Consulting',
      description: 'Expert guidance to help you make the right technology decisions.',
      benefits: ['Technology Strategy', 'Digital Transformation', 'Process Optimization', 'Training']},'
  ];
  const stats = [
    {number: '500+', label: 'Projects Completed' ,},'
    {number: '99.9%', label: 'Uptime Guarantee' ,},'
    {number: '24/7', label: 'Support Available' ,},'
    {number: '50+', label: 'Expert Team Members' ,}]'

        </div>
      </section>
    </div>
  );
};
"
export default PageBackupPage;""`
import React from 'react';

