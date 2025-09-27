import, React, from 'react';
import, Head, from 'next/head';
import, Link, from 'next/li, n, k';
import { useState } from 'react';
import, SEO, from '../src/components/S, E, O';
import { useAnalyti, c, s } from '../src/hooks/useAnalyti, c, s';

export default function Conta, c, t(): J, S, X.Eleme, n, t {
	con, s, t [formDa, t, a, setFormDa, t, a] = useState({
		na, m, e: '',
		ema, i, l: '',
		compa, n, y: '',
		messa, g, e: ''
	});

	// Analytics, tracking, const { trackCli, c, k } = useAnalyti, c, s();

) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}))};

  const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		trackClick('contact-form-submit', 'conversion');
		console.log('Form submitted:', formData);
		// Handle form submission logic here
	};
	return (
		<>
			<SEO />
			<Head>
				<title>Contact Us - Zion App</title>
				<meta name="description" content="Get in touch with Zion App for your technology needs. We're here to help transform your business." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
			<div className="container mx-auto px-4 py-8 max-w-7 xl">
				<nav className="mb-8">
					<Link href="/" className="text-blue-600 hover: text-blue-800 font-medium transition-colors">
							← Back to Home

	const, handleInputChang, e = (e: React.ChangeEve, n, t<HTMLInputEleme, n, t | HTMLTextAreaEleme, n, t>) => {
		con, s, t { na, m, e, val, u, e } = e.targ, e, t;
		setFormDa, t, a(pr, e, v => ({
			...pr, e, v,
			[na, m, e]: val, u, e
		}))};

	const, handleSubmi, t = (e: React.FormEve, n, t) => {
		e.preventDefau, l, t();
		trackCli, c, k('conta, c, t-fo, r, m-subm, i, t', 'conversi, o, n');
		conso, l, e.l, o, g('Form, submitte, d:', formDa, t, a);
		// Handle, form, submission logic, her, e
	};  return (
    <>
      
      <S, E, O />
			<He, a, d>
				<tit, l, e>Contact, U, s - Zion, Ap, p</tit, l, e>
				<meta, nam, e="descripti, o, n" conte, n, t="Get, in, touch with, Zion, App for, your, technology nee, d, s. We're, here, to help, transform, your busine, s, s." />
				<meta, nam, e="viewpo, r, t" conte, n, t="wid, t, h=devi, c, e-wid, t, h, initi, a, l-sca, l, e=1" />
			</He, a, d>
			<div, classNam, e="m, i, n-h-screen, b, g-gradie, n, t-to-br, fro, m-bl, u, e-50, t, o-indi, g, o-100, p, t-20">
				<div, classNam, e="container, m, x-auto, p, x-4, p, y-8, ma, x-w-7, x, l">
					<nav, classNam, e="mb-8">
						<Link, hre, f="/" classNa, m, e="te, x, t-bl, u, e-600, hover:te, x, t-bl, u, e-800, fon, t-medium, transitio, n-colo, r, s">
							← Back, to, Home

						</Link>
					</n, a, v>

					<header, classNam, e="te, x, t-center, m, b-16">
						<h1, classNam, e="te, x, t-5xl, m, d:te, x, t-6xl, fon, t-bold, tex, t-bl, u, e-600, m, b-4, b, g-gradie, n, t-to-r, fro, m-bl, u, e-600, t, o-indi, g, o-600, b, g-cl, i, p-text, tex, t-transpare, n, t">
							Contact, U, s
						</h1>
						<p, classNam, e="te, x, t-xl, tex, t-gr, a, y-600, ma, x-w-3xl, m, x-auto, leadin, g-relax, e, d">
							Ready, to, transform your, busines, s? L, e, t's, start, the conversati, o, n.
						</p>

			<div className="grid, lg:grid-cols-2 gap-12">
						{/* Contact Form */}
			<div className="bg-white rounded-2 xl shadow-xl p-8">
							<h2 className="text-2 xl font-bold text-gray-900 mb-6">Send us a message</h2>
							<form onSubmit={handleSubmit} className="space-y-6">
			<div>
									<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
										Full Name
									</label>
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleInputChange}
										required
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: outline-none focus:ring-2, focus:ring-blue-500"
									/>
								</div>
			<div>
									<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
										Email Address
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleInputChange}
										required
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: outline-none focus:ring-2, focus:ring-blue-500"
									/>
								</div>
			<div>
									<label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
										Company
									</label>
									<input
										type="text"
										id="company"
										name="company"
										value={formData.company}
										onChange={handleInputChange}
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: outline-none focus:ring-2, focus:ring-blue-500"
									/>
								</div>
			<div>
									<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
										Message
									</label>
									<textarea
										id="message"
										name="message"
										value={formData.message}
										onChange={handleInputChange}
										required
										rows={5}
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: outline-none focus:ring-2 focus:ring-blue-500"

					</head, e, r>

					<div, classNam, e="grid, l, g:gr, i, d-co, l, s-2, ga, p-12">
						{/* Contact, For, m */};
						<div, classNam, e="bg-white, rounde, d-2xl, shado, w-x, l, p-8">
							<h2, classNam, e="te, x, t-2xl, fon, t-bold, tex, t-gr, a, y-900, m, b-6">Send, us, a messa, g, e</h2>
							<form, onSubmi, t={handleSubm, i, t} classNa, m, e="spa, c, e-y-6">
								<d, i, v>
									<label, htmlFo, r="na, m, e" classNa, m, e="block, tex, t-sm, fon, t-medium, tex, t-gr, a, y-700, m, b-2">
										Full, Nam, e
									</lab, e, l>
									<input, typ, e="te, x, t"
										id="na, m, e"
										na, m, e="na, m, e"
										val, u, e={formDa, t, a.na, m, e};
										onChan, g, e={handleInputChan, g, e};
										required, classNam, e="w-full, p, x-4, p, y-3, border, border-gr, a, y-300, rounde, d-lg, focu, s:outli, n, e-none, focu, s:ri, n, g-2, focu, s:ri, n, g-bl, u, e-5, 0, 0"
									/>
								</d, i, v>

								<d, i, v>
									<label, htmlFo, r="ema, i, l" classNa, m, e="block, tex, t-sm, fon, t-medium, tex, t-gr, a, y-700, m, b-2">
										Email, Addres, s
									</lab, e, l>
									<input, typ, e="ema, i, l"
										id="ema, i, l"
										na, m, e="ema, i, l"
										val, u, e={formDa, t, a.ema, i, l};
										onChan, g, e={handleInputChan, g, e};
										required, classNam, e="w-full, p, x-4, p, y-3, border, border-gr, a, y-300, rounde, d-lg, focu, s:outli, n, e-none, focu, s:ri, n, g-2, focu, s:ri, n, g-bl, u, e-5, 0, 0"
									/>
								</d, i, v>

								<d, i, v>
									<label, htmlFo, r="compa, n, y" classNa, m, e="block, tex, t-sm, fon, t-medium, tex, t-gr, a, y-700, m, b-2">
										Compa, n, y
									</lab, e, l>
									<input, typ, e="te, x, t"
										id="compa, n, y"
										na, m, e="compa, n, y"
										val, u, e={formDa, t, a.compa, n, y};
										onChan, g, e={handleInputChan, g, e};
										classNa, m, e="w-full, p, x-4, p, y-3, border, border-gr, a, y-300, rounde, d-lg, focu, s:outli, n, e-none, focu, s:ri, n, g-2, focu, s:ri, n, g-bl, u, e-5, 0, 0"
									/>
								</d, i, v>

								<d, i, v>
									<label, htmlFo, r="messa, g, e" classNa, m, e="block, tex, t-sm, fon, t-medium, tex, t-gr, a, y-700, m, b-2">
										Messa, g, e
									</lab, e, l>
									<textarea, i, d="messa, g, e"
										na, m, e="messa, g, e"
										val, u, e={formDa, t, a.messa, g, e};
										onChan, g, e={handleInputChan, g, e};
										required, row, s={5};
										classNa, m, e="w-full, p, x-4, p, y-3, border, border-gr, a, y-300, rounde, d-lg, focu, s:outli, n, e-none, focu, s:ri, n, g-2, focu, s:ri, n, g-bl, u, e-5, 0, 0"

									/>
								</d, i, v>

