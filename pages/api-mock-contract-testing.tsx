<<<<<<< HEAD
import React from 'react',
import Head from 'next/head',
import { FlaskConical, ShieldCheck, FileCode, GitBranch, Phone, Mail, MapPin, Check } from 'lucide-react',
import Layout from '../components/layout/Layout',
import ServiceAds from '../components/sections/ServiceAds',
export default function ApiMockContractTestingPage() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },

  const adItems = [
    {
      title: '🧪 API Mock & Contract Testing Platform',
      description: 'Spin up OpenAPI/GraphQL mocks in seconds, validate breaking changes in CI, and gate deployments with contract tests. SDK stubs, data generators, and snapshot diffs included.',
      price: 'Starting at $69/month',
      features: [
        'OpenAPI/GraphQL import and live mock serverContract tests gated in CI (GitHub/GitLab/Bitbucket)Dynamic data generators and scenario templatesSnapshot diffs and changelog with approvals'
      ],
      link: 'https://ziontechgroup.com/api-mock-contract-testing',
      contactInfo
    }
  ],

  const tiers = [
    { name: 'Starter', price: '$69/month', items: ['1 project5 mocksOpenAPI importCI status checks'] },
    { name: 'Team', price: '$149/month', items: ['5 projectsUnlimited mocksRecord/replaySlack alerts'] },
    { name: 'Enterprise', price: 'Custom', items: ['SAML/SSORBACPrivate cloud/VPCPremium support'] }
  ],
=======
import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import ServiceAds from '../components/sections/ServiceAds';


export default function ApiMockContractTestingPage() {_const _contactInfo = {
    mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

  const _adItems = [
    {_title: '🧪 API Mock & Contract Testing Platform', _description: 'Spin up OpenAPI/GraphQL mocks in seconds, _validate breaking changes in CI, _and gate deployments with contract tests. SDK stubs, _data generators, _and snapshot diffs included.', _price: 'Starting at $69/month', _features: [
        'OpenAPI/GraphQL import and live mock server', _'Contract tests gated in CI (GitHub/GitLab/Bitbucket)', _'Dynamic data generators and scenario templates', _'Snapshot diffs and changelog with approvals'
      ], _link: 'https://ziontechgroup.com/api-mock-contract-testing', _contactInfo}
  ];

  const _tiers = [
    {_name: 'Starter', _price: '$69/month', _items: ['1 project', _'5 mocks', _'OpenAPI import', _'CI status checks']},
    {_name: 'Team', _price: '$149/month', _items: ['5 projects', _'Unlimited mocks', _'Record/replay', _'Slack alerts']},
    {_name: 'Enterprise', _price: 'Custom', _items: ['SAML/SSO', _'RBAC', _'Private cloud/VPC', _'Premium support']}
  ];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (_<Layout>
      <Head>
        <title>API Mock & Contract Testing | Zion Tech Group</title>
<<<<<<< HEAD
        <meta name=&quot;description&quot; content=&quot;OpenAPI/GraphQL mock servers, contract tests in CI, and deployment gates with snapshot diffs and approvals.&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/api-mock-contract-testing&quot; />
      </Head>

      <div className=&quot;min-h-screen py-20 px-4 sm:px-6 lg:px-8&quot;>
        <ServiceAds heading=&quot;API Quality Fast-Track&quot; subheading=&quot;Mock, validate, and ship with confidence.&quot; items={adItems} />

        <div className=&quot;max-w-5xl mx-auto mt-8&quot;>
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6&quot;>
            {tiers.map((t) => (
              <div key={t.name} className=&quot;bg-black/30 border border-gray-700/50 rounded-2xl p-6&quot;>
                <div className=&quot;flex items-center gap-2 mb-2&quot;>
                  <ShieldCheck className=&quot;w-5 h-5 text-cyan-400&quot; />
                  <h3 className=&quot;text-white text-xl font-bold&quot;>{t.name}</h3>
                </div>
                <div className=&quot;text-cyan-400 font-semibold mb-4&quot;>{t.price}</div>
                <ul className=&quot;space-y-2 text-gray-300 text-sm&quot;>
                  {t.items.map((i) => (
                    <li key={i} className=&quot;flex items-start gap-2 w-4 h-4 mt-0.5 text-emerald-400&quot;><Check /> <span>{i}</span></li>
=======
        <meta name="description" content="OpenAPI/GraphQL mock servers, _contract tests in CI, _and deployment gates with snapshot diffs and approvals." />
        <link rel="canonical" href="https://ziontechgroup.com/api-mock-contract-testing" />
      </Head>

      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <ServiceAds heading="API Quality Fast-Track" subheading="Mock, _validate, _and ship with confidence." items={_adItems} />

        <div className="max-w-5xl mx-auto mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {_tiers.map((t) => (_<div key={t.name} className="bg-black/30 border border-gray-700/50 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-white text-xl font-bold">{_t.name}</h3>
                </div>
                <div className="text-cyan-400 font-semibold mb-4">{_t.price}</div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {_t.items.map((i) => (
                    <li key={i} className="flex items-start gap-2 w-4 h-4 mt-0.5 text-emerald-400"><Check /> <span>{_i}</span></li>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  ))}
                </ul>
              </div>
            ))}
          </div>

<<<<<<< HEAD
          <div className=&quot;mt-8 max-w-3xl mx-auto bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30&quot;>
            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4&quot;>
              <div className=&quot;flex items-center justify-center gap-2 text-cyan-400 w-4 h-4&quot;><Phone /><span>{contactInfo.mobile}</span></div>
              <div className=&quot;flex items-center justify-center gap-2 text-purple-400 w-4 h-4&quot;><Mail /><span>{contactInfo.email}</span></div>
              <div className=&quot;flex items-center justify-center gap-2 text-green-400 w-4 h-4 text-xs&quot;><MapPin /><span >{contactInfo.address}</span></div>
=======
          <div className="mt-8 max-w-3xl mx-auto bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4">
              <div className="flex items-center justify-center gap-2 text-cyan-400 w-4 h-4"><Phone /><span>{_contactInfo.mobile}</span></div>
              <div className="flex items-center justify-center gap-2 text-purple-400 w-4 h-4"><Mail /><span>{_contactInfo.email}</span></div>
              <div className="flex items-center justify-center gap-2 text-green-400 w-4 h-4 text-xs"><MapPin /><span >{_contactInfo.address}</span></div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
            <div className=&quot;text-center&quot;>
              <a href=&quot;/contact&quot; className=&quot;bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl&quot;>Book a Demo</Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

