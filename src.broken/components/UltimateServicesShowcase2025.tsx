import { Link  } from 'react-router-dom';
export default function Page() {
;

  return (<div  className="min - h-screen bg-gradient - to - br from - zion - slate - dark via - zion - slate to - zion - slate - light text-white relative overflow-hidden">
      {/* Animated Background */}
      <div  className="absolute inset -0">
        <div  className="absolute inset - 0 bg-[linear - gradient (rgba (34,221,210,0.03) _1px,transparent_1px) ,linear - gradient(90deg,rgba (34,221,210,0.03) _1px,transparent_1px) ] bg-[size:100px_100px] animate -pulse" />
        <div  className="absolute inset - 0 bg-gradient - to - br from - zion - purple / 5 via - transparent to - zion -cyan / 5" />
        <div  className="absolute top - 0 left - 0 w-full h-full bg-gradient - radial from - zion - cyan / 10 via - transparent to -transparent" />
          <motion.div
            className="grid grid - cols - 2 md:grid - cols - 4 gap-6 max - w-5xl mx - auto mb-12"
            variants={containerVariants}
          <motion.div
            className="max - w-4xl mx - auto mb-8"

              <div  className="flex items - center gap-2">
                <button     onClick={ () => setViewMode('grid') }
                  className={`p - 2 rounded-lg transition - colors ${viewMode === 'grid' ? 'bg-zion - cyan text-white' : 'glass text-gray - 300 hover:text-white'}`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 3a2 2 0 00 - 2 2v2a2 2 0 002 2h2a2 2 0 002 - 2V5a2 2 0 00 - 2-2H5zM5 11a2 2 0 00 - 2 2v2a2 2 0 002 2h2a2 2 0 002 - 2v - 2a2 2 0 00 - 2-2H5zM11 5a2 2 0 012 - 2h2a2 2 0 012 2v2a2 2 0 01 - 2 2h-2a2 2 0 01 - 2-2V5zM11 13a2 2 0 012 - 2h2a2 2 0 012 2v2a2 2 0 01 - 2 2h-2a2 2 0 01 - 2-2v - 2z" />
      {/* Services Grid / List */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">;
        <div  className="max - w-7xl mx -auto">
          <motion.div
            className={viewMode === 'grid'
              ? "grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap-8"
              : "space - y-6"
                className={viewMode === 'grid'
                  ? "glass rounded-2xl p - 6 border border-white / 20 hover:border-zion - cyan / 40 transition - all duration - 500 hover:transform hover:scale - 105 cursor - pointer group"
                  : "glass rounded-2xl p - 6 border border-white / 20 hover:border-zion - cyan / 40 transition - all duration - 500 cursor - pointer group"

                <h3 className="text-xl font - semibold text-white mb-3 group - hover:text-zion - cyan transition - colors duration -300">{service.name}</h3>
                <p className="text-gray - 300 mb-4 line - clamp - 3 leading -relaxed">{service.description}</p>

                <div  className="mb-4">
                  <span className="inline - block px-3 py-1 bg-zion - purple / 20 text-zion - purple text-sm rounded-full border border-zion -purple / 30">
      {/* Why Choose Zion Tech Group */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white / 5">;
        <div  className="max - w-7xl mx -auto">
          <motion.div
            className="text-center mb-16"

          <motion.div
            className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap-8"
            variants={containerVariants}

            <motion.div variants={itemVariants} className="glass rounded-xl p - 6 border border-white / 20 hover:border-zion - cyan / 30 transition - all duration -300 group">
              <div  className="text-4xl mb-4 group - hover:scale - 110 transition - transform duration -300">🎯</div>
              <h3 className="text-xl font - semibold text-white mb-3">Results Driven</h3>
              <p className="text-gray -300">Our solutions are designed to deliver measurable business outcomes, from increased efficiency to improved customer satisfaction.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass rounded-xl p - 6 border border-white / 20 hover:border-zion - cyan / 30 transition - all duration -300 group">
              <div  className="text-4xl mb-4 group - hover:scale - 110 transition - transform duration -300">🤝</div>
              <h3 className="text-xl font - semibold text-white mb-3">Partnership Approach</h3>
              <p className="text-gray -300">We work as an extension of your team, providing ongoing support and collaboration to ensure long - term success.</p>

                <div>
                  <h3 className="text-lg font - semibold text-zion - purple mb-3">Benefits</h3>
                  <ul className="space - y-2">
                    {selectedService.benefits.map((benefit, idx) => (<li key={idx} className="text-gray - 300 flex items -center">
                        <TrendingUp className="w-4 h-4 text-zion - green mr-2 flex - shrink -0" />
                        {benefit}
