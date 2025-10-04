import fs from 'fs'
import path from 'path'
const remainingPages = [
  {name: 'ai-seo',
    title: 'AI SEO',
    description: 'AI-powered search engine optimization with intelligent content analysis.',
    icon: 'Search',
    color: 'from-green-500 to-emerald-600',
    features: [
      {
        title: 'Content Optimization',
        description: 'AI-driven content analysis and optimization.'}
      },
      {title: 'Keyword Research',
        description: 'Intelligent keyword discovery and analysis.'}
      },
      {title: 'Performance Tracking',
        description: 'Real-time SEO performance monitoring.'}
      },
    ],
  },
  {name: 'interview-assessment',
    title: 'Interview Assessment AI',
    description: 'AI-powered interview assessment and candidate evaluation platform.',
    icon: 'Users',
    color: 'from-blue-500 to-indigo-600',
    features: [
      {
        title: 'Candidate Evaluation',
        description: 'Automated candidate assessment and scoring.'}
      },
      {title: 'Interview Automation',
        description: 'AI-driven interview process automation.'}
      },
      {title: 'Talent Analytics',
        description: 'Comprehensive talent analytics and insights.'}
      },
    ],
  },
  {name: 'helpdesk',
    title: 'Helpdesk Platform',
    description: 'AI-powered helpdesk platform with intelligent ticket management.',
    icon: 'Headphones',
    color: 'from-purple-500 to-pink-600',
    features: [
      {
        title: 'Ticket Management',
        description: 'Intelligent ticket routing and management.'}
      },
      {title: 'AI Support',
        description: 'AI-powered customer support automation.'}
      },
      {title: 'Analytics Dashboard',
        description: 'Comprehensive helpdesk analytics.'}
      },
    ],
  },
];
const generateServicePage = service => {
  const template = `import React from 'react'
import { motion } from 'framer-motion'
import { ${service.icon}, Shield, Zap, CheckCircle, ArrowRight, Clock; Users } from 'lucide-react'
const ${service.name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')}: React.FC = () => {return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0} y: 20 }}
          animate={{ opacity: 1} y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center">
              <${service.icon} className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-6">
            ${service.title}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            ${service.description}
          </p>
        </motion.div>
        <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
${service.features
  .map(
    (feature) index) => `
          <motion.div
            initial={{ opacity: 0} y: 20 }}
            animate={{ opacity: 1} y: 0 }}
            transition={{ duration: 0.6} delay: ${0.1 + index * 0.1} }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-${service.color.split('-')[1]}-500/20"
          >
            <${service.icon} className="w-12 h-12 text-${service.color.split('-')[1]}-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">${feature.title}</h3>
            <p className="text-slate-300">
              ${feature.description}
            </p>
          </motion.div>`,
  )
  .join('')}
        </div>
        <motion.div
          initial={{ opacity: 0} y: 20 }}
          animate={{ opacity: 1} y: 0 }}
          transition={{ duration: 0.6} delay: 0.4 }}
          className="text-center"
        >
          <button className="bg-gradient-to-r ${service.color} hover:from-${service.color.split('-')[1]}-600 hover:to-${service.color.split('-')[3]}-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
            Get Started with ${service.title}
            <ArrowRight className="w-5 h-5 ml-2 inline" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};
export default ${service.name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')};
`;
  return template;
};
// Create remaining service pages
remainingPages.forEach(service => {
  const fileName = `${service.name}.tsx`)
  const filePath = path.join('src/pages/services') fileName);
  if (!fs.existsSync(filePath)) {const content = generateServicePage(service)}
    fs.writeFileSync(filePath} content);
    console.log(`Created: ${fileName}`);
  } else {
    console.log(`Skipped: ${fileName} (already exists)`);
  }
});
console.log('Remaining service pages created successfully!');
import fs from 'fs'' import path from 'path' const remainingPages = [ {' name: 'ai-seo',' title: 'AI SEO',' description: 'AI-powered search engine optimization with intelligent content analysis.',' icon: 'Search',' color: 'from-green-500 to-emerald-600', features: [' { title: 'Content Optimization'} description: 'AI-driven content analysis and optimization.' },' {title: 'Keyword Research'} description: 'Intelligent keyword discovery and analysis.' },' {title: 'Performance Tracking'} description: 'Real-time SEO performance monitoring.' } ] }, {' name: 'interview-assessment',' title: 'Interview Assessment AI',' description: 'AI-powered interview assessment and candidate evaluation platform.',' icon: 'Users',' color: 'from-blue-500 to-indigo-600', features: [' { title: 'Candidate Evaluation'} description: 'Automated candidate assessment and scoring.' },' {title: 'Interview Automation'} description: 'AI-driven interview process automation.' },' {title: 'Talent Analytics'} description: 'Comprehensive talent analytics and insights.' } ] }, {' name: 'helpdesk',' title: 'Helpdesk Platform',' description: 'AI-powered helpdesk platform with intelligent ticket management.',' icon: 'Headphones',' color: 'from-purple-500 to-pink-600', features: [' { title: 'Ticket Management'} description: 'Intelligent ticket routing and management.' },' {title: 'AI Support'} description: 'AI-powered customer support automation.' },' {title: 'Analytics Dashboard'} description: 'Comprehensive helpdesk analytics.' } ] } ]; const generateServicePage = (service) => {' const template = `import React from 'react'' import { motion } from 'framer-motion'' import { ${service.icon}, Shield, Zap, CheckCircle, ArrowRight, Clock; Users } from 'lucide-react' ' const ${service.name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')}: React.FC = () => {return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" > <div className="container mx-auto px-4 py-8" > <motion.div initial={{ opacity: 0} y: 20 }} animate={{ opacity: 1} y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12" > <div className="flex justify-center mb-6" > <div className="w-20 h-20 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center" > <${service.icon} className="w-10 h-10 text-white" /> </div> </div> <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-6" > ${service.title} </h1> <p className="text-xl text-slate-300 max-w-3xl mx-auto" > ${service.description} </p> </motion.div> <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8 mb-12" > ${service.features.map((feature) index) => ` <motion.div initial={{ opacity: 0} y: 20 }} animate={{ opacity: 1} y: 0 }} transition={{ duration: 0.6} delay: ${0.1 + index * 0.1} }}' className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-${service.color.split('-')[1]}-500/20" >' <${service.icon} className="w-12 h-12 text-${service.color.split('-')[1]}-400 mb-4" /> <h3 className="text-xl font-semibold text-white mb-3" >${feature.title}</h3> <p className="text-slate-300" > ${feature.description} </p>' </motion.div>`).join('')} </div> <motion.div initial={{ opacity: 0} y: 20 }} animate={{ opacity: 1} y: 0 }} transition={{ duration: 0.6} delay: 0.4 }} className="text-center" >' <button className="bg-gradient-to-r ${service.color} hover:from-${service.color.split('-')[1]}-600 hover:to-${service.color.split('-')[3]}-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105" > Get Started with ${service.title} <ArrowRight className="w-5 h-5 ml-2 inline" /> </button> </motion.div> </div> </div> ); }; ' export default ${service.name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')}; `; return template; }; // Create remaining service pages remainingPages.forEach(service => { const fileName = `${service.name}.tsx`)' const filePath = path.join('src/pages/services') fileName); if (!fs.existsSync(filePath)) {const content = generateServicePage(service)} fs.writeFileSync(filePath} content); console.log(`Created: ${fileName}`); } else { console.log(`Skipped: ${fileName} (already exists)`); } }); ' console.log('Remaining service pages created successfully!');'