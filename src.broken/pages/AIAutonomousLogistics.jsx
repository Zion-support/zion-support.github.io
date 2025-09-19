import { Helmet } from 'react - helmet -async';

export default function Page() {
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Autonomous Logistics Process
            </h2>
            <div className="grid md:grid - cols - 5 gap-6">
              <div className="text-center">
                <div className="bg-sky - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  1
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Demand Forecast
                </h3>
                <p className="text-gray - 300 text-sm">
                  AI predicts future requirements
                </p>
              </div>

              <div className="text-center">
                <div className="bg-sky - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  2
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Inventory Planning
                </h3>
                <p className="text-gray - 300 text-sm">
                  Optimize stock levels
                </p>
              </div>

              <div className="text-center">
                <div className="bg-sky - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  3
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Route Optimization
                </h3>
                <p className="text-gray - 300 text-sm">
                  AI plans optimal delivery routes
                </p>
              </div>

              <div className="text-center">
                <div className="bg-sky - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  4
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Execution
                </h3>
                <p className="text-gray - 300 text-sm">
                  Automated order fulfillment
                </p>
              </div>

              <div className="text-center">
                <div className="bg-sky - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  5
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Monitoring
                </h3>
                <p className="text-gray - 300 text-sm">
                  Real - time performance tracking
                </p>
              </div>
            </div>
          </div>

          {/* Logistics Areas */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Logistics Solutions
            </h2>
            <div className="grid md:grid - cols - 4 gap-6">
              {['Warehouse Management',
                'Transportation',
                'Inventory Control',
                'Order Fulfillment',
                'Supply Chain Planning',
                'Last Mile Delivery',
                'Returns Management',
                'Supplier Management',
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
                  E - commerce
                </h3>
                <p className="text-gray -300">
                  Online retail logistics optimization
                </p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Manufacturing
                </h3>
                <p className="text-gray -300">
                  Production supply chain management
                </p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Healthcare
                </h3>
                <p className="text-gray -300">
                  Medical supply chain optimization
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient - to - r from - sky - 600 to - blue - 600 rounded-2xl p -12">
            <h2 className="text-3xl font - bold text-white mb-6">
              Ready to Optimize Your Logistics?
            </h2>
            <p className="text-xl text-sky - 100 mb-8 max - w-2xl mx -auto">
              Transform your supply chain with AI that works 24 / 7 to maximize
              efficiency
            </p>
            <div className="flex flex - col sm:flex - row gap-4 justify -center">
              <button className="bg-white text-sky - 600 px-8 py-3 rounded-lg font - semibold hover:bg-gray - 100 transition -colors">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font - semibold hover:bg-white hover:text-sky - 600 transition -colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>) ;
};
