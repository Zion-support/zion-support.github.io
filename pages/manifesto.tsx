import Head from 'next/head';
import React from 'react';

export default function ManifestoPage(): JSX.Element {_return (
    <>
      <Head>
        <title>Zion Manifesto</title>
        <meta name="description" content="Zion Manifesto: Our purpose, _philosophy, _and decentralized future." />
      </Head>
      <main className="min-h-screen bg-gray-50 text-gray-900">
        <div className="mx-auto w-full max-w-5xl px-6 py-12">
          <header className="mb-12">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Zion Manifesto</h1>
            <p className="mt-4 text-lg text-gray-700">
              A public commitment to build an AI-native, _trustless, _and talent-first marketplace—in service of human sovereignty.
            </p>
          </header>

          <section className="prose prose-gray max-w-none">
            <h2 id="our-mission">Our Mission</h2>
            <p>
              Empower every builder, _creator, _and solver with sovereign tools to earn, _collaborate, _and grow—without gatekeepers. Zion is a
              marketplace protocol and product suite that aligns incentives around talent, _trust, _and value creation.
            </p>

            <h2 id="why-zion-exists">Why Zion Exists</h2>
            <p>
              Work has moved online, _but ownership, _attribution, _and compensation have not. Platforms extract value while contributors face
              opaque rules, _captive audiences, _and fragile reputations. Zion exists to reverse that gravity: portable identity, _verifiable
              work, _programmable trust, _and interoperable markets where value flows to the people who create it.
            </p>

            <h2 id="problem-with-traditional-marketplaces">The Problem with Traditional Marketplaces</h2>
            <ul>
              <li><strong>Platform Rent-Seeking</strong>: Centralized fees and policy risk diminish creator upside and user choice.</li>
              <li><strong>Captive Reputation</strong>: Profiles and reviews are siloed; your hard-won credibility is non-portable.</li>
              <li><strong>Low-Trust Transactions</strong>: Disputes, _fraud, _and misalignment waste time and undermine collaboration.</li>
              <li><strong>Data as Leverage</strong>: User data is harvested to entrench moats rather than empower the people who generate it.</li>
            </ul>

            <h2 id="ai-for-empowerment">AI for Empowerment, _Not Exploitation</h2>
            <p>
              AI should amplify human capability and agency—not replace it or capture its value. Zion is AI-native by design: matching, _scoping, _verification, _and reputation signals are assisted by models, _yet decisions remain human-sovereign. We prioritize
              transparency, _auditability, _and consent. Your data powers your outcomes, _not someone else’s moat.
            </p>

            <h2 id="our-decentralized-future">Our Decentralized Future</h2>
            <p>
              Zion evolves from a product into a protocol: identity, _reputation, _escrow, _and discovery as shared public goods. Governance
              transitions gradually, _guided by real usage and contributor ownership. The end-state is a resilient, _permissionless network
              where anyone can build clients, _services, _and markets atop a common trust layer—talent-first, _globally accessible, _and
              credibly neutral.
            </p>
          </section>
        </div>
      </main>
    </>
  );}