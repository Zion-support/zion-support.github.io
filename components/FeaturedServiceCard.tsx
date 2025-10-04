import React from 'react';
import { Link } from 'react-router-dom';

interface FeaturedServiceCardProps 
  title: string;
  description: string;
  price: string;
  features: string[];
  to: string;
  popular?: boolean;
}

const FeaturedServiceCard = React.memo(function FeaturedServiceCard(
  title,
  description,
  price,
  features,
  to,
  popular = false
}: FeaturedServiceCardProps) 
  return (
    <div>
      <div></div>
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border ${popular ? 'border-blue-300 ring-2 ring-blue-100' : 'border-gray-200'} hover:border-blue-300 relative`}></div>
      {popular && (</div>
        <div className="text-left"></div>
          <span className="text-left"></span>
            Most Popular
          <
        </div>
      )}
      
      <div className="text-left"></div>
        <h3 className="text-left">{title}</h3>
        <p className="text-left">{description}</p>
        <div className="text-left">{price}</div>
      
      <ul className="text-left">
        {features.map((feature, index) => (
          <li key={index} className="text-left">
            <div className="text-left"></div>
              <svg className="text-left" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></p>
              </svg>
            </div>
            <span className="text-left">{feature}<
          </li>
        ))}
      </ul>
      
      <Link
        href={to}
        className={`block w-full text-center py-3 px-4 rounded-lg font-semibold transition-colors $
          popular
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        Learn More
      </Link>
    </div>
  );
});</div>

export default $1;
import React from 'react';' import { Link } from 'react-router-dom'; interface FeaturedServiceCardProps title: string; description: string; price: string; features: string[]; to: string; popular?: boolean; } export default function FeaturedServiceCard( title, description, price, features, to, popular = false }: FeaturedServiceCardProps) return ( <div> <div></div>' <div></div> {popular && (</div> <div></div> <span></span> Most Popular < </div> )} <div></div> <h3 className="text-left" >{title}</h3> <p className="text-left" >{description}</p> <div className="text-left" >{price}</div> <ul className="text-left" > {features.map((feature, index) => ( <li key={index} className="text-left" > <div></div> <svg className="text-left" fill="currentColor" viewBox="0 0 20 20"> <p></p> </svg> </div> <span className="text-left" >{feature}< </li> ))} </ul> <Link href={to} className={`block w-full text-center py-3 px-4 rounded-lg font-semibold transition-colors $ popular' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'' : 'bg-blue-600 text-white hover:bg-blue-700' }`} > Learn More </Link> </div> ); }</div>'
