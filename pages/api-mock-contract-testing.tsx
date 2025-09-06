<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
<<<<<<< HEAD
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
=======
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
<<<<<<< HEAD
    
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    return this.props.children;
  }
}
import React from 'react';

=======
<<<<<<< HEAD
=======
    { name: 'Starter', price: '$69/month', items: ['1 project5 mocksOpenAPI importCI status checks'] },
    { name: 'Team', price: '$149/month', items: ['5 projectsUnlimited mocksRecord/replaySlack alerts'] },
    { name: 'Enterprise', price: 'Custom', items: ['SAML/SSORBACPrivate cloud/VPCPremium support'] }
  ];
  const tiers = [;
    {;
      name: 'Starter',;
      price: '$69/month',;
      items: ['1 project', '5 mocks', 'OpenAPI import', 'CI status checks'],;
    },;
    {;
      name: 'Team',;
      price: '$149/month',;
      items: ['5 projects', 'Unlimited mocks', 'Record/replay', 'Slack alerts'],;
    },;
    {;
      name: 'Enterprise',;
      price: 'Custom',;
      items: ['SAML/SSO', 'RBAC', 'Private cloud/VPC', 'Premium support'],;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
import Head from 'next / head';
import {FlaskConical, ShieldCheck, FileCode, GitBranch, Phone, Mail, MapPin, Check, } from 'lucide-react';
import Layout from '../components / layout / Layout';
import ServiceAds from '../components / sections / ServiceAds';
export default /**
 * ApiMockContractTestingPage - Function description
 */
function ApiMockContractTestingPage() {
  const contact_info = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com',  }
;
  const ad_items = [;
    {
      title: '🧪 API Mock & Contract Testing Platform',
      description:;
        'Spin up OpenAPI / GraphQL mocks in seconds, validate breaking changes in CI, and gate deployments with contract tests. SDK stubs, data generators, and snapshot diffs included.',
      price: 'Starting at $69 / month',
      features: [;
        'OpenAPI / GraphQL import and live mock server',
        'Contract tests gated in CI (GitHub / GitLab / Bitbucket)',
        'Dynamic data generators and scenario templates',
        'Snapshot diffs and changelog with approvals',
      ],
      link: 'https://ziontechgroup.com / api - mock - contract - testing',
      contact_info,
    },
  ];
;
  const tiers = [;
    {
      name: 'Starter',
      price: '$69 / month',
      items: ['1 project', '5 mocks', 'OpenAPI import', 'CI status checks'],
    },
    {
      name: 'Team',
      price: '$149 / month',
      items: ['5 projects', 'Unlimited mocks', 'Record / replay', 'Slack alerts'],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      items: ['SAML / SSO', 'RBAC', 'Private cloud / VPC', 'Premium support'],
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    },  ];
;
  return (
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
          href='https://ziontechgroup && ziontechgroup.com/api-mock-contract-testing'
        />;
      </Head>;
      <div className='min-h-screen py-20 px-4 sm:px-6 lg:px-8'>;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
        <ServiceAds
          heading='API Quality Fast-Track'
          subheading='Mock, validate, and ship with confidence.'
          items={adItems}
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
        />;

        <div className='max-w-5xl mx-auto mt-8'>;
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>;
            {tiers && tiers.map(t => (;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
              <div
                key={t && t.name}
                className='bg-black/30 border border-gray-700/50 rounded-2xl p-6'>;
                <div className='flex items-center gap-2 mb-2'>;
                  <ShieldCheck className='w-5 h-5 text-cyan-400' />;
                  <h3 className='text-white text-xl font-bold'>{t && t.name}</h3>;
                </div>;
                <div className='text-cyan-400 font-semibold mb-4'>;
                  {t && t.price}
                </div>;
                <ul className='space-y-2 text-gray-300 text-sm'>;
                  {t && t.items.map(i => (;
                    <li
                      key={i}
                      className='flex items-start gap-2 w-4 h-4 mt-0 && 0.5 text-emerald-400'>;
                      <Check /> <span>{i}</span>;
                    </li>                  ))}
                </ul>;
              </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

            ))}

            ))}
<<<<<<< HEAD
=======
            ))}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from 'react',
