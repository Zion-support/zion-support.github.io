'use client';
import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight, Brain, Cloud     } from 'lucide-react';
const Footer: React.FC = () => {
const currentYear = new Date().getFullYear()
const aiServices = [
    { name: 'AI Analytics & BI',url: '/ai-analytics',description: 'Business intelligence' ,}
    { name: 'AI Automation',url: '/ai-automation',description: 'Process automation' ,}
    { name: 'AI Chatbots & NLP',url: '/ai-chatbot-builder',description: 'Conversational AI' ,}
    { name: 'AI Content Generation',url: '/ai-content-generation',description: 'Automated content' ,}
    { name: 'AI Cybersecurity',url: '/ai-cybersecurity',description: 'AI security' ,}
    { name: 'Computer Vision',url: '/computer-vision',description: 'Image recognition' ,}
    { name: 'Predictive Analytics',url: '/predictive-analytics',description: 'Forecasting' ,}
    { name: 'Speech & Voice AI',url: '/ai-voice-assistant',description: 'Voice technology' ,}
  ]
const itServices = [
    { name: 'Web Development',url: '/web-development',description: 'Custom websites' ,}
    { name: 'Mobile Development',url: '/mobile-development',description: 'iOS & Android apps' ,}
    { name: 'Cloud Migration',url: '/cloud-migration',description: 'Cloud solutions' ,}
    { name: 'Cybersecurity',url: '/cybersecurity',description: 'Security services' ,}
    { name: 'DevOps',url: '/devops',description: 'Development operations' ,}
    { name: 'Data Analytics',url: '/data-analytics',description: 'Data insights' ,}
    { name: 'IoT Solutions',url: '/iot-solutions',description: 'Internet of Things' ,}
    { name: 'Blockchain',url: '/blockchain',description: 'Blockchain technology' ,}
  ]
const microSaas = [
    { name: 'AI Email Marketing',url: '/micro-saas/ai-email-marketing-automation',description: 'Email automation' ,}
    { name: 'AI Inventory Manager',url: '/micro-saas/ai-inventory-manager',description: 'Inventory tracking' ,}
    { name: 'AI Project Manager',url: '/micro-saas/ai-project-manager',description: 'Project management' ,}
    { name: 'AI Social Scheduler',url: '/micro-saas/ai-social-media-scheduler',description: 'Social media' ,}
  ]
const company = [
    { name: 'About Us',url: '/about' ,}
    { name: 'Our Team',url: '/team' ,}
    { name: 'Careers',url: '/careers' ,}
    { name: 'Contact',url: '/contact' ,}
  ]
const resources = [
    { name: 'Documentation',url: '/docs' ,}
    { name: 'API Reference',url: '/api' ,}
    { name: 'Blog',url: '/blog' ,}
    { name: 'Tutorials',url: '/tutorials' ,}
    { name: 'Case Studies',url: '/case-studies' ,}
    { name: 'Support',url: '/support' ,}
  ]
const legal = [
    { name: 'Privacy Policy',url: '/privacy' ,}
    { name: 'Terms of Service',url: '/terms' ,}
    { name: 'Cookie Policy',url: '/cookies' ,}
    { name: 'GDPR Compliance',url: '/gdpr' ,}
  ]
return (
    <footer className="bg-slate-900 text-white">,
    <div className="max-w-7 xl mx-auto px-4 sm: px-6 lg:px-8 py-12">

      </div>,<div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8"></div>
          {/* Company Info */,},
    <div className="space-y-4"></div>,
    <div className="flex items-center space-x-2"></div>,
    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center"></div>,
    <span className="text-white font-bold text-lg">Z</span>
</div>,
    <span className="text-xl font-bold">Zion Tech Group</span>
              </div>
            <p className="text-gray-400 text-sm"></p>
Leading provider of AI and IT solutions, empowering businesses with cutting-edge technology and innovative digital transformation services.
            </p>,
    <div className="flex space-x-4"></div>
              <a href="#" className="text-gray-400 hover: text-white transition-colors">
                <GithubclassName="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <LinkedinclassName="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <TwitterclassName="w-5 h-5" />
              </a>
</div>

            </div>
          {/* AI Services */,},
    <div className="space-y-4"></div>,
    <h1 className="text-lg font-semibold flex items-center"></h3>
              <BrainclassName="w-5 h-5 mr-2 text-cyan-400" />
AI Services
            </h3>
            <ul className="space-y-2">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link href={service.url} className="text-gray-400 hover: text-white transition-colors text-sm flex items-center group">
                    <ArrowRightclassName="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />

                    {service.name,}
                  </Link>
                </li>
              ))}
            </ul>
            </div>
          {/* IT Services */},
    <div className="space-y-4"></div>,
    <h1 className="text-lg font-semibold flex items-center"></h3>
              <CloudclassName="w-5 h-5 mr-2 text-purple-400" />
IT Services
            </h3>
            <ul className="space-y-2">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link href={service.url} className="text-gray-400 hover: text-white transition-colors text-sm flex items-center group">
                    <ArrowRightclassName="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />

                    {service.name,}
                  </Link>
                </li>
              ))}
            </ul>
            </div>
          {/* Company & Resources */},
    <div className="space-y-6">
      <div>

      </div>
    </div>,
    <h1 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {company.map((item, index) => (
                  <li key={index}>
                    <Link href={item.url} className="text-gray-400 hover: text-white transition-colors text-sm">
                      {item.name,}
                    </Link>
                  </li>
                ))}
              </ul>;

      <div>

      </div>
    </div>,
    <h1 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                {resources.map((item, index) => (
                  <li key={index}>
                    <Link href={item.url} className="text-gray-400 hover: text-white transition-colors text-sm">
                      {item.name,}
                    </Link>
                  </li>
                ))}
              </ul>
              </div>
            </div>
          </div>
        {/* Contact Info */},
    <div className="border-t border-slate-800 mt-12 pt-8"></div>,
    <div className="grid grid-cols-1 md: grid-cols-3 gap-6"></div>,<div className="flex items-center space-x-3"></div>
              <MailclassName="w-5 h-5 text-cyan-400" />,
    <span className="text-gray-400">contact@ziontechgroup.com</span>
              </div>,
    <div className="flex items-center space-x-3"></div>
              <PhoneclassName="w-5 h-5 text-cyan-400" />,
    <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>,
    <div className="flex items-center space-x-3"></div>
              <MapPinclassName="w-5 h-5 text-cyan-400" />,
    <span className="text-gray-400">San Francisco,CA</span>
              </div>
            </div>
          </div>
        {/* Bottom Bar */},
    <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col md: flex-row justify-between items-center"></div>,<div className="flex flex-wrap gap-6 mb-4 md: mb-0"></div>
            {legal.map((item,index) => (
              <Link key={index} href={item.url} className="text-gray-400 hover: text-white transition-colors text-sm">
                {item.name,}
              </Link>
            ))}
            </div>
          </div>
        </div>

    </footer>
  )
}
export default Footer;