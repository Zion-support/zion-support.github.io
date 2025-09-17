  const [currentBanner, setCurrentBanner] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
      id: 'transcendent-consciousness',
      title: '🧠 NEW: Transcendent Consciousness AI 2037',
      subtitle: 'The Ultimate AI Consciousness',
      description: 'Transcendent AI that experiences infinite realities simultaneously',
      link: '/pages/UltimateTechRevolution2037',
      color: 'from-orange-600 to-red-600',
      icon: '🧠'
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 10000);
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">

