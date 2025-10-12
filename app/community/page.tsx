'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Users } from 'lucide-react';

const CommunityPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Community"
      description="Join our vibrant community of developers, users, and AI enthusiasts."
      icon={Users}
      features={["Discussion Forums","Knowledge Base","User Groups","Events","Newsletter","Expert Support"]}
      benefits={["Peer Support","Knowledge Sharing","Networking","Latest Updates"]}
      pricing="Free"
      category="Resources"
      color="from-green-500 to-teal-600"
    />
  );
};

export default CommunityPage;
