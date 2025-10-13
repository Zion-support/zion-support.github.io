import { ArrowRight, Users, Zap, Shield, Globe, Mail, MapPin, Clock, CheckCircle, Star, Award } from "lucide-react";
import { Helmet } from "react-helmet-async";
import React from 'react';
import { Link } from "react-router-dom";

const CareersPage = () => {
  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team and help shape the future of AI and IT solutions" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Join Our Team
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Help us build the future of AI and IT solutions
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;
