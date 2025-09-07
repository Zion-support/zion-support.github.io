import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import EnhancedButton from '../../components/ui/EnhancedButton';
const steps = $2;
const Onboarding: NextPage = () => {
  const [step, setStep] = useState($2);
  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1)),
  const prev = () => setStep((s) => Math.max(s - 1, 0)),

  return (
    <Layout>
      <Head>
        <title>Authentication - Zion Tech Group</title>
        <meta name="description" content="Authentication page." />
      </Head>

      <h1 className="text-2xl font-semibold">Get Started</h1>

      <div className="flex items-center gap-2 text-sm flex-wrap">
        {steps.map((label, i) => (
          <div key = $2;
export default Onboarding,
