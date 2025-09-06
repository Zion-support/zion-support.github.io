import React from 'react';
import Head from 'next/head';
<<<<<<< HEAD
<<<<<<< HEAD
import {
  FlaskConical,
  ShieldCheck,
  FileCode,
  GitBranch,
  Phone,
  Mail,
  MapPin,
  Check,;
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import ServiceAds from '../components/sections/ServiceAds';

=======
import { FlaskConical, ShieldCheck, FileCode, GitBranch, Phone, Mail, MapPin, Check } from 'lucide-react';
import Layout from '../components/layout/Layout';
import ServiceAds from '../components/sections/ServiceAds';
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import { FlaskConical, ShieldCheck, FileCode, GitBranch, Phone, Mail, MapPin, Check } from 'lucide-react';
import Layout from '../components/layout/Layout';
import ServiceAds from '../components/sections/ServiceAds';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
export default function ApiMockContractTestingPage() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
<<<<<<< HEAD
<<<<<<< HEAD
    website: 'https://ziontechgroup.com',
=======
    website: 'https://ziontechgroup.com'
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    website: 'https://ziontechgroup.com'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };

  const adItems = [
    {
      title: '🧪 API Mock & Contract Testing Platform',
<<<<<<< HEAD
<<<<<<< HEAD
      description:
        'Spin up OpenAPI/GraphQL mocks in seconds, validate breaking changes in CI, and gate deployments with contract tests. SDK stubs, data generators, and snapshot diffs included.',
=======
      description: 'Spin up OpenAPI/GraphQL mocks in seconds, validate breaking changes in CI, and gate deployments with contract tests. SDK stubs, data generators, and snapshot diffs included.';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      price: 'Starting at $69/month',
      features: [
        'OpenAPI/GraphQL import and live mock serverContract tests gated in CI (GitHub/GitLab/Bitbucket)Dynamic data generators and scenario templatesSnapshot diffs and changelog with approvals'
      ];
      link: 'https://ziontechgroup.com/api-mock-contract-testing',
      contactInfo
    }
  ];

  const tiers = [
<<<<<<< HEAD
    {
      name: 'Starter',
      price: '$69/month',
      items: ['1 project', '5 mocks', 'OpenAPI import', 'CI status checks'],
    },
    {
      name: 'Team',
      price: '$149/month',
      items: ['5 projects', 'Unlimited mocks', 'Record/replay', 'Slack alerts'],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      items: ['SAML/SSO', 'RBAC', 'Private cloud/VPC', 'Premium support'],
    },
=======
      description: 'Spin up OpenAPI/GraphQL mocks in seconds, validate breaking changes in CI, and gate deployments with contract tests. SDK stubs, data generators, and snapshot diffs included.',
    price: 'Starting at $69/month',
      features: [
        'OpenAPI/GraphQL import and live mock serverContract tests gated in CI (GitHub/GitLab/Bitbucket)Dynamic data generators and scenario templatesSnapshot diffs and changelog with approvals'
      ];
      link: 'https://ziontechgroup.com/api-mock-contract-testing',
      contactInfo
    }
  ];

  const tiers = [
    { name: 'Starter', price: '$69/month', items: ['1 project5 mocksOpenAPI importCI status checks'] },
    { name: 'Team', price: '$149/month', items: ['5 projectsUnlimited mocksRecord/replaySlack alerts'] },
    { name: 'Enterprise', price: 'Custom', items: ['SAML/SSORBACPrivate cloud/VPCPremium support'] }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    { name: 'Starter', price: '$69/month', items: ['1 project5 mocksOpenAPI importCI status checks'] },
    { name: 'Team', price: '$149/month', items: ['5 projectsUnlimited mocksRecord/replaySlack alerts'] },
    { name: 'Enterprise', price: 'Custom', items: ['SAML/SSORBACPrivate cloud/VPCPremium support'] }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  ];

  return (
    <Layout>
      <Head>
        <title>API Mock & Contract Testing | Zion Tech Group</title>
<<<<<<< HEAD
<<<<<<< HEAD
        <meta
          name='description'
          content='OpenAPI/GraphQL mock servers, contract tests in CI, and deployment gates with snapshot diffs and approvals.'
        />
        <link
          rel='canonical'
          href='https://ziontechgroup.com/api-mock-contract-testing'
        />
=======
        <meta name="description" content="OpenAPI/GraphQL mock servers, contract tests in CI, and deployment gates with snapshot diffs and approvals." />
        <link rel="canonical" href="https://ziontechgroup.com/api-mock-contract-testing" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      </Head>

      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <ServiceAds heading="API Quality Fast-Track" subheading="Mock, validate, and ship with confidence." items={adItems} />

        <div className="max-w-5xl mx-auto mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((t) => (
              <div key={t.name} className="bg-black/30 border border-gray-700/50 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-white text-xl font-bold">{t.name}</h3>
                </div>
<<<<<<< HEAD
                <div className='text-cyan-400 font-semibold mb-4'>
                  {t.price}
                </div>
                <ul className='space-y-2 text-gray-300 text-sm'>
                  {t.items.map(i => (
                    <li
                      key={i}
                      className='flex items-start gap-2 w-4 h-4 mt-0.5 text-emerald-400'
                    >
                      <Check /> <span>{i}</span>
                    </li>
=======
        <meta name="description" content="OpenAPI/GraphQL mock servers, contract tests in CI, and deployment gates with snapshot diffs and approvals." />
        <link rel="canonical" href="https://ziontechgroup.com/api-mock-contract-testing" />
      </Head>

      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <ServiceAds heading="API Quality Fast-Track" subheading="Mock, validate, and ship with confidence." items={adItems} />

        <div className="max-w-5xl mx-auto mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((t) => (
              <div key={t.name} className="bg-black/30 border border-gray-700/50 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-white text-xl font-bold">{t.name}</h3>
                </div>
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                <div className="text-cyan-400 font-semibold mb-4">{t.price}</div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {t.items.map((i) => (
                    <li key={i} className="flex items-start gap-2 w-4 h-4 mt-0.5 text-emerald-400"><Check /> <span>{i}</span></li>
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  ))}
                </ul>
              </div>
            ))}
          </div>

<<<<<<< HEAD
<<<<<<< HEAD
          <div className='mt-8 max-w-3xl mx-auto bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4'>
              <div className='flex items-center justify-center gap-2 text-cyan-400 w-4 h-4'>
                <Phone />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className='flex items-center justify-center gap-2 text-purple-400 w-4 h-4'>
                <Mail />
                <span>{contactInfo.email}</span>
              </div>
              <div className='flex items-center justify-center gap-2 text-green-400 w-4 h-4 text-xs'>
                <MapPin />
                <span>{contactInfo.address}</span>
              </div>
            </div>
            <div className='text-center'>
              <a
                href='/contact'
                className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl'
              >
                Book a Demo
              </a>
=======
          <div className="mt-8 max-w-3xl mx-auto bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4">
              <div className="flex items-center justify-center gap-2 text-cyan-400 w-4 h-4"><Phone /><span>{contactInfo.mobile}</span></div>
              <div className="flex items-center justify-center gap-2 text-purple-400 w-4 h-4"><Mail /><span>{contactInfo.email}</span></div>
              <div className="flex items-center justify-center gap-2 text-green-400 w-4 h-4 text-xs"><MapPin /><span >{contactInfo.address}</span></div>
            </div>
            <div className="text-center">
              <a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl">Book a Demo</a>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <div className="mt-8 max-w-3xl mx-auto bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4">
              <div className="flex items-center justify-center gap-2 text-cyan-400 w-4 h-4"><Phone /><span>{contactInfo.mobile}</span></div>
              <div className="flex items-center justify-center gap-2 text-purple-400 w-4 h-4"><Mail /><span>{contactInfo.email}</span></div>
              <div className="flex items-center justify-center gap-2 text-green-400 w-4 h-4 text-xs"><MapPin /><span >{contactInfo.address}</span></div>
            </div>
            <div className="text-center">
              <a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl">Book a Demo</a>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            </div>
          </div>
        </div>
      </div>
    </Layout>
<<<<<<< HEAD
<<<<<<< HEAD
  );
=======
  )
}

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
}

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
