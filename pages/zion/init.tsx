<<<<<<< HEAD
import { useState } from 'react';
import type { NextPage } from 'next';
type GovernanceMode = $2;
type DeployFormState = $2;
  defaultLanguage: string,
  deploymentRegion: string,
  tokenActivation: boolean,
  governanceMode: GovernanceMode,
  branding: {
    logoUrl: string,
    primaryColor: string,
    secondaryColor: string,
    subdomain: string},
  modules: Record<string, boolean>,
  bonusModules: Record<string, boolean>
},

const defaultModules: DeployFormState['modules'] = {
  marketplace: true,
  gpt: true,
  academy: true,
  token: true,
  dao: true,
  'nation-builder': true,
  'launch-kit': true,
  'book-builder': true,
  'roadmap-whitepaper': true,
  'api-docs-wiki': true,
  'zion-brain': true},

const defaultBonus: DeployFormState['bonusModules'] = {
  'global-map': false,
  'franchise-onboarding': false,
  'referral-ambassadors': false,
  'grant-portal': false,
  trailer: false,
  'book-store': false},

const InitPage: NextPage = () => {
  const [state, setState] = useState<DeployFormState>({
    instanceName: '',
    defaultLanguage: 'en',
    deploymentRegion: 'us-east-1',
    tokenActivation: true,
    governanceMode: 'Hybrid',
    branding: { logoUrl: '', primaryColor: '#4f46e5', secondaryColor: '#0ea5e9', subdomain: '' },
    modules: defaultModules,
    bonusModules: defaultBonus}),
  const [submitting, setSubmitting] = useState($2);
  const [result, setResult] = useState<any>(null),
  const [error, setError] = useState<string | null>(null),

  const handleToggle = (group: 'modules' | 'bonusModules', key: string) => {
    setState((prev) => ({
      ...prev,
      [group]: { ...prev[group], [key]: !prev[group][key] }}))
  },

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault($2);
    setSubmitting($2);
    setError($2);
    setResult($2);
    try {
      const res = await fetch('/api/deploy/genesis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(state)}),
      const json = await res.json($2);
      if (!res.ok) throw new Error($2);
      setResult(json)
    } catch (err: any) {
      setError(err.message || 'Unexpected error')
    } finally {
      setSubmitting(false)
    }
  },
=======
import React from 'react';
import Layout from '../components/Layout';
>>>>>>> origin/chore/fix-lint-and-merge

export default function ZionInit() {
  return (
<<<<<<< HEAD
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Genesis Deploy</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">Initialize a full Zion OS instance from a single control panel.</p>
=======
    <Layout
      title="Zion Init - Zion Tech Group"
      description="Zion initialization and setup page"
    >
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Zion Init
            </h1>
            <p className="text-xl text-gray-600">
              Zion initialization page is under construction.
            </p>
          </div>
        </div>
>>>>>>> origin/chore/fix-lint-and-merge
      </div>
    </Layout>
  );
}