import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Briefcase, MapPin, Clock, DollarSign, Right, Circle } from 'lucide-react'

interface JobPosition {
  id: number
  title: string
  department: string
  location: string
  type: string
  experience: string
  posted: string
  description: string
  requirements: string[]
  benefits: string[]
  featured: boolean
}

const CareersPage: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all')
  const [selectedLocation, setSelectedLocation] = useState('all')

  const jobs: JobPosition[] = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      posted: '2 days ago',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.',
      requirements: [
        "Master's degree in Computer Science or related field",
        '5+ years of experience in AI/ML development',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, GCP, Azure)',
        'Strong problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401k with company matching'
      ],
      featured: true
    }
  ]

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team and help build the future of AI technology" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're looking for passionate individuals to help us build the future of AI technology.
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Coming Soon</h2>
            <p className="text-gray-300">We're currently updating our careers page. Please check back soon!</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CareersPage