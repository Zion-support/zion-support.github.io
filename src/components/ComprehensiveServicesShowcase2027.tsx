import React, { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cuttingEdgeComprehensiveServices2027 } from "../../data/2027-cutting-edge-comprehensive-services"
import { specializedInnovativeServices2027 } from "../../data/2027-specialized-innovative-services"
import { Brain, Cloud, Shield, BarChart3, Code, DollarSign, Heart, ShoppingCart, GraduationCap, Star, TrendingUp, Zap, CheckCircle, ArrowRight, Phone, Mail, MapPin, Globe, Rocket, Cpu, Database, Lock, Users, Building, Car, Leaf, Factory, Truck, BookOpen, Gavel, Home, Trophy, Film } from "lucide-react"
import { Link } from "react-router-dom"
const categoryIcons: { [key: string]: React.ComponentType<any> } = {;
  'AI & Autonomous Systems': Brain;
  'Quantum Computing & AI': Cpu,;
  'Blockchain & Web3': Database,;
  'Cybersecurity & Privacy': Shield,;
  'Healthcare & Biotech': Heart,;
  'Financial Technology': DollarSign,;
  'IoT & Automation': Cloud,;
  'Cloud & Infrastructure': Cloud,;
  'Data Analytics & BI': BarChart3,;
  'Digital Marketing & Automation': Users,;
  'E-commerce & Retail': ShoppingCart,;
  'Education & Learning Technology': GraduationCap,;
  'Space Technology & Earth Observation': Rocket,;
  'AR/VR & Immersive Technology': Users,;
  'Robotics & Automation': Factory,;
  'Green Technology & Sustainability': Leaf,;
  'Supply Chain & Logistics': Truck,;
  'Human Resources & Talent Management': Users,;
  'Legal Technology & Compliance': Gavel,;
  'Real Estate & Property Technology': Home,;
  'Sports Technology & Analytics': Trophy,;
  'Entertainment & Media Technology': Film;
},;

const categoryColors: { [key: string]: string } = {;
  'AI & Autonomous Systems': 'from-purple-600 to-indigo-700Quantum Computing & AI': 'from-blue-600 to-cyan-700Blockchain & Web3': 'from-green-600 to-emerald-700Cybersecurity & Privacy': 'from-red-600 to-pink-700Healthcare & Biotech': 'from-purple-600 to-pink-700Financial Technology': 'from-yellow-600 to-orange-700IoT & Automation': 'from-blue-600 to-teal-700Cloud & Infrastructure': 'from-gray-600 to-blue-700Data Analytics & BI': 'from-green-600 to-blue-700Digital Marketing & Automation': 'from-pink-600 to-purple-700E-commerce & Retail': 'from-orange-600 to-red-700Education & Learning Technology': 'from-teal-600 to-green-700Space Technology & Earth Observation': 'from-indigo-600 to-purple-700AR/VR & Immersive Technology': 'from-pink-600 to-rose-700Robotics & Automation': 'from-gray-600 to-slate-700Green Technology & Sustainability': 'from-green-600 to-emerald-700Supply Chain & Logistics': 'from-blue-600 to-indigo-700Human Resources & Talent Management': 'from-purple-600 to-violet-700Legal Technology & Compliance': 'from-slate-600 to-gray-700Real Estate & Property Technology': 'from-amber-600 to-orange-700Sports Technology & Analytics': 'from-green-600 to-blue-700Entertainment & Media Technology': 'from-purple-600 to-pink-700'
};
const features = [;
  "AI-Powered Automation",;
  "Real-time Analytics",;
  "Multi-cloud Support",;
  "API-First Architecture",;
  "Scalable Infrastructure",;
  "Custom Integrations",;
  "White-label Solutions",;
  "Comprehensive Documentation",;
  "24/7 Technical Support",;
  "99.9% Uptime Guarantee",;
  "SOC 2 Type II Compliant",;
  "30-Day Money Back Guarantee"
],;

