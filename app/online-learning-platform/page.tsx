'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BookOpen, Users, BarChart, Zap, Shield, CheckCircle } from 'lucide-react'
const OnlineLearningPlatformPage: React.FC = () => {
  const features = [
    { icon: BookOpen, title: 'Course Management', description: 'Create, organize, and manage educational content with AI-powered course recommendations.' },
    { icon: Users, title: 'Student Analytics', description: 'Track student progress and engagement with detailed analytics and insights.' },
    { icon: BarChart, title: 'Performance Tracking', description: 'Monitor learning outcomes and identify areas for improvement.' },
    { icon: Zap, title: 'AI Tutoring', description: 'Personalized AI tutoring and adaptive learning experiences.' },
    { icon: Shield, title: 'Secure Platform', description: 'Secure, scalable platform with role-based access and data protection.' },
    { icon: CheckCircle, title: 'Certification', description: 'Automated certification and credential management system.' }
  ]
  return (
    <React> </React><Helmet> </Helmet><title>Online Learning Platform | Zion Tech Group - AI-Powered Education Platform</title>
        <meta> </meta><meta> </meta></Helmet>
      <div> </div><section> </section><div> </div><div> </div><h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Online Learning Platform</h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Create engaging online learning experiences with AI-powered education platform.</p>
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
export default OnlineLearningPlatformPage