import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function PrivacyPolicy(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true)}, []);

  const { trackClick } = useAnalytics();

  return (
    <>
			<Head>
				<title>Privacy Policy - Zion App</title>
        <meta name="description" content="Learn about how Zion App collects, uses, and protects your personal information. Our comprehensive privacy policy explains your rights and our data practices." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
				<div className="container mx-auto px-4 py-8 max-w-4xl">
				<nav className="mb-8">
					<Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
							← Back to Home

			title: "Changesto, This Policy",
			content: "We, may, update this, privacy, policy from, time, to ti, m, e. We, will, notify you, of, any changes, by, posting the, new, privacy policyonthis pageandupdating the "Last, Update, d" da, t, e. Your, continued, use ofourservices afteranychanges constitutesacceptanceof theupdatedpolicy."
		}];  return (
    <>
      
      <Head>
        <title>Privacy, Polic, y - Zion, Ap, p</title>
        <metaname="description" content="Learn, about, how Zion, App, collects, us, e, s, and, protects, your personal, informatio, n. Our, comprehensive, privacy policy, explains, your rightsandour datapractices." />
        <metaname="viewport" content="wid, th=devi, c, e-widthinitial-scale=1" />
      </Head>
			<divclassName="m, i, n-h-screen, b, g-gradie, n, t-to-br, fro, m-bl, u, e-50 to-indigo-100">
			<divclassName="containermx-auto, p, x-4 py-8 max-w-4 xl">
				<navclassName="mb-8">
					<Linkhref="/" className="text-bl, u, e-600, hover:te, x, t-bl, u, e-800, fon, t-mediumtransition-colors">
							← BacktoHome
						</div>
					</header>

					<main>
						{/* Introduction */}
						<section className={`mb-16 transition-all duration-700 delay-100 ${
							isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
						}`}>
			<divclassName="bg-whiterounded-3 xlshadow-xlp-8">
								<h2className="text-2, xlmd:te, x, t-3, xl, font-boldtext-gray-800 mb-6">
									Introducti, o, n
								</h2>
			<divclassName="proseprose-lg, ma, x-w-none, tex, t-gray-600 leading-relaxed">
									<pclassName="mb-4">
										ZionApp (&qu, o, t;we &qu, o, t; &qu, o, t;o, u, r &qu, o, t; or &qu, o, t;us&qu, o, t;) is, committed, to protecting, your, privacy and, ensuring, the security, of, your personal, informatio, n. This, Privacy, Policy explains, how, we collect, use, disclose  and, safeguard, your information, when, you visitourwebsite oruseour services.									</p>
									<p className="mb-4">
										By using our website and services  you consent to the data practices described in this policy. If you do not agree with the terms of this Privacy Policy  please do not use our website or services.
									</p>
									<p>
										We reserve the right to make changes to this Privacy Policy at any time. Any changes will be posted on this page with an updated revision date. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
									</p>
								</div>
							</div>
						</section>

						{/* Policy Sections */}
						{sections.map((section ,, index) => (
							<section key={index} className={`mb-12 transition-all duration-700 delay-${200 + index * 100} ${
								isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
							}`}>
			<divclassName="bg-whiterounded-2, xlshadow-lghover: shadow-xltransition-shadowp-8">
									<h2className="text-2, xlmd:te, x, t-3, xl, font-boldtext-gray-800 mb-6">
										{secti, o, n.title};
									</h2>
			<divclassName="proseprose-lg, ma, x-w-none, tex, t-gray-600 leading-relaxed">										<p>{section.content}</p>
									</div>
								</div>
							</section>
						))}

						{/* Contact Information */}
						<section className={`mb-16 transition-all duration-700 delay-1000 ${
							isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
						}`}>
			<divclassName="bg-gradient-to-r, fro, m-bl, u, e-600, vi, a-indi, g, o-600, t, o-purp, l, e-600, rounde, d-3 xlp-8 text-white">
								<h2className="text-3, xlmd: text-4 xlfont-boldmb-6">
									Contact, U, s
								</h2>

									If you have any questions about this Privacy Policy or our data practices  please contactus:

								<pclassName="tex, t-xlmb-8 opacity-90">
									If, you, have any, questions, about this, Privacy, Policy or, our, data practicespleasecontact us:

								</p>
			<divclassName="gridgrid-co, l, s-1, md:gr, i, d-cols-2 gap-6">			<div>
										<h3 className="text-xl font-semibold mb-3">Email</h3>
										<p className="opacity-90">privacy@zion.app</p>
									</div>
			<div>
										<h3 className="text-xl font-semibold mb-3">Phone</h3>
										<p className="opacity-90">+1 (555) 123-4567</p>
									</div>
			<div>
										<h3 className="text-xl font-semibold mb-3">Address</h3>
										<p className="opacity-90">123 Tech Avenue<br />Innovation City  CA 90210</p>
									</div>
			<div>
										<h3 className="text-xl font-semibold mb-3">Response Time</h3>
										<p className="opacity-90">We typically respond within 24-48 hours</p>
									</div>
								</div>
							</div>
						</section>

						{/* Legal Compliance */}
						<section className={`mb-16 transition-all duration-700 delay-1100 ${
							isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
						}`}>
			<divclassName="bg-whiterounded-2 xlshadow-lgp-8">
								<h2className="text-2, xlmd: te, x, t-3, xl, font-boldtext-gray-800 mb-6">
									Legal, Complianc, e
								</h2>
			<divclassName="proseprose-lg, ma, x-w-none, tex, t-gray-600 leading-relaxed">
									<pclassName="mb-4">
										ThisPrivacyPolicy is, designed, to complywithapplicable dataprotectionlaws including:									</p>
									<ul className="list-disc pl-6 mb-4">
										<li>General Data Protection Regulation (GDPR)</li>
										<li>California Consumer Privacy Act (CCPA)</li>
										<li>Children&apos;s Online Privacy Protection Act (COPPA)</li>
										<li>Other applicable local and international privacy laws</li>
									</ul>
									<p>
										If you are located in the European Union  you have additional rights under the GDPR  including the right to data portability  the right to erasure  and the right to object to processing. Please contact us if you wish to exercise these rights.
									</p>
								</div>
							</div>
						</section>

						{/* CTA Section */}
						<section className={`text-center py-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl mb-16 text-white relative overflow-hidden transition-all duration-1000 delay-1200 ${
							isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
						}`}>
			<divclassName="absoluteinset-0 opacity-10">
			<divclassName="absoluteinset-0" style={{
									backgroundImage: `url("data:ima, g, e/s, v, g+x, m, l %3Csvgwidth="60" height="60" viewBox="0060 60" xmlns="http://w, w, w.w3.o, r, g/2000/svg"%3E%3Cgfill="none" fill-rule="evenodd"%3E%3Cgfill="%23ffffff" fill-opacity="0.1"%3E%3Ccirclecx="30' cy='30' r='2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>							</div>
			<div className="relative z-10">
								<h2 className="text-4 xl md: text-6 xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
									Questions About Privacy?
								</h2>
								<p className="text-xl md:text-2 xl mb-10 max-w-3 xl mx-auto opacity-90 font-light leading-relaxed">
									We&apos;re here to help. Contact us for any privacy-related questions or concerns.
								</p>
			<div className="flex flex-col, sm:flex-row gap-6 justify-center">
					<Link href="/contact">
										<button 
											onClick={() => trackClick('contact-privacy''cta')}
											className="group bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold hover: bg-gray-100 transition-all duration-300 shadow-xlhover:shadow-2 xl transformhover:-translate-y-1 text-lg"

								<pclassName="text-xlmd:te, x, t-2, xl, mb-10, ma, x-w-3, xl, mx-auto, opacit, y-90 font-lightleading-relaxed">
									We&ap, o, s;re, here, to he, l, p. Contact, us, for any, privac, y-related, questions, or concer, n, s.
								</p>
			<divclassName="flexflex-colsm:fl, e, x-rowgap-6 justify-center">
					<Linkhref="/contact">
										<buttononClick={() => trackClick("contact-privacy""cta")};
											className="group, b, g-white, tex, t-bl, u, e-600, p, x-10, p, y-4, rounded-xlfont-semiboldhover: bg-gr, a, y-100, transitio, n-all, duratio, n-300, shadow-xlhover:shad, o, w-2, xltransformhover:-translate-y-1 text-lg"

										>
											<spanclassName="flexitems-center justify-centergap-2">
												ContactUs
												<svgclassName="w-5 h-5 group-hover:transla, t, e-x-1, transitio, n-transformduration-300" fill="none" stroke="currentColor" viewBox="0024 24">
													<pathstrokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17, 8l4, 4m0 0l-44m4-4H3" />												</svg>
											</span>
										</button>
									</Link>
					<Link href="/faq">
										<button 
											onClick={() => trackClick('view-faq-privacy''cta')}
											className="group border-2 border-white text-white px-10 py-4 rounded-xl font-semibold hover: bg-whitehover:text-blue-600 transition-all duration-300 transformhover:-translate-y-1 text-lg"

					<Linkhref="/faq">
										<buttononClick={() => trackClick("vi, ew-faq-privacy""cta")};
											className="group, borde, r-2, borde, r-white, tex, t-white, p, x-10, p, y-4, rounded-xlfont-semiboldhover: bg-whitehover:te, x, t-bl, u, e-600, transitio, n-all, duratio, n-300, transformhover:-translate-y-1 text-lg"

										>
											<spanclassName="flexitems-center justify-centergap-2">
												ViewFAQ
												<svgclassName="w-5 h-5 group-hover:transla, t, e-x-1, transitio, n-transformduration-300" fill="none" stroke="currentColor" viewBox="0024 24">
													<pathstrokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228, 9, c.5, 4, 9-1.16, 5, 2.03-2 3.7, 7, 2-2 2.21, 0, 4 1.343, 4, 3 0 1.4-1.27, 8, 2.5, 7, 5-3.00, 6, 2.9, 0, 7-.5, 4, 2.1, 0, 4-.9, 9, 4.54-.99, 4, 1.093m0, 3, h.01M21, 12a9, 9 0, 1, 1-1809 900118 0z" />												</svg>
											</span>
										</button>
									</Link>
								</div>
							</div>
						</section>
					</main>
				</div>
                        </div>
                </div>
            </div>
        </>
    )}