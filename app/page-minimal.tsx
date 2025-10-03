import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Zion Tech Group - Advanced AI and IT Solutions',
  description: 'Leading provider of AI-powered enterprise solutions, automation, and digital transformation services.',
};

export default function HomePage() {
  return (
    <div className="text-left"></div>
      <header className="text-left">
        <div className="text-left"></div>
          <div className="text-left"></div>
            <div className="text-left"></div>
              <Link href="/" className="text-left">
                Zion Tech Group
              </Link>
            </div>
            <nav className="text-left">
              <Link href="/" className="text-left">Home</Link>"
              <Link href="/services" className="text-left">Services</Link>"
              <Link href="/blog" className="text-left">Blog</Link>"
              <Link href="/case-studies" className="text-left">Case Studies</Link>"
            </nav>
          </div>
        </div>
      </header>

      <main>
        <section className="text-left">
          <div className="text-left"></div>
            <h1 className="text-left">
              Transform Your Business with
              <span className="text-left">
                {' '}AI-Powered Solutions
              </span>/span>/span>/span>/span>/span>/span>
            </h1>
            <p className="text-left">
              Zion Tech Group delivers cutting-edge AI micro SaaS services, cloud automation, 
              and enterprise IT solutions that drive growth, efficiency, and innovation.
            </p>
            <div className="text-left"></div>
              <Link
                href="/services"
                className="text-left">
                Explore Our Services
              </Link>
              <a
                href="tel:+13024640950"
                className="text-left">
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>

        <section className="text-left">
          <div className="text-left"></div>
            <div className="text-left"></div>
              <h2 className="text-left">
                Latest AI Content & Insights
              </h2>
              <p className="text-left">
                Discover our latest AI insights, case studies, and success stories.
              </p>
            </div>
            
            <div className="text-left"></div>
              <Link href="/blog/ai-enterprise-transformation-2026" className="text-left">
                <div className="text-left"></div>
                  <div className="text-left"></div>
                    <span className="text-left">
                      Featured Article
                    </span>/span>/span>/span>/span>/span>/span>
                    <span className="text-left">20 min read</span>/span>/span>/span>/span>/span>/span>
                    <span className="text-left">20 min read>
                  </span>/span>/span>/span>/span>/span>/div>
                  <h3 className="text-left">
                    AI Enterprise Transformation 2026
                  </h3>
                  <p className="text-left">
                    Master AI enterprise transformation with proven strategies, ROI frameworks, and implementation roadmaps.
                  </p>
                  <div className="text-left">
                    Read Article →</div>
                  </div>
                </div>
              </Link>

              <Link href="/blog/ai-autonomous-systems-2026" className="text-left">
                <div className="text-left"></div>
                  <div className="text-left"></div>
                    <span className="text-left">
                      New Article
                    </span>/span>/span>/span>/span>/span>/span>
                    <span className="text-left">18 min read>
                  </span>/span>/span>/span>/span>/span>/div>
                  <h3 className="text-left">
                    AI Autonomous Systems 2026
                  </h3>
                  <p className="text-left">
                    Master autonomous AI systems with 300% ROI strategies and enterprise-ready deployment patterns.
                  </p>
                  <div className="text-left">
                    Read Article →</div>
                  </div>
                </div>
              </Link>

              <Link href="/case-studies/manufacturing-ai-transformation-2026" className="text-left">
                <div className="text-left"></div>
                  <div className="text-left"></div>
                    <span className="text-left">
                      Success Story
                    </span>/span>/span>/span>/span>/span>/span>
                    <span className="text-left">Manufacturing>
                  </span>/span>/span>/span>/span>/span>/div>
                  <h3 className="text-left">
                    Manufacturing AI Transformation
                  </h3>
                  <p className="text-left">
                    See how a global manufacturer achieved 60% cost reduction and 90% efficiency improvement.
                  </p>
                  <div className="text-left">
                    View Case Study →</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-left">
        <div className="text-left"></div>
          <div className="text-left"></div>
            <div></div>
              <h3 className="text-left">Zion Tech Group</h3>"
              <p className="text-left">
                Leading provider of AI-powered enterprise solutions and digital transformation services.
              </p>
            </div>
            <div></div>
              <h3 className="text-left">Services</h3>"
              <ul className="text-left">
                <li><Link href="/services" className="text-left">AI Solutions</Link></li>"
                <li><Link href="/services" className="text-left">Automation</Link></li>"
                <li><Link href="/services" className="text-left">Digital Transformation</Link></li></ul>
            </div>
            <div></div>
              <h3 className="text-left">Resources</h3>"
              <ul className="text-left">
                <li><Link href="/blog" className="text-left">Blog</Link></li>"
                <li><Link href="/case-studies" className="text-left">Case Studies</Link></li></ul>
            </div>
            <div></div>
              <h3 className="text-left">Contact</h3>"
              <p className="text-left">
                Get in touch for your AI transformation needs.
              </p>
            </div>
          </div>
          <div className="text-left"></div>
            <p>&copy; 2026 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}