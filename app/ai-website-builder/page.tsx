'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIWebsiteBuilderPage: React.FC = () => {
  const features = [
              </a>
            </div>
          </div>
        </div>
      </section>

          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
          </div>
        </div>
      </section>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIWebsiteBuilderPage;