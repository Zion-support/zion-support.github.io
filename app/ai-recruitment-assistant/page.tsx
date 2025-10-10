'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Users, Search, Brain, Target, CheckCircle, ArrowRight, Zap, Shield, BarChart } from 'lucide-react'
const AIRecruitmentAssistantPage: React.FC = () => {
  const features = [
    {
      icon: Search,
      title: 'Smart Candidate Matching',
      description: 'AI-powered matching algorithm that finds the best candidates based on skills, experience, and cultural fit.'
    },
    {
      icon: Brain,
      title: 'Resume Analysis',
      description: 'Automated resume screening and analysis to identify top talent quickly and efficiently.'
    },
    {
      icon: Target,
      title: 'Job Description Optimization',
      description: 'AI-generated job descriptions that attract the right candidates and improve application quality.'
    },
    {
      icon: Users,
      title: 'Interview Scheduling',
      description: 'Automated interview scheduling and coordination to streamline the hiring process.'
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics on hiring metrics, candidate pipeline, and recruitment performance.'
    },
    {
      icon: Zap,
      title: 'Automated Screening',
      description: 'AI-powered initial screening questions and assessments to filter candidates effectively.'
    }
  ]
  return (
    <React> </React><Helmet> </Helmet><title>AI Recruitment Assistant | Zion Tech Group - Intelligent Hiring Solutions</title>
        <meta> </meta><meta> </meta></Helmet>
      <div> </div><section> </section><div> </div><div> </div><h1>AI Recruitment Assistant>
              </h1><p>Transform your hiring process with AI-powered recruitment tools that find, screen, and hire the best candidates faster and more efficiently.
              </p></p>
            </div>
            <div>{features.map((feature, index) => (
                </div><div> </div><div> </div><feature> </feature></div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  )
}
export default AIRecruitmentAssistantPage
  </h1>