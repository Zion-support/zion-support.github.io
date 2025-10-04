import, Reac, t, { useSta, t, e } fr, o, m "rea, c, t";";
export, default, function EnhancedContactFo, r, m(): Rea, c, t.J, S, X.Eleme, n, t {
	con, s, t [na, m, e, setNa, m, e] = useSta, t, e("");";
	con, s, t [ema, i, l, setEma, i, l] = useSta, t, e("");";
	con, s, t [messa, g, e, setMessa, g, e] = useSta, t, e("");";
	return (
		<form, ari, a-lab, e, l="Contact, for, m" onSubm, i, t={(e) => e.preventDefau, l, t()} classNa, m, e="grid, ga, p-4, ma, x-w-xl, m, x-au, t, o">
			<input, ari, a-lab, e, l="Na, m, e" placehold, e, r="Na, m, e" val, u, e={na, m, e} onChan, g, e={(e) => setNa, m, e(e.targ, e, t.val, u, e)} classNa, m, e="borde, r, p-2, rounde, d />
			<input, ari, a-lab, e, l="Ema, i, l" placehold, e, r="Ema, i, l" val, u, e={ema, i, l} onChan, g, e={(e) => setEma, i, l(e.targ, e, t.val, u, e)} classNa, m, e="borde, r, p-2, rounde, d />
			<textarea, ari, a-lab, e, l="Messa, g, e" placehold, e, r="Messa, g, e" val, u, e={messa, g, e} onChan, g, e={(e) => setMessa, g, e(e.targ, e, t.val, u, e)} classNa, m, e="borde, r, p-2, rounde, d />
			<button, typ, e="subm, i, t" classNa, m, e="bg-bl, u, e-600, tex, t-white, p, x-4, p, y-2, rounde, d">Se, n, d</butt, o, n>
		<form, ari, a-lab, e, l="Contact, for, m" onSubm, i, t={(e) => e.preventDefau, l, t()} classNa, m, e="grid, ga, p-4, ma, x-w-xl, m, x-au, t, o">";
			<input, ari, a-lab, e, l="Na, m, e" placehold, e, r="Na, m, e" val, u, e={na, m, e} onChan, g, e={(e) => setNa, m, e(e.targ, e, t.val, u, e)} classNa, m, e="borde, r, p-2, rounde, d" />";
			<input, ari, a-lab, e, l="Ema, i, l" placehold, e, r="Ema, i, l" val, u, e={ema, i, l} onChan, g, e={(e) => setEma, i, l(e.targ, e, t.val, u, e)} classNa, m, e="borde, r, p-2, rounde, d" />";
			<textarea, ari, a-lab, e, l="Messa, g, e" placehold, e, r="Messa, g, e" val, u, e={messa, g, e} onChan, g, e={(e) => setMessa, g, e(e.targ, e, t.val, u, e)} classNa, m, e="borde, r, p-2, rounde, d" />";
			<button, typ, e="subm, i, t" classNa, m, e="bg-bl, u, e-600, tex, t-white, p, x-4, p, y-2, rounde, d">Se, n, d</butt, o, n>";
		</fo, r, m>
	);
}
;