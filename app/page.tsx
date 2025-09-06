import React from 'react';
import Link from 'next/link';

interface CardProps {
  title: string;
  href: string;
  description: string;
  bullets?: string[];
  icon?: string;
}


      <div className="flex items-center mb-4">"
        {icon && <span className="text-2xl mr-3">{icon}</span>}"
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      {bullets && (
        <ul className="mt-4 space-y-2">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">{bullet}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function HomePage() {}
  return (

          >;
            Get Started;
          </Link>

          >
            View Services;
          </Link>
        </div>
      </section>


            Ready to Transform Your Business?
          </h2>"
          <p className="text-xl text-blue-100 mb-8">'
            Let's discuss how we can help you achieve your technology goals;
          </p>

        </div>
      </section>
    </div>
  );
}'"