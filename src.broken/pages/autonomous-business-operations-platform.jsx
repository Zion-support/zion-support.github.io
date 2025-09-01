import { Link  } from 'react-router-dom';

export default function Page() {
      <div className="py-20 bg-slate -800 / 50">
        <div className="max - w-7xl mx - auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font - bold text-center mb-16 bg-gradient - to - r from - green - 400 to - emerald - 400 bg-clip - text text-transparent">
            Proven Results
          </h2>
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap-8">
            <div className="text-center">
              <div className="text-5xl font - bold text-green - 400 mb-2">
                70%
              </div>
              <div className="text-gray -300">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font - bold text-emerald - 400 mb-2">
                24 / 7
              </div>
              <div className="text-gray -300">Operations</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font - bold text-teal - 400 mb-2">
                95%
              </div>
              <div className="text-gray -300">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font - bold text-green - 400 mb-2">
                3x
              </div>
              <div className="text-gray -300">Faster Processing</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient - to - r from - green - 900 / 20 to - emerald -900 / 20">
        <div className="max - w-4xl mx - auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font - bold mb-6 bg-gradient - to - r from - green - 400 to - emerald - 400 bg-clip - text text-transparent">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-gray - 300 mb-8">
            Join hundreds of companies already running autonomous operations and
            experiencing unprecedented efficiency and growth.</p>
          <div className="flex flex - col sm:flex - row gap-4 justify -center">
            <Link
              to="/contact"
              className="bg-gradient - to - r from - green - 600 to - emerald - 600 text-white px-8 py-4 rounded-lg font - semibold hover:from - green - 700 hover:to - emerald - 700 transition - all duration - 300 text-lg"
            >
              Schedule a Demo
            </Link>
            <Link
              to="/services / ai - automation"
              className="border border-green - 500 text-green - 400 px-8 py-4 rounded-lg font - semibold hover:bg-green - 500 hover:text-white transition - all duration - 300 text-lg"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </div>) ;
};
