import Head from 'next/head.ts'
import { motion  } from 'framer-motion.ts'
import { Handshake, 
  Shield, 
  Cloud, 
  Brain, 
  Users, 
  Globe,
  Award,
  Zap,
  Cpu,
  Database,
  Lock,
  Rocket
 } from 'lucide-react.ts'

export default function Partners(...args: any[]): any {
  const title = 'Partners — Zion Tech Group'
  const description = 'Strategic partnerships with leading technology providers, cloud platforms, and cybersecurity experts to deliver comprehensive solutions.'
  
  const partnerCategories = [
    {
      icon: Cloud,
      title: 'Cloud & Infrastructure',
      description: 'Strategic partnerships with leading cloud providers and infrastructure companies.',
      partners: [
        { name: 'AWS', description: 'Amazon Web Services', logo: '☁️', tier: 'Platinum' },
        { name: 'Microsoft Azure', description: 'Cloud computing platform', logo: '🔷', tier: 'Platinum' },
        { name: 'Google Cloud', description: 'Cloud infrastructure services', logo: '🔵', tier: 'Gold' },
        { name: 'DigitalOcean', description: 'Cloud infrastructure provider', logo: '🌊', tier: 'Silver' }
      ]
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Partnerships with cutting-edge AI research and development organizations.',
      partners: [
        { name: 'OpenAI', description: 'Advanced AI research', logo: '🤖', tier: 'Gold' },
        { name: 'Anthropic', description: 'AI safety and research', logo: '🧠', tier: 'Gold' },
        { name: 'Hugging Face', description: 'Machine learning platform', logo: '🤗', tier: 'Silver' },
        { name: 'Databricks', description: 'Data and AI platform', logo: '📊', tier: 'Silver' }
      ]
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Collaborations with security experts and compliance organizations.',
      partners: [
        { name: 'CrowdStrike', description: 'Cybersecurity solutions', logo: '🦅', tier: 'Gold' },
        { name: 'Palo Alto Networks', description: 'Network security', logo: '🌲', tier: 'Gold' },
        { name: 'Rapid7', description: 'Security analytics', logo: '⚡', tier: 'Silver' },
        { name: 'Qualys', description: 'Cloud security platform', logo: '🛡️', tier: 'Silver' }
      ]
    },
    {
      icon: Database,
      title: 'Data & Analytics',
      description: 'Partnerships with data management and analytics solution providers.',
      partners: [
        { name: 'Snowflake', description: 'Data cloud platform', logo: '❄️', tier: 'Gold' },
        { name: 'Tableau', description: 'Data visualization', logo: '📈', tier: 'Silver' },
        { name: 'MongoDB', description: 'Database platform', logo: '🍃', tier: 'Silver' },
        { name: 'Elastic', description: 'Search and analytics', logo: '🔍', tier: 'Silver' }
      ]
    }
  {/* Removed stray closing bracket */}

  const benefits = [
    {
      icon: Zap,
      title: 'Enhanced Capabilities',
      description: 'Access to cutting-edge technologies and expertise through our partner network.'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security solutions backed by industry-leading partners.'
    },
    {
      icon: Rocket,
      title: 'Faster Implementation',
      description: 'Accelerated delivery through proven partner integrations and best practices.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Solutions validated by our trusted partner ecosystem.'
    }
  {/* Removed stray closing bracket */}

  const partnershipLevels = [
    {
      name: 'Platinum',
      description: 'Strategic partnerships with deep integration and joint go-to-market initiatives.',
      benefits: ['Priority support', 'Joint marketing', 'Custom integrations', 'Executive alignment'],
      color: 'from-purple-600 to-pink-600'
    },
    {
      name: 'Gold',
      description: 'Preferred partnerships with significant collaboration and mutual benefits.',
      benefits: ['Enhanced support', 'Co-marketing opportunities', 'Technical collaboration', 'Training access'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Silver',
      description: 'Standard partnerships with basic collaboration and referral programs.',
      benefits: ['Standard support', 'Referral programs', 'Documentation access', 'Community access'],
      color: 'from-gray-400 to-gray-600'
    }
  {/* Removed stray closing bracket */}

const Page = () => {
  return (
    <>
      <Head>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Join our partner network and grow your business with Zion Tech Group's innovative solutions." />
        <link rel="canonical" href="https://ziontechgroup.com/partners" />
      </Head>
      <main style={{ padding: '20px', maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '20px', textAlign: 'center' }}>Our Partners</h1>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, textAlign: 'center', color: '#ccc' }}>
          Join our growing network of partners and unlock new opportunities for growth and innovation.
        </p>
        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <Link href="/" style={{
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            color: 'white',
            padding: '12px 24px',
            textDecoration: 'none',
            borderRadius: 8,
            fontSize: '1rem',
            fontWeight: 600
          }}>
            Back to Home
          </Link>
        </div>
      </main>
    </>
  {/* Removed stray closing parenthesis */}
  {/* Removed stray closing brace */}