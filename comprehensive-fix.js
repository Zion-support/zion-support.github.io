import fs from 'fs';
import path from 'path';

// Fix shipping-rates.js
const shippingRatesContent = `// API endpoint for shipping rates
import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'data', 'shipping-rates.json');

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    const { destination, weight } = req.body;
    
    if (!destination || !weight) {
      return res.status(400).json({ error: 'Destination and weight are required' });
    }
    
    // Load existing rates
    let rates = [];
    try {
      if (fs.existsSync(file)) {
        const data = fs.readFileSync(file, 'utf8');
        rates = JSON.parse(data);
      }
    } catch (error) {
      console.error('Error reading existing rates:', error);
    }
    
    // Calculate shipping rate
    const distanceMultiplier = destination === 'US' ? 1 : 2;
    const baseRate = 10;
    const rate = baseRate + (weight * 0.5 * distanceMultiplier);
    
    const newRate = {
      id: Date.now().toString(),
      destination,
      weight,
      rate,
      calculatedAt: new Date().toISOString()
    };
    
    rates.push(newRate);
    
    // Ensure data directory exists
    const dataDir = path.dirname(file);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    fs.writeFileSync(file, JSON.stringify(rates, null, 2));
    
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      success: true,
      rate: rate,
      message: 'Shipping rate calculated successfully'
    }));
  } catch (error) {
    console.error('Error: ', error);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to calculate shipping rate' }));
  }
}`;

// Fix 404.tsx
const notFoundContent = `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Zion Tech Group's homepage." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">
            404
          </h1>
          <h2 className="text-3xl font-semibold text-white mb-6">
            Page Not Found
          </h2>
          <p className="text-gray-300 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link 
            to="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Go Home
          </Link>
        </div>
      </div>
    </>
  );
}`;

// Fix about page
const aboutContent = `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Lightbulb, Shield, Users, Target, Award, Globe, Brain } from 'lucide-react';

const SEOHead = ({ title, description }: {
  title: string;
  description: string;
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Helmet>
);

export default function AboutPage() {
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "100+", label: "Happy Clients" },
    { number: "50+", label: "AI Solutions" },
    { number: "24/7", label: "Support" }
  ];

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "We constantly push the boundaries of technology to deliver cutting-edge solutions."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security",
      description: "Your data and systems are protected with enterprise-grade security measures."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "We work closely with our clients to understand their unique needs and goals."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering results that exceed expectations."
    }
  ];

  const team = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      image: "/team/john-smith.jpg",
      bio: "Visionary leader with 15+ years in AI and technology."
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      image: "/team/sarah-johnson.jpg",
      bio: "Technical expert specializing in machine learning and cloud architecture."
    },
    {
      name: "Mike Chen",
      role: "Lead Developer",
      image: "/team/mike-chen.jpg",
      bio: "Full-stack developer passionate about creating innovative solutions."
    }
  ];

  return (
    <>
      <SEOHead
        title="About Us - Zion Tech Group"
        description="Learn about Zion Tech Group's mission, values, and team. We're dedicated to delivering cutting-edge AI and IT solutions."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are a leading technology company specializing in AI solutions, 5G implementation, and cutting-edge IT services.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {values.map((value, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="text-purple-400 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Meet Our Team
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-purple-400 mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-300">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}`;

// Files to fix
const filesToFix = [
  { path: 'api/shipping-rates.js', content: shippingRatesContent },
  { path: 'app/404.tsx', content: notFoundContent },
  { path: 'app/about/page.tsx', content: aboutContent }
];

// Fix files
filesToFix.forEach(({ path: filePath, content }) => {
  try {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('Comprehensive fix completed!');