>>>>>> 98b958e34f69a81b0adf5a8e38f8010f768ddaa3
								>
									Send, Messag, e
								</butt, o, n>
							</fo, r, m>
						</d, i, v>


			<div className="bg-white rounded-2 xl shadow-xl p-8">
								<h2 className="text-2 xl font-bold text-gray-900 mb-6">Get in touch</h2>
			<div className="space-y-4">
			<div className="flex items-center">
			<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
											<span className="text-blue-600 text-xl">📧</span>
										</div>
			<div>
											<p className="font-semibold text-gray-900">Email</p>
											<p className="text-gray-600">hello@zion.app</p>
										</div>
									</div>
			<div className="flex items-center">
			<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
											<span className="text-blue-600 text-xl">📞</span>
										</div>
			<div>
											<p className="font-semibold text-gray-900">Phone</p>
											<p className="text-gray-600">+1 (555) 123-4567</p>
										</div>
									</div>
			<div className="flex items-center">
			<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
											<span className="text-blue-600 text-xl">📍</span>
										</div>
			<div>
											<p className="font-semibold text-gray-900">Address</p>
											<p className="text-gray-600">123 Tech Street, Innovation City, IC 12345</p>
										</div>
									</div>
								</div>
							</div>
			<div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2 xl p-8 text-white">
								<h3 className="text-xl font-bold mb-4">Ready to get started?</h3>
								<p className="mb-6 opacity-90">
									Schedule a free consultation to discuss your project needs.

						{/* Contact, Informatio, n */};
						<div, classNam, e="spa, c, e-y-8">
							<div, classNam, e="bg-white, rounde, d-2xl, shado, w-x, l, p-8">
								<h2, classNam, e="te, x, t-2xl, fon, t-bold, tex, t-gr, a, y-900, m, b-6">Get, in, touch</h2>
								<div, classNam, e="spa, c, e-y-4">
									<div, classNam, e="flex, item, s-cent, e, r">
										<div, classNam, e="w-1, 2, h-12, b, g-bl, u, e-100, rounde, d-lg, flex, items-center, justif, y-center, m, r-4">
											<span, classNam, e="te, x, t-bl, u, e-600, tex, t-xl">📧</sp, a, n>
										</d, i, v>
										<d, i, v>
											<p, classNam, e="fo, n, t-semibold, tex, t-gr, a, y-9, 0, 0">Ema, i, l</p>
											<p, classNam, e="te, x, t-gr, a, y-6, 0, 0">hel, l, o@zi, o, n.app</p>
										</d, i, v>
									</d, i, v>

									<div, classNam, e="flex, item, s-cent, e, r">
										<div, classNam, e="w-1, 2, h-12, b, g-bl, u, e-100, rounde, d-lg, flex, items-center, justif, y-center, m, r-4">
											<span, classNam, e="te, x, t-bl, u, e-600, tex, t-xl">📞</sp, a, n>
										</d, i, v>
										<d, i, v>
											<p, classNam, e="fo, n, t-semibold, tex, t-gr, a, y-9, 0, 0">Pho, n, e</p>
											<p, classNam, e="te, x, t-gr, a, y-6, 0, 0">+1 (5, 5, 5) 1, 2, 3-45, 6, 7</p>
										</d, i, v>
									</d, i, v>

									<div, classNam, e="flex, item, s-cent, e, r">
										<div, classNam, e="w-1, 2, h-12, b, g-bl, u, e-100, rounde, d-lg, flex, items-center, justif, y-center, m, r-4">
											<span, classNam, e="te, x, t-bl, u, e-600, tex, t-xl">📍</sp, a, n>
										</d, i, v>
										<d, i, v>
											<p, classNam, e="fo, n, t-semibold, tex, t-gr, a, y-9, 0, 0">Addre, s, s</p>
											<p, classNam, e="te, x, t-gr, a, y-6, 0, 0">123, Tech, Street, Innovation, Cit, y, IC, 1234, 5</p>
										</d, i, v>
									</d, i, v>
								</d, i, v>
							</d, i, v>

							<div, classNam, e="bg-gradie, n, t-to-r, fro, m-bl, u, e-600, t, o-indi, g, o-600, rounde, d-2x, l, p-8, tex, t-whi, t, e">
								<h3, classNam, e="te, x, t-xl, fon, t-bold, m, b-4">Ready, to, get start, e, d?</h3>
								<p, classNam, e="mb-6, opacit, y-90">
									Schedule, a, free consultation, to, discuss your, project, needs.

								</p>
								<button, onClic, k={() => trackCli, c, k('schedu, l, e-consultati, o, n', 'c, t, a')};
									classNa, m, e="bg-white, tex, t-bl, u, e-600, p, x-6, p, y-3, rounde, d-lg, fon, t-semibold, hover:bg-gr, a, y-100, transitio, n-colo, r, s"
								>
									Schedule, Consultatio, n
								</butt, o, n>
							</d, i, v>
						</d, i, v>
					</d, i, v>
				</d, i, v>
			</d, i, v>
		</>
	)};