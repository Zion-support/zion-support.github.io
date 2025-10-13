import React from 'react';
import { ArrowRight, Users, Zap, Shield, Globe, Mail, MapPin, Clock, CheckCircle, Star, Award } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Careers() {
  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of innovative technology professionals at Zion Tech Group. Explore career opportunities in AI, IT services, and cutting-edge technology solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Be part of the future of technology. We're looking for passionate individuals to help us build the next generation of AI and IT solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">AI Engineer</h3>
              <p className="text-gray-300 mb-4">Develop cutting-edge AI solutions and machine learning models.</p>
              <div className="flex items-center text-cyan-400">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">Remote</span>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Full Stack Developer</h3>
              <p className="text-gray-300 mb-4">Build scalable web applications and microservices.</p>
              <div className="flex items-center text-cyan-400">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">Remote</span>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">DevOps Engineer</h3>
              <p className="text-gray-300 mb-4">Manage cloud infrastructure and deployment pipelines.</p>
              <div className="flex items-center text-cyan-400">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">Remote</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}