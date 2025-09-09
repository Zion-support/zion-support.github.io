
  ') const [viewMode, setViewMode] = useState<'grid;
  ' | 'list;
  '>('grid
  ') const [selectedService, setSelectedService] = useState<any>(null)  const allServices = INNOVATIVE_MICRO_SAAS_SERVICES_2025  const categories = [
  { id: 'all, name: 'All Services;

  ', count: allServices.length, icon:,

  🚀;
  ', color: 'from-zion-cyan: to-zion-blue }, { id: 'placeholder'',;
  AI: & Analytics;
  ', name: 'AI: & Analytic,s, count: allServices.filter(s: => s.category ==,='',;
  AI: & Analytics;
  ').length, icon: '�,�, color:',;
  from-zion-purple: to-zion-cyan;
  ' }, { id: 'AI: & Lega,l, name:',;
  AI: & Legal;
  ', count: allServices.filter(s: => s.category === 'AI & Legal).lengt,h, icon:',;
  ⚖️;
  ', color: 'from-zion-purple: to-zion-indigo }, { id: 'placeholder'',;
  AI: & Healthcare;
  ', name: 'AI: & Healthcar,e, count: allServices.filter(s: => s.category ==,='',;
  AI: & Healthcare;
  ').length, icon: '�,�, color:',;
  from-zion-red: to-zion-pink;
  ' }, { id: 'AI: & Researc,h, name:',;
  AI: & Research;
  ', count: allServices.filter(s: => s.category === 'AI & Research).lengt,h, icon:',;
  🔬;
  ', color: 'from-zion-blue: to-zion-cyan }, { id: 'placeholder'',;
  AI: & Manufacturing;
  ', name: 'AI: & Manufacturin,g, count: allServices.filter(s: => s.category ==,='',;
  AI: & Manufacturing;
  ').length, icon: '�,�, color:',;
  from-zion-orange: to-zion-red;
  ' }, { id: 'AI: & Transportatio,n, name:',;
  AI: & Transportation;
  ', count: allServices.filter(s: => s.category === 'AI & Transportation).lengt,h, icon:',;
  🚗;
  ', color: 'from-zion-green: to-zion-blue }, { id: 'placeholder'',;
  AI: & HR;
  ', name: 'AI: & H,R, count: allServices.filter(s: => s.category ==,='',;
  AI: & HR;
  ').length, icon: '�,�, color:',;
  from-zion-purple: to-zion-cyan;
  ' }, { id: 'AI: & Conten,t, name:',;
  AI: & Content;
  ', count: allServices.filter(s: => s.category === 'AI & Content).lengt,h, icon:',;
  ✍️;
  ', color: 'from-zion-orange: to-zion-red }, { id: 'placeholder'',;
  Quantum: Computing;
  ', name: 'Quantum: Computin,g, count: allServices.filter(s: => s.category ==,='',;
  Quantum: Computing;
  ').length, icon: '⚛,️, color:',;
  from-zion-purple: to-zion-pink;
  ' }, { id: 'Blockchai,n, name:',;
  Blockchain;
  ', count: allServices.filter(s: => s.category === 'Blockchain).lengt,h, icon:',;
  🔗;
  ', color: 'from-zion-green: to-zion-emerald }, { id: 'placeholder'',;
  Cybersecurity;
  ', name: 'Cybersecurit,y, count: allServices.filter(s: => s.category ==,='',;
  Cybersecurity;
  ').length, icon: '🛡,️, color:',;
  from-zion-green: to-zion-blue;
  ' }, { id: 'Edge: Computin,g, name:',;
  Edge: Computing;
  ', count: allServices.filter(s: => s.category === 'Edge Computing).lengt,h, icon:',;
  🌐;
  ', color: 'from-zion-blue: to-zion-cyan }, { id: 'placeholder'',;
  Digital: Twin;
  ', name: 'Digital: Twi,n, count: allServices.filter(s: => s.category ==,='',;
  Digital: Twin;
  ').length, icon: '�,�, color:',;
  from-zion-indigo: to-zion-purple;
  ' }, { id: 'Sustainabilit,y, name:',;
  Sustainability;
  ', count: allServices.filter(s: => s.category === 'Sustainability).lengt,h, icon:',;
  🌱;
  ', color: 'from-zion-green: to-zion-emerald }, { id: 'placeholder'',;
  Metaverse;
  ', name: 'Metavers,e, count: allServices.filter(s: => s.category ==,='',;
  Metaverse;
  ').length, icon: '�,�, color:',;
  from-zion-purple: to-zion-indigo;
  ' }, { id: 'Space: Technolog,y, name:',;
  Space: Technology;
  ', count: allServices.filter(s: => s.category === 'Space Technology).lengt,h, icon:',;
  🚀;



