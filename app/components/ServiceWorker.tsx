'use client';
                          {benefit}
                        </li>;
                      ))}
                    </ul>;
                  )}
                </div>;
              ))}
import { useEffect } from 'react';

const ServiceWorker: React.FC = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }, []);

  return null;
};

export default ServiceWorker;
>>>>>>> cursor/analyze-improve-and-deploy-application-5431
