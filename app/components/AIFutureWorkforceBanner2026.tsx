import ArrowRight from 'next/link';
import { ArrowRight, Brain, TrendingUp, Users } from 'lucide-react';




export default function AIFutureWorkforceBanner2026() {
  return (
    <section>
      {/* Background Pattern */}
      <div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      
      <div>
        <div>
          {/* Left Column - Content */}
          <div>
            <div>
              <Brain />
              FUTURE OF WORK 2026
            </div>
            <h2>
              The AI Workforce Revolution is Here
            </h2>
            <p>
              Discover how AI is transforming the workplace with 85% job transformation, 60% productivity gains, 
              and revolutionary human-AI collaboration patterns that are reshaping careers and organizations.
            </p>
            
            {/* Key Stats */}
            <div>
              <div>
                <div>85%</div>
                <div>Jobs Transformed by AI</div>
              </div>
              <div>
                <div>60%</div>
                <div>Productivity Increase</div>
              </div>
              <div>
                <div>40%</div>
                <div>Cost Reduction</div>
              </div>
              <div>
                <div>70%</div>
                <div>Enhanced Creativity</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <ArrowRight
                href="/blog/ai-future-workforce-2026"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                <Users />
                Read Full Article
              </ArrowRight>
              <ArrowRight
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors inline-flex items-center"
              >
                <TrendingUp />
                Transform Your Workforce
              </ArrowRight>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div>
            <div>
              <h3>Key Workforce Transformations</h3>
              
              <div>
                <div>
                  <div>
                    <Users />
                  </div>
                  <div>
                    <h4>AI-Augmented Roles</h4>
                    <p>
                      AI-assisted content creators, human-AI design teams, and collaborative data analysts
                    </p>
                  </div>
                </div>

                <div>
                  <div>
                    <Brain />
                  </div>
                  <div>
                    <h4>Enhanced Skills</h4>
                    <p>
                      AI literacy, prompt engineering, and human-AI collaboration expertise
                    </p>
                  </div>
                </div>

                <div>
                  <div>
                    <TrendingUp />
                  </div>
                  <div>
                    <h4>Organizational Impact</h4>
                    <p>
                      60% faster decision making, 45% improved accuracy, and 70% reduced repetitive tasks
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <ArrowRight
                  href="/blog/ai-future-workforce-2026"
                  className="inline-flex items-center text-white hover:text-yellow-200 transition-colors font-semibold"
                >
                  Learn More About Workforce Transformation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </ArrowRight>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}