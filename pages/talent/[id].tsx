import React from 'react';
import { useParams } from 'react-router-dom';
import { SEO } from "@/components/SEO";

const TalentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="min-h-screen bg-gradient-to-b from-zion-blue-dark to-zion-blue-darker">
      <SEO 
        title={`Talent Profile - ${id}`}
        description="View detailed talent profile and professional information."
        keywords="talent, profile, professional, skills"
      />
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Talent Profile
          </h1>
          <p className="text-xl text-zion-gray-light max-w-3xl mx-auto">
            Professional talent information and portfolio details.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">T</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Talent ID: {id}</h2>
            <p className="text-zion-gray-light mb-8">
              This is a placeholder talent profile page. In a real application, 
              this would display detailed information about the talent.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
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