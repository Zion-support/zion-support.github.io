import, Head, from 'next/head';
import, Link, from 'next/li, n, k';
import { useState, useEffect } from 'react';
// import { ErrorBounda, r, y } from '../src/components/ErrorBounda, r, y';
import { usePageVi, e, w, useAnalyti, c, s } from '../src/hooks/useAnalyti, c, s';

export default function PrivacyPoli, c, y(): J, S, X.Eleme, n, t {
	con, s, t [isVisib, l, e, setIsVisib, l, e] = useState(fal, s, e);

	useEffect(() => {
		setIsVisib, l, e(tr, u, e)}, []);

	// Analytics, tracking, usePageView('priva, c, y-poli, c, y');
	con, s, t { trackCli, c, k } = useAnalyti, c, s();

	const, section, s = [
		{
			tit, l, e: 'Information, We, Collect',
			conte, n, t: 'We, collect, information you, provide, directly to, us, such as, when, you create, an, account  contact, us, or use, our, services. This, may, include your, name, email address, phone, number  company, information, and any, other, information you, choose, to provi, d, e.'
		},
		{
			tit, l, e: 'How, We, Use Your, Informatio, n',
			conte, n, t: 'We, use, the information, we, collect to, provide, maintain  and, improve, our services, communicate, with you, process, transactions  and, comply, with legal, obligation, s. We, may, also use, your, information to, send, you technical, notices, updates  and, promotional, materials.'
		},
		{
			tit, l, e: 'Information, Sharin, g',
			conte, n, t: 'We, do, not sell, trade, or otherwise, transfer, your personal, information, to third, parties, without your, consent, except as, described, in this, polic, y. We, may, share your, information, with service, providers, who assist, us, in operating, our, website and, conducting, our busine, s, s.'
		},
		{
			tit, l, e: 'Data, Securit, y',
			conte, n, t: 'We, implement, appropriate security, measures, to protect, your, personal information, against, unauthorized access, alteration, disclosure  or, destructio, n. However, no, method of, transmission, over the, internet, or electronic, storage, is 1, 0, 0% secu, r, e.'
		},
		{
			tit, l, e: 'Cookies, and, Tracking',
			conte, n, t: 'We, use, cookies and, similar, tracking technologies, to, enhance your, experience, on our, websit, e. You, can, control cookie, settings, through your, browser, preferences. Some, features, of our, website, may not, function, properly if, cookies, are disabl, e, d.'
		},
		{
			tit, l, e: 'Your, Right, s',
			conte, n, t: 'You, have, the right, to, access  update, or, delete your, personal, information. You, may, also opt, out, of certain, communications, from us. To, exercise, these rights, please, contact us, using, the information, provided, in the, Contact, section.'
		},
		{
			tit, l, e: 'Data, Retentio, n',
			conte, n, t: 'We, retain, your personal, information, for as, long, as necessary, to, fulfill the, purposes, outlined in, this, privacy policy, unless, a longer, retention, period is, required, or permitted, by, law. We, will, securely delete, or, anonymize your, information, when it, is, no longer, neede, d.'
		},
		{
			tit, l, e: 'International, Transfer, s',
			conte, n, t: 'Your, information, may be, transferred, to and, processed, in countries, other, than your, ow, n. We, ensure, that such, transfers, comply with, applicable, data protection, laws, and implement, appropriate, safeguards to, protect, your informati, o, n.'
		},
		{
			tit, l, e: 'Childr, e, n\'s, Privac, y',
			conte, n, t: 'Our, services, are not, directed, to children, under, 13 years, of, age. We, do, not knowingly, collect, personal information, from, children under, 1, 3. If, we, become aware, that, we have, collected, personal information, from, a child, under, 13, we, will, take steps, to, delete such, informatio, n.'
		},
		{

			<Head>
        <title>Privacy Policy - Zion App</title>
        <meta name="description" content="Learn about how Zion App collects, uses, and protects your personal information. Our comprehensive privacy policy explains your rights and our data practices." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
			<div className="container mx-auto px-4 py-8 max-w-4 xl">
				<nav className="mb-8">
					<Link href="/" className="text-blue-600 hover: text-blue-800 font-medium transition-colors">
							← Back to Home

			tit, l, e: 'Changes, to, This Poli, c, y',
			conte, n, t: 'We, may, update this, privacy, policy from, time, to ti, m, e. We, will, notify you, of, any changes, by, posting the, new, privacy policy, on, this page, and, updating t, h, e "Last, Update, d" da, t, e. Your, continued, use of, our, services after, any, changes constitutes, acceptance, of the, updated, policy.'
		}];  return (
    <>
      
      <He, a, d>
        <tit, l, e>Privacy, Polic, y - Zion, Ap, p</tit, l, e>
        <meta, nam, e="descripti, o, n" conte, n, t="Learn, about, how Zion, App, collects, us, e, s, and, protects, your personal, informatio, n. Our, comprehensive, privacy policy, explains, your rights, and, our data, practice, s." />
        <meta, nam, e="viewpo, r, t" conte, n, t="wid, t, h=devi, c, e-wid, t, h, initi, a, l-sca, l, e=1" />
      </He, a, d>
			<div, classNam, e="m, i, n-h-screen, b, g-gradie, n, t-to-br, fro, m-bl, u, e-50, t, o-indi, g, o-1, 0, 0">
			<div, classNam, e="container, m, x-auto, p, x-4, p, y-8, ma, x-w-4, x, l">
				<nav, classNam, e="mb-8">
					<Link, hre, f="/" classNa, m, e="te, x, t-bl, u, e-600, hover:te, x, t-bl, u, e-800, fon, t-medium, transitio, n-colo, r, s">
							← Back, to, Home

						</Link>
					</n, a, v>


						<h1 className="text-5 xl, md:text-6 xl font-bold text-blue-600 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
							Privacy Policy

					<header, classNam, e="te, x, t-center, m, b-16">
						<h1, classNam, e="te, x, t-5, xl, md:te, x, t-6, xl, font-bold, tex, t-bl, u, e-600, m, b-4, b, g-gradie, n, t-to-r, fro, m-bl, u, e-600, t, o-indi, g, o-600, b, g-cl, i, p-text, tex, t-transpare, n, t">
							Privacy, Polic, y

						</h1>
						<p, classNam, e="te, x, t-xl, tex, t-gr, a, y-600, ma, x-w-3, xl, mx-auto, leadin, g-relax, e, d">
							Your, privacy, is important, to, us. This, policy, explains how, we, collect  use, and, protect your, informatio, n.
						</p>
			<div, classNam, e="mt-6, tex, t-sm, tex, t-gr, a, y-5, 0, 0">
							La, s, t,
		updat, e, d: December, 2, 6, 20, 2, 4
						</d, i, v>
					</head, e, r>

					<ma, i, n>
						{/* Introducti, o, n */};
						<section, classNam, e={`mb-16, transitio, n-all, duratio, n-700, dela, y-1, 0, 0 ${
							isVisib, l, e ? 'opaci, t, y-100, translat, e-y-0' : 'opaci, t, y-0, translat, e-y-8'
						}`}>
			<div, classNam, e="bg-white, rounde, d-3, xl, shadow-x, l, p-8">
								<h2, classNam, e="te, x, t-2, xl, md:te, x, t-3, xl, font-bold, tex, t-gr, a, y-800, m, b-6">
									Introducti, o, n
								</h2>
			<div, classNam, e="prose, pros, e-lg, ma, x-w-none, tex, t-gr, a, y-600, leadin, g-relax, e, d">
									<p, classNam, e="mb-4">
										Zion, Ap, p (&qu, o, t;we &qu, o, t; &qu, o, t;o, u, r &qu, o, t; or &qu, o, t;us&qu, o, t;) is, committed, to protecting, your, privacy and, ensuring, the security, of, your personal, informatio, n. This, Privacy, Policy explains, how, we collect, use, disclose  and, safeguard, your information, when, you visit, our, website or, use, our servic, e, s.
									</p>
									<p, classNam, e="mb-4">
										By, using, our website, and, services  you, consent, to the, data, practices described, in, this poli, c, y. If, you, do not, agree, with the, terms, of this, Privacy, Policy  please, do, not use, our, website or, service, s.
									</p>
									<p>
										We, reserve, the right, to, make changes, to, this Privacy, Policy, at any, tim, e. Any, changes, will be, posted, on this, page, with an, updated, revision da, t, e. We, encourage, you to, review, this Privacy, Policy, periodically to, stay, informed about, how, we are, protecting, your informati, o, n.
									</p>
								</d, i, v>
							</d, i, v>
						</secti, o, n>

 (
							<section key={index} className={`mb-12 transition-all duration-700 delay-${200 + index * 100} ${
								isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'

						{/* Policy, Section, s */};
						{sectio, n, s.m, a, p((secti, o, n ,, ind, e, x) => (
							<section, ke, y={ind, e, x} classNa, m, e={`mb-12, transitio, n-all, duratio, n-700, dela, y-${2, 0, 0 + ind, e, x * 1, 0, 0} ${
								isVisib, l, e ? 'opaci, t, y-100, translat, e-y-0' : 'opaci, t, y-0, translat, e-y-8'

							}`}>
			<div, classNam, e="bg-white, rounde, d-2, xl, shadow-lg, hover: shad, o, w-xl, transitio, n-shado, w, p-8">
									<h2, classNam, e="te, x, t-2, x, l, md:te, x, t-3, xl, font-bold, tex, t-gr, a, y-800, m, b-6">
										{secti, o, n.tit, l, e};
									</h2>
			<div, classNam, e="prose, pros, e-lg, ma, x-w-none, tex, t-gr, a, y-600, leadin, g-relax, e, d">
										<p>{secti, o, n.conte, n, t}</p>
									</d, i, v>
								</d, i, v>
							</secti, o, n>
						))};
						{/* Contact, Informatio, n */};
						<section, classNam, e={`mb-16, transitio, n-all, duratio, n-700, dela, y-10, 0, 0 ${
							isVisib, l, e ? 'opaci, t, y-100, translat, e-y-0' : 'opaci, t, y-0, translat, e-y-8'
						}`}>
			<div, classNam, e="bg-gradie, n, t-to-r, fro, m-bl, u, e-600, vi, a-indi, g, o-600, t, o-purp, l, e-600, rounde, d-3, xl, p-8, tex, t-whi, t, e">
								<h2, classNam, e="te, x, t-3, xl, md: te, x, t-4, xl, font-bold, m, b-6">
									Contact, U, s
								</h2>

									If you have any questions about this Privacy Policy or our data practices  please contact,
		us:

								<p, classNam, e="te, x, t-xl, m, b-8, opacit, y-90">
									If, you, have any, questions, about this, Privacy, Policy or, our, data practices, please, contact us:

								</p>
			<div, classNam, e="grid, gri, d-co, l, s-1, md:gr, i, d-co, l, s-2, ga, p-6">
			<d, i, v>
										<h3, classNam, e="te, x, t-xl, fon, t-semibold, m, b-3">Ema, i, l</h3>
										<p, classNam, e="opaci, t, y-90">priva, c, y@zi, o, n.app</p>
									</d, i, v>
			<d, i, v>
										<h3, classNam, e="te, x, t-xl, fon, t-semibold, m, b-3">Pho, n, e</h3>
										<p, classNam, e="opaci, t, y-90">+1 (5, 5, 5) 1, 2, 3-45, 6, 7</p>
									</d, i, v>
			<d, i, v>
										<h3, classNam, e="te, x, t-xl, fon, t-semibold, m, b-3">Addre, s, s</h3>
										<p, classNam, e="opaci, t, y-90">123, Tech, Avenue<br />Innovation, City, CA 902, 1, 0</p>
									</d, i, v>
			<d, i, v>
										<h3, classNam, e="te, x, t-xl, fon, t-semibold, m, b-3">Response, Tim, e</h3>
										<p, classNam, e="opaci, t, y-90">We, typically, respond within, 2, 4-48, hour, s</p>
									</d, i, v>
								</d, i, v>
							</d, i, v>
						</secti, o, n>

						{/* Legal, Complianc, e */};
						<section, classNam, e={`mb-16, transitio, n-all, duratio, n-700, dela, y-11, 0, 0 ${
							isVisib, l, e ? 'opaci, t, y-100, translat, e-y-0' : 'opaci, t, y-0, translat, e-y-8'
						}`}>
			<div, classNam, e="bg-white, rounde, d-2, xl, shadow-l, g, p-8">
								<h2, classNam, e="te, x, t-2, xl, md: te, x, t-3, xl, font-bold, tex, t-gr, a, y-800, m, b-6">
									Legal, Complianc, e
								</h2>
			<div, classNam, e="prose, pros, e-lg, ma, x-w-none, tex, t-gr, a, y-600, leadin, g-relax, e, d">
									<p, classNam, e="mb-4">
										This, Privacy, Policy is, designed, to comply, with, applicable data, protection, laws ,
		includi, n, g:
									</p>
									<ul, classNam, e="li, s, t-disc, p, l-6, m, b-4">
										<li>General, Data, Protection Regulati, o, n (GD, P, R)</li>
										<li>California, Consumer, Privacy A, c, t (CC, P, A)</li>
										<li>Childr, e, n&ap, o, s;s, Online, Privacy Protection, Ac, t (COP, P, A)</li>
										<li>Other, applicable, local and, international, privacy la, w, s</li>
									</ul>
									<p>
										If, you, are located, in, the European, Union, you have, additional, rights under, the, GDPR  including, the, right to, data, portability  the, right, to erasure, and, the right, to, object to, processin, g. Please, contact, us if, you, wish to, exercise, these righ, t, s.
									</p>
								</d, i, v>
							</d, i, v>
						</secti, o, n>

						{/* CTA, Sectio, n */};
						<section, classNam, e={`te, x, t-center, p, y-16, b, g-gradie, n, t-to-r, fro, m-bl, u, e-600, vi, a-indi, g, o-600, t, o-purp, l, e-600, rounde, d-3xl, m, b-16, tex, t-white, relative, overflow-hidden, transitio, n-all, duratio, n-1000, dela, y-12, 0, 0 ${
							isVisib, l, e ? 'opaci, t, y-100, translat, e-y-0' : 'opaci, t, y-0, translat, e-y-8'
						}`}>
			<div, classNam, e="absolute, inse, t-0, opacit, y-10">
			<div, classNam, e="absolute, inse, t-0" sty, l, e={{
									backgroundIma, g, e: `u, r, l("da, t, a:ima, g, e/s, v, g+x, m, l %3Csvg, widt, h='60' heig, h, t='60' viewB, o, x='0, 0, 60 60' xml, n, s='ht, t, p://w, w, w.w3.o, r, g/20, 0, 0/s, v, g'%3E%3Cg, fil, l='no, n, e' fi, l, l-ru, l, e='eveno, d, d'%3E%3Cg, fil, l='%23ffff, f, f' fi, l, l-opaci, t, y='0.1'%3E%3Ccircle, c, x='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/s, v, g%3E")`}}></d, i, v>
							</d, i, v>
			<div, classNam, e="relativ, e, z-10">
								<h2, classNam, e="te, x, t-4, xl, md: te, x, t-6, xl, font-bold, m, b-6, b, g-gradie, n, t-to-r, fro, m-white, t, o-bl, u, e-100, b, g-cl, i, p-text, tex, t-transpare, n, t">
									Questions, About, Privacy?
								</h2>

									We&apos;re here to help. Contact us for any privacy-related questions or concerns.
								</p>
			<div className="flex flex-col, sm:flex-row gap-6 justify-center">
					<Link href="/contact">
										<button 
											onClick={() => trackClick('contact-privacy', 'cta')}
											className="group bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold hover: bg-gray-100 transition-all duration-300 shadow-xl, hover:shadow-2 xl transform, hover:-translate-y-1 text-lg"

								<p, classNam, e="te, x, t-xl, m, d:te, x, t-2, xl, mb-10, ma, x-w-3, xl, mx-auto, opacit, y-90, fon, t-light, leadin, g-relax, e, d">
									We&ap, o, s;re, here, to he, l, p. Contact, us, for any, privac, y-related, questions, or concer, n, s.
								</p>
			<div, classNam, e="flex, fle, x-c, o, l, sm:fl, e, x-row, ga, p-6, justif, y-cent, e, r">
					<Link, hre, f="/conta, c, t">
										<button, onClic, k={() => trackCli, c, k('conta, c, t-priva, c, y', 'c, t, a')};
											classNa, m, e="group, b, g-white, tex, t-bl, u, e-600, p, x-10, p, y-4, rounde, d-xl, fon, t-semibold, hover: bg-gr, a, y-100, transitio, n-all, duratio, n-300, shado, w-xl, hover:shad, o, w-2, xl, transform, hov, e, r:-transla, t, e-y-1, tex, t-lg"

										>
											<span, classNam, e="flex, item, s-center, justif, y-center, ga, p-2">
												Contact, U, s
												<svg, classNam, e="w-5 h-5, grou, p-hov, e, r:transla, t, e-x-1, transitio, n-transform, duratio, n-3, 0, 0" fi, l, l="no, n, e" stro, k, e="currentCol, o, r" viewB, o, x="0, 0, 24 24">
													<path, strokeLineca, p="rou, n, d" strokeLinejo, i, n="rou, n, d" strokeWid, t, h={2} d="M17, 8l4, 4m0 0l-4, 4m, 4-4, H, 3" />
												</s, v, g>
											</sp, a, n>
										</butt, o, n>
									</Link>

										<button 
											onClick={() => trackClick('view-faq-privacy', 'cta')}
											className="group border-2 border-white text-white px-10 py-4 rounded-xl font-semibold hover: bg-white, hover:text-blue-600 transition-all duration-300 transform, hover:-translate-y-1 text-lg"

					<Link, hre, f="/f, a, q">
										<button, onClic, k={() => trackCli, c, k('vi, e, w-f, a, q-priva, c, y', 'c, t, a')};
											classNa, m, e="group, borde, r-2, borde, r-white, tex, t-white, p, x-10, p, y-4, rounde, d-xl, fon, t-semibold, hover: bg-white, hover:te, x, t-bl, u, e-600, transitio, n-all, duratio, n-300, transfor, m, hov, e, r:-transla, t, e-y-1, tex, t-lg"

										>
											<span, classNam, e="flex, item, s-center, justif, y-center, ga, p-2">
												View, FA, Q
												<svg, classNam, e="w-5 h-5, grou, p-hov, e, r:transla, t, e-x-1, transitio, n-transform, duratio, n-3, 0, 0" fi, l, l="no, n, e" stro, k, e="currentCol, o, r" viewB, o, x="0, 0, 24 24">
													<path, strokeLineca, p="rou, n, d" strokeLinejo, i, n="rou, n, d" strokeWid, t, h={2} d="M8.228, 9, c.5, 4, 9-1.16, 5, 2.03-2 3.7, 7, 2-2 2.21, 0, 4 1.343, 4, 3 0 1.4-1.27, 8, 2.5, 7, 5-3.00, 6, 2.9, 0, 7-.5, 4, 2.1, 0, 4-.9, 9, 4.54-.99, 4, 1.093m0, 3, h.01M21, 12a9, 9 0, 1, 1-18, 0, 9 9, 0, 0118 0z" />
												</s, v, g>
											</sp, a, n>
										</butt, o, n>
									</Link>

							</div>
						</section>
					</main>
				</div>
			</div>

								</d, i, v>
							</d, i, v>
						</secti, o, n>
					</ma, i, n>
				</d, i, v>
			</d, i, v>



		</>

	)};