import React from 'react';
import { SEO } from '../components/SEO';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { ArrowRight, Calendar, Clock, User, TrendingUp, CheckCircle, Award, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudyHealthcareAI: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Healthcare AI Transformation: MedTech Solutions Achieves 400% ROI | Zion Tech Group"
        description="See how a regional healthcare network saved $13.2M annually and improved patient care quality dramatically with AI solutions."
        keywords="healthcare AI, medical AI, healthcare automation, ROI case study, patient care AI"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                <TrendingUp className="h-3 w-3 mr-1" />
                Success Story
              </Badge>
              <Badge className="bg-red-500/20 text-red-400 border-red-500/30 animate-pulse">
                New Case Study
              </Badge>
            </div>
            
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
              Healthcare AI Transformation: How MedTech Solutions Achieved 400% ROI with Zion Tech Group
            </h1>
            
            <div className="flex items-center gap-6 text-slate-400 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Zion Tech Group Case Study Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>January 16, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>15 min read</span>
              </div>
            </div>
          </div>

          <article className="prose prose-lg prose-invert max-w-none">
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-600/10 border border-green-500/20 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Award className="w-6 h-6 text-green-400 mr-2" />
                Executive Summary
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                MedTech Solutions, a regional healthcare network serving 500,000+ patients, partnered with Zion Tech Group to implement comprehensive AI solutions across their operations. Within 8 months, they achieved a 400% ROI, reduced patient wait times by 75%, improved diagnostic accuracy by 60%, and transformed their entire healthcare delivery system.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mb-6">Company Profile</h2>
            <div className="bg-slate-800/50 rounded-lg p-6 mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Client Details</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li><strong>Client:</strong> MedTech Solutions Healthcare Network</li>
                    <li><strong>Industry:</strong> Healthcare Services</li>
                    <li><strong>Size:</strong> 2,500 employees, 15 facilities</li>
                    <li><strong>Patients:</strong> 500,000+ served</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Business Metrics</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li><strong>Revenue:</strong> $180M annually</li>
                    <li><strong>Challenge:</strong> Patient backlog, diagnostic delays</li>
                    <li><strong>Solution:</strong> Comprehensive AI transformation</li>
                    <li><strong>Result:</strong> 400% ROI in 8 months</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-6">The Healthcare Crisis</h2>
            
            <h3 className="text-2xl font-bold text-white mb-4">Critical Challenges</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-red-400 mb-3">Patient Care Bottlenecks</h4>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Average patient wait time: 3.5 hours</li>
                  <li>• Diagnostic turnaround time: 5-7 days</li>
                  <li>• Appointment scheduling delays: 3-4 weeks</li>
                  <li>• Emergency room overcrowding: 40% above capacity</li>
                </ul>
              </div>
              
              <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-orange-400 mb-3">Operational Inefficiencies</h4>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Manual data entry: 200+ hours weekly</li>
                  <li>• Insurance verification: 15-20 minutes per patient</li>
                  <li>• Medical record retrieval: 10-15 minutes per request</li>
                  <li>• Billing and coding errors: 12% error rate</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-6">The Solution: Zion Tech Group's Healthcare AI Suite</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-400 mb-3">AI-Powered Patient Care Optimization</h4>
                <p className="text-slate-400 text-sm mb-3">Implementation: 6 weeks | Investment: $999/month</p>
                <ul className="space-y-1 text-slate-300 text-sm">
                  <li>• Intelligent appointment scheduling</li>
                  <li>• Predictive patient flow management</li>
                  <li>• Real-time capacity optimization</li>
                  <li>• Automated patient communication</li>
                </ul>
              </div>
              
              <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-purple-400 mb-3">AI Healthcare Analytics Platform</h4>
                <p className="text-slate-400 text-sm mb-3">Implementation: 8 weeks | Investment: $1,499/month</p>
                <ul className="space-y-1 text-slate-300 text-sm">
                  <li>• Real-time diagnostic assistance</li>
                  <li>• Predictive health analytics</li>
                  <li>• Automated medical record analysis</li>
                  <li>• Clinical decision support systems</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-6">Measurable Results</h2>
            
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-600/10 border border-green-500/20 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Financial Impact</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Cost Reductions</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Monthly Operational Costs:</span>
                      <span className="text-green-400 font-semibold">$2.8M → $1.7M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Patient Care Costs:</span>
                      <span className="text-green-400 font-semibold">$1.2M → $720K</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Administrative Costs:</span>
                      <span className="text-green-400 font-semibold">$800K → $480K</span>
                    </div>
                    <div className="flex justify-between border-t border-slate-700 pt-3">
                      <span className="text-white font-semibold">Total Annual Savings:</span>
                      <span className="text-green-400 font-bold text-lg">$13.2M</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Patient Care Improvements</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Average Wait Time:</span>
                      <span className="text-green-400 font-semibold">3.5h → 52min</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Diagnostic Turnaround:</span>
                      <span className="text-green-400 font-semibold">5-7 days → 1-2 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Patient Satisfaction:</span>
                      <span className="text-green-400 font-semibold">65% → 94%</span>
                    </div>
                    <div className="flex justify-between border-t border-slate-700 pt-3">
                      <span className="text-white font-semibold">ROI Achievement:</span>
                      <span className="text-green-400 font-bold text-lg">400%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-600/10 border border-blue-500/20 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Client Testimonial</h3>
              <blockquote className="text-slate-300 text-lg italic mb-4">
                "The AI transformation with Zion Tech Group has been nothing short of revolutionary for our healthcare network. We've not only reduced costs by $13.2M annually but have dramatically improved patient care quality. Our patients are happier, our staff is more productive, and our clinical outcomes are significantly better. The 400% ROI was achieved in just 8 months, and we're continuing to see improvements every month."
              </blockquote>
              <p className="text-slate-400">— Dr. Jennifer Martinez, Chief Medical Officer, MedTech Solutions</p>
            </div>

            <div className="text-center bg-gradient-to-r from-green-500/10 to-emerald-600/10 border border-green-500/20 rounded-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Healthcare Organization?</h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                This case study proves that with the right partner, proper implementation, and strategic approach, AI transformation can deliver exceptional results in healthcare, improving both financial performance and patient care quality.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:opacity-90 text-white px-8 py-3">
                    Get Healthcare AI Assessment
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/case-studies">
                  <Button variant="outline" className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-3">
                    View More Case Studies
                  </Button>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyHealthcareAI;