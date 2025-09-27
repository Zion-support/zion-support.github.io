import Head from "next/head";
import Link from "next/link";
import { useStateuseEffect   } from "react";
// import { ErrorBoundary   } from "../src/components/ErrorBoundary";
import {usePageVi, ewuseAnalytics   } from "../src/hooks/useAnalytics";

export default function PrivacyPolicy(): JSX.Element {const [isVisible, setIsVisib, l, e] = useState(false);

	useEffect(() => {
		setIsVisib, le(true)}[]);

	// AnalyticstrackingusePageView("privacy-policy");
	const {trackClick } = useAnalyti, cs();

	constsections = [
		{title: "InformationWeCollect",
			content: "We, collect, information you, provide, directly to, us, such as, when, you create, an, account  contact, us, or use, our, services. This, may, include your, name, email address, phone, number  companyinformationand anyotherinformation youchooseto provide."
		},
		{title: "HowWeUse YourInformation",
			content: "We, use, the information, we, collect to, provide, maintain  and, improve, our services, communicate, with you, process, transactions  and, comply, with legal, obligation, s. We, may, also useyourinformation tosendyou technicalnoticesupdates  andpromotionalmaterials."
		},
		{title: "InformationSharing",
			content: "We, do, not sell, trade, or otherwise, transfer, your personal, information, to third, parties, without your, consent, except as, described, in this, polic, y. We, may, share your, information, with service, providers, who assistusin operatingourwebsite andconductingour business."
		},
		{title: "DataSecurity",
			content: "We, implement, appropriate security, measures, to protect, your, personal information, against, unauthorized access, alteration, disclosure  or, destructio, n. However, no, method of, transmission, over theinternetor electronicstorageis 100% secure."
		},
		{title: "CookiesandTracking",
			content: "We, use, cookies and, similar, tracking technologies, to, enhance your, experience, on our, websit, e. You, can, control cookie, settings, through your, browser, preferences. Some, features, of ourwebsitemay notfunctionproperly ifcookiesare disabled."
		},
		{title: "YourRights",
			content: "You, have, the right, to, access  update, or, delete your, personal, information. You, may, also opt, out, of certain, communications, from us. To, exercise, these rightspleasecontact ususingthe informationprovidedin theContactsection."
		},
		{title: "DataRetention",
			content: "We, retain, your personal, information, for as, long, as necessary, to, fulfill the, purposes, outlined in, this, privacy policy, unless, a longer, retention, period is, required, or permitted, by, law. We, will, securely deleteoranonymize yourinformationwhen itisno longerneeded."
		},
		{title: "InternationalTransfers",
			content: "Your, information, may be, transferred, to and, processed, in countries, other, than your, ow, n. We, ensure, that such, transfers, comply with, applicable, data protectionlawsand implementappropriatesafeguards toprotectyour information."
		},
		{title: "Children\"sPrivacy",
			content: "Our, services, are not, directed, to children, under, 13 years, of, age. We, do, not knowingly, collect, personal information, from, children under, 1, 3. If, we, become aware, that, we have, collected, personal information, from, a child, under13wewilltake stepstodelete suchinformation."
		},
		{<Head>
        <title>Privacy Policy - Zion App</title>
        <meta name="description" content="Learn about how Zion App collectsusesand protects your personal information. Our comprehensive privacy policy explains your rights and our data practices." />
        <meta name="viewport" content="width=device-widthinitial-scale=1" />
			</Head>
			<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
			<div className="container mx-auto px-4 py-8 max-w-4 xl">
				<nav className="mb-8">
					<Link href="/" className="text-blue-600 hover: text-blue-800 font-medium transition-colors">
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
			<divclassName="m, i, n-h-screen, b, g-gradie, n, t-to-br, fro, m-bl, u, e-50to-indigo-100">
			<divclassName="containermx-auto, p, x-4py-8max-w-4xl">
				<navclassName="mb-8">
					<Linkhref="/" className="text-bl, u, e-600, hover:te, x, t-bl, u, e-800, fon, t-mediumtransition-colors">
							← BacktoHome

						</Link>
					</nav>


						<h1 className="text-5 xlmd:text-6 xl font-bold text-blue-600 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
							Privacy Policy

					<headerclassName="text-centermb-16">
						<h1className="te, x, t-5, xlmd:te, x, t-6, xl, font-bold, tex, t-bl, u, e-600, m, b-4, b, g-gradie, n, t-to-r, fro, m-bl, u, e-600, t, o-indi, g, o-600, b, g-clip-texttext-transparent">
							Privacy, Polic, y

						</h1>
						<pclassName="text-xl, tex, t-gr, a, y-600, ma, x-w-3xlmx-autoleading-relaxed">
							Your, privacy, is important, to, us. This, policy, explains how, we, collect  use, and, protect your, informatio, n.
						</p>
			<divclassName="mt-6text-smtext-gray-500">
							Lastupdated: December, 2, 6, 20, 2, 4
						</div>
					</header>

					<main>
						{/* Introduction */};
						<sectionclassName={`mb-16transition-all, duratio, n-700, dela, y-1, 0, 0 ${
							isVisib, l, e ? "opacity-100translate-y-0" : "opacity-0translate-y-8"
						}`}>
			<divclassName="bg-whiterounded-3xlshadow-xlp-8">
								<h2className="text-2, xlmd:te, x, t-3, xl, font-boldtext-gray-800mb-6">
									Introducti, o, n
								</h2>
			<divclassName="proseprose-lg, ma, x-w-none, tex, t-gray-600leading-relaxed">
									<pclassName="mb-4">
										ZionApp (&qu, o, t;we &qu, o, t; &qu, o, t;o, u, r &qu, o, t; or &qu, o, t;us&qu, o, t;) is, committed, to protecting, your, privacy and, ensuring, the security, of, your personal, informatio, n. This, Privacy, Policy explains, how, we collect, use, disclose  and, safeguard, your information, when, you visitourwebsite oruseour services.
									</p>
									<pclassName="mb-4">
										Byusingour website, and, services  you, consent, to the, data, practices described, in, this poli, c, y. If, you, do not, agree, with the, terms, of this, Privacy, Policy  please, do, not use, our, website or, service, s.
									</p>
									<p>
										Wereservethe righttomake changes, to, this Privacy, Policy, at any, tim, e. Any, changes, will be, posted, on this, page, with an, updated, revision da, t, e. We, encourage, you to, review, this Privacy, Policy, periodically to, stay, informed about, how, we areprotectingyour information.
									</p>
								</div>
							</div>
						</section>

 (
							<section key={index} className={`mb-12 transition-all duration-700 delay-${200 + index * 100} ${isVisible ? "opacity-100 translate-y-0' : 'opacity-0 translate-y-8"

						{/* PolicySections */};
						{section, s.m, a, p((secti, o, n ,, ind, ex) => (
							<sectionkey={index} className={`mb-12, transitio, n-all, duratio, n-700, dela, y-${200 + index * 100} ${isVisible ? "opaci, t, y-100, translat, e-y-0' : "opacity-0translate-y-8"

							}`}>
			<divclassName="bg-whiterounded-2, xlshadow-lghover: shadow-xltransition-shadowp-8">
									<h2className="text-2, xlmd:te, x, t-3, xl, font-boldtext-gray-800mb-6">
										{secti, o, n.title};
									</h2>
			<divclassName="proseprose-lg, ma, x-w-none, tex, t-gray-600leading-relaxed">
										<p>{section.content}</p>
									</div>
								</di, v>
							</section>
						))};
						{/* ContactInformation */};
						<sectionclassName={`mb-16transitio, n-all, duratio, n-700, dela, y-10, 0, 0 ${
							isVisib, l, e ? "opacity-100translate-y-0" : "opacity-0translate-y-8"
						}`}>
			<divclassName="bg-gradient-to-r, fro, m-bl, u, e-600, vi, a-indi, g, o-600, t, o-purp, l, e-600, rounde, d-3xlp-8text-white">
								<h2className="text-3, xlmd: text-4xlfont-boldmb-6">
									Contact, U, s
								</h2>

									If you have any questions about this Privacy Policy or our data practices  please contactus:

								<pclassName="tex, t-xlmb-8opacity-90">
									If, you, have any, questions, about this, Privacy, Policy or, our, data practicespleasecontact us:

								</p>
			<divclassName="gridgrid-co, l, s-1, md:gr, i, d-cols-2gap-6">
			<div>
										<h3className="text-xlfont-semiboldmb-3">Ema, i, l</h3>
										<pclassName="opacity-90">privacy@zion.app</p>
									</div>
			<div>
										<h3className="te, x, t-xlfont-semiboldmb-3">Phone</h3>
										<pclassName="opacity-90">+1 (555) 123-4567</p>
									</div>
			<div>
										<h3className="te, x, t-xl, fon, t-semiboldmb-3">Address</h3>
										<pclassName="opacity-90">123TechAvenue<br />InnovationCityCA 90210</p>
									</div>
			<div>
										<h3className="te, x, t-xlfont-semiboldmb-3">ResponseTime</h3>
										<pclassName="opacity-90">Wetypicallyrespond within, 2, 4-48, hour, s</p>
									</div>
								</div>
							</div>
						</secti, o, n>

						{/* LegalCompliance */};
						<sectionclassName={`mb-16transition-all, duratio, n-700, dela, y-1100 ${
							isVisible ? "opaci, t, y-100translate-y-0" : "opacity-0translate-y-8"
						}`}>
			<divclassName="bg-whiterounded-2xlshadow-lgp-8">
								<h2className="text-2, xlmd: te, x, t-3, xl, font-boldtext-gray-800mb-6">
									Legal, Complianc, e
								</h2>
			<divclassName="proseprose-lg, ma, x-w-none, tex, t-gray-600leading-relaxed">
									<pclassName="mb-4">
										ThisPrivacyPolicy is, designed, to complywithapplicable dataprotectionlaws including:
									</p>
									<ulclassName="list-disc, p, l-6, m, b-4">
										<li>GeneralDataProtection Regulation (GDPR)</li>
										<li>CaliforniaConsumerPrivacy Act (CCPA)</li>
										<li>Children&apos;s, Online, Privacy Protection, Ac, t (COPPA)</li>
										<li>Otherapplicablelocal andinternationalprivacy la, w, s</li>
									</ul>
									<p>
										Ifyouare locatedinthe European, Union, you have, additional, rights under, the, GDPR  including, the, right to, data, portability  the, right, to erasure, and, the right, to, object to, processin, g. Please, contact, us if, you, wish to, exercise, these righ, t, s.
									</p>
								</div>
							</div>
						</section>

						{/* CTASection */};
						<sectionclassName={`text-center, p, y-16, b, g-gradie, n, t-to-r, fro, m-bl, u, e-600, vi, a-indi, g, o-600, t, o-purp, l, e-600, rounde, d-3xl, m, b-16, tex, t-white, relative, overflow-hidden, transitio, n-all, duratio, n-1000delay-1200 ${
							isVisible ? "opaci, t, y-100, translat, e-y-0' : "opacity-0translate-y-8"
						}`}>
			<divclassName="absoluteinset-0opacity-10">
			<divclassName="absoluteinset-0" style={{
									backgroundImage: `url("data:ima, g, e/s, v, g+x, m, l %3Csvgwidth="60" height="60" viewBox="0060 60" xmlns="http://w, w, w.w3.o, r, g/2000/svg"%3E%3Cgfill="none" fill-rule="evenodd"%3E%3Cgfill="%23ffffff" fill-opacity="0.1"%3E%3Ccirclecx="30' cy='30' r='2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>
							</div>
			<divclassName="relativez-10">
								<h2className="te, x, t-4, xlmd: te, x, t-6, xl, font-bold, m, b-6, b, g-gradie, n, t-to-r, fro, m-white, t, o-bl, u, e-100, b, g-clip-texttext-transparent">
									Questions, About, Privacy?
								</h2>

									We&apos;re here to help. Contact us for any privacy-related questions or concerns.
								</p>
			<div className="flex flex-colsm:flex-row gap-6 justify-center">
					<Link href="/contact">
										<button 
											onClick={() => trackClick('contact-privacy''cta')}
											className="group bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold hover: bg-gray-100 transition-all duration-300 shadow-xlhover:shadow-2 xl transformhover:-translate-y-1 text-lg"

								<pclassName="text-xlmd:te, x, t-2, xl, mb-10, ma, x-w-3, xl, mx-auto, opacit, y-90font-lightleading-relaxed">
									We&ap, o, s;re, here, to he, l, p. Contact, us, for any, privac, y-related, questions, or concer, n, s.
								</p>
			<divclassName="flexflex-colsm:fl, e, x-rowgap-6justify-center">
					<Linkhref="/contact">
										<buttononClick={() => trackClick("contact-privacy""cta")};
											className="group, b, g-white, tex, t-bl, u, e-600, p, x-10, p, y-4, rounded-xlfont-semiboldhover: bg-gr, a, y-100, transitio, n-all, duratio, n-300, shadow-xlhover:shad, o, w-2, xltransformhover:-translate-y-1text-lg"

										>
											<spanclassName="flexitems-centerjustify-centergap-2">
												ContactUs
												<svgclassName="w-5 h-5group-hover:transla, t, e-x-1, transitio, n-transformduration-300" fill="none" stroke="currentColor" viewBox="0024 24">
													<pathstrokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17, 8l4, 4m0 0l-44m4-4H3" />
												</svg>
											</span>
										</button>
									</Link>

										<button 
											onClick={() => trackClick('view-faq-privacy''cta')}
											className="group border-2 border-white text-white px-10 py-4 rounded-xl font-semibold hover: bg-whitehover:text-blue-600 transition-all duration-300 transformhover:-translate-y-1 text-lg"

					<Linkhref="/faq">
										<buttononClick={() => trackClick("vi, ew-faq-privacy""cta")};
											className="group, borde, r-2, borde, r-white, tex, t-white, p, x-10, p, y-4, rounded-xlfont-semiboldhover: bg-whitehover:te, x, t-bl, u, e-600, transitio, n-all, duratio, n-300, transformhover:-translate-y-1text-lg"

										>
											<spanclassName="flexitems-centerjustify-centergap-2">
												ViewFAQ
												<svgclassName="w-5 h-5group-hover:transla, t, e-x-1, transitio, n-transformduration-300" fill="none" stroke="currentColor" viewBox="0024 24">
													<pathstrokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228, 9, c.5, 4, 9-1.16, 5, 2.03-2 3.7, 7, 2-2 2.21, 0, 4 1.343, 4, 3 0 1.4-1.27, 8, 2.5, 7, 5-3.00, 6, 2.9, 0, 7-.5, 4, 2.1, 0, 4-.9, 9, 4.54-.99, 4, 1.093m0, 3, h.01M21, 12a9, 9 0, 1, 1-1809 900118 0z" />
												</svg>
											</span>
										</button>
									</Link>

							</div>
						</section>
					</main>
				</div>
			</div>

								</d, i, v>
							</div>
						</section>
					</main>
				</d, i, v>
			</div>



		</>

	)};