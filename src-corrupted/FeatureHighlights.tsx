import React from 'react';

const FeatureHighlights: React.FC = () => {
  return (
<<<<<<< HEAD
    <section className={cn("py-16 bg-zion-blue", className)} style={style}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Tailored Solutions for Everyone</h2>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            Whatever your role in the tech ecosystem, Zion offers specialized features to help you succeed
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {highlightsData.map((category, index) => (
            <Card
              key={index}
              className='bg-zion-blue-dark border-zion-blue-light'
            >
              <CardContent className='p-6'>
                <h3 className='text-xl font-bold text-white mb-4'>
                  {category.title}
                </h3>
                <ul className='space-y-3'>
                  {category.features.map((feature, idx) => (
                    <li key={idx} className='flex items-start'>
                      <Check className='h-5 w-5 text-zion-cyan mr-2 mt-0.5 flex-shrink-0' />
                      <span className='text-zion-slate-light'>{feature}</span>                    </li>            <Card key={index} className="bg-zion-blue-dark border-zion-blue-light">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.features.map((feature, idx,) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
import { motion  } from 'framer-motion'
  {
    icon: "⚡"
    title: "Lightning Fast Performance"
    description: "Optimized solutions that deliver exceptional speed and efficiency for your business needs"
}
  {
    icon: "🔒"
    title: "Enterprise Security"
    description: "Bank-level security protocols and compliance standards to protect your valuable data"
}
  {
    icon: "🌐"
    title: "Global Scalability"
    description: "Solutions that scale seamlessly from startup to enterprise across multiple regions"
}
  {
    icon: "🤖"
    title: "AI-Powered Intelligence"
    description: "Smart automation and predictive analytics that adapt to your business requirements"
}
  {
    icon: "📊"
    title: "Real-Time Analytics"
    description: "Comprehensive insights and reporting to make data-driven decisions instantly"
}
]
}
}
}
  const itemVariants = {
  hidden: { opacity: 0, y: 30
  scale: 0.95
}
    visible: {
      opacity: 1
      y: 0
      scale: 1
      transition: {
        duration: 0.6
        ease: "easeOut"
}
}
}
  const achievementVariants = {
  hidden: { opacity: 0
  scale: 0.8
}
    visible: {
      opacity: 1
      scale: 1
      transition: { duration: 0.5 }
}
}
  const techVariants = {
  hidden: { opacity: 0
  x: -20
}
    visible: {
      opacity: 1
      x: 0
      transition: { duration: 0.5 }
}
}
export function FeatureHighlights() {
  return ("
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">"
      <div className="max-w-7xl mx-auto px-6">
        <motion.div          className="text-center mb-16"
          initial = {
  { opacity: 0
  y: 20
}}
          whileInView = {
  { opacity: 1
  y: 0
}}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >"
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zion-purple/10 border border-zion-purple/20 rounded-full text-zion-purple text-sm font-medium mb-6">"
            <Award className="w-4 h-4"  />            <span>Why Choose Zion</span>
          </div>
"
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Built for the Future of Work
          </h2>
"
          <p className="text-lg md:text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Experience the next generation of talent marketplace with cutting-edge AI
            global reach, and enterprise-grade security.</p>
        </motion.div>
"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -5
                scale: 1.02
                transition: { duration: 0.3 }
              }}"
              className="group"
"
              <div className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300">
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>`
                  <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                </div>
"
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </h3>
"
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
        <motion.div          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition = {
  { duration: 0.6
  delay: 0.4
}}
        >"
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold">
            <span>Experience the difference</span>"
            <span className="text-2xl">→</span>
          </div>
        </motion.div>
      </div>
    </section>
  )}
'"`
)

;
'"`;
);




        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlightsData.map((category, index) => (
            <Card key={index} className="bg-zion-blue-dark border-zion-blue-light">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </li>

import React from "react",;
import { Card, CardContent } from "@/components/ui/card",;
import { Check } from 'lucide-react';
import { cn } from "@/lib/utils",;
interface FeatureHighlightsProps {;
  className?: string,;
  style?: React.CSSProperties;
}
;
export function FeatureHighlights({ className, style }: FeatureHighlightsProps) {;
  const highlightsData = [;
    {;
      title: "For Talent Seekers",;
      features: [;
        "AI-powered talent matching based on your specific project requirements",;
        "Verified profiles with skills validation and credential checking",;
        "Transparent pricing and no hidden fees",;
        "Direct communication with potential candidates",;
        "Secure payment protection and dispute resolution",;
        "Post jobs and receive AI-matched applicants";
      ];
    },;
    {;
      title: "For Talent & Service Providers",;
      features: [;
        "Create a professional profile showcasing your skills and experience",;
        "Get matched with relevant projects that fit your expertise",;
        "Secure payment processing with on-time disbursements",;
        "Build your reputation through client reviews and ratings",;
        "Access to enterprise clients and high-value projects",;
        "Professional development resources and community support";
      ];
    },;
    {;
      title: "For Enterprise Clients",;
      features: [;
        "White-labeled talent portal with your company branding",;
        "Dedicated account management and priority support",;
        "Custom talent pools and preferred provider networks",;
        "Advanced analytics and reporting capabilities",;
        "API access for seamless integration with your HR systems";
        "Customizable workflow and approval processes";
      ];
    }
  ];
  return (;
    <section className={cn("py-16 bg-zion-blue", className)} style={style}>;
      <div className="container mx-auto px-4">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl font-bold text-white mb-3">Tailored Solutions for Everyone</h2>;
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">;
            Whatever your role in the tech ecosystem, Zion offers specialized features to help you succeed;
          </p>;
        </div>;

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">;
          {highlightsData.map((category, index) => (;
            <Card key={index} className="bg-zion-blue-dark border-zion-blue-light">;
              <CardContent className="p-6">;
                <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>;
                <ul className="space-y-3">;
                  {category.features.map((feature, idx) => (;
                    <li key={idx} className="flex items-start">;
                      <Check className="h-5 w-5 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />;
                      <span className="text-zion-slate-light">{feature}</span>;
                    </li>;


                  ))}
                </ul>;
              </CardContent>;
            </Card>;
          ))}

        <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 6'>;
          {highlights_data.map ((category, index) => (
            <Card;
              key={index}
              className='bg - zion - blue - dark border - zion - blue - light';
            >;
              <CardContent className='p - 6'>;
                <h3 className='text - xl font - bold text - white mb - 4'>;
                  {category.title}
                </h3>;
                <ul className='space - y-3'>;
                  {category.features.map ((feature, idx) => (
                    <li key={idx} className='flex items - start'>;
                      <Check className='h - 5 w - 5 text - zion - cyan mr - 2 mt - 0.5 flex - shrink - 0' />;
                      <span className='text - zion - slate - light'>{feature}</span>                    </li>            <Card key={index} className="bg - zion - blue - dark border - zion - blue - light">;
              <CardContent className="p - 6">;
                <h3 className="text - xl font - bold text - white mb - 4">{category.title}</h3>;
                <ul className="space - y-3">;
                  {category.features.map ((feature, idx, ) => (
                    <li key={idx} className="flex items - start">;
                      <Check className="h - 5 w - 5 text - zion - cyan mr - 2 mt - 0.5 flex - shrink - 0" />;
                      <span className="text - zion - slate - light">{feature}</span>))}
                </ul>;
              </CardContent>;
            </Card>))}
        </div>;
      </div>;
    </section>);

}
import { motion  } from 'framer-motion';
  {

    icon: "⚡",
    title: "Lightning Fast Performance",
    description: "Optimized solutions that deliver exceptional speed and efficiency for your business needs";
},
  {
    icon: "🔒",
    title: "Enterprise Security",
    description: "Bank - level security protocols and compliance standards to protect your valuable data";
},
  {
    icon: "🌐",
    title: "Global Scalability",
    description: "Solutions that scale seamlessly from startup to enterprise across multiple regions";
},
  {
    icon: "🤖",
    title: "AI - Powered Intelligence",
    description: "Smart automation and predictive analytics that adapt to your business requirements";
},
  {
    icon: "📊",
    title: "Real - Time Analytics",
    description: "Comprehensive insights and reporting to make data - driven decisions instantly";

}
];
}
}
}

  const item_variants = {
  hidden: { opacity: 0, coordinate_y: 30,
  scale: 0.95;
},
    visible: {
      opacity: 1,
      coordinate_y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "ease_out";
}
}
}
  const achievement_variants = {
  hidden: { opacity: 0,
  scale: 0.8;
},

    visible: {
      opacity: 1
      scale: 1
      transition: { duration: 0.5 }
}
}

  const tech_variants = {
  hidden: { opacity: 0,
  coordinate_x: -20;
},
    visible: {
      opacity: 1,
      coordinate_x: 0,

      transition: { duration: 0.5 }
}
}
export /**
 * FeatureHighlights - Function description
 */
function FeatureHighlights() {
  return (";
    <section className="py - 20 bg - gradient - to - br from - slate - 900 via - slate - 800 to - slate - 900">";
      <div className="max - w-7xl mx - auto px - 6">;
        <motion.div          className="text - center mb - 16";
          initial = {

  { opacity: 0,
  coordinate_y: 20;
}}
          whileInView = {
  { opacity: 1,
  coordinate_y: 0;
}}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >";
          <div className="inline - flex items - center gap - 2 px - 4 py - 2 bg - zion - purple / 10 border border - zion - purple / 20 rounded - full text - zion - purple text - sm font - medium mb - 6">";
            <Award className="w - 4 h - 4"  />            <span > Why Choose Zion</span>;
          </div>;
";
          <h2 className="text - 3xl md:text - 4xl lg:text - 5xl font - bold text - white mb - 6">;
            Built for the Future of Work;
          </h2>;
";
          <p className="text - lg md:text - xl text - zion - slate - light max - w-3xl mx - auto leading - relaxed">;
            Experience the next generation of talent marketplace with cutting - edge AI,
            global reach, and enterprise - grade security.</p>;
        </motion.div>;
";
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
          {features.map ((feature, index (
            <motion.div;
              key={index}
              variants={item_variants}
              while_hover={{
                coordinate_y: -5,
                scale: 1.02,

                transition: { duration: 0.3 }
              }}";
              className="group";
";
              <div className="bg - slate - 800 / 50 border border - white / 10 rounded - xl p - 6 hover:border - white / 20 transition - all duration - 300">;
                <div className={`w - 12 h - 12 bg - gradient - to - r ${feature.color} rounded - lg flex items - center justify - center mb - 4 group - hover:scale - 110 transition - transform duration - 300`}>`;
                  <feature.icon className={`w - 6 h - 6 ${feature.icon_color}`} />;
                </div>;
";
                <h3 className="text - xl font - semibold text - white mb - 2 group - hover:text - blue - 400 transition - colors duration - 300">;
                  {feature.title}
                </h3>;
";
                <p className="text - gray - 400 group - hover:text - gray - 300 transition - colors duration - 300">;
                  {feature.description}
                </p>;
              </div>;
              <h3 className="text - xl font - bold text - white mb - 3 group - hover:text - blue - 400 transition - colors duration - 200">;
                {feature.title}
              </h3>;
              <p className="text - gray - 400 text - sm leading - relaxed">;
                {feature.description}

        </div>;
      </div>;
    </section>;
  );
}


import { motion  } from 'framer-motion';
  {;
    icon: "⚡",;
    title: "Lightning Fast Performance",;
    description: "Optimized solutions that deliver exceptional speed and efficiency for your business needs";
},;
  {;
    icon: "🔒",;
    title: "Enterprise Security",;
    description: "Bank-level security protocols and compliance standards to protect your valuable data";
},;
  {;
    icon: "🌐",;
    title: "Global Scalability",;
    description: "Solutions that scale seamlessly from startup to enterprise across multiple regions";
},;
  {;
    icon: "🤖",;
    title: "AI-Powered Intelligence",;
    description: "Smart automation and predictive analytics that adapt to your business requirements";
},;
  {;
    icon: "📊",;
    title: "Real-Time Analytics",;
    description: "Comprehensive insights and reporting to make data-driven decisions instantly";
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
};

export default FeatureHighlights;