import Head from 'next/head';
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { FlaskConical, ShieldCheck, FileCode, GitBranch, Phone, Mail, MapPin, Check  } from 'lucide-react';
import Layout from '../components/layout/Layout';
import ServiceAds from '../components/sections/ServiceAds';
export default function ApiMockContractTestingPage() {
import {FlaskConical, ShieldCheck, FileCode, GitBranch, Phone, Mail, MapPin, Check,} from 'lucide-react';
import Layout from '../components/layout/Layout';
import ServiceAds from '../components/sections/ServiceAds';
export default function ApiMockContractTestingPage() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',;
    website: 'https://ziontechgroup.com',  };

  const contactInfo = {
    mobile: '+1 302 464 0950'
    email: 'kleber@ziontechgroup.com'
    address: '364 E Main St STE 1008 Middletown DE 19709'
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from 'react';

import Head from 'next / head';
import {FlaskConical, ShieldCheck, FileCode, GitBranch, Phone, Mail, MapPin, Check, } from 'lucide-react';
import Layout from '../components / layout / Layout';
import ServiceAds from '../components / sections / ServiceAds';
export default /**
 * ApiMockContractTestingPage - Function description
 */
function ApiMockContractTestingPage() {
  const contact_info = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    website: 'https://ziontechgroup.com',  }
  const adItems = [
    {
<<<<<<< HEAD
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      title: '🧪 API Mock & Contract Testing Platform'
      description:
        'Spin up OpenAPI/GraphQL mocks in seconds, validate breaking changes in CI, and gate deployments with contract tests. SDK stubs, data generators, and snapshot diffs included.'
      price: 'Starting at $69/month'
      features: [

=======
=======
    website: 'https://ziontechgroup.com',  }
;
  const ad_items = [;
    {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        'OpenAPI/GraphQL import and live mock server'
        'Contract tests gated in CI (GitHub/GitLab/Bitbucket)'
        'Dynamic data generators and scenario templates'
        'Snapshot diffs and changelog with approvals'
      ]
      link: 'https://ziontechgroup.com/api-mock-contract-testing'
      contactInfo
    }
        'OpenAPI/GraphQL import and live mock server',
        'Contract tests gated in CI (GitHub/GitLab/Bitbucket)',
        'Dynamic data generators and scenario templates',
        'Snapshot diffs and changelog with approvals',
      ],
      link: 'https://ziontechgroup.com/api-mock-contract-testing',
      contactInfo,;
    },;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  ];
  const tiers = [
    {
      name: 'Starter'
      price: '$69/month'
      items: ['1 project', '5 mocks', 'OpenAPI import', 'CI status checks']
    }
    {
      name: 'Team'
      price: '$149/month'
      items: ['5 projects', 'Unlimited mocks', 'Record/replay', 'Slack alerts']
    }
    {
      name: 'Enterprise'
      price: 'Custom'
      items: ['SAML/SSO', 'RBAC', 'Private cloud/VPC', 'Premium support']
    },  ];

<<<<<<< HEAD
<<<<<<< HEAD
  return (

=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React from 'react';
import Head from 'next/head';
import { FlaskConical, ShieldCheck, FileCode, GitBranch, Phone, Mail, MapPin, Check } from 'lucide-react';
import Layout from '../components/layout/Layout';
import ServiceAds from '../components/sections/ServiceAds';
export default function ApiMockContractTestingPage(req, res) {
  try {
  const contactInfo = {;
    mobile: '+1 302 464 0950';
    email: 'kleber@ziontechgroup.com';
    address: '364 E Main St STE 1008 Middletown DE 19709';
    website: 'https://ziontechgroup.com';
  };
  const adItems = [;
    {;
      title: '🧪 API Mock & Contract Testing Platform';
      description: 'Spin up OpenAPI/GraphQL mocks in seconds, validate breaking changes in CI, and gate deployments with contract tests. SDK stubs, data generators, and snapshot diffs included.',;
      price: 'Starting at $69/month',;
      features: [;
        'OpenAPI/GraphQL import and live mock serverContract tests gated in CI (GitHub/GitLab/Bitbucket)Dynamic data generators and scenario templatesSnapshot diffs and changelog with approvals';
      ],;
      link: 'https://ziontechgroup.com/api-mock-contract-testing',;
      contactInfo;
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  const tiers = [;
    { name: 'Starter', price: '$69/month', items: ['1 project5 mocksOpenAPI importCI status checks'] },;
    { name: 'Team', price: '$149/month', items: ['5 projectsUnlimited mocksRecord/replaySlack alerts'] };
    { name: 'Enterprise', price: 'Custom', items: ['SAML/SSORBACPrivate cloud/VPCPremium support']   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],
      title: '🧪 API Mock & Contract Testing Platform',
      description:;
        'Spin up OpenAPI / GraphQL mocks in seconds, validate breaking changes in CI, and gate deployments with contract tests. SDK stubs, data generators, and snapshot diffs included.',
      price: 'Starting at $69 / month',
      features: [;
        'OpenAPI / GraphQL import and live mock server',
        'Contract tests gated in CI (GitHub / GitLab / Bitbucket)',
        'Dynamic data generators and scenario templates',
        'Snapshot diffs and changelog with approvals',
      ],
      link: 'https://ziontechgroup.com / api - mock - contract - testing',
      contact_info,
    },
  ];
;
  const tiers = [;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    },  ];
;
  return (
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    <Layout>
      <Head>
        <title>API Mock & Contract Testing | Zion Tech Group</title>
        <meta name="description" content="OpenAPI/GraphQL mock servers, contract tests in CI, and deployment gates with snapshot diffs and approvals." />
        <link rel="canonical" href="https://ziontechgroup.com/api-mock-contract-testing" />
      </Head>
<<<<<<< HEAD

                </ul>
              </div>
            ))}
          </div>

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
    },  ];