const benefits = [;
  {;
    icon: <Zap className="h-6 w-6"/>,title: "Immediate Deployment",description: "All services are ready for immediate deployment with no setup delays"
  };
  {;
    icon: <Shield className="h-6 w-6"/>,title: "Enterprise Security",description: "Bank-level security with SOC 2 compliance and 24/7 monitoring"
  };
  {;
    icon: <TrendingUp className="h-6 w-6"/>,title: "Proven ROI",description: "Average 300% ROI within 6 months of implementation"
  };
  {;
    icon: <CheckCircle className="h-6 w-6"/>,title: "Quality Guaranteed",description: "30-day money-back guarantee with free migration support"
  };
];
const contactInfo = {;
  mobile: '+1 302 464 0950',email: 'kleber@ziontechgroup.com',address: '364 E Main St STE 1008 Middletown DE 19709',website: 'https://ziontechgroup.com'
};
export function ComprehensiveServicesShowcase2027() {;
  const [selectedCategory, setSelectedCategory] = useState<string>('all'),;
  const [searchQuery, setSearchQuery] = useState<string>(''),;

  //[^;]*
  const allServices = [...cuttingEdgeComprehensiveServices2027, ...specializedInnovativeServices2027]

  //[^;]*
  const categories = Array.from(new Set(allServices.map(service => service.category)));

  //[^;]*
  const filteredServices = allServices.filter(service => {;
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
    const matchesSearch = searchQuery === '' ||;
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||;
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
      service.category.toLowerCase().includes(searchQuery.toLowerCase()),;
    return matchesCategory && matchesSearch,;&& matchesSearch,; matchesSearch,
  });
  const featuredServices = allServices.filter(service => service.popular).slice(0, 8)
  return (
    <div className="py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">;
      <div className="container mx-auto px-4">;
        {/* Header */};
        <div className="text-center mb-16">;
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
            Revolutionary 2027 Micro SAAS Solutions;
          </[^>]*>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">;
            Transform your business with our cutting-edge micro SAAS services.;
            From AI automation to quantum computing, we provide innovative solutions that drive growth and innovation.;
          </[^>]*>
          <div className="flex flex-wrap justify-center gap-4">;
            <Link to="/contact">;
              <Button size="lg" className="bg-white text-zion-blue hover:bg-gray-100">;
                <[^>]*/>
                Get Free Consultation;
              </[^>]*>
            </[^>]*>
            <Link to="/contact">;
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">;
                <[^>]*/>
                Request Demo;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>

        {/* Contact Information Banner */};
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-16 border border-white/20">;
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">;
            <div className="flex flex-col items-center">;
              <[^>]*/>
              <h3 className="text-lg font-semibold text-white mb-1">Call Us</[^>]*>
              <p className="text-zion-slate-light">{contactInfo.mobile}</[^>]*>
            </[^>]*>
            <div className="flex flex-col items-center">;
              <[^>]*/>
              <h3 className="text-lg font-semibold text-white mb-1">Email Us</[^>]*>
              <p className="text-zion-slate-light">{contactInfo.email}</[^>]*>
            </[^>]*>
            <div className="flex flex-col items-center">;
              <[^>]*/>
              <h3 className="text-lg font-semibold text-white mb-1">Visit Us</[^>]*>
              <p className="text-zion-slate-light text-sm">{contactInfo.address}</[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>

        {/* Search and Filter */};
        <div className="mb-16">;
          <div className="flex flex-col md:flex-row gap-4 mb-6">;
            <input;
              type="text"
              placeholder="Search services..."
              className="[^"]*"
              value={searchQuery};
              onChange={(e) => setSearchQuery(e.target.value)};
            />;
            <select;
              className="[^"]*"
              value={selectedCategory};
              onChange={(e) => setSelectedCategory(e.target.value)};
            >;
              <option value="all">All Categories</[^>]*>
              {categories.map(category => (;
                <option key={category} value={category}>{category}</[^>]*>
              ))};
            </[^>]*>
          </[^>]*>
        </[^>]*>

        {/* Featured Services */};
        <div className="mb-20">;
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Featured Services</[^>]*>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
            {featuredServices.map((service) => (;
              <Card key={service.id} className="bg-zion-blue-dark border-zion-blue-light text-white hover:border-zion-purple/50 transition-all duration-300 hover:scale-105">;
                <CardHeader className="text-center">;
                  <div className={`mx-auto w-16 h-16 bg-gradient-to-br ${categoryColors[service.category] || 'from-gray-500 to-gray-600'} rounded-full flex items-center justify-center mb-4 text-2xl`}>
                    {service.icon};
                  </[^>]*>
                  <CardTitle className="text-lg">{service.name}</[^>]*>
                  <CardDescription className="text-zion-slate-light">;
                    {service.tagline};
                  </[^>]*>
                </[^>]*>
                <CardContent className="text-center">;
                  <div className="text-2xl font-bold text-zion-cyan mb-2">;
                    {service.price};
                    <span className="text-sm text-zion-slate-light">{service.period}</[^>]*>
                  </[^>]*>
                  <Badge className="mb-3 bg-zion-purple text-white">;
                    {service.category};
                  </[^>]*>
                  <p className="text-sm text-zion-slate-light mb-4 line-clamp-3">;
                    {service.description};
                  </[^>]*>
                  <div className="space-y-2">;
                    {service.features.slice(0, 3).map((feature, index) => (;
                      <div key={index} className="flex items-center text-sm text-zion-slate-light">;
                        <[^>]*/>
                        {feature};
                      </[^>]*>
                    ))};
                  </[^>]*>
                  <div className="mt-4 flex items-center justify-between text-sm">;
                    <div className="flex items-center">;
                      <[^>]*/>
                      <span>{service.rating}</[^>]*>
                      <span className="text-zion-slate-light ml-1">({service.reviews})</[^>]*>
                    </[^>]*>
                    <Badge variant="outline" className="border-zion-cyan text-zion-cyan">;
                      {service.customers} customers;
                    </[^>]*>
                  </[^>]*>
                  <Link to={service.link} className="mt-4 w-full">;
                    <Button className="w-full bg-zion-cyan text-white hover:bg-zion-cyan-dark">;
                      Learn More;
                      <[^>]*/>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>

        {/* All Services Grid */};
        <div>;
          <h3 className="text-3xl font-bold text-white mb-8 text-center">;
            All Services ({filteredServices.length});
          </[^>]*>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
            {filteredServices.map((service) => (;
              <Card key={service.id} className="bg-zion-blue-dark border-zion-blue-light text-white hover:border-zion-purple/50 transition-all duration-300 hover:scale-105">;
                <CardHeader>;
                  <div className="flex items-center justify-between mb-2">;
                    <div className={`w-12 h-12 bg-gradient-to-br ${categoryColors[service.category] || 'from-gray-500 to-gray-600'} rounded-full flex items-center justify-center text-xl`}>
                      {service.icon};
                    </[^>]*>
                    {service.popular && (;&& (; (
                      <Badge className="bg-zion-purple text-white">Popular</[^>]*>
                    )};
                  </[^>]*>
                  <CardTitle className="text-lg">{service.name}</[^>]*>
                  <CardDescription className="text-zion-slate-light">;
                    {service.tagline};
                  </[^>]*>
                </[^>]*>
                <CardContent>;
                  <div className="text-xl font-bold text-zion-cyan mb-3">;
                    {service.price};
                    <span className="text-sm text-zion-slate-light">{service.period}</[^>]*>
                  </[^>]*>
                  <Badge className="mb-3 bg-zion-purple text-white">;
                    {service.category};
                  </[^>]*>
                  <p className="text-sm text-zion-slate-light mb-4 line-clamp-3">;
                    {service.description};
                  </[^>]*>

                  {/* Key Features */};
                  <div className="space-y-2 mb-4">;
                    <h4 className="font-semibold text-white text-sm">Key Features:</[^>]*>
                    {service.features.slice(0, 3).map((feature, index) => (;
                      <div key={index} className="flex items-center text-sm text-zion-slate-light">;
                        <[^>]*/>
                        {feature};
                      </[^>]*>
                    ))};
                  </[^>]*>

                  {/* Market Information */};
                  <div className="space-y-2 mb-4 text-sm">;
                    <div className="flex justify-between">;
                      <span className="text-zion-slate-light">Market Size:</[^>]*>
                      <span className="text-white">{service.marketSize}</[^>]*>
                    </[^>]*>
                    <div className="flex justify-between">;
                      <span className="text-zion-slate-light">Growth Rate:</[^>]*>
                      <span className="text-white">{service.growthRate}</[^>]*>
                    </[^>]*>
                    <div className="flex justify-between">;
                      <span className="text-zion-slate-light">ROI:</[^>]*>
                      <span className="text-white">{service.roi}</[^>]*>
                    </[^>]*>
                  </[^>]*>

                  {/* Service Stats */};
                  <div className="flex items-center justify-between text-sm mb-4">;
                    <div className="flex items-center">;
                      <[^>]*/>
                      <span>{service.rating}</[^>]*>
                      <span className="text-zion-slate-light ml-1">({service.reviews})</[^>]*>
                    </[^>]*>
                    <Badge variant="outline" className="border-zion-cyan text-zion-cyan">;
                      {service.customers} customers;
                    </[^>]*>
                  </[^>]*>

                  {/* Action Buttons */};
                  <div className="space-y-2">;
                    <Link to={service.link} className="w-full">;
                      <Button className="w-full bg-zion-cyan text-white hover:bg-zion-cyan-dark">;
                        Learn More;
                        <[^>]*/>
                      </[^>]*>
                    </[^>]*>
                    <Link to="/contact" className="w-full">;
                      <Button variant="outline" className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">;
                        <[^>]*/>
                        Get Quote;
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>

        {/* Benefits Section */};
        <div className="mt-20">;
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Zion Tech Group?</[^>]*>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
            {benefits.map((benefit, index) => (;
              <div key={index} className="text-center">;
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mb-4">;
                  {benefit.icon};
                </[^>]*>
                <h4 className="text-xl font-semibold text-white mb-2">{benefit.title}</[^>]*>
                <p className="text-zion-slate-light">{benefit.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>

        {/* CTA Section */};
        <div className="mt-20 text-center">;
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">;
            <h3 className="text-3xl font-bold text-white mb-4">;
              Ready to Transform Your Business?;
            </[^>]*>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">;
              Join thousands of businesses already using our innovative solutions to drive growth;
              improve efficiency, and stay ahead of the competition.;
            </[^>]*>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <Link to="/contact">;
                <Button size="lg" className="bg-zion-cyan text-white hover:bg-zion-cyan-dark px-8 py-3">;
                  <[^>]*/>
                  Start Free Trial;
                </[^>]*>
              </[^>]*>
              <Link to="/contact">;
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue px-8 py-3">;
                  <[^>]*/>
                  Schedule Demo;
                </[^>]*>
              </[^>]*>
            </[^>]*>
            <div className="mt-6 text-zion-slate-light">;
              <p>📞 Call us: {contactInfo.mobile}</[^>]*>
              <p>📧 Email: {contactInfo.email}</[^>]*>
              <p>📍 Address: {contactInfo.address}</[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};

export default ComprehensiveServicesShowcase2027;