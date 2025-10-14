import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

const FiveGOptimizationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <EnhancedSEO 
        title="5G Optimization Services | Zion Tech Group"
        description="Expert 5G network optimization services to maximize performance, efficiency, and cost-effectiveness."
        keywords="5G optimization, network optimization, performance tuning, 5G efficiency"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-9-0-0 to-teal-9-0-0 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              5G Optimization Services
            <p className="text-xl md:text-2xl mb-8 text-emerald-1-0-0">
              Maximize your 5G network performance with our expert optimization services
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-emerald-6-0-0 hover:bg-emerald-7-0-0 text-white font-semibold py-4 px-8 rounded-lg transition-colors">
              Optimize Now
              <ArrowRight className="ml-2 w-5 h-5" />

      {/* Services Section */}
      <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-9-0-0 mb-6">
              Our Optimization Services
            <p className="text-xl text-gray-6-0-0 max-w-3xl mx-auto">
              Comprehensive 5G network optimization to ensure peak performance and efficiency

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-emerald-1-0-0 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-emerald-6-0-0" />
              <h3 className="text-xl font-semibold text-gray-9-0-0 mb-4">
                Performance Tuning
              <p className="text-gray-6-0-0">
                Fine-tune your 5G network parameters for optimal speed and reliability.

                Capacity Planning
                Strategic planning to ensure your network can handle current and future demands.

                Cost Optimization
                Reduce operational costs while maintaining high performance standards.

      {/* CTA Section */}
      <section className="bg-gray-9-0-0 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Optimize Your 5G Network?
          <p className="text-xl mb-8 text-gray-3-0-0">
            Contact our experts today for a comprehensive network assessment
            Get Started
  </div></div></div></div></div></div></div></div></p></p></p></p></h1></h2></h2></h3></section></section></section></Link>);
};

export default FiveGOptimizationPage;