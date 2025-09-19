import { Helmet } from 'react - helmet -async';

export default function Page() {
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Personalized Learning Process
            </h2>
            <div className="grid md:grid - cols - 4 gap-8">
              <div className="text-center">
                <div className="bg-teal - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  1
                </div>
                <h3 className="text-xl font - semibold text-white mb-3">
                  Assessment
                </h3>
                <p className="text-gray -300">
                  Evaluate current knowledge and skills
                </p>
              </div>

              <div className="text-center">
                <div className="bg-teal - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  2
                </div>
                <h3 className="text-xl font - semibold text-white mb-3">
                  Customization
                </h3>
                <p className="text-gray -300">
                  Create personalized learning path
                </p>
              </div>

              <div className="text-center">
                <div className="bg-teal - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  3
                </div>
                <h3 className="text-xl font - semibold text-white mb-3">
                  Learning
                </h3>
                <p className="text-gray -300">
                  Interactive lessons and exercises
                </p>
              </div>

              <div className="text-center">
                <div className="bg-teal - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  4
                </div>
                <h3 className="text-xl font - semibold text-white mb-3">
                  Evaluation
                </h3>
                <p className="text-gray -300">
                  Continuous assessment and feedback
                </p>
              </div>
            </div>
          </div>

          {/* Subjects */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Available Subjects
            </h2>
            <div className="grid md:grid - cols - 4 gap-6">
              {['Mathematics',
                'Science',
                'History',
                'Literature',
                'Computer Science',
                'Languages',
                'Arts',
                'Business',
              ].map (subject => (<div
                  key={subject}
                  className="bg-white / 5 rounded-lg p - 4 text-center border border-white / 10"
                >
                  <span className="text-white font -medium">{subject}</span>
                </div>) ) }
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Learning Applications
            </h2>
            <div className="grid md:grid - cols - 3 gap-8">
              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  K - 12 Education
                </h3>
                <p className="text-gray -300">
                  Supplemental learning and homework help
                </p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Higher Education
                </h3>
                <p className="text-gray -300">
                  University courses and degree programs
                </p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Professional Development
                </h3>
                <p className="text-gray -300">
                  Skills training and certification
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient - to - r from - teal - 600 to - cyan - 600 rounded-2xl p -12">
            <h2 className="text-3xl font - bold text-white mb-6">
              Ready to Learn with AI?
            </h2>
            <p className="text-xl text-teal - 100 mb-8 max - w-2xl mx -auto">
              Experience personalized education that adapts to your learning
              style and pace
            </p>
            <div className="flex flex - col sm:flex - row gap-4 justify -center">
              <button className="bg-white text-teal - 600 px-8 py-3 rounded-lg font - semibold hover:bg-gray - 100 transition -colors">
                Start Learning
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font - semibold hover:bg-white hover:text-teal - 600 transition -colors">
                View Courses
              </button>
            </div>
          </div>
        </div>
      </div>
    </>) ;
};
