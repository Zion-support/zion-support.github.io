class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from 'react';
                      <span className="text - lg text - gray - 400">/{service.period}</span>;
                    </div>;
                  </div>;
                  <ul className="space - y-3 mb - 6">;
                    {service.features.map ((feature, feature_index) => (
                      <li key={feature_index} className="flex items - center text - gray - 300">;
                        <CheckCircle className="w - 5 h - 5 text - blue - 400 mr - 3 flex - shrink - 0" />;
                        {feature}
                      </li>))}
                  </ul>;
                  <a;
                    href="/contact";
                    className="w - full block text - center px - 6 py - 3 bg - gradient - to - r from - blue - 500 to - purple - 600 text - white font - semibold rounded - lg hover:from - blue - 600 hover:to - purple - 700 transition - all duration - 300";
                  >;
                    Get Started;
                  </a>;
                </motion.div>))}
            </div>;
          </div>;
        </section>;
        {/* CTA Section */}
        <section className="py - 20 px - 4 bg - gradient - to - b from - gray - 900 to - black">;
          <div className="max - w-4xl mx - auto text - center">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h2 className="text - 4xl md: text - 5xl font - bold mb - 6 bg - gradient - to - r from - blue - 400 to - purple - 500 bg - clip - text text - transparent">;
                Ready for the Quantum Future?;
              </h2>;
              <p className="text - xl text - gray - 300 mb - 8 max - w-2xl mx - auto">;
                Join the quantum revolution and solve problems that were previously impossible with classical computing;
              </p>;
              <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
                <a;
                  href="/contact";
                  className="px - 8 py - 4 bg - gradient - to - r from - blue - 500 to - purple - 600 text - white font - semibold rounded - lg hover:from - blue - 600 hover:to - purple - 700 transition - all duration - 300 transform hover:scale - 105";
                >;
                  Start Your Quantum Journey;
                </a>;
                <a;
                  href="/contact";
                  className="px - 8 py - 4 border - 2 border - blue - 400 text - blue - 400 font - semibold rounded - lg hover:bg - blue - 400 hover:text - black transition - all duration - 300 transform hover:scale - 105";
                >;
                  Schedule Consultation;
                </a>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </main>;
    </Layout>);
}
;
export default QuantumServicesPage;
;