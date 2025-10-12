import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCirc l e, Star, Users, Award, Zap, Shield, Brain } from 'lucide-react';

const AboutPage: React.FC = () => {
return (
    <>
      <Helmet></Helmet>
        <title>About - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and commitment to delivering cutting-edgeAIand IT solutions." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900">
        <div className="max-w-7xl mx-autop x-4sm:px-6lg:px-8pt-20pb-16">
          <div className="text-center">
            <h1 className="text-4xlmd:text-6xlfont-boldtext-whitemb-6">
              About Zion Tech Group;
            </h1>
            <p className="text-xltext-gray-300mb-8max-w-3xlmx-auto">
              We are a leading technology company dedicated to transformi n g businesses through innovative AI and IT solutions.;
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;