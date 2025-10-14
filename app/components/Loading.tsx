import React from 'react';
import { Brain, Zap, Shield, Globe } from 'lucide-react;
interface LoadingProps {
  message?: string'
  size?: 'sm' | 'md' | 'lg';
}

const Loading: React.FC<LoadingProps> = ({ 
  message = "Loading...", '
  size = 'md' 
}) => {
  const sizeClasses = {'
    sm: 'w-8 h-8','
    md: 'w-12 h-12','
    lg: 'w-16 h-16'
  };

  const iconSizeClasses = {'
    sm: 'w-4 h-4','
    md: 'w-6 h-6','
    lg: 'w-8 h-8'
  };

  const icons = [Brain, Zap, Shield, Globe];
  const [currentIcon, setCurrentIcon] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % icons.length);
    }, 800); // Faster animation for better UX

    return () => clearInterval(interval);
  }, []);

  const CurrentIcon = icons[currentIcon];

  return (
    
    <div>
    <div />
        {/* Animated Icon */}
        <div>
    <div />
          <div>
    <CurrentIcon />
          </div>
        </div>
      </section>;
            Ready to Get Started?;
          </h2>;
          <p className="text-xl text-blue-100 mb-8">'
            Let's discuss how our loading';
            services can help you achieve your goals.;
          </p>;
          <a />
            href="/contact";
            className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">;
            Get Started Today;
          </a>;
        </div>
      </section>;
    </div>
  );
};

      { /* CTA Section */ }'';
      <section className="py-16 px-4 bg-blue-600'>';">
    <h2 className="text-3xl font-bold text-white mb-6'>';

            Ready to Get Started?;
          </h2>
          <p />
            Let&apos;s discuss how our loading 
            services can help you achieve your goals.
          </p>
          <a />
            Get Started Today;
          </a>
        </div>
      </section>
    </div>
  )
}
                We provide comprehensive loading
                solutions tailored to your specific needs and requirements.</p>
              <ul />
                <li />
                  <span />
                  Custom solutions</li>
                <li />
                  <span />
                  Expert consultation</li>
                <li />
                  <span />
                  Ongoing support</li></ul></div>
            <div>
    <h3 className="text-2xl font-bold mb-4">Get Started</h3>
              <p />
                Ready to transform your business with our loading services?</p>
              <a />
                Contact Us</a></div>
        </div>
      </div>
      </section>{/* CTA Section */}
      <section>
        <div>
    <h2 />
            Ready to Get Started?</h2>
          <p />'
            Let's discuss how our loading'
            services can help you achieve your goals.</p>
          <a />
            Get Started Today</a></div>
      </section></div>
export default Loading
'