export const metadata = { 
  title: 'Cybersecurity Services | Zion Tech Group',

  description: 'Comprehensive cybersecurity solutions including threat detection, compliance management, security audits, and incident response. Protect your business from cyber threats.'



};

export default function CybersecurityPage() {
  return (


          />
        </div>
      </section>



          />
        </div>
      </section>




          />
        </div>
      </section>

      <Pricing />

      <ContactSection />



    </div>
  );
}


function CyberServiceCard({ title, description, features, price, icon }: { 


  title: string; 
  description: string; 
  features: string[]; 
  price: string; 
  icon: string; 
}) {
  return (


    </div>
  );
}


    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-2xl font-bold text-blue-600 mb-4">{price}</div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="text-green-500 mr-2">✓</span>
            {feature}



          </li>
        ))}
      </ul>
    </div>
  );
}


function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start text-gray-600">
            <span className="text-blue-500 mr-2 mt-1">•</span>
            {detail}
          </li>
        ))}
      </ul>


    </div>
  );
}

function Pricing() {
  return (


      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan 
          name="Security Assessment" 
          price="$5k–$15k" 



        />
      </div>
    </section>
  );
}



          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950" 

        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"



      >
        Get Started
      </a>
    </div>
  );
}



  );
}