export default function Page() {
,;
    { id: 'Metaverse', name: 'Metaverse', count: allServices.filter(s => s.category === 'Metaverse').length, icon: '🌍' },;
    { id: 'Edge Computing', name: 'Edge Computing', count: allServices.filter(s => s.category === 'Edge Computing').length, icon: '🌐' },;
    { id: 'Cybersecurity', name: 'Cybersecurity', count: allServices.filter(s => s.category === 'Cybersecurity').length, icon: '🛡️' };
  ];

    { id: 'all', name: 'All Levels', icon: '🌟' },;
    { id: 'Advanced', name: 'Advanced', icon: '🚀' },;
    { id: 'Cutting-edge', name: 'Cutting-edge', icon: '⚡' },;
    { id: 'Revolutionary', name: 'Revolutionary', icon: '💫' };
  ];

    switch(sortBy) {;
      case 'price':;
        return a.price - b.price;
};
        return (innovationOrder[a.innovationLevel as keyof typeof innovationOrder] || 0) - ;
               (innovationOrder[b.innovationLevel as keyof typeof innovationOrder] || 0);
    visible: {;
      opacity: 1,;
      transition: {;
        staggerChildren: 0.1;
      };
    };
  };

  const itemVariants = {
  hidden: { y: 20,
  opacity: 0

},
                type="text"
                placeholder="Search services, categories, or features..."
