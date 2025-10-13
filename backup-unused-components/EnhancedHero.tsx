<<<<<<< HEAD
import React from 'react';

interface EnhancedHeroProps {
=======
import React from "react";
import { ArrowRight, CheckCircle, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
interface EnhancedHeroProps;
  title?: string;
  subtitle?: string;
  description?: string;
  primaryCta?: ,
    text: string;,
    href: string;
;
  secondaryCta?: ,
    text: string;,
    href: string;
;
  benefits?: string[];
  backgroundImage?: string;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function EnhancedHero({ className = '', children }: EnhancedHeroProps) {
  return (
<<<<<<< HEAD
    <div className={`${className}`}>
      {children}
    </div>
=======
    <div;
=======
const EnhancedHero: React.FC<EnhancedHeroProps> = (
  title = "Transform Your Business with AI",
  subtitle = "Leading Provider of AI Solutions",
  description = "Revolutionize your operations with cutting-edge artificial intelligence technology. Our advanced solutions deliver measurable results and drive unprecedented growth.",
<<<<<<< HEAD
<<<<<<< HEAD
  primaryCta = 
=======
  primaryCta = ,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
    text: "Get Started",
      href: "/contact",
,
  secondaryCta = ,
    text: "Learn More",
      href: "/about",
,
=======
  primaryCta = {
//     text: "Get Started",
//     href: "/contact",
  },
  secondaryCta = {
//     text: "Learn More",
//     href: "/about",
  },
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
  benefits = [
//     "Advanced AI technology integration",
//     "Real-time processing and analytics",
//     "Enterprise-grade security and compliance",
//     "Scalable and flexible solutions",
//     "24/7 technical support",
//     "Custom implementation and training",
//   ],
  backgroundImage = "/api/placeholder/1920/1080",
  className = "",
) => 
<<<<<<< HEAD
  const contactInfo = [
<<<<<<< HEAD
    
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri 9 AM-6 PM PST",
=======
  const contactInfo = [,
    icon: Phone,
        title: "Call Us",
        details: "+1 (555) 123-4567",
        description: "Mon-Fri 9 AM-6 PM PST",
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
,
    ,
    icon: Mail,
        title: "Email Us",
        details: "info@ziontechgroup.com",
        description: "We respond within 24 hours",
,
    ,
    icon: MapPin,
        title: "Visit Us",
        details: "123 Tech Street, San Francisco, CA",
        description: "Schedule a meeting",
,
=======
    {
//       icon: Phone,
//       title: "Call Us",
      details: "+1 (555) 123-4567",
//       description: "Mon-Fri 9 AM-6 PM PST",
    },
    {
//       icon: Mail,
//       title: "Email Us",
//       details: "info@ziontechgroup.com",
//       description: "We respond within 24 hours",
    },
    {
//       icon: MapPin,
//       title: "Visit Us",
//       details: "123 Tech Street, San Francisco, CA",
//       description: "Schedule a meeting",
    },
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
  ];
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
      className="{`relative" min-h-screen flex items-center justify-center overflow-hidden ${className}`}
=======
    <div>
  className="{`relative" min-h-screen flex items-center justify-center overflow-hidden ${className}`}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        
<<<<<<< HEAD
          <div;
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style="{}" backgroundImage: `url(${backgroundImage})` {}
=======
          <div>
  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20">
  style="{}" backgroundImage: `url(${backgroundImage})` {}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
          />
<<<<<<< HEAD
  </div>
=======
=======
//     <div
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}
//     >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {backgroundImage && (
//           <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ backgroundImage: `url(${backgroundImage})` }}
//           />
        )}
</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f

      </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20"></div>
        <div className="grid lg:grid-cols-2 gap-12 items-center"></div>
          {/* Left Column */}
<<<<<<< HEAD
          <div className="space-y-8"></div>
            <div></div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"></h1>
                {title}
              </h1>
              <p className="text-xl text-cyan-400 mb-4 font-semibold"></p>
=======
          <div className="space-y-8">
//             <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {title}
</h1>
              <p className="text-xl text-cyan-400 mb-4 font-semibold">
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
                {subtitle}
</p>
              <p className="text-lg text-gray-300 mb-8">{description}</p>
<<<<<<< HEAD
  </div>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4"></div>
              <Link;
=======
<<<<<<< HEAD
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4"></div>
<<<<<<< HEAD
              <Link
=======
</div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
//               <Link
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
                to={primaryCta.href}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
//               >
=======
              <Link>
  to={primaryCta.href}>
  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
                {primaryCta.text}
                <ArrowRight className="w-5 h-5 ml-2" />
<<<<<<< HEAD
              </Link>
<<<<<<< HEAD
              <Link;
=======
</Link>
//               <Link
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
                to={secondaryCta.href}
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
//               >
=======
              <Link>
  to={secondaryCta.href}>
  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
                {secondaryCta.text}
<<<<<<< HEAD
              </Link>
<<<<<<< HEAD
  </div>
=======
            </div>
=======
</Link>
</div>

>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
            {/* Benefits */}
            <div className="grid sm:grid-cols-2 gap-4"></div>
              
                <div key="{index}" className="flex items-center text-gray-300"></div>
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
<<<<<<< HEAD
  </div>  </div>
  </div>
=======
<<<<<<< HEAD
                </div>

            </div>
          </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
          {/* Right Column - Contact Info */}
          <div className="space-y-6"></div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"></div>
              <h3 className="text-xl font-semibold text-white mb-6 text-center"></h3>
                Get in Touch;
              </h3>
              <div className="space-y-4"></div>
                
                  <div key="{index}" className="flex items-start space-x-4"></div>
                    <div className="flex-shrink-0"></div>
                      <info.icon className="w-6 h-6 text-cyan-400" />
  </div>
                    <div></div>
=======
</div>
              ))}
</div>
</div>

          {/* Right Column - Contact Info */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
//                 Get in Touch
</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <info.icon className="w-6 h-6 text-cyan-400" />
</div>
//                     <div>
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
                      <h4 className="text-white font-medium">{info.title}</h4>
                      <p className="text-gray-300">{info.details}</p>
                      <p className="text-gray-400 text-sm"></p>
                        {info.description}
<<<<<<< HEAD
                      </p>
<<<<<<< HEAD
  </div>
  </div>  </div>
  </div>
=======
                    </div>
                  </div>

              </div>
            </div>
=======
</p>
</div>
</div>
                ))}
</div>
</div>

>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4"></div>
              <div className="text-center"></div>
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-gray-400 text-sm">Happy Clients</div>
<<<<<<< HEAD
  </div>
=======
<<<<<<< HEAD
              </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
              <div className="text-center"></div>
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-gray-400 text-sm">Uptime</div>
  </div>
              <div className="text-center"></div>
=======
</div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-gray-400 text-sm">Uptime</div>
</div>
              <div className="text-center">
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-gray-400 text-sm">Support</div>
<<<<<<< HEAD
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
</div>
</div>
</div>
</div>
</div>
</div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
  );
}