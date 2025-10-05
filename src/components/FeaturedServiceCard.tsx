import React from 'react';

constFeaturedServiceCard: React.FC = () => {
  constservices = [
    {
      icon: '🧠'
      title: 'AIServices'
      description: 'Leverageartificialintelligence toautomateprocesses andgaininsights'
      features: [
        'MachineLearning'
        'NLP'
        'ComputerVision'
        'PredictiveAnalytics'
      ]
      link: '/services/ai-services'
    }
    {
      icon: '🚀'
      title: 'MicroSaaS'
      description: 'Scalablesoftwaresolutions thataddressspecific businessneeds'
      features: [
        'CustomApps'
        'APIDevelopment'
        'DatabaseSolutions'
        'Integration'
      ]
      link: '/services/micro-saas'
    }
    {
      icon: '💻'
      title: 'ITServices'
      description: 'ComprehensiveITsolutions tomodernizeyour infrastructure'
      features: ['CloudMigration''DevOps''Cybersecurity''SystemAdmin']
      link: '/services/it-services'
    }
  ]; return (
    <divclassName = 'py-16bg-gray-50'>
      <divclassName='max-w-7xlmx-autopx-4sm: px-6lg:px-8'>
        <divclassName='text-centermb-12'>
          <h2className='text-3xlfont-boldtext-gray-900mb-4'>
            OurFeaturedServices
          </h2>
          <pclassName='text-xltext-gray-600'>
            Comprehensivesolutionsfor modernbusinesses
          </p>
        </div>
        <divclassName='gridgrid-cols-1md:grid-cols-3gap-8'>
          { services.map((serviceindex) = > (
            <divkey = { index  }className = 'bg-whitep-8rounded-xlshadow-lgborderhover: shadow-xltransition-shadow'
            >
              <divclassName='text-5xlmb-4'>{service.icon}</div>
              <h3className = 'text-2xlfont-boldmb-4'>{service.title}</h3>
              <pclassName='text-gray-600mb-6'>{service.description}</p>
              <ulclassName='space-y-2mb-6'>
                { service.features.map((featurefeatureIndex) = > (
                  <likey = { featureIndex  }className = 'flexitems-centertext-gray-600'
                  >
                    <spanclassName='text-green-500mr-2'>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <ahref = { service.link }className = 'w-fullbg-blue-600text-whitepy-3px-6rounded-lghover: bg-blue-700transition-colorsfont-semiboldtext-centerblock'
              >
                LearnMore
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

exportdefaultFeaturedServiceCard;
