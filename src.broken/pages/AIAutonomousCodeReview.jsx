import { Helmet } from 'react - helmet -async';

export default function Page() {
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              How It Works
            </h2>
            <div className="grid md:grid - cols - 3 gap-8">
              <div className="text-center">
                <div className="bg-green - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  1
                </div>
                <h3 className="text-xl font - semibold text-white mb-3">
                  Code Submission
                </h3>
                <p className="text-gray -300">
                  Submit your code through our platform or integrate with your
                  existing CI / CD pipeline
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  2
                </div>
                <h3 className="text-xl font - semibold text-white mb-3">
                  AI Analysis
                </h3>
                <p className="text-gray -300">
                  Our AI system analyzes your code for quality, security, and
                  performance issues
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  3
                </div>
                <h3 className="text-xl font - semibold text-white mb-3">
                  Detailed Report
                </h3>
                <p className="text-gray -300">
                  Receive comprehensive feedback with actionable recommendations
                  and fixes
                </p>
              </div>
            </div>
          </div>

          {/* Supported Languages */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Supported Languages & Frameworks
            </h2>
            <div className="grid md:grid - cols - 4 gap-6">
              {['JavaScript',
                'TypeScript',
                'Python',
                'Java',
                'C#',
                'Go',
                'Rust',
                'PHP',
                'Ruby',
                'Swift',
                'Kotlin',
                'Scala',
              ].map (lang => (<div
                  key={lang}
                  className="bg-white / 5 rounded-lg p - 4 text-center border border-white / 10"
                >
                  <span className="text-white font -medium">{lang}</span>
                </div>) ) }
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient - to - r from - green - 600 to - emerald - 600 rounded-2xl p -12">
            <h2 className="text-3xl font - bold text-white mb-6">
              Ready to Revolutionize Your Code Review?
            </h2>
            <p className="text-xl text-green - 100 mb-8 max - w-2xl mx -auto">
              Join thousands of developers who have already transformed their
              workflow with AI - powered code review
            </p>
            <div className="flex flex - col sm:flex - row gap-4 justify -center">
              <button className="bg-white text-green - 600 px-8 py-3 rounded-lg font - semibold hover:bg-gray - 100 transition -colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font - semibold hover:bg-white hover:text-green - 600 transition -colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>) ;
};
