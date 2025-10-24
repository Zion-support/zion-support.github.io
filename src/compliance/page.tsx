'use client'
import React from 'react'
import { ArrowLeft, FileText, Lock } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Shield, Users } from 'lucide-react'
import { Award } from 'lucide-react';const CompliancePage: React.FC = () => {
  const certifications = [
    { name: 'SOC 2 Type II', status: 'Certified' },
    { name: 'ISO 27001', status: 'Certified' },
    { name: 'GDPR', status: 'Compliant' },
    { name: 'HIPAA', status: 'Compliant' },
    { name: 'PCI DSS', status: 'Compliant' }
  ]

const Page = () => {
  return (
      </div>
      <Footer />
    </>
  )
}

export default Page;}