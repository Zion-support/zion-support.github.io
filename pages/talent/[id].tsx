import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import EnhancedNavigation from '../../components/layout/EnhancedNavigation';
import Footer from '../../components/layout/Footer';

interface TalentProfileBasic {
  id: string;
  name: string;
  bio?: string;
  skills?: string[];
  portfolio?: string[];
}

// Simple loading skeleton
const TalentProfileSkeleton = () => (
  <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white pt-20">
    <div className="container mx-auto px-6 py-16">
      <div className="animate-pulse">
        <div className="w-32 h-32 bg-gray-700 rounded-full mx-auto mb-6"></div>
        <div className="h-8 bg-gray-700 rounded w-1/3 mx-auto mb-4"></div>
        <div className="h-4 bg-gray-700 rounded w-2/3 mx-auto mb-8"></div>
        <div className="space-y-4">
          <div className="h-4 bg-gray-700 rounded w-full"></div>
          <div className="h-4 bg-gray-700 rounded w-5/6"></div>
          <div className="h-4 bg-gray-700 rounded w-4/6"></div>
        </div>
      </div>
    </div>
  </div>
);

// Simple 404 component
const NotFound = () => (
  <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white pt-20">
    <div className="container mx-auto px-6 py-16 text-center">
      <h1 className="text-6xl font-bold mb-6">404</h1>
      <h2 className="text-3xl font-semibold mb-4">Talent Not Found</h2>
      <p className="text-xl text-white/80 mb-8">The talent profile you're looking for doesn't exist.</p>
      <a href="/talent" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
        Browse All Talent
      </a>
    </div>
  </div>
);

const TalentPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query as { id?: string };

  // Mock data for now to avoid build issues
  const mockData: TalentProfileBasic = {
    id: id || 'default',
    name: 'John Doe',
    bio: 'Experienced software engineer with expertise in React, Node.js, and cloud technologies.',
    skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker'],
    portfolio: ['https://github.com/johndoe', 'https://linkedin.com/in/johndoe']
  };

  if (!router.isReady || !id) {
    return <TalentProfileSkeleton />;
  }

  return (
    <>
      <Head>
        <title>{mockData.name} - Zion Tech Group</title>
        <meta name="description" content={mockData.bio || 'Talent profile'} />
      </Head>

      <EnhancedNavigation />

      <main className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white pt-20" data-testid="talent-details">
        <div className="container mx-auto px-4 py-16 space-y-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarFallback>{mockData.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold">{mockData.name}</h1>
              <p className="text-white/80">{mockData.bio}</p>
            </div>
          </div>

          {mockData.skills && (
            <div>
              <h2 className="text-xl font-semibold mb-3">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {mockData.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {mockData.portfolio && (
            <div>
              <h2 className="text-xl font-semibold mb-3">Portfolio</h2>
              <div className="space-y-2">
                {mockData.portfolio.map((link) => (
                  <a
                    key={link}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-400 hover:text-blue-300 underline"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          )}

          <div className="pt-6">
            <Button asChild>
              <a href="/contact">Contact This Talent</a>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default TalentPage;
