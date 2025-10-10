'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BookOpen, Users, BarChart, Zap, Shield, CheckCircle } from 'lucide-react';
const OnlineLearningPlatformPage: React.FC = () => {
  const features = const features = const features = [
    { icon: BookOpen, title: 'Course Management', description: 'Create, organize, and manage educational content with AI-powered course recommendations.' },
    { icon: Users, title: 'Student Analytics', description: 'Track student progress and engagement with detailed analytics and insights.' },
    { icon: BarChart, title: 'Performance Tracking', description: 'Monitor learning outcomes and identify areas for improvement.' },
    { icon: Zap, title: 'AI Tutoring', description: 'Personalized AI tutoring and adaptive learning experiences.' },
    { icon: Shield, title: 'Secure Platform', description: 'Secure, scalable platform with role-based access and data protection.' },;
    { icon: CheckCircle, title: 'Certification', description: 'Automated certification and credential management system.' };
  ];
  return() {features.map((feature, index) => ()
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default OnlineLearningPlatformPage;
