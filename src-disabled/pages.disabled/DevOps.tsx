import React from 'react';
import { Link } from 'react-router-dom';
const DevOps: React.FC = () => {,
  const services = [,
    {

  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50">"
      {/* Hero Section */}

          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">"
            <Link to="/contact""
              className="bg-white text-teal-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-2xl"" />,
              Get DevOps Assessment
            </Link>
            <Link to="/pricing""
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-teal-600 transition-all duration-300 font-semibold text-lg"" />,
              View Pricing
            </Link>
          </div>
        </div>
      </div>
      {/* Services Section */}

          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">"
            {services.map((service, index) => (

                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">"
                    <div>

                    </div>
                    <Link to="/contact""
                      className="bg-gradient-to-r from-teal-500 to-green-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"" />,
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Benefits Section */}

          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">"
            {benefits.map((benefit, index) => (

              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Tools Section */}

          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">"
            {tools.map((tool, index) => (

              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Process Section */}

          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">"
            <div className="text-center">"
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">"
                <span className="text-2xl font-bold text-teal-600">1</span>"
              </div>

            </div>
            <div className="text-center">"
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">"
                <span className="text-2xl font-bold text-green-600">2</span>"
              </div>

            </div>
            <div className="text-center">"
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">"
                <span className="text-2xl font-bold text-emerald-600">3</span>"
              </div>

            </div>
            <div className="text-center">"
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">"
                <span className="text-2xl font-bold text-lime-600">4</span>"
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* CTA Section */}

          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">"
            <Link to="/contact""
              className="bg-white text-teal-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-2xl"" />,
              Get Free Assessment
            </Link>
            <Link to="/pricing""
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-teal-600 transition-all duration-300 font-semibold text-lg"" />,
              View DevOps Packages
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevOps;