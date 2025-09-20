
const UltimateZionServicesShowcase: React.FC = () : JSX.Element => {;
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [{ id: 'all', name: 'All Services', icon: '🌟', color: 'from - purple - 600 to - pink - 600' },
    { id: 'quantum - computing', name: 'Quantum Computing', icon: '⚛️', color: 'from - blue - 600 to - cyan - 600' },;
    { id: 'blockchain - web3', name: 'Blockchain & Web3', icon: '🔗', color: 'from - green - 600 to - emerald - 600' },;
    { id: 'space - tech', name: 'Space Technology', icon: '🛰️', color: 'from - indigo - 600 to - purple - 600' },;
    { id: 'biotech-ai', name: 'Biotech & AI', icon: '🧬', color: 'from - red - 600 to - pink - 600' },;
    { id: 'emerging - tech', name: 'Emerging Tech', icon: '🚀', color: 'from - orange - 600 to - red - 600' },;
    { id: 'micro - saas', name: 'Micro SAAS', icon: '💻', color: 'from - blue - 600 to - indigo - 600' },;
    { id: 'it - services', name: 'IT Services', icon: '🖥️', color: 'from - gray - 600 to - slate - 600' };
        delayChildren: 0.2;
      };
    };
  };

  const itemVariants = {
  hidden: { opacity: 0,
  y: 20

;
},;
    visible: {;
  return (<div  className="min - h-screen bg-gradient - to - br from - slate - 900 via - purple - 900 to - slate - 900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div  className="max - w-7xl mx - auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font - bold mb-6"

          <motion.p
            className="text-xl text-gray - 300 mb-8 max - w-4xl mx -auto"
          <motion.div
            className="bg-white / 10 backdrop - blur - lg rounded-xl p - 6 mb-8 max - w-4xl mx - auto border border-white / 20"
            </h3>
            <div  className="grid grid - cols - 1 md:grid - cols - 3 gap-6 text-sm">
              <div  className="text-center">
                <div  className="text-purple - 400 font - semibold text-lg mb-2">📱 Contact Us</div>
                <div  className="text-gray -300">+1 302 464 0950</div>
                <div  className="text-gray - 400 text-xs">Available 24 / 7</div>
              </div>
              <div  className="text-center">
                <div  className="text-purple - 400 font - semibold text-lg mb-2">✉️ Email</div>
                <div  className="text-gray -300">kleber@ziontechgroup.com</div>
                <div  className="text-gray - 400 text-xs">Response within 2 hours</div>
              </div>
              <div  className="text-center">
                <div  className="text-purple - 400 font - semibold text-lg mb-2">🌐 Website</div>
                <div  className="text-gray -300">
                  <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer"
                     className="text-blue - 400 hover:text-blue - 300 transition -colors">
          <motion.div
            className="flex flex - col md:flex - row gap-4 justify - center items - center mb-12"
            <input
              type="text"
              placeholder="Search revolutionary services..."
              value={searchTerm}
              onChange={ (e) => setSearchTerm(e.target.value) }
              className="px-6 py-3 bg-white / 10 border border-white / 20 rounded-lg text-white placeholder - gray - 400 focus:outline - none focus:border-purple - 400 focus:ring - 2 focus:ring - purple - 400 / 20 w-full md:w-80"
            />
            <div  className="flex flex - wrap gap-2">
              {categories.map((category) => (<button     key={category.id}
                  onClick={ () => setSelectedCategory(category.id) }
                  className={`px-4 py-2 rounded-lg border transition - all duration - 300 ${selectedCategory === category.id
                      ? 'bg-gradient - to - r from - purple - 600 to - pink - 600 border-purple - 400 text-white'
                      : 'bg-white / 10 border-white / 20 text-gray - 300 hover:bg-white / 20 hover:border-white / 40'
      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div  className="max - w-7xl mx -auto">
          <motion.div
            className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: anytrue }}
          >
            {filteredServices.map((service, index) => (<motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-white / 10 backdrop - blur - lg rounded-xl p - 6 border border-white / 20 hover:border-white / 40 transition - all duration - 300 hover:transform hover:scale -105 group"
                    </a> |
                    ✉️ <a href="mailto:kleber@ziontechgroup.com" className="text-blue - 400 hover:text-blue -300">
      {/* Bottom CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div  className="max - w-4xl mx - auto text-center">
          <motion.div
            className="bg-gradient - to - r from - purple - 600 / 20 to - pink - 600 / 20 backdrop - blur - lg rounded-2xl p - 8 border border-purple -400 / 30"
            </h2>
            <p className="text-xl text-gray - 300 mb-8">
              Join the revolution and transform your business with cutting - edge technology solutions.Our team of experts is ready to help you implement these game - changing services.</p>
            <div  className="flex flex - col md:flex - row gap-4 justify -center">
              <button     className="bg-gradient - to - r from - purple - 600 to - pink - 600 hover:from - purple - 700 hover:to - pink - 700 text-white font - semibold py-4 px-8 rounded-lg transition - all duration - 300 transform hover:scale -105">
