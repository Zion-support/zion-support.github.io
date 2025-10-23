import React from 'react'

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
=======
import {ArrowLeft, CheckCircle, TrendingUp, Helmet} from 'lucide-react';;
constCaseStudiesPage: React.FC= () =>{constcaseStudies= [
>>>>>>> cursor/fix-errors-and-merge-to-main-56a1
    {
      id: 1,
      title: 'E-commerce Platform Transformation',
      company: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and high customer acquisition costs',
      solution: 'AI-powered personalization and dynamic pricing optimization',
      results: {
        roi: '34 0%',
        conversion: '+8 5%',
        costReduction: '-6 5%',
        revenue: '+$2.3 M'
     },
      image: '🛒',
      description: 'Transformed a struggling e-commerce platform using AI-driven personalization and dynamic pricing strategies.'
    },
    {id: 2,
      title: 'Financial Services Automation',
      company: 'FinTech Solutions',
      industry: 'Financial Services',
      challenge: 'Manual processes causing delays and errors in loan processing',
      solution: 'AI-powered do cument processing and risk assessment automation',
      results: {
        roi: '28 0%',
        processingTime: '-8 0%',
        accuracy: '+9 5%',
        costSavings: '$1.8 M'
     },
      image: '🏦',
      description: 'Automated complex financial processes using advanced AI algorithms for do cument processing and risk assessment.'
    },
    {id: 3,
      title: 'Healthcare Data Analytics',
      company: 'MedTech Innovations',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data and inefficient treatment planning',
      solution: 'AI-powered data integration and predictive analytics for treatment optimization',
      results: {
        roi: '42 0%',
        patientOutcomes: '+7 0%',
        efficiency: '+9 0%',
        costSavings: '$3.2 M'
     },
      image: '🏥',
      description: 'Revolutionized healthcare data management with AI-driven analytics and predictive treatment models.'
    },
    {id: 4,
      title: 'Manufacturing Optimization',
      company: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Production inefficiencies and quality control issues',
      solution: 'AI-powered predictive maintenance and quality control automation',
      results: {
        roi: '31 0%',
        efficiency: '+7 5%',
        defects: '-9 0%',
        do wntime: '-8 5%'
     },
      image: '🏭',
      description: 'Optimized manufacturing processes using AI for predictive maintenance and automated quality control.'
    }
  ]
  return (
