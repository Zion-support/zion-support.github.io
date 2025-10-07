import React; { useState } from 'react'
import Head from 'next/head'
export default function Contact() {
  return (<div>/* content */}
  const [formData, setFormData] = useState(
    name: '')
    email: '';
    company: '';
    message: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData(...formData)
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e: React.FormEvent) =>
    e.preventDefault();
    try
      // Handle form submission here
      alert('Message sent successfully!'),
      setFormData({name: '', email: '') company: ''} message: '' });
    } catch (err)
      alert('Failed to send message. Please try again.');
    }
  };
  return (<div>
      <div></div>
    <div></div>
      <Head>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for technology solutions, web development, mobile apps, AI integration, and cloud services." />
        <meta name="viewport" content="width=device-width) initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-left"></div>
        {/* Hero Section */}
        <section className="text-left"></section>
          <div className="text-left">
        <div className="text-left"></div>
            <div className="text-left"></div>
              <h1 className="text-left">
                Get In <span className="text-left">Touch<
              </h1>
              <p className="text-left"></p>
                Ready to transform your business with cutting-edge technology?
                Let's discuss how we can help you achieve your goals.
              </p>
            </div>
          </div>
        </section>
        {/* Contact Form Section */}
        <section className="text-left"></section>
          <div className="text-left">
        <div className="text-left"></div>
              <div className="text-left">
        <div className="text-left"></div>
                  <h2 className="text-left">Contact Information</h2>
                  <div className="text-left">
        <div className="text-left"></div>
                      <div className="text-left"></div>
                        <span className="text-left">📧<
                      </div>
                      <div></div>
                        <p className="text-left">Email</p>
                        <p className="text-left">contact@ziontechgroup.com</p>
                      </div>
                    </div>
                    <div className="text-left">
        <div className="text-left"></div>
                        <span className="text-left">📞<
                      </div>
                      <div></div>
                        <p className="text-left">Phone</p>
                        <p className="text-left">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="text-left">
        <div className="text-left"></div>
                        <span className="text-left">📍<
                      </div>
                      <div></div>
                        <p className="text-left">Address</p>
                        <p className="text-left">123 Tech Street, Innovation City, IC 12345</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-left"></div>
                  <h2 className="text-left">Business Hours</h2>
                  <div className="text-left">
        <div className="text-left"></div>
                      <span className="text-left">Monday - Friday<
                      <span className="text-left">9:00 AM - 6:00 PM<
                    </div>
                    <div className="text-left"></div>
                      <span className="text-left">Saturday<
                      <span className="text-left">10:00 AM - 4:00 PM<
                    </div>
                    <div className="text-left"></div>
                      <span className="text-left">Sunday<
                      <span className="text-left">Closed<
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-left"></div>
                <h2 className="text-left">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="text-left">
                  <div className="text-left"></div>
                    <div></div>
                      <label htmlFor="name" className="text-left">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="text-left"
                        placeholder="Your full name"
                      />
                    </div>
                    <div></div>
                      <label htmlFor="email" className="text-left">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="text-left"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div></div>
                    <label htmlFor="company" className="text-left">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="text-left"
                      placeholder="Your company name"
                    />
                  </div>
                  <div></div>
                    <label htmlFor="message" className="text-left">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="text-left"
                      placeholder="Tell us about your project or how we can help..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="text-left"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* FAQ Section */}
        <section className="text-left"></section>
          <div className="text-left">
        <div className="text-left"></div>
              <h2 className="text-left">
                Frequently Asked <span className="text-left">Questions<
              </h2>
            </div>
            <div className="text-left">
        <div className="text-left"></div>
                <h3 className="text-left">How quickly can you start my project?</h3>
                <p className="text-left"></p>
                  We typically begin new projects within 1-2 weeks of contract signing.
                  The exact timeline depends on project complexity and current workload.
                </p>
              </div>
              <div className="text-left"></div>
                <h3 className="text-left">Do you provide ongoing support?</h3>
                <p className="text-left"></p>
                  Yes, all our plans include ongoing support and maintenance.
                  We offer different support levels based on your chosen plan.
                </p>
              </div>
              <div className="text-left"></div>
                <h3 className="text-left">Can you work with our existing systems?</h3>
                <p className="text-left"></p>
                  Absolutely! We specialize in integrating with existing systems and can work
                  with your current technology stack or help you migrate to new solutions.
                </p>
              </div>
              <div className="text-left"></div>
                <h3 className="text-left">What's your development process?</h3>
                <p className="text-left"></p>
                  We follow an agile development methodology with regular updates,
                  testing; and feedback cycles to ensure your project meets your expectations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
})
import React; { useState } from 'react'' import Head from 'next/head' export default function Contact() { return (<div>/* content */} const [formData, setFormData] = useState(' name: '')' email: '';' company: '';' message: '' }); const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setFormData(...formData) [e.target.name]: e.target.value }); }; const handleSubmit = async (e: React.FormEvent) => e.preventDefault(); try // Handle form submission here' alert('Message sent successfully!'),' setFormData({name: '', email: '') company: ''} message: '' }); } catch (err) ' alert('Failed to send message. Please try again.'); } }; return (<div> <div></div> <div></div> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with Zion Tech Group for technology solutions, web development, mobile apps, AI integration, and cloud services." /> <meta name="viewport" content="width=device-width) initial-scale=1" /> <link rel="icon" href="/favicon.ico" /> </Head> <div></div> {/* Hero Section */} <section></section> <div></div> <div></div> <div></div> <h1 className="text-left" > Get In <span className="text-left" >Touch< </h1> <p></p> Ready to transform your business with cutting-edge technology? ' Let's discuss how we can help you achieve your goals. </p> </div> </div> </section> {/* Contact Form Section */} <section></section> <div></div> <div></div> <div></div> <div></div> <h2 className="text-left" >Contact Information</h2> <div></div> <div></div> <div></div> <span className="text-left" >📧< </div> <div></div> <p className="text-left" >Email</p> <p className="text-left" >contact@ziontechgroup.com</p> </div> </div> <div></div> <div></div> <span className="text-left" >📞< </div> <div></div> <p className="text-left" >Phone</p> <p className="text-left" >+1 (555) 123-4567</p> </div> </div> <div></div> <div></div> <span className="text-left" >📍< </div> <div></div> <p className="text-left" >Address</p> <p className="text-left" >123 Tech Street, Innovation City, IC 12345</p> </div> </div> </div> </div> <div></div> <h2 className="text-left" >Business Hours</h2> <div></div> <div></div> <span className="text-left" >Monday - Friday< <span className="text-left" >9:00 AM - 6:00 PM< </div> <div></div> <span className="text-left" >Saturday< <span className="text-left" >10:00 AM - 4:00 PM< </div> <div></div> <span className="text-left" >Sunday< <span className="text-left" >Closed< </div> </div> </div> </div> <div></div> <h2 className="text-left" >Send us a Message</h2> <form onSubmit={handleSubmit} className="text-left" > <div></div> <div></div> <label htmlFor="name" className="text-left" > Full Name * </label> <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="text-left" placeholder="Your full name" /> </div> <div></div> <label htmlFor="email" className="text-left" > Email Address * </label> <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="text-left" placeholder="your@email.com" /> </div> </div> <div></div> <label htmlFor="company" className="text-left" > Company </label> <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="text-left" placeholder="Your company name" /> </div> <div></div> <label htmlFor="message" className="text-left" > Message * </label> <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="text-left" placeholder="Tell us about your project or how we can help..." /> </div> <button type="submit" className="text-left" > Send Message </button> </form> </div> </div> </div> </section> {/* FAQ Section */} <section></section> <div></div> <div></div> <h2 className="text-left" > Frequently Asked <span className="text-left" >Questions< </h2> </div> <div></div> <div></div> <h3 className="text-left" >How quickly can you start my project?</h3> <p></p> We typically begin new projects within 1-2 weeks of contract signing. The exact timeline depends on project complexity and current workload. </p> </div> <div></div> <h3 className="text-left" >Do you provide ongoing support?</h3> <p></p> Yes, all our plans include ongoing support and maintenance. We offer different support levels based on your chosen plan. </p> </div> <div></div> <h3 className="text-left" >Can you work with our existing systems?</h3> <p></p> Absolutely! We specialize in integrating with existing systems and can work with your current technology stack or help you migrate to new solutions. </p> </div> <div></div>' <h3 className="text-left" >What's your development process?</h3> <p></p> We follow an agile development methodology with regular updates, testing; and feedback cycles to ensure your project meets your expectations. </p> </div> </div> </div> </section> </div> </> ); })'