;
=======
import React from 'react',
import Head from 'next/head';
  const contactInfo = null;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <Layout>
      <Head>
        <title>API Mock & Contract Testing | Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="OpenAPI/GraphQL mock servers, contract tests in CI, and deployment gates with snapshot diffs and approvals." />
        <link rel="canonical" href="https://ziontechgroup.com/api-mock-contract-testing" />
=======
<meta
          name='description'
          content='OpenAPI/GraphQL mock servers, contract tests in CI, and deployment gates with snapshot diffs and approvals.'
        />
        <link
          rel='canonical'
          href='https://ziontechgroup.com/api-mock-contract-testing'
        />
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
      </Head>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      <div className='min-h-screen py-20 px-4 sm:px-6 lg:px-8'>
        <ServiceAds
          heading='API Quality Fast-Track'
          subheading='Mock, validate, and ship with confidence.'
          items={adItems}
              <div
                key={t && t.name}
                className='bg-black/30 border border-gray-700/50 rounded-2xl p-6'>;
                <div className='flex items-center gap-2 mb-2'>;
                  <ShieldCheck className='w-5 h-5 text-cyan-400' />;
                  <h3 className='text-white text-xl font-bold'>{t && t.name}</h3>;
                </div>;
                <div className='text-cyan-400 font-semibold mb-4'>;
                  {t && t.price}
                </div>;
                <ul className='space-y-2 text-gray-300 text-sm'>;
                  {t && t.items.map(i => (;
                    <li
                      key={i}
<<<<<<< HEAD
                      className='flex items-start gap-2 w-4 h-4 mt-0 && 0.5 text-emerald-400'>;
                      <Check /> <span>{i}</span>;
                    </li>                  ))}
          </div>
          <div className='mt-8 max-w-3xl mx-auto bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30'>
=======
<<<<<<< HEAD
                      className='flex items-start gap-2 w-4 h-4 mt-0 && 0.5 text-emerald-400'>;
                      <Check /> <span>{i}</span>;
                    </li>                  ))}
=======
                      className='flex items-start gap-2 w-4 h-4 mt-0.5 text-emerald-400'
                    >
                      <Check /> <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
          </div>

<div className='mt-8 max-w-3xl mx-auto bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30'>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD
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
                <div className="text-cyan-400 font-semibold mb-4">{t.price}</div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {t.items.map((i) => (
                    <li key={i} className="flex items-start gap-2 w-4 h-4 mt-0.5 text-emerald-400"><Check /> <span>{i}</span></li>
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </ul>;
              </div>;
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
          </div>

          <div className="mt-8 max-w-3xl mx-auto bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
          </div>

          <div className="mt-8 max-w-3xl mx-auto bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30">
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4">
              <div className="flex items-center justify-center gap-2 text-cyan-400 w-4 h-4"><Phone /><span>{contactInfo.mobile}</span></div>
              <div className="flex items-center justify-center gap-2 text-purple-400 w-4 h-4"><Mail /><span>{contactInfo.email}</span></div>
              <div className="flex items-center justify-center gap-2 text-green-400 w-4 h-4 text-xs"><MapPin /><span >{contactInfo.address}</span></div>
            </div>
            <div className="text-center">
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

=======

              <a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl">Book a Demo</Link>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
<<<<<<< HEAD
=======
              <a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl">Book a Demo</Link>
            </div>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

            </div>
<<<<<<< HEAD
=======
            <div className='text-center'>
              <a
                href='/contact'
                className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl'
              >
                Book a Demo
              </a>
            </div>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          </div>
        </div>
      </div>
    </Layout>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

          </div>;

          <div className='mt-8 max-w-3xl mx-auto bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30'>;
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4'>;
              <div className='flex items-center justify-center gap-2 text-cyan-400 w-4 h-4'>;
                <Phone />;
                <span>{contactInfo && contactInfo.mobile}</span>;
              </div>;
              <div className='flex items-center justify-center gap-2 text-purple-400 w-4 h-4'>;
                <Mail />;
                <span>{contactInfo && contactInfo.email}</span>;
              </div>;
              <div className='flex items-center justify-center gap-2 text-green-400 w-4 h-4 text-xs'>;
                <MapPin />;
                <span>{contactInfo && contactInfo.address}</span>;
              </div>;
            </div>;
            <div className='text-center'>;
              <a
                href='/contact'
                className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl'>;
    <Layout>;
      <Head>;
        <title > API Mock & Contract Testing | Zion Tech Group</title>;
        <meta;
          name='description';
          content='OpenAPI / GraphQL mock servers, contract tests in CI, and deployment gates with snapshot diffs and approvals.';
        />;
        <link;
          rel='canonical';
          href='https://ziontechgroup.com / api - mock - contract - testing';
        />;
      </Head>;
      <div className='min - h-screen py - 20 px - 4 sm:px - 6 lg:px - 8'>;
        <ServiceAds;
          heading='API Quality Fast - Track';
          subheading='Mock, validate, and ship with confidence.';
          items={ad_items}
        />;
        <div className='max - w-5xl mx - auto mt - 8'>;
          <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 6'>;
            {tiers.map (t => (
              <div;
                key={t.name}
                className='bg - black / 30 border border - gray - 700 / 50 rounded - 2xl p - 6';
              >;
                <div className='flex items - center gap - 2 mb - 2'>;
                  <ShieldCheck className='w - 5 h - 5 text - cyan - 400' />;
                  <h3 className='text - white text - xl font - bold'>{t.name}</h3>;
                </div>;
                <div className='text - cyan - 400 font - semibold mb - 4'>;
                  {t.price}
                </div>;
                <ul className='space - y-2 text - gray - 300 text - sm'>;
                  {t.items.map (index => (
                    <li;
                      key={i}
                      className='flex items - start gap - 2 w - 4 h - 4 mt - 0.5 text - emerald - 400';
                    >;
                      <Check /> <span>{i}</span>;
                    </li>                  ))}
                </ul>;
              </div>))}
          </div>;
          <div className='mt - 8 max - w-3xl mx - auto bg - black / 20 backdrop - blur - xl rounded - 2xl p - 6 border border - cyan - 500 / 30'>;
            <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 4 text - sm mb - 4'>;
              <div className='flex items - center justify - center gap - 2 text - cyan - 400 w - 4 h - 4'>;
                <Phone />;
                <span>{contact_info.mobile}</span>;
              </div>;
              <div className='flex items - center justify - center gap - 2 text - purple - 400 w - 4 h - 4'>;
                <Mail />;
                <span>{contact_info.email}</span>;
              </div>;
              <div className='flex items - center justify - center gap - 2 text - green - 400 w - 4 h - 4 text - xs'>;
                <MapPin />;
                <span>{contact_info.address}</span>;
              </div>;
            </div>;
            <div className='text - center'>;
              <a;
                href='/contact';
                className='bg - gradient - to - r from - blue - 600 to - purple - 600 text - white px - 6 py - 3 rounded - xl';
              >;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
          </div>;

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                Book a Demo;
              </a>            </div>;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======


}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
=======
}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  )
}

    </Layout>);
;
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
;


  )
}
    </Layout>);
;
);

}
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
;


<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
;


=======
);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
