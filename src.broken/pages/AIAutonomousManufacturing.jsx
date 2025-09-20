import { Helmet } from 'react - helmet -async';

export default function Page() {
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Autonomous Manufacturing Process
            </h2>
            <div className="grid md:grid - cols - 5 gap-6">
              <div className="text-center">
                <div className="bg-gray - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  1
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Design
                </h3>
                <p className="text-gray - 300 text-sm">
                  AI - assisted product design
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gray - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  2
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Planning
                </h3>
                <p className="text-gray - 300 text-sm">
                  Production planning and scheduling
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gray - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  3
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Production
                </h3>
                <p className="text-gray - 300 text-sm">
                  Automated manufacturing execution
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gray - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  4
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Quality
                </h3>
                <p className="text-gray - 300 text-sm">
                  AI - powered quality control
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gray - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  5
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Optimization
                </h3>
                <p className="text-gray - 300 text-sm">
                  Continuous process improvement
                </p>
              </div>
            </div>
          </div>

          {/* Manufacturing Areas */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Manufacturing Solutions
            </h2>
            <div className="grid md:grid - cols - 4 gap-6">
              {['Production Planning',
                'Quality Control',
                'Equipment Maintenance',
                'Supply Chain',
                'Inventory Management',
                'Safety Systems',
                'Energy Optimization',
                'Waste Reduction',
              ].map (area => (<div
                  key={area}
                  className="bg-white / 5 rounded-lg p - 4 text-center border border-white / 10"
                >
                  <span className="text-white font -medium">{area}</span>
                </div>) ) }
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Industry Applications
            </h2>
            <div className="grid md:grid - cols - 3 gap-8">
              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Automotive
                </h3>
                <p className="text-gray -300">
                  Vehicle manufacturing automation
                </p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Electronics
                </h3>
                <p className="text-gray -300">
                  Circuit board and device production
                </p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Pharmaceuticals
                </h3>
                <p className="text-gray -300">
                  Drug manufacturing and quality control
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient - to - r from - gray - 600 to - slate - 600 rounded-2xl p -12">
            <h2 className="text-3xl font - bold text-white mb-6">
              Ready for Smart Manufacturing?
            </h2>
            <p className="text-xl text-gray - 100 mb-8 max - w-2xl mx -auto">
              Transform your factory with AI that works 24 / 7 to maximize
              production efficiency
            </p>
            <div className="flex flex - col sm:flex - row gap-4 justify -center">
              <button className="bg-white text-gray - 600 px-8 py-3 rounded-lg font - semibold hover:bg-gray - 100 transition -colors">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font - semibold hover:bg-white hover:text-gray - 600 transition -colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>) ;
};
