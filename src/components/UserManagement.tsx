>>>>>> 45ce5fae8a680d713f034d877aa81b1d405b5, 7, 6, 3

interf, a, c, e, Us, e, r {i, d: str, i, n, g;
  name: str, i, n, g;
  email: str, i, n, g;
  r, o, l, e: "ad, m, i, n" | "u, s, e, r" | "modera, t, o, r" | "gu, e, s, t";
  sta, t, u, s: "act, i, v, e" | "inact, i, v, e" | "pend, i, n, g" | "suspen, d, e, d";
  a, v, a, t, a, r?: s, t, r, i, n, g;
  last, L, o, g, i, n?: D, a, t, e;
  create, d, A, t: D, a, t, e;
  permissi, o, n, s: s, t, r, i, n, g[];
  depar, t, m, e, n, t?: s, t, r, i, n, g;
 v, o, i, d;
  onUserD, e, l, e, t, e?: (use, r, I, d: s, t, r, i, n, g) => v, o, i, d;
  onUserCre, a, t, e?: (u, s, e, r: O, m, i, t<U, s, e, r "i, d' | "create, d, A, t">) => v, o, i, d};

  ph, o, n, e?: str, i, n, g};
interf, a, c, e, UserManagementP, r, o, p, s {classN, a, m, e?: s, t, r, i, n, g;
  onUserU, p, d, a, t, e?: (u, s, e, r: U, s, e, r) => v, o, i, d;
  onUserDel, e, t, e?: (use, r, I, d: str, i, n, g) => v, o, i, d;  onUserCre, a, t, e?: (u, s, e, r: O, m, i, t<U, s, e, r "i, d' | "create, d, A, t">) => v, o, i, d};

exportconstUserManagem, e, n, t: React.F, C<UserManagementPr, o, p, s> = ({classN, a, m, e = '"}) => {const [userssetUs, e, r, s] = useState<U, s, e, r[]>([]);
  const [isLoadingsetIsLoad, i, n, g] = useState(true);
  const [searchTermsetSearchT, e, r, m] = useState("');
  const [filterRolesetFilterR, o, l, e] = useState<str, i, n, g>("al, l");
  const [filterStatussetFilterSta, t, u, s] = useState<str, i, n, g>("al, l");
  const [sortBysetSor, t, B, y] = useState<'n, a, m, e' | "em, a, i, l" | "r, o, l, e" | "sta, t, u, s" | "lastLo, g, i, n">("n, a, m, e");
  const [sortOrdersetSortOr, d, e, r] = useState<'as, c' | "d, e, s, c">("as, c");
  const [selectedUserssetSelectedU, s, e, r, s] = useState<str, i, n, g[]>([]);
  const [showCreateModalsetShowCreateMo, d, a, l] = useState(f, a, l, s, e);
  const [editin, g, U, s, e, r, setEditin, g, U, s, e, r] = useState<U, s, e, r | null>(null);
 [{

 [{

      i, d: "1'name: "J, o, hn, D, o, e"email: "j, o, h, n.d, o, e@exam, p, l, e.co, m"r, o, l, e: "ad, m, i, n"sta, t, u, s: "act, i, v, e"ava, t, a, r: "ht, t, p, s:// i, m, a, g, e, s.uns, p, l, a, s, h.c, o, m/ph, o, t, o-14720996, 4, 5, 7, 8, 5-5658abf, 4, f, f, 4, e? w=3, 2&h=3, 2&f, i, t=c, r, o, p&c, r, o, p=f, a, c, e" : lastLo, g, i, n: newD, a, t, e()("2, 0, 2, 4-0, 1-1, 5"),
      create, d, A, t: newD, a, t, e()("2, 0, 2, 3-0, 6-0, 1")permissi, o, n, s: ["r, e, a, d""wr, i, t, e""del, e, t, e""ad, m, i, n"]departm, e, n, t: "Engineer, i, n, g"ph, o, n, e: "+1-55, 5-0, 1, 2, 3"}{i, d: '2'name: "J, a, neSm, i, t, h"email: "j, a, n, e.sm, i, t, h@exam, p, l, e.co, m"r, o, l, e: "u, s, e, r"sta, t, u, s: "act, i, v, e"ava, t, a, r: "ht, t, p, s:// i, m, a, g, e, s.uns, p, l, a, s, h.c, o, m/ph, o, t, o-14947901, 0, 8, 7, 5, 5-2616b61, 2, b, 7, 8, 6? w=3, 2&h=3, 2&f, i, t=c, r, o, p&c, r, o, p=f, a, c, e" : lastLo, g, i, n: newD, a, t, e()("2, 0, 2, 4-0, 1-1, 4")create, d, A, t: newD, a, t, e()("2, 0, 2, 3-0, 7-1, 5")permissi, o, n, s: ["r, e, a, d""wr, i, t, e"]departm, e, n, t: "Market, i, n, g"ph, o, n, e: "+1-55, 5-0, 1, 2, 4"}{i, d: '3'name: "M, i, keJohn, s, o, n"email: "m, i, k, e.jo, h, n, s, o, n@exam, p, l, e.co, m"r, o, l, e: "modera, t, o, r"sta, t, u, s: "pend, i, n, g"ava, t, a, r: "ht, t, p, s:// i, m, a, g, e, s.uns, p, l, a, s, h.c, o, m/ph, o, t, o-15070032, 1, 1, 1, 6, 9-0a1dd72, 2, 8, f, 2, d? w=3, 2&h=3, 2&f, i, t=c, r, o, p&c, r, o, p=f, a, c, e" : lastLo, g, i, n: newD, a, t, e()("2, 0, 2, 4-0, 1-1, 0")create, d, A, t: newD, a, t, e()("2, 0, 2, 3-0, 8-2, 0")permissi, o, n, s: ["r, e, a, d""wr, i, t, e""moder, a, t, e"]departm, e, n, t: "Supp, o, r, t"ph, o, n, e: "+1-55, 5-0, 1, 2, 5"}{i, d: '4'name: "Sa, r, ahWil, s, o, n"email: "sa, r, a, h.w, i, l, s, o, n@exam, p, l, e.co, m"r, o, l, e: "u, s, e, r"sta, t, u, s: "inact, i, v, e"ava, t, a, r: "ht, t, p, s:// i, m, a, g, e, s.uns, p, l, a, s, h.c, o, m/ph, o, t, o-14387616, 8, 1, 0, 3, 3-6461ffa, d, 8, d, 8, 0? w=3, 2&h=3, 2&f, i, t=c, r, o, p&c, r, o, p=f, a, c, e" : lastLo, g, i, n: newD, a, t, e()("2, 0, 2, 3-1, 2-0, 1")create, d, A, t: newD, a, t, e()("2, 0, 2, 3-0, 5-1, 0")permissi, o, n, s: ['r, e, a, d']departm, e, n, t: "Sa, l, e, s"ph, o, n, e: "+1-55, 5-0, 1, 2, 6"}{i, d: '5'name: "Da, v, idBr, o, w, n"email: "da, v, i, d.br, o, w, n@exam, p, l, e.co, m"r, o, l, e: "gu, e, s, t"sta, t, u, s: "suspen, d, e, d"ava, t, a, r: "ht, t, p, s:// i, m, a, g, e, s.uns, p, l, a, s, h.c, o, m/ph, o, t, o-15006487, 6, 7, 7, 9, 1-00dcc99, 4, a, 4, 3, e? w=3, 2&h=3, 2&f, i, t=c, r, o, p&c, r, o, p=f, a, c, e" : lastLo, g, i, n: newD, a, t, e()("2, 0, 2, 3-1, 1-1, 5")create, d, A, t: newD, a, t, e()("2, 0, 2, 3-0, 9-0, 1")permissi, o, n, s: ['r, e, a, d']departm, e, n, t: 'H, R'ph, o, n, e: "+1-55, 5-0, 1, 2, 7"}][]);
  useEffect(() => {// Sim, u, l, a, t, e, AP, I, callconst, ti, m, e, r = setTime, o, u, t(() => {
      setUs, e, r, s(mock, U, s, e, r, s);

  // M, o, c, k, d, a, t, a - inarealappthiswouldcomefro, m, a, n APIconstmockUs, e, r, s: U, s, e, r[] = useM, e, m, o(() => [{

      i, d: "1'name: "J, o, hn, D, o, e"email: "j, o, h, n.do, e@exam, p, l, e.co, m"r, o, l, e: "ad, m, i, n"sta, t, u, s: "act, i, v, e"ava, t, a, r: "ht, t, p, s:// i, m, a, g, e, s.uns, p, l, a, s, h.c, o, m/ph, o, t, o-14720996, 4, 5, 7, 8, 5-5658abf, 4, f, f, 4, e? w=3, 2&h=3, 2&fi, t=c, r, o, p&c, r, o, p=f, a, c, e" : last, L, o, g, i, n : ne, w, D, a, t, e()("2, 0, 2, 4-0, 1-1, 5")create, d, A, t: newD, a, t, e()("2, 0, 2, 3-0, 6-0, 1")permissi, o, n, s: ["r, e, a, d""wr, i, t, e""del, e, t, e""ad, m, i, n"]departm, e, n, t: "Engineer, i, n, g"ph, o, n, e: "+1-55, 5-0, 1, 2, 3"}{i, d: '2'name: "J, a, neSm, i, t, h"email: "j, a, n, e.sm, i, t, h@exam, p, l, e.co, m"r, o, l, e: "u, s, e, r"sta, t, u, s: "act, i, v, e"ava, t, a, r: "ht, t, p, s:// i, m, a, g, e, s.uns, p, l, a, s, h.c, o, m/ph, o, t, o-14947901, 0, 8, 7, 5, 5-2616b61, 2, b, 7, 8, 6? w=3, 2&h=3, 2&fi, t=c, r, o, p&c, r, o, p=f, a, c, e" : last, L, o, g, i, n : ne, w, D, a, t, e()("2, 0, 2, 4-0, 1-1, 4")create, d, A, t: newD, a, t, e()("2, 0, 2, 3-0, 7-1, 5")permissi, o, n, s: ["r, e, a, d""wr, i, t, e"]departm, e, n, t: "Market, i, n, g"ph, o, n, e: "+1-55, 5-0, 1, 2, 4"}{i, d: '3'name: "M, i, keJohn, s, o, n"email: "m, i, k, e.john, s, o, n@exam, p, l, e.co, m"r, o, l, e: "modera, t, o, r"sta, t, u, s: "pend, i, n, g"ava, t, a, r: "ht, t, p, s:// i, m, a, g, e, s.uns, p, l, a, s, h.c, o, m/ph, o, t, o-15070032, 1, 1, 1, 6, 9-0a1dd72, 2, 8, f, 2, d? w=3, 2&h=3, 2&fi, t=c, r, o, p&c, r, o, p=f, a, c, e" : last, L, o, g, i, n : ne, w, D, a, t, e()("2, 0, 2, 4-0, 1-1, 0")create, d, A, t: newD, a, t, e()("2, 0, 2, 3-0, 8-2, 0")permissi, o, n, s: ["r, e, a, d""wr, i, t, e""moder, a, t, e"]departm, e, n, t: "Supp, o, r, t"ph, o, n, e: "+1-55, 5-0, 1, 2, 5"}{i, d: '4'name: "Sa, r, ahWil, s, o, n"email: "sa, r, a, h.wil, s, o, n@exam, p, l, e.co, m"r, o, l, e: "u, s, e, r"sta, t, u, s: "inact, i, v, e"ava, t, a, r: "ht, t, p, s:// i, m, a, g, e, s.uns, p, l, a, s, h.c, o, m/ph, o, t, o-14387616, 8, 1, 0, 3, 3-6461ffa, d, 8, d, 8, 0? w=3, 2&h=3, 2&fi, t=c, r, o, p&c, r, o, p=f, a, c, e" : last, L, o, g, i, n : ne, w, D, a, t, e()("2, 0, 2, 3-1, 2-0, 1")create, d, A, t: newD, a, t, e()("2, 0, 2, 3-0, 5-1, 0")permissi, o, n, s: ['r, e, a, d']departm, e, n, t: "Sa, l, e, s"ph, o, n, e: "+1-55, 5-0, 1, 2, 6"}{i, d: '5'name: "Da, v, idBr, o, w, n"email: "da, v, i, d.br, o, w, n@exam, p, l, e.co, m"r, o, l, e: "gu, e, s, t"sta, t, u, s: "suspen, d, e, d"ava, t, a, r: "ht, t, p, s:// i, m, a, g, e, s.uns, p, l, a, s, h.c, o, m/ph, o, t, o-15006487, 6, 7, 7, 9, 1-00dcc99, 4, a, 4, 3, e? w=3, 2&h=3, 2&fi, t=c, r, o, p&c, r, o, p=f, a, c, e" : last, L, o, g, i, n : ne, w, D, a, t, e()("2, 0, 2, 3-1, 1-1, 5")create, d, A, t: newD, a, t, e()("2, 0, 2, 3-0, 9-0, 1")permissi, o, n, s: ['r, e, a, d']departm, e, n, t: 'H, R'ph, o, n, e: "+1-55, 5-0, 1, 2, 7"}][]);
  useEffect(() => {// Sim, u, l, a, t, e, AP, I, callconst, ti, m, e, r = setTi, m, e, o, u, t(() => {
      set, U, s, e, r, s(mock, U, s, e, r, s);

      setIsLoad, i, n, g(false)}1, 0, 0, 0);
    return () => clearTi, m, e, o, u, t(ti, m, e, r)}[mockUs, e, r, s]);

  const, filteredU, s, e, r, s = us, e, r, s.f, i, l, t, e, r(u, s, e, r => {constmatchesS, e, a, r, c, h = u, s, e, r.n, a, m, e.toLowe, r, C, a, s, e().inc, l, u, d, e, s(searc, h, T, e, r, m.toLowe, r, C, a, s, e()) ||
                         u, s, e, r.em, a, i, l.toLowe, r, C, a, s, e().inc, l, u, d, e, s(searc, h, T, e, r, m.toLowerC, a, s, e());
    constmatchesR, o, l, e = filterR, o, l, e === "al, l" || u, s, e, r.r, o, l, e === filte, r, R, o, l, e;
    co, n, stmatchesSta, t, u, s = filterSta, t, u, s === "al, l"|| u, s, e, r.s, t, a, t, u, s === filterS, t, a, t, u, s;    
    r, e, t, u, r, n, matchesS, e, a, r, c, h && matchesR, o, l, e && matchesSta, t, u, s});

  constsortedUs, e, r, s = [...filteredUs, e, r, s].s, o, r, t((a, b) => {letaVa, l, u, e: an, y = a[sor, t, B, y];
    letbVa, l, u, e: an, y = b[sor, t, B, y];
    
    i, f (sor, t, B, y === "lastLo, g, i, n") {
      a, V, a, l, u, e = a.last, L, o, g, i, n? .ge, t, T, i, m, e() || 0;
      bVa, l, u, e = b.lastLo, g, i, n?.getT, i, m, e() || 0};
    i, f (typ, e, o, f === aVa, l, u, e === "str, i, n, g") {a, V, a, l, u, e = a, V, a, l, u, e.toLowerC, a, s, e();
      bVa, l, u, e = bVa, l, u, e.toLowerC, a, s, e()};
    i, f (sortOr, d, e, r === "as, c") {return : aVa, l, u, e < bVa, l, u, e ? -1  : aVa, l, u, e > bVa, l, u, e ? 1 : 0} e, l, s, e {returnaVa, l, u, e > bVa, l, u, e ? -1 : aVa, l, u, e < bVa, l, u, e ? 1 : 0}});
 {handleUserSel, e, c, t.displayN, a, m, e = "handleUserSel, e, c, t";setSelectedUs, e, r, s(pr, e, v => 

  const, handleUserS, e, l, e, c, t = (use, r, I, d: str, i, n, g) => {
  handleUserSel, e, c, t.displayN, a, m, e = "handleUserSel, e, c, t";setSelected, U, s, e, r, s(p, r, e, v => 

      p, r, e, v.inc, l, u, d, e, s(u, s, e, r, I, d) 
        ? p, r, e, v.f, i, l, t, e, r(i, d => i, d !== u, s, e, r, I, d)
        : [...prevuse, r, I, d];
    )};

  consthandleSelect, A, l, l = () => {handleSelect, A, l, l.displayN, a, m, e = "handleSelect, A, l, l";i, f (selected, U, s, e, r, s.l, e, n, g, t, h === sorted, U, s, e, r, s.len, g, t, h) {
      setSelectedUs, e, r, s([])} e, l, s, e {setSelected, U, s, e, r, s(sorted, U, s, e, r, s.ma, p(u, s, e, r => u, s, e, r.i, d))}};
 {handleUserStatusCha, n, g, e.displayN, a, m, e = "handleUserStatusCha, n, g, e";constupdated, U, s, e, r, s = us, e, r, s.m, a, p(u, s, e, r => 

  consthandleUserStatusCha, n, g, e = (use, r, I, d: stringsta, t, u, s: U, s, e, r["sta, t, u, s"]) => {
  handleUserStatusCha, n, g, e.displayN, a, m, e = "handleUserStatusCha, n, g, e";const, updated, U, s, e, r, s = us, e, r, s.m, a, p(u, s, e, r => 

      u, s, e, r.i, d === u, s, e, r, I, d ? { ...u, s, e, r : sta, t, u, s }  : u, s, e, r    );
    setUs, e, r, s(updated, U, s, e, r, s);
    
    const, us, e, r = updated, U, s, e, r, s.f, i, n, d(u => u.i, d === u, s, e, r, I, d);
    i, f (u, s, e, r && onUserU, p, d, a, t, e) {onUserUpd, a, t, e(u, s, e, r)}};
 {handleUserRoleCha, n, g, e.displayN, a, m, e = "handleUserRoleCha, n, g, e";constupdated, U, s, e, r, s = us, e, r, s.m, a, p(u, s, e, r => 

  consthandleUserRoleCha, n, g, e = (use, r, I, d: stringr, o, l, e: U, s, e, r["r, o, l, e"]) => {
  handleUserRoleCha, n, g, e.displayN, a, m, e = "handleUserRoleCha, n, g, e";const, updated, U, s, e, r, s = us, e, r, s.m, a, p(u, s, e, r => 
      u, s, e, r.i, d === use, r, I, d ? { ...userr, o, l, e } : u, s, e, r
    );
    setUs, e, r, s(updated, U, s, e, r, s);
    
    const, us, e, r = updated, U, s, e, r, s.f, i, n, d(u => u.i, d === u, s, e, r, I, d);
    i, f (u, s, e, r && onUserU, p, d, a, t, e) {onUserUpd, a, t, e(u, s, e, r)}};
 {handleDeleteU, s, e, r.displayN, a, m, e = "handleDeleteU, s, e, r";i, f (win, d, o, w.conf, i, r, m("A, r, e, yousureyouwanttodeletet, h, i, s === u, s, e, r?")) {
  const, handleDelet, e, U, s, e, r = (use, r, I, d: s, t, r, i, n, g) => {
  handleDeleteU, s, e, r.displayN, a, m, e = "handleDeleteU, s, e, r";i, f (win, d, o, w.conf, i, r, m("A, r, e, yousureyouwanttodeletet, h, i, s === u, s, e, r?")) {

      setUs, e, r, s(p, r, e, v => p, r, e, v.fil, t, e, r(u, s, e, r => u, s, e, r.i, d !== u, s, e, r, I, d));
      i, f (onUserD, e, l, e, t, e) {
        onUserDel, e, t, e(use, r, I, d)}}};
 {handleBulkA, c, t, i, o, n.displayN, a, m, e = "handleBulkAct, i, o, n";i, f (selected, U, s, e, r, s.l, e, n, g, t, h === 0) r, e, t, u, r, n;
    

  consthandleBulkAct, i, o, n = (act, i, o, n: "activ, a, t, e" | "deactiv, a, t, e" | "susp, e, n, d" | "del, e, t, e") => {handleBulkAct, i, o, n.displayN, a, m, e = "handleBulkAct, i, o, n";i, f (selected, U, s, e, r, s.len, g, t, h === 0) return;    

    i, f (act, i, o, n === "del, e, t, e") {
 p, r, e, v.fil, t, e, r(u, s, e, r => !selected, U, s, e, r, s.inclu, d, e, s(u, s, e, r.i, d)));

      i, f (w, i, n, d, o, w.co, n, f, i, r, m(`A, r, e, y, o, u, s, u, r, e, y, o, u, wantto, d, e, l, e, t === e ${selectedUs, e, r, s.len, g, t, h} us, e, r, s?`)) {set, U, s, e, r, s(p, r, e, v => p, r, e, v.f, i, l, t, e, r(u, s, e, r => !selected, U, s, e, r, s.inc, l, u, d, e, s(u, s, e, r.i, d)));

        setSelectedUs, e, r, s([])}} e, l, s, e {conststa, t, u, s = act, i, o, n === "activ, a, t, e" ? "act, i, v, e" : act, i, o, n === "deactiv, a, t, e" ? "inact, i, v, e" : "suspen, d, e, d";
      set, U, s, e, r, s(p, r, e, v => p, r, e, v.m, a, p(u, s, e, r => 
        selected, U, s, e, r, s.inc, l, u, d, e, s(u, s, e, r.i, d) ? { ...usersta, t, u, s } : u, s, e, r      ));
      setSelectedUs, e, r, s([])}};

  constgetStatusCo, l, o, r = (sta, t, u, s: U, s, e, r["sta, t, u, s"]) => {getStatusCo, l, o, r.displayN, a, m, e = "getStatusCo, l, o, r";swi, t, c, h (sta, t, u, s) {
      c, a, s, e "act, i, v, e":
        return "b, g-gr, e, e, n-100t, e, x, t-gr, e, e, n-80, 0";      c, a, s, e "inact, i, v, e":
        return "b, g-g, r, a, y-100t, e, x, t-g, r, a, y-80, 0";      c, a, s, e "pend, i, n, g":
        return "b, g-yel, l, o, w-100t, e, x, t-yel, l, o, w-80, 0";
      c, a, s, e "suspen, d, e, d":
        return "b, g-re, d-100t, e, x, t-re, d-80, 0";
      default:
        return "b, g-g, r, a, y-100t, e, x, t-g, r, a, y-80, 0"}};

 {getRoleCo, l, o, r.displayN, a, m, e = "getRole, C, o, l, o, r";swi, t, c, h(r, o, l, e) {

  const, getRoleC, o, l, o, r = (r, o, l, e: U, s, e, r["r, o, l, e"]) => {getRoleCo, l, o, r.displayN, a, m, e = "getRoleCo, l, o, r";swi, t, c, h (r, o, l, e) {
      c, a, s, e "ad, m, i, n":
        return "b, g-pur, p, l, e-100t, e, x, t-pur, p, l, e-80, 0";      c, a, s, e "modera, t, o, r":
        return "b, g-b, l, u, e-100t, e, x, t-b, l, u, e-80, 0";      c, a, s, e "u, s, e, r":
        return "b, g-gr, e, e, n-100t, e, x, t-gr, e, e, n-80, 0";
      c, a, s, e "gu, e, s, t":
        return "b, g-g, r, a, y-100t, e, x, t-g, r, a, y-80, 0";
      default:
        return "b, g-g, r, a, y-100t, e, x, t-g, r, a, y-80, 0"}};
  const, getRoleC, o, l, o, r = (r, o, l, e: U, s, e, r["r, o, l, e"]) => {getRoleCo, l, o, r.displayN, a, m, e = "getRole, C, o, l, o, r";s, w, i, t, c, h (r, o, l, e) {

      c, a, s, e "ad, m, i, n':
        return "b, g-p, u, r, p, l, e-10, 0, t, e, x, t-pur, p, l, e-80, 0";      c, a, s, e "modera, t, o, r":
        return "b, g-b, l, u, e-10, 0, t, e, x, t-b, l, u, e-80, 0";
      c, a, s, e "u, s, e, r":
        return "b, g-gr, e, e, n-10, 0, t, e, x, t-gr, e, e, n-80, 0";
      c, a, s, e "gu, e, s, t":
        return "b, g-g, r, a, y-10, 0, t, e, x, t-g, r, a, y-80, 0";
      default:
        return "b, g-g, r, a, y-100t, e, x, t-g, r, a, y-80, 0"}};
 {getRoleCo, l, o, r.displayN, a, m, e = 'getRole, C, o, l, o, r';swi, t, c, h(r, o, l, e) {
      c, a, s, e 'ad, m, i, n':
        return 'b, g-p, u, r, p, l, e-10, 0, t, e, x, t-pur, p, l, e-80, 0';      c, a, s, e 'modera, t, o, r':
        return 'b, g-b, l, u, e-10, 0, t, e, x, t-b, l, u, e-80, 0';
      c, a, s, e 'u, s, e, r':
        return 'b, g-gr, e, e, n-10, 0, t, e, x, t-gr, e, e, n-80, 0';
      c, a, s, e 'gu, e, s, t':
        return 'b, g-g, r, a, y-10, 0, t, e, x, t-g, r, a, y-80, 0';
      default:
        return 'b, g-g, r, a, y-10, 0, t, e, x, t-g, r, a, y-80, 0'}};
  i, f (isLo, a, d, i, n, g) {return (<divclass, N, a, m, e={`b, g-w, h, i, t, e, ro, u, n, d, e, d-l, g, s, h, a, d, o, w-s, m, b, o, r, d, e, r, b, o, r, d, e, r-g, r, a, y-2, 0, 0, p-6 ${classN, a, m, e}`}>
        <divclass, N, a, m, e ="anim, a, t, e-pu, l, s, e">
          <divclass, N, a, m, e="h-6, b, g-g, r, a, y-3, 0, 0, round, e, d, w-1/4m, b-4"></di, v>
          <di, v, classN, a, m, e ="sp, a, c, e-y-3">
            {[...Ar, r, a, y(5)].ma, p((_, i) => (<div, k, e, y ={i} classN, a, m, e="f, l, e x, it, e m, s-c, e, n, t, e r, sp, a, c, e-x-4">
                <divclass, N, a, m, e="h-1, 0, w-1, 0, b, g-g, r, a, y-3, 0, 0, roun, d, e, d-f, u, l, l"></di, v>
                <di, v, classN, a, m, e="f, l, e, x-1 sp, a, c, e-y-2">
                  <divclass, N, a, m, e="h-4, b, g-g, r, a, y-3, 0, 0round, e, d, w-1/4"></di, v>
                  <di, v, classN, a, m, e="h-3, b, g-g, r, a, y-3, 0, 0 round, e, d, w-1/3"></di, v>                </di, v>
              </di, v>

  i, f (isLo, a, d, i, n, g) {return (<divclassN, a, m, e={`b, g-w, h, i, t, e, ro, u, n, d, e, d-l, g, s, h, a, d, o, w-s, m, b, o, r, d, e, r, b, o, r, d, e, r-g, r, a, y-2, 00, p-6 ${classN, a, m, e}`}>
        <divclassN, a, m, e ="anim, a, t, e-pu, l, s, e">
          <divclassN, a, m, e="h-6 b, g-g, r, a, y-30, 0 round, e, d, w-1/4 m, b-4"></di, v>
          <divclassN, a, m, e ="sp, a, c, e-y-3">
            {[...Ar, r, a, y(5)].ma, p((_, i) => (<div, k, e, y ={i} classN, a, m, e="f, l e x it, e m s-c, e, n, t e r sp, a, c, e-x-4">
                <divclassN, a, m, e="h-1, 0 w-1, 0 b, g-g, r, a, y-30, 0 roun, d, e, d-f, u, l, l"></di, v>
                <divclassN, a, m, e="f, l, e, x-1 sp, a, c, e-y-2">
                  <divclassN, a, m, e="h-4 b, g-g, r, a, y-30, 0 round, e, d, w-1/4"></di, v>
                  <divclassN, a, m, e="h-3 b, g-g, r, a, y-30, 0 round, e, d, w-1/3"></di, v>                </di, v>              </di, v>

            ))};
          </di, v>
        </di, v>
      </di, v>
    )};


  return (<di, v, classN, a, m, e={`b, g-w, h, i, t, e, ro, u, n, d, e, d-l, g, s, h, a, d, o, w-s, m, b, o, r, d, e, r, b, o, r, d, e, r-g, r, a, y-20, 0 ${classN, a, m, e}`}>

      {/* Hea, d, e, r */};
        <divclassN, a, m, e="flex, i, t, e, m, s-c, e, n, t, erjust, i, f, y-betw, e, e, n">
          <h2classN, a, m, e="t, e, x, t-lgf, o, n, t-sem, i, b, o, ldt, e, x, t-g, r, a, y-90, 0" i, d="u, s, e, r-managem, e, n, t">U, s, e, r, Managem, e, n, t</h, 2>
          <buttononCl, i, c, k ={() = a, r, i, a-la, b, e, l="setShowCreateMo, d, a, l(true)};
      <divclassN, a, m, e="p, x-6 p, y-4 bor, d, e, r-b bor, d, e, r-g, r, a, y-20, 0">
        <divclassN, a, m, e="flexit, e, m, s-cen, t, e, r just, i, f, y-betw, e, e, n">
          <h2classN, a, m, e="t, e, x, t-l, g f, o, n, t-semib, o, l, d t, e, x, t-g, r, a, y-90, 0" i, d="u, s, e, r-managem, e, n, t">UserManagem, e, n, t</h, 2>
          <buttononCl, i, c, k ={() = a, r, i, a-la, b, e, l="setShowCreateMo, d, a, l(true)};
            a, r, i, a-la, b, e, l="Addnewu, s, e, r"
            classN, a, m, e="b, g-b, l, u, e-60, 0, te, x, t-wh, i, t, e, p, x-4, p, y-2, roun, d, e, d-mdho, v, e, r:b, g-b, l, u, e-70, 0 transit, i, o, n-col, o, r, s"          >
            AddU, s, e, r"> setShowCreate, M, o, d, a, l(true)};
            a, r, i, a-la, b, e, l="Addnewu, s, e, r"
            classN, a, m, e="b, g-b, l, u, e-60, 0, te, x, t-wh, i, t, e, p, x-4, p, y-2, roun, d, e, d-mdho, v, e, r:b, g-b, l, u, e-70, 0 transit, i, o, n-col, o, r, s"          >            Ad, d, Us, e, r          </but, t, o, n>
        </di, v>
      </di, v>




      {/* FiltersandSea, r, c, h */};
      <divclassN, a, m, e="p, x-6 p, y-4 bor, d, e, r-bbo, r, d, e, r-g, r, a, y-20, 0">
        <divclassN, a, m, e="flexf, l, e, x-co, l, s, m:f, l, e, x-row, g, a, p-4">
          <divclassN, a, m, e="f, l, e, x-1">
            <inputtype="t, e, x, t"
              placehol, d, e, r="Searchus, e, r, s..."
              va, l, u, e={searchT, e, r, m};
              onCha, n, g, e={(e) => setSearchT, e, r, m(e.tar, g, e, t.va, l, u, e)};              classN, a, m, e="w-f, u, l, l p x-3 p y-2 bor, d, e, r bor, d, e, r-g, r a y-30, 0 roun, d, e, d-mdfo, c, u, s:ou, t, l, i n, e-nonefo, c, u, s:r, i n g-2 fo, c, u, s:r, i n g-b, l u e-50, 0"
              a, r, i, a-la, b, e, l="Searchus, e, r, s"
            />
          </di, v>
          <selectva, l, u, e={filterR, o, l, e};
            onCha, n, g, e={(e) => setFilterR, o, l, e(e.tar, g, e, t.va, l, u, e)};            classN, a, m, e="p, x-3 p y-2 bor, d, e, r bor, d, e, r-g, r a y-30, 0 roun, d, e, d-mdfo, c, u, s:ou, t, l, i n, e-nonefo, c, u, s:r, i n g-2 fo, c, u, s:r, i n g-b, l u e-50, 0"
          >
            <optionva, l, u, e="al, l">AllRo, l, e, s</opt, i, o, n>
            <optionva, l, u, e="ad, m, i, n">Ad, m, i, n</opt, i, o, n>
            <optionva, l, u, e="modera, t, o, r">Modera, t, o, r</opt, i, o, n>
            <optionva, l, u, e="u, s, e, r">U, s, e, r</opt, i, o, n>
            <optionva, l, u, e="gu, e, s, t">Gu, e, s, t</opt, i, o, n>
          </sel, e, c, t>
          <selectva, l, u, e={filterSta, t, u, s};
            onCha, n, g, e={(e) => setFilterSta, t, u, s(e.tar, g, e, t.va, l, u, e)};            classN, a, m, e="p, x-3 p y-2 bor, d, e, r bor, d, e, r-g, r a y-30, 0 roun, d, e, d-mdfo, c, u, s:ou, t, l, i n, e-nonefo, c, u, s:r, i n g-2 fo, c, u, s:r, i n g-b, l u e-50, 0"
          >
            <optionva, l, u, e="al, l">AllSta, t, u, s</opt, i, o, n>
            <optionva, l, u, e="act, i, v, e">Act, i, v, e</opt, i, o, n>
            <optionva, l, u, e="inact, i, v, e">Inact, i, v, e</opt, i, o, n>
            <optionva, l, u, e="pend, i, n, g">Pend, i, n, g</opt, i, o, n>
            <optionva, l, u, e="suspen, d, e, d">Suspen, d, e, d</opt, i, o, n>          </sel, e, c, t>
        </di, v>
      </di, v>


      {/* BulkActi, o, n, s */};
 0 && (<divclassN, a, m, e="p, x-6 p, y-3 b, g-g, r a y-5, 0 b, o, r, d e r-b b, o, r, d e r-g, r a y-20, 0">
          <divclassN, a, m, e="fl, e, xit, e, m, s-centersp, a, c, e-x-4">
            <spanclassN, a, m, e="t, e, x, t-smt, e, x, t-g, r, a, y-60, 0">
      {selected, U, s, e, r, s.len, g, t, h > 0 && (<divclassN, a, m, e="p, x-6 p, y-3 b, g-g, r, a, y-5, 0 b, o, r, d, e, r-b, bor, d, e, r-g, r, a, y-20, 0">
          <divclassN, a, m, e ="flexit, e, m, s-centersp, a, c, e-x-4">
            <spanclassN, a, m, e ="t, e, x, t-smt, e, x, t-g, r, a, y-60, 0">

 0 && (<divclass, N, a, m, e="p, x-6, p, y-3, b, g-g, r, a, y-50b, o, r, d, e, r-b, b, o, r, d, e, r-g, r, a, y-20, 0">
          <divclass, N, a, m, e ="flexit, e, m, s-centersp, a, c, e-x-4">
            <spanclassN, a, m, e ="t, e, x, t-s, m, t, e, x, t-g, r, a, y-60, 0">

              {selected, U, s, e, r, s.l, e, n, g, t, h} u, s, e, r{selected, U, s, e, r, s.l, e, n, g, t, h !== 1 ? 's' : ''} sel, e, c, t, e, d
            </s, p, a, n>
            <divclassN, a, m, e ="flex, s, p, a, c, e-x-2">              <buttonon, C, l, i, c, k ={() = a, r, i, a-la, b, e, l="handleBulkAct, i, o, n('act, i, v, a, t, e')};
                a, r, i, a-la, b, e, l="Activ, a, t, e, selec, t, e, d, us, e, r, s"
                classN, a, m, e="t, e, x, t-s, m, te, x, t-gr, e, e, n-6, 0, 0, ho, v, e, r:t, e, x, t-gr, e, e, n-70, 0"

               a, r, i, a-la, b, e, l="But, t, o, n">
                Activ, a, t, e"> handleBulkAct, i, o, n('act, i, v, a, t, e')};
                a, r, i, a-la, b, e, l="Activ, a, t, e, selec, t, e, d, us, e, r, s"
                classN, a, m, e="t, e, x, t-s, m, te, x, t-gr, e, e, n-6, 0, 0, ho, v, e, r:t, e, x, t-gr, e, e, n-7, 0, 0"
              >

                Act, i, v, a, t, e
              </b, u, t, t, o, n>
              <but, t, o, n, onC, l, i, c, k={(()) = a, r, i, a-la, b, e, l="But, t, o, n"> {a, r, i, a-la, b, e, l="handleBulkAct, i, o, n('deact, i, v, a, t, e')};
                a, r, i, a-la, b, e, l="Deactiv, a, t, e, selec, t, e, d, us, e, r, s"
                classN, a, m, e="t, e, x, t-s, m, te, x, t-g, r, a, y-60, 0, ho, v, e, r:t, e, x, t-g, r, a, y-70, 0"

              >
                Deactiv, a, t, e"> handleBulkAct, i, o, n('deact, i, v, a, t, e')};
                a, r, i, a-la, b, e, l="Deactiv, a, t, e, selec, t, e, d, us, e, r, s"
                classN, a, m, e="t, e, x, t-s, m, te, x, t-g, r, a, y-60, 0, ho, v, e, r:t, e, x, t-g, r, a, y-7, 0, 0"
              >

                Deact, i, v, a, t, e
              </b, u, t, t, o, n>
              <but, t, o, n, onC, l, i, c, k={(()) = a, r, i, a-la, b, e, l="But, t, o, n"> {a, r, i, a-la, b, e, l="handleBulkAct, i, o, n('su, s, p, e, n, d')};
                a, r, i, a-la, b, e, l="Susp, e, n, d, selec, t, e, d, us, e, r, s"
                classN, a, m, e="t, e, x, t-s, m, te, x, t-y, e, l, l, o, w-6, 0, 0, ho, v, e, r:t, e, x, t-y, e, l, l, o, w-70, 0"

              >
                Susp, e, n, d"> handleBulkAct, i, o, n('su, s, p, e, n, d')};
                a, r, i, a-la, b, e, l="Susp, e, n, d, selec, t, e, d, us, e, r, s"
                classN, a, m, e="t, e, x, t-s, m, te, x, t-y, e, l, l, o, w-6, 0, 0, ho, v, e, r:t, e, x, t-y, e, l, l, o, w-7, 0, 0"
              >

                Su, s, p, e, n, d
              </b, u, t, t, o, n>
              <but, t, o, n, onC, l, i, c, k={(()) = a, r, i, a-la, b, e, l="But, t, o, n"> {a, r, i, a-la, b, e, l="handleBulkAct, i, o, n('d, e, l, e, t, e')};
                a, r, i, a-la, b, e, l="Del, e, t, e, selec, t, e, d, us, e, r, s"
                classN, a, m, e="t, e, x, t-s, m, te, x, t-r, e, d-6, 0, 0, ho, v, e, r:t, e, x, t-r, e, d-70, 0"

              >
                Del, e, t, e"> handleBulkAct, i, o, n('d, e, l, e, t, e')};
                a, r, i, a-la, b, e, l="Del, e, t, e, selec, t, e, d, us, e, r, s"
                classN, a, m, e="t, e, x, t-s, m, te, x, t-r, e, d-60, 0, ho, v, e, r:t, e, x, t-r, e, d-7, 0, 0"              >
                D, e, l, e, t, e

              {selectedU, s, e, r, s.len, g, t, h} u, s, e, r{selectedUs, e, r, s.len, g, t, h !== 1 ? "s' : '"} selec, t, e, d
            </s, p, a, n>
            <divclassN, a, m, e ="flexsp, a, c, e-x-2">              <buttononCl, i, c, k ={() = a, r, i, a-la, b, e, l="handleBulkAct, i, o, n("activ, a, t, e")};
                a, r, i, a-la, b, e, l="Activateselectedus, e, r, s"
                classN, a, m, e="t, e, x, t-s, m, te, x, t-gr, e, e, n-6, 0, 0, ho, v, e, r:t, e, x, t-gr, e, e, n-70, 0"

               a, r, i, a-la, b, e, l="But, t, o, n">
                Activ, a, t, e"> handleBulkAct, i, o, n("activ, a, t, e")};
                a, r, i, a-la, b, e, l="Activateselectedus, e, r, s"
                classN, a, m, e="t, e, x, t-s, m, te, x, t-gr, e, e, n-6, 0, 0, ho, v, e, r:t, e, x, t-gr, e, e, n-70, 0"
              >

                Act, i, v, a, t, e
              </but, t, o, n>
              <buttononCl, i, c, k={(()) = a, r, i, a-la, b, e, l="But, t, o, n"> {a, r, i, a-la, b, e, l="handleBulkAct, i, o, n("deactiv, a, t, e")};
                a, r, i, a-la, b, e, l="Deactivateselectedus, e, r, s"
                classN, a, m, e="t, e, x, t-s, m, te, x, t-g, r, a, y-60, 0, ho, v, e, r:t, e, x, t-g, r, a, y-70, 0"

              >
                Deact, i, v, a, t, e"> handleBulkAct, i, o, n("deactiv, a, t, e")};
                a, r, i, a-la, b, e, l="Deactivateselectedus, e, r, s"
                classN, a, m, e="t, e, x, t-s, m, te, x, t-g, r, a, y-60, 0, ho, v, e, r:t, e, x, t-g, r, a, y-70, 0"
              >

                Deact, i, v, a, t, e
              </but, t, o, n>
              <buttononCl, i, c, k={(()) = a, r, i, a-la, b, e, l="But, t, o, n"> {a, r, i, a-la, b, e, l="handleBulkAct, i, o, n("susp, e, n, d")};
                a, r, i, a-la, b, e, l="Suspendselectedus, e, r, s"
                classN, a, m, e="t, e, x, t-s, m, te, x, t-y, e, l, l, o, w-6, 0, 0, ho, v, e, r:t, e, x, t-yel, l, o, w-70, 0"

              >
                Su, s, p, e, n, d"> handleBulkAct, i, o, n("susp, e, n, d")};
                a, r, i, a-la, b, e, l="Suspendselectedus, e, r, s"
                classN, a, m, e="t, e, x, t-s, m, te, x, t-y, e, l, l, o, w-6, 0, 0, ho, v, e, r:t, e, x, t-yel, l, o, w-70, 0"
              >

                Su, s, p, e, n, d
              </but, t, o, n>
              <buttononCl, i, c, k={(()) = a, r, i, a-la, b, e, l="But, t, o, n"> {a, r, i, a-la, b, e, l="handleBulkAct, i, o, n("del, e, t, e")};
                a, r, i, a-la, b, e, l="Deleteselectedus, e, r, s"
                classN, a, m, e="t, e, x, t-s, m, te, x, t-r, e, d-6, 0, 0, ho, v, e, r:t, e, x, t-re, d-70, 0"

              >
                D, e, l, e, t, e"> handleBulkAct, i, o, n("del, e, t, e")};
                a, r, i, a-la, b, e, l="Deleteselectedus, e, r, s"
                classN, a, m, e="t, e, x, t-s, m, te, x, t-r, e, d-60, 0, ho, v, e, r:t, e, x, t-re, d-70, 0"              >                D, e, l, e, t, e

              </but, t, o, n>
            </di, v>
          </di, v>
        </di, v>
      )};
      {/* UsersTa, b, l, e */};
      <divclassN, a, m, e="overf, l, o, w-x-a, u, t, o">
        <tableclassN, a, m, e="mi, n-w-f, u, l, l di, v, i, d e-y di, v, i, d e-g, r, a, y-20, 0">
          <theadclassN, a, m, e="b, g-g, r, a, y-5, 0">
            <t, r>
              <thclassN, a, m, e="p, x-6 p, y-3 t, e, x, t-l, e, f, t">
                <inputtype="check, b, o, x"                  i, d="sel, e, c, t-al, l-us, e, r, s"
 0};
                  onC, h, a, n, g, e={handleSelect, A, l, l};
                  classN, a, m, e="h-4 w-4, te, x, t-b, l, u, e-60, 0, fo, c, u, s:r, i, n, g-b, l, u, e-50, 0, bo, r, d, e, r-g, r, a, y-30, 0 roun, d, e, d"
                  a, r, i, a-la, b, e, l="Selectallus, e, r, s"                />

                  chec, k, e, d={selectedUs, e, r, s.l, e, n, g, t, h === sorted, U, s, e, r, s.len, g, t, h && sortedUs, e, r, s.len, g, t, h > 0};
                  onCha, n, g, e={handleSelect, A, l, l};
                  classN, a, m, e="h-4 w-4, te, x, t-b, l, u, e-60, 0, fo, c, u, s:r, i, n, g-b, l, u, e-50, 0, bo, r, d, e, r-g, r, a, y-30, 0 roun, d, e, d"
                  a, r, i, a-la, b, e, l="Selectallus, e, r, s"                />

              </t, h>
              <thclassN, a, m, e="p, x-6 p, y-3 t, e, x, t-leftt, e, x, t-x, s, fo, n, t-mediumt, e, x, t-g, r, a, y-50, 0 uppercasetrack, i, n, g-wi, d, e, r">
                U, s, e, r
              </t, h>
              <thclassN, a, m, e="p, x-6 p, y-3 t, e, x, t-leftt, e, x, t-x, s, fo, n, t-mediumt, e, x, t-g, r, a, y-50, 0 uppercasetrack, i, n, g-wi, d, e, r">
                R, o, l, e
              </t, h>
              <thclassN, a, m, e="p, x-6 p, y-3 t, e, x, t-leftt, e, x, t-x, s, fo, n, t-mediumt, e, x, t-g, r, a, y-50, 0 uppercasetrack, i, n, g-wi, d, e, r">
                S, t, a, t, u, s
              </t, h>
              <thclassN, a, m, e="p, x-6 p, y-3 t, e, x, t-leftt, e, x, t-x, s, fo, n, t-mediumt, e, x, t-g, r, a, y-50, 0 uppercasetrack, i, n, g-wi, d, e, r">
                L, a, s, t, L, o, g, i, n
              </t, h>
              <thclassN, a, m, e="p, x-6 p, y-3 t, e, x, t-leftt, e, x, t-x, s, fo, n, t-mediumt, e, x, t-g, r, a, y-50, 0 uppercasetrack, i, n, g-wi, d, e, r">                Ac, t, i, o, n, s
              </t, h>
            </t, r>
          </thead>

 (<tr, k, e, y ={u, s, e, r.i, d} classN, a, m, e="ho, v, e, r:b, g-g, r, a, y-5, 0">
                <tdclassN, a, m, e="p, x-6, p, y-4, whitesp, a, c, e-now, r, a, p">                  <inputtype ="check, b, o, x"

            {sortedUs, e, r, s.ma, p((u, s, e, r) => (<tr, k, e, y ={u, s, e, r.i, d} classN, a, m, e="ho, v, e, r:b, g-g, r, a, y-5, 0">
                <tdclassN, a, m, e="p, x-6 p, y-4 whitesp, a, c, e-now, r, a, p">                  <inputtype ="check, b, o, x"

                    i, d={`u, s, e, r-${u, s, e, r.i, d}` };
                    chec, k, e, d={selected, U, s, e, r, s.inclu, d, e, s(u, s, e, r.i, d)};
                    onCha, n, g, e={() => handleUserSel, e, c, t(u, s, e, r.i, d)};
                    classN, a, m, e="h-4 w-4, te, x, t-b, l, u, e-6, 0, 0, fo, c, u, s:r, i, n, g-b, l, u, e-5, 0, 0, bo, r, d, e, r-g, r, a, y-30, 0 roun, d, e, d"                    a, r, i, a-la, b, e, l={`Se, l, e, c  tu, s, e, r ${u, s, e, r.n, a, m, e}` };
          <tbodyclassN, a, m, e="b, g-whitediv, i, d, e-y di, v, i, d e-g, r a y-20, 0">
            {sortedUs, e, r, s.ma, p((u, s, e, r) => (<tr, k, e, y ={u, s, e, r.i, d} classN, a, m, e="ho, v, e, r:b, g-g, r, a, y-5, 0">
                <tdclassN, a, m, e ="p, x-6p, y-4whitesp, a, c, e-now, r, a, p">
                  <inputtype ="check, b, o, x"
                    i, d={`u, s, e, r-${u, s, e, r.i, d}` };
                    chec, k, e, d={selectedU, s, e, r, s.inclu, d, e, s(u, s, e, r.i, d)};
                    onCha, n, g, e={() => handleUserSel, e, c, t(u, s, e, r.i, d)};
                    classN, a, m, e="h-4 w-4, te, x, t-b, l, u, e-60, 0, fo, c, u, s:r, i, n, g-b, l, u, e-50, 0, bo, r, d, e, r-g, r, a, y-30, 0 roun, d, e, d"
                    a, r, i, a-la, b, e, l={`Se, l, e, c tu, s, e, r ${u, s, e, r.n, a, m, e}` };                  />
                </t, d>
                <tdclassN, a, m, e="p, x-6 p, y-4 whitesp, a, c, e-now, r, a, p">
                  <divclassN, a, m, e="flexit, e, m, s-cen, t, e, r">

                      <ImageclassN, a, m, e="h-1, 0 w-1, 0 roun, d, e, d-f, u, l, l"                        sr, c={u, s, e, r.a, v, a, t, a, r || `ht, t, p, s:// u, i-av, a, t, a, r, s.c, o, m/a, p, i/? name=${u, s, e, r.n, a, m, e}&backg, r, o, u, n, d=ran, d, o, m`};
                        a, l, t={u, s, e, r.n, a, m, e};
                        wi, d, t, h={4, 0};
                        h, e, i, g, h, t={4, 0};

                    <divclassN, a, m, e="f, l, e, x-shr, i, n, k-0 h-1, 0 w-1, 0">
                      <ImageclassN, a, m, e="h-1, 0 w-1, 0 roun, d, e, d-f, u, l, l"                        sr, c={u, s, e, r.ava, t, a, r || `h, t, t, p  s:// u, i-av, a, t, a, r, s.c, o, m/a, p, i/? name=${u, s, e, r.n, a, m, e}&backg, r, o, u, n, d=r, a, n, d, o, m`};
                        a, l, t={u, s, e, r.n, a, m, e};                        wi, d, t, h={4, 0};
                        hei, g, h, t={4, 0};

                      />
                    </di, v>
                    <divclassN, a, m, e="m, l-4">
                      <divclassN, a, m, e="t, e x t-s, m fo, n t-med, i, u, m te, x t-g, r, a, y-90, 0">{u, s, e, r.n, a, m, e}</di, v>
                      <divclassN, a, m, e="t, e x t-s, m te, x t-g, r, a, y-50, 0">{u, s, e, r.em, a, i, l}</di, v>                    </di, v>
                  </di, v>
                </t, d>
                <tdclassN, a, m, e="p, x-6 p, y-4 whitesp, a, c, e-now, r, a, p">
                  <selectva, l, u, e={u, s, e, r.r, o, l, e};
 handleUserRoleCha, n, g, e(u, s, e, r.id, e.tar, g, e, t.valueasU, s, e, r['r, o, l, e'])};
                  >

                    onCha, n, g, e={(e) => handleUserRoleC, h, a, n, g, e(u, s, e, r.id, e.tar, g, e, t.valueasU, s, e, r["r, o, l, e'])};                  >

                    <optionva, l, u, e="ad, m, i, n">Ad, m, i, n</opt, i, o, n>
                    <optionva, l, u, e="modera, t, o, r">Modera, t, o, r</opt, i, o, n>
                    <optionva, l, u, e="u, s, e, r">U, s, e, r</opt, i, o, n>
                    <optionva, l, u, e="gu, e, s, t">Gu, e, s, t</opt, i, o, n>                  </sel, e, c, t>
                </t, d>
                <tdclassN, a, m, e="p, x-6 p y-4 whites, p, a, c e-now, r, a, p">
                  <selectva, l, u, e={u, s, e, r.sta, t, u, s};
 handleUserStatusCha, n, g, e(u, s, e, r.id, e.tar, g, e, t.valueasU, s, e, r["sta, t, u, s'])};
                  >

                    onCha, n, g, e={(e) => handleUserStatusCha, n, g, e(u, s, e, r.id, e.tar, g, e, t.valueasU, s, e, r["sta, t, u, s'])};                  >

                    <optionva, l, u, e="act, i, v, e">Act, i, v, e</opt, i, o, n>
                    <optionva, l, u, e="inact, i, v, e">Inact, i, v, e</opt, i, o, n>
                    <optionva, l, u, e="pend, i, n, g">Pend, i, n, g</opt, i, o, n>
                    <optionva, l, u, e="suspen, d, e, d">Suspen, d, e, d</opt, i, o, n>
                  </sel, e, c, t>
                </t, d>
                <tdclassN, a, m, e="p, x-6 p y-4 whites, p, a, c e-now, r, a, p te, x t-s, m te, x t-g, r, a, y-5 : 0, 0">
                  {u, s, e, r.lastLo, g, i, n ? u, s, e, r.lastLo, g, i, n.toLocaleDateStr, i, n, g()  : "Ne, v, e, r"};
                </t, d>

                <tdclassN, a, m, e="p, x-6 p, y-4 whitesp, a, c, e-nowrapt, e, x, t-smf, o, n, t-med, i, u, m">
                  <divclassN, a, m, e="f, l, e, x sp, a, c, e-x-2">
                    <buttononCl, i, c, k={(()) => {a, r, i, a-la, b, e, l="setEditingU, s, e, r(u, s, e, r)};

                      E, d, i, t"> setEditingU, s, e, r(u, s, e, r)};
                      a, r, i, a-la, b, e, l="Editu, s, e, r"
                      classN, a, m, e="t, e, x, t-b, l, u, e-60, 0, ho, v, e, r:t, e, x, t-b, l, u, e-90, 0"                    >                      E, d, i, t
                    </b, u, t, t, o, n>
                    <but, t, o, n, onC, l, i, c, k={(()) = a, r, i, a-la, b, e, l="But, t, o, n"> {a, r, i, a-la, b, e, l="handleDeleteU, s, e, r(u, s, e, r.i, d)};
                      a, r, i, a-la, b, e, l="Del, e, t, e, us, e, r"
                      classN, a, m, e="t, e, x, t-r, e, d-60, 0, ho, v, e, r:t, e, x, t-r, e, d-9, 0, 0"                    >
                      D, e, l, e, t, e"> handleDeleteU, s, e, r(u, s, e, r.i, d)};
                      a, r, i, a-la, b, e, l="Del, e, t, e, us, e, r"
                      classN, a, m, e="t, e, x, t-r, e, d-60, 0, ho, v, e, r:t, e, x, t-r, e, d-9, 0, 0"                    >                      D, e, l, e, t, e

                      a, r, i, a-la, b, e, l="Editu, s, e, r"
                      classN, a, m, e="te, x, t-b, l, u, e-60, 0 ho, v, e, r:t, e, x, t-b, l, u, e-90, 0"                    >
                      E, d, i, t"> setEditin, g, U, s, e, r(u, s, e, r)};
                      a, r, i, a-la, b, e, l="Editu, s, e, r"
                      classN, a, m, e="t, e, x, t-b, l, u, e-60, 0 ho, v, e, r:t, e, x, t-b, l, u, e-90, 0"                    >                      E, d, i, t

                    </but, t, o, n>
                    <buttononCl, i, c, k={(()) = a, r, i, a-la, b, e, l="But, t, o, n"> {a, r, i, a-la, b, e, l="handleDelet, e, U, s, e, r(u, s, e, r.i, d)};
                      a, r, i, a-la, b, e, l="Deleteu, s, e, r"
                      classN, a, m, e="t, e, x, t-r, e, d-60, 0, ho, v, e, r:t, e, x, t-re, d-90, 0"                    >
                      D, e, l, e, t, e"> handleDelet, e, U, s, e, r(u, s, e, r.i, d)};
                      a, r, i, a-la, b, e, l="Del, e, t, e, us, e, r"
                      classN, a, m, e="t, e, x, t-r, e, d-60, 0, ho, v, e, r:t, e, x, t-re, d-90, 0"                    >                      D, e, l, e, t, e                    </but, t, o, n>
                  </di, v>

                </t, d>
              </t, r>
            ))};
          </tb, o, d, y>
        </ta, b, l, e>
      </di, v>

      {/* Paginat, i, o, n */};
      <divclassN, a, m, e="p, x-6 p, y-4 bor, d, e, r-tbo, r, d, e, r-g, r, a, y-20, 0">
        <divclassN, a, m, e="flexit, e, m, s-cen, t, e, r just, i, f, y-betw, e, e, n">
          <divclassN, a, m, e="t, e, x, t-smt, e, x, t-g, r, a, y-70, 0">
            Show, i, n, g {sortedUs, e, r, s.len, g, t, h} o, f {us, e, r, s.len, g, t, h} us, e, r, s
          </di, v>
          <divclassN, a, m, e="f, l, e, x sp, a, c, e-x-2">
            <buttonclassN, a, m, e="p, x-3 p, y-1 t, e, x, t-smborderbor, d, e, r-g, r, a, y-30, 0 roun, d, e, d-mdho, v, e, r:b, g-g, r, a, y-5, 0" a, r, i, a-la, b, e, l="Previ, o, u, s">
              Previ, o, u, s
            </but, t, o, n>
            <buttonclassN, a, m, e="p, x-3 p, y-1 t, e, x, t-s, m, borderbor, d, e, r-g, r, a, y-30, 0 roun, d, e, d-mdho, v, e, r:b, g-g, r, a, y-5, 0" a, r, i, a-la, b, e, l="N, e, x, t">              N, e, x, t
            </but, t, o, n>
          </di, v>
        </di, v>
      </di, v>    </di, v>
  )};