<<<<<<<< HEAD:fix-all-remaining.cjs
<<<<<<< HEAD
const fs = require('fs');

#!/usr/bin/env node

origin/cursor/expand-services-advertise-and-build-project-c28b
=#!/usr/bin/env node;
;
>const fs = require('fs');
const path = require('path');
;
console.log('🔧 Fixing all remaining syntax errors...');
;
// Fix help.tsx;
const helpContent = `import Head from 'next/head';
import { motion } from 'framer-motion';
import { BookOpen, MessageCircle, Phone, Mail, Search, ChevronRight } from 'lucide-react';
import Layout from '../components/Layout';


const filesToFix = [
  {
    title: "Account & Billing",
    ]
  };
  {
    title: "Account & Billing,
    icon: MessageCircle,
    description: "Manage your account, billing, and subscription",
    articles: [



];
;
const educationBenefits = [;
  {;
    "icon": GraduationCap,
    "title": 'Student Success',
    "description": 'Improve student outcomes with personalized learning and analytics.',
    "metric": '40%';
  },
  {;
    "icon": TrendingUp,
    "title": 'Efficiency Gains',
    "description": 'Streamline administrative processes and reduce manual work.',
    "metric": '60%';
  },
  {;
    "icon": Shield,
    "title": 'Data Security',
    "description": 'Protect sensitive student and institutional data with enterprise-grade security.',
    "metric": '99.9%';
  }
];

export default function Education() {
  return (
    <Layout>
      <Head>
        <title>Education Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform education with our comprehensive technology solutions for schools, colleges, and universities." />
      </Head>


    titl: "Technical Support",
    ico: Phone,
    descriptio: "Get help with technical issues and troubleshooting",
    article: [
      "Common troubleshooting",
      "API documentation",
      "Integration guides"
    ]

  }
}




        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Browse by Category
              </h2>
              
              <div className="grid grid-cols-1: md:grid-cols-3 gap-8">
                {helpCategories.map((category, index) => {
                  const IconComponent = category.icon;
                  return (;
                    <motion.div;
                      key={index}
                      className="bg-white rounded-xl shadow-lg p-8:hover:shadow-xl transition-shadow duration-300";
                      initial={{ opacit:y:0, y:30 }}
                      whileInView={{ opacit:y:1, y:0 }}
                      transition={{ duratio:n:0.8, dela:y:index * 0.1 }}
                      viewport={{ onc:e:true }}
                    >;
                      <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">;
                        <IconComponent className="w-8 h-8 text-blue-600" />;
                      </div>;
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.title}</h3>;
                      <p className="text-gray-600 mb-6">{category.description}</p>;
                      <ul className="space-y-2">;
                        {category.articles.map((article, articleIndex) => (;
                          <li key={articleIndex} className="flex items-center text-gray-600:hover:text-blue-600 cursor-pointer">;
                            <ChevronRight className="w-4 h-4 mr-2" />;
                            {article}
                          </li>;
                        ))}
                      </ul>;
                    </motion.div>;
                  );
                })}
              </div>;
            </div>;
          </div>;
        </section>;
;
        <section className="py-20 bg-gray-50">;
          <div className="container mx-auto px-4">;
            <div className="max-w-4xl mx-auto">;
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">;
                Popular Articles;
              </h2>;
              ;
              <div className="space-y-4">;
                {popularArticles.map((article, index) => (;
                  <motion.div;
                    key={index}
                    className="bg-white rounded-lg p-6:hover:shadow-lg transition-shadow duration-300 cursor-pointer";
                    initial={{ opacit:y:0, y:20 }}
                    whileInView={{ opacit:y:1, y:0 }}
                    transition={{ duratio:n:0.8, dela:y:index * 0.1 }}
                    viewport={{ onc:e:true }}
                  >;
                    <div className="flex items-center justify-between">;
                      <div>;
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{article.title}</h3>;
                        <div className="flex items-center text-sm text-gray-500">;
                          <span className="mr-4">{article.category}</span>;
                          <span>{article.readTime} read</span>;
                        </div>;
                      </div>;
                      <ChevronRight className="w-5 h-5 text-gray-400" />;
                    </div>;
                  </motion.div>;
                ))}
              </div>;
            </div>;
          </div>;
        </section>;
;
        <section className="py-20">;
          <div className="container mx-auto px-4">;
            <div className="max-w-4xl mx-auto text-center">;
              <h2 className="text-3xl font-bold text-gray-900 mb-6">;
                Still Need Help?;
              </h2>;
              <p className="text-lg text-gray-600 mb-8">;
                Our support team is here to help you succeed.;
              </p>;
              <div className="flex flex-col:sm:flex-row gap-4 justify-center">;
                <a;
                  href="mailt:o:support@ziontechgroup.com";
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium:hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center";
                >;
                  <Mail className="w-5 h-5 mr-2" />;
                  Email Support;
                </a>;
                <a;
                  href="te:l:+15551234567";
                  className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium:hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center";
                >;
                  <Phone className="w-5 h-5 mr-2" />;
                  Call Support;
                </a>;
              </div>;
            </div>;
          </div>;
        </section>;
      </main>;
    </Layout>;
  );
}`;
;
fs.writeFileSync('/workspace/pages/help.tsx', helpContent);
console.log('✅ Fixed help.tsx');
;
// Fix industries/education.tsx;
const educationContent = `import Head from 'next/head';
import { motion } from 'framer-motion';
import { ;
  GraduationCap, ;
  BookOpen, ;
  Users, ;
  Building, ;
  TrendingUp, ;
  CheckCircle,;
  Clock,;
  Shield;} from 'lucide-react';
import Layout from '../components/Layout';
;
const educationSolutions = [;
  {;
    titl:e:'Student Information System',;
    descriptio:n:'Comprehensive platform for managing student data and academic records',;
    ico:n:Building,;
    feature:s:['Enrollment Management', 'Grade Management', 'Scheduling', 'Communication Tools'],;
    benefit:s:['50% time savings', 'Reduced errors', 'Better organization', 'Improved efficiency'];
  },;
  {;
    titl:e:'Learning Management System',;
    descriptio:n:'Modern LMS with AI-powered personalized learning experiences',;
    ico:n:BookOpen,;
    feature:s:['Course Creation', 'Assessment Tools', 'Progress Tracking', 'Collaboration Features'],;
    benefit:s:['40% better engagement', 'Personalized learning', 'Real-time analytics', 'Mobile access'];
  },;
  {;
    titl:e:'Campus Management',;
    descriptio:n:'Integrated solution for managing all campus operations',;
    ico:n:Building,;
    feature:s:['Resource Scheduling', 'Facility Management', 'Event Planning', 'Financial Management'],;
    benefit:s:['Streamlined operations', 'Cost reduction', 'Better resource utilization', 'Improved planning'];
  }
];
;
const educationBenefits = [;
  {;
    ico:n:GraduationCap,;
    titl:e:'Student Success',;
    descriptio:n:'Improve student outcomes with personalized learning and analytics.',;
    metri:c:'40%';
  },;
  {;
    ico:n:TrendingUp,;
    titl:e:'Efficiency Gains',;
    descriptio:n:'Streamline administrative processes and reduce manual work.',;
    metri:c:'60%';
  },;
  {;
    ico:n:Shield,;
    titl:e:'Data Security',;
    descriptio:n:'Protect sensitive student and institutional data with enterprise-grade security.',;
    metri:c:'99.9%';
  }
];
;
export default function Education() {;
  return (;
    <Layout>;
      <Head>;
        <title>Education Solutions - Zion Tech Group</title>;
        <meta name="description" content="Transform education with our comprehensive technology solutions for schools, colleges, and universities." />;
      </Head>;
;
      <main>;
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">;
          <div className="container mx-auto px-4">;
            <motion.div;
              className="text-center";
              initial={{ opacit:y:0, y:30 }}
              animate={{ opacit:y:1, y:0 }}
              transition={{ duratio:n:0.8 }}
            >;
              <h1 className="text-4xl:md:text-6xl font-bold mb-6">;
                Education Solutions;
              </h1>;
              <p className="text-xl:md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">;
                Transform education with our comprehensive technology solutions for schools, colleges, and universities.;
              </p>;
            </motion.div>;
          </div>;
        </section>;
;
        <section className="py-20">;
          <div className="container mx-auto px-4">;
            <div className="max-w-6xl mx-auto">;
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">;
                Our Education Solutions;
              </h2>;
              ;
              <div className="grid grid-cols-1:md:grid-cols-2:lg:grid-cols-3 gap-8">;
                {educationSolutions.map((solution, index) => {;
                  const IconComponent = solution.icon;
                  return (;
                    <motion.div;
                      key={index}

                              {benefit}
                            </li>;
                          ))}
                        </ul>;
                      </div>;
                    </motion.div>;
                  );
                })}

                  const IconComponent = benefit.icon;
                  return (;
                    <motion.div;
                      key={index}

        </section>;
      </main>;
    </Layout>;
  );
}`;
;
fs.writeFileSync('/workspace/pages/industries/education.tsx', educationContent);
console.log('✅ Fixed industries/education.tsx');
;
console.log('🎉 All remaining syntax errors fixed!');
>>>>>>> main
