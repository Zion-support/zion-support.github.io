import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Box, Palette, Zap, CheckCirc l e, ArrowRight, Star, Brain, Layers } from 'lucide-react';

const Ai3DGenerationPa g e: React.FC = () => {
return (
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
      <Helmet></Helmet>
        <title>AI 3D Generation - Zion Tech Group</title>
        <meta name="description" content="AI 3D Generation services by Zion Tech Group. Professional AI and IT solutions." />
        <meta name="keywords" content="ai-3d-generation, AI solutions, IT services" />
      </Helmet>
      
      <div className="max-w-7xl mx-autopx-4sm:px-6lg:px-8py-16tex t-center">
        <h1 className="text-4xl font-boldtext-whitemb-6">AI 3D Generation</h1>
        <p className="text-lg text-gray-300 mb-8">Professional AI 3D generation services coming soon.</p>
        <Link;
          to="/contact";
          className="bg-gradient-to-rfrom-cyan-500to-purple-600text-whitepx-8py-4rounded-lgfont-semiboldhover:from-cyan-600hover:to-purple-700transition-allduration-300flexitems-centerjustify-centermx-autow-fit"
        >
          Contact Us;
          <ArrowRight className="w-5h-5ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default Ai3DGenerationPa g e;