      </div>
    </Layout>
        {/* CTA Section */}
        <section className="py - 20 bg - gradient - to - r from - indigo - 600 to - purple - 600 text - white">;
          <div className="container mx - auto px - 4">;
            <motion.div;
              className="text - center";
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h2 className="text - 3xl md:text - 4xl font - bold mb - 6">;
                Ready to Get Started?;
              </h2>;
              <p className="text - xl text - indigo - 100 mb - 8 max - w-3xl mx - auto">;
                Start building with our APIs today. Get your API key and begin;
                integrating with our powerful services.;
              </p>;
              <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
                <a;
                  href="/contact";
                  className="px - 8 py - 4 bg - white text - indigo - 600 rounded - lg hover:shadow - lg transition - all duration - 300 font - semibold";
                >;
                  Get API Key;
                </a>;
                <a;
                  href="/docs";
                  className="px - 8 py - 4 border - 2 border - white text - white rounded - lg hover:bg - white hover:text - indigo - 600 transition - all duration - 300 font - semibold";
                >;
                  View Documentation;
                </a>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </MainLayout>);
}
