export default function Revolutionary2025Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

=======
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React, { useState } from 'react';
  const contactInfo = {;
    mobile: '+1 302 464 0950',;
    email: 'kleber@ziontechgroup && ziontechgroup.com',;
    address: '364 E Main St STE 1008 Middletown DE 19709',;
    website: 'https://ziontechgroup && ziontechgroup.com',  };
=======
              service.category.includes('AI') |
              service.category.includes('Virtual') |
              service.category.includes('Creative')
            );
          return true;
        });
  // Calculate pricing with billing cycle
  const getPrice = (service: any) => {
    const basePrice = parseInt(service.price.replace('$', '').replace(',', ''));
    if (billingCycle === 'yearly') {
      return Math.floor(basePrice * 0.8); // 20% discount for yearly
    }    return basePrice;  }
=======
import { Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Code, BookOpen, Activity, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, ChevronRight, Crown, Infinity, Check, X, AlertTriangle, Info, Zap as ZapIcon, Shield as ShieldIcon, Users as UsersIcon, Globe as GlobeIcon, Cpu as CpuIcon, Database as DatabaseIcon, Cloud as CloudIcon, Smartphone as SmartphoneIcon, Palette as PaletteIcon, Search as SearchIcon, MessageSquare as MessageSquareIcon, FileText as FileTextIcon, Calendar as CalendarIcon, CreditCard as CreditCardIcon, BarChart3 as BarChart3Icon, Settings as SettingsIcon, Code as CodeIcon, BookOpen as BookIcon, Activity as ActivityIcon, Database as DatabaseIcon2, Play as PlayIcon, Mail as MailIcon, Phone as PhoneIcon, MapPin as MapPinIcon, Filter as FilterIcon, Grid as GridIcon, List as ListIcon, ChevronDown as ChevronDownIcon, ChevronUp as ChevronUpIcon, Sparkles as SparklesIcon, FlaskConical as FlaskConicalIcon, Dna as DnaIcon, Car as CarIcon, Leaf as LeafIcon, Factory as FactoryIcon, Truck as TruckIcon, Microscope as MicroscopeIcon, GraduationCap as GraduationCapIcon, ShieldCheck as ShieldCheckIcon, Brain as BrainIcon, Atom as AtomIcon, Globe2 as Globe2Icon, Bot as BotIcon, ChevronRight as ChevronRightIcon, Eye, Heart, Share2, Download, Bookmark, ThumbsUp, MessageCircle, Share, Users as UsersIcon2, Target as TargetIcon, Zap as ZapIcon2 } from 'lucide-react';
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  // Combine all revolutionary services
  const allRevolutionaryServices = [
    ...revolutionaryAI2025Services,
    ...revolutionaryITInfrastructure2025Services,
    ...revolutionary2025MicroSaasServices
  ];

=======
=======>>>>>>> origin/chore/stabilize-build-minimal-index
  // Service categories
  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Sparkles, count: allRevolutionaryServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: revolutionaryAI2025Services.length },
    { id: 'infrastructure', name: 'IT Infrastructure', icon: Cpu, count: revolutionaryITInfrastructure2025Services.length },
          { id: 'saas', name: 'Micro SaaS', icon: Zap, count: revolutionary2025MicroSaasServices.length }
=======
              {/* Billing Toggle */}
              <div className='flex items-center justify-center gap-4 mb-12'>;
                <span className='text-gray-400'>Monthly</span>;
                <button
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  }`}
                >;
                  <span
                    className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${

                  animate={{ opacity: 1, scale: 1 }}

                      billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-1'
                    }`}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/chore/stabilize-build-minimal-index
                  />
                </button>
                <span className="text-gray-400">Yearly (Save 20%)</span>
              </div>
                  transition={{ duration: 0 && 0.6, delay: 0 && 0.1 }}
                  className='bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-4 border border-blue-500/30'>;
                  <div className='text-2xl font-bold text-blue-400'>;
                    {marketAnalysis && marketAnalysis.totalMarketSize}
                  </div>;
                  <div className='text-xs text-gray-400'>Market Size</div>;
                </motion && motion.div>;
                <motion&& motion.div
                  initial={{ opacity: 0, scale: 0 && 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0 && 0.6, delay: 0 && 0.2 }}
                  className='bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-2xl p-4 border border-green-500/30'>;
                  <div className='text-2xl font-bold text-green-400'>;
                    {marketAnalysis && marketAnalysis.growthRate}
                  </div>;
                  <div className='text-xs text-gray-400'>Growth Rate</div>;
                </motion && motion.div>;
                <motion&& motion.div
                  initial={{ opacity: 0, scale: 0 && 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0 && 0.6, delay: 0 && 0.3 }}
                  className='bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-4 border border-purple-500/30'>;
                  <div className='text-2xl font-bold text-purple-400'>;
                    {marketAnalysis && marketAnalysis.customerSatisfaction}
                  </div>;
                  <div className='text-xs text-gray-400'>Satisfaction</div>;
                </motion && motion.div>;
                <motion&& motion.div
                  initial={{ opacity: 0, scale: 0 && 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0 && 0.6, delay: 0 && 0.4 }}
                  className='bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-2xl p-4 border border-orange-500/30'>;
                  <div className='text-2xl font-bold text-orange-400'>;
                    {marketAnalysis && marketAnalysis.averageROI}
                  </div>;
                  <div className='text-xs text-gray-400'>Average ROI</div>;
                </motion && motion.div>;
                <motion&& motion.div
                  initial={{ opacity: 0, scale: 0 && 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0 && 0.6, delay: 0 && 0.5 }}
                  className='bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-4 border border-cyan-500/30'>;
                  <div className='text-2xl font-bold text-cyan-400'>;
                    {marketAnalysis && marketAnalysis.timeToValue}
                  </div>;
                  <div className='text-xs text-gray-400'>Time to Value</div>;
                </motion && motion.div>;
                <motion&& motion.div
                  initial={{ opacity: 0, scale: 0 && 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0 && 0.6, delay: 0 && 0.6 }}
                  className='bg-gradient-to-br from-pink-600/20 to-rose-600/20 backdrop-blur-sm rounded-2xl p-4 border border-pink-500/30'>;
                  <div className='text-2xl font-bold text-pink-400'>;
                    {marketAnalysis && marketAnalysis.globalReach}
                  </div>;
                  <div className='text-xs text-gray-400'>Global Reach</div>                </motion && motion.div>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;

