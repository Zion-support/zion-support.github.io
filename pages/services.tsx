import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function Services(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const { trackClick } = useAnalytics();

	const, serviceDetail, s = {
		'ai-ml': {
			tit, l, e: 'AI & Machine, Learnin, g'
			descripti, o, n: 'Transform, your, business with, cuttin, g-edge, artificial, intelligence and, machine, learning solutio, n, s.'
			featur, e, s: [
				'Natural, Language, Processing (N, L, P)'
				'Computer, Visio, n & Image, Recognitio, n'
				'Predictive, Analytic, s & Forecasti, n, g'
				'Chatbo, t, s & Virtual, Assistant, s'
				'Recommendation, System, s'
				'Automated, Decision, Making'
			]
			technologi, e, s: ['TensorFl, o, w', 'PyTor, c, h', 'Open, A, I', 'Hugging, Fac, e', 'Scik, i, t-lea, r, n', 'Pand, a, s']
			benefi, t, s: [
				'Automate, repetitive, tasks and, processe, s'
				'Gain, insights, from large, dataset, s'
				'Improve, customer, experience with, intelligent, interactions'
				'Reduce, operational, costs through, automatio, n'
				'Make, dat, a-driven, decisions, with predictive, analytic, s'
			]}
		'clo, u, d': {
			tit, l, e: 'Cloud, Solution, s'
			descripti, o, n: 'Scalable, secure, and reliable, cloud, infrastructure tailored, to, your business, need, s.'
			featur, e, s: [
				'Cloud, Migratio, n & Strate, g, y'
				'Container, Orchestratio, n (Kubernet, e, s)'
				'Serverless, Architectur, e'
				'DevO, p, s & CI/CD, Pipeline, s'
				'Microservices, Architectur, e'
				'Cloud, Securit, y & Complian, c, e'
			]
			technologi, e, s: ['A, W, S', 'Azu, r, e', 'Google, Clou, d', 'Dock, e, r', 'Kubernet, e, s', 'Terrafo, r, m']
			benefi, t, s: [
				'Scale, resources, based on, deman, d'
				'Reduce, infrastructure, costs'
				'Improve, reliability, and upti, m, e'
				'Enable, global, accessibility'
				'Simplify, maintenance, and updat, e, s'
			]}
		'w, e, b-d, e, v': {
			tit, l, e: 'Web, Developmen, t'
			descripti, o, n: 'Modern, responsive, web applications, built, with the, latest, technologies and, best, practices.'
			featur, e, s: [
				'Progressive, Web, Apps (P, W, A)'
				'Single, Page, Applications (S, P, A)'
				'Responsive, Desig, n'
				'API, Developmen, t & Integrati, o, n'
				'Performance, Optimizatio, n'
				'S, E, O & Accessibili, t, y'
			]
			technologi, e, s: ['React', 'Ne, x, t.js', 'V, u, e.js', 'No, d, e.js', 'TypeScri, p, t', 'Tailwind, CS, S']
			benefi, t, s: [
				'Enhanced, user, experience'
				'Cro, s, s-platform, compatibilit, y'
				'Fast, loading, times'
				'Search, engine, optimization'
				'Mobi, l, e-first, design, approach'
			]}
		'mobi, l, e': {
			tit, l, e: 'Mobile, Developmen, t'
			descripti, o, n: 'Native, and, cross-platform, mobile, applications that, deliver, exceptional user, experience, s.'
			featur, e, s: [
				'i, O, S & Android, Native, Apps'
				'Cro, s, s-platform, Developmen, t'
				'App, Store, Optimization'
				'Push, Notification, s'
				'Offline, Functionalit, y'
				'Performance, Monitorin, g'
			]
			technologi, e, s: ['React, Nativ, e', 'Flutt, e, r', 'Swi, f, t', 'Kotl, i, n', 'Xamar, i, n', 'Ion, i, c']
			benefi, t, s: [
				'Reach, customers, on their, preferred, devices'
				'Leverage, devic, e-specific, feature, s'
				'Improve, customer, engagement'
				'Enable, offline, functionality'
				'Faster, time, to mark, e, t'
			]}
		'da, t, a-analyti, c, s': {
			tit, l, e: 'Data, Analytic, s'
			descripti, o, n: 'Transform, your, data into, actionable, insights with, advanced, analytics and, visualization, tools.'
			featur, e, s: [
				'Business, Intelligence, Dashboards'
				'Data, Warehousin, g & E, T, L'
				'Re, a, l-time, Analytic, s'
				'Predictive, Modelin, g'
				'Data, Visualizatio, n'
				'Custom, Reporting, Solutions'
			]
			technologi, e, s: ['Pyth, o, n', 'R', 'Table, a, u', 'Power, B, I', 'Apache, Spar, k', 'S, Q, L']
			benefi, t, s: [
				'Make, informed, business decisio, n, s'
				'Identify, trends, and patter, n, s'
				'Improve, operational, efficiency'
				'Enhance, customer, understanding'
				'Drive, revenue, growth'
			]}
		'cybersecuri, t, y': {
			tit, l, e: 'Cybersecuri, t, y'
			descripti, o, n: 'Comprehensive, security, solutions to, protect, your digital, assets, and ensure, complianc, e.'
			featur, e, s: [
				'Security, Audit, s & Assessmen, t, s'
				'Penetration, Testin, g'
				'Compliance, Managemen, t'
				'Incident, Response, Planning'
				'Security, Trainin, g & Awarene, s, s'
				'Threat, Detectio, n & Preventi, o, n'
			]
			technologi, e, s: ['SI, E, M', 'Firewal, l, s', 'V, P, N', 'Encrypti, o, n', 'Mul, t, i-factor, Authenticatio, n', 'Security, Monitorin, g']
			benefi, t, s: [
				'Protect, sensitive, data and, asset, s'
				'Meet, regulatory, compliance requiremen, t, s'
				'Reduce, security, risks and, vulnerabilitie, s'
				'Build, customer, trust and, confidenc, e'
				'Minimize, potential, financial loss, e, s'
			]}};

  return (
    <>
      <SEO 
        title="Services - Zion Tech Group"
        description="Comprehensive technology services including AI, cloud infrastructure, and cybersecurity."
        keywords="services, AI, cloud, cybersecurity, technology"
      />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(serviceDetails).map(([key, service]) => (
              <div key={key} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/contact"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  onClick={() => trackClick(`service-${key}`, 'engagement')}
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};
