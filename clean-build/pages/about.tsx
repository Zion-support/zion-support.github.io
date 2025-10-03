import React from 'react';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and commitment to delivering cutting-edge technology solutions that transform businesses." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="text-left">
        {/* Hero Section */}
        <section className="text-left">
          <div className="text-left"></div>
          <div className="text-left">
            <div className="text-left">
              <h1 className="text-left">
                About <span className="text-left">Zion Tech Group<
              </h1>
              <p className="text-left">
                We are a leading technology solutions provider dedicated to transforming businesses 
                through innovative digital solutions and cutting-edge technology.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="text-left">
          <div className="text-left">
            <div className="text-left">
              <div>
                <h2 className="text-left">
                  Our <span className="text-left">Mission<
                </h2>
                <p className="text-left">
                  To empower businesses with innovative technology solutions that drive growth, 
                  efficiency, and digital transformation. We believe technology should be accessible, 
                  reliable, and transformative.
                </p>
                <p className="text-left">
                  Our mission is to bridge the gap between complex technology and business needs, 
                  delivering solutions that not only meet current requirements but also scale for 
                  future growth and innovation.
                </p>
              </div>
              <div className="text-left">
                <div className="text-left">
                  <div className="text-left">
                    <div className="text-left">100+</div>
                    <div className="text-left">Projects Completed</div>
                  </div>
                  <div className="text-left">
                    <div className="text-left">50+</div>
                    <div className="text-left">Happy Clients</div>
                  </div>
                  <div className="text-left">
                    <div className="text-left">5+</div>
                    <div className="text-left">Years Experience</div>
                  </div>
                  <div className="text-left">
                    <div className="text-left">24/7</div>
                    <div className="text-left">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="text-left">
          <div className="text-left">
            <div className="text-left">
              <h2 className="text-left">
                Our <span className="text-left">Values<
              </h2>
              <p className="text-left">
                The principles that guide everything we do and shape our approach to technology solutions.
              </p>
            </div>

            <div className="text-left">
              <div className="text-left">
                <div className="text-left">
                  <span className="text-left">🎯<
                </div>
                <h3 className="text-left">Excellence</h3>
                <p className="text-left">
                  We strive for excellence in every project, delivering high-quality solutions that exceed expectations.
                </p>
              </div>

              <div className="text-left">
                <div className="text-left">
                  <span className="text-left">🤝<
                </div>
                <h3 className="text-left">Collaboration</h3>
                <p className="text-left">
                  We work closely with our clients as partners, ensuring their vision becomes reality.
                </p>
              </div>

              <div className="text-left">
                <div className="text-left">
                  <span className="text-left">💡<
                </div>
                <h3 className="text-left">Innovation</h3>
                <p className="text-left">
                  We embrace cutting-edge technologies and innovative approaches to solve complex challenges.
                </p>
              </div>

              <div className="text-left">
                <div className="text-left">
                  <span className="text-left">🔒<
                </div>
                <h3 className="text-left">Integrity</h3>
                <p className="text-left">
                  We maintain the highest standards of honesty, transparency, and ethical business practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="text-left">
          <div className="text-left">
            <div className="text-left">
              <h2 className="text-left">
                Our <span className="text-left">Team<
              </h2>
              <p className="text-left">
                Meet the talented individuals who make Zion Tech Group a leader in technology solutions.
              </p>
            </div>

            <div className="text-left">
              <div className="text-left">
                <div className="text-left">
                  <span className="text-left">👨‍💻<
                </div>
                <h3 className="text-left">Development Team</h3>
                <p className="text-left">Senior Full-Stack Developers</p>
                <p className="text-left">
                  Expert developers with years of experience in modern web technologies, 
                  mobile development, and cloud architecture.
                </p>
              </div>

              <div className="text-left">
                <div className="text-left">
                  <span className="text-left">🎨<
                </div>
                <h3 className="text-left">Design Team</h3>
                <p className="text-left">UI/UX Designers</p>
                <p className="text-left">
                  Creative designers who craft beautiful, intuitive user experiences 
                  that engage users and drive business results.
                </p>
              </div>

              <div className="text-left">
                <div className="text-left">
                  <span className="text-left">🤖<
                </div>
                <h3 className="text-left">AI Specialists</h3>
                <p className="text-left">Machine Learning Engineers</p>
                <p className="text-left">
                  AI experts who develop intelligent solutions using machine learning, 
                  natural language processing, and computer vision.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-left">
          <div className="text-left">
            <h2 className="text-left">
              Ready to Work With Us?
            </h2>
            <p className="text-left">
              Let's discuss how our team can help transform your business with innovative technology solutions.
            </p>
            <div className="text-left">
              <a href="/contact" className="text-left">
                Get In Touch
              </a>
              <a href="/services" className="text-left">
                View Our Services
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}