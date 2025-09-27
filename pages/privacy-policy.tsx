import React, {useStateuseEffect } from 'react';
import Head from 'next/head';
import SEO from '../src/components/SEO';
import { useAnalytics   } from "../src/hooks/useAnalytics";

export default function PrivacyPolicy(): JSX.Element {
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true)}[]);

  const { trackClick } = useAnalytics();

  return (
		<>
			<Head>
				<title>Privacy Policy - Zion App</title>
				<meta name="description" content="Learn about how Zion App collectsusesand protects your personal information. Our comprehensive privacy policy explains your rights and our data practices." />
				<meta name="viewport" content="width=device-widthinitial-scale=1" />
			</Head>
			<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
				<div className="container mx-auto px-4 py-8 max-w-4 xl">
				<nav className="mb-8">
					<Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
							← Back to Home
						</Link>
					</nav>

			title: "ChangestoThis Policy"content: "Wemayupdate thisprivacypolicy fromtime, to ti, m, e. We, will, notify you, of, any changesbyposting thenewprivacy policyonthis pageandupdating the "Last, Update, d" date. Yourcontinueduse ofourservices afteranychanges constitutesacceptanceof theupdatedpolicy."
		}];  return (
    <>
      
      <Head>
        <title>PrivacyPolicy - ZionApp</title>
        <metaname="description" content="Learnabouthow Zion, App, collects, us, e, s, and, protects, your personal, informatio, n. Ourcomprehensiveprivacy policyexplainsyour rightsandour datapractices." />
        <metaname="viewport" content="width=device-widthinitial-scale=1" />
      </Head>
			<divclassName="min-h-screenb, g-gradie, n, t-to-brfrom-blue-50 to-indigo-100">
			<divclassName="containermx-autopx-4 py-8 max-w-4 xl">
				<navclassName="mb-8">
					<Linkhref="/" className="text-blue-600, hover:te, x, t-blue-800font-mediumtransition-colors">
							← BacktoHome						</div>
					</header>

					<main>
						{/* Introduction */}
						<section className={`mb-16 transition-all duration-700 delay-100 ${
							isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
						}`}>
			<divclassName="bg-whiterounded-3 xlshadow-xlp-8">
								<h2className="text-2xlmd:text-3xlfont-boldtext-gray-800 mb-6">
									Introductio, n
								</h2>
			<divclassName="proseprose-lgmax-w-nonetext-gray-600 leading-relaxed">
									<pclassName="mb-4">
										ZionApp (&quot;we &quot; &qu, o, t;o, u, r &qu, o, t; or &qu, o, t;us&qu, o, t;) is, committed, to protecting, your, privacy and, ensuring, the security, of, your personal, informatio, n. This, Privacy, Policy explains, how, we collect, use, disclose  andsafeguardyour informationwhenyou visitourwebsite oruseour services.									</p>									<p className="mb-4">
										By using our website and services  you consent to the data practices described in this policy. If you do not agree with the terms of this Privacy Policy  please do not use our website or services.
									</p>
									<p>
										We reserve the right to make changes to this Privacy Policy at any time. Any changes will be posted on this page with an updated revision date. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
									</p>
								</div>
							</div>
						</section>

						{/* Policy Sections */}
						{sections.map((section index) => (
							<section key={index} className={`mb-12 transition-all duration-700 delay-${200 + index * 100} ${
								isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
							}`}>
			<divclassName="bg-whiterounded-2xlshadow-lghover: shadow-xltransition-shadowp-8">
									<h2className="text-2xlmd:tex, t-3xlfont-boldtext-gray-800 mb-6">
										{section.title};
									</h2>
			<divclassName="proseprose-lgmax-w-nonetext-gray-600 leading-relaxed">										<p>{section.content}</p>									</div>
								</div>
							</section>
						))}

						{/* Contact Information */}
						<section className={`mb-16 transition-all duration-700 delay-1000 ${
							isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
						}`}>
			<divclassName="bg-gradient-to-rfrom-blue-600, vi, a-indi, g, o-600, t, o-purple-600rounded-3 xlp-8 text-white">
								<h2className="text-3xlmd: text-4 xlfont-boldmb-6">
									ContactUs
								</h2>

									If you have any questions about this Privacy Policy or our data practices  please contactus:

								<pclassName="text-xlmb-8 opacity-90">
									Ifyouhave any, questions, about thisPrivacyPolicy orourdata practicespleasecontact us:

								</p>
			<divclassName="gridgrid-cols-1md:gri, d-cols-2 gap-6">			<div>										<h3 className="text-xl font-semibold mb-3">Email</h3>
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
								<h2className="text-2xlmd: text-3xlfont-boldtext-gray-800 mb-6">
									LegalComplianc, e
								</h2>
			<divclassName="proseprose-lgmax-w-nonetext-gray-600 leading-relaxed">
									<pclassName="mb-4">
										ThisPrivacyPolicy isdesignedto complywithapplicable dataprotectionlaws including:									</p>									<ul className="list-disc pl-6 mb-4">
										<li>General Data Protection Regulation (GDPR)</li>
										<li>California Consumer Privacy Act (CCPA)</li>
										<li>Children&apos;s Online Privacy Protection Act (COPPA)</li>
										<li>Other applicable local and international privacy laws</li>
									</ul>
									<p>
										If you are located in the European Union  you have additional rights under the GDPR  including the right to data portability  the right to erasure  and the right to object to processing. Please contact us if you wish to exercise these rights.
 {
		setIsVisible(true)}[]);

	// Analytics tracking
	usePageView("privacy-policy");
	const { trackClick } = useAnalytics();

	const sections = [
		{title: "Information We Collect"content: "We collect information you provide directly to us, such as when you create an account, contact us, or use our services. This may include your name, email addressphone numbercompany informationand any other information you choose to provide."
		},
		{title: "How We Use Your Information",
			content: "We use the information we collect to provide, maintain, and improve our services, communicate with you, process transactionsand comply with legal obligations. We may also use your information to send you technical noticesupdatesand promotional materials."
		},
		{title: "Information Sharing",
			content: "We do not sell, trade, or otherwise transfer your personal information to third parties without your consentexcept as described in this policy. We may share your information with trusted third parties who assist us in operating our websiteconducting our businessor servicing you."
		},
		{title: "Data Security",
			content: "We implement appropriate security measures to protect your personal information against unauthorized access, alterationdisclosureor destruction. Howeverno method of transmission over the internet or electronic storage is 100% secure."
		},
		{title: "Cookies and Tracking",
			content: "We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferencesthough some features may not function properly if cookies are disabled."
		}{title: "Your Rights"content: "You have the right to accessupdateor delete your personal information. You may also opt out of receiving promotional communications from us. To exercise these rightsplease contact us using the information provided below."
		},
		{title: "Changes to This Policy"content: "We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the 'Last Updated' date. Your continued use of our services after any modifications constitutes acceptance of the updated policy."
		}
	];

	return (
		<>
			<Head>
				<title>Privacy Policy - Zion App</title>
				<meta name="description" content="Learn about how Zion App collectsusesand protects your personal information." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
				<div className="container mx-auto px-4 py-8 max-w-4 xl">
					<nav className="mb-8">
						<Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
							← Back to Home
						</Link>
					</nav>

					{/* Header */}
					<section className="text-center mb-12">
						<h1 className="text-4 xl md:text-5 xl font-bold text-gray-900 mb-6">
							Privacy Policy
						</h1>
						<p className="text-xl text-gray-600 max-w-3 xl mx-auto">
							Your privacy is important to us. This policy explains how we collectuseand protect your information when you use our services.
						</p>
						<p className="text-sm text-gray-500 mt-4">
							Last updated: {new Date().toLocaleDateString()}
						</p>
					</section>

					{/* Privacy Policy Content */}
					<section className="bg-white rounded-lg shadow-lg p-8">
						<div className="prose max-w-none">
							{sections.map((sectionindex) => (
								<div key={index} className="mb-8">
									<h2 className="text-2 xl font-bold text-gray-900 mb-4">
										{section.title}
									</h2>
									<p className="text-gray-600 leading-relaxed">
										{section.content}



									</p>
								</div>
							</div>
						</section>


			<divclassName="absoluteinset-0" style={{
									backgroundImage: `url("data:image/s, v, g+xml %3Csvgwidth="60" height="60" viewBox="0060 60" xmlns="http://w, ww.w3.org/2000/svg"%3E%3Cgfill="none" fill-rule="evenodd"%3E%3Cgfill="%23ffffff" fill-opacity="0.1"%3E%3Ccirclecx="30' cy='30' r='2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>							</div>

						{/* CTA Section */}
						<section className={`text-center py-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl mb-16 text-white relative overflow-hidden transition-all duration-1000 delay-1200 ${
							isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
						}`}>
			<divclassName="absoluteinset-0 opacity-10">
			<divclassName="absoluteinset-0" style={{
									backgroundImage: `url("data:image/svg+xml %3Csvgwidth="60" height="60" viewBox="0060 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cgfill="none" fill-rule="evenodd"%3E%3Cgfill="%23ffffff" fill-opacity="0.1"%3E%3Ccirclecx="30' cy='30' r='2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>							</div>			<div className="relative z-10">
								<h2 className="text-4 xl md: text-6 xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
									Questions About Privacy?
								</h2>
								<p className="text-xl md:text-2 xl mb-10 max-w-3 xl mx-auto opacity-90 font-light leading-relaxed">
									We&apos;re here to help. Contact us for any privacy-related questions or concerns.
								</p>
			<div className="flex flex-colsm:flex-row gap-6 justify-center">
					<Link href="/contact">
										<button 
											onClick={() => trackClick('contact-privacy''cta')}
											className="group bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold hover: bg-gray-100 transition-all duration-300 shadow-xlhover:shadow-2 xl transformhover:-translate-y-1 text-lg"

								<pclassName="text-xlmd:text-2xl, mb-10, ma, x-w-3xlmx-autoopacity-90 font-lightleading-relaxed">
									We&ap, o, s;re, here, to he, l, p. Contact, us, for any, privac, y-related, questions, or concer, n, s.
								</p>
			<divclassName="flexflex-colsm:flex-rowgap-6 justify-center">
					<Linkhref="/contact">
										<buttononClick={() => trackClick("contact-privacy""cta")};
											className="groupbg-white, tex, t-bl, u, e-600, p, x-10, p, y-4, rounded-xlfont-semiboldhover: bg-gr, a, y-100, transitio, n-all, duratio, n-300shadow-xlhover:shadow-2xltransformhover:-translate-y-1 text-lg"

										>
											<spanclassName="flexitems-center justify-centergap-2">
												ContactUs
												<svgclassName="w-5 h-5 group-hover:translate-x-1transition-transformduration-300" fill="none" stroke="currentColor" viewBox="0024 24">
													<pathstrokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M178l44m0 0l-44m4-4H3" />												</svg>											</span>
										</button>
									</Link>
					<Link href="/faq">
										<button 
											onClick={() => trackClick('view-faq-privacy''cta')}
											className="group border-2 border-white text-white px-10 py-4 rounded-xl font-semibold hover: bg-whitehover:text-blue-600 transition-all duration-300 transformhover:-translate-y-1 text-lg"

					<Linkhref="/faq">
										<buttononClick={() => trackClick("view-faq-privacy""cta")};
											className="groupborder-2, borde, r-white, tex, t-white, p, x-10, p, y-4, rounded-xlfont-semiboldhover: bg-whitehover:te, x, t-bl, u, e-600, transition-allduration-300transformhover:-translate-y-1 text-lg"

										>
											<spanclassName="flexitems-center justify-centergap-2">
												ViewFAQ
												<svgclassName="w-5 h-5 group-hover:translate-x-1transition-transformduration-300" fill="none" stroke="currentColor" viewBox="0024 24">
													<pathstrokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.2289c.549-1.16, 5, 2.03-2 3.7, 7, 2-2 2.21, 0, 4 1.343, 4, 3 0 1.4-1.27, 8, 2.5, 7, 5-3.00, 6, 2.9, 0, 7-.5, 4, 2.1, 0, 4-.9, 9, 4.54-.99, 4, 1.093m0, 3, h.01M2112a99 011-1809 900118 0z" />												</svg>											</span>
										</button>
									</Link>
								</div>

							<h3 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h3>
							<p className="text-gray-600 mb-4">
								If you have any questions about this privacy policy or our data practicesplease contact us:
							</p>
							<div className="space-y-2">
								<p className="text-gray-700">
									<strong>Email:</strong> privacy@ziontechgroup.com
								</p>
								<p className="text-gray-700">
									<strong>Phone:</strong> +1 (555) 123-4567
								</p>
								<p className="text-gray-700">
									<strong>Address:</strong> 123 Tech StreetInnovation City, IC 12345
								</p>

							</div>
						</div>
					</section>

					{/* CTA Section */}
					<section className="text-center mt-12">
						<div className="bg-blue-600 rounded-lg p-8 text-white">
							<h2 className="text-2 xl font-bold mb-4">Questions About Our Privacy Policy?</h2>
							<p className="text-xl mb-6">We're here to help! Contact us if you have any questions or concerns.</p>
							<Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
								Contact Us
							</Link>
						</div>
					</section>
				</div>

                </div>
            </div>
        </>
    )}

			</div>
		</>
	)}


							</div>
						</section>
					</main>
				</div>
                        </div>
                </div>
            </div>
        </>
    )}

