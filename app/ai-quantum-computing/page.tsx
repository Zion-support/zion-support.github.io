'use client';
import React from 'react';
import {Helmet } from 'react-helmet-async';
import {CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';
const PagePage: React.FC = () => {const features = []
    {}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced page solutions.
              Powered by cutting-edge AI technology and industry expertise.
            </p>
          </div>
        </div>
      </section>
      {/* Features Section */}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our page solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our page solutions for your business.
            </p>
          </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
          </div>
        </div>
      </section>
    </div>
  );
};
export default PagePage;