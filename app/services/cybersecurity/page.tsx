export const metadata = { 
  title: 'Cybersecurity Services | Zion Tech Group',
};

export default function CybersecurityPage() {
  return (
          />
        </div>
      </section>

          />
        </div>
      </section>

      <Pricing />
    </div>
  );
}

  title: string; 
  description: string; 
  features: string[]; 
  price: string; 
  icon: string; 
}) {
  return (
          </li>
        ))}
      </ul>
    </div>
  );
}

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
          ]} 
        />
        <Plan 
          name="Security Implementation" 
          ]} 
        />
        <Plan 
          name="Managed Security" 
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
      >
        Get Started
      </a>
    </div>
  );
}

        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Email Us
          </a>
        </div>
  );
}