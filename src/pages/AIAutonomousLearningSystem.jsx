import { Helmet } from 'react - helmet -async';

export default function Page() {
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Autonomous Learning Process
            </h2>
            <div className="grid md:grid - cols - 5 gap-6">
              <div className="text-center">
                <div className="bg-violet - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  1
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Assessment
                </h3>
                <p className="text-gray - 300 text-sm">
                  Evaluate learning style
                </p>
              </div>

              <div className="text-center">
                <div className="bg-violet - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  2
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Customization
                </h3>
                <p className="text-gray - 300 text-sm">
                  Create learning path
                </p>
              </div>

              <div className="text-center">
                <div className="bg-violet - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  3
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Learning
                </h3>
                <p className="text-gray - 300 text-sm">
                  Adaptive content delivery
                </p>
              </div>

              <div className="text-center">
                <div className="bg-violet - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  4
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Evaluation
                </h3>
                <p className="text-gray - 300 text-sm">
                  Continuous assessment
                </p>
              </div>

              <div className="text-center">
                <div className="bg-violet - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  5
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Optimization
                </h3>
                <p className="text-gray - 300 text-sm">
                  Improve learning path
                </p>
              </div>
            </div>
          </div>

          {/* Learning Domains */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Learning Domains
            </h2>
            <div className="grid md:grid - cols - 4 gap-6">
              {['Academic Subjects',
                'Professional Skills',
                'Creative Arts',
                'Technical Training',
                'Language Learning',
                'Personal Development',
                'Certification Prep',
                'Hobby Skills',
              ].map (domain => (<div
                  key={domain}
                  className="bg-white / 5 rounded-lg p - 4 text-center border border-white / 10"
                >
                  <span className="text-white font -medium">{domain}</span>
                </div>) ) }
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              System Applications
            </h2>
            <div className="grid md:grid - cols - 3 gap-8">
              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  K - 12 Education
                </h3>
                <p className="text-gray -300">
                  Personalized learning for students
                </p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Corporate Training
                </h3>
                <p className="text-gray -300">Employee skill development</p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Higher Education
                </h3>
                <p className="text-gray -300">
                  University course optimization
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient - to - r from - violet - 600 to - purple - 600 rounded-2xl p -12">
            <h2 className="text-3xl font - bold text-white mb-6">
              Ready for Autonomous Learning?
            </h2>
            <p className="text-xl text-violet - 100 mb-8 max - w-2xl mx -auto">
              Experience education that adapts to you and learns how you learn
              best
            </p>
            <div className="flex flex - col sm:flex - row gap-4 justify -center">
              <button className="bg-white text-violet - 600 px-8 py-3 rounded-lg font - semibold hover:bg-gray - 100 transition -colors">
                Start Learning
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font - semibold hover:bg-white hover:text-violet - 600 transition -colors">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>) ;
};
