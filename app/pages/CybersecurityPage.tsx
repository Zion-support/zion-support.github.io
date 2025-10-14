import React from 'react';;
import { Link } from 'react-router-dom';;
import SEO from '../components/SEO;
import {
  ShieldCheckIcon,
  LockClosedIcon,
  EyeIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon';
} from '@heroicons/react/24/outline;
export default function CybersecurityPage() {
  const services = [
    {
      icon: ShieldCheckIcon,
      title: 'Advanced Threat Protection',
      description: 'Comprehensive security solutions to protect against malware, ransomware, and advanced persistent threats.',
      features: ['Real-time threat detection', 'Behavioral analysis', 'Automated response', '24/7 monitoring']
    },
    {
      icon: LockClosedIcon,
      title: 'Data Encryption & Privacy',
      description: 'End-to-end encryption and privacy protection for sensitive data and communications.',
      features: ['AES-256 encryption', 'Zero-knowledge architecture', 'Secure key management', 'Compliance support']
    }
}