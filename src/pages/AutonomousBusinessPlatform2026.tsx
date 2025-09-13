import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Zap, 
  Shield, 
  Target, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle,
  Star,
  Users,
  Clock,
  Award,
  Globe,
  Rocket,
  Sparkles,
  BarChart3,
  Cpu,
  Network,
  Database,
  Lock,
  RefreshCw,
  Monitor,
  Settings
} from 'lucide-react';

export default function AutonomousBusinessPlatform2026() {
  return (
    <>
      <SEO 
        title="Autonomous Business Platform 2026 - Complete Business Automation"
        description="Revolutionary autonomous business platform delivering complete operational automation with self-healing capabilities. Achieve 99.7% uptime and 300% efficiency improvements."
        keywords="autonomous business, business automation, self-healing systems, operational excellence, AI automation"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-zion-purple/20 border border-zion-purple/30 rounded-full px-4 py-2 mb-8">
              <Brain className="h-4 w-4 text-zion-purple" />
              <span className="text-zion-purple text-sm font-medium">Autonomous Business Platform 2026</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Complete Business
              <span className="bg-gradient-to-r from-zion-purple to-zion-cyan bg-clip-text text-transparent"> Automation</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Revolutionary autonomous business platform with <span className="text-zion-cyan font-semibold">self-healing capabilities</span>, delivering <span className="text-zion-purple font-semibold">99.7% uptime</span> and <span className="text-green-400 font-semibold">300% efficiency improvements</span>.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">99.7%</div>
                <div className="text-gray-400 text-sm">System Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-zion-purple mb-2">300%</div>
                <div className="text-gray-400 text-sm">Efficiency Gain</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">Zero</div>
                <div className="text-gray-400 text-sm">Human Intervention</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Autonomous Operation</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link to="/contact">
                <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-white px-8 py-4 text-lg">
                  Get Free Assessment
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link to="/demo">
                <Button size="lg" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white px-8 py-4 text-lg">
                  Watch Demo
                </Button>
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>99.7% Uptime Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-blue-400" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-400" />
                <span>500+ Successful Deployments</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Autonomous
              <span className="bg-gradient-to-r from-zion-purple to-zion-cyan bg-clip-text text-transparent"> Business Platform</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The world's first fully autonomous business platform that operates independently, learns continuously, and optimizes itself in real-time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Platform Architecture */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-xl">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Autonomous Decision Making</h3>
                    <p className="text-gray-300">AI-powered decision engines that analyze data, predict outcomes, and execute actions without human intervention.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                    <RefreshCw className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Self-Healing Systems</h3>
                    <p className="text-gray-300">Automatic detection and resolution of issues with zero downtime and continuous optimization.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Real-Time Optimization</h3>
                    <p className="text-gray-300">Continuous performance monitoring and optimization across all business processes and systems.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
                    <p className="text-gray-300">Advanced security protocols with autonomous threat detection and response capabilities.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Platform Diagram */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
                <div className="space-y-6">
                  {/* Top Layer - Business Applications */}
                  <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-xl p-4 border border-zion-purple/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Monitor className="h-5 w-5 text-zion-purple" />
                      <span className="text-white font-semibold">Business Applications</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs text-gray-300">
                      <div className="bg-white/10 rounded p-2 text-center">Finance</div>
                      <div className="bg-white/10 rounded p-2 text-center">Operations</div>
                      <div className="bg-white/10 rounded p-2 text-center">Customer</div>
                    </div>
                  </div>

                  {/* Middle Layer - Autonomous Engine */}
                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-4 border border-green-500/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Brain className="h-5 w-5 text-green-400" />
                      <span className="text-white font-semibold">Autonomous Decision Engine</span>
                    </div>
                    <div className="flex justify-center">
                      <div className="bg-green-500/30 rounded-full p-3">
                        <Cpu className="h-8 w-8 text-green-400" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Layer - Infrastructure */}
                  <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl p-4 border border-blue-500/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Network className="h-5 w-5 text-blue-400" />
                      <span className="text-white font-semibold">Infrastructure Layer</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs text-gray-300">
                      <div className="bg-white/10 rounded p-2 text-center">Cloud</div>
                      <div className="bg-white/10 rounded p-2 text-center">Security</div>
                      <div className="bg-white/10 rounded p-2 text-center">Data</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Platform <span className="bg-gradient-to-r from-zion-purple to-zion-cyan bg-clip-text text-transparent">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive autonomous capabilities that transform every aspect of your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-zion-purple/50 transition-colors">
              <CardHeader>
                <div className="p-3 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-xl w-fit mb-4">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Autonomous Operations</CardTitle>
                <CardDescription className="text-gray-300">
                  Complete business process automation with intelligent decision-making and self-optimization.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>24/7 autonomous operation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Intelligent process optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Real-time decision making</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Zero human intervention required</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-green-500/50 transition-colors">
              <CardHeader>
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl w-fit mb-4">
                  <RefreshCw className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Self-Healing Systems</CardTitle>
                <CardDescription className="text-gray-300">
                  Automatic issue detection, resolution, and system optimization with zero downtime.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Predictive issue detection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Automatic problem resolution</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Continuous system optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>99.7% uptime guarantee</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-colors">
              <CardHeader>
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl w-fit mb-4">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Real-Time Analytics</CardTitle>
                <CardDescription className="text-gray-300">
                  Advanced analytics and insights with predictive modeling and performance optimization.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Real-time performance monitoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Predictive analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Automated reporting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Intelligent insights</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-orange-500/50 transition-colors">
              <CardHeader>
                <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl w-fit mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Advanced Security</CardTitle>
                <CardDescription className="text-gray-300">
                  Enterprise-grade security with autonomous threat detection and response capabilities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Autonomous threat detection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Real-time security monitoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Automatic incident response</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Compliance automation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-colors">
              <CardHeader>
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl w-fit mb-4">
                  <Settings className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Intelligent Automation</CardTitle>
                <CardDescription className="text-gray-300">
                  Smart automation that adapts to your business needs and continuously improves performance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Adaptive automation rules</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Machine learning optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Dynamic workflow adjustment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Performance-based learning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-yellow-500/50 transition-colors">
              <CardHeader>
                <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl w-fit mb-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Global Scalability</CardTitle>
                <CardDescription className="text-gray-300">
                  Seamless scaling across multiple locations and regions with consistent performance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Multi-region deployment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Automatic load balancing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Global data synchronization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Unified management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transformative <span className="bg-gradient-to-r from-zion-purple to-zion-cyan bg-clip-text text-transparent">Business Impact</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionary results achieved by organizations implementing our autonomous business platform.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Impact Stats */}
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700">
                  <div className="text-3xl font-bold text-zion-cyan mb-2">99.7%</div>
                  <div className="text-gray-300 text-sm">System Uptime</div>
                </div>
                <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700">
                  <div className="text-3xl font-bold text-zion-purple mb-2">300%</div>
                  <div className="text-gray-300 text-sm">Efficiency Gain</div>
                </div>
                <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700">
                  <div className="text-3xl font-bold text-green-400 mb-2">67%</div>
                  <div className="text-gray-300 text-sm">Cost Reduction</div>
                </div>
                <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">Zero</div>
                  <div className="text-gray-300 text-sm">Human Errors</div>
                </div>
              </div>
            </div>

            {/* Benefits List */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-lg">
                  <TrendingUp className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Operational Excellence</h3>
                  <p className="text-gray-300">Achieve unprecedented operational efficiency with autonomous systems that work 24/7 without breaks or errors.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                  <Target className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Cost Optimization</h3>
                  <p className="text-gray-300">Reduce operational costs by up to 67% through intelligent automation and resource optimization.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                  <Rocket className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Accelerated Innovation</h3>
                  <p className="text-gray-300">Focus on strategic initiatives while autonomous systems handle routine operations and optimization.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Enhanced Security</h3>
                  <p className="text-gray-300">Advanced security with autonomous threat detection and response, ensuring continuous protection.</p>
                </div>
              </div>
            </div>
          </div>

          {/* ROI Calculator */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">ROI Calculator</h3>
              <p className="text-gray-300">Calculate your potential savings with autonomous business platform implementation.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-zion-cyan mb-2">$2.3M</div>
                <div className="text-gray-300 text-sm">Average Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-zion-purple mb-2">8-12</div>
                <div className="text-gray-300 text-sm">Months ROI Timeline</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">400%</div>
                <div className="text-gray-300 text-sm">Average ROI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Implementation <span className="bg-gradient-to-r from-zion-purple to-zion-cyan bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Seamless implementation process designed for minimal disruption and maximum success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-zion-purple to-transparent hidden lg:block"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Assessment & Planning</h3>
              <p className="text-gray-300 text-sm">Comprehensive analysis of your current systems and custom implementation roadmap.</p>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-blue-500 to-transparent hidden lg:block"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">System Integration</h3>
              <p className="text-gray-300 text-sm">Seamless integration with existing systems and infrastructure setup.</p>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-green-500 to-transparent hidden lg:block"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Autonomous Activation</h3>
              <p className="text-gray-300 text-sm">Activation of autonomous capabilities with comprehensive testing and validation.</p>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Optimization & Support</h3>
              <p className="text-gray-300 text-sm">Continuous optimization and ongoing support for maximum performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-zion-purple to-zion-cyan">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join the autonomous business revolution and achieve unprecedented operational excellence with 99.7% uptime and 300% efficiency improvements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-zion-purple hover:bg-white/90 px-8 py-4 text-lg">
                  Start Your Transformation
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link to="/demo">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 px-8 py-4 text-lg">
                  Schedule Demo
                </Button>
              </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>Free consultation and assessment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>No upfront costs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>30-day money-back guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}