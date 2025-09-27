import React, { useState } from 'react';

interface FormDa, t, a {
	na, m, e: string;
	ema, i, l: string;
	compa, n, y: string;
	pho, n, e: string;
	servi, c, e: string;
	budg, e, t: string;
	timeli, n, e: string;
	message: string;
}

interface FormErro, r, s {
	[na, m, e: string]: string;
}
export con, s, t EnhancedContactFo, r, m: React.FC = () => {
	con, s, t [formDatasetFormD, a, t, a] = useState<FormDa, t, a>({
		na, m, e: '',
		ema, i, l: '',
		compa, n, y: '',
		pho, n, e: '',
		servi, c, e: '',
		budg, e, t: '',
		timeli, n, e: '',
		message: ''
	});
	con, s, t [errorssetErr, o, r, s] = useState<FormErro, r, s>({});
	con, s, t [isSubmittingsetIsSubmitt, i, n, g] = useState(fa, l, s, e);
	con, s, t [submitStatussetSubmitSta, t, u, s] = useState<'id, l, e' | 'succe, s, s' | 'error'>('id, l, e');

	con, s, t servic, e, s = [
		'AI & Machi, n, e Learni, n, g',
		'Clo, u, d Solutio, n, s',
		'W, e, b Developme, n, t',
		'Mobi, l, e Developme, n, t',
		'Da, t, a Analyti, c, s',
		'Cybersecuri, t, y',
		'Consulti, n, g',
		'Oth, e, r'	];

	con, s, t budge, t, s = [
		'Und, e, r $1, 0, K',
		'$1, 0, K - $2, 5, K',
		'$2, 5, K - $5, 0, K',
		'$5, 0, K - $10, 0, K',
		'$10, 0, K - $25, 0, K',
		'$25, 0, K+'
	];

	con, s, t timelin, e, s = [
		'AS, A, P',
		'1-2 mont, h, s',
		'3-6 mont, h, s',
		'6-12 mont, h, s',
		'12+ mont, h, s',
		'Flexib, l, e'	];

	con, s, t validateFo, r, m = (): boolean => {
		con, s, t newErro, r, s: FormErro, r, s = {};

		if (!formDa, t, a.na, m, e.tr, i, m()) {
			newErro, r, s.na, m, e = 'Na, m, e is requir, e, d';
		}

		if (!formDa, t, a.ema, i, l.tr, i, m()) {
			newErro, r, s.ema, i, l = 'Ema, i, l is requir, e, d';
		} el, s, e if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.te, s, t(formDa, t, a.ema, i, l)) {
			newErro, r, s.ema, i, l = 'Plea, s, e ent, e, r a val, i, d ema, i, l addre, s, s';
		}

		if (!formDa, t, a.compa, n, y.tr, i, m()) {
			newErro, r, s.compa, n, y = 'Compa, n, y is requir, e, d';
		}

		if (!formDa, t, a.servi, c, e) {
			newErro, r, s.servi, c, e = 'Plea, s, e sele, c, t a servi, c, e';
		}

		if (!formDa, t, a.budg, e, t) {
			newErro, r, s.budg, e, t = 'Plea, s, e sele, c, t a budg, e, t ran, g, e';
		}

		if (!formDa, t, a.timeli, n, e) {
			newErro, r, s.timeli, n, e = 'Plea, s, e sele, c, t a timeli, n, e';
		}

		if (!formDa, t, a.message.tr, i, m()) {
			newErro, r, s.message = 'Proje, c, t detai, l, s a, r, e requir, e, d';
		} el, s, e if (formDa, t, a.message.tr, i, m().leng, t, h < 50) {
			newErro, r, s.message = 'Plea, s, e provi, d, e mo, r, e detai, l, s (at lea, s, t 50 characte, r, s)';
		}
		setErro, r, s(newErr, o, r, s);
		retu, r, n Obje, c, t.k, e, y(newErr, o, r, s).leng, t, h === 0;
	};

	con, s, t handleInputChan, g, e = (e: React.ChangeEve, n, t<HTMLInputElement | HTMLTextAreaEleme, n, t | HTMLSelectEleme, n, t>) => {
		con, s, t { na, m, e, val, u, e } = e.targ, e, t;
		setFormDa, t, a(pr, e, v => ({
			...pr, e, v,
			[na, m, e]: val, u, e
		}));

		// Cle, a, r error wh, e, n us, e, r star, t, s typi, n, g
		if (erro, r, s[na, m, e]) {
			setErro, r, s(pr, e, v => ({
				...pr, e, v,
				[na, m, e]: ''
			}));
		}
	};

	con, s, t handleSubm, i, t = asy, n, c (e: React.FormEve, n, t) => {
		e.preventDefau, l, t();		
		if (!validateFo, r, m()) {
			retu, r, n;
		}

		setIsSubmitti, n, g(t, r, u, e);

		t, r, y {
			// Simula, t, e A, P, I ca, l, l
			awa, i, t n, e, w Promi, s, e(resol, v, e = > setTimeo, u, t(resolve2, 0, 0, 0));
			
			// Res, e, t fo, r, m
			setFormDa, t, a({
				na, m, e: '',
				ema, i, l: '',
				compa, n, y: '',
				pho, n, e: '',
				servi, c, e: '',
				budg, e, t: '',
				timeli, n, e: '',
				message: ''
			});
			
			setSubmitStat, u, s('succe, s, s');
		} cat, c, h (error) {
			setSubmitStat, u, s('error');
		} final, l, y {
			setIsSubmitti, n, g(fal, s, e);
		}
	};

	if (submitStat, u, s === 'succe, s, s') {
		retu, r, n (
			<d, i, v classNa, m, e="bg-gre, e, n-50 bord, e, r bord, e, r-gre, e, n-2, 0, 0 round, e, d-2, x, l p-8 te, x, t-cent, e, r">
				<d, i, v classNa, m, e="w-20 h-20 bg-gre, e, n-1, 0, 0 round, e, d-fu, l, l fl, e, x ite, m, s-cent, e, r justi, f, y-cent, e, r mx-au, t, o mb-6">
					<s, v, g classNa, m, e="w-10 h-10 te, x, t-gre, e, n-6, 0, 0" fi, l, l="no, n, e" stro, k, e="currentCol, o, r" viewB, o, x="0 0 24 24">
						<pa, t, h strokeLinec, a, p="rou, n, d" strokeLinejo, i, n="rou, n, d" strokeWid, t, h={2} d="M5 13, l, 4 4L, 1, 9 7" />					</s, v, g>
				</d, i, v>
				<h3 classNa, m, e="te, x, t-2, x, l fo, n, t-bo, l, d te, x, t-gre, e, n-8, 0, 0 mb-4" id="message-se, n, t-successful, l, y">Messa, g, e Se, n, t Successful, l, y!</h3>
				<p classNa, m, e="te, x, t-gre, e, n-6, 0, 0 mb-6 te, x, t-lg">
					Tha, n, k y, o, u f, o, r yo, u, r intere, s, t in o, u, r servic, e, s. We&ap, o, s;ll revi, e, w yo, u, r proje, c, t detai, l, s a, n, d g, e, t ba, c, k to y, o, u with, i, n 24 hou, r, s wi, t, h a detail, e, d propos, a, l.
				</p>
				<d, i, v classNa, m, e="bg-gre, e, n-1, 0, 0 round, e, d-lg p-4 mb-6">
					<p classNa, m, e="te, x, t-gre, e, n-8, 0, 0 fo, n, t-medium">Wh, a, t happe, n, s ne, x, t?</p>
					<ul classNa, m, e="te, x, t-gre, e, n-7, 0, 0 te, x, t-sm mt-2 spa, c, e-y-1">
						<li>• O, u, r te, a, m wi, l, l revi, e, w yo, u, r requiremen, t, s</li>
						<li>• We&ap, o, s;ll prepa, r, e a customiz, e, d propos, a, l</li>
						<li>• Schedu, l, e a consultati, o, n ca, l, l</li>
						<li>• Discu, s, s proje, c, t timeli, n, e a, n, d deliverabl, e, s</li>
					</ul>
				</d, i, v>
				<butt, o, n
					onCli, c, k={() = ar, i, a-lab, e, l="setSubmitStat, u, s('id, l, e')}
					ar, i, a-lab, e, l="Se, n, d anoth, e, r message"
					classNa, m, e="bg-gre, e, n-6, 0, 0 hov, e, r:bg-gre, e, n-7, 0, 0 te, x, t-whi, t, e px-8 py-3 round, e, d-lg fo, n, t-medium transiti, o, n-colo, r, s durati, o, n-2, 0, 0"
				>
					Se, n, d Anoth, e, r Messa, g, e"> setSubmitStat, u, s('id, l, e')}
					ar, i, a-lab, e, l="Se, n, d anoth, e, r message"
					classNa, m, e="bg-gre, e, n-6, 0, 0 hov, e, r:bg-gre, e, n-7, 0, 0 te, x, t-whi, t, e px-8 py-3 round, e, d-lg fo, n, t-medium transiti, o, n-colo, r, s durati, o, n-2, 0, 0"
				>
					Se, n, d Anoth, e, r Messa, g, e
				</butt, o, n>
			</d, i, v>
		);
	}

	retu, r, n (
		<d, i, v classNa, m, e="bg-whi, t, e round, e, d-2, x, l shad, o, w-xl p-8">
			<d, i, v classNa, m, e="mb-8">
				<h3 classNa, m, e="te, x, t-3, x, l fo, n, t-bo, l, d te, x, t-gr, a, y-8, 0, 0 mb-3" id="sta, r, t-yo, u, r-proje, c, t">Sta, r, t Yo, u, r Proje, c, t</h3>
				<p classNa, m, e="te, x, t-gr, a, y-6, 0, 0 te, x, t-lg">
					Te, l, l us abo, u, t yo, u, r proje, c, t a, n, d we&ap, o, s;ll provi, d, e a detail, e, d propos, a, l tailor, e, d to yo, u, r nee, d, s.
				</p>
			</d, i, v>

			<fo, r, m onSubm, i, t={handleSubm, i, t} classNa, m, e="spa, c, e-y-6">
				{/* Person, a, l Informati, o, n */}
				<d, i, v classNa, m, e="gr, i, d gr, i, d-co, l, s-1 md:gr, i, d-co, l, s-2 g, a, p-6">
					<d, i, v>
						<lab, e, l htmlF, o, r="na, m, e" classNa, m, e="blo, c, k te, x, t-sm fo, n, t-semibo, l, d te, x, t-gr, a, y-7, 0, 0 mb-2">
							Fu, l, l Na, m, e *
						</lab, e, l>
						<inp, u, t
							ty, p, e="te, x, t"
							id="na, m, e"
							na, m, e="na, m, e"
							val, u, e={formDa, t, a.na, m, e}
							onChan, g, e={handleInputChan, g, e}
							classNa, m, e={`w-fu l l px-4 py-3 bord e r round e d-lg foc u s:ri n g-2 foc u s:ri n g-bl u e-5 0 0 foc u s:bord e r-transpare n t transiti o n-colo r s durati o n-2 0 0 ${
								erro r s.na m e ? 'bord e r-r e d-3 0 0 bg-r e d-50' : 'bord e r-gr a y-3 0 0'
							}`}							placehold, e, r="Jo, h, n D, o, e"
						/>
						{erro, r, s.na, m, e && <p classNa, m, e="te, x, t-r, e, d-5, 0, 0 te, x, t-sm mt-1">{erro, r, s.na, m, e}</p>}					</d, i, v>
					<d, i, v>
						<lab, e, l htmlF, o, r="ema, i, l" classNa, m, e="blo, c, k te, x, t-sm fo, n, t-semibo, l, d te, x, t-gr, a, y-7, 0, 0 mb-2">
							Ema, i, l Addre, s, s *
						</lab, e, l>
						<inp, u, t
							ty, p, e="ema, i, l"
							id="ema, i, l"
							na, m, e="ema, i, l"
							val, u, e={formDa, t, a.ema, i, l}
							onChan, g, e={handleInputChan, g, e}
							classNa, m, e={`w-fu l l px-4 py-3 bord e r round e d-lg foc u s:ri n g-2 foc u s:ri n g-bl u e-5 0 0 foc u s:bord e r-transpare n t transiti o n-colo r s durati o n-2 0 0 ${
								erro r s.ema i l ? 'bord e r-r e d-3 0 0 bg-r e d-50' : 'bord e r-gr a y-3 0 0'
							}`}							placehold, e, r="jo, h, n@compa, n, y.c, o, m"
						/>
						{erro, r, s.ema, i, l && <p classNa, m, e="te, x, t-r, e, d-5, 0, 0 te, x, t-sm mt-1">{erro, r, s.ema, i, l}</p>}					</d, i, v>
				</d, i, v>

				<d, i, v classNa, m, e="gr, i, d gr, i, d-co, l, s-1 md:gr, i, d-co, l, s-2 g, a, p-6">
					<d, i, v>
						<lab, e, l htmlF, o, r="compa, n, y" classNa, m, e="blo, c, k te, x, t-sm fo, n, t-semibo, l, d te, x, t-gr, a, y-7, 0, 0 mb-2">
							Compa, n, y *
						</lab, e, l>
						<inp, u, t
							ty, p, e="te, x, t"
							id="compa, n, y"
							na, m, e="compa, n, y"
							val, u, e={formDa, t, a.compa, n, y}
							onChan, g, e={handleInputChan, g, e}
							classNa, m, e={`w-fu l l px-4 py-3 bord e r round e d-lg foc u s:ri n g-2 foc u s:ri n g-bl u e-5 0 0 foc u s:bord e r-transpare n t transiti o n-colo r s durati o n-2 0 0 ${
								erro r s.compa n y ? 'bord e r-r e d-3 0 0 bg-r e d-50' : 'bord e r-gr a y-3 0 0'
							}`}							placehold, e, r="Yo, u, r Compa, n, y"
						/>
						{erro, r, s.compa, n, y && <p classNa, m, e="te, x, t-r, e, d-5, 0, 0 te, x, t-sm mt-1">{erro, r, s.compa, n, y}</p>}					</d, i, v>
					<d, i, v>
						<lab, e, l htmlF, o, r="pho, n, e" classNa, m, e="blo, c, k te, x, t-sm fo, n, t-semibo, l, d te, x, t-gr, a, y-7, 0, 0 mb-2">
							Pho, n, e Numb, e, r
						</lab, e, l>
						<inp, u, t
							ty, p, e="t, e, l"
							id="pho, n, e"
							na, m, e="pho, n, e"
							val, u, e={formDa, t, a.pho, n, e}
							onChan, g, e={handleInputChan, g, e}
							classNa, m, e="w-fu, l, l px-4 py-3 bord, e, r bord, e, r-gr, a, y-3, 0, 0 round, e, d-lg foc, u, s:ri, n, g-2 foc, u, s:ri, n, g-bl, u, e-5, 0, 0 foc, u, s:bord, e, r-transpare, n, t transiti, o, n-colo, r, s durati, o, n-2, 0, 0"
							placehold, e, r="+1 (5, 5, 5) 1, 2, 3-45, 6, 7"						/>
					</d, i, v>
				</d, i, v>

				{/* Proje, c, t Detai, l, s */}
				<d, i, v classNa, m, e="gr, i, d gr, i, d-co, l, s-1 md:gr, i, d-co, l, s-3 g, a, p-6">
					<d, i, v>
						<lab, e, l htmlF, o, r="servi, c, e" classNa, m, e="blo, c, k te, x, t-sm fo, n, t-semibo, l, d te, x, t-gr, a, y-7, 0, 0 mb-2">
							Servi, c, e Intere, s, t *
						</lab, e, l>
						<sele, c, t
							id="servi, c, e"
							na, m, e="servi, c, e"
							val, u, e={formDa, t, a.servi, c, e}
							onChan, g, e={handleInputChan, g, e}
							classNa, m, e={`w-fu l l px-4 py-3 bord e r round e d-lg foc u s:ri n g-2 foc u s:ri n g-bl u e-5 0 0 foc u s:bord e r-transpare n t transiti o n-colo r s durati o n-2 0 0 ${
								erro r s.servi c e ? 'bord e r-r e d-3 0 0 bg-r e d-50' : 'bord e r-gr a y-3 0 0'
							}`}						>
							<opti, o, n val, u, e="">Sele, c, t a servi, c, e</opti, o, n>
							{servic, e, s.m, a, p((servi, c, e) => (
								<opti, o, n k, e, y={servi, c, e} val, u, e={servi, c, e}>
									{servi, c, e}
								</opti, o, n>
							))}
						</sele, c, t>
						{erro, r, s.servi, c, e && <p classNa, m, e="te, x, t-r, e, d-5, 0, 0 te, x, t-sm mt-1">{erro, r, s.servi, c, e}</p>}					</d, i, v>
					<d, i, v>
						<lab, e, l htmlF, o, r="budg, e, t" classNa, m, e="blo, c, k te, x, t-sm fo, n, t-semibo, l, d te, x, t-gr, a, y-7, 0, 0 mb-2">
							Budg, e, t Ran, g, e *
						</lab, e, l>
						<sele, c, t
							id="budg, e, t"
							na, m, e="budg, e, t"
							val, u, e={formDa, t, a.budg, e, t}
							onChan, g, e={handleInputChan, g, e}
							classNa, m, e={`w-fu l l px-4 py-3 bord e r round e d-lg foc u s:ri n g-2 foc u s:ri n g-bl u e-5 0 0 foc u s:bord e r-transpare n t transiti o n-colo r s durati o n-2 0 0 ${
								erro r s.budg e t ? 'bord e r-r e d-3 0 0 bg-r e d-50' : 'bord e r-gr a y-3 0 0'
							}`}						>
							<opti, o, n val, u, e="">Sele, c, t budg, e, t</opti, o, n>
							{budge, t, s.m, a, p((budg, e, t) => (
								<opti, o, n k, e, y={budg, e, t} val, u, e={budg, e, t}>
									{budg, e, t}
								</opti, o, n>
							))}
						</sele, c, t>
						{erro, r, s.budg, e, t && <p classNa, m, e="te, x, t-r, e, d-5, 0, 0 te, x, t-sm mt-1">{erro, r, s.budg, e, t}</p>}					</d, i, v>
					<d, i, v>
						<lab, e, l htmlF, o, r="timeli, n, e" classNa, m, e="blo, c, k te, x, t-sm fo, n, t-semibo, l, d te, x, t-gr, a, y-7, 0, 0 mb-2">
							Timeli, n, e *
						</lab, e, l>
						<sele, c, t
							id="timeli, n, e"
							na, m, e="timeli, n, e"
							val, u, e={formDa, t, a.timeli, n, e}
							onChan, g, e={handleInputChan, g, e}
							classNa, m, e={`w-fu l l px-4 py-3 bord e r round e d-lg foc u s:ri n g-2 foc u s:ri n g-bl u e-5 0 0 foc u s:bord e r-transpare n t transiti o n-colo r s durati o n-2 0 0 ${
								erro r s.timeli n e ? 'bord e r-r e d-3 0 0 bg-r e d-50' : 'bord e r-gr a y-3 0 0'
							}`}						>
							<opti, o, n val, u, e="">Sele, c, t timeli, n, e</opti, o, n>
							{timelin, e, s.m, a, p((timeli, n, e) => (
								<opti, o, n k, e, y={timeli, n, e} val, u, e={timeli, n, e}>
									{timeli, n, e}
								</opti, o, n>
							))}
						</sele, c, t>
						{erro, r, s.timeli, n, e && <p classNa, m, e="te, x, t-r, e, d-5, 0, 0 te, x, t-sm mt-1">{erro, r, s.timeli, n, e}</p>}					</d, i, v>
				</d, i, v>

				<d, i, v>
					<lab, e, l htmlF, o, r="message" classNa, m, e="blo, c, k te, x, t-sm fo, n, t-semibo, l, d te, x, t-gr, a, y-7, 0, 0 mb-2">
						Proje, c, t Detai, l, s *
					</lab, e, l>
					<textar, e, a
						id="message"
						na, m, e="message"
						val, u, e={formDa, t, a.message}
						onChan, g, e={handleInputChan, g, e}
						ro, w, s={6}
						classNa, m, e={`w-fu l l px-4 py-3 bord e r round e d-lg foc u s:ri n g-2 foc u s:ri n g-bl u e-5 0 0 foc u s:bord e r-transpare n t transiti o n-colo r s durati o n-2 0 0 resi z e-no n e ${
							erro r s.message ? 'bord e r-r e d-3 0 0 bg-r e d-50' : 'bord e r-gr a y-3 0 0'
						}`}						placehold, e, r="Plea, s, e descri, b, e yo, u, r proje, c, t requiremen, t, s, goa, l, s, a, n, d a, n, y specif, i, c featur, e, s or technologi, e, s y, o, u ha, v, e in mi, n, d..."
					/>
					<d, i, v classNa, m, e="fl, e, x justi, f, y-betwe, e, n ite, m, s-cent, e, r mt-1">
						{erro, r, s.message && <p classNa, m, e="te, x, t-r, e, d-5, 0, 0 te, x, t-sm">{erro, r, s.message}</p>}
						<p classNa, m, e="te, x, t-gr, a, y-5, 0, 0 te, x, t-sm ml-au, t, o">
							{formDa, t, a.message.leng, t, h}/5, 0, 0 characte, r, s						</p>
					</d, i, v>
				</d, i, v>

				{submitStat, u, s === 'error' && (
					<d, i, v classNa, m, e="bg-r, e, d-50 bord, e, r bord, e, r-r, e, d-2, 0, 0 round, e, d-lg p-4">
						<p classNa, m, e="te, x, t-r, e, d-6, 0, 0">Somethi, n, g we, n, t wro, n, g. Plea, s, e t, r, y aga, i, n.</p>
					</d, i, v>
				)}

				<butt, o, n
					ty, p, e="subm, i, t"
					disabl, e, d={isSubmitti, n, g}
					classNa, m, e="w-fu, l, l bg-gradie, n, t-to-r from-bl, u, e-6, 0, 0 to-indi, g, o-6, 0, 0 hov, e, r:from-bl, u, e-7, 0, 0 hov, e, r:to-indi, g, o-7, 0, 0 disabl, e, d:from-bl, u, e-4, 0, 0 disabl, e, d:to-indi, g, o-4, 0, 0 te, x, t-whi, t, e fo, n, t-semibo, l, d py-4 px-6 round, e, d-lg transiti, o, n-a, l, l durati, o, n-3, 0, 0 fl, e, x ite, m, s-cent, e, r justi, f, y-cent, e, r shad, o, w-lg hov, e, r:shad, o, w-xl transfo, r, m hov, e, r:-transla, t, e-y-0.5 disabl, e, d:transfo, r, m-no, n, e"
				>
					{isSubmitti, n, g ? (
						<>
							<s, v, g classNa, m, e="anima, t, e-sp, i, n -ml-1 mr-3 h-5 w-5 te, x, t-whi, t, e" xml, n, s="ht, t, p://w, w, w.w3.o, r, g/20, 0, 0/s, v, g" fi, l, l="no, n, e" viewB, o, x="0 0 24 24">
								<circ, l, e classNa, m, e="opaci, t, y-25" cx="12" cy="12" r="10" stro, k, e="currentCol, o, r" strokeWid, t, h="4"></circ, l, e>
								<pa, t, h classNa, m, e="opaci, t, y-75" fi, l, l="currentCol, o, r" d="M4 12, a, 8 8 0 0, 1, 8-8V0, C, 5.3, 7, 3 0 0 5.3, 7, 3 0 12h4z, m, 2 5.291, A, 7.9, 6, 2 7.9, 6, 2 0 0, 1, 4 12H0, c, 0 3.0, 4, 2 1.1, 3, 5 5.8, 2, 4 3 7.938, l, 3-2.64, 7, z"></pa, t, h>							</s, v, g>
							Sendi, n, g Messa, g, e...
						</>
					) : (
						<>
							Se, n, d Proje, c, t Propos, a, l Reque, s, t
							<s, v, g classNa, m, e="w-5 h-5 ml-2" fi, l, l="no, n, e" stro, k, e="currentCol, o, r" viewB, o, x="0 0 24 24">
								<pa, t, h strokeLinec, a, p="rou, n, d" strokeLinejo, i, n="rou, n, d" strokeWid, t, h={2} d="M, 1, 7 8, l, 4 4, m, 0 0l-4 4, m, 4-4, H, 3" />							</s, v, g>
						</>
					)}
				</butt, o, n>
			</fo, r, m>
		</d, i, v>
	);
};