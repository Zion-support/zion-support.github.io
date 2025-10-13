import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, BarChart3, CheckCircle } from 'lucide-react';

export default function CloudInfrastructurePage() {
  const stats = [
    { label: "Uptime", value: "99.9%", icon: <Activity className="w-6 h-6" /> },
    { label: "Cost Savings", value: "40%", icon: <BarChart3 className="w-6 h-6" /> },
    { label: "Performance", value: "3x Faster", icon: <CheckCircle className="w-6 h-6" /> }
  ];

  const capabilities = [
    "Multi-cloud deployment and management",
    "Automated scaling and load balancing",
    "High availability and disaster recovery",
    "Security and compliance monitoring"
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechCorp",
      content: "Zion's cloud infrastructure transformed our business operations."
    }
  ];
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is under development. Please check back later.
          </p>

        </div>
      </div>
    </div>
  );
}
