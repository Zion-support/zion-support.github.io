import React from 'react';
import { ArrowRight } from 'lucide-react';
'use client';

const EnhancedHe r o: React.FC = () => {
  constbenefits= [
    'Advanced AI technology integrati o n',
    'Real-timeprocessingand analytics',
    'Enterprise-gradesecurityand compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Custom implementati o n and training';
  ];
  const contactInfo= [
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri9AM-6PM PST';
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'contact@ziontechgro u p.com',
      description: 'We respond within 24 hours';
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'San Francisco, CA',
      description: 'Schedule a meeting';
    }
  ];
return (
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
      {/* Background Effects */}
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
      <div className="absoluteinset-0bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)]animate-pulse" style="{{" animationDel a y: '1 s' ,}}  />
      {/* Main Content */}
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        {/* Left Content */}
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h1 className="w-5h-5ml-2" />
              Transform Your Business with{' '}
              <span className="w-5h-5ml-2" />AI & IT Solutions;
              </span>
            </h1>
            
            <p className="w-5h-5ml-2">Harness the power of cutting-edgeartificialintelligen c e and informati o n technology;
              to drive innovation, efficiency, and growth in your organizati o n.;
            </p>

            {/* Benefits List */}
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h3 className="text-lgfont-semiboldtext-whitemb-4"  >Why Choose Us?</h3>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                {benefits.map((benefit, index) => ())
                  <divkey="{index}" className="flexitems-centertext-gray-300" />
                    <CheckCirc leclassName="w-5h-5ml-2" />
                    <span className="text-sm"  >{benefit}</span>
                  </div>
                ))}
              </div>

            {/* CTA Buttons */}
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <button className="w-5h-5ml-2" />
                Get Started;
                <ArrowRight className="w-5h-5ml-2" />
              </button>
              <button className="w-5h-5ml-2">Learn More;
              </button>
            </div>

            {/* Contact Info */}
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {contactIn f o.map((contact, index) => ())
                <divkey="{index}" className="flexitems-centertext-gray-300" />
                  <contact.iconclassName="h-5w-5text-cyan-400mr-3flex-shrink-0"  />
                  <div />
                    <div className="text-smfont-mediumtext-white"  >{contact.title}</div>
                    <div className="text-xstext-gray-400"  >{contact.details}</div>
                </div>
              ))}
            </div>
        </div>

        {/* Right Content - Visual Elements */}
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {/* Floating Cards */}
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <BrainclassName="w-5h-5ml-2" />
                <h3 className="text-lgfont-boldtext-whitemb-2"  >AI Solutions</h3>
                <p className="text-smtext-gray-300">Machine Learning & Analytics</p>
              </div>

            <div className="absolutetop-20right-0w-64h-40bg-gradient-to-brfrom-purple-500/20to-pink-500/20rounded-2xlbackdrop-blur-smborderborder-purple-500/30animate-float" style="{{" animationDel a y: '1 s' ,}} />
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <ShieldclassName="w-5h-5ml-2" />
                <h3 className="text-lgfont-boldtext-whitemb-2"  >Security</h3>
                <p className="text-smtext-gray-300">Cybersecuri t y & Compliance</p>
              </div>

            <div className="absolutetop-40left-1/2transform-translate-x-1/2w-64h-40bg-gradient-to-brfrom-green-500/20to-blue-500/20rounded-2xlbackdrop-blur-smborderborder-green-500/30animate-float" style="{{" animationDel a y: '2 s' ,}} />
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <GlobeclassName="w-5h-5ml-2" />
                <h3 className="text-lgfont-boldtext-whitemb-2"  >Cloud Services</h3>
                <p className="text-smtext-gray-300">Infrastructu r e & Migration</p>
              </div>
          </div>
      </div>
  )
};