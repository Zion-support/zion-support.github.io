import { ArrowRight, Users, Zap, Shield, Globe, Mail, MapPin, Clock, CheckCircle, Star, Award } from "lucide-react";
import { Helmet } from "react-helmet-async";
import React from 'react';
import { Link } from "react-router-dom";

const CareersPage = () => {
  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of AI and IT experts. Explore career opportunities at Zion Tech Group." />
      </Helmet>
      <div className="min-h-screen bg-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white text-center mb-8">Join Our Team</h1>
          <p className="text-xl text-gray-300 text-center mb-12">We're looking for talented individuals to help us build the future of AI and IT solutions.</p>
        </div>
      </div>
    </>
  );
};

export default CareersPage;
