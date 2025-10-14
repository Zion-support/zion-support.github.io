import React from 'react';
import { Brain, Zap, Shield, Globe } from 'lucide-react';

interface LoadingProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Loading: React.FC<LoadingProps> = ({ 
  message = "Loading...", 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const iconSizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
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
    <div 
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center"
      role="status"
      aria-live="polite"
      aria-label="Loading content"
    >
      <div className="text-center">
        {/* Animated Icon */}
        <div className={`${sizeClasses[size]} mx-auto mb-6 relative`}>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full animate-pulse"></div>
          <div className="relative bg-slate-900 rounded-full flex items-center justify-center h-full w-full">
            <CurrentIcon className={`${iconSizeClasses[size]} text-cyan-400 animate-spin`} />
          </div>
        </div>
      </section>;
      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600">;
        <div className="max-w-4xl mx-auto text-center">;
          <h2 className="text-3xl font-bold text-white mb-6">;
            Ready to Get Started?;
          </h2>;
          <p className="text-xl text-blue-100 mb-8">;
            Let's discuss how our loading';
            services can help you achieve your goals.;
          </p>;
          <a>
            href="/contact";
            className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors";
          >;
            Get Started Today;
          </a>;
        </div>
      </section>;
    </div>
  );
};

      { /* CTA Section */ }"""
      <section className="py-16 px-4 bg-blue-600">"""
        <div className=max-w-4xl mx-auto text-center></div>
          <h2 className="text-3xl font-bold text-white mb-6">""

            Ready to Get Started?;
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s discuss how our loading 
            services can help you achieve your goals.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get Started Today;
          </a>
        </div>
      </section>
    </div>
  )
}
                We provide comprehensive loading
                solutions tailored to your specific needs and requirements.</p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Custom solutions</li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Expert consultation</li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Ongoing support</li></ul></div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Get Started</h3>
              <p className="mb-6">
                Ready to transform your business with our loading services?</p>
              <a
                href="/contact"
                className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
                Contact Us</a></div></div></div></section>{/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our loading'
            services can help you achieve your goals.</p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
            Get Started Today</a></div></section></div>
export default Loading
