import React from 'react';
import Head from 'next/head';
import Link from 'next/link'];

  const cookieDetails = [
    {
      name: '_ga',
      purpose: 'Google Analytics - Used to distinguish users',
      duration: '2 years',
      type: 'Analytics' }, {
      name: '_gid',
      purpose: 'Google Analytics - Used to distinguish users',
      duration: '24 hours',
      type: 'Analytics' }, {
      name: '_gat',
      purpose: 'Google Analytics - Used to throttle request rate',
      duration: '1 minute',
      type: 'Analytics' }, {
      name: 'session_id',
      purpose: 'Maintains user session state',
      duration: 'Session',
      type: 'Essential' }, {
      name: 'user_preferences',
      purpose: 'Stores user interface preferences',
      duration: '1 year',
      type: 'Functional' }, {
      name: 'language',
      purpose: 'Stores user language preference',
      duration: '1 year',
      type: 'Functional' } ];


export default function CookiePolicy() {
  return (
    <>
      <SEO'
        title="Cookie Policy - Zion Tech Group""
        description="Learn about how Zion Tech Group uses cookies and similar technologies to enhance your browsing experience.""
        keywords="cookie policy, privacy, data protection, cookies, tracking"
      />
      <Head>
        <title>Cookie Policy - Zion Tech Group</title>

          </div>
        </section>

        {/* What Are Cookies Section */}
        <section className="py-16 bg-white">

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Cookies Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Types of Cookies We Use
              </h2>
              <p className="text-lg text-gray-600">
                We use different types of cookies for various purposes
              </p>
            </div>

                  </div>
                  <p className="text-gray-600 mb-4">{cookie.description}</p>
                  <p className="text-gray-600 mb-4">{cookie.purpose}</p>
                  <div>

                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cookie Details Table */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Cookie Details
              </h2>
              <p className="text-lg text-gray-600">
                Detailed information about the cookies we use
              </p>
            </div>


            </div>
          </div>
        </section>



              <div className="space-y-8">
                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Browser Settings
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Most web browsers allow you to control cookies through their
                    settings preferences. You can set your browser to refuse
                    cookies or delete certain cookies.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <AlertCircle className="h-5 w-5 text-yellow-400" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-yellow-700">
                          <strong>Note:</strong> If you choose to delete or
                          refuse cookies, some features of our website may not
                          function properly.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Cookie Consent
                  </h3>
                  <p className="text-gray-600 mb-4">
                    When you first visit our website, you&apos;ll see a cookie
                    consent banner. ' You can choose which types of cookies you
                    want to accept.
                  </p>
                  <p className="text-gray-600 mb-4">
                    You can change your cookie preferences at any time by
                    clicking the cookie settings link in our website footer or
                    by contacting us directly.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Third-Party Cookies
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Some cookies on our website are set by third-party services.
                    These include analytics services like Google Analytics and
                    social media platforms.
                  </p>
                  <p className="text-gray-600">
                    To manage these cookies, you can visit the respective
                    third-party websites or use browser extensions designed to
                    block tracking cookies.
                  </p>

                </div>
              </div>
            </Card>


              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Your Rights and Choices
              </h2>"
              <p className="text-gray-600 mb-4">
                You have the right to decide whether to accept or reject
                cookies. You can exercise your cookie rights by setting your
                preferences in the Cookie Consent Manager. The Cookie Consent
                Manager allows you to select which categories of cookies you
                accept or reject.
              </p>"
              <p className="text-gray-600 mb-4">
                Essential cookies cannot be rejected as they are strictly
                necessary to provide you with services.
              </p>"
              <p className="text-gray-600">
                If you choose to reject cookies, you may still use our website
                though your access to some functionality and areas of our
                website may be restricted.
              </p>
            </Card>

            {/* Contact */}"
            <Card className="p-6">"
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Contact Us
              </h2>"
              <p className="text-gray-600 mb-4">
                If you have any questions about our use of cookies or other"
                technologies, please contact us at:{' '}
              </p>'
              <div className="bg-gray-100 p-4 rounded-lg">"
                <p className="text-gray-800">
                  <strong>Email: </strong> kleber@ziontechgroup.com
                  <br />
                  <strong>Phon,
    e:</strong> +1 302 464 0950
                  <br />
                  <strong>Addres,
    s:</strong> 364 E Main St STE 1008, Middletown
                  DE 19709
                </p>

              </div>
            </Card>
          </div>

    </>

