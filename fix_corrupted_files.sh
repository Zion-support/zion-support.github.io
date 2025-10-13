#!/bin/bash

echo "Fixing corrupted files..."

# Create clean blog page
cat > /workspace/app/blog/page.tsx << 'BLOG_EOF'
import { Helmet } from "react-helmet-async";
import React from 'react';

const BlogPage = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Latest insights on AI, technology, and digital transformation from Zion Tech Group." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest insights on AI, technology, and digital transformation.
            </p>
          </div>
          
          <div className="text-center text-gray-300">
            <p>Blog posts coming soon...</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
BLOG_EOF

# Create clean case studies page
cat > /workspace/app/case-studies/page.tsx << 'CASE_EOF'
import { Helmet } from "react-helmet-async";
import React from 'react';

const CaseStudiesPage = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and client case studies showcasing our AI and IT solutions expertise." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Case <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Studies</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform through innovative AI and IT solutions.
            </p>
          </div>
          
          <div className="text-center text-gray-300">
            <p>Case studies coming soon...</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesPage;
CASE_EOF

# Create clean consultation page
cat > /workspace/app/consultation/page.tsx << 'CONSULT_EOF'
import { Helmet } from "react-helmet-async";
import React from 'react';

const ConsultationPage = () => {
  return (
    <>
      <Helmet>
        <title>Consultation - Zion Tech Group</title>
        <meta name="description" content="Get expert consultation on AI and IT solutions for your business transformation needs." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Consultation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get personalized advice on AI and IT solutions for your business.
            </p>
          </div>
          
          <div className="text-center text-gray-300">
            <p>Consultation services coming soon...</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultationPage;
CONSULT_EOF

# Create clean compliance page
cat > /workspace/app/compliance/page.tsx << 'COMPLIANCE_EOF'
import { Helmet } from "react-helmet-async";
import React from 'react';

const CompliancePage = () => {
  return (
    <>
      <Helmet>
        <title>Compliance - Zion Tech Group</title>
        <meta name="description" content="Learn about our compliance standards and security measures for AI and IT solutions." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Compliance</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our commitment to security, compliance, and data protection.
            </p>
          </div>
          
          <div className="text-center text-gray-300">
            <p>Compliance information coming soon...</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompliancePage;
COMPLIANCE_EOF

# Create clean community page
cat > /workspace/app/community/page.tsx << 'COMMUNITY_EOF'
import { Helmet } from "react-helmet-async";
import React from 'react';

const CommunityPage = () => {
  return (
    <>
      <Helmet>
        <title>Community - Zion Tech Group</title>
        <meta name="description" content="Join our community of AI and technology enthusiasts and professionals." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Community</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Connect with like-minded professionals and stay updated with the latest trends.
            </p>
          </div>
          
          <div className="text-center text-gray-300">
            <p>Community features coming soon...</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityPage;
COMMUNITY_EOF

# Create clean cloud services page
cat > /workspace/app/cloud-services/page.tsx << 'CLOUD_EOF'
import { Helmet } from "react-helmet-async";
import React from 'react';

const CloudServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Cloud Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud solutions and services for modern businesses." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cloud <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Scalable and secure cloud solutions for your business needs.
            </p>
          </div>
          
          <div className="text-center text-gray-300">
            <p>Cloud services information coming soon...</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CloudServicesPage;
CLOUD_EOF

echo "All corrupted files have been fixed!"
