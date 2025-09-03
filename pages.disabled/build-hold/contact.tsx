import: React { useState  } from;
  'react';';
import: type { NextPage } from;
  'next';MainLayout: from;';
  '../components/layout/MainLayout';';
import: { Phone, Mail, MapPin, Clock, MessageSquare, Send } from;
  'lucide-react'';const: ContactPage: NextPage: = () => {';
  const: [formDat,a, setFormData] = useState({
    name:,

  const [submitStatus, setSubmitStatus] = useState<;
  'idle' |;
  'success' |;
  'error'>('
  'idle')  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value})}
  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();
    setIsSubmitting(true);
    // Simulate: form submission;
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus,(,
  success;


  const contactInfo = [
    {'
      icon: <Phone className='w-6 h-6' />, title:,
  Phone',
  '      details: '+1 302 464 0950, link:,
  tel: +13024640950'    }, {'
      icon: <Mail className='w-6 h-6' />, title:,
  Email',
  '      details: 'kleber@ziontechgroup.com, link:,
  mailto: kleber@ziontechgroup.com'    }, {'
      icon: <MapPin className='w-6 h-6' />, title:,
  Address',
  '      details: 364 E Main St STE 1008, Middletown DE 19709,
  ,      link: 'http,
    s://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'    }, {'
  '      icon: <Clock className='w-6 h-6' />,      title:,
  Business Hours;
  ', details: 'Mon-Fr,
    i: 9AM-6PM EST,      link: null}
  ];
  const services = [
    // Micro SaaS Services;
    'AI Content Generator Pro;
  ', 'Social Media Scheduler Pro;
  ',;
  'Email Marketing Automation Suite',
  'Smart Invoice Management',
  '    'Time Tracking & Productivity Suite;
  ', 'CRM & Sales Pipeline Manager;
  ',;
  'Smart Appointment Booking',
  'Inventory & POS System',
  '    'Document Management & Collaboration;
  ', 'Survey & Feedback Platform;
  ',;
  'Expense Management & Reimbursement',
  'Smart Project Manager',
  '    'Inventory Tracker Pro;
  ', 'AI Support Assistant;
  ',;
  'AI Video Editor Pro',
  'AI Voice Cloning Studio',
  '    'AI Code Reviewer Pro;
  ', 'AI Meeting Transcriber & Analyzer;
  ',;
  'AI Personal Finance Manager',
  'AI Health & Wellness Coach',
  '    'AI Language Learning Tutor;
  ', 'AI Interior Design Studio;
  ',;
  'AI Job Matching Platform',
  'AI Social Media Analyzer',
  '    'Smart Expense Tracker;
  ', 'AI Lead Scoring Platform;
  ',;
  'Time Tracking Analytics Pro',
  'Website Speed Optimizer',
  '    'API Monitoring Platform;
  ', 'Business Password Manager;
  ',;
  'Advanced Form Builder',
  'Screenshot API Service',
  '    'AI Email Responder Pro;
  ', 'Mobile-First Survey Platform;
  ',;
  'Industry-Specific Productivity Planner',
  'Smart Event Management Dashboard',
  '    'AI SEO Content Optimizer;
  ', 'AI Talent Matching Platform;
  ',;
  'AI Recruiting Platform',
  'Quantum Computing Solutions',
  '    '    // IT Services;
  'Cloud Migration Expert',
  'Multi-Cloud Strategy & Management',
  '    'Container Orchestration & Kubernetes;
  ', 'Serverless Architecture Implementation;
  ',;
  'Network Security & Infrastructure Audit',
  'Database Optimization & Migration',
  '    'API Gateway & Microservices Management;
  ', 'Disaster Recovery & Business Continuity;
  ',;
  'IT Infrastructure Monitoring & Management',
  'Identity & Access Management (IAM),
  'Cybersecurity Assessment',
  '    'DevOps Automation Suite;
  ', 'Data Backup & Recovery;
  ',;
  'Kubernetes Orchestration',
  'API Gateway & Management',
  '    'Database Performance Optimization;
  ', 'Network Security Audit;
  ',;
  'Disaster Recovery Planning',
  'Microservices Architecture Design',
  '    'Application Performance Monitoring;
  ', 'Identity & Access Management;
  ',;
  'Quantum Cloud Computing Solutions',
  'Metaverse Infrastructure & Development',
  '    'Autonomous Systems Development;
  ', 'Digital Twin Platform Development;
  ',;
  'Cyber-Physical Systems Integration',
  'Neuromorphic Computing Solutions',
  '    'Satellite Communication Systems;
  ', 'Advanced Biometric Security Systems;
  ',;
  'Edge Computing Solutions',
  'Blockchain Infrastructure & Development',
  '    'Zero Trust Security Architecture;
  ', '5G Network Implementation & Optimization;
  ',;
  'Hyperautomation Platform', // AI Services;
  '    'Custom AI Model Development;
  ',;
  'Computer Vision & Image Recognition',
  'Natural Language Processing (NLP),
  'Predictive Analytics & Forecasting',
  '    'AI-Powered Recommendation Engine;
  ', 'AI-Powered Workflow Automation;
  ',;
  'AI Data Analytics & Business Intelligence',
  'AI Chatbot & Voice Assistant Development',
  '    'AI Fraud Detection & Security;
  ', 'AI Content Moderation & Safety;
  ',;
  'AI Supply Chain Optimization',
  'AI Process Automation',
  '    'AI Analytics Platform;
  ', 'AI Chatbot Development;
  ',;
  'AI Drug Discovery Platform',
  'AI Climate Modeling & Prediction',
  '    'AI Space Exploration Solutions;
  ', 'AI Neuroscience Research Platform;
  ',;
  'AI Robotics & Automation',
  'AI Financial Trading Platform',
  '    'AI Weather Prediction & Climate Modeling;
  ', 'AI Mental Health & Wellness Platform;
  ',;
  'AI Legal Research & Analysis Platform',
  'AI Sports Analytics & Performance Platform',
  '    'AI Education Personalization Platform;
  ', 'AI Energy Optimization & Smart Grid;
  ',;
  'AI Cybersecurity Threat Intelligence',
  'AI Augmented Reality Solutions',

  return(
    <MainLayout;
      title='Contact Us - Zion Tech Group''      description='Get in touch with Zion Tech Group for technology solutions, consultations, and support. We&apos;re here to help transform your business.'';
  '    >'      {/* Hero Section */}


            </p>
          </div>
        </div>
      </section>

            ))}
          </div>
        </div>
      </section>

  '                </div>'              )}, {submitStatus ==='
  'error' && ('
  '                <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6>                  There was an error sending your message. Please try again or contact us directly.'                </div>
              )}
              <form onSubmit={handleSubmit} className='space-y-6>                <div className='grid md: grid-cols-2 gap-6>                  <div>'                    <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-2>                      Full Name *'                    </label>
                    <input;
                      type='text''                      id='name''                      name='name''                      value={formData.name}                      onChange={handleInputChange}
                      required;
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focu,
    s:ring-blue-500 focu,
    s:border-transparent''                      placeholder='Your full name''                    />                  </div>
                  <div>'
                    <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2>                      Email Address *'                    </label>
                    <input;
                      type='email''                      id='email''                      name='email''                      value={formData.email}                      onChange={handleInputChange}
                      required;
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focu,
    s:border-transparent''                      placeholder='your.email@company.com''                    />                  </div>
                </div>'
                <div className='grid m,
    d:grid-cols-2 gap-6>                  <div>'                    <label htmlFor='company' className='block text-sm font-medium text-gray-700 mb-2>                      Company'                    </label>
                    <input;
                      type='text''                      id='company''                      name='company''                      value={formData.company}                      onChange={handleInputChange}
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focu,
    s:ring-blue-500 focu,
    s:border-transparent''                      placeholder='Your company name''                    />                  </div>
                  <div>'
                    <label htmlFor='phone' className='block text-sm font-medium text-gray-700 mb-2>                      Phone Number'                    </label>
                    <input;
                      type='tel''                      id='phone''                      name='phone''                      value={formData.phone}                      onChange={handleInputChange}
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focu,
    s:ring-blue-500 focu,
    s:border-transparent''                      placeholder='+1 (555) 123-4567''                    />                  </div>
                </div>
                <div>'
                  <label htmlFor='service' className='block text-sm font-medium text-gray-700 mb-2>                    Service of Interest'                  </label>
                  <select;
                    id='service''                    name='service''                    value={formData.service}                    onChange={handleInputChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focu,
    s:ring-blue-500 focu,
    s:border-transparent''                  >'                    <option value=''>Select a service</option>'                    {services.map((service, index) => ('                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                <div>'
                  <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-2>                    Message *'                  </label>
                  <textarea;
                    id='message''                    name='message''                    value={formData.message}                    onChange={handleInputChange}
                    required;
                    rows={6}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focu,
    s:ring-blue-500 focu,
    s:border-transparent''                    placeholder='Tell us about your project or how we can help...''                  />                </div>
                <button;
                  type='submit''                  disabled={isSubmitting}                  className='w-full bg-blue-600 hover:bg-blue-700 disable,
    d:bg-gray-400 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center''                >'                  {isSubmitting ? (
                    <>'
                      <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2'></div>'                      Sending...'</>
                  ) : (
                    <>'
                      <Send className='w-5 h-5 mr-2' />                      Send Message'</>
                  )}
                </button>
              </form>
            </div>
            {/* Company Information */}

                </p>
              </div>'
              <div className='bg-white rounded-lg shadow-lg p-6>                <h3 className='text-xl font-semibold text-gray-900 mb-4'>Why Choose Zion Tech Group?</h3>'                <ul className='space-y-3>                  <li className='flex items-start>                    <div className='w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>'                    <span className='text-gray-600'>Expert team with years of experience</span>'                  </li>'                  <li className='flex items-start>                    <div className='w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>'                    <span className='text-gray-600'>Proven track record of successful projects</span>'                  </li>'                  <li className='flex items-start>                    <div className='w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>'                    <span className='text-gray-600'>Cutting-edge technology and methodologies</span>'                  </li>'                  <li className='flex items-start>                    <div className='w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>'                    <span className='text-gray-600'>24/7 support and maintenance</span>'                  </li>'                  <li className='flex items-start>                    <div className='w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>'                    <span className='text-gray-600'>Competitive pricing and flexible solutions</span>'                  </li>'                </ul>
              </div>'
              <div className='bg-blue-50 rounded-lg p-6>                <h3 className='text-xl font-semibold text-gray-900 mb-4'>Quick Response Guarantee</h3>'                <p className='text-gray-600 mb-4>                  We understand that time is valuable. That&aposs why we guarantee a response within 24 hours ''                  for all inquiries.'                </p>'
                <div className='flex items-center text-blue-600>                  <MessageSquare className='w-5 h-5 mr-2' />                  <span className='font-medium'>Response within 24 hours</span>'                </div>'              </div>

            </div>
          </div>
        </div>
      </section>

            </div>
          </div>
        </div>
      </section>

            <a;
              href='mailto:kleber@ziontechgroup.com''              className='bg-transparent border-2 border-white text-white hove,
    r:bg-white hove,
    r:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center''            >'              <Mail className='mr-2 w-5 h-5' />              Send Email"            </a>

          </div>
        </div>
      </section>
    </MainLayout>