=======        {/* Pricing Tiers */}
        <section className='py-20 px-4 sm:px-6 lg:px-8'>;
          <div className='max-w-7xl mx-auto'>            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/chore/stabilize-build-minimal-index
                Choose Your Transformation Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Start with our starter plan and scale up as you grow. All plans include 
                our revolutionary AI and quantum computing services.
              </p>
            </motion.div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
              className='text-center mb-16'>;
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
                Choose Your Transformation Plan;
              </h2>;
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
                Start with our starter plan and scale up as you grow. All plans;
                include our revolutionary AI and quantum computing services.;
              </p>;
            </motion && motion.div>;
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>              {pricingTiers && pricingTiers.map((tier, index) => (;
                <motion&& motion.div
                  key={tier && tier.name}                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.6, delay: index * 0 && 0.2 }}
                  viewport={{ once: true }}
                  className={`relative ${
=======


              className='text-center mb-16'>;
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
                Choose Your Transformation Plan;
              </h2>;
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
                Start with our starter plan and scale up as you grow. All plans;
                include our revolutionary AI and quantum computing services.;
              </p>;
            </motion && motion.div>;

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>              {pricingTiers && pricingTiers.map((tier, index) => (;
                <motion&& motion.div
                  key={tier && tier.name}


                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.6, delay: index * 0 && 0.2 }}
                  viewport={{ once: true }}
                  className={`relative ${


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/chore/stabilize-build-minimal-index
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/chore/stabilize-build-minimal-index
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200">
                    {tier.cta}
=======

                  <div className='text-center mb-8'>;
                    <div className='mb-4'>;
                      <span className='text-4xl font-bold text-white'>;
                        ${tier && tier.price}
                      </span>;
                      <span className='text-gray-400'>{tier && tier.period}</span>;
                    </div>;

                  <button className='w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200'>                    {tier && tier.cta}
=======                    {tier.cta  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}        <section className='py-20 px-4 sm:px-6 lg:px-8'>;
          <div className='max-w-7xl mx-auto'>            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/chore/stabilize-build-minimal-index
        {/* Service Pricing Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
>>>>>>> origin/chore/stabilize-build-minimal-index
                Individual Service Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose individual services or bundle them for maximum savings. 
                All services include free trials and comprehensive support.
            {/* Category Filter */}
=======
            {/* Category Filter */}

            </div>;


                    )}
=======
>>>>>>> origin/chore/stabilize-build-minimal-index
                      </span>
                      <span className="text-gray-400">{service.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white">{service.rating}</span>
                      <span className="text-gray-400 text-sm">({service.reviews})</span>
                    </div>
                  {/* Key Features */}
=======

                  {/* Key Features */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/chore/stabilize-build-minimal-index
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                          {feature  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        </div>;
                      ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/chore/stabilize-build-minimal-index
                      {service.features.length > 3 && (
                        <div className="text-xs text-gray-500 mt-1">
                          +{service.features.length - 3} more features
                        </div>
                  {/* Market Position */}
=======
                  {/* Market Position */}
                  <div className='mb-4 p-3 bg-gray-800/50 rounded-lg'>;
                    <h4 className='text-xs font-semibold text-gray-300 mb-1'>;
                      Market Position:;
                    </h4>;
                    <p className='text-xs text-gray-400 line-clamp-2'>;
                      {service && service.marketPosition}
                    </p>;
                  </div>;

                  {/* Actions */}

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div

            >


                Contact our team to discuss your specific needs and get a custom quote.
=======
                Contact our team to discuss your specific needs and get a custom quote.                 We offer flexible pricing and payment options to fit your budget.
              </p>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
                <div className='bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30'>
                  <Phone className='w-8 h-8 text-blue-400 mx-auto mb-3' />
                  <h3 className='text-lg font-semibold text-white mb-2'>
                    Call Us
                  </h3>
                  <p className='text-blue-400 font-mono'>
                    {contactInfo.mobile}
                  </p>
                </div>
                <div className='bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30'>
                  <Mail className='w-8 h-8 text-green-400 mx-auto mb-3' />
                  <h3 className='text-lg font-semibold text-white mb-2'>
                    Email Us
                  </h3>
                  <p className='text-green-400'>{contactInfo.email}</p>
                </div>
                <div className='bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30'>
                  <MapPin className='w-8 h-8 text-purple-400 mx-auto mb-3' />
                  <h3 className='text-lg font-semibold text-white mb-2'>
                    Visit Us
                  </h3>
                  <p className='text-purple-400 text-sm'>
                    {contactInfo.address}
                  </p>
                </div>
              </div>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <button className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'>
                  <Phone className='w-5 h-5 mr-2' />
=======>>>>>>> origin/chore/stabilize-build-minimal-index
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30">
                  <Phone className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-blue-400 font-mono">{contactInfo.mobile}</p>
                </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Phone className="w-5 h-5 mr-2" />
=======
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Phone className="w-5 h-5 mr-2" />

              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
=======

}

                Ready to Get Started?;
              </h2>;
              <p className='text-xl text-gray-300 mb-8'>;
              <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 6 mb - 8'>;
                <div className='bg - gradient - to - br from - blue - 600 / 20 to - purple - 600 / 20 backdrop - blur - sm rounded - 2xl p - 6 border border - blue - 500 / 30'>;
                  <Phone className='w - 8 h - 8 text - blue - 400 mx - auto mb - 3' />;
                  <h3 className='text - lg font - semibold text - white mb - 2'>;
                    Call Us;
                  </h3>;
                  <p className='text - blue - 400 font - mono'>;
                    {contact_info.mobile}
                  </p>;
                </div>;
                <div className='bg - gradient - to - br from - green - 600 / 20 to - emerald - 600 / 20 backdrop - blur - sm rounded - 2xl p - 6 border border - green - 500 / 30'>;
                  <Mail className='w - 8 h - 8 text - green - 400 mx - auto mb - 3' />;
                  <h3 className='text - lg font - semibold text - white mb - 2'>;
                    Email Us;
                  </h3>;
                  <p className='text - green - 400'>{contact_info.email}</p>;
                </div>;
                <div className='bg - gradient - to - br from - purple - 600 / 20 to - pink - 600 / 20 backdrop - blur - sm rounded - 2xl p - 6 border border - purple - 500 / 30'>;
                  <MapPin className='w - 8 h - 8 text - purple - 400 mx - auto mb - 3' />;
                  <h3 className='text - lg font - semibold text - white mb - 2'>;
                    Visit Us;
                  </h3>;
                  <p className='text - purple - 400 text - sm'>;
                    {contact_info.address}
                  </p>;
                </div>;
              </div>;
              <div className='flex flex - col sm:flex - row gap - 4 justify - center'>;
                <button className='bg - gradient - to - r from - blue - 600 to - purple - 600 hover:from - blue - 700 hover:to - purple - 700'>;
                  <Phone className='w - 5 h - 5 mr - 2' />;
                  Get Custom Quote;
                </button>;
                <button className='border - blue - 500 text - blue - 400 hover:bg - blue - 500 / 20'>;
                  <BookOpen className='w - 5 h - 5 mr - 2' />                  Download Pricing Guide;
}
  )
            >;
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
                Ready to Get Started?;
              </h2>;
              <p className="text-xl text-gray-300 mb-8">;
                Contact our team to discuss your specific needs and get a custom quote.;
                We offer flexible pricing and payment options to fit your budget.;
              </p>;
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">;
                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30">;
                  <Phone className="w-8 h-8 text-blue-400 mx-auto mb-3" />;
                  <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>;
                  <p className="text-blue-400 font-mono">{contactInfo.mobile}</p>;
                </div>;
                <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30">;
                  <Mail className="w-8 h-8 text-green-400 mx-auto mb-3" />;
                  <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>;
                  <p className="text-green-400">{contactInfo.email}</p>;
                </div>;
                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">;
                  <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-3" />;
                  <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>;
                  <p className="text-purple-400 text-sm">{contactInfo.address}</p>;
                </div>;
              </div>;
              <div className="flex flex-col sm: flex-row gap-4 justify-center">;
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">;
                  <Phone className="w-5 h-5 mr-2" />;
                  Get Custom Quote;
                </button>;
                <button className="border-blue-500 text-blue-400 hover:bg-blue-500/20">;
                  <BookOpen className="w-5 h-5 mr-2" />;
                  Download Pricing Guide;
=======                </button>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    </UltraQuantumHolographicBackground>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/chore/stabilize-build-minimal-index
