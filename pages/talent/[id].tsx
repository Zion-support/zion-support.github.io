import React from 'react';
import { useRouter } from 'next/router';
import { SEO } from "@/components/SEO";

// fetcher-like function for handling API responses
const handleApiResponse = async (res: Response) => {
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.');
    try {
      (error as any).info = await res.json();
    } catch (e) {
      (error as any).info = { message: await res.text() };
    }
    (error as any).status = res.status;
    throw error;
  }
  return res.json();
};

const TalentDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="min-h-screen bg-zion-dark">
      <SEO 
        title="Talent Profile"
        description="View talent profile details"
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-zion-blue-dark rounded-lg p-8">
            <div className="text-center mb-8">
              <div className="w-32 h-32 bg-zion-cyan rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-zion-dark">
                  {id ? String(id).charAt(0).toUpperCase() : 'T'}
                </span>
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Talent Profile {id}
              </h1>
              <p className="text-zion-gray-light">
                Professional talent and expertise
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Skills</h3>
                <p className="text-zion-gray-light">Professional skills and expertise</p>
              </div>
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Experience</h3>
                <p className="text-zion-gray-light">Years of professional experience</p>
              </div>
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Portfolio</h3>
                <p className="text-zion-gray-light">Previous work and projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentDetail;