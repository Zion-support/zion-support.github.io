
  'nav.home'), icon: Home, matches: (path) => path ===,
  /' }, { href: '/marketplace, label: t('
  'nav.marketplace'), icon: Store, matches: (path) => path.startsWith(,
  /marketplace') }, { href: '/talent, label: t('
  'nav.talent'), icon: Users, matches: (path) => path.startsWith(,
  /talent') && !path.includes('
  '/talent-dashboard') }, { href: '/categories, label: t('
  'nav.categories'), icon: Store, matches: (path) => path.startsWith(,
  /categories') }, { href: '/equipment, label: t('
  'nav.equipment'), icon: Store, matches: (path) => path.startsWith(,
  /equipment') }, { href: '/community, label: t('
  'nav.community'), icon: Users, matches: (path) => path.startsWith(,



