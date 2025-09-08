import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cuttingEdgeComprehensiveServices2027 } from '../../data/2027-cutting-edge-comprehensive-services';
import { specializedInnovativeServices2027 } from '../../data/2027-specialized-innovative-services';

import { Link } from "react-router-dom";

          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">
                {formatPrice(service.price, service.pricingModel)}
              </div>
              <div className="text-sm text-slate-400 mb-4">
                Market Price: {service.marketPrice}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-slate-300">Key Features:</h4>
              <div className="space-y-1">
                {service.features.slice(0, 5).map((feature, index) => (<div key={index} className="flex items-center text-sm text-slate-300">
                    <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0"/>
                    {feature}
                  </div>))}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-slate-300">Benefits:</h4>
              <div className="space-y-1">
                {service.benefits.slice(0, 3).map((benefit, index) => (<div key={index} className="flex items-center text-sm text-slate-300">
                    <Star className="h-4 w-4 text-yellow-400 mr-2 flex-shrink-0"/>
                    {benefit}
                  </div>))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-600/30">
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <span className="text-slate-400">AI Score:</span>
                  <div className="text-white font-semibold">{service.aiScore}/100</div>
                </div>
                <div>
                  <span className="text-slate-400">ROI:</span>
                  <div className="text-green-400 font-semibold">{service.roi}</div>
                </div>
                <div>
                  <span className="text-slate-400">Setup Time:</span>
                  <div className="text-white font-semibold">{service.setupTime}</div>
                </div>
                <div>
                  <span className="text-slate-400">Uptime:</span>
                  <div className="text-green-400 font-semibold">{service.uptime}</div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button size="sm" className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold transition-all duration-300" onClick={() => window.open(service.contactInfo.website, '_blank')}>
                  Get Started
                </Button>
                <Button size="sm" variant="outline" className="border-slate-500 text-slate-300 hover:border-blue-500 hover:text-blue-400" onClick={() => window.open(`mailto:${service.contactInfo.email}`)}>
                  Contact
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>))}
    </div>);
    const renderAIPricing = () => (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {enhancedAIServices2025.map((service) => (<Card key={service.id} className="group relative overflow-hidden bg-gradient-to-br from-purple-800/50 to-pink-700/50 border-purple-600/30 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3 mb-3">
              <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                {getCategoryIcon(service.category)}
              </div>
              <Badge variant="outline" className="border-purple-500 text-purple-300">
                {service.category}
              </Badge>
            </div>
            <CardTitle className="text-xl text-white group-hover:text-purple-400 transition-colors">
              {service.name}
            </CardTitle>
            <CardDescription className="text-purple-200">
              {service.description}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">
                {formatPrice(service.price, service.pricingModel)}
              </div>
              <div className="text-sm text-purple-300 mb-4">
                Market Price: {service.marketPrice}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-purple-200">Key Features:</h4>
              <div className="space-y-1">
                {service.features.slice(0, 5).map((feature, index) => (<div key={index} className="flex items-center text-sm text-purple-200">
                    <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0"/>
                    {feature}
                  </div>))}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-purple-200">AI Models:</h4>
              <div className="space-y-1">
                {service.aiModels.slice(0, 3).map((model, index) => (<div key={index} className="flex items-center text-sm text-purple-200">
                    <Brain className="h-4 w-4 text-purple-400 mr-2 flex-shrink-0"/>
                    {model}
                  </div>))}
              </div>
            </div>

            <div className="pt-4 border-t border-purple-600/30">
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <span className="text-purple-300">AI Score:</span>
                  <div className="text-white font-semibold">{service.aiScore}/100</div>
                </div>
                <div>
                  <span className="text-purple-300">Accuracy:</span>
                  <div className="text-green-400 font-semibold">{service.accuracy}</div>
                </div>
                <div>
                  <span className="text-purple-300">Real-time:</span>
                  <div className="text-green-400 font-semibold">
                    {service.realTimeProcessing ? 'Yes' : 'No'}
                  </div>
                </div>
                <div>
                  <span className="text-purple-300">Multi-language:</span>
                  <div className="text-green-400 font-semibold">
                    {service.multilingualSupport ? 'Yes' : 'No'}
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button size="sm" className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold transition-all duration-300" onClick={() => window.open(service.contactInfo.website, '_blank')}>
                  Get Started
                </Button>
                <Button size="sm" variant="outline" className="border-purple-500 text-purple-300 hover:border-pink-500 hover:text-pink-400" onClick={() => window.open(`mailto:${service.contactInfo.email}`)}>
                  Contact
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>))}
    </div>);
    const renderITPricing = () => (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {enhancedITServices2025.map((service) => (<Card key={service.id} className="group relative overflow-hidden bg-gradient-to-br from-blue-800/50 to-indigo-700/50 border-blue-600/30 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3 mb-3">
              <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                {getCategoryIcon(service.category)}
              </div>
              <Badge variant="outline" className="border-blue-500 text-blue-300">
                {service.category}
              </Badge>
            </div>
            <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
              {service.name}
            </CardTitle>
            <CardDescription className="text-blue-200">
              {service.description}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">
                ${service.hourlyRate}/hour
              </div>
              <div className="text-sm text-blue-300 mb-4">
                Project Rate: ${service.projectRate.toLocaleString()}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-blue-200">Key Features:</h4>
              <div className="space-y-1">
                {service.features.slice(0, 5).map((feature, index) => (<div key={index} className="flex items-center text-sm text-blue-200">
                    <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0"/>
                    {feature}
                  </div>))}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-blue-200">Technologies:</h4>
              <div className="space-y-1">
                {service.technologies.slice(0, 3).map((tech, index) => (<div key={index} className="flex items-center text-sm text-blue-200">
                    <Code className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0"/>
                    {tech}
                  </div>))}
              </div>
            </div>

            <div className="pt-4 border-t border-blue-600/30">
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <span className="text-blue-300">Response Time:</span>
                  <div className="text-white font-semibold">{service.responseTime}</div>
                </div>
                <div>
                  <span className="text-blue-300">SLA:</span>
                  <div className="text-green-400 font-semibold">{service.sla}</div>
                </div>
                <div>
                  <span className="text-blue-300">Delivery:</span>
                  <div className="text-white font-semibold">{service.deliveryTime}</div>
                </div>
                <div>
                  <span className="text-blue-300">Support:</span>
                  <div className="text-green-400 font-semibold">{service.support}</div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button size="sm" className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold transition-all duration-300" onClick={() => window.open(service.contactInfo.website, '_blank')}>
                  Get Started
                </Button>
                <Button size="sm" variant="outline" className="border-blue-500 text-blue-300 hover:border-indigo-500 hover:text-indigo-400" onClick={() => window.open(`mailto:${service.contactInfo.email}`)}>
                  Contact
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>))}
    </div>);
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Comprehensive
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Pricing
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transparent pricing for all our micro SAAS, AI, and IT services. Choose the perfect solution for your business needs.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-gray-300">Billing Cycle:</span>
            <div className="bg-slate-800 rounded-lg p-1">
              <button onClick={() => setBillingCycle('monthly')} className={`px-4 py-2 rounded-md transition-all duration-300 ${billingCycle === 'monthly'
            ? 'bg-blue-600 text-white'
            : 'text-gray-300 hover:text-white'}`}>
                Monthly
              </button>
              <button onClick={() => setBillingCycle('annual')} className={`px-4 py-2 rounded-md transition-all duration-300 ${billingCycle === 'annual'
            ? 'bg-blue-600 text-white'
            : 'text-gray-300 hover:text-white'}`}>
                Annual (Save 20%)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tabs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-slate-800/50 border border-slate-600/30 mb-12">
              <TabsTrigger value="microsaas" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                <Zap className="h-4 w-4 mr-2"/>
                Micro SAAS Services
              </TabsTrigger>
              <TabsTrigger value="ai" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                <Brain className="h-4 w-4 mr-2"/>
                AI Services
              </TabsTrigger>
              <TabsTrigger value="it" className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white">
                <Server className="h-4 w-4 mr-2"/>
                IT Services
              </TabsTrigger>
            </TabsList>

            <TabsContent value="microsaas">
              {renderMicroSaasPricing()}
            </TabsContent>

            <TabsContent value="ai">
              {renderAIPricing()}
            </TabsContent>

            <TabsContent value="it">
              {renderITPricing()}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our team to discuss pricing, customization, and implementation for your business
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center gap-3 text-slate-300">
              <Phone className="h-5 w-5 text-blue-400"/>
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-slate-300">
              <Mail className="h-5 w-5 text-blue-400"/>
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-slate-300">
              <MapPin className="h-5 w-5 text-blue-400"/>
              <span>364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold px-8 py-3" onClick={() => window.open('https://ziontechgroup.com', '_blank')}>
              Visit Our Website
              <ExternalLink className="ml-2 h-4 w-4"/>
            </Button>
            <Button size="lg" variant="outline" className="border-slate-500 text-slate-300 hover:border-blue-500 hover:text-blue-400 px-8 py-3" onClick={() => window.open(`mailto:kleber@ziontechgroup.com`)}>
              Contact Us
              <Mail className="ml-2 h-4 w-4"/>
            </Button>
          </div>
        </div>
      </section>
    </div>);
};
export default ComprehensivePricing;
