
const UltimateZionServicesMarketing: React.FC = () : JSX.Element => {;
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [{
      id: 'quantum - computing',
      name: 'Quantum Computing & AI',
      icon: '⚛️',
      color: 'from - blue - 600 to - cyan - 600',
      description: 'Revolutionary quantum computing solutions that solve previously impossible problems',
      marketSize: '$65.4 billion by 2027',
      growthRate: '500% annually'
    },
    {
      id: 'blockchain - web3',
      name: 'Blockchain & Web3',
      icon: '🔗',
      color: 'from - green - 600 to - emerald - 600',
      description: 'Next - generation decentralized solutions with AI optimization',
      marketSize: '$67.4 billion by 2027',
      growthRate: '400% annually'
    },
    {
      id: 'space - tech',
      name: 'Space Technology',
      icon: '🛰️',
      color: 'from - indigo - 600 to - purple - 600',
      description: 'AI - powered satellite and space mission management',
      marketSize: '$469.8 billion by 2027',
      growthRate: '300% annually'
    },
    {
      id: 'biotech-ai',
      name: 'Biotech & AI',
      icon: '🧬',
      color: 'from - red - 600 to - pink - 600',
      description: 'Revolutionary biomedical research and drug discovery',
      marketSize: '$67.8 billion by 2027',
      growthRate: '600% annually'
    },
    {
      id: 'emerging - tech',
      name: 'Emerging Technology',
      icon: '🚀',
      color: 'from - orange - 600 to - red - 600',
      description: 'Cutting - edge technologies that define the future',
      marketSize: '$3.7 billion by 2027',
      growthRate: '800% annually'
    },
    {
      id: 'micro - saas',
      name: 'Micro SAAS Solutions',
      icon: '💻',
      color: 'from - blue - 600 to - indigo - 600',
      description: 'Intelligent business automation and optimization',
      marketSize: '$15.8 billion by 2027',
      growthRate: '200% annually'
    },
    {
      id: 'it - services',
      name: 'Enterprise IT Services', ;
  const selectedServices = getServicesByCategory(selectedCategory) ;

  return (<div  className="min - h-screen bg-gradient - to - br from - slate - 900 via - purple - 900 to - slate - 900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div  className="max - w-7xl mx - auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font - bold mb-6"

          <motion.p
            className="text-xl text-gray - 300 mb-8 max - w-4xl mx -auto"
          <motion.div
            className="grid grid - cols - 1 md:grid - cols - 4 gap-6 mb-12"
          <motion.div
            className="bg-gradient - to - r from - purple - 600 / 20 to - pink - 600 / 20 backdrop - blur - lg rounded-xl p - 6 mb-8 max - w-4xl mx - auto border border-purple -400 / 30"
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
      {/* Category Navigation */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div  className="max - w-7xl mx -auto">
          <motion.div
            className="flex flex - wrap gap-4 justify -center"
            {categories.map((category) => (<button     key={category.id}
                onClick={ () => setSelectedCategory(category.id) }
                className={`px-6 py-3 rounded-xl border transition - all duration - 300 ${selectedCategory === category.id
                    ? 'bg-gradient - to - r from - purple - 600 to - pink - 600 border-purple - 400 text-white shadow-lg'
                    : 'bg-white / 10 border-white / 20 text-gray - 300 hover:bg-white / 20 hover:border-white / 40'

              return (<motion.div
                  className="bg-gradient - to - r from - purple - 600 / 20 to - pink - 600 / 20 backdrop - blur - lg rounded-2xl p - 8 border border-purple -400 / 30"
      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div  className="max - w-7xl mx -auto">
          <motion.h2
            className="text-3xl md:text-4xl font - bold text-center mb-12 text-transparent bg-clip - text bg-gradient - to - r from - purple - 400 to - pink -400"

          <motion.div
            className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap-8"
            }}
            initial="hidden"
            whileInView="visible"
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
