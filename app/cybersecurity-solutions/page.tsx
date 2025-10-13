import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, CheckCircle } from 'lucide-react';

export default function CybersecuritySolutionsPage() {
  const capabilities = [
    {
      title: "AI-Powered Security",
      description: "Advanced threat detection and prevention using artificial intelligence",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Real-time Monitoring",
      description: "24/7 security monitoring and incident response",
      icon: <CheckCircle className="w-8 h-8" />
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
